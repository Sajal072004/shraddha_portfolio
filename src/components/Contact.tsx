import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContactProps {
  name: string;
  email: string;
  phone: string;
  location: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export const Contact = ({ name, email, phone, location, social }: ContactProps) => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-foreground via-primary/90 to-accent/80 text-primary-foreground relative overflow-hidden">
      {/* Wildlife footprint trail */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='40' cy='40' rx='10' ry='12' fill='%23ffffff' transform='rotate(-20 40 40)'/%3E%3Cellipse cx='65' cy='55' rx='10' ry='12' fill='%23ffffff' transform='rotate(20 65 55)'/%3E%3Cellipse cx='90' cy='70' rx='10' ry='12' fill='%23ffffff' transform='rotate(-20 90 70)'/%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px'
      }} />
      
      {/* Animated wildlife elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in">
          Let's Connect
        </h2>
        <p className="text-xl md:text-2xl mb-16 text-primary-foreground/90 max-w-2xl mx-auto">
          Ready to bring your next project to life? Let's talk about how we can collaborate.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href={`mailto:${email}`}
            className="group"
          >
            <Card className="p-8 border-none bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-bold text-lg mb-2 text-primary-foreground">Email</p>
              <p className="text-sm text-primary-foreground/80 break-all">{email}</p>
            </Card>
          </a>

          <a
            href={`tel:${phone}`}
            className="group"
          >
            <Card className="p-8 border-none bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-bold text-lg mb-2 text-primary-foreground">Phone</p>
              <p className="text-sm text-primary-foreground/80">{phone}</p>
            </Card>
          </a>

          <Card className="p-8 border-none bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="font-bold text-lg mb-2 text-primary-foreground">Location</p>
            <p className="text-sm text-primary-foreground/80">{location}</p>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <Linkedin className="w-7 h-7 text-primary-foreground group-hover:text-secondary transition-colors" />
            </a>
          )}
          {social.instagram && (
            <a
              href={`https://instagram.com/${social.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <Instagram className="w-7 h-7 text-primary-foreground group-hover:text-secondary transition-colors" />
            </a>
          )}
        </div>

        <Button
          size="lg"
          onClick={() => window.location.href = `mailto:${email}`}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl group"
        >
          Get In Touch
          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
