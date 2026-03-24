import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  bookableServices,
  serviceCategoryOptions,
} from "@/data/whatsapp-booking";
import {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain, CalendarPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
};

const catLabels: Record<string, string> = {
  todas: "Todas",
  embarazo: "Embarazo",
  posparto: "Posparto",
  menopausia: "Menopausia",
  bienestar: "Bienestar",
};

const Especialidades = () => {
  const [filter, setFilter] = useState("todas");
  const navigate = useNavigate();

  const filtered =
    filter === "todas"
      ? bookableServices
      : bookableServices.filter((s) => s.category === filter);

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Nuestras Especialidades
          </h1>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Servicios diseñados para acompañarte en cada etapa con un enfoque integral y personalizado.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {serviceCategoryOptions.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-primary/10"
                }`}
              >
                {catLabels[cat.value] || cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service) => {
              const Icon = iconMap[service.icon] || Heart;
              return (
                <div
                  key={service.id}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 space-y-3 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="inline-block text-xs font-medium text-primary bg-accent/60 px-2 py-0.5 rounded-full capitalize w-fit">
                    {catLabels[service.category] || service.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Link
                      to={`/especialidades/${service.id}`}
                      className="text-sm text-primary font-medium hover:underline underline-offset-4"
                    >
                      Ver más →
                    </Link>
                    <Button
                      size="sm"
                      className="gap-1.5 ml-auto"
                      onClick={() => navigate(`/turnos?servicio=${service.id}`)}
                    >
                      <CalendarPlus size={14} />
                      Pedir turno
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Especialidades;
