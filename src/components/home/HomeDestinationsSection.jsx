import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Video, ArrowUpRight, Compass, Sparkles, Navigation } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const HomeDestinationsSection = () => {
  const [hoveredDest, setHoveredDest] = useState(null);
  const navigate = useNavigate();

  const listDests = [
    {
      id: 'varanasi',
      name: 'Varanasi',
      sub: 'Spiritual Matrix Core',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-a-street-in-india-at-night-42211-large.mp4',
      link: '/destination/dest-varanasi',
      match: '98%',
      tag: 'Spiritual'
    },
    {
      id: 'goa',
      name: 'Goa Coastline',
      sub: 'Atmospheric Ocean Wave',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-clouds-and-sea-during-a-sunset-41486-large.mp4',
      link: '/destination/dest-goa',
      match: '94%',
      tag: 'Beaches'
    },
    {
      id: 'leh',
      name: 'Leh Ladakh',
      sub: 'Glacial Heights Terminal',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mountain-ranges-under-a-clear-blue-sky-41617-large.mp4',
      link: '/destination/dest-leh',
      match: '91%',
      tag: 'Adventure'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/10 px-4 sm:px-6 lg:px-8">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(91,127,255,0.04)_0%,transparent_75%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center xl:text-left mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 self-center xl:self-start px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[9px] font-mono font-black uppercase tracking-wider">
              <Map size={10} className="animate-pulse" /> Telemetry Coordinates
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Immersive <span className="text-[#4FD1FF]">Destinations</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-xl">
              Scan global grids and view cinematic previews. Hover over location stamps to engage real-time telemetry video feeds.
            </p>
          </div>
        </div>

        {/* Section Grid layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
          {/* Left panel: Destinations grid cards */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {listDests.map((dest, idx) => {
              const isHovered = hoveredDest === dest.id;
              return (
                <motion.div
                  key={dest.id}
                  onMouseEnter={() => setHoveredDest(dest.id)}
                  onMouseLeave={() => setHoveredDest(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative rounded-[24px] overflow-hidden min-h-[380px] border border-white/10 flex flex-col justify-end p-5 transition-all duration-500 group shadow-lg cursor-pointer bg-slate-950/40 hover:border-[#5B7FFF]/45 hover:shadow-[0_20px_50px_rgba(91,127,255,0.15)] hover:-translate-y-2"
                >
                  {/* Backdrop Image */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700 ${isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-60'}`}
                  />

                  {/* Hover Video Loop */}
                  {isHovered && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 transition-opacity duration-500"
                    >
                      <source src={dest.video} type="video/mp4" />
                    </video>
                  )}

                  {/* Dark gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10 pointer-events-none" />

                  {/* Top corner live video and match tags */}
                  <div className="absolute top-4 inset-x-4 z-20 flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-lg bg-teal-500/25 border border-teal-500/30 text-[7px] font-mono font-black text-teal-400 uppercase tracking-widest flex items-center gap-1">
                      <Sparkles size={8} /> {dest.match} MATCH
                    </span>
                    {isHovered && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-rose-500 text-[7px] font-mono font-bold text-white uppercase tracking-wider animate-pulse">
                        <Video size={8} /> LIVE PREVIEW
                      </div>
                    )}
                  </div>

                  {/* Card content text */}
                  <div className="relative z-20 flex flex-col gap-2 text-left w-full">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[7px] font-mono text-slate-400 uppercase tracking-wider">{dest.tag}</span>
                    </div>
                    <span className="text-[9px] font-mono text-sky-400 font-bold uppercase tracking-widest leading-none mt-1">{dest.sub}</span>
                    <h3 className="font-display font-black text-xl text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
                      {dest.name} 
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sky-400" />
                    </h3>

                    {/* Quick action button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(dest.link);
                      }}
                      className="w-full mt-3 py-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:text-slate-950 font-bold text-[10px] tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-transparent cursor-pointer"
                    >
                      <Navigation size={10} />
                      Teleport Coordinate
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right panel: SVG Interactive map twin */}
          <div className="glass-card-neo p-6 rounded-3xl border border-white/10 flex flex-col justify-between text-left min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-4 relative z-10">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black flex items-center gap-1.5 border-b border-white/5 pb-2">
                <Compass size={13} className="text-sky-400 animate-spin" style={{ animationDuration: '8s' }} /> Geodetic Connecting Trails Map
              </span>

              {/* Connected routes map graphics */}
              <div className="w-full h-44 rounded-2xl bg-slate-950 border border-white/5 relative overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none">
                  {/* Route Paths */}
                  <path d="M 40 120 Q 120 40 200 130" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5,5" className="animate-route-dash" />
                  <path d="M 120 40 Q 220 30 260 90" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5,5" className="animate-route-dash" />
                  {/* Glowing Points */}
                  <circle cx="40" cy="120" r="3" fill="#38bdf8" className="animate-pulse" />
                  <circle cx="120" cy="40" r="3.5" fill="#38bdf8" className="animate-pulse" />
                  <circle cx="200" cy="130" r="3" fill="#38bdf8" className="animate-pulse" />
                  <circle cx="260" cy="90" r="3" fill="#2dd4bf" className="animate-pulse" />
                </svg>
                <div className="absolute left-6 top-24 px-2 py-0.5 rounded bg-slate-950 border border-white/10 text-[8px] font-mono text-sky-300">Delhi Portal</div>
                <div className="absolute right-6 top-8 px-2 py-0.5 rounded bg-slate-950 border border-white/10 text-[8px] font-mono text-teal-300">Goa Station</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-500">
              <span>MAP: SECTOR_ACTIVE</span>
              <span className="text-sky-400 font-bold">GRID_CONNECTED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
