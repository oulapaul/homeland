import React, { useState, useEffect } from 'react';
import TestimonialsSection from './components/TestimonialsSection';

// Import local images for all team members
import oulaPaulImage from './assets/images/oula-junior.jpg';
import aloyceImage from './assets/images/aloyce-otieno.jpg';
import callebImage from './assets/images/calleb-aomo.jpg';

// Import images from Unsplash
const heroImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop";
const galleryImage1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop";
const galleryImage2 = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop";
const galleryImage3 = "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop";
const galleryImage4 = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-card border border-border shadow-lg"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

const HeroSection = () => (
  <section 
    className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 container mx-auto max-w-7xl px-6 text-center">
      <span className="text-sm uppercase tracking-wider text-accent font-semibold">
        African innovation, global ambition
      </span>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
        Build the future with
        <span className="text-accent"> Homeland</span>
      </h1>
      <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
        A serious builder ecosystem for founders, operators, and engineers across Africa.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#" className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-gold-light transition-colors">Get Started</a>
        <a href="#" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">Learn More</a>
      </div>
    </div>
  </section>
);

// Video Section - Small inline video as part of the page (not floating)
const VideoSection = () => (
  <section className="py-12 bg-background border-b border-border">
    <div className="container mx-auto max-w-7xl px-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Small video player */}
        <div className="w-full md:w-80 flex-shrink-0">
          <div className="relative group rounded-xl overflow-hidden shadow-md border border-border hover:border-accent transition-all duration-300">
            <iframe
              className="w-full h-44"
              src="https://www.youtube.com/embed/kb_scuDUHls"
              title="Cryptography for Beginners"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video description */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
            <span className="text-accent text-sm">🎓</span>
            <span className="text-xs uppercase tracking-wider text-accent font-semibold">
              Featured Tutorial
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1 mb-2">
            Cryptography for Beginners
          </h3>
          <p className="text-muted-foreground text-sm max-w-lg">
            Learn SHA-256, AES, RSA encryption, password hashing with bcrypt, and build a complete encryption toolkit in Python.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-3 hover:gap-3 transition-all"
          >
            Watch full course on YouTube →
          </a>
        </div>
      </div>
    </div>
  </section>
);

const GallerySection = () => {
  const galleryImages = [
    { src: galleryImage1, alt: "Team collaboration", caption: "Collaboration" },
    { src: galleryImage2, alt: "Team meeting", caption: "Innovation" },
    { src: galleryImage3, alt: "Working together", caption: "Community" },
    { src: galleryImage4, alt: "Success story", caption: "Success" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">Our Community</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Builders across Africa</h2>
          <p className="text-muted-foreground mt-4">Join a growing community of innovators, founders, and engineers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="group overflow-hidden rounded-lg bg-card border border-border">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-3 text-center">
                <p className="text-sm font-medium text-foreground">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    { name: "Oula Paul", role: "CEO & Founder", image: oulaPaulImage },
    { name: "Aloyce Otieno", role: "CTO", image: aloyceImage },
    { name: "Calleb Aomo", role: "Head of Product", image: callebImage }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">Leadership</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Meet the team behind Homeland</h2>
          <p className="text-muted-foreground mt-4">Passionate builders dedicated to empowering Africa's tech ecosystem.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-accent/20 mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-accent text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => (
  <section className="py-20 bg-muted/20">
    <div className="container mx-auto max-w-7xl px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm uppercase tracking-wider text-accent font-semibold">Why choose us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Built for scale, designed for Africa</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { emoji: "🚀", title: "Blazing Fast", desc: "Lightning-fast performance optimized for African markets." },
          { emoji: "🔒", title: "Secure by Default", desc: "Enterprise-grade security with modern encryption." },
          { emoji: "🌍", title: "Pan-African", desc: "Built by Africans, for the global African ecosystem." }
        ].map((feature, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-accent text-xl">{feature.emoji}</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto max-w-7xl px-6 text-center text-muted-foreground">
      <p>© 2026 Homeland. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;