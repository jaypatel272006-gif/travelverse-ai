import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DestinationCard } from '../DestinationCard';

export const HomeMoodSelection = ({
  selectedMood,
  setSelectedMood,
  moodsList,
  moodStyle,
  filteredDestinations,
  showToast
}) => {
  return (
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
  );
};
