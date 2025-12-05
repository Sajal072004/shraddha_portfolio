import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState } from "react";
import workCategoriesData from "@/data/workCategories.json";
import { Navigation } from "@/components/Navigation";

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  platform: string;
  link: string;
  date: string;
  engagement: {
    likes?: number;
    comments?: number;
    shares?: number;
    views?: number;
    viewers?: number;
  };
}

interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  icon: string;
  posts: Post[];
}

const WorkCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const category = workCategoriesData.categories.find(
    (cat: Category) => cat.id === categoryId
  );

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation name="Sharaddha Namdeo" />
      
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
              {category.title}
            </h1>
            <div className="w-24 h-1.5 bg-primary/60 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {category.description}
            </p>
            <Badge className="mt-4 bg-primary/20 text-primary border border-primary/40 text-lg px-4 py-2">
              {category.posts.length} Projects
            </Badge>
          </div>
        </div>
      </section>

      {/* Posts Grid Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.posts.map((post: Post, index: number) => (
              <Card
                key={post.id}
                className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-card overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Post Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback display if image doesn't load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center';
                        fallback.innerHTML = `
                          <div class="text-center p-4">
                            <p class="text-muted-foreground text-sm font-medium">${post.id}.jpg</p>
                            <p class="text-xs text-muted-foreground mt-2">Image pending</p>
                          </div>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  
                  {/* Platform Badge */}
                  <Badge className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm">
                    {post.platform}
                  </Badge>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/95 flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        size="lg"
                        variant="secondary"
                        className="gap-2 animate-float"
                      >
                        View on {post.platform}
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* View Link */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors text-sm group/link"
                  >
                    View Post
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkCategory;
