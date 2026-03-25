import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import directorImage from "@/assets/director-home.jpg";

const DirectorSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle decorative accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image — editorial crop with layered accents */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative max-w-sm w-full">
              {/* Soft blush backdrop */}
              <div className="absolute -inset-3 bg-secondary/40 rounded-3xl rotate-2" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/30">
                <img
                  src={directorImage}
                  alt="Lic. Cyntia Martínez – Directora y Fundadora de La Femme"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small decorative dot */}
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-primary/20" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-primary/50" />
              <span className="text-primary font-medium text-xs tracking-[0.2em] uppercase font-body">
                Directora y Fundadora · Lic. en Obstetricia
              </span>
            </div>

            {/* Name — large, elegant */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-foreground leading-tight -mt-2">
              Lic. Cyntia Martínez
            </h2>

            {/* Bio — lighter, more scannable */}
            <div className="space-y-5 max-w-xl">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Cyntia es fundadora de <span className="text-foreground font-medium">Clínica La Femme</span>, obstetra y docente universitaria. Con una mirada integral, humana y respetuosa, acompaña a la mujer en cada etapa de su vida, combinando cercanía, profesionalismo y formación constante.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Clínica La Femme nace de su deseo de crear un espacio pensado especialmente para el bienestar femenino, donde la salud física, la salud emocional y la atención especializada se unan para brindar un acompañamiento cálido y de calidad en etapas tan importantes como el embarazo, el posparto y la menopausia.
              </p>
            </div>

            {/* Single CTA */}
            <div className="pt-2">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/nuestro-equipo">Conocé al equipo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
