import { Zap, Users, Trophy, Clock } from "lucide-react";

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "I prioritize efficiency without compromising quality. Projects delivered on time, every time."
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "70+ successful projects with measurable outcomes. Real solutions that drive business growth."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your vision is my mission. Clear communication, transparency, and collaboration at every step."
    },
    {
      icon: Clock,
      title: "Ongoing Support",
      description: "I'm here beyond launch. Continuous support and maintenance to keep your site running smoothly."
    }
  ];

  return (
    <section className="py-20 sm:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why Choose Me
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Your Success Is My Priority
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="group text-center space-y-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mx-auto w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
