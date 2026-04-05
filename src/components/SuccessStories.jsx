import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessStories = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const stories = [
    // AFRICAN STORIES
    {
      id: 1,
      name: "Dr. Sarah Wanjiku",
      company: "AfyaGrid",
      story: "From medical student to healthtech founder serving 500,000+ patients across East Africa.",
      result: "$2.5M Raised",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=500&fit=crop",
      location: "Nairobi, Kenya",
      region: "Africa",
      quote: "Homeland believed in my vision. Today, we're saving lives across three countries.",
      detailed: "AfyaGrid now operates in Kenya, Uganda, and Tanzania, providing telemedicine services to over 500,000 patients."
    },
    {
      id: 2,
      name: "James Otieno",
      company: "SolarConnect",
      story: "Powering 50,000+ rural homes with clean, affordable solar energy.",
      result: "$1.2M Raised",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop",
      location: "Kisumu, Kenya",
      region: "Africa",
      quote: "The Founders Lab turned my passion into a business that lights up communities.",
      detailed: "SolarConnect has created 120+ jobs and brought renewable energy to remote villages across Western Kenya."
    },
    {
      id: 3,
      name: "Amina Hassan",
      company: "FarmFresh",
      story: "Connecting 25,000+ farmers to markets, reducing food waste by 70%.",
      result: "500% Growth",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=500&fit=crop",
      location: "Eldoret, Kenya",
      region: "Africa",
      quote: "Talent Academy gave me the skills to build something farmers truly need.",
      detailed: "FarmFresh now serves 25,000+ farmers across the Rift Valley, reducing post-harvest losses significantly."
    },
    // GLOBAL STORIES
    {
      id: 4,
      name: "Elon Musk",
      company: "Tesla & SpaceX",
      story: "Revolutionizing electric vehicles and space exploration.",
      result: "Global Leader",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=500&fit=crop",
      location: "Global",
      region: "Global",
      quote: "When something is important enough, you do it even if the odds are against you.",
      detailed: "Tesla has sold over 2M EVs. SpaceX has completed 200+ rocket landings, revolutionizing space travel."
    },
    {
      id: 5,
      name: "Strive Masiyiwa",
      company: "Econet Wireless",
      story: "Building Africa's first mobile telecom giant, connecting millions.",
      result: "100M+ Customers",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=500&fit=crop",
      location: "Zimbabwe",
      region: "Global",
      quote: "The greatest investment you can make is in people.",
      detailed: "Econet Wireless now serves over 100M customers across Africa, creating thousands of jobs."
    },
    {
      id: 6,
      name: "Juliana Rotich",
      company: "Ushahidi",
      story: "Creating crisis-mapping tools used in 150+ countries worldwide.",
      result: "Global Impact",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=500&fit=crop",
      location: "Kenya",
      region: "Global",
      quote: "Technology can be a tool for transparency and accountability.",
      detailed: "Ushahidi's platform has been deployed in over 150 countries for disaster response and election monitoring."
    }
  ];

  // Auto-rotate silently in background every 6 seconds
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovering, stories.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-sm uppercase tracking-wider text-accent font-semibold">
            Real Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
            From Vision to Victory
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Meet founders who turned their bold ideas into thriving businesses.
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Story Card */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              {/* Image Section - Left side */}
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <img 
                  src={currentStory.image} 
                  alt={currentStory.name}
                  className="w-full h-full object-cover"
                />
                {/* Region Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide ${
                    currentStory.region === 'Africa' 
                      ? 'bg-africa-green/90 text-white' 
                      : 'bg-africa-blue/90 text-white'
                  }`}>
                    {currentStory.region}
                  </span>
                </div>
              </div>

              {/* Content Section - Right side */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {currentStory.name}
                      </h3>
                      <p className="text-accent text-base font-medium mt-1">
                        {currentStory.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {currentStory.location}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-4 p-4 bg-accent/5 rounded-xl border-l-4 border-accent">
                    <p className="text-muted-foreground text-base italic leading-relaxed">
                      "{currentStory.quote}"
                    </p>
                  </div>

                  {/* Story */}
                  <p className="text-foreground text-base leading-relaxed mt-4">
                    {currentStory.story}
                  </p>

                  {/* Detailed Info */}
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    {currentStory.detailed}
                  </p>

                  {/* Result Badge */}
                  <div className="mt-4">
                    <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold">
                      🏆 {currentStory.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 bg-card border border-border rounded-full p-2 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Previous story"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 bg-card border border-border rounded-full p-2 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Next story"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators - Silent progress indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-accent' 
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>

        {/* Silent progress bar - no text, just visual */}
        <div className="max-w-md mx-auto mt-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              key={currentIndex}
              className="h-full bg-accent/50 rounded-full animate-progress"
              style={{ 
                width: '100%',
                animation: `progress 6s linear ${isHovering ? 'paused' : 'running'}`
              }}
            />
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button 
            onClick={() => navigate('/stories')}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium hover:bg-gold-light transition-all hover:gap-3"
          >
            View All Success Stories
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Add keyframe animation for progress bar */}
      <style>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;