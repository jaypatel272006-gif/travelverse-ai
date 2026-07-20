import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Heart, Wifi, Shield, Calendar, BedDouble, Users, Sparkles, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getResponsiveSrcSet } from '../utils/responsiveImages';

export const HotelCard = memo(({ hotel, onBook }) => {
  const { isInWishlist, toggleWishlist } = useApp();
  const [showRooms, setShowRooms] = useState(false);
  const isWishlisted = isInWishlist('hotels', hotel.id);

  // Amenity icon helper
  const renderAmenityIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'wifi':
      case 'free wifi':
        return <Wifi size={14} className="text-teal-500" />;
      case 'pool':
      case 'swimming pool':
        return <span className="text-[12px]">🏊‍♂️</span>;
      case 'gym':
      case 'fitness':
        return <span className="text-[12px]">🏋️‍♂️</span>;
      case 'spa':
        return <span className="text-[12px]">💆‍♀️</span>;
      default:
        return <Sparkles size={14} className="text-teal-500" />;
    }
  };

  const amenities = hotel.amenities || ['WiFi', 'Breakfast Included', 'Room Service'];
  const rooms = hotel.rooms || [
    { type: 'Standard Classic Room', bed: '1x Queen Bed', price: hotel.price, refundable: true }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-100 dark:border-slate-800/40 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row h-full md:min-h-[240px]"
    >
      {/* Hotel Thumbnail */}
      <div className="relative w-full md:w-80 h-56 md:h-auto shrink-0 overflow-hidden">
        <img
          src={hotel.image}
          srcSet={getResponsiveSrcSet(hotel.image)}
          sizes="(max-width: 640px) 100vw, 320px"
          alt={hotel.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={() => toggleWishlist('hotels', hotel)}
          className="absolute top-4 right-4 p-2.5 rounded-full glass border shadow-sm transition-all duration-300 transform active:scale-90 z-10 text-slate-605 dark:text-slate-300 hover:text-rose-500"
        >
          <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start gap-4 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 hover:text-teal-655 dark:hover:text-teal-400 transition-colors my-0">
                  {hotel.name}
                </h4>
                {hotel.isLiveVerified ? (
                  <span className="px-1.5 py-0.5 text-[8px] font-bold font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded flex items-center gap-1">
                    ✓ Verified Hotel
                  </span>
                ) : (
                  <span className="px-1.5 py-0.5 text-[8px] font-bold font-mono uppercase bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded flex items-center gap-1">
                    🤖 AI Suggestion
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-slate-555 flex-wrap">
                <div className="flex items-center gap-1">
                  <MapPin size={13} className="text-slate-400" />
                  <span className="text-xs font-medium">{hotel.location || hotel.destination}</span>
                </div>
                {hotel.website && (
                  <>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-605 dark:text-teal-400 hover:underline font-mono font-bold">
                      Official Website
                    </a>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-1 shrink-0 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <Star size={13} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-202">{hotel.rating}</span>
              <span className="text-[10px] text-slate-400">({hotel.reviewsCount || 420})</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed font-semibold">
            {hotel.description}
          </p>

          {/* Cancellation Policy */}
          {hotel.cancellationPolicy && (
            <div className="mb-3.5 text-xs text-rose-500 dark:text-rose-400 font-semibold font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Policy: {hotel.cancellationPolicy}</span>
            </div>
          )}

          {/* Amenities Grid */}
          <div className="flex flex-wrap gap-2 mb-5">
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800/40 text-slate-655 dark:text-slate-300 border border-slate-100 dark:border-slate-800"
              >
                {renderAmenityIcon(amenity)}
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4 mt-auto">
          <div>
            <span className="text-xs text-slate-400">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-800 dark:text-slate-100">₹{hotel.price.toLocaleString('en-IN')}</span>
              <span className="text-xs text-slate-400">/night</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRooms(!showRooms)}
              className="px-4 py-2.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-350 text-slate-600 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              Rooms
              <motion.div animate={{ rotate: showRooms ? 180 : 0 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>
            <button
              onClick={() => onBook(hotel, rooms[0])}
              className="px-5 py-2.5 text-xs font-bold rounded-xl bg-teal-655 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors shadow-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

// Sub-component for listing rooms when expanded
export const RoomSelectionList = ({ hotel, onSelectRoom }) => {
  const rooms = hotel.rooms || [
    { type: 'Standard Classic Room', bed: '1x Queen Bed', price: hotel.price, refundable: true }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="w-full mt-2 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-850/50 flex flex-col gap-4 text-left"
    >
      <h5 className="text-sm font-bold text-slate-800 dark:text-slate-202 uppercase tracking-wider mb-2">
        Available Rooms at {hotel.name}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rooms.map((room) => (
          <div
            key={room.type}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex justify-between items-start">
                <h6 className="font-bold text-slate-850 dark:text-slate-202">{room.type}</h6>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-50 dark:bg-emerald-950/30 text-emerald-655 dark:text-emerald-400">
                  Refundable
                </span>
              </div>
              
              <div className="flex items-center gap-4 mt-3 text-xs text-slate-555 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <BedDouble size={12} className="text-teal-500" />
                  <span>{room.bed}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} className="text-teal-500" />
                  <span>2 Adults</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-slate-50 dark:border-slate-800/50 pt-3">
              <div>
                <span className="text-lg font-black text-slate-800 dark:text-slate-202">₹{room.price.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-slate-400">/night</span>
              </div>
              <button
                onClick={() => onSelectRoom(hotel, room)}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-slate-105 dark:text-slate-900 hover:bg-teal-655 dark:hover:bg-teal-400 transition-colors"
              >
                Choose
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
