import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck, Search, UserCheck } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/team";

const steps = [
  { icon: Search, step: "1", title: "Elegí tu especialidad", desc: "Explorá nuestros servicios y encontrá lo que necesitás." },
  { icon: UserCheck, step: "2", title: "Elegí profesional", desc: "Seleccioná la profesional que prefieras para tu consulta." },
  { icon: CalendarCheck, step: "3", title: "Confirmá tu turno", desc: "Elegí fecha y horario. ¡Listo!" },
];

const AppointmentTeaser = () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero agendar un turno en La Femme.")}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Agendá tu turno en 3 pasos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="text-center space-y-4 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <Icon size={28} className="text-secondary-foreground" />
              </div>
              <div className="text-sm font-medium text-primary">Paso {step}</div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/turnos">Agendar turno</Link>
          </Button>
          <Button asChild size="lg" variant="whatsapp">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentTeaser;
