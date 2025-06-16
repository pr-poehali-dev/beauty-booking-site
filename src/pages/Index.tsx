import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import SpecialistsPreview from "@/components/SpecialistsPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesPreview />
      <SpecialistsPreview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
