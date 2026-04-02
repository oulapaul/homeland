import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
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

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
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

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user by email and password
    const user = users.find(u => u.email === formData.email && u.password === formData.password);
    
    if (user) {
      // Store current user with more details
      localStorage.setItem('currentUser', JSON.stringify({ 
        id: user.id,
        name: user.name, 
        email: user.email,
        loggedIn: true,
        loginTime: new Date().toISOString()
      }));
      
      // Update last login time
      user.lastLogin = new Date().toISOString();
      localStorage.setItem('users', JSON.stringify(users));
      
      // Redirect to home
      setLoading(false);
      navigate('/');
    } else {
      // Check if email exists but password wrong
      const emailExists = users.find(u => u.email === formData.email);
      if (emailExists) {
        setError('Incorrect password. Please try again.');
      } else {
        setError('No account found with this email. Please sign up first.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-10">
      <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full mx-4">
        <button 
          onClick={() => navigate('/')} 
          className="text-muted-foreground mb-4 hover:text-foreground transition-colors flex items-center gap-1"
        >
          ← Back to Home
        </button>
        
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
        <p className="text-muted-foreground mb-6">Login to your Homeland account</p>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 mb-4 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
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
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-medium hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <button 
              onClick={() => navigate('/signup')} 
              className="text-accent hover:underline font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>
        
        {/* Demo credentials */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">Demo credentials:</p>
          <p className="text-xs text-muted-foreground text-center mt-1">
            Email: demo@homeland.com<br />
            Password: demo123
          </p>
          <button
            onClick={() => {
              setFormData({ email: 'demo@homeland.com', password: 'demo123' });
            }}
            className="w-full mt-3 text-xs text-accent hover:underline text-center"
          >
            Click to auto-fill demo credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;