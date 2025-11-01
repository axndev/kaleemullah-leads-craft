import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - 80; // offset for header height
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract gradient background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-foreground rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-foreground rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-muted-foreground">Hi, I'm</span>
              <span className="block text-foreground">Kaleemullah Ahsan</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
              WordPress & Frontend Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I transform ideas into powerful digital experiences. Specializing in
            React, Vue, and WordPress development that drives results and
            captivates users.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 dark:hover:bg-white/70"
                onClick={() => scrollToSection("contact")}
              >
                Let&apos;s Work Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 max-w-3xl mx-auto"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "70+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="space-y-1 sm:space-y-2">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
