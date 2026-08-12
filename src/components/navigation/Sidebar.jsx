import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Globe, Compass, Route, Map, Bookmark, 
  Sparkles, Sun, DollarSign, Dna, User, Settings, Feather 
} from 'lucide-react';

export const Sidebar = () => {
  const mainNav = [
    { name: 'HOME', path: '/', icon: Home },
    { name: 'EXPLORE', path: '/#explore', icon: Globe },
    { name: 'PLAN', path: '/#planner', icon: Compass },
    { name: 'JOURNEY', path: '/#spiritual', icon: Route },
    { name: 'MAP', path: '/#map', icon: Map },
    { name: 'MEMORIES', path: '/#memories', icon: Bookmark },
  ];

  const secondaryNav = [
    { name: 'INDIA EXPLORER', path: '/#story', icon: Sun },
    { name: 'SPIRITUAL UNIVERSE', path: '/#spiritual', icon: Sparkles },
    { name: 'BUDGET MANAGER', path: '/#planner', icon: DollarSign },
    { name: 'TRAVEL DNA', path: '/#dna', icon: Dna },
  ];

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-[#1B120C] border-r border-[#B9854F]/25 flex flex-col justify-between z-40 hidden lg:flex">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#B9854F]/20">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B5E34] to-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#F5E7CF] shadow-inner group-hover:scale-105 transition-transform duration-300">
            <Feather size={16} className="text-[#D4A66A] transform -rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-heritage text-base font-bold tracking-wide text-[#F5E7CF] flex items-center gap-1">
              TRAVELVERSE <span className="text-[#D4A66A] font-sans-ui text-[9px] font-semibold tracking-widest px-1 py-0.5 rounded bg-[#342117]">AI</span>
            </span>
            <span className="text-[8px] font-sans-ui tracking-[0.18em] text-[#D4A66A]/80 uppercase">
              Your Personal Travel OS
            </span>
          </div>
        </a>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-none">
        
        {/* Main Navigation */}
        <div className="space-y-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#9D8870] px-3 mb-2 block">
            CORE OPERATING SYSTEM
          </span>
          {mainNav.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wider text-[#CDB99D] hover:text-[#F5E7CF] hover:bg-[#24170F] transition-all group"
              >
                <Icon size={15} className="text-[#B9854F] group-hover:text-[#D4A66A] transition-colors" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#B9854F]/20 to-transparent mx-2" />

        {/* Secondary Explorer Modules */}
        <div className="space-y-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#9D8870] px-3 mb-2 block">
            EXPLORATION MODULES
          </span>
          {secondaryNav.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wider text-[#CDB99D] hover:text-[#F5E7CF] hover:bg-[#24170F] transition-all group"
              >
                <Icon size={15} className="text-[#B9854F] group-hover:text-[#D4A66A] transition-colors" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

      </div>

      {/* Bottom Profile & Settings Controls */}
      <div className="p-4 border-t border-[#B9854F]/20 bg-[#24170F]/50 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#342117] border border-[#B9854F]/40 flex items-center justify-center text-[#D4A66A]">
            <User size={15} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#F5E7CF]">Royal Explorer</span>
            <span className="text-[9px] font-mono text-[#D4A66A]">VERIFIED // USER</span>
          </div>
        </div>

        <button className="p-2 rounded-lg text-[#CDB99D] hover:text-[#F5E7CF] hover:bg-[#342117] transition-colors">
          <Settings size={16} />
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;
