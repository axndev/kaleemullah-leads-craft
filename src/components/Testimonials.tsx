import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content: "Working with Kaleemullah was an absolute pleasure. He transformed our outdated WordPress site into a modern, high-performing platform that increased our conversions by 40%. His attention to detail and technical expertise are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, DesignHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content: "The React dashboard Kaleemullah built for us exceeded all expectations. Clean code, beautiful UI, and exceptional performance. He's not just a developer—he's a problem solver who truly understands business needs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content: "Kaleemullah delivered our e-commerce platform ahead of schedule with features we didn't even know we needed. His proactive approach and communication throughout the project were outstanding. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-scroll-fade">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Client Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              What People Say About Working With Me
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8 animate-scroll-stagger">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group p-8 bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-elegant relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="space-y-6 relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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

export default Testimonials;
