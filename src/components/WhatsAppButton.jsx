import React, { useState, useEffect } from 'react';
import whatsappIcon from '../assets/images/whatsapp-icon.jpeg';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Updated WhatsApp number
  const phoneNumber = "254112563029";
  const message = "Hello Oula Paul! I'm interested in learning more about Homeland programs.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group ${
        isVisible ? 'translate-x-0' : 'translate-x-20'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
      </div>
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with Oula
      </span>
    </a>
  );
};

export default WhatsAppButton;