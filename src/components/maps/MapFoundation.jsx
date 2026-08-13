import React from 'react';
import { Compass } from 'lucide-react';
import JaliPattern from '../heritage/JaliPattern';

export const MapFoundation = ({ children, title = 'HERITAGE ATLAS MAP', className = '' }) => {
  return (
    <div className={`relative w-full h-[500px] rounded-3xl bg-[#24170F] border border-[#B9854F]/40 shadow-2xl p-6 overflow-hidden flex flex-col justify-between ${className}`}>
      <JaliPattern opacity={0.06} />

      <div className="relative z-10 flex justify-between items-center border-b border-[#B9854F]/20 pb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#D4A66A] flex items-center gap-1.5">
          <Compass size={14} className="animate-spin duration-30000" />
          <span>{title}</span>
        </span>
        <span className="text-[10px] font-mono text-[#9D8870]">PROJECTION: ANCIENT EXPLORER ATLAS</span>
      </div>

      <div className="relative z-10 flex-1 my-4">
        {children}
      </div>

      <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-[#9D8870] border-t border-[#B9854F]/20 pt-3">
        <span>GRID: 26.9124° N, 75.7873° E</span>
        <span>LAYERS: TERRAIN • HERITAGE • SATELLITE</span>
      </div>
    </div>
  );
};

export default MapFoundation;
