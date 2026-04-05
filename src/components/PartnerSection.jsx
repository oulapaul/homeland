import React from 'react';

const PartnerSection = () => {
  const partners = [
    "UNDP", "Google", "Meta", "Safaricom", "Mastercard Foundation", "AWS",
    "Microsoft", "Stanford Seed", "Villgro Africa", "Norrsken", "Briter Bridges", "AfriLabs"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">Ecosystem Partners</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Backed by Leading Organizations</h2>
          <p className="text-muted-foreground mt-2">Trusted by global and African institutions</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {partners.map((partner, i) => (
            <div key={i} className="bg-card border border-border rounded-lg px-4 py-2 opacity-70 hover:opacity-100 hover:border-accent transition-all duration-300">
              <span className="text-sm font-medium text-foreground">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;