import React from 'react';
import { CountUp } from '../ui/CountUp';

export const HomeStatsCounters = () => {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-white/5 grid grid-cols-2 md:grid-cols-5 gap-8 font-mono">
      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
          <CountUp to="120" suffix="k+" />
        </span>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Happy Users</span>
      </div>
      
      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
          <CountUp to="250" suffix="+" />
        </span>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Destinations Available</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
          <CountUp to="45" suffix="" />
        </span>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Countries Mapped</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
          <CountUp to="850" suffix="k+" />
        </span>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Trips Planned</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
          4.9 ★
        </span>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Overall Rating</span>
      </div>
    </section>
  );
};
