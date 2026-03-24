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
  professionals,
  getProfessionalById,
  dayLabels,
  buildWhatsAppUrl,
  type BookableService,
  type AvailabilitySlot,
} from "@/data/whatsapp-booking";

export interface WizardData {
  name: string;
  email: string;
  serviceId: string | null;
  professionalId: string | null; // null = auto/skip, "sin-preferencia" = user chose no pref
  selectedSlots: string[]; // "day-shift" keys
  withBaby: "si" | "no" | null;
  nursery: "si" | "no" | "no-aplica" | null;
}

interface Props {
  preselectedServiceId?: string;
}

const WhatsAppWizard = ({ preselectedServiceId }: Props) => {
  const [step, setStep] = useState(preselectedServiceId ? 0 : 1);
  // step 0 = personal data, 1 = service, 2 = professional, 3 = schedule, 4 = baby, 5 = summary

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

  // Determine if professional step should be shown
  const showProfessionalStep = selectedService
    ? selectedService.professionalIds.length > 1
    : false;

  // Build ordered steps
  const steps = useMemo(() => {
    const s = [
      { key: "personal", label: "Datos" },
      { key: "service", label: "Servicio" },
    ];
    if (showProfessionalStep) {
      s.push({ key: "professional", label: "Profesional" });
    }
    s.push({ key: "schedule", label: "Horarios" });
    s.push({ key: "baby", label: "Info extra" });
    s.push({ key: "summary", label: "Resumen" });
    return s;
  }, [showProfessionalStep]);

  // Map current step index
  const currentStepIndex = useMemo(() => {
    // step 0 = personal data (preselected service)
    if (step === 0) return 0;
    return step - 1 + (preselectedServiceId ? 1 : 0);
  }, [step, preselectedServiceId]);

  // Determine effective professional
  const effectiveProfessionalId = useMemo(() => {
    if (!selectedService) return null;
    if (selectedService.professionalIds.length === 0) return null;
    if (selectedService.professionalIds.length === 1) return selectedService.professionalIds[0];
    return data.professionalId;
  }, [selectedService, data.professionalId]);

  // Navigation
  const stepKeys = steps.map((s) => s.key);
  const currentKey = stepKeys[currentStepIndex] || "personal";

  const goNext = () => {
    const nextIdx = currentStepIndex + 1;
    if (nextIdx < steps.length) {
      // When moving from service step and single/no professional, skip professional
      setStep(step + 1);
    }
  };

  const goBack = () => {
    if (step > (preselectedServiceId ? 0 : 1)) {
      setStep(step - 1);
    }
  };

  const goToStep = (targetKey: string) => {
    const targetIdx = stepKeys.indexOf(targetKey);
    if (targetIdx >= 0) {
      setStep(targetIdx - (preselectedServiceId ? -1 : 1) + 1);
    }
  };

  // Actual step mapping
  const getStepKey = (): string => {
    if (preselectedServiceId) {
      // Steps: 0=personal, 1=professional?(skip if not), 2=schedule, 3=baby, 4=summary
      const mapping = ["personal"];
      if (showProfessionalStep) mapping.push("professional");
      mapping.push("schedule", "baby", "summary");
      return mapping[step] || "personal";
    } else {
      // Steps: 1=personal, 2=service, 3=professional?(skip), 4=schedule, 5=baby, 6=summary
      const mapping = ["", "personal", "service"];
      if (showProfessionalStep) mapping.push("professional");
      mapping.push("schedule", "baby", "summary");
      return mapping[step] || "personal";
    }
  };

  const activeKey = getStepKey();

  // Progress
  const totalSteps = steps.length;
  const activeIdx = stepKeys.indexOf(activeKey);
  const progressPercent = Math.round(((activeIdx + 1) / totalSteps) * 100);

  // Validations
  const canProceed = (): boolean => {
    switch (activeKey) {
      case "personal":
        return data.name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      case "service":
        return !!data.serviceId;
      case "professional":
        return !!data.professionalId;
      case "schedule":
        return data.selectedSlots.length > 0;
      case "baby":
        return data.withBaby !== null && (data.withBaby === "no" || data.nursery !== null);
      default:
        return true;
    }
  };

  // WhatsApp link
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
        data.nursery === "si"
          ? "Sí"
          : data.nursery === "no"
          ? "No"
          : "No aplica",
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          {steps.map((s, i) => (
            <span
              key={s.key}
              className={`font-medium transition-colors ${
                i <= activeIdx ? "text-primary" : ""
              }`}
            >
              {s.label}
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
            onEdit={(key) => goToStep(key)}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 gap-3">
        {step > (preselectedServiceId ? 0 : 1) ? (
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
          <Button
            onClick={goNext}
            disabled={!canProceed()}
            className="gap-2"
          >
            Siguiente <ArrowRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default WhatsAppWizard;
