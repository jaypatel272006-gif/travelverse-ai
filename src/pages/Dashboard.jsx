import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Globe, Compass, Route, Map, Bookmark, 
  TrendingUp, Sun, ShieldAlert, Award, ArrowRight, Activity, Zap 
} from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import AICommandBar from '../components/ai/AICommandBar';
import DestinationCard from '../components/cards/DestinationCard';
import JourneyCard from '../components/cards/JourneyCard';
import AIInsightCard from '../components/cards/AIInsightCard';
import BudgetCard from '../components/cards/BudgetCard';
import HeritageDivider from '../components/heritage/HeritageDivider';
import ArchitecturalFrame from '../components/heritage/ArchitecturalFrame';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export const Dashboard = () => {
  const featuredCircuits = [
    {
      id: 'rajasthan',
      title: 'Rajasthan Royal Heritage',
      subtitle: 'Forts & Palaces Circuit',
      description: 'Amer Fort, City Palace Jaipur, Jaisalmer Golden Sandstone, and Lake Pichola Udaipur.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      price: '₹32,800',
      weather: '24°C • Fair',
      tags: ['Palaces', 'Desert']
    },
    {
      id: 'kerala',
      title: 'Kerala Backwaters & Tea Valleys',
      subtitle: 'Tropical Serenity',
      description: 'Alleppey houseboats, Munnar emerald tea gardens, and Fort Kochi heritage spice markets.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      price: '₹28,500',
      weather: '28°C • Breezy',
      tags: ['Backwaters', 'Nature']
    },
    {
      id: 'kashmir',
      title: 'Kashmir Valley & Gulmarg Snows',
      subtitle: 'Himalayan Paradise',
      description: 'Dal Lake shikara houseboats, Gulmarg Gondola peaks, and Pahalgam pine pine valleys.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      price: '₹36,000',
      weather: '14°C • Alpine',
      tags: ['Mountains', 'Snow']
    },
    {
      id: 'varanasi',
      title: 'Varanasi Sacred Ganges Circuit',
      subtitle: 'Ancient Spiritual Hub',
      description: 'Kashi Vishwanath Corridor, evening Ganga Aarti at Dashashwamedh, and Sarnath ruins.',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      price: '₹18,400',
      weather: '22°C • Clear',
      tags: ['Spiritual', 'Heritage']
    }
  ];

  return (
    <AppShell title="Mission Control OS // 2100">
      <PageContainer className="space-y-12">
        
        {/* Hero Mission Control Telemetry Header */}
        <section className="relative rounded-3xl bg-[#24170F] border border-[#B9854F]/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5E34]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="gold" className="animate-pulse">
                  <Activity size={12} className="mr-1" />
                  MISSION CONTROL ACTIVE
                </Badge>
                <span className="text-xs font-mono text-[#D4A66A]">DIGITAL TWIN // SYNCED</span>
              </div>

              <h1 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
                WELCOME BACK, COMMANDER.
              </h1>
              <p className="text-xs sm:text-sm text-[#E8CFA8]/80 font-light max-w-xl">
                TravelVerse AI has analyzed weather patterns, crowd surges, and flight pricing for your next heritage escape.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1B120C]/90 border border-[#B9854F]/30 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A]">
                <Zap size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#D4A66A] uppercase">Current Protocol</span>
                <span className="text-xs font-bold text-[#F5E7CF]">Rajasthan Circuit Ready</span>
                <span className="text-[9px] font-mono text-[#E8CFA8]/60">AI Confidence Score: 98.6%</span>
              </div>
            </div>
          </div>

          {/* Master AI Command Input */}
          <div className="mt-8 pt-6 border-t border-[#B9854F]/20">
            <AICommandBar />
          </div>
        </section>

        {/* Section 1: Autonomous AI Intelligence Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <div>
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">MODULE 01</span>
              <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Autonomous Travel Intelligence</h2>
            </div>
            <span className="text-xs font-mono text-[#D4A66A]">REAL-TIME PREDICTIVE ENGINE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AIInsightCard
              title="Optimal Booking Window Detected"
              insight="Flight fares to Jaipur are projected to drop by 18% in the next 72 hours. AI recommends delaying flight purchase until Thursday morning."
              score="96.2%"
              tag="PRICING FORECAST"
            />
            <AIInsightCard
              title="Crowd Surge Alert: Udaipur"
              insight="Lake Pichola boat queues are expected to peak between 4 PM - 6 PM tomorrow. Recommended alternative: Morning sunrise boat tour at 6:45 AM."
              score="99.1%"
              tag="CROWD OPTIMIZATION"
            />
            <BudgetCard />
          </div>
        </section>

        <HeritageDivider label="CURATED HERITAGE CIRCUITS" />

        {/* Section 2: Curated Heritage Circuits */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <div>
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">MODULE 02</span>
              <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Featured Indian Circuits</h2>
            </div>
            <a href="/explore" className="text-xs font-mono text-[#D4A66A] hover:underline flex items-center gap-1">
              View All Destinations <ArrowRight size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCircuits.map((dest) => (
              <DestinationCard
                key={dest.id}
                title={dest.title}
                subtitle={dest.subtitle}
                description={dest.description}
                image={dest.image}
                price={dest.price}
                weather={dest.weather}
                tags={dest.tags}
              />
            ))}
          </div>
        </section>

        {/* Section 3: Travel DNA & Environmental Intelligence */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Travel DNA Snapshot */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A66A]">GENOME PROFILE</span>
              <Badge variant="gold">RANK: ROYAL EXPLORER</Badge>
            </div>

            <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">
              Travel DNA Score: 94/100
            </h3>

            <div className="space-y-3 pt-2 border-t border-[#B9854F]/20 text-xs font-mono text-[#E8CFA8]">
              <div className="flex justify-between">
                <span>Preferred Climate:</span>
                <span className="text-[#F5E7CF]">Dry Warm Sandstone</span>
              </div>
              <div className="flex justify-between">
                <span>Pace Velocity:</span>
                <span className="text-[#F5E7CF]">Balanced Cultural Rest</span>
              </div>
              <div className="flex justify-between">
                <span>Food Archetype:</span>
                <span className="text-[#F5E7CF]">Regional Rajasthani & Spices</span>
              </div>
              <div className="flex justify-between">
                <span>UNESCO Badges:</span>
                <span className="text-[#D4A66A]">7 / 42 Unlocked</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full mt-2">
              View Complete DNA Lab
            </Button>
          </div>

          {/* Environmental Intelligence */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A66A]">ENVIRONMENTAL RADAR</span>
              <span className="text-xs font-mono text-[#D4A66A]">LIVE WEATHER TELEMETRY</span>
            </div>

            <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">
              Jaipur, Rajasthan
            </h3>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20">
                <span className="text-[9px] font-mono text-[#9D8870] block">AIR QUALITY (AQI)</span>
                <span className="text-sm font-bold text-[#D4A66A]">42 • Good</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20">
                <span className="text-[9px] font-mono text-[#9D8870] block">UV INDEX</span>
                <span className="text-sm font-bold text-[#F5E7CF]">5 • Moderate</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20">
                <span className="text-[9px] font-mono text-[#9D8870] block">HUMIDITY</span>
                <span className="text-sm font-bold text-[#F5E7CF]">38%</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20">
                <span className="text-[9px] font-mono text-[#9D8870] block">PHOTO LIGHTING</span>
                <span className="text-sm font-bold text-[#D4A66A]">Golden Hour 5:45 PM</span>
              </div>
            </div>
          </div>

          {/* Travel Analytics Super Dashboard */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A66A] block mb-2">ANALYTICS SUPER DASHBOARD</span>
              <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">
                14,280 km Traveled
              </h3>
              <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">
                Covered 12 Indian states, 34 historical monuments, and 18 UNESCO world heritage sites.
              </p>
            </div>

            <div className="pt-4 border-t border-[#B9854F]/20 flex justify-between items-center text-xs font-mono text-[#D4A66A]">
              <span>CARBON OFFSET: 100%</span>
              <a href="/memories" className="hover:underline flex items-center gap-1">
                Vault Memories <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </section>

      </PageContainer>
    </AppShell>
  );
};

export default Dashboard;
