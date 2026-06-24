import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Activity, Compass, ShieldCheck, HelpCircle, 
  ArrowRight, RefreshCw, Award, Heart, Sparkles 
} from 'lucide-react';

const QUESTIONS = [
  {
    question: 'Select your preferred destination altitude profile:',
    options: [
      { text: 'Snowy high-altitude peaks (15,000+ ft)', score: { adventure: 90, budget: 60, pace: 40 } },
      { text: 'Coastal tropical sea level shores', score: { adventure: 50, budget: 50, pace: 80 } },
      { text: 'Green riverine valleys & dense forests', score: { adventure: 70, budget: 55, pace: 60 } },
      { text: 'Historic palace cities & heritage plains', score: { adventure: 40, budget: 40, pace: 70 } }
    ]
  },
  {
    question: 'How do you structure your daily meal plan?',
    options: [
      { text: 'Explore local street vendor alleys & tea shops', score: { budget: 90, adventure: 80, comfort: 30 } },
      { text: 'Book fine-dining reservations & historic cafes', score: { budget: 30, adventure: 40, comfort: 95 } },
      { text: 'Pre-packaged hiking meals & energy bars', score: { budget: 70, adventure: 95, comfort: 20 } },
      { text: 'Resort dining & classic multi-course menus', score: { budget: 40, adventure: 30, comfort: 85 } }
    ]
  },
  {
    question: 'What is your tolerance level for walking exertion?',
    options: [
      { text: 'Extreme hiking: 15-20km mountain trails', score: { pace: 20, adventure: 98, comfort: 10 } },
      { text: 'Moderate walking: 5-8km urban pathways', score: { pace: 50, adventure: 60, comfort: 50 } },
      { text: 'Leisurely strolls only, preferring private cabs', score: { pace: 90, adventure: 30, comfort: 90 } },
      { text: 'Zero exertion, relaxed floating boat cruises', score: { pace: 95, adventure: 20, comfort: 95 } }
    ]
  },
  {
    question: 'Choose your ideal lodging setup:',
    options: [
      { text: 'Heritage palace suites with royal concierge', score: { budget: 20, comfort: 98, adventure: 30 } },
      { text: 'High-altitude canvas base camp tents', score: { budget: 75, comfort: 20, adventure: 95 } },
      { text: 'Eco-homestays run by local family networks', score: { budget: 85, comfort: 60, adventure: 70 } },
      { text: 'Digital nomad studio capsule cabins', score: { budget: 70, comfort: 65, adventure: 60 } }
    ]
  },
  {
    question: 'How do you manage changes or delays?',
    options: [
      { text: 'Re-align vectors immediately: I love backups', score: { adventure: 80, comfort: 60, pace: 50 } },
      { text: 'Relax: go with the flow, no matter what', score: { adventure: 90, comfort: 40, pace: 90 } },
      { text: 'Fret: prefer strict, timed milestones', score: { adventure: 30, comfort: 90, pace: 30 } },
      { text: 'Contact concierge avatar to resolve conflict', score: { adventure: 45, comfort: 95, pace: 60 } }
    ]
  }
];

export const PersonalityLab = () => {
  const { showToast, awardXp } = useApp();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ adventure: 50, budget: 50, pace: 50, comfort: 50 });
  const [quizFinished, setQuizFinished] = useState(false);
  const [dnaGenome, setDnaGenome] = useState('');

  const handleSelectOption = (scoreModifiers) => {
    setScores(prev => {
      const nextScores = { ...prev };
      Object.keys(scoreModifiers).forEach(k => {
        nextScores[k] = Math.min(100, Math.max(0, nextScores[k] + (scoreModifiers[k] - 50) / 2));
      });
      return nextScores;
    });

    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      calculateDnaProfile();
    }
  };

  const calculateDnaProfile = () => {
    setQuizFinished(true);
    showToast('AI Synthesis: Formatting traveler genome...', 'info');

    setTimeout(() => {
      let profile = 'Trans-Himalayan Nomad';
      if (scores.adventure > 75 && scores.comfort < 40) {
        profile = 'Summit Explorer Nomad (High Altitude/Low Comfort)';
      } else if (scores.comfort > 75 && scores.budget < 45) {
        profile = 'Zenith Heritage Luxury Explorer';
      } else if (scores.pace > 75) {
        profile = 'Misty Forest Silent Sage';
      } else if (scores.budget > 75) {
        profile = 'Offbeat Backcountry Wanderer';
      }
      setDnaGenome(profile);
      awardXp(500, `Genome Calibration: ${profile}`);
      showToast('Genomic Travel profile calibrated!', 'success');
    }, 1000);
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setScores({ adventure: 50, budget: 50, pace: 50, comfort: 50 });
    setQuizFinished(false);
    setDnaGenome('');
  };

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          QUANTUM GENOME CALIBRATOR
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Travel DNA Personality Lab
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl">
          Analyze your travel curiosity genome to generate customized traveler profiles and sync preferences with global flight planners.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-2xl mx-auto w-full">
        {!quizFinished ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-2xl flex flex-col gap-6 text-left">
            {/* HUD progress */}
            <div className="flex justify-between items-center font-mono text-[9px] border-b border-slate-200 dark:border-white/5 pb-3.5">
              <span>GENE CALIBRATING</span>
              <span className="text-teal-400 font-bold">
                Question {currentIdx + 1} / {QUESTIONS.length}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-850 dark:text-white leading-relaxed mt-2">
              {QUESTIONS[currentIdx].question}
            </h3>

            {/* Option buttons */}
            <div className="flex flex-col gap-3 mt-2">
              {QUESTIONS[currentIdx].options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 hover:border-teal-500/30 rounded-2xl text-xs sm:text-sm font-semibold transition-all hover:bg-slate-100 dark:hover:bg-slate-900/60 cursor-pointer text-left text-slate-700 dark:text-slate-200"
                >
                  {opt.text}
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden mt-4">
              <div 
                className="h-full bg-teal-500 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col gap-6 text-left animate-in fade-in slide-in-from-bottom-4">
            
            {/* Result Header */}
            <div className="flex justify-between items-start gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
              <div>
                <span className="text-[9.5px] font-bold text-teal-400 uppercase tracking-widest font-mono flex items-center gap-1">
                  <Sparkles size={12} className="text-teal-400" /> Calibration Completed
                </span>
                <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white mt-1">
                  {dnaGenome}
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-white/5"
              >
                <RefreshCw size={14} />
              </button>
            </div>

            <p className="text-xs text-slate-450 leading-relaxed font-semibold">
              Based on your answers, our AI master twin engine has calibrated your traveler genome index. These settings have been injected directly into your global search routing algorithms.
            </p>

            {/* Scores breakdown */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-slate-400 mt-2">
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
                <span className="text-[8px] text-slate-500 uppercase font-black">ADVENTURE INDEX</span>
                <span className="text-slate-800 dark:text-white font-bold">{Math.round(scores.adventure)}%</span>
              </div>
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
                <span className="text-[8px] text-slate-500 uppercase font-black">COMFORT INDEX</span>
                <span className="text-slate-800 dark:text-white font-bold">{Math.round(scores.comfort)}%</span>
              </div>
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
                <span className="text-[8px] text-slate-500 uppercase font-black">BUDGET VELOCITY</span>
                <span className="text-slate-800 dark:text-white font-bold">{Math.round(scores.budget)}%</span>
              </div>
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
                <span className="text-[8px] text-slate-500 uppercase font-black">PACE INDEX</span>
                <span className="text-slate-800 dark:text-white font-bold">{Math.round(scores.pace)}%</span>
              </div>
            </div>

            {/* Achievement badge */}
            <div className="flex items-center gap-3 p-3 bg-teal-500/10 border border-teal-500/20 rounded-2xl font-mono text-[10px] text-teal-300 font-bold mt-2">
              <Award size={16} className="text-teal-400" />
              <div className="flex-1">
                <span>Unique badge Unlocked: Travel DNA Pioneer</span>
                <span className="block text-[8px] text-slate-500 font-medium font-semibold mt-0.5">+500 Travel XP Added</span>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
