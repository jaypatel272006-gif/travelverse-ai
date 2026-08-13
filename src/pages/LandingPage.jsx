import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Sparkles, Compass, ShieldCheck, MapPin, Globe, Cpu, Heart, CheckCircle2, 
  ArrowRight, Shield, Award, Navigation, Calendar, Zap, Layers 
} from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';
import SpatialDestinationCard from '../components/cards/SpatialDestinationCard';
import useDestinations from '../hooks/useDestinations';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { filteredDestinations } = useDestinations();

  return (
    <AppShell title="TravelVerse AI // Future Travel OS 2100">
      <PageContainer className="space-y-16">
        
        {/* Sandstone Heritage Hero Section */}
        <section className="relative rounded-3xl overflow-hidden border border-[#B9854F]/30 bg-[#24170F] min-h-[520px] flex flex-col justify-center items-center text-center p-8 sm:p-14 space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B9854F]/15 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B120C]/90 border border-[#D4A66A]/40 text-xs font-mono text-[#D4A66A]">
            <Sparkles size={14} className="text-[#D4A66A]" />
            <span>TRAVELVERSE AI 2100 — FUTURE TRAVEL OPERATING SYSTEM</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-heritage text-4xl sm:text-6xl font-bold text-[#F5E7CF] max-w-4xl leading-tight tracking-wide">
            Human-Centered Travel Intelligence for the Next Century
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-[#E8CFA8]/80 max-w-2xl font-light leading-relaxed">
            Experience spatial journey management, predictive budget engineering, fatigue-aware itinerary optimization, and timeless cultural heritage.
          </p>

          {/* Hero Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button variant="gold" size="xl" onClick={() => navigate('/home')}>
              <Compass size={20} className="mr-2" />
              LAUNCH MISSION CONTROL
            </Button>

            <Button variant="outline" size="xl" onClick={() => navigate('/plan')}>
              <Sparkles size={18} className="mr-2" />
              GENERATE AI TRIP
            </Button>
          </div>

          {/* Feature Micro-Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#E8CFA8]/70 border-t border-[#B9854F]/20 max-w-3xl">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#D4A66A]" />
              <span>FATIGUE & REST AWARE</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-[#D4A66A]" />
              <span>REAL-TIME CLOUDS & WEATHER</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={14} className="text-[#D4A66A]" />
              <span>TRAVEL DNA GENOME</span>
            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF]">
              Next-Generation Travel Architecture
            </h2>
            <p className="text-xs text-[#E8CFA8]/70 max-w-xl mx-auto">
              Engineered with physical spatial design tokens, non-generic algorithms, and deep cultural reverence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A]">
                <Sparkles size={24} />
              </div>
              <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Human-Like Itinerary AI</h3>
              <p className="text-xs text-[#E8CFA8]/80 leading-relaxed font-light">
                Generates realistic schedules with proper wake-up times, walking fatigue buffers, authentic meal slots, and real transit realities.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A]">
                <Globe size={24} />
              </div>
              <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Heritage Atlas & Discovery</h3>
              <p className="text-xs text-[#E8CFA8]/80 leading-relaxed font-light">
                Explore destination dossiers with high-resolution imagery, historical context, local culinary highlights, and curated circuits.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A]">
                <Zap size={24} />
              </div>
              <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Financial Budget OS</h3>
              <p className="text-xs text-[#E8CFA8]/80 leading-relaxed font-light">
                Track live expenses, set daily category caps, receive real-time budget warnings, and manage trip ledgers effortlessly.
              </p>
            </div>
          </div>
        </section>

        <HeritageDivider label="CURATED FEATURED DESTINATIONS" />

        {/* Featured Destinations Preview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDestinations.slice(0, 3).map((dest) => (
            <SpatialDestinationCard key={dest.id} destination={dest} />
          ))}
        </section>

        {/* Membership Tier Preview */}
        <section className="p-10 rounded-3xl bg-[#24170F] border border-[#D4A66A]/30 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="gold">MEMBERSHIP TIERS</Badge>
            <h2 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF]">Choose Your Exploration Access</h2>
            <p className="text-xs text-[#E8CFA8]/70">Simple, transparent, futuristic travel operating capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="p-8 rounded-2xl bg-[#1B120C] border border-[#B9854F]/30 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">STARTER TIERS</span>
                <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Explorer Rank</h3>
                <div className="font-serif-heritage text-3xl font-bold text-[#F5E7CF] pt-2">₹0 / Free</div>
              </div>

              <ul className="space-y-3 text-xs text-[#E8CFA8]/80 font-light">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Unlimited Natural Language Searches</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Full Access to Destination Dossiers</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Standard AI Itinerary Generation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Spiritual Passport Tracker</li>
              </ul>

              <Button variant="outline" className="w-full" onClick={() => navigate('/home')}>
                START AS EXPLORER
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="p-8 rounded-2xl bg-[#342117] border border-[#D4A66A] relative space-y-6 shadow-xl shadow-[#D4A66A]/10">
              <div className="absolute top-4 right-4">
                <Badge variant="gold">RECOMMENDED</Badge>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">PREMIUM OPERATING TIER</span>
                <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Voyager Pro 2100</h3>
                <div className="font-serif-heritage text-3xl font-bold text-[#F5E7CF] pt-2">₹499 / Mo</div>
              </div>

              <ul className="space-y-3 text-xs text-[#E8CFA8]/90 font-light">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Priority Quantum AI Itinerary Calculations</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Real-time Weather & Crowd Forecasts</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Digital Passport Vault & Cloud Sync</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A66A]" /> Unlimited Travel DNA Customization</li>
              </ul>

              <Button variant="gold" className="w-full" onClick={() => navigate('/home')}>
                UPGRADE TO PRO 2100
              </Button>
            </div>
          </div>
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default LandingPage;
