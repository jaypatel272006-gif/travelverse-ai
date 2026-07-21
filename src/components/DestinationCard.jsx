import React, { useState, useRef, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, MapPin, ArrowRight, Sparkles, Bookmark, Eye, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getResponsiveSrcSet } from '../utils/responsiveImages';

export const DestinationCard = memo(({ destination }) => {
  const { isInWishlist, toggleWishlist, customPhotos, showToast } = useApp();
  const { id, name, image, region, country, rating, reviewsCount, price, tags, description } = destination;
  const isWishlisted = isInWishlist('destinations', id);

  // Local helper for season and duration
  const getSeasonAndDuration = (targetId) => {
    switch (targetId) {
      case 'dest-goa':
        return { season: 'Nov - Feb', duration: '4-5 Days' };
      case 'dest-jaipur':
        return { season: 'Oct - Mar', duration: '3-4 Days' };
      case 'dest-delhi':
        return { season: 'Oct - Mar', duration: '2-3 Days' };
      case 'dest-agra':
        return { season: 'Nov - Feb', duration: '2 Days' };
      case 'dest-leh':
        return { season: 'May - Sep', duration: '7-9 Days' };
      case 'dest-kerala':
        return { season: 'Sep - Mar', duration: '6-8 Days' };
      case 'dest-varanasi':
        return { season: 'Oct - Mar', duration: '2-3 Days' };
      default:
        return { season: 'Oct - Mar', duration: '4-5 Days' };
    }
  };
  const { season, duration } = getSeasonAndDuration(id);

  // 3D Tilt State
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    const handleCloseEvent = () => {
      if (isMounted.current) {
        setShowQuickView(false);
      }
    };
    
    window.addEventListener('tv_close_all_previews', handleCloseEvent);
    
    return () => {
      isMounted.current = false;
      window.removeEventListener('tv_close_all_previews', handleCloseEvent);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative mouse coordinates from center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Set rotation degrees (max 12deg)
    setRotateX(-mouseY * 12);
    setRotateY(mouseX * 12);

    // Glare coordinates
    setGlareX(((e.clientX - rect.left) / width) * 100);
    setGlareY(((e.clientY - rect.top) / height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleCompareToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCompared(prev => {
      const next = !prev;
      if (next) {
        showToast(`${name} added to comparison matrix.`, 'success');
      } else {
        showToast(`${name} removed from comparison matrix.`, 'info');
      }
      return next;
    });
  };

  const handleBookmarkToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(prev => {
      const next = !prev;
      if (next) {
        showToast(`${name} added to saved dossiers.`, 'success');
      } else {
        showToast(`${name} removed from saved dossiers.`, 'info');
      }
      return next;
    });
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Broadcast event to close any other active quick preview modals
    window.dispatchEvent(new CustomEvent('tv_close_all_previews'));
    
    setShowQuickView(true);
    setIsImageLoading(true);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          y: isHovered ? -12 : 0,
          boxShadow: isHovered 
            ? '0 30px 60px rgba(0, 0, 0, 0.45), 0 10px 30px rgba(20, 184, 166, 0.15)' 
            : '0 8px 30px rgba(0, 0, 0, 0.04)'
        }}
        className="group relative flex flex-col h-full rounded-[28px] overflow-hidden border border-slate-200/50 dark:border-white/5 bg-white dark:bg-slate-950/40 transition-all duration-300 select-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        {/* Glare Overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 opacity-25"
            style={{
              background: `radial-gradient(circle 180px at ${glareX}% ${glareY}%, rgba(255,255,255,0.7), transparent 80%)`
            }}
          />
        )}

        {/* Holographic Border Glow */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none rounded-2xl z-20 border-[1.5px] opacity-60 transition-opacity duration-300"
            style={{
              borderColor: 'transparent',
              background: `radial-gradient(circle 200px at ${glareX}% ${glareY}%, rgba(45, 212, 191, 0.8), rgba(219, 39, 119, 0.4) 50%, transparent) border-box`,
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />
        )}

        {/* Image Container - Larger & Responsive */}
        <div 
          className="relative aspect-[16/10] overflow-hidden w-full"
          style={{ transform: 'translateZ(20px)' }}
        >
          <img
            src={customPhotos[id] || image}
            srcSet={getResponsiveSrcSet(customPhotos[id] || image)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80';
              e.target.srcset = '';
            }}
          />
          
          {/* Soft Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-95" />

          {/* Region Tag & Modern Badges */}
          <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap max-w-[80%] items-center z-20">
            <span className="px-2.5 py-1 text-[8.5px] font-bold font-mono tracking-wide uppercase bg-slate-950/80 border border-teal-500/20 text-teal-400 rounded-full backdrop-blur-md">
              {region}
            </span>
            {rating >= 4.7 && (
              <span className="px-2.5 py-1 text-[8.5px] font-bold font-mono uppercase bg-indigo-950/90 border border-indigo-500/30 text-indigo-300 backdrop-blur-md rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <Sparkles size={9} className="text-indigo-400 animate-pulse" /> AI Recommended
              </span>
            )}
            <span className="px-2.5 py-1 text-[8.5px] font-bold font-mono uppercase bg-slate-950/80 border border-emerald-500/20 text-emerald-400 backdrop-blur-md rounded-full flex items-center gap-1">
              ✓ Verified
            </span>
          </div>

          {/* Quick-Action Controls (Top-Right Icons) */}
          <div className="absolute top-4 right-4 flex gap-1.5 z-20">
            {/* Bookmark Button */}
            <motion.button
              onClick={handleBookmarkToggle}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full border shadow-sm transition-all duration-300 backdrop-blur-md ${
                isBookmarked
                  ? 'bg-teal-500/90 border-teal-400 text-slate-950'
                  : 'bg-slate-950/60 border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <Bookmark size={14} fill={isBookmarked ? 'currentColor' : 'none'} className="transition-colors duration-200" />
            </motion.button>

            {/* Favorite Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist('destinations', destination);
              }}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full border shadow-sm transition-all duration-300 backdrop-blur-md ${
                isWishlisted
                  ? 'bg-rose-500/90 border-rose-450 text-white'
                  : 'bg-slate-950/60 border-white/10 text-slate-300 hover:text-rose-400'
              }`}
            >
              <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} className="transition-colors duration-200" />
            </motion.button>
          </div>

          {/* Premium Hover Actions Overlay (Buttons Appear) */}
          <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 z-10">
            <motion.button
              onClick={handleQuickViewClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2.5 rounded-xl bg-teal-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg cursor-pointer"
            >
              <Eye size={12} />
              Quick Preview
            </motion.button>
            <motion.button
              onClick={handleCompareToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg cursor-pointer ${
                isCompared
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-900 border border-white/10 text-white hover:bg-slate-800'
              }`}
            >
              Compare
            </motion.button>
          </div>

          {/* Price Tag Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
            <div className="flex items-center gap-1 text-white">
              <MapPin size={14} className="text-teal-400" />
              <span className="text-xs font-semibold drop-shadow-md">{country}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8.5px] text-teal-300 uppercase tracking-widest font-bold font-mono">Starts at</span>
              <span className="text-lg font-black text-white leading-none">₹{price.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div 
          className="p-6 flex-1 flex flex-col justify-between"
          style={{ transform: 'translateZ(10px)' }}
        >
          <div>
            {/* Header / Title & Star Rating */}
            <div className="flex justify-between items-start gap-2 mb-2">
              <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-1">
                {name}
              </h3>
              <div className="flex items-center gap-1 shrink-0 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-lg border border-slate-200/50 dark:border-white/5">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{rating}</span>
                <span className="text-[9px] text-slate-400 font-mono">({reviewsCount})</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              {description}
            </p>

            {/* Season & Duration Metadata */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-4 border-y border-slate-100 dark:border-white/5 py-2.5">
              <div className="flex items-center gap-1">☀️ <span className="font-bold text-slate-800 dark:text-slate-200">{season}</span></div>
              <div className="flex items-center gap-1">⏳ <span className="font-bold text-slate-800 dark:text-slate-205">{duration}</span></div>
            </div>

            {/* Badges / Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-teal-50 dark:bg-teal-950/20 text-teal-700 dark:text-teal-300 border border-teal-100/50 dark:border-teal-900/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-4 mt-auto">
            <div className="flex justify-between items-center text-[10px]">
              <label className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  onClick={(e) => e.stopPropagation()} 
                  checked={isCompared}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setIsCompared(checked);
                    if (checked) {
                      showToast(`${name} added to comparison matrix.`, 'success');
                    } else {
                      showToast(`${name} removed from comparison matrix.`, 'info');
                    }
                  }}
                  className="rounded text-teal-500 focus:ring-teal-500 bg-slate-950 border-white/5 w-3 h-3" 
                />
                <span>Compare Sector</span>
              </label>
              <span className="text-slate-455 font-mono text-[9px] uppercase">{region}</span>
            </div>

            {/* CTAs */}
            <div className="flex justify-between items-center gap-4">
              <Link
                to={`/destination/${id}`}
                className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 hover:underline group-hover:gap-2 transition-all duration-300"
              >
                Explore Dossier
                <ArrowRight size={14} />
              </Link>
              <Link
                to={`/planner?destination=${name}`}
                className="px-4 py-2 text-xs font-mono font-bold uppercase rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-md"
              >
                Plan Itinerary
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Quick View Modal Overlay rendered via React Portal */}
      {createPortal(
        <AnimatePresence>
          {showQuickView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuickView(false)}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 relative flex flex-col gap-4 text-left cursor-default"
              >
                <button
                  onClick={() => setShowQuickView(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800 transition-colors cursor-pointer z-10"
                >
                  <X size={16} />
                </button>
                
                <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/5 bg-slate-950/40 flex items-center justify-center">
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-10">
                      <div className="w-8 h-8 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
                    </div>
                  )}
                  <img
                    src={customPhotos[id] || image}
                    alt={name}
                    className="w-full h-full object-cover"
                    onLoad={() => {
                      if (isMounted.current) {
                        setIsImageLoading(false);
                      }
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80';
                      if (isMounted.current) {
                        setIsImageLoading(false);
                      }
                    }}
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                    <span className="text-amber-500 font-bold flex items-center gap-1">
                      ★ {rating} <span className="text-xs text-slate-400 font-normal font-mono">({reviewsCount})</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-slate-350 font-mono bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  <div>Region: <span className="text-teal-400 font-bold">{region}</span></div>
                  <div>Country: <span className="text-teal-400 font-bold">{country}</span></div>
                  <div>Best Season: <span className="text-teal-400 font-bold">{season}</span></div>
                  <div>Duration: <span className="text-teal-400 font-bold">{duration}</span></div>
                </div>

                <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-4">
                  <span className="text-lg font-black text-white">₹{price.toLocaleString('en-IN')}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowQuickView(false)}
                      className="px-4 py-2 border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Close
                    </button>
                    <Link
                      to={`/destination/${id}`}
                      onClick={() => setShowQuickView(false)}
                      className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-xl text-xs font-bold transition-all"
                    >
                      Go to Dossier
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
});
