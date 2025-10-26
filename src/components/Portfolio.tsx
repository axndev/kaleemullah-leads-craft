import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "WordPress + WooCommerce",
      description: "Full-featured online store with custom checkout flow and inventory management.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      tags: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
      link: "#"
    },
    {
      title: "SaaS Dashboard",
      category: "React Application",
      description: "Modern analytics dashboard with real-time data visualization and user management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "API"],
      link: "#"
    },
    {
      title: "Corporate Website",
      category: "Vue.js + Headless CMS",
      description: "High-performance corporate site with dynamic content management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Nuxt", "Strapi", "SEO"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      category: "Custom WordPress Theme",
      description: "Unique portfolio showcase with custom post types and advanced filtering.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["WordPress", "Custom Theme", "ACF", "jQuery"],
      link: "#"
    },
    {
      title: "Booking System",
      category: "React + Node.js",
      description: "Complete appointment booking system with calendar integration and notifications.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      title: "Restaurant Website",
      category: "WordPress + Custom Plugin",
      description: "Modern restaurant site with online ordering and reservation system.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      tags: ["WordPress", "Plugin Dev", "Stripe", "Maps API"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-20 bg-gradient-subtle">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured Work
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Selected Projects That Showcase My Expertise
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-elegant animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-primary font-medium">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
