import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Compass, Heart, Sparkles, Map, Landmark, Clock, ChevronRight, CheckCircle, ShieldAlert, Star, Coffee, UtensilsCrossed } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Challenges = () => {
  const { userLevel, userXp, awardXp, showToast, achievements, itineraries, wishlist } = useApp();
  const [activeTab, setActiveTab] = useState('passport'); // passport, goals, food

  // Food Passport State
  const [dietaryPref, setDietaryPref] = useState(() => {
    return localStorage.getItem('tv_dietary_pref') || 'All';
  });
  
  const [triedFoods, setTriedFoods] = useState(() => {
    const saved = localStorage.getItem('tv_tried_foods');
    return saved ? JSON.parse(saved) : ['Cardamom Tea'];
  });

  // Selected Roadmap Goal State
  const [activeRoadmap, setActiveRoadmap] = useState(() => {
    return localStorage.getItem('tv_active_roadmap') || 'UNESCO Heritage Quest';
  });

  // Stamp descriptions
  const stampDetails = {
    'Agra': '🕌 Taj Mahal Heritage Stamp // Unlocked',
    'Delhi': '🏛️ Red Fort Historic Capital Stamp // Unlocked',
    'Munnar': '🌿 Tea Plantation Wilderness Stamp',
    'Kashmir': '🏔️ Dal Lake Paradise Stamp',
    'Ladakh': '🏍️ Khardung La Pass Altitude Stamp',
    'Kyoto': '⛩️ Fushimi Inari Shrine Stamp',
    'Tromso': '🌌 Arctic Northern Lights Stamp',
    'Goa': '🏖️ Coastal Sun & Surf Stamp'
  };

  const unlockedStampsList = ['Agra', 'Delhi'];
  if (itineraries.some(i => i.destination.toLowerCase().includes('munnar'))) unlockedStampsList.push('Munnar');
  if (itineraries.some(i => i.destination.toLowerCase().includes('kashmir'))) unlockedStampsList.push('Kashmir');
  if (itineraries.some(i => i.destination.toLowerCase().includes('ladakh'))) unlockedStampsList.push('Ladakh');
  if (wishlist.destinations.some(d => d.name === 'Kyoto') || itineraries.some(i => i.destination.toLowerCase().includes('kyoto'))) unlockedStampsList.push('Kyoto');
  if (itineraries.some(i => i.destination.toLowerCase().includes('goa'))) unlockedStampsList.push('Goa');

  // Food Items List
  const foodItems = [
    { name: 'Cardamom Tea', region: 'Munnar, India', type: 'Veg', category: 'Beverage', icon: '☕' },
    { name: 'Chole Bhature', region: 'Delhi, India', type: 'Veg', category: 'Street Food', icon: '🍛' },
    { name: 'Vada Pav', region: 'Mumbai, India', type: 'Jain/Veg', category: 'Street Food', icon: '🍔' },
    { name: 'Dal Baati Churma', region: 'Jaipur, India', type: 'Veg', category: 'Traditional', icon: '🍲' },
    { name: 'Sushi & Tempura', region: 'Kyoto, Japan', type: 'Non-Veg', category: 'Fine Dining', icon: '🍣' },
    { name: 'Traditional Waffles', region: 'Brussels, Belgium', type: 'Veg', category: 'Dessert', icon: '🧇' },
    { name: 'Gelato Artigianale', region: 'Rome, Italy', type: 'Veg', category: 'Dessert', icon: '🍨' },
    { name: 'Croissant & Cafe', region: 'Paris, France', type: 'Veg', category: 'Breakfast', icon: '🥐' },
    { name: 'Dim Sum Dumplings', region: 'Hong Kong', type: 'Non-Veg', category: 'Fine Dining', icon: '🥟' }
  ];

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('tv_dietary_pref', dietaryPref);
  }, [dietaryPref]);

  useEffect(() => {
    localStorage.setItem('tv_tried_foods', JSON.stringify(triedFoods));
  }, [triedFoods]);

  useEffect(() => {
    localStorage.setItem('tv_active_roadmap', activeRoadmap);
  }, [activeRoadmap]);

  // Determine Explorer Rank based on Level
  const getExplorerRank = (level) => {
    if (level === 1) return 'Traveler';
    if (level <= 3) return 'Voyage Explorer';
    if (level <= 5) return 'Galactic Adventurer';
    if (level <= 7) return 'Cyber Pathfinder';
    if (level <= 9) return 'Horizon Voyager';
    return 'Planetary Legend';
  };

  const currentRank = getExplorerRank(userLevel);
  const nextLevelXp = userLevel * 1000;
  const xpPercent = Math.min(100, (userXp / nextLevelXp) * 100);

  // Toggle food tried status
  const handleToggleFood = (foodName) => {
    if (triedFoods.includes(foodName)) {
      setTriedFoods(triedFoods.filter(f => f !== foodName));
    } else {
      setTriedFoods([...triedFoods, foodName]);
      awardXp(50, `Tried Culinary Specialty: ${foodName}`);
      showToast(`Cuisine logged: Unlocked 50 XP!`, 'success');
    }
  };

  // Filter foods by dietary setting
  const filteredFoods = foodItems.filter(f => {
    if (dietaryPref === 'All') return true;
    if (dietaryPref === 'Jain') return f.type === 'Jain/Veg';
    if (dietaryPref === 'Veg') return f.type === 'Veg' || f.type === 'Jain/Veg';
    if (dietaryPref === 'Non-Veg') return true;
    return true;
  });

  // Roadmap Nodes config
  const roadmapsData = {
    'UNESCO Heritage Quest': [
      { id: 'u1', label: 'Taj Mahal, India', status: unlockedStampsList.includes('Agra') ? 'unlocked' : 'locked', desc: 'Visit the epitome of love in Agra.' },
      { id: 'u2', label: 'Colosseum, Italy', status: 'locked', desc: 'Explore the Roman amphitheater.' },
      { id: 'u3', label: 'Great Wall, China', status: 'locked', desc: 'Hike the ancient defensive barricade.' },
      { id: 'u4', label: 'Machu Picchu, Peru', status: 'locked', desc: 'Uncover the lost Inca citadel in the Andes.' }
    ],
    'All-India Odyssey': [
      { id: 'i1', label: 'Agra Fort, UP', status: 'unlocked', desc: 'Explore the grand red sandstone citadel.' },
      { id: 'i2', label: 'Munnar Hills, Kerala', status: unlockedStampsList.includes('Munnar') ? 'unlocked' : 'locked', desc: 'Trace tea plantations and waterfalls.' },
      { id: 'i3', label: 'Hawa Mahal, Jaipur', status: 'locked', desc: 'See the ornate honeycombed facade.' },
      { id: 'i4', label: 'Khardung La, Ladakh', status: unlockedStampsList.includes('Ladakh') ? 'unlocked' : 'locked', desc: 'Scale the highest motorable corridor.' }
    ],
    'G20 Countries Tour': [
      { id: 'g1', label: 'Tokyo-Kyoto, Japan', status: unlockedStampsList.includes('Kyoto') ? 'unlocked' : 'locked', desc: 'Wander neon streets and ancient temples.' },
      { id: 'g2', label: 'Paris, France', status: 'locked', desc: 'Climb the Eiffel Tower.' },
      { id: 'g3', label: 'London, UK', status: 'locked', desc: 'Cross Westminster Bridge.' },
      { id: 'g4', label: 'Sydney, Australia', status: 'locked', desc: 'Sail past the Opera House.' }
    ]
  };

  return (
    <div className="py-4 text-left flex flex-col gap-8 w-full">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Explorer Passport & Challenges
          <span className="text-teal-500 text-base font-normal font-sans block mt-1.5">
            Level {userLevel} Core // {currentRank}
          </span>
        </h1>
      </div>

      {/* Profile XP Header Stats Card */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-teal-500/10 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 grid-cyber opacity-20 pointer-events-none" />
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-indigo-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-teal-500/10 select-none">
            🚀
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-widest block">TELEMETRY LEVEL OVERVIEW</span>
            <h2 className="text-xl font-display font-black text-white mt-0.5 mb-1">{currentRank}</h2>
            <p className="text-xs text-slate-400 font-semibold font-mono">Rank ID: TV-OS-{userLevel * 379}</p>
          </div>
        </div>

        {/* XP Progress bar */}
        <div className="flex-1 max-w-md w-full flex flex-col gap-1.5 relative z-10">
          <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
            <span>EXP PROGRESS: {userXp} / {nextLevelXp} XP</span>
            <span className="text-teal-400">{Math.round(xpPercent)}%</span>
          </div>
          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-white/5 p-0.5">
            <div className="h-full bg-gradient-to-r from-teal-500 to-sky-400 rounded-full transition-all duration-500" style={{ width: `${xpPercent}%` }} />
          </div>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex border-b border-slate-200/20 dark:border-teal-500/10 overflow-x-auto gap-2 py-1 scrollbar-thin relative z-10 w-full">
        {[
          { id: 'passport', label: '🎫 Explorer Passport & Stamps' },
          { id: 'goals', label: '🎯 Life Goals & Roadmaps' },
          { id: 'food', label: '🍛 Global Food Passport' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 rounded-t-xl text-[11px] font-bold font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab.id 
                ? 'border-b-2 border-teal-500 text-teal-605 dark:text-teal-400 bg-teal-500/5' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="w-full">
        
        {/* TAB 1: Explorer Passport & Stamps */}
        {activeTab === 'passport' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full text-xs">
            
            {/* Stamp Album (2 Columns) */}
            <div className="lg:col-span-2 flex flex-col gap-6 text-left">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm">
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1 flex items-center gap-1.5">
                  <Landmark size={14} className="text-teal-400" /> Digital Passport Stamps Album
                </h4>
                <p className="text-[11px] text-slate-500 mb-6">Stamps are automatically awarded and stamped into your ledger when you plan or wishlist trips to destinations.</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {Object.keys(stampDetails).map(stamp => {
                    const isUnlocked = unlockedStampsList.includes(stamp);
                    return (
                      <div 
                        key={stamp} 
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${
                          isUnlocked 
                            ? 'bg-slate-950/40 border-teal-500/20 hover:border-teal-500/40 shadow-md scale-[1.02]' 
                            : 'bg-slate-950/5 border-dashed border-white/5 opacity-40'
                        }`}
                      >
                        {/* Stamp Circle */}
                        <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-2xl relative font-display font-black tracking-tighter ${
                          isUnlocked 
                            ? 'border-teal-400/35 text-teal-400 bg-teal-500/5 rotate-[-12deg] shadow-lg animate-pulse duration-4000' 
                            : 'border-slate-800 text-slate-655'
                        }`}>
                          {stamp.slice(0, 3).toUpperCase()}
                          {isUnlocked && (
                            <span className="absolute inset-0 border border-teal-500/10 rounded-full m-1" />
                          )}
                        </div>
                        <span className="mt-2.5 font-bold font-mono text-[10px] text-slate-400 dark:text-slate-300">{stamp}</span>
                        <span className="text-[8px] font-mono text-slate-500 mt-1 uppercase text-center block max-w-full truncate">
                          {isUnlocked ? 'UNLOCKED' : 'LOCKED'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievements Logs */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm">
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1">Explorer Milestones & Badges</h4>
                <p className="text-[11px] text-slate-500 mb-4">Complete achievements to earn core XP bonuses and advance your explorer rank.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((ach) => (
                    <div 
                      key={ach.id} 
                      className={`p-3 rounded-2xl border flex gap-3 items-center text-left transition-all ${
                        ach.unlocked 
                          ? 'bg-slate-950/40 border-teal-500/15 shadow' 
                          : 'bg-slate-950/10 border-white/5 opacity-50'
                      }`}
                    >
                      <span className="text-2xl p-1 bg-slate-900 rounded-xl border border-white/5 select-none">{ach.icon}</span>
                      <div className="min-w-0 flex-1">
                        <span className={`font-bold text-xs block ${ach.unlocked ? 'text-white' : 'text-slate-400'}`}>{ach.title}</span>
                        <span className="text-[9.5px] text-slate-500 leading-normal block">{ach.description}</span>
                      </div>
                      <span className="font-mono text-[9px] font-bold text-teal-400">
                        {ach.unlocked ? '✓ UNLOCKED' : 'LOCKED'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Passport Telemetry logs */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm text-left flex flex-col gap-4">
              <div>
                <span className="text-[9px] font-mono font-bold text-teal-400 uppercase tracking-widest block">PASSPORT SECURITY Telemetry</span>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Custom Explorer Passport</h4>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 flex flex-col gap-3 font-mono text-[10.5px]">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-450">EXPLORER LEVEL</span>
                  <span className="text-white font-bold">{userLevel}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-455">ACTIVE RANK</span>
                  <span className="text-teal-400 font-bold uppercase">{currentRank}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-455">STAMPS UNLOCKED</span>
                  <span className="text-white font-bold">{unlockedStampsList.length} STAMPS</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-455">TRIPS LOGGED</span>
                  <span className="text-white font-bold">{itineraries.length} PLANNED</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-455">WISHLIST SPOTS</span>
                  <span className="text-white font-bold">
                    {wishlist.destinations.length + wishlist.hotels.length + wishlist.flights.length} SAVED
                  </span>
                </div>
              </div>

              <div className="p-4 bg-teal-500/5 border border-teal-500/10 rounded-2xl flex gap-2.5 items-start">
                <ShieldAlert size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <p className="text-[10px] text-teal-300 leading-relaxed font-semibold">
                  **Atlas AI System**: Passport rankings are calculated and compiled on-chain in your browser. Complete challenges to increase levels and unlock new holographic options.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Life Goals & Roadmaps */}
        {activeTab === 'goals' && (
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm text-left flex flex-col gap-6">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1 flex items-center gap-1.5">
                  <Star size={14} className="text-teal-400" /> Life Goals Travel Roadmaps
                </h4>
                <p className="text-[11px] text-slate-500">Pick a multi-year travel roadmap and trace your node progress toward completing your bucket list.</p>
              </div>

              {/* Selector */}
              <div className="flex gap-2">
                {Object.keys(roadmapsData).map(mapName => (
                  <button
                    key={mapName} onClick={() => setActiveRoadmap(mapName)}
                    className={`px-3 py-1.5 rounded-xl border text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      activeRoadmap === mapName ? 'bg-teal-500/15 border-teal-500 text-teal-400' : 'bg-slate-950 border-white/5 text-slate-500 hover:border-slate-800'
                    }`}
                  >
                    {mapName}
                  </button>
                ))}
              </div>
            </div>

            {/* Roadmap Visual Nodes (Connected Line) */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 flex flex-col md:flex-row gap-6 items-center justify-around relative">
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-white/5 hidden md:block" />
              
              {roadmapsData[activeRoadmap].map((node, idx) => {
                const isUnlocked = node.status === 'unlocked';
                return (
                  <div key={node.id} className="flex flex-col items-center text-center relative z-10 w-full max-w-[160px] group">
                    {/* Circle Node */}
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 shadow-md ${
                      isUnlocked 
                        ? 'bg-teal-950/80 border-teal-400 text-teal-400 shadow-teal-500/10' 
                        : 'bg-slate-900 border-white/10 text-slate-655'
                    }`}>
                      0{idx + 1}
                    </div>

                    <span className={`mt-3 font-bold text-[11px] block transition-colors ${isUnlocked ? 'text-white' : 'text-slate-500'}`}>
                      {node.label}
                    </span>
                    <span className="text-[9px] text-slate-500 mt-1 font-semibold leading-normal">
                      {node.desc}
                    </span>

                    <span className={`mt-2 px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider font-bold ${
                      isUnlocked ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-slate-900 text-slate-650'
                    }`}>
                      {isUnlocked ? 'unlocked' : 'locked'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: Global Food Passport */}
        {activeTab === 'food' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full text-xs">
            
            {/* Foods grid checklist (2 Columns) */}
            <div className="lg:col-span-2 flex flex-col gap-6 text-left">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1 flex items-center gap-1.5">
                      <Coffee size={14} className="text-teal-400" /> Global Cuisine Passport
                    </h4>
                    <p className="text-[11px] text-slate-500">Track and check off regional specialties you have experienced to log your culinary achievements.</p>
                  </div>

                  {/* Dietary selector */}
                  <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-white/5 font-mono text-[9px] font-bold text-slate-500">
                    <span className="px-2 text-teal-450">DIET:</span>
                    {['All', 'Veg', 'Jain', 'Non-Veg'].map(opt => (
                      <button
                        key={opt} onClick={() => setDietaryPref(opt)}
                        className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                          dietaryPref === opt ? 'bg-slate-800 text-white font-bold' : 'hover:bg-slate-900'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {filteredFoods.map((food) => {
                    const isTried = triedFoods.includes(food.name);
                    return (
                      <div 
                        key={food.name} 
                        onClick={() => handleToggleFood(food.name)}
                        className={`p-3.5 rounded-2xl border flex flex-col items-center text-center cursor-pointer transition-all hover:scale-[1.03] ${
                          isTried 
                            ? 'bg-emerald-950/30 border-emerald-500/20 shadow-md shadow-emerald-500/5' 
                            : 'bg-slate-950/20 border-white/5 hover:border-slate-800'
                        }`}
                      >
                        <span className="text-3xl mb-2 select-none">{food.icon}</span>
                        <span className={`font-bold text-xs ${isTried ? 'text-white' : 'text-slate-400'}`}>{food.name}</span>
                        <span className="text-[9px] text-slate-500 mt-1 font-semibold">{food.region}</span>
                        <span className="text-[8.5px] font-mono text-slate-450 mt-2 px-2 py-0.5 bg-slate-950 border border-white/5 rounded-full">
                          {food.category} • {food.type}
                        </span>
                        
                        <div className="mt-3.5 flex items-center gap-1">
                          <CheckCircle size={11} className={isTried ? 'text-emerald-400' : 'text-slate-700'} />
                          <span className={`font-mono text-[8px] font-bold uppercase ${isTried ? 'text-emerald-400' : 'text-slate-650'}`}>
                            {isTried ? 'TRIED & LOGGED' : 'MARK AS TRIED'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side Board: Food Passport stats */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm text-left flex flex-col gap-5">
              <div>
                <span className="text-[9px] font-mono font-bold text-teal-400 uppercase tracking-widest block">CULINARY STATS LEDGER</span>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Food Passport Details</h4>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 flex flex-col gap-3 font-mono text-[10.5px]">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-450">DIETARY PROFILE</span>
                  <span className="text-teal-400 font-bold uppercase">{dietaryPref}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-455">DISHES EXPERIENCED</span>
                  <span className="text-white font-bold">{triedFoods.length} TRIED</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-455">FOOD BADGES UNLOCKED</span>
                  <span className="text-white font-bold">
                    {triedFoods.length >= 3 ? '2 BADGES' : (triedFoods.length > 0 ? '1 BADGE' : '0 BADGES')}
                  </span>
                </div>
              </div>

              {/* Culinary Badges */}
              <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
                <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase tracking-wider block">Culinary Badges Unlocked</span>
                
                <div className="flex flex-col gap-2">
                  <div className={`p-2.5 rounded-xl border flex gap-3 items-center text-left ${
                    triedFoods.length > 0 ? 'bg-emerald-950/20 border-emerald-500/20 text-white' : 'bg-slate-950/10 border-white/5 opacity-40'
                  }`}>
                    <span className="text-xl">🍵</span>
                    <div>
                      <span className="font-bold text-[11px] block">Beverage Voyager</span>
                      <span className="text-[8px] text-slate-500 leading-tight block">Logged cardamom tea or beverage trails.</span>
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border flex gap-3 items-center text-left ${
                    triedFoods.length >= 3 ? 'bg-emerald-950/20 border-emerald-500/20 text-white' : 'bg-slate-950/10 border-white/5 opacity-40'
                  }`}>
                    <span className="text-xl">🌶️</span>
                    <div>
                      <span className="font-bold text-[11px] block">Street Food Connoisseur</span>
                      <span className="text-[8px] text-slate-500 leading-tight block">Log 3 or more local street foods on-chain.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
