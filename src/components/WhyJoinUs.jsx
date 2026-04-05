import React from 'react';

const WhyJoinUs = () => {
  const benefits = [
    { icon: "💰", title: "Access to Capital", desc: "Connect with 50+ angel investors and VCs across Africa and globally." },
    { icon: "🎓", title: "World-Class Curriculum", desc: "Based on MIT, Stanford, and leading startup methodologies." },
    { icon: "🤝", title: "Lifetime Community", desc: "Join a network of 500+ alumni founders across Africa." },
    { icon: "🏢", title: "Workspace Access", desc: "Physical hub locations in Nairobi and Eldoret." },
    { icon: "📈", title: "Growth Support", desc: "Dedicated growth managers for each startup." },
    { icon: "🌐", title: "Global Network", desc: "Connections to international markets and partners." }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">Why Homeland?</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What Makes Our Ecosystem Different</h2>
          <p className="text-muted-foreground mt-4">Comprehensive support for every stage of your journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {benefit.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;