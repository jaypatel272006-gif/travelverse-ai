import React from 'react';

export const Badge = ({
  children,
  variant = 'teal', // teal, sky, purple, amber, emerald, rose, slate
  size = 'md', // sm, md
  icon: Icon = null,
  className = ''
}) => {
  const sizes = {
    sm: 'px-2 py-0.5 text-[8px]',
    md: 'px-3 py-1 text-[9.5px]'
  };

  const variants = {
    teal: 'bg-teal-500/15 border-teal-500/30 text-teal-400',
    sky: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
    purple: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
    amber: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
    emerald: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    rose: 'bg-rose-500/15 border-rose-500/30 text-rose-400',
    slate: 'bg-white/5 border-white/10 text-slate-300'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider rounded-full border backdrop-blur-md ${sizes[size]} ${variants[variant]} ${className}`}>
      {Icon && <Icon size={size === 'sm' ? 9 : 11} className="shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
