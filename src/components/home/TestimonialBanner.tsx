import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { Button } from "@/components/ui/button";

const TestimonialBanner = () => {
  const featured = testimonials.filter((t) => t.featured).slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 font-body">
            Testimonios reales
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Lo que dicen nuestras pacientes
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-body">
            Historias de quienes confiaron en nosotras para acompañarlas en momentos únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} size="compact" />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/testimonios">
              Ver más testimonios
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
