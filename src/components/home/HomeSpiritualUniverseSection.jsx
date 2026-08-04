import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomeSpiritualUniverseSection = () => {
  const temples = [
    { name: 'Kashi Vishwanath', location: 'Varanasi', type: 'Shiva Temple', energy: 'HIGHEST' },
    { name: 'Vaishno Devi Temple', location: 'Katra, Jammu', type: 'Shakti Shrine', energy: 'SECURE_PEAK' },
    { name: 'Amarnath Cave Shrine', location: 'Kashmir', type: 'Glacial Ice Lingam', energy: 'SEASONAL_ACTIVE' }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950 border-b border-white/10 px-4 sm:px-6 lg:px-8">
      {/* Warm Golden Sunset Atmosphere sweep */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.07)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center xl:text-left mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 self-center xl:self-start px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-mono font-black uppercase tracking-wider">
              🔱 Sacred Telemetry Matrix
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Spiritual <span className="text-amber-400">Universe</span>
            </h2>
            <p className="text-slate-400 text-sm font-mono max-w-xl">
              De-orbit into ancient frequencies. Explore geodetic coordinate points radiating high consciousness index fields across sacred shrines.
            </p>
          </div>
          <Link 
            to="/spiritual" 
            className="self-center xl:self-auto px-5 py-3 rounded-xl bg-slate-900 border border-amber-500/20 hover:border-amber-500/50 text-xs font-mono text-amber-400 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
          >
            ENTER SPIRITUAL CORE
          </Link>
        </div>

        {/* Traditional Temple Motifs Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left panel: Sanskrit spiritual lotus emblem card */}
          <div className="lg:col-span-1 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-950/20 to-slate-950 p-6 md:p-8 text-center flex flex-col justify-between min-h-[320px] relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none z-0" />
            
            <div className="flex justify-center items-center py-6 relative z-10">
              {/* Outer rotating lotus aura */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="w-28 h-28 rounded-full border border-dashed border-amber-500/30 flex items-center justify-center relative"
              >
                <div className="w-20 h-20 rounded-full border border-amber-500/40 flex items-center justify-center">
                  <Sun className="text-amber-400 animate-pulse" size={32} />
                </div>
              </motion.div>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">CONSCIOUSNESS FIELD</span>
              <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                Sanskrit resonance codes connect geodetic altitude shrines, elevating mental stability to 99.8%.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-500/10 flex justify-center text-[9px] font-mono text-amber-500 font-bold tracking-wider">
              ॐ SHANTI SHANTI SHANTI
            </div>
          </div>

          {/* Right panel: Temple grid locations */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {temples.map((temple, idx) => (
              <motion.div
                key={temple.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="rounded-3xl border border-amber-500/10 bg-slate-900/60 p-6 flex flex-col justify-between text-left hover:border-amber-500/30 transition-all duration-300 relative shadow-md group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex justify-between items-center text-[9px] font-mono text-amber-400 font-bold">
                    <span>{temple.type}</span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/10 uppercase">{temple.energy}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg text-white mt-1 group-hover:text-amber-300 transition-colors leading-tight">
                      {temple.name}
                    </h3>
                    <span className="text-[9px] font-mono text-slate-500 uppercase mt-1 block">GRID: {temple.location}</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-450 relative z-10">
                  <span className="flex items-center gap-1"><Compass size={10} className="text-amber-500" /> STATUS</span>
                  <span className="text-amber-400 font-bold">SECURE_ALIGN</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
