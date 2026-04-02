import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (!formData.password) {
      setError('Please create a password');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Save user to localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === formData.email)) {
      setError('Email already registered. Please login instead.');
      setLoading(false);
      return;
    }

    // Add new user (in production, hash the password!)
    const newUser = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.toLowerCase(),
      password: formData.password, // Note: In production, hash this!
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login after signup
    localStorage.setItem('currentUser', JSON.stringify({ 
      id: newUser.id,
      name: newUser.name, 
      email: newUser.email,
      loggedIn: true,
      loginTime: new Date().toISOString()
    }));
    
    setSuccess(true);
    setLoading(false);
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full mx-4 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Account Created!</h2>
          <p className="text-muted-foreground mb-2">Welcome to Homeland, {formData.name}!</p>
          <p className="text-sm text-accent mb-4">You've been automatically logged in.</p>
          <p className="text-sm text-muted-foreground">Redirecting you to the homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-10">
      <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full mx-4">
        <button 
          onClick={() => navigate('/')} 
          className="text-muted-foreground mb-4 hover:text-foreground transition-colors flex items-center gap-1"
        >
          ← Back to Home
        </button>
        
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Create Account</h1>
        <p className="text-muted-foreground mb-6">Join the Homeland builder ecosystem</p>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 mb-4 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">Use at least 6 characters</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-medium hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <button 
              onClick={() => navigate('/login')} 
              className="text-accent hover:underline font-medium"
            >
              Login
            </button>
          </p>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          By signing up, you agree to our{' '}
          <button onClick={() => navigate('/terms')} className="text-accent hover:underline">Terms</button>
          {' '}and{' '}
          <button onClick={() => navigate('/privacy')} className="text-accent hover:underline">Privacy Policy</button>.
        </p>
      </div>
    </div>
  );
};

export default SignUp;