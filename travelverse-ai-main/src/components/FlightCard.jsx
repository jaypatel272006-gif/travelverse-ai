import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Compass, Clock, ArrowRight, ShieldCheck, BaggageClaim, Wifi, Coffee, BatteryCharging, ChevronDown, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FlightCard = memo(({ flight, onBook }) => {
  const { isInWishlist, toggleWishlist } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const isWishlisted = isInWishlist('flights', flight.id);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Helper to color class badges elegantly
  const getClassBadgeStyle = (cls) => {
    if (cls === 'First Class') {
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    }
    if (cls === 'Business Class') {
      return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
    }
    if (cls === 'Premium Economy') {
      return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
    }
    return 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700';
  };

  const amenitiesList = flight.amenities || ['Free Wi-Fi', 'Complimentary Meal', 'USB Port & Charging'];
  const baggageList = flight.baggage 
    ? [flight.baggage] 
    : ['1x Carry-on Bag (7kg max)', '1x Checked Bag (23kg max)'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-100 dark:border-slate-800/40 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-6 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Airline & Brand */}
        <div className="flex items-center gap-4 w-full lg:w-auto text-left">
          <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 font-bold border border-teal-100/30">
            {flight.airline.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100">{flight.airline}</h4>
            <span className="text-xs text-slate-400 font-mono">{flight.flightNumber}</span>
          </div>
        </div>

        {/* Flight Time Duration Track */}
        <div className="flex justify-between items-center w-full lg:w-[50%] gap-4">
          {/* Departure */}
          <div className="flex flex-col text-left">
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100">{flight.departureTime}</span>
            <span className="text-xs font-bold text-slate-500">{flight.from}</span>
          </div>

          {/* Timeline indicator */}
          <div className="flex-1 flex flex-col items-center relative">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 mb-1">
              <Clock size={10} /> {flight.duration}
            </span>
            <div className="w-full flex items-center justify-between relative">
              <div className="w-2.5 h-2.5 rounded-full border border-teal-500 bg-white dark:bg-slate-900 shrink-0" />
              <div className="w-full h-[2px] bg-slate-200 dark:bg-slate-800 border-dashed relative mx-1">
                {flight.stops > 0 && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-amber-600">
                    {flight.stops} Stop
                  </div>
                )}
                <div className="absolute left-[40%] top-1/2 -translate-y-1/2 text-teal-600 dark:text-teal-400 animate-pulse">
                  <Plane size={12} className="transform rotate-90" />
                </div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0" />
            </div>
            <span className="text-[10px] text-slate-400 mt-1 uppercase font-semibold tracking-wider">
              {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop via ${flight.via || 'layover'}`}
            </span>
          </div>

          {/* Arrival */}
          <div className="flex flex-col text-right">
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100">{flight.arrivalTime}</span>
            <span className="text-xs font-bold text-slate-500">{flight.to}</span>
          </div>
        </div>

        {/* Pricing / Booking Area */}
        <div className="flex items-center justify-between lg:flex-col gap-4 w-full lg:w-auto lg:border-l border-slate-100 dark:border-slate-800/80 lg:pl-6 text-right">
          <div className="flex flex-col lg:items-end gap-1">
            <span className={`px-2 py-0.5 rounded text-[9px] font-bold border self-end tracking-wide uppercase ${getClassBadgeStyle(flight.class)}`}>
              {flight.class}
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-slate-800 dark:text-slate-100">₹{flight.price.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-slate-400">/one-way</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => toggleWishlist('flights', flight)}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                isWishlisted
                  ? 'bg-rose-50 border-rose-200 text-rose-500 dark:bg-rose-950/80 dark:border-rose-900'
                  : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-500'
              }`}
            >
              <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={() => onBook(flight)}
              className="px-5 py-2.5 text-xs font-bold rounded-xl bg-teal-655 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20"
            >
              Select
            </button>
          </div>
        </div>
      </div>

      {/* Details Toggle Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex justify-between items-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors"
      >
        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-455 uppercase tracking-wider flex items-center gap-1.5">
          Flight Details & Baggage
        </span>
        <motion.div
          animate={prefersReducedMotion ? {} : { rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <ChevronDown size={14} className="text-slate-400" />
        </motion.div>
      </div>

      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0.1 } : { type: 'spring', stiffness: 200, damping: 22 }}
            className="overflow-hidden bg-slate-50/30 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* Amenity details */}
              <div className="flex flex-col gap-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Amenities</h5>
                {amenitiesList.map((item, index) => {
                  let Icon = Wifi;
                  const itemL = item.toLowerCase();
                  if (itemL.includes('meal') || itemL.includes('dine') || itemL.includes('dining') || itemL.includes('chef')) Icon = Coffee;
                  if (itemL.includes('power') || itemL.includes('usb') || itemL.includes('charge') || itemL.includes('charging')) Icon = BatteryCharging;
                  if (itemL.includes('suite') || itemL.includes('pod') || itemL.includes('seat') || itemL.includes('bed') || itemL.includes('recliner')) Icon = Compass;
                  return (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <Icon size={14} className="text-teal-600 dark:text-teal-400" />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>

              {/* Baggage allowance */}
              <div className="flex flex-col gap-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Baggage Details</h5>
                {baggageList.map((item, index) => {
                  const isChecked = item.toLowerCase().includes('checked');
                  return (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      {isChecked ? (
                        <BaggageClaim size={14} className="text-teal-600 dark:text-teal-400" />
                      ) : (
                        <ShieldCheck size={14} className="text-teal-600 dark:text-teal-400" />
                      )}
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>

              {/* Booking safety details */}
              <div className="flex flex-col gap-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Policies</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  • Cancellation: Refundable up to 24 hours prior to departure for a ₹50 fee.<br/>
                  • Reschedule: Allowed up to 4 hours before departure with fare difference.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
