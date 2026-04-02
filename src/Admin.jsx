import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if current user is admin
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Super admin email (you can change this)
    const adminEmail = 'admin@homeland.com';
    
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
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Filter out admin from list to prevent self-logout
    const regularUsers = allUsers.filter(u => u.email !== 'admin@homeland.com');
    setUsers(regularUsers);
  };

  const logoutUser = (userEmail) => {
    // Check if trying to logout self
    if (userEmail === currentAdmin?.email) {
      setMessage('You cannot logout yourself from here!');
      return;
    }
    
    // Get all users
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Remove the user (or mark as logged out)
    const updatedUsers = allUsers.map(u => {
      if (u.email === userEmail) {
        return { ...u, forceLogout: true, lastLogout: new Date().toISOString() };
      }
      return u;
    });
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // If the logged out user is currently logged in, force logout
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser.email === userEmail) {
      localStorage.removeItem('currentUser');
    }
    
    setMessage(`User ${userEmail} has been logged out successfully!`);
    loadUsers();
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const deleteUser = (userEmail) => {
    if (confirm(`Are you sure you want to delete user: ${userEmail}?`)) {
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = allUsers.filter(u => u.email !== userEmail);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // If deleted user was logged in, force logout
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
      // Keep only the admin user
      const adminUser = users.find(u => u.email === 'admin@homeland.com');
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Mark all non-admin users as force logged out
      const updatedUsers = allUsers.map(u => {
        if (u.email !== 'admin@homeland.com') {
          return { ...u, forceLogout: true, lastLogout: new Date().toISOString() };
        }
        return u;
      });
      
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Clear currentUser if it's not admin
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (currentUser.email !== 'admin@homeland.com') {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        {/* Users Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="font-display text-xl font-semibold text-foreground">Registered Users</h2>
            <p className="text-sm text-muted-foreground">Manage and logout users from the system</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Name</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Email</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Joined</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center px-6 py-8 text-muted-foreground">
                      No users registered yet.
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
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1 text-xs text-green-500">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
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
            👑 You are logged in as Super Admin. You can logout any user from this panel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;