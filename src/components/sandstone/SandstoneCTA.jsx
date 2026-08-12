import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';

export const SandstoneCTA = () => {
  return (
    <section className="relative py-32 px-4 sm:px-8 overflow-hidden">
      {/* Background Image with Dark Sandstone Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2000&q=85"
          alt="Sunset Taj Mahal Agra"
          className="w-full h-full object-cover object-center filter brightness-70 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-[#1B120C]/80 to-[#1B120C]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-12 h-12 rounded-full bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A] mb-6 shadow-xl"
        >
          <Sparkles size={24} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-heritage text-4xl sm:text-6xl font-bold text-[#F5E7CF] tracking-tight leading-tight mb-6"
        >
          YOUR NEXT STORY IS WAITING.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-[#E8CFA8]/90 font-light max-w-xl mb-10 leading-relaxed"
        >
          Let TravelVerse turn your idea into an authentic journey worth remembering — intelligently planned around your style, pace, and passions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="#planner"
            className="px-8 py-4 rounded-full bg-[#B9854F] hover:bg-[#D4A66A] text-[#1B120C] text-xs font-bold uppercase tracking-widest transition-all shadow-2xl flex items-center gap-2"
          >
            <Compass size={16} />
            <span>PLAN MY JOURNEY</span>
          </a>

          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-[#24170F]/90 hover:bg-[#342117] text-[#F5E7CF] text-xs font-semibold uppercase tracking-widest border border-[#B9854F]/40 backdrop-blur-md transition-all flex items-center gap-2"
          >
            <span>EXPLORE INDIA</span>
            <ArrowRight size={14} className="text-[#D4A66A]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SandstoneCTA;
