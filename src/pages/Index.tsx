import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import FacialMap from "@/components/FacialMap";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChoose />
      <Services />
      <FacialMap />
      <Testimonials />
      <About />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
