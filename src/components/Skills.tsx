import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Code, Palette, BarChart, Wrench, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const iconMap: Record<string, any> = {
  "Social Media Management": Users,
  "Digital Marketing": BarChart,
  "Content Creation": Palette,
  "Tools & Platforms": Wrench,
  "Soft Skills": Users,
};

export const Skills = ({ skills }: SkillsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(skills[0]?.category || "");
  
  return (
    <section 
      id="skills" 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background/95 to-accent/15" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-secondary/25 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-secondary/70 mx-auto rounded-full" />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((skillCategory, index) => {
            const Icon = iconMap[skillCategory.category] || Code;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(skillCategory.category)}
                className={`group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === skillCategory.category
                    ? 'bg-secondary text-secondary-foreground shadow-lg scale-105'
                    : 'bg-card/60 backdrop-blur-sm text-foreground hover:bg-card/80 hover:scale-105 border border-border'
                }`}
              >
                <Icon className="w-5 h-5" />
                {skillCategory.category}
              </button>
            );
          })}
        </div>

        {/* Active Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skills
            .find(cat => cat.category === activeCategory)
            ?.items.map((skill, index) => (
              <Card
                key={index}
                className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/85 backdrop-blur-sm animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {skill}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                      <span className="text-secondary font-bold">✓</span>
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
