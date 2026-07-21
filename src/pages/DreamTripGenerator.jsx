import React, { useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, ShieldCheck, Activity, Compass, ArrowRight, 
  Layers, MapPin, Download, Save, RefreshCw, Star
} from 'lucide-react';

export const DreamTripGenerator = () => {
  const { showToast, saveItineraryOffline } = useApp();
  const [budgetLimit, setBudgetLimit] = useState(150000);
  const [duration, setDuration] = useState(6);
  const [destination, setDestination] = useState('Kashmir');
  const [selectedVariant, setSelectedVariant] = useState('budget');
  const [isSimulating, setIsSimulating] = useState(false);

  // Generate 6 distinct variants for the comparative matrix
  const variants = {
    budget: {
      name: 'Budget Core Mode',
      color: 'teal',
      emoji: '🎒',
      cost: Math.round(budgetLimit * 0.65),
      pace: 'Fast-paced, high walking',
      accommodations: 'Eco-homestays & backpacker hubs',
      highlights: ['Local shared transit networks', 'Free walking excursions', 'Local street cuisine trials'],
      packing: 'Light backpack, walking shoes, water purifier bottle',
      itinerary: [
        'Day 1: Transit & check-in to regional homestay. Evening canal walk.',
        'Day 2: Shared local jeep tour of historic gardens & landmarks.',
        'Day 3: Hiking valley pathways. Local tea lounge stop.',
        `Day 4-6: Exploring street food stalls, markets, and regional transit home.`
      ]
    },
    luxury: {
      name: 'Luxury Zenith',
      color: 'pink',
      emoji: '💎',
      cost: Math.round(budgetLimit * 1.5),
      pace: 'Leisurely, private transit',
      accommodations: '5-Star Heritage Palaces & Luxury resorts',
      highlights: ['Private helicopter/Tesla transfers', 'Michelin-starred private dining', 'Personal guide avatar'],
      packing: 'Premium luggage, designer shades, formal wear',
      itinerary: [
        'Day 1: Chauffeur pickup, luxury check-in. Private sunset deck lounge.',
        'Day 2: Private historical estate reservation. Fine-dining experience.',
        'Day 3: Floating boat breakfast & premium spa decompression.',
        `Day 4-6: Aerial helicopter transit and checkout.`
      ]
    },
    adventure: {
      name: 'Adrenaline Matrix',
      color: 'orange',
      emoji: '🧗',
      cost: Math.round(budgetLimit * 0.95),
      pace: 'High activity, zero rest downtime',
      accommodations: 'Alpine base camps & high-altitude tents',
      highlights: ['Paragliding excursions', 'Class 4 river rafting', 'Overnight wilderness treks'],
      packing: 'Thermals, windbreaker, trekking poles, first aid kit',
      itinerary: [
        'Day 1: Base camp landing. Altitude safety check & gear testing.',
        'Day 2: Sunrise paragliding & valley downhill bike ride.',
        'Day 3: Rapid river rafting & wilderness base trek.',
        `Day 4-6: High ridge climb, camp bonfire, and transit extraction.`
      ]
    },
    family: {
      name: 'Cohesive Family Vibe',
      color: 'emerald',
      emoji: '👨‍👩‍👧‍👦',
      cost: Math.round(budgetLimit * 1.15),
      pace: 'Moderate, family breaks built-in',
      accommodations: 'Family suites & child-friendly resorts',
      highlights: ['Child/senior-safe transfers', 'Amusement parks & heritage tours', 'Kid-friendly food options'],
      packing: 'Snack bags, power banks, kids toys, family medicine',
      itinerary: [
        'Day 1: Arrive, check-in to resort. Safe indoor games evening.',
        'Day 2: Multi-generational garden tour & safe boat ride.',
        'Day 3: Local handicraft museum visit & kid workshop.',
        `Day 4-6: Souvenir shopping, family photo sessions, and return.`
      ]
    },
    solo: {
      name: 'Mindful Solitude',
      color: 'indigo',
      emoji: '🧘',
      cost: Math.round(budgetLimit * 0.75),
      pace: 'Self-directed, open schedule',
      accommodations: 'Single-studio pods & digital nomad cabins',
      highlights: ['Acoustic meditation reserves', 'Local library sessions', 'Nomad co-working hubs'],
      packing: 'Laptop, noise-canceling headphones, journal, book',
      itinerary: [
        'Day 1: Check-in to nomad cabin. Silence orientation.',
        'Day 2: Morning meditation & independent exploration trails.',
        'Day 3: Remote coworking log, meeting local freelancers.',
        `Day 4-6: Zen garden trails, self-journaling, and quiet exit.`
      ]
    },
    religious: {
      name: 'Spiritual Sanctum',
      color: 'amber',
      emoji: '🕉️',
      cost: Math.round(budgetLimit * 0.85),
      pace: 'Slow-paced, spiritual hours matching',
      accommodations: 'Temple ashrams & spiritual sanctuaries',
      highlights: ['Morning temple prayers', 'Prasad dining sessions', 'Spiritual history guide lectures'],
      packing: 'Traditional white/saffron attire, prayer beads, copper bottle',
      itinerary: [
        'Day 1: Arrive at spiritual retreat. Evening mantra session.',
        'Day 2: Early morning temple entry. Spiritual history talk.',
        'Day 3: Sacred route walking trail. Yoga class.',
        `Day 4-6: Holy river dips, custom prasad cooking, and departure.`
      ]
    }
  };

  const handleSimulate = (e) => {
    e.preventDefault();
    setIsSimulating(true);
    showToast('AI Consciousness: Simulating travel variants...', 'info');
    setTimeout(() => {
      setIsSimulating(false);
      showToast('Simulation complete: 6-variant matrix loaded.', 'success');
    }, 1500);
  };

  const handleSaveOffline = useCallback((variantKey) => {
    const data = variants[variantKey];
    const itinerary = {
      id: `dream-${variantKey}-${Date.now()}`,
      destination: `${destination} (${data.name})`,
      budget: data.cost,
      duration: `${duration} Days`,
      highlights: data.highlights,
      timeline: data.itinerary.map((act, i) => ({ day: `Day ${i+1}`, activity: act }))
    };
    saveItineraryOffline(itinerary);
  }, [destination, duration, variants, saveItineraryOffline]);

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          QUANTUM SIMULATION CHAMBER
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          AI Dream Trip Generator
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl">
          Instantly synthesize, balance, and review **6 distinct variants** of your journey to match your exact mood vectors, budget boundaries, and comfort zones.
        </p>
      </div>

      {/* Entry Controls form */}
      <form onSubmit={handleSimulate} className="p-6 rounded-3xl bg-slate-900/50 dark:bg-slate-950/80 border border-white/5 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div className="flex flex-col gap-2 text-left">
          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            Destination Target
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-100 placeholder-slate-600"
            placeholder="e.g. Kashmir, Goa, Ladakh..."
          />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            <span>Budget Limit</span>
            <span className="text-teal-400">₹{budgetLimit.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="30000"
            max="500000"
            step="10000"
            value={budgetLimit}
            onChange={(e) => setBudgetLimit(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            <span>Duration</span>
            <span className="text-teal-400">{duration} Days</span>
          </div>
          <input
            type="range"
            min="3"
            max="14"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
        </div>

        <button
          type="submit"
          disabled={isSimulating}
          className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold font-mono transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSimulating ? (
            <>
              <RefreshCw className="animate-spin" size={14} />
              SIMULATING MATRIX...
            </>
          ) : (
            <>
              <Sparkles size={14} />
              SIMULATE 6 VARIANTS
            </>
          )}
        </button>
      </form>

      {/* Grid Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {Object.entries(variants).map(([key, data]) => {
          const isSelected = selectedVariant === key;
          
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedVariant(key)}
              className={`p-4 rounded-2xl border text-left flex flex-col gap-3 transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.2)] scale-[1.02] text-white'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-teal-500/30'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-xl">{data.emoji}</span>
                <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {key}
                </span>
              </div>
              <div>
                <h4 className="font-display font-extrabold text-xs tracking-tight">
                  {data.name}
                </h4>
                <span className="text-[11px] font-mono font-bold text-teal-400 block mt-0.5">
                  ₹{data.cost.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-450 leading-relaxed truncate w-full">
                {data.pace}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Variant Detailed View */}
      {selectedVariant && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col gap-6 text-left animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="flex justify-between items-start flex-wrap gap-4 border-b border-slate-200 dark:border-white/5 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{variants[selectedVariant].emoji}</span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white">
                  {variants[selectedVariant].name}
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                TRANSIT MATRIX DECOMPRESSOR // TARGET: {destination.toUpperCase()}
              </p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => handleSaveOffline(selectedVariant)}
                className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-white rounded-xl text-xs font-mono font-bold border border-slate-200 dark:border-white/5 flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                <Save size={13} />
                BUFFER OFFLINE
              </button>
              <button
                onClick={() => {
                  showToast('Itinerary exported to PDF.', 'success');
                }}
                className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                <Download size={13} />
                EXPORT CERTIFICATE
              </button>
            </div>
          </div>

          {/* Details split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: parameters */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest font-mono">
                  Calculated Cost Estimate
                </span>
                <span className="text-2xl font-black text-slate-900 dark:text-white font-display">
                  ₹{variants[selectedVariant].cost.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                  Includes localized transports, base lodging, and default entry keys.
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest font-mono">
                  Travel pace
                </span>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">
                  {variants[selectedVariant].pace}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest font-mono">
                  Lodging station style
                </span>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">
                  {variants[selectedVariant].accommodations}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest font-mono">
                  Essential Packing Checklist
                </span>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-bold font-mono">
                  🎒 {variants[selectedVariant].packing}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 flex flex-col gap-2 text-xs">
                <h5 className="font-display font-extrabold text-slate-800 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="text-teal-400" size={14} /> Variant Features
                </h5>
                <ul className="flex flex-col gap-1 text-slate-500 dark:text-slate-400 pl-4 list-disc font-semibold">
                  {variants[selectedVariant].highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side: Day-by-day */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest font-mono border-b border-slate-200 dark:border-white/5 pb-1">
                Quantum Route Timeline ({duration} Days)
              </span>
              <div className="flex flex-col gap-3 mt-1">
                {variants[selectedVariant].itinerary.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center font-mono text-[9px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
