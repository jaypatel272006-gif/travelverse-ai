import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, BookOpen, MessageSquare } from 'lucide-react';

export const HomeMemoryVaultSection = () => {
  const memoryLogs = [
    { date: 'OCT 2100', title: 'Agra Fort De-Orbit', summary: 'Explored Taj Mahal telemetry under crystal clear solar arrays. Confidence index 99.8%. Saved 1.2 tons carbon.', tag: 'HERITAGE' },
    { date: 'DEC 2100', title: 'Varanasi Portal Walk', summary: 'Captured Ganga Aarti thermal feeds. Spiritual frequency aligned at 92Hz. Unlocked Ganga badge.', tag: 'SPIRITUAL' }
  ];

  const photos = [
    { url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=300&q=80', rotate: -6, x: -10, y: 5 },
    { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80', rotate: 4, x: 10, y: -5 },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80', rotate: -2, x: 0, y: 0 }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 border-b border-white/10 px-4 sm:px-6 lg:px-8">
      {/* Background radial sweep */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center xl:text-left mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 self-center xl:self-start px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[9px] font-mono font-black uppercase tracking-wider">
              <BookOpen size={10} className="animate-pulse" /> Decrypted Travel Logs
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Memory <span className="text-purple-400">Vault</span>
            </h2>
            <p className="text-slate-400 text-sm font-mono max-w-xl">
              Chronological log summaries of past voyages. Archive real-time photographic telemetry coordinates and quantum milestones.
            </p>
          </div>
        </div>

        {/* Memory vault split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left panel: Timeline logs */}
          <div className="glass-card-neo p-6 md:p-8 rounded-3xl border border-white/10 text-left flex flex-col gap-6">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black block">
              Decrypted Voyage Logs Ticker
            </span>

            <div className="relative border-l border-purple-500/30 ml-3 pl-6 flex flex-col gap-6">
              {memoryLogs.map((log) => (
                <div key={log.title} className="relative flex flex-col gap-1.5">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-400 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>

                  <div className="flex justify-between items-start gap-4">
                    <span className="text-[10px] font-mono text-purple-400 font-bold">{log.date}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-white/10 font-mono text-[8px] text-purple-450 font-bold uppercase">{log.tag}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white font-mono uppercase">{log.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold">{log.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Fanned photo stacks */}
          <div className="glass-card-neo p-6 rounded-3xl border border-white/10 flex flex-col justify-between text-left min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-4 relative z-10 w-full h-full">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black flex items-center gap-1.5">
                <MessageSquare size={13} className="text-purple-400" /> Polaroid Photo Stack Telemetry
              </span>

              {/* Fanned photo container */}
              <div className="flex-1 min-h-[220px] relative flex items-center justify-center mt-6">
                {photos.map((photo, i) => (
                  <motion.div
                    key={i}
                    style={{ zIndex: i }}
                    animate={{
                      rotate: photo.rotate,
                      x: photo.x * 2,
                      y: photo.y * 2
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 0,
                      x: (i - 1) * 60,
                      y: -15,
                      zIndex: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute w-36 h-40 bg-slate-900 border border-white/10 p-2.5 rounded-xl shadow-2xl flex flex-col gap-2 cursor-pointer hover:border-purple-500/30"
                  >
                    <img src={photo.url} alt="Memory" className="w-full h-28 object-cover rounded-lg border border-white/5" />
                    <span className="text-[7.5px] font-mono text-slate-500 text-center uppercase tracking-widest font-black mt-1">NODE_IMG_STAMP_{i + 1}</span>
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
