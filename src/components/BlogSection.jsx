import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const navigate = useNavigate();
  
  const posts = [
    { type: "Guide", title: "How to Raise Your First Seed Round in Africa", readTime: "15 min read", color: "from-accent/20 to-transparent" },
    { type: "Success Story", title: "From Idea to $2.5M: The AfyaGrid Journey", readTime: "10 min read", color: "from-africa-green/20 to-transparent" },
    { type: "Event Recap", title: "Demo Day 2025: Highlights & Winners", readTime: "8 min read", color: "from-africa-orange/20 to-transparent" },
    { type: "Founder Insights", title: "Scaling Across Africa: Lessons from 8 Countries", readTime: "12 min read", color: "from-africa-blue/20 to-transparent" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <span className="text-sm uppercase tracking-wider text-accent font-semibold">Resources</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">From Our Blog</h2>
            <p className="text-muted-foreground text-sm mt-1">Insights, guides, and stories from our ecosystem</p>
          </div>
          <button onClick={() => navigate('/blog')} className="text-accent hover:underline text-sm flex items-center gap-1 mt-4 md:mt-0">
            View all posts <span>→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, i) => (
            <div key={i} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => navigate('/blog')}>
              <div className={`h-36 bg-gradient-to-r ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-3 left-3 bg-accent/90 text-white text-xs px-2 py-1 rounded-full">{post.type}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm leading-tight">{post.title}</h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="text-xs text-muted-foreground">{post.readTime}</div>
                  <div className="text-accent text-sm group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;