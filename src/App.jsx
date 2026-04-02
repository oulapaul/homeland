import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TestimonialsSection from './components/TestimonialsSection';
import UserMenu from './components/UserMenu';
import SignUp from './SignUp';
import Login from './Login';
import Contact from './Contact';
import Terms from './Terms';
import Privacy from './Privacy';
import Admin from './Admin';
import SetupAdmin from './SetupAdmin';

// Import local images for all team members
import oulaPaulImage from './assets/images/oula-junior.jpg';
import aloyceImage from './assets/images/aloyce-otieno.jpg';
import callebImage from './assets/images/calleb-aomo.jpg';

// Hero background image
const heroImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop";

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

const HeroSection = ({ onGetStarted, onLearnMore }) => (
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
        <button
          onClick={onGetStarted}
          className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-gold-light transition-colors cursor-pointer"
        >
          Get Started
        </button>
        <button
          onClick={onLearnMore}
          className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors cursor-pointer"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
);

const VideoSection = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <section id="video-section" className="py-12 bg-background border-b border-border scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="relative group rounded-xl overflow-hidden shadow-md border border-border hover:border-accent transition-all duration-300">
              {isOnline ? (
                <iframe
                  className="w-full h-44"
                  src="https://www.youtube.com/embed/kb_scuDUHls"
                  title="Cryptography for Beginners"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-44 bg-gradient-to-br from-accent/20 to-muted flex flex-col items-center justify-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-sm text-muted-foreground text-center px-4">Connect to internet to watch</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
              <span className="text-accent text-sm">🎓</span>
              <span className="text-xs uppercase tracking-wider text-accent font-semibold">Featured Tutorial</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1 mb-2">Cryptography for Beginners</h3>
            <p className="text-muted-foreground text-sm max-w-lg">Learn SHA-256, AES, RSA encryption, password hashing with bcrypt.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const galleryImages = [
    { 
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop", 
      alt: "African tech entrepreneur", 
      caption: "Innovation & Technology" 
    },
    { 
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", 
      alt: "African startup team", 
      caption: "Team Collaboration" 
    },
    { 
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", 
      alt: "African business professionals", 
      caption: "Strategic Planning" 
    },
    { 
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop", 
      alt: "African tech community", 
      caption: "Community & Growth" 
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">Our Community</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Builders across Africa</h2>
          <p className="text-muted-foreground mt-4">Join a growing community of African innovators, founders, and engineers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="group overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition-all duration-300">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="p-4 text-center bg-card">
                <p className="text-sm font-semibold text-foreground">{img.caption}</p>
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
  <section id="features" className="py-20 bg-muted/20">
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

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto max-w-7xl px-6 text-center text-muted-foreground">
        <p>© 2026 Homeland. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() => navigate('/privacy')} className="hover:text-foreground transition-colors cursor-pointer">Privacy</button>
          <button onClick={() => navigate('/terms')} className="hover:text-foreground transition-colors cursor-pointer">Terms</button>
          <button onClick={() => navigate('/contact')} className="hover:text-foreground transition-colors cursor-pointer">Contact</button>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/signup');
    }
  };

  const handleLearnMore = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <UserMenu />
      <ThemeToggle />
      <HeroSection onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <VideoSection />
      <FeaturesSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/setup-admin" element={<SetupAdmin />} />
    </Routes>
  );
}

export default App;