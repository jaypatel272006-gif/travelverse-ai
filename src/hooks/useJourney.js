import { useMemo } from 'react';
import { useApp } from '../context/AppContext';

export const useJourney = () => {
  const { itineraries } = useApp();

  const activeTrip = useMemo(() => {
    if (itineraries && itineraries.length > 0) {
      return itineraries[0]; // Most recent active saved trip
    }
    // Default fallback demo active trip if no saved trip exists yet
    return {
      id: 'demo-active-kashmir',
      destination: 'Kashmir Valley',
      activeDay: 3,
      totalDays: 6,
      currentStep: '12:30 PM — Shikara ride across Dal Lake & Mughal Gardens',
      weather: '18°C • Clear Alpine Skies',
      hotel: 'The Lalit Grand Palace Srinagar',
      budgetRemaining: '₹28,400 of ₹50,000',
      days: [
        {
          day: 1,
          title: 'Arrival in Srinagar & Dal Lake Sunset',
          activities: ['Land at Srinagar Airport', 'Check in to Luxury Houseboat', 'Sunset Shikara Ride']
        },
        {
          day: 2,
          title: 'Gulmarg Gondola & Alpine Heights',
          activities: ['Drive to Gulmarg', 'Phase 1 & Phase 2 Cable Car Ride', 'Snow Viewpoint Cafe']
        },
        {
          day: 3,
          title: 'Mughal Gardens & Local Heritage Walk',
          activities: ['Visit Nishat Bagh & Shalimar Bagh', 'Srinagar Old City Heritage Walk', 'Authentic Wazwan Dinner']
        },
        {
          day: 4,
          title: 'Pahalgam Valley & Betaab Trail',
          activities: ['Scenic drive along Lidder River', 'Betaab Valley excursion', 'Pony trek to Baisaran']
        }
      ]
    };
  }, [itineraries]);

  return {
    activeTrip,
    hasActiveTrip: Boolean(itineraries && itineraries.length > 0)
  };
};

export default useJourney;
