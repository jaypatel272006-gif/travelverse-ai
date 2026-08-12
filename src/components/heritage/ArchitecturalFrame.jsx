import React from 'react';

export const ArchitecturalFrame = ({ children, className = '', cornerColor = '#D4A66A' }) => {
  return (
    <div className={`relative p-1 ${className}`}>
      {/* Corner Brackets */}
      <div style={{ borderColor: cornerColor }} className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 pointer-events-none" />
      <div style={{ borderColor: cornerColor }} className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 pointer-events-none" />
      <div style={{ borderColor: cornerColor }} className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 pointer-events-none" />
      <div style={{ borderColor: cornerColor }} className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 pointer-events-none" />

      {/* Frame Body */}
      <div className="relative rounded-2xl overflow-hidden border border-[#B9854F]/25 bg-[#24170F]">
        {children}
      </div>
    </div>
  );
};

export default ArchitecturalFrame;
