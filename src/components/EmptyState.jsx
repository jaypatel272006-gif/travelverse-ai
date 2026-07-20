import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, RefreshCw, Compass } from 'lucide-react';
import { mockDestinations } from '../data/mockData';

export const EmptyState = ({
  icon: Icon = Compass,
  title = "No Matches Plotted",
  message = "Our orbital mapping radar did not yield coordinates matching your current filter filters.",
  onRetry,
  retryLabel = "Recalibrate Search",
  quickActions = [],
  showSuggestions = true
}) => {
  // Grab a few top rated suggestions
  const suggestions = mockDestinations.slice(0, 3);

  return (
    <div className="w-full max-w-xl mx-auto py-12 px-6 rounded-3xl bg-slate-950/40 backdrop-blur-md border border-slate-200/10 dark:border-white/5 shadow-xl text-center flex flex-col items-center gap-6 relative overflow-hidden select-none">
      {/* Glow Effects */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Animated illustration container */}
      <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 relative">
        <div className="absolute inset-0 rounded-full border border-dashed border-teal-500/20 animate-spin duration-[20s]" />
        <Icon size={24} className="animate-pulse" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display font-black text-lg text-slate-100">{title}</h3>
        <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed font-semibold">
          {message}
        </p>
      </div>

      {/* Main Actions */}
      <div className="flex flex-wrap justify-center gap-3 w-full mt-2">
        {onRetry && (
          <button
            onClick={onRetry}
            className="py-2.5 px-5 bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RefreshCw size={13} className="animate-spin duration-3000" />
            {retryLabel}
          </button>
        )}
        {quickActions.map((act, i) => (
          <Link
            key={i}
            to={act.to}
            className="py-2.5 px-5 border border-slate-800 hover:bg-slate-800/40 text-slate-350 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
          >
            {act.icon}
            {act.label}
          </Link>
        ))}
      </div>

      {/* Suggestions Section */}
      {showSuggestions && (
        <div className="w-full border-t border-white/5 pt-6 flex flex-col gap-3 text-left">
          <span className="text-[10px] font-mono text-teal-400 font-bold uppercase tracking-widest flex items-center gap-1">
            <Sparkles size={11} /> Recommended Alternative Paths
          </span>
          <div className="grid grid-cols-3 gap-3">
            {suggestions.map((dest) => (
              <Link
                key={dest.id}
                to={`/destination/${dest.id}`}
                className="group p-2.5 rounded-xl bg-slate-900/60 border border-slate-850 hover:border-teal-500/40 transition-all flex flex-col gap-1.5"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full aspect-[4/3] rounded-lg object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-200 truncate group-hover:text-teal-400 transition-colors">
                    {dest.name}
                  </span>
                  <span className="text-[7.5px] font-mono font-bold text-slate-500 truncate">
                    {dest.country}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
