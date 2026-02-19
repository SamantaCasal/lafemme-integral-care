import { Link } from "react-router-dom";
import { services } from "@/data/services";
import {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
};

const FeaturedServices = () => {
  const featured = services.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Especialidades destacadas
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Conocé nuestros servicios diseñados para cada etapa de tu vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] || Heart;
            return (
              <Link
                key={service.slug}
                to={`/especialidades/${service.slug}`}
                className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 space-y-3 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="inline-block text-sm text-primary font-medium">
                  Más información →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/especialidades"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            Ver todas las especialidades →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
