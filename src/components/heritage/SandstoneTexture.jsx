import React from 'react';

export const SandstoneTexture = ({ opacity = 0.05, className = '' }) => {
  return (
    <div
      style={{ opacity }}
      className={`absolute inset-0 pointer-events-none bg-repeat ${className}`}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <filter id="sandstoneNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0.5 0 0 0 0.5  0 0.4 0 0 0.3  0 0 0.3 0 0.2  0 0 0 0.5 0" />
        </filter>
        <rect width="100" height="100" filter="url(#sandstoneNoise)" />
      </svg>
    </div>
  );
};

export default SandstoneTexture;
