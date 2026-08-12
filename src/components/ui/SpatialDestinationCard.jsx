import React, { useState, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, MapPin, ArrowRight, Eye, X, Sun, Clock, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getDestinationImage } from '../../data/imageRegistry';
import Badge from './Badge';

export const SpatialDestinationCard = memo(({ destination }) => {
  const { isInWishlist, toggleWishlist, customPhotos, showToast } = useApp();
  const { id, name, region, country, rating, price, tags, description } = destination;

  // Authoritative ID-based image resolution
  const finalImage = getDestinationImage(id, customPhotos);
  const isWishlisted = isInWishlist('destinations', id);

  const matchScore = Math.min(100, Math.round((rating || 4.8) * 20));
  const budgetFormatted = `₹${(price || 40000).toLocaleString('en-IN')}`;

  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-mouseY * 10);
    setRotateY(mouseX * 10);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          y: isHovered ? -8 : 0
        }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="group relative w-full h-[460px] rounded-[32px] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl select-none"
      >
        {/* Full Cinematic Image Background */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <img
            src={finalImage}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out opacity-85"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
        </div>

        {/* Top HUD Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
          <div className="flex gap-2">
            <Badge variant="emerald" icon={Sparkles}>
              {matchScore}% MATCH
            </Badge>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist('destinations', destination);
            }}
            className={`p-2.5 rounded-full border backdrop-blur-md transition-all cursor-pointer ${
              isWishlisted
                ? 'bg-rose-500 border-rose-400 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                : 'bg-slate-950/60 border-white/15 text-slate-300 hover:text-white'
            }`}
          >
            <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Glass Content Overlay Card */}
        <div className="absolute bottom-0 inset-x-0 p-5 z-20 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 rounded-t-[28px] flex flex-col gap-3.5 text-left transform translate-y-0 lg:translate-y-[135px] lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
          
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[9px] font-mono text-teal-400 font-bold uppercase tracking-widest block">{region}</span>
              <h3 className="text-lg font-display font-black text-white leading-tight mt-0.5">{name}</h3>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono mt-0.5">
                <MapPin size={11} className="text-teal-400 shrink-0" />
                <span>{country}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[8px] text-slate-500 uppercase tracking-widest font-mono block">Starts at</span>
              <span className="text-base font-black text-teal-400 font-mono">{budgetFormatted}</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
            {(tags || []).slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[8.5px] uppercase font-mono text-slate-400">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/5">
            <button
              onClick={() => setShowQuickView(true)}
              className="h-10 rounded-xl border border-white/15 text-slate-200 hover:text-white font-mono font-bold text-[9.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <Eye size={12} />
              Quick Peek
            </button>
            <Link
              to={`/destination/${id}`}
              className="h-10 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-mono font-bold text-[9.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(45,212,191,0.2)]"
            >
              Dossier
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Quick View Portal */}
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 relative flex flex-col gap-4 text-left cursor-default"
              >
                <button
                  onClick={() => setShowQuickView(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 transition-colors cursor-pointer z-10"
                >
                  <X size={16} />
                </button>

                <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                  <img src={finalImage} alt={name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{name}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{description}</p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300 font-mono bg-slate-950/50 p-3 rounded-xl border border-white/5">
                  <div>Region: <span className="text-teal-400 font-bold">{region}</span></div>
                  <div>Country: <span className="text-teal-400 font-bold">{country}</span></div>
                  <div>Starts At: <span className="text-teal-400 font-bold">{budgetFormatted}</span></div>
                  <div>Match: <span className="text-emerald-400 font-bold">{matchScore}%</span></div>
                </div>

                <div className="flex justify-end gap-2 mt-2 pt-3 border-t border-white/5">
                  <Link
                    to={`/destination/${id}`}
                    onClick={() => setShowQuickView(false)}
                    className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-mono font-bold text-xs rounded-xl transition-all"
                  >
                    Open Destination Dossier
                  </Link>
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

export default SpatialDestinationCard;
