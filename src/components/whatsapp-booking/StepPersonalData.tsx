import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { WizardData } from "./WhatsAppWizard";

interface Props {
  data: WizardData;
  update: (partial: Partial<WizardData>) => void;
}

const StepPersonalData = ({ data, update }: Props) => {
  const emailValid = data.email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
          ¿Cómo te llamás?
        </h2>
        <p className="text-sm text-muted-foreground">
          Completá tus datos para que podamos coordinar tu turno.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="wizard-name">Nombre y apellido *</Label>
          <Input
            id="wizard-name"
            placeholder="Ej: María González"
            value={data.name}
            onChange={(e) => update({ name: e.target.value })}
            autoFocus
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="wizard-email">Correo electrónico *</Label>
          <Input
            id="wizard-email"
            type="email"
            placeholder="maria@ejemplo.com"
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
          />
          {!emailValid && (
            <p className="text-xs text-destructive">Ingresá un email válido.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepPersonalData;
