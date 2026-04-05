import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Who can apply to Homeland programs?", a: "African founders with early-stage ideas or existing startups. We welcome tech-enabled businesses across all sectors — from fintech and agritech to healthtech and edtech." },
    { q: "Do you take equity in startups?", a: "Our programs are completely equity-free. We're a non-profit ecosystem hub focused on impact, not ownership. You keep 100% of your company." },
    { q: "Is there a cost to join?", a: "Scholarships are available for qualifying founders. We believe in access, not barriers. Partial or full scholarships can be applied for during the application process." },
    { q: "How long are the programs?", a: "Founders Lab: 12 weeks • Scale Accelerator: 16 weeks • Talent Academy: 8 weeks. All programs include both online and in-person components." },
    { q: "Where are your hubs located?", a: "We have physical hubs in Eldoret (KCB Bank Building, Kenyatta Street) and Nairobi (Watermark Business Park, Karen Ndege Road)." },
    { q: "Can I apply if I'm not in Kenya?", a: "Absolutely! We work with founders across Africa — Nigeria, Ghana, Rwanda, Uganda, Tanzania, Ethiopia, and beyond." }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">Got Questions?</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2">Everything you need to know about joining Homeland</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-5 flex justify-between items-center hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground">{faq.q}</span>
                <span className="text-accent text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;