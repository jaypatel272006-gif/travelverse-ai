import React from 'react';

export const HeritageCorner = ({ position = 'top-left', color = '#D4A66A', size = 16, className = '' }) => {
  const posClasses = {
    'top-left': 'top-0 left-0 border-t-2 border-l-2',
    'top-right': 'top-0 right-0 border-t-2 border-r-2',
    'bottom-left': 'bottom-0 left-0 border-b-2 border-l-2',
    'bottom-right': 'bottom-0 right-0 border-b-2 border-r-2',
  }[position] || 'top-0 left-0 border-t-2 border-l-2';

  return (
    <div
      style={{ borderColor: color, width: size, height: size }}
      className={`absolute pointer-events-none ${posClasses} ${className}`}
    />
  );
};

export default HeritageCorner;
