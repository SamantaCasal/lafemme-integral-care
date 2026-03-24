import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import directorImage from "@/assets/director-home.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const DirectorSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-up">
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={directorImage}
                alt="Lic. Cyntia Martínez – Directora y Fundadora de La Femme"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-2xl -z-10" />
          </div>

          <div className="space-y-6 animate-fade-up delay-200">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              {t("director.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              {t("director.name")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("director.bio")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/turnos">{t("director.cta1")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/quienes-somos">{t("director.cta2")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
