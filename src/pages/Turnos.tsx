import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/data/team";

const Turnos = () => {
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
    const text = `Hola, quiero agendar un turno en La Femme.\n\nNombre: ${form.nombre}\nEtapa: ${form.etapa}\nEspecialidad: ${form.especialidad}\nProfesional: ${form.profesional}\nPreferencia de fecha: ${form.fecha}\nMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Tu solicitud fue enviada (mock). Te contactaremos a la brevedad.");
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Agendá tu turno
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Completá el formulario o escribinos directamente por WhatsApp al {WHATSAPP_DISPLAY}.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1">Nombre y apellido</label>
              <Input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre completo" />
            </div>

            <div>
              <label htmlFor="etapa" className="block text-sm font-medium text-foreground mb-1">Etapa</label>
              <select
                id="etapa" name="etapa" value={form.etapa} onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
              >
                <option value="">Seleccioná tu etapa</option>
                <option value="Embarazo">Embarazo</option>
                <option value="Posparto">Posparto</option>
                <option value="Menopausia">Menopausia</option>
              </select>
            </div>

            <div>
              <label htmlFor="especialidad" className="block text-sm font-medium text-foreground mb-1">Especialidad</label>
              <Input id="especialidad" name="especialidad" value={form.especialidad} onChange={handleChange} placeholder="Ej: Evaluación postparto, lactancia..." />
            </div>

            <div>
              <label htmlFor="profesional" className="block text-sm font-medium text-foreground mb-1">Profesional</label>
              <select
                id="profesional" name="profesional" value={form.profesional} onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
              >
                <option value="">Seleccioná profesional</option>
                <option value="Obstetra">Obstetra</option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Psicóloga">Psicóloga</option>
              </select>
            </div>

            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-foreground mb-1">Preferencia de fecha/horario</label>
              <Input id="fecha" name="fecha" value={form.fecha} onChange={handleChange} placeholder="Ej: Lunes a la tarde" />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1">Mensaje (opcional)</label>
              <Textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Contanos si tenés alguna consulta..." rows={3} />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" size="lg" className="flex-1">
                Enviar formulario
              </Button>
              <Button type="button" size="lg" variant="whatsapp" className="flex-1" onClick={handleWhatsApp}>
                <MessageCircle size={18} />
                Enviar por WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Turnos;
