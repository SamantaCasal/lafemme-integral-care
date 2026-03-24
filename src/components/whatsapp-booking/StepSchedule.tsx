import {
  getServiceAvailability,
  dayLabels,
  type BookableService,
} from "@/data/whatsapp-booking";
import type { WizardData } from "./WhatsAppWizard";

interface Props {
  service: BookableService;
  professionalId: string | null;
  data: WizardData;
  update: (partial: Partial<WizardData>) => void;
}

const StepSchedule = ({ service, professionalId, data, update }: Props) => {
  const availableSlots = getServiceAvailability(service, professionalId);

  const toggleSlot = (key: string) => {
    const next = data.selectedSlots.includes(key)
      ? data.selectedSlots.filter((s) => s !== key)
      : [...data.selectedSlots, key];
    update({ selectedSlots: next });
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
          ¿Qué días y franjas te sirven?
        </h2>
        <p className="text-sm text-muted-foreground">
          Elegí uno o varios horarios de preferencia. La secretaria te confirmará la disponibilidad.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {availableSlots.map((slot) => {
          const key = `${slot.day}-${slot.shift}`;
          const label = `${dayLabels[slot.day]} ${slot.shift}`;
          const isSelected = data.selectedSlots.includes(key);
          return (
            <button
              key={key}
              onClick={() => toggleSlot(key)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-accent text-accent-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {data.selectedSlots.length > 0 && (
        <p className="text-xs text-muted-foreground">
          {data.selectedSlots.length} franja{data.selectedSlots.length > 1 ? "s" : ""} seleccionada{data.selectedSlots.length > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
};

export default StepSchedule;
