import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check for logged in user on component mount and when localStorage changes
    const checkUser = () => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        setUser(JSON.parse(currentUser));
      } else {
        setUser(null);
      }
    };
    
    checkUser();
    
    // Listen for storage events (in case user logs in/out in another tab)
    window.addEventListener('storage', checkUser);
    
    return () => {
      window.removeEventListener('storage', checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    setIsOpen(false);
    navigate('/');
    window.location.reload();
  };

  if (!user) {
    return (
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={() => navigate('/login')}
          className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-light transition-colors shadow-lg"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="bg-card border border-border text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors shadow-lg"
        >
          Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 hover:bg-muted transition-colors shadow-lg"
        >
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <span className="text-sm font-medium text-foreground">
            {user.name ? user.name.split(' ')[0] : 'User'}
          </span>
          <span className="text-muted-foreground text-xs">▼</span>
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
            <div className="p-3 border-b border-border bg-muted/20">
              <p className="text-sm font-semibold text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{user.email}</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/');
              }}
              className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors flex items-center gap-2"
            >
              <span>🏠</span> Dashboard
            </button>
            
            {/* Admin Panel Link - Only shows for admin user */}
            {user.email === 'admin@homeland.com' && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/admin');
                }}
                className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors flex items-center gap-2 border-t border-border"
              >
                <span>👑</span> Admin Panel
              </button>
            )}
            
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/contact');
              }}
              className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors flex items-center gap-2"
            >
              <span>📧</span> Support
            </button>
            
            <div className="border-t border-border">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-muted transition-colors flex items-center gap-2"
              >
                <span>🚪</span> Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;