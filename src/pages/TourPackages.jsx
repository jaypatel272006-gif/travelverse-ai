import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Check, X, ShieldAlert, Heart, Calendar, ArrowRight, UserPlus, Info } from 'lucide-react';
import { TourCard } from '../components/TourCard';
import { mockTours } from '../data/mockData';
import { CardGridSkeleton } from '../components/SkeletonLoader';
import { useApp } from '../context/AppContext';

export const TourPackages = () => {
  const { showToast } = useApp();
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get('id');

  const [loading, setLoading] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary'); // itinerary, inclusions, reviews
  const [travelersCount, setTravelersCount] = useState(1);
  const [checkoutStep, setCheckoutStep] = useState(false);

  // Sync details modal from search parameters (e.g. from Destination card click redirects)
  useEffect(() => {
    if (initialId) {
      const matchedTour = mockTours.find(t => t.id === initialId);
      if (matchedTour) {
        const timer = setTimeout(() => {
          setSelectedTour(matchedTour);
          setCheckoutStep(false);
          setActiveTab('itinerary');
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [initialId]);

  const handleBookTour = () => {
    setCheckoutStep(true);
  };

  const confirmTourBooking = () => {
    showToast(`Tour Package booked successfully for ${travelersCount} traveler(s)!`);
    setSelectedTour(null);
    setCheckoutStep(false);
  };

  return (
    <div className="py-4 text-left flex flex-col gap-8">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Curated Tour Packages
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Discover handpicked multi-day tour packages including expert local guides, transportation, tickets, and boutique lodging.
        </p>
      </div>

      {/* Grid listing */}
      {loading ? (
        <CardGridSkeleton count={3} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTours.map((tour) => (
            <div 
              key={tour.id} 
              onClick={() => {
                setSelectedTour(tour);
                setCheckoutStep(false);
                setActiveTab('itinerary');
              }}
              className="cursor-pointer"
            >
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      )}

      {/* Detailed Tour Modal (Tabbed content & booking) */}
      <AnimatePresence>
        {selectedTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTour(null)}
              className="fixed inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Tour Cover Image */}
              <div className="relative h-60 w-full shrink-0">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                
                {/* Dismiss button */}
                <button
                  onClick={() => setSelectedTour(null)}
                  className="absolute top-4 right-4 p-2 rounded-full glass border border-white/20 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={16} />
                </button>

                {/* Tour Overlay details */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[10px] font-bold text-teal-350 uppercase tracking-widest block">
                    {selectedTour.location}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl mt-1 leading-tight">
                    {selectedTour.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-200">
                    <span className="flex items-center gap-1"><Clock size={13} /> {selectedTour.duration}</span>
                    <span className="flex items-center gap-1"><Star size={13} className="text-amber-400 fill-amber-400" /> {selectedTour.rating} ({selectedTour.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Scrollable details area */}
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6 text-xs text-slate-600 dark:text-slate-300">
                {!checkoutStep ? (
                  /* Tabs details screen */
                  <>
                    {/* Navigation Tabs */}
                    <div className="flex border-b border-slate-100 dark:border-slate-800">
                      {[
                        { key: 'itinerary', label: 'Itinerary Program' },
                        { key: 'inclusions', label: 'Inclusions & Info' },
                        { key: 'reviews', label: 'Wanderer Reviews' }
                      ].map((t) => (
                        <button
                          key={t.key}
                          onClick={() => setActiveTab(t.key)}
                          className={`flex-1 pb-3 text-center font-bold border-b-2 text-xs transition-all ${
                            activeTab === t.key
                              ? 'border-teal-500 text-teal-600 dark:text-teal-400 font-extrabold'
                              : 'border-transparent text-slate-400 hover:text-slate-655'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Panels */}
                    <div className="text-left">
                      {activeTab === 'itinerary' && (
                        <div className="flex flex-col gap-5 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
                          {selectedTour.itinerary.map((d) => (
                            <div key={d.day} className="flex gap-4 relative">
                              <div className="w-6 h-6 rounded-full bg-teal-500 text-white font-bold text-[10px] flex items-center justify-center z-10 shrink-0 shadow-sm">
                                {d.day}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{d.title}</h4>
                                <p className="text-slate-500 leading-relaxed">{d.details}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === 'inclusions' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 leading-relaxed">
                          {/* Inclusions */}
                          <div className="flex flex-col gap-2.5">
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">What is Included</h4>
                            {selectedTour.activities.map((act) => (
                              <div key={act} className="flex items-start gap-2">
                                <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>{act}</span>
                              </div>
                            ))}
                            <div className="flex items-start gap-2">
                              <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>Premium hotel stay & airport transfers</span>
                            </div>
                          </div>
                          
                          {/* Exclusions */}
                          <div className="flex flex-col gap-2.5">
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">What is Excluded</h4>
                            <div className="flex items-start gap-2">
                              <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                              <span>International flight tickets (add at checkout)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                              <span>Personal expenses & souvenir shopping</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                              <span>Travel health insurance policies</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'reviews' && (
                        <div className="flex flex-col gap-4 text-left">
                          {[
                            { author: 'Marcus Aurelius', rating: 5, date: 'May 2026', comment: 'The tour guides were outstanding, deeply knowledgeable, and handled all transports seamlessly. Best vacation ever!' },
                            { author: 'Sophia Loren', rating: 4.8, date: 'April 2026', comment: 'Exceptional accommodations in Kyoto. Very well-balanced itinerary between temples and free exploring time.' }
                          ].map((rev, index) => (
                            <div key={index} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 flex flex-col gap-2">
                              <div className="flex justify-between items-center font-bold">
                                <span>{rev.author}</span>
                                <div className="flex items-center gap-0.5 text-amber-500">
                                  <Star size={11} className="fill-amber-500" />
                                  <span>{rev.rating}</span>
                                </div>
                              </div>
                              <span className="text-[10px] text-slate-400 font-semibold">{rev.date}</span>
                              <p className="text-slate-500 leading-relaxed italic">"{rev.comment}"</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Booking actions bar */}
                    <div className="border-t border-slate-100 dark:border-slate-805 pt-4 flex justify-between items-center mt-4">
                      <div>
                        <span className="text-[10px] text-slate-400">Package pricing</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-slate-800 dark:text-slate-100">₹{selectedTour.price.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] text-slate-405">/person</span>
                        </div>
                      </div>

                      <button
                        onClick={handleBookTour}
                        className="px-6 py-3 bg-teal-655 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow cursor-pointer"
                      >
                        Book Package Itinerary
                      </button>
                    </div>
                  </>
                ) : (
                  /* Checkout form step screen */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="p-4 rounded-xl bg-teal-500/5 dark:bg-teal-950/20 border border-teal-555/20 text-slate-700 dark:text-slate-300 text-left">
                      <h4 className="font-bold text-sm text-slate-850 dark:text-slate-150 mb-1">Booking Package Details</h4>
                      <p className="leading-relaxed font-semibold">
                        You are reserving "{selectedTour.name}" for {selectedTour.duration}.
                      </p>
                    </div>

                    {/* Travelers Count selector */}
                    <div className="flex flex-col gap-2 text-left">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Number of Travelers</label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                          className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-bold flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-850 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-base font-bold w-6 text-center">{travelersCount}</span>
                        <button
                          type="button"
                          onClick={() => setTravelersCount(travelersCount + 1)}
                          className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-bold flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-850 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Pricing summary calculations */}
                    <div className="flex flex-col gap-3.5 border-t border-slate-100 dark:border-slate-850 pt-4 font-semibold text-left">
                      <div className="flex justify-between">
                        <span>Base Package Rate (₹{selectedTour.price.toLocaleString('en-IN')} x {travelersCount} traveler(s))</span>
                        <span>₹{(selectedTour.price * travelersCount).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guaranteed Tour Taxes (10%)</span>
                        <span>₹{Math.round(selectedTour.price * travelersCount * 0.1).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm font-black text-slate-800 dark:text-slate-100 border-t border-slate-100 dark:border-slate-800 pt-3 mt-1">
                        <span>Total Due</span>
                        <span className="text-teal-555 dark:text-teal-400">₹{Math.round(selectedTour.price * travelersCount * 1.1).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={() => setCheckoutStep(false)}
                        className="flex-1 py-3.5 border border-slate-205 dark:border-slate-805 text-slate-600 dark:text-slate-300 font-bold rounded-xl"
                      >
                        Back to Details
                      </button>
                      <button
                        onClick={confirmTourBooking}
                        className="flex-1 py-3.5 bg-teal-655 hover:bg-teal-700 text-white font-bold rounded-xl shadow transition-colors"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
