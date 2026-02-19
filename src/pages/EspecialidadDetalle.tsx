import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EspecialidadDetalle = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

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
          <Link to="/especialidades" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Volver a especialidades
          </Link>

          <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full capitalize mb-4">
            {service.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {service.title}
          </h1>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p>{service.fullDescription}</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/turnos">Agendar turno</Link>
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
