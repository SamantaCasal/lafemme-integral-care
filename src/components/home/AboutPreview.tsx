import { Stethoscope, Dumbbell, Sparkles, Baby, Brain } from "lucide-react";

const badges = [
  { icon: Stethoscope, label: "Consultorios" },
  { icon: Dumbbell, label: "Área de ejercicios" },
  { icon: Sparkles, label: "Spa" },
  { icon: Baby, label: "Nursery" },
  { icon: Brain, label: "Reeducación abdominal y piso pélvico" },
];

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Nuestro equipo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos un equipo multidisciplinario comprometido con la salud integral de la mujer. En Clínica La Femme unimos calidez, profesionalismo y evidencia para brindar un acompañamiento cercano, respetuoso y personalizado en cada etapa.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-5 py-3 bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon size={18} className="text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
