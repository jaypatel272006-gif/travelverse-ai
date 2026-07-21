import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, MapPin, Landmark, ShieldCheck, Activity, Lock, Compass, Globe, 
  Calendar, Layers, BookOpen, TrendingUp, Sparkles, UserCheck, Award, ArrowRight 
} from 'lucide-react';

export const HomeEcosystemCockpit = () => {
  const modules = [
    {
      title: 'AI Itinerary Planner',
      desc: 'Generates realistic daily travel schedules, adjusting for walking fatigue and weather.',
      link: '/planner',
      badge: 'READY',
      color: 'text-teal-400 border-teal-500/20 bg-teal-500/5',
      icon: Cpu
    },
    {
      title: 'Road Trip Planner',
      desc: 'Maps scenic route paths, EV charging networks, and highway rest areas.',
      link: '/road-trip-os',
      badge: 'CALIBRATED',
      color: 'text-sky-400 border-sky-500/20 bg-sky-500/5',
      icon: MapPin
    },
    {
      title: 'Religious Tourism',
      desc: 'Guides travelers through sacred pilgrim routes and local temple rules.',
      link: '/spiritual',
      badge: 'STEADY',
      color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
      icon: Landmark
    },
    {
      title: 'Budget Simulator',
      desc: 'Runs financial simulations to forecast maximum coordinate cost bounds.',
      link: '/utilities',
      badge: 'STABLE',
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
      icon: ShieldCheck
    },
    {
      title: 'Fuel Cost Calculator',
      desc: 'Calculates vehicle consumption and toll fees for cross-country tracks.',
      link: '/road-trip-os',
      badge: 'READY',
      color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
      icon: Activity
    },
    {
      title: 'Hotel Recommendations',
      desc: 'AI matching ranks accommodations suited to traveler DNA profiles.',
      link: '/hotels',
      badge: 'VETTED',
      color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
      icon: Lock
    },
    {
      title: 'Restaurant Explorer',
      desc: 'Identifies local culinary specialties, street food, and Jain choices.',
      link: '/utilities',
      badge: 'ONLINE',
      color: 'text-rose-400 border-rose-500/20 bg-rose-500/5',
      icon: Compass
    },
    {
      title: 'Interactive Maps',
      desc: 'Displays real-time day/night cycles and aircraft coordinates globally.',
      link: '/maps',
      badge: 'LIVE',
      color: 'text-pink-400 border-pink-500/20 bg-pink-500/5',
      icon: Globe
    },
    {
      title: 'Travel Calendar',
      desc: 'Blocks out scheduled trip days to avoid timing overlaps.',
      link: '/utilities',
      badge: 'ACTIVE',
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
      icon: Calendar
    },
    {
      title: 'Saved Trips Log',
      desc: 'Accesses saved custom itineraries and agent logs.',
      link: '/dashboard',
      badge: 'SYNCHRONIZED',
      color: 'text-orange-400 border-orange-500/20 bg-orange-500/5',
      icon: Layers
    },
    {
      title: 'Memory Vault',
      desc: 'Stores digital postcards, audio diaries, and coordinates stamps.',
      link: '/legacy',
      badge: 'RESTORED',
      color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
      icon: BookOpen
    },
    {
      title: 'Travel Statistics',
      desc: 'Inspects country completeness indices and carbon footprints.',
      link: '/dashboard',
      badge: 'ONLINE',
      color: 'text-teal-400 border-teal-500/20 bg-teal-500/5',
      icon: TrendingUp
    },
    {
      title: 'Personalized Recommendations',
      desc: 'Suggests coordinates matched to user travel history.',
      link: '/dream-trip',
      badge: 'READY',
      color: 'text-sky-400 border-sky-500/20 bg-sky-500/5',
      icon: Sparkles
    },
    {
      title: 'Travel Personas',
      desc: 'Calibrates travel preferences via DNA profile mapping.',
      link: '/personality-lab',
      badge: 'RESOLVED',
      color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
      icon: UserCheck
    },
    {
      title: 'Explorer Achievements',
      desc: 'Tracks unlocked location badges and ranking levels.',
      link: '/achievements',
      badge: 'ACTIVE',
      color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5',
      icon: Award
    }
  ];

  return (
    <section className="flex flex-col gap-10 text-left">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest font-mono">TravelVerse Ecosystem Hub</span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-850 dark:text-white mt-0 tracking-wide">
          Travelverse OS Core Engines
        </h2>
        <p className="text-xs text-slate-400 font-semibold">
          Launch, calibrate, or inspect any of the active travel modules in the unified year 2100 travel operating system.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.link}
              className="group p-6 rounded-3xl bg-slate-900/40 hover:bg-slate-900 border border-white/5 hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between text-left card-premium-hover shadow-lg"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full border text-[8px] font-bold font-mono tracking-wider ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors mt-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium mt-1">{item.desc}</p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-teal-400 uppercase font-bold tracking-wider">
                <span>LAUNCH MODULE</span>
                <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
