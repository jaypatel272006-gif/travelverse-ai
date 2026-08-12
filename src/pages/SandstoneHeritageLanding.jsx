import React from 'react';
import SandstoneNav from '../components/sandstone/SandstoneNav';
import SandstoneHero from '../components/sandstone/SandstoneHero';
import SandstoneCulturalStory from '../components/sandstone/SandstoneCulturalStory';
import SandstoneDestinations from '../components/sandstone/SandstoneDestinations';
import SandstoneHeritageMap from '../components/sandstone/SandstoneHeritageMap';
import SandstoneAIPlanner from '../components/sandstone/SandstoneAIPlanner';
import SandstoneTravelDNA from '../components/sandstone/SandstoneTravelDNA';
import SandstoneSpiritualUniverse from '../components/sandstone/SandstoneSpiritualUniverse';
import SandstoneMemoriesVault from '../components/sandstone/SandstoneMemoriesVault';
import SandstoneCTA from '../components/sandstone/SandstoneCTA';
import SandstoneFooter from '../components/sandstone/SandstoneFooter';

export const SandstoneHeritageLanding = () => {
  return (
    <div className="min-h-screen bg-[#1B120C] text-[#F5E7CF] font-sans-ui selection:bg-[#8B5E34] selection:text-[#F5E7CF]">
      {/* 1. Navigation */}
      <SandstoneNav />

      {/* 2. Hero Section */}
      <SandstoneHero />

      {/* 3. Cultural Story Section */}
      <SandstoneCulturalStory />

      {/* 4. Destination Discovery */}
      <SandstoneDestinations />

      {/* 5. Heritage Map Atlas */}
      <SandstoneHeritageMap />

      {/* 6. AI Trip Planner Composer */}
      <SandstoneAIPlanner />

      {/* 7. Travel DNA Genome */}
      <SandstoneTravelDNA />

      {/* 8. Spiritual India & Pilgrimage */}
      <SandstoneSpiritualUniverse />

      {/* 9. Travel Memories Vault */}
      <SandstoneMemoriesVault />

      {/* 10. Premium CTA */}
      <SandstoneCTA />

      {/* 11. Footer */}
      <SandstoneFooter />
    </div>
  );
};

export default SandstoneHeritageLanding;
