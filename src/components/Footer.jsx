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
    <footer className="bg-slate-900 text-slate-400 dark:bg-slate-950/70 border-t border-slate-800 pt-16 pb-8 px-6 sm:px-12 lg:px-16 w-full text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand Details */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 select-none group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              Travel<span className="text-teal-400">Verse</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Discover the future of travel. Let our AI curate your dream itineraries and connect you with verified, premium travel experiences worldwide.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Github">
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/destinations" className="hover:text-teal-450 transition-colors">Destinations Listing</Link>
            </li>
            <li>
              <Link to="/planner" className="hover:text-teal-450 transition-colors">AI Trip Planner</Link>
            </li>
            <li>
              <Link to="/flights" className="hover:text-teal-450 transition-colors">Flight Comparison</Link>
            </li>
            <li>
              <Link to="/hotels" className="hover:text-teal-450 transition-colors">Hotel Bookings</Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-teal-450 transition-colors">Premium Tours</Link>
            </li>
          </ul>
        </div>

        {/* Agency details */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">TravelVerse HQ</h4>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="text-teal-400 shrink-0" />
              <span>789 Wanderlust Blvd, Suite 100, San Francisco, CA</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-teal-400 shrink-0" />
              <span>+1 (800) 555-PLAN</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-teal-400 shrink-0" />
              <span>support@travelverse.ai</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Newsletter</h4>
          <p className="text-sm text-slate-450 mb-4 leading-relaxed">
            Subscribe to get notifications on budget flight warnings and special luxury packages.
          </p>
          <form onSubmit={handleSubscribe} className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors pr-12"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 p-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-colors flex items-center justify-center shadow-md"
              aria-label="Subscribe"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 TravelVerse AI Inc. Crafted with modern design principles for maximum conversions.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
