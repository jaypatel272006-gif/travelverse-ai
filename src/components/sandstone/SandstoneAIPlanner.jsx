import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const SandstoneAIPlanner = () => {
  const [activeDay, setActiveDay] = useState(1);

  const itineraryDays = [
    {
      day: 1,
      title: 'Arrive in Jaipur & Royal Heritage Walk',
      location: 'Jaipur, Rajasthan',
      events: [
        { time: '09:30 AM', title: 'Check-in at Shahpura Haveli Heritage Stay' },
        { time: '02:00 PM', title: 'Guided Curator Walk: City Palace & Armoury' },
        { time: '07:30 PM', title: 'Rajasthani Royal Thali & Sitar Evening at Chokhi Dhani' }
      ]
    },
    {
      day: 2,
      title: 'Amber Fort Citadel & Panna Meena Stepwell',
      location: 'Amer, Rajasthan',
      events: [
        { time: '08:00 AM', title: 'Sunrise Ascent to Hilltop Amer Fort' },
        { time: '11:30 AM', title: 'Architectural Photography at Panna Meena Stepwell' },
        { time: '04:00 PM', title: 'Block Printing Masterclass in Sanganer Village' }
      ]
    },
    {
      day: 3,
      title: 'Drive to Blue City Jodhpur & Mehrangarh',
      location: 'Jodhpur, Rajasthan',
      events: [
        { time: '10:00 AM', title: 'Scenic Highway Drive across Marwar Desert' },
        { time: '03:30 PM', title: 'Explore Cliffside Mehrangarh Fort Ramparts' },
        { time: '07:00 PM', title: 'Rooftop Candlelight Dinner overlooking Blue City' }
      ]
    }
  ];

  return (
    <section id="planner" className="py-24 px-4 sm:px-8 bg-[#1B120C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[11px] uppercase tracking-[0.25em] text-[#D4A66A] mb-3">
            <Sparkles size={12} />
            <span>Autonomous Intelligence Engine</span>
          </div>
          <h2 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
            YOUR JOURNEY. INTELLIGENTLY COMPOSED.
          </h2>
          <p className="text-sm text-[#E8CFA8]/80 max-w-xl font-light mt-3">
            Ancient culture meets modern predictive AI. Describe your ideal getaway, and watch TravelVerse compose an authentic, human-centered itinerary.
          </p>
        </div>

        {/* Split-Screen AI Composer Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Prompt & Parameters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-[#24170F]/90 border border-[#B9854F]/40 shadow-2xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A]">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Tell TravelVerse what you want</h3>
                <p className="text-xs text-[#E8CFA8]/60">Natural Language Trip Engine</p>
              </div>
            </div>

            {/* Prompt Box */}
            <div className="p-4 rounded-2xl bg-[#1B120C] border border-[#B9854F]/30 text-sm text-[#E8CFA8] italic font-serif-heritage leading-relaxed shadow-inner">
              "I want to spend 6 days exploring Rajasthan, focusing on forts, local food and peaceful heritage stays."
            </div>

            {/* Parameter Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[#D4A66A]">
                6 Days / 5 Nights
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[#D4A66A]">
                Heritage Haveli Stays
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[#D4A66A]">
                Culture & Architecture
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[#D4A66A]">
                Budget: ₹45,000 / person
              </span>
            </div>

            {/* AI Confidence Meter */}
            <div className="p-4 rounded-2xl bg-[#342117]/50 border border-[#B9854F]/20 flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#E8CFA8]/80">AI Optimization Score</span>
                <span className="text-[#D4A66A] font-bold">98.4% Match</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1B120C] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8B5E34] to-[#D4A66A] w-[98%]" />
              </div>
            </div>

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#8B5E34] to-[#B9854F] hover:from-[#B9854F] hover:to-[#D4A66A] text-[#1B120C] text-xs font-bold uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Sparkles size={16} />
              <span>GENERATE FULL ITINERARY</span>
            </button>
          </motion.div>

          {/* Right: Mock AI Generated Itinerary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-[#24170F]/90 border border-[#D4A66A]/40 shadow-2xl flex flex-col gap-6"
          >
            {/* Itinerary Banner Header */}
            <div className="flex justify-between items-start border-b border-[#B9854F]/30 pb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#D4A66A]">
                  AI GENERATED DOSSIER #TRV-894
                </span>
                <h3 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF] mt-1">
                  RAJASTHAN HERITAGE CIRCUIT
                </h3>
                <p className="text-xs text-[#E8CFA8]/70 font-mono mt-1">6 DAYS / 5 NIGHTS • JAIPUR & JODHPUR</p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/40 text-xs font-mono text-[#D4A66A]">
                READY TO BOOK
              </span>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex gap-2 border-b border-[#B9854F]/20 pb-3 overflow-x-auto">
              {itineraryDays.map((d) => (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all shrink-0 cursor-pointer ${
                    activeDay === d.day
                      ? 'bg-[#B9854F] text-[#1B120C] shadow-md'
                      : 'bg-[#1B120C] text-[#E8CFA8]/70 hover:text-[#F5E7CF] border border-[#B9854F]/20'
                  }`}
                >
                  DAY 0{d.day}
                </button>
              ))}
            </div>

            {/* Active Day Detail */}
            {itineraryDays.filter(d => d.day === activeDay).map(d => (
              <div key={d.day} className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif-heritage text-xl text-[#F5E7CF] font-bold">{d.title}</h4>
                  <span className="text-xs text-[#D4A66A] font-mono flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{d.location}</span>
                  </span>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  {d.events.map((ev, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#1B120C]/80 border border-[#B9854F]/20 flex items-start gap-4 hover:border-[#D4A66A]/40 transition-colors">
                      <span className="text-xs font-mono font-semibold text-[#D4A66A] bg-[#342117] px-2.5 py-1 rounded border border-[#B9854F]/30 shrink-0">
                        {ev.time}
                      </span>
                      <p className="text-xs sm:text-sm text-[#F5E7CF] font-light pt-0.5">
                        {ev.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-[#B9854F]/30 flex justify-between items-center">
              <span className="text-xs text-[#E8CFA8]/60 font-mono">ESTIMATED TOTAL: ₹42,500 / PERSON</span>
              <button className="text-xs uppercase font-bold tracking-widest text-[#D4A66A] hover:text-[#F5E7CF] flex items-center gap-1">
                <span>View Complete Schedule</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SandstoneAIPlanner;
