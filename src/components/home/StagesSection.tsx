import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Baby, Flower2 } from "lucide-react";

const stages = [
  {
    icon: Baby,
    title: "Embarazo",
    desc: "Te acompañamos desde el inicio con preparación al parto, nutrición, ejercicios y contención emocional para vivir un embarazo pleno.",
    link: "/especialidades",
  },
  {
    icon: Heart,
    title: "Posparto",
    desc: "Recuperación integral: evaluación postparto, lactancia, reeducación del piso pélvico y apoyo psicológico para esta nueva etapa.",
    link: "/especialidades",
  },
  {
    icon: Flower2,
    title: "Menopausia",
    desc: "Un espacio sin tabúes para transitar la menopausia con bienestar, acompañamiento médico, nutricional y emocional.",
    link: "/especialidades",
  },
];

const StagesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            ¿Para quiénes hacemos lo que hacemos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="group p-8 bg-background rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 text-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <stage.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{stage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{stage.desc}</p>
              <Button asChild variant="link" className="text-primary">
                <Link to={stage.link}>Ver servicios →</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
