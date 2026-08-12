import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, MapPin, Feather, Heart, Bookmark } from 'lucide-react';

export const SandstoneMemoriesVault = () => {
  const memoryCapsules = [
    {
      id: 'mem-1',
      title: 'Sunrise Over Amer Fort Ramparts',
      location: 'Jaipur, Rajasthan',
      date: 'October 24, 2026',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      note: 'The morning mist over Maota Lake was unforgettable as classical sitar resonated from the palace courtyard.',
      stamp: 'OFFICIAL PASSPORT STAMP // JAIPUR'
    },
    {
      id: 'mem-2',
      title: 'Houseboat Evening on Vembanad Lake',
      location: 'Kumarakom, Kerala',
      date: 'November 12, 2026',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      note: 'Drifting along palm-lined backwaters while fresh coconut water and traditional Karimeen fish thali were served at sunset.',
      stamp: 'HERITAGE VAULT // KERALA'
    },
    {
      id: 'mem-3',
      title: 'Evening Ganga Aarti at Dashashwamedh',
      location: 'Varanasi, Uttar Pradesh',
      date: 'December 04, 2026',
      image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80',
      note: 'Rhythmic chanting, burning camphor, floating brass lamps and the eternal river Ganges.',
      stamp: 'SACRED ARCHIVE // KASHI'
    }
  ];

  return (
    <section id="memories" className="py-24 px-4 sm:px-8 bg-gradient-to-b from-[#1B120C] via-[#24170F] to-[#1B120C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#342117] border border-[#B9854F]/30 text-[11px] uppercase tracking-[0.25em] text-[#D4A66A] mb-3">
            <Bookmark size={12} />
            <span>Digital Memory Vault & Journal</span>
          </div>
          <h2 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF] tracking-tight">
            DON'T JUST TRAVEL. REMEMBER.
          </h2>
          <p className="text-sm text-[#E8CFA8]/80 max-w-xl font-light mt-3">
            Preserve your journeys in rich digital memory capsules. Photos, voice notes, journal entries, and travel stamps woven into a personal lifetime legacy.
          </p>
        </div>

        {/* Highlight Stats Banner */}
        <div className="p-6 rounded-2xl bg-[#24170F]/80 border border-[#B9854F]/30 mb-12 flex flex-wrap justify-around items-center text-center gap-4">
          <div>
            <span className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">32</span>
            <p className="text-[11px] font-mono text-[#D4A66A] uppercase">Photographs Archived</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#B9854F]/20" />
          <div>
            <span className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">4</span>
            <p className="text-[11px] font-mono text-[#D4A66A] uppercase">Heritage Locations</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#B9854F]/20" />
          <div>
            <span className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">1</span>
            <p className="text-[11px] font-mono text-[#D4A66A] uppercase">Unforgettable Journey</p>
          </div>
        </div>

        {/* Editorial Photo & Journal Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memoryCapsules.map((mem, idx) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-5 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 shadow-xl flex flex-col justify-between group hover:border-[#D4A66A] transition-all"
            >
              <div>
                {/* Photo with Frame */}
                <div className="relative rounded-2xl overflow-hidden h-56 mb-4 border border-[#B9854F]/20">
                  <img
                    src={mem.image}
                    alt={mem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1B120C]/80 backdrop-blur-md text-[10px] font-mono text-[#D4A66A] border border-[#B9854F]/30">
                    {mem.date}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#D4A66A] font-mono mb-1">
                  <MapPin size={12} />
                  <span>{mem.location}</span>
                </div>

                <h3 className="font-serif-heritage text-xl text-[#F5E7CF] font-bold mb-3">
                  {mem.title}
                </h3>

                <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed italic mb-4">
                  "{mem.note}"
                </p>
              </div>

              {/* Memory Stamp Footer */}
              <div className="pt-3 border-t border-[#B9854F]/20 flex justify-between items-center text-[10px] font-mono text-[#8B5E34]">
                <span>{mem.stamp}</span>
                <Heart size={14} className="text-[#D4A66A] cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SandstoneMemoriesVault;
