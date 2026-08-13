import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Compass, Clock, Calendar, DollarSign, 
  MapPin, CheckCircle, AlertCircle, RefreshCw, ArrowRight, ShieldCheck 
} from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import ArchitecturalFrame from '../components/heritage/ArchitecturalFrame';
import HeritageDivider from '../components/heritage/HeritageDivider';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import AIInsightCard from '../components/cards/AIInsightCard';

export const AITripPlanner = () => {
  const [destination, setDestination] = useState('Rajasthan Royal Circuit');
  const [duration, setDuration] = useState('7 Days');
  const [style, setStyle] = useState('Royal Heritage');
  const [budgetTier, setBudgetTier] = useState('Comfortable (₹40,000)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState(true);

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedItinerary(true);
    }, 1200);
  };

  const sampleDays = [
    {
      day: 1,
      title: 'Arrival in Jaipur — The Pink City Heritage Entry',
      morning: '09:00 AM • Check-in at heritage Haveli hotel. Welcome thali & rest.',
      afternoon: '02:00 PM • Guided tour of City Palace & Jantar Mantar observatory.',
      evening: '06:30 PM • Sunset tea at Nahargarh Fort overlooking Jaipur city lights.',
      fatigueScore: 'Low (Walking: 4.2 km)',
      backupPlan: 'In case of rain, swap Nahargarh Fort for Albert Hall Museum indoor galleries.'
    },
    {
      day: 2,
      title: 'Amer Fort Fortress & Anokhi Block Printing',
      morning: '07:30 AM • Early Amer Fort ascent (Bypassing peak heat & queues).',
      afternoon: '01:00 PM • Traditional Rajasthani lunch at 1135 AD inside Amer Fort.',
      evening: '04:30 PM • Hands-on textile block printing workshop at Anokhi Museum.',
      fatigueScore: 'Moderate (Walking: 6.8 km)',
      backupPlan: 'If walking fatigue is detected, electric golf carts will be dispatched.'
    },
    {
      day: 3,
      title: 'Jaipur → Jodhpur Blue City Express Route',
      morning: '08:00 AM • Scenic highway drive via Pushkar Holy Lake (2hr stopover).',
      afternoon: '02:30 PM • Arrive in Jodhpur. Check-in at Raas Jodhpur facing Mehrangarh.',
      evening: '07:00 PM • Rooftop dining at Indique with illuminated fort views.',
      fatigueScore: 'Low (Transit day)',
      backupPlan: 'Highway route auto-rerouted via toll-free scenic village bypass.'
    }
  ];

  return (
    <AppShell title="AI Trip Planner // Reality Engine 2100">
      <PageContainer className="space-y-12">
        
        {/* Planner Header */}
        <section className="space-y-3 border-b border-[#B9854F]/25 pb-6">
          <div className="flex items-center gap-2">
            <Badge variant="gold">
              <Sparkles size={12} className="mr-1" />
              DYNAMIC REALITY-BASED ENGINE
            </Badge>
            <span className="text-xs font-mono text-[#D4A66A]">FATIGUE & WEATHER AWARE</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF]">
            QUANTUM TRIP COMPOSER
          </h1>
          <p className="text-xs sm:text-sm text-[#E8CFA8]/80 font-light max-w-2xl">
            Input your dream destination and constraints. TravelVerse AI calculates realistic walking distances, fatigue recovery breaks, meal windows, and automatic backup plans.
          </p>
        </section>

        {/* Multi-Variable Configurator Form */}
        <form onSubmit={handleGenerate} className="p-6 sm:p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/40 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Destination */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Destination / Region
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              />
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              >
                <option value="3 Days">3 Days (Express)</option>
                <option value="5 Days">5 Days (Balanced)</option>
                <option value="7 Days">7 Days (Full Circuit)</option>
                <option value="10 Days">10 Days (Deep Exploration)</option>
              </select>
            </div>

            {/* Style */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Travel Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              >
                <option value="Royal Heritage">Royal Heritage & Palaces</option>
                <option value="Relaxed & Wellness">Relaxed & Wellness Rest</option>
                <option value="Adventure">Adventure & Offbeat</option>
                <option value="Spiritual">Spiritual Pilgrimage</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Target Budget Tier
              </label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              >
                <option value="Economy (₹25,000)">Economy (₹25,000)</option>
                <option value="Comfortable (₹40,000)">Comfortable (₹40,000)</option>
                <option value="Luxury (₹85,000)">Luxury Heritage (₹85,000)</option>
              </select>
            </div>

          </div>

          <div className="flex justify-end pt-4 border-t border-[#B9854F]/20">
            <Button
              type="submit"
              variant="ai"
              size="lg"
              isLoading={isGenerating}
            >
              Generate Optimized Itinerary →
            </Button>
          </div>
        </form>

        {/* Generated Itinerary Output Section */}
        {generatedItinerary && (
          <section className="space-y-8">
            <div className="flex justify-between items-center border-b border-[#B9854F]/20 pb-3">
              <div>
                <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">OUTPUT ITINERARY</span>
                <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">
                  {destination} — {duration} Master Dossier
                </h2>
              </div>

              <div className="flex gap-2">
                <Badge variant="gold">
                  <ShieldCheck size={12} className="mr-1" />
                  Fatigue Verified
                </Badge>
              </div>
            </div>

            {/* Days Timeline Stack */}
            <div className="space-y-6">
              {sampleDays.map((d) => (
                <div key={d.day} className="p-6 sm:p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4">
                  <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2 border-b border-[#B9854F]/20 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center font-mono font-bold text-[#D4A66A]">
                        0{d.day}
                      </div>
                      <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">
                        {d.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono text-[#D4A66A]">
                      Fatigue Rating: <strong className="text-[#F5E7CF]">{d.fatigueScore}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-[#E8CFA8] pt-2">
                    <div className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20 space-y-1">
                      <span className="text-[9px] text-[#9D8870] uppercase block">MORNING SCHEDULE</span>
                      <p className="text-[#F5E7CF]">{d.morning}</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20 space-y-1">
                      <span className="text-[9px] text-[#9D8870] uppercase block">AFTERNOON SCHEDULE</span>
                      <p className="text-[#F5E7CF]">{d.afternoon}</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20 space-y-1">
                      <span className="text-[9px] text-[#9D8870] uppercase block">EVENING SCHEDULE</span>
                      <p className="text-[#F5E7CF]">{d.evening}</p>
                    </div>
                  </div>

                  {/* Contingency Backup */}
                  <div className="p-3 rounded-xl bg-[#342117]/60 border border-[#D4A66A]/30 text-xs flex items-center gap-2 text-[#E8CFA8]">
                    <AlertCircle size={14} className="text-[#D4A66A] shrink-0" />
                    <span><strong>AI Contingency Plan:</strong> {d.backupPlan}</span>
                  </div>
                </div>
              ))}
            </div>

          </section>
        )}

      </PageContainer>
    </AppShell>
  );
};

export default AITripPlanner;
