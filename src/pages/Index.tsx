import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import StagesSection from "@/components/home/StagesSection";
import DirectorSection from "@/components/home/DirectorSection";
import TestimonialBanner from "@/components/home/TestimonialBanner";
import FeaturedServices from "@/components/home/FeaturedServices";
import AppointmentTeaser from "@/components/home/AppointmentTeaser";
import QuickContact from "@/components/home/QuickContact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <StagesSection />
      <DirectorSection />
      <TestimonialBanner />
      <FeaturedServices />
      <AppointmentTeaser />
      <QuickContact />
    </Layout>
  );
};

export default Index;
