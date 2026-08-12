import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Clock, Heart, Compass, Plus, Trash2, Calendar, 
  Share2, Eye, MapPin, Film, FolderHeart, Activity, Award, ShieldAlert 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { logger } from '../utils/logger';

// High-fidelity database of memories
const INITIAL_MEMORIES = [
  {
    id: 'mem-1',
    title: 'Sunrise at Varanasi Ghats',
    date: '2026-05-12',
    location: 'Varanasi, India',
    coords: { x: 140, y: 120 },
    category: 'Cultural',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=600&q=80',
    journal: 'The sun emerged as a golden orb casting warm light across the Ganga Aarti. The smell of incense and sound of chants made me feel a deep, calm connection to the flow of time itself.',
    album: 'Cultural Trails'
  },
  {
    id: 'mem-2',
    title: 'Himalayan Base Camp Trek',
    date: '2026-03-24',
    location: 'Kedarnath, India',
    coords: { x: 120, y: 90 },
    category: 'Adventure',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    journal: 'Trekking at 11,750 ft was physically exhausting, but seeing the temple spires emerge from the morning fog made the struggle instantly fade. A moment of absolute clarity.',
    album: 'Mountain Peaks'
  },
  {
    id: 'mem-3',
    title: 'Exploring Gion district',
    date: '2025-11-18',
    location: 'Kyoto, Japan',
    coords: { x: 230, y: 110 },
    category: 'Urban',
    mediaType: 'video',
    mediaUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
    journal: 'Rainy night in Gion. The neon reflections on wet cobblestones created a stunning blend of past and future. I spent hours photographing the wooden arches.',
    album: 'Urban Grids'
  },
  {
    id: 'mem-4',
    title: 'Glacial Aurora over Tromso',
    date: '2025-01-05',
    location: 'Tromso, Norway',
    coords: { x: 90, y: 50 },
    category: 'Nature',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
    journal: 'The aurora waves danced in green and purple spirals across the Arctic sky. Standing on the frozen fjord, I felt incredibly small yet deeply connected to the cosmos.',
    album: 'Mountain Peaks'
  }
];

export const LegacyCapsule = () => {
  const { user, showToast, awardXp } = useApp();
  const [activeTab, setActiveTab] = useState('library'); // library, albums, map, capsule
  const [selectedYear, setSelectedYear] = useState('All'); // All, 2026, 2025
  const [activeMemory, setActiveMemory] = useState(null); // Active memory for lightbox preview
  
  // Custom states
  const [memories, setMemories] = useState(() => {
    try {
      const saved = localStorage.getItem('tv_travel_memories');
      return saved ? JSON.parse(saved) : INITIAL_MEMORIES;
    } catch (e) {
      logger.warn("Failed to parse tv_travel_memories from localStorage, using fallback.", e);
      return INITIAL_MEMORIES;
    }
  });

  const [capsules, setCapsules] = useState(() => {
    try {
      const saved = localStorage.getItem('tv_time_capsules');
      return saved ? JSON.parse(saved) : [
        {
          id: 'cap-1',
          title: 'Arctic Solar Waves',
          destination: 'Tromso, Norway',
          unlockDate: '2026-12-25T00:00:00.000Z',
          message: 'Dear Self, remember the green aurora spirals floating over the fjord. Keep seeking clean mountain valleys.',
          sealed: true
        }
      ];
    } catch (e) {
      logger.warn("Failed to parse tv_time_capsules from localStorage, using fallback.", e);
      return [
        {
          id: 'cap-1',
          title: 'Arctic Solar Waves',
          destination: 'Tromso, Norway',
          unlockDate: '2026-12-25T00:00:00.000Z',
          message: 'Dear Self, remember the green aurora spirals floating over the fjord. Keep seeking clean mountain valleys.',
          sealed: true
        }
      ];
    }
  });

  // State for creating new memories
  const [newTitle, setNewTitle] = useState('');
  const [newLoc, setNewLoc] = useState('');
  const [newJournal, setNewJournal] = useState('');
  const [newImg, setNewImg] = useState('');
  const [newAlbum, setNewAlbum] = useState('Mountain Peaks');

  // Capsule input states
  const [capTitle, setCapTitle] = useState('');
  const [capDest, setCapDest] = useState('');
  const [capDate, setCapDate] = useState('');
  const [capMsg, setCapMsg] = useState('');

  useEffect(() => {
    localStorage.setItem('tv_travel_memories', JSON.stringify(memories));
  }, [memories]);

  useEffect(() => {
    localStorage.setItem('tv_time_capsules', JSON.stringify(capsules));
  }, [capsules]);

  const handleAddMemory = (e) => {
    e.preventDefault();
    if (!newTitle || !newLoc) {
      showToast('Please specify a title and location for the memory.', 'error');
      return;
    }

    const defaultImg = newImg || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80';
    const newEntry = {
      id: `mem-${Date.now()}`,
      title: newTitle,
      date: new Date().toISOString().split('T')[0],
      location: newLoc,
      coords: { x: 100 + Math.random() * 150, y: 80 + Math.random() * 80 },
      category: 'Explore',
      mediaType: 'image',
      mediaUrl: defaultImg,
      journal: newJournal || 'A snapshot of a premium journey preserved in my Travel OS memories archive.',
      album: newAlbum
    };

    setMemories([newEntry, ...memories]);
    awardXp(200, `Preserved Memory: ${newTitle}`);
    showToast(`Archived memory of ${newTitle}!`, 'success');

    // Reset inputs
    setNewTitle('');
    setNewLoc('');
    setNewJournal('');
    setNewImg('');
  };

  const handleDeleteMemory = (id, title) => {
    setMemories(prev => prev.filter(m => m.id !== id));
    showToast(`Removed memory of ${title}.`, 'info');
  };

  const handleAddCapsule = (e) => {
    e.preventDefault();
    if (!capTitle || !capDest || !capDate || !capMsg) {
      showToast('Please configure all fields to seal the time capsule.', 'error');
      return;
    }

    const newCap = {
      id: `cap-${Date.now()}`,
      title: capTitle,
      destination: capDest,
      unlockDate: new Date(capDate).toISOString(),
      message: capMsg,
      sealed: true
    };

    setCapsules([newCap, ...capsules]);
    awardXp(300, `Sealed Time Capsule for ${capDest}`);
    showToast(`Sealed time capsule for ${capDest}!`, 'success');

    setCapTitle('');
    setCapDest('');
    setCapDate('');
    setCapMsg('');
  };

  // Filter memories by year
  const filteredMemories = memories.filter(m => {
    if (selectedYear === 'All') return true;
    return m.date.startsWith(selectedYear);
  });

  // Derived stats
  const totalCountries = new Set(memories.map(m => m.location.split(', ').pop())).size;
  const albumsList = ['Mountain Peaks', 'Cultural Trails', 'Urban Grids'];

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4 relative">
      
      {/* Styles for interactive card fanning */}
      <style>{`
        .photo-stack-container:hover .stack-card-1 {
          transform: rotate(-7deg) translate(-14px, -8px) scale(0.98);
        }
        .photo-stack-container:hover .stack-card-2 {
          transform: rotate(7deg) translate(14px, -8px) scale(0.98);
        }
        .photo-stack-container:hover .stack-card-main {
          transform: translateY(-10px) scale(1.02);
        }
      `}</style>

      {/* Header Panel */}
      <div className="flex flex-col gap-2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent blur-xl pointer-events-none" />
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          LEGACY LEDGER SYSTEM // CLOUD ARCHIVE
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Travel Memories
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl mt-0">
          An emotional timeline of your journeys. View photo stacks, review AI-synthesized diaries, collect stamps, and seal future time capsules.
        </p>
      </div>

      {/* Overview Statistics (Frosted Glass telemetry cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Visited Countries', val: totalCountries, desc: 'Logged global borders' },
          { label: 'Days Traveled', val: memories.length * 4, desc: 'Accumulated travel logs' },
          { label: 'Saved Memories', val: memories.length, desc: 'Photos & video journals' },
          { label: 'Sealed Capsules', val: capsules.filter(c => c.sealed).length, desc: 'Future locks active' }
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-3xl glass-neo border border-slate-200/50 dark:border-white/5 flex flex-col gap-1 text-left">
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider font-black">{stat.label}</span>
            <span className="text-2xl font-black text-slate-900 dark:text-teal-400 font-mono">{stat.val}</span>
            <span className="text-[9px] text-slate-400 font-mono mt-0.5">{stat.desc}</span>
          </div>
        ))}
      </div>

      {/* Tab Selectors (Apple Photos design) */}
      <div className="flex flex-wrap gap-2 pb-1 border-b border-slate-200 dark:border-white/5">
        {[
          { id: 'library', label: 'Library', icon: <Camera size={14} /> },
          { id: 'albums', label: 'Albums Stack', icon: <FolderHeart size={14} /> },
          { id: 'map', label: 'Memories Map', icon: <Compass size={14} /> },
          { id: 'capsule', label: 'Time Capsules', icon: <Clock size={14} /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'text-slate-650 dark:text-slate-400 hover:bg-slate-950/40'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="w-full text-xs">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: LIBRARY */}
          {activeTab === 'library' && (
            <motion.div
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              {/* Floating Library Header controls */}
              <div className="flex justify-between items-center bg-slate-950/40 border border-white/5 p-4 rounded-2xl">
                <div className="flex gap-2">
                  {['All', '2026', '2025'].map(y => (
                    <button
                      key={y}
                      onClick={() => setSelectedYear(y)}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-mono font-bold uppercase transition-colors cursor-pointer ${
                        selectedYear === y ? 'bg-teal-500 text-slate-950' : 'text-slate-450 hover:text-white'
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{filteredMemories.length} snaps loaded</span>
              </div>

              {/* Photos grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredMemories.map(mem => (
                  <div
                    key={mem.id}
                    onClick={() => setActiveMemory(mem)}
                    className="group bg-slate-950/50 border border-white/5 rounded-3xl overflow-hidden hover:border-teal-500/20 transition-all cursor-pointer flex flex-col justify-between shadow-lg"
                  >
                    <div className="relative aspect-[11/10] overflow-hidden w-full bg-slate-900">
                      <img
                        src={mem.mediaUrl}
                        alt={mem.title}
                        className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      {mem.mediaType === 'video' && (
                        <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-950/60 border border-white/10 text-teal-400">
                          <Film size={11} />
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col gap-1.5 text-left">
                      <span className="text-[8.5px] font-mono text-teal-400 uppercase font-black">{mem.date}</span>
                      <h4 className="font-display font-extrabold text-xs text-white leading-tight mt-0">{mem.title}</h4>
                      <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono mt-0.5">
                        <MapPin size={10} className="text-teal-400 shrink-0" />
                        <span>{mem.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form to preserve a new memory */}
              <div className="bg-slate-950/40 border border-white/5 p-6 rounded-3xl text-left mt-6 flex flex-col gap-4">
                <span className="text-[9px] font-mono text-teal-400 font-bold uppercase tracking-widest">Preserve Voyage memory</span>
                <form onSubmit={handleAddMemory} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-slate-400 uppercase">Memory Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Sunrise over Taj"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="p-2.5 rounded-xl bg-[#0c0a09] border border-white/5 text-xs text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-slate-400 uppercase">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Agra, India"
                      value={newLoc}
                      onChange={(e) => setNewLoc(e.target.value)}
                      className="p-2.5 rounded-xl bg-[#0c0a09] border border-white/5 text-xs text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-[9px] text-slate-400 uppercase">Journal Reflection</label>
                    <textarea
                      placeholder="Describe the emotions and ambient details..."
                      rows="2"
                      value={newJournal}
                      onChange={(e) => setNewJournal(e.target.value)}
                      className="p-2.5 rounded-xl bg-[#0c0a09] border border-white/5 text-xs text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-slate-400 uppercase">Image URL (Optional)</label>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={newImg}
                      onChange={(e) => setNewImg(e.target.value)}
                      className="p-2.5 rounded-xl bg-[#0c0a09] border border-white/5 text-xs text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-slate-400 uppercase">Choose Album Stack</label>
                    <select
                      value={newAlbum}
                      onChange={(e) => setNewAlbum(e.target.value)}
                      className="p-2.5 rounded-xl bg-[#0c0a09] border border-white/5 text-xs text-slate-300 cursor-pointer"
                    >
                      {albumsList.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="md:col-span-2 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all hover:scale-101 cursor-pointer"
                  >
                    PRESERVE MEMORY
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ALBUMS STACK */}
          {activeTab === 'albums' && (
            <motion.div
              key="albums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {albumsList.map(albName => {
                const nested = memories.filter(m => m.album === albName);
                if (nested.length === 0) return null;
                return (
                  <div key={albName} className="flex flex-col items-center gap-4">
                    
                    {/* Apple stacked container */}
                    <div className="relative w-48 h-60 photo-stack-container cursor-pointer">
                      
                      {/* Stack card 1 (Backwards card rotated left) */}
                      {nested[2] && (
                        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg transform rotate-[-4deg] scale-95 transition-transform duration-500 origin-bottom stack-card-1">
                          <img src={nested[2].mediaUrl} alt="" className="w-full h-full object-cover opacity-30" />
                        </div>
                      )}
                      
                      {/* Stack card 2 (Middle card rotated right) */}
                      {nested[1] && (
                        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg transform rotate-[4deg] scale-98 transition-transform duration-500 origin-bottom stack-card-2">
                          <img src={nested[1].mediaUrl} alt="" className="w-full h-full object-cover opacity-60" />
                        </div>
                      )}

                      {/* Stack card main (Front card) */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/15 shadow-2xl z-10 transition-transform duration-500 origin-bottom stack-card-main">
                        <img src={nested[0].mediaUrl} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                        <div className="absolute bottom-3.5 left-4 right-4 z-20 text-left font-mono">
                          <span className="text-[8px] text-teal-400 font-bold uppercase">{nested.length} assets</span>
                          <h4 className="text-xs font-bold text-white leading-tight mt-0.5 truncate">{albName}</h4>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* TAB 3: MEMORIES MAP & PASSPORT */}
          {activeTab === 'map' && (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Map panel */}
              <div className="lg:col-span-8 bg-slate-950/40 border border-white/5 p-5 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden min-h-[460px]">
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest font-black absolute top-3 left-4">Memory Coordinates map</span>
                
                {/* SVG Earth styled map mesh */}
                <svg viewBox="0 0 400 240" className="w-full max-w-lg h-auto text-teal-800/20 fill-current">
                  <rect width="400" height="240" fill="none" />
                  {/* Grid lines */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1={0} y1={i * 40} x2={400} y2={i * 40} stroke="rgba(45, 212, 191, 0.05)" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line key={i} x1={i * 40} y1={0} x2={i * 40} y2={240} stroke="rgba(45, 212, 191, 0.05)" strokeWidth="0.5" />
                  ))}

                  {/* Memory Marker dots */}
                  {memories.map((m) => (
                    <g key={m.id} className="cursor-pointer" onClick={() => setActiveMemory(m)}>
                      <circle cx={m.coords.x} cy={m.coords.y} r="5" fill="#2dd4bf" stroke="#000" strokeWidth="1" />
                      <circle cx={m.coords.x} cy={m.coords.y} r="10" stroke="#2dd4bf" strokeWidth="0.8" fill="none" className="animate-ping opacity-30" />
                      <text x={m.coords.x + 8} y={m.coords.y + 3} fill="rgba(255,255,255,0.7)" fontSize="6" fontFamily="monospace">{m.title.slice(0, 12)}...</text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Passport Stamps */}
              <div className="lg:col-span-4 bg-slate-950/40 border border-white/5 p-5 rounded-3xl text-left flex flex-col gap-4">
                <span className="text-[9px] font-mono text-teal-400 font-bold uppercase tracking-widest">Passport Stamp ledger</span>
                <div className="grid grid-cols-2 gap-3.5 overflow-y-auto max-h-[360px] pr-1">
                  {[
                    { country: 'India', code: 'IN', stamp: 'Varanasi-Kashi', date: '2026-05' },
                    { country: 'India', code: 'IN', stamp: 'Kedarnath-Himalaya', date: '2026-03' },
                    { country: 'Japan', code: 'JP', stamp: 'Kyoto-Gion', date: '2025-11' },
                    { country: 'Norway', code: 'NO', stamp: 'Tromso-Arctic', date: '2025-01' }
                  ].map((st, i) => (
                    <div key={i} className="p-3 bg-slate-950 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 hover:border-teal-500/20 transition-all">
                      <span className="text-xs font-mono text-slate-500 uppercase">{st.country}</span>
                      <div className="w-11 h-11 rounded-full border border-teal-500/20 flex items-center justify-center font-mono text-[9px] text-teal-400 font-bold flex-col bg-teal-500/5 leading-none">
                        <span>{st.code}</span>
                        <span className="text-[5.5px] uppercase mt-0.5">{st.date}</span>
                      </div>
                      <span className="text-[7.5px] font-mono text-slate-400 uppercase tracking-tight truncate max-w-[80px]">{st.stamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: TIME CAPSULES */}
          {activeTab === 'capsule' && (
            <motion.div
              key="capsules"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Sealing form */}
              <div className="lg:col-span-4 bg-slate-950/40 border border-white/5 p-5 rounded-3xl text-left flex flex-col gap-4 shadow-xl">
                <span className="text-[9px] font-mono text-teal-400 font-bold uppercase tracking-widest">Seal Time Capsule</span>
                <form onSubmit={handleAddCapsule} className="flex flex-col gap-3 font-mono text-[10px]">
                  <div className="flex flex-col gap-1">
                    <label className="text-slate-500 uppercase text-[8px]">Capsule Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Dream Norwegian Aurora Voyage"
                      value={capTitle}
                      onChange={(e) => setCapTitle(e.target.value)}
                      className="p-2 bg-[#0c0a09] border border-white/5 rounded-xl text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-slate-500 uppercase text-[8px]">Destination Node</label>
                    <input
                      type="text"
                      placeholder="e.g. Oslo, Norway"
                      value={capDest}
                      onChange={(e) => setCapDest(e.target.value)}
                      className="p-2 bg-[#0c0a09] border border-white/5 rounded-xl text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-slate-500 uppercase text-[8px]">Sealing Lock Date</label>
                    <input
                      type="date"
                      value={capDate}
                      onChange={(e) => setCapDate(e.target.value)}
                      className="p-2 bg-[#0c0a09] border border-white/5 rounded-xl text-slate-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-slate-500 uppercase text-[8px]">Devotional Message</label>
                    <textarea
                      placeholder="A message to your future self..."
                      rows="3"
                      value={capMsg}
                      onChange={(e) => setCapMsg(e.target.value)}
                      className="p-2 bg-[#0c0a09] border border-white/5 rounded-xl text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl uppercase tracking-wider transition-all mt-2 cursor-pointer"
                  >
                    SEAL CAPSULE
                  </button>
                </form>
              </div>

              {/* Active capsules */}
              <div className="lg:col-span-8 bg-slate-950/40 border border-white/5 p-6 rounded-3xl flex flex-col gap-4 text-left">
                <span className="text-[9px] font-mono text-teal-400 font-bold uppercase tracking-widest">Active Sealed Capsules</span>
                <div className="flex flex-col gap-3 overflow-y-auto max-h-[380px] pr-1">
                  {capsules.map(cap => {
                    const isLocked = new Date(cap.unlockDate) > new Date();
                    return (
                      <div key={cap.id} className="p-4 bg-slate-950 border border-white/5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-teal-500/10 transition-all font-mono">
                        <div>
                          <span className="text-[8px] text-teal-400 font-bold uppercase block">{cap.destination}</span>
                          <h4 className="text-xs font-bold text-white mt-0.5">{cap.title}</h4>
                          <p className="text-[9.5px] text-slate-400 mt-2 leading-relaxed max-w-md">
                            {isLocked ? '🔒 MESSAGE LOCKED UNTIL RELEASE WINDOW' : cap.message}
                          </p>
                        </div>
                        <div className="text-right shrink-0 flex flex-col gap-1">
                          <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[8px] font-bold uppercase">
                            {isLocked ? 'SEALED LOCK' : 'UNLOCKED'}
                          </span>
                          <span className="text-[8.5px] text-slate-500 block mt-1">
                            Unlock: {new Date(cap.unlockDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Lightbox photo preview modal (Apple Photos style overlay) */}
      <AnimatePresence>
        {activeMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMemory(null)}
            className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 relative flex flex-col md:flex-row gap-5 cursor-default text-left"
            >
              {/* Media pane */}
              <div className="flex-1 rounded-2xl overflow-hidden bg-slate-950 border border-white/5 max-h-[300px] md:max-h-full">
                <img src={activeMemory.mediaUrl} alt="" className="w-full h-full object-cover" />
              </div>
              
              {/* Journal details panel */}
              <div className="flex-1 flex flex-col justify-between gap-4 font-mono">
                <div>
                  <div className="flex justify-between items-start border-b border-white/5 pb-2">
                    <div>
                      <span className="text-[8px] text-teal-400 font-bold uppercase">{activeMemory.date}</span>
                      <h3 className="text-base font-display font-black text-white mt-0.5 leading-tight">{activeMemory.title}</h3>
                      <span className="text-[8.5px] text-slate-500 block mt-1">ALBUM: {activeMemory.album}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteMemory(activeMemory.id, activeMemory.title)}
                      className="p-1.5 bg-red-500/10 border border-red-500/25 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <div className="mt-3.5">
                    <span className="text-[8px] text-teal-400 font-bold uppercase block mb-1">AI Journal reflection</span>
                    <p className="text-[10px] text-slate-300 leading-relaxed m-0 bg-slate-950 p-3 rounded-xl border border-white/5">
                      {activeMemory.journal}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-auto text-[9.5px]">
                  <span className="text-slate-550 uppercase">TRAVELVERSE LEDGER SYNCED</span>
                  <button onClick={() => setActiveMemory(null)} className="px-4 py-1.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-lg uppercase cursor-pointer">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
