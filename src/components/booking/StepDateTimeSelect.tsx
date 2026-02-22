import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";
import { BookingFormData, AvailabilityTemplate, AvailabilityException } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format, addDays, startOfDay, isSameDay, getDay, parse, addMinutes } from "date-fns";
import { es, enUS } from "date-fns/locale";

interface Props {
  form: BookingFormData;
  updateForm: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepDateTimeSelect = ({ form, updateForm, onNext, onBack }: Props) => {
  const { t, lang } = useLanguage();
  const locale = lang === "es" ? es : enUS;
  const [templates, setTemplates] = useState<AvailabilityTemplate[]>([]);
  const [exceptions, setExceptions] = useState<AvailabilityException[]>([]);
  const [bookedSlots, setBookedSlots] = useState<{ booking_date: string; booking_time: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!form.professional) return;
    const load = async () => {
      setLoading(true);
      const [tRes, eRes, bRes] = await Promise.all([
        supabase
          .from("availability_templates")
          .select("*")
          .eq("professional_id", form.professional!.id)
          .eq("is_active", true),
        supabase
          .from("availability_exceptions")
          .select("*")
          .eq("professional_id", form.professional!.id),
        supabase
          .from("bookings")
          .select("booking_date, booking_time")
          .eq("professional_id", form.professional!.id)
          .eq("status", "confirmed"),
      ]);
      setTemplates((tRes.data as AvailabilityTemplate[]) || []);
      setExceptions((eRes.data as AvailabilityException[]) || []);
      setBookedSlots((bRes.data as any[]) || []);
      setLoading(false);
    };
    load();
  }, [form.professional?.id]);

  // Days of week that have templates
  const availableDays = useMemo(() => new Set(templates.map((t) => t.day_of_week)), [templates]);

  const isDateDisabled = (date: Date) => {
    const today = startOfDay(new Date());
    if (date < today) return true;
    // Max 60 days ahead
    if (date > addDays(today, 60)) return true;
    const dow = getDay(date);
    if (!availableDays.has(dow)) return true;
    // Check exceptions
    const dateStr = format(date, "yyyy-MM-dd");
    const blocked = exceptions.find((e) => e.exception_date === dateStr && e.is_blocked);
    if (blocked) return true;
    return false;
  };

  // Generate time slots for selected date
  const timeSlots = useMemo(() => {
    if (!form.date || !form.professional || !form.service) return [];
    const dow = getDay(form.date);
    const dayTemplates = templates.filter((t) => t.day_of_week === dow);
    const dateStr = format(form.date, "yyyy-MM-dd");

    // Check for custom hours on this date
    const customException = exceptions.find(
      (e) => e.exception_date === dateStr && !e.is_blocked && e.start_time && e.end_time
    );

    const slots: string[] = [];
    const duration = form.service.duration_minutes;

    const generateSlots = (startStr: string, endStr: string, slotDuration: number) => {
      const start = parse(startStr, "HH:mm:ss", new Date());
      const end = parse(endStr, "HH:mm:ss", new Date());
      let current = start;
      while (addMinutes(current, duration) <= end) {
        const timeStr = format(current, "HH:mm");
        // Check if slot is already booked
        const isBooked = bookedSlots.some(
          (b) => b.booking_date === dateStr && b.booking_time === timeStr + ":00"
        );
        if (!isBooked) {
          slots.push(timeStr);
        }
        current = addMinutes(current, slotDuration);
      }
    };

    if (customException) {
      generateSlots(customException.start_time!, customException.end_time!, duration);
    } else {
      dayTemplates.forEach((tmpl) => {
        generateSlots(tmpl.start_time, tmpl.end_time, tmpl.slot_duration_minutes);
      });
    }

    return slots;
  }, [form.date, templates, exceptions, bookedSlots, form.service?.duration_minutes]);

  // Group time slots
  const morningSlots = timeSlots.filter((s) => parseInt(s.split(":")[0]) < 12);
  const afternoonSlots = timeSlots.filter((s) => parseInt(s.split(":")[0]) >= 12);

  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
        {t("booking.step3_title")}
      </h2>
      <p className="text-muted-foreground mb-1">{t("booking.step3_desc")}</p>
      <p className="text-xs text-muted-foreground mb-6">{t("booking.timezone_py")}</p>

      {loading ? (
        <div className="h-72 rounded-xl bg-muted animate-pulse" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Calendar */}
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={form.date || undefined}
              onSelect={(d) => d && updateForm({ date: d, time: null })}
              disabled={isDateDisabled}
              locale={locale}
              className="rounded-xl border border-border p-3 pointer-events-auto"
              fromDate={new Date()}
              toDate={addDays(new Date(), 60)}
            />
          </div>

          {/* Time slots */}
          <div>
            {form.date ? (
              timeSlots.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-sm">{t("booking.no_slots")}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {morningSlots.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">{t("booking.morning")}</p>
                      <div className="flex flex-wrap gap-2">
                        {morningSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => updateForm({ time: slot })}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              form.time === slot
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground hover:bg-accent"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {afternoonSlots.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">{t("booking.afternoon")}</p>
                      <div className="flex flex-wrap gap-2">
                        {afternoonSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => updateForm({ time: slot })}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              form.time === slot
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground hover:bg-accent"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground text-sm">{t("booking.select_date_first")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onBack} size="lg">
          {t("booking.back")}
        </Button>
        <Button onClick={onNext} disabled={!form.date || !form.time} size="lg">
          {t("booking.continue")}
        </Button>
      </div>
    </div>
  );
};

export default StepDateTimeSelect;
