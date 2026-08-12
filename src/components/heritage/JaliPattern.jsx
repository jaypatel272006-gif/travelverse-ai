import React from 'react';

export const JaliPattern = ({ opacity = 0.08, className = '' }) => {
  return (
    <div
      style={{ opacity }}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="jaliPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 0 L40 20 L20 40 L0 20 Z M20 8 L32 20 L20 32 L8 20 Z"
              fill="none"
              stroke="#D4A66A"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jaliPattern)" />
      </svg>
    </div>
  );
};

export default JaliPattern;
