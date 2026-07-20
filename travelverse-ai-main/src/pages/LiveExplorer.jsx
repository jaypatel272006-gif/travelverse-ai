import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sun, Moon, ShieldAlert, AlertTriangle, Compass, 
  MapPin, Clock, Radio, Activity, RefreshCw 
} from 'lucide-react';

const HOTSPOTS = [
  {
    name: 'Leh-Ladakh',
    region: 'North India',
    timezone: 'IST (UTC+5:30)',
    altitude: '11,500 ft',
    advisory: 'AMS Risk: Minimum 36 hours rest required on arrival.',
    status: 'night',
    weather: 'Clear (-2°C)',
    news: 'EV Charging corridors cleared over Khardung La.'
  },
  {
    name: 'Goa Coastline',
    region: 'West India',
    timezone: 'IST (UTC+5:30)',
    altitude: 'Sea level',
    advisory: 'Monsoon Alert: High wave heights registered at Anjuna beaches.',
    status: 'day',
    weather: 'Rainy (28°C)',
    news: 'Eco resorts reporting 98% occupancy for monsoon wellness retreats.'
  },
  {
    name: 'Varanasi Shrines',
    region: 'East India',
    timezone: 'IST (UTC+5:30)',
    altitude: '260 ft',
    advisory: 'Peak Density: Morning temple queues estimate is 45 mins.',
    status: 'day',
    weather: 'Sunny (34°C)',
    news: 'Special Ganga Aarti visual live-streams active tonight.'
  },
  {
    name: 'Spiti Valley',
    region: 'Himalayan Ridge',
    timezone: 'IST (UTC+5:30)',
    altitude: '12,500 ft',
    advisory: 'Landslide Alert: NH-5 highway operational with caution.',
    status: 'night',
    weather: 'Freezing (-4°C)',
    news: 'Kaza homestays running fully on solar batteries.'
  }
];

export const LiveExplorer = () => {
  const { showToast } = useApp();
  const [timeStr, setTimeStr] = useState(new Date().toLocaleTimeString());
  const [hotspotsList, setHotspotsList] = useState(HOTSPOTS);
  const [newsFeed, setNewsFeed] = useState([
    { id: 1, text: 'MET: High visibility index recorded at Leh flight corridors.', type: 'info' },
    { id: 2, text: 'ADM: Local guides active at Taj Mahal sunrise window.', type: 'sys' },
    { id: 3, text: 'TRAF: Goa ferry services operational under normal waves.', type: 'ok' }
  ]);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStr(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulating random alert modifications and new live news entries
  useEffect(() => {
    const newsEntries = [
      'INFRA: Kaza to Keylong EV trail reports active charging ports.',
      'WET: Monsoon cloud deck moving south towards Gokarna beaches.',
      'SENSORS: High tourist inflow detected at Munnar tea museum.',
      'SAFETY: Altitude rest indexes verified for all Srinagar flights.',
      'ADM: Online pre-booking keys verified for Varanasi temple.'
    ];

    const interval = setInterval(() => {
      const randomNews = newsEntries[Math.floor(Math.random() * newsEntries.length)];
      setNewsFeed(prev => [
        { id: Date.now(), text: randomNews, type: 'live' },
        ...prev.slice(0, 3)
      ]);
      
      // Randomly toggle day/night for visual flare
      setHotspotsList(prev => prev.map(h => {
        if (Math.random() > 0.8) {
          return { ...h, status: h.status === 'day' ? 'night' : 'day' };
        }
        return h;
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          SATELLITE GLOBAL CONSOLE
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Live World Explorer
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl">
          Real-time weather, day/night cycles, queue estimations, and environmental alerts monitored directly from travel hotspots.
        </p>
      </div>

      {/* Main clock / connection hud */}
      <div className="p-5 rounded-3xl bg-slate-950 border border-white/10 text-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl font-mono text-xs">
        <div className="flex items-center gap-3">
          <Radio className="text-rose-500 animate-pulse" size={15} />
          <div>
            <span className="text-slate-500 font-black block">SYSTEM TIME VECTOR</span>
            <span className="text-slate-200 font-bold block">{timeStr}</span>
          </div>
        </div>

        <div className="flex gap-4 text-[10px] text-slate-400">
          <div>
            <span className="text-slate-600 block text-[8px] font-black uppercase">Active Streams</span>
            <span className="text-teal-400 font-bold">14 Live Hotspots</span>
          </div>
          <div>
            <span className="text-slate-600 block text-[8px] font-black uppercase">Refresh Latency</span>
            <span className="text-teal-400 font-bold">12ms (Direct)</span>
          </div>
        </div>
      </div>

      {/* Grid: Live hotspots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotspotsList.map((h, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-lg flex flex-col justify-between gap-4 text-left"
          >
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-200 dark:border-white/5 pb-3">
              <div>
                <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-1.5">
                  <MapPin size={15} className="text-rose-500" />
                  {h.name}
                </h3>
                <span className="text-[10px] text-slate-400 font-mono">
                  {h.region} • {h.timezone}
                </span>
              </div>

              <div className="flex items-center gap-1 font-mono text-[9px] uppercase font-bold text-slate-400">
                {h.status === 'day' ? (
                  <>
                    <Sun size={12} className="text-amber-500 animate-spin-slow" />
                    <span>Day Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={12} className="text-indigo-400" />
                    <span>Night Mode</span>
                  </>
                )}
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-400 uppercase font-mono">Altitude / Elevation</span>
                <span className="text-slate-800 dark:text-slate-200 mt-0.5">{h.altitude}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-400 uppercase font-mono">Atmosphere Index</span>
                <span className="text-slate-800 dark:text-slate-200 mt-0.5">{h.weather}</span>
              </div>
            </div>

            {/* Advisory alert */}
            <div className="p-3 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-2.5 font-mono text-[9.5px]">
              <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={13} />
              <div className="text-amber-700 dark:text-amber-300 font-bold leading-relaxed">
                <span className="uppercase text-[8px] block font-black">Advisory System Alert</span>
                {h.advisory}
              </div>
            </div>

            {/* Live News */}
            <div className="font-mono text-[9px] text-slate-450 border-t border-slate-200 dark:border-white/5 pt-3">
              <span className="text-slate-500 font-black block uppercase text-[7px]">Regional Hotspot News</span>
              <p className="mt-0.5 text-slate-700 dark:text-slate-300 leading-normal font-semibold">
                📰 {h.news}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Global simulated Live News Ticker */}
      <div className="p-6 rounded-3xl bg-slate-900/60 dark:bg-slate-950/80 border border-slate-800 text-white flex flex-col gap-4 text-left">
        <h4 className="font-display font-black text-sm text-teal-400 uppercase tracking-widest font-mono flex items-center gap-1.5 border-b border-white/5 pb-2">
          <Radio size={15} /> Satellite Live Feeds Ticker
        </h4>
        <div className="flex flex-col gap-2.5 font-mono text-[10px] text-slate-400">
          {newsFeed.map((feed) => (
            <div key={feed.id} className="flex justify-between items-center gap-4 bg-slate-950 p-2.5 rounded-xl border border-white/5">
              <span className="text-teal-400 font-bold shrink-0">LIVE //</span>
              <span className="text-slate-300 font-semibold truncate flex-1">{feed.text}</span>
              <span className="text-slate-500 shrink-0">SYNCED</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
