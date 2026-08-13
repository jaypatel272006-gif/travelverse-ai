import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Award, Shield, Heart, MapPin, Sparkles, BookOpen, Clock } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';
import { useApp } from '../context/AppContext';
import useTravelProfile from '../hooks/useTravelProfile';

export const Profile = () => {
  const navigate = useNavigate();
  const { currentUser, wishlist, userXp, xpLevel } = useApp();
  const { travelDNA, updateStylePreference } = useTravelProfile();

  return (
    <AppShell title="Travel DNA Profile // Explorer Genome">
      <PageContainer className="space-y-12">
        
        {/* Profile Header */}
        <section className="relative rounded-3xl bg-[#24170F] border border-[#B9854F]/30 p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-3xl bg-[#342117] border-2 border-[#D4A66A] flex items-center justify-center font-serif-heritage text-3xl font-bold text-[#F5E7CF] shrink-0 shadow-xl">
            {currentUser?.avatar || currentUser?.name?.[0] || 'E'}
          </div>

          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Badge variant="gold">
                <Award size={12} className="mr-1" />
                {xpLevel}
              </Badge>
              <Badge variant="bronze">{userXp} TOTAL XP</Badge>
              <Badge variant="maroon">{currentUser?.tier || 'Explorer Rank'}</Badge>
            </div>

            <h1 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF]">
              {currentUser?.name || 'Explorer Profile'}
            </h1>

            <p className="text-xs font-mono text-[#D4A66A]">
              {currentUser?.email || 'explorer@travelverse.ai'}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate('/settings')}>
              SETTINGS & PREFERENCES
            </Button>
          </div>
        </section>

        {/* Travel DNA Genome Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#D4A66A]" />
            <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Travel DNA Genome Matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 space-y-2">
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">EXPLORATION STYLE</span>
              <span className="font-serif-heritage text-lg font-bold text-[#F5E7CF] block">{travelDNA.style}</span>
              <p className="text-[11px] text-[#E8CFA8]/70">Prefers immersive local history & architectural heritage.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 space-y-2">
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">PACING INDEX</span>
              <span className="font-serif-heritage text-lg font-bold text-[#F5E7CF] block">{travelDNA.pacing}</span>
              <p className="text-[11px] text-[#E8CFA8]/70">Balanced attraction visits with mandatory rest breaks.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 space-y-2">
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">ACCOMMODATION TIER</span>
              <span className="font-serif-heritage text-lg font-bold text-[#F5E7CF] block">{travelDNA.accommodation}</span>
              <p className="text-[11px] text-[#E8CFA8]/70">Heritage palaces, boutique stays & scenic eco-resorts.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 space-y-2">
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">CULINARY FOCUS</span>
              <span className="font-serif-heritage text-lg font-bold text-[#F5E7CF] block">{travelDNA.foodPreference}</span>
              <p className="text-[11px] text-[#E8CFA8]/70">Authentic regional thalis & authentic local street specialties.</p>
            </div>
          </div>
        </section>

        <HeritageDivider label="SAVED DOSSIERS & WISHLIST" />

        {/* Saved Destinations Summary */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">
              Saved Wishlist ({wishlist.destinations.length})
            </h3>
            <Button variant="outline" size="sm" onClick={() => navigate('/explore')}>
              BROWSE ATLAS
            </Button>
          </div>

          {wishlist.destinations.length === 0 ? (
            <div className="p-8 rounded-2xl bg-[#24170F] border border-dashed border-[#B9854F]/30 text-center space-y-2">
              <Heart size={24} className="mx-auto text-[#D4A66A]/50" />
              <p className="text-xs text-[#E8CFA8]/70">No saved destinations in your wishlist yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {wishlist.destinations.map((dest) => (
                <div key={dest.id} className="p-4 rounded-xl bg-[#24170F] border border-[#B9854F]/25 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">{dest.title || dest.name}</h4>
                    <p className="text-[10px] font-mono text-[#D4A66A]">{dest.state || dest.country}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => navigate(`/destination/${dest.slug || dest.id}`)}>
                    VIEW
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default Profile;
