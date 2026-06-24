import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Award, Shield, Zap, Sparkles, MapPin, Compass, 
  HelpCircle, CheckCircle2, ChevronRight, Activity 
} from 'lucide-react';

const STATS_CARDS = [
  { label: 'States visited', value: '7 / 28', percent: 25 },
  { label: 'Cities explored', value: '18 / 140', percent: 12 },
  { label: 'UNESCO sites visited', value: '3 / 40', percent: 7 },
  { label: 'Carbon Offsetted', value: '1,450 kg CO2', percent: 85 }
];

const LEADERBOARD = [
  { rank: 1, name: 'Aditya Sharma', points: '14,250 XP', level: 12, avatar: '🎒' },
  { rank: 2, name: 'Sarah Jenkins', points: '11,400 XP', level: 9, avatar: '🏄' },
  { rank: 3, name: 'David Chen', points: '9,820 XP', level: 8, avatar: '🧗' },
  { rank: 4, name: 'You (Alex Mercer)', points: '3,450 XP', level: 4, avatar: '🚀', isUser: true },
  { rank: 5, name: 'Elena Rostova', points: '2,980 XP', level: 3, avatar: '🧘' }
];

export const Achievements = () => {
  const { achievements, userXp, userLevel, awardXp, showToast } = useApp();
  const [selectedBadge, setSelectedBadge] = useState(achievements[0]);

  const handleClaimReward = (id) => {
    showToast('Achievement rewards claimed successfully! +200 XP', 'success');
    awardXp(200, 'Claimed achievement badge milestones');
  };

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          MISSION COMMAND STATS
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Explorer Achievements & Badges
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl">
          Track your global travel metrics, unlock high-value passport badges, claim travel XP rewards, and compare ranks on the planetary leaderboard.
        </p>
      </div>

      {/* XP Level cockpit */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-white/10 text-white grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20 z-0" />
        
        {/* Level indicator */}
        <div className="flex items-center gap-4 relative z-10 text-left">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-sky-500 animate-orb-morph flex items-center justify-center text-slate-950 font-display font-black text-2xl shadow-lg shadow-teal-500/20">
            {userLevel}
          </div>
          <div>
            <span className="text-[8px] text-slate-500 font-black uppercase font-mono">Explorer rank</span>
            <h3 className="font-display font-extrabold text-lg text-white">Trans-Himalayan Rider</h3>
            <span className="text-[10px] text-slate-400 font-mono">Level {userLevel} Navigator</span>
          </div>
        </div>

        {/* XP progress */}
        <div className="flex flex-col gap-2 relative z-10 text-left">
          <div className="flex justify-between font-mono text-[9px] text-slate-400 font-bold uppercase">
            <span>XP Progress</span>
            <span>{userXp} / {userLevel * 1000} XP</span>
          </div>
          <div className="w-full h-2 bg-slate-900 border border-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: `${(userXp / (userLevel * 1000)) * 100}%` }}
            />
          </div>
        </div>

        {/* Global Stats */}
        <div className="flex gap-4 relative z-10 text-left font-mono text-[10px]">
          <div>
            <span className="text-slate-650 block text-[8px] font-black uppercase">Unlocked Badges</span>
            <span className="text-teal-400 font-bold">{achievements.filter(a => a.unlocked).length} / {achievements.length}</span>
          </div>
          <div>
            <span className="text-slate-650 block text-[8px] font-black uppercase">Global Rank</span>
            <span className="text-teal-400 font-bold">#4 / 45k</span>
          </div>
        </div>
      </div>

      {/* Grid: Badges & stats split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Stats cards & Badges list */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Stats Cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS_CARDS.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-md text-left flex flex-col gap-1.5 justify-between"
              >
                <span className="text-[8.5px] text-slate-450 uppercase font-mono font-bold">
                  {stat.label}
                </span>
                <span className="text-lg font-black text-slate-800 dark:text-white font-display">
                  {stat.value}
                </span>
                <div className="w-full h-1 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-teal-500" style={{ width: `${stat.percent}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Badges Grid list */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl text-left flex flex-col gap-4">
            <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="text-teal-400" size={18} /> Mission Badges Catalogue
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {achievements.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setSelectedBadge(a)}
                  className={`p-4 rounded-2xl border text-left flex flex-col gap-3 transition-all cursor-pointer ${
                    selectedBadge.id === a.id
                      ? 'bg-slate-900 border-teal-400 text-white'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-white/5 text-slate-800 dark:text-slate-350 hover:border-teal-500/20'
                  }`}
                >
                  <div className="text-2xl">{a.icon}</div>
                  <div>
                    <h4 className="font-display font-bold text-xs truncate">{a.title}</h4>
                    <span className={`text-[8px] font-bold uppercase mt-1 block ${a.unlocked ? 'text-teal-400' : 'text-slate-500'}`}>
                      {a.unlocked ? 'Unlocked' : 'Locked'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Leaderboard & Active Badge inspector */}
        <div className="lg:col-span-4 flex flex-col gap-6 items-stretch">
          
          {/* Active Badge Inspector */}
          {selectedBadge && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl text-left flex flex-col gap-4">
              <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest font-mono">
                Badge Inspection Matrix
              </span>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 flex items-center justify-center text-3xl">
                  {selectedBadge.icon}
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                    {selectedBadge.title}
                  </h4>
                  <span className={`text-[9px] font-mono font-bold uppercase ${selectedBadge.unlocked ? 'text-teal-400' : 'text-slate-500'}`}>
                    {selectedBadge.unlocked ? 'Mission Complete' : 'Active Mission'}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                {selectedBadge.description}
              </p>

              {selectedBadge.unlocked ? (
                <button
                  onClick={() => handleClaimReward(selectedBadge.id)}
                  className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-mono font-bold rounded-xl text-xs shadow-md transition-colors cursor-pointer"
                >
                  CLAIM MILESTONE REWARD
                </button>
              ) : (
                <div className="p-3 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-2xl font-mono text-[9px] text-slate-500 text-center font-bold">
                  🔒 SAVE RELEVANT TRIP TRIPS TO UNLOCK BADGE
                </div>
              )}
            </div>
          )}

          {/* Leaderboard Panel */}
          <div className="p-6 rounded-3xl bg-slate-900/60 dark:bg-slate-950/80 border border-slate-800 text-white flex flex-col gap-4 text-left">
            <h4 className="font-display font-black text-sm text-teal-400 uppercase tracking-widest font-mono flex items-center gap-1.5 border-b border-white/5 pb-2">
              <Activity size={15} /> Planetary Leaderboard
            </h4>
            <div className="flex flex-col gap-2 font-mono text-[10px]">
              {LEADERBOARD.map((user, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center p-2.5 rounded-xl border ${
                    user.isUser 
                      ? 'bg-teal-500/10 border-teal-500/20 text-teal-300' 
                      : 'bg-slate-950 border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500">{user.rank}.</span>
                    <span>{user.avatar}</span>
                    <span className="font-bold">{user.name}</span>
                  </div>
                  <div className="flex gap-4">
                    <span>Lvl {user.level}</span>
                    <span className="text-white font-bold">{user.points}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
