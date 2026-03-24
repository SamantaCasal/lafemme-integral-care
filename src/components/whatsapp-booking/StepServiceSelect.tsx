import { useState } from "react";
import {
  bookableServices,
  serviceCategoryOptions,
  type BookableService,
} from "@/data/whatsapp-booking";
import {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
} from "lucide-react";
import type { WizardData } from "./WhatsAppWizard";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
};

interface Props {
  data: WizardData;
  update: (partial: Partial<WizardData>) => void;
}

const StepServiceSelect = ({ data, update }: Props) => {
  const [filter, setFilter] = useState("todas");

  const filtered =
    filter === "todas"
      ? bookableServices
      : bookableServices.filter((s) => s.category === filter);

  const handleSelect = (service: BookableService) => {
    update({
      serviceId: service.id,
      professionalId: null,
      selectedSlots: [],
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
          ¿Qué servicio necesitás?
        </h2>
        <p className="text-sm text-muted-foreground">
          Elegí la especialidad que te interesa.
        </p>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {serviceCategoryOptions.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === cat.value
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground hover:bg-primary/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Service cards */}
      <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-1">
        {filtered.map((service) => {
          const Icon = iconMap[service.icon] || Heart;
          const isSelected = data.serviceId === service.id;
          return (
            <button
              key={service.id}
              onClick={() => handleSelect(service)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 space-y-1.5 ${
                isSelected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? "bg-primary text-primary-foreground" : "bg-accent text-primary"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm text-foreground leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepServiceSelect;
