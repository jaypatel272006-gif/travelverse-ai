import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Activity, Sun, Clock, MapPin, Hotel, DollarSign, 
  Navigation, ShieldCheck, ArrowRight, Sparkles, AlertTriangle 
} from 'lucide-react';
import useJourney from '../hooks/useJourney';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import StatWidget from '../components/ui/StatWidget';

export const JourneyCockpit = () => {
  const navigate = useNavigate();
  const { activeTrip } = useJourney();

  if (!activeTrip) {
    return (
      <GlassPanel className="p-12 text-center flex flex-col items-center justify-center gap-4 min-h-[400px]">
        <Activity size={32} className="text-teal-400 animate-pulse" />
        <h2 className="text-xl font-bold text-white">No Active Journey Logged</h2>
        <p className="text-xs font-mono text-slate-400 max-w-sm">Launch a new AI trip plan to initialize live telemetry tracking in your Journey Cockpit.</p>
        <Button variant="primary" onClick={() => navigate('/planner')}>PLAN YOUR FIRST JOURNEY</Button>
      </GlassPanel>
    );
  }

  return (
    <div className="flex flex-col gap-8 text-left w-full">
      {/* Title Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <Badge variant="sky" icon={Activity}>LIVE AVIATION-STYLE COCKPIT</Badge>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Journey Command Center
          </h1>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl">
            Real-time flight, weather, hotel, and daily schedule telemetry feed for {activeTrip.destination}.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => navigate('/maps')}>
          VIEW GEODETIC MAP
        </Button>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatWidget
          label="Active Day"
          value={`Day 0${activeTrip.activeDay || 3} / 0${activeTrip.totalDays || 6}`}
          subtext="Mid-journey execution"
          icon={Clock}
          color="teal"
        />
        <StatWidget
          label="Local Atmosphere"
          value={activeTrip.weather || '18°C • Clear'}
          subtext="High Visibility"
          icon={Sun}
          color="sky"
        />
        <StatWidget
          label="Lodging Base"
          value="Grand Palace"
          subtext={activeTrip.hotel || 'Verified Resort'}
          icon={Hotel}
          color="purple"
        />
        <StatWidget
          label="Remaining Envelope"
          value={activeTrip.budgetRemaining || '₹28,400'}
          subtext="On-track (+4.2%)"
          icon={DollarSign}
          color="amber"
        />
      </div>

      {/* Active Step Panel */}
      <GlassPanel className="p-6 border-teal-500/30">
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest font-black flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            CURRENT TELEMETRY TARGET STEP
          </span>
          <h2 className="text-xl font-mono font-bold text-white">{activeTrip.currentStep}</h2>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
            <span>Location: {activeTrip.destination}</span>
            <span>•</span>
            <span>Transit: Private Cabs / Shikara</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Safety Index: 99.4% CLEAR</span>
          </div>
        </div>
      </GlassPanel>

      {/* Daily Timeline Overview */}
      <GlassPanel className="p-6 flex flex-col gap-6">
        <h3 className="font-display font-bold text-lg text-white">Full Journey Execution Matrix</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(activeTrip.days || []).map((d) => (
            <div key={d.day} className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 flex flex-col gap-2 font-mono text-xs">
              <div className="flex justify-between items-center text-teal-400 font-bold">
                <span>DAY 0{d.day}</span>
                <span className="text-[10px] text-slate-500 uppercase">{d.title}</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 gap-1 flex flex-col mt-1">
                {(d.activities || []).map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GlassPanel>

    </div>
  );
};

export default JourneyCockpit;
