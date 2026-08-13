import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, Calendar, DollarSign, Clock, Star, Sparkles, Heart, Share2, 
  ArrowLeft, CheckCircle2, Navigation, Compass, Utensils, Home, Shield 
} from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';
import useDestinations from '../hooks/useDestinations';
import { useApp } from '../context/AppContext';

export const DestinationDossier = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getDestinationByIdOrSlug, isInWishlist, toggleWishlistDestination } = useDestinations();
  const { showToast } = useApp();

  const destination = getDestinationByIdOrSlug(slug);

  if (!destination) {
    return (
      <AppShell title="Destination Dossier">
        <PageContainer className="text-center py-20 space-y-4">
          <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Destination Dossier Not Found</h2>
          <p className="text-xs text-[#E8CFA8]/70">The destination requested could not be retrieved from the central atlas.</p>
          <Button variant="gold" onClick={() => navigate('/explore')}>Return to Explore Engine</Button>
        </PageContainer>
      </AppShell>
    );
  }

  const isSaved = isInWishlist(destination.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Destination Dossier link copied to clipboard!', 'success');
    }
  };

  const handlePlanTrip = () => {
    navigate('/planner', { state: { destination: destination.name || destination.title } });
  };

  return (
    <AppShell title={`${destination.title} // Dossier`}>
      <PageContainer className="space-y-12">
        
        {/* Back Link */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-xs font-mono text-[#D4A66A] hover:text-[#F5E7CF] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO EXPLORE ENGINE</span>
        </button>

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden border border-[#B9854F]/30 bg-[#24170F] min-h-[420px] flex flex-col justify-end p-6 sm:p-10">
          <img 
            src={destination.heroImage || destination.image} 
            alt={destination.title}
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-[#1B120C]/60 to-transparent" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold">
                <MapPin size={12} className="mr-1" />
                {destination.state}, {destination.country}
              </Badge>
              <Badge variant="bronze">{destination.region} Region</Badge>
              <Badge variant="maroon">{destination.travelStyle}</Badge>
            </div>

            <h1 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] leading-tight">
              {destination.title}
            </h1>

            <p className="text-sm sm:text-base text-[#E8CFA8] font-light leading-relaxed">
              {destination.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="gold" size="lg" onClick={handlePlanTrip}>
                <Sparkles size={16} className="mr-2" />
                PLAN THIS JOURNEY
              </Button>

              <Button 
                variant={isSaved ? "maroon" : "outline"} 
                size="lg" 
                onClick={() => toggleWishlistDestination(destination)}
              >
                <Heart size={16} className={`mr-2 ${isSaved ? 'fill-current' : ''}`} />
                {isSaved ? 'SAVED TO DOSSIER' : 'SAVE DESTINATION'}
              </Button>

              <Button variant="secondary" size="lg" onClick={handleShare}>
                <Share2 size={16} className="mr-2" />
                SHARE
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 text-center space-y-1">
            <Calendar size={18} className="mx-auto text-[#D4A66A]" />
            <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">BEST TIME TO VISIT</span>
            <span className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">{destination.bestTime}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 text-center space-y-1">
            <DollarSign size={18} className="mx-auto text-[#D4A66A]" />
            <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">ESTIMATED BUDGET</span>
            <span className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">{destination.budget}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 text-center space-y-1">
            <Clock size={18} className="mx-auto text-[#D4A66A]" />
            <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">IDEAL DURATION</span>
            <span className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">{destination.duration}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 text-center space-y-1">
            <Star size={18} className="mx-auto text-[#D4A66A]" />
            <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">TRAVELER RATING</span>
            <span className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">{destination.rating} / 5.0</span>
          </div>
        </section>

        {/* Why Go Section */}
        <section className="p-8 rounded-3xl bg-[#24170F] border border-[#D4A66A]/30 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#D4A66A]" />
            <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Why Visit {destination.name}?</h3>
          </div>
          <p className="text-sm text-[#E8CFA8]/90 font-light leading-relaxed">
            {destination.whyGo}
          </p>
        </section>

        <HeritageDivider label="CURATED EXPERIENCES & HIGHLIGHTS" />

        {/* Top Experiences */}
        <section className="space-y-6">
          <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Top Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.topExperiences?.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#24170F] border border-[#B9854F]/20 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#D4A66A]">
                  <span>EXPERIENCE 0{idx + 1}</span>
                  <span>{exp.timeNeeded}</span>
                </div>
                <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">{exp.title}</h4>
                <p className="text-xs text-[#E8CFA8]/80 font-light">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food & Stay Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Culinary Specialties */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/25 space-y-4">
            <div className="flex items-center gap-2">
              <Utensils size={18} className="text-[#D4A66A]" />
              <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">Culinary Universe & Food</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {destination.foodSpecialties?.map((food, i) => (
                <Badge key={i} variant="gold">{food}</Badge>
              ))}
            </div>
          </div>

          {/* Stays & Accommodations */}
          <div className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/25 space-y-4">
            <div className="flex items-center gap-2">
              <Home size={18} className="text-[#D4A66A]" />
              <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">Accommodation Archetypes</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {destination.accommodationTypes?.map((stay, i) => (
                <Badge key={i} variant="bronze">{stay}</Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Suggested Itinerary */}
        <section className="space-y-6">
          <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Suggested Itinerary Outline</h3>
          <div className="space-y-4">
            {destination.suggestedItinerary?.map((item) => (
              <div key={item.day} className="p-5 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center font-mono text-xs font-bold text-[#D4A66A] shrink-0">
                  DAY {item.day}
                </div>
                <div>
                  <h4 className="font-serif-heritage text-base font-bold text-[#F5E7CF]">{item.title}</h4>
                  <p className="text-xs text-[#E8CFA8]/80 font-light mt-1">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default DestinationDossier;
