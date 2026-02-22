import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL, CLINIC_ADDRESS, CLINIC_HOURS } from "@/data/team";
import { useLanguage } from "@/i18n/LanguageContext";

const Contacto = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contact.success"));
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">{t("contact.title")}</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  { icon: Phone, label: t("contact.phone_label"), value: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}` },
                  { icon: Instagram, label: t("contact.ig_label"), value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
                  { icon: MapPin, label: t("contact.address_label"), value: CLINIC_ADDRESS },
                  { icon: Clock, label: t("contact.hours_label"), value: CLINIC_HOURS },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <Icon size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center min-h-[200px]">
                <div className="text-center text-muted-foreground p-6">
                  <MapPin size={32} className="mx-auto mb-2 text-primary/40" />
                  <p className="text-sm">{t("contact.map_embed")}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">{t("contact.name_label")}</label>
                <Input id="name" required placeholder={t("contact.name_placeholder")} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">{t("contact.email_label")}</label>
                <Input id="email" type="email" required placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">{t("contact.phone_field_label")}</label>
                <Input id="phone" placeholder={t("contact.phone_placeholder")} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">{t("contact.message_label")}</label>
                <Textarea id="message" required placeholder={t("contact.message_placeholder")} rows={4} />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" size="lg" className="flex-1">
                  {t("contact.submit")}
                </Button>
                <Button type="button" size="lg" variant="whatsapp" className="flex-1" asChild>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    {t("contact.wa_direct")}
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
