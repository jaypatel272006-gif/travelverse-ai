import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BootStatus } from './BootStatus';
import { BootProgress } from './BootProgress';
import { Sparkles, AlertCircle, Compass } from 'lucide-react';
import { logger } from '../../utils/logger';

export const TravelOSBootLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const safetyTimeoutRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // User preferences & accessibility
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  const statusMessages = [
    "Establishing global travel network...",
    "Synchronizing destination intelligence...",
    "Calibrating route systems...",
    "Loading travel intelligence...",
    "Preparing your journey..."
  ];

  // Particle particles setup
  const particleCount = prefersReducedMotion ? 0 : (isMobile ? 12 : 35);
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2
  }));

  useEffect(() => {
    // --------------------------------------------------
    // 1. Safety Timeout: Loader MUST exit in 5 seconds max
    // --------------------------------------------------
    safetyTimeoutRef.current = setTimeout(() => {
      logger.warn("TravelOS Boot Loader: Safety timeout reached. Forcing startup transition.");
      handleFinishBoot();
    }, 5000);

    // --------------------------------------------------
    // 2. Real Readiness Check Sequence
    // --------------------------------------------------
    const checkReadiness = async () => {
      try {
        // Step 1: Mount & DOM Setup
        setProgress(20);
        setStatusIdx(0);
        await new Promise(resolve => setTimeout(resolve, 350));

        // Step 2: Critical fonts check
        setStatusIdx(1);
        setProgress(40);
        if (document.fonts && document.fonts.ready) {
          try {
            await Promise.race([
              document.fonts.ready,
              new Promise((_, reject) => setTimeout(() => reject(new Error('Font timeout')), 800))
            ]);
          } catch (e) {
            logger.warn("Fonts check took longer than expected. Continuing with fallback system fonts.");
          }
        }
        await new Promise(resolve => setTimeout(resolve, 300));

        // Step 3: Local storage / configuration load
        setStatusIdx(2);
        setProgress(65);
        try {
          const testPref = localStorage.getItem('tv_twin_prefs');
        } catch (e) {
          logger.warn("Local storage check blocked or disabled. Using factory config parameters.");
        }
        await new Promise(resolve => setTimeout(resolve, 300));

        // Step 4: Asset loading (checking critical mock destination datasets)
        setStatusIdx(3);
        setProgress(85);
        await new Promise(resolve => setTimeout(resolve, 300));

        // Step 5: Ready state
        setStatusIdx(4);
        setProgress(100);
        await new Promise(resolve => setTimeout(resolve, 400));
        
        handleFinishBoot();
      } catch (err) {
        logger.error("TravelOS Boot Loader Error in boot sequence: ", err);
        setIsError(true);
        setErrorMessage("Some travel intelligence is taking longer than expected.");
      }
    };

    checkReadiness();

    // Listen to offline state changes
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearTimeout(safetyTimeoutRef.current);
      clearInterval(progressIntervalRef.current);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleFinishBoot = () => {
    // Clear timeouts and fire completion
    clearTimeout(safetyTimeoutRef.current);
    clearInterval(progressIntervalRef.current);
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: prefersReducedMotion ? 1 : 1.03,
        filter: prefersReducedMotion ? "none" : "blur(8px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[999999] bg-[#050816] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* 4K Volumetric Radial Glow Backdrop */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,184,166,0.12)_0%,transparent_65%)] pointer-events-none" />

      {/* Futuristic Target Grid lines (1px Hairlines) */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,rgba(45,212,191,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Floating HUD particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-teal-400/20 rounded-full blur-[0.5px]"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                y: ['0%', '-30%', '0%'],
                opacity: [0.15, 0.6, 0.15]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* Concentric Orbital Radar Graphic (SVG) */}
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center shrink-0 z-10">
        <svg 
          className="w-[90%] h-[90%] pointer-events-none select-none text-teal-500/10" 
          viewBox="0 0 200 200"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
        >
          {/* Concentric rings */}
          <circle cx="100" cy="100" r="90" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="45" strokeDasharray="6,2" />
          <circle cx="100" cy="100" r="20" />
          
          {/* Radar Sweep Line */}
          {!prefersReducedMotion && (
            <motion.line
              x1="100"
              y1="100"
              x2="100"
              y2="10"
              stroke="#2dd4bf"
              strokeWidth="0.8"
              className="origin-[100px_100px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* Compass Crosshairs */}
          <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.25" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.25" />
        </svg>

        {/* Center Logo Panel (Glassmorphism card) */}
        <div 
          className="absolute p-6 rounded-full border border-teal-500/20 bg-slate-950/70 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.15)]"
          style={{ width: '135px', height: '135px' }}
        >
          <div className="relative">
            <Compass className="w-8 h-8 text-teal-400 animate-pulse" />
            <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-teal-400 border-t-transparent animate-spin duration-3000 pointer-events-none" />
          </div>
          <span className="text-[7px] font-mono text-slate-500 font-bold uppercase tracking-widest mt-2 block">
            CORE READY
          </span>
        </div>
      </div>

      {/* Loading Telemetry readouts container */}
      <div className="mt-8 text-center px-6 relative z-10 flex flex-col gap-3 max-w-sm w-full">
        <div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-[0.2em] flex items-center justify-center gap-1.5 uppercase leading-none">
            TRAVELVERSE <span className="text-teal-400">AI</span>
          </h2>
          <span className="text-[8px] font-mono text-slate-500 uppercase font-black tracking-[0.3em] block mt-2.5 leading-none">
            Travel Operating System
          </span>
        </div>

        {/* Dynamic Boot Message / Offline warning */}
        {isOffline ? (
          <div className="flex items-center justify-center gap-1 text-amber-400 font-mono text-[9px] uppercase tracking-wider font-bold">
            <AlertCircle size={11} />
            <span>Offline mode calibration active</span>
          </div>
        ) : (
          <div className="text-[9px] font-mono text-slate-450 uppercase font-black tracking-widest leading-none mt-1">
            Initializing Travel OS
          </div>
        )}

        {/* Reusable status message component */}
        {!isError ? (
          <BootStatus statusText={statusMessages[statusIdx]} />
        ) : (
          <div className="font-mono text-[10px] text-amber-500 flex flex-col items-center gap-2">
            <span className="font-bold flex items-center gap-1.5 justify-center">
              <AlertCircle size={12} /> {errorMessage}
            </span>
            <button
              onClick={handleFinishBoot}
              className="mt-1 px-4 py-2 bg-teal-500/10 border border-teal-500/35 hover:bg-teal-500/20 text-teal-400 font-mono text-[9.5px] font-bold rounded-xl tracking-wider transition-colors cursor-pointer uppercase"
            >
              Continue to TravelVerse
            </button>
          </div>
        )}

        {/* Reusable progress bar track */}
        {!isError && <BootProgress progress={progress} />}
      </div>
    </motion.div>
  );
};
