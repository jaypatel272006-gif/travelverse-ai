/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-assignment */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, Sparkles, MapPin, Calendar, Users, Shield, Award, Landmark, 
  TrendingUp, Radio, Activity, CloudRain, Compass, AlertTriangle, ArrowRight, 
  PlaneTakeoff, Heart, Globe, Settings, Play, Square, Eye, Leaf, ShieldAlert, 
  BookOpen, Share2, Layers, Cpu, Music, Zap, Flame, UserCheck, CheckCircle2,
  Volume2, Compass as DiscoveryIcon, Sparkle, AlertOctagon, HelpCircle, Sun, Moon, Mic,
  ShieldCheck, Lock
} from 'lucide-react';
import { DestinationCard } from '../components/DestinationCard';
import { FuturisticGlobe } from '../components/FuturisticGlobe';
import { mockDestinations } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { UniverseExplorer } from '../components/UniverseExplorer';

// Mini CountUp Component for stats
const CountUp = ({ to, suffix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 30);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Procedural Audio Synthesizer Engine
const playProceduralSound = (type, audioCtxRef, activeNodesRef) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Stop existing nodes
    if (activeNodesRef.current) {
      if (activeNodesRef.current.source) { try { activeNodesRef.current.source.stop(); } catch(e){} }
      if (activeNodesRef.current.osc) { try { activeNodesRef.current.osc.stop(); } catch(e){} }
      if (activeNodesRef.current.interval) { clearInterval(activeNodesRef.current.interval); }
      activeNodesRef.current = null;
    }

    const nodes = {};
    activeNodesRef.current = nodes;

    if (type === 'ocean') {
      // Synthesize rolling ocean waves using brown/pink noise & LFO sweep
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.Q.value = 1.2;

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.18, ctx.currentTime);

      noiseSource.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(0.15, ctx.currentTime); // 6.5s wavelength

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(250, ctx.currentTime);

      osc.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      filter.frequency.setValueAtTime(350, ctx.currentTime);

      noiseSource.start();
      osc.start();

      nodes.source = noiseSource;
      nodes.osc = osc;
    } else if (type === 'temple') {
      // Synthesize resonant temple bells
      const playBellNode = () => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(320, ctx.currentTime); // Deep chime
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(480, ctx.currentTime); // Harmonic chime

        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.5);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 3.8);
        osc2.stop(ctx.currentTime + 3.8);
      };

      playBellNode();
      nodes.interval = setInterval(playBellNode, 4500);
    } else if (type === 'forest') {
      // Synthesize whispering wind and birds (white noise + periodic chirps)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.value = 2.5;

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

      noiseSource.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(0.04, ctx.currentTime);

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(280, ctx.currentTime);

      osc.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      filter.frequency.setValueAtTime(600, ctx.currentTime);

      noiseSource.start();
      osc.start();

      nodes.source = noiseSource;
      nodes.osc = osc;

      // Random bird chirps
      const chirp = () => {
        const oscChirp = ctx.createOscillator();
        const chirpGain = ctx.createGain();
        oscChirp.type = 'sine';
        oscChirp.frequency.setValueAtTime(1500 + Math.random() * 800, ctx.currentTime);
        oscChirp.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);

        chirpGain.gain.setValueAtTime(0.02, ctx.currentTime);
        chirpGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

        oscChirp.connect(chirpGain);
        chirpGain.connect(ctx.destination);
        oscChirp.start();
        oscChirp.stop(ctx.currentTime + 0.2);
      };

      nodes.interval = setInterval(chirp, 3000);
    }
  } catch (e) {
    console.error(e);
  }
};

const stopProceduralSound = (audioCtxRef, activeNodesRef) => {
  try {
    if (activeNodesRef.current) {
      if (activeNodesRef.current.source) { try { activeNodesRef.current.source.stop(); } catch(e){} }
      if (activeNodesRef.current.osc) { try { activeNodesRef.current.osc.stop(); } catch(e){} }
      if (activeNodesRef.current.interval) { clearInterval(activeNodesRef.current.interval); }
      activeNodesRef.current = null;
    }
  } catch(e){}
};

export const Home = () => {
  const navigate = useNavigate();
  const { departureHub, setDepartureHub, showToast } = useApp();
  
  // OS Tab state
  const [activeTab, setActiveTab] = useState('mission-control');
  const [use3DUniverse, setUse3DUniverse] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchFocusIndex, setSearchFocusIndex] = useState(-1);
  const [heroMouse, setHeroMouse] = useState({ x: 50, y: 50 });

  const [isTabActive, setIsTabActive] = useState(true);
  const [globePos, setGlobePos] = useState(0);
  const [isDraggingGlobe, setIsDraggingGlobe] = useState(false);
  const dragStartX = useRef(0);
  const globePosStart = useRef(0);
  const autoRotateRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isDraggingGlobe || !isTabActive) return;
    const rotate = () => {
      setGlobePos(prev => (prev - 0.25) % 400);
      autoRotateRef.current = requestAnimationFrame(rotate);
    };
    autoRotateRef.current = requestAnimationFrame(rotate);
    return () => {
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);
    };
  }, [isDraggingGlobe, isTabActive]);

  const handleGlobeMouseDown = (e) => {
    setIsDraggingGlobe(true);
    dragStartX.current = e.clientX;
    globePosStart.current = globePos;
  };

  const handleGlobeMouseMove = (e) => {
    if (!isDraggingGlobe) return;
    const deltaX = e.clientX - dragStartX.current;
    setGlobePos(globePosStart.current + deltaX * 0.4);
  };

  const handleGlobeMouseUp = () => {
    setIsDraggingGlobe(false);
  };

  const parallaxX = (heroMouse.x - 50) * 0.12;
  const parallaxY = (heroMouse.y - 50) * 0.12;
  const parallaxXDeep = (heroMouse.x - 50) * 0.24;
  const parallaxYDeep = (heroMouse.y - 50) * 0.24;

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setHeroMouse({ x, y });
  };
  
  // Interactive Canvas & Soundscape Refs
  const audioCtxRef = useRef(null);
  const activeAudioNodesRef = useRef(null);
  const galaxyCanvasRef = useRef(null);

  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetVal, setBudgetVal] = useState(150000);
  const [durationVal, setDurationVal] = useState(6);
  const [travelStyle, setTravelStyle] = useState('All');
  const [travelersCount, setTravelersCount] = useState('Solo');
  const [travelSeason, setTravelSeason] = useState('All');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const getDynamicTheme = () => {
    const q = searchQuery.toLowerCase();
    if (q.includes('goa') || q.includes('beach') || q.includes('ocean') || q.includes('gokarna') || q.includes('sea') || q.includes('maldives')) return 'ocean';
    if (q.includes('leh') || q.includes('snow') || q.includes('manali') || q.includes('shimla') || q.includes('mountain') || q.includes('ice') || q.includes('switzerland') || q.includes('swiss')) return 'snow';
    if (q.includes('aurora') || q.includes('iceland') || q.includes('norway') || q.includes('northern')) return 'aurora';
    if (q.includes('dubai') || q.includes('desert') || q.includes('heat') || q.includes('shimmer') || q.includes('rajasthan') || q.includes('sand') || q.includes('dust')) return 'desert';
    if (q.includes('tropical') || q.includes('kerala') || q.includes('bali') || q.includes('island') || q.includes('forest') || q.includes('amazon')) return 'tropical';
    return 'default';
  };
  const themeMode = getDynamicTheme();

  const [selectedMood, setSelectedMood] = useState('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const getMoodSectionStyle = () => {
    switch (selectedMood) {
      case 'Road Trip':
        return {
          wrapperClass: 'bg-gradient-to-br from-[#121620] via-[#0b0e14] to-[#121620] border-slate-800 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden',
          accentColor: '#64748b',
          motif: (
            <svg className="absolute inset-x-0 bottom-4 h-1.5 w-full opacity-20 pointer-events-none" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="#f1f5f9" strokeWidth="3" strokeDasharray="20,15" className="animate-route-dash" />
            </svg>
          )
        };
      case 'Spiritual':
        return {
          wrapperClass: 'bg-gradient-to-br from-[#1e140d] via-[#0f0905] to-[#1e140d] border-amber-500/20 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden shadow-[0_0_35px_rgba(245,158,11,0.08)]',
          accentColor: '#f59e0b',
          motif: (
            <svg className="absolute right-[-40px] bottom-[-40px] w-64 h-64 text-amber-500/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="50" cy="50" r="40" className="animate-pulse" />
              <circle cx="50" cy="50" r="30" />
              <circle cx="50" cy="50" r="20" />
              <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
            </svg>
          )
        };
      case 'Adventurous':
        return {
          wrapperClass: 'bg-gradient-to-br from-[#0c1a15] via-[#060d0a] to-[#0c1a15] border-emerald-500/20 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden shadow-[0_0_35px_rgba(16,185,129,0.08)]',
          accentColor: '#10b981',
          motif: (
            <svg className="absolute bottom-0 right-0 w-80 h-32 text-emerald-500/10 pointer-events-none" viewBox="0 0 100 30" preserveAspectRatio="none" fill="currentColor">
              <path d="M0 30 L25 10 L50 20 L75 5 L100 30 Z" />
            </svg>
          )
        };
      case 'Luxury':
        return {
          wrapperClass: 'bg-gradient-to-br from-slate-950 via-[#131109] to-slate-950 border-yellow-500/20 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55),0_0_30px_rgba(234,179,8,0.05)] backdrop-blur-md',
          accentColor: '#eab308',
          motif: (
            <div className="absolute inset-0 border border-yellow-500/10 rounded-3xl m-2 pointer-events-none z-0" />
          )
        };
      case 'Relaxed':
      case 'Romantic':
        return {
          wrapperClass: 'bg-gradient-to-br from-[#0d1b2a] via-[#060c14] to-[#0d1b2a] border-sky-500/20 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden shadow-[0_0_35px_rgba(14,165,233,0.08)]',
          accentColor: '#0ea5e9',
          motif: (
            <svg className="absolute bottom-0 inset-x-0 h-10 text-sky-500/10 pointer-events-none animate-wave-drift" viewBox="0 0 100 10" preserveAspectRatio="none" fill="currentColor">
              <path d="M0 10 C 30 2, 70 8, 100 10 L 100 10 L 0 10 Z" />
            </svg>
          )
        };
      case 'Wildlife':
      case 'Nature Escape':
        return {
          wrapperClass: 'bg-gradient-to-br from-[#0f1f13] via-[#070f09] to-[#0f1f13] border-green-500/20 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden shadow-[0_0_35px_rgba(34,197,94,0.08)]',
          accentColor: '#22c55e',
          motif: (
            <div className="absolute right-4 bottom-4 text-green-500/15 pointer-events-none z-0 select-none">
              <span className="text-[120px] font-bold">🌿</span>
            </div>
          )
        };
      default:
        return {
          wrapperClass: 'bg-slate-900/10 dark:bg-slate-950/20 p-6 rounded-3xl border border-slate-200/50 dark:border-white/5 transition-all duration-500',
          accentColor: '#2dd4bf',
          motif: null
        };
    }
  };
  const moodStyle = getMoodSectionStyle();

  // TravelVerse 2200 Sentient System states
  const [atlasQuery, setAtlasQuery] = useState('');
  const [atlasStatus, setAtlasStatus] = useState('Atlas: Calibrating global consciousness networks...');
  const [atlasResponse, setAtlasResponse] = useState('');
  
  // Earth Pulse Active Overlay
  const [earthPulseLayer, setEarthPulseLayer] = useState('atmosphere'); // atmosphere, aurora, ocean, heatmap
  
  // Time-of-day Theme
  const [timeOfDay, setTimeOfDay] = useState('noon'); // sunrise, noon, sunset, midnight

  // Accessibility Legacy Fallback Navigation Trigger
  const [showLegacyMenu, setShowLegacyMenu] = useState(false);

  // Real-time HUD feeds
  const [telemetryLogs, setTelemetryLogs] = useState([
    { id: 1, text: 'SAT-94: Delhi Hub flight vectors re-aligned.', type: 'info', time: '12:04:15' },
    { id: 2, text: 'WTR: Monsoon system active over Western Ghats.', type: 'warn', time: '12:04:32' },
    { id: 3, text: 'SYS: Travel Twin parameters synced for User-2035.', type: 'sys', time: '12:05:01' }
  ]);

  const [activeFlights, setActiveFlights] = useState([
    { flight: 'AI-821', route: 'BOM ➔ SXR', alt: '36,000 ft', eta: '12 mins' },
    { flight: '6E-2051', route: 'DEL ➔ GOI', alt: '38,000 ft', eta: '45 mins' },
    { flight: 'UK-943', route: 'BLR ➔ COK', alt: '32,000 ft', eta: 'Landing' }
  ]);

  // DNA Twin preferences
  const [dnaPreferences, setDnaPreferences] = useState({
    adventure: 70,
    budget: 50,
    pace: 60,
    sustainability: 80,
    comfort: 75
  });

  // Time Machine Era state
  const [timeMachineLandmark, setTimeMachineLandmark] = useState('tajmahal');
  const [timeMachineEra, setTimeMachineEra] = useState('modern');

  // Dream Trip Builder state
  const [dreamTarget, setDreamTarget] = useState(null);
  const [generatingDream, setGeneratingDream] = useState(false);
  const [dreamLogs, setDreamLogs] = useState([]);
  const [dreamItinerary, setDreamItinerary] = useState(null);

  // soundscapes
  const [playingSound, setPlayingSound] = useState(null);

  // Passport stamps list
  const [unlockedStamps, setUnlockedStamps] = useState(['Agra', 'Delhi']);
  const [passportXp, setPassportXp] = useState(1200);

  // Discovery Feed swiper index
  const [feedIndex, setFeedIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Adventure Blogger',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      comment: 'TravelVerse AI completely changed how I plan my trips. The day-by-day itineraries are so detailed, and the weather recommendations saved me from a massive downpour in Goa!',
      rating: 5,
      country: '🇺🇸 USA',
      destination: 'Goa, India'
    },
    {
      name: 'David Chen',
      role: 'Tech Lead & Family Traveler',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      comment: 'The budget estimator chart is spot on. I managed to organize a 10-day trip to Kerala for my family of four and stayed perfectly within our mid-range budget bounds.',
      rating: 5,
      country: '🇨🇦 Canada',
      destination: 'Kerala, India'
    },
    {
      name: 'Elena Rostova',
      role: 'Solo Explorer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      comment: 'I love keeping track of my wishlist flights and hotels in the user dashboard. It coordinates the savings targets automatically. A truly premium travel product!',
      rating: 5,
      country: '🇬🇧 UK',
      destination: 'Srinagar, India'
    }
  ];

  const moodsList = [
    { name: 'All', icon: '🌍' },
    { name: 'Relaxed', icon: '🧘' },
    { name: 'Romantic', icon: '💖' },
    { name: 'Adventurous', icon: '🧗' },
    { name: 'Spiritual', icon: '🕉️' },
    { name: 'Luxury', icon: '💎' },
    { name: 'Family Fun', icon: '👨‍👩‍👧‍👦' },
    { name: 'Nature Escape', icon: '🌲' },
    { name: 'Wildlife', icon: '🐅' },
    { name: 'Party', icon: '🎉' },
    { name: 'Road Trip', icon: '🚗' }
  ];

  // Sync Time of Day Class to documentElement
  useEffect(() => {
    const root = window.document.documentElement;
    // Remove existing theme classes
    root.classList.remove('theme-sunrise', 'theme-noon', 'theme-sunset', 'theme-midnight');
    root.classList.add(`theme-${timeOfDay}`);
    showToast(`Time shifted: recalibrating solar vectors to ${timeOfDay.toUpperCase()}!`, 'info');
  }, [timeOfDay]);

  // Rotate log feed and update Atlas Status
  useEffect(() => {
    const interval = setInterval(() => {
      const logs = [
        'SATELLITE LINK: Transiting flight path DEL to SXR.',
        'METEOROLOGY: Clear skies registered at Ladakh coordinates.',
        'TRAFFIC: High density tourist flow detected in Goa (Anjuna).',
        'SYSTEM: Budget prediction grids compiled for Surat Hub.',
        'NOMAD WATCH: Coworking spots in Gokarna reporting 95Mbps speeds.'
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setTelemetryLogs(prev => [
        { id: Date.now(), text: randomLog, type: 'info', time: new Date().toTimeString().split(' ')[0] },
        ...prev.slice(0, 2)
      ]);

      const atlasStates = [
        'Atlas: Monitoring jet streams over Spiti Valley...',
        'Atlas: Analyzing travel twin curiosity patterns...',
        'Atlas: Recalibrating carbon offsets for Western Ghats...',
        'Atlas: Synchronizing passport logs with planetary ledger...'
      ];
      setAtlasStatus(atlasStates[Math.floor(Math.random() * atlasStates.length)]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    
    // Construct the query string parameters
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.append('search', searchQuery.trim());
    params.append('budget', budgetVal);
    params.append('duration', durationVal);
    if (travelStyle !== 'All') params.append('style', travelStyle);
    if (travelSeason !== 'All') params.append('season', travelSeason);
    params.append('travelers', travelersCount);

    if (query.includes('flight') || query.includes('plane') || query.includes('ticket')) {
      navigate('/flights');
      showToast('Navigating to Flights tracker...');
    } else if (query.includes('road') || query.includes('drive') || query.includes('car')) {
      navigate('/road-trip-os');
      showToast('Navigating to Road Trip OS...');
    } else if (query.includes('spiritual') || query.includes('temple') || query.includes('pilgrim')) {
      navigate('/spiritual');
      showToast('Navigating to Spiritual Shrines...');
    } else if (query.includes('map') || query.includes('location')) {
      navigate('/maps');
      showToast('Navigating to Explorer Maps...');
    } else if (query.includes('dna') || query.includes('quiz') || query.includes('personality')) {
      navigate('/personality-lab');
      showToast('Navigating to Travel DNA Lab...');
    } else if (query.includes('achieve') || query.includes('mission') || query.includes('badge')) {
      navigate('/achievements');
      showToast('Navigating to Explorer Missions...');
    } else if (query.includes('utilities') || query.includes('tool')) {
      navigate('/utilities');
      showToast('Navigating to Travel Utilities...');
    } else {
      navigate(`/destinations?${params.toString()}`);
    }
  };

  const handleVoiceSearchSimulate = (e) => {
    e.preventDefault();
    if (isVoiceActive) return;
    setIsVoiceActive(true);
    showToast('Calibrating voice recognition systems... Speak now.', 'info');
    setTimeout(() => {
      const phrases = ['Bali', 'Santorini', 'Kyoto', 'Kedarnath', 'Goa'];
      const chosen = phrases[Math.floor(Math.random() * phrases.length)];
      setSearchQuery(chosen);
      setIsVoiceActive(false);
      showToast(`Voice resolved coordinate: "${chosen}"`, 'success');
    }, 2000);
  };

  const handleQuickPlan = (e) => {
    e.preventDefault();
    navigate(`/planner?budgetLimit=${budgetVal}&duration=${durationVal}`);
  };

  // Conversational Search with Atlas
  const handleAtlasSubmit = (e) => {
    e.preventDefault();
    if (!atlasQuery.trim()) return;

    setAtlasStatus('Atlas: Interrogating global destination nodes...');
    setAtlasResponse('');

    setTimeout(() => {
      const query = atlasQuery.toLowerCase();
      let response = "I have scanned the planet. Based on your curiosity signature, I suggest setting courses for **Spiti Valley, India**. Atmospheric comfort is high, adventure level is optimal, and peaceful coordinates are locked.";
      
      if (query.includes('beach') || query.includes('sea') || query.includes('goa')) {
        response = "Consciousness Core resolved: **Goa Beaches, India**. Specifically, Chapora Fort Cliff and Galgibaga pine belts match your preference for coastal breeze and photography.";
      } else if (query.includes('history') || query.includes('palace') || query.includes('taj')) {
        response = "Consciousness Core resolved: **Agra, India**. Taj Mahal ancient construct and historical time vectors are aligned for your optimal visit window.";
      } else if (query.includes('cold') || query.includes('mountain') || query.includes('ladakh')) {
        response = "Consciousness Core resolved: **Ladakh, India**. Trans-Himalayan EV trails are cleared with 99% atmospheric visibility. rest index: 8 hours.";
      }

      setAtlasResponse(response);
      setAtlasStatus('Atlas: Recommendations locked in local vector field.');
      showToast('Atlas aligned travel timeline!', 'success');
    }, 1200);
  };

  // Filter destinations by mood
  const filteredDestinations = mockDestinations.filter(d => {
    if (selectedMood === 'All') return true;
    return d.moods && d.moods.includes(selectedMood);
  });

  // Soundscape toggling
  const handleToggleSound = (type) => {
    if (playingSound === type) {
      stopProceduralSound(audioCtxRef, activeAudioNodesRef);
      setPlayingSound(null);
      showToast('Soundscape deactivated.', 'info');
    } else {
      playProceduralSound(type, audioCtxRef, activeAudioNodesRef);
      setPlayingSound(type);
      showToast(`Initiated ${type} soundscape.`, 'success');
    }
  };

  // Dream Trip Compiler Trigger
  const triggerDreamGeneration = (dreamType) => {
    setDreamTarget(dreamType);
    setGeneratingDream(true);
    setDreamLogs([]);
    setDreamItinerary(null);

    const steps = [
      { log: 'Consciousness Core: Fetching environmental indices...', delay: 400 },
      { log: 'Flight AI: Calculating carbon-optimal transit tracks...', delay: 800 },
      { log: 'Hotel AI: Calibrating eco-lodges & wellness stays...', delay: 1200 },
      { log: 'Weather AI: Simulating atmospheric conditions & rain matrices...', delay: 1600 },
      { log: 'Coordinating nodes: Compiling zero-fatigue timelines...', delay: 2000 },
      { log: 'Compilation complete: Building holographic certificate...', delay: 2300 }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setDreamLogs(prev => [...prev, step.log]);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            let itinerary = null;
            if (dreamType === 'northern') {
              itinerary = {
                title: 'Aurora Borealis Quantum Drift',
                dest: 'Tromsø, Norway & Abisko, Sweden',
                carbon: '350kg CO2 Offsetted',
                duration: '6 Days',
                highlights: ['Glass Igloo Stay', 'Solar Wind Tracking', 'Reindeer Expedition'],
                timeline: [
                  { day: 'Day 1', activity: 'Transit & Acclimatization in Tromsø dome. Ambient audio guide sync.' },
                  { day: 'Day 2', activity: 'Aurora hunting via EV snowmobile. 99% weather clearance.' },
                  { day: 'Day 3', activity: 'UNESCO Arctic heritage tour & Sami culinary feast.' },
                  { day: 'Day 4', activity: 'Cross-border Tesla drift to Abisko Wilderness Lodge.' },
                  { day: 'Day 5', activity: 'Night sky photography workshop led by local guide avatar.' },
                  { day: 'Day 6', activity: 'Calibration feedback sync & return flight transit.' }
                ]
              };
            } else if (dreamType === 'himalayan') {
              itinerary = {
                title: 'Trans-Himalayan Electric Ride',
                dest: 'Leh-Ladakh & Spiti Valley, India',
                carbon: '180kg CO2 (92% Green)',
                duration: '8 Days',
                highlights: ['EV Bike Traverse', 'High Altitude Acclimatization Index', 'Buddhist Monasteries'],
                timeline: [
                  { day: 'Day 1', activity: 'Arrive in Leh (11,500 ft). Zero exertion rest day to avoid AMS.' },
                  { day: 'Day 2', activity: 'Electric motorcycle calibration ride to Sham Valley.' },
                  { day: 'Day 3', activity: 'Ride over Khardung La (17,582 ft) to Nubra Valley Sand Dunes.' },
                  { day: 'Day 4', activity: 'Bactrian camel safari & stargazing at Hunder.' },
                  { day: 'Day 5', activity: 'Drift to Pangong Lake via Shyok. Solar camp checkout.' },
                  { day: 'Day 6', activity: 'Altitude check & return traverse to Leh.' },
                  { day: 'Day 7', activity: 'Spiritual monastery tour (Thiksey & Hemis).' },
                  { day: 'Day 8', activity: 'Transit departure. Passport badge awarded.' }
                ]
              };
            } else {
              itinerary = {
                title: 'Thar Desert Nomad Odyssey',
                dest: 'Jaisalmer & Jodhpur, Rajasthan',
                carbon: '140kg CO2',
                duration: '5 Days',
                highlights: ['Stargazing Dunes', 'Royal Haveli Coworking', 'Camel Caravan'],
                timeline: [
                  { day: 'Day 1', activity: 'Welcome at Jodhpur Hub. Blue City sunset heritage tour.' },
                  { day: 'Day 2', activity: 'Desert highway road trip via Jaisalmer Fort.' },
                  { day: 'Day 3', activity: 'Remote work session at Royal Haveli with 95Mbps speeds.' },
                  { day: 'Day 4', activity: 'Overnight luxury sand tent stay with local culinary tour.' },
                  { day: 'Day 5', activity: 'Calibrated camel trek & return flight departure.' }
                ]
              };
            }
            setDreamItinerary(itinerary);
            setGeneratingDream(false);
            showToast('Dream itinerary compiled successfully!', 'success');
            
            const stampName = dreamType === 'northern' ? 'Tromsø' : (dreamType === 'himalayan' ? 'Ladakh' : 'Jaisalmer');
            setUnlockedStamps(prev => prev.includes(stampName) ? prev : [...prev, stampName]);
            setPassportXp(prev => prev + 450);
          }, 400);
        }
      }, step.delay);
    });
  };

  // Star Galaxy Canvas Animation
  useEffect(() => {
    if (activeTab !== 'galaxy' || !galaxyCanvasRef.current) return;
    const canvas = galaxyCanvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 400);

    const stars = [];
    const starsCount = 45;
    const destinations = [
      { name: 'Goa Coast', fact: 'Offbeat Galgibaga beach has turtle conservation nodes.', lat: 100, lon: 150 },
      { name: 'Spiti Peaks', fact: 'Home to Ki Monastery at 13,668 ft.', lat: 250, lon: 80 },
      { name: 'Kerala Backwaters', fact: 'Vembanad lake has floating solar houseboats.', lat: 400, lon: 280 },
      { name: 'Ziro Valley', fact: 'Apatani tribe practices zero-waste agriculture.', lat: 550, lon: 120 },
      { name: 'Kyoto Temples', fact: 'Bamboo forest is synthesized in acoustic preserves.', lat: 680, lon: 240 },
      { name: 'Udaipur Lakes', fact: 'Solar powered launches navigate Lake Pichola.', lat: 200, lon: 320 }
    ];

    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.05 + 0.01,
        alpha: Math.random()
      });
    }

    let animationId;
    const render = () => {
      ctx.fillStyle = '#070a13';
      ctx.fillRect(0, 0, width, height);

      // Draw lines
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.04)';
      ctx.lineWidth = 1;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      stars.forEach(s => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, s.alpha)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      destinations.forEach(d => {
        const x = (d.lat / 800) * width;
        const y = (d.lon / 400) * height;
        const pulse = Math.sin(Date.now() * 0.003) * 3 + 6;

        ctx.fillStyle = 'rgba(45, 212, 191, 0.2)';
        ctx.beginPath();
        ctx.arc(x, y, pulse + 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#2dd4bf';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 9px monospace';
        ctx.fillText(d.name.toUpperCase(), x + 8, y + 3);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      destinations.forEach(d => {
        const x = (d.lat / 800) * width;
        const y = (d.lon / 400) * height;
        const dist = Math.hypot(mouseX - x, mouseY - y);

        if (dist < 15) {
          showToast(`Star Unlocked: ${d.name}! Added stamp to passport.`, 'success');
          const cleanName = d.name.split(' ')[0];
          setUnlockedStamps(prev => prev.includes(cleanName) ? prev : [...prev, cleanName]);
          setPassportXp(prev => prev + 200);
        }
      });
    };

    canvas.addEventListener('click', handleCanvasClick);
    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 400;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('click', handleCanvasClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);

  const discoveryFeed = [
    {
      title: 'Hidden Tea Valleys of Munnar',
      desc: 'Avoid Munnar town center. Drive 15km north to Kolukkumalai, the highest tea estate globally. Best visited at 5:00 AM in an EV Jeep.',
      greet: 'Namaskaram (Malayalam)',
      food: 'Ela Ada (Steamed rice parcels with coconut & jaggery)',
      photo: 'Sunrise mist over double valleys at cliff edge'
    },
    {
      title: 'Cliff Side Pools in Gokarna',
      desc: 'Hike past Half Moon beach to reach a natural basalt tidal pool hidden in the black volcanic rocks. Only accessible during low tide.',
      greet: 'Namaskara (Kannada)',
      food: 'Stuffed Banana Buns with local ginger tea',
      photo: 'Drone shot of crashing waves against the circular basalt pool'
    },
    {
      title: 'Apatani Tribe Heritage in Ziro',
      desc: 'Spend three days in Arunachal’s Hong Village. Learn how tribal elders harvest fish inside wet rice fields for self-sustainable agriculture.',
      greet: 'Abo (Apatani greeting)',
      food: 'Pike Pila (Bamboo shoot extract spicy paste)',
      photo: 'Traditional wooden bamboo houses with symmetrical smoke lines'
    }
  ];

  // Dynamic search results for keyboard navigation tracking
  const matchingDestinations = mockDestinations
    .filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.region.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 4);

  const matchingSystems = ['flights', 'road-trip-os', 'spiritual', 'maps', 'personality-lab', 'achievements', 'utilities']
    .filter(sys => sys.includes(searchQuery.toLowerCase()));

  const totalSearchResults = [
    ...matchingDestinations.map(d => ({ type: 'destination', id: d.id, name: d.name, link: `/destination/${d.id}`, image: d.image, sub: `${d.region} • ${d.country}` })),
    ...matchingSystems.map(sys => ({ type: 'system', id: sys, name: `${sys.replace('-', ' ')} Core`, link: `/${sys}` }))
  ];

  const handleSearchKeyDown = (e) => {
    if (totalSearchResults.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSearchFocusIndex(prev => (prev + 1) % totalSearchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSearchFocusIndex(prev => (prev - 1 + totalSearchResults.length) % totalSearchResults.length);
    } else if (e.key === 'Enter') {
      if (searchFocusIndex >= 0 && searchFocusIndex < totalSearchResults.length) {
        e.preventDefault();
        const selected = totalSearchResults[searchFocusIndex];
        setSearchQuery('');
        setSearchFocusIndex(-1);
        navigate(selected.link);
      }
    } else if (e.key === 'Escape') {
      setSearchQuery('');
      setSearchFocusIndex(-1);
    }
  };

  return (
    <div className="flex flex-col gap-36 py-16 overflow-x-hidden text-slate-800 dark:text-slate-100 transition-colors duration-500">
      
      {/* Dynamic View Mode HUD Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center bg-slate-900/60 border border-white/15 p-4 rounded-2xl shadow-xl backdrop-blur-md relative z-30 gap-4 text-left">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-300">
            QUANTUM SYSTEM WORKSPACE
          </span>
        </div>

        {/* Global Spotlight-Style Command Search Bar */}
        <form onSubmit={handleHeroSearch} className="flex-1 max-w-lg w-full relative z-45 mx-2">
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-950/70 border border-white/10 w-full focus-within:border-teal-500 focus-within:bg-slate-950 focus-within:shadow-[0_0_25px_rgba(20,184,166,0.15)] transition-all duration-300">
            <Search className={`text-teal-400 shrink-0 ${searchQuery ? 'animate-pulse scale-110' : ''}`} size={15} />
            <input
              type="text"
              placeholder="Teleport to... (e.g. Goa, Jaipur, flights, road trip)"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setSearchFocusIndex(-1); }}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
              onKeyDown={handleSearchKeyDown}
              className="bg-transparent border-none outline-none text-white text-xs w-full placeholder-slate-500 focus:ring-0 focus:outline-none font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSearchFocusIndex(-1); }}
                className="text-slate-500 hover:text-white cursor-pointer transition-colors duration-200"
              >
                <X size={14} />
              </button>
            )}
          </div>
          
          {isSearchFocused && !searchQuery && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[92vw] md:w-full mt-3 p-4 rounded-3xl bg-slate-955/98 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-55 flex flex-col gap-4 text-left backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
              <div>
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-2 font-mono">🔥 Popular Teleport Coordinates</span>
                <div className="flex flex-wrap gap-2">
                  {['Goa', 'Jaipur', 'Varanasi', 'Leh'].map(term => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setSearchQuery(term)}
                      className="px-3.5 py-1.5 bg-white/5 hover:bg-teal-500/10 hover:text-teal-400 border border-white/5 rounded-full text-[10px] font-mono font-bold transition-all duration-200 cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-3">
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-2 font-mono">⏳ Recent Log Entries</span>
                <div className="flex flex-wrap gap-2">
                  {['Agra', 'Delhi'].map(term => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setSearchQuery(term)}
                      className="px-3.5 py-1.5 bg-white/5 hover:bg-teal-500/10 hover:text-teal-400 border border-white/5 rounded-full text-[10px] font-mono font-bold transition-all duration-200 cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {searchQuery && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[92vw] md:w-full mt-3 p-3 rounded-3xl bg-slate-955/98 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-55 flex flex-col gap-1 text-left max-h-[320px] overflow-y-auto backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
              {totalSearchResults.length === 0 ? (
                <div className="p-5 text-center text-[10px] font-mono text-slate-500 flex flex-col items-center gap-1.5">
                  <span>⚠️ INDEX MATCH EMPTY</span>
                  <span className="text-[8px] text-slate-600 uppercase">System could not resolve telemetry input</span>
                </div>
              ) : (
                <>
                  <span className="text-[8.5px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1.5 block font-mono">Resolved Telemetry Coordinates</span>
                  {totalSearchResults.map((result, i) => {
                    const isFocused = i === searchFocusIndex;
                    if (result.type === 'destination') {
                      return (
                        <Link
                          key={result.id}
                          to={result.link}
                          onClick={() => { setSearchQuery(''); setSearchFocusIndex(-1); }}
                          className={`flex items-center gap-3.5 p-2.5 hover:bg-white/5 rounded-2xl transition-all duration-200 ${
                            isFocused ? 'bg-white/10 border-l-2 border-teal-450 pl-4 font-bold text-teal-400' : ''
                          }`}
                        >
                          <img src={result.image} alt={result.name} className="w-9 h-9 rounded-xl object-cover shadow-md" />
                          <div className="flex-1">
                            <p className="text-xs font-bold text-white leading-tight">{result.name}</p>
                            <p className="text-[9px] text-slate-500 font-mono uppercase mt-0.5">{result.sub}</p>
                          </div>
                          <ArrowRight size={14} className="text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                      );
                    } else {
                      return (
                        <Link
                          key={result.id}
                          to={result.link}
                          onClick={() => { setSearchQuery(''); setSearchFocusIndex(-1); }}
                          className={`flex items-center gap-2.5 px-4 py-2.5 hover:bg-teal-500/10 rounded-2xl transition-all duration-200 text-teal-400 font-mono text-[10px] uppercase font-bold ${
                            isFocused ? 'bg-teal-500/20 border-l-2 border-teal-455 pl-5 text-teal-300' : ''
                          }`}
                        >
                          ⚙️ {result.name}
                        </Link>
                      );
                    }
                  })}
                </>
              )}
            </div>
          )}
        </form>

        <div className="flex gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-white/5">
          <button
            onClick={() => { setUse3DUniverse(true); showToast('Calibrating space coordinates: 3D Universe Active.', 'success'); }}
            className={`px-4 py-2 rounded-lg text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
              use3DUniverse 
                ? 'bg-teal-500 text-slate-950 shadow-[0_0_12px_rgba(45,212,191,0.3)]' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🌌 3D SPACE STATION
          </button>
          <button
            onClick={() => { setUse3DUniverse(false); showToast('Accessing backup consoles: Classic Dashboard Active.', 'info'); }}
            className={`px-4 py-2 rounded-lg text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
              !use3DUniverse 
                ? 'bg-teal-500 text-slate-950 shadow-[0_0_12px_rgba(45,212,191,0.3)]' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📡 CLASSIC DASHBOARD
          </button>
        </div>
      </div>

      {use3DUniverse ? (
        <UniverseExplorer />
      ) : (
        <section 
          onMouseMove={handleHeroMouseMove}
          className={`relative rounded-3xl overflow-hidden p-6 lg:p-10 border border-white/10 shadow-2xl min-h-[760px] flex flex-col justify-between transition-all duration-300 ${isTabActive ? '' : 'pause-all-animations'}`}
        >
          {/* Base Layer: Sky gradient sheet */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090d16] via-[#05080e] to-[#090d16] z-0 pointer-events-none" />

          {/* Layer 2: Sunlight / Aurora light sweeps */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.14),transparent_65%)] pointer-events-none z-0 animate-sun-sweep" />
          {themeMode === 'aurora' && (
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(45,212,191,0.16),transparent)] pointer-events-none z-0 animate-aurora-glow" />
          )}

          {/* Layer 3: Distant Mountain Range Silhouettes (multi-layer parallax depth) */}
          <svg 
            className="absolute bottom-0 left-0 right-0 h-48 opacity-15 pointer-events-none z-0" 
            viewBox="0 0 1440 200" 
            preserveAspectRatio="none" 
            fill="currentColor"
            style={{
              transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <path d="M0,160 L120,130 L240,170 L360,110 L480,180 L600,120 L720,150 L840,90 L960,160 L1080,130 L1200,170 L1320,110 L1440,160 L1440,200 L0,200 Z" className="text-slate-800" />
          </svg>
          <svg 
            className="absolute bottom-0 left-0 right-0 h-36 opacity-25 pointer-events-none z-0" 
            viewBox="0 0 1440 200" 
            preserveAspectRatio="none" 
            fill="currentColor"
            style={{
              transform: `translate3d(${parallaxXDeep}px, ${parallaxYDeep}px, 0)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <path d="M0,180 L180,140 L360,170 L540,130 L720,160 L900,120 L1080,170 L1260,140 L1440,180 L1440,200 L0,200 Z" className="text-slate-900" />
          </svg>

          {/* Layer 4: Atmospheric Fog Sheets */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-60 z-0 animate-fog-drift pointer-events-none" />

          {/* Layer 5: Dynamic Region-Specific Ambient Effect Overlays */}
          {themeMode === 'snow' && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {/* Slow moving snow particles */}
              <div className="absolute w-2 h-2 bg-white rounded-full animate-snow-drift top-0 left-[12%] opacity-60" style={{ animationDelay: '0s', animationDuration: '6s' }} />
              <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-snow-drift top-0 left-[38%] opacity-80" style={{ animationDelay: '1.5s', animationDuration: '5s' }} />
              <div className="absolute w-2.5 h-2.5 bg-white rounded-full animate-snow-drift top-0 left-[62%] opacity-70" style={{ animationDelay: '3s', animationDuration: '7s' }} />
              <div className="absolute w-2 h-2 bg-white rounded-full animate-snow-drift top-0 left-[88%] opacity-60" style={{ animationDelay: '0.5s', animationDuration: '5.5s' }} />
              <div className="absolute w-1.5 h-1.5 bg-white/70 rounded-full animate-snow-drift top-0 left-[25%] opacity-95" style={{ animationDelay: '2.2s', animationDuration: '6.2s' }} />
              <div className="absolute w-2.5 h-2.5 bg-white/50 rounded-full animate-snow-drift top-0 left-[72%] opacity-40" style={{ animationDelay: '4.1s', animationDuration: '4.9s' }} />
            </div>
          )}
          {themeMode === 'aurora' && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {/* Shifting neon aurora blankets */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl animate-aurora-glow opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.14),transparent_60%)] animate-pulse" style={{ animationDuration: '9s' }} />
            </div>
          )}
          {themeMode === 'ocean' && (
            <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0 overflow-hidden">
              {/* Double wave vectors */}
              <svg className="w-full h-12 opacity-30 animate-wave-drift text-teal-500" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z" />
              </svg>
              <svg className="w-full h-8 opacity-20 animate-wave-drift text-sky-400 absolute bottom-0" style={{ animationDelay: '2s', animationDuration: '6s' }} viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,40 Q360,60 720,40 T1440,40 L1440,100 L0,100 Z" />
              </svg>
            </div>
          )}
          {themeMode === 'desert' && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {/* Desert heat shimmer overlay */}
              <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-amber-500/10 via-orange-500/0 to-transparent opacity-40 animate-heat-shimmer" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-orange-500/5 to-transparent blur-xl" />
            </div>
          )}
          {themeMode === 'tropical' && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {/* Flying birds silhouette paths */}
              <svg className="absolute text-teal-400/25 animate-bird-drift w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ animationDelay: '1.2s' }}>
                <path d="M2 10 Q6 6 12 10 Q18 6 22 10" />
              </svg>
              <svg className="absolute text-emerald-400/20 animate-bird-drift w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ animationDelay: '4.8s', animationDuration: '24s' }}>
                <path d="M2 10 Q6 6 12 10 Q18 6 22 10" />
              </svg>
            </div>
          )}
          {themeMode === 'default' && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <svg className="absolute text-teal-400/10 animate-bird-drift w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ animationDelay: '4s' }}>
                <path d="M2 10 Q6 6 12 10 Q18 6 22 10" />
              </svg>
            </div>
          )}

          {/* Interactive cursor-tracking neon spotlight glow */}
          <div 
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle 350px at ${heroMouse.x}% ${heroMouse.y}%, rgba(20,184,166,0.12) 0%, transparent 100%)`
            }}
          />
        
          {/* Neon HUD grid backdrop */}
          <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20 z-0" />

          {/* 3D Holographic Scrolling Map Globe (Interactive Drag-to-Spin) */}
          <div 
            className="absolute top-16 right-6 md:right-12 w-64 h-64 md:w-80 md:h-80 rounded-full border border-teal-500/20 z-30 overflow-hidden opacity-30 md:opacity-70 cursor-grab active:cursor-grabbing pointer-events-auto animate-globe-pulse shadow-[inset_0_0_40px_rgba(20,184,166,0.2)]"
          >
            <div 
              onMouseDown={handleGlobeMouseDown}
              onMouseMove={handleGlobeMouseMove}
              onMouseUp={handleGlobeMouseUp}
              onMouseLeave={handleGlobeMouseUp}
              className={`w-full h-full select-none ${isDraggingGlobe ? '' : 'animate-globe-scroll'}`}
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat-x',
                backgroundPositionX: `${globePos}px`
              }}
            />
            {/* Globe reflection mask overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-transparent to-teal-500/10 pointer-events-none" />
          </div>

          {/* Dotted Flight Route Vector Paths */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0">
            <path d="M 80 180 Q 280 80 580 220" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="6,6" className="animate-route-dash" />
            <circle cx="80" cy="180" r="3" fill="#2dd4bf" className="animate-pulse" />
            <circle cx="580" cy="220" r="3" fill="#2dd4bf" className="animate-pulse" />
            
            <path d="M 180 480 Q 480 280 780 420" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6,6" className="animate-route-dash" />
            <circle cx="180" cy="480" r="3" fill="#38bdf8" className="animate-pulse" />
            <circle cx="780" cy="420" r="3" fill="#38bdf8" className="animate-pulse" />

            {/* Extra Purple Cosmic Path */}
            <path d="M 640 120 Q 400 340 120 220" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6,6" className="animate-route-dash" />
            <circle cx="640" cy="120" r="3" fill="#a78bfa" className="animate-pulse" />
            <circle cx="120" cy="220" r="3" fill="#a78bfa" className="animate-pulse" />
          </svg>

          {/* Animated Airplanes (Two Paths) */}
          <div className="absolute left-1/4 top-1/4 text-teal-400/25 pointer-events-none z-0 animate-airplane-fly w-full max-w-[200px]">
            <PlaneTakeoff className="rotate-[35deg]" size={16} />
          </div>
          <div className="absolute right-1/4 top-1/3 text-sky-400/20 pointer-events-none z-0 animate-airplane-fly-reverse w-full max-w-[200px]" style={{ animationDelay: '5s' }}>
            <PlaneTakeoff className="rotate-[-145deg]" size={14} />
          </div>

          {/* Floating Famous Landmarks Outlines */}
          <div className="absolute left-10 top-1/3 opacity-10 text-teal-400 animate-cloud-slow pointer-events-none z-0">
            <Compass size={40} className="stroke-[1]" />
          </div>
          <div className="absolute right-1/3 bottom-20 opacity-10 text-teal-400 animate-cloud-fast pointer-events-none z-0">
            <Globe size={48} className="stroke-[1]" />
          </div>

          {/* Floating Interactive Location Pins & Landmarks */}
          <div className="absolute left-[15%] top-[60%] z-30 pointer-events-auto group hidden md:block">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-6 w-6 rounded-full bg-teal-400/30 animate-ping" />
              <MapPin size={14} className="text-teal-400 relative z-10 hover:scale-125 transition-transform cursor-pointer" />
              <span className="absolute left-6 px-2 py-1 rounded bg-slate-900/90 border border-teal-500/30 text-[8px] font-mono text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-wider">
                Varanasi Portal
              </span>
            </div>
          </div>

          <div className="absolute right-[28%] top-[45%] z-30 pointer-events-auto group hidden md:block">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-6 w-6 rounded-full bg-sky-400/30 animate-ping" style={{ animationDelay: '1.2s' }} />
              <MapPin size={14} className="text-sky-400 relative z-10 hover:scale-125 transition-transform cursor-pointer" />
              <span className="absolute left-6 px-2 py-1 rounded bg-slate-900/90 border border-sky-500/30 text-[8px] font-mono text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-wider">
                Tokyo Grid
              </span>
            </div>
          </div>

          <div className="absolute left-[45%] top-[22%] z-30 pointer-events-auto group hidden md:block">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-6 w-6 rounded-full bg-indigo-400/30 animate-ping" style={{ animationDelay: '2.4s' }} />
              <MapPin size={14} className="text-indigo-400 relative z-10 hover:scale-125 transition-transform cursor-pointer" />
              <span className="absolute left-6 px-2 py-1 rounded bg-slate-900/90 border border-indigo-500/30 text-[8px] font-mono text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-wider">
                Paris Station
              </span>
            </div>
          </div>

          {/* Smooth Floating Cloud Layers */}
          <div className="absolute top-1/4 -left-12 w-64 h-20 bg-teal-500/5 blur-2xl rounded-full animate-cloud-slow pointer-events-none z-0" />
          <div className="absolute top-1/2 -right-12 w-80 h-28 bg-sky-500/5 blur-2xl rounded-full animate-cloud-fast pointer-events-none z-0" />

          {/* Smooth Ambient Lighting Spotlights */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(20,184,166,0.06)_0%,transparent_70%)] pointer-events-none z-0 mix-blend-screen" />
          <div className="absolute bottom-0 left-[20%] w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_75%)] pointer-events-none z-0 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />

          {/* Subtle Star Particle Points */}
          <div className="absolute top-12 left-1/3 w-1 h-1 rounded-full bg-white animate-star-glow z-0" />
          <div className="absolute top-24 left-2/3 w-1.5 h-1.5 rounded-full bg-teal-300 animate-star-glow z-0" style={{ animationDelay: '1s' }} />
          <div className="absolute top-48 left-1/5 w-1 h-1 rounded-full bg-sky-300 animate-star-glow z-0" style={{ animationDelay: '2s' }} />
          <div className="absolute top-36 right-1/4 w-1.5 h-1.5 rounded-full bg-indigo-300 animate-star-glow z-0" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-48 left-1/2 w-1 h-1 rounded-full bg-white animate-star-glow z-0" style={{ animationDelay: '0.5s' }} />

        {/* Global HUD Stats Bar */}
        <div className="w-full flex justify-between items-center pb-6 border-b border-white/10 relative z-10 font-mono text-[10px] flex-wrap gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-2 border-r border-white/5 pr-4">
              <Activity className="text-teal-400 animate-pulse" size={16} />
              <div>
                <span className="text-slate-400 uppercase font-black block">CONSCIOUSNESS CORE</span>
                <span className="text-teal-300 font-bold block">ATLAS_ONLINE_V2200</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-r border-white/5 pr-4">
              <Radio className="text-sky-400 animate-ping duration-3000" size={16} />
              <div>
                <span className="text-slate-400 uppercase font-black block">SATELLITE NET</span>
                <span className="text-sky-300 font-bold block">ORBIT_COORDINATES_OK</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-r border-white/5 pr-4">
              <CloudRain className="text-indigo-400" size={16} />
              <div>
                <span className="text-slate-400 uppercase font-black block">ATMOSPHERE OVERLAY</span>
                <span className="text-indigo-300 font-bold block">{earthPulseLayer.toUpperCase()} LEVEL</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="text-slate-400 uppercase font-black block">SYSTEM SYNAPSE</span>
                <span className="text-emerald-400 font-bold block">SECTOR_STEADY</span>
              </div>
            </div>
          </div>

          {/* Time Machine & Legacy Navigation Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowLegacyMenu(!showLegacyMenu)}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-[9px] font-bold font-mono text-teal-400 hover:text-white transition-colors cursor-pointer"
            >
              [Legacy Navigation Fallback]
            </button>
          </div>
        </div>

        {/* Legacy Menu Dropdown */}
        <AnimatePresence>
          {showLegacyMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full bg-slate-900/90 border-b border-white/10 p-5 rounded-2xl relative z-20 flex flex-wrap gap-4 text-xs font-mono font-bold text-left mt-2 shadow-2xl"
            >
              <Link to="/destinations" className="px-4 py-2.5 bg-slate-950 border border-white/10 hover:border-teal-500 rounded-xl text-slate-300 hover:text-white">🌍 EXPLORE DESTINATIONS</Link>
              <Link to="/planner" className="px-4 py-2.5 bg-slate-950 border border-white/10 hover:border-teal-500 rounded-xl text-slate-300 hover:text-white">🚀 AI PLANNER CORE</Link>
              <Link to="/flights" className="px-4 py-2.5 bg-slate-950 border border-white/10 hover:border-teal-500 rounded-xl text-slate-300 hover:text-white">✈️ QUANTUM FLIGHTS</Link>
              <Link to="/hotels" className="px-4 py-2.5 bg-slate-950 border border-white/10 hover:border-teal-500 rounded-xl text-slate-300 hover:text-white">🏨 STATIONS & LODGES</Link>
              <Link to="/packages" className="px-4 py-2.5 bg-slate-950 border border-white/10 hover:border-teal-500 rounded-xl text-slate-300 hover:text-white">📅 TOUR PACKAGES</Link>
              <Link to="/weather" className="px-4 py-2.5 bg-slate-950 border border-white/10 hover:border-teal-500 rounded-xl text-slate-300 hover:text-white">🌦️ ATMOSPHERE ADVISOR</Link>
              <button 
                onClick={() => {
                  if (window.confirm('WARNING: Are you sure you want to calibrate and reset all travel matrices? This will revert unlocked location stamps and XP metrics.')) {
                    setUnlockedStamps(['Agra', 'Delhi']);
                    setPassportXp(1200);
                    showToast('System parameters calibrated.', 'info');
                  }
                }}
                className="px-4 py-2.5 bg-rose-950/20 border border-rose-500/20 text-rose-400 hover:bg-rose-500/10 rounded-xl cursor-pointer"
              >
                🔄 RESET SYSTEM CORES
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic Premium Hero Title */}
        <div className="w-full text-center py-16 flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[9px] font-mono font-black uppercase tracking-[0.2em] animate-pulse backdrop-blur-md">
            🪐 TRAVELVERSE OS V2100 ACTIVATED
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-slate-850 dark:text-white leading-tight uppercase max-w-5xl">
            The Future of <span className="gradient-text">Autonomous Travel</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-mono max-w-3xl leading-relaxed mt-2 text-center">
            Experience the year 2100 travel operating system. AI-driven sequential itineraries, geodetic real-world telemetry, and zero-fatigue planning matrices.
          </p>

          {/* Large Premium Search Terminal */}
          <form 
            onSubmit={handleHeroSearch}
            className="w-full max-w-4xl p-6 md:p-8 rounded-3xl bg-slate-950/60 border border-teal-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(20,184,166,0.1)] backdrop-blur-md relative z-10 flex flex-col gap-6 text-left mt-6 animate-in fade-in zoom-in-95 duration-500"
          >
            {/* Input Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-slate-900/80 border border-white/10 focus-within:border-teal-500 transition-all duration-300">
                  <Search className="text-teal-400 shrink-0" size={18} />
                  <input
                    type="text"
                    placeholder={isVoiceActive ? "Listening for coordinates... Speak now!" : "Search coordinates... (Destination, Country, State, City)"}
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setSearchFocusIndex(-1); }}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                    onKeyDown={handleSearchKeyDown}
                    className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-slate-500 focus:ring-0 focus:outline-none font-mono"
                  />
                  {/* Voice Search Simulator Button */}
                  <button
                    type="button"
                    onClick={handleVoiceSearchSimulate}
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all relative ${
                      isVoiceActive ? 'animate-pulse text-teal-400 border-teal-500' : ''
                    }`}
                    title="Voice Search"
                  >
                    <Mic size={15} />
                    {isVoiceActive && (
                      <span className="absolute inset-0 rounded-lg border border-teal-500 animate-ping opacity-75" />
                    )}
                  </button>
                </div>

                {/* Autocomplete / Telemetry Dropdown */}
                {isSearchFocused && searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-3 p-3 rounded-2xl bg-slate-950/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 flex flex-col gap-1 max-h-[300px] overflow-y-auto backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                    {totalSearchResults.length === 0 ? (
                      <div className="p-4 text-center text-[10px] font-mono text-slate-500">
                        ⚠️ NO COORDINATES RESOLVED
                      </div>
                    ) : (
                      totalSearchResults.map((result, i) => {
                        const isFocused = i === searchFocusIndex;
                        return (
                          <Link
                            key={result.id}
                            to={result.link}
                            onClick={() => { setSearchQuery(''); setSearchFocusIndex(-1); }}
                            className={`flex items-center gap-3.5 p-2.5 hover:bg-white/5 rounded-xl transition-all duration-200 ${
                              isFocused ? 'bg-white/10 text-teal-400 border-l-2 border-teal-500 pl-4' : ''
                            }`}
                          >
                            {result.type === 'destination' ? (
                              <>
                                <img src={result.image} alt={result.name} className="w-8 h-8 rounded-lg object-cover shadow-sm" />
                                <div className="flex-1">
                                  <p className="text-xs font-bold text-white leading-none">{result.name}</p>
                                  <p className="text-[9px] text-slate-500 font-mono uppercase mt-0.5">{result.sub}</p>
                                </div>
                              </>
                            ) : (
                              <div className="flex-1 font-mono text-[10px] text-teal-400 uppercase">
                                ⚙️ {result.name}
                              </div>
                            )}
                            <ArrowRight size={13} className="text-slate-500" />
                          </Link>
                        );
                      })
                    )}
                  </div>
                )}
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                className="px-6 py-4 bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 font-bold text-xs tracking-wider font-mono rounded-2xl hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={14} />
                SCAN TELEMETRY
              </button>
            </div>

            {/* Advanced Filters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-white/5">
              {/* Budget Limit Slider */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono text-slate-400">Max Budget</span>
                <div className="flex items-center justify-between text-[10px] font-mono text-teal-400 font-bold">
                  <span>₹{budgetVal.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="40000"
                  max="400000"
                  step="5000"
                  value={budgetVal}
                  onChange={(e) => setBudgetVal(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
              </div>

              {/* Duration Slider */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono text-slate-400">Duration</span>
                <div className="flex items-center justify-between text-[10px] font-mono text-teal-400 font-bold">
                  <span>{durationVal} Days</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="14"
                  value={durationVal}
                  onChange={(e) => setDurationVal(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
              </div>

              {/* Travel Style Selector */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono text-slate-400">Travel Style</span>
                <select
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                  className="bg-slate-900 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 font-mono focus:border-teal-500 focus:outline-none"
                >
                  <option value="All">All Styles</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Relaxed">Relaxed</option>
                  <option value="Spiritual">Spiritual</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Wildlife">Wildlife</option>
                </select>
              </div>

              {/* Travelers Selector */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono text-slate-400">Travelers</span>
                <select
                  value={travelersCount}
                  onChange={(e) => setTravelersCount(e.target.value)}
                  className="bg-slate-900 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 font-mono focus:border-teal-500 focus:outline-none"
                >
                  <option value="Solo">Solo Traveler</option>
                  <option value="Couple">Couple</option>
                  <option value="Group">Group (3-5)</option>
                  <option value="Family">Family (5+)</option>
                </select>
              </div>

              {/* Weather Preference Selector */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Weather Preference</span>
                <select
                  value={travelSeason}
                  onChange={(e) => setTravelSeason(e.target.value)}
                  className="bg-slate-900 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 font-mono focus:border-teal-500 focus:outline-none"
                >
                  <option value="All">Any Weather</option>
                  <option value="Winter">Snowy / Cold</option>
                  <option value="Summer">Warm / Sunny</option>
                  <option value="Monsoon">Pleasant / Rain</option>
                </select>
              </div>
            </div>

            {/* Suggestions & Recent Searches Row */}
            <div className="flex flex-col md:flex-row justify-between gap-4 pt-4 border-t border-white/5 text-[10px] font-mono">
              {/* AI suggestions */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-500 uppercase font-black">AI suggestions:</span>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { term: 'Spiti Peaks', desc: '🏔️ Snow Peaks' },
                    { term: 'Goa Coast', desc: '🏖️ Sun Beach' }
                  ].map((item) => (
                    <button
                      key={item.term}
                      type="button"
                      onClick={() => {
                        setSearchQuery(item.term);
                        showToast(`Calibrating matrix to ${item.term}`, 'info');
                      }}
                      className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-all cursor-pointer"
                    >
                      {item.desc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent searches */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-500 uppercase font-black">Recent Logs:</span>
                <div className="flex gap-2">
                  {['Agra', 'Delhi'].map(term => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setSearchQuery(term);
                        showToast(`Loaded recent search for ${term}`, 'info');
                      }}
                      className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/5 text-slate-450 hover:text-white hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                      ⏳ {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Trending Destinations with Thumbnails */}
            <div className="w-full flex flex-col gap-3 pt-4 border-t border-white/5">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono text-slate-400">🔥 Trending Coordinates</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {[
                  { name: 'Varanasi', sub: 'Spiritual Core', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=120&q=80', query: 'Varanasi' },
                  { name: 'Leh Ladakh', sub: 'Glacial Pass', image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=120&q=80', query: 'Leh' },
                  { name: 'Jaipur', sub: 'Royal Grid', image: 'https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=120&q=80', query: 'Jaipur' },
                  { name: 'Goa Coast', sub: 'Ocean Front', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=120&q=80', query: 'Goa' },
                  { name: 'Agra', sub: 'Taj Sector', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=120&q=80', query: 'Agra' }
                ].map((dest) => (
                  <button
                    key={dest.name}
                    type="button"
                    onClick={() => {
                      setSearchQuery(dest.query);
                      showToast(`Calibrating destination to ${dest.name}`, 'success');
                    }}
                    className="flex items-center gap-2.5 p-2 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <img src={dest.image} alt={dest.name} className="w-8 h-8 rounded-lg object-cover border border-white/10" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-white leading-none truncate">{dest.name}</p>
                      <p className="text-[8px] text-slate-500 font-mono truncate mt-0.5">{dest.sub}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Security, Privacy & AI Accuracy Indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center pt-4 border-t border-white/5 w-full text-[9px] font-mono text-slate-500 uppercase">
              <span className="flex items-center gap-1"><ShieldCheck size={11} className="text-teal-400" /> 256-bit Encrypted Core</span>
              <span className="flex items-center gap-1"><Lock size={11} className="text-teal-400" /> Zero-Knowledge Data Privacy</span>
              <span className="flex items-center gap-1"><Cpu size={11} className="text-teal-400" /> AI Confidence: 99.8% Accuracy</span>
            </div>

            {/* Subsystems Shortcuts Row */}
            <div className="flex flex-wrap gap-4 items-center justify-center pt-4 border-t border-white/5 w-full">
              <Link
                to="/planner"
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-teal-400 hover:text-white text-[10px] font-bold tracking-wider font-mono transition-all hover:scale-105 active:scale-95"
              >
                🚀 CALIBRATE QUANTUM PLANNER
              </Link>
              <button
                type="button"
                onClick={() => {
                  setShowLegacyMenu(!showLegacyMenu);
                  showToast('Accessing Legacy Subsystem Menu...', 'info');
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-teal-400 hover:text-white text-[10px] font-bold tracking-wider font-mono transition-all hover:scale-105 active:scale-95"
              >
                📂 ACCESS LEGACY ARCHIVES
              </button>
            </div>
          </form>

          {/* Scroll Down Telemetry Indicator */}
          <div className="flex flex-col items-center justify-center gap-1.5 mt-8 animate-bounce">
            <span className="text-[8.5px] font-mono font-black uppercase tracking-widest text-teal-500">SCROLL TO TELEMETRY</span>
            <ArrowRight size={13} className="text-teal-400 rotate-90" />
          </div>
        </div>

        {/* Command Center Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 relative z-10 items-stretch">
          
          {/* OS LEFT SIDEBAR SELECTOR */}
          <div className="lg:col-span-3 flex flex-col gap-2 bg-slate-900/60 p-4 rounded-2xl border border-white/5 text-left text-xs font-semibold font-mono">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 border-b border-white/5 pb-1">Travel OS Subsystems</span>
            
            <button
              onClick={() => setActiveTab('mission-control')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'mission-control' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Compass size={14} />
              <span>📡 MISSION CONTROL</span>
            </button>

            <button
              onClick={() => setActiveTab('dna')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'dna' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Activity size={14} />
              <span>🧬 TRAVEL DNA</span>
            </button>

            <button
              onClick={() => setActiveTab('dream')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'dream' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Sparkles size={14} />
              <span>🔮 DREAM TRIP AI</span>
            </button>

            <button
              onClick={() => setActiveTab('timemachine')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'timemachine' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Calendar size={14} />
              <span>⏳ TIME MACHINE</span>
            </button>

            <button
              onClick={() => setActiveTab('graph')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'graph' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Layers size={14} />
              <span>🕸️ MEMORY GRAPH</span>
            </button>

            <button
              onClick={() => setActiveTab('galaxy')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'galaxy' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Sparkle size={14} />
              <span>🌌 BUCKET GALAXY</span>
            </button>

            <button
              onClick={() => setActiveTab('passport')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'passport' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Award size={14} />
              <span>🎫 EXPLORER PASSPORT</span>
            </button>

            <button
              onClick={() => setActiveTab('soundscapes')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'soundscapes' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Music size={14} />
              <span>🎵 SOUNDSCAPES</span>
            </button>

            <button
              onClick={() => setActiveTab('eco')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'eco' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Leaf size={14} />
              <span>🌱 ECO INTEL</span>
            </button>

            <button
              onClick={() => setActiveTab('agents')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'agents' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <Cpu size={14} />
              <span>🧩 MODULAR AGENTS</span>
            </button>

            <button
              onClick={() => setActiveTab('feed')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'feed' ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-500 pl-4' : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
              }`}
            >
              <DiscoveryIcon size={14} />
              <span>📱 DISCOVERY FEED</span>
            </button>
            
            {/* Time of Day theme changer widget */}
            <div className="mt-4 border-t border-white/5 pt-3 flex flex-col gap-2 text-left">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest font-mono">Time of Day Simulator</span>
              <div className="grid grid-cols-2 gap-1.5 font-mono text-[8px] font-bold">
                <button 
                  onClick={() => setTimeOfDay('sunrise')}
                  className={`py-1 rounded border transition-colors ${timeOfDay === 'sunrise' ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'}`}
                >
                  🌅 SUNRISE
                </button>
                <button 
                  onClick={() => setTimeOfDay('noon')}
                  className={`py-1 rounded border transition-colors ${timeOfDay === 'noon' ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'}`}
                >
                  ☀️ NOON
                </button>
                <button 
                  onClick={() => setTimeOfDay('sunset')}
                  className={`py-1 rounded border transition-colors ${timeOfDay === 'sunset' ? 'bg-pink-500 text-slate-950 border-pink-400' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'}`}
                >
                  🌇 SUNSET
                </button>
                <button 
                  onClick={() => setTimeOfDay('midnight')}
                  className={`py-1 rounded border transition-colors ${timeOfDay === 'midnight' ? 'bg-indigo-500 text-slate-950 border-indigo-400' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'}`}
                >
                  🌌 MIDNIGHT
                </button>
              </div>
            </div>
          </div>

          {/* OS DISPLAY CONSOLE MODULE PANEL */}
          <div className="lg:col-span-9 rounded-2xl border border-white/10 bg-slate-950/40 shadow-inner flex flex-col justify-between min-h-[500px] overflow-hidden relative">
            
            <AnimatePresence mode="wait">
              {/* TAB 1: MISSION CONTROL */}
              {activeTab === 'mission-control' && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full h-full grid grid-cols-1 md:grid-cols-12 items-stretch"
                >
                  <div className="md:col-span-5 p-6 flex flex-col gap-5 text-left justify-between">
                    <div>
                      {/* SENTIENT ORB INTERFACE "ATLAS" */}
                      <div className="flex items-center gap-3.5 bg-slate-900/60 p-3 rounded-2xl border border-white/5">
                        <div className="relative w-11 h-11 bg-gradient-to-tr from-teal-400 to-sky-500 animate-orb-morph flex items-center justify-center shadow-lg shadow-teal-500/20 shrink-0">
                          <Sparkles size={18} className="text-slate-950 animate-pulse" />
                        </div>
                        
                        <div className="flex-1 font-mono text-[9px]">
                          <span className="text-teal-400 font-bold block animate-pulse">{atlasStatus}</span>
                          <span className="text-slate-500 block uppercase font-black text-[7px] mt-0.5">Atlas Core v2200</span>
                        </div>
                      </div>

                      {/* ATLAS CONVERSATIONAL PRE-SEARCH INPUT */}
                      <form onSubmit={handleAtlasSubmit} className="mt-4 flex flex-col gap-2 text-xs">
                        <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest font-mono">Dream Search: How do you want to feel?</label>
                        <div className="flex gap-2 bg-slate-950 p-2.5 rounded-xl border border-white/10 items-center">
                          <Search className="text-teal-400 shrink-0" size={13} />
                          <input
                            type="text"
                            placeholder="I want mountains, cold weather, peace..."
                            value={atlasQuery}
                            onChange={(e) => setAtlasQuery(e.target.value)}
                            className="bg-transparent border-none outline-none text-white text-xs w-full placeholder-slate-500 focus:ring-0 focus:outline-none font-mono"
                          />
                        </div>
                        <button
                          type="submit"
                          className="py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-mono font-bold rounded-xl shadow-md cursor-pointer transition-colors"
                        >
                          Calibrate Query
                        </button>
                      </form>

                      {/* ATLAS NARRATION RESPONSE */}
                      {atlasResponse && (
                        <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-[10px] text-teal-300 font-semibold leading-relaxed mt-2 animate-in fade-in slide-in-from-bottom-2">
                          <h5 className="font-mono font-bold uppercase tracking-wider text-[8px] text-teal-400 mb-1 flex items-center gap-1">
                            <Sparkle size={10} /> Atlas Narration:
                          </h5>
                          {atlasResponse}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-4 bg-slate-900/60 p-4 rounded-xl border border-white/5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1">
                          <PlaneTakeoff size={10} className="text-teal-400" /> Departure Core Station
                        </label>
                        <select
                          value={departureHub}
                          onChange={(e) => {
                            setDepartureHub(e.target.value);
                            showToast(`Transit paths recalculated from ${e.target.value} Hub!`, 'success');
                          }}
                          className="px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-100"
                        >
                          <option value="Delhi">New Delhi (DEL)</option>
                          <option value="Mumbai">Mumbai (BOM)</option>
                          <option value="Surat">Surat (STV)</option>
                          <option value="Bengaluru">Bengaluru (BLR)</option>
                          <option value="Chennai">Chennai (MAA)</option>
                        </select>
                      </div>

                      <form onSubmit={handleHeroSearch} className="flex gap-2">
                        <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950 border border-white/10">
                          <Search className="text-teal-400 shrink-0" size={13} />
                          <input
                            type="text"
                            placeholder="Query global coordinates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none outline-none text-white text-xs w-full placeholder-slate-500 focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="py-2 px-3.5 text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-all cursor-pointer shadow-md shrink-0"
                        >
                          Query
                        </button>
                      </form>
                    </div>

                    <div className="flex flex-col gap-2 font-mono text-[9px]">
                      <span className="text-slate-400 uppercase font-black tracking-widest block border-b border-white/5 pb-1 text-left">TELEMETRY SCROLLER</span>
                      <div className="flex flex-col gap-1.5 max-h-[85px] overflow-hidden">
                        {telemetryLogs.map((log) => (
                          <div key={log.id} className="flex justify-between items-center gap-2 bg-slate-900/40 p-2 rounded-lg border border-white/5">
                            <span className="text-slate-500 font-bold shrink-0">{log.time}</span>
                            <span className="text-slate-300 font-semibold truncate flex-1">{log.text}</span>
                            <span className="text-teal-400 font-black shrink-0">SYNCED</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3D GLOBE AREA WITH LIVING EARTH OVERLAY CONTROLS */}
                  <div className="md:col-span-7 h-[420px] md:h-full min-h-[420px] relative border-l border-white/5 bg-slate-950/20 flex flex-col justify-between p-4">
                    <div className="z-20 flex flex-col gap-2 font-mono text-[9px] pointer-events-none max-w-xs text-left bg-slate-950/80 p-3 rounded-xl border border-white/5 backdrop-blur-xs">
                      <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-1 flex items-center gap-1">
                        <PlaneTakeoff size={10} className="text-sky-400" /> Active Flight Telemetry
                      </span>
                      {activeFlights.map((f, idx) => (
                        <div key={idx} className="flex justify-between gap-4 text-slate-350">
                          <span className="font-bold text-sky-400">{f.flight}</span>
                          <span className="font-semibold">{f.route}</span>
                          <span className="text-slate-500">{f.alt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Earth Pulse Overlays */}
                    <div className="absolute bottom-4 right-4 left-4 z-20 flex flex-col gap-2 font-mono text-[8px] text-left">
                      <span className="text-[7px] text-slate-500 uppercase tracking-widest font-black">Planetary Atmosphere Overlays</span>
                      <div className="flex gap-1.5 flex-wrap">
                        <button
                          onClick={() => { setEarthPulseLayer('atmosphere'); showToast('Atmosphere rendering: cloud layers calibrated.', 'success'); }}
                          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${earthPulseLayer === 'atmosphere' ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 border border-white/5 text-slate-400'}`}
                        >
                          ☁️ CLOUD LAYERS
                        </button>
                        <button
                          onClick={() => { setEarthPulseLayer('aurora'); showToast('Aurora overlay: electromagnetic winds synced.', 'success'); }}
                          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${earthPulseLayer === 'aurora' ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 border border-white/5 text-slate-400'}`}
                        >
                          🌌 AURORA BELT
                        </button>
                        <button
                          onClick={() => { setEarthPulseLayer('ocean'); showToast('Ocean current arrays calibrated.', 'success'); }}
                          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${earthPulseLayer === 'ocean' ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 border border-white/5 text-slate-400'}`}
                        >
                          🌊 OCEAN FLOW
                        </button>
                        <button
                          onClick={() => { setEarthPulseLayer('heatmap'); showToast('Tourism heatmaps: peak densities updated.', 'success'); }}
                          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${earthPulseLayer === 'heatmap' ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 border border-white/5 text-slate-400'}`}
                        >
                          🔥 TOUR DENSITY
                        </button>
                      </div>
                    </div>

                    <div className="absolute inset-0 z-0">
                      <FuturisticGlobe />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: TRAVEL DNA PROFILE */}
              {activeTab === 'dna' && (
                <motion.div
                  key="dna"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">GENOME CALIBRATION MATRIX</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Travel DNA Profile</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Adjust your genomic sliders to customize how the master AI Twin recalibrates flight paths and hotel selections.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col gap-4 font-mono text-xs text-slate-350">
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between font-bold">
                          <span>ADVENTURE GENE</span>
                          <span className="text-teal-400">{dnaPreferences.adventure}%</span>
                        </div>
                        <input
                          type="range"
                          value={dnaPreferences.adventure}
                          onChange={(e) => setDnaPreferences(prev => ({ ...prev, adventure: parseInt(e.target.value) }))}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between font-bold">
                          <span>BUDGET VELOCITY</span>
                          <span className="text-teal-400">{dnaPreferences.budget}%</span>
                        </div>
                        <input
                          type="range"
                          value={dnaPreferences.budget}
                          onChange={(e) => setDnaPreferences(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between font-bold">
                          <span>TRAVEL PACE (RELAXATION)</span>
                          <span className="text-teal-400">{dnaPreferences.pace}%</span>
                        </div>
                        <input
                          type="range"
                          value={dnaPreferences.pace}
                          onChange={(e) => setDnaPreferences(prev => ({ ...prev, pace: parseInt(e.target.value) }))}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between font-bold">
                          <span>SUSTAINABILITY INDEX</span>
                          <span className="text-teal-400">{dnaPreferences.sustainability}%</span>
                        </div>
                        <input
                          type="range"
                          value={dnaPreferences.sustainability}
                          onChange={(e) => setDnaPreferences(prev => ({ ...prev, sustainability: parseInt(e.target.value) }))}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between font-bold">
                          <span>COMFORT COEFFICIENT</span>
                          <span className="text-teal-400">{dnaPreferences.comfort}%</span>
                        </div>
                        <input
                          type="range"
                          value={dnaPreferences.comfort}
                          onChange={(e) => setDnaPreferences(prev => ({ ...prev, comfort: parseInt(e.target.value) }))}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                        />
                      </div>
                    </div>

                    {/* DNA Rotating Helix SVG */}
                    <div className="flex flex-col items-center justify-center p-6 bg-slate-900/40 rounded-2xl border border-white/5 relative">
                      <div className="w-full h-40 flex items-center justify-center animate-dna-helix relative">
                        <svg className="w-16 h-full" viewBox="0 0 100 200">
                          {Array.from({ length: 12 }).map((_, i) => {
                            const y = 15 + i * 15;
                            const sinVal = Math.sin(i * 0.7);
                            const x1 = 50 + sinVal * 30;
                            const x2 = 50 - sinVal * 30;
                            return (
                              <g key={i} className="opacity-80">
                                <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(45, 212, 191, 0.4)" strokeWidth="2" />
                                <circle cx={x1} cy={y} r="4.5" fill="#2dd4bf" className="animate-pulse" />
                                <circle cx={x2} cy={y} r="4.5" fill="#f43f5e" />
                              </g>
                            );
                          })}
                        </svg>
                      </div>

                      <div className="mt-4 text-center">
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Travel Genome Score</span>
                        <h4 className="font-mono font-black text-teal-400 text-base mt-1">
                          {dnaPreferences.adventure > 60 ? 'ECO-ADVENTURER' : 'WELLNESS-DRIFTER'} - {Math.round((dnaPreferences.adventure + dnaPreferences.sustainability + dnaPreferences.comfort) / 3)}%
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: AI DREAM TRIP GENERATOR */}
              {activeTab === 'dream' && (
                <motion.div
                  key="dream"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">NEURAL CONSCIOUSNESS DRIVES</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">AI Dream Trip Generator</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Pick an environmental dream template. Our coordinated sub-agents will build a custom zero-fatigue timeline.
                    </p>
                  </div>

                  {!dreamItinerary && !generatingDream && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        onClick={() => triggerDreamGeneration('northern')}
                        className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 cursor-pointer transition-all flex flex-col gap-3 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                          <Sparkles size={18} />
                        </div>
                        <h4 className="font-bold text-sm text-white">Aurora Quantum Drift</h4>
                        <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">Track the Northern Lights from a custom glass dome in Norway.</p>
                      </div>

                      <div 
                        onClick={() => triggerDreamGeneration('himalayan')}
                        className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 cursor-pointer transition-all flex flex-col gap-3 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                          <PlaneTakeoff size={18} />
                        </div>
                        <h4 className="font-bold text-sm text-white">Trans-Himalayan EV</h4>
                        <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">Traverse high-altitude Ladakh trails on custom electric motorbikes.</p>
                      </div>

                      <div 
                        onClick={() => triggerDreamGeneration('desert')}
                        className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 cursor-pointer transition-all flex flex-col gap-3 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                          <Compass size={18} />
                        </div>
                        <h4 className="font-bold text-sm text-white">Desert Nomad Odyssey</h4>
                        <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">Remote work from luxury sand dunes and historic fort palaces.</p>
                      </div>
                    </div>
                  )}

                  {generatingDream && (
                    <div className="p-6 bg-slate-950/80 rounded-2xl border border-white/5 font-mono text-[10px] text-slate-350 flex flex-col gap-2 relative">
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-1 flex items-center gap-1.5">
                        <Activity className="animate-spin text-teal-400" size={11} /> Coordinating AI Subsystem Nodes
                      </span>
                      {dreamLogs.map((log, idx) => (
                        <div key={idx} className="flex justify-between items-center gap-2 bg-slate-900/30 p-2 rounded border border-white/5">
                          <span className="font-semibold">{log}</span>
                          <span className="text-teal-400 font-bold shrink-0">DONE</span>
                        </div>
                      ))}
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden mt-4">
                        <div className="h-full bg-teal-500 animate-pulse" style={{ width: `${(dreamLogs.length / 6) * 100}%` }} />
                      </div>
                    </div>
                  )}

                  {dreamItinerary && !generatingDream && (
                    <div className="flex flex-col gap-4 max-h-[380px] overflow-y-auto pr-2">
                      <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex justify-between items-center flex-wrap gap-2">
                        <div>
                          <h4 className="font-bold text-white text-base">{dreamItinerary.title}</h4>
                          <span className="text-[10px] text-teal-400 font-mono font-bold">{dreamItinerary.dest}</span>
                        </div>
                        <div className="flex gap-4 font-mono text-[10px] text-right font-semibold">
                          <div>
                            <span className="text-slate-500 block text-[8px] uppercase">Carbon Footprint</span>
                            <span className="text-emerald-400">{dreamItinerary.carbon}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[8px] uppercase">Duration</span>
                            <span className="text-white">{dreamItinerary.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Itinerary Timeline</span>
                          {dreamItinerary.timeline.map((day, idx) => (
                            <div key={idx} className="p-3 bg-slate-900/50 rounded-xl border border-white/5 flex gap-3 text-xs leading-relaxed font-semibold">
                              <span className="text-teal-400 font-black shrink-0 font-mono">{day.day}</span>
                              <p className="text-slate-300">{day.activity}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col gap-2">
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Key Highlights</span>
                            <ul className="text-xs text-slate-300 font-semibold flex flex-col gap-1.5 list-disc pl-4">
                              {dreamItinerary.highlights.map((h, idx) => (
                                <li key={idx}>{h}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-xl bg-gradient-to-tr from-teal-900/20 to-sky-900/20 border border-teal-500/20 flex flex-col gap-3 items-center text-center">
                            <Award className="text-teal-400" size={32} />
                            <div>
                              <h4 className="font-bold text-xs text-white uppercase tracking-wider">PERSONALIZED CERTIFICATE</h4>
                              <p className="text-[10px] text-slate-400 leading-relaxed font-semibold mt-1">You have unlocked the Explorer Badge for {dreamItinerary.dest.split(',')[0]}!</p>
                            </div>
                            <button
                              onClick={() => {
                                setDreamItinerary(null);
                                setDreamTarget(null);
                              }}
                              className="py-1.5 px-4 bg-slate-900 hover:bg-slate-800 border border-white/10 text-white rounded-lg text-[10px] font-bold cursor-pointer transition-colors"
                            >
                              Generate Another Dream
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 4: TIME MACHINE TRAVEL LAYER */}
              {activeTab === 'timemachine' && (
                <motion.div
                  key="timemachine"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">HISTORICAL RECONSTRUCTION GRID</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Time Machine Travel Layer</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Choose a legendary landmark and drag the slider to traverse epochs—witnessing historical details and future 2200 AD anti-gravity blueprint models.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setTimeMachineLandmark('tajmahal')}
                      className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold font-mono transition-all cursor-pointer ${
                        timeMachineLandmark === 'tajmahal' ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      TAJ MAHAL
                    </button>
                    <button
                      onClick={() => setTimeMachineLandmark('colosseum')}
                      className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold font-mono transition-all cursor-pointer ${
                        timeMachineLandmark === 'colosseum' ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      COLOSSEUM
                    </button>
                    <button
                      onClick={() => setTimeMachineLandmark('pyramids')}
                      className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold font-mono transition-all cursor-pointer ${
                        timeMachineLandmark === 'pyramids' ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      PYRAMIDS OF GIZA
                    </button>
                  </div>

                  {/* Era timeline slider */}
                  <div className="w-full flex flex-col gap-2 font-mono text-[9px] border-b border-white/5 pb-4 mt-2">
                    <div className="flex justify-between font-bold text-slate-400">
                      <span onClick={() => setTimeMachineEra('ancient')} className={`cursor-pointer ${timeMachineEra === 'ancient' ? 'text-teal-400' : ''}`}>ANCIENT (1632 AD/BC)</span>
                      <span onClick={() => setTimeMachineEra('medieval')} className={`cursor-pointer ${timeMachineEra === 'medieval' ? 'text-teal-400' : ''}`}>MEDIEVAL</span>
                      <span onClick={() => setTimeMachineEra('modern')} className={`cursor-pointer ${timeMachineEra === 'modern' ? 'text-teal-400' : ''}`}>MODERN</span>
                      <span onClick={() => setTimeMachineEra('future')} className={`cursor-pointer ${timeMachineEra === 'future' ? 'text-teal-400' : ''}`}>2200 AD FUTURE SYSTEM</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="4"
                      step="1"
                      value={timeMachineEra === 'ancient' ? 1 : (timeMachineEra === 'medieval' ? 2 : (timeMachineEra === 'modern' ? 3 : 4))}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (val === 1) setTimeMachineEra('ancient');
                        if (val === 2) setTimeMachineEra('medieval');
                        if (val === 3) setTimeMachineEra('modern');
                        if (val === 4) setTimeMachineEra('future');
                      }}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                    />
                  </div>

                  {/* Wireframe blueprint view & Description */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-2">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col gap-3 text-xs leading-relaxed font-semibold">
                      <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">Historical Record</span>
                      
                      {timeMachineLandmark === 'tajmahal' && (
                        <>
                          <h4 className="font-bold text-white text-sm">Taj Mahal Epoch View</h4>
                          {timeMachineEra === 'ancient' && <p className="text-slate-350">Constructed in 1632 AD by Emperor Shah Jahan as a memorial for Mumtaz Mahal. Over 20,000 artisans carved white Makrana marble tiles alongside Yamuna River banks.</p>}
                          {timeMachineEra === 'medieval' && <p className="text-slate-350">A period of Maratha and Jat raids. The gold dome finial was removed and replaced, and gardens underwent structural variations under Islamic/local rulers.</p>}
                          {timeMachineEra === 'modern' && <p className="text-slate-350">Currently faces conservation challenges due to environmental carbon fumes. Acid rain warnings are actively synced to local municipal data indices.</p>}
                          {timeMachineEra === 'future' && <p className="text-slate-350">Platform projection for 2200 AD: Fully shielded under magnetic anti-gravity forcefield domes that isolate marble blocks from moisture and particle decay, featuring levitating tourist transit rings.</p>}
                        </>
                      )}

                      {timeMachineLandmark === 'colosseum' && (
                        <>
                          <h4 className="font-bold text-white text-sm">Colosseum Epoch View</h4>
                          {timeMachineEra === 'ancient' && <p className="text-slate-350">Opened in 80 AD by Emperor Titus. The massive stone amphitheater hosted gladiatorial combats with canvas sunshades (velarium) and underground cages.</p>}
                          {timeMachineEra === 'medieval' && <p className="text-slate-350">Converted into a fortress complex by the Frangipane family. Severely damaged by earthquakes in 1349, with marble columns salvaged for local castles.</p>}
                          {timeMachineEra === 'modern' && <p className="text-slate-350">A historic monument in central Rome, heavily visited by global tourists. Features structural steel reinforcing rings to prevent wall collapses.</p>}
                          {timeMachineEra === 'future' && <p className="text-slate-350">Platform projection for 2200 AD: Anti-gravity restoration nodes structurally suspend the broken brick arches, allowing full 3D interactive holographic historical recreations inside the arena.</p>}
                        </>
                      )}

                      {timeMachineLandmark === 'pyramids' && (
                        <>
                          <h4 className="font-bold text-white text-sm">Pyramids of Giza Epoch View</h4>
                          {timeMachineEra === 'ancient' && <p className="text-slate-350">Constructed circa 2560 BC for Pharaoh Khufu. The pyramid is encased in smooth white Tura limestone sheets, reflecting bright sunlight across the desert plains.</p>}
                          {timeMachineEra === 'medieval' && <p className="text-slate-350">Local rulers stripped the exterior white casing blocks to build medieval Cairo mosques. The tunnels are explored by treasure-seeking Arab explorers.</p>}
                          {timeMachineEra === 'modern' && <p className="text-slate-350">Located on the dusty outskirts of Cairo. The interior chambers are explored by robotic muon scanners and cosmic ray detectors.</p>}
                          {timeMachineEra === 'future' && <p className="text-slate-350">Platform projection for 2200 AD: Levitating exploration pads hover above Giza, while molecular scanning sensors compile structural twin parameters of the King's chamber in real time.</p>}
                        </>
                      )}
                    </div>

                    {/* Glowing Wireframe Blueprint */}
                    <div className="blueprint-grid rounded-xl p-6 flex flex-col items-center justify-center relative min-h-[160px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 to-transparent pointer-events-none" />
                      
                      {timeMachineLandmark === 'tajmahal' && (
                        <svg className="w-24 h-24 stroke-sky-400 fill-none" viewBox="0 0 100 100">
                          <path d="M25,60 C25,30 75,30 75,60 Z" strokeWidth="1" />
                          <line x1="50" y1="30" x2="50" y2="15" strokeWidth="1.5" />
                          <rect x="20" y="60" width="60" height="25" strokeWidth="1" />
                          <rect x="35" y="68" width="30" height="17" strokeWidth="1" />
                          <line x1="10" y1="90" x2="10" y2="40" strokeWidth="1" />
                          <line x1="90" y1="90" x2="90" y2="40" strokeWidth="1" />
                          {timeMachineEra === 'future' && (
                            <circle cx="50" cy="50" r="40" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="0.75" strokeDasharray="3,3" />
                          )}
                        </svg>
                      )}

                      {timeMachineLandmark === 'colosseum' && (
                        <svg className="w-24 h-24 stroke-sky-400 fill-none" viewBox="0 0 100 100">
                          <ellipse cx="50" cy="50" rx="45" ry="35" strokeWidth="1" />
                          <ellipse cx="50" cy="50" rx="35" ry="25" strokeWidth="1" />
                          <ellipse cx="50" cy="50" rx="25" ry="15" strokeWidth="1" />
                          {Array.from({ length: 16 }).map((_, i) => {
                            const angle = (i * Math.PI) / 8;
                            const x1 = 50 + Math.cos(angle) * 35;
                            const y1 = 50 + Math.sin(angle) * 25;
                            const x2 = 50 + Math.cos(angle) * 45;
                            const y2 = 50 + Math.sin(angle) * 35;
                            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" />;
                          })}
                        </svg>
                      )}

                      {timeMachineLandmark === 'pyramids' && (
                        <svg className="w-24 h-24 stroke-sky-400 fill-none" viewBox="0 0 100 100">
                          <polygon points="50,15 10,80 90,80" strokeWidth="1.5" />
                          <line x1="50" y1="15" x2="50" y2="80" strokeWidth="0.75" />
                          <line x1="10" y1="80" x2="50" y2="80" strokeWidth="1" />
                          <rect x="42" y="48" width="16" height="8" strokeWidth="0.75" />
                          <line x1="50" y1="48" x2="50" y2="80" strokeWidth="0.75" />
                        </svg>
                      )}

                      <span className="text-[8px] font-bold text-sky-400 uppercase tracking-widest font-mono mt-3">2200 AD STRUCTURAL SHIELDING</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 5: WORLD MEMORY GRAPH */}
              {activeTab === 'graph' && (
                <motion.div
                  key="graph"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">CULTURAL CONNECTIONS ENGINE</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">World Memory Graph</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Explore the nodes connecting Indian food, regional festivals, and offbeat travel destinations. Click nodes to inspect relationships.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-2">
                    <div className="md:col-span-2 p-4 bg-slate-900/60 rounded-xl border border-white/5 flex items-center justify-center min-h-[220px]">
                      <svg className="w-full h-56" viewBox="0 0 300 200">
                        {/* Connecting Lines */}
                        <line x1="150" y1="100" x2="70" y2="50" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="1.5" />
                        <line x1="150" y1="100" x2="230" y2="50" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="1.5" />
                        <line x1="150" y1="100" x2="70" y2="150" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="1.5" />
                        <line x1="150" y1="100" x2="230" y2="150" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="1.5" />
                        <line x1="70" y1="50" x2="230" y2="50" stroke="rgba(244, 63, 94, 0.15)" strokeWidth="1" strokeDasharray="2,2" />

                        {/* Nodes */}
                        <g className="cursor-pointer" onClick={() => setSelectedMood('Kerala')}>
                          <circle cx="150" cy="100" r="14" fill="#0d9488" className="animate-pulse" />
                          <text x="150" y="103" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold">KERALA</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => showToast('Munnar is famous for tea valleys.', 'info')}>
                          <circle cx="70" cy="50" r="10" fill="#0891b2" />
                          <text x="70" y="53" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">MUNNAR</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => showToast('Cardamom Tea: local spice brew.', 'info')}>
                          <circle cx="230" cy="50" r="10" fill="#db2777" />
                          <text x="230" y="53" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">TEA BREW</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => showToast('Thrissur Pooram is an elephant festival.', 'info')}>
                          <circle cx="70" cy="150" r="10" fill="#4f46e5" />
                          <text x="70" y="153" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">FESTIVALS</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => showToast('Appam with stew: staple Kerala breakfast.', 'info')}>
                          <circle cx="230" cy="150" r="10" fill="#d97706" />
                          <text x="230" y="153" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">APPAM STEW</text>
                        </g>
                      </svg>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col justify-between text-xs leading-relaxed font-semibold">
                      <div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Node Inspector</span>
                        <h4 className="font-bold text-white text-sm mt-1.5">Munnar Ecosystem Hub</h4>
                        <p className="text-slate-400 mt-2">
                          Selecting the Kerala node opens up sub-parameters representing Munnar hills, Cardamom tea plantations, and regional food staples like Appam.
                        </p>
                      </div>
                      <span className="text-[9px] text-teal-400 font-mono font-bold mt-2">CONNECTIONS: 4 ACTIVE LINKS</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 6: BUCKET LIST GALAXY */}
              {activeTab === 'galaxy' && (
                <motion.div
                  key="galaxy"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">INTERACTION GALAXY CHART</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Bucket List Galaxy</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Destinations are represented as stars in this galaxy. Click glowing nodes to complete the journey and claim your passport stamps.
                    </p>
                  </div>

                  <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                    <canvas ref={galaxyCanvasRef} className="w-full block" />
                  </div>
                </motion.div>
              )}

              {/* TAB 7: EXPLORER PASSPORT */}
              {activeTab === 'passport' && (
                <motion.div
                  key="passport"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">GLOBAL EXPLORATION RECORD</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Explorer Passport</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      View your achievements, accumulated traveler XP, and digital stamps unlocked through the galaxy or trip planner.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between text-xs leading-relaxed font-semibold font-mono">
                      <div>
                        <span className="text-[8px] text-slate-500 uppercase tracking-widest">Traveler Rank</span>
                        <h4 className="font-bold text-teal-400 text-sm mt-1">PLANETARY PATHFINDER</h4>
                        <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden mt-4">
                          <div className="h-full bg-teal-500" style={{ width: `${(passportXp % 1000) / 10}%` }} />
                        </div>
                        <span className="text-[9px] text-slate-500 mt-2 block">XP: {passportXp} / {Math.ceil(passportXp / 1000) * 1000}</span>
                      </div>
                      <span className="text-[10px] text-white font-bold mt-4">LEVEL: {Math.floor(passportXp / 1000) + 1}</span>
                    </div>

                    <div className="md:col-span-2 p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col gap-3 font-semibold">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Digital Stamps Book</span>
                      
                      <div className="flex flex-wrap gap-3">
                        {unlockedStamps.map(stamp => (
                          <div key={stamp} className="px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-black flex items-center gap-1.5">
                            <Award size={12} />
                            {stamp.toUpperCase()}
                          </div>
                        ))}
                        {mockDestinations.filter(d => !unlockedStamps.includes(d.name.split(' ')[0])).slice(0, 3).map(d => (
                          <div key={d.id} className="px-4 py-2 rounded-xl bg-slate-900/40 border border-white/5 text-slate-500 text-xs font-mono font-bold flex items-center gap-1.5 opacity-50">
                            <Award size={12} />
                            {d.name.split(' ')[0].toUpperCase()}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 8: SOUNDSCAPES */}
              {activeTab === 'soundscapes' && (
                <motion.div
                  key="soundscapes"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">ATMOSPHERIC RESONANCE PRESETS</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Destination Soundscapes</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Synthesize regional environmental soundscapes in real time using the browser's Web Audio API oscillators and filters.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      onClick={() => handleToggleSound('ocean')}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col gap-3 font-semibold ${
                        playingSound === 'ocean' ? 'bg-teal-500/20 border-teal-500 text-teal-300' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">Goa Ocean Waves</span>
                        {playingSound === 'ocean' ? <Square size={14} /> : <Play size={14} />}
                      </div>
                      <p className="text-[10px] leading-relaxed">Synthesizes rolling white-noise sweeps simulating waves breaking on Galgibaga sand belts.</p>
                    </div>

                    <div 
                      onClick={() => handleToggleSound('temple')}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col gap-3 font-semibold ${
                        playingSound === 'temple' ? 'bg-teal-500/20 border-teal-500 text-teal-300' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">Varanasi Temple Bells</span>
                        {playingSound === 'temple' ? <Square size={14} /> : <Play size={14} />}
                      </div>
                      <p className="text-[10px] leading-relaxed">Synthesizes sine-wave harmonics with exponential filter decay to replicate brass chime resonance.</p>
                    </div>

                    <div 
                      onClick={() => handleToggleSound('forest')}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col gap-3 font-semibold ${
                        playingSound === 'forest' ? 'bg-teal-500/20 border-teal-500 text-teal-300' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">Munnar Forest Breeze</span>
                        {playingSound === 'forest' ? <Square size={14} /> : <Play size={14} />}
                      </div>
                      <p className="text-[10px] leading-relaxed">Synthesizes bandpass-filtered noise wind sweeps accompanied by periodic oscillator bird chirps.</p>
                    </div>
                  </div>

                  {playingSound && (
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between mt-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                        <Volume2 size={13} className="text-teal-400" /> Synthesizer Active: {playingSound.toUpperCase()}
                      </span>
                      
                      <div className="flex items-end gap-1.5 h-6">
                        <div className="w-1 h-full bg-teal-500 rounded-full visualizer-bar" style={{ animationDelay: '0.1s' }} />
                        <div className="w-1 h-full bg-teal-500 rounded-full visualizer-bar" style={{ animationDelay: '0.3s' }} />
                        <div className="w-1 h-full bg-teal-500 rounded-full visualizer-bar" style={{ animationDelay: '0.5s' }} />
                        <div className="w-1 h-full bg-teal-500 rounded-full visualizer-bar" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 9: SUSTAINABLE INTEL */}
              {activeTab === 'eco' && (
                <motion.div
                  key="eco"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">CARBON CONSERVATION MODULE</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Sustainable Travel Intelligence</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Review carbon footprint comparisons and locate sustainable eco-hotels carrying green leaf certifications.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-4 font-mono text-xs text-slate-350">
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Transit Carbon Footprint (CO2 kg)</span>
                      
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between">
                          <span>EV Highway Route</span>
                          <span className="text-emerald-400">12kg CO2</span>
                        </div>
                        <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '8%' }} />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between">
                          <span>Electric Train Route</span>
                          <span className="text-emerald-400">18kg CO2</span>
                        </div>
                        <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '12%' }} />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between">
                          <span>Aviation Route (Economy)</span>
                          <span className="text-rose-400">320kg CO2</span>
                        </div>
                        <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500" style={{ width: '85%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col justify-between text-xs leading-relaxed font-semibold">
                      <div className="flex flex-col gap-2">
                        <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 self-start">
                          <Leaf size={11} /> Eco Recommendation
                        </div>
                        <h4 className="font-bold text-white text-sm mt-1">Offsetting Your Journey</h4>
                        <p className="text-slate-400 mt-1">
                          Our OS defaults itineraries to EV connections where charging networks permit, reducing environmental footprint scores by 74%.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 10: MODULAR AI AGENT STATUS */}
              {activeTab === 'agents' && (
                <motion.div
                  key="agents"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">COORDINATED AGENT STACKS</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Modular AI Ecosystem</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Inspect calculations and response confidence ratings generated by specialized sub-agents.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[9px] text-slate-350">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">FLIGHT AI</span>
                        <span className="text-emerald-400 font-black">ACTIVE</span>
                      </div>
                      <span className="text-[8px] text-slate-500">Confidence: 99.4%</span>
                      <p className="text-slate-400 mt-1">Compiling fuel vectors & price indicators for Mumbai Stations.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">HOTEL AI</span>
                        <span className="text-emerald-400 font-black">ACTIVE</span>
                      </div>
                      <span className="text-[8px] text-slate-500">Confidence: 98.7%</span>
                      <p className="text-slate-400 mt-1">Filtering boutique eco-lodges matching travel twin profiles.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">WEATHER AI</span>
                        <span className="text-emerald-400 font-black">ACTIVE</span>
                      </div>
                      <span className="text-[8px] text-slate-500">Confidence: 96.9%</span>
                      <p className="text-slate-400 mt-1">Scanning rainfall coefficients over Kashmir border roads.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">FOOD AI</span>
                        <span className="text-emerald-400 font-black">ACTIVE</span>
                      </div>
                      <span className="text-[8px] text-slate-500">Confidence: 97.5%</span>
                      <p className="text-slate-400 mt-1">Mapping street food trails and vegetarian-friendly options.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">VISA AI</span>
                        <span className="text-emerald-400 font-black">STANDBY</span>
                      </div>
                      <span className="text-[8px] text-slate-500">Confidence: 100%</span>
                      <p className="text-slate-400 mt-1">Validating e-visa rules for global transit stations.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">BUDGET AI</span>
                        <span className="text-emerald-400 font-black">ACTIVE</span>
                      </div>
                      <span className="text-[8px] text-slate-500">Confidence: 98.1%</span>
                      <p className="text-slate-400 mt-1">Estimating real-time tolls and fuel rates for NH-48 road trip.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 11: SWIPABLE DISCOVERY FEED */}
              {activeTab === 'feed' && (
                <motion.div
                  key="feed"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 text-left flex flex-col gap-6 items-center"
                >
                  <div className="w-full">
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">HYPER-PERSONALIZED discovery</span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">Discovery Feed</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">
                      Swipable cards highlighting regional greetings, offbeat trails, and photographic hotspots.
                    </p>
                  </div>

                  <div className="w-full max-w-sm p-5 rounded-2xl bg-slate-900 border border-white/10 flex flex-col gap-4 text-xs font-semibold relative">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-teal-400 uppercase tracking-wider font-bold">Node {feedIndex + 1} / 3</span>
                      <span className="text-[8px] text-slate-500 font-mono">HOTSPOT</span>
                    </div>

                    <h4 className="font-display font-extrabold text-sm text-white">{discoveryFeed[feedIndex].title}</h4>
                    <p className="text-slate-355 leading-relaxed">{discoveryFeed[feedIndex].desc}</p>
                    
                    <div className="border-t border-white/5 pt-3 flex flex-col gap-2 font-mono text-[9px] text-slate-450">
                      <div>
                        <span className="text-slate-500 block text-[7px] uppercase font-black">Local greeting</span>
                        <span className="text-white">{discoveryFeed[feedIndex].greet}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[7px] uppercase font-black">Regional specialty food</span>
                        <span className="text-white">{discoveryFeed[feedIndex].food}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[7px] uppercase font-black">Photography recommendation</span>
                        <span className="text-white">{discoveryFeed[feedIndex].photo}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 border-t border-white/5 pt-3">
                      <button
                        onClick={() => setFeedIndex(prev => Math.max(0, prev - 1))}
                        disabled={feedIndex === 0}
                        className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-750 text-white rounded-lg disabled:opacity-50 cursor-pointer text-[10px]"
                      >
                        Previous Node
                      </button>
                      <button
                        onClick={() => setFeedIndex(prev => Math.min(2, prev + 1))}
                        disabled={feedIndex === 2}
                        className="flex-1 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg disabled:opacity-50 cursor-pointer text-[10px]"
                      >
                        Next Node
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Console Footer */}
            <div className="w-full bg-slate-950 p-2.5 border-t border-white/5 text-[8px] font-mono text-slate-500 tracking-wider flex justify-between items-center">
              <span>TRAVELVERSE SENTIENT ECOSYSTEM ATLAS-V2200-ACTIVE</span>
              <span>CONFIDENCE INDEX: 99.8% • DYNAMIC LAYOUT: LOADED</span>
            </div>

          </div>

        </div>

        {/* Global Tourism Trends Feed Ticker */}
        <div className="w-full overflow-hidden border-t border-white/10 pt-4 relative z-10 font-mono text-[9px] text-slate-400 flex items-center gap-4">
          <span className="text-rose-500 font-bold uppercase tracking-widest shrink-0 animate-pulse flex items-center gap-1">
            <AlertTriangle size={11} /> Global Tourism Hotspots:
          </span>
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            <span>Goa Beaches (Active Density)</span>
            <span className="text-white">•</span>
            <span>Ladakh Mountain Loop (High Altitude Alert)</span>
            <span className="text-white">•</span>
            <span>Varanasi Spiritual Ghats (Peak Density)</span>
            <span className="text-white">•</span>
            <span>Ziro Valley (Monsoon Warning)</span>
            <span className="text-white">•</span>
            <span>Tawang Peak (AMS Rest Advisory)</span>
            <span className="text-white">•</span>
            <span>Majuli River Ferry (Operational)</span>
          </div>
        </div>
      </section>
      )}

      {/* 🧘 TRAVEL MOOD SELECTION SECTION */}
      <section className="flex flex-col gap-10 text-left">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest font-mono">NEURAL SELECTION MATRIX</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-850 dark:text-white mt-0 tracking-wide">
            How do you want to feel?
          </h2>
          <p className="text-xs text-slate-400 font-semibold">
            Choose an emotion matrix below. Our AI Twin engine immediately highlights domestic and global destinations mapped to that vibe.
          </p>
        </div>

        {/* Mood select grid */}
        <div className="flex flex-wrap gap-2.5 mt-2">
          {moodsList.map((mood) => (
            <button
              key={mood.name}
              onClick={() => {
                setSelectedMood(mood.name);
                showToast(`Filtered destinations matching mood "${mood.name}"!`, 'success');
              }}
              className={`px-4 py-3 border rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                selectedMood === mood.name
                  ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.25)] scale-105'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-teal-500/30'
              }`}
            >
              <span className="text-sm">{mood.icon}</span>
              <span>{mood.name.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Filtered Destination Cards */}
        <div className={moodStyle.wrapperClass}>
          {moodStyle.motif}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredDestinations.slice(0, 6).map((dest) => (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <DestinationCard destination={dest} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 🗺️ HIDDEN INDIA DISCOVERY ENGINE */}
      <section className="flex flex-col gap-10 text-left">
        <div className="flex justify-between items-end border-b border-slate-200 dark:border-white/5 pb-4">
          <div>
            <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest font-mono">OFFBEAT SATELLITE TILES</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-850 dark:text-white mt-1.5 tracking-wide">
              Hidden India Explorer
            </h2>
            <p className="text-xs text-slate-400 font-semibold mt-1">
              Dodge standard tourist trap loops. Venture into these unexplored, high-value alternative coordinates.
            </p>
          </div>
          <Link
            to="/destinations?filter=offbeat"
            className="text-xs font-bold text-teal-400 hover:underline flex items-center gap-1 font-mono shrink-0"
          >
            ALL OFFBEAT TILES
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Hidden India Grid Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDestinations.filter(d => ['dest-ziro', 'dest-tawang', 'dest-spiti', 'dest-gokarna', 'dest-majuli'].includes(d.id)).map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 📊 BUDGET ESTIMATION WIDGET */}
      <section className="p-8 rounded-3xl bg-slate-950/40 backdrop-blur-md border border-cyan-500/20 text-white flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="flex-1 text-left relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold mb-4 border border-teal-500/20">
            <Sparkles size={12} />
            <span>AI Estimation Engine</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl mb-3 leading-tight">
            Estimate Your Dream Trip Instantly
          </h2>
          <p className="text-slate-450 text-xs sm:text-sm max-w-md leading-relaxed font-semibold">
            Drag the sliders to set your travel bounds. Our AI system will estimate accommodations, activities, and flight budgets, then generate your itinerary.
          </p>
        </div>

        <form onSubmit={handleQuickPlan} className="w-full lg:w-96 p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col gap-5 text-left relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-350">
              <span>Trip Budget Limit</span>
              <span className="text-teal-400 font-mono font-bold">₹{budgetVal.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="40000"
              max="400000"
              step="8000"
              value={budgetVal}
              onChange={(e) => setBudgetVal(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-350">
              <span>Duration (Days)</span>
              <span className="text-teal-400 font-mono font-bold">{durationVal} Days</span>
            </div>
            <input
              type="range"
              min="1"
              max="14"
              value={durationVal}
              onChange={(e) => setDurationVal(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Sparkles size={14} />
            Launch AI Planner
          </button>
        </form>
      </section>

      {/* Statistical Counters */}
      <section className="py-12 border-y border-slate-200 dark:border-white/5 grid grid-cols-2 md:grid-cols-5 gap-8 font-mono">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
            <CountUp to="120" suffix="k+" />
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Happy Users</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
            <CountUp to="250" suffix="+" />
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Destinations Available</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
            <CountUp to="45" suffix="" />
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Countries Mapped</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
            <CountUp to="850" suffix="k+" />
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Trips Planned</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white font-display">
            4.9 ★
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Overall Rating</span>
        </div>
      </section>

      {/* 🔮 TRAVELVERSE COCKPIT - INTEGRATED AI TRAVEL ECOSYSTEM */}
      <section className="flex flex-col gap-10 text-left">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest font-mono">TravelVerse Ecosystem Hub</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-850 dark:text-white mt-0 tracking-wide">
            Travelverse OS Core Engines
          </h2>
          <p className="text-xs text-slate-400 font-semibold">
            Launch, calibrate, or inspect any of the active travel modules in the unified year 2100 travel operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'AI Itinerary Planner',
              desc: 'Generates realistic daily travel schedules, adjusting for walking fatigue and weather.',
              link: '/planner',
              badge: 'READY',
              color: 'text-teal-400 border-teal-500/20 bg-teal-500/5',
              icon: Cpu
            },
            {
              title: 'Road Trip Planner',
              desc: 'Maps scenic route paths, EV charging networks, and highway rest areas.',
              link: '/road-trip-os',
              badge: 'CALIBRATED',
              color: 'text-sky-400 border-sky-500/20 bg-sky-500/5',
              icon: MapPin
            },
            {
              title: 'Religious Tourism',
              desc: 'Guides travelers through sacred pilgrim routes and local temple rules.',
              link: '/spiritual',
              badge: 'STEADY',
              color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
              icon: Landmark
            },
            {
              title: 'Budget Simulator',
              desc: 'Runs financial simulations to forecast maximum coordinate cost bounds.',
              link: '/utilities',
              badge: 'STABLE',
              color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
              icon: ShieldCheck
            },
            {
              title: 'Fuel Cost Calculator',
              desc: 'Calculates vehicle consumption and toll fees for cross-country tracks.',
              link: '/road-trip-os',
              badge: 'READY',
              color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
              icon: Activity
            },
            {
              title: 'Hotel Recommendations',
              desc: 'AI matching ranks accommodations suited to traveler DNA profiles.',
              link: '/hotels',
              badge: 'VETTED',
              color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
              icon: Lock
            },
            {
              title: 'Restaurant Explorer',
              desc: 'Identifies local culinary specialties, street food, and Jain choices.',
              link: '/utilities',
              badge: 'ONLINE',
              color: 'text-rose-400 border-rose-500/20 bg-rose-500/5',
              icon: Compass
            },
            {
              title: 'Interactive Maps',
              desc: 'Displays real-time day/night cycles and aircraft coordinates globally.',
              link: '/maps',
              badge: 'LIVE',
              color: 'text-pink-400 border-pink-500/20 bg-pink-500/5',
              icon: Globe
            },
            {
              title: 'Travel Calendar',
              desc: 'Blocks out scheduled trip days to avoid timing overlaps.',
              link: '/utilities',
              badge: 'ACTIVE',
              color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
              icon: Calendar
            },
            {
              title: 'Saved Trips Log',
              desc: 'Accesses saved custom itineraries and agent logs.',
              link: '/dashboard',
              badge: 'SYNCHRONIZED',
              color: 'text-orange-400 border-orange-500/20 bg-orange-500/5',
              icon: Layers
            },
            {
              title: 'Memory Vault',
              desc: 'Stores digital postcards, audio diaries, and coordinates stamps.',
              link: '/legacy',
              badge: 'RESTORED',
              color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
              icon: BookOpen
            },
            {
              title: 'Travel Statistics',
              desc: 'Inspects country completeness indices and carbon footprints.',
              link: '/dashboard',
              badge: 'ONLINE',
              color: 'text-teal-400 border-teal-500/20 bg-teal-500/5',
              icon: TrendingUp
            },
            {
              title: 'Personalized Recommendations',
              desc: 'Suggests coordinates matched to user travel history.',
              link: '/dream-trip',
              badge: 'READY',
              color: 'text-sky-400 border-sky-500/20 bg-sky-500/5',
              icon: Sparkles
            },
            {
              title: 'Travel Personas',
              desc: 'Calibrates travel preferences via DNA profile mapping.',
              link: '/personality-lab',
              badge: 'RESOLVED',
              color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
              icon: UserCheck
            },
            {
              title: 'Explorer Achievements',
              desc: 'Tracks unlocked location badges and ranking levels.',
              link: '/achievements',
              badge: 'ACTIVE',
              color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5',
              icon: Award
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.link}
                className="group p-6 rounded-3xl bg-slate-900/40 hover:bg-slate-900 border border-white/5 hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between text-left card-premium-hover shadow-lg"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 group-hover:text-white transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full border text-[8px] font-bold font-mono tracking-wider ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors mt-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium mt-1">{item.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-teal-400 uppercase font-bold tracking-wider">
                  <span>LAUNCH MODULE</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="flex flex-col gap-10 text-center max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 font-mono">Testimonials</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-850 dark:text-white mt-1 tracking-wide">
            What Our Explorers Say
          </h2>
        </div>

        <div className="relative min-h-[260px] sm:min-h-[220px] mt-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col justify-between items-center text-center card-premium-hover">
          <div className="flex flex-col items-center gap-4">
            <img
              src={testimonials[activeTestimonial].avatar}
              alt={testimonials[activeTestimonial].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-500 shadow-md"
            />
            
            {/* Star Ratings */}
            <div className="flex gap-0.5 text-amber-400 text-xs">
              {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-350 italic leading-relaxed max-w-xl font-semibold">
              "{testimonials[activeTestimonial].comment}"
            </p>
          </div>

          <div className="mt-4 flex flex-col items-center gap-1.5">
            <span className="px-2 py-0.5 text-[8px] font-bold font-mono uppercase bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full flex items-center gap-1 self-center">
              ✓ Verified Traveler Review
            </span>
            <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">
              {testimonials[activeTestimonial].name}
            </span>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-455 font-bold uppercase tracking-wider font-mono">
              <span>{testimonials[activeTestimonial].role}</span>
              <span>•</span>
              <span className="text-teal-650 dark:text-teal-400">
                Visited {testimonials[activeTestimonial].destination} {testimonials[activeTestimonial].country}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeTestimonial === index 
                  ? 'bg-teal-500 w-6' 
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
