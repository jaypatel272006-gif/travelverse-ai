import React from 'react';
import { Feather, Heart } from 'lucide-react';

export const SandstoneFooter = () => {
  return (
    <footer className="bg-[#1B120C] border-t border-[#B9854F]/20 pt-16 pb-12 px-4 sm:px-8 text-[#E8CFA8]/80 font-sans-ui">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        
        {/* Brand & Tagline Column */}
        <div className="md:col-span-2 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A]">
              <Feather size={18} className="transform -rotate-12" />
            </div>
            <span className="font-serif-heritage text-2xl font-bold text-[#F5E7CF] tracking-wide">
              TRAVELVERSE <span className="text-[#D4A66A] font-sans-ui text-xs font-semibold px-1.5 py-0.5 rounded bg-[#342117]">AI</span>
            </span>
          </div>
          
          <p className="text-xs text-[#E8CFA8]/70 font-light max-w-sm leading-relaxed">
            Your Personal Travel Operating System. Intelligently planning meaningful cultural journeys across India and the world.
          </p>

          <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest px-3 py-1 rounded bg-[#24170F] border border-[#B9854F]/30 mt-2">
            SYSTEM VERSION: 2100.8.12 // HERITAGE EDITION
          </span>
        </div>

        {/* Column 1: Explore */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif-heritage text-sm text-[#F5E7CF] font-bold uppercase tracking-wider">Explore</h4>
          <ul className="flex flex-col gap-2 text-xs font-light">
            <li><a href="#explore" className="hover:text-[#D4A66A] transition-colors">India Heritage</a></li>
            <li><a href="#explore" className="hover:text-[#D4A66A] transition-colors">World Destinations</a></li>
            <li><a href="#explore" className="hover:text-[#D4A66A] transition-colors">Curated Circuits</a></li>
            <li><a href="#explore" className="hover:text-[#D4A66A] transition-colors">Boutique Stays</a></li>
          </ul>
        </div>

        {/* Column 2: Plan */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif-heritage text-sm text-[#F5E7CF] font-bold uppercase tracking-wider">Plan</h4>
          <ul className="flex flex-col gap-2 text-xs font-light">
            <li><a href="#planner" className="hover:text-[#D4A66A] transition-colors">AI Itinerary Planner</a></li>
            <li><a href="#dna" className="hover:text-[#D4A66A] transition-colors">Travel DNA Profile</a></li>
            <li><a href="#planner" className="hover:text-[#D4A66A] transition-colors">Budget Optimizer</a></li>
            <li><a href="#planner" className="hover:text-[#D4A66A] transition-colors">Road Trip OS</a></li>
          </ul>
        </div>

        {/* Column 3: Discover & Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif-heritage text-sm text-[#F5E7CF] font-bold uppercase tracking-wider">Discover</h4>
          <ul className="flex flex-col gap-2 text-xs font-light">
            <li><a href="#spiritual" className="hover:text-[#D4A66A] transition-colors">Spiritual Trails</a></li>
            <li><a href="#map" className="hover:text-[#D4A66A] transition-colors">Interactive Atlas</a></li>
            <li><a href="#memories" className="hover:text-[#D4A66A] transition-colors">Memories Vault</a></li>
            <li><a href="#hero" className="hover:text-[#D4A66A] transition-colors">Privacy & Terms</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#B9854F]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#E8CFA8]/50 font-mono">
        <span>© 2026 TravelVerse AI. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Designed with <Heart size={12} className="text-[#D4A66A]" /> for Sandstone Heritage Architecture
        </span>
      </div>
    </footer>
  );
};

export default SandstoneFooter;
