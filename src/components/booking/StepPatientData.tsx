import { useLanguage } from "@/i18n/LanguageContext";
import { BookingFormData } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  form: BookingFormData;
  updateForm: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepPatientData = ({ form, updateForm, onNext, onBack }: Props) => {
  const { t } = useLanguage();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.patientName.trim()) errs.patientName = t("booking.error_required");
    if (!form.patientEmail.trim()) {
      errs.patientEmail = t("booking.error_required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.patientEmail)) {
      errs.patientEmail = t("booking.error_email");
    }
    if (!form.patientPhone.trim()) {
      errs.patientPhone = t("booking.error_required");
    } else if (form.patientPhone.replace(/\D/g, "").length < 8) {
      errs.patientPhone = t("booking.error_phone");
    }
    if (form.needsInvoice) {
      if (!form.invoiceRuc.trim()) errs.invoiceRuc = t("booking.error_required");
      if (!form.invoiceName.trim()) errs.invoiceName = t("booking.error_required");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
        {t("booking.step4_title")}
      </h2>
      <p className="text-muted-foreground mb-6">{t("booking.step4_desc")}</p>

      <div className="space-y-4 max-w-lg">
        {/* Name */}
        <div>
          <Label htmlFor="patientName">{t("booking.patient_name")} *</Label>
          <Input
            id="patientName"
            value={form.patientName}
            onChange={(e) => updateForm({ patientName: e.target.value })}
            placeholder={t("booking.patient_name_ph")}
            className="mt-1"
          />
          {errors.patientName && <p className="text-destructive text-xs mt-1">{errors.patientName}</p>}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="patientEmail">{t("booking.patient_email")} *</Label>
          <Input
            id="patientEmail"
            type="email"
            value={form.patientEmail}
            onChange={(e) => updateForm({ patientEmail: e.target.value })}
            placeholder={t("booking.patient_email_ph")}
            className="mt-1"
          />
          {errors.patientEmail && <p className="text-destructive text-xs mt-1">{errors.patientEmail}</p>}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="patientPhone">{t("booking.patient_phone")} *</Label>
          <Input
            id="patientPhone"
            type="tel"
            value={form.patientPhone}
            onChange={(e) => updateForm({ patientPhone: e.target.value })}
            placeholder="+595 981 ..."
            className="mt-1"
          />
          {errors.patientPhone && <p className="text-destructive text-xs mt-1">{errors.patientPhone}</p>}
        </div>

        {/* Notes */}
        <div>
          <Label htmlFor="patientNotes">{t("booking.patient_notes")}</Label>
          <Textarea
            id="patientNotes"
            value={form.patientNotes}
            onChange={(e) => updateForm({ patientNotes: e.target.value })}
            placeholder={t("booking.patient_notes_ph")}
            rows={3}
            className="mt-1"
          />
        </div>

        {/* Invoice toggle */}
        <div className="pt-2">
          <div className="flex items-center gap-3">
            <Switch
              id="needsInvoice"
              checked={form.needsInvoice}
              onCheckedChange={(checked) =>
                updateForm({ needsInvoice: checked, invoiceRuc: "", invoiceName: "" })
              }
            />
            <Label htmlFor="needsInvoice" className="cursor-pointer">
              {t("booking.needs_invoice")}
            </Label>
          </div>
        </div>

        {/* Invoice fields */}
        {form.needsInvoice && (
          <div className="space-y-4 pl-4 border-l-2 border-primary/20">
            <div>
              <Label htmlFor="invoiceRuc">RUC *</Label>
              <Input
                id="invoiceRuc"
                value={form.invoiceRuc}
                onChange={(e) => updateForm({ invoiceRuc: e.target.value })}
                placeholder="Ej: 12345678-9"
                className="mt-1"
              />
              {errors.invoiceRuc && <p className="text-destructive text-xs mt-1">{errors.invoiceRuc}</p>}
            </div>
            <div>
              <Label htmlFor="invoiceName">{t("booking.invoice_name")} *</Label>
              <Input
                id="invoiceName"
                value={form.invoiceName}
                onChange={(e) => updateForm({ invoiceName: e.target.value })}
                placeholder={t("booking.invoice_name_ph")}
                className="mt-1"
              />
              {errors.invoiceName && <p className="text-destructive text-xs mt-1">{errors.invoiceName}</p>}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onBack} size="lg">
          {t("booking.back")}
        </Button>
        <Button onClick={handleNext} size="lg">
          {t("booking.continue")}
        </Button>
      </div>
    </div>
  );
};

export default StepPatientData;
