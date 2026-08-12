import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Sun, Compass, MapPin, Search } from 'lucide-react';

export const SandstoneHero = () => {
  const [promptIndex, setPromptIndex] = useState(0);
  const [userQuery, setUserQuery] = useState('');

  const samplePrompts = [
    "Plan a 7-day Rajasthan journey under ₹40,000",
    "Find peaceful heritage retreats in Kerala backwaters",
    "Build a spiritual 5-day route across Varanasi & Kashi",
    "Take me somewhere unforgettable with mountain views"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % samplePrompts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 overflow-hidden">
      {/* Editorial Background Image with Dark Sandstone Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85"
          alt="Amer Fort Rajasthan"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 animate-pulse duration-[10000ms]"
        />
        {/* Multi-Layer Warm Sandstone Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-[#1B120C]/75 to-[#1B120C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B120C]/90 via-[#24170F]/50 to-transparent" />
      </div>

      {/* Decorative Architectural Line Art */}
      <div className="absolute top-1/4 right-10 w-96 h-96 border border-[#B9854F]/10 rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute top-1/3 right-24 w-64 h-64 border border-[#D4A66A]/15 rounded-full pointer-events-none hidden lg:block" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto flex flex-col items-center text-center pt-8">
        
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#342117]/80 border border-[#B9854F]/40 backdrop-blur-md mb-6"
        >
          <Sparkles size={14} className="text-[#D4A66A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8CFA8] font-medium">
            AI-Powered Cultural Travel OS
          </span>
        </motion.div>

        {/* Main Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif-heritage text-4xl sm:text-6xl md:text-7xl font-bold text-[#F5E7CF] leading-[1.1] tracking-tight max-w-4xl mb-6"
        >
          DISCOVER THE WORLD.<br />
          <span className="italic text-[#D4A66A] font-normal">REMEMBER THE JOURNEY.</span>
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base sm:text-lg text-[#E8CFA8]/90 max-w-2xl font-light leading-relaxed mb-10"
        >
          Your personal travel companion for meaningful journeys. Travel deeper through places, cultures, and experiences — intelligently planned around you.
        </motion.p>

        {/* Signature Hero AI Command Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-full max-w-2xl mb-10"
        >
          <div className="relative flex items-center p-2 sm:p-2.5 rounded-2xl bg-[#24170F]/90 backdrop-blur-2xl border border-[#D4A66A]/40 shadow-2xl shadow-black/80 focus-within:border-[#D4A66A] focus-within:ring-2 focus-within:ring-[#B9854F]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#342117] border border-[#B9854F]/30 flex items-center justify-center text-[#D4A66A] shrink-0 ml-1">
              <Sparkles size={20} className="animate-spin duration-3000" />
            </div>
            
            <div className="flex-1 px-3 text-left overflow-hidden">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder=""
                className="w-full bg-transparent text-sm sm:text-base text-[#F5E7CF] placeholder-transparent focus:outline-none font-sans-ui"
              />
              {!userQuery && (
                <div className="absolute inset-y-0 left-14 flex items-center pointer-events-none text-xs sm:text-sm text-[#E8CFA8]/60 font-light truncate pr-4">
                  <span>Where do you want to go? </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={promptIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="ml-1 text-[#D4A66A] italic font-serif-heritage"
                    >
                      "{samplePrompts[promptIndex]}"
                    </motion.span>
                  </AnimatePresence>
                </div>
              )}
            </div>

            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B5E34] to-[#B9854F] hover:from-[#B9854F] hover:to-[#D4A66A] text-[#1B120C] text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer">
              <span>Compose</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Primary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#planner"
            className="px-8 py-3.5 rounded-full bg-[#B9854F] hover:bg-[#D4A66A] text-[#1B120C] text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-[#8B5E34]/20 flex items-center gap-2"
          >
            <Compass size={16} />
            <span>PLAN MY JOURNEY</span>
          </a>

          <a
            href="#explore"
            className="px-8 py-3.5 rounded-full bg-[#24170F]/80 hover:bg-[#342117] text-[#F5E7CF] text-xs font-semibold uppercase tracking-widest border border-[#B9854F]/40 backdrop-blur-md transition-all flex items-center gap-2"
          >
            <span>Explore India</span>
            <ArrowRight size={14} className="text-[#D4A66A]" />
          </a>
        </motion.div>

      </div>

      {/* Bottom Floating Telemetry & Weather Badge */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-[#B9854F]/20">
        <div className="flex items-center gap-3 text-xs text-[#E8CFA8]/70">
          <MapPin size={14} className="text-[#D4A66A]" />
          <span>Amer Fort • Jaipur, Rajasthan</span>
        </div>

        <div className="flex items-center gap-4 bg-[#24170F]/80 px-4 py-2 rounded-full border border-[#B9854F]/30 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs text-[#F5E7CF]">
            <Sun size={14} className="text-[#D4A66A]" />
            <span className="font-semibold">28°C</span>
            <span className="text-[#E8CFA8]/60">Jaipur</span>
          </div>
          <span className="text-[#B9854F]/40">|</span>
          <span className="text-[11px] text-[#D4A66A] tracking-wider font-mono">AQI 42 • Good</span>
        </div>
      </div>
    </section>
  );
};

export default SandstoneHero;
