import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, SlidersHorizontal, ArrowUpDown, X, Frown, Sparkles } from 'lucide-react';
import { DestinationCard } from '../components/DestinationCard';
import { mockDestinations } from '../data/mockData';
import { CardGridSkeleton } from '../components/SkeletonLoader';

export const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  // Filter States
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [maxPrice, setMaxPrice] = useState(120000);
  const [sortBy, setSortBy] = useState('rating'); // rating, price-low, price-high
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  // Synchronize URL search parameter changes
  useEffect(() => {
    const paramVal = searchParams.get('search');
    if (paramVal !== null) {
      setSearchQuery(paramVal);
    }
  }, [searchParams]);

  // Loading Simulation
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [selectedRegion, selectedTags, maxPrice, sortBy, searchQuery]);

  const regions = ['All', 'North India', 'South India', 'West India', 'East India'];
  const allTags = ['Culture', 'History', 'Nature', 'Food', 'Beach', 'Adventure', 'Romance', 'Shopping', 'Wellness', 'Nightlife', 'Spiritual'];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedTags([]);
    setMaxPrice(120000);
    setSortBy('rating');
    setSearchParams({});
  };

  // Filtering Logic
  const filteredDestinations = mockDestinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.region.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = selectedRegion === 'All' || dest.region === selectedRegion;
    const matchesPrice = dest.price <= maxPrice;
    const matchesTags = selectedTags.length === 0 || 
                         selectedTags.every(tag => dest.tags.includes(tag));

    return matchesSearch && matchesRegion && matchesPrice && matchesTags;
  });

  // Sorting Logic
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="flex flex-col gap-8 py-4 text-left">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Discover Destinations
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Browse through our curated Indian tourist hotspots. Filter by budget, activities, or zones to plan your next customized vacation.
        </p>
      </div>

      {/* Main Grid Layout (Filters on left, Grid on right) */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Desktop Filter Panel */}
        <aside className="hidden lg:flex flex-col gap-6 w-72 shrink-0 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm sticky top-28">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <SlidersHorizontal size={14} /> Filters
            </h3>
            <button 
              onClick={clearFilters}
              className="text-[10px] font-bold text-teal-605 dark:text-teal-400 hover:underline uppercase tracking-wide"
            >
              Reset All
            </button>
          </div>

          {/* Region Filter */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-455">Regions</h4>
            <div className="flex flex-col gap-1.5">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-left transition-all ${
                    selectedRegion === reg
                      ? 'bg-teal-500/10 text-teal-600 dark:bg-teal-400/10 dark:text-teal-400 font-bold'
                      : 'text-slate-600 dark:text-slate-355 hover:bg-slate-50 dark:hover:bg-slate-800/30'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-455">
              <span>Max Budget Limit</span>
              <span className="text-teal-555 dark:text-teal-400">₹{maxPrice.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="40000"
              max="160000"
              step="4000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Activity Tags Filter */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-455">Experience Tags</h4>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-teal-500 border-teal-500 text-white shadow-sm'
                        : 'border-slate-150 dark:border-slate-800 text-slate-600 dark:text-slate-355 hover:bg-slate-50 dark:hover:bg-slate-800/40'
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
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
            {/* Search Input bar */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search by city, region or zone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/40 shadow-sm text-sm focus:outline-none focus:border-teal-500 text-slate-800 dark:text-slate-100"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort & Mobile filter trigger */}
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
              <button
                onClick={() => setShowFiltersMobile(true)}
                className="lg:hidden flex items-center gap-1.5 px-4 py-3 border border-slate-205 dark:border-slate-855 bg-white dark:bg-slate-900 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>

              <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/40 rounded-2xl shadow-sm">
                <ArrowUpDown size={14} className="text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
                >
                  <option value="rating">Top Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid Content listing */}
          {loading ? (
            <CardGridSkeleton count={6} />
          ) : sortedDestinations.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {sortedDestinations.map((dest) => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 px-4 rounded-3xl bg-white/40 dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col items-center justify-center text-center gap-4 relative grid-cyber"
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Sparkles size={28} className="animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-slate-900 dark:text-white uppercase tracking-wide">Dynamic Sector Identified</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 max-w-xs leading-relaxed font-semibold">
                  We didn't find "{searchQuery}" in our featured database, but you can query the satellite network database to compile a custom dossier.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to={`/destination/${encodeURIComponent(searchQuery)}`}
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-mono font-bold text-xs rounded-xl shadow-md cursor-pointer"
                >
                  COMPILE "{searchQuery.toUpperCase()}" PLAN
                </Link>
                <button
                  onClick={clearFilters}
                  className="px-5 py-3 border border-slate-250 dark:border-teal-500/20 text-slate-655 dark:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 font-mono font-bold text-xs rounded-xl cursor-pointer"
                >
                  RESET FILTERS
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {showFiltersMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFiltersMobile(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-white dark:bg-slate-900 rounded-t-3xl p-6 z-[100] lg:hidden overflow-y-auto flex flex-col gap-6"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-155 dark:border-slate-800">
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Filters
                </h3>
                <button
                  onClick={() => setShowFiltersMobile(false)}
                  className="p-1 rounded-lg border border-slate-100 dark:border-slate-800"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Mobile Region Filters */}
              <div className="flex flex-col gap-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-455">Regions</h4>
                <div className="flex flex-wrap gap-2">
                  {regions.map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                        selectedRegion === reg
                          ? 'bg-teal-505 text-white'
                          : 'bg-slate-50 dark:bg-slate-855 text-slate-605 dark:text-slate-305'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Budget slider */}
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-455">
                  <span>Max Budget Limit</span>
                  <span className="text-teal-555 font-bold">₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="40000"
                  max="160000"
                  step="4000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Mobile tag filters */}
              <div className="flex flex-col gap-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-455">Experience Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 text-[11px] font-medium rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-teal-505 border-teal-505 text-white'
                            : 'border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-350'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={clearFilters}
                  className="flex-1 py-3 border border-slate-205 dark:border-slate-805 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300"
                >
                  Reset
                </button>
                <button
                  onClick={() => setShowFiltersMobile(false)}
                  className="flex-1 py-3 bg-teal-655 text-white rounded-xl text-xs font-bold shadow"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
