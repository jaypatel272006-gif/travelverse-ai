import React from 'react';
import { MapPin } from 'lucide-react';

export const MapMarker = ({ label, active = false, onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer group flex flex-col items-center gap-1 ${className}`}
    >
      {active && (
        <span className="absolute inset-0 rounded-full border border-[#D4A66A] animate-ping opacity-75 pointer-events-none" />
      )}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
        active 
          ? 'bg-[#B9854F] border-[#F5E7CF] text-[#1B120C] scale-110 shadow-lg' 
          : 'bg-[#342117] border-[#B9854F]/40 text-[#D4A66A] hover:border-[#D4A66A]'
      }`}>
        <MapPin size={14} />
      </div>
      {label && (
        <span className="px-2 py-0.5 rounded bg-[#1B120C] border border-[#B9854F]/30 text-[10px] font-mono text-[#F5E7CF] shadow-md">
          {label}
        </span>
      )}
    </div>
  );
};

export default MapMarker;
