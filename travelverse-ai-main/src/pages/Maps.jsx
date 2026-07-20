import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, MapPin, Compass, Navigation, Heart, Calendar, Sparkles, ChevronRight, X, Plus, Image, Eye, Award, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';

export const Maps = () => {
  const { mapMarkers, setMapMarkers, toggleWishlist, isInWishlist, awardXp, showToast } = useApp();
  const [selectedPin, setSelectedPin] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Layers Toggles
  const [showPredefined, setShowPredefined] = useState(true);
  const [showVisited, setShowVisited] = useState(true);
  const [showDream, setShowDream] = useState(true);
  const [showMemories, setShowMemories] = useState(true);
  const [showRoutes, setShowRoutes] = useState(true);

  // Custom Pin Form
  const [newPinName, setNewPinName] = useState('');
  const [newPinLat, setNewPinLat] = useState('');
  const [newPinLon, setNewPinLon] = useState('');
  const [newPinType, setNewPinType] = useState('visited'); // visited, dream, memory
  const [newPinNotes, setNewPinNotes] = useState('');
  const [newPinImage, setNewPinImage] = useState('');

  // Route Linker
  const [routeStartId, setRouteStartId] = useState('');
  const [routeEndId, setRouteEndId] = useState('');
  const [drawnRoutes, setDrawnRoutes] = useState(() => {
    const saved = localStorage.getItem('tv_drawn_routes');
    return saved ? JSON.parse(saved) : [
      { id: 'r1', startName: 'Agra, India', endName: 'Kyoto, Japan', startCoords: { x: 64, y: 31 }, endCoords: { x: 70, y: 30 } }
    ];
  });

  // Gamification Trackers (World Challenges)
  const [visitedStates, setVisitedStates] = useState(() => {
    const saved = localStorage.getItem('tv_visited_states');
    return saved ? JSON.parse(saved) : ['Delhi', 'Gujarat', 'Uttar Pradesh'];
  });
  
  const [visitedWonders, setVisitedWonders] = useState(() => {
    const saved = localStorage.getItem('tv_visited_wonders');
    return saved ? JSON.parse(saved) : ['Taj Mahal'];
  });

  const [visitedG20, setVisitedG20] = useState(() => {
    const saved = localStorage.getItem('tv_visited_g20');
    return saved ? JSON.parse(saved) : ['India', 'Japan'];
  });

  useEffect(() => {
    localStorage.setItem('tv_drawn_routes', JSON.stringify(drawnRoutes));
  }, [drawnRoutes]);

  useEffect(() => {
    localStorage.setItem('tv_visited_states', JSON.stringify(visitedStates));
  }, [visitedStates]);

  useEffect(() => {
    localStorage.setItem('tv_visited_wonders', JSON.stringify(visitedWonders));
  }, [visitedWonders]);

  useEffect(() => {
    localStorage.setItem('tv_visited_g20', JSON.stringify(visitedG20));
  }, [visitedG20]);

  // Coordinate Conversion (Mercator approximation scaled for the SVG viewbox)
  const convertCoords = (lat, lon) => {
    // Delhi reference: x: 64%, y: 31% corresponds to lat: 28.6139, lon: 77.2090
    const x = 64 + (parseFloat(lon) - 77.2090) * 0.17;
    const y = 31 - (parseFloat(lat) - 28.6139) * 0.22;
    return {
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(5, Math.min(95, y))
    };
  };

  // Compile all pin markers (predefined + custom user-dropped ones)
  const allPins = [
    ...(showPredefined ? mockDestinations.map(d => ({
      id: `pre-${d.id}`,
      name: d.name,
      country: d.country,
      type: 'predefined',
      coords: { lat: d.coordinates.y, lon: d.coordinates.x }, // store mapped values
      pxCoords: d.coordinates, // directly use original percentages
      notes: d.description,
      image: d.image,
      region: d.region
    })) : []),
    ...mapMarkers.map(m => {
      const px = convertCoords(m.coords.lat, m.coords.lon);
      return {
        id: m.id,
        name: m.name,
        country: m.name.includes(',') ? m.name.split(',')[1].trim() : 'Explorer Target',
        type: m.type, // visited, dream, memory
        coords: m.coords,
        pxCoords: px,
        notes: m.notes || 'Custom cached coordinate location.',
        image: m.media && m.media[0] ? m.media[0] : (m.type === 'memory' ? 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' : null),
        region: m.type.toUpperCase()
      };
    })
  ];

  // Filter based on layers
  const filteredPins = allPins.filter(pin => {
    if (pin.type === 'predefined') return true;
    if (pin.type === 'visited' && !showVisited) return false;
    if (pin.type === 'dream' && !showDream) return false;
    if (pin.type === 'memory' && !showMemories) return false;
    return true;
  });

  // Handle selected pin
  const handlePinClick = (pin) => {
    setSelectedPin(pin);
  };

  // Add custom pin marker
  const handleAddCustomPin = (e) => {
    e.preventDefault();
    if (!newPinName.trim() || !newPinLat || !newPinLon) {
      showToast('Please fill out pin name and coordinates.', 'error');
      return;
    }
    const lat = parseFloat(newPinLat);
    const lon = parseFloat(newPinLon);
    if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      showToast('Invalid Latitude (-90 to 90) or Longitude (-180 to 180).', 'error');
      return;
    }

    const newMarker = {
      id: `custom-${Date.now()}`,
      name: newPinName,
      type: newPinType,
      coords: { lat, lon },
      notes: newPinNotes || `${newPinType.toUpperCase()} target cached.`,
      media: newPinImage ? [newPinImage] : []
    };

    setMapMarkers([...mapMarkers, newMarker]);
    awardXp(150, `Dropped pin at ${newPinName}`);
    showToast(`Coordinate pin successfully injected!`, 'success');

    // Reset Form
    setNewPinName('');
    setNewPinLat('');
    setNewPinLon('');
    setNewPinNotes('');
    setNewPinImage('');
  };

  // Draw custom route arc
  const handleDrawRoute = (e) => {
    e.preventDefault();
    if (!routeStartId || !routeEndId || routeStartId === routeEndId) {
      showToast('Please select two distinct pins.', 'error');
      return;
    }

    const startPin = allPins.find(p => p.id === routeStartId);
    const endPin = allPins.find(p => p.id === routeEndId);
    if (!startPin || !endPin) return;

    const newRoute = {
      id: `route-${Date.now()}`,
      startName: startPin.name,
      endName: endPin.name,
      startCoords: startPin.pxCoords,
      endCoords: endPin.pxCoords
    };

    setDrawnRoutes([...drawnRoutes, newRoute]);
    awardXp(200, `Mapped route: ${startPin.name} -> ${endPin.name}`);
    showToast('Route vectors calculated and linked!', 'success');
    setRouteStartId('');
    setRouteEndId('');
  };

  // Delete drawn route
  const handleDeleteRoute = (routeId) => {
    setDrawnRoutes(drawnRoutes.filter(r => r.id !== routeId));
    showToast('Route vector cleared.');
  };

  // Toggle challenge logs checkboxes
  const handleToggleState = (stateName) => {
    if (visitedStates.includes(stateName)) {
      setVisitedStates(visitedStates.filter(s => s !== stateName));
    } else {
      setVisitedStates([...visitedStates, stateName]);
      awardXp(100, `Visited Indian State: ${stateName}`);
    }
  };

  const handleToggleWonder = (wonderName) => {
    if (visitedWonders.includes(wonderName)) {
      setVisitedWonders(visitedWonders.filter(w => w !== wonderName));
    } else {
      setVisitedWonders([...visitedWonders, wonderName]);
      awardXp(250, `Completed Wonder: ${wonderName}`);
    }
  };

  const handleToggleG20 = (countryName) => {
    if (visitedG20.includes(countryName)) {
      setVisitedG20(visitedG20.filter(c => c !== countryName));
    } else {
      setVisitedG20([...visitedG20, countryName]);
      awardXp(150, `Visited G20 Country: ${countryName}`);
    }
  };

  const isWishlisted = selectedPin && selectedPin.id.startsWith('pre-') 
    ? isInWishlist('destinations', selectedPin.id.replace('pre-', '')) 
    : false;

  return (
    <div className="py-4 text-left flex flex-col gap-8 w-full">
      {/* Title Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
            Interactive Travel Map Studio
          </h1>
          <p className="text-sm text-slate-500 max-w-xl">
            Signature **My Life Map** centerpiece. Plot custom visited spots, drop photo memory pins, draw flight vectors, and track global exploration challenges.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono text-[10.5px] font-bold">
            🗺️ pins active: {filteredPins.length}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-[10.5px] font-bold">
            ✈️ routes linked: {drawnRoutes.length}
          </span>
        </div>
      </div>

      {/* Map Board Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start w-full text-xs">
        
        {/* Left Side: Map + Layers & Forms */}
        <div className="xl:col-span-2 flex flex-col gap-6 w-full">
          
          {/* Interactive SVG World Map Grid */}
          <div className="rounded-3xl bg-slate-950 border border-teal-500/10 overflow-hidden relative shadow-2xl flex flex-col min-h-[400px] sm:min-h-[500px]">
            {/* Map HUD telemetry overlay */}
            <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-auto">
              <span className="px-3 py-1 text-[10px] font-bold text-teal-400 uppercase tracking-widest bg-slate-900/90 rounded-full border border-teal-500/20 shadow flex items-center gap-1">
                <Compass size={11} className="animate-spin duration-3000 text-teal-400" /> Vector Life Layer
              </span>
              <span className="px-3 py-1 text-[10px] font-bold text-sky-400 uppercase tracking-widest bg-slate-900/90 rounded-full border border-sky-500/20 shadow flex items-center gap-1">
                DEL REFERENCE HUB // active
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20 flex gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-teal-500/20 shadow text-[10px] font-bold text-slate-400 pointer-events-auto">
              <button 
                onClick={() => setZoomLevel(1)} 
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${zoomLevel === 1 ? 'bg-teal-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
              >
                1x View
              </button>
              <button 
                onClick={() => setZoomLevel(1.5)} 
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${zoomLevel === 1.5 ? 'bg-teal-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
              >
                1.5x Zoom
              </button>
              <button 
                onClick={() => setZoomLevel(2.2)} 
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${zoomLevel === 2.2 ? 'bg-teal-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
              >
                2.2x Close
              </button>
            </div>

            {/* Map Canvas viewport */}
            <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden p-6 min-h-[380px] sm:min-h-[460px]">
              <motion.div 
                animate={{ scale: zoomLevel }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="w-full max-w-3xl aspect-[16/9] relative bg-slate-900/10 rounded-2xl border border-slate-900/60"
              >
                {/* World Map Grids */}
                <div className="absolute inset-0 grid-cyber opacity-35" />
                <svg viewBox="0 0 100 56" className="w-full h-full opacity-10 text-teal-400" fill="currentColor">
                  <path d="M10,12 Q14,8 24,10 T38,15 T48,12 T54,18 T48,28 T38,26 T24,30 Z" /> {/* North America */}
                  <path d="M26,30 Q32,36 34,44 T36,54 T28,52 T24,40 Z" /> {/* South America */}
                  <path d="M42,16 Q48,12 56,14 T64,18 T58,26 T46,28 Z" /> {/* Europe */}
                  <path d="M44,28 Q52,26 56,34 T52,48 T44,46 Z" /> {/* Africa */}
                  <path d="M58,18 Q72,12 84,18 T92,30 T80,38 T64,32 Z" /> {/* Asia */}
                  <path d="M80,44 Q86,42 90,48 T84,54 T78,50 Z" /> {/* Australia */}
                </svg>

                {/* Drawn Custom Routes */}
                {showRoutes && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <AnimatePresence>
                      {drawnRoutes.map((r) => (
                        <motion.path
                          key={r.id}
                          d={`M ${r.startCoords.x} ${r.startCoords.y} Q ${(r.startCoords.x + r.endCoords.x)/2} ${Math.min(r.startCoords.y, r.endCoords.y) - 10} ${r.endCoords.x} ${r.endCoords.y}`}
                          fill="none"
                          stroke="url(#routeGradient)"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          exit={{ pathLength: 0 }}
                          transition={{ duration: 1.2, ease: 'easeInOut' }}
                        />
                      ))}
                    </AnimatePresence>
                  </svg>
                )}

                {/* Origin DEL Indicator */}
                <div 
                  className="absolute w-3 h-3 bg-sky-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 cursor-default ring-4 ring-sky-400/20"
                  style={{ left: '64%', top: '31%' }}
                  title="New Delhi Central Hub"
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-sky-400 uppercase tracking-widest whitespace-nowrap bg-slate-950 px-1 py-0.5 rounded border border-sky-500/25">DEL</span>
                </div>

                {/* Active Destination/Challenge Pins */}
                {filteredPins.map((pin) => {
                  const isActive = selectedPin && selectedPin.id === pin.id;
                  
                  // Decide pin color style based on type
                  let colorClass = 'bg-slate-900 border-slate-700 hover:border-teal-400 text-teal-400';
                  let innerColor = 'bg-teal-400';
                  if (pin.type === 'visited') {
                    colorClass = 'bg-emerald-950/80 border-emerald-500/50 hover:border-emerald-400 text-emerald-400';
                    innerColor = 'bg-emerald-400';
                  } else if (pin.type === 'dream') {
                    colorClass = 'bg-purple-950/80 border-purple-500/50 hover:border-purple-400 text-purple-400';
                    innerColor = 'bg-purple-400';
                  } else if (pin.type === 'memory') {
                    colorClass = 'bg-rose-950/80 border-rose-500/50 hover:border-rose-400 text-rose-450';
                    innerColor = 'bg-rose-550';
                  } else if (isActive) {
                    colorClass = 'bg-teal-400 border-white text-teal-950';
                  }

                  return (
                    <button
                      key={pin.id}
                      onClick={() => handlePinClick(pin)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20 group cursor-pointer"
                      style={{ left: `${pin.pxCoords.x}%`, top: `${pin.pxCoords.y}%` }}
                    >
                      {isActive && (
                        <span className={`absolute inset-0 rounded-full scale-250 animate-ping duration-1500 ${
                          pin.type === 'visited' ? 'bg-emerald-400/20' : (pin.type === 'dream' ? 'bg-purple-400/20' : 'bg-rose-400/20')
                        }`} />
                      )}
                      
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shadow-lg transition-all ${colorClass}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${innerColor}`} />
                      </div>

                      {/* Small tooltip name */}
                      <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white bg-slate-950/95 border border-white/10 px-2 py-1 rounded shadow-xl transition-opacity pointer-events-none whitespace-nowrap z-30">
                        {pin.name}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            </div>

            {/* Map bottom layers ticker panel */}
            <div className="p-4 bg-slate-900 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between text-[10px] font-bold text-slate-400">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-teal-400 uppercase tracking-wider font-mono">LAYERS DECK:</span>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" checked={showPredefined} onChange={(e) => setShowPredefined(e.target.checked)} className="rounded text-teal-500 bg-slate-950 border-white/5" />
                  <span>PREDEFINED</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" checked={showVisited} onChange={(e) => setShowVisited(e.target.checked)} className="rounded text-emerald-500 bg-slate-950 border-white/5" />
                  <span className="text-emerald-450">MY VISITED</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" checked={showDream} onChange={(e) => setShowDream(e.target.checked)} className="rounded text-purple-500 bg-slate-950 border-white/5" />
                  <span className="text-purple-400">MY DREAMS</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" checked={showMemories} onChange={(e) => setShowMemories(e.target.checked)} className="rounded text-rose-500 bg-slate-950 border-white/5" />
                  <span className="text-rose-400">MEMORIES</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" checked={showRoutes} onChange={(e) => setShowRoutes(e.target.checked)} className="rounded text-indigo-500 bg-slate-950 border-white/5" />
                  <span className="text-indigo-400">ROUTES</span>
                </label>
              </div>
              <button 
                onClick={() => {
                  setDrawnRoutes([]);
                  showToast('All custom route vectors cleared.');
                }}
                className="text-slate-500 hover:text-white transition-colors uppercase tracking-wider font-mono"
              >
                Clear Routes
              </button>
            </div>
          </div>

          {/* Bottom Forms: Custom Pin dropped + Route Linker */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Custom Pin drop Form */}
            <div className="p-5 rounded-3xl bg-slate-900/60 border border-teal-500/10 text-left">
              <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1 flex items-center gap-1.5">
                <MapPin size={14} className="text-teal-400" /> Plot Custom Coordinates Pin
              </h4>
              <p className="text-[10px] text-slate-500 mb-3">Drop a coordinate vector directly onto the map to expand your travel geography.</p>
              
              <form onSubmit={handleAddCustomPin} className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className="text-[9px] font-mono text-slate-455 uppercase">Pin Name</span>
                    <input 
                      type="text" placeholder="e.g. Mumbai" value={newPinName} onChange={(e) => setNewPinName(e.target.value)}
                      className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white" required
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 w-24">
                    <span className="text-[9px] font-mono text-slate-455 uppercase">Type</span>
                    <select 
                      value={newPinType} onChange={(e) => setNewPinType(e.target.value)}
                      className="px-1 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white"
                    >
                      <option value="visited">Visited</option>
                      <option value="dream">Dream</option>
                      <option value="memory">Memory</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className="text-[9px] font-mono text-slate-455 uppercase">Latitude (-90 to 90)</span>
                    <input 
                      type="text" placeholder="19.076" value={newPinLat} onChange={(e) => setNewPinLat(e.target.value)}
                      className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white font-mono" required
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className="text-[9px] font-mono text-slate-455 uppercase">Longitude (-180 to 180)</span>
                    <input 
                      type="text" placeholder="72.877" value={newPinLon} onChange={(e) => setNewPinLon(e.target.value)}
                      className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white font-mono" required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono text-slate-455 uppercase">Optional Photo Image Link</span>
                  <input 
                    type="url" placeholder="https://images.unsplash.com/..." value={newPinImage} onChange={(e) => setNewPinImage(e.target.value)}
                    className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white"
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono text-slate-455 uppercase">Explorer Notes / Memory logs</span>
                  <textarea 
                    placeholder="Describe this spot or logs..." value={newPinNotes} onChange={(e) => setNewPinNotes(e.target.value)}
                    className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white h-12 resize-none"
                  />
                </div>

                <button type="submit" className="py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold font-mono text-xs rounded-xl transition-colors mt-1 cursor-pointer">
                  INJECT COORDINATE PIN (+150 XP)
                </button>
              </form>
            </div>

            {/* Custom Route Linker Form */}
            <div className="p-5 rounded-3xl bg-slate-900/60 border border-teal-500/10 text-left flex flex-col justify-between">
              <div>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1 flex items-center gap-1.5">
                  <Navigation size={14} className="text-teal-400" /> Draw Route Linker vectors
                </h4>
                <p className="text-[10px] text-slate-500 mb-3">Draw connection lines between any active pre-defined or custom plotted pins.</p>
                
                <form onSubmit={handleDrawRoute} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-slate-455 uppercase">Start Pin Point</span>
                    <select 
                      value={routeStartId} onChange={(e) => setRouteStartId(e.target.value)}
                      className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white text-[11px]" required
                    >
                      <option value="">-- Choose Origin Pin --</option>
                      {allPins.map(p => (
                        <option key={p.id} value={p.id}>{p.name} ({p.type})</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-slate-455 uppercase">End Destination Point</span>
                    <select 
                      value={routeEndId} onChange={(e) => setRouteEndId(e.target.value)}
                      className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white text-[11px]" required
                    >
                      <option value="">-- Choose Target Pin --</option>
                      {allPins.map(p => (
                        <option key={p.id} value={p.id}>{p.name} ({p.type})</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold font-mono text-xs rounded-xl transition-colors mt-2 cursor-pointer">
                    DRAW CYBER ROUTE ARC (+200 XP)
                  </button>
                </form>
              </div>

              {/* Drawn routes list */}
              {drawnRoutes.length > 0 && (
                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-1.5">Linked Vectors</span>
                  <div className="max-h-[80px] overflow-y-auto flex flex-col gap-1.5 pr-1 scrollbar-thin">
                    {drawnRoutes.map(r => (
                      <div key={r.id} className="flex justify-between items-center bg-slate-950/70 p-1.5 rounded border border-white/5 font-mono text-[9px] text-slate-350">
                        <span className="truncate">{r.startName} ➔ {r.endName}</span>
                        <button onClick={() => handleDeleteRoute(r.id)} className="text-rose-500 hover:text-rose-600">
                          <Trash2 size={10} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
        
        {/* Right Side Board: Details + Challenges */}
        <div className="flex flex-col gap-6 w-full">
          
          {/* Active Pin Info Card */}
          {selectedPin ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              key={selectedPin.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block font-mono">
                    {selectedPin.type.toUpperCase()} PIN TELEMETRY
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-slate-850 dark:text-slate-100 mt-0.5 flex items-center gap-1.5">
                    <MapPin size={15} className="text-teal-500" />
                    {selectedPin.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-semibold">{selectedPin.country}</span>
                </div>
                <button 
                  onClick={() => setSelectedPin(null)}
                  className="p-1 rounded bg-slate-100 dark:bg-slate-950 text-slate-450 hover:text-white"
                >
                  <X size={12} />
                </button>
              </div>

              {selectedPin.image && (
                <img
                  src={selectedPin.image}
                  alt={selectedPin.name}
                  className="w-full h-32 rounded-xl object-cover border border-white/5"
                />
              )}

              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                {selectedPin.notes}
              </p>

              {/* Coordinates specs */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-150 dark:border-white/5 flex justify-between text-[10px] font-mono text-slate-600 dark:text-slate-355">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8.5px] text-slate-400 uppercase font-bold tracking-wider">Longitude</span>
                  <span>{selectedPin.coords.lon.toFixed(4)}° E</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8.5px] text-slate-400 uppercase font-bold tracking-wider">Latitude</span>
                  <span>{selectedPin.coords.lat.toFixed(4)}° N</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8.5px] text-slate-400 uppercase font-bold tracking-wider">Flight Est</span>
                  <span className="text-teal-500 font-bold">~{selectedPin.type === 'predefined' ? '4.5 hrs' : 'Calculated'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              {selectedPin.type === 'predefined' && (
                <div className="flex flex-col gap-2 pt-1.5">
                  <button
                    onClick={() => toggleWishlist('destinations', { id: selectedPin.id.replace('pre-', ''), name: selectedPin.name, image: selectedPin.image })}
                    className={`py-2 rounded-xl border text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isWishlisted
                        ? 'bg-rose-50 border-rose-200 text-rose-500 dark:bg-rose-950/80 dark:border-rose-900'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-655 dark:text-slate-300'
                    }`}
                  >
                    <Heart size={12} fill={isWishlisted ? 'currentColor' : 'none'} />
                    {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                  </button>
                  <a
                    href={`/planner?destination=${selectedPin.name}`}
                    className="py-2 bg-teal-605 hover:bg-teal-700 text-white rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 shadow"
                  >
                    <Calendar size={12} /> Plan Custom Itinerary
                  </a>
                </div>
              )}
            </motion.div>
          ) : (
            <div className="p-6 text-center rounded-3xl bg-slate-900/40 border border-teal-500/10 flex flex-col items-center justify-center gap-2 min-h-[160px] text-slate-500">
              <Eye size={20} className="text-slate-450 animate-pulse" />
              <p className="text-[11px]">Select any vector pin on the map studio to resolve telemetry specs.</p>
            </div>
          )}

          {/* Gamified Travel Challenges stats */}
          <div className="p-5 rounded-3xl bg-slate-900/60 border border-teal-500/10 text-left">
            <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-3 flex items-center gap-1.5">
              <Award size={14} className="text-teal-400" /> Life Goals Travel Challenges
            </h4>
            
            <div className="flex flex-col gap-4">
              
              {/* Challenge 1: Indian States */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between font-mono text-[9px] font-bold text-slate-400">
                  <span>🇮🇳 INDIAN STATES ODYSSEY</span>
                  <span className="text-teal-400">{visitedStates.length} / 8 VISITED</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-teal-400 transition-all duration-500" style={{ width: `${(visitedStates.length / 8) * 100}%` }} />
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {['Delhi', 'Gujarat', 'Kashmir', 'Ladakh', 'Kerala', 'Rajasthan', 'Maharashtra', 'Goa'].map(state => {
                    const checked = visitedStates.includes(state);
                    return (
                      <button
                        key={state} onClick={() => handleToggleState(state)}
                        className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-semibold transition-all border ${
                          checked ? 'bg-teal-500/15 border-teal-500 text-teal-400 font-bold' : 'bg-slate-950 border-white/5 text-slate-500 hover:border-slate-800'
                        }`}
                      >
                        {state} {checked ? '✓' : '+'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Challenge 2: Seven Wonders */}
              <div className="flex flex-col gap-1.5 border-t border-white/5 pt-3">
                <div className="flex justify-between font-mono text-[9px] font-bold text-slate-400">
                  <span>🕌 SEVEN WONDERS OF WORLD</span>
                  <span className="text-purple-400">{visitedWonders.length} / 7 COMPLETED</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${(visitedWonders.length / 7) * 100}%` }} />
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {['Taj Mahal', 'Colosseum', 'Petra', 'Machu Picchu', 'Great Wall', 'Chichen Itza', 'Christ Redeemer'].map(w => {
                    const checked = visitedWonders.includes(w);
                    return (
                      <button
                        key={w} onClick={() => handleToggleWonder(w)}
                        className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-semibold transition-all border ${
                          checked ? 'bg-purple-500/15 border-purple-500 text-purple-400 font-bold' : 'bg-slate-950 border-white/5 text-slate-500 hover:border-slate-800'
                        }`}
                      >
                        {w} {checked ? '✓' : '+'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Challenge 3: G20 Countries */}
              <div className="flex flex-col gap-1.5 border-t border-white/5 pt-3">
                <div className="flex justify-between font-mono text-[9px] font-bold text-slate-400">
                  <span>🌍 G20 COUNTRY EXPLORER</span>
                  <span className="text-indigo-400">{visitedG20.length} / 12 VISITED</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${(visitedG20.length / 12) * 100}%` }} />
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {['India', 'Japan', 'USA', 'UK', 'France', 'Germany', 'Italy', 'Canada', 'Australia', 'Brazil', 'China', 'South Africa'].map(c => {
                    const checked = visitedG20.includes(c);
                    return (
                      <button
                        key={c} onClick={() => handleToggleG20(c)}
                        className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-semibold transition-all border ${
                          checked ? 'bg-indigo-500/15 border-indigo-500 text-indigo-400 font-bold' : 'bg-slate-950 border-white/5 text-slate-500 hover:border-slate-800'
                        }`}
                      >
                        {c} {checked ? '✓' : '+'}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
