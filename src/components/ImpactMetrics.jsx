import React from 'react';

const ImpactMetrics = () => {
  const metrics = [
    { number: "40+", label: "Startups Supported", sublabel: "$15M+ combined valuation", icon: "🚀" },
    { number: "25+", label: "Expert Mentors", sublabel: "From Google, Meta, Safaricom", icon: "🎓" },
    { number: "8", label: "Countries Present", sublabel: "Kenya, Nigeria, Ghana, Rwanda...", icon: "🌍" },
    { number: "500+", label: "Community Members", sublabel: "Founders, builders, investors", icon: "👥" }
  ];

  return (
    <div className="bg-gradient-to-r from-accent/5 via-background to-transparent rounded-2xl py-8 my-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((metric, i) => (
            <div key={i} className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-accent">{metric.number}</div>
              <div className="text-sm font-semibold text-foreground mt-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;