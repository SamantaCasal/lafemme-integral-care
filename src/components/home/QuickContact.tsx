import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { WHATSAPP_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL, CLINIC_ADDRESS, CLINIC_HOURS, WHATSAPP_NUMBER } from "@/data/team";
import { useLanguage } from "@/i18n/LanguageContext";

const QuickContact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background" id="contacto">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t("contact.quick_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactCard icon={Phone} title={t("contact.phone_label")} value={WHATSAPP_DISPLAY} href={`https://wa.me/${WHATSAPP_NUMBER}`} />
            <ContactCard icon={Instagram} title={t("contact.ig_label")} value={INSTAGRAM_HANDLE} href={INSTAGRAM_URL} />
            <ContactCard icon={MapPin} title={t("contact.address_label")} value={CLINIC_ADDRESS} />
            <ContactCard icon={Clock} title={t("contact.hours_label")} value={CLINIC_HOURS} />
          </div>

          <div className="rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center min-h-[280px]">
            <div className="text-center text-muted-foreground p-6">
              <MapPin size={40} className="mx-auto mb-3 text-primary/40" />
              <p className="text-sm">{t("contact.map_placeholder")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon: Icon, title, value, href }: { icon: React.ElementType; title: string; value: string; href?: string }) => {
  const content = (
    <div className="p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow space-y-2">
      <Icon size={22} className="text-primary" />
      <h4 className="font-medium text-foreground text-sm">{title}</h4>
      <p className="text-muted-foreground text-sm">{value}</p>
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  return content;
};

export default QuickContact;
