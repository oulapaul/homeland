import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [message, setMessage] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [registerError, setRegisterError] = useState('');

  useEffect(() => {
    // Check if current user is admin
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Super admin email (UPDATED)
    const adminEmail = 'benard12@gmail.com';
    
    if (currentUser.email !== adminEmail) {
      setMessage('Access denied. Admin only.');
      setTimeout(() => navigate('/'), 2000);
      return;
    }
    
    setCurrentAdmin(currentUser);
    loadUsers();
  }, [navigate]);

  const loadUsers = () => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    // Filter out the super admin (UPDATED)
    const regularUsers = allUsers.filter(u => u.email !== 'benard12@gmail.com');
    setUsers(regularUsers);
  };

  const handleRegisterChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
    setRegisterError('');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegisterError('');

    // Validation
    if (!newUser.name.trim()) {
      setRegisterError('Please enter full name');
      return;
    }

    if (!newUser.email.trim()) {
      setRegisterError('Please enter email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUser.email)) {
      setRegisterError('Please enter a valid email address');
      return;
    }

    if (!newUser.password) {
      setRegisterError('Please enter a password');
      return;
    }

    if (newUser.password.length < 6) {
      setRegisterError('Password must be at least 6 characters');
      return;
    }

    if (newUser.password !== newUser.confirmPassword) {
      setRegisterError('Passwords do not match');
      return;
    }

    // Get existing users
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (allUsers.find(u => u.email === newUser.email)) {
      setRegisterError('Email already registered');
      return;
    }

    // Create new user
    const newUserObj = {
      id: Date.now(),
      name: newUser.name.trim(),
      email: newUser.email.toLowerCase(),
      password: newUser.password,
      role: 'user',
      createdBy: currentAdmin?.email,
      createdAt: new Date().toISOString()
    };

    allUsers.push(newUserObj);
    localStorage.setItem('users', JSON.stringify(allUsers));
    
    setMessage(`User ${newUser.name} has been registered successfully!`);
    setShowRegisterForm(false);
    setNewUser({ name: '', email: '', password: '', confirmPassword: '' });
    loadUsers();
    
    setTimeout(() => setMessage(''), 3000);
  };

  const logoutUser = (userEmail) => {
    if (userEmail === currentAdmin?.email) {
      setMessage('You cannot logout yourself from here!');
      return;
    }
    
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = allUsers.map(u => {
      if (u.email === userEmail) {
        return { ...u, forceLogout: true, lastLogout: new Date().toISOString() };
      }
      return u;
    });
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser.email === userEmail) {
      localStorage.removeItem('currentUser');
    }
    
    setMessage(`User ${userEmail} has been logged out successfully!`);
    loadUsers();
    setTimeout(() => setMessage(''), 3000);
  };

  const deleteUser = (userEmail) => {
    if (confirm(`Are you sure you want to delete user: ${userEmail}?`)) {
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = allUsers.filter(u => u.email !== userEmail);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (currentUser.email === userEmail) {
        localStorage.removeItem('currentUser');
      }
      
      setMessage(`User ${userEmail} has been deleted!`);
      loadUsers();
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const logoutAllUsers = () => {
    if (confirm('Are you sure you want to logout ALL users? They will need to login again.')) {
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = allUsers.map(u => {
        // Updated admin email check
        if (u.email !== 'benard12@gmail.com') {
          return { ...u, forceLogout: true, lastLogout: new Date().toISOString() };
        }
        return u;
      });
      
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      // Updated admin email check
      if (currentUser.email !== 'benard12@gmail.com') {
        localStorage.removeItem('currentUser');
      }
      
      setMessage('All users have been logged out!');
      loadUsers();
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (!currentAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Access Denied</h2>
          <p className="text-muted-foreground">{message || 'Admin access only.'}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Site
              </button>
              <h1 className="font-display text-xl font-bold text-foreground">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                👑 {currentAdmin.name}
              </span>
              <button
                onClick={() => {
                  localStorage.removeItem('currentUser');
                  navigate('/');
                }}
                className="text-red-500 text-sm hover:underline"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-foreground">{users.length}</div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-2xl font-bold text-foreground">
              {users.filter(u => u.createdAt).length}
            </div>
            <div className="text-sm text-muted-foreground">Registered Users</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-2">➕</div>
            <button
              onClick={() => setShowRegisterForm(!showRegisterForm)}
              className="w-full bg-accent/10 hover:bg-accent/20 text-accent py-2 rounded-lg transition-colors"
            >
              {showRegisterForm ? 'Hide Form' : 'Register User'}
            </button>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-2">⚡</div>
            <button
              onClick={logoutAllUsers}
              className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 py-2 rounded-lg transition-colors"
            >
              Logout All Users
            </button>
          </div>
        </div>

        {/* Message Alert */}
        {message && (
          <div className="mb-6 bg-green-500/10 border border-green-500 text-green-500 rounded-lg p-3 text-sm">
            {message}
          </div>
        )}

        {/* Register User Form */}
        {showRegisterForm && (
          <div className="mb-8 bg-card border border-border rounded-xl p-6">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Register New User</h2>
            {registerError && (
              <div className="mb-4 bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-2 text-sm">
                {registerError}
              </div>
            )}
            <form onSubmit={handleRegisterSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleRegisterChange}
                  placeholder="Enter full name"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleRegisterChange}
                  placeholder="user@example.com"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleRegisterChange}
                  placeholder="At least 6 characters"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={newUser.confirmPassword}
                  onChange={handleRegisterChange}
                  placeholder="Re-enter password"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:bg-gold-light transition-colors"
                >
                  Register User
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowRegisterForm(false);
                    setNewUser({ name: '', email: '', password: '', confirmPassword: '' });
                    setRegisterError('');
                  }}
                  className="bg-muted text-muted-foreground px-6 py-2 rounded-lg font-medium hover:bg-muted/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Users Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="font-display text-xl font-semibold text-foreground">Registered Users</h2>
            <p className="text-sm text-muted-foreground">Manage, logout, or delete users from the system</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Name</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Email</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Joined</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Created By</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center px-6 py-8 text-muted-foreground">
                      No users registered yet. Use the "Register User" button to add users.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.email} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-3 text-sm text-foreground">{user.name}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        {user.createdBy || 'Self'}
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-3">
                          <button
                            onClick={() => logoutUser(user.email)}
                            className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                          >
                            Logout
                          </button>
                          <button
                            onClick={() => deleteUser(user.email)}
                            className="text-red-500 hover:text-red-600 text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Admin Info */}
        <div className="mt-6 p-4 bg-muted/20 rounded-lg text-center">
          <p className="text-xs text-muted-foreground">
            👑 You are logged in as Super Admin. You can register new users, logout any user, or delete accounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;