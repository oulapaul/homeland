import React from 'react';
import { useNavigate } from 'react-router-dom';

const UpcomingEvents = () => {
  const navigate = useNavigate();
  
  const events = [
    { day: "30", month: "Apr", title: "Founders Lab Application Deadline", desc: "Last chance to apply for Cohort 2026", type: "Deadline" },
    { day: "15", month: "May", title: "Demo Day - Cohort 4", desc: "Meet our newest graduates", type: "Event" },
    { day: "5", month: "Jun", title: "Scale Accelerator Info Session", desc: "Learn about our Series A program", type: "Info Session" },
    { day: "20", month: "Jun", title: "Women in Tech Summit", desc: "Annual gathering of women founders", type: "Summit" }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <span className="text-sm uppercase tracking-wider text-accent font-semibold">Don't Miss Out</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">Upcoming Deadlines & Events</h2>
          </div>
          <button onClick={() => navigate('/events')} className="text-accent hover:underline text-sm flex items-center gap-1">
            View all <span>→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-accent/10 text-accent text-center px-3 py-2 rounded-lg min-w-[70px]">
                <div className="text-2xl font-bold">{event.day}</div>
                <div className="text-xs uppercase">{event.month}</div>
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{event.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{event.desc}</div>
                <div className="text-xs text-accent mt-1">{event.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;