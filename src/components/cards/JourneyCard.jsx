import React from 'react';
import { Route, Clock, Calendar, ArrowRight } from 'lucide-react';

export const JourneyCard = ({
  title = 'Royal Heritage Circuit',
  route = 'Jaipur → Jodhpur → Udaipur',
  days = '7 Days',
  budget = '₹42,000',
  image = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
  className = ''
}) => {
  return (
    <div className={`p-5 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 shadow-xl flex flex-col justify-between group hover:border-[#D4A66A] transition-all ${className}`}>
      <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-[#B9854F]/20">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1B120C]/80 backdrop-blur-md text-[10px] font-mono text-[#D4A66A] border border-[#B9854F]/30">
          {days}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 text-[11px] font-mono text-[#D4A66A] mb-1">
          <Route size={12} />
          <span>{route}</span>
        </div>
        <h3 className="font-serif-heritage text-xl text-[#F5E7CF] font-bold mb-2">
          {title}
        </h3>
      </div>

      <div className="pt-3 border-t border-[#B9854F]/20 flex justify-between items-center text-xs font-mono text-[#E8CFA8]">
        <span>Est: <strong className="text-[#F5E7CF]">{budget}</strong></span>
        <span className="text-[#D4A66A] group-hover:translate-x-1 transition-transform flex items-center gap-1">
          View Route <ArrowRight size={12} />
        </span>
      </div>
    </div>
  );
};

export default JourneyCard;
