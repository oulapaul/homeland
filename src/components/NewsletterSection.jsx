import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-12 border-t border-border bg-muted/10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">Join Our Community</h3>
            <p className="text-muted-foreground text-sm">Get weekly insights from African builders.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:w-64 bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
              required
            />
            <button 
              type="submit"
              className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition-colors"
            >
              {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;