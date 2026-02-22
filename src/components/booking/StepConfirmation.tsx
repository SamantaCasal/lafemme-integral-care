import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";
import { BookingFormData, BookingResult } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { Pencil, Loader2 } from "lucide-react";

interface Props {
  form: BookingFormData;
  onBack: () => void;
  onEdit: (step: number) => void;
  onConfirmed: (result: BookingResult) => void;
}

const formatPrice = (g: number) => `Gs. ${g.toLocaleString("es-PY")}`;

const StepConfirmation = ({ form, onBack, onEdit, onConfirmed }: Props) => {
  const { t, lang } = useLanguage();
  const locale = lang === "es" ? es : enUS;
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const serviceName = form.service
    ? lang === "es" ? form.service.name_es : form.service.name_en
    : "";

  const handleConfirm = async () => {
    if (!form.service || !form.professional || !form.date || !form.time) return;
    setSubmitting(true);
    setError("");

    try {
      const { data, error: dbError } = await supabase
        .from("bookings")
        .insert({
          booking_number: "", // trigger will generate
          service_id: form.service.id,
          professional_id: form.professional.id,
          booking_date: format(form.date, "yyyy-MM-dd"),
          booking_time: form.time + ":00",
          duration_minutes: form.service.duration_minutes,
          price_guaranies: form.service.price_guaranies,
          patient_name: form.patientName.trim(),
          patient_email: form.patientEmail.trim(),
          patient_phone: form.patientPhone.trim(),
          patient_notes: form.patientNotes.trim() || null,
          needs_invoice: form.needsInvoice,
          invoice_ruc: form.needsInvoice ? form.invoiceRuc.trim() : null,
          invoice_name: form.needsInvoice ? form.invoiceName.trim() : null,
        } as any)
        .select()
        .single();

      if (dbError) throw dbError;
      onConfirmed(data as unknown as BookingResult);
    } catch (err: any) {
      console.error("Booking error:", err);
      setError(t("booking.error_generic"));
    } finally {
      setSubmitting(false);
    }
  };

  const Row = ({
    label,
    value,
    step,
  }: {
    label: string;
    value: string;
    step: number;
  }) => (
    <div className="flex items-start justify-between py-2.5 border-b border-border/50 last:border-0">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
      <button onClick={() => onEdit(step)} className="text-primary hover:text-primary/80 p-1">
        <Pencil size={14} />
      </button>
    </div>
  );

  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
        {t("booking.step5_title")}
      </h2>
      <p className="text-muted-foreground mb-6">{t("booking.step5_desc")}</p>

      <div className="max-w-lg rounded-xl border border-border bg-card p-5">
        <Row label={t("booking.summary_service")} value={`${serviceName} — ${formatPrice(form.service!.price_guaranies)}`} step={1} />
        <Row label={t("booking.summary_professional")} value={form.professional!.name} step={2} />
        <Row
          label={t("booking.summary_date")}
          value={`${format(form.date!, "EEEE d 'de' MMMM, yyyy", { locale })} — ${form.time}`}
          step={3}
        />
        <Row label={t("booking.duration")} value={`${form.service!.duration_minutes} min · Presencial`} step={1} />
        <Row label={t("booking.patient_email")} value={form.patientEmail} step={4} />
        <Row label={t("booking.patient_phone")} value={form.patientPhone} step={4} />
        {form.needsInvoice && (
          <Row label={t("booking.summary_invoice")} value={`RUC: ${form.invoiceRuc} — ${form.invoiceName}`} step={4} />
        )}

        {/* Total */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-border">
          <span className="font-medium text-foreground">Total</span>
          <span className="text-xl font-bold text-primary">{formatPrice(form.service!.price_guaranies)}</span>
        </div>
      </div>

      {error && (
        <p className="text-destructive text-sm mt-4">{error}</p>
      )}

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onBack} size="lg">
          {t("booking.back")}
        </Button>
        <Button onClick={handleConfirm} disabled={submitting} size="lg">
          {submitting && <Loader2 size={18} className="animate-spin" />}
          {t("booking.confirm_booking")}
        </Button>
      </div>
    </div>
  );
};

export default StepConfirmation;
