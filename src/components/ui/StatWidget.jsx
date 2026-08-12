import React from 'react';

export const StatWidget = ({
  label,
  value,
  subtext,
  icon: Icon,
  color = 'teal',
  className = ''
}) => {
  const colors = {
    teal: 'text-teal-400 border-teal-500/20 bg-teal-500/5',
    sky: 'text-sky-400 border-sky-500/20 bg-sky-500/5',
    amber: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
    purple: 'text-purple-400 border-purple-500/20 bg-purple-500/5'
  };

  return (
    <div className={`p-4 rounded-2xl border backdrop-blur-md flex items-center justify-between gap-4 ${colors[color]} ${className}`}>
      <div className="flex flex-col gap-0.5 text-left">
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">{label}</span>
        <span className="text-xl font-display font-black text-white">{value}</span>
        {subtext && <span className="text-[9px] font-mono text-slate-400 mt-0.5">{subtext}</span>}
      </div>
      {Icon && (
        <div className={`p-2.5 rounded-xl border border-current opacity-80 shrink-0`}>
          <Icon size={18} />
        </div>
      )}
    </div>
  );
};

export default StatWidget;
