import React from 'react';
import { DollarSign, TrendingDown } from 'lucide-react';

export const BudgetCard = ({
  total = '₹38,500',
  budgetLimit = '₹45,000',
  saved = '₹6,500',
  categories = [
    { name: 'Stays', cost: '₹18,000', pct: 46 },
    { name: 'Transport', cost: '₹10,500', pct: 27 },
    { name: 'Dining & Experiences', cost: '₹10,000', pct: 27 },
  ],
  className = ''
}) => {
  return (
    <div className={`p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 shadow-xl space-y-4 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A66A] flex items-center gap-1">
          <DollarSign size={12} />
          <span>BUDGET OPTIMIZER</span>
        </span>
        <span className="text-xs font-mono text-[#D4A66A] flex items-center gap-1">
          <TrendingDown size={12} />
          Saved {saved}
        </span>
      </div>

      <div>
        <span className="text-xs text-[#E8CFA8]/70 block font-mono">Estimated Trip Spend</span>
        <h3 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF]">
          {total} <span className="text-xs font-sans-ui text-[#9D8870] font-normal">/ {budgetLimit}</span>
        </h3>
      </div>

      <div className="space-y-2 pt-2 border-t border-[#B9854F]/20">
        {categories.map((c) => (
          <div key={c.name} className="space-y-1">
            <div className="flex justify-between text-xs font-mono text-[#E8CFA8]">
              <span>{c.name}</span>
              <span>{c.cost} ({c.pct}%)</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#1B120C]">
              <div
                style={{ width: `${c.pct}%` }}
                className="h-full rounded-full bg-gradient-to-r from-[#8B5E34] to-[#B9854F]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetCard;
