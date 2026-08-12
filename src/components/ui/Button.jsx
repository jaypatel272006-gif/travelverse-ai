import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  variant = 'primary', // primary, secondary, glass, outline, ghost, danger
  size = 'md', // sm, md, lg
  className = '',
  disabled = false,
  icon: Icon = null,
  iconPosition = 'left',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider transition-all duration-300 rounded-xl cursor-pointer select-none border disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'px-3 py-1.5 text-[10px] gap-1.5 min-h-[36px]',
    md: 'px-4 py-2.5 text-xs gap-2 min-h-[44px]',
    lg: 'px-6 py-3.5 text-sm gap-2.5 min-h-[52px]'
  };

  const variants = {
    primary: 'bg-teal-500 hover:bg-teal-400 text-slate-950 border-teal-400/50 shadow-[0_0_20px_rgba(45,212,191,0.25)] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]',
    secondary: 'bg-sky-500 hover:bg-sky-400 text-slate-950 border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]',
    glass: 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-100 border-white/10 hover:border-teal-500/40 backdrop-blur-md shadow-lg',
    outline: 'bg-transparent text-teal-400 border-teal-500/30 hover:border-teal-400 hover:bg-teal-500/10',
    ghost: 'bg-transparent text-slate-300 hover:text-white border-transparent hover:bg-white/5',
    danger: 'bg-rose-500/20 text-rose-400 border-rose-500/30 hover:bg-rose-500/30'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} className="shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} className="shrink-0" />}
    </motion.button>
  );
};

export default Button;
