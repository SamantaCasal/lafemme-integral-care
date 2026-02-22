import Layout from "@/components/layout/Layout";
import { testimonials } from "@/data/testimonials";
import { Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/data/team";
import { useLanguage } from "@/i18n/LanguageContext";

const Testimonios = () => {
  const { t } = useLanguage();
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("testimonials.share_wa"))}`;

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background" id="testimonios">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">{t("testimonials.title")}</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            {t("testimonials.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div
                key={item.id}
                className="p-6 bg-card rounded-xl border border-border space-y-4 animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{item.text}"</p>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.stage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-3">{t("testimonials.share_title")}</h3>
            <p className="text-muted-foreground mb-6">{t("testimonials.share_text")}</p>
            <Button asChild variant="whatsapp" size="lg">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                {t("testimonials.share_cta")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonios;
