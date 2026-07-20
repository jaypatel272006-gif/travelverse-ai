import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Landmark, Train, Calendar, Compass, Sparkles, AlertCircle, 
  ShoppingBag, Eye, Heart, Info, ArrowRight, BookOpen, Coffee, 
  ShieldCheck, HelpCircle, Activity, ChevronRight, Fuel, Map, 
  Coins, Terminal, Award, FileText, Camera, Flame, Layers, Send
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// Data databases for various tabs
const REGIONAL_360 = {
  states: ['Jammu & Kashmir', 'Himachal Pradesh', 'Kerala', 'Goa', 'Uttar Pradesh'],
  districts: {
    'Jammu & Kashmir': ['Leh District', 'Srinagar District', 'Kargil District'],
    'Himachal Pradesh': ['Lahaul & Spiti', 'Shimla District', 'Kullu District'],
    'Kerala': ['Wayanad', 'Idukki (Munnar)', 'Alappuzha'],
    'Goa': ['North Goa', 'South Goa'],
    'Uttar Pradesh': ['Agra District', 'Varanasi District', 'Ayodhya District']
  },
  cities: {
    'Leh District': ['Leh Town', 'Hunder', 'Turtuk Village'],
    'Lahaul & Spiti': ['Kaza', 'Kibber', 'Tabo'],
    'Wayanad': ['Kalpetta', 'Sulthan Bathery'],
    'North Goa': ['Panaji', 'Calangute', 'Anjuna'],
    'Agra District': ['Agra City', 'Fatehpur Sikri']
  },
  attractions: {
    'Leh Town': ['Leh Palace', 'Shanti Stupa'],
    'Kaza': ['Key Monastery', 'Langza Buddha Statue'],
    'Kalpetta': ['Chembra Peak Heart Lake', 'Banasura Sagar Dam'],
    'Panaji': ['Fontainhas Latin Quarter', 'Miramar Beach'],
    'Agra City': ['Taj Mahal', 'Agra Fort']
  }
};

const HIDDEN_GEMS = [
  { name: 'Devkund Waterfall', type: 'waterfall', location: 'Maharashtra', desc: 'A crystal-clear volcanic plunge pool hidden inside dense forests of the Western Ghats.', safety: 'Avoid swimming near the main drop during heavy rainfall.', guide: 'Local forest path guide required.' },
  { name: 'Turtuk Border Village', type: 'village', location: 'Ladakh', desc: 'The last northernmost village of India. Famously lined with Baltic apricot orchards and stone houses.', safety: 'Acclimatize to altitude; carry warm layers.', guide: 'Local Balti community guide.' },
  { name: 'Galgibaga Beach', type: 'beach', location: 'Goa', desc: 'An offbeat pine-belt beach reserved for Olive Ridley turtle nesting conservation.', safety: 'Zero beach swimming allowed near conservation grids.', guide: 'Eco-volunteer guide.' },
  { name: 'Bateshwar Temple Complex', type: 'temple', location: 'Madhya Pradesh', desc: 'A magnificent cluster of 200 ancient sandstone shrines built by Gurjara-Pratiharas.', safety: 'Safe, accessible via local highways.', guide: 'Archeological surveyor avatar.' }
];

const ROAD_TRIP_CIRCUITS = {
  leh: {
    name: 'Leh-Ladakh Trans-Himalayan Loop',
    path: 'Delhi ➔ Manali ➔ Sarchu ➔ Leh ➔ Nubra ➔ Pangong',
    distance: '1,120 km',
    fuel: '₹9,800 (Petrol/SUV)',
    toll: '₹140',
    evChargers: 'Active ports in Manali, Kaza, and Leh Town.',
    hotels: 'Alpine base camps & eco-resorts.',
    food: 'Butter tea & thukpa bowls at highway Dhabas.'
  },
  spiti: {
    name: 'Spiti Valley Cold Desert Circuit',
    path: 'Shimla ➔ Reckong Peo ➔ Kaza ➔ Kibber ➔ Manali',
    distance: '850 km',
    fuel: '₹7,600',
    toll: '₹90',
    evChargers: 'Solar-powered slow ports at Kaza & Tabo.',
    hotels: 'Homestays in Kaza & local mud-huts.',
    food: 'Sea-buckthorn juice and barley bread.'
  },
  rajasthan: {
    name: 'Mewar Heritage Desert Route',
    path: 'Jaipur ➔ Ajmer ➔ Jodhpur ➔ Jaisalmer ➔ Udaipur',
    distance: '980 km',
    fuel: '₹6,400',
    toll: '₹880',
    evChargers: 'High-speed EV ports at major heritage toll plazas.',
    hotels: 'Palace havelis & desert luxury tents.',
    food: 'Dal Baati Churma at roadside heritage structures.'
  }
};

const RELIGIOUS_CIRCUITS = {
  hindu: {
    name: 'Jyotirlinga & Char Dham',
    shrines: ['Somnath', 'Dwarka', 'Kedarnath', 'Badrinath', 'Varanasi Viswanath', 'Rameshwaram'],
    badge: '🔱 Jyotirlinga Master'
  },
  sikh: {
    name: 'Panj Takht Corridor',
    shrines: ['Golden Temple (Amritsar)', 'Takht Patna Sahib', 'Takht Hazur Sahib', 'Takht Kesgarh Sahib', 'Takht Damdama Sahib'],
    badge: '🪯 Panj Takht Guardian'
  },
  buddhist: {
    name: 'Lumbini to Kushinagar Path',
    shrines: ['Bodh Gaya Mahabodhi', 'Sarnath Stupa', 'Kushinagar Sanctuary', 'Nalanda Monasteries'],
    badge: '☸️ Nirvana Pathfinder'
  }
};

const FESTIVALS = [
  { name: 'Kumbh Mela', crowd: 'Peak (120M+)', dates: 'January (Every 12 Years)', advice: 'Book satellite camp passes early. Carry emergency medical tags.' },
  { name: 'Navratri Garba', crowd: 'High (10M+)', dates: 'October (9 Nights)', advice: 'Secure passes for heritage Garba slots. Wear light traditional clothing.' },
  { name: 'Durga Puja', crowd: 'Peak (15M+)', dates: 'October (Kolkata)', advice: 'Pandal hop between 1:00 AM and 5:00 AM for visual ease.' },
  { name: 'Hornbill Festival', crowd: 'Moderate', dates: 'December (Nagaland)', advice: 'Experience local tribal cottages. Respect Naga clan customs.' }
];

const FOOD_ITEMS = [
  { name: 'Vada Pav', region: 'Mumbai', xp: 100 },
  { name: 'Dal Baati Churma', region: 'Rajasthan', xp: 150 },
  { name: 'Appam with Stew', region: 'Kerala', xp: 150 },
  { name: 'Kashmiri Wazwan', region: 'Kashmir', xp: 200 },
  { name: 'Siddu', region: 'Himachal', xp: 120 }
];

const BATTLE_ARENAS = {
  'goa-andaman': {
    left: 'Goa Coastline',
    right: 'Andaman Islands',
    stats: { cost: [70, 45], beauty: [75, 92], food: [90, 60], adventure: [65, 88], photography: [80, 95] }
  },
  'kedarnath-badrinath': {
    left: 'Kedarnath Temple',
    right: 'Badrinath Temple',
    stats: { cost: [40, 50], beauty: [98, 88], food: [30, 40], adventure: [95, 60], photography: [99, 90] }
  }
};

const GLOBAL_INTEL = [
  { country: 'Bali, Indonesia', type: 'trending', cost: '₹3,500/day', rank: '#1 Trending' },
  { country: 'Vietnam', type: 'cheap', cost: '₹2,200/day', rank: '#1 Budget Value' },
  { country: 'Kyoto, Japan', type: 'luxury', cost: '₹14,000/day', rank: '#1 Cultural' },
  { country: 'Swiss Alps', type: 'adventure', cost: '₹18,500/day', rank: '#1 Alpine' }
];

export const IndiaExplorer = () => {
  const { showToast, awardXp } = useApp();
  const [activeTab, setActiveTab] = useState('india-360');

  // State Management for sub-systems
  const [selected3D, setSelected3D] = useState({
    state: 'Jammu & Kashmir',
    district: 'Leh District',
    city: 'Turtuk Village',
    attraction: 'Leh Palace'
  });

  const [mapOverlay, setMapOverlay] = useState('density');
  const [hiddenFilter, setHiddenFilter] = useState('all');
  const [activeCircuit, setActiveCircuit] = useState('leh');
  const [pilgrimageFaith, setPilgrimageFaith] = useState('hindu');
  const [visitedShrines, setVisitedShrines] = useState([]);
  const [eatenFood, setEatenFood] = useState([]);
  const [battleKey, setBattleKey] = useState('goa-andaman');
  const [coPilotInput, setCoPilotInput] = useState('');
  const [coPilotLogs, setCoPilotLogs] = useState([
    'Co-Pilot: Awaiting trajectory requests...'
  ]);
  const [isCopilotTyping, setIsCopilotTyping] = useState(false);
  const [isFullscreenHUD, setIsFullscreenHUD] = useState(false);
  const [hudSpeed, setHudSpeed] = useState(72);

  // Speed simulator for HUD mode driving telemetry
  useEffect(() => {
    if (!isFullscreenHUD) return;
    const interval = setInterval(() => {
      setHudSpeed(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return Math.min(Math.max(next, 58), 92);
      });
    }, 1200);
    setHudSpeed(72);
    return () => clearInterval(interval);
  }, [isFullscreenHUD]);

  // Handlers
  const handleToggleShrine = (shrine) => {
    const next = visitedShrines.includes(shrine)
      ? visitedShrines.filter(s => s !== shrine)
      : [...visitedShrines, shrine];
    setVisitedShrines(next);
    
    if (!visitedShrines.includes(shrine)) {
      showToast(`Shrine checklist updated: ${shrine}!`, 'success');
      awardXp(150, `Visited Pilgrimage Node: ${shrine}`);
    }
  };

  const handleToggleFood = (food) => {
    const next = eatenFood.includes(food)
      ? eatenFood.filter(f => f !== food)
      : [...eatenFood, food];
    setEatenFood(next);

    if (!eatenFood.includes(food)) {
      showToast(`Food Passport Updated: tried ${food}!`, 'success');
      awardXp(100, `Culinary Stamp: Tried ${food}`);
    }
  };

  const handleCoPilotSubmit = (e) => {
    e.preventDefault();
    if (!coPilotInput.trim()) return;

    setCoPilotLogs(prev => [...prev, `User: ${coPilotInput}`]);
    setIsCopilotTyping(true);
    showToast('Co-Pilot: Computing optimal routes...', 'info');

    setTimeout(() => {
      let reply = "Co-Pilot: I suggest starting from Chandigarh Hub via NH-3. Atmospheric warnings: check landslide radars in Spiti. Total toll: ₹120. Optimal speed: 45km/h.";
      if (coPilotInput.toLowerCase().includes('budget')) {
        reply = "Co-Pilot: Under your budget parameters, choose local sleeper trains or shared jeeps. Avoid direct tourist SUV bookings. Lodging homestays are abundant.";
      }
      setCoPilotLogs(prev => [...prev, reply]);
      setIsCopilotTyping(false);
      showToast('Co-Pilot suggestions locked.', 'success');
      setCoPilotInput('');
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Custom grid backgrounds */}
      <style>{`
        .grid-cyber-india {
          background-size: 25px 25px;
          background-image: linear-gradient(to right, rgba(45,212,191,0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(45,212,191,0.02) 1px, transparent 1px);
        }
      `}</style>

      {/* Hero title header */}
      <div className="relative rounded-3xl overflow-hidden min-h-[220px] p-8 text-white bg-slate-950 border border-slate-900 shadow-2xl flex flex-col justify-end items-start gap-3">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-xl">
          <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest block mb-1">
            TravelVerse India 360 & Global Intel
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-none uppercase mt-0">
            India 360 Explorer
          </h1>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            The world's most ambitious travel explorer database. Plan, track, and simulate road trips, food passports, faith circuits, and photography guides across every district of India and global hubs.
          </p>
        </div>
      </div>

      {/* Core navigation split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sidebar Nav */}
        <div className="lg:col-span-3 flex flex-col gap-2 bg-slate-900/60 p-4 rounded-2xl border border-white/5 text-xs font-semibold font-mono">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 border-b border-white/5 pb-1">Explorer Navigation</span>
          
          {[
            { id: 'india-360', label: '🇮🇳 LIVING INDIA 360' },
            { id: 'map-engine', label: '🗺️ MAP HEAT ENGINE' },
            { id: 'hidden-gems', label: '💎 HIDDEN GEMS AI' },
            { id: 'road-trips', label: '🚗 ROAD TRIP OS' },
            { id: 'pilgrimage', label: '🛕 SPIRITUAL FAITHS' },
            { id: 'festivals', label: '🎉 FESTIVAL CALENDAR' },
            { id: 'food-passport', label: '🍛 FOOD PASSPORT' },
            { id: 'reels-photo', label: '📸 VIEWPOINT COORDS' },
            { id: 'battle-arena', label: '⚔️ BATTLE ARENA' },
            { id: 'global-intel', label: '🌍 GLOBAL INTELLIGENCE' },
            { id: 'co-pilot', label: '🧠 AI CO-PILOT' },
            { id: 'blueprint', label: '🔌 API BLUEPRINTS' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === tab.id 
                  ? 'bg-teal-500/25 text-teal-300 border-l-2 border-teal-500 pl-4 font-bold' 
                  : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
              <ChevronRight size={12} />
            </button>
          ))}
        </div>

        {/* Content Panel Box */}
        <div className="lg:col-span-9 rounded-3xl bg-slate-950/20 border border-slate-200/50 dark:border-white/5 shadow-2xl p-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* 1. INDIA 360 HIERARCHICAL DISCOVERY */}
            {activeTab === 'india-360' && (
              <motion.div
                key="india-360"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest">Living Digital India Explorer</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Hierarchical Explorer</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
                  {/* States */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-slate-500 font-bold uppercase">1. State / UT</span>
                    <select
                      value={selected3D.state}
                      onChange={(e) => setSelected3D({ ...selected3D, state: e.target.value })}
                      className="px-2 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white"
                    >
                      {REGIONAL_360.states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Districts */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-slate-500 font-bold uppercase">2. District</span>
                    <select
                      value={selected3D.district}
                      onChange={(e) => setSelected3D({ ...selected3D, district: e.target.value })}
                      className="px-2 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white animate-fade-in"
                    >
                      {(REGIONAL_360.districts[selected3D.state] || []).map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  {/* Cities */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-slate-500 font-bold uppercase">3. City / Village</span>
                    <select
                      value={selected3D.city}
                      onChange={(e) => setSelected3D({ ...selected3D, city: e.target.value })}
                      className="px-2 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white"
                    >
                      {(REGIONAL_360.cities[selected3D.district] || ['Kaza', 'Turtuk Village']).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Attractions */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-slate-500 font-bold uppercase">4. Attraction</span>
                    <select
                      value={selected3D.attraction}
                      onChange={(e) => setSelected3D({ ...selected3D, attraction: e.target.value })}
                      className="px-2 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white"
                    >
                      {(REGIONAL_360.attractions[selected3D.city] || ['Key Monastery', 'Taj Mahal']).map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                </div>

                {/* Display locked Dossier card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col gap-3">
                  <span className="text-[8px] font-mono font-bold text-teal-400 uppercase tracking-widest">Target Node Dossier Locked</span>
                  <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-1.5">
                    <MapPin className="text-rose-500" size={15} />
                    {selected3D.attraction}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                    This attraction node is located inside {selected3D.city}, within the {selected3D.district} district boundaries of the {selected3D.state} region. 
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-[9px] text-slate-400 pt-3 border-t border-slate-100 dark:border-white/5">
                    <div>
                      <span className="text-slate-500 block uppercase font-bold text-[7px]">ALTITUDE</span>
                      <span className="text-white font-bold">11,800 ft (High)</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase font-bold text-[7px]">ACCESSIBILITY</span>
                      <span className="text-teal-400 font-bold">EV Highway OK</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase font-bold text-[7px]">GUIDE AVATAR</span>
                      <span className="text-white font-bold">Local Historian</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase font-bold text-[7px]">REST ADVISORY</span>
                      <span className="text-white font-bold">Moderate</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. INTERACTIVE INDIA MAP ENGINE */}
            {activeTab === 'map-engine' && (
              <motion.div
                key="map-engine"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest font-mono">Heat map layers selector</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Interactive Map Heat Engine</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  <div className="md:col-span-8 rounded-2xl bg-slate-950 border border-slate-900 p-6 flex items-center justify-center relative min-h-[320px]">
                    <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
                    
                    {/* SVG Map representing India with dynamic colors based on overlay */}
                    <div className="w-64 h-64 relative">
                      <svg viewBox="0 0 100 100" className={`w-full h-full transition-colors ${
                        mapOverlay === 'density' ? 'text-rose-500/20' : (mapOverlay === 'heritage' ? 'text-teal-500/20' : 'text-amber-500/20')
                      }`} fill="currentColor">
                        <path d="M 45 10 L 53 10 L 56 16 L 53 23 L 57 28 L 62 26 L 68 28 L 64 35 L 70 38 L 78 34 L 84 38 L 86 42 L 78 48 L 72 48 L 66 52 L 60 52 L 56 58 L 56 68 L 51 82 L 50 90 L 48 90 L 44 80 L 46 72 L 42 68 L 38 60 L 42 56 L 40 48 L 34 46 L 24 44 L 28 38 L 36 38 L 40 34 L 38 28 L 45 20 Z" />
                      </svg>
                      
                      {/* Active coordinates overlay markers */}
                      <span className="absolute left-[48%] top-[30%] w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                      <span className="absolute left-[40%] top-[38%] w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                      <span className="absolute left-[46%] top-[82%] w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    </div>
                  </div>

                  {/* Overlays selector */}
                  <div className="md:col-span-4 flex flex-col gap-3 font-mono text-xs text-left">
                    <span className="text-[8px] text-slate-500 uppercase font-black">Active Overlays</span>
                    
                    {[
                      { id: 'density', label: '🔥 TOURIST DENSITY', desc: 'Real-time visitor counts at hubs.' },
                      { id: 'heritage', label: '🕌 HERITAGE MAP', desc: 'Ancient monuments & temple vectors.' },
                      { id: 'food', label: '🍛 FOOD HOTSPOTS', desc: 'Culinary capitals & specialties.' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => { setMapOverlay(opt.id); showToast(`Loaded ${opt.label} layer!`, 'success'); }}
                        className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                          mapOverlay === opt.id 
                            ? 'bg-slate-900 border-teal-500 text-white' 
                            : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="font-bold text-[10px]">{opt.label}</span>
                        <span className="text-[8.5px] text-slate-500 leading-normal">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. HIDDEN INDIA DISCOVERY PROJECT */}
            {activeTab === 'hidden-gems' && (
              <motion.div
                key="hidden-gems"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest">Offbeat Satellite Project</span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Hidden India Discovery</h3>
                  </div>

                  <div className="flex gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10 text-[9px] font-mono">
                    {['all', 'waterfall', 'village', 'beach', 'temple'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setHiddenFilter(opt)}
                        className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                          hiddenFilter === opt ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {opt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {HIDDEN_GEMS
                    .filter(g => hiddenFilter === 'all' || g.type === hiddenFilter)
                    .map((gem, idx) => (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col gap-3 justify-between"
                      >
                        <div>
                          <div className="flex justify-between font-mono text-[9px] text-slate-450 uppercase mb-1">
                            <span>{gem.type}</span>
                            <span>📍 {gem.location}</span>
                          </div>
                          <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">{gem.name}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold mt-1">
                            {gem.desc}
                          </p>
                        </div>

                        <div className="border-t border-slate-100 dark:border-white/5 pt-3 flex flex-col gap-1.5 font-mono text-[9.5px]">
                          <span className="text-rose-500 font-bold block">⚠️ Safety Index: {gem.safety}</span>
                          <span className="text-teal-400 font-bold block">👤 Local Guide: {gem.guide}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}

            {/* 4. ROAD TRIP OPERATING SYSTEM */}
            {activeTab === 'road-trips' && (
              <motion.div
                key="road-trips"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest">Highway Route Optimizer</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Road Trip Operating System</h3>
                </div>

                {/* Circuit buttons */}
                <div className="flex flex-wrap gap-2">
                  {Object.entries(ROAD_TRIP_CIRCUITS).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCircuit(key)}
                      className={`px-4 py-2 border rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeCircuit === key 
                          ? 'bg-teal-500 border-teal-500 text-slate-950 shadow-md' 
                          : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {value.name}
                    </button>
                  ))}
                </div>

                {/* Details */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col gap-4 text-left">
                  <div>
                    <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                      {ROAD_TRIP_CIRCUITS[activeCircuit].name}
                    </h4>
                    <span className="text-[9.5px] font-mono text-teal-400 block mt-1">
                      🛣️ ROUTE PATH: {ROAD_TRIP_CIRCUITS[activeCircuit].path}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[10px] text-slate-400">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5">
                      <span className="text-slate-500 block uppercase font-bold text-[7.5px]">Distance</span>
                      <span className="text-white font-bold block mt-0.5">{ROAD_TRIP_CIRCUITS[activeCircuit].distance}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5">
                      <span className="text-slate-500 block uppercase font-bold text-[7.5px] flex items-center gap-0.5"><Fuel size={9} /> FUEL ESTIMATE</span>
                      <span className="text-white font-bold block mt-0.5">{ROAD_TRIP_CIRCUITS[activeCircuit].fuel}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5">
                      <span className="text-slate-500 block uppercase font-bold text-[7.5px] flex items-center gap-0.5"><Coins size={9} /> TOLL ESTIMATE</span>
                      <span className="text-white font-bold block mt-0.5">{ROAD_TRIP_CIRCUITS[activeCircuit].toll}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5">
                      <span className="text-slate-500 block uppercase font-bold text-[7.5px] text-teal-400">⚡ EV Charging</span>
                      <span className="text-teal-400 font-bold block mt-0.5">{ROAD_TRIP_CIRCUITS[activeCircuit].evChargers}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                    <div>
                      <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Recommended Lodging</span>
                      <p className="text-slate-700 dark:text-slate-300 font-mono">🏨 {ROAD_TRIP_CIRCUITS[activeCircuit].hotels}</p>
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Highway Culinary Stops</span>
                      <p className="text-slate-700 dark:text-slate-300 font-mono">🍛 {ROAD_TRIP_CIRCUITS[activeCircuit].food}</p>
                    </div>
                  </div>

                  {/* Windshield HUD Trigger Button */}
                  <div className="border-t border-slate-100 dark:border-white/5 pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsFullscreenHUD(true)}
                      className="px-5 py-3 bg-slate-950 border border-teal-500/30 hover:border-teal-500 text-teal-400 font-mono font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-teal-500/5 hover:scale-[1.02]"
                    >
                      <Compass size={13} className="animate-spin duration-10000" />
                      ACTIVATE WINDSHIELD HUD MODE
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. RELIGIOUS TOURISM UNIVERSE */}
            {activeTab === 'pilgrimage' && (
              <motion.div
                key="pilgrimage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest font-mono">Faith Pilgrimage tracking</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Spiritual Universe Shrines</h3>
                </div>

                {/* Faith selector */}
                <div className="flex gap-2">
                  {Object.keys(RELIGIOUS_CIRCUITS).map(faith => (
                    <button
                      key={faith}
                      onClick={() => setPilgrimageFaith(faith)}
                      className={`px-4 py-2 border rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        pilgrimageFaith === faith 
                          ? 'bg-teal-500 border-teal-500 text-slate-950 font-extrabold' 
                          : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {faith.toUpperCase()} CIRCUIT
                    </button>
                  ))}
                </div>

                {/* Shrines checklist */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col gap-4 text-left">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                      {RELIGIOUS_CIRCUITS[pilgrimageFaith].name} Tracker
                    </h4>
                    <span className="text-[8px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20 px-2 py-0.5 rounded font-bold uppercase">
                      {RELIGIOUS_CIRCUITS[pilgrimageFaith].badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                    {RELIGIOUS_CIRCUITS[pilgrimageFaith].shrines.map(shrine => {
                      const isVisited = visitedShrines.includes(shrine);
                      return (
                        <button
                          key={shrine}
                          onClick={() => handleToggleShrine(shrine)}
                          className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isVisited
                              ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                              : 'bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-white/5 text-slate-655 dark:text-slate-400 hover:border-teal-500/10'
                          }`}
                        >
                          <span>{shrine}</span>
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] font-black ${
                            isVisited ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-500'
                          }`}>
                            {isVisited && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Devotional badge claim CTA */}
                  {visitedShrines.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 flex justify-between items-center gap-4 text-[10px] font-mono text-teal-300 font-bold mt-2 animate-in fade-in">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-teal-400" />
                        <span>Devotion Progress: {visitedShrines.length} / {RELIGIOUS_CIRCUITS[pilgrimageFaith].shrines.length} shrines verified</span>
                      </div>
                      <button
                        onClick={() => {
                          showToast('Devotional certificate exported to missions log.', 'success');
                          awardXp(500, 'Unlocked Devotion Certificate Badge');
                        }}
                        className="py-1 px-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-sm"
                      >
                        EXPORT CERTIFICATE
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* 6. FESTIVAL TOURISM ENGINE */}
            {activeTab === 'festivals' && (
              <motion.div
                key="festivals"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest">Seasonal Event forecasts</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Festival Tourism Engine</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FESTIVALS.map((f, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col gap-3 text-left justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center font-mono text-[9px]">
                          <span className="text-teal-450 font-bold">{f.dates}</span>
                          <span className="text-[8px] bg-red-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 font-bold uppercase">
                            Crowd: {f.crowd}
                          </span>
                        </div>
                        <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1.5">{f.name}</h4>
                      </div>

                      <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5 rounded-xl font-mono text-[9.5px] leading-relaxed text-slate-500 dark:text-slate-450 mt-1">
                        <span className="text-slate-500 block uppercase font-bold text-[7.5px] mb-0.5">Advisory / Tips</span>
                        {f.advice}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 7. FOOD DISCOVERY PASSPORT */}
            {activeTab === 'food-passport' && (
              <motion.div
                key="food-passport"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest">Culinary Explorer achievements</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Culinary Food Passport</h3>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col gap-4 text-left">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                      Food Passport Ledger
                    </h4>
                    <span className="text-[9px] font-mono text-teal-400 font-bold uppercase">
                      Culinary XP: {eatenFood.length * 100} XP Earned
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    {FOOD_ITEMS.map((dish, i) => {
                      const isEaten = eatenFood.includes(dish.name);
                      return (
                        <button
                          key={i}
                          onClick={() => handleToggleFood(dish.name)}
                          className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isEaten
                              ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                              : 'bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-white/5 text-slate-655 dark:text-slate-400 hover:border-teal-500/10'
                          }`}
                        >
                          <div>
                            <span className="font-bold">{dish.name}</span>
                            <span className="block text-[8px] text-slate-500 font-semibold">{dish.region} Specialty</span>
                          </div>
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] font-black ${
                            isEaten ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-500'
                          }`}>
                            {isEaten && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 8. PHOTOGRAPHY EXPLORER & REELS */}
            {activeTab === 'reels-photo' && (
              <motion.div
                key="reels-photo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest font-mono">Drone spots & viewpoint timetables</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Photography Viewpoint Coordinates</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-left font-mono text-slate-500 dark:text-slate-450 items-start">
                  <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                    <h4 className="font-display font-black text-sm text-teal-400 uppercase tracking-widest font-mono flex items-center gap-1">
                      <Camera size={14} /> Sunset & Drone coordinates
                    </h4>
                    
                    <ul className="flex flex-col gap-3 pl-4 list-disc font-semibold leading-relaxed">
                      <li><strong>Taj Mahal (Agra):</strong> Mehtab Bagh riverbank coordinates at 5:45 PM for mirror reflection views.</li>
                      <li><strong>Pangong Lake (Ladakh):</strong> Spangmik camp ridge sunset vistas (drone clearance at 120m).</li>
                      <li><strong>Divar Ferry (Goa):</strong> Mandovi river ferry crossing for misty morning deck panoramas.</li>
                    </ul>
                  </div>

                  {/* Reels mock visuals */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[8px] text-slate-500 font-black uppercase">Simulated Drone reels preview</span>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=150&q=80" alt="Reel 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <span className="absolute bottom-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded text-[8px] font-bold">Drone Agra (12s)</span>
                      </div>
                      <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=150&q=80" alt="Reel 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <span className="absolute bottom-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded text-[8px] font-bold">Leh High Pass (8s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 9. DESTINATION BATTLE ARENA */}
            {activeTab === 'battle-arena' && (
              <motion.div
                key="battle-arena"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest font-mono">Comparative stats matrix analyzer</span>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Destination Battle Arena</h3>
                  </div>

                  <div className="flex gap-2 bg-slate-900 p-1.5 rounded-xl border border-white/10 text-[9.5px] font-mono">
                    <button onClick={() => setBattleKey('goa-andaman')} className={`px-3 py-1 rounded transition-all cursor-pointer ${battleKey === 'goa-andaman' ? 'bg-teal-505 text-slate-950 font-bold bg-teal-500' : 'text-slate-400 hover:text-white'}`}>GOA VS ANDAMAN</button>
                    <button onClick={() => setBattleKey('kedarnath-badrinath')} className={`px-3 py-1 rounded transition-all cursor-pointer ${battleKey === 'kedarnath-badrinath' ? 'bg-teal-505 text-slate-950 font-bold bg-teal-500' : 'text-slate-400 hover:text-white'}`}>KEDAR VS BADRI</button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col gap-5 text-left text-xs font-mono font-semibold">
                  <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-3">
                    <span className="text-teal-400 font-bold">{BATTLE_ARENAS[battleKey].left}</span>
                    <span className="text-slate-500 text-[9px] uppercase font-black font-mono">VS</span>
                    <span className="text-sky-400 font-bold">{BATTLE_ARENAS[battleKey].right}</span>
                  </div>

                  {/* Battle Stats meters */}
                  <div className="flex flex-col gap-3">
                    {Object.entries(BATTLE_ARENAS[battleKey].stats).map(([statName, values]) => (
                      <div key={statName} className="flex flex-col gap-1.5">
                        <span className="text-[8px] text-slate-500 uppercase font-black">{statName} Factor</span>
                        <div className="w-full flex items-center gap-4">
                          {/* Left stat bar */}
                          <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden flex justify-end">
                            <div className="h-full bg-teal-500" style={{ width: `${values[0]}%` }} />
                          </div>
                          <span className="text-[9.5px] font-bold w-12 text-center text-teal-400">{values[0]}% // {values[1]}%</span>
                          {/* Right stat bar */}
                          <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                            <div className="h-full bg-sky-500" style={{ width: `${values[1]}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 10. GLOBAL TRAVEL INTELLIGENCE */}
            {activeTab === 'global-intel' && (
              <motion.div
                key="global-intel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest font-mono">Planetary trending metrics</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">Global Travel Intelligence</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {GLOBAL_INTEL.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col justify-between items-start gap-3 text-left font-mono"
                    >
                      <span className="text-[8.5px] bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded border border-teal-500/20 font-black uppercase">
                        {item.type}
                      </span>
                      <div>
                        <h4 className="font-display font-extrabold text-xs text-slate-900 dark:text-white uppercase leading-tight">{item.country}</h4>
                        <span className="text-[10px] text-slate-500 font-bold block mt-0.5">{item.cost}</span>
                      </div>
                      <span className="text-[9px] text-slate-655 font-bold uppercase">{item.rank}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 11. AI TRAVEL CO-PILOT */}
            {activeTab === 'co-pilot' && (
              <motion.div
                key="co-pilot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest">Sentient travel twin guidance</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">AI Travel Co-Pilot</h3>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col justify-between min-h-[350px] overflow-hidden relative text-xs font-mono text-left font-semibold">
                  <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
                    {coPilotLogs.map((log, index) => (
                      <div 
                        key={index}
                        className={`p-2.5 rounded-xl border leading-relaxed ${
                          log.startsWith('User:') 
                            ? 'bg-slate-950 border-white/5 text-slate-300 max-w-md self-end' 
                            : 'bg-teal-500/5 border-teal-500/10 text-teal-300 self-start'
                        }`}
                      >
                        {log}
                      </div>
                    ))}
                    {isCopilotTyping && (
                      <span className="text-teal-400 font-bold animate-pulse">Co-Pilot calculating optimal route vectors...</span>
                    )}
                  </div>

                  <form onSubmit={handleCoPilotSubmit} className="flex gap-2 border-t border-white/5 pt-3.5 items-center">
                    <input
                      type="text"
                      placeholder="e.g. Optimize my Delhi to Leh road trip under 8 days..."
                      value={coPilotInput}
                      onChange={(e) => setCoPilotInput(e.target.value)}
                      className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white outline-none focus:border-teal-500 text-xs"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl cursor-pointer"
                    >
                      <Send size={15} />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* 12. TRAVELVERSE API BLUEPRINTS */}
            {activeTab === 'blueprint' && (
              <motion.div
                key="blueprint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-widest">Multi-platform dashboard schema</span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">TravelVerse API Architecture</h3>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col gap-5 text-xs text-left text-slate-400">
                  <p className="font-semibold leading-relaxed">
                    Designed backend API microservices supporting automotive cockpits, smart TV displays, and mobile platforms. Core REST/GraphQL JSON routes map directly to coordinate nodes.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950 border border-white/5 font-mono text-[9px] text-slate-350 flex flex-col gap-3">
                    <div>
                      <span className="text-teal-400 font-bold block mb-1">GET /api/v1/india-360/coordinates</span>
                      <pre className="bg-slate-900 p-2.5 rounded border border-white/5 text-[8.5px] overflow-x-auto">
{`{
  "state_node": "Himachal Pradesh",
  "district_code": "IN-HP-LS",
  "coordinates": { "lat": 32.2461, "lon": 78.0349 },
  "acclimatization_index": "AMS_REST_24H",
  "ev_status": "CHARGE_PLUGS_OK"
}`}
                      </pre>
                    </div>

                    <div>
                      <span className="text-teal-400 font-bold block mb-1">POST /api/v1/roadtrip/optimize</span>
                      <pre className="bg-slate-900 p-2.5 rounded border border-white/5 text-[8.5px] overflow-x-auto">
{`{
  "circuit_code": "SPITI_LOOP",
  "fuel_type": "EV",
  "ac_sleeper_priority": true
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Windshield HUD Mode overlay */}
      <AnimatePresence>
        {isFullscreenHUD && (
          <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-8 text-emerald-400 font-mono select-none">
            {/* Mirror Toggle & Close Header */}
            <div className="flex justify-between items-center w-full relative z-10">
              <div className="flex flex-col items-start text-left">
                <span className="text-[9px] uppercase tracking-widest text-emerald-600 font-bold">HUD SYSTEM ACTIVATED</span>
                <span className="text-[8.5px] text-emerald-500 font-semibold border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/5 mt-0.5">
                  WINDSHIELD PROJECTION HUD_V1.1
                </span>
              </div>
              
              <button
                type="button"
                onClick={() => setIsFullscreenHUD(false)}
                className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500 rounded-xl text-emerald-400 hover:text-emerald-305 font-bold text-xs uppercase tracking-wide cursor-pointer transition-all"
              >
                Close HUD
              </button>
            </div>

            {/* Mirrored Driving Dashboard Display */}
            <div 
              className="flex-1 flex flex-col items-center justify-center gap-8 transition-transform duration-300"
              style={{ transform: 'scaleX(-1)' }} // Mirror horizontally to reflect off windshield!
            >
              {/* Speedometer dial */}
              <div className="flex flex-col items-center justify-center relative">
                <div className="w-56 h-56 rounded-full border-4 border-dashed border-emerald-500/20 flex flex-col items-center justify-center relative animate-pulse duration-[5s]">
                  <span className="text-8xl font-black tracking-tighter text-emerald-400 font-mono">
                    {hudSpeed}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold mt-1">KM/H</span>
                </div>
                {/* Altitude warning badge inside dial */}
                <div className="absolute -bottom-3 bg-black border border-emerald-500/40 px-3 py-1 rounded-full text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
                  {ROAD_TRIP_CIRCUITS[activeCircuit].name.includes('Leh') || ROAD_TRIP_CIRCUITS[activeCircuit].name.includes('Spiti') 
                    ? '⚠️ ALTITUDE WARNING: 3,000M+' 
                    : '⚡ SECTOR EN ROUTE'
                  }
                </div>
              </div>

              {/* Route Telemetry Columns */}
              <div className="grid grid-cols-3 gap-8 w-full max-w-2xl text-center mt-4">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold">Route Code</span>
                  <span className="text-lg font-black text-emerald-400 mt-1 uppercase">
                    {activeCircuit === 'leh' ? 'LEH_LOOP_22' : (activeCircuit === 'spiti' ? 'SPITI_CIR_05' : 'DESERT_CIR_14')}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold">EV Charger Stations</span>
                  <span className="text-lg font-black text-emerald-400 mt-1 uppercase">
                    {activeCircuit === 'leh' ? 'Active Leh/Kaza' : (activeCircuit === 'spiti' ? 'Kaza Solar' : 'Plazas High')}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold">Compass Head</span>
                  <span className="text-lg font-black text-emerald-400 mt-1 animate-pulse">
                    N 015° NE
                  </span>
                </div>
              </div>

              {/* Nearest Rest Stop and details */}
              <div className="text-center max-w-md bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl w-full">
                <span className="text-[8px] uppercase tracking-widest text-emerald-600 font-bold block mb-1">Upcoming Waypoint Station</span>
                <h5 className="font-bold text-sm text-emerald-400 uppercase">
                  {activeCircuit === 'leh' ? 'Sarchu base corridor - 42 km' : (activeCircuit === 'spiti' ? 'Reckong Peo - 28 km' : 'Udaipur Sector - 56 km')}
                </h5>
                <p className="text-[10px] text-emerald-500 font-semibold mt-1">
                  Advice: {ROAD_TRIP_CIRCUITS[activeCircuit].food.split('at')[0]}
                </p>
              </div>
            </div>

            {/* Windshield Positioning Instructions */}
            <div className="w-full text-center relative z-10 flex flex-col items-center justify-center">
              <span className="text-[9px] uppercase tracking-widest text-emerald-700 font-bold max-w-sm leading-relaxed">
                ℹ️ PLACE PHONE FLAT ON DASHBOARD UNDER WINDSHIELD. GLASS REFLECTION WILL REVERSE THE HUD CORRECTLY.
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
