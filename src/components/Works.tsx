import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Video, Mic, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import workCategoriesData from "@/data/workCategories.json";

interface WorkCategory {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  icon: string;
  posts: any[];
}

export const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const categories: WorkCategory[] = workCategoriesData.categories;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "megaphone":
        return <Megaphone className="w-12 h-12" />;
      case "video":
        return <Video className="w-12 h-12" />;
      case "mic":
        return <Mic className="w-12 h-12" />;
      default:
        return <Megaphone className="w-12 h-12" />;
    }
  };

  return (
    <section 
      id="works" 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background/95 to-primary/20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/25 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
            Featured Work
          </h2>
          <div className="w-24 h-1.5 bg-primary/60 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Explore my work across brand campaigns, video editing, and professional hosting
          </p>
        </div>

        {/* Three Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/work/${category.id}`}
              className="block group"
            >
              <Card
                className="break-inside-avoid border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-primary-foreground/10 backdrop-blur-sm overflow-hidden animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image/Cover */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img
                    src={category.coverImage}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to gradient with icon if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Icon Overlay - shows on hover or as fallback */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 flex flex-col items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-primary-foreground animate-float">
                      {getIcon(category.icon)}
                    </div>
                    <p className="text-primary-foreground font-semibold mt-4 flex items-center gap-2">
                      View {category.posts.length} Projects
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <Badge className="bg-primary/20 text-primary border border-primary/40">
                      {category.posts.length}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
