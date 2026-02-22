import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior de la clínica La Femme"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative container py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg">
              <Link to="/turnos">{t("hero.cta")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/90 border-white/40 text-foreground hover:bg-white hover:text-foreground hover:border-white/60">
              <Link to="/especialidades">{t("hero.specialties")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
