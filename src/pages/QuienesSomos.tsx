import Layout from "@/components/layout/Layout";
import { teamMembers } from "@/data/team";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import teamCyntia from "@/assets/director-portrait.jpg";
import teamKarine from "@/assets/team-karine.jpg";
import teamMagali from "@/assets/team-magali.jpg";
import teamVania from "@/assets/team-vania.jpg";
import teamLaura from "@/assets/team-laura.jpg";

const photoMap: Record<string, string> = {
  cyntia: teamCyntia,
  karine: teamKarine,
  magali: teamMagali,
  vania: teamVania,
  laura: teamLaura,
};

const QuienesSomos = () => {
  const { t, lang } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">
            {t("about.title")}
          </h1>
          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-16 max-w-2xl mx-auto">
            {t("about.intro")}
          </p>

          <div className="space-y-16">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-8 items-center animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-40 h-40 rounded-2xl overflow-hidden bg-muted shrink-0 shadow-lg">
                  {member.photo && photoMap[member.photo] ? (
                    <img src={photoMap[member.photo]} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                      [Foto]
                    </div>
                  )}
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">
                    {lang === "en" ? member.roleEn : member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {lang === "en" ? member.bioEn : member.bio}
                  </p>
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mt-1"
                    >
                      <Instagram size={16} />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg">
              <Link to="/turnos">{t("about.cta")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuienesSomos;
