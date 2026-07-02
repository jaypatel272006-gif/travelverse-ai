import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Star, CheckCircle, ArrowRight, Heart, Percent } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TourCard = memo(({ tour }) => {
  const { isInWishlist, toggleWishlist } = useApp();
  const isWishlisted = isInWishlist('tours', tour.id);

  // Calculate percentage discount if originalPrice exists
  const discount = tour.originalPrice 
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-slate-100 dark:border-slate-800/40 bg-white dark:bg-slate-900/50 shadow-md shadow-slate-100/40 dark:shadow-none hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Tour Image */}
      <div className="relative h-52 overflow-hidden w-full shrink-0">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

        {/* Promo tag */}
        {discount > 0 && (
          <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
            <Percent size={10} />
            <span>Save {discount}%</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist('tours', tour);
          }}
          className={`absolute top-4 right-4 p-2.5 rounded-full glass border shadow-sm transition-all duration-300 transform active:scale-90 z-10 ${
            isWishlisted
              ? 'bg-rose-50 border-rose-200 text-rose-500 dark:bg-rose-950/80 dark:border-rose-900'
              : 'text-slate-600 dark:text-slate-300 hover:text-rose-500'
          }`}
        >
          <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Duration */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white bg-slate-950/40 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg text-xs font-semibold">
          <Calendar size={12} className="text-teal-400" />
          <span>{tour.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start gap-4 mb-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
              {tour.name}
            </h4>
            <div className="flex items-center gap-0.5 shrink-0">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{tour.rating}</span>
            </div>
          </div>

          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
            {tour.location}
          </span>

          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {tour.description}
          </p>

          {/* Activities list */}
          <div className="flex flex-col gap-1.5 mb-5">
            {tour.activities.slice(0, 3).map((act) => (
              <div key={act} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle size={12} className="text-teal-500 shrink-0" />
                <span className="line-clamp-1">{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center mt-auto">
          <div>
            {tour.originalPrice && (
              <span className="text-xs text-slate-400 line-through block leading-none">
                ₹{tour.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl font-black text-slate-800 dark:text-slate-100">₹{tour.price.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-slate-400">/person</span>
            </div>
          </div>

          <Link
            to={`/packages?id=${tour.id}`}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-teal-600 dark:hover:bg-teal-400 hover:text-white dark:hover:text-slate-900 transition-all flex items-center gap-1 shadow-sm"
          >
            Details
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
});
