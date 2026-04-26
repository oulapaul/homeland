import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkUser = () => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        setUser(JSON.parse(currentUser));
      } else {
        setUser(null);
      }
    };
    
    checkUser();
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

  // CRITICAL CHANGE: Return null when not logged in - NO buttons shown
  if (!user) {
    return null;
  }

  const isSuperAdmin = user.email === 'benard12@gmail.com' || user.email === 'admin@homeland.com';

  return (
    <div className="fixed top-16 left-4 z-50">
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
            
            {isSuperAdmin && (
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