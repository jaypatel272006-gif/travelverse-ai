import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Compass, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomeSpiritualUniverseSection = () => {
  const [completedPilgrimages, setCompletedPilgrimages] = useState([0, 1]); // indexes of checked pilgrimages

  const pilgrimages = [
    { name: 'Kashi Vishwanath', location: 'Varanasi', type: 'Jyotirlinga Portal', energy: '98.6%', coord: { x: '58%', y: '52%' } },
    { name: 'Vaishno Devi Shrine', location: 'Jammu & Kashmir', type: 'Shakti Energy Hub', energy: '97.2%', coord: { x: '42%', y: '18%' } },
    { name: 'Kedarnath Temple', location: 'Uttarakhand Peaks', type: 'Glacial Sanctuary', energy: '96.5%', coord: { x: '48%', y: '32%' } },
    { name: 'Rameshwaram Portal', location: 'Tamil Nadu Grid', type: 'Cosmic Bridge', energy: '99.1%', coord: { x: '44%', y: '88%' } }
  ];

  const toggleCheck = (idx) => {
    if (completedPilgrimages.includes(idx)) {
      setCompletedPilgrimages(completedPilgrimages.filter(item => item !== idx));
    } else {
      setCompletedPilgrimages([...completedPilgrimages, idx]);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/10 px-4 sm:px-6 lg:px-8">
      {/* Warm Golden Sunset Atmosphere sweep */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center xl:text-left mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 self-center xl:self-start px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-mono font-black uppercase tracking-wider">
              🔱 Sacred Telemetry Matrix
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Spiritual <span className="text-amber-400">Universe</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-xl">
              De-orbit into ancient frequencies. Explore geodetic coordinate points radiating high consciousness index fields across sacred shrines.
            </p>
          </div>
          <Link 
            to="/spiritual" 
            className="self-center xl:self-auto px-6 py-3.5 rounded-2xl bg-slate-900 border border-amber-500/30 hover:border-amber-500/60 text-xs font-mono text-amber-400 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:scale-105 active:scale-95"
          >
            ENTER SPIRITUAL CORE
          </Link>
        </div>

        {/* Traditional Temple Motifs Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Column 1: Diya Chakra Aura Card */}
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-950/20 to-slate-950 p-6 md:p-8 text-center flex flex-col justify-between min-h-[360px] relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none z-0" />
            
            {/* SVG Temple Silhouette outline back decoration */}
            <div className="absolute inset-x-0 bottom-0 h-32 opacity-10 flex justify-center items-end pointer-events-none">
              <svg className="w-56 h-full text-amber-400" viewBox="0 0 100 60" fill="currentColor">
                <path d="M 50 5 L 65 25 L 50 22 L 35 25 Z" />
                <path d="M 38 25 L 62 25 L 62 45 L 38 45 Z" />
                <rect x="42" y="45" width="16" height="15" />
              </svg>
            </div>

            <div className="flex justify-center items-center py-6 relative z-10">
              {/* Outer rotating lotus aura */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="w-28 h-28 rounded-full border border-dashed border-amber-500/30 flex items-center justify-center relative"
              >
                <div className="w-20 h-20 rounded-full border border-amber-500/40 flex items-center justify-center relative bg-amber-500/5">
                  <Sun className="text-amber-400 animate-pulse" size={28} />
                  {/* Decorative glowing Diya flame center */}
                  <div className="absolute -top-1 w-2.5 h-3.5 bg-gradient-to-t from-orange-600 to-amber-300 rounded-full animate-bounce filter blur-[0.5px]" />
                </div>
              </motion.div>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">CONSCIOUSNESS CHAKRA</span>
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                Sanskrit resonance codes connect geodetic altitude shrines, elevating mental stability to 99.8%.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-500/10 flex justify-center text-[9px] font-mono text-amber-500 font-bold tracking-wider relative z-10">
              ॐ SHANTI SHANTI SHANTI
            </div>
          </div>

          {/* Column 2: Minimalist Interactive India Pilgrimage Grid Map */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 flex flex-col justify-between relative shadow-lg min-h-[360px]">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-black block border-b border-white/5 pb-2">Sacred Geographic Nodes Map</span>
            
            <div className="flex-1 w-full relative min-h-[220px] rounded-2xl bg-slate-950 border border-white/5 mt-4 overflow-hidden">
              {/* Dotted network lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <line x1="42%" y1="18%" x2="48%" y2="32%" stroke="#fbbf24" strokeWidth="1" />
                <line x1="48%" y1="32%" x2="58%" y2="52%" stroke="#fbbf24" strokeWidth="1" />
                <line x1="58%" y1="52%" x2="44%" y2="88%" stroke="#fbbf24" strokeWidth="1" />
              </svg>

              {pilgrimages.map((temple, idx) => {
                const isSelected = completedPilgrimages.includes(idx);
                return (
                  <div
                    key={temple.name}
                    className="absolute cursor-pointer group"
                    style={{ left: temple.coord.x, top: temple.coord.y }}
                  >
                    <div className="relative -left-2 -top-2 flex items-center justify-center">
                      <span className={`absolute w-4 h-4 rounded-full animate-ping opacity-60 ${isSelected ? 'bg-amber-400' : 'bg-slate-500'}`} />
                      <div className={`w-3 h-3 rounded-full border border-slate-950 relative z-15 shadow-md transition-all ${isSelected ? 'bg-amber-400 scale-110 shadow-amber-500/20' : 'bg-slate-700'}`} />
                      
                      {/* Interactive hover tag details */}
                      <div className="absolute bottom-4 left-4 bg-slate-950/90 border border-amber-500/30 px-2 py-1 rounded text-[7.5px] font-mono text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-25">
                        <span className="block font-black">{temple.name}</span>
                        <span className="text-slate-550 block text-[6px]">CONSCIOUSNESS: {temple.energy}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 text-[8px] font-mono text-slate-500 flex justify-between">
              <span>GEODETIC SCALE: WGS-84</span>
              <span>NODES ALIGNED</span>
            </div>
          </div>

          {/* Column 3: Pilgrimages Checklist Tracker */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 flex flex-col justify-between relative shadow-lg min-h-[360px]">
            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-black block border-b border-white/5 pb-2">Sacred Pilgrimages Tracker</span>
              
              <div className="flex flex-col gap-3">
                {pilgrimages.map((temple, idx) => {
                  const isChecked = completedPilgrimages.includes(idx);
                  return (
                    <div 
                      key={temple.name}
                      onClick={() => toggleCheck(idx)}
                      className={`flex items-center gap-3 p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                        isChecked 
                          ? 'bg-amber-500/5 border-amber-500/20 text-amber-300' 
                          : 'bg-slate-950/60 border-white/5 hover:border-white/15 text-slate-350'
                      }`}
                    >
                      <div className="shrink-0 transition-transform active:scale-90">
                        {isChecked ? (
                          <CheckCircle2 size={15} className="text-amber-400" />
                        ) : (
                          <Circle size={15} className="text-slate-650" />
                        )}
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <span className="text-[10px] font-bold block truncate">{temple.name}</span>
                        <span className="text-[7.5px] font-mono text-slate-500 block uppercase truncate">{temple.type} • {temple.location}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-500">
              <span>ALIGNMENT COMPLETED</span>
              <span className="text-amber-400 font-bold">
                {completedPilgrimages.length} / {pilgrimages.length} RESOLVED
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
