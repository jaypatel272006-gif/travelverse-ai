import React from 'react';

export const ArchFrame = ({ children, className = '' }) => {
  return (
    <div className={`relative p-4 rounded-t-[100px] rounded-b-2xl bg-[#24170F] border border-[#B9854F]/35 shadow-xl overflow-hidden ${className}`}>
      {/* Arch Header linework */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-t border-l border-r border-[#D4A66A]/40 rounded-t-full pointer-events-none" />
      <div className="relative z-10 pt-6">
        {children}
      </div>
    </div>
  );
};

export default ArchFrame;
