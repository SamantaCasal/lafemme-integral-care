import { useLanguage } from "@/i18n/LanguageContext";
import { BookingFormData } from "@/types/booking";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { Calendar, Clock, User, FileText, Receipt } from "lucide-react";

interface Props {
  form: BookingFormData;
  compact?: boolean;
}

const formatPrice = (guaranies: number) =>
  `Gs. ${guaranies.toLocaleString("es-PY")}`;

const BookingSummary = ({ form, compact }: Props) => {
  const { t, lang } = useLanguage();
  const locale = lang === "es" ? es : enUS;

  const serviceName = form.service
    ? lang === "es"
      ? form.service.name_es
      : form.service.name_en
    : null;

  return (
    <div className={`rounded-xl border border-border bg-card p-5 ${compact ? "" : "shadow-sm"}`}>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
        {t("booking.summary_title")}
      </h3>

      <div className="space-y-3 text-sm">
        {/* Service */}
        <div className="flex items-start gap-2">
          <FileText size={16} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-muted-foreground text-xs">{t("booking.summary_service")}</p>
            <p className="font-medium text-foreground">
              {serviceName || <span className="text-muted-foreground italic">{t("booking.not_selected")}</span>}
            </p>
            {form.service && (
              <p className="text-primary font-semibold mt-0.5">
                {formatPrice(form.service.price_guaranies)}
              </p>
            )}
          </div>
        </div>

        {/* Professional */}
        <div className="flex items-start gap-2">
          <User size={16} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-muted-foreground text-xs">{t("booking.summary_professional")}</p>
            <p className="font-medium text-foreground">
              {form.professional?.name || (
                <span className="text-muted-foreground italic">{t("booking.not_selected")}</span>
              )}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-2">
          <Calendar size={16} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-muted-foreground text-xs">{t("booking.summary_date")}</p>
            <p className="font-medium text-foreground">
              {form.date ? (
                format(form.date, "EEEE d 'de' MMMM, yyyy", { locale })
              ) : (
                <span className="text-muted-foreground italic">{t("booking.not_selected")}</span>
              )}
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-2">
          <Clock size={16} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-muted-foreground text-xs">{t("booking.summary_time")}</p>
            <p className="font-medium text-foreground">
              {form.time || (
                <span className="text-muted-foreground italic">{t("booking.not_selected")}</span>
              )}
            </p>
            {form.service && (
              <p className="text-muted-foreground text-xs">
                {form.service.duration_minutes} min · {t("booking.presencial")}
              </p>
            )}
          </div>
        </div>

        {/* Invoice */}
        {form.needsInvoice && (
          <div className="flex items-start gap-2">
            <Receipt size={16} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-muted-foreground text-xs">{t("booking.summary_invoice")}</p>
              <p className="font-medium text-foreground">
                RUC: {form.invoiceRuc || "—"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Total */}
      {form.service && (
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">Total</span>
          <span className="text-lg font-bold text-primary">
            {formatPrice(form.service.price_guaranies)}
          </span>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
