import React, { useState, useEffect } from 'react';
import { FuturisticGlobe } from '../components/FuturisticGlobe';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { 
  Globe, Compass, Plane, Shield, Sun, Eye, MapPin, 
  Wind, CloudRain, ShieldCheck, HelpCircle, Activity, ChevronRight 
} from 'lucide-react';

export const EarthEngine = () => {
  const { departureHub, showToast } = useApp();
  const [selectedDest, setSelectedDest] = useState(mockDestinations[0]);
  const [telemetryLayer, setTelemetryLayer] = useState('atmosphere');
  const [satelliteConnection, setSatelliteConnection] = useState('HIGH_STABILITY');
  const [atmosphericStats, setAtmosphericStats] = useState({
    airQuality: 'Optimal (AQI: 24)',
    pollenLevel: 'Low',
    uvIndex: '4 (Moderate)',
    humidity: '62%'
  });

  const handleGlobeSelect = (destination) => {
    setSelectedDest(destination);
    // Simulate updating weather stats dynamically based on destination
    setAtmosphericStats({
      airQuality: `${15 + Math.floor(Math.random() * 60)} (Healthy)`,
      pollenLevel: Math.random() > 0.5 ? 'Low' : 'Moderate',
      uvIndex: `${3 + Math.floor(Math.random() * 8)} (${Math.random() > 0.5 ? 'Moderate' : 'High'})`,
      humidity: `${40 + Math.floor(Math.random() * 50)}%`
    });
    showToast(`Locked orbital coordinates for ${destination.name}.`, 'success');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const connections = ['HIGH_STABILITY', 'OPTIMIZED_SAT_7', 'CALIBRATING_GRID', 'ATMOSPHERE_BOUNCED'];
      setSatelliteConnection(connections[Math.floor(Math.random() * connections.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* HUD Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          SYSTEM SCANNER ORBITAL CONTROL
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Living Earth Engine
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl">
          Interact with the live 3D Earth, toggle atmospheric overlays, inspect localized travel indices, and chart zero-fatigue travel corridors.
        </p>
      </div>

      {/* Main Grid split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Globe viewport & overlays */}
        <div className="lg:col-span-8 p-5 rounded-3xl bg-slate-950 border border-white/10 flex flex-col justify-between min-h-[580px] relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20 z-0" />
          
          {/* Controls & Connection Status */}
          <div className="w-full flex justify-between items-center z-10 font-mono text-[9px] border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Activity className="text-teal-400 animate-pulse" size={13} />
              <span>EARTH_ENGINE_V2200 // ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SAT_LINK: {satelliteConnection}</span>
            </div>
          </div>

          {/* Interactive Globe Container */}
          <div className="w-full h-[400px] relative z-10 flex items-center justify-center">
            <FuturisticGlobe onSelectDestination={handleGlobeSelect} />
          </div>

          {/* Atmospheric controls */}
          <div className="w-full z-10 font-mono text-[9px] pt-4 border-t border-white/5 flex flex-col gap-2">
            <span className="text-[8px] text-slate-500 font-black uppercase tracking-widest">
              Calibrate Satellite Overlays
            </span>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => { setTelemetryLayer('atmosphere'); showToast('Rendered Atmosphere matrix.', 'info'); }}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  telemetryLayer === 'atmosphere' 
                    ? 'bg-teal-500 border-teal-400 text-slate-950 font-bold' 
                    : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                ☁️ CLOUDS & COLD FRONT
              </button>
              <button
                onClick={() => { setTelemetryLayer('aurora'); showToast('Aurora electromagnetic track mapped.', 'info'); }}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  telemetryLayer === 'aurora' 
                    ? 'bg-teal-500 border-teal-400 text-slate-950 font-bold' 
                    : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                🌌 SOLAR AURORA FIELDS
              </button>
              <button
                onClick={() => { setTelemetryLayer('ocean'); showToast('Ocean thermocline flow activated.', 'info'); }}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  telemetryLayer === 'ocean' 
                    ? 'bg-teal-500 border-teal-400 text-slate-950 font-bold' 
                    : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                🌊 MONSOON CURRENTS
              </button>
              <button
                onClick={() => { setTelemetryLayer('density'); showToast('Tourism congestion telemetry loaded.', 'warn'); }}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  telemetryLayer === 'density' 
                    ? 'bg-teal-500 border-teal-400 text-slate-950 font-bold' 
                    : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                🔥 TOURIST DENSITIES
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Destination information and Weather metrics */}
        <div className="lg:col-span-4 flex flex-col gap-6 items-stretch">
          
          {/* Destination Details Card */}
          {selectedDest ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-4 text-left">
              <div>
                <span className="text-[9px] text-teal-400 font-bold uppercase tracking-widest font-mono">
                  Locked Target Node
                </span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mt-0.5">
                  {selectedDest.name}
                </h3>
                <span className="text-xs text-slate-400 font-semibold">
                  {selectedDest.country} • Regional Station
                </span>
              </div>

              <img 
                src={selectedDest.image} 
                alt={selectedDest.name} 
                className="w-full h-36 object-cover rounded-2xl border border-slate-200 dark:border-white/5"
              />

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                {selectedDest.description}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[9.5px]">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-white/5">
                  <span className="text-slate-400 block text-[7px] uppercase font-black">Index Fare</span>
                  <span className="text-slate-800 dark:text-white font-bold">₹{selectedDest.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-white/5">
                  <span className="text-slate-400 block text-[7px] uppercase font-black">Acclimatization</span>
                  <span className="text-teal-500 dark:text-teal-400 font-bold">Optimal</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 text-center text-slate-400 flex items-center justify-center min-h-[300px]">
              Tap a destination coordinate on the globe to map telemetry parameters.
            </div>
          )}

          {/* Environmental Intelligence Metrics */}
          <div className="p-6 rounded-3xl bg-slate-900/60 dark:bg-slate-950/80 border border-slate-800 text-white flex flex-col gap-4">
            <h4 className="font-display font-black text-sm text-teal-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
              <Wind size={15} /> Environmental Intelligence
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold font-mono">
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase font-black">Air Quality Index</span>
                <span className="text-slate-200 mt-0.5">{atmosphericStats.airQuality}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase font-black">Pollen levels</span>
                <span className="text-slate-200 mt-0.5">{atmosphericStats.pollenLevel}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase font-black">UV Radiation Index</span>
                <span className="text-slate-200 mt-0.5">{atmosphericStats.uvIndex}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase font-black">Barycentric Humidity</span>
                <span className="text-slate-200 mt-0.5">{atmosphericStats.humidity}</span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-3.5 flex items-start gap-2.5 font-mono text-[9px] text-slate-450 leading-relaxed text-left">
              <ShieldCheck className="text-emerald-400 shrink-0 mt-0.5" size={13} />
              <span>
                Safety, weather indices, and crowd advisory levels are synced in real-time with Indian Meteorological systems.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
