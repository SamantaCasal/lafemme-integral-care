import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
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
            La Femme
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
            Embarazo, posparto y menopausia: acompañamiento integral en cada etapa.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg">
              <Link to="/turnos">Agendar turno</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60">
              <Link to="/especialidades">Ver especialidades</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
