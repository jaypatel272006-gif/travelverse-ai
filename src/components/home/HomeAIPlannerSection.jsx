import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Plane, MapPin, ChevronRight } from 'lucide-react';

export const HomeAIPlannerSection = () => {
  const timelineNodes = [
    { type: 'flight', title: 'Quantum Flight UK-200', desc: 'Indira Gandhi Terminal to Tokyo Haneda Grid', time: '08:00 AM', status: 'CONFIRMED' },
    { type: 'hotel', title: 'Aman Tokyo Station Lodge', desc: 'Zenith luxury capsule premium stay reservations', time: '14:30 PM', status: 'RESERVED' },
    { type: 'explore', title: 'Shibuya Sky & Cyber-Tours', desc: 'Interactive local guide avatar connection', time: '18:00 PM', status: 'ROUTED' }
  ];

  const recommendations = [
    { title: 'Tokyo Autumn Lanterns Festival', category: 'Culture', confidence: '98%' },
    { title: 'Sushi Shin Fine Dining', category: 'Culinary', confidence: '94%' },
    { title: 'Hakone Mt. Fuji Hot Springs', category: 'Scenic', confidence: '91%' }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950 border-b border-white/10 px-4 sm:px-6 lg:px-8">
      {/* Light spotlight background decoration */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(20,184,166,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center xl:text-left mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 self-center xl:self-start px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[9px] font-mono font-black uppercase tracking-wider">
              <Sparkles size={10} className="animate-pulse" /> Autonomous Itinerary Core
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              AI Planner <span className="gradient-text">Cockpit</span>
            </h2>
            <p className="text-slate-400 text-sm font-mono max-w-xl">
              Zero-fatigue itinerary synthesis. Generates real-time node sequences customized for weather, fatigue, and local timelines.
            </p>
          </div>
          <button 
            type="button" 
            className="self-center xl:self-auto px-5 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/30 text-xs font-mono text-teal-400 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
          >
            LAUNCH AI PLANNERS <ChevronRight size={14} />
          </button>
        </div>

        {/* Dashboard Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left panel: Active Planner configuration cockpit */}
          <div className="glass-card-neo p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-between text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black flex items-center gap-1.5">
                  <Calendar size={13} className="text-teal-400" /> Active Configuration Workspace
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block font-black">Destination Target</span>
                    <span className="text-sm font-bold text-white block mt-1">Tokyo Grid, JP</span>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block font-black">Travel DNA Profile</span>
                    <span className="text-sm font-bold text-teal-400 block mt-1">Adventure Solo (92)</span>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5 flex flex-col gap-3">
                  <span className="text-[8px] font-mono text-slate-500 uppercase font-black block">AI Recommendations Engine</span>
                  <div className="flex flex-col gap-2">
                    {recommendations.map((rec) => (
                      <div key={rec.title} className="flex justify-between items-center text-xs pb-2 border-b border-white/5 last:border-b-0 last:pb-0">
                        <span className="text-slate-200 font-bold font-mono">{rec.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[8px] font-mono uppercase">{rec.category}</span>
                          <span className="text-teal-400 font-mono font-bold text-[10px]">{rec.confidence}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>STATUS: STEADY</span>
              <span className="text-teal-400 font-bold">SYNAPSE_CORE_OK</span>
            </div>
          </div>

          {/* Right panel: Timeline nodes sequencers */}
          <div className="glass-card-neo p-6 md:p-8 rounded-3xl border border-white/10 text-left flex flex-col gap-6">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black block">
              Sequential Node Timeline Output
            </span>

            <div className="relative border-l border-teal-500/30 ml-3 pl-6 flex flex-col gap-6">
              {timelineNodes.map((node, index) => {
                const isFlight = node.type === 'flight';
                return (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative flex flex-col gap-1.5"
                  >
                    {/* Pulsing indicator node */}
                    <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                    </div>

                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-center gap-2">
                        {isFlight ? <Plane className="text-teal-400" size={13} /> : <MapPin className="text-teal-400" size={13} />}
                        <h4 className="text-xs font-bold text-white font-mono uppercase">{node.title}</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-800 border border-white/10 font-mono text-[8px] text-teal-400 font-bold">{node.status}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">{node.desc}</p>
                    <span className="text-[9px] font-mono text-slate-500 uppercase">{node.time}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
