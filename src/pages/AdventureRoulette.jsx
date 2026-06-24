/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dices, Coins, Compass, Calendar, Sparkles, RefreshCw, Save, MapPin, Activity, CloudRain, Sun, Snowflake, Leaf, ArrowRight, Clock, User, DollarSign, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { generateDetailedItinerary } from '../utils/itineraryEngine';

export const AdventureRoulette = () => {
  const { saveItinerary, awardXp, showToast, user } = useApp();
  const [budget, setBudget] = useState(150000);
  const [season, setSeason] = useState('Winter');
  const [duration, setDuration] = useState(5);
  
  const [spinning, setSpinning] = useState(false);
  const [spinAngle, setSpinAngle] = useState(0);
  const [selectedDest, setSelectedDest] = useState(null);
  const [itinerary, setItinerary] = useState(null);
  
  // Terminal compiler logs
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [terminalProgress, setTerminalProgress] = useState(0);

  // Wheel sectors
  const rouletteSectors = [
    { name: 'Goa', icon: '🏖️', mood: 'Relaxed', type: 'Beach', color: 'from-cyan-500 to-blue-500', costScale: 1.0 },
    { name: 'Jaipur', icon: '🏰', mood: 'Luxury', type: 'Heritage', color: 'from-amber-500 to-orange-500', costScale: 1.1 },
    { name: 'Kerala', icon: '🌿', mood: 'Relaxed', type: 'Nature', color: 'from-emerald-500 to-teal-500', costScale: 1.2 },
    { name: 'Kashmir', icon: '🏔️', mood: 'Romantic', type: 'Valley', color: 'from-sky-500 to-indigo-500', costScale: 1.3 },
    { name: 'Ladakh', icon: '🏍️', mood: 'Adventure', type: 'Highland', color: 'from-purple-500 to-violet-500', costScale: 1.4 },
    { name: 'Varanasi', icon: '🕉️', mood: 'Spiritual', type: 'Ancient', color: 'from-rose-500 to-pink-500', costScale: 0.9 },
    { name: 'Udaipur', icon: '🛶', mood: 'Romantic', type: 'Lakes', color: 'from-teal-500 to-emerald-500', costScale: 1.15 },
    { name: 'Kyoto', icon: '⛩️', mood: 'Spiritual', type: 'Temples', color: 'from-red-500 to-rose-600', costScale: 2.2 }
  ];

  // Adjust spin pointer
  const handleSpin = () => {
    if (spinning) return;
    
    setSpinning(true);
    setSelectedDest(null);
    setItinerary(null);
    setTerminalLogs([]);
    setTerminalProgress(0);

    // Pick random index
    const sectorCount = rouletteSectors.length;
    const selectedIndex = Math.floor(Math.random() * sectorCount);
    
    // Calculate rotation angle
    // Full rotations (5-8) plus offset for target slice
    // Align target slice to top (270 degrees or adjusted pointing arrow)
    // Slices are 360 / 8 = 45 degrees
    // Center pointer is at top (0 degrees or 90/270 depending on style)
    // Let's spin the wheel. Angle rotates clockwise.
    // Index increases clockwise. To align index to top pointer (0 deg):
    // Target rotation = 360 - (index * 45) + (360 * rotations)
    const rotations = 8;
    const newAngle = spinAngle + (360 * rotations) - (selectedIndex * 45) + (360 - (spinAngle % 360));
    
    setSpinAngle(newAngle);

    // Logs generator
    const targetLogs = [
      '>> INITIALIZING TELEPORT ENGINE...',
      '>> SYNCING COGNITIVE WEATHER SCANNERS...',
      `>> FILTER ARGS: [BUDGET TARGET: ₹${budget.toLocaleString()}, SEASON: ${season}, DAYS: ${duration}]`,
      '>> CALCULATING SCENIC TRAJECTORIES & COORD INTERCEPTS...',
      '>> SCANNING GEOGRAPHIC TEMPERATURE VECTORS...',
      '>> DOCKING HOTEL NODES & FLIGHT SLOTS...',
      '>> INTERSECTING ADVENTURE LEVEL METRICS...',
      '>> COMPILED SUCCESSFUL. RESOLVED LANDING ZONE DATA FIELDS...'
    ];

    let logIdx = 0;
    const logInterval = setInterval(() => {
      if (logIdx < targetLogs.length) {
        setTerminalLogs(prev => [...prev, targetLogs[logIdx]]);
        setTerminalProgress(Math.round(((logIdx + 1) / targetLogs.length) * 100));
        logIdx++;
      } else {
        clearInterval(logInterval);
      }
    }, 550);

    // Wait for animation to finish (5s)
    setTimeout(() => {
      setSpinning(false);
      const landedSector = rouletteSectors[selectedIndex];
      setSelectedDest(landedSector);
      
      // Build surprise itinerary details
      const budgetTier = budget < 80000 ? 'Backpacker' : (budget < 250000 ? 'Mid-range' : 'Luxury');
      const detailedPlan = generateDetailedItinerary(
        landedSector.name,
        duration,
        budgetTier,
        ['Adventure', 'Relaxation', 'Food'],
        landedSector.mood,
        'Balanced'
      );

      // Financial breakdown
      const costFactor = landedSector.costScale;
      const baseDailyRate = budgetTier === 'Backpacker' ? 4500 : (budgetTier === 'Mid-range' ? 12000 : 32000);
      const flightBase = budgetTier === 'Backpacker' ? 15000 : (budgetTier === 'Mid-range' ? 45000 : 120000);
      
      const flightCost = Math.round(flightBase * costFactor);
      const lodgingCost = Math.round((baseDailyRate * 0.45) * duration * costFactor);
      const localTransport = Math.round((baseDailyRate * 0.2) * duration * costFactor);
      const mealsCost = Math.round((baseDailyRate * 0.2) * duration * costFactor);
      const activitiesCost = Math.round((baseDailyRate * 0.15) * duration * costFactor);
      const totalEstimatedCost = flightCost + lodgingCost + localTransport + mealsCost + activitiesCost;

      setItinerary({
        destination: landedSector.name,
        icon: landedSector.icon,
        type: landedSector.type,
        color: landedSector.color,
        duration,
        budgetTier,
        costBreakdown: {
          flight: flightCost,
          lodging: lodgingCost,
          transport: localTransport,
          meals: mealsCost,
          activities: activitiesCost,
          total: totalEstimatedCost
        },
        agenda: detailedPlan.days,
        transportAdvice: detailedPlan.transportationAdvice,
        walkingDist: detailedPlan.averageWalkingDist
      });

      awardXp(200, `Spun Adventure Roulette: Landed on ${landedSector.name}`);
      showToast(`Landed on ${landedSector.name}!`, 'success');
    }, 5200);
  };

  const handleSaveTrip = () => {
    if (!itinerary) return;
    
    // Format to save into App Context
    const tripToSave = {
      destination: itinerary.destination,
      duration: itinerary.duration,
      startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 weeks out
      notes: `Surprise roulette destination! Category: ${itinerary.type}. Travel Style: ${itinerary.budgetTier}.`,
      costs: {
        flights: itinerary.costBreakdown.flight,
        lodging: itinerary.costBreakdown.lodging,
        transport: itinerary.costBreakdown.transport,
        meals: itinerary.costBreakdown.meals,
        activities: itinerary.costBreakdown.activities,
        total: itinerary.costBreakdown.total
      },
      packingList: [
        '📄 Docs: Boarding pass & ID cards',
        '🔌 Gear: Phone charger & power bank',
        '👕 Wear: Weather-appropriate outfit',
        '🎒 Pack: Digital camera & daypack'
      ],
      days: itinerary.agenda.map(day => {
        const morningEvent = day.timeline.find(t => t.activity.toLowerCase().includes('morning') || t.time.includes('AM')) || day.timeline[0];
        const afternoonEvent = day.timeline.find(t => t.activity.toLowerCase().includes('afternoon') || t.activity.toLowerCase().includes('lunch') || t.activity.toLowerCase().includes('mid-day')) || day.timeline[Math.floor(day.timeline.length / 2)];
        const eveningEvent = day.timeline.find(t => t.activity.toLowerCase().includes('sunset') || t.activity.toLowerCase().includes('dinner') || t.time.includes('PM')) || day.timeline[day.timeline.length - 1];

        return {
          day: day.day,
          title: day.title,
          timeline: day.timeline,
          activities: {
            morning: morningEvent ? `${morningEvent.activity}: ${morningEvent.details}` : 'Arrival & setup',
            afternoon: afternoonEvent ? `${afternoonEvent.activity}: ${afternoonEvent.details}` : 'Local sightseeing tour',
            evening: eveningEvent ? `${eveningEvent.activity}: ${eveningEvent.details}` : 'Leisure dinner'
          }
        };
      })
    };

    saveItinerary(tripToSave);
  };

  return (
    <div className="py-4 text-left flex flex-col gap-8 w-full">
      {/* Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0 flex items-center gap-2">
          <Dices className="text-teal-500 shrink-0" />
          Adventure Roulette
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Let fate choose your next cycle. Adjust budget boundaries, select a seasonal timeline, and spin the quantum engine for a surprise destination and compiled plan.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full text-xs">
        
        {/* Left Control Panel & Spinner (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* Inputs & Controls Panel */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm flex flex-col gap-5">
            <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1 flex items-center gap-1.5">
              <Compass size={14} className="text-teal-400" /> Roulette Orbit Configurations
            </h4>

            {/* Budget Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400">
                <span>MAXIMUM BUDGET CONSTRAINTS</span>
                <span className="text-teal-400 text-xs">₹{budget.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="10000" max="500000" step="5000" value={budget} onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-full appearance-none cursor-pointer accent-teal-500"
                disabled={spinning}
              />
              <div className="flex justify-between text-[8px] font-mono text-slate-500">
                <span>₹10,000 (Backpacker)</span>
                <span>₹2,500,000 (Mid-range)</span>
                <span>₹5,00,000+ (Luxury)</span>
              </div>
            </div>

            {/* Duration & Season Selection Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Duration Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400">
                  <span>TRIP DURATION</span>
                  <span className="text-indigo-400 text-xs">{duration} Days</span>
                </div>
                <input 
                  type="range" min="3" max="15" step="1" value={duration} onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-950 rounded-full appearance-none cursor-pointer accent-indigo-500"
                  disabled={spinning}
                />
              </div>

              {/* Season Selection Button Grid */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400 block mb-0.5">TARGET WEATHER WINDOW</span>
                <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950 rounded-xl border border-white/5">
                  {[
                    { id: 'Summer', icon: <Sun size={10} />, color: 'text-amber-400' },
                    { id: 'Winter', icon: <Snowflake size={10} />, color: 'text-sky-400' },
                    { id: 'Monsoon', icon: <CloudRain size={10} />, color: 'text-teal-400' },
                    { id: 'Autumn', icon: <Leaf size={10} />, color: 'text-orange-400' }
                  ].map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSeason(s.id)}
                      className={`flex flex-col items-center gap-1 py-1 rounded-lg font-mono text-[9px] font-bold cursor-pointer transition-colors ${
                        season === s.id ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-400'
                      }`}
                      disabled={spinning}
                    >
                      <span className={s.color}>{s.icon}</span>
                      <span>{s.id.slice(0, 3).toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Holographic Spin Core Box */}
          <div className="rounded-3xl bg-slate-950 border border-teal-500/10 p-6 flex flex-col items-center justify-center relative min-h-[360px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 grid-cyber opacity-20 pointer-events-none" />
            
            {/* Spinning Neon Wheel Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center z-10">
              
              {/* Outer Pointer Pin Indicator */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-rose-500 filter drop-shadow-[0_2px_8px_rgba(244,63,94,0.5)]" />
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-1" />
              </div>

              {/* Glowing Ambient Core Shadow */}
              <div className="absolute w-56 h-56 rounded-full bg-teal-500/5 blur-2xl pointer-events-none" />

              {/* The Spinning Wheel */}
              <div 
                className="w-full h-full rounded-full border-[6px] border-slate-850 bg-slate-900 shadow-2xl relative overflow-hidden flex items-center justify-center"
                style={{ 
                  transform: `rotate(${spinAngle}deg)`, 
                  transition: spinning ? 'transform 5s cubic-bezier(0.1, 0.8, 0.15, 1)' : 'none'
                }}
              >
                {/* Sector dividers & Slices */}
                {rouletteSectors.map((s, idx) => {
                  const rotation = idx * 45;
                  return (
                    <div 
                      key={s.name} 
                      className="absolute inset-0"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      {/* Divider line */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-white/5 origin-bottom" />
                      
                      {/* Sector content */}
                      <div 
                        className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
                        style={{ transformOrigin: 'center center' }}
                      >
                        <span className="text-2xl p-1 bg-slate-950/80 rounded-xl border border-white/5 select-none">{s.icon}</span>
                        <span className="mt-2 text-[9px] font-black font-mono tracking-widest text-slate-300 uppercase">
                          {s.name}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Cyber Center core dial */}
                <div className="absolute w-16 h-16 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center z-20 shadow-xl">
                  <span className="text-xl animate-pulse">🛰️</span>
                </div>
              </div>
            </div>

            {/* Spin Trigger Button */}
            <div className="mt-8 z-10 w-full max-w-xs">
              <button 
                onClick={handleSpin}
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-slate-950 dark:text-white font-black font-mono text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
                disabled={spinning}
              >
                <RefreshCw size={14} className={spinning ? 'animate-spin' : ''} />
                {spinning ? 'COMPILING QUANTUM COORDS...' : 'SPIN ADVENTURE ROULETTE'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Output Dashboard (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full min-h-[400px]">
          
          {/* Generating terminal compiler */}
          {spinning && (
            <div className="p-5 rounded-3xl bg-slate-950 border border-teal-500/10 text-left font-mono flex-1 flex flex-col justify-between shadow-2xl min-h-[460px]">
              <div>
                <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest block mb-4 border-b border-teal-500/10 pb-2">COMPILE STREAM DECK</span>
                <div className="flex flex-col gap-1.5 text-[9.5px] text-slate-400">
                  {terminalLogs.map((log, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ duration: 0.2 }}
                      key={idx} 
                      className={log && typeof log === 'string' && log.startsWith('>>') ? 'text-teal-400 font-semibold' : 'pl-3 text-slate-500'}
                    >
                      {log}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                <div className="flex justify-between text-[8px] font-bold text-slate-400">
                  <span>ORBIT SYNC PROGRESS</span>
                  <span>{terminalProgress}%</span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 transition-all duration-300" style={{ width: `${terminalProgress}%` }} />
                </div>
              </div>
            </div>
          )}

          {/* Landed Itinerary read-out */}
          {!spinning && itinerary && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-2xl text-left flex flex-col gap-5 flex-1"
            >
              {/* Destination Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono text-[9px] font-bold rounded border border-teal-500/20 uppercase tracking-wider">
                    {itinerary.type} • {itinerary.budgetTier}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-850 dark:text-slate-100 mt-1.5 mb-0.5 flex items-center gap-1.5">
                    <span className="text-3xl select-none">{itinerary.icon}</span>
                    {itinerary.destination}
                  </h3>
                  <span className="text-[10px] text-slate-455 font-bold font-mono">Surprise coordinates mapped</span>
                </div>
                
                <span className="px-3 py-1 bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold rounded-lg uppercase">
                  {itinerary.duration} DAYS
                </span>
              </div>

              {/* Costs Breakdown */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 flex flex-col gap-2 text-[10.5px] font-mono text-slate-400">
                <span className="text-[8.5px] font-bold text-slate-500 uppercase tracking-widest block mb-1">FINANCIAL MATRIX SIMULATED</span>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>FLIGHT ESTIMATES</span>
                  <span className="text-white">₹{itinerary.costBreakdown.flight.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>LODGING ({itinerary.duration} nights)</span>
                  <span className="text-white">₹{itinerary.costBreakdown.lodging.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>LOCAL TRANSPORTATION</span>
                  <span className="text-white">₹{itinerary.costBreakdown.transport.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>MEALS & SNACKS</span>
                  <span className="text-white">₹{itinerary.costBreakdown.meals.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>ACTIVITIES INDEX</span>
                  <span className="text-white">₹{itinerary.costBreakdown.activities.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-bold pt-1.5 text-teal-400">
                  <span>ESTIMATED TOTAL</span>
                  <span>₹{itinerary.costBreakdown.total.toLocaleString()}</span>
                </div>
              </div>

              {/* Schedule Highlights summary list */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider block">AGENDA TELEMETRY</span>
                <div className="max-h-[140px] overflow-y-auto pr-1 flex flex-col gap-2 scrollbar-thin text-[10.5px]">
                  {itinerary.agenda.map((day, dIdx) => (
                    <div key={dIdx} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-white/5">
                      <span className="font-bold text-slate-700 dark:text-slate-305 block font-mono text-[10px] uppercase">DAY 0{day.day} // {day.title}</span>
                      <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                        {day.timeline.filter(t => t.activity.includes('Attraction') || t.activity.includes('Exploration')).map(t => t.activity.replace('Morning Main Attraction: ', '').replace('Afternoon Exploration: ', '')).join(' ➔ ') || 'Transit and orientation overview.'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warnings / Advice */}
              <div className="flex flex-col gap-2 text-[10px] border-t border-slate-200/20 dark:border-white/5 pt-3.5 leading-relaxed">
                <div className="flex justify-between font-mono text-slate-455">
                  <span>WALKING EXERTION</span>
                  <span className="text-slate-400 font-bold">{itinerary.walkingDist} / Day</span>
                </div>
                <div className="flex flex-col gap-0.5 text-slate-500">
                  <span className="font-mono text-[9px] text-slate-400 font-bold uppercase">LOGISTICS BRIEFING</span>
                  <span>{itinerary.transportAdvice}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-1">
                <button
                  onClick={handleSaveTrip}
                  className="flex-1 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold font-mono text-xs rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Save size={12} /> SAVE SURPRISE PLAN (+500 XP)
                </button>
              </div>
            </motion.div>
          )}

          {/* Idle screen indicator */}
          {!spinning && !itinerary && (
            <div className="p-6 text-center rounded-3xl bg-slate-900/40 border border-teal-500/10 flex flex-col items-center justify-center gap-2 flex-1 min-h-[460px] text-slate-500">
              <Compass size={24} className="text-slate-450 animate-pulse" />
              <h4 className="font-display font-black text-white mt-1">Telemetry Ready</h4>
              <p className="text-[11px] max-w-xs leading-relaxed">
                Configure your budget and travel duration parameters in the left panel, and launch the spin wheel to target a surprise destination coordinate.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
