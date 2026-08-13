import React from 'react';

export const SplitLayout = ({ left, right, ratio = '1:1', className = '' }) => {
  const gridRatio = {
    '1:1': 'grid-cols-1 md:grid-cols-2',
    '1:2': 'grid-cols-1 md:grid-cols-3 md:[&>:first-child]:col-span-1 md:[&>:last-child]:col-span-2',
    '2:1': 'grid-cols-1 md:grid-cols-3 md:[&>:first-child]:col-span-2 md:[&>:last-child]:col-span-1',
  }[ratio] || 'grid-cols-1 md:grid-cols-2';

  return (
    <div className={`grid gap-8 items-center ${gridRatio} ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default SplitLayout;
