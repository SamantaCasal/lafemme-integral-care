import { useState, useCallback, useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import StepPersonalData from "./StepPersonalData";
import StepServiceSelect from "./StepServiceSelect";
import StepProfessional from "./StepProfessional";
import StepSchedule from "./StepSchedule";
import StepBabyNursery from "./StepBabyNursery";
import StepSummary from "./StepSummary";
import {
  bookableServices,
  getProfessionalById,
  dayLabels,
  buildWhatsAppUrl,
} from "@/data/whatsapp-booking";

export interface WizardData {
  name: string;
  email: string;
  serviceId: string | null;
  professionalId: string | null;
  selectedSlots: string[];
  withBaby: "si" | "no" | null;
  nursery: "si" | "no" | "no-aplica" | null;
  comments: string;
}

interface Props {
  preselectedServiceId?: string;
}

type StepKey = "personal" | "service" | "professional" | "schedule" | "baby" | "summary";

const WhatsAppWizard = ({ preselectedServiceId }: Props) => {
  const [data, setData] = useState<WizardData>({
    name: "",
    email: "",
    serviceId: preselectedServiceId || null,
    professionalId: null,
    selectedSlots: [],
    withBaby: null,
    nursery: null,
  });

  const update = useCallback((partial: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  }, []);

  const selectedService = useMemo(
    () => bookableServices.find((s) => s.id === data.serviceId) || null,
    [data.serviceId]
  );

  const showProfessionalStep =
    selectedService !== null && selectedService.professionalIds.length > 1;

  // Build the ordered step keys
  const stepKeys = useMemo((): StepKey[] => {
    const keys: StepKey[] = ["personal"];
    if (!preselectedServiceId) keys.push("service");
    if (showProfessionalStep) keys.push("professional");
    keys.push("schedule", "baby", "summary");
    return keys;
  }, [preselectedServiceId, showProfessionalStep]);

  const stepLabels: Record<StepKey, string> = {
    personal: "Datos",
    service: "Servicio",
    professional: "Profesional",
    schedule: "Horarios",
    baby: "Info extra",
    summary: "Resumen",
  };

  const [currentIdx, setCurrentIdx] = useState(0);
  const activeKey = stepKeys[currentIdx] || "personal";

  // Effective professional
  const effectiveProfessionalId = useMemo(() => {
    if (!selectedService) return null;
    if (selectedService.professionalIds.length === 0) return null;
    if (selectedService.professionalIds.length === 1)
      return selectedService.professionalIds[0];
    return data.professionalId;
  }, [selectedService, data.professionalId]);

  const progressPercent = Math.round(((currentIdx + 1) / stepKeys.length) * 100);

  // Validation
  const canProceed = (): boolean => {
    switch (activeKey) {
      case "personal":
        return (
          data.name.trim().length > 0 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
        );
      case "service":
        return !!data.serviceId;
      case "professional":
        return !!data.professionalId;
      case "schedule":
        return data.selectedSlots.length > 0;
      case "baby":
        return (
          data.withBaby !== null &&
          (data.withBaby === "no" || data.nursery !== null)
        );
      default:
        return true;
    }
  };

  const goNext = () => {
    if (currentIdx < stepKeys.length - 1) setCurrentIdx(currentIdx + 1);
  };
  const goBack = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };
  const goToKey = (key: StepKey) => {
    const idx = stepKeys.indexOf(key);
    if (idx >= 0) setCurrentIdx(idx);
  };

  // WhatsApp
  const handleSend = () => {
    const profName =
      effectiveProfessionalId && effectiveProfessionalId !== "sin-preferencia"
        ? getProfessionalById(effectiveProfessionalId)?.name || "No asignado"
        : effectiveProfessionalId === "sin-preferencia"
        ? "Sin preferencia"
        : "No asignado";

    const slotLabels = data.selectedSlots.map((s) => {
      const [d, shift] = s.split("-");
      return `${dayLabels[Number(d)]} ${shift}`;
    });

    const url = buildWhatsAppUrl({
      name: data.name,
      email: data.email,
      service: selectedService?.name || "",
      professional: profName,
      slots: slotLabels,
      withBaby: data.withBaby === "si" ? "Sí" : "No",
      nursery:
        data.nursery === "si" ? "Sí" : data.nursery === "no" ? "No" : "No aplica",
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          {stepKeys.map((key, i) => (
            <span
              key={key}
              className={`font-medium transition-colors ${
                i <= currentIdx ? "text-primary" : ""
              }`}
            >
              {stepLabels[key]}
            </span>
          ))}
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      {/* Step content */}
      <div className="min-h-[320px]">
        {activeKey === "personal" && (
          <StepPersonalData data={data} update={update} />
        )}
        {activeKey === "service" && (
          <StepServiceSelect data={data} update={update} />
        )}
        {activeKey === "professional" && selectedService && (
          <StepProfessional
            service={selectedService}
            data={data}
            update={update}
          />
        )}
        {activeKey === "schedule" && selectedService && (
          <StepSchedule
            service={selectedService}
            professionalId={effectiveProfessionalId}
            data={data}
            update={update}
          />
        )}
        {activeKey === "baby" && <StepBabyNursery data={data} update={update} />}
        {activeKey === "summary" && (
          <StepSummary
            data={data}
            service={selectedService}
            professionalId={effectiveProfessionalId}
            onEdit={(key) => goToKey(key as StepKey)}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 gap-3">
        {currentIdx > 0 ? (
          <Button variant="outline" onClick={goBack} className="gap-2">
            <ArrowLeft size={16} /> Volver
          </Button>
        ) : (
          <div />
        )}

        {activeKey === "summary" ? (
          <Button
            variant="whatsapp"
            size="lg"
            className="gap-2 flex-1 max-w-xs"
            onClick={handleSend}
          >
            <MessageCircle size={20} /> Enviar por WhatsApp
          </Button>
        ) : (
          <Button onClick={goNext} disabled={!canProceed()} className="gap-2">
            Siguiente <ArrowRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default WhatsAppWizard;
