import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, Map, Calendar, ArrowRight, Trash2, ShieldAlert } from 'lucide-react';

import { useApp } from '../context/AppContext';
import { DestinationCard } from '../components/DestinationCard';
import { FlightCard } from '../components/FlightCard';
import { HotelCard } from '../components/HotelCard';
import { TourCard } from '../components/TourCard';

export const Wishlist = () => {
  const { wishlist, toggleWishlist } = useApp();
  const [activeTab, setActiveTab] = useState('destinations'); // destinations, flights, hotels, tours

  // Count items
  const counts = {
    destinations: wishlist.destinations?.length || 0,
    flights: wishlist.flights?.length || 0,
    hotels: wishlist.hotels?.length || 0,
    tours: wishlist.tours?.length || 0
  };

  const handleRemove = (type, item) => {
    toggleWishlist(type, item);
  };

  const activeItemsList = wishlist[activeTab] || [];

  return (
    <div className="py-4 text-left flex flex-col gap-8">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Saved Wanderlust Wishlist
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Keep track of your favored travel destinations, lodging options, flight tickets, and vacation packages.
        </p>
      </div>

      {/* Tabs Menu Navigation */}
      <div className="flex border-b border-slate-100 dark:border-slate-800/80 gap-1.5 overflow-x-auto pb-0.5">
        {[
          { key: 'destinations', label: 'Destinations', icon: <Map size={13} /> },
          { key: 'flights', label: 'Flights', icon: <span className="text-[11px]">✈️</span> },
          { key: 'hotels', label: 'Lodging', icon: <span className="text-[11px]">🏨</span> },
          { key: 'tours', label: 'Tours', icon: <Calendar size={13} /> }
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`pb-3 px-4 text-center font-bold border-b-2 text-xs flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeTab === t.key
                ? 'border-teal-500 text-teal-650 dark:text-teal-400 font-black'
                : 'border-transparent text-slate-400 hover:text-slate-655'
            }`}
          >
            {t.icon}
            {t.label}
            <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
              activeTab === t.key 
                ? 'bg-teal-500/10 text-teal-650 dark:bg-teal-450/15 dark:text-teal-450' 
                : 'bg-slate-50 dark:bg-slate-855 text-slate-400'
            }`}>
              {counts[t.key]}
            </span>
          </button>
        ))}
      </div>

      {/* Grid listing content */}
      <div className="w-full">
        {activeItemsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'destinations' && activeItemsList.map((item) => (
              <div key={item.id} className="relative">
                <DestinationCard destination={item} />
              </div>
            ))}

            {activeTab === 'flights' && activeItemsList.map((item) => (
              <div key={item.id} className="col-span-1 md:col-span-2 lg:col-span-3">
                <FlightCard flight={item} onBook={() => {}} />
              </div>
            ))}

            {activeTab === 'hotels' && activeItemsList.map((item) => (
              <div key={item.id} className="col-span-1 md:col-span-2 lg:col-span-3">
                <HotelCard hotel={item} onBook={() => {}} />
              </div>
            ))}

            {activeTab === 'tours' && activeItemsList.map((item) => (
              <div key={item.id} className="relative">
                <TourCard tour={item} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty placeholder */
          <div className="py-16 px-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col items-center justify-center text-center gap-4 max-w-md mx-auto mt-4">
            <div className="w-14 h-14 rounded-full bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center text-rose-500 dark:text-rose-400">
              <Heart size={24} className="animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-850 dark:text-slate-100">Your wishlist is empty</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed font-semibold">
                Explore destinations, flights, lodging, or packaged tours and tap the heart icon to save your favorites here.
              </p>
            </div>
            <Link
              to={activeTab === 'destinations' ? '/destinations' : activeTab === 'flights' ? '/flights' : activeTab === 'hotels' ? '/hotels' : '/packages'}
              className="px-5 py-2.5 bg-teal-655 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1 mt-2"
            >
              Browse {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              <ArrowRight size={13} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
