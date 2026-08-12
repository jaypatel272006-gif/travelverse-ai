import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, User, Menu, X, Globe, MapPin, Feather } from 'lucide-react';

export const SandstoneNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Explore', href: '#explore' },
    { name: 'Plan', href: '#planner' },
    { name: 'Journeys', href: '#spiritual' },
    { name: 'Map', href: '#map' },
    { name: 'Memories', href: '#memories' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-500">
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-6 py-3.5 flex items-center justify-between ${
        isScrolled 
          ? 'bg-[#24170F]/90 backdrop-blur-xl border border-[#B9854F]/30 shadow-2xl shadow-black/60' 
          : 'bg-[#1B120C]/60 backdrop-blur-md border border-[#B9854F]/20'
      }`}>
        
        {/* Brand Logo & Tagline */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5E34] to-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#F5E7CF] shadow-inner group-hover:scale-105 transition-transform duration-300">
            <Feather size={18} className="text-[#D4A66A] transform -rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-heritage text-lg sm:text-xl font-bold tracking-wide text-[#F5E7CF] flex items-center gap-1.5">
              TRAVELVERSE <span className="text-[#D4A66A] font-sans-ui text-xs font-semibold tracking-widest px-1.5 py-0.5 rounded bg-[#342117]/80 border border-[#B9854F]/30">AI</span>
            </span>
            <span className="text-[9px] font-sans-ui tracking-[0.2em] text-[#D4A66A]/80 uppercase hidden sm:block">
              Your Personal Travel Operating System
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] font-medium text-[#E8CFA8]/80 hover:text-[#F5E7CF] hover:border-b hover:border-[#D4A66A] transition-all py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6B4325] to-[#8B5E34] hover:from-[#8B5E34] hover:to-[#B9854F] text-[#F5E7CF] text-xs font-medium tracking-wider border border-[#D4A66A]/40 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            <Sparkles size={14} className="text-[#F5E7CF] animate-pulse" />
            <span>AI Assistant</span>
          </button>
          
          <div className="w-9 h-9 rounded-full bg-[#342117] border border-[#B9854F]/40 flex items-center justify-center text-[#D4A66A] cursor-pointer hover:border-[#D4A66A] transition-colors">
            <User size={16} />
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#E8CFA8] hover:text-[#F5E7CF] p-2 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 mx-2 p-6 rounded-3xl bg-[#24170F]/95 backdrop-blur-2xl border border-[#B9854F]/40 shadow-2xl flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-[#E8CFA8] hover:text-[#D4A66A] py-2 border-b border-[#342117] flex justify-between items-center"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#8B5E34]">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#6B4325] to-[#8B5E34] text-[#F5E7CF] text-xs font-semibold tracking-wider border border-[#D4A66A]/40 shadow-md">
                <Sparkles size={14} />
                <span>AI Concierge Assistant</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SandstoneNav;
