import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import { WHATSAPP_DISPLAY, INSTAGRAM_URL, CLINIC_ADDRESS, CLINIC_HOURS } from "@/data/team";
import logoImg from "@/assets/logo-lafemme.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/">
              <img src={logoImg} alt="La Femme" className="h-16 w-auto" loading="lazy" width={512} height={512} />
            </Link>
            <div className="flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Especialidades", href: "/especialidades" },
                { label: "Solicitar turno", href: "/turnos" },
                { label: "Testimonios", href: "/testimonios" },
                { label: "Preguntas frecuentes", href: "/faq" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-primary" /><span>{WHATSAPP_DISPLAY}</span></div>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <Instagram size={16} className="mt-0.5 shrink-0 text-primary" /><span>@clinicalafemme.py</span>
              </a>
              <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" /><span>{CLINIC_ADDRESS}</span></div>
              <div className="flex items-start gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-primary" /><span>{CLINIC_HOURS}</span></div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/faq" className="hover:text-primary transition-colors">Política de privacidad</Link>
              <Link to="/faq" className="hover:text-primary transition-colors">Términos y condiciones</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            © {new Date().getFullYear()} La Femme. Todos los derechos reservados. La información proporcionada en este sitio es de carácter informativo y no reemplaza una consulta profesional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
