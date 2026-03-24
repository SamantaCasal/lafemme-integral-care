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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.patientName.trim()) errs.patientName = "Este campo es obligatorio.";
    if (!form.patientEmail.trim()) {
      errs.patientEmail = "Este campo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.patientEmail)) {
      errs.patientEmail = "Ingresá un email válido.";
    }
    if (!form.patientPhone.trim()) {
      errs.patientPhone = "Este campo es obligatorio.";
    } else if (form.patientPhone.replace(/\D/g, "").length < 8) {
      errs.patientPhone = "Ingresá un número de celular válido.";
    }
    if (form.needsInvoice) {
      if (!form.invoiceRuc.trim()) errs.invoiceRuc = "Este campo es obligatorio.";
      if (!form.invoiceName.trim()) errs.invoiceName = "Este campo es obligatorio.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Tus datos</h2>
      <p className="text-muted-foreground mb-6">Completá tus datos para confirmar la reserva.</p>

      <div className="space-y-4 max-w-lg">
        <div>
          <Label htmlFor="patientName">Nombre y Apellidos *</Label>
          <Input id="patientName" value={form.patientName} onChange={(e) => updateForm({ patientName: e.target.value })} placeholder="Tu nombre completo" className="mt-1" />
          {errors.patientName && <p className="text-destructive text-xs mt-1">{errors.patientName}</p>}
        </div>

        <div>
          <Label htmlFor="patientEmail">Email *</Label>
          <Input id="patientEmail" type="email" value={form.patientEmail} onChange={(e) => updateForm({ patientEmail: e.target.value })} placeholder="tucorreo@email.com" className="mt-1" />
          {errors.patientEmail && <p className="text-destructive text-xs mt-1">{errors.patientEmail}</p>}
        </div>

        <div>
          <Label htmlFor="patientPhone">Celular *</Label>
          <Input id="patientPhone" type="tel" value={form.patientPhone} onChange={(e) => updateForm({ patientPhone: e.target.value })} placeholder="+595 981 ..." className="mt-1" />
          {errors.patientPhone && <p className="text-destructive text-xs mt-1">{errors.patientPhone}</p>}
        </div>

        <div>
          <Label htmlFor="patientNotes">Notas (opcional)</Label>
          <Textarea id="patientNotes" value={form.patientNotes} onChange={(e) => updateForm({ patientNotes: e.target.value })} placeholder="¿Querés contarnos algo antes de la consulta?" rows={3} className="mt-1" />
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-3">
            <Switch id="needsInvoice" checked={form.needsInvoice} onCheckedChange={(checked) => updateForm({ needsInvoice: checked, invoiceRuc: "", invoiceName: "" })} />
            <Label htmlFor="needsInvoice" className="cursor-pointer">¿Necesitás factura?</Label>
          </div>
        </div>

        {form.needsInvoice && (
          <div className="space-y-4 pl-4 border-l-2 border-primary/20">
            <div>
              <Label htmlFor="invoiceRuc">RUC *</Label>
              <Input id="invoiceRuc" value={form.invoiceRuc} onChange={(e) => updateForm({ invoiceRuc: e.target.value })} placeholder="Ej: 12345678-9" className="mt-1" />
              {errors.invoiceRuc && <p className="text-destructive text-xs mt-1">{errors.invoiceRuc}</p>}
            </div>
            <div>
              <Label htmlFor="invoiceName">Nombre y Apellidos / Razón social *</Label>
              <Input id="invoiceName" value={form.invoiceName} onChange={(e) => updateForm({ invoiceName: e.target.value })} placeholder="Nombre o razón social para la factura" className="mt-1" />
              {errors.invoiceName && <p className="text-destructive text-xs mt-1">{errors.invoiceName}</p>}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onBack} size="lg">Volver</Button>
        <Button onClick={handleNext} size="lg">Continuar</Button>
      </div>
    </div>
  );
};

export default StepPatientData;
