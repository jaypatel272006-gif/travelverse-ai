import React from 'react';

export const Skeleton = ({ className = '', width, height }) => {
  return (
    <div
      style={{ width, height }}
      className={`animate-pulse rounded-xl bg-gradient-to-r from-[#24170F] via-[#342117] to-[#24170F] border border-[#B9854F]/10 ${className}`}
    />
  );
};

export default Skeleton;
