import { Link, useNavigate } from "react-router-dom";
import { bookableServices } from "@/data/whatsapp-booking";
import {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain, CalendarPlus,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
};

const FeaturedServices = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const featured = bookableServices.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t("services.title")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] || Heart;
            return (
              <div
                key={service.id}
                className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 space-y-3 animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <Link
                    to={`/especialidades/${service.id}`}
                    className="inline-block text-sm text-primary font-medium hover:underline underline-offset-4"
                  >
                    {t("services.more_info")}
                  </Link>
                  <Button
                    size="sm"
                    className="gap-1.5"
                    onClick={() => navigate(`/turnos?servicio=${service.id}`)}
                  >
                    <CalendarPlus size={14} />
                    Pedir turno
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/especialidades"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            {t("services.view_all")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
