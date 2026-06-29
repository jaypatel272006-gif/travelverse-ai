/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Wallet, CheckSquare, Plus, ArrowRight, Printer, Save, CheckCircle, RefreshCw, Thermometer, Wind, Eye, Cpu, Terminal } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { generateDetailedItinerary } from '../utils/itineraryEngine';

export const AITripPlanner = () => {
  const { saveItinerary, user, twinPreferences } = useApp();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Wizard States
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState(5);
  const [budgetType, setBudgetType] = useState('Mid-range'); // Backpacker, Mid-range, Luxury
  const [interests, setInterests] = useState([]);
  const [travelStyle, setTravelStyle] = useState('Solo');
  const [pace, setPace] = useState('Balanced');
  
  // Generating state & Terminal console logs
  const [generating, setGenerating] = useState(false);
  const [generatingProgress, setGeneratingProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [itinerary, setItinerary] = useState(null);
  const [isEditingPlan, setIsEditingPlan] = useState(false);
  const terminalEndRef = useRef(null);

  // Twin Synced indicator
  const [twinSynced, setTwinSynced] = useState(false);

  // Tabs state for Itinerary View
  const [activeTab, setActiveTab] = useState('schedule');

  // Documentary Simulator States
  const [docPlaying, setDocPlaying] = useState(false);
  const [docDay, setDocDay] = useState(0);
  const [soundtrack, setSoundtrack] = useState('Chill Lo-Fi');

  // Sync from URL parameters (e.g. from Home page quick estimator widget)
  useEffect(() => {
    const budgetLimit = searchParams.get('budgetLimit');
    const urlDuration = searchParams.get('duration');
    const urlDest = searchParams.get('destination');
    
    if (urlDest) setDestination(urlDest);
    if (urlDuration) setDuration(parseInt(urlDuration));
    if (budgetLimit) {
      const limit = parseInt(budgetLimit);
      if (limit < 80000) setBudgetType('Backpacker');
      else if (limit < 200000) setBudgetType('Mid-range');
      else setBudgetType('Luxury');
      setStep(3); // Start further in the wizard
    }
  }, [searchParams]);

  // Scroll terminal logs to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  // Pre-populate planner choices from AI Travel Twin context
  useEffect(() => {
    if (twinPreferences && !twinSynced) {
      if (twinPreferences.budgetRange === 'backpacker' || twinPreferences.budgetRange === 'budget') {
        setBudgetType('Backpacker');
      } else if (twinPreferences.budgetRange === 'midrange') {
        setBudgetType('Mid-range');
      } else if (twinPreferences.budgetRange === 'premium' || twinPreferences.budgetRange === 'ultraluxury') {
        setBudgetType('Luxury');
      }

      if (twinPreferences.travelPace === 'relaxed') {
        setPace('Relaxed');
      } else if (twinPreferences.travelPace === 'moderate') {
        setPace('Balanced');
      } else if (twinPreferences.travelPace === 'fast') {
        setPace('Fast-Paced');
      }

      const prefInterests = [];
      if (twinPreferences.favoriteStyle === 'nature') prefInterests.push('Nature');
      if (twinPreferences.favoriteStyle === 'heritage') prefInterests.push('History');
      if (twinPreferences.favoriteStyle === 'beach') prefInterests.push('Beach');
      if (twinPreferences.favoriteStyle === 'adventure') prefInterests.push('Adventure');
      if (twinPreferences.favoriteStyle === 'spiritual') prefInterests.push('Relaxation');
      if (prefInterests.length > 0) setInterests(prefInterests);

      if (twinPreferences.favoriteStyle === 'adventure') {
        setTravelStyle('Adventure');
      } else if (twinPreferences.hotelCategory === 'luxury') {
        setTravelStyle('Luxury');
      } else if (twinPreferences.budgetRange === 'backpacker') {
        setTravelStyle('Backpacker');
      }
      setTwinSynced(true);
    }
  }, [twinPreferences, twinSynced]);

  // Documentary Simulator Auto-Advance Effect
  useEffect(() => {
    let interval = null;
    if (docPlaying) {
      interval = setInterval(() => {
        setDocDay(prev => {
          if (prev >= (itinerary?.days?.length || 1) - 1) {
            setDocPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [docPlaying, itinerary]);

  // Documentary Narrator Script Generator
  const generateNarratorScript = (dayObj) => {
    if (!dayObj) return 'Establishing telemetry script link...';
    const mainActivities = dayObj.timeline
      .filter(t => t.activity !== 'Rise & Refresh' && t.activity !== 'Decompress at Lodging' && t.activity !== 'Lodging Rest & Refresh')
      .map(t => t.activity.replace('Morning Main Attraction: ', '').replace('Afternoon Exploration: ', '').replace('Sunset Spectacle: ', ''))
      .slice(0, 3)
      .join(', ');

    return `As the sun transitions across the meridian on Day ${dayObj.day}, our voyage uncovers the vibrant textures of ${itinerary?.destination || 'this destination'}. We explore the historical remnants of ${mainActivities || 'local coordinates'}, letting the local ambient frequencies settle. The local culinary landscape offers a distinct sensory note as we conclude this cycle of exploration.`;
  };

  // Interests list
  const interestOptions = ['Food', 'History', 'Nature', 'Adventure', 'Art & Museums', 'Shopping', 'Beach', 'Nightlife', 'Relaxation'];

  const handleInterestToggle = (interest) => {
    setInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  // Simulated AI itinerary generator with cyber terminal logging
  const generateItinerary = () => {
    if (!destination) return;
    setGenerating(true);
    setGeneratingProgress(0);
    setTerminalLogs([]);

    const targetLogs = [
      '>> INITIALIZING QUANTUM TRIP COMPILER CORE v5.9...',
      '>> ESTABLISHING SECURE CONNECTION TO TRAVELVERSE TELEMETRY FEED...',
      '   LINK SECURED [PORT 443 - NODE: ASIA-PACIFIC-7]',
      `>> RESOLVING GEOGRAPHIC RANGE DATA FOR TARGET: "${destination.toUpperCase()}"`,
      '>> RETRIEVING ATMOSPHERIC INDEXES & METEOROLOGICAL VECTORS...',
      '   WEATHER SYNC: TEMPERATURE PATTERNS COMPILED',
      `>> SYNAPSE PREFERENCE MATRICES INDEXED: [${interests.join(', ') || 'BALANCED_MIX'}]`,
      `>> INJECTING TRAVEL STYLE & PACING: [STYLE: ${travelStyle.toUpperCase()}, PACE: ${pace.toUpperCase()}]`,
      `>> INJECTING TRAVEL DEBIT CONSTRAINTS FOR: [${budgetType.toUpperCase()} LEVEL]`,
      `>> ALIGNING PATH RECTIFIERS FOR ${duration}-DAY ORBITAL AGENDA...`,
      '>> COMPILING MICRO-ITINERARY SECTOR DATA FIELDS...',
      '>> VERIFYING BUDGET SKELETON INTEGRATION ROUTINES...',
      '>> SYNAPSE PROCESS SUCCESSFUL. PREPARING HOLOGRAPH READOUT INDEX...'
    ];

    let logIdx = 0;
    // Set initial log
    setTerminalLogs([targetLogs[0]]);

    const logInterval = setInterval(() => {
      logIdx++;
      if (logIdx < targetLogs.length) {
        setTerminalLogs(prev => [...prev, targetLogs[logIdx]]);
        setGeneratingProgress(Math.min(100, Math.round((logIdx / (targetLogs.length - 1)) * 100)));
      } else {
        clearInterval(logInterval);
        
        // Build mock itinerary matching wizard inputs
        setTimeout(() => {
          const selectedDest = mockDestinations.find(
            d => d.name.toLowerCase().includes(destination.toLowerCase())
          ) || { name: destination, country: 'Explore', price: 64000, image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80', description: 'Explore the wonders of this beautiful travel hub.' };
          
          // Cost scale index in INR (original USD scaled by 80)
          const costPerDay = budgetType === 'Backpacker' ? 4800 : budgetType === 'Mid-range' ? 14400 : 36000;
          const flightCost = budgetType === 'Backpacker' ? 32000 : budgetType === 'Mid-range' ? 64000 : 144000;
          const hotelCostPerDay = budgetType === 'Backpacker' ? 3200 : budgetType === 'Mid-range' ? 9600 : 28000;
          
          const totalLodging = hotelCostPerDay * duration;
          const totalMeals = (costPerDay * 0.35) * duration;
          const totalActivities = (costPerDay * 0.4) * duration;
          const totalTransport = (costPerDay * 0.25) * duration;
          const grandTotal = flightCost + totalLodging + totalMeals + totalActivities + totalTransport;

          // Generate detailed schedule using the Engine
          const generatedDetails = generateDetailedItinerary(destination, duration, budgetType, interests, travelStyle, pace);

          // Generate structured, activity-aware and weather-aware packing suggestions
          const packingCategories = {
            documents: ['Passport & Visas', 'Travel insurance copy', 'Hotel booking vouchers'],
            electronics: ['Universal adapter', 'Phone charger & power bank', 'Camera & memory cards'],
            clothing: ['Comfortable walking shoes', 'Light breathable outfits', 'Socks & sleepwear'],
            meds: ['First-aid kit & adhesive bandages', 'Personal prescriptions', 'Motion sickness tablets'],
            accessories: ['Refillable water bottle', 'Travel umbrella', 'Daypack bag']
          };

          // Weather/Climate adjustments based on destination keyword
          const destLower = destination.toLowerCase();
          const isColdPlace = destLower.includes('ladakh') || destLower.includes('kashmir') || destLower.includes('spiti') || destLower.includes('tawang') || destLower.includes('ziro');
          const isBeachPlace = destLower.includes('goa') || destLower.includes('gokarna') || destLower.includes('kerala');
          
          if (isColdPlace) {
            packingCategories.clothing.push('Heavy woolens & thermals', 'Windproof jacket', 'Gloves & beanie');
            packingCategories.accessories.push('Lip balm & cold cream');
          } else if (isBeachPlace) {
            packingCategories.clothing.push('Swimwear & flip-flops', 'Linen wear & shorts');
            packingCategories.accessories.push('Sunscreen SPF 50+', 'Polarized sunglasses');
          } else {
            packingCategories.clothing.push('Casual cotton outfits', 'Sunglasses');
          }

          // Activity adjustments
          if (interests.includes('Adventure') || interests.includes('Nature')) {
            packingCategories.clothing.push('Sturdy hiking boots / trail runners');
            packingCategories.accessories.push('Insect repellent spray', 'Headlamp / flashlight');
          }
          if (interests.includes('Spiritual') || interests.includes('Relaxation')) {
            packingCategories.clothing.push('Modest temple-appropriate attire');
          }
          
          // Flatten into a single array for compatibility
          const basePacking = [];
          packingCategories.documents.forEach(item => basePacking.push(`📄 Docs: ${item}`));
          packingCategories.electronics.forEach(item => basePacking.push(`🔌 Gear: ${item}`));
          packingCategories.clothing.forEach(item => basePacking.push(`👕 Wear: ${item}`));
          packingCategories.meds.forEach(item => basePacking.push(`💊 Meds: ${item}`));
          packingCategories.accessories.forEach(item => basePacking.push(`🎒 Pack: ${item}`));

          // Inject roadTrip details from destination defaults or custom fallback
          const roadTripDetails = selectedDest.roadTripDefaults || {
            fuelCostEstimate: 4500,
            tollEstimates: 650,
            foodStops: [`Central Highway Dhaba near ${selectedDest.name}`, 'Standard Highway Food Court'],
            scenicStops: [`Scenic Valley view towards ${selectedDest.name}`, 'Regional Forest curves'],
            restAreas: [`NH Rest Area Node`],
            evChargers: [`Tata Power Charging Hub near ${selectedDest.name}`],
            emergencyContacts: { phone: '+91 103', details: 'National Highway Emergency Patrol' },
            alternativeRoute: 'Expressway Route (Highly recommended for direct travel)'
          };

          setItinerary({
            id: Date.now().toString(),
            destination: selectedDest.name,
            country: selectedDest.country,
            image: selectedDest.image,
            duration,
            budgetType,
            interests,
            travelStyle,
            pace,
            costs: {
              flights: flightCost,
              lodging: Math.round(totalLodging),
              meals: Math.round(totalMeals),
              activities: Math.round(totalActivities),
              transport: Math.round(totalTransport),
              total: Math.round(grandTotal)
            },
            days: generatedDetails.days,
            averageWalkingDist: generatedDetails.averageWalkingDist,
            emergencyServices: generatedDetails.emergencyServices,
            transportationAdvice: generatedDetails.transportationAdvice,
            packingList: basePacking,
            roadTrip: roadTripDetails
          });
          setGenerating(false);
          setActiveTab('schedule');
          setDocPlaying(false);
          setDocDay(0);
        }, 500);
      }
    }, 350);
  };

  const handleSave = () => {
    if (!user) {
      navigate('/login?redirect=planner');
      return;
    }
    saveItinerary(itinerary);
  };

  return (
    <div className="py-4 text-left">
      {/* Local styles injection */}
      <style>{`
        .grid-cyber-planner {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, rgba(45,212,191,0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(45,212,191,0.02) 1px, transparent 1px);
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-cursor-blink {
          animation: cursor-blink 1s step-end infinite;
        }
      `}</style>

      {/* Title Header */}
      <div className="mb-8 flex justify-between items-start flex-col sm:flex-row gap-4 border-b border-slate-200 dark:border-teal-500/10 pb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent blur-xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse relative block">
              <span className="absolute inset-0 rounded-full bg-teal-400/50 scale-200 animate-ping" />
            </span>
            <span className="text-[10px] text-teal-650 dark:text-teal-400 font-mono font-bold tracking-widest uppercase">
              AI INTEL CORE // SYNAPSE PLANNER
            </span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight flex items-center gap-2.5">
            <Sparkles className="text-teal-500 animate-pulse" /> AI Trip Planner
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-xl">
            Our neural travel planner builds customized, optimized itineraries in seconds. Enter targets, select interests, and compile.
          </p>
        </div>
        
        {itinerary && (
          <button
            onClick={() => {
              setItinerary(null);
              setStep(1);
            }}
            className="relative z-10 px-4 py-2 border border-slate-250 dark:border-teal-500/20 bg-white dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-xs font-mono font-bold rounded-xl text-slate-600 dark:text-teal-400 flex items-center gap-1.5 transition-colors self-start cursor-pointer shadow-sm"
          >
            <RefreshCw size={12} /> PLAN ANOTHER TRIP
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* Wizard Form */}
        {!generating && !itinerary && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl glass-neo border border-slate-200/50 dark:border-teal-500/10 shadow-2xl relative overflow-hidden grid-cyber-planner"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-450 dark:text-teal-400/45 font-bold select-none">
              <span>WIZARD: SEC_COORD_0{step}</span>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200 dark:border-teal-500/10">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Step {step} of 5</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      step >= i ? 'bg-teal-500 w-6 shadow-[0_0_8px_rgba(45,212,191,0.5)]' : 'bg-slate-200 dark:bg-slate-800 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Destination Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                    <Terminal size={18} className="text-teal-400" />
                    Where are you headed?
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Enter any Indian city name or select from our curated featured tourist hubs.
                  </p>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter city (e.g. Goa, Srinagar, Kerala, Ladakh, Jaipur...)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-slate-100/50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-100 placeholder-slate-400"
                  />
                </div>

                {/* Quick select suggestions */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Suggested Coordinates</span>
                  <div className="flex flex-wrap gap-2">
                    {mockDestinations.slice(0, 6).map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setDestination(d.name)}
                        className={`px-3 py-2.5 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                          destination === d.name
                            ? 'bg-teal-500 border-teal-500 text-slate-950 shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                            : 'border-slate-200 dark:border-teal-500/10 text-slate-605 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        {d.name.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Duration Slider */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                    <Calendar size={18} className="text-teal-400" />
                    Set Duration Vector
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Set the duration of your stay. AI generates plans between 1 and 14 days.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200 dark:border-teal-500/10 flex flex-col gap-6 text-center">
                  <span className="text-5xl font-mono font-black text-teal-450 dark:text-teal-400 tracking-tighter">{duration}</span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none">Days stay</span>
                  <input
                    type="range"
                    min="1"
                    max="14"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget Type selection */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                    <Wallet size={18} className="text-teal-400" />
                    Select Credit Index Limit
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Different options allocate different tiers of lodging, flights, and travel activities.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { type: 'Backpacker', desc: 'Focuses on hostels, street-food, and free landmarks.', estimate: '~₹4,800/day' },
                    { type: 'Mid-range', desc: 'Boutique hotels, dining cafes, and guided local tours.', estimate: '~₹14,400/day' },
                    { type: 'Luxury', desc: '5-star resorts, private vehicles, and fine dining.', estimate: '~₹36,000/day' }
                  ].map((b) => {
                    const isTwinMatch = twinPreferences && (
                      (b.type === 'Backpacker' && (twinPreferences.budgetRange === 'backpacker' || twinPreferences.budgetRange === 'budget')) ||
                      (b.type === 'Mid-range' && twinPreferences.budgetRange === 'midrange') ||
                      (b.type === 'Luxury' && (twinPreferences.budgetRange === 'premium' || twinPreferences.budgetRange === 'ultraluxury'))
                    );
                    return (
                      <button
                        key={b.type}
                        type="button"
                        onClick={() => setBudgetType(b.type)}
                        className={`p-5 rounded-2xl border text-left flex flex-col justify-between min-h-[150px] transition-all relative cursor-pointer ${
                          budgetType === b.type
                            ? 'bg-teal-500/10 border-teal-500 text-slate-900 dark:text-white shadow-md font-semibold'
                            : 'border-slate-200 dark:border-teal-500/10 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850/50'
                        }`}
                      >
                        {isTwinMatch && (
                          <span className="absolute top-2.5 right-2.5 text-[7px] font-mono text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded font-bold uppercase">
                            ✨ TWIN MATCH
                          </span>
                        )}
                        <div>
                          <span className="font-display font-black text-sm block tracking-wide">{b.type.toUpperCase()}</span>
                          <p className="text-[11px] text-slate-500 dark:text-slate-455 mt-2.5 leading-relaxed font-semibold">{b.desc}</p>
                        </div>
                        <span className="text-teal-600 dark:text-teal-450 font-mono font-bold text-xs mt-3 block">{b.estimate}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 4: Interest Tag checkbox selection */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                    <CheckSquare size={18} className="text-teal-400" />
                    Select Cognitive Focus Tags
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Choose your focus tags. We will adjust the daily activities to match.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {interestOptions.map((opt) => {
                    const isSelected = interests.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleInterestToggle(opt)}
                        className={`p-4 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-teal-500 border-teal-500 text-slate-955 shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                            : 'border-slate-200 dark:border-teal-500/10 text-slate-605 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 5: Travel Style and Pace Selection */}
            {step === 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                    <Sparkles size={18} className="text-teal-400" />
                    Configure Travel Style & Pacing
                  </h3>
                  <p className="text-xs text-slate-505 dark:text-slate-400 font-medium">
                    Customize the pace and style of your activities. Our engine will adapt the hourly plan to optimize rest and walking distance.
                  </p>
                </div>

                <div className="flex flex-col gap-4 text-left">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Travel Style Preference</span>
                    <div className="grid grid-cols-3 gap-2">
                      {['Solo', 'Couple', 'Family', 'Group', 'Senior Citizen', 'Backpacker', 'Luxury', 'Adventure', 'Road Trip'].map((style) => {
                        const isTwinMatch = twinPreferences && (
                          (style === 'Adventure' && twinPreferences.favoriteStyle === 'adventure') ||
                          (style === 'Luxury' && twinPreferences.hotelCategory === 'luxury') ||
                          (style === 'Backpacker' && twinPreferences.budgetRange === 'backpacker')
                        );
                        return (
                          <button
                            key={style}
                            type="button"
                            onClick={() => setTravelStyle(style)}
                            className={`px-3 py-2.5 text-[10px] font-mono font-bold rounded-xl border transition-all relative cursor-pointer ${
                              travelStyle === style
                                ? 'bg-teal-500 border-teal-500 text-slate-950 shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                                : 'border-slate-200 dark:border-teal-500/10 text-slate-605 dark:text-slate-405 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                            }`}
                          >
                            {isTwinMatch && (
                              <span className="absolute -top-1.5 -right-1 bg-teal-400 text-slate-950 text-[6px] px-1 rounded-full border border-teal-500 font-bold scale-90">
                                TWIN
                              </span>
                            )}
                            {style.toUpperCase()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Daily Sightseeing Pace</span>
                    <div className="grid grid-cols-3 gap-2">
                      {['Relaxed', 'Balanced', 'Fast-Paced'].map((p) => {
                        const isTwinMatch = twinPreferences && (
                          (p === 'Relaxed' && twinPreferences.travelPace === 'relaxed') ||
                          (p === 'Balanced' && twinPreferences.travelPace === 'moderate') ||
                          (p === 'Fast-Paced' && twinPreferences.travelPace === 'fast')
                        );
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPace(p)}
                            className={`px-3 py-2.5 text-[10px] font-mono font-bold rounded-xl border transition-all relative cursor-pointer ${
                              pace === p
                                ? 'bg-teal-500 border-teal-500 text-slate-950 shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                                : 'border-slate-200 dark:border-teal-500/10 text-slate-655 dark:text-slate-405 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                            }`}
                          >
                            {isTwinMatch && (
                              <span className="absolute -top-1.5 -right-1 bg-teal-400 text-slate-950 text-[6px] px-1 rounded-full border border-teal-500 font-bold scale-90">
                                TWIN
                              </span>
                            )}
                            {p.toUpperCase()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-teal-500/10 flex justify-between gap-4">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-3 border border-slate-250 dark:border-teal-500/20 bg-white dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-xs font-mono font-bold rounded-xl text-slate-655 dark:text-teal-400 cursor-pointer"
                >
                  PREVIOUS
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  disabled={step === 1 && !destination}
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-3 bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-teal-605 dark:hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
                >
                  CONTINUE
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={generateItinerary}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-teal-500/20 cursor-pointer"
                >
                  <Sparkles size={14} />
                  COMPILE AGENDA
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Space-Age Retro-Futuristic Terminal Loading Console */}
        {generating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-xl mx-auto rounded-3xl bg-slate-950 border border-teal-500/30 shadow-2xl p-6 flex flex-col gap-5 relative overflow-hidden"
          >
            {/* Header console buttons bar */}
            <div className="flex justify-between items-center border-b border-teal-500/10 pb-3 shrink-0">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-[9px] font-mono text-teal-450/60 font-bold uppercase tracking-widest">
                Cognitive Compiler Terminal v5.9
              </span>
            </div>

            {/* Simulated terminal logs screen */}
            <div className="flex-1 min-h-[200px] max-h-[300px] overflow-y-auto font-mono text-[10px] text-emerald-400 leading-relaxed text-left flex flex-col gap-2 scrollbar-thin select-none">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={`${log.startsWith('   ') ? 'text-teal-400 font-semibold pl-2' : 'text-emerald-400 font-bold'}`}>
                  {log}
                </div>
              ))}
              <div ref={terminalEndRef} />
              
              {/* Blinking Prompt Cursor */}
              <div className="flex items-center gap-1 text-emerald-400 font-bold mt-1">
                <span>&gt;&gt; COMPILING DATA STREAMS</span>
                <span className="w-1.5 h-3.5 bg-emerald-400 animate-cursor-blink" />
              </div>
            </div>

            {/* Telemetry Progress Info */}
            <div className="flex flex-col gap-2 border-t border-teal-500/10 pt-4 shrink-0">
              <div className="flex justify-between items-center text-[9px] font-mono font-bold text-teal-450 uppercase">
                <span>Progress limits</span>
                <span>{generatingProgress}% Compiled</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-teal-500/10">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-300" 
                  style={{ width: `${generatingProgress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Display itinerary summary */}
        {itinerary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10"
          >
            {/* Global verification notice disclaimer */}
            <div className="lg:col-span-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/25 text-amber-500 text-xs font-semibold leading-relaxed font-mono text-left mb-2">
              ⚠️ <strong>Verification Notice</strong>: Star ratings, baseline lodging rates, and transit routes represent verified live estimates. Day-to-day sightseeing intervals, dining costs, and local walk speeds are dynamic AI-optimized models calibrated for your travel genome.
            </div>

            {/* Left Col: Summary & Cost breakdown */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="rounded-3xl border border-slate-200/50 dark:border-teal-500/10 bg-white dark:bg-slate-900/40 shadow-xl overflow-hidden glass-neo">
                <div className="relative">
                  <img
                    src={itinerary.image}
                    alt={itinerary.destination}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-6 text-left">
                  <span className="text-[9px] font-mono font-bold text-teal-605 dark:text-teal-400 uppercase tracking-widest">
                    HOLOGRAPH PLAN READOUT
                  </span>
                  {isEditingPlan ? (
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex flex-col gap-0.5">
                        <label className="text-[9px] font-bold text-slate-400 uppercase font-mono">Destination</label>
                        <input
                          type="text"
                          value={itinerary.destination}
                          onChange={(e) => setItinerary({ ...itinerary, destination: e.target.value })}
                          className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded-xl font-bold text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <label className="text-[9px] font-bold text-slate-400 uppercase font-mono">Country</label>
                        <input
                          type="text"
                          value={itinerary.country}
                          onChange={(e) => setItinerary({ ...itinerary, country: e.target.value })}
                          className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded-xl font-semibold text-xs text-slate-600 dark:text-slate-300 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white mt-1 leading-snug tracking-wide">
                        {itinerary.destination}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-slate-405 dark:text-slate-400 mt-1 block uppercase tracking-wider">
                        {itinerary.country} • {itinerary.duration} DAYS STAY • {itinerary.budgetType.toUpperCase()} TIER
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Budget Cost Breakdown card */}
              <div className="p-6 rounded-3xl border border-slate-200/50 dark:border-teal-500/10 bg-white dark:bg-slate-900/40 shadow-xl glass-neo text-left flex flex-col gap-5">
                <div className="flex justify-between items-center flex-wrap gap-2 pb-2 border-b border-slate-100 dark:border-teal-500/5">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-355 my-0">
                    ESTIMATED DEBIT TELEMETRY
                  </h4>
                  <span className="px-1.5 py-0.5 text-[8px] font-bold font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Sourced Live Data
                  </span>
                </div>
                
                <div className="flex flex-col gap-4 text-xs font-medium text-slate-600 dark:text-slate-300 font-mono">
                  {/* Lodging Progress Bar */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center font-bold">
                      <span>🏨 LODGING INDEX</span>
                      {isEditingPlan ? (
                        <input
                          type="number"
                          value={itinerary.costs.lodging}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            const updatedCosts = { ...itinerary.costs, lodging: val };
                            const newTotal = updatedCosts.lodging + updatedCosts.flights + updatedCosts.activities + updatedCosts.transport;
                            setItinerary({ ...itinerary, costs: { ...updatedCosts, total: newTotal } });
                          }}
                          className="w-20 px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded text-right font-mono text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
                        />
                      ) : (
                        <span className="font-black text-slate-900 dark:text-white">₹{itinerary.costs.lodging.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                    {!isEditingPlan && (
                      <div className="w-full bg-slate-100 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-200 dark:border-teal-500/5">
                        <div className="bg-sky-500 h-full rounded-full" style={{ width: `${(itinerary.costs.lodging / itinerary.costs.total) * 100}%` }} />
                      </div>
                    )}
                  </div>

                  {/* Flight Progress Bar */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center font-bold">
                      <span>✈️ TRANSIT CORRIDORS</span>
                      {isEditingPlan ? (
                        <input
                          type="number"
                          value={itinerary.costs.flights}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            const updatedCosts = { ...itinerary.costs, flights: val };
                            const newTotal = updatedCosts.lodging + updatedCosts.flights + updatedCosts.activities + updatedCosts.transport;
                            setItinerary({ ...itinerary, costs: { ...updatedCosts, total: newTotal } });
                          }}
                          className="w-20 px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded text-right font-mono text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
                        />
                      ) : (
                        <span className="font-black text-slate-900 dark:text-white">₹{itinerary.costs.flights.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                    {!isEditingPlan && (
                      <div className="w-full bg-slate-100 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-200 dark:border-teal-500/5">
                        <div className="bg-teal-500 h-full rounded-full" style={{ width: `${(itinerary.costs.flights / itinerary.costs.total) * 100}%` }} />
                      </div>
                    )}
                  </div>

                  {/* Activities Progress Bar */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center font-bold">
                      <span>🎟️ ACTIVITIES MATRIX</span>
                      {isEditingPlan ? (
                        <input
                          type="number"
                          value={itinerary.costs.activities}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            const updatedCosts = { ...itinerary.costs, activities: val };
                            const newTotal = updatedCosts.lodging + updatedCosts.flights + updatedCosts.activities + updatedCosts.transport;
                            setItinerary({ ...itinerary, costs: { ...updatedCosts, total: newTotal } });
                          }}
                          className="w-20 px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded text-right font-mono text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
                        />
                      ) : (
                        <span className="font-black text-slate-900 dark:text-white">₹{itinerary.costs.activities.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                    {!isEditingPlan && (
                      <div className="w-full bg-slate-100 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-200 dark:border-teal-500/5">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(itinerary.costs.activities / itinerary.costs.total) * 100}%` }} />
                      </div>
                    )}
                  </div>

                  {/* Transport Progress Bar */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center font-bold">
                      <span>🚕 LOCAL SHUTTLES</span>
                      {isEditingPlan ? (
                        <input
                          type="number"
                          value={itinerary.costs.transport}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            const updatedCosts = { ...itinerary.costs, transport: val };
                            const newTotal = updatedCosts.lodging + updatedCosts.flights + updatedCosts.activities + updatedCosts.transport;
                            setItinerary({ ...itinerary, costs: { ...updatedCosts, total: newTotal } });
                          }}
                          className="w-20 px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded text-right font-mono text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
                        />
                      ) : (
                        <span className="font-black text-slate-900 dark:text-white">₹{itinerary.costs.transport.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                    {!isEditingPlan && (
                      <div className="w-full bg-slate-100 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-200 dark:border-teal-500/5">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${(itinerary.costs.transport / itinerary.costs.total) * 100}%` }} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-teal-500/10 flex justify-between items-baseline mt-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">NET DEBIT COST</span>
                  <span className="text-2xl font-mono font-black text-teal-555 dark:text-teal-400">₹{itinerary.costs.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Global Cost Simulator */}
              {!isEditingPlan && (
                <div className="p-6 rounded-3xl border border-slate-200/50 dark:border-teal-500/10 bg-white dark:bg-slate-900/40 shadow-xl glass-neo text-left flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-350 flex items-center gap-2">
                    <Wallet size={14} className="text-teal-400" /> GLOBAL COST SIMULATOR
                  </h4>
                  <p className="text-[10px] text-slate-505 dark:text-slate-400 leading-normal font-mono font-bold uppercase tracking-wider">
                    Compare Projected Expense Vectors (₹)
                  </p>
                  <div className="flex flex-col gap-3.5 mt-2 font-mono text-[10px]">
                    {[
                      { name: 'Backpacker', daily: 4800, flight: 32000, color: 'bg-emerald-500' },
                      { name: 'Budget', daily: 7500, flight: 45000, color: 'bg-green-500' },
                      { name: 'Mid-range', daily: 14400, flight: 64000, color: 'bg-sky-500' },
                      { name: 'Premium', daily: 25000, flight: 90000, color: 'bg-indigo-500' },
                      { name: 'Ultra Luxury', daily: 36000, flight: 144000, color: 'bg-rose-500' }
                    ].map((tier) => {
                      const totalCost = tier.flight + (tier.daily * itinerary.duration);
                      const isCurrent = itinerary.budgetType.toLowerCase().replace('-', '') === tier.name.toLowerCase().replace('-', '') ||
                                        (itinerary.budgetType === 'Luxury' && (tier.name === 'Premium' || tier.name === 'Ultra Luxury'));
                      return (
                        <div key={tier.name} className={`p-2.5 rounded-xl border transition-all ${isCurrent ? 'bg-teal-550/10 border-teal-500/30' : 'border-transparent bg-slate-950/20'}`}>
                          <div className="flex justify-between items-center mb-1 font-bold">
                            <span className={isCurrent ? 'text-teal-400' : 'text-slate-400'}>{tier.name.toUpperCase()}</span>
                            <span className={isCurrent ? 'text-teal-450 font-black' : 'text-slate-305'}>₹{totalCost.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="w-full bg-slate-100 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-205 dark:border-teal-500/5">
                            <div className={`${tier.color} h-full rounded-full`} style={{ width: `${Math.min(100, (totalCost / 648000) * 100)}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Packing checklist */}
              <div className="p-6 rounded-3xl border border-slate-200/50 dark:border-teal-500/10 bg-white dark:bg-slate-900/40 shadow-xl glass-neo text-left">
                <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-355 mb-4">
                  CHECKLIST TELEMETRY
                </h4>
                <div className="flex flex-col gap-2.5 font-mono text-[11px] text-slate-600 dark:text-slate-300">
                  {itinerary.packingList.map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-2.5">
                      {isEditingPlan ? (
                        <div className="flex items-center gap-2 w-full">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const updatedPacking = [...itinerary.packingList];
                              updatedPacking[index] = e.target.value;
                              setItinerary({ ...itinerary, packingList: updatedPacking });
                            }}
                            className="px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded text-xs w-full focus:outline-none focus:border-teal-500 text-slate-800 dark:text-white"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updatedPacking = itinerary.packingList.filter((_, idx) => idx !== index);
                              setItinerary({ ...itinerary, packingList: updatedPacking });
                            }}
                            className="text-rose-500 hover:text-rose-600 font-bold px-1.5 text-xs cursor-pointer"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            id={`pack-${index}`}
                            className="rounded border-slate-300 dark:border-teal-500/20 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                          />
                          <label htmlFor={`pack-${index}`} className="cursor-pointer">{item}</label>
                        </div>
                      )}
                    </div>
                  ))}
                  {isEditingPlan && (
                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        placeholder="Add item..."
                        id="new-packing-item"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const val = e.target.value.trim();
                            if (val) {
                              setItinerary({ ...itinerary, packingList: [...itinerary.packingList, val] });
                              e.target.value = '';
                            }
                          }
                        }}
                        className="px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded text-xs w-full focus:outline-none focus:border-teal-500 text-slate-800 dark:text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const input = document.getElementById('new-packing-item');
                          const val = input?.value.trim();
                          if (val) {
                            setItinerary({ ...itinerary, packingList: [...itinerary.packingList, val] });
                            input.value = '';
                          }
                        }}
                        className="px-2.5 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded font-mono font-bold text-[10px] shrink-0 cursor-pointer"
                      >
                        ADD
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Telemetry Advisory Card */}
              <div className="p-6 rounded-3xl border border-slate-200/50 dark:border-teal-500/10 bg-white dark:bg-slate-900/40 shadow-xl glass-neo text-left">
                <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-350 mb-4 flex items-center gap-1.5">
                  <Cpu size={14} className="text-teal-500 animate-pulse" />
                  VOYAGE TELEMETRY ADVISORY
                </h4>
                <div className="flex flex-col gap-4 text-xs font-medium text-slate-600 dark:text-slate-350 font-mono">
                  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-teal-500/5">
                    <span className="font-bold text-[10px] text-teal-400 uppercase tracking-wider block mb-0.5">🏃 Est. Walking Index</span>
                    <p className="text-slate-800 dark:text-slate-100 font-bold">{itinerary.averageWalkingDist || '6–8 km'} per day average</p>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-teal-500/5">
                    <span className="font-bold text-[10px] text-teal-400 uppercase tracking-wider block mb-0.5">🚇 Transit Protocols</span>
                    <p className="text-[11px] text-slate-655 dark:text-slate-300 leading-relaxed font-semibold">{itinerary.transportationAdvice}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-teal-500/5">
                    <span className="font-bold text-[10px] text-rose-400 uppercase tracking-wider block mb-0.5">⚠️ Emergency Node</span>
                    <p className="text-[11px] text-slate-655 dark:text-slate-300 leading-relaxed font-semibold">{itinerary.emergencyServices}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Day-by-day Itinerary */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-teal-500/10 bg-white dark:bg-slate-900/40 shadow-xl glass-neo">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200 dark:border-teal-500/10 flex-wrap gap-4">
                  <h3 className="font-display font-black text-lg text-slate-900 dark:text-white uppercase tracking-wider">
                    {isEditingPlan ? 'CONFIGURE PLAN SCHEDULE' : 'ITINERARY COMMAND DECK'}
                  </h3>
                  
                  <div className="flex gap-2 shrink-0">
                    {isEditingPlan ? (
                      <button
                        onClick={() => setIsEditingPlan(false)}
                        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-mono font-bold cursor-pointer"
                      >
                        DONE EDITING
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => setIsEditingPlan(true)}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-teal-500 dark:text-slate-955 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer"
                        >
                          EDIT PLANS
                        </button>
                        <button
                          onClick={() => window.print()}
                          className="p-2 rounded-lg border border-slate-200 dark:border-teal-500/20 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-600 dark:text-teal-400 cursor-pointer"
                          title="Print Schedule"
                        >
                          <Printer size={14} />
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-sm shadow-teal-500/10"
                        >
                          <Save size={13} />
                          SAVE TARGET
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Sub-navigation Tabs */}
                {!isEditingPlan && (
                  <div className="flex border-b border-slate-200 dark:border-teal-500/10 mb-6 gap-6 font-mono text-[10px] font-black pb-0.5">
                    <button
                      onClick={() => setActiveTab('schedule')}
                      className={`pb-3 border-b-2 transition-all cursor-pointer uppercase tracking-widest ${
                        activeTab === 'schedule'
                          ? 'border-teal-500 text-teal-400'
                          : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-750 dark:hover:text-slate-200'
                      }`}
                    >
                      🗓️ Daily Schedule
                    </button>
                    <button
                      onClick={() => setActiveTab('roadtrip')}
                      className={`pb-3 border-b-2 transition-all cursor-pointer uppercase tracking-widest ${
                        activeTab === 'roadtrip'
                          ? 'border-teal-500 text-teal-400'
                          : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-750 dark:hover:text-slate-200'
                      }`}
                    >
                      🚗 Road Trip Optimizer
                    </button>
                    <button
                      onClick={() => setActiveTab('documentary')}
                      className={`pb-3 border-b-2 transition-all cursor-pointer uppercase tracking-widest ${
                        activeTab === 'documentary'
                          ? 'border-teal-500 text-teal-400'
                          : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-750 dark:hover:text-slate-200'
                      }`}
                    >
                      🎬 AI Documentary Maker
                    </button>
                  </div>
                )}

                {/* Tab 1: Daily Schedule */}
                {activeTab === 'schedule' && (
                  <div className="flex flex-col gap-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-teal-500/10">
                    {itinerary.days.map((d, index) => (
                      <div key={d.day} className="flex gap-6 relative">
                        {/* Timeline Dot icon indicator */}
                        <div className="w-7 h-7 rounded-full bg-teal-500 text-slate-950 font-bold font-mono text-xs flex items-center justify-center relative z-10 shrink-0 shadow-[0_0_10px_rgba(45,212,191,0.35)]">
                          {d.day}
                        </div>

                        {/* Day Activity Details */}
                        <div className="flex flex-col gap-3.5 text-left flex-1 pb-6 border-b border-slate-150 dark:border-teal-500/5 last:border-b-0 last:pb-0">
                          {isEditingPlan ? (
                            <div className="flex flex-col gap-3 w-full">
                              <div className="flex justify-between items-center gap-4">
                                <input
                                  type="text"
                                  value={d.title}
                                  onChange={(e) => {
                                    const updatedDays = [...itinerary.days];
                                    updatedDays[index] = { ...d, title: e.target.value };
                                    setItinerary({ ...itinerary, days: updatedDays });
                                  }}
                                  className="font-bold text-sm text-slate-900 dark:text-white bg-transparent border-b border-teal-500/20 focus:border-teal-500 outline-none pb-1 w-2/3 text-xs"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updatedDays = itinerary.days
                                      .filter((_, idx) => idx !== index)
                                      .map((dayObj, idx) => ({ ...dayObj, day: idx + 1 }));
                                    setItinerary({
                                      ...itinerary,
                                      days: updatedDays,
                                      duration: updatedDays.length
                                    });
                                  }}
                                  className="text-rose-500 hover:text-rose-600 font-mono font-bold uppercase text-[9px] cursor-pointer"
                                >
                                  Delete Day
                                </button>
                              </div>
                              
                              <div className="flex flex-col gap-3 mt-2">
                                {d.timeline.map((item, itemIdx) => (
                                  <div key={itemIdx} className="flex gap-3 items-start p-3 bg-slate-50/50 dark:bg-slate-900/45 border border-slate-200 dark:border-teal-500/10 rounded-2xl w-full">
                                    <span className="text-sm p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-teal-500/10 select-none">{item.icon}</span>
                                    <div className="flex flex-col gap-2 flex-1">
                                      <div className="flex gap-2 items-center">
                                        <span className="font-mono text-[10px] text-teal-400 font-bold shrink-0">{item.time}</span>
                                        <input
                                          type="text"
                                          value={item.activity}
                                          onChange={(e) => {
                                            const updatedDays = [...itinerary.days];
                                            updatedDays[index].timeline[itemIdx].activity = e.target.value;
                                            setItinerary({ ...itinerary, days: updatedDays });
                                          }}
                                          className="w-full px-2 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-teal-500/20 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-teal-500"
                                        />
                                      </div>
                                      <textarea
                                        value={item.details}
                                        onChange={(e) => {
                                          const updatedDays = [...itinerary.days];
                                          updatedDays[index].timeline[itemIdx].details = e.target.value;
                                          setItinerary({ ...itinerary, days: updatedDays });
                                        }}
                                        className="w-full px-2 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-teal-500/20 rounded-lg text-[11px] text-slate-600 dark:text-slate-300 font-semibold focus:outline-none focus:border-teal-500 resize-none h-14"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <>
                              <h4 className="font-display font-black text-sm text-slate-900 dark:text-teal-350 tracking-wide mb-3">
                                {d.title}
                              </h4>
                              
                              <div className="flex flex-col gap-4 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-teal-500/10">
                                {d.timeline.map((item, itemIdx) => (
                                  <div key={itemIdx} className="flex gap-4 items-start relative">
                                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-teal-500/15 flex items-center justify-center relative z-10 shrink-0 text-sm select-none shadow-sm">
                                      {item.icon}
                                    </div>
                                    <div className="flex-1 text-left bg-slate-50/40 dark:bg-slate-900/20 p-3 rounded-xl border border-slate-150 dark:border-teal-500/5">
                                      <div className="flex justify-between items-baseline gap-2 mb-1.5 flex-wrap">
                                        <span className="font-display font-black text-xs text-slate-900 dark:text-white uppercase tracking-wide">
                                          {item.activity}
                                        </span>
                                        <span className="font-mono text-[9px] font-bold text-teal-600 dark:text-teal-400 bg-teal-500/5 px-2 py-0.5 rounded border border-teal-500/10">
                                          {item.time}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-655 dark:text-slate-400 leading-relaxed font-semibold">
                                        {item.details}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}

                    {isEditingPlan && (
                      <button
                        type="button"
                        onClick={() => {
                          const nextDayNum = itinerary.days.length + 1;
                          const newDay = {
                            day: nextDayNum,
                            title: `Custom Tour - Day ${nextDayNum}`,
                            timeline: [
                              { time: '9:00 AM', activity: 'Morning Main Attraction', details: 'Visit a local landmark.', icon: '🏛️' },
                              { time: '1:00 PM', activity: 'Lunch Break', details: 'Enjoy local cuisine.', icon: '🍽️' },
                              { time: '3:00 PM', activity: 'Afternoon Exploration', details: 'Discover local hidden gems.', icon: '💎' },
                              { time: '7:30 PM', activity: 'Dinner & Stroll', details: 'Wrap up the day with a nice dinner.', icon: '🍲' }
                            ]
                          };
                          setItinerary({
                            ...itinerary,
                            days: [...itinerary.days, newDay],
                            duration: nextDayNum
                          });
                        }}
                        className="w-full py-3.5 border-2 border-dashed border-teal-500/20 hover:border-teal-500/60 hover:bg-teal-500/5 rounded-2xl text-center font-mono font-bold text-teal-400/80 hover:text-teal-400 transition-all mt-2 text-xs cursor-pointer"
                      >
                        + INJECT NEW DAY INTRO SCHEDULE
                      </button>
                    )}
                  </div>
                )}

                {/* Tab 2: Road Trip Generator */}
                {activeTab === 'roadtrip' && itinerary.roadTrip && (
                  <div className="flex flex-col gap-6 text-left">
                    <div>
                      <span className="text-[10px] font-mono text-teal-450 dark:text-teal-400 font-bold tracking-widest uppercase block">
                        ROUTE RECTIFIER // INDIAN HIGHWAY GRID
                      </span>
                      <h4 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase">
                        🚗 Indian Road Trip Optimizer
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                        Calculated routing from your default departure hub via national high-speed corridors.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                      <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/30 border border-teal-500/10 flex flex-col gap-1.5">
                        <span className="text-slate-400 text-[9px] font-bold uppercase">FUEL COST PREDICTION</span>
                        <span className="text-base font-black text-teal-450 dark:text-teal-400 font-mono">₹{itinerary.roadTrip.fuelCostEstimate.toLocaleString('en-IN')}</span>
                        <span className="text-[9px] text-slate-500 font-semibold leading-normal">Based on 2035 average fuel index (₹98/L)</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/30 border border-teal-500/10 flex flex-col gap-1.5">
                        <span className="text-slate-400 text-[9px] font-bold uppercase">TOLL FEES TELEMETRY</span>
                        <span className="text-base font-black text-indigo-400 font-mono">₹{itinerary.roadTrip.tollEstimates.toLocaleString('en-IN')}</span>
                        <span className="text-[9px] text-slate-500 font-semibold leading-normal">Automated FASTag deduct estimates</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/30 border border-teal-500/10 flex flex-col gap-1.5">
                        <span className="text-slate-400 text-[9px] font-bold uppercase">EV POWER CHARGERS</span>
                        <span className="text-xs font-black text-emerald-450 truncate" title={itinerary.roadTrip.evChargers.join(', ')}>
                          {itinerary.roadTrip.evChargers[0]}
                        </span>
                        <span className="text-[9px] text-slate-500 font-semibold leading-normal">{itinerary.roadTrip.evChargers.length} locations verified</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                      <div className="p-5 rounded-3xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-white/5 flex flex-col gap-4">
                        <h5 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-slate-350 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> ROUTE WAYPOINTS
                        </h5>
                        
                        <div className="flex flex-col gap-3 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                          <div className="flex flex-col gap-1.5">
                            <span className="text-slate-450 text-[8px] font-bold uppercase">🍔 RECOMMENDED FOOD STOPS</span>
                            <ul className="list-disc pl-4 flex flex-col gap-1 text-slate-700 dark:text-slate-200 font-semibold">
                              {itinerary.roadTrip.foodStops.map((stop, idx) => <li key={idx}>{stop}</li>)}
                            </ul>
                          </div>
                          <div className="flex flex-col gap-1.5 border-t border-slate-200 dark:border-white/5 pt-3">
                            <span className="text-slate-450 text-[8px] font-bold uppercase">📸 SCENIC OVERLOOK NODES</span>
                            <ul className="list-disc pl-4 flex flex-col gap-1 text-slate-700 dark:text-slate-200 font-semibold">
                              {itinerary.roadTrip.scenicStops.map((stop, idx) => <li key={idx}>{stop}</li>)}
                            </ul>
                          </div>
                          <div className="flex flex-col gap-1.5 border-t border-slate-200 dark:border-white/5 pt-3">
                            <span className="text-slate-455 text-[8px] font-bold uppercase">☕ REST AREA STATIONS</span>
                            <ul className="list-disc pl-4 flex flex-col gap-1 text-slate-700 dark:text-slate-200 font-semibold">
                              {itinerary.roadTrip.restAreas.map((stop, idx) => <li key={idx}>{stop}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="p-5 rounded-3xl bg-slate-100/50 dark:bg-slate-950/25 border border-slate-200 dark:border-white/5 flex flex-col gap-1.5 text-left font-mono">
                          <span className="text-[8px] font-bold text-teal-500 dark:text-teal-400 uppercase tracking-widest">ALTERNATIVE TRANSIT BYPASS</span>
                          <h5 className="text-xs font-black text-slate-900 dark:text-white">{itinerary.roadTrip.alternativeRoute.split(' (')[0]}</h5>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                            {itinerary.roadTrip.alternativeRoute.includes('(') ? itinerary.roadTrip.alternativeRoute.slice(itinerary.roadTrip.alternativeRoute.indexOf('(') + 1, -1) : 'Smoother highway with automated lane-assist and low traffic congestion indexes.'}
                          </p>
                        </div>

                        <div className="p-5 rounded-3xl bg-rose-500/5 border border-rose-500/20 flex flex-col gap-1.5 text-left font-mono">
                          <span className="text-[8px] font-bold text-rose-500 dark:text-rose-455 uppercase tracking-widest">🚨 EMERGENCY ROAD HELP</span>
                          <h5 className="text-xs font-black text-slate-900 dark:text-white">{itinerary.roadTrip.emergencyContacts.details}</h5>
                          <span className="text-base font-black text-rose-505 dark:text-rose-400">{itinerary.roadTrip.emergencyContacts.phone}</span>
                          <p className="text-[9px] text-slate-500 font-semibold leading-normal">Available 24/7. Integrates automatically with your vehicle telemetry beacon.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Documentary Maker */}
                {activeTab === 'documentary' && (
                  <div className="flex flex-col gap-6 text-left">
                    <div>
                      <span className="text-[10px] font-mono text-teal-450 dark:text-teal-400 font-bold tracking-widest uppercase block">
                        SIMULATION CORE // CINEMATIC VOYAGE
                      </span>
                      <h4 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase">
                        🎬 AI Travel Documentary Generator
                      </h4>
                      <p className="text-xs text-slate-505 dark:text-slate-400 font-semibold mt-1">
                        Generate a simulated travel documentary video storyboard of your itinerary with voiceover telemetry and ambient sound mixes.
                      </p>
                    </div>

                    {/* Movie Screen */}
                    <div className="relative aspect-video rounded-3xl bg-slate-950 border border-teal-500/20 overflow-hidden flex flex-col justify-end p-6 group">
                      <div className="absolute inset-0 bg-cover bg-center filter brightness-50 group-hover:scale-105 transition-transform duration-[12s]"
                           style={{ backgroundImage: `url(${itinerary.image})` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-955/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex gap-1.5 font-mono text-[8px] bg-slate-950/80 border border-white/10 px-2 py-1 rounded text-teal-400 z-10 font-bold">
                        <span>REC</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse mt-0.5" />
                        <span>CAM 01 // DAY_0{itinerary.days[docDay]?.day || 1}</span>
                      </div>
                      
                      <div className="absolute top-4 right-4 flex gap-1.5 font-mono text-[8px] bg-slate-950/80 border border-white/10 px-2 py-1 rounded text-slate-450 z-10">
                        <span>TRACK: {soundtrack.toUpperCase()}</span>
                      </div>

                      {/* Cinematic Subtitles */}
                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] font-mono text-teal-400 font-bold uppercase tracking-widest">
                            Day {itinerary.days[docDay]?.day}: {itinerary.days[docDay]?.title}
                          </span>
                          <p className="text-xs text-white leading-relaxed font-semibold font-sans max-w-xl italic">
                            "{generateNarratorScript(itinerary.days[docDay])}"
                          </p>
                        </div>
                        
                        {/* Soundwave animation */}
                        {docPlaying && (
                          <div className="flex items-end gap-1 h-5 mt-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((idx) => {
                              const delay = (idx * 0.15) % 0.8;
                              return (
                                <span 
                                  key={idx} 
                                  className="w-[3px] bg-teal-400 rounded-full" 
                                  style={{
                                    height: `${Math.random() * 14 + 4}px`,
                                    animation: `audio-bar-grow 0.6s ease infinite ${delay}s`
                                  }} 
                                />
                              );
                            })}
                          </div>
                        )}

                        {/* Video Progress Bar */}
                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-2">
                          <div 
                            className="h-full bg-teal-400 transition-all duration-300"
                            style={{ width: `${((docDay + 1) / itinerary.days.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Controls Panel */}
                    <div className="flex flex-wrap justify-between items-center gap-4 bg-slate-950/30 border border-white/5 p-4 rounded-2xl font-mono text-xs">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            if (docPlaying) {
                              setDocPlaying(false);
                            } else {
                              setDocPlaying(true);
                              if (docDay >= itinerary.days.length - 1) {
                                setDocDay(0);
                              }
                            }
                          }}
                          className="px-4 py-2.5 bg-teal-500 hover:bg-teal-650 text-slate-950 font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-teal-500/10"
                        >
                          {docPlaying ? '⏸ PAUSE PREVIEW' : '▶ PLAY SIMULATION'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDocPlaying(false);
                            setDocDay(prev => (prev > 0 ? prev - 1 : itinerary.days.length - 1));
                          }}
                          className="p-2.5 rounded-xl border border-white/10 hover:border-white/30 text-white cursor-pointer"
                        >
                          ◀
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDocPlaying(false);
                            setDocDay(prev => (prev < itinerary.days.length - 1 ? prev + 1 : 0));
                          }}
                          className="p-2.5 rounded-xl border border-white/10 hover:border-white/30 text-white cursor-pointer"
                        >
                          ▶
                        </button>
                      </div>

                      {/* Soundtrack Selector */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 font-bold">SELECT AUDIO DRIVER:</span>
                        <select
                          value={soundtrack}
                          onChange={(e) => setSoundtrack(e.target.value)}
                          className="px-3 py-2 bg-slate-950 border border-teal-500/20 text-[11px] rounded-xl font-bold focus:outline-none focus:border-teal-500 text-teal-400"
                        >
                          <option value="Chill Lo-Fi">Chill Lo-Fi Beat</option>
                          <option value="Cinematic Synth">Epic Cinematic Synth</option>
                          <option value="Local Folk">Traditional Folk Instrumentals</option>
                          <option value="Synthwave Drive">Synthwave Drive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
