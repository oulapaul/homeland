import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate('/');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <button 
            onClick={() => navigate('/')} 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="text-muted-foreground text-sm">123 Homeland Avenue<br />Nairobi, Kenya</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-muted-foreground text-sm">hello@homeland.com<br />support@homeland.com</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm">+254 700 123 456<br />Mon-Fri, 9am-6pm EAT</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✅</div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-1">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-medium hover:bg-gold-light transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;