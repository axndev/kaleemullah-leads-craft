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
import ImageShowcase from "@/components/ImageShowcase";
import BackToTop from "@/components/BackToTop";
import Marquee from "@/components/Marquee";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Index = () => {
  const [loading, setLoading] = useState(true);

  useScrollAnimation();

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
      <BackToTop />
      <main className="min-h-screen bg-background">
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
