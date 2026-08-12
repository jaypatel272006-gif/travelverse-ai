import React from 'react';

export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variantStyles = {
    default: 'bg-[#342117] text-[#D4A66A] border-[#B9854F]/30',
    gold: 'bg-[#B9854F]/20 text-[#D4A66A] border-[#D4A66A]/40',
    dark: 'bg-[#1B120C]/80 text-[#E8CFA8] border-[#B9854F]/20',
    terracotta: 'bg-[#A85D3A]/20 text-[#E8CFA8] border-[#A85D3A]/40',
  }[variant] || 'bg-[#342117] text-[#D4A66A] border-[#B9854F]/30';

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
