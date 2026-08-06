import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Compass, ShieldCheck, HelpCircle, 
  ArrowRight, RefreshCw, Award, Heart, Sparkles, Eye 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const QUESTIONS = [
  {
    question: 'Select your preferred base shelter coordinates:',
    options: [
      { text: 'Heritage palace suite with a private royal butler', score: { luxury: 100, adventure: 15, photography: 70, history: 90, nature: 20 }, style: 'Couple' },
      { text: 'High-altitude geodesic weather dome canvas basecamp', score: { luxury: 10, adventure: 100, photography: 95, history: 20, nature: 100 }, style: 'Backpacking' },
      { text: 'Eco-homestay run by local village artisan family networks', score: { luxury: 40, adventure: 60, food: 80, history: 70, nature: 80 }, style: 'Family' },
      { text: 'Boutique oceanfront villa with private chef culinary access', score: { luxury: 90, adventure: 40, food: 100, photography: 80, nature: 60 }, style: 'Solo' }
    ]
  },
  {
    question: 'How do you configure your exploration pace and groups?',
    options: [
      { text: 'Solo seeker: complete freedom of travel vector and speed', score: { adventure: 90, photography: 95, nature: 80, history: 70 }, style: 'Solo' },
      { text: 'Family clan: comfortable speeds with kid-friendly coordinates', score: { luxury: 80, food: 85, history: 60, roadtrips: 70 }, style: 'Family' },
      { text: 'Travel twin couple: shared memories and scenic road trips', score: { roadtrips: 90, photography: 90, luxury: 75, food: 80 }, style: 'Couple' },
      { text: 'Backpacker hostel squad: social grids and raw budget options', score: { adventure: 85, food: 85, history: 60, roadtrips: 50 }, style: 'Backpacking' }
    ]
  },
  {
    question: 'What is your primary fuel source for exploration?',
    options: [
      { text: 'Gourmet fine dining tasting menus & regional wine pairings', score: { food: 100, luxury: 95, history: 60 }, style: 'Couple' },
      { text: 'Exploring secret street markets & back-alley spice markets', score: { food: 95, adventure: 80, photography: 90 }, style: 'Backpacking' },
      { text: 'A quick camp cookout by the riverside under starry skies', score: { food: 60, adventure: 90, nature: 100, photography: 80 }, style: 'Solo' },
      { text: 'Cozy cafes and organic farm-to-table culinary spots', score: { food: 85, luxury: 70, photography: 75, nature: 70 }, style: 'Family' }
    ]
  },
  {
    question: 'Choose your prime capture optic setup:',
    options: [
      { text: 'Professional mirrorless rig capturing sunset landscapes', score: { photography: 100, nature: 95, adventure: 80 }, style: 'Solo' },
      { text: 'Drone mapping of historic ruins & architectural spires', score: { photography: 95, history: 100, adventure: 70 }, style: 'Backpacking' },
      { text: 'Candid instant film polaroid shots of family moments', score: { photography: 80, history: 50, luxury: 60 }, style: 'Family' },
      { text: 'A quiet journal with sketchbooks & memory capsules', score: { photography: 55, history: 80, nature: 80 }, style: 'Couple' }
    ]
  },
  {
    question: 'What is your navigation blueprint configuration?',
    options: [
      { text: 'Self-driving a rugged 4x4 along winding mountain passes', score: { roadtrips: 100, adventure: 95, photography: 90, nature: 90 }, style: 'Solo' },
      { text: 'Leisurely private chauffeur car taking historic routes', score: { roadtrips: 70, luxury: 90, history: 90, photography: 70 }, style: 'Family' },
      { text: 'Local trains, regional buses, and hitchhiking options', score: { roadtrips: 40, adventure: 90, history: 70, nature: 80 }, style: 'Backpacking' },
      { text: 'Scenic campervan road trip with custom stops', score: { roadtrips: 95, adventure: 70, nature: 85, photography: 85 }, style: 'Couple' }
    ]
  }
];

// Interactive SVG Radar Chart Component
const RadarChart = ({ scores }) => {
  const cx = 130;
  const cy = 130;
  const r = 90;
  const axes = [
    { key: 'luxury', label: 'Luxury' },
    { key: 'adventure', label: 'Adventure' },
    { key: 'food', label: 'Food' },
    { key: 'roadtrips', label: 'Road Trips' },
    { key: 'photography', label: 'Lens' },
    { key: 'history', label: 'History' },
    { key: 'nature', label: 'Nature' }
  ];

  const getPoint = (index, value) => {
    const angle = (index * 2 * Math.PI) / axes.length - Math.PI / 2;
    const x = cx + r * (value / 100) * Math.cos(angle);
    const y = cy + r * (value / 100) * Math.sin(angle);
    return { x, y };
  };

  const webPolygons = [20, 40, 60, 80, 100].map(level => {
    return axes.map((_, idx) => {
      const pt = getPoint(idx, level);
      return `${pt.x},${pt.y}`;
    }).join(' ');
  });

  const scorePolygon = axes.map((axis, idx) => {
    const val = scores[axis.key] || 50;
    const pt = getPoint(idx, val);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  return (
    <div className="relative bg-slate-950/60 p-4 rounded-3xl border border-white/5 flex flex-col items-center justify-center shadow-xl">
      <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest font-black absolute top-3 left-4">GENOME_RADAR // TELEMETRY</span>
      <svg className="w-60 h-60 mt-4" viewBox="0 0 260 260">
        {webPolygons.map((points, idx) => (
          <polygon
            key={idx}
            points={points}
            fill="none"
            stroke="rgba(45, 212, 191, 0.08)"
            strokeWidth="0.8"
          />
        ))}

        {axes.map((_, idx) => {
          const pt = getPoint(idx, 100);
          return (
            <line
              key={idx}
              x1={cx}
              y1={cy}
              x2={pt.x}
              y2={pt.y}
              stroke="rgba(45, 212, 191, 0.12)"
              strokeWidth="0.8"
            />
          );
        })}

        <polygon
          points={scorePolygon}
          fill="rgba(45, 212, 191, 0.18)"
          stroke="#2dd4bf"
          strokeWidth="1.5"
          className="transition-all duration-700 ease-out"
        />

        {axes.map((axis, idx) => {
          const pt = getPoint(idx, 115);
          return (
            <text
              key={idx}
              x={pt.x}
              y={pt.y}
              fill="rgba(224, 242, 254, 0.65)"
              fontSize="7.5"
              fontFamily="monospace"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {axis.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

// Spinning Vertical DNA Helix Component
const DNAHelix = () => (
  <div className="relative w-full h-64 bg-slate-950/60 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden shadow-xl">
    <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
    <svg className="w-16 h-full" viewBox="0 0 100 240">
      <defs>
        <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {Array.from({ length: 11 }).map((_, i) => {
        const y = 20 + i * 20;
        const delay = i * 0.25;
        return (
          <g key={i}>
            <line
              x1={20}
              y1={y}
              x2={80}
              y2={y}
              stroke="rgba(45, 212, 191, 0.25)"
              strokeWidth="1.5"
            >
              <animate
                attributeName="x1"
                values={`${30 + Math.sin(delay) * 20};${70 - Math.sin(delay) * 20};${30 + Math.sin(delay) * 20}`}
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values={`${70 - Math.sin(delay) * 20};${30 + Math.sin(delay) * 20};${70 - Math.sin(delay) * 20}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
            <circle cx={50} cy={y} r={3} fill="#fbbf24" filter="url(#glow-amber)">
              <animate
                attributeName="cx"
                values={`${30 + Math.sin(delay) * 20};${70 - Math.sin(delay) * 20};${30 + Math.sin(delay) * 20}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={50} cy={y} r={3} fill="#2dd4bf" filter="url(#glow-teal)">
              <animate
                attributeName="cx"
                values={`${70 - Math.sin(delay) * 20};${30 + Math.sin(delay) * 20};${70 - Math.sin(delay) * 20}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
    </svg>
    <div className="absolute top-2.5 left-4 font-mono text-[7.5px] text-slate-500 uppercase tracking-widest font-black">
      GENOME // AMPLITUDE
    </div>
  </div>
);

export const PersonalityLab = () => {
  const { showToast, awardXp } = useApp();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ luxury: 50, adventure: 50, food: 50, roadtrips: 50, photography: 50, history: 50, nature: 50 });
  const [stylesCount, setStylesCount] = useState({ Solo: 0, Family: 0, Backpacking: 0, Couple: 0 });
  const [quizFinished, setQuizFinished] = useState(false);
  const [dnaGenome, setDnaGenome] = useState('');
  const [travelerStyle, setTravelerStyle] = useState('Solo');

  const handleSelectOption = (optScore, optStyle) => {
    // Accumulate scores
    setScores(prev => {
      const nextScores = { ...prev };
      Object.keys(optScore).forEach(k => {
        nextScores[k] = Math.min(100, Math.max(0, nextScores[k] + (optScore[k] - 50) / 2));
      });
      return nextScores;
    });

    // Accumulate styles
    setStylesCount(prev => {
      const next = { ...prev };
      next[optStyle] = (next[optStyle] || 0) + 1;
      return next;
    });

    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      calculateDnaProfile();
    }
  };

  const calculateDnaProfile = () => {
    setQuizFinished(true);
    showToast('AI Twin Genome: Calibrating DNA markers...', 'info');

    setTimeout(() => {
      // Determine highest travel style
      let highestStyle = 'Solo';
      let maxCount = 0;
      Object.keys(stylesCount).forEach(k => {
        if (stylesCount[k] > maxCount) {
          maxCount = stylesCount[k];
          highestStyle = k;
        }
      });
      setTravelerStyle(highestStyle);

      // Determine highest interest axis
      let highestInterest = 'nature';
      let maxVal = 0;
      Object.keys(scores).forEach(k => {
        if (scores[k] > maxVal) {
          maxVal = scores[k];
          highestInterest = k;
        }
      });

      let profile = 'Elite Sovereign Nomad';
      if (highestInterest === 'adventure') profile = 'Wilderness Trail Blazer';
      else if (highestInterest === 'luxury') profile = 'Zenith Heritage Elite';
      else if (highestInterest === 'food') profile = 'Gourmet Backalley Tracker';
      else if (highestInterest === 'roadtrips') profile = 'Vanguard Highway Pilot';
      else if (highestInterest === 'photography') profile = 'Cosmic Lens Explorer';
      else if (highestInterest === 'history') profile = 'Chronos Archive Sage';
      else if (highestInterest === 'nature') profile = 'Misty Forest Silent Hermit';

      setDnaGenome(profile);
      awardXp(500, `Genome Calibration: ${profile}`);
      showToast('Genomic Travel DNA calibrated!', 'success');
    }, 1000);
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setScores({ luxury: 50, adventure: 50, food: 50, roadtrips: 50, photography: 50, history: 50, nature: 50 });
    setStylesCount({ Solo: 0, Family: 0, Backpacking: 0, Couple: 0 });
    setQuizFinished(false);
    setDnaGenome('');
  };

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* HUD Header */}
      <div className="flex flex-col gap-2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent blur-xl pointer-events-none" />
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          QUANTUM GENOME CALIBRATOR // V.2100
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Travel DNA lab
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl mt-0">
          Deconstruct your subconscious travel preferences to map a personalized traveler genome report and unlock destination profiles.
        </p>
      </div>

      {/* Main engine screen */}
      <div className="w-full max-w-5xl mx-auto z-10">
        <AnimatePresence mode="wait">
          {!quizFinished ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 shadow-2xl flex flex-col gap-6 text-left max-w-2xl mx-auto"
            >
              <div className="flex justify-between items-center font-mono text-[9px] border-b border-slate-200/50 dark:border-white/5 pb-3">
                <span className="text-slate-450 uppercase">GENE MARKER RECORDING</span>
                <span className="text-teal-450 font-bold uppercase">
                  Sequence {currentIdx + 1} / {QUESTIONS.length}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed mt-2">
                {QUESTIONS[currentIdx].question}
              </h3>

              <div className="flex flex-col gap-3.5 mt-2">
                {QUESTIONS[currentIdx].options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(opt.score, opt.style)}
                    className="w-full p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/5 hover:border-teal-500/35 rounded-2xl text-xs sm:text-sm font-semibold transition-all hover:bg-slate-100 dark:hover:bg-slate-950 text-left text-slate-700 dark:text-slate-250 cursor-pointer"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>

              <div className="w-full h-1 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden mt-4">
                <div 
                  className="h-full bg-teal-500 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
            >
              
              {/* Left Column: DNA helix & profile summary */}
              <div className="md:col-span-5 p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 flex flex-col gap-5 text-left shadow-2xl">
                
                <div className="flex justify-between items-start border-b border-slate-200/50 dark:border-white/5 pb-3">
                  <div>
                    <span className="text-[8px] font-mono text-teal-400 font-bold uppercase tracking-widest">Twin Calibration Complete</span>
                    <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 leading-tight">{dnaGenome.toUpperCase()}</h3>
                    <span className="text-[9px] text-slate-500 font-mono mt-1 block">Travel Style Profile: {travelerStyle}</span>
                  </div>
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw size={13} />
                  </button>
                </div>

                <DNAHelix />

                {/* Achievement Badge details */}
                <div className="p-3.5 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-start gap-3 font-mono text-[9.5px] text-teal-300 font-bold">
                  <Award size={15} className="text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span>Rank Unlocked: Travel DNA Pioneer</span>
                    <span className="block text-[8px] text-slate-500 mt-1 font-semibold">+500 Travel XP Added to Ledger</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Radar Chart & recommendations */}
              <div className="md:col-span-7 flex flex-col gap-6">
                
                {/* Radar Grid & index stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <RadarChart scores={scores} />

                  <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 flex flex-col justify-between text-left">
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest font-black">Genomic Indexes</span>
                    <div className="flex flex-col gap-3 font-mono text-[10px] mt-3">
                      {[
                        { label: 'LUXURY INDEX', val: scores.luxury },
                        { label: 'ADVENTURE VECTOR', val: scores.adventure },
                        { label: 'CULINARY VELOCITY', val: scores.food },
                        { label: 'PHOTOGRAPHY INDEX', val: scores.photography }
                      ].map(bar => (
                        <div key={bar.label}>
                          <div className="flex justify-between text-slate-400 text-[8.5px] mb-1.5">
                            <span>{bar.label}</span>
                            <span className="text-white font-bold">{Math.round(bar.val)}%</span>
                          </div>
                          <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                            <div className="h-full bg-teal-500 rounded-full" style={{ width: `${bar.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Recommendations Panel */}
                <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 text-left flex flex-col gap-3">
                  <span className="text-[9px] font-mono text-teal-400 font-bold uppercase tracking-widest">Recommended Travel Sectors</span>
                  <div className="flex flex-col gap-2 mt-1">
                    {scores.adventure > 70 ? (
                      <div className="p-3 bg-slate-950/60 border border-white/5 rounded-2xl flex items-center justify-between font-mono text-[10px]">
                        <div>
                          <span className="text-white font-bold block">Leh Ladakh Glacier Trek</span>
                          <span className="text-[8.5px] text-slate-500">Perfect match for Wilderness adventure style</span>
                        </div>
                        <Link to="/destination/dest-leh" className="p-2 bg-teal-500 text-slate-950 font-bold rounded-xl flex items-center justify-center"><Eye size={12} /></Link>
                      </div>
                    ) : (
                      <div className="p-3 bg-slate-950/60 border border-white/5 rounded-2xl flex items-center justify-between font-mono text-[10px]">
                        <div>
                          <span className="text-white font-bold block">Taj Mahal Palace, Jaipur</span>
                          <span className="text-[8.5px] text-slate-500">Matches high comfort and history interest score</span>
                        </div>
                        <Link to="/destination/dest-jaipur" className="p-2 bg-teal-500 text-slate-950 font-bold rounded-xl flex items-center justify-center"><Eye size={12} /></Link>
                      </div>
                    )}
                    
                    {scores.food > 70 && (
                      <div className="p-3 bg-slate-950/60 border border-white/5 rounded-2xl flex items-center justify-between font-mono text-[10px]">
                        <div>
                          <span className="text-white font-bold block">Delhi Culinary Street food tour</span>
                          <span className="text-[8.5px] text-slate-500">Matches high food velocity score</span>
                        </div>
                        <Link to="/destination/dest-delhi" className="p-2 bg-teal-500 text-slate-950 font-bold rounded-xl flex items-center justify-center"><Eye size={12} /></Link>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};
