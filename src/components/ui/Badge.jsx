import React from 'react';

/**
 * TravelVerse UI - Reusable metadata tag/badge
 */
export const Badge = ({ 
  children, 
  variant = 'teal', 
  className = '' 
}) => {
  const baseStyle = "px-2.5 py-0.5 rounded-full border text-[8px] font-bold font-mono tracking-wider uppercase backdrop-blur-md inline-flex items-center gap-1 shadow-sm";
  
  const variants = {
    teal: "bg-teal-500/10 border-teal-500/30 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)]",
    indigo: "bg-indigo-950/90 border-indigo-500/30 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    amber: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    rose: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    sky: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    orange: "bg-orange-500/10 border-orange-500/20 text-orange-400"
  };

  return (
    <span className={`${baseStyle} ${variants[variant] || variants.teal} ${className}`}>
      {children}
    </span>
  );
};
