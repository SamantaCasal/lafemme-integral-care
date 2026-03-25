import Layout from "@/components/layout/Layout";
import { testimonials } from "@/data/testimonials";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/data/team";
import TestimonialCard from "@/components/testimonials/TestimonialCard";

const Testimonios = () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero compartir mi experiencia en La Femme.")}`;

  // Alternate sizing for organic masonry-like feel
  const sizeClasses = [
    "md:col-span-2", // wide
    "",               // normal
    "",               // normal
    "",               // normal
    "md:col-span-2", // wide
    "",               // normal
    "",               // normal
    "",               // normal
    "md:col-span-2", // wide
    "",               // normal
    "",               // normal
    "",               // normal
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-14 bg-accent/30">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonios
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body leading-relaxed">
            Palabras reales de quienes nos eligieron para acompañarlas. Cada historia nos inspira a seguir cuidando con amor.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, i) => (
              <div
                key={item.id}
                className={`animate-fade-up ${sizeClasses[i % sizeClasses.length]}`}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-accent/30">
        <div className="container max-w-2xl text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">
            ¿Querés compartir tu experiencia?
          </h3>
          <p className="text-muted-foreground mb-8 font-body leading-relaxed">
            Tu historia puede inspirar a otras mujeres a dar el paso. Nos encantaría escucharte.
          </p>
          <Button asChild variant="whatsapp" size="lg">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Contanos tu experiencia
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonios;
