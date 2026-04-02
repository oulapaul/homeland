import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SetupAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Create admin user if not exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.find(u => u.email === 'admin@homeland.com');
    
    if (!adminExists) {
      const adminUser = {
        id: Date.now(),
        name: 'Super Admin',
        email: 'admin@homeland.com',
        password: 'admin123',
        role: 'admin',
        createdAt: new Date().toISOString()
      };
      users.push(adminUser);
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Admin user created!');
    }
    
    // Auto login as admin
    localStorage.setItem('currentUser', JSON.stringify({
      id: Date.now(),
      name: 'Super Admin',
      email: 'admin@homeland.com',
      role: 'admin',
      loggedIn: true
    }));
    
    // Redirect to admin panel
    setTimeout(() => navigate('/admin'), 1000);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">👑</div>
        <h2 className="font-display text-xl font-bold text-foreground">Setting up Admin...</h2>
        <p className="text-muted-foreground mt-2">Redirecting to Admin Panel</p>
      </div>
    </div>
  );
};

export default SetupAdmin;