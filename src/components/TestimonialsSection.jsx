import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Homeland gave us the infrastructure to scale without losing our identity. It's built by people who understand the ground reality here.",
    name: "Ada Okafor",
    title: "Founder",
    location: "Lagos",
    company: "PayChika",
    initials: "AO",
    accentColor: "orange",
  },
  {
    id: 2,
    quote: "The clean UI and serious execution mindset saved us months of design debt. Finally, a platform that matches global standards with local relevance.",
    name: "Kamau Maina",
    title: "CTO",
    location: "Nairobi",
    company: "SolarSync",
    initials: "KM",
    accentColor: "green",
  },
  {
    id: 3,
    quote: "Their design system made it possible for our team to ship fast without breaking consistency. The African-first visual identity is a huge differentiator.",
    name: "Esi Mensah",
    title: "Product Lead",
    location: "Accra",
    company: "LogiTrack",
    initials: "EM",
    accentColor: "blue",
  },
  {
    id: 4,
    quote: "We reduced our deployment time by 40% using Homeland's tooling. No fluff, just working systems.",
    name: "David Omondi",
    title: "CTO",
    location: "Kisumu",
    company: "Kilimo Tech",
    initials: "DO",
    accentColor: "purple",
  },
  {
    id: 5,
    quote: "Finally, a serious platform that doesn't treat Africa as an afterthought. The design tokens alone saved us weeks.",
    name: "Fatima El-Sayed",
    title: "Design Lead",
    location: "Cairo",
    company: "Nile Innovations",
    initials: "FE",
    accentColor: "orange",
  },
  {
    id: 6,
    quote: "Homeland feels like it was built by operators, not marketers. Every feature has a clear purpose.",
    name: "Thabo Nkosi",
    title: "Founder",
    location: "Johannesburg",
    company: "Amani Energy",
    initials: "TN",
    accentColor: "green",
  },
];

const getAccentClasses = (color) => {
  switch (color) {
    case 'orange':
      return {
        bg: 'bg-africa-orange',
        bgLight: 'bg-africa-orange/10',
        text: 'text-africa-orange',
        border: 'border-africa-orange',
        hover: 'hover:bg-africa-orange hover:text-white group-hover:bg-africa-orange',
        glow: 'hover:shadow-[0_0_20px_rgba(230,126,34,0.3)]',
      };
    case 'green':
      return {
        bg: 'bg-africa-green',
        bgLight: 'bg-africa-green/10',
        text: 'text-africa-green',
        border: 'border-africa-green',
        hover: 'hover:bg-africa-green hover:text-white group-hover:bg-africa-green',
        glow: 'hover:shadow-[0_0_20px_rgba(39,174,96,0.3)]',
      };
    case 'blue':
      return {
        bg: 'bg-africa-blue',
        bgLight: 'bg-africa-blue/10',
        text: 'text-africa-blue',
        border: 'border-africa-blue',
        hover: 'hover:bg-africa-blue hover:text-white group-hover:bg-africa-blue',
        glow: 'hover:shadow-[0_0_20px_rgba(41,128,185,0.3)]',
      };
    case 'purple':
      return {
        bg: 'bg-africa-purple',
        bgLight: 'bg-africa-purple/10',
        text: 'text-africa-purple',
        border: 'border-africa-purple',
        hover: 'hover:bg-africa-purple hover:text-white group-hover:bg-africa-purple',
        glow: 'hover:shadow-[0_0_20px_rgba(142,68,173,0.3)]',
      };
    default:
      return {
        bg: 'bg-accent',
        bgLight: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent',
        hover: 'hover:bg-accent hover:text-white group-hover:bg-accent',
        glow: 'hover:shadow-[0_0_20px_rgba(230,126,34,0.3)]',
      };
  }
};

const TestimonialsSection = ({
  title = "What the ecosystem says",
  subtitle = "From founders, operators, and engineers across Africa.",
  kicker = "Builders speak",
  showCta = true,
  ctaText = "Join the builder ecosystem",
  ctaLink = "/join",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];
  const accent = getAccentClasses(current.accentColor);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          {kicker && (
            <span className="text-sm uppercase tracking-wider text-accent font-semibold">
              {kicker}
            </span>
          )}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main testimonial card with hover effects - NO QUOTES */}
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`
              group relative bg-card border-2 border-border rounded-xl p-8 md:p-10 
              transition-all duration-500 cursor-pointer overflow-hidden
              ${accent.glow} hover:border-opacity-100
            `}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {/* Animated background gradient on hover */}
            <div className={`absolute inset-0 ${accent.bgLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Content - NO QUOTATION MARKS */}
            <div className="relative z-10">
              {/* Colored accent bar on hover */}
              <div className={`w-16 h-1 ${accent.bg} rounded-full mb-6 transition-all duration-300 group-hover:w-24`}></div>

              {/* Quote text - NO quotes around it */}
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 transition-colors duration-300 group-hover:text-foreground">
                {current.quote}
              </p>

              {/* Author info with hover color change */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div
                  className={`
                    w-12 h-12 rounded-full ${accent.bgLight} ${accent.text}
                    flex items-center justify-center font-bold text-lg
                    transition-all duration-300 group-hover:${accent.bg} group-hover:text-white
                  `}
                >
                  {current.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg transition-colors duration-300">
                    {current.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {current.title}, {current.company} • {current.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons with hover colors */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 
                       w-10 h-10 rounded-full bg-card border border-border 
                       flex items-center justify-center transition-all duration-300 shadow-lg
                       hover:bg-accent hover:text-white hover:border-accent hover:scale-110
                       focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 
                       w-10 h-10 rounded-full bg-card border border-border 
                       flex items-center justify-center transition-all duration-300 shadow-lg
                       hover:bg-accent hover:text-white hover:border-accent hover:scale-110
                       focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Dots indicator with hover colors */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((item, index) => {
            const dotAccent = getAccentClasses(item.accentColor);
            return (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? `w-8 ${dotAccent.bg}` 
                    : `w-2 bg-muted-foreground/30 ${dotAccent.hover}`
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Optional CTA */}
        {showCta && (
          <div className="text-center mt-12">
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-gold-light transition-all hover:gap-3 hover:scale-105"
            >
              {ctaText}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;