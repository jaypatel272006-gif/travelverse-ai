import React from 'react';
import { 
  Route, Compass, Clock, MapPin, AlertTriangle, 
  Fuel, ShieldCheck, PhoneCall, Sparkles, Navigation 
} from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import HeritageDivider from '../components/heritage/HeritageDivider';

export const JourneyCockpit = () => {
  return (
    <AppShell title="Live Journey Cockpit // 2100">
      <PageContainer className="space-y-12">
        
        {/* Cockpit Status Header */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#24170F] border border-[#D4A66A]/40 shadow-2xl space-y-6">
          <div className="flex justify-between items-start flex-col sm:flex-row gap-4 border-b border-[#B9854F]/20 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="gold" className="animate-pulse">
                  <Navigation size={12} className="mr-1" />
                  LIVE EXPEDITION COCKPIT
                </Badge>
                <span className="text-xs font-mono text-[#D4A66A]">DAY 2 OF 7 ACTIVE</span>
              </div>
              <h1 className="font-serif-heritage text-3xl sm:text-4xl font-bold text-[#F5E7CF]">
                RAJASTHAN ROYAL HERITAGE CIRCUIT
              </h1>
            </div>

            <Button variant="ai">
              Ask AI Co-Pilot →
            </Button>
          </div>

          {/* Current Leg Progress */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-mono text-[#E8CFA8]">
              <span>CURRENT LEG: AMER FORT, JAIPUR</span>
              <span>NEXT DESTINATION: MEHRANGARH, JODHPUR (335 km)</span>
            </div>

            <div className="w-full h-3 rounded-full bg-[#1B120C] p-0.5 border border-[#B9854F]/30">
              <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-[#8B5E34] to-[#D4A66A]" />
            </div>

            <div className="flex justify-between text-[10px] font-mono text-[#9D8870]">
              <span>START: JAIPUR HAVELI (08:30 AM)</span>
              <span>ETA: JODHPUR RAAS (03:15 PM)</span>
            </div>
          </div>
        </section>

        {/* Live Telemetry Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Road Trip OS Estimates */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4">
            <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">ROAD TRIP OS</span>
            <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Fuel & Toll Calculator</h3>
            
            <div className="space-y-3 pt-2 text-xs font-mono text-[#E8CFA8]">
              <div className="flex justify-between">
                <span>Est. Fuel Cost:</span>
                <span className="text-[#F5E7CF]">₹2,450 (EV / Petrol)</span>
              </div>
              <div className="flex justify-between">
                <span>Total Highway Tolls:</span>
                <span className="text-[#F5E7CF]">₹420 (Fastag Auto)</span>
              </div>
              <div className="flex justify-between">
                <span>Recommended Rest Stop:</span>
                <span className="text-[#D4A66A]">Kishangarh Highway Cafe (12:30 PM)</span>
              </div>
            </div>
          </div>

          {/* Real-Time Contingency Alert */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4">
            <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">WEATHER CONTINGENCY</span>
            <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Afternoon Heat Advisory</h3>
            
            <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed">
              Temperature in Jodhpur will reach 32°C between 1:30 PM - 3:30 PM. AI recommends indoor exploring at Mehrangarh Museum during peak heat.
            </p>
          </div>

          {/* Emergency SOS & Local Concierge */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">EMERGENCY ASSISTANCE</span>
              <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">24/7 SOS Concierge</h3>
              <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">
                Direct satellite bridge to local helpline, roadside breakdown assistance, and verified medical services.
              </p>
            </div>

            <Button variant="secondary" className="w-full text-xs font-mono">
              <PhoneCall size={14} className="mr-2 text-[#D4A66A]" />
              Connect SOS Support
            </Button>
          </div>

        </section>

      </PageContainer>
    </AppShell>
  );
};

export default JourneyCockpit;
