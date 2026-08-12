import React from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'icon' | 'ai'
  size = 'md', // 'sm' | 'md' | 'lg'
  isLoading = false,
  isDisabled = false,
  icon: Icon,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-[11px]',
    md: 'px-5 py-2.5 text-xs',
    lg: 'px-7 py-3.5 text-xs sm:text-sm',
  }[size] || 'px-5 py-2.5 text-xs';

  // Variant classes
  const variantClasses = {
    primary: 'bg-[#B9854F] hover:bg-[#D4A66A] text-[#1B120C] font-bold shadow-lg shadow-[#8B5E34]/20 border border-[#D4A66A]/40',
    secondary: 'bg-[#24170F]/90 hover:bg-[#342117] text-[#F5E7CF] font-semibold border border-[#B9854F]/40 backdrop-blur-md',
    ghost: 'bg-transparent hover:bg-[#342117]/50 text-[#E8CFA8] hover:text-[#F5E7CF]',
    icon: 'p-2.5 rounded-full bg-[#342117] border border-[#B9854F]/40 text-[#D4A66A] hover:bg-[#4A2E1B] hover:text-[#F5E7CF]',
    ai: 'bg-gradient-to-r from-[#6B4325] via-[#8B5E34] to-[#B9854F] hover:from-[#8B5E34] hover:to-[#D4A66A] text-[#F5E7CF] font-bold border border-[#D4A66A]/50 shadow-xl shadow-[#8B5E34]/30',
  }[variant] || 'bg-[#B9854F] text-[#1B120C]';

  return (
    <button
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl uppercase tracking-widest transition-all duration-300 transform active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4A66A]/50
        ${sizeClasses}
        ${variantClasses}
        ${(isDisabled || isLoading) ? 'opacity-50 cursor-not-allowed transform-none' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <Loader2 size={14} className="animate-spin text-current" />
      ) : variant === 'ai' ? (
        <Sparkles size={14} className="text-[#F5E7CF] animate-pulse" />
      ) : Icon ? (
        <Icon size={14} className="text-current" />
      ) : null}

      <span>{children}</span>

      {variant === 'primary' && !isLoading && (
        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default Button;
