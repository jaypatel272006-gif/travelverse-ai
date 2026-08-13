import React from 'react';
import { Bookmark, Camera, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';

export const MemoryVault = () => {
  const memoryLogs = [
    {
      id: 1,
      title: 'Sunrise over Amber Fort Sheesh Mahal',
      location: 'Jaipur, Rajasthan',
      date: 'Oct 14, 2025',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      note: 'The morning light reflecting off 400-year-old convex mirrors was completely breathtaking.'
    },
    {
      id: 2,
      title: 'Evening Ganga Aarti Ritual at Dashashwamedh',
      location: 'Varanasi, Uttar Pradesh',
      date: 'Dec 02, 2025',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      note: 'Rhythmic brass lamp chants echoing across the holy river at twilight.'
    }
  ];

  const passportStamps = [
    { name: 'RAJASTHAN', title: 'Royal Forts Master', date: '2025' },
    { name: 'KERALA', title: 'Backwater Mariner', date: '2025' },
    { name: 'UTTAR PRADESH', title: 'Sacred Ganges Pilgrim', date: '2025' },
    { name: 'LADAKH', title: 'Trans-Himalayan Pass', date: 'UNLOCKED' }
  ];

  return (
    <AppShell title="Memory Vault // 2100">
      <PageContainer className="space-y-12">
        
        {/* Header */}
        <section className="space-y-2 border-b border-[#B9854F]/25 pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="gold">
              <Bookmark size={12} className="mr-1" />
              DIGITAL PASSPORT & VAULT
            </Badge>
            <span className="text-xs font-mono text-[#D4A66A]">PERMANENT JOURNAL LOG</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-4xl font-bold text-[#F5E7CF]">
            MEMORIES & LEGACY VAULT
          </h1>
        </section>

        {/* Passport Stamps Grid */}
        <section className="space-y-4">
          <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Digital Passport Stamps</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {passportStamps.map((s) => (
              <div key={s.name} className="p-4 rounded-2xl bg-[#24170F] border border-[#D4A66A]/30 text-center space-y-2">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#D4A66A] mx-auto flex items-center justify-center text-[10px] font-mono text-[#D4A66A] font-bold">
                  STAMP
                </div>
                <div>
                  <h4 className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">{s.name}</h4>
                  <span className="text-[10px] font-mono text-[#9D8870] block">{s.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HeritageDivider label="SAVED JOURNAL MOMENTS" />

        {/* Memory Journal Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memoryLogs.map((m) => (
            <div key={m.id} className="p-6 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-4">
              <div className="h-48 rounded-2xl overflow-hidden border border-[#B9854F]/20">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-[#D4A66A] mb-1">
                  <span>{m.location}</span>
                  <span>{m.date}</span>
                </div>
                <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">{m.title}</h3>
                <p className="text-xs text-[#E8CFA8]/80 font-light mt-2">{m.note}</p>
              </div>
            </div>
          ))}
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default MemoryVault;
