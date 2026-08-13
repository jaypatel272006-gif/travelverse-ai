import React from 'react';
import { Award, Zap, Compass, Sparkles, Shield, Trophy } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export const TravelDNALab = () => {
  const achievements = [
    { title: 'UNESCO ARCHITECT', desc: 'Visited 7 UNESCO World Heritage Forts & Palaces.', xp: '+1,200 XP' },
    { title: 'ROYAL THALI GOURMET', desc: 'Sampled authentic regional cuisine across 5 states.', xp: '+800 XP' },
    { title: 'SACRED RIVER PILGRIM', desc: 'Attended sunset Ganga Aarti in Varanasi & Haridwar.', xp: '+950 XP' }
  ];

  return (
    <AppShell title="Travel DNA Lab // 2100">
      <PageContainer className="space-y-12">
        
        {/* Header */}
        <section className="space-y-2 border-b border-[#B9854F]/25 pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="gold">
              <Award size={12} className="mr-1" />
              GENOME ARCHETYPE LAB
            </Badge>
            <span className="text-xs font-mono text-[#D4A66A]">LEVEL 14 // ROYAL EXPLORER</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-4xl font-bold text-[#F5E7CF]">
            TRAVEL DNA PROFILE & RANKS
          </h1>
        </section>

        {/* Genome Score breakdown */}
        <section className="p-8 rounded-3xl bg-[#24170F] border border-[#D4A66A]/40 space-y-6">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4 border-b border-[#B9854F]/20 pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#D4A66A] uppercase">GENOME MATCH</span>
              <h2 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF]">
                Archetype: Royal Heritage Explorer
              </h2>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono text-[#D4A66A]">TOTAL XP ACCUMULATED</span>
              <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">24,850 XP</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className="p-4 rounded-2xl bg-[#1B120C] border border-[#B9854F]/30 space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#D4A66A]">
                  <span>ACHIEVEMENT</span>
                  <span>{a.xp}</span>
                </div>
                <h4 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">{a.title}</h4>
                <p className="text-xs text-[#E8CFA8]/80 font-light">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default TravelDNALab;
