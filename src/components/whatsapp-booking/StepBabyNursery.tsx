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

      {/* Comentarios */}
      <div className="space-y-2">
        <label htmlFor="comments" className="font-medium text-foreground text-sm">
          Comentarios u observaciones <span className="text-muted-foreground font-normal">(opcional)</span>
        </label>
        <textarea
          id="comments"
          value={data.comments}
          onChange={(e) => update({ comments: e.target.value.slice(0, 500) })}
          placeholder="Ej: tengo preferencia por turno a las 9, es mi primera consulta, etc."
          rows={3}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
        <p className="text-xs text-muted-foreground text-right">{data.comments.length}/500</p>
      </div>
    </div>
  );
};

export default StepBabyNursery;
