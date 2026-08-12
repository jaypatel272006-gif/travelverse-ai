import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Sparkles, ArrowRight } from 'lucide-react';

export const SandstoneHeritageMap = () => {
  const [activeLocation, setActiveLocation] = useState('jaipur');

  const mapNodes = [
    { id: 'jaipur', name: 'Jaipur', region: 'Rajasthan', x: '35%', y: '42%', desc: 'Pink City, Amer Fort, City Palace & Jal Mahal.' },
    { id: 'udaipur', name: 'Udaipur', region: 'Rajasthan', x: '30%', y: '52%', desc: 'City of Lakes & Mewar Royal Lake Palace.' },
    { id: 'jaisalmer', name: 'Jaisalmer', region: 'Rajasthan', x: '22%', y: '44%', desc: 'Golden Sandstone Fort & Thar Desert Safaris.' },
    { id: 'agra', name: 'Agra', region: 'Uttar Pradesh', x: '42%', y: '43%', desc: 'Taj Mahal at sunrise & Red Sandstone Agra Fort.' },
    { id: 'varanasi', name: 'Varanasi', region: 'Uttar Pradesh', x: '58%', y: '50%', desc: 'Ancient Ganges Ghats, Kashi Vishwanath & Evening Aarti.' },
    { id: 'kerala', name: 'Kerala', region: 'South India', x: '38%', y: '82%', desc: 'Alleppey Backwaters, Munnar Tea Valleys & Fort Kochi.' },
    { id: 'kashmir', name: 'Kashmir', region: 'North India', x: '32%', y: '18%', desc: 'Dal Lake Houseboats, Gulmarg Gondola & Alpine Valleys.' },
    { id: 'ladakh', name: 'Ladakh', region: 'North India', x: '42%', y: '14%', desc: 'High Mountain Passes, Monasteries & Sapphire Pangong Tso.' }
  ];

  return (
    <section id="map" className="py-20 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-[#1B120C] via-[#24170F] to-[#1B120C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D4A66A] mb-3">
            <Compass size={12} />
            <span>Interactive Exploration Atlas</span>
          </div>
          <h2 className="font-serif-heritage text-2xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
            TRACE THE STORIES OF INDIA
          </h2>
          <p className="text-xs sm:text-sm text-[#E8CFA8]/80 max-w-xl font-light mt-3 px-2">
            From ancient sacred cities to Himalayan mountain passes, discover journeys connected by centuries of history, culture and geography.
          </p>
        </div>

        {/* Mobile Quick Location Selector Chips */}
        <div className="flex sm:hidden gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none snap-x">
          {mapNodes.map((n) => (
            <button
              key={n.id}
              onClick={() => setActiveLocation(n.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider shrink-0 snap-center transition-all ${
                activeLocation === n.id
                  ? 'bg-[#B9854F] text-[#1B120C] font-bold shadow-md'
                  : 'bg-[#24170F] text-[#E8CFA8]/80 border border-[#B9854F]/30'
              }`}
            >
              {n.name}
            </button>
          ))}
        </div>

        {/* Interactive Explorer's Map Container */}
        <div className="relative w-full h-[450px] sm:h-[520px] rounded-3xl bg-[#24170F]/90 border border-[#B9854F]/40 shadow-2xl p-4 sm:p-6 overflow-hidden flex flex-col justify-between">
          
          {/* Map Grid Background Texture */}
          <div className="absolute inset-0 opacity-15 pointer-events-none architectural-pattern-bg" />
          
          {/* Compass Rose Overlay */}
          <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
            <Compass size={90} className="text-[#D4A66A] animate-spin duration-[60000ms]" />
          </div>

          {/* SVG Route Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="35%" y1="42%" x2="42%" y2="43%" stroke="#D4A66A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <line x1="35%" y1="42%" x2="30%" y2="52%" stroke="#D4A66A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <line x1="30%" y1="52%" x2="22%" y2="44%" stroke="#D4A66A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <line x1="42%" y1="43%" x2="58%" y2="50%" stroke="#D4A66A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <line x1="35%" y1="42%" x2="32%" y2="18%" stroke="#D4A66A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <line x1="32%" y1="18%" x2="42%" y2="14%" stroke="#D4A66A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <line x1="30%" y1="52%" x2="38%" y2="82%" stroke="#D4A66A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
          </svg>

          {/* Map Location Pins */}
          {mapNodes.map((node) => {
            const isActive = activeLocation === node.id;
            return (
              <div
                key={node.id}
                style={{ left: node.x, top: node.y }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                onClick={() => setActiveLocation(node.id)}
              >
                {/* Ping animation ring */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-[#D4A66A] animate-ping duration-1000 opacity-75" />
                )}
                
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#B9854F] border-[#F5E7CF] text-[#1B120C] scale-125 shadow-lg shadow-[#8B5E34]/50' 
                    : 'bg-[#342117]/90 border-[#B9854F]/40 text-[#D4A66A] hover:scale-110 hover:border-[#D4A66A]'
                }`}>
                  <MapPin size={13} />
                </div>

                {/* Node Label Tooltip */}
                <div className={`absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-10 px-2.5 py-1 rounded-md bg-[#1B120C] border border-[#B9854F]/50 text-[10px] sm:text-[11px] font-mono text-[#F5E7CF] whitespace-nowrap transition-all pointer-events-none shadow-lg ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                }`}>
                  {node.name}
                </div>
              </div>
            );
          })}

          {/* Active Node Info Card Overlay (Bottom Left) */}
          <div className="relative z-30 max-w-sm sm:max-w-md p-4 sm:p-5 rounded-2xl bg-[#1B120C]/95 backdrop-blur-xl border border-[#D4A66A]/40 shadow-2xl">
            {mapNodes.filter(n => n.id === activeLocation).map(node => (
              <div key={node.id} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4A66A] px-2 py-0.5 rounded bg-[#342117] border border-[#B9854F]/30">
                    {node.region}
                  </span>
                  <span className="text-[10px] text-[#E8CFA8]/60 font-mono">ATLAS // {node.id.toUpperCase()}</span>
                </div>
                <h4 className="font-serif-heritage text-xl sm:text-2xl font-bold text-[#F5E7CF]">
                  {node.name}
                </h4>
                <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Right Atlas Actions */}
          <div className="relative z-30 flex justify-end items-center gap-4 mt-2 sm:mt-0">
            <a
              href="#planner"
              className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#6B4325] to-[#8B5E34] hover:from-[#8B5E34] hover:to-[#B9854F] text-[#F5E7CF] text-[11px] sm:text-xs font-semibold tracking-widest border border-[#D4A66A]/40 shadow-xl flex items-center justify-center gap-2"
            >
              <span>EXPLORE THE MAP</span>
              <ArrowRight size={13} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SandstoneHeritageMap;
