import type { WizardData } from "./WhatsAppWizard";

interface Props {
  data: WizardData;
  update: (partial: Partial<WizardData>) => void;
}

const ToggleOption = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      selected
        ? "bg-primary text-primary-foreground shadow-sm"
        : "bg-accent text-accent-foreground hover:bg-primary/10 border border-border"
    }`}
  >
    {label}
  </button>
);

const StepBabyNursery = ({ data, update }: Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
          Información adicional
        </h2>
        <p className="text-sm text-muted-foreground">
          Contanos si vas a venir con tu bebé.
        </p>
      </div>

      {/* Baby question */}
      <div className="space-y-3">
        <p className="font-medium text-foreground">¿Vas a asistir con tu bebé?</p>
        <div className="flex gap-3">
          <ToggleOption
            label="Sí"
            selected={data.withBaby === "si"}
            onClick={() =>
              update({ withBaby: "si", nursery: null })
            }
          />
          <ToggleOption
            label="No"
            selected={data.withBaby === "no"}
            onClick={() =>
              update({ withBaby: "no", nursery: "no-aplica" })
            }
          />
        </div>
      </div>

      {/* Nursery question (only if withBaby === "si") */}
      {data.withBaby === "si" && (
        <div className="space-y-3 animate-fade-up">
          <p className="font-medium text-foreground">¿Querés servicio de nursery?</p>
          <div className="flex gap-3">
            <ToggleOption
              label="Sí"
              selected={data.nursery === "si"}
              onClick={() => update({ nursery: "si" })}
            />
            <ToggleOption
              label="No"
              selected={data.nursery === "no"}
              onClick={() => update({ nursery: "no" })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StepBabyNursery;
