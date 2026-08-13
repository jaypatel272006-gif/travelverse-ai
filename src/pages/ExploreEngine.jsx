import React, { useState } from 'react';
import { 
  Globe, Compass, Sparkles, Filter, Sun, 
  MapPin, Utensils, Feather, Flame, Shield, ArrowRight 
} from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import DestinationCard from '../components/cards/DestinationCard';
import HeritageDivider from '../components/heritage/HeritageDivider';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export const ExploreEngine = () => {
  const [selectedMood, setSelectedMood] = useState('All');

  const moods = ['All', 'Royal Heritage', 'Backwaters & Nature', 'Himalayan Alpine', 'Spiritual Sacred', 'Desert Dunes'];

  const allDestinations = [
    {
      id: 'jaipur',
      title: 'Jaipur Pink Forts',
      subtitle: 'Rajasthan Heritage',
      description: 'Amber Fort, City Palace, Hawa Mahal and royal bazaar jewelry.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      price: '₹32,800',
      weather: '24°C • Fair',
      mood: 'Royal Heritage',
      tags: ['Palaces', 'Bazaars']
    },
    {
      id: 'udaipur',
      title: 'Udaipur City of Lakes',
      subtitle: 'Romantic Palaces',
      description: 'Lake Pichola island palaces, Jagmandir, and Monsoon Palace views.',
      image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
      price: '₹38,500',
      weather: '26°C • Clear',
      mood: 'Royal Heritage',
      tags: ['Lakes', 'Palaces']
    },
    {
      id: 'munnar',
      title: 'Munnar Tea Valleys',
      subtitle: 'Kerala Highlands',
      description: 'Rolling mist-covered tea plantations, Anamudi peaks, and spice gardens.',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      price: '₹24,000',
      weather: '18°C • Mist',
      mood: 'Backwaters & Nature',
      tags: ['Tea Gardens', 'Nature']
    },
    {
      id: 'leh',
      title: 'Leh Ladakh High Passes',
      subtitle: 'Trans-Himalaya',
      description: 'Pangong Tso Lake, Khardung La motor route, and ancient Thiksey Monastery.',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
      price: '₹48,000',
      weather: '10°C • Cold',
      mood: 'Himalayan Alpine',
      tags: ['High Altitude', 'Passes']
    },
    {
      id: 'varanasi',
      title: 'Varanasi Ancient Ghats',
      subtitle: 'Spiritual Sacred',
      description: 'Centuries-old boat rides along Manikarnika & Ganga Aarti rituals.',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      price: '₹18,400',
      weather: '22°C • Clear',
      mood: 'Spiritual Sacred',
      tags: ['Ghats', 'Pilgrimage']
    },
    {
      id: 'jaisalmer',
      title: 'Jaisalmer Golden Fort',
      subtitle: 'Thar Desert',
      description: 'Living sandstone fort, Sam sand dunes camel safari, and starlit glamping.',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80',
      price: '₹29,000',
      weather: '28°C • Sunny',
      mood: 'Desert Dunes',
      tags: ['Desert', 'Fortress']
    }
  ];

  const filteredDestinations = selectedMood === 'All' 
    ? allDestinations 
    : allDestinations.filter(d => d.mood === selectedMood);

  const localGuides = [
    {
      role: 'Local Historian',
      name: 'Rana Vikram Singh',
      specialty: 'Rajput Architecture & Fort Strategy',
      avatar: '👑'
    },
    {
      role: 'Culinary Master',
      name: 'Chef Meenakshi',
      specialty: 'Authentic Regional Thali & Spices',
      avatar: '🍛'
    },
    {
      role: 'Himalayan Expedition Leader',
      name: 'Tashi Norbu',
      specialty: 'High Pass Weather & Trekking',
      avatar: '🏔️'
    },
    {
      role: 'Spiritual Scholar',
      name: 'Pandit Devraj',
      specialty: 'Vedic Rituals & Ghat History',
      avatar: '🪔'
    }
  ];

  return (
    <AppShell title="Infinite Discovery Engine // 2100">
      <PageContainer className="space-y-12">
        
        {/* Explore Header */}
        <section className="space-y-3 border-b border-[#B9854F]/25 pb-6">
          <div className="flex items-center gap-2">
            <Badge variant="gold">
              <Globe size={12} className="mr-1" />
              PLANET-SCALE DISCOVERY
            </Badge>
            <span className="text-xs font-mono text-[#D4A66A]">MOOD & CLIMATE MATCHING</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF]">
            INFINITE DISCOVERY ENGINE
          </h1>
          <p className="text-xs sm:text-sm text-[#E8CFA8]/80 font-light max-w-2xl">
            Filter by travel mood, weather preference, cultural depth, or culinary interests.
          </p>
        </section>

        {/* Mood Filter Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-mono text-[#D4A66A] uppercase pr-2 flex items-center gap-1 shrink-0">
            <Filter size={12} />
            <span>MOOD:</span>
          </span>
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMood(m)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shrink-0 ${
                selectedMood === m 
                  ? 'bg-[#B9854F] text-[#1B120C] font-bold border border-[#D4A66A]' 
                  : 'bg-[#24170F] text-[#E8CFA8] border border-[#B9854F]/30 hover:border-[#D4A66A]'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
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
        </section>

        <HeritageDivider label="AI LOCAL GUIDE AVATARS" />

        {/* AI Local Guide Avatars */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#B9854F]/20 pb-3">
            <div>
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">LOCAL EXPERTISE</span>
              <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">AI Local Guide Avatars</h2>
            </div>
            <span className="text-xs font-mono text-[#D4A66A]">ON-DEMAND LOCAL CONCIERGE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localGuides.map((g) => (
              <div key={g.name} className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-2xl">
                  {g.avatar}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#D4A66A] uppercase">{g.role}</span>
                  <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">{g.name}</h4>
                  <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">{g.specialty}</p>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-left justify-start px-0 text-[#D4A66A]">
                  Consult Guide →
                </Button>
              </div>
            ))}
          </div>
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default ExploreEngine;
