import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Calendar, Sparkles, LogOut, Edit3, Save, TrendingUp, 
  PiggyBank, Target, Trash2, Clock, MapPin, X, ArrowRight, Printer, 
  Cpu, Radar, ShieldAlert, Award, BookOpen, Plus, Check, Settings, 
  Map, Video, Layers, Mic, Sliders, Eye, Compass, HelpCircle, 
  Activity, Sparkle, Heart, Plane, Shield, AlertTriangle, AlertCircle,
  Coins, Terminal, Cloud, ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DashboardSkeleton } from '../components/SkeletonLoader';

// Canvas-rendered Live Radar Animation
const RadarCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let angle = 0;
    
    const blips = [
      { x: 75, y: 65, label: 'Flight UK-943 (BLR -> COK)', type: 'flight', opacity: 1 },
      { x: 190, y: 130, label: 'Goa Flight Price Deal (-25%)', type: 'deal', opacity: 1 },
      { x: 80, y: 170, label: 'Weather alert: Kashmir (Snowing)', type: 'weather', opacity: 1 },
      { x: 160, y: 70, label: 'Jaipur Fort (Saved)', type: 'saved', opacity: 1 }
    ];
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth || 300;
      canvas.height = 220;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const maxRadius = Math.min(cx, cy) - 20;
      
      // Radar rings
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.15)';
      ctx.lineWidth = 1;
      for (let r = maxRadius / 4; r <= maxRadius; r += maxRadius / 4) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Radar grid lines
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.08)';
      ctx.beginPath();
      ctx.moveTo(cx - maxRadius, cy);
      ctx.lineTo(cx + maxRadius, cy);
      ctx.moveTo(cx, cy - maxRadius);
      ctx.lineTo(cx, cy + maxRadius);
      ctx.stroke();
      
      // Radar sweep line
      const sweepX = cx + Math.cos(angle) * maxRadius;
      const sweepY = cy + Math.sin(angle) * maxRadius;
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();
      
      // Update and draw blips
      blips.forEach(blip => {
        const dx = blip.x - cx;
        const dy = blip.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < maxRadius) {
          let blipAngle = Math.atan2(dy, dx);
          if (blipAngle < 0) blipAngle += Math.PI * 2;
          
          let sweepAngle = angle % (Math.PI * 2);
          if (sweepAngle < 0) sweepAngle += Math.PI * 2;
          
          let diff = sweepAngle - blipAngle;
          if (diff < 0) diff += Math.PI * 2;
          
          if (diff < 0.15) {
            blip.opacity = 1.0;
          } else {
            blip.opacity = Math.max(0.12, blip.opacity - 0.005);
          }
          
          let color = 'rgba(45, 212, 191, '; 
          if (blip.type === 'deal') color = 'rgba(244, 63, 94, '; 
          if (blip.type === 'weather') color = 'rgba(245, 158, 11, '; 
          if (blip.type === 'saved') color = 'rgba(56, 189, 248, '; 
          
          ctx.fillStyle = color + blip.opacity + ')';
          ctx.shadowBlur = 8 * blip.opacity;
          ctx.shadowColor = color.replace(', ', ')');
          ctx.beginPath();
          ctx.arc(blip.x, blip.y, 4.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          
          if (blip.opacity > 0.5) {
            ctx.fillStyle = 'rgba(148, 163, 184, ' + (blip.opacity - 0.3) + ')';
            ctx.font = '8px monospace';
            ctx.fillText(blip.label, blip.x + 8, blip.y + 3);
          }
        }
      });
      
      angle += 0.015;
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative w-full h-[220px] bg-slate-950/90 rounded-2xl border border-teal-500/10 overflow-hidden flex items-center justify-center">
      <div className="absolute top-2.5 left-3 flex items-center gap-1.5 z-10">
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
        <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest">LIVE TRAVEL RADAR SCAN // ACTIVE</span>
      </div>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

// SVG Orbit visualization for Personal Universe
const UniverseGalaxyVisualizer = ({ galaxies, planets }) => {
  return (
    <div className="relative w-full h-[250px] bg-slate-950/90 rounded-2xl border border-teal-500/10 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-950/20 via-transparent to-transparent pointer-events-none" />
      
      <svg className="w-56 h-56 animate-spin-slow" viewBox="0 0 200 200">
        <style>{`
          .animate-spin-slow {
            animation: spin-orbit 40s linear infinite;
          }
          @keyframes spin-orbit {
            100% { transform: rotate(360deg); }
          }
          .orbit {
            stroke: rgba(45, 212, 191, 0.1);
            stroke-dasharray: 3 3;
            fill: none;
          }
        `}</style>
        
        <circle cx="100" cy="100" r="10" fill="url(#sun-glow)" className="animate-pulse" />
        
        <circle cx="100" cy="100" r="35" className="orbit" />
        <circle cx="100" cy="100" r="60" className="orbit" />
        <circle cx="100" cy="100" r="85" className="orbit" />
        
        {galaxies.map((g, idx) => {
          const radius = 35 + idx * 25;
          const angle = (idx * Math.PI * 2) / galaxies.length;
          const px = 100 + Math.cos(angle) * radius;
          const py = 100 + Math.sin(angle) * radius;
          
          let color = '#2dd4bf'; 
          if (g.id === 'honeymoon') color = '#f43f5e'; 
          if (g.id === 'adventure') color = '#f59e0b'; 
          if (g.id === 'family') color = '#38bdf8'; 
          
          return (
            <g key={g.id}>
              <circle cx={px} cy={py} r="5" fill={color} filter="url(#glow-filter)" />
              <circle cx={px} cy={py} r="8" stroke={color} strokeWidth="0.5" strokeDasharray="1 1" fill="none" />
              <text x={px + 8} y={py + 3} fill="#94a3b8" fontSize="6px" fontFamily="monospace" transform={`rotate(-${(idx * 360)/galaxies.length} ${px} ${py})`}>
                {g.name.split(' ')[0]}
              </text>
            </g>
          );
        })}
        
        {planets.map((p, idx) => {
          const radius = 85;
          const angle = ((idx + 2.5) * Math.PI * 2) / (planets.length + 3);
          const px = 100 + Math.cos(angle) * radius;
          const py = 100 + Math.sin(angle) * radius;
          
          let color = '#a855f7'; 
          if (p.type === 'desert') color = '#eab308'; 
          if (p.type === 'jungle') color = '#22c55e'; 
          if (p.type === 'ocean') color = '#06b6d4'; 
          if (p.type === 'ice') color = '#38bdf8'; 
          
          return (
            <g key={p.id}>
              <circle cx={px} cy={py} r="7" fill={color} filter="url(#glow-filter)" />
              <circle cx={px} cy={py} r="10" stroke={color} strokeWidth="0.5" strokeDasharray="1 2" fill="none" />
              <text x={px + 10} y={py + 2} fill="#cbd5e1" fontSize="6px" fontWeight="bold" fontFamily="monospace">
                {p.name}
              </text>
            </g>
          );
        })}

        <defs>
          <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="1" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>
      
      <div className="absolute bottom-2.5 right-3 text-right">
        <span className="text-[7.5px] font-mono text-slate-500 uppercase">COSMIC GOALS MATRIX // CLUSTERS: {galaxies.length + planets.length}</span>
      </div>
    </div>
  );
};

export const Dashboard = () => {
  const { 
    user, updateProfile, logout, itineraries, deleteItinerary, updateItinerary, 
    budget, updateBudget, journals, addJournal, achievements, twinPreferences, 
    setTwinPreferences, userXp, userLevel, wishlist, showToast,
    dashboardWidgets, setDashboardWidgets,
    dashboardPreset, setDashboardPreset,
    uiThemeStyle, setUiThemeStyle,
    mapMarkers, setMapMarkers,
    blockedDates, setBlockedDates,
    watchlistItems, setWatchlistItems,
    vaultMemories, setVaultMemories,
    aiAutonomy, setAiAutonomy,
    saveItinerary
  } = useApp();
  
  const navigate = useNavigate();

  // Navigation state (OS Tabs)
  const [dashboardTab, setDashboardTab] = useState('workspace'); 
  const [unlockedStamps, setUnlockedStamps] = useState(['Delhi', 'Agra']); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  // Profile Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editBio, setEditBio] = useState(user?.bio || '');
  const [editAvatar, setEditAvatar] = useState(user?.avatar || '');

  // Selected Saved Itinerary Modals
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [editingItinerary, setEditingItinerary] = useState(null);

  // Existing features state hooks
  const [newMarkerName, setNewMarkerName] = useState('');
  const [newMarkerType, setNewMarkerType] = useState('dream');
  const [newMarkerLat, setNewMarkerLat] = useState('20.0');
  const [newMarkerLon, setNewMarkerLon] = useState('75.0');
  const [newMarkerNotes, setNewMarkerNotes] = useState('');

  const [newBlockedDate, setNewBlockedDate] = useState('');
  const [newBlockedType, setNewBlockedType] = useState('blocked');
  const [newBlockedDesc, setNewBlockedDesc] = useState('');

  const [newMemoryTitle, setNewMemoryTitle] = useState('');
  const [newMemoryType, setNewMemoryType] = useState('photo');
  const [newMemoryDesc, setNewMemoryDesc] = useState('');
  const [newMemoryLoc, setNewMemoryLoc] = useState('');
  const [newMemoryUrl, setNewMemoryUrl] = useState('');
  const [newMemoryTrans, setNewMemoryTrans] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  // --- TRAVELVERSE OS ADVANCED STATES ---
  
  // 1. Workspace Builder States
  const [activeWorkspace, setActiveWorkspace] = useState('planning'); 
  const [customWorkspaceName, setCustomWorkspaceName] = useState('');
  const [customWorkspaceLayout, setCustomWorkspaceLayout] = useState('split-h');
  const [customWorkspaceWidgets, setCustomWorkspaceWidgets] = useState(['itinerary', 'map']);
  const [isCreatingWorkspace, setIsCreatingWorkspace] = useState(false);
  
  const [workspacePresets, setWorkspacePresets] = useState(() => {
    const saved = localStorage.getItem('tv_workspace_presets');
    return saved ? JSON.parse(saved) : [
      { id: 'planning', name: 'Planning Workspace', layout: 'split-h', widgets: ['itinerary', 'map'] },
      { id: 'budget', name: 'Budget Workspace', layout: 'split-v', widgets: ['budget', 'deals'] },
      { id: 'roadtrip', name: 'Road Trip Workspace', layout: 'single', widgets: ['map'] },
      { id: 'photography', name: 'Photography Workspace', layout: 'grid', widgets: ['memories'] }
    ];
  });

  // Floating Window Coordinates for modular widgets (Supports all 10 widgets)
  const [widgetPositions, setWidgetPositions] = useState(() => {
    const defaultPositions = {
      itinerary: { x: 20, y: 110, w: 460, h: 420, z: 10 },
      map: { x: 500, y: 110, w: 460, h: 420, z: 5 },
      budget: { x: 20, y: 550, w: 460, h: 360, z: 5 },
      memories: { x: 500, y: 550, w: 460, h: 360, z: 5 },
      radar: { x: 20, y: 110, w: 450, h: 350, z: 4 },
      deals: { x: 490, y: 110, w: 460, h: 350, z: 4 },
      rules: { x: 20, y: 110, w: 450, h: 350, z: 6 },
      universe: { x: 490, y: 110, w: 450, h: 350, z: 6 },
      simulation: { x: 20, y: 480, w: 450, h: 350, z: 7 },
      command: { x: 490, y: 480, w: 450, h: 350, z: 7 }
    };
    const saved = localStorage.getItem('tv_widget_positions');
    if (!saved) return defaultPositions;
    try {
      const parsed = JSON.parse(saved);
      const cleaned = {};
      Object.keys(defaultPositions).forEach(key => {
        const p = parsed[key];
        if (p && typeof p.x === 'number' && !isNaN(p.x) &&
                 typeof p.y === 'number' && !isNaN(p.y) &&
                 typeof p.w === 'number' && !isNaN(p.w) &&
                 typeof p.h === 'number' && !isNaN(p.h) &&
                 typeof p.z === 'number' && !isNaN(p.z)) {
          cleaned[key] = { x: p.x, y: p.y, w: p.w, h: p.h, z: p.z };
        } else {
          cleaned[key] = defaultPositions[key];
        }
      });
      return cleaned;
    } catch (e) {
      return defaultPositions;
    }
  });

  // 2. Personal Travel Universe States
  const [planets, setPlanets] = useState(() => {
    const saved = localStorage.getItem('tv_user_planets');
    return saved ? JSON.parse(saved) : [
      { id: 'p-1', name: 'Planet Oasis', type: 'ocean', theme: 'relaxing', cities: ['Goa', 'Kerala'] },
      { id: 'p-2', name: 'Planet Nebula', type: 'ice', theme: 'extreme', cities: ['Kashmir', 'Ladakh'] }
    ];
  });
  const [newPlanetName, setNewPlanetName] = useState('');
  const [newPlanetType, setNewPlanetType] = useState('jungle');
  const [newPlanetTheme, setNewPlanetTheme] = useState('historical');
  const [newPlanetCities, setNewPlanetCities] = useState('');

  const universeGalaxies = [
    { id: 'dream', name: 'Dream Destinations Galaxy', destinations: ['Goa', 'Kashmir', 'Tokyo'] },
    { id: 'honeymoon', name: 'Honeymoon Galaxy', destinations: ['Kerala', 'Paris'] },
    { id: 'adventure', name: 'Adventure Galaxy', destinations: ['Ladakh', 'Manali'] },
    { id: 'family', name: 'Family Travel Galaxy', destinations: ['Jaipur', 'Goa'] }
  ];

  // 3. Recommendation Rules States
  const [customRules, setCustomRules] = useState(() => {
    const saved = localStorage.getItem('tv_custom_rules');
    return saved ? JSON.parse(saved) : [
      { id: 'r-1', param: 'budget', op: '>', val: '100000', action: 'recommend', target: 'Luxury Hotels' },
      { id: 'r-2', param: 'temp', op: '<', val: '10', action: 'recommend', target: 'Indoor Activities' }
    ];
  });
  const [ruleParam, setRuleParam] = useState('budget');
  const [ruleOp, setRuleOp] = useState('>');
  const [ruleVal, setRuleVal] = useState('100000');
  const [ruleAction, setRuleAction] = useState('recommend');
  const [ruleTarget, setRuleTarget] = useState('Luxury Hotels');

  // AI Memory list
  const [aiMemories, setAiMemories] = useState(() => {
    const saved = localStorage.getItem('tv_ai_memories');
    return saved ? JSON.parse(saved) : [
      { id: 'm-1', text: 'Prefers window seat on flights' },
      { id: 'm-2', text: 'Jain food compliant (strictly no root vegetables)' },
      { id: 'm-3', text: 'Prefers 5-star hotels over hostels' },
      { id: 'm-4', text: 'Low walking tolerance threshold (max 3km/day)' }
    ];
  });
  const [newMemoryText, setNewMemoryText] = useState('');
  const [activePersona, setActivePersona] = useState('Default');

  // 4. Dynamic Cockpit Sliders State
  const [adventureVal, setAdventureVal] = useState(50);
  const [comfortVal, setComfortVal] = useState(60);
  const [luxuryVal, setLuxuryVal] = useState(40);
  const [budgetVal, setBudgetVal] = useState(70);
  const [explorationVal, setExplorationVal] = useState(50);
  const [socialVal, setSocialVal] = useState(30);
  const [walkingVal, setWalkingVal] = useState(40);
  const [foodVal, setFoodVal] = useState(80);

  // 5. Deal Hunting Alert States
  const [maxFlightDeal, setMaxFlightDeal] = useState(40000);
  const [maxHotelDeal, setMaxHotelDeal] = useState(15000);
  const [dealDest, setDealDest] = useState('Goa');
  const [activeHunts, setActiveHunts] = useState(() => {
    const saved = localStorage.getItem('tv_active_hunts');
    return saved ? JSON.parse(saved) : [
      { id: 'h-1', dest: 'Goa', maxFlight: 8000, maxHotel: 8000 },
      { id: 'h-2', dest: 'London', maxFlight: 45000, maxHotel: 20000 }
    ];
  });
  const [dealAlerts, setDealAlerts] = useState([
    { id: 1, time: '17:01', msg: 'IndiGo Flight BOM -> GOI dropped to ₹6,200! (Target was ₹8,000)' },
    { id: 2, time: '16:45', msg: 'Taj Exotica Goa nightly rate fell to ₹7,800! (Target was ₹8,000)' }
  ]);

  // 6. Experience Simulation States
  const [simDest, setSimDest] = useState('Goa');
  const [simSeason, setSimSeason] = useState('monsoon');
  const [simWeather, setSimWeather] = useState('rainy');
  const [simBudget, setSimBudget] = useState(60000);
  const [simGroupSize, setSimGroupSize] = useState(2);
  const [simulationResult, setSimulationResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Budget Simulation States
  const [simLodgingBudget, setSimLodgingBudget] = useState(25000);
  const [simFlightsBudget, setSimFlightsBudget] = useState(30000);
  const [simFoodBudget, setSimFoodBudget] = useState(10000);
  const [simTransportBudget, setSimTransportBudget] = useState(5000);
  const [simShoppingBudget, setSimShoppingBudget] = useState(8000);
  const [simEmergencyBudget, setSimEmergencyBudget] = useState(4000);

  // 7. AI Command Console States
  const [commandText, setCommandText] = useState('');
  const [isExecutingCommand, setIsExecutingCommand] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([
    'Atlas Travel Consciousness Console OS v9.22',
    'System operational. Telemetry channels linked.',
    'Enter natural language commands below.'
  ]);

  // Redirect to login if user is not signed in
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // --- PERSISTENCE SYNCS ---
  useEffect(() => {
    localStorage.setItem('tv_workspace_presets', JSON.stringify(workspacePresets));
  }, [workspacePresets]);

  useEffect(() => {
    localStorage.setItem('tv_widget_positions', JSON.stringify(widgetPositions));
  }, [widgetPositions]);

  useEffect(() => {
    localStorage.setItem('tv_user_planets', JSON.stringify(planets));
  }, [planets]);

  useEffect(() => {
    localStorage.setItem('tv_custom_rules', JSON.stringify(customRules));
  }, [customRules]);

  useEffect(() => {
    localStorage.setItem('tv_ai_memories', JSON.stringify(aiMemories));
  }, [aiMemories]);

  useEffect(() => {
    localStorage.setItem('tv_active_hunts', JSON.stringify(activeHunts));
  }, [activeHunts]);

  if (!user) {
    return <DashboardSkeleton />;
  }

  // --- WORKSPACE BUILDER HELPERS ---
  const handleCreateWorkspace = (e) => {
    e.preventDefault();
    if (!customWorkspaceName.trim()) return;
    const newWS = {
      id: 'ws-' + Date.now(),
      name: customWorkspaceName,
      layout: customWorkspaceLayout,
      widgets: customWorkspaceWidgets
    };
    setWorkspacePresets([...workspacePresets, newWS]);
    setActiveWorkspace(newWS.id);
    setIsCreatingWorkspace(false);
    setCustomWorkspaceName('');
    showToast(`Workspace "${newWS.name}" created and loaded.`, 'success');
  };

  const toggleWidgetSelection = (id) => {
    if (customWorkspaceWidgets.includes(id)) {
      setCustomWorkspaceWidgets(customWorkspaceWidgets.filter(w => w !== id));
    } else {
      setCustomWorkspaceWidgets([...customWorkspaceWidgets, id]);
    }
  };

  // Move Floating Windows (Fixed Object destructuring NaN bug)
  const moveWidget = (id, dir) => {
    setWidgetPositions(prev => {
      const defaultPositions = {
        itinerary: { x: 20, y: 110, w: 460, h: 420, z: 10 },
        map: { x: 500, y: 110, w: 460, h: 420, z: 5 },
        budget: { x: 20, y: 550, w: 460, h: 360, z: 5 },
        memories: { x: 500, y: 550, w: 460, h: 360, z: 5 },
        radar: { x: 20, y: 110, w: 450, h: 350, z: 4 },
        deals: { x: 490, y: 110, w: 460, h: 350, z: 4 },
        rules: { x: 20, y: 110, w: 450, h: 350, z: 6 },
        universe: { x: 490, y: 110, w: 450, h: 350, z: 6 },
        simulation: { x: 20, y: 480, w: 450, h: 350, z: 7 },
        command: { x: 490, y: 480, w: 450, h: 350, z: 7 }
      };
      const defaultPos = defaultPositions[id] || { x: 50, y: 120, w: 420, h: 320, z: 5 };
      const current = prev[id];
      const isValid = current && 
        typeof current.x === 'number' && !isNaN(current.x) &&
        typeof current.y === 'number' && !isNaN(current.y) &&
        typeof current.w === 'number' && !isNaN(current.w) &&
        typeof current.h === 'number' && !isNaN(current.h);
      
      const pos = isValid ? { ...current } : { ...defaultPos };
      const step = 40;
      if (dir === 'up') pos.y = Math.max(0, pos.y - step);
      if (dir === 'down') pos.y = pos.y + step;
      if (dir === 'left') pos.x = Math.max(0, pos.x - step);
      if (dir === 'right') pos.x = pos.x + step;
      
      const maxZ = Math.max(...Object.values(prev).map(p => (p && typeof p.z === 'number' && !isNaN(p.z)) ? p.z : 5), 5);
      pos.z = maxZ + 1;
      
      const newPos = { ...prev, [id]: pos };
      localStorage.setItem('tv_widget_positions', JSON.stringify(newPos));
      return newPos;
    });
  };

  const resizeWidget = (id, action) => {
    setWidgetPositions(prev => {
      const defaultPositions = {
        itinerary: { x: 20, y: 110, w: 460, h: 420, z: 10 },
        map: { x: 500, y: 110, w: 460, h: 420, z: 5 },
        budget: { x: 20, y: 550, w: 460, h: 360, z: 5 },
        memories: { x: 500, y: 550, w: 460, h: 360, z: 5 },
        radar: { x: 20, y: 110, w: 450, h: 350, z: 4 },
        deals: { x: 490, y: 110, w: 460, h: 350, z: 4 },
        rules: { x: 20, y: 110, w: 450, h: 350, z: 6 },
        universe: { x: 490, y: 110, w: 450, h: 350, z: 6 },
        simulation: { x: 20, y: 480, w: 450, h: 350, z: 7 },
        command: { x: 490, y: 480, w: 450, h: 350, z: 7 }
      };
      const defaultPos = defaultPositions[id] || { x: 50, y: 120, w: 420, h: 320, z: 5 };
      const current = prev[id];
      const isValid = current && 
        typeof current.x === 'number' && !isNaN(current.x) &&
        typeof current.y === 'number' && !isNaN(current.y) &&
        typeof current.w === 'number' && !isNaN(current.w) &&
        typeof current.h === 'number' && !isNaN(current.h);
      
      const pos = isValid ? { ...current } : { ...defaultPos };
      const step = 30;
      if (action === 'grow') {
        pos.w = pos.w + step;
        pos.h = pos.h + step;
      }
      if (action === 'shrink') {
        pos.w = Math.max(240, pos.w - step);
        pos.h = Math.max(180, pos.h - step);
      }
      const newPos = { ...prev, [id]: pos };
      localStorage.setItem('tv_widget_positions', JSON.stringify(newPos));
      return newPos;
    });
  };

  const handleResetWorkspace = () => {
    localStorage.removeItem('tv_workspace_presets');
    localStorage.removeItem('tv_widget_positions');
    setWorkspacePresets([
      { id: 'planning', name: 'Planning Workspace', layout: 'split-h', widgets: ['itinerary', 'map'] },
      { id: 'budget', name: 'Budget Workspace', layout: 'split-v', widgets: ['budget', 'deals'] },
      { id: 'roadtrip', name: 'Road Trip Workspace', layout: 'single', widgets: ['map'] },
      { id: 'photography', name: 'Photography Workspace', layout: 'grid', widgets: ['memories'] }
    ]);
    setWidgetPositions({
      itinerary: { x: 20, y: 110, w: 460, h: 420, z: 10 },
      map: { x: 500, y: 110, w: 460, h: 420, z: 5 },
      budget: { x: 20, y: 550, w: 460, h: 360, z: 5 },
      memories: { x: 500, y: 550, w: 460, h: 360, z: 5 },
      radar: { x: 20, y: 110, w: 450, h: 350, z: 4 },
      deals: { x: 490, y: 110, w: 460, h: 350, z: 4 },
      rules: { x: 20, y: 110, w: 450, h: 350, z: 6 },
      universe: { x: 490, y: 110, w: 450, h: 350, z: 6 },
      simulation: { x: 20, y: 480, w: 450, h: 350, z: 7 },
      command: { x: 490, y: 480, w: 450, h: 350, z: 7 }
    });
    setActiveWorkspace('planning');
    showToast('Workspace layouts and coordinates reset to default.', 'success');
  };

  // --- PLANET CREATION ---
  const handleAddPlanet = (e) => {
    e.preventDefault();
    if (!newPlanetName.trim()) return;
    const citiesArray = newPlanetCities.split(',').map(c => c.trim()).filter(Boolean);
    const newP = {
      id: 'p-' + Date.now(),
      name: newPlanetName,
      type: newPlanetType,
      theme: newPlanetTheme,
      cities: citiesArray.length > 0 ? citiesArray : ['Custom Sector']
    };
    setPlanets([...planets, newP]);
    setNewPlanetName('');
    setNewPlanetCities('');
    showToast(`Created Travel Planet "${newP.name}" successfully!`, 'success');
  };

  // --- CUSTOM OVERRIDE RULES CREATION ---
  const handleAddRule = (e) => {
    e.preventDefault();
    const newR = {
      id: 'r-' + Date.now(),
      param: ruleParam,
      op: ruleOp,
      val: ruleVal,
      action: ruleAction,
      target: ruleTarget
    };
    setCustomRules([...customRules, newR]);
    showToast('Custom recommendation override rule loaded.', 'success');
  };

  const handleDeleteRule = (id) => {
    setCustomRules(customRules.filter(r => r.id !== id));
    showToast('Override rule purged.', 'warn');
  };

  // --- AI PERSONA SWITCHER ---
  const handlePersonaChange = (personaName) => {
    setActivePersona(personaName);
    showToast(`AI Core Persona shifted to: ${personaName}`, 'success');
    
    if (personaName === 'Family Persona') {
      setTwinPreferences({
        ...twinPreferences,
        hotelCategory: 'luxury',
        foodPreference: 'veg',
        budgetRange: 'luxury',
        flightClass: 'premium',
        adventureLevel: 'low',
        travelPace: 'relaxed',
        favoriteStyle: 'resort'
      });
      setAdventureVal(15);
      setComfortVal(90);
      setLuxuryVal(85);
      setBudgetVal(40);
      setExplorationVal(20);
      setSocialVal(40);
      setWalkingVal(25);
    } else if (personaName === 'Solo Persona') {
      setTwinPreferences({
        ...twinPreferences,
        hotelCategory: 'budget',
        foodPreference: 'all',
        budgetRange: 'budget',
        flightClass: 'economy',
        adventureLevel: 'high',
        travelPace: 'fast',
        favoriteStyle: 'adventure'
      });
      setAdventureVal(95);
      setComfortVal(30);
      setLuxuryVal(15);
      setBudgetVal(90);
      setExplorationVal(85);
      setSocialVal(75);
      setWalkingVal(85);
    } else if (personaName === 'Business Persona') {
      setTwinPreferences({
        ...twinPreferences,
        hotelCategory: 'luxury',
        foodPreference: 'all',
        budgetRange: 'luxury',
        flightClass: 'first',
        adventureLevel: 'low',
        travelPace: 'moderate',
        favoriteStyle: 'urban'
      });
      setAdventureVal(10);
      setComfortVal(95);
      setLuxuryVal(90);
      setBudgetVal(30);
      setExplorationVal(40);
      setSocialVal(20);
      setWalkingVal(20);
    }
  };

  // --- MEMORY VAULT MANUAL PREFERENCE ADD ---
  const handleAddMemory = (e) => {
    e.preventDefault();
    if (!newMemoryText.trim()) return;
    const newMem = {
      id: 'm-' + Date.now(),
      text: newMemoryText
    };
    setAiMemories([...aiMemories, newMem]);
    setNewMemoryText('');
    showToast('AI memory record updated.', 'success');
  };

  const handleResetMemories = () => {
    setAiMemories([]);
    showToast('All AI memories and preference profiles reset to default.', 'warn');
  };

  // --- COCKPIT REALTIME RECOMMENDATION RECALCULATION ---
  const getCockpitRecommendations = () => {
    const scoreGoa = Math.min(100, Math.round(50 + (comfortVal * 0.2) + (foodVal * 0.2) + (socialVal * 0.1)));
    const scoreKashmir = Math.min(100, Math.round(45 + (adventureVal * 0.3) + (explorationVal * 0.2) + (comfortVal * 0.05)));
    const scoreKerala = Math.min(100, Math.round(55 + (comfortVal * 0.25) + (walkingVal * 0.15)));
    const scoreLadakh = Math.min(100, Math.round(30 + (adventureVal * 0.4) + (walkingVal * 0.3)));
    
    return [
      { name: 'Goa Coastline', score: scoreGoa, tags: ['Beach', 'Nightlife'] },
      { name: 'Kashmir Meadows', score: scoreKashmir, tags: ['Nature', 'Snow'] },
      { name: 'Kerala Backwaters', score: scoreKerala, tags: ['Relaxation', 'Wellness'] },
      { name: 'Ladakh High Passes', score: scoreLadakh, tags: ['Adventure', 'Motorcycle'] }
    ].sort((a,b) => b.score - a.score);
  };

  const recommendedCockpit = getCockpitRecommendations();

  // --- SMART DEAL ALERT ADD ---
  const handleAddHunt = (e) => {
    e.preventDefault();
    if (!dealDest.trim()) return;
    const newH = {
      id: 'h-' + Date.now(),
      dest: dealDest,
      maxFlight: maxFlightDeal,
      maxHotel: maxHotelDeal
    };
    setActiveHunts([...activeHunts, newH]);
    setDealDest('');
    showToast(`Active Deal Hunter set for ${newH.dest}!`, 'success');
  };

  const handleRemoveHunt = (id) => {
    setActiveHunts(activeHunts.filter(h => h.id !== id));
    showToast('Deal Hunter deactivated.', 'warn');
  };

  // --- EXPERIENCE SIMULATOR STUDIO ENGINE ---
  const handleRunSimulation = (e) => {
    e.preventDefault();
    setIsSimulating(true);
    setTimeout(() => {
      const fatigueRate = Math.min(100, Math.round((simGroupSize * 8) + (simSeason === 'monsoon' ? 30 : 15)));
      const crowdRate = simSeason === 'summer' ? 88 : (simSeason === 'winter' ? 76 : 28);
      
      const lodgingC = Math.round(simBudget * 0.45);
      const diningC = Math.round(simBudget * 0.22);
      const transitC = Math.round(simBudget * 0.18);
      const activityC = Math.round(simBudget * 0.15);
      
      const schedules = [
        { day: 1, text: `Morning arrival at ${simDest}. Low queues. Check in lodging.` },
        { day: 2, text: `Explore regional hotspots. Forecast shows ${simWeather} conditions. Adjusted pace.` },
        { day: 3, text: `Activities: Local culinary trails and indoor museum bypasses due to local season.` }
      ];

      setSimulationResult({
        fatigueRate,
        crowdRate,
        costs: { lodgingC, diningC, transitC, activityC },
        logs: [
          `Simulation core loaded: target [${simDest}]`,
          `Analyzed season: ${simSeason.toUpperCase()} - Weather factors: ${simWeather.toUpperCase()}`,
          `Calculated group size complexity modifier: x${1 + simGroupSize * 0.05}`,
          `Simulation complete. Metrics synced.`
        ],
        schedules
      });
      setIsSimulating(false);
      showToast('Simulation matrix compiled.', 'success');
    }, 1200);
  };

  // --- AI NATURAL LANGUAGE COMMAND EXECUTOR ---
  const handleAICommand = (e) => {
    e.preventDefault();
    if (!commandText.trim()) return;
    
    const cmd = commandText.trim();
    setCommandText('');
    setIsExecutingCommand(true);
    setConsoleLogs(prev => [...prev, `> ${cmd}`]);
    
    setTimeout(() => {
      let responseLogs = [];
      
      if (cmd.toLowerCase().includes('switzerland') || cmd.toLowerCase().includes('lakh')) {
        responseLogs = [
          `Atlas core command decoded: Create Switzerland Itinerary.`,
          `Checking global budget constraints (Threshold: ₹2,0,000)...`,
          `Synthesizing flight routes: Air India Express vs Swiss International (LX-2200)`,
          `Booking Vistara Business Class segments [COMPLETED]`,
          `Resolving lodging: Swiss Chalet Zermatt [COMPLETED]`,
          `Constructing 10-day timeline matrix...`,
          `Injected new itinerary "Switzerland Alpine Wonders" to saved trips list.`
        ];
        
        const newItin = {
          destination: 'Switzerland',
          duration: '10',
          image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80',
          costs: { lodging: 95000, flights: 65000, activities: 25000, transport: 10000, total: 195000 },
          packingList: ['Swiss Francs', 'Warm Jacket', 'Plug Adapter', 'Hiking Boots'],
          days: [
            { day: 1, title: 'Arrival in Zurich', activities: { morning: 'Land at ZRH, board train to Lucerne', afternoon: 'Lake Lucerne boat cruise', evening: 'Dinner in old town' } },
            { day: 2, title: 'Mount Pilatus Peak Ride', activities: { morning: 'Cogwheel railway ascent', afternoon: 'Alpine slide at Fräkmüntegg', evening: 'Lucerne lakeside walk' } },
            { day: 3, title: 'Zermatt Chalet Transition', activities: { morning: 'Glacier Express segment', afternoon: 'Matterhorn view check-in', evening: 'Swiss fondue dinner' } }
          ]
        };
        saveItinerary(newItin);
      } 
      else if (cmd.toLowerCase().includes('beach') || cmd.toLowerCase().includes('cool')) {
        responseLogs = [
          `Atlas core command decoded: Beach destinations with cool weather.`,
          `Searching climate grids database...`,
          `Matching criteria: Beach coordinates AND temperature < 22°C`,
          `Found match: Galgibaga pine belt (Goa, Winter morning), Butterfly Beach, and Gokarna rock caves.`,
          `Adjusting preferences map to priority: Beach, Relaxed, Cold.`
        ];
        setTwinPreferences(prev => ({ ...prev, favoriteStyle: 'nature', travelPace: 'relaxed' }));
      }
      else if (cmd.toLowerCase().includes('road trip') || cmd.toLowerCase().includes('toll')) {
        responseLogs = [
          `Atlas core command decoded: Road trip avoiding tolls.`,
          `Retrieving NH-48 and State Highway mapping indexes...`,
          `Recalculating scenic alternatives bypassing expressway tolls...`,
          `Bypass route locked: NH-48 old ghats routes selected.`,
          `Updated road trip modifiers: Avoid Tolls [TRUE]`
        ];
      }
      else {
        responseLogs = [
          `Atlas core command decoded: ${cmd}`,
          `Scanning global database...`,
          `Running predictive itinerary compilation...`,
          `Success: Process completed. Atlas recommendations updated.`
        ];
      }
      
      setConsoleLogs(prev => [...prev, ...responseLogs]);
      setIsExecutingCommand(false);
      showToast('Command executed successfully.', 'success');
    }, 1500);
  };

  // --- GENERAL WIDGETS DATA RENDERING MAPPING ---
  
  const handleSelectItinerary = (it) => {
    if (it) {
      const sanitized = {
        ...it,
        days: it.days && Array.isArray(it.days) ? it.days.map(d => {
          let activities = d.activities;
          
          // If activities is not an object or is missing, try to build it from timeline
          if (!activities || Array.isArray(activities) || typeof activities !== 'object') {
            if (d.timeline && Array.isArray(d.timeline)) {
              const morningEvent = d.timeline.find(t => t.activity.toLowerCase().includes('morning') || t.time.includes('AM')) || d.timeline[0];
              const afternoonEvent = d.timeline.find(t => t.activity.toLowerCase().includes('afternoon') || t.activity.toLowerCase().includes('lunch') || t.activity.toLowerCase().includes('mid-day')) || d.timeline[Math.floor(d.timeline.length / 2)];
              const eveningEvent = d.timeline.find(t => t.activity.toLowerCase().includes('sunset') || t.activity.toLowerCase().includes('dinner') || t.time.includes('PM')) || d.timeline[d.timeline.length - 1];

              activities = {
                morning: morningEvent ? `${morningEvent.activity}: ${morningEvent.details || morningEvent.notes || ''}` : '',
                afternoon: afternoonEvent ? `${afternoonEvent.activity}: ${afternoonEvent.details || afternoonEvent.notes || ''}` : '',
                evening: eveningEvent ? `${eveningEvent.activity}: ${eveningEvent.details || eveningEvent.notes || ''}` : ''
              };
            } else if (Array.isArray(d.activities)) {
              // If activities was saved as an array of items (e.g. from roulette)
              const morningEvent = d.activities[0];
              const afternoonEvent = d.activities[Math.floor(d.activities.length / 2)];
              const eveningEvent = d.activities[d.activities.length - 1];
              activities = {
                morning: morningEvent ? `${morningEvent.activity || ''}: ${morningEvent.notes || ''}` : '',
                afternoon: afternoonEvent ? `${afternoonEvent.activity || ''}: ${afternoonEvent.notes || ''}` : '',
                evening: eveningEvent ? `${eveningEvent.activity || ''}: ${eveningEvent.notes || ''}` : ''
              };
            } else {
              activities = { morning: '', afternoon: '', evening: '' };
            }
          }
          
          return {
            ...d,
            activities: {
              morning: activities.morning || '',
              afternoon: activities.afternoon || '',
              evening: activities.evening || ''
            }
          };
        }) : [],
        packingList: it.packingList && Array.isArray(it.packingList) ? it.packingList : [],
        costs: it.costs || { lodging: 0, flights: 0, activities: 0, transport: 0 }
      };
      setSelectedItinerary(sanitized);
    } else {
      setSelectedItinerary(null);
    }
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    if (!editName.trim()) {
      showToast('Name cannot be empty.', 'error');
      return;
    }
    updateProfile({ name: editName, bio: editBio, avatar: editAvatar });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddMarker = (e) => {
    e.preventDefault();
    if (!newMarkerName.trim()) return;
    const marker = {
      id: Date.now().toString(),
      name: newMarkerName,
      type: newMarkerType,
      coords: { lat: parseFloat(newMarkerLat) || 20, lon: parseFloat(newMarkerLon) || 75 },
      notes: newMarkerNotes,
      media: []
    };
    setMapMarkers([marker, ...mapMarkers]);
    setNewMarkerName('');
    setNewMarkerNotes('');
    showToast('Custom coordinate map pin cached.', 'success');
  };

  const handleDeleteMarker = (id) => {
    setMapMarkers(mapMarkers.filter(m => m.id !== id));
    showToast('Map pin purged from matrix.', 'warn');
  };

  const handleAddBlockedDate = (e) => {
    e.preventDefault();
    if (!newBlockedDate) return;
    const block = {
      date: newBlockedDate,
      type: newBlockedType,
      desc: newBlockedDesc || 'Restricted window'
    };
    setBlockedDates([block, ...blockedDates]);
    setNewBlockedDate('');
    setNewBlockedDesc('');
    showToast('Temporal matrix date blocked.', 'success');
  };

  // Render Widget Selector Content (Expanded to all 10 widgets fully)
  const renderWidget = (wId) => {
    switch (wId) {
      case 'passport':
        return (
          <div className="flex flex-col gap-4 text-left text-xs h-full justify-between pr-1">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono mb-2 flex justify-between items-center">
                <span>🛂 Digital Passport & stamps</span>
                <span className="text-[9px] text-slate-500 font-normal">Level 1 Explorer</span>
              </h4>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-teal-500/10 flex items-center gap-4 relative overflow-hidden">
                <div className="w-14 h-16 rounded border border-white/10 bg-slate-950 flex flex-col justify-center items-center text-slate-600 relative overflow-hidden shrink-0">
                  <User size={24} />
                  <span className="text-[7px] font-mono font-bold mt-1 text-slate-500">VISAGE LINK</span>
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                
                <div className="flex-1 font-mono text-[9px] text-slate-400 flex flex-col gap-1">
                  <div><span className="font-bold text-slate-550">PASSPORT NO:</span> <span className="text-white">TV-2100-JP</span></div>
                  <div><span className="font-bold text-slate-550">ISSUING PORT:</span> <span className="text-white">DELHI HUB</span></div>
                  <div><span className="font-bold text-slate-550">SECTOR STATUS:</span> <span className="text-emerald-450 font-black">ACTIVE</span></div>
                </div>
              </div>

              {/* Stamps grid */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { id: 'goa', name: 'GOA', emoji: '🏖️', desc: 'Coastal Sector', match: 'goa' },
                  { id: 'jaipur', name: 'JAIPUR', emoji: '🛕', desc: 'Royal Sector', match: 'jaipur' },
                  { id: 'delhi', name: 'DELHI', emoji: '🏙️', desc: 'Capital Hub', match: 'delhi' }
                ].map(stamp => {
                  const isUnlocked = itineraries.some(it => it.destination?.toLowerCase().includes(stamp.match)) ||
                                    (unlockedStamps && unlockedStamps.some(s => s.toLowerCase().includes(stamp.match)));
                  return (
                    <div 
                      key={stamp.id}
                      className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center gap-1 transition-all ${
                        isUnlocked 
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.15)]' 
                          : 'border-white/5 bg-slate-950/40 text-slate-600'
                      }`}
                    >
                      <span className={`text-base ${isUnlocked ? 'animate-bounce' : 'opacity-30'}`}>{stamp.emoji}</span>
                      <span className="text-[8.5px] font-black tracking-wider block font-mono">{stamp.name}</span>
                      <span className="text-[7px] text-slate-500 uppercase font-mono tracking-widest">{stamp.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'itinerary':
        return (
          <div className="flex flex-col gap-4 text-left text-xs h-full justify-between pr-1">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono mb-2 flex justify-between items-center">
                <span>Quantum Planner & Saved Trips</span>
                <span className="text-[10px] text-slate-500 font-normal">({itineraries.length} Loaded)</span>
              </h4>
              <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto pr-1">
                {itineraries.map(it => (
                  <div key={it.id} className="p-2.5 rounded-xl bg-slate-900/60 border border-teal-500/10 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white block">{it.destination}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{it.duration} Days • Cost: ₹{it.costs?.total ? it.costs.total.toLocaleString() : (it.costs?.lodging ? (it.costs.lodging + it.costs.flights + it.costs.activities + it.costs.transport).toLocaleString() : '0')}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <button 
                        onClick={() => handleSelectItinerary(it)} 
                        className="px-2 py-1 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded text-[9px] font-mono font-bold"
                      >
                        OPEN
                      </button>
                      <button 
                        onClick={() => deleteItinerary(it.id)} 
                        className="p-1 rounded text-rose-500 hover:bg-rose-500/10"
                      >
                        <Trash2 size={10} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200/5 dark:border-teal-500/10 pt-3">
              <span className="text-[10px] font-bold text-slate-400 block mb-1">Calendar Date Blocker</span>
              <form onSubmit={handleAddBlockedDate} className="flex gap-2">
                <input
                  type="date"
                  value={newBlockedDate}
                  onChange={(e) => setNewBlockedDate(e.target.value)}
                  className="px-2 py-1.5 bg-slate-950 rounded-lg border border-white/5 text-white flex-1 text-[11px]"
                />
                <button type="submit" className="px-3 bg-teal-500/20 text-teal-400 rounded-lg text-[10px] font-bold font-mono">BLOCK</button>
              </form>
            </div>
          </div>
        );
      case 'map':
        return (
          <div className="flex flex-col gap-4 text-left text-xs h-full justify-between pr-1">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono mb-2">Map Studio Pin Manager</h4>
              <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto pr-1">
                {mapMarkers.map(m => (
                  <div key={m.id} className="p-2 rounded-xl bg-slate-900/60 border border-teal-500/10 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white block">{m.name}</span>
                      <span className="text-[9.5px] text-slate-400 font-mono">({m.coords.lat.toFixed(2)}, {m.coords.lon.toFixed(2)}) • {m.type}</span>
                    </div>
                    <button onClick={() => handleDeleteMarker(m.id)} className="p-1 text-rose-500 hover:bg-rose-500/10 rounded">
                      <Trash2 size={10} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleAddMarker} className="border-t border-slate-200/5 dark:border-teal-500/10 pt-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text" placeholder="Pin location name" value={newMarkerName}
                  onChange={(e) => setNewMarkerName(e.target.value)}
                  className="px-2 py-1.5 bg-slate-950 rounded border border-white/5 text-white text-[11px] flex-1"
                />
                <select 
                  value={newMarkerType} onChange={(e) => setNewMarkerType(e.target.value)}
                  className="px-1 bg-slate-950 text-white border border-white/5 rounded text-[10px]"
                >
                  <option value="dream">Dream</option>
                  <option value="visited">Visited</option>
                </select>
              </div>
              <button type="submit" className="py-1 bg-teal-500 text-slate-950 font-bold font-mono text-[10px] rounded-lg">CACHE PIN</button>
            </form>
          </div>
        );
      case 'budget': {
        const simTotal = simLodgingBudget + simFlightsBudget + simFoodBudget + simTransportBudget + simShoppingBudget + simEmergencyBudget;
        const isBudgetOverdraft = simTotal > budget.currentSavings;
        return (
          <div className="flex flex-col gap-4 text-left text-xs h-full justify-between pr-1">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono">Quantum Cost Simulator</h4>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] text-slate-500 uppercase">🏨 Hotel: ₹{simLodgingBudget.toLocaleString()}</span>
                  <input type="range" min="5000" max="150000" step="5000" value={simLodgingBudget} onChange={(e) => setSimLodgingBudget(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] text-slate-500 uppercase">✈️ Flight: ₹{simFlightsBudget.toLocaleString()}</span>
                  <input type="range" min="5000" max="150000" step="5000" value={simFlightsBudget} onChange={(e) => setSimFlightsBudget(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] text-slate-500 uppercase">🍛 Food: ₹{simFoodBudget.toLocaleString()}</span>
                  <input type="range" min="2000" max="50000" step="2000" value={simFoodBudget} onChange={(e) => setSimFoodBudget(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
                </div>
              </div>

              <div className="p-3 bg-slate-950 border border-teal-500/10 rounded-xl flex flex-col items-center justify-center relative">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">PROJECTIONS</span>
                <span className="text-sm font-black font-mono text-white">₹{simTotal.toLocaleString()}</span>
                <span className="text-[7.5px] text-slate-500 font-mono">Cap: ₹{budget.target.toLocaleString()}</span>
                {isBudgetOverdraft && (
                  <span className="text-[7px] text-red-400 font-bold uppercase tracking-wider mt-1.5 animate-pulse">Overdraft warning</span>
                )}
              </div>
            </div>
          </div>
        );
      }
      case 'memories':
        return (
          <div className="flex flex-col gap-4 text-left text-xs h-full justify-between pr-1">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono">Memory Vault Log</h4>
            <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto pr-1">
              {vaultMemories.map(v => (
                <div key={v.id} className="p-2 rounded-xl bg-slate-900/60 border border-teal-500/10 flex gap-2">
                  {v.mediaUrl && <img src={v.mediaUrl} className="w-10 h-10 object-cover rounded-lg border border-white/5" alt={v.title} />}
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-white block truncate">{v.title}</span>
                    <span className="text-[9px] text-slate-405 block truncate">{v.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 border-t border-slate-200/5 dark:border-teal-500/10 pt-3">
              <button 
                onClick={() => {
                  const title = prompt('Enter memory title:');
                  const desc = prompt('Enter memory description:');
                  if (title) {
                    setVaultMemories([{ id: Date.now().toString(), title, description: desc || 'Saved memory log', location: 'Custom coordinates' }, ...vaultMemories]);
                    showToast('Memory logged in vault.', 'success');
                  }
                }}
                className="w-full py-1.5 bg-slate-850 hover:bg-slate-800 text-slate-200 text-[10px] font-bold font-mono rounded-lg"
              >
                + LOG NEW MEMORY
              </button>
            </div>
          </div>
        );
      case 'radar':
        return <RadarCanvas />;
      case 'deals':
        return (
          <div className="flex flex-col gap-4 text-left text-xs h-full justify-between pr-1">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono">Deal Hunter alerts</h4>
            <div className="flex flex-col gap-2 max-h-[120px] overflow-y-auto pr-1">
              {dealAlerts.map(da => (
                <div key={da.id} className="p-2 rounded-xl bg-rose-500/5 border border-rose-500/15 text-[10.5px] text-rose-300 font-mono leading-relaxed">
                  <span className="font-bold mr-1.5">[{da.time}]</span>
                  {da.msg}
                </div>
              ))}
            </div>
            <form onSubmit={handleAddHunt} className="border-t border-teal-500/10 pt-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text" placeholder="Goa, Paris..." value={dealDest} onChange={(e) => setDealDest(e.target.value)}
                  className="px-2 py-1.5 bg-slate-950 border border-white/5 rounded text-[10.5px] flex-1 text-white"
                />
                <input
                  type="number" placeholder="Max price" value={maxFlightDeal} onChange={(e) => setMaxFlightDeal(parseInt(e.target.value) || 0)}
                  className="px-2 py-1.5 bg-slate-950 border border-white/5 rounded text-[10.5px] w-20 text-white font-mono"
                />
              </div>
              <button type="submit" className="py-1 bg-rose-600 text-white text-[10px] font-bold font-mono rounded-lg">ACTIVATE RADAR DEAL HUNTER</button>
            </form>
          </div>
        );
      case 'rules': {
        const recommended = getCockpitRecommendations();
        return (
          <div className="flex flex-col gap-4 text-left text-xs h-full justify-between pr-1">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono">Cockpit & Persona Rules</h4>
            
            {/* Personas */}
            <div className="flex flex-wrap gap-1">
              {['Default', 'Solo Persona', 'Family Persona', 'Business Persona'].map(p => (
                <button
                  key={p} onClick={() => handlePersonaChange(p)}
                  className={`px-2 py-1 rounded text-[9.5px] font-mono font-bold transition-all border ${
                    activePersona === p ? 'bg-teal-500/10 border-teal-500 text-teal-400' : 'bg-slate-950 border-white/5 text-slate-400 hover:border-teal-500/20'
                  }`}
                >
                  {p.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Sliders in mini format */}
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-slate-500 font-mono">Adv: {adventureVal}%</span>
                <input type="range" min="0" max="100" value={adventureVal} onChange={(e) => setAdventureVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-slate-500 font-mono">Comf: {comfortVal}%</span>
                <input type="range" min="0" max="100" value={comfortVal} onChange={(e) => setComfortVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-slate-500 font-mono">Lux: {luxuryVal}%</span>
                <input type="range" min="0" max="100" value={luxuryVal} onChange={(e) => setLuxuryVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-slate-500 font-mono">Exp: {explorationVal}%</span>
                <input type="range" min="0" max="100" value={explorationVal} onChange={(e) => setExplorationVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
              </div>
            </div>

            {/* Matching Result */}
            <div className="p-2.5 bg-slate-950 border border-teal-500/10 rounded-xl mt-1 text-[10px] font-mono flex justify-between items-center">
              <span className="text-slate-400 truncate">Match: {recommended[0]?.name}</span>
              <span className="text-teal-450 font-bold shrink-0">{recommended[0]?.score}%</span>
            </div>
          </div>
        );
      }
      case 'universe':
        return (
          <div className="flex flex-col gap-3 text-left text-xs h-full justify-between pr-1">
            <UniverseGalaxyVisualizer galaxies={universeGalaxies} planets={planets} />
            <form onSubmit={handleAddPlanet} className="flex gap-2">
              <input
                type="text" placeholder="Add Planet name" value={newPlanetName} onChange={(e) => setNewPlanetName(e.target.value)}
                className="px-2 py-1 bg-slate-950 border border-white/5 rounded text-[10px] flex-1 text-white"
              />
              <button type="submit" className="px-2.5 py-1 bg-purple-650 hover:bg-purple-700 text-white rounded text-[10px] font-mono font-bold">LAUNCH</button>
            </form>
          </div>
        );
      case 'simulation':
        return (
          <div className="flex flex-col gap-3.5 text-left text-xs h-full justify-between pr-1">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono">Simulator Engine</h4>
            {!simulationResult ? (
              <form onSubmit={handleRunSimulation} className="flex flex-col gap-2.5">
                <div className="flex gap-2">
                  <input
                    type="text" placeholder="Goa, Kashmir..." value={simDest} onChange={(e) => setSimDest(e.target.value)}
                    className="px-2 py-1.5 bg-slate-950 border border-white/5 rounded text-[11px] flex-1 text-white"
                  />
                  <select value={simSeason} onChange={(e) => setSimSeason(e.target.value)} className="px-1.5 bg-slate-950 border border-white/5 text-[10px] text-white rounded">
                    <option value="monsoon">Monsoon</option>
                    <option value="winter">Winter</option>
                    <option value="summer">Summer</option>
                  </select>
                </div>
                <button type="submit" className="py-1.5 bg-teal-500 text-slate-950 font-bold font-mono text-[10px] rounded-lg">
                  {isSimulating ? 'COMPILING...' : 'RUN SIMULATION'}
                </button>
              </form>
            ) : (
              <div className="p-3 bg-slate-950 border border-teal-500/10 rounded-xl flex flex-col gap-2 font-mono text-[10px]">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Crowds: {simulationResult.crowdRate}%</span>
                  <span>Fatigue: {simulationResult.fatigueRate}%</span>
                </div>
                <div className="text-[9px] text-slate-400 leading-normal truncate">
                  Log: {simulationResult.logs[simulationResult.logs.length - 1]}
                </div>
                <button onClick={() => setSimulationResult(null)} className="text-[9px] text-teal-450 hover:underline self-end">Reset</button>
              </div>
            )}
          </div>
        );
      case 'command':
        return (
          <div className="flex flex-col gap-3 text-left text-xs h-full justify-between pr-1">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono">Cognitive Command AI</h4>
            <div className="p-2 bg-slate-950 rounded-xl border border-teal-500/10 h-28 overflow-y-auto font-mono text-[9.5px] text-slate-350 scrollbar-thin">
              {consoleLogs.slice(-4).map((log, idx) => (
                <div key={idx} className={log.startsWith('>') ? 'text-teal-450 font-bold' : 'text-slate-450'}>
                  {log}
                </div>
              ))}
            </div>
            <form onSubmit={handleAICommand} className="flex gap-2">
              <input
                type="text" value={commandText} onChange={(e) => setCommandText(e.target.value)}
                placeholder="Type command..."
                className="px-2 py-1.5 bg-slate-950 border border-teal-500/15 text-white font-mono text-[10px] rounded-lg flex-1"
              />
              <button type="submit" className="px-3 bg-teal-500 text-slate-950 font-bold font-mono text-[10px] rounded-lg">EXE</button>
            </form>
          </div>
        );
      default:
        return <div className="text-slate-500 text-center py-8">Widget Telemetry Offline</div>;
    }
  };

  // Multi-route specs
  const routeComparisonSpecs = [
    { type: 'Budget Route', cost: '₹22,400', distance: '1,420 km', duration: '28h (Train+Bus)', carbon: '35 kg', safety: 'High' },
    { type: 'Luxury Route', cost: '₹1,24,000', distance: '1,150 km', duration: '4.5h (Flight+Cab)', carbon: '210 kg', safety: 'Ultimate' },
    { type: 'Fastest Route', cost: '₹48,000', distance: '1,120 km', duration: '3.5h (Direct Flight)', carbon: '185 kg', safety: 'High' },
    { type: 'Scenic Route', cost: '₹16,500', distance: '1,560 km', duration: '36h (Coastal Ghats)', carbon: '88 kg', safety: 'Medium' },
    { type: 'Family Route', cost: '₹55,000', distance: '1,200 km', duration: '8.5h (Comfort Stops)', carbon: '140 kg', safety: 'High' },
    { type: 'Adventure Route', cost: '₹28,000', distance: '1,480 km', duration: '22h (Offroad Trails)', carbon: '92 kg', safety: 'Medium' }
  ];

  // Active Layout Preset details
  const activeWSPreset = workspacePresets.find(ws => ws.id === activeWorkspace) || workspacePresets[0];

  return (
    <div className="py-4 text-left flex flex-col gap-8 w-full">
      <style>{`
        .grid-cyber {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, rgba(45,212,191,0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(45,212,191,0.02) 1px, transparent 1px);
        }
        .scanline-hud::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          background: rgba(45, 212, 191, 0.12);
          animation: scanline-sweep 5s linear infinite;
          left: 0;
          top: 0;
          z-index: 10;
          pointer-events: none;
        }
        @keyframes scanline-sweep {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .glass-neo {
          background: rgba(15, 23, 42, 0.55);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(45, 212, 191, 0.1);
        }
      `}</style>

      {/* Header OS Panel */}
      <div className="flex justify-between items-start flex-col md:flex-row gap-4 border-b border-slate-200 dark:border-teal-500/10 pb-6 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent blur-xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse relative block">
              <span className="absolute inset-0 rounded-full bg-teal-400/50 scale-150 animate-ping" />
            </span>
            <span className="text-[10px] text-teal-655 dark:text-teal-400 font-mono font-bold tracking-widest uppercase">
              TRAVELVERSE OS v2.100 // ACTIVE PRESENCE: {activeWorkspace.toUpperCase()} WORKSPACE
            </span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight flex items-center gap-2.5">
            Atlas Sentient Command
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Deploy customizable split panels, launch simulation telemetry, customize logic rule overrides, and scan satellite radar maps.
          </p>
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
          <select
            value={activeWorkspace}
            onChange={(e) => setActiveWorkspace(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-teal-500/15 text-xs font-bold text-slate-800 dark:text-teal-400 font-mono outline-none shadow-sm cursor-pointer"
          >
            {workspacePresets.map(preset => (
              <option key={preset.id} value={preset.id}>OS Desk: {preset.name}</option>
            ))}
          </select>

          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-rose-200 dark:border-rose-900/40 bg-white dark:bg-slate-900/30 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-xs font-bold rounded-xl text-rose-600 dark:text-rose-400 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <LogOut size={12} /> Shutdown OS
          </button>
        </div>
      </div>

      {/* Profile & Analytics Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full relative z-10">
        
        {/* Profile Card */}
        <div className="lg:col-span-1 p-5 rounded-3xl glass-neo border border-slate-200/50 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 relative overflow-hidden scanline-hud">
          <div className="flex items-center gap-4 relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-14 h-14 rounded-2xl object-cover border border-teal-500/30 shadow-lg"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-black text-sm text-slate-900 dark:text-teal-350 truncate leading-snug tracking-wide">
                {user.name}
              </h3>
              <p className="text-[10px] text-slate-400 dark:text-slate-400 font-mono truncate">{user.email}</p>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-655 dark:text-teal-400 font-bold font-mono text-[9px] mt-1.5 uppercase">
                LEVEL {userLevel} VOYAGER
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic mt-1">
            "{user.bio}"
          </p>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer"
          >
            {isEditing ? 'CLOSE CREDENTIALS' : 'EDIT CREDENTIALS'}
          </button>

          {isEditing && (
            <form onSubmit={handleProfileSave} className="flex flex-col gap-3 mt-2 border-t border-slate-200/10 pt-4 text-xs">
              <div className="flex flex-col gap-1 text-left">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">User Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-teal-500/15 focus:outline-none focus:border-teal-500 text-slate-800 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow cursor-pointer"
              >
                SAVE DETAILS
              </button>
            </form>
          )}
        </div>

        {/* Analytics stats */}
        <div className="lg:col-span-3 p-5 rounded-3xl glass-neo border border-slate-200/50 dark:border-teal-500/10 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/5 text-center flex flex-col gap-1 h-full justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Active Projects</span>
            <span className="text-2xl font-black text-slate-850 dark:text-white">{itineraries.length}</span>
            <span className="text-[9px] text-teal-655 dark:text-teal-400 font-bold uppercase tracking-wider mt-1">Saved Plans</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/5 text-center flex flex-col gap-1 h-full justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Persona Mode</span>
            <span className="text-sm font-black font-mono text-slate-800 dark:text-teal-400 uppercase truncate mt-1">{activePersona}</span>
            <span className="text-[9px] text-teal-655 dark:text-teal-400 font-bold uppercase tracking-wider mt-1">AI Template</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/5 text-center flex flex-col gap-1 h-full justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Custom Rules</span>
            <span className="text-2xl font-black text-slate-850 dark:text-white">{customRules.length}</span>
            <span className="text-[9px] text-teal-655 dark:text-teal-400 font-bold uppercase tracking-wider mt-1">Active Rules</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/5 text-center flex flex-col gap-1 h-full justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">OS XP Ledger</span>
            <span className="text-2xl font-black text-slate-850 dark:text-white">{userXp}</span>
            <span className="text-[9px] text-teal-655 dark:text-teal-400 font-bold uppercase tracking-wider mt-1">Level {userLevel} Core</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation Menu */}
      <div className="flex border-b border-slate-200/20 dark:border-teal-500/10 overflow-x-auto gap-2 py-1 scrollbar-thin relative z-10 w-full">
        {[
          { id: 'workspace', label: '🛰️ Workspace Builder' },
          { id: 'universe', label: '🌌 Personal Universe' },
          { id: 'rules', label: '⚙️ Logic Rules & Personas' },
          { id: 'radar', label: '📡 Radar & Deal Alert' },
          { id: 'simulation', label: '🔮 Experience Simulator' },
          { id: 'command', label: '🧠 AI Command Console' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setDashboardTab(tab.id)}
            className={`px-4 py-3 rounded-t-xl text-[11px] font-bold font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              dashboardTab === tab.id ? 'border-b-2 border-teal-500 text-teal-605 dark:text-teal-400 bg-teal-500/5' : 'text-slate-500 hover:text-slate-855'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Rendering */}
      <div className="relative z-10 w-full min-h-[500px]">
        
        {/* TAB 1: WORKSPACE BUILDER */}
        {dashboardTab === 'workspace' && (
          <div className="flex flex-col gap-6 w-full text-xs">
            {/* Setup bar */}
            <div className="p-5 rounded-3xl glass-neo border border-teal-500/10 flex justify-between items-center flex-wrap gap-4 text-left">
              <div>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0">Workspace customizer</h4>
                <p className="text-[11px] text-slate-455">Configure screens, layouts, split configurations, and load widget decks.</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleResetWorkspace}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-teal-500/25 text-teal-400 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer"
                >
                  RESET FACTORY LAYOUTS
                </button>
                <button
                  onClick={() => setIsCreatingWorkspace(true)}
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer"
                >
                  + CREATE WORKSPACE PRESET
                </button>
              </div>
            </div>

            {/* Layout Configurations */}
            <div className="p-4 bg-slate-900/60 border border-teal-500/10 rounded-2xl flex justify-between items-center flex-wrap gap-4 text-left">
              <div className="flex gap-2 flex-wrap">
                {['single', 'split-h', 'split-v', 'grid', 'floating'].map(mode => (
                  <button
                    key={mode}
                    onClick={() => {
                      const updated = workspacePresets.map(p => p.id === activeWorkspace ? { ...p, layout: mode } : p);
                      setWorkspacePresets(updated);
                    }}
                    className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono font-bold uppercase transition-all ${
                      activeWSPreset.layout === mode ? 'bg-teal-500/10 border-teal-500 text-teal-400' : 'bg-slate-950 border-white/5 text-slate-500'
                    }`}
                  >
                    Layout: {mode}
                  </button>
                ))}
              </div>

              {/* Active Widgets selector checklist */}
              <div className="flex items-center gap-3 text-[10.5px] font-mono text-slate-400 flex-wrap">
                <span className="font-bold uppercase text-teal-450">LOADED DECK:</span>
                {['itinerary', 'map', 'budget', 'memories', 'radar', 'deals', 'rules', 'universe', 'simulation', 'command', 'passport'].map(wId => {
                  const isActive = activeWSPreset.widgets.includes(wId);
                  return (
                    <label key={wId} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={() => {
                          const wList = isActive 
                            ? activeWSPreset.widgets.filter(x => x !== wId) 
                            : [...activeWSPreset.widgets, wId];
                          const updated = workspacePresets.map(p => p.id === activeWorkspace ? { ...p, widgets: wList } : p);
                          setWorkspacePresets(updated);
                        }}
                        className="rounded text-teal-500 focus:ring-teal-500 bg-slate-950 border-white/5"
                      />
                      <span className={isActive ? 'text-teal-400 font-bold' : 'text-slate-500'}>{wId.toUpperCase()}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Render Workspace Layout Container */}
            <div className="relative border border-teal-500/10 bg-slate-950/40 rounded-3xl p-6 min-h-[480px]">
              
              {/* Layout mode Single Widget */}
              {activeWSPreset.layout === 'single' && activeWSPreset.widgets.length > 0 && (
                <div className="w-full h-full p-5 rounded-2xl glass-neo">
                  {renderWidget(activeWSPreset.widgets[0])}
                </div>
              )}

              {/* Layout mode Split Horizontal */}
              {activeWSPreset.layout === 'split-h' && activeWSPreset.widgets.length > 0 && (
                <div className={activeWSPreset.widgets.length >= 2 ? "grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-start" : "w-full h-full"}>
                  <div className="p-6 rounded-2xl glass-neo h-full">
                    {renderWidget(activeWSPreset.widgets[0])}
                  </div>
                  {activeWSPreset.widgets.length >= 2 && (
                    <div className="p-6 rounded-2xl glass-neo h-full">
                      {renderWidget(activeWSPreset.widgets[1])}
                    </div>
                  )}
                </div>
              )}

              {/* Layout mode Split Vertical */}
              {activeWSPreset.layout === 'split-v' && activeWSPreset.widgets.length > 0 && (
                <div className="flex flex-col gap-6 h-full">
                  <div className="p-5 rounded-2xl glass-neo flex-1">
                    {renderWidget(activeWSPreset.widgets[0])}
                  </div>
                  {activeWSPreset.widgets.length >= 2 && (
                    <div className="p-5 rounded-2xl glass-neo flex-1">
                      {renderWidget(activeWSPreset.widgets[1])}
                    </div>
                  )}
                </div>
              )}

              {/* Layout mode Grid */}
              {activeWSPreset.layout === 'grid' && activeWSPreset.widgets.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-start">
                  {activeWSPreset.widgets.map((wId, idx) => (
                    <div key={idx} className="p-5 rounded-2xl glass-neo">
                      {renderWidget(wId)}
                    </div>
                  ))}
                </div>
              )}

              {/* Layout mode Floating Windows */}
              {activeWSPreset.layout === 'floating' && (
                <div className="relative w-full h-auto md:h-[850px] overflow-auto border border-dashed border-teal-500/10 rounded-2xl bg-slate-950/80 scrollbar-thin pb-10 flex flex-col md:block gap-6 p-4 md:p-0">
                  <div className="absolute inset-0 grid-cyber opacity-60 pointer-events-none" />
                  
                  {activeWSPreset.widgets.map((wId) => {
                    const defaultPositions = {
                      itinerary: { x: 20, y: 110, w: 460, h: 420, z: 10 },
                      map: { x: 500, y: 110, w: 460, h: 420, z: 5 },
                      budget: { x: 20, y: 550, w: 460, h: 360, z: 5 },
                      memories: { x: 500, y: 550, w: 460, h: 360, z: 5 },
                      radar: { x: 20, y: 110, w: 450, h: 350, z: 4 },
                      deals: { x: 490, y: 110, w: 460, h: 350, z: 4 },
                      rules: { x: 20, y: 110, w: 450, h: 350, z: 6 },
                      universe: { x: 490, y: 110, w: 450, h: 350, z: 6 },
                      simulation: { x: 20, y: 480, w: 450, h: 350, z: 7 },
                      command: { x: 490, y: 480, w: 450, h: 350, z: 7 },
                      passport: { x: 20, y: 110, w: 460, h: 420, z: 8 }
                    };
                    const item = widgetPositions[wId];
                    const isValid = item && 
                      typeof item.x === 'number' && !isNaN(item.x) &&
                      typeof item.y === 'number' && !isNaN(item.y) &&
                      typeof item.w === 'number' && !isNaN(item.w) &&
                      typeof item.h === 'number' && !isNaN(item.h) &&
                      typeof item.z === 'number' && !isNaN(item.z);
                    const pos = isValid ? item : (defaultPositions[wId] || { x: 50, y: 120, w: 420, h: 320, z: 5 });
                    return (
                      <div 
                        key={wId}
                        className={`${isMobile ? 'relative' : 'absolute'} glass-neo rounded-2xl border border-teal-500/20 shadow-2xl flex flex-col pointer-events-auto`}
                        style={!isMobile ? {
                          left: `${pos.x}px`,
                          top: `${pos.y}px`,
                          width: `${pos.w}px`,
                          height: `${pos.h}px`,
                          zIndex: pos.z
                        } : {
                          width: '100%',
                          height: 'auto'
                        }}
                      >
                        {/* Header handle controls */}
                        <div className="flex justify-between items-center bg-slate-900/95 px-4 py-2 border-b border-teal-500/10 rounded-t-2xl cursor-default select-none">
                          <span className="font-mono font-bold text-[9px] text-teal-400 uppercase tracking-widest">{wId} panel</span>
                          <div className="flex items-center gap-1.5 text-[8.5px] font-bold font-mono">
                            <button onClick={() => moveWidget(wId, 'left')} className="p-0.5 text-slate-400 hover:text-teal-450">◀</button>
                            <button onClick={() => moveWidget(wId, 'up')} className="p-0.5 text-slate-400 hover:text-teal-450">▲</button>
                            <button onClick={() => moveWidget(wId, 'down')} className="p-0.5 text-slate-400 hover:text-teal-450">▼</button>
                            <button onClick={() => moveWidget(wId, 'right')} className="p-0.5 text-slate-400 hover:text-teal-450">▶</button>
                            <button onClick={() => resizeWidget(wId, 'shrink')} className="p-0.5 text-slate-400 hover:text-teal-450 ml-1">－</button>
                            <button onClick={() => resizeWidget(wId, 'grow')} className="p-0.5 text-slate-400 hover:text-teal-450">＋</button>
                          </div>
                        </div>
                        {/* Body content */}
                        <div className="p-5 flex-1 overflow-y-auto scrollbar-thin">
                          {renderWidget(wId)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeWSPreset.widgets.length === 0 && (
                <div className="text-slate-500 py-16 text-center">
                  Select widgets from the Loaded Deck panel to load them into the workspace grid.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PERSONAL UNIVERSE */}
        {dashboardTab === 'universe' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full text-xs">
            
            {/* Visual Solar System Orbit */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <UniverseGalaxyVisualizer galaxies={universeGalaxies} planets={planets} />

              <div className="p-5 rounded-3xl glass-neo border border-teal-500/10 text-left">
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-3">Custom collections & Galaxies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {universeGalaxies.map(g => (
                    <div key={g.id} className="p-3.5 rounded-2xl bg-slate-900/50 border border-teal-500/5 text-left">
                      <span className="text-[10px] font-bold text-teal-400 font-mono block uppercase mb-1">{g.name}</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {g.destinations.map((d, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-950 border border-white/5 rounded text-[9px] font-semibold text-slate-350">{d}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {planets.map(p => (
                    <div key={p.id} className="p-3.5 rounded-2xl bg-slate-900/50 border border-purple-500/15 text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-purple-400 font-mono block uppercase">{p.name}</span>
                        <span className="text-[8px] px-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full font-mono font-bold uppercase">{p.type}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {p.cities.map((d, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-950 border border-white/5 rounded text-[9px] font-semibold text-slate-350">{d}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Planet Creator Form */}
            <div className="lg:col-span-1 p-6 rounded-3xl glass-neo border border-teal-500/10 text-left flex flex-col gap-4">
              <div>
                <span className="text-[9px] font-bold text-teal-450 uppercase tracking-widest font-mono">Goals Visualization</span>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Create Travel Planet</h4>
                <p className="text-[11px] mt-1 text-slate-455">Map custom target locations to a simulated planet in your travel orbit.</p>
              </div>

              <form onSubmit={handleAddPlanet} className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Planet Name</label>
                  <input
                    type="text" placeholder="e.g. Planet Retreat" value={newPlanetName} onChange={(e) => setNewPlanetName(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Ecosystem Type</label>
                    <select
                      value={newPlanetType} onChange={(e) => setNewPlanetType(e.target.value)}
                      className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white text-[11px]"
                    >
                      <option value="ocean">🌊 Ocean World</option>
                      <option value="jungle">🌿 Lush Jungle</option>
                      <option value="desert">🏜️ Dunes Desert</option>
                      <option value="ice">❄️ Glacial Ice</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Travel Theme</label>
                    <select
                      value={newPlanetTheme} onChange={(e) => setNewPlanetTheme(e.target.value)}
                      className="px-2 py-1.5 rounded-lg bg-slate-950 border border-white/5 text-white text-[11px]"
                    >
                      <option value="historical">History Heritage</option>
                      <option value="relaxing">Spa Relaxing</option>
                      <option value="extreme">Extreme Sports</option>
                      <option value="culinary">Local Culinary</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Associated Cities/States</label>
                  <input
                    type="text" placeholder="e.g. Surat, Jaipur, Leh" value={newPlanetCities} onChange={(e) => setNewPlanetCities(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-white placeholder-slate-600"
                  />
                </div>
                <button type="submit" className="py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold font-mono text-xs rounded-xl shadow transition-colors">
                  LAUNCH PLANET SATELLITE
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: LOGIC RULES & PERSONAS */}
        {dashboardTab === 'rules' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full text-xs">
            
            {/* Rule builder form & list */}
            <div className="lg:col-span-2 flex flex-col gap-6 text-left">
              <div className="p-6 rounded-3xl glass-neo border border-teal-500/10">
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1 flex items-center gap-1.5"><Settings size={14} className="text-teal-400" /> Recommendation Logic override rule builder</h4>
                <p className="text-[11px] text-slate-455 mb-4">Set conditional triggers that instruct Atlas to modify hotel, activity, or flight suggestions automatically without code.</p>
                
                <form onSubmit={handleAddRule} className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-end p-4 rounded-2xl bg-slate-950 border border-white/5 mb-6">
                  <div className="flex flex-col gap-1 col-span-1">
                    <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">IF Variable</span>
                    <select value={ruleParam} onChange={(e) => setRuleParam(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 text-white rounded text-[11px]">
                      <option value="budget">Budget (₹)</option>
                      <option value="temp">Temp (°C)</option>
                      <option value="group">Group Size</option>
                      <option value="pace">Travel Pace</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-1 col-span-1">
                    <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Operator</span>
                    <select value={ruleOp} onChange={(e) => setRuleOp(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 text-white rounded text-[11px]">
                      <option value=">">&gt; (Greater)</option>
                      <option value="<">&lt; (Less)</option>
                      <option value="==">== (Equals)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1 col-span-1">
                    <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Value</span>
                    <input type="text" value={ruleVal} onChange={(e) => setRuleVal(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 text-white rounded text-[11px] font-mono" />
                  </div>

                  <div className="flex flex-col gap-1 col-span-1">
                    <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">THEN Action</span>
                    <select value={ruleAction} onChange={(e) => setRuleAction(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 text-white rounded text-[11px]">
                      <option value="recommend">Recommend</option>
                      <option value="avoid">Avoid</option>
                      <option value="prioritize">Prioritize</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1 col-span-1">
                    <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Target Class</span>
                    <input type="text" value={ruleTarget} onChange={(e) => setRuleTarget(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 text-white rounded text-[11px]" />
                  </div>

                  <button type="submit" className="py-2 bg-teal-500 text-slate-950 font-mono font-bold rounded-lg col-span-5 text-[10px] mt-1.5">
                    INJECT COMPILED RECO RULE
                  </button>
                </form>

                <div className="border-t border-slate-200/5 dark:border-teal-500/10 pt-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Compiled Active Rule Nodes</span>
                  <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto pr-1">
                    {customRules.map(rule => (
                      <div key={rule.id} className="p-2.5 rounded-xl bg-slate-900/50 border border-teal-500/10 flex justify-between items-center font-mono text-[10.5px]">
                        <div>
                          <span className="text-teal-400 font-bold">IF</span> {rule.param} {rule.op} {parseInt(rule.val).toLocaleString()} <span className="text-teal-400 font-bold">THEN</span> {rule.action.toUpperCase()} <span className="text-slate-300 font-semibold">"{rule.target}"</span>
                        </div>
                        <button onClick={() => handleDeleteRule(rule.id)} className="p-1 text-rose-500 hover:bg-rose-500/10 rounded">
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic control cockpit sliders */}
              <div className="p-6 rounded-3xl glass-neo border border-teal-500/10">
                <div className="mb-4">
                  <span className="text-[9px] font-bold text-teal-455 uppercase tracking-widest font-mono">Interactive Telemetry Cockpit</span>
                  <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Dynamic Travel Controls</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column Sliders */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase font-mono"><span>Adventure Level</span><span className="text-teal-400 font-bold">{adventureVal}%</span></div>
                      <input type="range" min="0" max="100" value={adventureVal} onChange={(e) => setAdventureVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase font-mono"><span>Comfort Level</span><span className="text-teal-400 font-bold">{comfortVal}%</span></div>
                      <input type="range" min="0" max="100" value={comfortVal} onChange={(e) => setComfortVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase font-mono"><span>Luxury Tier</span><span className="text-teal-400 font-bold">{luxuryVal}%</span></div>
                      <input type="range" min="0" max="100" value={luxuryVal} onChange={(e) => setLuxuryVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase font-mono"><span>Exploration Depth</span><span className="text-teal-400 font-bold">{explorationVal}%</span></div>
                      <input type="range" min="0" max="100" value={explorationVal} onChange={(e) => setExplorationVal(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-teal-400" />
                    </div>
                  </div>

                  {/* Right Column Recommendations */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-teal-500/10 flex flex-col gap-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono border-b border-teal-500/5 pb-1">Real-time recommended nodes</span>
                    <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto">
                      {recommendedCockpit.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-[10.5px] font-mono">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                            <span className="font-bold text-slate-200">{item.name}</span>
                          </div>
                          <span className="text-teal-455 font-bold">{item.score}% Match</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI memory catalog & personas */}
            <div className="lg:col-span-1 flex flex-col gap-6 text-left">
              {/* Persona switcher */}
              <div className="p-6 rounded-3xl glass-neo border border-teal-500/10 flex flex-col gap-4">
                <div>
                  <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1">AI Travel Personas</h4>
                  <p className="text-[11px] text-slate-455 leading-relaxed">Switch configurations instantly to adapt preferences sliders.</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { id: 'Solo Persona', desc: 'Hostels, backpacking, and high adventure' },
                    { id: 'Family Persona', desc: 'Resorts, relaxation, and veg dining' },
                    { id: 'Business Persona', desc: 'High-speed transit, corporate hotels, first class' },
                    { id: 'Default', desc: 'Reset to standard balanced settings' }
                  ].map(p => (
                    <button
                      key={p.id} onClick={() => handlePersonaChange(p.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        activePersona === p.id 
                          ? 'bg-teal-500/15 border-teal-500 text-teal-400' 
                          : 'bg-slate-900/50 border-white/5 hover:border-teal-500/20 text-slate-300'
                      }`}
                    >
                      <span className="font-bold block text-[11px] mb-0.5">{p.id}</span>
                      <span className="text-[9.5px] text-slate-555 leading-normal block">{p.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Memory List */}
              <div className="p-6 rounded-3xl glass-neo border border-teal-500/10 flex flex-col gap-4">
                <div>
                  <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1">Atlas Cognitive Memory</h4>
                  <p className="text-[11px] text-slate-455">Add, edit, or wipe custom items saved inside the travel intelligence registry.</p>
                </div>

                <form onSubmit={handleAddMemory} className="flex gap-2">
                  <input
                    type="text" placeholder="Atlas remembers: likes window..." value={newMemoryText} onChange={(e) => setNewMemoryText(e.target.value)}
                    className="px-2.5 py-2 bg-slate-950 border border-white/5 text-[11px] rounded-xl flex-1 text-white"
                  />
                  <button type="submit" className="px-3 bg-teal-500 text-slate-950 rounded-xl font-bold font-mono text-[10px]">ADD</button>
                </form>

                <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto">
                  {aiMemories.map(m => (
                    <div key={m.id} className="p-2 rounded-xl bg-slate-900/40 border border-teal-500/5 flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-300 italic truncate pr-2">"{m.text}"</span>
                      <button onClick={() => setAiMemories(aiMemories.filter(x => x.id !== m.id))} className="text-rose-505 hover:text-rose-400 font-mono text-[9px] font-bold">REMOVE</button>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={handleResetMemories}
                  className="w-full py-2 bg-rose-900/10 hover:bg-rose-900/30 text-rose-500 dark:text-rose-400 border border-rose-900/30 text-[10px] font-bold font-mono rounded-xl transition-all"
                >
                  PURGE INTEL CORE MEMORY
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RADAR & DEALS */}
        {dashboardTab === 'radar' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full text-xs">
            
            {/* Radar Panel */}
            <div className="lg:col-span-2 flex flex-col gap-6 text-left">
              <RadarCanvas />
              
              {/* Radar logs */}
              <div className="p-5 rounded-3xl glass-neo border border-teal-500/10">
                <span className="text-[9px] font-bold text-teal-455 uppercase tracking-widest font-mono">Radar telemetry readouts</span>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5 mb-3">Live updates feed</h4>
                <div className="flex flex-col gap-2.5 font-mono text-[11px] max-h-[180px] overflow-y-auto">
                  <div className="p-2 rounded bg-slate-900/60 border-l-2 border-teal-400 text-slate-300">
                    <span className="text-teal-455 font-bold mr-1.5">[17:05]</span>
                    Satellite feed connected: Leh-Ladakh NH-3 Highway clear of landslide debris.
                  </div>
                  <div className="p-2 rounded bg-slate-900/60 border-l-2 border-amber-400 text-slate-300">
                    <span className="text-amber-455 font-bold mr-1.5">[16:58]</span>
                    Weather warning update: Heavy monsoons in Munnar valleys. Outstation hiking routes restricted.
                  </div>
                  <div className="p-2 rounded bg-slate-900/60 border-l-2 border-sky-400 text-slate-300">
                    <span className="text-sky-455 font-bold mr-1.5">[16:32]</span>
                    Price drop indicator: Flights DEL to GOI dropped by 18% matching flight class settings.
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Deal hunter Alerts */}
            <div className="lg:col-span-1 flex flex-col gap-6 text-left">
              {/* Loaded Hunters */}
              <div className="p-6 rounded-3xl glass-neo border border-teal-500/10 flex flex-col gap-4">
                <div>
                  <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1">Smart Deal Hunters</h4>
                  <p className="text-[11px] text-slate-455">Deploy automated bots that search flight and hotel pricing databases.</p>
                </div>

                <form onSubmit={handleAddHunt} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase font-mono">Destination</label>
                    <input
                      type="text" placeholder="Goa, Paris, Tokyo" value={dealDest} onChange={(e) => setDealDest(e.target.value)}
                      className="px-2.5 py-1.5 bg-slate-950 border border-white/5 text-[11px] text-white rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase font-mono">Flight Cap (₹)</label>
                      <input
                        type="number" value={maxFlightDeal} onChange={(e) => setMaxFlightDeal(parseInt(e.target.value) || 0)}
                        className="px-2 py-1 bg-slate-950 border border-white/5 text-[10.5px] text-white font-mono rounded"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase font-mono">Hotel Cap (₹)</label>
                      <input
                        type="number" value={maxHotelDeal} onChange={(e) => setMaxHotelDeal(parseInt(e.target.value) || 0)}
                        className="px-2 py-1 bg-slate-950 border border-white/5 text-[10.5px] text-white font-mono rounded"
                      />
                    </div>
                  </div>
                  <button type="submit" className="py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold font-mono transition-all text-center">
                    ACTIVATE HUNT BOT
                  </button>
                </form>

                <div className="border-t border-slate-200/5 dark:border-teal-500/10 pt-4 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Active Hunter Protocols</span>
                  {activeHunts.map(h => (
                    <div key={h.id} className="p-2 rounded-xl bg-slate-900/50 border border-teal-500/10 flex justify-between items-center font-mono text-[10.5px]">
                      <div>
                        <span className="font-bold text-white uppercase">{h.dest}</span>
                        <span className="text-slate-400 block text-[9.5px]">Flight: ₹{h.maxFlight.toLocaleString()} | Hotel: ₹{h.maxHotel.toLocaleString()}</span>
                      </div>
                      <button onClick={() => handleRemoveHunt(h.id)} className="p-1 text-rose-500 hover:bg-rose-500/10 rounded">
                        <Trash2 size={11} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SIMULATION & COMPARE */}
        {dashboardTab === 'simulation' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full text-xs">
            
            {/* Experience Simulation parameters and output */}
            <div className="lg:col-span-2 flex flex-col gap-6 text-left">
              <div className="p-6 rounded-3xl glass-neo border border-teal-500/10">
                <div className="mb-4">
                  <span className="text-[9px] font-bold text-teal-455 uppercase tracking-widest font-mono">Predictive Intelligence Studio</span>
                  <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Experience Simulation Studio</h4>
                  <p className="text-[11px] text-slate-400">Generate projected travel metrics, crowds density forecasts, and pace fatigue rates before booking.</p>
                </div>

                <form onSubmit={handleRunSimulation} className="grid grid-cols-2 md:grid-cols-5 gap-3 items-end p-4 rounded-2xl bg-slate-950 border border-white/5 mb-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">Destination</span>
                    <input type="text" value={simDest} onChange={(e) => setSimDest(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 rounded text-[11px] text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">Season</span>
                    <select value={simSeason} onChange={(e) => setSimSeason(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 text-white rounded text-[11px]">
                      <option value="monsoon">Monsoon</option>
                      <option value="winter">Winter Peak</option>
                      <option value="summer">Summer Dry</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">Weather</span>
                    <select value={simWeather} onChange={(e) => setSimWeather(e.target.value)} className="px-2 py-1.5 bg-slate-900 border border-white/5 text-white rounded text-[11px]">
                      <option value="rainy">Rainy</option>
                      <option value="clear">Clear Skies</option>
                      <option value="snowy">Heavy Snow</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">Budget (₹)</span>
                    <input type="number" value={simBudget} onChange={(e) => setSimBudget(parseInt(e.target.value) || 0)} className="px-2 py-1.5 bg-slate-900 border border-white/5 rounded text-[11px] text-white font-mono" />
                  </div>
                  <button type="submit" className="py-2 bg-teal-500 text-slate-950 font-mono font-bold rounded-lg text-[10px] transition-all hover:bg-teal-650">
                    {isSimulating ? 'SIMULATING...' : 'RUN SIMULATION'}
                  </button>
                </form>

                {/* Simulation results output */}
                {simulationResult && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-teal-500/10 flex flex-col gap-4 relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
                      <div className="p-3 bg-slate-900/60 border border-white/5 rounded-xl">
                        <span className="text-[8px] text-slate-500 block mb-0.5">Crowd Density</span>
                        <span className={`text-sm font-black ${simulationResult.crowdRate > 70 ? 'text-amber-500' : 'text-green-400'}`}>{simulationResult.crowdRate}%</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 border border-white/5 rounded-xl">
                        <span className="text-[8px] text-slate-500 block mb-0.5">Fatigue Index</span>
                        <span className="text-sm font-black text-slate-200">{simulationResult.fatigueRate}%</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 border border-white/5 rounded-xl">
                        <span className="text-[8px] text-slate-500 block mb-0.5">Hotel cost projection</span>
                        <span className="text-sm font-black text-teal-400">₹{simulationResult.costs.lodgingC.toLocaleString()}</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 border border-white/5 rounded-xl">
                        <span className="text-[8px] text-slate-500 block mb-0.5">Transit cost</span>
                        <span className="text-sm font-black text-teal-400">₹{simulationResult.costs.transitC.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-200/5 dark:border-teal-500/10 pt-3">
                      <span className="text-[9.5px] font-bold text-teal-450 uppercase tracking-wider block mb-2 font-mono">Diagnostic Simulation Logs</span>
                      <div className="flex flex-col gap-1 text-[10px] font-mono text-slate-400 leading-normal">
                        {simulationResult.logs.map((log, i) => (
                          <div key={i}>• {log}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Multi-route comparison engine */}
            <div className="lg:col-span-1 p-6 rounded-3xl glass-neo border border-teal-500/10 text-left flex flex-col gap-4 w-full">
              <div>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0 mb-1">Multi-Route Comparator</h4>
                <p className="text-[11px] text-slate-455">Compare 6 simulated routing variants side by side.</p>
              </div>

              <div className="flex flex-col gap-2.5 max-h-[420px] overflow-y-auto pr-1">
                {routeComparisonSpecs.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-900/50 border border-teal-500/5 text-left flex flex-col gap-2 font-mono text-[10px]">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1">
                      <span className="font-bold text-teal-400">{item.type}</span>
                      <span className="text-white font-bold">{item.cost}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-slate-405 text-[9px]">
                      <span>Dist: {item.distance}</span>
                      <span>Time: {item.duration}</span>
                      <span>Carbon: {item.carbon}</span>
                      <span>Safety: {item.safety}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: AI COMMAND CENTER CONSOLE */}
        {dashboardTab === 'command' && (
          <div className="flex flex-col gap-6 w-full text-xs text-left">
            <div className="p-6 rounded-3xl glass-neo border border-teal-500/10 relative overflow-hidden flex flex-col gap-4">
              <div className="absolute inset-0 bg-cyber opacity-30 pointer-events-none" />
              
              <div>
                <span className="text-[9px] font-bold text-teal-455 uppercase tracking-widest font-mono">Sentient Travel Secretary</span>
                <h3 className="font-display font-black text-lg text-slate-900 dark:text-white mt-0.5">Travel Command Center AI</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Type instructions in natural language. Atlas parses constraints and executes commands on itineraries, profiles, and preferences instantly.
                </p>
              </div>

              {/* Console Output logs screen */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-teal-500/10 h-72 overflow-y-auto flex flex-col gap-1.5 font-mono text-[11px] text-slate-350 scrollbar-thin">
                {consoleLogs.map((log, idx) => (
                  <div key={idx} className={log.startsWith('>') ? 'text-teal-400 font-bold' : 'text-slate-355 leading-relaxed'}>
                    {log}
                  </div>
                ))}
                {isExecutingCommand && (
                  <div className="text-teal-450 animate-pulse">Running Atlas compiler... [WAIT]</div>
                )}
              </div>

              <form onSubmit={handleAICommand} className="flex gap-3 mt-1.5">
                <input
                  type="text"
                  value={commandText}
                  onChange={(e) => setCommandText(e.target.value)}
                  placeholder="e.g. Create a 10-day Switzerland trip under ₹2 lakh."
                  className="flex-1 px-4 py-3.5 rounded-xl bg-slate-950 border border-teal-500/15 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 font-mono text-xs"
                />
                <button
                  type="submit"
                  disabled={isExecutingCommand}
                  className="px-6 py-3.5 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-xl font-bold font-mono text-xs transition-all shadow"
                >
                  EXECUTE
                </button>
              </form>

              {/* Suggestions shortcuts helper */}
              <div className="flex gap-2 items-center flex-wrap mt-1 text-[10px] text-slate-400">
                <span className="font-bold font-mono uppercase text-teal-505">Suggested commands:</span>
                {[
                  "Create a 10-day Switzerland trip under ₹2 lakh.",
                  "Show me beach destinations with cool weather.",
                  "Create a road trip avoiding toll roads."
                ].map((txt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCommandText(txt)}
                    className="px-2.5 py-1 bg-slate-900 border border-white/5 hover:border-teal-500/30 rounded text-[9.5px] font-semibold text-slate-350 transition-all cursor-pointer"
                  >
                    "{txt}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Save Workspace Preset Modal Dialog */}
      <AnimatePresence>
        {isCreatingWorkspace && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCreatingWorkspace(false)}
              className="fixed inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-teal-500/20 shadow-2xl p-6 rounded-3xl text-left"
            >
              <div className="flex justify-between items-center border-b border-teal-500/10 pb-3 mb-4">
                <h4 className="font-display font-black text-sm text-teal-400 uppercase tracking-wider font-mono">Create custom workspace preset</h4>
                <button onClick={() => setIsCreatingWorkspace(false)} className="p-1 rounded hover:bg-slate-800 text-slate-400">
                  <X size={15} />
                </button>
              </div>

              <form onSubmit={handleCreateWorkspace} className="flex flex-col gap-4 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] text-slate-405 font-bold uppercase">Workspace Name</label>
                  <input
                    type="text" placeholder="e.g. My Operations Deck" value={customWorkspaceName} onChange={(e) => setCustomWorkspaceName(e.target.value)}
                    className="px-3 py-2 bg-slate-950 border border-white/5 text-white rounded-xl"
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] text-slate-405 font-bold uppercase">Grid Layout Mode</label>
                  <select
                    value={customWorkspaceLayout} onChange={(e) => setCustomWorkspaceLayout(e.target.value)}
                    className="px-2 py-2 bg-slate-950 border border-white/5 text-white rounded-xl"
                  >
                    <option value="single">Single (1 widget fullscreen)</option>
                    <option value="split-h">Horizontal Split (2 columns)</option>
                    <option value="split-v">Vertical Split (2 rows)</option>
                    <option value="grid">Grid (4 panels)</option>
                    <option value="floating">Floating Windows layout</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] text-slate-405 font-bold uppercase mb-1">Select Included Widget Decks</label>
                  <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono text-slate-350">
                    {[
                      { id: 'itinerary', label: 'Quantum Planner' },
                      { id: 'map', label: 'Map Studio' },
                      { id: 'budget', label: 'Cost Simulator' },
                      { id: 'memories', label: 'Memory Vault' },
                      { id: 'radar', label: 'Live Radar' },
                      { id: 'deals', label: 'Smart Deals' },
                      { id: 'rules', label: 'Rules & Cockpit' },
                      { id: 'universe', label: 'Galaxy Visualizer' },
                      { id: 'simulation', label: 'Simulation Studio' },
                      { id: 'command', label: 'AI Command console' }
                    ].map(w => {
                      const selected = customWorkspaceWidgets.includes(w.id);
                      return (
                        <label key={w.id} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleWidgetSelection(w.id)}
                            className="rounded text-teal-500 bg-slate-950 border-white/5 focus:ring-teal-500"
                          />
                          <span className={selected ? 'text-teal-400 font-bold' : 'text-slate-400'}>{w.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-xl font-bold font-mono text-xs transition-colors mt-2 text-center"
                >
                  SAVE WORKSPACE CONFIG
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Detailed Itinerary View Modal Overlay (from original code) */}
      <AnimatePresence>
        {selectedItinerary && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => handleSelectItinerary(null)}
              className="fixed inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-teal-500/20 shadow-2xl p-6 rounded-3xl flex flex-col max-h-[85vh] overflow-hidden text-left"
            >
              <div className="absolute inset-0 bg-cyber opacity-30 pointer-events-none" />
              
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-4 border-b border-teal-500/10 mb-6 relative z-10">
                <div>
                  <h3 className="font-display font-black text-lg text-teal-400 uppercase tracking-widest">
                    {editingItinerary ? 'Edit timeline matrix' : selectedItinerary.destination}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Plan duration: {selectedItinerary.duration} Days
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {editingItinerary ? (
                    <>
                      <button
                        onClick={() => {
                          updateItinerary(editingItinerary);
                          setSelectedItinerary(editingItinerary);
                          setEditingItinerary(null);
                          showToast('Itinerary changes saved successfully.', 'success');
                        }}
                        className="px-3 py-2 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer"
                      >
                        SAVE MATRIX
                      </button>
                      <button
                        onClick={() => setEditingItinerary(null)}
                        className="px-3 py-2 border border-teal-500/25 hover:bg-teal-500/10 text-teal-400 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer"
                      >
                        CANCEL
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setEditingItinerary({ ...selectedItinerary })}
                        className="px-3 py-2 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer"
                      >
                        EDIT MATRIX
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="p-2 rounded-lg border border-teal-500/25 hover:bg-teal-500/10 text-teal-400 cursor-pointer"
                        title="Print telemetry log"
                      >
                        <Printer size={13} />
                      </button>
                      <button
                        onClick={() => { handleSelectItinerary(null); setEditingItinerary(null); }}
                        className="p-2 rounded-lg border border-teal-500/25 hover:bg-teal-500/10 text-teal-400 cursor-pointer"
                      >
                        <X size={13} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Day-by-Day View / Edit Body */}
              <div className="flex-1 overflow-y-auto flex flex-col gap-6 text-xs text-left relative z-10 scrollbar-thin pr-1">
                {editingItinerary ? (
                  <div className="flex flex-col gap-6 p-1">
                    <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/10 flex flex-col gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Destination Name</label>
                        <input
                          type="text"
                          value={editingItinerary.destination}
                          onChange={(e) => setEditingItinerary({ ...editingItinerary, destination: e.target.value })}
                          className="px-3 py-2 rounded-xl bg-slate-900 border border-teal-500/10 text-xs font-semibold focus:outline-none focus:border-teal-500 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {editingItinerary.days.map((d, index) => (
                        <div key={d.day} className="p-4 rounded-xl bg-slate-950 border border-teal-500/10 flex flex-col gap-3 text-left">
                          <h5 className="font-display font-black text-xs text-teal-400 uppercase">Day {d.day} Details</h5>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-bold text-slate-400 uppercase font-mono">Day Heading</label>
                            <input
                              type="text"
                              value={d.title}
                              onChange={(e) => {
                                const daysCopy = [...editingItinerary.days];
                                daysCopy[index].title = e.target.value;
                                setEditingItinerary({ ...editingItinerary, days: daysCopy });
                              }}
                              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-teal-500/10 text-xs text-white"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="flex flex-col gap-1">
                              <label className="text-[8.5px] font-bold text-slate-500 uppercase">🌅 Morning</label>
                              <input
                                type="text"
                                value={d.activities.morning}
                                onChange={(e) => {
                                  const daysCopy = [...editingItinerary.days];
                                  daysCopy[index].activities.morning = e.target.value;
                                  setEditingItinerary({ ...editingItinerary, days: daysCopy });
                                }}
                                className="px-2 py-1.5 rounded bg-slate-900 border border-teal-500/10 text-xs text-white"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[8.5px] font-bold text-slate-500 uppercase">☀️ Afternoon</label>
                              <input
                                type="text"
                                value={d.activities.afternoon}
                                onChange={(e) => {
                                  const daysCopy = [...editingItinerary.days];
                                  daysCopy[index].activities.afternoon = e.target.value;
                                  setEditingItinerary({ ...editingItinerary, days: daysCopy });
                                }}
                                className="px-2 py-1.5 rounded bg-slate-900 border border-teal-500/10 text-xs text-white"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[8.5px] font-bold text-slate-500 uppercase">🌙 Evening</label>
                              <input
                                type="text"
                                value={d.activities.evening}
                                onChange={(e) => {
                                  const daysCopy = [...editingItinerary.days];
                                  daysCopy[index].activities.evening = e.target.value;
                                  setEditingItinerary({ ...editingItinerary, days: daysCopy });
                                }}
                                className="px-2 py-1.5 rounded bg-slate-900 border border-teal-500/10 text-xs text-white"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-teal-500/10">
                      {selectedItinerary.days.map((d) => (
                        <div key={d.day} className="flex gap-4 relative">
                          <div className="w-7 h-7 rounded-full bg-teal-500 text-slate-950 font-bold font-mono text-xs flex items-center justify-center shrink-0 z-10 shadow-[0_0_10px_rgba(45,212,191,0.3)]">
                            {d.day}
                          </div>
                          <div className="flex-1 pb-4 border-b border-teal-500/5 last:border-b-0">
                            <h4 className="font-display font-black text-sm text-teal-350 mb-2">{d.title}</h4>
                            
                            <div className="flex flex-col gap-2 font-medium text-slate-350">
                              {d.activities.morning && (
                                <div className="bg-slate-950/40 p-2.5 rounded-xl border border-teal-500/5">
                                  <span className="font-bold text-teal-400 font-mono text-[9px] uppercase tracking-wider block mb-0.5">🌅 Morning</span>
                                  <span className="text-xs">{d.activities.morning}</span>
                                </div>
                              )}
                              {d.activities.afternoon && (
                                <div className="bg-slate-950/40 p-2.5 rounded-xl border border-teal-500/5">
                                  <span className="font-bold text-sky-400 font-mono text-[9px] uppercase tracking-wider block mb-0.5">☀️ Afternoon</span>
                                  <span className="text-xs">{d.activities.afternoon}</span>
                                </div>
                              )}
                              {d.activities.evening && (
                                <div className="bg-slate-950/40 p-2.5 rounded-xl border border-teal-500/5">
                                  <span className="font-bold text-indigo-400 font-mono text-[9px] uppercase tracking-wider block mb-0.5">🌙 Evening</span>
                                  <span className="text-xs">{d.activities.evening}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {selectedItinerary.packingList && selectedItinerary.packingList.length > 0 && (
                      <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/10 flex flex-col gap-3 mt-4 text-left">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 font-mono">Packing Checklist Telemetry</h4>
                        <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                          {selectedItinerary.packingList.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
