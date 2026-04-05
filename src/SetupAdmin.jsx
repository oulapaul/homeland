import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetupAdmin = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Setting up Super Admin...');

  useEffect(() => {
    // Clear any existing admin conflicts
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Remove any existing admin with old email
    const filteredUsers = allUsers.filter(u => u.email !== 'benard12@gmail.com');
    const filteredUsersOld = filteredUsers.filter(u => u.email !== 'oulapaulinda2004@gmail.com');
    
    // Create fresh admin user with new credentials
    const adminUser = {
      id: Date.now(),
      name: 'Benard Admin',
      email: 'benard12@gmail.com',
      password: '1234567',
      role: 'super_admin',
      createdAt: new Date().toISOString()
    };
    
    filteredUsersOld.push(adminUser);
    localStorage.setItem('users', JSON.stringify(filteredUsersOld));
    
    // Auto login as super admin
    localStorage.setItem('currentUser', JSON.stringify({
      id: adminUser.id,
      name: adminUser.name,
      email: adminUser.email,
      role: 'super_admin',
      loggedIn: true,
      loginTime: new Date().toISOString()
    }));
    
    setStatus('Super Admin created! Redirecting...');
    
    // Redirect to admin panel
    setTimeout(() => {
      navigate('/admin');
    }, 1500);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">👑</div>
        <h2 className="font-display text-xl font-bold text-foreground">{status}</h2>
        <div className="mt-4 p-4 bg-muted/20 rounded-lg text-left">
          <p className="text-sm font-semibold text-foreground">Super Admin Credentials:</p>
          <p className="text-sm text-muted-foreground mt-1">📧 Email: <span className="text-accent">benard12@gmail.com</span></p>
          <p className="text-sm text-muted-foreground">🔑 Password: <span className="text-accent">1234567</span></p>
        </div>
      </div>
    </div>
  );
};

export default SetupAdmin;