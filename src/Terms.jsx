import React from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

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

      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Homeland's website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Homeland provides a builder ecosystem platform for African founders, operators, and engineers. 
              Our services include educational resources, community access, and development tools.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              To access certain features, you must create an account. You are responsible for maintaining the 
              confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">4. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to use our service for any unlawful purpose or in any way that could damage, disable, 
              overburden, or impair our servers. You may not attempt to gain unauthorized access to any part of the service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content, features, and functionality of Homeland are owned by us and are protected by copyright, 
              trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">6. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice, for conduct that we 
              believe violates these Terms or is harmful to other users of the service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Homeland shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes 
              via email or through our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at legal@homeland.com.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">By using Homeland, you acknowledge that you have read and understood these Terms of Service.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;