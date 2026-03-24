import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import WhatsAppWizard from "@/components/whatsapp-booking/WhatsAppWizard";

const Turnos = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("servicio") || undefined;

  return (
    <Layout>
      <section className="bg-background min-h-screen pb-20 lg:pb-8">
        <div className="bg-gradient-to-b from-accent/50 to-background pt-10 pb-6 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Solicitar turno
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Completá los datos y te contactamos por WhatsApp para confirmar tu turno.
          </p>
        </div>
        <WhatsAppWizard preselectedServiceId={preselectedService} />
      </section>
    </Layout>
  );
};

export default Turnos;
