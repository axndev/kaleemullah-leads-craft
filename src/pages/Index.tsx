import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import WhyChooseMe from "@/components/WhyChooseMe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import MouseFollower from "@/components/MouseFollower";
import ImageShowcase from "@/components/ImageShowcase";
import BackToTop from "@/components/BackToTop";
import Marquee from "@/components/Marquee";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [locomotiveEnabled, setLocomotiveEnabled] = useState(false);

  useScrollAnimation();
  useLocomotiveScroll(locomotiveEnabled);

  useEffect(() => {
    if (!loading) {
      // Enable locomotive scroll after loader finishes
      setTimeout(() => setLocomotiveEnabled(true), 100);
    }
  }, [loading]);

  if (loading) {
    return <Loader onLoadComplete={() => setLoading(false)} />;
  }

  const marqueeItems = [
    "WordPress Expert",
    "React Developer",
    "Vue.js Specialist",
    "UI/UX Designer",
    "Frontend Master",
  ];

  return (
    <>
      <MouseFollower />
      <BackToTop />
      <main className="min-h-screen bg-background" data-scroll-container>
        <Header />
        <Hero />
        <Marquee items={marqueeItems} speed={30} />
        <About />
        <ImageShowcase />
        <Services />
        <Marquee items={marqueeItems} speed={35} direction="right" />
        <Portfolio />
        <Testimonials />
        <WhyChooseMe />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Index;
