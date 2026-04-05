import React from 'react';

const SuccessStats = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm uppercase tracking-wider text-accent font-semibold">By the Numbers</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Impact in 3 Years</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Startups Funded</span>
                  <span className="text-sm font-medium text-accent">85%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-2 bg-accent rounded-full w-[85%] animate-progress-bar"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Survival Rate (3+ years)</span>
                  <span className="text-sm font-medium text-accent">78%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-2 bg-accent rounded-full w-[78%] animate-progress-bar"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Jobs Created</span>
                  <span className="text-sm font-medium text-accent">1,200+</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-2 bg-accent rounded-full w-[90%] animate-progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-3">⭐</div>
            <div className="text-3xl font-bold text-foreground">4.9/5</div>
            <div className="text-muted-foreground text-sm mt-1">Founder Satisfaction Rating</div>
            <div className="mt-4 p-4 bg-card rounded-xl">
              <p className="text-sm italic text-muted-foreground">"Homeland changed everything for us. The mentorship and network are unparalleled."</p>
              <p className="text-accent font-semibold text-sm mt-2">— Dr. Sarah Wanjiku, AfyaGrid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStats;