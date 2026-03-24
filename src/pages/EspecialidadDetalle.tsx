import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { bookableServices } from "@/data/whatsapp-booking";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarPlus } from "lucide-react";

const catLabels: Record<string, string> = {
  embarazo: "Embarazo",
  posparto: "Posparto",
  menopausia: "Menopausia",
  bienestar: "Bienestar",
};

const EspecialidadDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = bookableServices.find((s) => s.id === slug);

  if (!service) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Especialidad no encontrada</h1>
          <Button asChild variant="outline">
            <Link to="/especialidades">← Volver a especialidades</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <Link
            to="/especialidades"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Volver a especialidades
          </Link>

          <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full capitalize mb-4">
            {catLabels[service.category] || service.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {service.name}
          </h1>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p>{service.fullDescription}</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => navigate(`/turnos?servicio=${service.id}`)}
            >
              <CalendarPlus size={18} /> Pedir turno
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contacto">Consultanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EspecialidadDetalle;
