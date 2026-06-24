import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Clock, Award, ShieldAlert, Download, Heart, Compass, Plus, Trash2, Calendar, FileText, Share2, Printer } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LegacyCapsule = () => {
  const { user, userLevel, awardXp, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('poster'); // poster, capsule, pass
  
  // Poster states
  const [selectedDest, setSelectedDest] = useState('Kyoto');
  const [tagline, setTagline] = useState('NEON STREETS & ANCIENT SPIRITS');
  const [artStyle, setArtStyle] = useState('Cyber Neon 2100'); // Cyber Neon 2100, Retro 1980s, Minimalist Vector
  const canvasRef = useRef(null);

  // Time Capsule states
  const [capsules, setCapsules] = useState(() => {
    const saved = localStorage.getItem('tv_time_capsules');
    return saved ? JSON.parse(saved) : [
      {
        id: 'cap-1',
        title: 'Voyage to the Northern Lights',
        destination: 'Tromso, Norway',
        unlockDate: '2026-12-25T00:00:00.000Z',
        message: 'Dear Self, I hope you finally saw the green aurora waves in Norway. Remember the chilly nights and hot cocoa!',
        sealed: true
      }
    ];
  });
  const [capTitle, setCapTitle] = useState('');
  const [capDest, setCapDest] = useState('');
  const [capDate, setCapDate] = useState('');
  const [capMsg, setCapMsg] = useState('');

  // Boarding Pass states
  const [ticketDest, setTicketDest] = useState('Kyoto');
  const [cabinClass, setCabinClass] = useState('Hologram Suite'); // First Class Quantum, Hologram Suite, Cyber Deck Coach

  // Save capsules to local storage
  useEffect(() => {
    localStorage.setItem('tv_time_capsules', JSON.stringify(capsules));
  }, [capsules]);

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

  // Redraw poster on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || activeTab !== 'poster') return;
    const ctx = canvas.getContext('2d');
    
    // Set high DPI scale
    canvas.width = 800;
    canvas.height = 1100;
    
    ctx.clearRect(0, 0, 800, 1100);

    if (artStyle === 'Cyber Neon 2100') {
      // Background gradient
      const grad = ctx.createRadialGradient(400, 550, 50, 400, 550, 600);
      grad.addColorStop(0, '#111026');
      grad.addColorStop(0.5, '#070510');
      grad.addColorStop(1, '#020105');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 1100);

      // Neon grid lines
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 800; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 1100);
        ctx.stroke();
      }
      for (let j = 0; j < 1100; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(800, j);
        ctx.stroke();
      }

      // Neon glowing circles (cyber orb)
      const glowGrad = ctx.createRadialGradient(400, 420, 0, 400, 420, 240);
      glowGrad.addColorStop(0, 'rgba(99, 102, 241, 0.45)');
      glowGrad.addColorStop(0.5, 'rgba(20, 184, 166, 0.15)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(400, 420, 240, 0, Math.PI * 2);
      ctx.fill();

      // Cyber lines & rings
      ctx.strokeStyle = '#14b8a6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(400, 420, 200, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#6366f1';
      ctx.setLineDash([10, 15]);
      ctx.beginPath();
      ctx.arc(400, 420, 220, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Typography
      ctx.fillStyle = '#ffffff';
      ctx.font = 'black 90px "Arial Black", Impact, sans-serif';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#14b8a6';
      ctx.shadowBlur = 20;
      ctx.fillText(selectedDest.toUpperCase(), 400, 780);

      ctx.fillStyle = '#22d3ee';
      ctx.font = 'bold 22px "Courier New", monospace';
      ctx.shadowBlur = 8;
      ctx.fillText(tagline.toUpperCase(), 400, 830);

      // Watermark
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.font = 'bold 12px "Courier New", monospace';
      ctx.shadowBlur = 0;
      ctx.fillText('TRAVELVERSE DIGITAL CORE // OS 2200 // PROJECT LEGACY', 400, 1040);
      
      // Border frame
      ctx.strokeStyle = '#14b8a6';
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, 740, 1040);

    } else if (artStyle === 'Retro 1980s') {
      // Synthwave gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, 1100);
      grad.addColorStop(0, '#020005');
      grad.addColorStop(0.4, '#1b092f');
      grad.addColorStop(0.7, '#8e1b6d');
      grad.addColorStop(1, '#ff4785');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 1100);

      // Sliced Retro Sun
      const sunGrad = ctx.createLinearGradient(400, 200, 400, 600);
      sunGrad.addColorStop(0, '#ffdf00');
      sunGrad.addColorStop(1, '#ff2a85');
      ctx.fillStyle = sunGrad;
      
      for (let i = 0; i < 20; i++) {
        const yStart = 200 + i * 20;
        const height = 14 + (i * 0.3);
        // Crop arc inside sun bounds
        ctx.save();
        ctx.beginPath();
        ctx.arc(400, 400, 200, 0, Math.PI * 2);
        ctx.clip();
        ctx.fillRect(200, yStart, 400, height);
        ctx.restore();
      }

      // Grid landscape lines converging to center horizon (Y=600)
      ctx.strokeStyle = '#2adeff';
      ctx.lineWidth = 1.5;
      for (let i = -400; i <= 1200; i += 80) {
        ctx.beginPath();
        ctx.moveTo(i, 1100);
        ctx.lineTo(400, 580);
        ctx.stroke();
      }
      // Horizontal grid lines
      for (let j = 580; j <= 1100; j += (1100 - j) * 0.15 + 4) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(800, j);
        ctx.stroke();
      }

      // Title Text
      ctx.fillStyle = '#2adeff';
      ctx.font = 'italic italic bold 100px "Arial Black", Impact, sans-serif';
      ctx.textAlign = 'center';
      
      // Neon glow stroke
      ctx.strokeStyle = '#ff2a85';
      ctx.lineWidth = 12;
      ctx.strokeText(selectedDest.toUpperCase(), 400, 820);
      
      ctx.fillText(selectedDest.toUpperCase(), 400, 820);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'italic bold 20px sans-serif';
      ctx.fillText(tagline.toUpperCase(), 400, 875);

      // Watermark
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.font = 'bold 12px "Courier New", monospace';
      ctx.fillText('RETRO WAVE SYSTEM VECTORS // SOUVENIR PROTOCOL', 400, 1030);

      // Border frame
      ctx.strokeStyle = '#ff2a85';
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, 740, 1040);

    } else {
      // Minimalist Vector
      ctx.fillStyle = '#faf8f5';
      ctx.fillRect(0, 0, 800, 1100);

      // Terracotta circle sun
      ctx.fillStyle = '#e07a5f';
      ctx.beginPath();
      ctx.arc(400, 400, 180, 0, Math.PI * 2);
      ctx.fill();

      // Sage green sand dune curve
      ctx.fillStyle = '#81b29a';
      ctx.beginPath();
      ctx.moveTo(0, 750);
      ctx.bezierCurveTo(200, 680, 500, 850, 800, 720);
      ctx.lineTo(800, 1100);
      ctx.lineTo(0, 1100);
      ctx.closePath();
      ctx.fill();

      // Deep navy wave bottom
      ctx.fillStyle = '#f4f1de';
      ctx.beginPath();
      ctx.moveTo(0, 880);
      ctx.bezierCurveTo(300, 920, 600, 820, 800, 870);
      ctx.lineTo(800, 1100);
      ctx.lineTo(0, 1100);
      ctx.closePath();
      ctx.fill();

      // Minimalist Frame Border
      ctx.strokeStyle = '#3d405b';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 40, 720, 1020);

      // Text block
      ctx.fillStyle = '#3d405b';
      ctx.font = 'bold 64px "Georgia", serif';
      ctx.textAlign = 'center';
      ctx.fillText(selectedDest, 400, 960);

      ctx.font = 'italic 16px "Georgia", serif';
      ctx.fillText(tagline, 400, 1000);
    }
  }, [selectedDest, tagline, artStyle, activeTab]);

  // Download Canvas Souvenir
  const handleDownloadPoster = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `travelverse-poster-${selectedDest.toLowerCase()}.png`;
    link.href = url;
    link.click();
    awardXp(300, `Generated & exported poster for ${selectedDest}`);
    showToast('Poster exported successfully! (+300 XP)', 'success');
  };

  // Add Time Capsule Form Submit
  const handleAddCapsule = (e) => {
    e.preventDefault();
    if (!capTitle || !capDest || !capDate || !capMsg) {
      showToast('Please fill out all capsule specifications.', 'error');
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
    awardXp(200, `Sealed future time capsule for ${capDest}`);
    showToast('Digital capsule sealed & encrypted! (+200 XP)', 'success');
    
    // Clear Form
    setCapTitle('');
    setCapDest('');
    setCapDate('');
    setCapMsg('');
  };

  // Delete capsule
  const handleDeleteCapsule = (id) => {
    setCapsules(capsules.filter(c => c.id !== id));
    showToast('Capsule data record deleted.');
  };

  // Unseal time capsule helper
  const handleUnsealCapsule = (cap) => {
    const isReady = new Date(cap.unlockDate) <= new Date();
    if (!isReady) {
      showToast('Quantum unlock coordinates not yet reached!', 'error');
      return;
    }

    setCapsules(capsules.map(c => c.id === cap.id ? { ...c, sealed: false } : c));
    awardXp(150, `Unsealed time capsule: ${cap.title}`);
    showToast(`Time capsule "${cap.title}" unsealed!`, 'success');
  };

  // Capsule Countdown component
  const CountdownText = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        const diff = new Date(targetDate) - new Date();
        if (diff <= 0) {
          setTimeLeft('UNSEAL READY');
          clearInterval(interval);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${mins}m ${secs}s`);
      }, 1000);

      return () => clearInterval(interval);
    }, [targetDate]);

    return <span>{timeLeft}</span>;
  };

  // Print Pass
  const handlePrintPass = () => {
    window.print();
    awardXp(100, 'Printed boarding pass');
    showToast('Boarding pass sent to print queue.', 'success');
  };

  return (
    <div className="py-4 text-left flex flex-col gap-8 w-full">
      {/* Header Title */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
            Travel Legacy & Souvenir Lab
          </h1>
          <p className="text-sm text-slate-500 max-w-xl">
            Preserve your journeys across generations. Generate retro-futuristic travel posters, write messages to your future self in locked time capsules, and print digital boarding passes.
          </p>
        </div>
      </div>

      {/* Tabs Menu Navigation */}
      <div className="flex border-b border-slate-200/20 dark:border-teal-500/10 overflow-x-auto gap-2 py-1 scrollbar-thin relative z-10 w-full">
        {[
          { id: 'poster', label: '🎨 AI Travel Poster Lab' },
          { id: 'capsule', label: '🔒 Digital Time Capsule' },
          { id: 'pass', label: '🎫 Boarding Passes & Ranks' }
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

      {/* Main Tab Panels */}
      <div className="w-full">
        
        {/* TAB 1: AI Travel Poster Lab */}
        {activeTab === 'poster' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full text-xs">
            
            {/* Left form controls (5 cols) */}
            <div className="lg:col-span-5 p-5 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm flex flex-col gap-4 text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-teal-400 uppercase tracking-widest block">POSTER CONFIG MODULE</span>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Poster Vector Specifications</h4>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">CHOOSE TARGET DESTINATION</span>
                <select 
                  value={selectedDest} onChange={(e) => setSelectedDest(e.target.value)}
                  className="px-2.5 py-2 rounded-xl bg-slate-950 border border-white/5 text-white text-[11.5px]"
                >
                  <option value="Kyoto">Kyoto, Japan</option>
                  <option value="Agra">Agra, India</option>
                  <option value="Goa">Goa Beaches</option>
                  <option value="Kashmir">Kashmir Valley</option>
                  <option value="Ladakh">Ladakh Highlands</option>
                  <option value="Tromso">Tromso Lights</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 font-bold">CUSTOM TAGLINE QUOTE</span>
                <input 
                  type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. FIND YOUR INNER EQUILIBRIUM"
                  className="px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-white"
                  maxLength={40}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400 block mb-0.5">ART FILTER ENGINE</span>
                <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-white/5 font-mono text-[9.5px] font-bold text-slate-500">
                  {['Cyber Neon 2100', 'Retro 1980s', 'Minimalist Vector'].map(style => (
                    <button
                      key={style}
                      onClick={() => setArtStyle(style)}
                      className={`px-1 py-2 rounded-lg cursor-pointer transition-colors ${
                        artStyle === style ? 'bg-slate-800 text-white font-bold' : 'hover:bg-slate-900'
                      }`}
                    >
                      {style.split(' ')[0].toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleDownloadPoster}
                className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-black font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-teal-500/10 mt-4 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download size={13} /> DOWNLOAD VECTOR POSTER (+300 XP)
              </button>
            </div>

            {/* Right Interactive Preview (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950 border border-teal-500/10 shadow-2xl relative min-h-[400px]">
              <div className="absolute inset-0 grid-cyber opacity-15 pointer-events-none" />
              
              <div className="w-full max-w-sm aspect-[8/11] bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative z-10 scale-[0.95] sm:scale-100 transition-transform">
                <canvas ref={canvasRef} className="w-full h-full object-contain" />
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Digital Time Capsule */}
        {activeTab === 'capsule' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full text-xs">
            
            {/* Left form inputs (5 cols) */}
            <form onSubmit={handleAddCapsule} className="lg:col-span-5 p-5 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm flex flex-col gap-4 text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-teal-400 uppercase tracking-widest block">SEAL FUTURE DREAMS</span>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Encrypt New Travel Capsule</h4>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">CAPSULE TITLE</span>
                <input 
                  type="text" value={capTitle} onChange={(e) => setCapTitle(e.target.value)}
                  placeholder="e.g. My Next Decadal Voyage Goals"
                  className="px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-white" required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400">DESTINATION TARGET</span>
                  <input 
                    type="text" value={capDest} onChange={(e) => setCapDest(e.target.value)}
                    placeholder="e.g. Tromso, Norway"
                    className="px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-white" required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400">UNLOCK TIMESTAMP</span>
                  <input 
                    type="date" value={capDate} onChange={(e) => setCapDate(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-white font-mono" required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">MESSAGE TO FUTURE SELF</span>
                <textarea 
                  value={capMsg} onChange={(e) => setCapMsg(e.target.value)}
                  placeholder="Describe your current hopes, expected achievements, or logs for when you open this..."
                  className="px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-white h-24 resize-none" required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg mt-4 cursor-pointer"
              >
                SEAL TIME CAPSULE PROTOCOL (+200 XP)
              </button>
            </form>

            {/* Right Sealed capsules list (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm flex flex-col gap-4">
                <div>
                  <span className="text-[9px] font-mono font-bold text-teal-400 uppercase tracking-widest block">ENCRYPTED VAULT RECORDS</span>
                  <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Sealed Souvenirs Vault</h4>
                </div>

                {capsules.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl bg-slate-950/20 border border-dashed border-white/5 text-slate-500">
                    No time capsules sealed. Encrypt your first capsule on the left!
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin">
                    {capsules.map(cap => {
                      const isPast = new Date(cap.unlockDate) <= new Date();
                      return (
                        <div 
                          key={cap.id}
                          className={`p-4 rounded-2xl border flex flex-col gap-3 relative overflow-hidden transition-all ${
                            cap.sealed 
                              ? 'bg-slate-950/40 border-indigo-500/10 shadow' 
                              : 'bg-emerald-950/20 border-emerald-500/20'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-[9px] font-mono font-bold text-indigo-400 uppercase block">CAPSULE LOG</span>
                              <h5 className="font-display font-extrabold text-sm text-white mt-0.5 mb-1">{cap.title}</h5>
                              <span className="text-[9.5px] text-slate-400 font-semibold">{cap.destination}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 font-mono text-[9px] font-bold rounded uppercase ${
                                isPast ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                              }`}>
                                {cap.sealed ? 'Sealed' : 'Opened'}
                              </span>
                              <button onClick={() => handleDeleteCapsule(cap.id)} className="p-1 rounded bg-slate-950 text-rose-500 hover:bg-slate-900 transition-colors">
                                <Trash2 size={11} />
                              </button>
                            </div>
                          </div>

                          {/* Message rendering (blurred if sealed) */}
                          <div className="p-3 bg-slate-950/80 rounded-xl border border-white/5 relative">
                            {cap.sealed ? (
                              <div className="filter blur-sm select-none text-[10px] text-slate-600 leading-normal pointer-events-none">
                                {cap.message}
                              </div>
                            ) : (
                              <p className="text-[10px] text-slate-300 leading-relaxed font-semibold m-0">{cap.message}</p>
                            )}
                            
                            {cap.sealed && (
                              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
                                <span className="font-mono text-[9.5px] font-bold text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-lg border border-white/5">
                                  <Clock size={11} className="text-indigo-400" />
                                  <CountdownText targetDate={cap.unlockDate} />
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Bottom Action */}
                          {cap.sealed && (
                            <button
                              onClick={() => handleUnsealCapsule(cap)}
                              className={`py-2 rounded-xl font-bold font-mono text-[10px] transition-all cursor-pointer ${
                                isPast 
                                  ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black' 
                                  : 'bg-slate-950 border border-white/5 text-slate-500 cursor-not-allowed'
                              }`}
                              disabled={!isPast}
                            >
                              {isPast ? 'UNSEAL TIME CAPSULE RECORD' : 'COUNTDOWN PROTOCOL ACTIVE'}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: Boarding Passes & Certificates */}
        {activeTab === 'pass' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full text-xs">
            
            {/* Left controllers (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-teal-500/10 shadow-sm flex flex-col gap-4 text-left">
              <div>
                <span className="text-[9px] font-mono font-bold text-teal-400 uppercase tracking-widest block">PASS DECK ROUTER</span>
                <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-0.5">Custom Boarding Pass</h4>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 font-bold">FLIGHT DESTINATION</span>
                <select 
                  value={ticketDest} onChange={(e) => setTicketDest(e.target.value)}
                  className="px-2.5 py-2 rounded-xl bg-slate-950 border border-white/5 text-white text-[11.5px]"
                >
                  <option value="Kyoto Core">Kyoto, Japan</option>
                  <option value="Agra Hub">Agra, India</option>
                  <option value="Goa Coast">Goa Beaches</option>
                  <option value="Kashmir Valley">Kashmir, India</option>
                  <option value="Ladakh Altitude">Ladakh, India</option>
                  <option value="Tromso Aurora">Tromso, Norway</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 font-bold">CABIN SUITE CLASS</span>
                <select 
                  value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}
                  className="px-2.5 py-2 rounded-xl bg-slate-950 border border-white/5 text-white text-[11.5px]"
                >
                  <option value="First Class Quantum">First Class Quantum</option>
                  <option value="Hologram Suite">Hologram Suite</option>
                  <option value="Cyber Deck Coach">Cyber Deck Coach</option>
                </select>
              </div>

              <button
                onClick={handlePrintPass}
                className="w-full py-3 bg-teal-505 hover:bg-teal-600 border border-teal-500/20 text-teal-600 dark:text-teal-400 font-black font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg mt-4 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer size={13} /> PRINT BOARDING PASS PROTOCOL
              </button>
            </div>

            {/* Right Passes Preview (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8 w-full text-left">
              
              {/* Boarding Pass Ticket */}
              <div className="bg-slate-950 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-w-2xl mx-auto w-full md:h-52">
                <div className="absolute inset-0 grid-cyber opacity-15 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/10 to-transparent pointer-events-none" />
                
                {/* Left block (Main ticket details) */}
                <div className="flex-1 p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-dashed border-white/10 relative">
                  {/* Outer edge cuts for ticket effect */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border border-white/5 hidden md:block" />
                  
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[8.5px] font-mono font-bold text-teal-400 uppercase tracking-widest">TRAVELVERSE OS BOARDING PASS</span>
                      <h4 className="font-display font-black text-sm text-white mt-0.5">{cabinClass.toUpperCase()} // GATE 44</h4>
                    </div>
                    <span className="text-xl">✈️</span>
                  </div>

                  {/* Body Info */}
                  <div className="grid grid-cols-3 gap-4 font-mono text-[9px] text-slate-400 mt-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-550 font-bold">TRAVELER NAME</span>
                      <span className="text-white text-xs font-bold font-sans">{user?.name || 'Alex Mercer'}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-550 font-bold">DEPARTURE HUB</span>
                      <span className="text-white text-xs font-bold">DELHI (DEL)</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-550 font-bold">LANDING TARGET</span>
                      <span className="text-white text-xs font-bold">{ticketDest.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Footer stats */}
                  <div className="flex justify-between font-mono text-[8.5px] text-slate-500 mt-5 border-t border-white/5 pt-2">
                    <span>SEAT: 22A // SECURITY OVERRIDE VERIFIED</span>
                    <span className="text-teal-400 font-bold">DATE: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Right stub (Tear-off portion) */}
                <div className="w-full md:w-48 p-5 flex flex-col justify-between bg-slate-900/60 relative">
                  {/* Outer edge cuts for ticket effect */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border border-white/5 hidden md:block" />
                  
                  <div className="flex justify-between items-start font-mono text-[8.5px] text-slate-400">
                    <span>FLIGHT STUB</span>
                    <span className="text-teal-400 font-bold">TV-2200</span>
                  </div>

                  <div className="flex flex-col gap-1 mt-4">
                    <span className="text-[8px] font-mono text-slate-555 font-bold">CLASS CABIN STATUS</span>
                    <span className="text-white font-mono text-xs font-bold">{cabinClass}</span>
                    <span className="text-[10px] text-slate-400 font-semibold">{user?.name || 'Alex Mercer'}</span>
                  </div>

                  {/* Digital Barcode */}
                  <div className="mt-4 flex flex-col gap-1 items-center">
                    <div className="w-full h-8 bg-slate-950 flex items-center justify-around px-2 border border-white/5 overflow-hidden">
                      {Array.from({ length: 24 }).map((_, bIdx) => (
                        <div 
                          key={bIdx} 
                          className="h-full bg-slate-100" 
                          style={{ width: `${bIdx % 3 === 0 ? 1 : (bIdx % 4 === 0 ? 3 : 2)}px` }} 
                        />
                      ))}
                    </div>
                    <span className="text-[7.5px] font-mono text-slate-500">QR-OS-2200-VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Ranks & Explorer Certificate */}
              <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden max-w-2xl mx-auto w-full text-center">
                <div className="absolute inset-0 grid-cyber opacity-15 pointer-events-none" />
                <div className="absolute -left-12 -top-12 w-24 h-24 rounded-full bg-indigo-500/5 blur-xl" />
                <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-teal-500/5 blur-xl" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-400 to-indigo-500 flex items-center justify-center text-white text-3xl shadow-lg border border-teal-500/10">
                    🏆
                  </div>

                  <div>
                    <span className="text-[8.5px] font-mono font-bold text-teal-400 uppercase tracking-widest block mb-1">TRAVELVERSE OS CERTIFICATE</span>
                    <h3 className="font-display font-black text-xl text-white m-0">Explorer Rank Credentials</h3>
                    <span className="text-[10px] text-slate-455 font-bold font-mono block mt-1">VERIFICATION PROTOCOL STATUS</span>
                  </div>

                  <p className="text-[11px] text-slate-400 max-w-sm leading-relaxed font-semibold mt-1">
                    This certifies that <strong className="text-white font-bold">{user?.name || 'Alex Mercer'}</strong> has successfully scaled Level {userLevel} of the travel operating system, holding the prestigious rank of <strong className="text-teal-400 font-bold uppercase">{currentRank}</strong>.
                  </p>

                  <div className="flex gap-4 font-mono text-[9px] text-slate-500 border-t border-white/5 pt-4 w-full justify-around mt-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-550 font-bold">EXP LEVEL REACHED</span>
                      <span className="text-white font-bold">LEVEL {userLevel}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-550 font-bold">SECURE SIGNATURE ID</span>
                      <span className="text-indigo-400 font-bold">SIG-TV-{userLevel * 4390}-OK</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-550 font-bold">ISSUANCE DATE</span>
                      <span className="text-white font-bold">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
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
