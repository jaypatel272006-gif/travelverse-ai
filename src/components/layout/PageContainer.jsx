import React from 'react';

export const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-8 py-8 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
