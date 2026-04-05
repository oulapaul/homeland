import React from 'react';

const MentorSpotlight = () => {
  const mentors = [
    { 
      name: "Dr. Wanjiku Karanja", 
      expertise: "Venture Capital", 
      company: "Nairobi Angel Network", 
      image: "https://randomuser.me/api/portraits/women/4.jpg" 
    },
    { 
      name: "Michael Otieno", 
      expertise: "Product Strategy", 
      company: "Former Google", 
      image: "https://randomuser.me/api/portraits/men/5.jpg" 
    },
    { 
      name: "Fatima Abdallah", 
      expertise: "Growth Marketing", 
      company: "Meta", 
      image: "https://randomuser.me/api/portraits/women/6.jpg" 
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">Expert Guidance</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Meet Our Mentors</h2>
          <p className="text-muted-foreground mt-4">Learn from industry leaders who've been where you want to go.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <div key={i} className="text-center group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent transition-all duration-300">
                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mt-4">{mentor.name}</h3>
              <p className="text-accent text-sm">{mentor.expertise}</p>
              <p className="text-muted-foreground text-sm">{mentor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSpotlight;