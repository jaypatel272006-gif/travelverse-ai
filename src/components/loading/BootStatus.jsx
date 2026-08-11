import React from 'react';

export const BootStatus = ({ statusText }) => {
  return (
    <div 
      className="font-mono text-[10px] text-teal-400 dark:text-teal-400 tracking-wider h-5 flex items-center justify-center gap-1.5 uppercase font-bold"
      role="status"
      aria-live="polite"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping shrink-0" />
      <span>{statusText}</span>
      <span className="w-1.5 h-3 bg-teal-400 animate-pulse ml-0.5" />
    </div>
  );
};
