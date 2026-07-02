import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Sparkles, Globe, Phone, Mail, MapPin } from 'lucide-react';
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
    <footer className="bg-slate-900 text-slate-400 dark:bg-slate-950/80 border-t border-slate-800 pt-20 pb-10 px-6 sm:px-12 lg:px-16 w-full text-left relative overflow-hidden">
      {/* Decorative cosmic background glows */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand Details */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-2 select-none group focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded-lg w-max">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles size={18} />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              Travel<span className="text-teal-400">Verse</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-mono uppercase tracking-wide">
            Discover the future of travel. Let our AI twin engine curate your dream itineraries and connect you with verified, premium travel experiences worldwide.
          </p>
          <div className="flex gap-3 mt-1.5">
            <a 
              href="#" 
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-teal-500 hover:text-teal-400 hover:shadow-[0_0_12px_rgba(20,184,166,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-teal-500" 
              aria-label="Twitter"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-teal-500 hover:text-teal-400 hover:shadow-[0_0_12px_rgba(20,184,166,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-teal-500" 
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-teal-500 hover:text-teal-400 hover:shadow-[0_0_12px_rgba(20,184,166,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-teal-500" 
              aria-label="Github"
            >
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 w-max">Quick Links</h4>
          <ul className="flex flex-col gap-3.5 text-xs font-semibold">
            <li>
              <Link to="/destinations" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>🌍</span> Destinations Listing
              </Link>
            </li>
            <li>
              <Link to="/planner" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>🚀</span> AI Trip Planner
              </Link>
            </li>
            <li>
              <Link to="/flights" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>✈️</span> Flight Comparison
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>🏨</span> Hotel Bookings
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>📅</span> Premium Tours
              </Link>
            </li>
          </ul>
        </div>

        {/* Company & Support */}
        <div>
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 w-max">Company</h4>
          <ul className="flex flex-col gap-3.5 text-xs font-semibold">
            <li>
              <Link to="/contact" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>📞</span> Contact Support
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>💼</span> Careers & Openings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>🔍</span> About TravelVerse
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>🤝</span> Partner Program
              </a>
            </li>
          </ul>
        </div>

        {/* Travel Engines & Support */}
        <div>
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 w-max">Travel Engines</h4>
          <ul className="flex flex-col gap-3.5 text-xs font-semibold">
            <li>
              <Link to="/road-trip-os" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>🚗</span> Road Trip OS
              </Link>
            </li>
            <li>
              <Link to="/india-explorer" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>🔱</span> Religious Tourism
              </Link>
            </li>
            <li>
              <Link to="/planner" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>💻</span> AI Planner Portal
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-teal-400 hover:pl-1 transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded">
                <span>📊</span> Explorer Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter & Operating System download grid */}
      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-10 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-10 mb-8 z-10 relative">
        <div className="lg:col-span-6 text-left flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest">Stay Connected to the Grid</h4>
          <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
            Subscribe to get notifications on budget flight warnings and special luxury packages.
          </p>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-md mt-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter core contact email address"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/25 transition-all pr-12"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 p-2 bg-gradient-to-r from-teal-500 to-sky-500 hover:shadow-[0_0_12px_rgba(45,212,191,0.4)] text-slate-950 rounded-lg transition-all duration-300 hover:scale-102 flex items-center justify-center shadow-md cursor-pointer"
              aria-label="Subscribe"
            >
              <Send size={13} />
            </button>
          </form>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-3 text-left">
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">GET THE OPERATING SYSTEM CLIENTS</span>
          <div className="flex gap-3 max-w-md w-full">
            <button
              type="button"
              onClick={() => showToast('Native Android Package download starting...', 'info')}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 hover:border-teal-500/35 rounded-xl text-[10px] font-mono font-bold text-slate-350 hover:text-white transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer grow justify-center"
            >
              📥 ANDROID APK
            </button>
            <button
              type="button"
              onClick={() => showToast('iOS Simulator client build starting...', 'info')}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 hover:border-teal-500/35 rounded-xl text-[10px] font-mono font-bold text-slate-350 hover:text-white transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer grow justify-center"
            >
              📥 IOS CLIENT
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-wider relative z-10">
        <p>© 2026 TravelVerse AI Inc. Crafted with premium design principles.</p>
        <div className="flex gap-6 flex-wrap">
          <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
    </footer>
  );
};
