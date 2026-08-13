import React from 'react';

export const Section = ({ id, children, className = '', title, overline }) => {
  return (
    <section id={id} className={`py-16 sm:py-24 border-b border-[#B9854F]/15 ${className}`}>
      {(title || overline) && (
        <div className="mb-12 max-w-3xl">
          {overline && (
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#D4A66A] block mb-2">
              {overline}
            </span>
          )}
          {title && (
            <h2 className="font-serif-heritage text-2xl sm:text-4xl font-bold text-[#F5E7CF] tracking-tight">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
