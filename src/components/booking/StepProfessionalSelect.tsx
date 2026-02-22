import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";
import { Professional, BookingFormData } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Check, User } from "lucide-react";

interface Props {
  form: BookingFormData;
  updateForm: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepProfessionalSelect = ({ form, updateForm, onNext, onBack }: Props) => {
  const { t, lang } = useLanguage();
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!form.service) return;
    const load = async () => {
      setLoading(true);
      // Get professional IDs for this service
      const { data: links } = await supabase
        .from("professional_services")
        .select("professional_id")
        .eq("service_id", form.service!.id);

      if (!links || links.length === 0) {
        setProfessionals([]);
        setLoading(false);
        return;
      }

      const ids = links.map((l: any) => l.professional_id);
      const { data: profs } = await supabase
        .from("professionals")
        .select("*")
        .eq("is_active", true)
        .in("id", ids)
        .order("sort_order");

      const result = (profs as Professional[]) || [];
      setProfessionals(result);

      // Auto-select if only one
      if (result.length === 1 && !form.professional) {
        updateForm({ professional: result[0], date: null, time: null });
      }
      setLoading(false);
    };
    load();
  }, [form.service?.id]);

  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
        {t("booking.step2_title")}
      </h2>
      <p className="text-muted-foreground mb-6">{t("booking.step2_desc")}</p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-28 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : professionals.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">{t("booking.no_professionals")}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {professionals.map((prof) => {
            const selected = form.professional?.id === prof.id;
            const role = lang === "es" ? prof.role_es : prof.role_en;
            return (
              <button
                key={prof.id}
                onClick={() => updateForm({ professional: prof, date: null, time: null })}
                className={`text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${
                  selected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <User size={20} className="text-secondary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground text-sm truncate">{prof.name}</h3>
                    {selected && <Check size={18} className="text-primary shrink-0 ml-2" />}
                  </div>
                  <p className="text-muted-foreground text-xs mt-0.5">{role}</p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onBack} size="lg">
          {t("booking.back")}
        </Button>
        <Button onClick={onNext} disabled={!form.professional} size="lg">
          {t("booking.continue")}
        </Button>
      </div>
    </div>
  );
};

export default StepProfessionalSelect;
