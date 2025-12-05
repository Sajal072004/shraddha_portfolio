import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Instagram, Mail, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  social: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export const Hero = ({ name, title, tagline, social }: HeroProps) => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-foreground/90 to-accent/80" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 animate-fade-in tracking-tight">
          {name.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-4" style={{ animationDelay: `${i * 0.1}s` }}>
              {word}
            </span>
          ))}
        </h1>
        
        <div className="max-w-3xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-3 font-light">
            {title}
          </p>
          <p className="text-xl md:text-2xl text-secondary font-semibold animate-float">
            {tagline}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 border border-primary-foreground/20"
            >
              <Linkedin className="w-6 h-6 text-primary-foreground group-hover:text-secondary transition-colors" />
            </a>
          )}
          {social.instagram && (
            <a
              href={`https://instagram.com/${social.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 border border-primary-foreground/20"
            >
              <Instagram className="w-6 h-6 text-primary-foreground group-hover:text-secondary transition-colors" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="group p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 border border-primary-foreground/20"
            >
              <Mail className="w-6 h-6 text-primary-foreground group-hover:text-secondary transition-colors" />
            </a>
          )}
        </div>

        {/* CTA */}
        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in border-2 border-secondary/20"
          style={{ animationDelay: '0.6s' }}
        >
          Explore My Journey
          <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-primary-foreground/60 text-sm font-medium">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};
