import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/data/team";
import { useLanguage } from "@/i18n/LanguageContext";

const Turnos = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    nombre: "",
    etapa: "",
    especialidad: "",
    profesional: "",
    fecha: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `${t("appointment.wa_text")}\n\n${t("turnos.name_label")}: ${form.nombre}\n${t("turnos.stage_label")}: ${form.etapa}\n${t("turnos.specialty_label")}: ${form.especialidad}\n${t("turnos.professional_label")}: ${form.profesional}\n${t("turnos.date_label")}: ${form.fecha}\n${t("turnos.message_label")}: ${form.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("turnos.success"));
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            {t("turnos.title")}
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            {t("turnos.subtitle_prefix")} {WHATSAPP_DISPLAY}.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1">{t("turnos.name_label")}</label>
              <Input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required placeholder={t("turnos.name_placeholder")} />
            </div>

            <div>
              <label htmlFor="etapa" className="block text-sm font-medium text-foreground mb-1">{t("turnos.stage_label")}</label>
              <select
                id="etapa" name="etapa" value={form.etapa} onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
              >
                <option value="">{t("turnos.stage_placeholder")}</option>
                <option value="Embarazo">{t("turnos.stage_pregnancy")}</option>
                <option value="Posparto">{t("turnos.stage_postpartum")}</option>
                <option value="Menopausia">{t("turnos.stage_menopause")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="especialidad" className="block text-sm font-medium text-foreground mb-1">{t("turnos.specialty_label")}</label>
              <Input id="especialidad" name="especialidad" value={form.especialidad} onChange={handleChange} placeholder={t("turnos.specialty_placeholder")} />
            </div>

            <div>
              <label htmlFor="profesional" className="block text-sm font-medium text-foreground mb-1">{t("turnos.professional_label")}</label>
              <select
                id="profesional" name="profesional" value={form.profesional} onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
              >
                <option value="">{t("turnos.professional_placeholder")}</option>
                <option value="Obstetra">{t("turnos.prof_obstetra")}</option>
                <option value="Nutricionista">{t("turnos.prof_nutricionista")}</option>
                <option value="Psicóloga">{t("turnos.prof_psicologa")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-foreground mb-1">{t("turnos.date_label")}</label>
              <Input id="fecha" name="fecha" value={form.fecha} onChange={handleChange} placeholder={t("turnos.date_placeholder")} />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1">{t("turnos.message_label")}</label>
              <Textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} placeholder={t("turnos.message_placeholder")} rows={3} />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" size="lg" className="flex-1">
                {t("turnos.submit")}
              </Button>
              <Button type="button" size="lg" variant="whatsapp" className="flex-1" onClick={handleWhatsApp}>
                <MessageCircle size={18} />
                {t("turnos.wa_send")}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Turnos;
