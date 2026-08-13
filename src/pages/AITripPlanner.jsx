import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Compass, Clock, Calendar, DollarSign, 
  MapPin, CheckCircle, AlertCircle, RefreshCw, ArrowRight, ShieldCheck, PhoneCall, Bus
} from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import ArchitecturalFrame from '../components/heritage/ArchitecturalFrame';
import HeritageDivider from '../components/heritage/HeritageDivider';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { generateDetailedItinerary } from '../utils/itineraryEngine';

export const AITripPlanner = () => {
  const location = useLocation();
  const [destination, setDestination] = useState('Jaipur');
  const [durationDays, setDurationDays] = useState(5);
  const [style, setStyle] = useState('Royal Heritage');
  const [budgetTier, setBudgetTier] = useState('Mid-range');
  const [pace, setPace] = useState('Balanced');
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState(null);

  const generatePlan = React.useCallback((dest, dur, budget, st, pc) => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = generateDetailedItinerary(dest, dur, budget, ['Heritage', 'Food'], st, pc);
      setItinerary(result);
      setIsGenerating(false);
    }, 600);
  }, []);

  useEffect(() => {
    let targetDest = 'Jaipur';
    if (location.state?.destination) {
      targetDest = location.state.destination;
    } else if (location.state?.prompt) {
      const promptText = location.state.prompt.toLowerCase();
      if (promptText.includes('rajasthan') || promptText.includes('jaipur')) targetDest = 'Jaipur';
      else if (promptText.includes('kerala')) targetDest = 'Kerala';
      else if (promptText.includes('varanasi') || promptText.includes('kashi')) targetDest = 'Varanasi';
      else if (promptText.includes('ladakh')) targetDest = 'Ladakh';
      else if (promptText.includes('goa')) targetDest = 'Goa';
      else if (promptText.includes('kashmir')) targetDest = 'Kashmir';
      else targetDest = location.state.prompt.split(' ')[0] || 'Jaipur';
    }

    setDestination(targetDest);
    generatePlan(targetDest, durationDays, budgetTier, style, pace);
  }, [location.state, generatePlan]);

  const handleGenerate = (e) => {
    e.preventDefault();
    generatePlan(destination, durationDays, budgetTier, style, pace);
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Destination */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Destination / Region
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Jaipur, Goa, Kerala, Varanasi"
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              />
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Duration (Days)
              </label>
              <select
                value={durationDays}
                onChange={(e) => setDurationDays(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              >
                <option value={3}>3 Days (Express)</option>
                <option value={5}>5 Days (Balanced)</option>
                <option value={7}>7 Days (Full Circuit)</option>
                <option value={10}>10 Days (Deep Exploration)</option>
              </select>
            </div>

            {/* Pace */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Pacing Index
              </label>
              <select
                value={pace}
                onChange={(e) => setPace(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              >
                <option value="Relaxed">Relaxed (3-5 km/day)</option>
                <option value="Balanced">Balanced (6-8 km/day)</option>
                <option value="Fast-Paced">Fast-Paced (12-15 km/day)</option>
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
                <option value="Royal Heritage">Royal Heritage</option>
                <option value="Senior Citizen">Senior Citizen (Low Walking)</option>
                <option value="Adventure">Adventure & Offbeat</option>
                <option value="Spiritual">Spiritual Pilgrimage</option>
                <option value="Backpacker">Backpacker Explorer</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#D4A66A] uppercase block">
                Budget Tier
              </label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs sm:text-sm text-[#F5E7CF] focus:outline-none focus:border-[#D4A66A]"
              >
                <option value="Backpacker">Backpacker (Hostels)</option>
                <option value="Mid-range">Mid-range (Boutique Stays)</option>
                <option value="Luxury">Luxury Heritage (Palaces & Spas)</option>
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
        {itinerary && (
          <section className="space-y-8">
            <div className="flex justify-between items-center border-b border-[#B9854F]/20 pb-3">
              <div>
                <span className="text-[10px] font-mono text-[#D4A66A] uppercase tracking-widest block">OUTPUT DOSSIER</span>
                <h2 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">
                  {destination} — {durationDays}-Day Human-Centered Itinerary
                </h2>
              </div>

              <div className="flex gap-2">
                <Badge variant="gold">
                  <ShieldCheck size={12} className="mr-1" />
                  Walking Target: {itinerary.averageWalkingDist}
                </Badge>
              </div>
            </div>

            {/* Essential Local Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#24170F] border border-[#B9854F]/30 flex items-start gap-3">
                <PhoneCall size={18} className="text-[#D4A66A] shrink-0 mt-1" />
                <div className="space-y-1 text-xs">
                  <span className="font-mono text-[#D4A66A] uppercase font-bold block">EMERGENCY MEDICAL ADVICE</span>
                  <p className="text-[#F5E7CF]">{itinerary.emergencyServices}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#24170F] border border-[#B9854F]/30 flex items-start gap-3">
                <Bus size={18} className="text-[#D4A66A] shrink-0 mt-1" />
                <div className="space-y-1 text-xs">
                  <span className="font-mono text-[#D4A66A] uppercase font-bold block">TRANSIT LOGISTICS</span>
                  <p className="text-[#F5E7CF]">{itinerary.transportationAdvice}</p>
                </div>
              </div>
            </div>

            {/* Days Timeline Stack */}
            <div className="space-y-6">
              {itinerary.days.map((d) => (
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
                  </div>

                  {/* Hourly Timeline Items */}
                  <div className="space-y-3 pt-2">
                    {d.timeline.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20 flex items-start gap-3 text-xs">
                        <span className="text-base shrink-0">{item.icon}</span>
                        <div className="space-y-1 flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">{item.activity}</span>
                            <span className="font-mono text-[10px] text-[#D4A66A] bg-[#24170F] px-2 py-0.5 rounded border border-[#B9854F]/30">{item.time}</span>
                          </div>
                          <p className="text-[#E8CFA8]/80 text-[11px] font-sans-ui">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contingency Backup */}
                  <div className="p-3 rounded-xl bg-[#342117]/60 border border-[#D4A66A]/30 text-xs flex items-center gap-2 text-[#E8CFA8]">
                    <AlertCircle size={14} className="text-[#D4A66A] shrink-0" />
                    <span><strong>AI Rest & Backup Contingency:</strong> If fatigue rating exceeds threshold, automatic rest pauses are inserted between 2:00 PM - 4:00 PM.</span>
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
