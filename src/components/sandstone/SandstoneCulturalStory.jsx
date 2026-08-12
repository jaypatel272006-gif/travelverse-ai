import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, Sparkles } from 'lucide-react';

export const SandstoneCulturalStory = () => {
  return (
    <section id="story" className="py-24 px-4 sm:px-8 bg-gradient-to-b from-[#1B120C] via-[#24170F] to-[#1B120C] relative overflow-hidden">
      {/* Background Architectural Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none architectural-pattern-bg" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[11px] uppercase tracking-[0.25em] text-[#D4A66A] mb-3">
            <Landmark size={12} />
            <span>Cultural Heritage & Exploration</span>
          </div>
          <h2 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
            INDIA, TOLD THROUGH JOURNEYS
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B9854F] to-transparent mt-4" />
        </div>

        {/* Split Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Editorial Photograph with Architectural Sandstone Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Outer Architectural Frame Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4A66A]" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4A66A]" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4A66A]" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4A66A]" />

            <div className="relative rounded-3xl overflow-hidden border border-[#B9854F]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80"
                alt="Udaipur City Palace Lake City"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#24170F]/80 backdrop-blur-md border border-[#B9854F]/30 flex justify-between items-center">
                <div>
                  <h4 className="font-serif-heritage text-lg text-[#F5E7CF] font-bold">Udaipur City Palace</h4>
                  <p className="text-xs text-[#E8CFA8]/70">Lake Pichola • Mewar Dynasty</p>
                </div>
                <span className="text-xs font-mono text-[#D4A66A] px-2.5 py-1 rounded bg-[#342117] border border-[#B9854F]/30">EST. 1559</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Serif Quote & Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start gap-6 lg:pl-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#B9854F]/40 flex items-center justify-center text-[#D4A66A]">
              <Sparkles size={24} />
            </div>

            <blockquote className="font-serif-heritage text-2xl sm:text-4xl text-[#F5E7CF] leading-snug font-normal italic border-l-2 border-[#D4A66A] pl-6 py-2">
              "Some places are destinations. <br />
              <span className="text-[#D4A66A] font-semibold not-italic">Others become part of you."</span>
            </blockquote>

            <p className="text-base text-[#E8CFA8]/80 font-light leading-relaxed">
              Travel through India's timeless architecture, sacred traditions, diverse landscapes, regional culinary masterworks, and centuries-old stories — with custom journeys intelligently shaped around the way you want to experience them.
            </p>

            <div className="pt-4 border-t border-[#B9854F]/20 w-full flex items-center justify-between">
              <a
                href="#explore"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-[#D4A66A] hover:text-[#F5E7CF] transition-colors group"
              >
                <span>EXPLORE INDIA</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-[#8B5E34] font-mono">01 // HERITAGE STORY</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SandstoneCulturalStory;
