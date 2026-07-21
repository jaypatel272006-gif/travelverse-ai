import React from 'react';
import { Sparkles } from 'lucide-react';

export const HomeBudgetEstimation = ({
  budgetVal,
  setBudgetVal,
  durationVal,
  setDurationVal,
  handleQuickPlan
}) => {
  return (
    <section className="p-8 rounded-3xl bg-slate-955/40 backdrop-blur-xl border border-cyan-500/30 text-white flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.22),0_0_20px_rgba(20,184,166,0.1)]">
      <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Holographic corners details */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-400/40 pointer-events-none" />

      <div className="flex-1 text-left relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold mb-4 border border-teal-500/20">
          <Sparkles size={12} />
          <span>AI Estimation Engine</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl mb-3 leading-tight">
          Estimate Your Dream Trip Instantly
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed font-semibold">
          Drag the sliders to set your travel bounds. Our AI system will estimate accommodations, activities, and flight budgets, then generate your itinerary.
        </p>
      </div>

      <form onSubmit={handleQuickPlan} className="w-full lg:w-96 p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col gap-5 text-left relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-350">
            <span>Trip Budget Limit</span>
            <span className="text-teal-400 font-mono font-bold">₹{budgetVal.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="40000"
            max="400000"
            step="8000"
            value={budgetVal}
            onChange={(e) => setBudgetVal(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-350">
            <span>Duration (Days)</span>
            <span className="text-teal-400 font-mono font-bold">{durationVal} Days</span>
          </div>
          <input
            type="range"
            min="1"
            max="14"
            value={durationVal}
            onChange={(e) => setDurationVal(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Sparkles size={14} />
          Launch AI Planner
        </button>
      </form>
    </section>
  );
};
