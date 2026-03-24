import { BookingFormData, BookingResult } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CheckCircle2, Calendar, MessageCircle, Home } from "lucide-react";
import { WHATSAPP_NUMBER, CLINIC_ADDRESS } from "@/data/team";

interface Props {
  booking: BookingResult;
  form: BookingFormData;
}

const formatPrice = (g: number) => `Gs. ${g.toLocaleString("es-PY")}`;

const BookingConfirmed = ({ booking, form }: Props) => {
  const serviceName = form.service ? form.service.name_es : "";

  const handleDownloadIcs = () => {
    if (!form.date || !form.time || !form.service) return;
    const [h, m] = form.time.split(":").map(Number);
    const start = new Date(form.date);
    start.setHours(h, m, 0, 0);
    const end = new Date(start.getTime() + form.service.duration_minutes * 60000);

    const pad = (n: number) => n.toString().padStart(2, "0");
    const toIcs = (d: Date) =>
      `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//La Femme//Booking//ES", "BEGIN:VEVENT",
      `DTSTART:${toIcs(start)}`, `DTEND:${toIcs(end)}`,
      `SUMMARY:${serviceName} — La Femme`,
      `DESCRIPTION:Profesional: ${form.professional?.name}\\nReserva: ${booking.booking_number}`,
      `LOCATION:${CLINIC_ADDRESS}`, "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `la-femme-${booking.booking_number}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleWhatsApp = () => {
    const text = `Hola, mi reserva en La Femme está confirmada ✅\n\nN°: ${booking.booking_number}\nServicio: ${serviceName}\nProfesional: ${form.professional?.name}\nFecha: ${form.date ? format(form.date, "EEEE d 'de' MMMM, yyyy", { locale: es }) : ""} ${form.time}\nPrecio: ${formatPrice(booking.price_guaranies)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="container max-w-2xl py-12 md:py-20 text-center">
      <div className="animate-fade-up">
        <CheckCircle2 size={64} className="text-primary mx-auto mb-4" />
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">¡Reserva confirmada!</h1>
        <p className="text-muted-foreground mb-8">Te enviamos los detalles por email. También podés compartir por WhatsApp.</p>

        <div className="inline-block bg-primary/10 rounded-lg px-6 py-3 mb-8">
          <p className="text-xs text-muted-foreground">N° de reserva</p>
          <p className="text-2xl font-bold text-primary tracking-wider">{booking.booking_number}</p>
        </div>

        <div className="text-left rounded-xl border border-border bg-card p-6 mb-8 space-y-3">
          <div className="flex justify-between"><span className="text-sm text-muted-foreground">Servicio</span><span className="text-sm font-medium text-foreground">{serviceName}</span></div>
          <div className="flex justify-between"><span className="text-sm text-muted-foreground">Profesional</span><span className="text-sm font-medium text-foreground">{form.professional?.name}</span></div>
          <div className="flex justify-between"><span className="text-sm text-muted-foreground">Fecha</span><span className="text-sm font-medium text-foreground">{form.date ? format(form.date, "dd/MM/yyyy", { locale: es }) : ""} — {form.time}</span></div>
          <div className="flex justify-between"><span className="text-sm text-muted-foreground">Duración</span><span className="text-sm font-medium text-foreground">{booking.duration_minutes} min</span></div>
          <div className="flex justify-between border-t border-border pt-3"><span className="font-medium text-foreground">Total</span><span className="font-bold text-primary">{formatPrice(booking.price_guaranies)}</span></div>
        </div>

        <div className="text-left rounded-xl bg-accent/50 p-5 mb-8 text-sm space-y-2 text-foreground">
          <p>📍 <strong>Dirección:</strong> {CLINIC_ADDRESS}</p>
          <p>⏰ Te pedimos llegar 10 minutos antes de tu consulta.</p>
          <p>🔄 Para cambios o cancelaciones, contactanos por WhatsApp con al menos 24h de anticipación.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={handleDownloadIcs} variant="outline" size="lg"><Calendar size={18} /> Agregar al calendario</Button>
          <Button onClick={handleWhatsApp} variant="whatsapp" size="lg"><MessageCircle size={18} /> Enviar por WhatsApp</Button>
          <Button asChild variant="outline" size="lg"><Link to="/"><Home size={18} /> Volver al inicio</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
