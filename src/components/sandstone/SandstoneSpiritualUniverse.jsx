import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Sun, Flame } from 'lucide-react';

export const SandstoneSpiritualUniverse = () => {
  const pilgrimageSteps = [
    { name: 'SOMNATH', title: 'First Jyotirlinga', state: 'Gujarat Coast' },
    { name: 'MAHAKALESHWAR', title: 'Eternal City of Time', state: 'Ujjain' },
    { name: 'OMKARESHWAR', title: 'Sacred Island Shrine', state: 'Narmada River' },
    { name: 'KEDARNATH', title: 'Himalayan Sanctuary', state: 'Garhwal Alps' },
    { name: 'KASHI', title: 'The Eternal Ghats', state: 'Varanasi' }
  ];

  return (
    <section id="spiritual" className="py-24 px-4 sm:px-8 bg-[#1B120C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[11px] uppercase tracking-[0.25em] text-[#D4A66A] mb-3">
            <Flame size={12} className="text-[#D4A66A]" />
            <span>Spiritual India & Pilgrimage Trails</span>
          </div>
          <h2 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
            JOURNEYS THAT GO DEEPER
          </h2>
          <p className="text-sm text-[#E8CFA8]/80 max-w-xl font-light mt-3">
            Experience sacred architecture, timeless rituals, and spiritual sanctuaries crafted with reverence, comfort, and deep historical context.
          </p>
        </div>

        {/* Hero Pilgrimage Visual Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#B9854F]/40 shadow-2xl mb-16 h-[400px] sm:h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80"
            alt="Kedarnath Shrine Himalayas"
            className="w-full h-full object-cover object-center filter brightness-85 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-[#1B120C]/50 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 p-6 sm:p-8 rounded-2xl bg-[#24170F]/90 backdrop-blur-md border border-[#D4A66A]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4A66A] font-mono">SACRED HIMALAYAN SANCTUARY</span>
              <h3 className="font-serif-heritage text-2xl sm:text-3xl text-[#F5E7CF] font-bold">Kedarnath Temple Circuit</h3>
              <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">3,583m Altitude • Garhwal Himalayan Range</p>
            </div>
            <a
              href="#planner"
              className="px-6 py-3 rounded-full bg-[#B9854F] hover:bg-[#D4A66A] text-[#1B120C] text-xs font-bold uppercase tracking-widest transition-all shrink-0"
            >
              Plan Spiritual Route →
            </a>
          </div>
        </div>

        {/* Horizontal Pilgrimage Route Timeline */}
        <div className="p-8 rounded-3xl bg-[#24170F]/90 border border-[#B9854F]/30 shadow-xl">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A66A] mb-8 text-center sm:text-left">
            RECOMMENDED SACRED PILGRIMAGE ROUTE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {pilgrimageSteps.map((step, idx) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#1B120C]/80 border border-[#B9854F]/20 hover:border-[#D4A66A] transition-colors relative group"
              >
                <div className="w-8 h-8 rounded-full bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A] text-xs font-mono font-bold mb-3 group-hover:bg-[#D4A66A] group-hover:text-[#1B120C] transition-colors">
                  0{idx + 1}
                </div>
                <h4 className="font-serif-heritage text-base text-[#F5E7CF] font-bold tracking-wide mb-1">
                  {step.name}
                </h4>
                <span className="text-[11px] text-[#D4A66A] font-medium mb-1">{step.title}</span>
                <span className="text-[10px] text-[#E8CFA8]/60 font-mono">{step.state}</span>

                {idx < pilgrimageSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#D4A66A]/60 z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SandstoneSpiritualUniverse;
