import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Works } from "@/components/Works";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import portfolioData from "@/data/portfolio.json";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation name={portfolioData.personal.name} />

      <Hero
        name={portfolioData.personal.name}
        title={portfolioData.personal.title}
        tagline={portfolioData.personal.tagline}
        social={{
          linkedin: portfolioData.personal.social.linkedin,
          instagram: portfolioData.personal.social.instagram,
          email: portfolioData.personal.email,
        }}
      />

      <About summary={portfolioData.about.summary} highlights={portfolioData.about.highlights} />

      <Skills skills={portfolioData.skills} />

      <Experience experience={portfolioData.experience} />

      <Works />

      <Education education={portfolioData.education} certifications={portfolioData.certifications} />

      <Contact
        name={portfolioData.personal.name}
        email={portfolioData.personal.email}
        phone={portfolioData.personal.phone}
        location={portfolioData.personal.location}
        social={{
          linkedin: portfolioData.personal.social.linkedin,
          instagram: portfolioData.personal.social.instagram,
        }}
      />
    </div>
  );
};

export default Index;
