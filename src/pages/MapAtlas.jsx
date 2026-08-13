import React, { useState } from 'react';
import { Compass, MapPin, Route, Layers, Info } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import MapFoundation from '../components/maps/MapFoundation';
import MapMarker from '../components/maps/MapMarker';
import ArchitecturalFrame from '../components/heritage/ArchitecturalFrame';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export const MapAtlas = () => {
  const [activePin, setActivePin] = useState('Jaipur');

  const mapPins = [
    { name: 'Jaipur', coords: '26.9124° N, 75.7873° E', desc: 'The Pink City of Rajput Fortresses and Amber Palace.' },
    { name: 'Udaipur', coords: '24.5854° N, 73.7125° E', desc: 'Venice of the East with Lake Pichola and Monsoon Palace.' },
    { name: 'Jodhpur', coords: '26.2389° N, 73.0243° E', desc: 'The Sun City crowned by towering Mehrangarh Fort.' },
    { name: 'Varanasi', coords: '25.3176° N, 82.9739° E', desc: 'World’s oldest living spiritual city along the Ganges.' }
  ];

  const currentPinData = mapPins.find(p => p.name === activePin) || mapPins[0];

  return (
    <AppShell title="Heritage Map Atlas // 2100">
      <PageContainer className="space-y-8">
        
        {/* Map Header */}
        <section className="space-y-2 border-b border-[#B9854F]/25 pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="gold">
              <Compass size={12} className="mr-1" />
              SPATIAL HERITAGE ATLAS
            </Badge>
            <span className="text-xs font-mono text-[#D4A66A]">INDIAN SUBCONTINENT GRID</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-4xl font-bold text-[#F5E7CF]">
            GLOBAL EXPLORER ATLAS
          </h1>
        </section>

        {/* Split Map & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Map Canvas */}
          <div className="lg:col-span-2">
            <MapFoundation title="SPATIAL HERITAGE ATLAS">
              <div className="relative w-full h-full flex items-center justify-center">
                <MapMarker
                  label="JAIPUR"
                  active={activePin === 'Jaipur'}
                  onClick={() => setActivePin('Jaipur')}
                  className="absolute left-1/3 top-1/4"
                />
                <MapMarker
                  label="JODHPUR"
                  active={activePin === 'Jodhpur'}
                  onClick={() => setActivePin('Jodhpur')}
                  className="absolute left-1/4 top-1/2"
                />
                <MapMarker
                  label="UDAIPUR"
                  active={activePin === 'Udaipur'}
                  onClick={() => setActivePin('Udaipur')}
                  className="absolute left-1/3 bottom-1/4"
                />
                <MapMarker
                  label="VARANASI"
                  active={activePin === 'Varanasi'}
                  onClick={() => setActivePin('Varanasi')}
                  className="absolute right-1/4 bottom-1/3"
                />
              </div>
            </MapFoundation>
          </div>

          {/* Landmark Narrative Inspector Sidebar */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#B9854F]/20 pb-3">
                <span className="text-[10px] font-mono text-[#D4A66A] uppercase">SELECTED LANDMARK</span>
                <span className="text-xs font-mono text-[#9D8870]">{currentPinData.coords}</span>
              </div>

              <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">
                {currentPinData.name}
              </h3>

              <p className="text-xs text-[#E8CFA8]/90 font-light leading-relaxed">
                {currentPinData.desc}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#B9854F]/20">
              <Button variant="primary" className="w-full">
                Generate Route to {currentPinData.name} →
              </Button>
              <Button variant="secondary" className="w-full">
                View Local AI Guide
              </Button>
            </div>
          </div>

        </div>

      </PageContainer>
    </AppShell>
  );
};

export default MapAtlas;
