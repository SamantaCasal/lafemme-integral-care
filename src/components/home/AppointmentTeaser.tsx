import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck, Search, UserCheck } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/team";
import { useLanguage } from "@/i18n/LanguageContext";

const AppointmentTeaser = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, step: "1", titleKey: "appointment.step1_title", descKey: "appointment.step1_desc" },
    { icon: UserCheck, step: "2", titleKey: "appointment.step2_title", descKey: "appointment.step2_desc" },
    { icon: CalendarCheck, step: "3", titleKey: "appointment.step3_title", descKey: "appointment.step3_desc" },
  ];

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("appointment.wa_text"))}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t("appointment.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map(({ icon: Icon, step, titleKey, descKey }, i) => (
            <div key={step} className="text-center space-y-4 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <Icon size={28} className="text-secondary-foreground" />
              </div>
              <div className="text-sm font-medium text-primary">{t("appointment.step")} {step}</div>
              <h3 className="text-xl font-semibold text-foreground">{t(titleKey)}</h3>
              <p className="text-muted-foreground">{t(descKey)}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/turnos">{t("appointment.book")}</Link>
          </Button>
          <Button asChild size="lg" variant="whatsapp">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentTeaser;
