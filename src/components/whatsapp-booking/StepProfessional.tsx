import { getProfessionalById, type BookableService } from "@/data/whatsapp-booking";
import { User, Users } from "lucide-react";
import type { WizardData } from "./WhatsAppWizard";

interface Props {
  service: BookableService;
  data: WizardData;
  update: (partial: Partial<WizardData>) => void;
}

const StepProfessional = ({ service, data, update }: Props) => {
  const options = [
    { id: "sin-preferencia", name: "Sin preferencia", icon: Users },
    ...service.professionalIds.map((pid) => {
      const prof = getProfessionalById(pid);
      return { id: pid, name: prof?.name || pid, icon: User };
    }),
  ];

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
          ¿Con qué profesional querés atenderte?
        </h2>
        <p className="text-sm text-muted-foreground">
          Podés elegir una profesional o dejarlo sin preferencia.
        </p>
      </div>

      <div className="grid gap-3">
        {options.map((opt) => {
          const isSelected = data.professionalId === opt.id;
          const Icon = opt.icon;
          return (
            <button
              key={opt.id}
              onClick={() => update({ professionalId: opt.id, selectedSlots: [] })}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                isSelected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? "bg-primary text-primary-foreground" : "bg-accent text-primary"
                }`}
              >
                <Icon size={20} />
              </div>
              <span className="font-medium text-foreground">{opt.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepProfessional;
