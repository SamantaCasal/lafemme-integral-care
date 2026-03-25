import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { WHATSAPP_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL, CLINIC_ADDRESS, CLINIC_HOURS, WHATSAPP_NUMBER } from "@/data/team";

const QuickContact = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="contacto">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Contacto rápido</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactCard icon={Phone} title="Teléfono / WhatsApp" value={WHATSAPP_DISPLAY} href={`https://wa.me/${WHATSAPP_NUMBER}`} />
            <ContactCard icon={Instagram} title="Instagram" value={INSTAGRAM_HANDLE} href={INSTAGRAM_URL} />
            <ContactCard icon={MapPin} title="Dirección" value={CLINIC_ADDRESS} />
            <ContactCard icon={Clock} title="Horarios" value={CLINIC_HOURS} />
          </div>

          <div className="rounded-2xl overflow-hidden border border-border bg-muted min-h-[280px]">
            <iframe
              title="Ubicación de La Femme"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d-57.6!3d-25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8a0ecb2a3d7%3A0x0!2sCruz%20Del%20Chaco%20877%2C%20Asunci%C3%B3n!5e0!3m2!1ses!2spy!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
