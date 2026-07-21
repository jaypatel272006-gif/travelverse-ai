import React from 'react';

/**
 * TravelVerse UI - Reusable loading animation indicator
 */
export const Loader = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: "w-5 h-5 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4"
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className={`relative ${sizes[size] || sizes.medium} rounded-full border-t-teal-500 border-r-transparent border-b-teal-500/20 border-l-transparent animate-spin`} />
      <span className="text-[10px] font-bold text-slate-455 font-mono uppercase tracking-widest animate-pulse">Syncing Matrix...</span>
    </div>
  );
};
