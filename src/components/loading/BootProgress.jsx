import React from 'react';

export const BootProgress = ({ progress }) => {
  // 20-character representation: each step is 5%
  const totalChars = 20;
  const filledChars = Math.min(totalChars, Math.floor(progress / 5));
  const emptyChars = Math.max(0, totalChars - filledChars);
  const progressTrack = '█'.repeat(filledChars) + '░'.repeat(emptyChars);

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs mx-auto font-mono text-[10px]">
      <div className="flex justify-between items-center text-slate-450 dark:text-slate-400 font-bold uppercase tracking-widest">
        <span>Initializing</span>
        <span>{progress}%</span>
      </div>
      <div className="flex items-center justify-center font-semibold tracking-normal text-teal-400 dark:text-teal-400 select-none overflow-hidden text-ellipsis whitespace-nowrap">
        [{progressTrack}]
      </div>
    </div>
  );
};
