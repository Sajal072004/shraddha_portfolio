import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolioData from "@/data/portfolio.json";

interface SocialPost {
  title: string;
  description: string;
  platform: string;
  image: string;
  link: string;
  engagement?: string;
}

const SocialMediaPosts = () => {
  const posts: SocialPost[] = portfolioData.socialMediaPosts || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation name={portfolioData.personal.name} />
      
      <main className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link to="/#works">
              <Button variant="outline" className="mb-6 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
              Social Media Posts
            </h1>
            <p className="text-muted-foreground text-lg">
              A collection of engaging social media content across various platforms
            </p>
            <div className="w-24 h-1.5 bg-primary/60 mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="relative h-64 bg-muted/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-muted-foreground text-sm font-medium">
                        {post.image}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-12 h-12 text-primary-foreground animate-float" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {post.platform}
                    </span>
                    {post.engagement && (
                      <span className="text-xs text-muted-foreground">
                        {post.engagement}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {post.link && (
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors text-sm group/link"
                    >
                      View Post
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No social media posts available yet.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SocialMediaPosts;
