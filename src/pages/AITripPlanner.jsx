import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Compass, Calendar, DollarSign, Users, 
  MapPin, Clock, ArrowRight, Save, RefreshCw, Sun, 
  Check, ShieldCheck, Navigation, Hotel, Utensils
} from 'lucide-react';
import useTripPlanner from '../hooks/useTripPlanner';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import StatWidget from '../components/ui/StatWidget';

export const AITripPlanner = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const promptParam = searchParams.get('prompt');

  const {
    plannerForm,
    updateFormField,
    isGenerating,
    currentItinerary,
    generateTrip,
    saveCurrentItinerary
  } = useTripPlanner();

  const [activeDayTab, setActiveDayTab] = useState(1);

  // Auto-trigger initial generation if prompt URL param present
  useEffect(() => {
    if (promptParam) {
      generateTrip({ destination: 'Kashmir', days: 6, budget: 50000, style: 'Luxury' });
    }
  }, [promptParam]);

  return (
    <div className="flex flex-col gap-8 text-left w-full">
      {/* Title Header */}
      <div className="flex flex-col gap-2">
        <Badge variant="teal" icon={Sparkles} className="w-fit">QUANTUM JOURNEY COMPILER</Badge>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
          AI Trip Planner Workspace
        </h1>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-2xl">
          Configure journey constraints or execute natural language prompts. Our AI twin engine generates real operational daily timelines, verified hotels, and budget breakdowns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Input Configuration Form */}
        <GlassPanel className="lg:col-span-4 p-6 border-teal-500/30 flex flex-col gap-5">
          <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-black flex items-center gap-1.5 border-b border-white/10 pb-3">
            <Compass size={14} className="animate-spin-slow" /> Journey Constraint Parameters
          </span>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-slate-400 uppercase font-bold">Target Destination</label>
            <select
              value={plannerForm.destination}
              onChange={(e) => updateFormField('destination', e.target.value)}
              className="p-3 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-teal-400 cursor-pointer"
            >
              <option value="Goa">Goa (Beach & Nightlife)</option>
              <option value="Kashmir">Kashmir Valley (Alpine & Lakes)</option>
              <option value="Kerala">Kerala (Backwaters & Nature)</option>
              <option value="Jaipur">Jaipur (Mughal & Palace Heritage)</option>
              <option value="Ladakh">Ladakh (Himalayan Pass)</option>
              <option value="Varanasi">Varanasi (Spiritual Ghats)</option>
              <option value="Udaipur">Udaipur (Lakes & Palaces)</option>
              <option value="Delhi">Delhi (Capital Heritage)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-slate-400 uppercase font-bold">Duration (Days)</label>
            <input
              type="number"
              min="2"
              max="14"
              value={plannerForm.duration}
              onChange={(e) => updateFormField('duration', parseInt(e.target.value) || 5)}
              className="p-3 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-teal-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase text-slate-400">
              <span>Budget Envelope</span>
              <span className="text-teal-400">₹{plannerForm.budget.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="15000"
              max="150000"
              step="5000"
              value={plannerForm.budget}
              onChange={(e) => updateFormField('budget', parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-slate-400 uppercase font-bold">Travel Style</label>
            <select
              value={plannerForm.travelStyle}
              onChange={(e) => updateFormField('travelStyle', e.target.value)}
              className="p-3 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-teal-400 cursor-pointer"
            >
              <option value="Balanced">Balanced Experience</option>
              <option value="Luxury">Luxury Heritage & Resorts</option>
              <option value="Backpacker">Backpacker & Adventure</option>
              <option value="Relaxed">Slow Travel & Wellness</option>
            </select>
          </div>

          <Button
            variant="primary"
            size="lg"
            icon={Sparkles}
            onClick={() => generateTrip()}
            disabled={isGenerating}
            className="w-full mt-2"
          >
            {isGenerating ? 'COMPILING QUANTUM MATRIX...' : 'GENERATE JOURNEY'}
          </Button>
        </GlassPanel>

        {/* Right Output Display Frame */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full min-h-[500px]">
          
          {isGenerating && (
            <GlassPanel className="p-16 flex flex-col items-center justify-center gap-4 text-center min-h-[450px]">
              <div className="w-12 h-12 rounded-full border-2 border-teal-400 border-t-transparent animate-spin" />
              <span className="font-mono text-xs text-teal-400 uppercase tracking-widest animate-pulse">ALIGINING GEODETIC ROUTES & HOTEL BUFFERS...</span>
            </GlassPanel>
          )}

          {!isGenerating && !currentItinerary && (
            <GlassPanel className="p-16 flex flex-col items-center justify-center gap-4 text-center min-h-[450px]">
              <Compass size={32} className="text-teal-400/50 animate-pulse" />
              <h3 className="text-lg font-bold text-white">Quantum Planner Standing By</h3>
              <p className="text-xs font-mono text-slate-400 max-w-sm">Configure parameters on the left and click "GENERATE JOURNEY" to render daily activities, lodging, and budget breakdown.</p>
            </GlassPanel>
          )}

          {!isGenerating && currentItinerary && (
            <div className="flex flex-col gap-6 w-full">
              
              {/* Output Hero Banner */}
              <GlassPanel className="p-6 border-teal-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <Badge variant="teal" icon={Check}>COMPILED JOURNEY DOSSIER</Badge>
                  <h2 className="font-display font-black text-2xl text-white mt-1.5">{currentItinerary.destination}</h2>
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 mt-1">
                    <span>{currentItinerary.duration || plannerForm.duration} Days</span>
                    <span>•</span>
                    <span className="text-teal-400 font-bold">₹{(currentItinerary.budget || plannerForm.budget).toLocaleString('en-IN')} Budget</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-bold">98% Match Score</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="primary" size="sm" icon={Save} onClick={saveCurrentItinerary}>
                    SAVE TO DOSSIER
                  </Button>
                </div>
              </GlassPanel>

              {/* Day Tabs navigation */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {(currentItinerary.days || []).map((dayObj, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDayTab(idx + 1)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shrink-0 border ${
                      activeDayTab === (idx + 1)
                        ? 'bg-teal-500/20 border-teal-400 text-teal-300'
                        : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    DAY 0{idx + 1}
                  </button>
                ))}
              </div>

              {/* Day Details Timeline */}
              {currentItinerary.days && currentItinerary.days[activeDayTab - 1] && (
                <GlassPanel className="p-6 flex flex-col gap-6">
                  <div className="border-b border-white/10 pb-3 flex justify-between items-center">
                    <h3 className="font-display font-bold text-lg text-white">
                      Day 0{activeDayTab}: {currentItinerary.days[activeDayTab - 1].title || 'Exploration & Heritage'}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4 font-mono text-xs pl-4 border-l border-teal-500/30">
                    {Object.entries(currentItinerary.days[activeDayTab - 1].activities || {}).map(([time, desc], i) => (
                      <div key={i} className="relative flex flex-col gap-1">
                        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]" />
                        <span className="font-bold text-teal-400 uppercase tracking-wider">{time}</span>
                        <p className="text-slate-300 leading-relaxed m-0">{desc}</p>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default AITripPlanner;
