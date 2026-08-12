import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, Compass, Navigation, Map, BookOpen, 
  ArrowRight, Activity, Sun, Clock, DollarSign, 
  ShieldCheck, Award, Zap, ChevronRight
} from 'lucide-react';
import useDestinations from '../hooks/useDestinations';
import useJourney from '../hooks/useJourney';
import useTravelProfile from '../hooks/useTravelProfile';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SpatialDestinationCard from '../components/ui/SpatialDestinationCard';

export const Home = () => {
  const navigate = useNavigate();
  const { allDestinations } = useDestinations();
  const { activeTrip } = useJourney();
  const { statsSummary } = useTravelProfile();

  const [aiPrompt, setAiPrompt] = useState('');

  const samplePrompts = [
    "Plan a 7 day Kashmir trip under ₹50,000",
    "Find a peaceful beach destination for October",
    "Optimize my 5 day Goa itinerary",
    "Where can I travel from Delhi for ₹20,000?"
  ];

  const quickModules = [
    { title: 'PLAN A TRIP', desc: 'AI Itinerary Compiler', path: '/planner', icon: Sparkles, color: 'teal' },
    { title: 'EXPLORE', desc: '53 Hotspots Catalog', path: '/destinations', icon: Navigation, color: 'sky' },
    { title: 'MY JOURNEY', desc: 'Live Telemetry Cockpit', path: '/cockpit', icon: Activity, color: 'purple' },
    { title: 'OPEN MAP', desc: 'Full-Screen Geodetic Map', path: '/maps', icon: Map, color: 'emerald' },
    { title: 'MEMORIES', desc: 'Quantum Photo Archive', path: '/memories', icon: BookOpen, color: 'amber' },
    { title: 'INDIA EXPLORER', desc: '6 Zones Heritage Matrix', path: '/india-explorer', icon: Compass, color: 'sky' },
    { title: 'SPIRITUAL', desc: '12 Jyotirlinga Passport', path: '/spiritual', icon: ShieldCheck, color: 'amber' }
  ];

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (aiPrompt.trim()) {
      navigate(`/planner?prompt=${encodeURIComponent(aiPrompt)}`);
    }
  };

  return (
    <div className="flex flex-col gap-12 text-left w-full">
      
      {/* MISSION CONTROL HERO VIEWPORT */}
      <section className="relative pt-6 pb-12 flex flex-col gap-8 items-center text-center">
        
        {/* Top OS Pill */}
        <Badge variant="teal" icon={Sparkles} className="px-4 py-1.5 text-[10px]">
          MISSION CONTROL • TRAVEL OPERATING SYSTEM 2100
        </Badge>

        {/* Hero Headings */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.08]">
            TRAVELVERSE <span className="bg-gradient-to-r from-teal-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-sm sm:text-lg font-mono text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Plan smarter. Travel deeper. Remember everything.
          </p>
        </div>

        {/* SPATIAL AI COMMAND CENTER */}
        <div className="w-full max-w-3xl">
          <GlassPanel className="p-3 sm:p-4 border-teal-500/30 shadow-[0_0_50px_rgba(45,212,191,0.12)]">
            <form onSubmit={handleCommandSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="WHERE DO YOU WANT TO GO? e.g. Plan a 7 day Kashmir trip under ₹50,000..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full pl-4 pr-4 py-3.5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm font-mono text-white focus:outline-none focus:border-teal-400 placeholder:text-slate-500"
                />
              </div>
              <Button type="submit" variant="primary" icon={ArrowRight} iconPosition="right" size="md">
                EXECUTE
              </Button>
            </form>

            {/* Quick Prompt Suggestion Chips */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
              {samplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAiPrompt(prompt);
                    navigate(`/planner?prompt=${encodeURIComponent(prompt)}`);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-teal-500/10 border border-white/5 hover:border-teal-500/30 text-[10px] font-mono text-slate-400 hover:text-teal-300 transition-all cursor-pointer"
                >
                  ✨ {prompt}
                </button>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* QUICK COMMAND MODULES GRID */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">System Modules</span>
          <span className="text-[10px] font-mono text-teal-400 font-bold">7 MODULES ONLINE</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {quickModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <GlassPanel
                key={mod.title}
                hoverEffect
                glowColor={mod.color}
                onClick={() => navigate(mod.path)}
                className="p-4 flex flex-col justify-between min-h-[120px]"
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-teal-400 w-fit">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col mt-3">
                  <span className="font-mono font-bold text-xs text-white uppercase tracking-wider">{mod.title}</span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">{mod.desc}</span>
                </div>
              </GlassPanel>
            );
          })}
        </div>
      </section>

      {/* ACTIVE JOURNEY TELEMETRY COCKPIT CARD */}
      {activeTrip && (
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">Active Telemetry</span>
            <Badge variant="teal" icon={Activity}>LIVE TRIP COCKPIT</Badge>
          </div>

          <GlassPanel className="p-6 border-sky-500/30 shadow-[0_0_40px_rgba(56,189,248,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-4 flex flex-col gap-2">
                <Badge variant="sky" size="sm">DAY {activeTrip.activeDay || 3} OF {activeTrip.totalDays || 6}</Badge>
                <h2 className="font-display font-black text-2xl text-white mt-1">{activeTrip.destination}</h2>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Sun size={14} className="text-amber-400" />
                  <span>{activeTrip.weather || '18°C • Clear Alpine Skies'}</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-2 font-mono text-xs text-slate-300 bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                <span className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Next Scheduled Activity</span>
                <p className="text-teal-300 font-bold leading-relaxed">{activeTrip.currentStep}</p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
                  <span>Lodging: {activeTrip.hotel}</span>
                  <span className="text-emerald-400 font-bold">{activeTrip.budgetRemaining}</span>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-end">
                <Button
                  variant="secondary"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={() => navigate('/cockpit')}
                >
                  OPEN COCKPIT
                </Button>
              </div>
            </div>
          </GlassPanel>
        </section>
      )}

      {/* SPATIAL FEATURED DESTINATIONS */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-black block">Destination Intelligence</span>
            <h2 className="font-display font-black text-2xl text-white uppercase mt-0.5">Featured Destinations</h2>
          </div>
          <Link to="/destinations" className="text-xs font-mono text-teal-400 font-bold hover:underline uppercase flex items-center gap-1">
            VIEW ALL 53 DESTINATIONS <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDestinations.slice(0, 3).map((dest) => (
            <SpatialDestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
