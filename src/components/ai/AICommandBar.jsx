import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AICommandBar = ({ onSearch, className = '' }) => {
  const [query, setQuery] = useState('');
  const [promptIndex, setPromptIndex] = useState(0);

  const samplePrompts = [
    "Plan a 7-day Rajasthan journey under ₹40,000",
    "Find peaceful heritage retreats in Kerala backwaters",
    "Build a spiritual 5-day route across Varanasi & Kashi",
    "Show me hidden mountain passes in Ladakh",
    "Make my trip cheaper without compromising comfort"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % samplePrompts.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (onSearch) onSearch(query || samplePrompts[promptIndex]);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center p-2 rounded-2xl bg-[#24170F]/95 backdrop-blur-2xl border border-[#D4A66A]/40 shadow-2xl focus-within:border-[#D4A66A] focus-within:ring-2 focus-within:ring-[#B9854F]/30 transition-all gap-2 sm:gap-0">
        
        <div className="flex items-center flex-1 px-3 py-1">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#342117] border border-[#B9854F]/30 flex items-center justify-center text-[#D4A66A] shrink-0">
            <Sparkles size={18} className="animate-spin duration-3000" />
          </div>
          
          <div className="flex-1 px-3 text-left relative overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder=""
              className="w-full bg-transparent text-xs sm:text-sm text-[#F5E7CF] placeholder-transparent focus:outline-none font-sans-ui"
            />
            {!query && (
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-xs sm:text-sm text-[#E8CFA8]/60 font-light truncate pr-2">
                <span className="hidden sm:inline">Where do you want to go? </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={promptIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="text-[#D4A66A] italic font-serif-heritage ml-1"
                  >
                    "{samplePrompts[promptIndex]}"
                  </motion.span>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5E34] to-[#B9854F] hover:from-[#B9854F] hover:to-[#D4A66A] text-[#1B120C] text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <span>Compose</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </form>
  );
};

export default AICommandBar;
