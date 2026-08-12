import React from 'react';

export const HeritageDivider = ({ className = '', label = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B9854F]/30 to-[#B9854F]/5" />
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rotate-45 bg-[#B9854F]" />
        {label && (
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4A66A] px-2">
            {label}
          </span>
        )}
        <div className="w-1.5 h-1.5 rotate-45 bg-[#B9854F]" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#B9854F]/30 to-[#B9854F]/5" />
    </div>
  );
};

export default HeritageDivider;
