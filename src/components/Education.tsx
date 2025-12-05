import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

interface EducationProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const Education = ({ education, certifications }: EducationProps) => {
  return (
    <section 
      id="education" 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-background/95 to-accent/20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3.5}s`,
              animationDuration: `${2.5 + Math.random() * 2.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
            Education & Certifications
          </h2>
          <div className="w-24 h-1.5 bg-secondary/60 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/85 backdrop-blur-sm animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8 relative z-10">
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-semibold text-foreground/90 mb-4">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/85 backdrop-blur-sm animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-6 relative z-10">
                    <Badge className="mb-4 bg-accent/20 text-foreground border border-accent/40 hover:bg-accent/30">
                      {cert.year}
                    </Badge>
                    
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-foreground/80">{cert.issuer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
