import { useState } from "react";
import { BookingFormData, BookingResult } from "@/types/booking";
import StepServiceSelect from "./StepServiceSelect";
import StepProfessionalSelect from "./StepProfessionalSelect";
import StepDateTimeSelect from "./StepDateTimeSelect";
import StepPatientData from "./StepPatientData";
import StepConfirmation from "./StepConfirmation";
import BookingConfirmed from "./BookingConfirmed";
import BookingSummary from "./BookingSummary";
import { ChevronRight } from "lucide-react";

const TOTAL_STEPS = 5;

const stepLabels = ["Servicio", "Profesional", "Fecha y hora", "Tus datos", "Confirmación"];

const BookingStepper = () => {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const [form, setForm] = useState<BookingFormData>({
    service: null,
    professional: null,
    date: null,
    time: null,
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    patientNotes: "",
    needsInvoice: false,
    invoiceRuc: "",
    invoiceName: "",
  });

  const updateForm = (updates: Partial<BookingFormData>) => {
    setForm((prev) => ({ ...prev, ...updates }));
  };

  if (confirmed && bookingResult) {
    return <BookingConfirmed booking={bookingResult} form={form} />;
  }

  return (
    <div className="container max-w-6xl py-8 md:py-12">
      {/* Stepper indicator */}
      <div className="flex items-center justify-center gap-1 mb-8 overflow-x-auto pb-2">
        {stepLabels.map((label, i) => {
          const stepNum = i + 1;
          const isActive = step === stepNum;
          const isDone = step > stepNum;
          return (
            <div key={i} className="flex items-center">
              <button
                onClick={() => isDone && setStep(stepNum)}
                disabled={!isDone}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : isDone
                    ? "bg-secondary text-secondary-foreground cursor-pointer hover:bg-secondary/80"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-background/20 flex items-center justify-center text-[10px] font-bold">
                  {isDone ? "✓" : stepNum}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </button>
              {i < TOTAL_STEPS - 1 && (
                <ChevronRight size={14} className="text-muted-foreground mx-1 shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && <StepServiceSelect form={form} updateForm={updateForm} onNext={() => setStep(2)} />}
          {step === 2 && <StepProfessionalSelect form={form} updateForm={updateForm} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
          {step === 3 && <StepDateTimeSelect form={form} updateForm={updateForm} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
          {step === 4 && <StepPatientData form={form} updateForm={updateForm} onNext={() => setStep(5)} onBack={() => setStep(3)} />}
          {step === 5 && <StepConfirmation form={form} onBack={() => setStep(4)} onEdit={(s) => setStep(s)} onConfirmed={(result) => { setBookingResult(result); setConfirmed(true); }} />}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <BookingSummary form={form} />
          </div>
        </div>

        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg">
          <button
            onClick={() => setSummaryOpen(!summaryOpen)}
            className="w-full px-4 py-3 flex items-center justify-between text-sm font-medium text-foreground"
          >
            Ver resumen de tu reserva
            <ChevronRight size={16} className={`transition-transform ${summaryOpen ? "rotate-90" : ""}`} />
          </button>
          {summaryOpen && (
            <div className="px-4 pb-4 max-h-60 overflow-y-auto">
              <BookingSummary form={form} compact />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingStepper;
