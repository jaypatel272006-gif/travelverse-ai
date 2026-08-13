import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const AIInsightCard = ({
  title = 'Optimal Route Insight',
  insight = 'TravelVerse AI recommends visiting Amer Fort at 7:30 AM to bypass peak crowd volume and capture ideal lighting.',
  score = '98.4%',
  tag = 'AI INTELLIGENCE',
  className = ''
}) => {
  return (
    <div className={`p-6 rounded-3xl bg-[#24170F] border border-[#D4A66A]/40 shadow-xl flex flex-col justify-between relative overflow-hidden ${className}`}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-mono text-[#D4A66A] uppercase px-2.5 py-0.5 rounded bg-[#342117] border border-[#B9854F]/30 flex items-center gap-1">
          <Sparkles size={11} className="text-[#D4A66A] animate-pulse" />
          <span>{tag}</span>
        </span>
        <span className="text-xs font-mono text-[#F5E7CF] font-bold">
          CONFIDENCE: {score}
        </span>
      </div>

      <div>
        <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF] mb-2">
          {title}
        </h4>
        <p className="text-xs text-[#E8CFA8]/90 font-light leading-relaxed">
          {insight}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[#B9854F]/20 flex justify-between items-center text-[11px] font-mono text-[#D4A66A]">
        <span>CALCULATED // 2100</span>
        <span className="cursor-pointer hover:underline flex items-center gap-1">
          Apply Insight <ArrowUpRight size={12} />
        </span>
      </div>
    </div>
  );
};

export default AIInsightCard;
