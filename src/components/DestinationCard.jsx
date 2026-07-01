import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DestinationCard = ({ destination }) => {
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

  return (
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
        y: isHovered ? -10 : 0,
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(45, 212, 191, 0.15)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/40 bg-white dark:bg-slate-900/50 transition-all duration-300 select-none border-gradient-glow"
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

      {/* Image Container */}
      <div 
        className="relative h-56 overflow-hidden w-full"
        style={{ transform: 'translateZ(20px)' }}
      >
        <img
          src={customPhotos[id] || image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-85" />

        {/* Region Tag */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap max-w-[80%] items-center">
          <span className="px-3 py-1 text-[10px] font-semibold tracking-wide uppercase bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 rounded-full shadow-sm">
            {region}
          </span>
          <span className="px-2.5 py-1 text-[8px] font-bold font-mono uppercase bg-emerald-500/85 text-white backdrop-blur-sm rounded-full shadow-sm flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-white animate-pulse" /> Sourced Live Data
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist('destinations', destination);
          }}
          className={`absolute top-4 right-4 p-2.5 rounded-full glass border shadow-sm transition-all duration-300 transform active:scale-90 z-40 ${
            isWishlisted
              ? 'bg-rose-50 border-rose-200 text-rose-500 dark:bg-rose-950/80 dark:border-rose-800'
              : 'text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400'
          }`}
        >
          <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} className="transition-colors duration-200" />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
          <div className="flex items-center gap-1 text-white">
            <MapPin size={14} className="text-teal-400" />
            <span className="text-xs font-semibold drop-shadow-md">{country}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-teal-300 uppercase tracking-widest font-bold">Starts at</span>
            <span className="text-lg font-bold text-white leading-none">₹{price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div 
        className="p-5 flex-1 flex flex-col justify-between"
        style={{ transform: 'translateZ(10px)' }}
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star size={14} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{rating}</span>
              <span className="text-[10px] text-slate-400">({reviewsCount})</span>
            </div>
          </div>

          <p className="text-xs text-slate-650 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed">
            {description}
          </p>

          {/* Season & Duration Metadata */}
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-405 mb-3 border-y border-slate-105/80 dark:border-slate-800/40 py-2">
            <div className="flex items-center gap-1">☀️ <span className="font-bold text-slate-800 dark:text-slate-205">{season}</span></div>
            <div className="flex items-center gap-1">⏳ <span className="font-bold text-slate-800 dark:text-slate-205">{duration}</span></div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-teal-50 dark:bg-teal-950/35 text-teal-700 dark:text-teal-300 border border-teal-100/50 dark:border-teal-900/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-3 mt-auto">
          <div className="flex justify-between items-center text-[10px]">
            <label className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 cursor-pointer select-none">
              <input 
                type="checkbox" 
                onClick={(e) => e.stopPropagation()} 
                onChange={(e) => {
                  if (e.target.checked) {
                    showToast(`${name} added to comparison matrix.`, 'success');
                  } else {
                    showToast(`${name} removed from comparison matrix.`, 'info');
                  }
                }}
                className="rounded text-teal-500 focus:ring-teal-500 bg-slate-950 border-white/5 w-3 h-3" 
              />
              <span>Compare Sector</span>
            </label>
            <span className="text-slate-400 font-mono text-[9px] uppercase">{region}</span>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to={`/destination/${id}`}
              className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
            >
              Explore Dossier
              <ArrowRight size={14} />
            </Link>
            <Link
              to={`/planner?destination=${name}`}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-teal-600 dark:hover:bg-teal-400 hover:text-white dark:hover:text-slate-900 transition-all duration-200 btn-press-spring cursor-pointer"
            >
              Plan Itinerary
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
