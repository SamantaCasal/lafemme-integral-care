import { Stethoscope, Dumbbell, Sparkles, Baby, Brain } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const badgeKeys = [
  { icon: Stethoscope, key: "badge.consultorios" },
  { icon: Dumbbell, key: "badge.ejercicios" },
  { icon: Sparkles, key: "badge.spa" },
  { icon: Baby, key: "badge.nursery" },
  { icon: Brain, key: "badge.reeducacion" },
];

const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t("about.section_title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("about.section_text")}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {badgeKeys.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="flex items-center gap-2 px-5 py-3 bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon size={18} className="text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
