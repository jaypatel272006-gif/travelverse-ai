import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DestinationCard } from '../DestinationCard';
import { mockDestinations } from '../../data/mockData';

export const HomeHiddenIndia = () => {
  const hiddenGems = mockDestinations.filter(d => 
    ['dest-ziro', 'dest-tawang', 'dest-spiti', 'dest-gokarna', 'dest-majuli'].includes(d.id)
  );

  return (
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
        {hiddenGems.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  );
};
