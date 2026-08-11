import React, { useState, useRef, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, MapPin, ArrowRight, Sparkles, Bookmark, Eye, X, Sun, Clock, DollarSign } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getResponsiveSrcSet } from '../utils/responsiveImages';

export const DestinationCard = memo(({ destination }) => {
  const { isInWishlist, toggleWishlist, customPhotos, showToast } = useApp();
  const { id, name, image, region, country, rating, reviewsCount, price, tags, description } = destination;
  const isWishlisted = isInWishlist('destinations', id);

  // Compute cinematic details: AI Match, score, weather & duration
  const getCinematicDetails = (targetId, baseRating, basePrice) => {
    // Derive match score and destination score
    const matchScore = Math.min(100, Math.round(baseRating * 20)); // e.g. 4.9 -> 98%
    const destScore = (baseRating * 2).toFixed(1); // e.g. 4.9 -> 9.8

    let weatherText = '☀️ 24°C';
    let durationText = '4-5 Days';

    switch (targetId) {
      case 'dest-goa':
        weatherText = '🌴 28°C'; durationText = '4 Days'; break;
      case 'dest-jaipur':
        weatherText = '🕌 31°C'; durationText = '3 Days'; break;
      case 'dest-delhi':
        weatherText = '🏙️ 24°C'; durationText = '3 Days'; break;
      case 'dest-agra':
        weatherText = '🏛️ 27°C'; durationText = '2 Days'; break;
      case 'dest-leh':
        weatherText = '❄️ 12°C'; durationText = '8 Days'; break;
      case 'dest-kerala':
        weatherText = '🌿 26°C'; durationText = '6 Days'; break;
      case 'dest-varanasi':
        weatherText = '🕉️ 30°C'; durationText = '3 Days'; break;
      default:
        weatherText = '☀️ 24°C'; durationText = '5 Days'; break;
    }

    return {
      matchScore,
      destScore,
      weatherText,
      durationText,
      budgetFormatted: `₹${basePrice.toLocaleString('en-IN')}`
    };
  };

  const { matchScore, destScore, weatherText, durationText, budgetFormatted } = getCinematicDetails(id, rating, price);

  // 3D Tilt coordinates
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
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
    const w = rect.width;
    const h = rect.height;
    const mouseX = (e.clientX - rect.left) / w - 0.5;
    const mouseY = (e.clientY - rect.top) / h - 0.5;

    setRotateX(-mouseY * 12);
    setRotateY(mouseX * 12);
    setGlareX(((e.clientX - rect.left) / w) * 100);
    setGlareY(((e.clientY - rect.top) / h) * 100);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleBookmarkToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(prev => {
      const next = !prev;
      showToast(`${name} ${next ? 'bookmarked' : 'unbookmarked'}.`, 'success');
      return next;
    });
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          y: isHovered ? -10 : 0
        }}
        className="group relative w-full h-[470px] rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-white/5 bg-slate-950 transition-shadow duration-500 shadow-2xl select-none"
      >
        {/* Full Image Background (Cinematic Large Photography) */}
        <div className="absolute inset-0 z-0">
          <img
            src={customPhotos[id] || image}
            srcSet={getResponsiveSrcSet(customPhotos[id] || image)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
            loading="lazy"
          />
          {/* Layered cinematic gradient shadow mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent z-10" />
        </div>

        {/* Glare Reflection Light */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 opacity-20"
            style={{
              background: `radial-gradient(circle 220px at ${glareX}% ${glareY}%, rgba(255,255,255,0.8), transparent 80%)`
            }}
          />
        )}

        {/* Floating Top HUD */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-25">
          {/* Match Score Badge */}
          <div className="flex gap-2">
            <span className="px-3 py-1 text-[8px] font-mono font-bold tracking-wider uppercase rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              ✨ {matchScore}% MATCH
            </span>
            <span className="px-3 py-1 text-[8px] font-mono font-bold uppercase rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 backdrop-blur-md">
              ★ {destScore} SCORE
            </span>
          </div>

          {/* Frosted Action Controllers */}
          <div className="flex gap-2">
            <motion.button
              onClick={handleBookmarkToggle}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full border backdrop-blur-md transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-teal-500/90 border-teal-400 text-slate-950'
                  : 'bg-slate-950/60 border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <Bookmark size={12} fill={isBookmarked ? 'currentColor' : 'none'} />
            </motion.button>
            <motion.button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist('destinations', destination); }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full border backdrop-blur-md transition-all cursor-pointer ${
                isWishlisted
                  ? 'bg-rose-500/90 border-rose-450 text-white'
                  : 'bg-slate-950/60 border-white/10 text-slate-300 hover:text-rose-400'
              }`}
            >
              <Heart size={12} fill={isWishlisted ? 'currentColor' : 'none'} />
            </motion.button>
          </div>
        </div>

        {/* Sliding Apple Glass Card overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-25 bg-slate-950/75 backdrop-blur-lg border-t border-white/10 rounded-t-[28px] transform translate-y-0 lg:translate-y-[140px] lg:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-4 text-left">
          
          {/* Header metadata row */}
          <div>
            <div className="flex justify-between items-start gap-1">
              <div>
                <span className="text-[8px] font-mono text-teal-400 font-bold uppercase tracking-wider">{region}</span>
                <h3 className="text-base font-display font-black text-white leading-tight mt-0.5">{name}</h3>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-mono">
                  <MapPin size={10} className="text-teal-400 shrink-0" />
                  <span>{country}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[7.5px] text-slate-500 uppercase tracking-widest font-mono block">Starts at</span>
                <span className="text-base font-black text-teal-400 font-mono">{budgetFormatted}</span>
              </div>
            </div>
          </div>

          {/* Description & Tags (Shown clearly when sliding up) */}
          <div className="flex flex-col gap-3 border-t border-white/5 pt-3.5">
            <p className="text-[11px] text-slate-350 leading-relaxed line-clamp-3">
              {description}
            </p>
            
            {/* Quick Metrics display */}
            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono text-slate-400 bg-slate-950/50 p-2.5 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5">
                <Sun size={11} className="text-amber-400 shrink-0" />
                <span>{weatherText}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={11} className="text-teal-400 shrink-0" />
                <span>{durationText}</span>
              </div>
            </div>

            {/* Tags list */}
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[8.5px] uppercase font-mono text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive buttons */}
          <div className="grid grid-cols-2 gap-2.5 border-t border-white/5 pt-3 mt-auto">
            <button
              onClick={handleQuickViewClick}
              className="h-11 rounded-xl border border-white/10 text-white font-bold text-[9.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors hover:bg-white/5 cursor-pointer"
            >
              <Eye size={12} />
              Quick Preview
            </button>
            <Link
              to={`/destination/${id}`}
              className="h-11 rounded-xl bg-teal-500 text-slate-950 font-bold text-[9.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(45,212,191,0.2)]"
            >
              Dossier File
              <ArrowRight size={12} />
            </Link>
          </div>

        </div>
      </motion.div>

      {/* Quick View Portal overlay */}
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
                  className="absolute top-4 right-4 text-slate-400 hover:text-white w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 transition-colors cursor-pointer z-10 p-0"
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
                    onLoad={() => { if (isMounted.current) setIsImageLoading(false); }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80';
                      if (isMounted.current) setIsImageLoading(false);
                    }}
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                    <span className="text-teal-400 font-bold flex items-center gap-1.5 font-mono text-xs">
                      ★ {destScore} SCORE
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-slate-350 font-mono bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  <div>Region: <span className="text-teal-400 font-bold">{region}</span></div>
                  <div>Country: <span className="text-teal-400 font-bold">{country}</span></div>
                  <div>Weather Index: <span className="text-teal-400 font-bold">{weatherText}</span></div>
                  <div>Ideal Duration: <span className="text-teal-400 font-bold">{durationText}</span></div>
                  <div>AI Match Rating: <span className="text-emerald-400 font-bold">{matchScore}% MATCH</span></div>
                </div>

                <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-4">
                  <span className="text-lg font-black text-white font-mono">{budgetFormatted}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowQuickView(false)}
                      className="px-4 h-11 flex items-center justify-center border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Close
                    </button>
                    <Link
                      to={`/destination/${id}`}
                      onClick={() => setShowQuickView(false)}
                      className="px-4 h-11 flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-xl text-xs font-bold transition-all"
                    >
                      Explore Dossier
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
