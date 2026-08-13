import React, { useState } from 'react';
import { 
  Sparkles, Compass, Globe, MapPin, Feather, Check, Layers, 
  DollarSign, Route, ArrowRight 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Skeleton } from '../components/ui/Skeleton';
import { DestinationCard } from '../components/cards/DestinationCard';
import { JourneyCard } from '../components/cards/JourneyCard';
import { AIInsightCard } from '../components/cards/AIInsightCard';
import { BudgetCard } from '../components/cards/BudgetCard';
import { AICommandBar } from '../components/ai/AICommandBar';
import { HeritageDivider } from '../components/heritage/HeritageDivider';
import { ArchitecturalFrame } from '../components/heritage/ArchitecturalFrame';
import { JaliPattern } from '../components/heritage/JaliPattern';
import { SandstoneTexture } from '../components/heritage/SandstoneTexture';
import { HeritageCorner } from '../components/heritage/HeritageCorner';
import { ArchFrame } from '../components/heritage/ArchFrame';
import { MapFoundation } from '../components/maps/MapFoundation';
import { MapMarker } from '../components/maps/MapMarker';
import { SplitLayout } from '../components/layout/SplitLayout';

export const DesignSystemShowcase = () => {
  const colorsList = [
    { name: 'Deep Walnut', hex: '#1B120C', desc: 'Level 1: Deep Background' },
    { name: 'Dark Brown', hex: '#24170F', desc: 'Level 2: Surface Panel' },
    { name: 'Espresso', hex: '#342117', desc: 'Level 3: Elevated Card' },
    { name: 'Heritage Brown', hex: '#4A2E1B', desc: 'Level 4: Active Surface' },
    { name: 'Dark Sandstone', hex: '#6B4325', desc: 'Material Primary' },
    { name: 'Sandstone', hex: '#8B5E34', desc: 'Material Secondary' },
    { name: 'Warm Copper', hex: '#A66A3F', desc: 'Warm Material Accent' },
    { name: 'Antique Gold', hex: '#B9854F', desc: 'Primary Gold Highlight' },
    { name: 'Light Gold', hex: '#D4A66A', desc: 'Glow & Interactive Gold' },
    { name: 'Warm Ivory', hex: '#F5E7CF', desc: 'Primary Text & Surface' },
    { name: 'Cream', hex: '#E8CFA8', desc: 'Secondary Text' },
    { name: 'Light Sand', hex: '#EFE0C5', desc: 'Soft Highlight' },
    { name: 'Terracotta', hex: '#A85D3A', desc: 'Accent Accent' },
    { name: 'Muted Olive', hex: '#596044', desc: 'Nature Accent' },
    { name: 'Deep Maroon', hex: '#54261D', desc: 'Sacred Accent' },
  ];

  return (
    <div className="min-h-screen bg-[#1B120C] text-[#F5E7CF] font-sans-ui p-4 sm:p-12 relative overflow-hidden">
      <JaliPattern opacity={0.06} />
      <SandstoneTexture opacity={0.03} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Showcase Header */}
        <header className="border-b border-[#B9854F]/30 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[10px] uppercase tracking-[0.25em] text-[#D4A66A] mb-3">
              <Layers size={12} />
              <span>Official Component Library</span>
            </div>
            <h1 className="font-serif-heritage text-4xl sm:text-6xl font-bold tracking-tight text-[#F5E7CF]">
              TRAVELVERSE AI
            </h1>
            <p className="text-sm font-mono text-[#D4A66A] tracking-widest mt-1">
              DESIGN SYSTEM // SANDSTONE HERITAGE SPECIFICATION 2100
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#24170F] border border-[#B9854F]/40 text-xs font-mono text-[#E8CFA8]">
            <Check size={14} className="text-[#D4A66A]" />
            <span>Phase 1 Standardized</span>
          </div>
        </header>

        {/* SECTION 1: COLOR SYSTEM */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">01 // COLOR TOKENS & SURFACE HIERARCHY</h2>
            <span className="text-xs font-mono text-[#D4A66A]">15 STANDARDIZED PALETTE TOKENS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {colorsList.map((c) => (
              <div key={c.name} className="p-3 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 flex flex-col gap-2">
                <div 
                  style={{ backgroundColor: c.hex }} 
                  className="h-16 rounded-xl border border-black/30 shadow-inner flex items-end p-2"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#F5E7CF]">{c.name}</h4>
                  <span className="text-[10px] font-mono text-[#D4A66A] block">{c.hex}</span>
                  <span className="text-[9px] text-[#9D8870] font-mono block mt-0.5">{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HeritageDivider label="TYPOGRAPHY & HIERARCHY" />

        {/* SECTION 2: TYPOGRAPHY SYSTEM */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">02 // TYPOGRAPHY SYSTEM</h2>
            <span className="text-xs font-mono text-[#D4A66A]">PLAYFAIR DISPLAY & INTER</span>
          </div>

          <div className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-6">
            <div className="border-b border-[#B9854F]/20 pb-4">
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase">Display XL // Serif</span>
              <h1 className="font-serif-heritage text-4xl sm:text-6xl font-bold text-[#F5E7CF] leading-tight">
                Discover The World. Remember The Journey.
              </h1>
            </div>

            <div className="border-b border-[#B9854F]/20 pb-4">
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase">Heading XL // Serif</span>
              <h2 className="font-serif-heritage text-2xl sm:text-4xl font-bold text-[#F5E7CF]">
                Stories Waiting To Be Discovered Across India
              </h2>
            </div>

            <div className="border-b border-[#B9854F]/20 pb-4">
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase">Body Large & Medium // Sans-Serif</span>
              <p className="text-base text-[#E8CFA8] font-light leading-relaxed max-w-3xl">
                TravelVerse AI fuses ancient cultural storytelling with autonomous predictive intelligence. Every route is optimized for walking fatigue, meal timing, climate suitability, and local heritage context.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase">Caption & Overline // Mono</span>
              <div className="flex gap-4 items-center mt-1">
                <span className="text-xs font-mono text-[#D4A66A]">AQI 42 • Good Conditions</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E8CFA8]">
                  SYSTEM VERSION 2100.8.12
                </span>
              </div>
            </div>
          </div>
        </section>

        <HeritageDivider label="BUTTONS & CONTROLS" />

        {/* SECTION 3: BUTTON SYSTEM */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">03 // BUTTON SYSTEM</h2>
            <span className="text-xs font-mono text-[#D4A66A]">VARIANTS & STATES</span>
          </div>

          <div className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 flex flex-wrap gap-6 items-center">
            <Button variant="primary">PLAN MY JOURNEY</Button>
            <Button variant="secondary">Explore Circuits</Button>
            <Button variant="ghost">Learn More</Button>
            <Button variant="ai">AI Assistant</Button>
            <Button variant="icon" icon={Sparkles} />
            <Button variant="primary" isLoading>Loading State</Button>
            <Button variant="primary" isDisabled>Disabled</Button>
          </div>
        </section>

        <HeritageDivider label="AI COMPONENTS" />

        {/* SECTION 4: AI COMPONENTS & COMMAND BAR */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">04 // MASTER AI COMMAND BAR</h2>
            <span className="text-xs font-mono text-[#D4A66A]">NATURAL LANGUAGE INTERFACE</span>
          </div>

          <div className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4">
            <AICommandBar />
            <p className="text-xs font-mono text-[#E8CFA8]/60">
              Try typing natural requests: "Plan a 7-day Rajasthan trip" or "Find spiritual places in India"
            </p>
          </div>
        </section>

        <HeritageDivider label="HERITAGE DECORATIVE SYSTEM" />

        {/* SECTION 5: HERITAGE DECORATIVE SYSTEM */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">05 // HERITAGE DECORATIVE SYSTEM</h2>
            <span className="text-xs font-mono text-[#D4A66A]">ARCHITECTURAL MOTIFS & JALI</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ArchitecturalFrame className="h-48 flex items-center justify-center text-center p-6">
              <div>
                <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">Architectural Frame</h4>
                <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">Carved sandstone corner bracket frame</p>
              </div>
            </ArchitecturalFrame>

            <ArchFrame className="h-48 flex items-center justify-center text-center">
              <div>
                <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">Arch Frame</h4>
                <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">Rajasthani architectural silhouette</p>
              </div>
            </ArchFrame>

            <div className="relative h-48 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 p-6 overflow-hidden flex items-center justify-center text-center">
              <JaliPattern opacity={0.12} />
              <div className="relative z-10">
                <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">Jali Pattern Overlay</h4>
                <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">Subtle Mughal geometric lattice</p>
              </div>
            </div>
          </div>
        </section>

        <HeritageDivider label="CARDS & DATA VISUALIZATION" />

        {/* SECTION 6: CARD SYSTEM & DATA VISUALIZATION */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">06 // CARDS & DATA VISUALIZATION</h2>
            <span className="text-xs font-mono text-[#D4A66A]">PREMIUM UI CONTAINERS</span>
          </div>

          <div className="flex gap-3 flex-wrap mb-6">
            <Badge variant="default">DEFAULT BADGE</Badge>
            <Badge variant="gold">GOLD HIGHLIGHT</Badge>
            <Badge variant="terracotta">TERRACOTTA ACCENT</Badge>
            <Badge variant="dark">DARK SURFACE</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DestinationCard
              title="Rajasthan"
              subtitle="Royal Heritage"
              description="Golden forts, royal palaces, desert dunes and royal thali traditions."
              image="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
              price="₹32,800"
              tags={['Palaces', 'Culture']}
            />

            <JourneyCard />

            <AIInsightCard />

            <BudgetCard />
          </div>
        </section>

        <HeritageDivider label="MAP SYSTEM FOUNDATION" />

        {/* SECTION 7: MAP SYSTEM FOUNDATION */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">07 // MAP SYSTEM FOUNDATION</h2>
            <span className="text-xs font-mono text-[#D4A66A]">EXPLORER ATLAS MARKERS</span>
          </div>

          <MapFoundation>
            <div className="relative w-full h-full flex items-center justify-center">
              <MapMarker label="JAIPUR" active />
              <MapMarker label="UDAIPUR" className="absolute left-1/3 top-1/4" />
              <MapMarker label="VARANASI" className="absolute right-1/4 bottom-1/3" />
            </div>
          </MapFoundation>
        </section>

        {/* Footer info */}
        <footer className="pt-12 border-t border-[#B9854F]/20 text-center text-xs font-mono text-[#9D8870]">
          TRAVELVERSE AI • SANDSTONE HERITAGE DESIGN SYSTEM SHOWCASE • PHASE 1 COMPLETE
        </footer>

      </div>
    </div>
  );
};

export default DesignSystemShowcase;
