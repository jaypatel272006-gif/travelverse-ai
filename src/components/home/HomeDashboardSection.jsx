import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Award, Zap, MapPin, Calendar, Leaf } from 'lucide-react';

export const HomeDashboardSection = () => {
  const stats = [
    { label: 'COORDINATES VISITED', value: '14 / 28', percent: 50, icon: <MapPin size={14} className="text-[#5B7FFF]" />, tag: 'DESTINATION VECTOR' },
    { label: 'TOTAL DAYS TRAVELED', value: '42 DAYS', percent: 80, icon: <Calendar size={14} className="text-[#8B5CF6]" />, tag: 'SYSTEM RUNTIME' },
    { label: 'CARBON OFFSET LOGS', value: '2.4 Tons', percent: 65, icon: <Leaf size={14} className="text-[#00E676]" />, tag: 'GREEN OFFSET' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/10 px-4 sm:px-6 lg:px-8">
      {/* Light spotlight bg */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(91,127,255,0.03)_0%,transparent_75%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center xl:text-left mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 self-center xl:self-start px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[9px] font-mono font-black uppercase tracking-wider">
              <Activity size={10} className="animate-pulse" /> Global Telemetry Dash
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Travel <span className="text-[#5B7FFF]">Dashboard</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-xl">
              Track carbon footprint metrics, unlocked stamps ledger logs, and dynamic traveler achievements in real-time.
            </p>
          </div>
        </div>

        {/* Dashboard grid panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left panel: Telemetry widgets */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass-card-neo p-6 flex flex-col justify-between text-left relative shadow-lg rounded-3xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] font-mono text-slate-500 uppercase font-black tracking-wider">{stat.tag}</span>
                    <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-455 uppercase font-bold mt-1 text-slate-400">{stat.label}</span>
                  <span className="text-2xl font-black text-white font-mono mt-1">{stat.value}</span>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#5B7FFF] to-[#8B5CF6] h-full transition-all duration-1000 rounded-full" 
                      style={{ width: `${stat.percent}%` }}
                    />
                  </div>
                  <span className="text-[8px] font-mono text-teal-400 font-bold self-end">{stat.percent}% OF MATRIX ACHIEVED</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right panel: Achievements & badges summary */}
          <div className="glass-card-neo p-6 rounded-3xl border border-white/10 flex flex-col justify-between text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-5 relative z-10">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-teal-400" /> Passport Milestones
              </span>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                    <Award size={16} />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 block uppercase font-bold">Unesco Stamp</span>
                    <span className="text-xs font-bold text-white block">Taj Mahal Explorer</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <Zap size={16} />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 block uppercase font-bold">Explorer Rank</span>
                    <span className="text-xs font-bold text-white block">Apex Voyager IV</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-550 text-slate-500">
              <span>XP CORE INDEX: 1,420 XP</span>
              <span className="text-teal-400 font-bold">LEVEL_4_ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
