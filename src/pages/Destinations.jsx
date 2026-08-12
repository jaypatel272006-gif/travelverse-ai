import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import useDestinations from '../hooks/useDestinations';
import SpatialDestinationCard from '../components/ui/SpatialDestinationCard';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export const Destinations = () => {
  const {
    filteredDestinations,
    regions,
    allTags,
    searchQuery,
    setSearchQuery,
    selectedRegion,
    setSelectedRegion,
    selectedTags,
    toggleTag,
    maxPrice,
    setMaxPrice,
    sortBy,
    setSortBy,
    resetFilters
  } = useDestinations();

  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  return (
    <div className="flex flex-col gap-8 text-left w-full">
      {/* Title Header */}
      <div className="flex flex-col gap-2">
        <Badge variant="teal" icon={Sparkles} className="w-fit">DESTINATION DATABASE</Badge>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
          Explore Hotspots Catalog
        </h1>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-2xl">
          Search through 53 curated destinations mapped via authentic destination photography and quantum match metrics.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Desktop Filter Panel */}
        <aside className="hidden lg:flex flex-col gap-6 w-72 shrink-0 p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl sticky top-24">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <h3 className="font-bold text-xs uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-teal-400" /> Filters
            </h3>
            <button 
              onClick={resetFilters}
              className="text-[10px] font-mono font-bold text-teal-400 hover:underline uppercase"
            >
              Reset All
            </button>
          </div>

          {/* Region Filter */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Regions</h4>
            <div className="flex flex-col gap-1">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-2 text-xs font-mono font-semibold rounded-xl text-left transition-all ${
                    selectedRegion === reg
                      ? 'bg-teal-500/15 border border-teal-500/30 text-teal-300 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Limit Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              <span>Max Budget</span>
              <span className="text-teal-400 font-bold">₹{maxPrice.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="30000"
              max="200000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>

          {/* Experience Tags */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Experience Tags</h4>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-teal-500/20 border-teal-400 text-teal-300 font-bold'
                        : 'border-white/10 text-slate-400 hover:bg-white/5'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Listings Section */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          
          {/* Search & Sort Header Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
              <input
                type="text"
                placeholder="Search by city, region or zone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/60 border border-white/10 text-xs font-mono focus:outline-none focus:border-teal-400 text-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
              <button
                onClick={() => setShowFiltersMobile(true)}
                className="lg:hidden px-4 py-3 border border-white/10 bg-slate-900/60 rounded-2xl text-xs font-mono font-bold text-slate-200"
              >
                Filters
              </button>

              <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-white/10 rounded-2xl">
                <ArrowUpDown size={14} className="text-teal-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-xs font-mono font-bold text-slate-200 focus:outline-none cursor-pointer"
                >
                  <option value="rating" className="bg-slate-900">Top Rated</option>
                  <option value="price-low" className="bg-slate-900">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-900">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDestinations.map(dest => (
                <SpatialDestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <GlassPanel className="p-12 text-center flex flex-col items-center gap-4">
              <Sparkles size={28} className="text-teal-400 animate-pulse" />
              <h3 className="text-lg font-bold text-white">No Sector Matches Identified</h3>
              <p className="text-xs font-mono text-slate-400 max-w-sm">No destinations matched "{searchQuery}". Reset filters to return to the global index.</p>
              <Button variant="primary" onClick={resetFilters} size="sm">
                RESET FILTERS
              </Button>
            </GlassPanel>
          )}

        </div>
      </div>

    </div>
  );
};

export default Destinations;
