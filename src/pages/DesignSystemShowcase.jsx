import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Compass, Globe, MapPin, Feather, Heart, 
  ArrowRight, Check, Dna, DollarSign, Calendar, Layers 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Skeleton } from '../components/ui/Skeleton';
import { DestinationCard } from '../components/cards/DestinationCard';
import { AICommandBar } from '../components/ai/AICommandBar';
import { HeritageDivider } from '../components/heritage/HeritageDivider';
import { ArchitecturalFrame } from '../components/heritage/ArchitecturalFrame';
import { JaliPattern } from '../components/heritage/JaliPattern';

export const DesignSystemShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

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
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">01 // COLOR TOKENS</h2>
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

        <HeritageDivider label="CARDS & BADGES" />

        {/* SECTION 5: CARD SYSTEM & BADGES */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">05 // CARDS & BADGES</h2>
            <span className="text-xs font-mono text-[#D4A66A]">PREMIUM UI CONTAINERS</span>
          </div>

          <div className="flex gap-3 flex-wrap mb-6">
            <Badge variant="default">DEFAULT BADGE</Badge>
            <Badge variant="gold">GOLD HIGHLIGHT</Badge>
            <Badge variant="terracotta">TERRACOTTA ACCENT</Badge>
            <Badge variant="dark">DARK SURFACE</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DestinationCard
              title="Rajasthan"
              subtitle="Royal Heritage"
              description="Golden forts, royal palaces, desert dunes and royal thali traditions."
              image="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
              price="₹32,800"
              tags={['Palaces', 'Culture']}
            />

            <ArchitecturalFrame className="h-[420px] p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#D4A66A] uppercase">AI INSIGHT CARD</span>
                <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF] mt-2">
                  Optimal Travel Window Detected
                </h3>
                <p className="text-xs text-[#E8CFA8]/80 font-light mt-3 leading-relaxed">
                  TravelVerse AI predicts October to March as the ideal climate period for Rajasthan heritage exploration with 98.4% confidence score.
                </p>
              </div>

              <div className="pt-4 border-t border-[#B9854F]/20 flex justify-between items-center text-xs font-mono text-[#D4A66A]">
                <span>AI MATCH: 98.4%</span>
                <span>CALCULATED // 2100</span>
              </div>
            </ArchitecturalFrame>

            <div className="p-6 rounded-3xl bg-[#342117] border border-[#B9854F]/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#D4A66A] uppercase">SKELETON LOADING STATE</span>
                <div className="space-y-4 mt-4">
                  <Skeleton height="160px" />
                  <Skeleton height="20px" width="70%" />
                  <Skeleton height="14px" width="90%" />
                  <Skeleton height="14px" width="50%" />
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#9D8870] mt-4 block">SURFACE LEVEL 3</span>
            </div>
          </div>
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
