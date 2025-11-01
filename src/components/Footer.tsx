import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:kaleemullahahsan0@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/axndev", label: "GitHub" },
    { icon: Linkedin, href: "https://pk.linkedin.com/in/kaleemullahahsan", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/kaleemullahahsn", label: "Twitter" }
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-subtle dark:bg-card/30 dark:backdrop-blur-sm border-t border-border dark:border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Kaleemullah Ahsan
              </h3>
              <p className="text-muted-foreground">
                WordPress & Frontend Developer crafting exceptional digital experiences.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      size="icon"
                      variant="outline"
                      className="border-2 border-border dark:border-border/50 hover:border-primary dark:hover:border-primary hover:text-primary dark:bg-card/50 transition-all duration-300"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <Icon className="w-5 h-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>kaleemullahahsan0@gmail.com</p>
                <p>Available for freelance opportunities</p>
                <Button 
                  className="mt-4 hover:shadow-glow-primary transition-all duration-300 dark:hover:bg-white/70"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Kaleemullah Ahsan. All rights reserved.</p>
            <p>Built with passion and clean code ✨</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
