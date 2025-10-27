import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import WhyChooseMe from "@/components/WhyChooseMe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <WhyChooseMe />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
