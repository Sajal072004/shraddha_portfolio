import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface AboutProps {
  summary: string;
  highlights: string[];
}

export const About = ({ summary, highlights }: AboutProps) => {
  return (
    <section 
      id="about" 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-primary/20 to-background/90" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-primary/60 mx-auto rounded-full" />
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-14 mb-12 bg-card/50 backdrop-blur-sm p-1 border border-border">
            <TabsTrigger value="overview" className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <User className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="highlights" className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Zap className="w-4 h-4 mr-2" />
              Highlights
            </TabsTrigger>
            <TabsTrigger value="mission" className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Target className="w-4 h-4 mr-2" />
              Mission
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="animate-fade-in">
            <Card className="border-none shadow-2xl bg-card/90 backdrop-blur-sm">
              <div className="p-8 md:p-12">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  {summary}
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="highlights" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="border-l-4 border-primary hover-lift group bg-card/90 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-foreground/90 text-base leading-relaxed">{highlight}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mission" className="animate-fade-in">
            <Card className="border-none shadow-2xl bg-card/90 backdrop-blur-sm">
              <div className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">My Mission</h3>
                <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  To blend creativity with strategy in the wild world of digital marketing, bringing innovative campaigns to life that resonate with audiences and drive meaningful results.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
