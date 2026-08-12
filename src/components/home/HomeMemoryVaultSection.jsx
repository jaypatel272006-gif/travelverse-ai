import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, BookOpen, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export const HomeMemoryVaultSection = () => {
  const memoryLogs = [
    { date: 'OCT 2100', title: 'Agra Fort De-Orbit', summary: 'Explored Taj Mahal telemetry under crystal clear solar arrays. Confidence index 99.8%. Saved 1.2 tons carbon.', tag: 'HERITAGE' },
    { date: 'DEC 2100', title: 'Varanasi Portal Walk', summary: 'Captured Ganga Aarti thermal feeds. Spiritual frequency aligned at 92Hz. Unlocked Ganga badge.', tag: 'SPIRITUAL' }
  ];

  const polaroids = [
    { url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=300&q=80', rotate: -8, x: -15, y: 5 },
    { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80', rotate: 6, x: 15, y: -8 },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80', rotate: -2, x: 0, y: 0 }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/10 px-4 sm:px-6 lg:px-8">
      {/* Background radial sweep */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center xl:text-left mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 self-center xl:self-start px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[9px] font-mono font-black uppercase tracking-wider">
              <BookOpen size={10} className="animate-pulse" /> Decrypted Travel Logs
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Memory <span className="text-[#8B5CF6]">Vault</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-xl">
              Chronological log summaries of past voyages. Archive real-time photographic telemetry coordinates and quantum milestones.
            </p>
          </div>
        </div>

        {/* Memory vault split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left panel: Timeline logs */}
          <div className="glass-card-neo p-6 md:p-8 rounded-3xl border border-white/10 text-left flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black block border-b border-white/5 pb-2">
                Decrypted Voyage Logs Ticker
              </span>

              <div className="relative border-l border-purple-500/30 ml-3 pl-6 flex flex-col gap-6">
                {memoryLogs.map((log) => (
                  <div key={log.title} className="relative flex flex-col gap-1.5">
                    <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#8B5CF6] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    </div>

                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] font-mono text-[#8B5CF6] font-bold">{log.date}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 font-mono text-[8px] text-[#8B5CF6] font-bold uppercase">{log.tag}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white font-mono uppercase">{log.title}</h4>
                    <p className="text-xs text-slate-455 leading-relaxed font-semibold">{log.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-500">
              <span>LEDGER DECRYPTED</span>
              <span>INDEX: SHIELD_ACTIVE</span>
            </div>
          </div>

          {/* Right panel: Fanned photo stacks */}
          <div className="glass-card-neo p-6 rounded-3xl border border-white/10 flex flex-col justify-between text-left min-h-[360px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-4 relative z-10 w-full h-full">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black flex items-center gap-1.5 border-b border-white/5 pb-2">
                <MessageSquare size={13} className="text-[#8B5CF6]" /> Polaroid Photo Stack Telemetry
              </span>

              {/* Fanned photo container */}
              <div className="flex-1 min-h-[240px] relative flex items-center justify-center mt-6">
                {polaroids.map((photo, i) => (
                  <motion.div
                    key={i}
                    style={{ zIndex: i }}
                    animate={{
                      rotate: photo.rotate,
                      x: photo.x * 2.5,
                      y: photo.y * 2.5
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 0,
                      x: (i - 1) * 70,
                      y: -20,
                      zIndex: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute w-38 h-42 bg-slate-900 border border-white/10 p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-2 cursor-pointer hover:border-purple-500/40 transition-colors"
                  >
                    <img src={photo.url} alt="Memory" className="w-full h-28 object-cover rounded-xl border border-white/5" />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest font-black">IMG_{i + 1}_STAMP</span>
                      <Heart size={10} className="text-[#8B5CF6]" fill="#8B5CF6" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
