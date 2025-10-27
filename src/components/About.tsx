import { Code2, Palette, Rocket, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Blending aesthetics with functionality for memorable experiences"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized solutions that load fast and run smooth"
    },
    {
      icon: Target,
      title: "Goal-Focused",
      description: "Every project aligned with your business objectives"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-subtle dark:bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Header */}
          <div className="text-center space-y-4 animate-scroll-fade">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting Digital Excellence Through Code & Creativity
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-scroll-left">
              <p className="text-lg text-foreground leading-relaxed">
                With over 3 years of experience in web development, I've helped businesses and individuals bring their digital visions to life. My expertise spans across WordPress development, modern frontend frameworks like React and Vue, and creating user experiences that convert.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of clean code, thoughtful design, and strategic thinking. Every project is an opportunity to push boundaries and deliver solutions that not only look stunning but drive real business results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring the latest web technologies, contributing to open-source projects, and continuously learning to stay at the forefront of web development.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 animate-scroll-stagger">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group p-6 bg-card dark:bg-card/50 dark:backdrop-blur-sm rounded-2xl border-2 border-border dark:border-border/50 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-elegant dark:hover:shadow-glow-primary"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
