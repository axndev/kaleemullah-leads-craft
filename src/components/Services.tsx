import { Code, Paintbrush, Layout, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "WordPress Development",
      description: "Custom themes, plugins, and solutions tailored to your needs. From simple blogs to complex e-commerce sites.",
      benefits: ["Custom Themes", "Plugin Development", "WooCommerce", "Performance Optimization"]
    },
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Modern, responsive interfaces built with React and Vue. Clean code, smooth interactions, pixel-perfect design.",
      benefits: ["React & Vue", "Responsive Design", "Modern UI/UX", "Cross-browser Compatible"]
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "User-centered designs that look beautiful and convert. From wireframes to high-fidelity prototypes.",
      benefits: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Zap,
      title: "Web Performance",
      description: "Speed optimization, SEO implementation, and technical improvements for better rankings and user experience.",
      benefits: ["Speed Optimization", "SEO Best Practices", "Core Web Vitals", "Analytics Setup"]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              What I Do
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-Stack Solutions for Modern Web Projects
            </p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group p-8 bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-elegant animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">0{index + 1}</div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-border">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
