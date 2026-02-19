import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialBanner = () => {
  const featured = testimonials[0];

  return (
    <section className="py-12 bg-primary">
      <Link to="/testimonios" className="block">
        <div className="container text-center space-y-4 hover:opacity-90 transition-opacity cursor-pointer">
          <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase">
            Lo que dicen nuestras pacientes
          </p>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-primary-foreground text-lg md:text-xl font-serif italic leading-relaxed">
              "{featured.text}"
            </p>
          </blockquote>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: featured.rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-primary-foreground text-primary-foreground" />
            ))}
          </div>
          <p className="text-primary-foreground/70 text-sm">
            — {featured.name}, {featured.stage}
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Hacé clic para ver más testimonios →
          </p>
        </div>
      </Link>
    </section>
  );
};

export default TestimonialBanner;
