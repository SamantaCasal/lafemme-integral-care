import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logoSrc from "@/assets/logo-lafemme.svg";

const navLinks = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.about", href: "/quienes-somos" },
  { labelKey: "nav.specialties", href: "/especialidades" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.testimonials", href: "/testimonios" },
  { labelKey: "nav.faq", href: "/faq" },
  { labelKey: "nav.contact", href: "/contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="La Femme — Clínica Integral de la Mujer" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.href
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language switch */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1.5 text-xs font-semibold rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <Button asChild size="default">
            <Link to="/turnos">{t("nav.book")}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-2.5 py-1 text-xs font-semibold rounded-full border border-border bg-card text-foreground"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Button asChild className="w-full">
                <Link to="/turnos" onClick={() => setMobileOpen(false)}>{t("nav.book")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
