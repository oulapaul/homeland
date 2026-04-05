import React from 'react';

// Import custom images
import whatsappIcon from '../assets/images/whatsapp-icon.jpeg';
import instagramIcon from '../assets/images/instagram-icon.jpeg';
import facebookIcon from '../assets/images/facebook-icon.png';
import linkedinIcon from '../assets/images/linkedin-icon.png';
import gmailIcon from '../assets/images/gmail-icon.png';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61567837176790",
      icon: facebookIcon,
      isImage: true,
      color: "hover:bg-[#1877F2]",
      bg: "bg-[#1877F2]/10"
    },
    {
      name: "Twitter",
      url: "https://x.com/oulapaul_?t=P9KlYlCk4Dix0Rha1qD-Wg&s=09",
      icon: "🐦",
      isImage: false,
      color: "hover:bg-[#1DA1F2]",
      bg: "bg-[#1DA1F2]/10"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/oula_paul/profilecard/?igsh=NmFxN2pwZTU4cGpi",
      icon: instagramIcon,
      isImage: true,
      color: "hover:bg-[#E4405F]",
      bg: "bg-[#E4405F]/10"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/oula-paul-876b37346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: linkedinIcon,
      isImage: true,
      color: "hover:bg-[#0077B5]",
      bg: "bg-[#0077B5]/10"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254112563029",
      icon: whatsappIcon,
      isImage: true,
      color: "hover:bg-[#25D366]",
      bg: "bg-[#25D366]/10"
    },
    {
      name: "Gmail",
      url: "mailto:oulapaulinda@gmail.com",
      icon: gmailIcon,
      isImage: true,
      color: "hover:bg-[#EA4335]",
      bg: "bg-[#EA4335]/10"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinks.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 px-4 py-2 rounded-full border border-border ${social.bg} hover:text-white ${social.color} transition-all duration-300 hover:scale-105 hover:border-transparent`}
          aria-label={social.name}
        >
          {social.isImage ? (
            <img 
              src={social.icon} 
              alt={social.name} 
              className="w-5 h-5 rounded-full object-cover"
            />
          ) : (
            <span className="text-lg">{social.icon}</span>
          )}
          <span className="text-sm font-medium hidden sm:inline">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;