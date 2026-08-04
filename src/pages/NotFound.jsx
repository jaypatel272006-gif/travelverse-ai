import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ShieldAlert, Home, CornerDownRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="py-12 px-4 text-left flex flex-col items-center justify-center min-h-[75vh] w-full relative overflow-hidden select-none">
      {/* Decorative radar lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#14b8a6_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg p-8 sm:p-10 rounded-[32px] bg-slate-900/60 backdrop-blur-xl border border-rose-500/20 shadow-2xl flex flex-col gap-6 text-center relative z-10"
      >
        {/* Floating Reticle Graphic */}
        <div className="flex justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full border border-rose-500/30 animate-ping duration-[3000ms]" />
            <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center text-rose-500">
              <ShieldAlert size={28} className="animate-pulse" />
            </div>
            
            {/* Tech Corner ticks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-rose-400/40" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-rose-400/40" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-rose-400/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-rose-400/40" />
          </div>
        </div>

        {/* Telemetry dossier */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-[0.2em] leading-none">
            TELEMETRY FAULT // SIGNAL_LOST
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide mt-2">
            Cosmic Coordinates Invalid
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto mt-1 font-semibold">
            TravelVerse navigation systems have detected an off-grid sector. The coordinates you requested do not map to our physical galaxy database.
          </p>
        </div>

        {/* Data readout */}
        <div className="w-full bg-slate-950/80 border border-slate-800 p-4 rounded-xl text-left font-mono text-[10px] text-slate-400 flex flex-col gap-1 shadow-inner">
          <div className="flex justify-between border-b border-slate-900 pb-1">
            <span className="text-slate-500">ERROR_CODE:</span>
            <span className="text-rose-400 font-bold">404_PAGE_NOT_FOUND</span>
          </div>
          <div className="flex justify-between border-b border-slate-900 py-1">
            <span className="text-slate-500">SECTOR_LAT:</span>
            <span className="text-slate-300">0.000000000_N</span>
          </div>
          <div className="flex justify-between border-b border-slate-900 py-1">
            <span className="text-slate-500">SECTOR_LON:</span>
            <span className="text-slate-300">0.000000000_E</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-slate-500">STATUS:</span>
            <span className="text-rose-400 font-bold animate-pulse">OFF_GRID</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
          <Link
            to="/"
            className="flex-1 py-3 px-4 rounded-xl border border-slate-800 hover:bg-slate-800/80 font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-slate-200"
          >
            <Home size={13} />
            System Home
          </Link>
          <Link
            to="/dashboard"
            className="flex-1 py-3 px-4 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-teal-500/20"
          >
            <Compass size={13} className="animate-spin duration-[10s]" />
            Return to OS Cockpit
          </Link>
        </div>

        {/* Dynamic breadcrumb suggestion */}
        <div className="flex justify-center items-center gap-1.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
          <CornerDownRight size={10} className="text-teal-400" />
          <span>Restoring auto-pilot failover routing</span>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
