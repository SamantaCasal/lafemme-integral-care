import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { services, serviceCategories } from "@/data/services";
import {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, Heart, GraduationCap, Baby, Activity,
  Dumbbell, Sparkles, Apple, Brain,
};

const Especialidades = () => {
  const [filter, setFilter] = useState("todas");
  const { t } = useLanguage();

  const filtered = filter === "todas" ? services : services.filter((s) => s.category === filter);

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            {t("specialties.page_title")}
          </h1>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            {t("specialties.page_subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-primary/10"
                }`}
              >
                {t(`cat.${cat.value}`)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service) => {
              const Icon = iconMap[service.icon] || Heart;
              return (
                <Link
                  key={service.slug}
                  to={`/especialidades/${service.slug}`}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="inline-block text-xs font-medium text-primary bg-accent/60 px-2 py-0.5 rounded-full capitalize">
                    {t(`cat.${service.category}`)}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.shortDescription}</p>
                  <span className="text-sm text-primary font-medium">{t("specialties.view_more")}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Especialidades;
