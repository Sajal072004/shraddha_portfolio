import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  achievements: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section 
      id="experience" 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background/90 to-secondary/20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-accent/70 mx-auto rounded-full" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className={`group border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-card/85 backdrop-blur-sm overflow-hidden animate-fade-in ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

              <div className="p-8 relative z-10">
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                          <Briefcase className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-xl font-semibold text-foreground/90">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {exp.current && (
                      <Badge className="bg-accent/20 text-foreground border border-accent/40 text-sm px-3 py-1 animate-pulse-glow">
                        Current
                      </Badge>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-4 space-y-3">
                    {exp.achievements.slice(0, index === 0 ? exp.achievements.length : 3).map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 text-foreground/90"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <p className="text-base leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
