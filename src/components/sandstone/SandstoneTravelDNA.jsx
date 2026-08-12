import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Compass, Sparkles, Award } from 'lucide-react';

export const SandstoneTravelDNA = () => {
  const dnaTraits = [
    { category: 'Culture & Architecture', score: 92, barWidth: '92%', level: 'High Affinity' },
    { category: 'Regional Culinary Trails', score: 88, barWidth: '88%', level: 'Enthusiast' },
    { category: 'Nature & Landscapes', score: 78, barWidth: '78%', level: 'Balanced' },
    { category: 'Spirituality & Heritage', score: 85, barWidth: '85%', level: 'Deep Seeker' },
    { category: 'Luxury & Boutique Stays', score: 70, barWidth: '70%', level: 'Comfort First' },
    { category: 'Adventure & High Passes', score: 62, barWidth: '62%', level: 'Moderate' },
    { category: 'Relaxation & Wellness', score: 80, barWidth: '80%', level: 'Rejuvenator' }
  ];

  return (
    <section id="dna" className="py-24 px-4 sm:px-8 bg-gradient-to-b from-[#1B120C] via-[#24170F] to-[#1B120C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[11px] uppercase tracking-[0.25em] text-[#D4A66A] mb-3">
            <Dna size={12} />
            <span>Personalized Travel Genome</span>
          </div>
          <h2 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
            TRAVEL SHOULD FEEL LIKE YOU
          </h2>
          <p className="text-sm text-[#E8CFA8]/80 max-w-xl font-light mt-3">
            TravelVerse analyzes your style, pace, climate preferences, and culinary interests to create your unique Travel DNA.
          </p>
        </div>

        {/* DNA Genome Card & Indicator Meters */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#24170F]/90 border border-[#B9854F]/40 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Radial Linework Background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#B9854F]/10 rounded-full pointer-events-none" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#B9854F]/30 pb-6 mb-8 relative z-10">
            <div>
              <span className="text-xs font-mono uppercase text-[#D4A66A] tracking-widest">
                PROFILE // HERITAGE EXPLORER
              </span>
              <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF] mt-1">
                YOUR TRAVEL GENOME SCORE: 88.6
              </h3>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#342117] border border-[#D4A66A]/40 text-xs font-mono text-[#D4A66A]">
              <Award size={14} />
              <span>Rank: Royal Explorer</span>
            </div>
          </div>

          {/* Trait Meters */}
          <div className="flex flex-col gap-6 relative z-10">
            {dnaTraits.map((trait, idx) => (
              <motion.div
                key={trait.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-between items-center text-xs font-sans-ui">
                  <span className="text-[#F5E7CF] font-medium tracking-wide">{trait.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#E8CFA8]/60">{trait.level}</span>
                    <span className="text-[#D4A66A] font-mono font-bold">{trait.score}%</span>
                  </div>
                </div>

                <div className="w-full h-2.5 rounded-full bg-[#1B120C] p-0.5 border border-[#B9854F]/20 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: trait.barWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#6B4325] via-[#8B5E34] to-[#D4A66A]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Genome Insights Footer */}
          <div className="mt-10 pt-6 border-t border-[#B9854F]/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#E8CFA8]/70 font-mono">
            <span>RECOMMENDED MATCH: Rajasthan, Varanasi & Kerala</span>
            <span className="text-[#D4A66A] cursor-pointer hover:underline">Recalibrate DNA Profile →</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SandstoneTravelDNA;
