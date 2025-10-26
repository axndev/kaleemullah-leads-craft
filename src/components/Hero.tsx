import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Kaleemullah Ahsan
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
              WordPress & Frontend Developer
            </p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I transform ideas into powerful digital experiences. Specializing in React, Vue, and WordPress development that drives results and captivates users.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-base sm:text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base sm:text-lg px-8 py-6 border-2 hover:border-primary hover:text-primary transition-all duration-300"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-2 max-w-2xl mx-auto">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold text-primary">3+</p>
              <p className="text-sm sm:text-base text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold text-primary">70+</p>
              <p className="text-sm sm:text-base text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold text-primary">50+</p>
              <p className="text-sm sm:text-base text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
