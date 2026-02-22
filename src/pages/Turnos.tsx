import Layout from "@/components/layout/Layout";
import BookingStepper from "@/components/booking/BookingStepper";
import { useLanguage } from "@/i18n/LanguageContext";

const Turnos = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-background min-h-screen pb-20 lg:pb-8">
        <div className="bg-gradient-to-b from-accent/50 to-background pt-10 pb-6 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("booking.page_title")}
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t("booking.page_subtitle")}
          </p>
        </div>
        <BookingStepper />
      </section>
    </Layout>
  );
};

export default Turnos;
