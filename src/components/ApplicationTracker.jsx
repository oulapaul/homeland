import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationTracker = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const steps = ["Apply", "Review", "Interview", "Decision"];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-muted/20">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm uppercase tracking-wider text-accent font-semibold">Apply Now</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Ready to Join the Ecosystem?
        </h2>
        <p className="text-muted-foreground mb-8">Simple 4-step process to become part of Homeland.</p>
        
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center flex-1">
              <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-bold transition-all ${
                i + 1 <= step ? 'bg-accent text-white scale-110' : 'bg-muted text-muted-foreground'
              }`}>
                {i + 1}
              </div>
              <div className="text-xs mt-2 text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => navigate('/signup')}
          className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-gold-light transition-all hover:scale-105"
        >
          Start Your Application →
        </button>
      </div>
    </section>
  );
};

export default ApplicationTracker;