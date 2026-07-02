import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Sparkles, Globe, Phone, Mail, MapPin, ShieldCheck, Lock, Cpu, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer = () => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast('Subscription successful! Check your inbox for exclusive deals.');
    setEmail('');
  };

  return (
    <footer className="bg-slate-955 text-slate-400 border-t border-slate-900 pt-28 pb-14 px-8 sm:px-16 lg:px-20 w-full text-left relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber Grid Backdrop */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20 relative z-10">
        {/* Brand Details */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 select-none group focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded-lg w-max">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles size={18} />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              Travel<span className="text-teal-400">Verse</span>
            </span>
          </Link>
          <p className="text-xs text-slate-455 leading-relaxed font-mono uppercase tracking-wide">
            curating the next epoch of global exploration. Our AI-driven engine maps travel genomes to coordinates, providing zero-friction trajectories.
          </p>
          {/* Social Links with Premium Magnetic Hover */}
          <div className="flex gap-3.5 mt-2">
            {[
              {
                label: 'Twitter',
                path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
              },
              {
                label: 'Instagram',
                svg: (
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                )
              },
              {
                label: 'Github',
                svg: (
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                )
              }
            ].map((soc, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 hover:border-teal-500/40 text-slate-400 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-teal-500" 
                aria-label={soc.label}
              >
                {soc.svg ? soc.svg : (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={soc.path} />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Explore Columns */}
        <div>
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2 w-max">Explore Grid</h4>
          <ul className="flex flex-col gap-3 text-xs font-semibold">
            {[
              { to: '/destinations', label: 'Popular Destinations', icon: '🌍' },
              { to: '/planner', label: 'AI Planner Console', icon: '🚀' },
              { to: '/road-trip-os', label: 'Road Trips', icon: '🚗' },
              { to: '/spiritual', label: 'Religious Tourism', icon: '🔱' },
              { to: '/packages', label: 'Premium Tours', icon: '📅' }
            ].map((link, idx) => (
              <li key={idx}>
                <Link to={link.to} className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-2 outline-none rounded">
                  <span>{link.icon}</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Columns */}
        <div>
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2 w-max">Resources</h4>
          <ul className="flex flex-col gap-3 text-xs font-semibold">
            {[
              { to: '/utilities', label: 'Travel Guides & Utilities', icon: '📚' },
              { to: '/weather', label: 'Atmosphere Advisor', icon: '🌦' },
              { to: '/legacy', label: 'Legacy Capsule Lab', icon: '⏳' },
              { to: '/challenges', label: 'Explorer Challenges', icon: '🏆' },
              { to: '/dashboard', label: 'Consciousness Dashboard', icon: '📊' }
            ].map((link, idx) => (
              <li key={idx}>
                <Link to={link.to} className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-2 outline-none rounded">
                  <span>{link.icon}</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2 w-max">Company</h4>
          <ul className="flex flex-col gap-3 text-xs font-semibold">
            {[
              { to: '/contact', label: 'Contact Support', icon: '📞' },
              { to: '#', label: 'Careers & Openings', icon: '💼' },
              { to: '/login', label: 'Explorer Access', icon: '🔑' },
              { to: '/register', label: 'Register Profile', icon: '📝' }
            ].map((link, idx) => (
              <li key={idx}>
                {link.to.startsWith('#') ? (
                  <a href={link.to} className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-2 outline-none rounded">
                    <span>{link.icon}</span> {link.label}
                  </a>
                ) : (
                  <Link to={link.to} className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-2 outline-none rounded">
                    <span>{link.icon}</span> {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Glassmorphic Newsletter & Trust Badges Block */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 z-10 relative items-center">
        {/* Newsletter Frosted Card */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left flex flex-col gap-4 shadow-xl">
          <div>
            <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest">Subscribe to Telemetry Streams</h4>
            <p className="text-xs text-slate-400 leading-relaxed mt-1">
              Receive alert thresholds on dynamic ticket dips, weather warnings, and offbeat coordinates direct from ATLAS.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-md mt-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter core registry contact email"
              className="w-full px-4 py-3.5 rounded-2xl bg-slate-950/60 border border-white/10 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/25 transition-all pr-12 font-mono"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 p-2 bg-gradient-to-r from-teal-500 to-sky-500 hover:shadow-[0_0_12px_rgba(45,212,191,0.4)] text-slate-950 rounded-xl transition-all duration-300 hover:scale-102 flex items-center justify-center shadow-md cursor-pointer"
              aria-label="Subscribe"
            >
              <Send size={14} />
            </button>
          </form>
        </div>

        {/* Security & Reliability Trust Badges */}
        <div className="lg:col-span-5 flex flex-col gap-4 text-left lg:pl-6">
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Secured Core Anchors</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: ShieldCheck, label: 'ISO 27001 Secured', color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
              { icon: Lock, label: '100% Encrypted Pay', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
              { icon: Cpu, label: 'AI Accuracy: 99.8%', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
              { icon: Award, label: 'Verified Operators', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' }
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border text-xs font-mono font-bold ${badge.color}`}
                >
                  <Icon size={15} />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom copyrights row */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-wider relative z-10">
        <p>© 2026 TravelVerse AI Inc. Curated under premium digital twinning guidelines.</p>
        <div className="flex gap-6 flex-wrap">
          <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
