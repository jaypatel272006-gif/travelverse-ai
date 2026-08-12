import React from 'react';
import { Sparkles, Bell, Search, User } from 'lucide-react';

export const TopBar = ({ title = 'Mission Workspace', onOpenSearch }) => {
  return (
    <header className="h-16 border-b border-[#B9854F]/20 bg-[#1B120C]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
      
      {/* Title */}
      <div className="flex items-center gap-3">
        <h1 className="font-serif-heritage text-lg font-bold text-[#F5E7CF] tracking-wide">
          {title}
        </h1>
        <span className="text-[9px] font-mono text-[#D4A66A] uppercase px-2 py-0.5 rounded bg-[#342117] border border-[#B9854F]/30">
          SANDSTONE OS
        </span>
      </div>

      {/* Right Action Icons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSearch}
          className="p-2 rounded-xl bg-[#24170F] border border-[#B9854F]/30 text-[#CDB99D] hover:text-[#F5E7CF] transition-colors"
          title="Search Command Bar"
        >
          <Search size={16} />
        </button>

        <button className="p-2 rounded-xl bg-[#24170F] border border-[#B9854F]/30 text-[#CDB99D] hover:text-[#F5E7CF] transition-colors relative">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4A66A]" />
        </button>

        <a
          href="/#planner"
          className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B9854F] hover:bg-[#D4A66A] text-[#1B120C] text-xs font-bold uppercase tracking-wider transition-all"
        >
          <Sparkles size={13} />
          <span>AI Assistant</span>
        </a>

        <div className="w-8 h-8 rounded-full bg-[#342117] border border-[#B9854F]/40 flex items-center justify-center text-[#D4A66A] cursor-pointer">
          <User size={15} />
        </div>
      </div>

    </header>
  );
};

export default TopBar;
