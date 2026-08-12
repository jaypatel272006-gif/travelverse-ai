import React from 'react';
import { motion } from 'framer-motion';

export const GlassPanel = ({
  children,
  className = '',
  hoverEffect = false,
  glowColor = 'teal', // teal, sky, purple, amber, rose
  onClick,
  ...props
}) => {
  const glowStyles = {
    teal: 'hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]',
    sky: 'hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    amber: 'hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    rose: 'hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]'
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -3 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 shadow-2xl overflow-hidden text-left transition-all duration-300 ${
        hoverEffect ? `cursor-pointer ${glowStyles[glowColor]}` : ''
      } ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassPanel;
