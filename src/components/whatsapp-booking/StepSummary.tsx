import { getProfessionalById, dayLabels, type BookableService } from "@/data/whatsapp-booking";
import { Pencil } from "lucide-react";
import type { WizardData } from "./WhatsAppWizard";

interface Props {
  data: WizardData;
  service: BookableService | null;
  professionalId: string | null;
  onEdit: (stepKey: string) => void;
}

const SummaryRow = ({
  label,
  value,
  editKey,
  onEdit,
}: {
  label: string;
  value: string;
  editKey: string;
  onEdit: (key: string) => void;
}) => (
  <div className="flex items-start justify-between py-3 border-b border-border last:border-b-0">
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
    <button
      onClick={() => onEdit(editKey)}
      className="shrink-0 ml-3 p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
      aria-label={`Editar ${label}`}
    >
      <Pencil size={14} />
    </button>
  </div>
);

const StepSummary = ({ data, service, professionalId, onEdit }: Props) => {
  const profName =
    professionalId && professionalId !== "sin-preferencia"
      ? getProfessionalById(professionalId)?.name || "No asignado"
      : professionalId === "sin-preferencia"
      ? "Sin preferencia"
      : "No asignado";

  const slotLabels = data.selectedSlots.map((s) => {
    const [d, shift] = s.split("-");
    return `${dayLabels[Number(d)]} ${shift}`;
  });

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
          Resumen de tu solicitud
        </h2>
        <p className="text-sm text-muted-foreground">
          Revisá los datos antes de enviar por WhatsApp.
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <SummaryRow label="Nombre y apellido" value={data.name} editKey="personal" onEdit={onEdit} />
        <SummaryRow label="Mail" value={data.email} editKey="personal" onEdit={onEdit} />
        <SummaryRow label="Servicio / Especialidad" value={service?.name || "—"} editKey="service" onEdit={onEdit} />
        <SummaryRow label="Profesional" value={profName} editKey="professional" onEdit={onEdit} />
        <SummaryRow label="Horarios de preferencia" value={slotLabels.join(", ") || "—"} editKey="schedule" onEdit={onEdit} />
        <SummaryRow
          label="Asiste con bebé"
          value={data.withBaby === "si" ? "Sí" : "No"}
          editKey="baby"
          onEdit={onEdit}
        />
        <SummaryRow
          label="Servicio de nursery"
          value={
            data.nursery === "si" ? "Sí" : data.nursery === "no" ? "No" : "No aplica"
          }
          editKey="baby"
          onEdit={onEdit}
        />
      </div>
    </div>
  );
};

export default StepSummary;
