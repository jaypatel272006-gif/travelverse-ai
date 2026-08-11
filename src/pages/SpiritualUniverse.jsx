import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Compass, BookOpen, Sparkles, Award, Calendar, 
  Map, Camera, MapPin, Play, Pause, Volume2, ShieldCheck, 
  Clock, AlertTriangle, ArrowRight, Heart, Users, Star 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { logger } from '../utils/logger';

// Coordinate positions for spiritual nodes on the antique SVG canvas
const CIRCUIT_NODES = [
  { id: 'kedarnath', name: 'Kedarnath', x: 380, y: 130, faith: 'Hinduism', state: 'Uttarakhand', desc: 'Himalayan Shrine' },
  { id: 'amritsar', name: 'Golden Temple', x: 310, y: 150, faith: 'Sikhism', state: 'Punjab', desc: 'Harmandir Sahib' },
  { id: 'ayodhya', name: 'Ayodhya', x: 440, y: 210, faith: 'Hinduism', state: 'Uttar Pradesh', desc: 'Ram Janmabhoomi' },
  { id: 'varanasi', name: 'Varanasi', x: 470, y: 240, faith: 'Hinduism', state: 'Uttar Pradesh', desc: 'Kashi Vishwanath Temple' },
  { id: 'bodhgaya', name: 'Bodh Gaya', x: 520, y: 250, faith: 'Buddhism', state: 'Bihar', desc: 'Mahabodhi Temple' },
  { id: 'somnath', x: 190, y: 310, name: 'Somnath', faith: 'Hinduism', state: 'Gujarat', desc: 'First Jyotirlinga' },
  { id: 'rameshwaram', x: 380, y: 540, name: 'Rameshwaram', faith: 'Hinduism', state: 'Tamil Nadu', desc: 'Southern Dham' },
  { id: 'dwarka', x: 140, y: 290, name: 'Dwarka', faith: 'Hinduism', state: 'Gujarat', desc: 'Western Dham' },
  { id: 'puri', x: 550, y: 340, name: 'Puri', faith: 'Hinduism', state: 'Odisha', desc: 'Eastern Dham' },
  { id: 'badrinath', x: 395, y: 110, name: 'Badrinath', faith: 'Hinduism', state: 'Uttarakhand', desc: 'Northern Dham' }
];

const CIRCUITS = {
  chardham: {
    name: 'Char Dham Path',
    color: '#d97706',
    nodes: ['badrinath', 'dwarka', 'rameshwaram', 'puri'],
    desc: 'The four cardinal points of India established by Adi Shankaracharya.'
  },
  jyotirlinga: {
    name: 'Jyotirlinga Route',
    color: '#ea580c',
    nodes: ['kedarnath', 'varanasi', 'somnath', 'rameshwaram'],
    desc: 'Sacred shrines dedicated to the light manifestations of Lord Shiva.'
  },
  buddhist: {
    name: 'Buddhist Trail',
    color: '#eab308',
    nodes: ['bodhgaya', 'varanasi'],
    desc: 'Trace the path of Siddhartha Gautama from enlightenment to sermon.'
  }
};

const JYOTIRLINGAS = [
  { name: 'Somnath', location: 'Gujarat', desc: 'The first of the twelve holy shrines, representing the light of Shiva.' },
  { name: 'Mallikarjuna', location: 'Andhra Pradesh', desc: 'Nestled on the Shri Shaila Mountain beside the Krishna River.' },
  { name: 'Mahakaleshwar', location: 'Madhya Pradesh', desc: 'The self-manifested south-facing (Dakshinmukhi) lingam.' },
  { name: 'Omkareshwar', location: 'Madhya Pradesh', desc: 'Situated on an island shaped like the sacred Om symbol.' },
  { name: 'Kedarnath', location: 'Uttarakhand', desc: 'The highest Jyotirlinga, reachable via a Himalayan mountain trek.' },
  { name: 'Bhimashankar', location: 'Maharashtra', desc: 'Located in the Sahyadri hills, source of the Bhima River.' },
  { name: 'Kashi Vishwanath', location: 'Varanasi', desc: 'The spiritual heart of India on the banks of the sacred Ganges.' },
  { name: 'Trimbakeshwar', location: 'Maharashtra', desc: 'Featuring a unique three-headed representation of Shiva, Vishnu, Brahma.' },
  { name: 'Vaidyanath', location: 'Jharkhand', desc: 'Devotees carry holy Ganges water to offer to this healing shrine.' },
  { name: 'Nageshwar', location: 'Gujarat', desc: 'The shrine of the Lord of Snakes, near the Saurashtra coast.' },
  { name: 'Rameshwaram', location: 'Tamil Nadu', desc: 'Consecrated by Lord Rama himself on his return from Lanka.' },
  { name: 'Grishneshwar', location: 'Maharashtra', desc: 'The last Jyotirlinga, located near the UNESCO Ellora Caves.' }
];

const FAITHS = [
  {
    name: 'Hinduism',
    focus: 'Darshan, Aarti, and Satvik Heritage',
    timings: '4:00 AM - 10:00 PM',
    food: 'Pure Vegetarian (Satvik) meals, strictly onion-garlic free at major temples.',
    etiquette: 'Remove footwear outside. Wear modest clothes covering shoulders & knees. Avoid leather items.',
    architecture: 'Intricate Dravidian spires in the South, Nagara stone carvings in the North.',
    spotlight: 'Varanasi Ganga Aarti, Ayodhya Ram Mandir, Kedarnath Himalayan temple.'
  },
  {
    name: 'Sikhism',
    focus: 'Sewa, Kirtan, and Universal Langar',
    timings: 'Open 24 Hours',
    food: 'Guru ka Langar: Free, hot vegetarian meals served to everyone regardless of background.',
    etiquette: 'Cover head with a bandana. Wash feet at entrance. Remove footwear.',
    architecture: 'Gilded gold domes, pristine white marble courtyards, and clean reflecting pools.',
    spotlight: 'Harmandir Sahib (Golden Temple) in Amritsar.'
  },
  {
    name: 'Buddhism',
    focus: 'Meditation, Vipassana, and Mindfulness',
    timings: '5:00 AM - 9:00 PM',
    food: 'Nutritious vegetarian diet. Local organic cafes serve Tibetan and Indian Satvik options.',
    etiquette: 'Maintain absolute silence. Walk clockwise (circumambulate) around stupas and trees.',
    architecture: 'Pagoda arches, concentric stupa railings, and sacred Bodhi tree meditation zones.',
    spotlight: 'Mahabodhi Temple in Bodh Gaya.'
  }
];

const FESTIVALS = [
  { name: 'Kumbh Mela', location: 'Prayagraj', baseDays: 200, crowd: 'Extreme', safety: 'Utilize official bathing ghats only, avoid pocket bottlenecks.', demand: '98% Sold Out' },
  { name: 'Ram Navami', location: 'Ayodhya', baseDays: 28, crowd: 'High', safety: 'Book entry passes online to avoid gridlock. Keep hydrated.', demand: '95% Sold Out' },
  { name: 'Gurpurab', location: 'Amritsar', baseDays: 145, crowd: 'Very High', safety: 'Utilize free shoe storage counters. Arrive early.', textRate: '92%' }
];

// Diya Lamp Component with pulsing flame
const DiyaLamp = () => (
  <div className="relative w-12 h-10 flex items-center justify-center">
    <svg viewBox="0 0 100 60" className="w-10 h-7 text-amber-700/80 fill-current drop-shadow-[0_2px_6px_rgba(217,119,6,0.5)]">
      <path d="M50,10 C15,10 5,35 5,45 C5,55 25,55 50,55 C75,55 95,55 95,45 C95,35 85,10 50,10 Z" />
      <ellipse cx="50" cy="22" rx="35" ry="10" className="text-amber-900/90 fill-current" />
    </svg>
    <div className="absolute top-1 w-2.5 h-5 rounded-full bg-gradient-to-t from-red-500 via-orange-400 to-yellow-350 animate-flame-pulse shadow-[0_0_12px_#f59e0b,0_0_4px_#ef4444]" trim="true" />
  </div>
);

// Particle system sparks emitter
const FloatingSparks = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {Array.from({ length: 18 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-amber-400/60 opacity-0 particle-dust"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${80 + Math.random() * 20}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${4 + Math.random() * 4}s`
        }}
      />
    ))}
  </div>
);

export const SpiritualUniverse = () => {
  const { saveItinerary, awardXp, showToast, user } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('directory'); // directory, map, jyotirlinga, planner, guides
  const [selectedCircuit, setSelectedCircuit] = useState('chardham');
  const [hoveredNode, setHoveredNode] = useState(null);
  
  // States
  const [dirSearch, setDirSearch] = useState('');
  const [dirFaith, setDirFaith] = useState('All');
  
  const [visitedJyotirlingas, setVisitedJyotirlingas] = useState(() => {
    try {
      const saved = localStorage.getItem('tv_jyotirlinga_progress');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      logger.warn("Failed to parse tv_jyotirlinga_progress from localStorage, using fallback.", e);
      return [];
    }
  });

  const [passportStamps, setPassportStamps] = useState(() => {
    try {
      const saved = localStorage.getItem('tv_spiritual_stamps');
      return saved ? JSON.parse(saved) : ['Varanasi-Kashi'];
    } catch (e) {
      logger.warn("Failed to parse tv_spiritual_stamps from localStorage, using fallback.", e);
      return ['Varanasi-Kashi'];
    }
  });

  const [plannerFaith, setPlannerFaith] = useState('Hinduism');
  const [plannerDuration, setPlannerDuration] = useState(3);
  const [plannerBudget, setPlannerBudget] = useState('Ashram Devotion');
  const [isGenerating, setIsGenerating] = useState(false);
  const [compiledItinerary, setCompiledItinerary] = useState(null);

  // Audio Guide virtual states
  const [selectedWalkthrough, setSelectedWalkthrough] = useState('kedarnath');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState('guru'); // guru, historian, guide

  useEffect(() => {
    localStorage.setItem('tv_jyotirlinga_progress', JSON.stringify(visitedJyotirlingas));
  }, [visitedJyotirlingas]);

  useEffect(() => {
    localStorage.setItem('tv_spiritual_stamps', JSON.stringify(passportStamps));
  }, [passportStamps]);

  // Toggle visited Jyotirlinga
  const handleToggleJyotirlinga = (name) => {
    if (visitedJyotirlingas.includes(name)) {
      setVisitedJyotirlingas(prev => prev.filter(j => j !== name));
      showToast(`Removed ${name} from visited log.`, 'info');
    } else {
      const updated = [...visitedJyotirlingas, name];
      setVisitedJyotirlingas(updated);
      awardXp(150, `Completed Pilgrimage to ${name} Jyotirlinga`);
      showToast(`Logged ${name}! Received 150 XP.`, 'success');

      const stampName = `${name}-Shrine`;
      if (!passportStamps.includes(stampName)) {
        setPassportStamps(prev => [...prev, stampName]);
      }
    }
  };

  const handleCompileSpiritualPath = () => {
    setIsGenerating(true);
    setCompiledItinerary(null);
    
    setTimeout(() => {
      let destination = 'Ayodhya';
      let img = 'https://images.unsplash.com/photo-1706682229566-a36ccfe29864?auto=format&fit=crop&q=80&w=800';
      let description = 'A customized journey to the spiritual birthplace of Ram Mandir.';
      
      if (plannerFaith === 'Sikhism') {
        destination = 'Golden Temple';
        img = 'https://images.unsplash.com/photo-1588598126743-39d738ff9eb7?auto=format&fit=crop&q=80&w=800';
        description = 'Sikh Spiritual corridor focusing on Sewa and community dining.';
      } else if (plannerFaith === 'Buddhism') {
        destination = 'Bodh Gaya';
        img = 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&q=80&w=800';
        description = 'A mindfulness path tracing Gautama Buddha\'s steps under the Bodhi Tree.';
      }

      const generatedDays = Array.from({ length: plannerDuration }, (_, idx) => ({
        day: idx + 1,
        title: `Day ${idx + 1} - Devotional Path`,
        activities: {
          morning: 'Sunrise prayers, walking around holy courtyard borders.',
          afternoon: 'Sit and listen to ancient chants, enjoy Satvik lunch meals.',
          evening: 'Attend evening flame aarti and silent meditation.'
        }
      }));

      setCompiledItinerary({
        id: `sp-${Date.now()}`,
        destination,
        image: img,
        duration: plannerDuration,
        budgetType: plannerBudget,
        description,
        days: generatedDays
      });
      setIsGenerating(false);
    }, 1200);
  };

  const handleSaveSpiritualItinerary = () => {
    if (!compiledItinerary) return;
    saveItinerary(compiledItinerary);
    awardXp(500, `Planned Spiritual Path to ${compiledItinerary.destination}`);
    showToast(`Saved pilgrimage dossier. Unlocked 500 XP.`, 'success');
  };

  const getVirtualGuideSpeech = () => {
    if (activeAvatar === 'guru') {
      if (selectedWalkthrough === 'kedarnath') return "Kedarnath sits protected in the high Himalayas. Keep your thoughts clear and chant Om Namah Shivaya to align your inner rhythm.";
      return "Welcome seeker. Observe the temple geometry; it represents the structural channels of the cosmos. Calm your breath.";
    }
    if (selectedWalkthrough === 'kedarnath') return "Constructed in the 8th century using massive stone blocks locked with iron pins. The temple survives mountain freezes intact.";
    return "The historical spires trace back generations. Walk clockwise to observe the carvings of deities on the temple panels.";
  };

  const filteredDirDestinations = mockDestinations.filter(dest => {
    if (!dest.tags.includes('Spiritual')) return false;
    const matchesSearch = dest.name.toLowerCase().includes(dirSearch.toLowerCase()) || dest.description.toLowerCase().includes(dirSearch.toLowerCase());
    
    let matchesFaith = true;
    if (dirFaith !== 'All') {
      const text = (dest.name + ' ' + dest.description).toLowerCase();
      if (dirFaith === 'Hinduism') matchesFaith = text.includes('hindu') || text.includes('temple') || text.includes('mandir') || text.includes('varanasi') || text.includes('kedarnath') || text.includes('somnath');
      if (dirFaith === 'Sikhism') matchesFaith = text.includes('sikh') || text.includes('golden temple') || text.includes('gurudwara') || text.includes('amritsar');
      if (dirFaith === 'Buddhism') matchesFaith = text.includes('buddha') || text.includes('buddhist') || text.includes('bodhgaya') || text.includes('stupa');
    }
    return matchesSearch && matchesFaith;
  });

  return (
    <div className="py-4 text-left flex flex-col gap-8 w-full relative min-h-screen bg-[#0c0a09] text-amber-100/90 overflow-hidden px-4 sm:px-6">
      
      {/* Styles for Diya Flame and Floating Sparks */}
      <style>{`
        @keyframes flame-glow {
          0%, 100% { transform: scale(1) rotate(-1deg); opacity: 0.9; }
          50% { transform: scale(1.18) rotate(1deg); opacity: 1; filter: drop-shadow(0 0 6px #f59e0b); }
        }
        .animate-flame-pulse {
          animation: flame-glow 1.4s infinite ease-in-out;
          transform-origin: bottom center;
        }
        @keyframes float-particle {
          0% { transform: translateY(10px) translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-75px) translateX(12px); opacity: 0; }
        }
        .particle-dust {
          animation: float-particle 4.5s infinite linear;
        }
        .wood-texture {
          background-image: radial-gradient(circle at 50% 50%, rgba(120,53,15,0.06) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>

      {/* Floating particles */}
      <FloatingSparks />

      {/* Header Panel (Temple Silhouette styled in Warm Gold) */}
      <div className="relative overflow-hidden p-8 rounded-3xl bg-amber-950/15 border border-amber-500/25 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 wood-texture">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 text-xs font-mono font-bold mb-4">
            <Sparkles size={11} className="animate-pulse" />
            <span>SACRED KNOWLEDGE BASE</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-amber-400 mb-2 mt-0 tracking-tight flex items-center gap-2">
            Spiritual Sanctuary
            <span className="text-sm font-normal text-amber-500 font-mono hidden sm:inline">(Pavitra Operating System)</span>
          </h1>
          <p className="text-xs text-amber-200/70 max-w-md mt-0">
            A peaceful, dedicated space to trace pilgrimage trails, track holy stamps, and plan satvik journeys with the guidance of spiritual mentors.
          </p>
        </div>

        {/* Global Progress Widget (Diya styling) */}
        <div className="relative z-10 shrink-0 bg-amber-950/20 backdrop-blur-md border border-amber-500/20 rounded-2xl p-5 flex items-center gap-4 w-full md:w-60 shadow-lg">
          <DiyaLamp />
          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 block">Pilgrim Progress</span>
            <span className="text-base font-black text-amber-300 block">{visitedJyotirlingas.length} of 12 Shrines</span>
            <div className="w-24 h-1.5 bg-amber-950 rounded-full overflow-hidden mt-1.5 border border-amber-500/15">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: `${(visitedJyotirlingas.length/12)*100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs list with warm gold hover cues */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-2 pb-1.5 border-b border-amber-500/15 scrollbar-none">
        {[
          { id: 'directory', label: 'Spiritual Directory', icon: <Search size={14} /> },
          { id: 'map', label: 'Route Explorer Map', icon: <Map size={14} /> },
          { id: 'jyotirlinga', label: '12 Jyotirlinga Tracker', icon: <Award size={14} /> },
          { id: 'guides', label: 'Faith Guides', icon: <BookOpen size={14} /> },
          { id: 'planner', label: 'Spiritual Planner', icon: <Sparkles size={14} /> },
          { id: 'walkthrough', label: 'Virtual Chants', icon: <Camera size={14} /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border shrink-0 ${
              activeSubTab === tab.id
                ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-amber-400 border border-amber-500/10 hover:border-amber-500/25 bg-amber-950/10'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab bodies */}
      <div className="w-full text-xs">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: DIRECTORY */}
          {activeSubTab === 'directory' && (
            <motion.div
              key="directory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              {/* Filter controls */}
              <div className="bg-amber-950/10 border border-amber-500/15 p-5 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/60" size={14} />
                  <input
                    type="text"
                    placeholder="Search spiritual destinations..."
                    value={dirSearch}
                    onChange={(e) => setDirSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0c0a09] border border-amber-500/20 text-xs font-mono focus:outline-none focus:border-amber-400 text-amber-100"
                  />
                </div>
                <div className="flex items-center gap-2 bg-[#0c0a09] px-3.5 py-2 rounded-xl border border-amber-500/20">
                  <span className="text-[9px] font-mono uppercase text-amber-500">Faith:</span>
                  <select
                    value={dirFaith}
                    onChange={(e) => setDirFaith(e.target.value)}
                    className="bg-transparent text-xs text-amber-300 font-bold focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Shrines</option>
                    <option value="Hinduism">Hinduism</option>
                    <option value="Sikhism">Sikhism</option>
                    <option value="Buddhism">Buddhism</option>
                  </select>
                </div>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDirDestinations.map(dest => (
                  <div key={dest.id} className="group bg-[#130f0c] border border-amber-500/10 rounded-2xl overflow-hidden shadow-md hover:border-amber-500/30 transition-all flex flex-col justify-between">
                    <div className="relative h-44 overflow-hidden bg-slate-950">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    </div>
                    <div className="p-4 flex flex-col gap-3 text-left">
                      <div className="flex justify-between items-center">
                        <h4 className="font-display font-bold text-sm text-amber-200 mt-0">{dest.name}</h4>
                        <span className="text-amber-400 font-mono text-[10px] font-bold">★ {dest.rating}</span>
                      </div>
                      <p className="text-[10.5px] text-amber-200/60 leading-relaxed mt-0">{dest.description}</p>
                      <div className="border-t border-amber-500/10 pt-3 flex justify-between items-center">
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[8px] font-mono border border-amber-500/20">{dest.region}</span>
                        <Link to={`/destination/${dest.id}`} className="text-amber-400 font-mono text-[9px] font-bold hover:underline uppercase flex items-center gap-1">
                          Explore Dossier <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: ROUTE MAP */}
          {activeSubTab === 'map' && (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Antique scroll map display */}
              <div className="lg:col-span-8 bg-[#130f0c] border border-amber-500/15 p-5 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden min-h-[460px] shadow-2xl">
                <div className="absolute top-4 left-4 z-10 font-mono text-[9px] text-amber-500 uppercase tracking-widest flex items-center gap-2.5">
                  <Compass className="animate-spin-slow text-amber-400" size={13} />
                  <span>Antique Pilgrimage coordinates map</span>
                </div>
                
                {/* SVG India scroll map */}
                <svg viewBox="0 0 700 650" className="w-full max-w-[550px] h-auto text-amber-800 fill-none filter drop-shadow-[0_4px_12px_rgba(180,83,9,0.15)]">
                  {/* Dotted lines connect selected circuit */}
                  {CIRCUITS[selectedCircuit]?.nodes.map((nodeId, idx) => {
                    const curr = CIRCUIT_NODES.find(n => n.id === nodeId);
                    const nextNodeId = CIRCUITS[selectedCircuit].nodes[idx + 1] || CIRCUITS[selectedCircuit].nodes[0];
                    const next = CIRCUIT_NODES.find(n => n.id === nextNodeId);
                    if (!curr || !next) return null;
                    return (
                      <line
                        key={idx}
                        x1={curr.x}
                        y1={curr.y}
                        x2={next.x}
                        y2={next.y}
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                      />
                    );
                  })}

                  {/* Node points */}
                  {CIRCUIT_NODES.map((node) => {
                    const isSelectedCircuit = CIRCUITS[selectedCircuit]?.nodes.includes(node.id);
                    return (
                      <g
                        key={node.id}
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setHoveredNode(hoveredNode?.id === node.id ? null : node)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isSelectedCircuit ? 6 : 4}
                          fill={isSelectedCircuit ? '#fbbf24' : '#78350f'}
                          stroke={isSelectedCircuit ? '#d97706' : '#451a03'}
                          strokeWidth={isSelectedCircuit ? 2 : 1}
                        />
                        {isSelectedCircuit && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="11"
                            stroke="#fbbf24"
                            strokeWidth="1"
                            fill="transparent"
                            className="animate-ping opacity-30"
                          />
                        )}
                        <text
                          x={node.x + 8}
                          y={node.y + 4}
                          fill="#fcd34d"
                          fontSize="7"
                          fontFamily="monospace"
                          fontWeight="bold"
                          className="select-none pointer-events-none drop-shadow-md"
                        >
                          {node.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Floating Node metadata tooltips */}
                {hoveredNode && (
                  <div className="absolute bottom-4 right-4 bg-[#0c0a09]/95 border border-amber-500/20 p-3 rounded-xl font-mono text-[9px] text-left max-w-xs shadow-xl animate-fade-in">
                    <span className="text-amber-400 font-bold block">{hoveredNode.name}</span>
                    <span className="text-amber-500 block mt-0.5">{hoveredNode.state} • {hoveredNode.faith}</span>
                    <p className="text-slate-400 mt-1 leading-normal">{hoveredNode.desc}</p>
                  </div>
                )}
              </div>

              {/* Circuit options sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="bg-[#130f0c] border border-amber-500/15 p-5 rounded-3xl text-left flex flex-col gap-3">
                  <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">Select Active Circuit</span>
                  <div className="flex flex-col gap-2.5">
                    {Object.keys(CIRCUITS).map((key) => {
                      const circ = CIRCUITS[key];
                      const isSelected = selectedCircuit === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedCircuit(key)}
                          className={`p-3 rounded-xl text-left font-mono border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-md'
                              : 'bg-amber-950/5 border-amber-500/10 hover:border-amber-500/20 text-amber-200/70'
                          }`}
                        >
                          <span className="text-[10px] font-bold block">{circ.name}</span>
                          <span className="text-[8.5px] text-amber-600 block mt-0.5">{circ.nodes.length} Key Shrines</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-[#130f0c] border border-amber-500/15 p-5 rounded-3xl text-left flex-1 font-mono leading-relaxed">
                  <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold block mb-2.5">Circuit Intel</span>
                  <p className="text-[10px] text-amber-200/75">{CIRCUITS[selectedCircuit]?.desc}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-[8.5px] text-slate-500 uppercase font-black block">Shrines included:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {CIRCUITS[selectedCircuit]?.nodes.map(nodeId => {
                        const name = CIRCUIT_NODES.find(n => n.id === nodeId)?.name || nodeId;
                        return (
                          <span key={nodeId} className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/25 rounded-md text-[8.5px] text-amber-400 font-bold uppercase">
                            {name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: JYOTIRLINGA PROGRESS */}
          {activeSubTab === 'jyotirlinga' && (
            <motion.div
              key="jyotirlinga"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-amber-950/10 border border-amber-500/15 p-5 rounded-2xl text-left">
                <div>
                  <h4 className="font-display font-black text-sm text-amber-200 mt-0">12 Jyotirlinga Mahapilgrimage Log</h4>
                  <p className="text-[10px] text-amber-200/70 mt-1 max-w-md">Seek blessings across the twelve light-form shrines of Shiva. Log your visits to earn seals and print your certified pilgrimage dossier.</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setVisitedJyotirlingas(JYOTIRLINGAS.map(j => j.name))} className="px-3.5 py-1.5 border border-amber-500/25 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold rounded-xl transition-all cursor-pointer font-mono">COMPLETE ALL</button>
                  <button onClick={() => setVisitedJyotirlingas([])} className="px-3.5 py-1.5 border border-red-500/25 bg-red-500/5 hover:bg-red-500/10 text-red-400 font-bold rounded-xl transition-all cursor-pointer font-mono">CLEAR ALL</button>
                </div>
              </div>

              {/* Shrines progress grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {JYOTIRLINGAS.map((j) => {
                  const isVisited = visitedJyotirlingas.includes(j.name);
                  return (
                    <button
                      key={j.name}
                      onClick={() => handleToggleJyotirlinga(j.name)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer min-h-[110px] ${
                        isVisited
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-[0_0_12px_rgba(217,119,6,0.15)]'
                          : 'bg-[#130f0c] border-amber-500/10 hover:border-amber-500/25 text-amber-200/50'
                      }`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <span className="font-mono text-[10px] font-bold">{j.name}</span>
                        <span className="text-xs">{isVisited ? '🔱' : '◯'}</span>
                      </div>
                      <span className="text-[8.5px] text-slate-500 block mt-2 font-mono">{j.location}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 4: GUIDES */}
          {activeSubTab === 'guides' && (
            <motion.div
              key="guides"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {FAITHS.map((faith) => (
                <div key={faith.name} className="bg-[#130f0c] border border-amber-500/15 p-6 rounded-3xl text-left flex flex-col gap-4 shadow-xl">
                  <div className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                    <h4 className="font-display font-black text-sm text-amber-300 mt-0">{faith.name}</h4>
                    <span className="text-[9px] font-mono text-amber-550 uppercase font-black">{faith.timings}</span>
                  </div>
                  <div className="flex flex-col gap-3 font-mono text-[9.5px] leading-relaxed text-amber-200/80">
                    <div>
                      <span className="text-amber-500 font-bold uppercase block text-[8px] tracking-wider">Focus Areas:</span>
                      <p className="mt-0.5">{faith.focus}</p>
                    </div>
                    <div>
                      <span className="text-amber-500 font-bold uppercase block text-[8px] tracking-wider">Satvik Dining:</span>
                      <p className="mt-0.5">{faith.food}</p>
                    </div>
                    <div>
                      <span className="text-amber-500 font-bold uppercase block text-[8px] tracking-wider">Dress Expectations:</span>
                      <p className="mt-0.5">{faith.etiquette}</p>
                    </div>
                    <div>
                      <span className="text-amber-500 font-bold uppercase block text-[8px] tracking-wider">Architecture Style:</span>
                      <p className="mt-0.5">{faith.architecture}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 5: PLANNER */}
          {activeSubTab === 'planner' && (
            <motion.div
              key="planner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Form card */}
              <div className="lg:col-span-4 bg-[#130f0c] border border-amber-500/15 p-5 rounded-3xl text-left flex flex-col gap-4">
                <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-black">Configure Pilgrim path</span>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono text-amber-500 font-bold uppercase">Spiritual Tradition</label>
                  <select
                    value={plannerFaith}
                    onChange={(e) => setPlannerFaith(e.target.value)}
                    className="p-2.5 rounded-xl bg-[#0c0a09] border border-amber-500/20 text-xs font-mono text-amber-100 cursor-pointer"
                  >
                    <option value="Hinduism">Hinduism</option>
                    <option value="Sikhism">Sikhism</option>
                    <option value="Buddhism">Buddhism</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono text-amber-500 font-bold uppercase">Duration (Days)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={plannerDuration}
                    onChange={(e) => setPlannerDuration(parseInt(e.target.value) || 3)}
                    className="p-2.5 rounded-xl bg-[#0c0a09] border border-amber-500/20 text-xs font-mono text-amber-100"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono text-amber-500 font-bold uppercase">Lodging Budget Type</label>
                  <select
                    value={plannerBudget}
                    onChange={(e) => setPlannerBudget(e.target.value)}
                    className="p-2.5 rounded-xl bg-[#0c0a09] border border-amber-500/20 text-xs font-mono text-amber-100 cursor-pointer"
                  >
                    <option value="Ashram Devotion">Ashram Devotion</option>
                    <option value="Comfortable Dharamshala">Comfortable Dharamshala</option>
                    <option value="Zen Luxury Retreat">Zen Luxury Retreat</option>
                  </select>
                </div>

                <button
                  onClick={handleCompileSpiritualPath}
                  disabled={isGenerating}
                  className="py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer mt-2"
                >
                  {isGenerating ? 'Compiling karmic path...' : 'COMPILE SPIRITUAL PATH'}
                </button>
              </div>

              {/* Output screen */}
              <div className="lg:col-span-8 bg-[#130f0c] border border-amber-500/15 p-6 rounded-3xl flex flex-col justify-center min-h-[400px]">
                {isGenerating && (
                  <div className="flex flex-col items-center gap-4 text-center font-mono text-[9.5px] text-amber-400">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-amber-500/10 border-t-amber-400 animate-spin" />
                      <DiyaLamp />
                    </div>
                    <span className="uppercase tracking-widest animate-pulse">ALIGINING VEDIC ASTRO-ROUTING MATRICES...</span>
                  </div>
                )}

                {!isGenerating && !compiledItinerary && (
                  <div className="flex flex-col items-center gap-2 text-center text-slate-500 py-12">
                    <Sparkles className="text-amber-500/40 animate-pulse" size={24} />
                    <p className="font-mono text-[10px] text-amber-500/50">Plan your pilgrimage corridor above to render the timeline.</p>
                  </div>
                )}

                {!isGenerating && compiledItinerary && (
                  <div className="flex flex-col gap-5 text-left font-mono">
                    <div className="flex justify-between items-start border-b border-amber-500/10 pb-3">
                      <div>
                        <span className="text-[8px] text-amber-500 font-bold uppercase block">Planned Route</span>
                        <h4 className="font-display font-black text-base text-amber-300 mt-0.5">{compiledItinerary.destination}</h4>
                      </div>
                      <button onClick={handleSaveSpiritualItinerary} className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/25 hover:bg-amber-500/20 text-amber-400 font-bold rounded-lg text-[9px] uppercase cursor-pointer">Save Path</button>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-4 pl-3 relative border-l border-amber-500/20 py-1.5 ml-2.5">
                      {compiledItinerary.days.map(day => (
                        <div key={day.day} className="relative flex flex-col gap-1 text-[10px]">
                          {/* Dotted indicator */}
                          <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-amber-500 border border-amber-400 shadow-[0_0_5px_#f59e0b]" />
                          <span className="font-bold text-amber-300 block">{day.title}</span>
                          <div className="flex flex-col gap-1.5 text-amber-200/70 leading-relaxed text-[9px] pl-1">
                            <p className="m-0"><span className="text-amber-500 font-bold uppercase">🌅 Morning:</span> {day.activities.morning}</p>
                            <p className="m-0"><span className="text-amber-550 font-bold uppercase">🕌 Afternoon:</span> {day.activities.afternoon}</p>
                            <p className="m-0"><span className="text-amber-550 font-bold uppercase">🔥 Evening:</span> {day.activities.evening}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 6: VIRTUAL CHANTS (Audio Guide) */}
          {activeSubTab === 'walkthrough' && (
            <motion.div
              key="walkthrough"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Virtual guide select */}
              <div className="lg:col-span-4 bg-[#130f0c] border border-amber-500/15 p-5 rounded-3xl text-left flex flex-col gap-4">
                <span className="text-[9px] font-mono text-amber-550 uppercase tracking-widest font-black">Virtual Guides</span>
                
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'guru', name: 'Acharya Shankara', role: 'Spiritual Mentor', avatar: '🕉️' },
                    { id: 'guide', name: 'Kabir Das', role: 'Temple Architect', avatar: '🏛️' }
                  ].map(av => {
                    const isSelected = activeAvatar === av.id;
                    return (
                      <button
                        key={av.id}
                        onClick={() => setActiveAvatar(av.id)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-md'
                            : 'bg-amber-950/5 border-amber-500/10 hover:border-amber-500/20 text-amber-250/60'
                        }`}
                      >
                        <span className="text-xl shrink-0">{av.avatar}</span>
                        <div>
                          <span className="text-[10px] font-mono font-bold block">{av.name}</span>
                          <span className="text-[8px] font-mono text-amber-500 block">{av.role}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="border-t border-amber-500/10 pt-4 flex flex-col gap-2">
                  <span className="text-[8.5px] font-mono text-slate-500 uppercase font-black">Choose Sanctuary</span>
                  <select
                    value={selectedWalkthrough}
                    onChange={(e) => setSelectedWalkthrough(e.target.value)}
                    className="p-2.5 rounded-xl bg-[#0c0a09] border border-amber-500/20 text-xs font-mono text-amber-100 cursor-pointer"
                  >
                    <option value="kedarnath">Kedarnath Shrine</option>
                    <option value="varanasi">Kashi Ghats</option>
                  </select>
                </div>
              </div>

              {/* Audio controller display */}
              <div className="lg:col-span-8 bg-[#130f0c] border border-amber-500/15 p-6 rounded-3xl flex flex-col justify-between min-h-[300px]">
                
                {/* Audio waves visual */}
                <div className="w-full flex-1 flex flex-col items-center justify-center gap-6">
                  {isPlayingAudio ? (
                    <div className="flex gap-1.5 items-end h-10 justify-center">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-amber-400 rounded-full animate-pulse"
                          style={{
                            height: `${30 + Math.random() * 70}%`,
                            animationDelay: `${i * 0.08}s`,
                            animationDuration: `${0.5 + Math.random() * 0.6}s`
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-1.5 items-end h-10 justify-center opacity-20">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-1 bg-amber-400 rounded-full h-2" />
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col items-center gap-1.5 font-mono text-[9px] text-amber-500 uppercase">
                    <span className="font-bold text-amber-300">{selectedWalkthrough.toUpperCase()} CHANT CHANNEL</span>
                    <span>Status: {isPlayingAudio ? 'BROADCASTING CHANTS' : 'CHANNEL MUTED'}</span>
                  </div>
                </div>

                {/* Guide speech transcript */}
                <div className="bg-[#0c0a09]/60 border border-amber-500/15 p-4 rounded-2xl text-[10px] text-amber-200/80 font-mono leading-relaxed flex gap-3 text-left">
                  <span className="text-lg shrink-0 mt-0.5">💬</span>
                  <p className="m-0">{getVirtualGuideSpeech()}</p>
                </div>

                {/* Player button bar */}
                <div className="border-t border-amber-500/10 pt-4 flex items-center justify-between mt-4">
                  <span className="text-[8.5px] font-mono text-slate-500 uppercase">Satvik audio node v.1</span>
                  <button
                    onClick={() => {
                      setIsPlayingAudio(!isPlayingAudio);
                      showToast(isPlayingAudio ? 'Audio chants muted.' : 'Broadcasting virtual guides.', 'success');
                    }}
                    className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-[9.5px] uppercase font-mono tracking-wider flex items-center gap-1.5 transition-transform hover:scale-102 cursor-pointer"
                  >
                    {isPlayingAudio ? <Pause size={12} /> : <Play size={12} />}
                    {isPlayingAudio ? 'PAUSE CHANT' : 'PLAY CHANT'}
                  </button>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
};
