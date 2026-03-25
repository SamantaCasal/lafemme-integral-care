import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL, CLINIC_ADDRESS, CLINIC_HOURS } from "@/data/team";

const Contacto = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Mensaje enviado! (mock). Te responderemos pronto.");
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Contacto</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Estamos para ayudarte. Escribinos o visitanos.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Teléfono / WhatsApp", value: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}` },
                  { icon: Instagram, label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
                  { icon: MapPin, label: "Dirección", value: CLINIC_ADDRESS },
                  { icon: Clock, label: "Horarios", value: CLINIC_HOURS },
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

              <div className="rounded-2xl overflow-hidden border border-border bg-muted min-h-[200px]">
                <iframe
                  title="Ubicación de La Femme"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d-57.6!3d-25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8a0ecb2a3d7%3A0x0!2sCruz%20Del%20Chaco%20877%2C%20Asunci%C3%B3n!5e0!3m2!1ses!2spy!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "200px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nombre</label>
                <Input id="name" required placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <Input id="email" type="email" required placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Teléfono</label>
                <Input id="phone" placeholder="Tu teléfono" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
                <Textarea id="message" required placeholder="¿En qué podemos ayudarte?" rows={4} />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" size="lg" className="flex-1">Enviar mensaje</Button>
                <Button type="button" size="lg" variant="whatsapp" className="flex-1" asChild>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    WhatsApp directo
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
