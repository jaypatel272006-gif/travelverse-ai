import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, MapPin, Sparkles, Sun, DollarSign, Filter, ArrowRight } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';
import SpatialDestinationCard from '../components/spatial/SpatialDestinationCard';
import useDestinations from '../hooks/useDestinations';

export const IndiaExplorer = () => {
  const navigate = useNavigate();
  const { allDestinations, isInWishlist, toggleWishlistDestination } = useDestinations();
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');

  const regions = ['All', 'North', 'South', 'West', 'East', 'Northeast'];
  const styles = ['All', 'Royal Heritage', 'Backwaters & Nature', 'Himalayan Alpine', 'Spiritual Sacred', 'Relaxed & Wellness'];

  const filteredIndia = allDestinations.filter(d => {
    const matchesRegion = selectedRegion === 'All' || d.region === selectedRegion;
    const matchesStyle = selectedStyle === 'All' || d.travelStyle === selectedStyle;
    return matchesRegion && matchesStyle;
  });

  return (
    <AppShell title="India Explorer // Circuits & Discoveries">
      <PageContainer className="space-y-12">
        
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden border border-[#B9854F]/30 bg-[#24170F] p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B120C]/80 border border-[#D4A66A]/30 text-xs font-mono text-[#D4A66A]">
            <Compass size={14} className="animate-spin-slow" />
            <span>INDIAN SUBCONTINENT EXPLORATION ATLAS</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] max-w-3xl mx-auto leading-tight">
            Discover the Timeless Wonder of Incredible India
          </h1>

          <p className="text-sm sm:text-base text-[#E8CFA8]/80 max-w-2xl mx-auto font-light leading-relaxed">
            From the high Himalayan mountain deserts of Ladakh to the emerald backwaters of Kerala and ancient Vedic ghats of Varanasi.
          </p>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedRegion === reg
                    ? 'bg-[#B9854F] text-[#1B120C] font-bold shadow-lg shadow-[#B9854F]/20'
                    : 'bg-[#1B120C]/60 text-[#E8CFA8]/70 border border-[#B9854F]/20 hover:border-[#D4A66A]'
                }`}
              >
                {reg} India
              </button>
            ))}
          </div>
        </section>

        {/* Travel Style Selector */}
        <section className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#24170F] border border-[#B9854F]/25">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4A66A]">
            <Filter size={14} />
            <span>CIRCUIT STYLE:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  selectedStyle === style
                    ? 'bg-[#D4A66A]/20 text-[#D4A66A] border border-[#D4A66A]'
                    : 'text-[#E8CFA8]/60 hover:text-[#F5E7CF]'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </section>

        <HeritageDivider label={`INDIAN DESTINATIONS (${filteredIndia.length})`} />

        {/* Destination Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndia.map((dest) => (
            <SpatialDestinationCard
              key={dest.id}
              destination={dest}
              isSaved={isInWishlist(dest.id)}
              onToggleSave={toggleWishlistDestination}
            />
          ))}
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default IndiaExplorer;
