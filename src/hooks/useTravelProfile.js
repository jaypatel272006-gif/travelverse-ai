import { useMemo } from 'react';
import { useApp } from '../context/AppContext';

export const useTravelProfile = () => {
  const { user, userXp, userLevel, userBadges, userRank, wishlist, itineraries } = useApp();

  const travelDnaScore = useMemo(() => {
    // Calculate Travel Genome score based on activity and saved destinations
    const count = (wishlist.destinations?.length || 0) + (itineraries?.length || 0);
    const score = Math.min(99, 72 + Math.floor(userXp / 100) + count * 2);
    return score;
  }, [userXp, wishlist, itineraries]);

  const genomeMetrics = useMemo(() => {
    return [
      { key: 'adventure', label: 'Adventure Index', score: 88, color: '#38bdf8' },
      { key: 'culture', label: 'Cultural Immersion', score: 94, color: '#f59e0b' },
      { key: 'relaxation', label: 'Serenity & Wellness', score: 76, color: '#10b981' },
      { key: 'gastronomy', label: 'Culinary Exploration', score: 91, color: '#ec4899' },
      { key: 'pace', label: 'Travel Pace', score: 'Balanced (Moderate)' },
      { key: 'climate', label: 'Preferred Climate', score: 'Tropical & Alpine' }
    ];
  }, []);

  const statsSummary = useMemo(() => {
    const savedCount = (wishlist.destinations?.length || 0) + (wishlist.hotels?.length || 0) + (wishlist.flights?.length || 0);
    const tripsCount = itineraries?.length || 0;
    return {
      totalXp: userXp,
      level: userLevel,
      rank: userRank || 'Cosmic Explorer',
      badgesUnlocked: userBadges?.length || 0,
      savedItems: savedCount,
      plannedTrips: tripsCount,
      dnaScore: travelDnaScore
    };
  }, [userXp, userLevel, userRank, userBadges, wishlist, itineraries, travelDnaScore]);

  return {
    user,
    statsSummary,
    genomeMetrics,
    badges: userBadges || []
  };
};

export default useTravelProfile;
