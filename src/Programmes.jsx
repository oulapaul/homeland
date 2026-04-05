import React from 'react';
import { useNavigate } from 'react-router-dom';

const Programmes = () => {
  const navigate = useNavigate();

  const programmes = [
    {
      title: "Founders Lab",
      stage: "Idea · Pre-seed",
      description: "A practical program for first-time founders to validate, build, and launch their first product.",
      icon: "🚀",
      duration: "12 weeks",
      format: "Hybrid (Online + In-person)",
      whatYouGet: [
        "1-on-1 mentorship from successful founders",
        "Access to prototype funding up to $10,000",
        "Workshops on product-market fit",
        "Demo day with investors"
      ]
    },
    {
      title: "Scale Accelerator",
      stage: "Seed · Series A",
      description: "For post-revenue companies ready to systemise growth and prepare for institutional capital.",
      icon: "📈",
      duration: "16 weeks",
      format: "In-person with remote options",
      whatYouGet: [
        "Growth strategy consulting",
        "Investor readiness preparation",
        "Access to venture capital network",
        "PR and marketing support"
      ]
    },
    {
      title: "Talent Academy",
      stage: "Skills · Talent",
      description: "Hands-on learning tracks that grow product, tech, and business talent for African ventures.",
      icon: "🎓",
      duration: "8 weeks",
      format: "Online (Self-paced with live sessions)",
      whatYouGet: [
        "Industry-recognized certification",
        "Portfolio development projects",
        "Job placement assistance",
        "Access to employer network"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <button 
            onClick={() => navigate('/')} 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Programmes
          </h1>
          <p className="text-muted-foreground text-lg">
            Curated journeys for founders and operators at different stages – 
            from first-time builders to scaling teams.
          </p>
        </div>

        <div className="space-y-8">
          {programmes.map((programme, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
                  <div className="text-5xl">{programme.icon}</div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {programme.title}
                    </h2>
                    <p className="text-accent text-sm font-medium mt-1">{programme.stage}</p>
                    <p className="text-muted-foreground mt-3">{programme.description}</p>
                    
                    <div className="flex gap-4 mt-4 text-sm">
                      <span className="text-foreground">📅 {programme.duration}</span>
                      <span className="text-foreground">📍 {programme.format}</span>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-semibold text-foreground mb-2">What you'll get:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {programme.whatYouGet.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="text-accent">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-6 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:bg-gold-light transition-colors">
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programmes;