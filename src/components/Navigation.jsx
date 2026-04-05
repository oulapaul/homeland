import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  const dropdownItems = [
    { name: "Dashboard", path: "/", icon: "🏠" },
    { name: "Sign Up", path: "/signup", icon: "📝" },
    { name: "Login", path: "/login", icon: "🔑" },
    { name: "Admin", path: "/admin", icon: "👑" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Home Dropdown */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className={`font-display font-bold text-xl transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                Homeland
              </span>
            </button>

            {/* Home Dropdown Menu */}
            <div className="dropdown-container relative ml-4">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-foreground hover:bg-accent/10' 
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <span>Menu</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 animate-fadeIn">
                  {dropdownItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        navigate(item.path);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-accent/10 transition-colors flex items-center gap-2"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side - empty for now, ThemeToggle can go here if needed */}
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;