import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

export const SandstoneDestinations = () => {
  const destinations = [
    {
      id: 'dest-rajasthan',
      title: 'Rajasthan',
      subtitle: 'Royal Heritage',
      description: 'Golden forts, royal palaces, desert dunes and royal culinary traditions.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
      tags: ['Palaces', 'Culture', 'Royalty'],
      weather: '28°C • Sunny'
    },
    {
      id: 'dest-kerala',
      title: 'Kerala',
      subtitle: "God's Own Country",
      description: 'Tranquil emerald backwaters, lush tea gardens, ayurvedic sanctuaries.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      tags: ['Backwaters', 'Wellness', 'Nature'],
      weather: '26°C • Breezy'
    },
    {
      id: 'dest-kashmir',
      title: 'Kashmir',
      subtitle: 'Valleys of Paradise',
      description: 'Shikara rides on Dal Lake, snow peaks of Gulmarg, pine valleys.',
      image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
      tags: ['Valleys', 'Snow', 'Lakes'],
      weather: '14°C • Crisp'
    },
    {
      id: 'dest-varanasi',
      title: 'Varanasi',
      subtitle: 'The Eternal City',
      description: 'Ancient sacred ghats, evening Ganga Aarti, timeless spiritual heritage.',
      image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
      tags: ['Spirituality', 'History', 'Sacred'],
      weather: '29°C • Clear'
    },
    {
      id: 'dest-ladakh',
      title: 'Ladakh',
      subtitle: 'Land of High Passes',
      description: 'Stark mountain landscapes, ancient monasteries, Pangong sapphire waters.',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
      tags: ['Mountains', 'Adventure', 'Buddhist'],
      weather: '10°C • High Altitude'
    },
    {
      id: 'dest-goa',
      title: 'Goa',
      subtitle: 'Coastal Escape',
      description: 'Portuguese heritage churches, palm-fringed beaches, spice plantations.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      tags: ['Coast', 'Heritage', 'Relaxation'],
      weather: '30°C • Warm'
    }
  ];

  return (
    <section id="explore" className="py-24 px-4 sm:px-8 bg-[#1B120C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#B9854F]/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4A66A] font-semibold mb-2 block">
              Curated Destination Catalog
            </span>
            <h2 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
              STORIES WAITING TO BE DISCOVERED
            </h2>
          </div>
          <p className="text-sm text-[#E8CFA8]/70 max-w-md font-light">
            Each destination holds centuries of art, philosophy, geography, and memory. Explore iconic regions shaped into bespoke journeys.
          </p>
        </div>

        {/* Large Image-First Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[480px] rounded-3xl overflow-hidden border border-[#B9854F]/30 bg-[#24170F] shadow-xl hover:border-[#D4A66A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B5E34]/20 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
              />
              
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-[#1B120C]/40 to-transparent group-hover:via-[#1B120C]/60 transition-colors duration-500" />

              {/* Top Weather & Tag Badges */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                <div className="flex gap-1.5 flex-wrap">
                  {dest.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#1B120C]/70 backdrop-blur-md border border-[#B9854F]/30 text-[#E8CFA8]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="w-9 h-9 rounded-full bg-[#24170F]/80 backdrop-blur-md border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A] group-hover:bg-[#D4A66A] group-hover:text-[#1B120C] transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Bottom Content Panel with Smooth Upward Shift on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4A66A] font-medium mb-1">
                  {dest.subtitle}
                </span>
                <h3 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF] mb-2 tracking-wide">
                  {dest.title}
                </h3>
                <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed mb-4 line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  {dest.description}
                </p>

                <div className="pt-3 border-t border-[#B9854F]/30 flex items-center justify-between text-[11px] text-[#D4A66A] font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{dest.weather}</span>
                  </span>
                  <span className="uppercase tracking-widest text-[#F5E7CF] group-hover:text-[#D4A66A] transition-colors">
                    Explore Route →
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SandstoneDestinations;
