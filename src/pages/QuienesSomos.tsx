import Layout from "@/components/layout/Layout";
import { teamMembers } from "@/data/team";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import directorImage from "@/assets/director-portrait.jpg";

const QuienesSomos = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">
            Quiénes somos
          </h1>
          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-16 max-w-2xl mx-auto">
            Somos un equipo multidisciplinario comprometido con la salud integral de la mujer. 
            En La Femme combinamos calidez, profesionalismo y evidencia para acompañarte en cada etapa.
          </p>

          <div className="space-y-16">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-8 items-center animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-40 h-40 rounded-2xl overflow-hidden bg-muted shrink-0 shadow-lg">
                  {i === 0 ? (
                    <img src={directorImage} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                      [Foto]
                    </div>
                  )}
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg">
              <Link to="/turnos">Agendá tu turno</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuienesSomos;
