// Mock localStorage and window APIs for Node environment
global.localStorage = {
  getItem: (key) => {
    console.log(`[Mock LocalStorage] getItem called for key: ${key}`);
    return null;
  },
  setItem: (key, val) => {}
};

import { generateDetailedItinerary } from '../src/utils/itineraryEngine.js';

// Test inputs matching all sectors
const rouletteSectors = [
  { name: 'Goa', icon: '🏖️', mood: 'Relaxed', type: 'Beach', color: 'from-cyan-500 to-blue-500', costScale: 1.0 },
  { name: 'Jaipur', icon: '🏰', mood: 'Luxury', type: 'Heritage', color: 'from-amber-500 to-orange-500', costScale: 1.1 },
  { name: 'Kerala', icon: '🌿', mood: 'Relaxed', type: 'Nature', color: 'from-emerald-500 to-teal-500', costScale: 1.2 },
  { name: 'Kashmir', icon: '🏔️', mood: 'Romantic', type: 'Valley', color: 'from-sky-500 to-indigo-500', costScale: 1.3 },
  { name: 'Ladakh', icon: '🏍️', mood: 'Adventure', type: 'Highland', color: 'from-purple-500 to-violet-500', costScale: 1.4 },
  { name: 'Varanasi', icon: '🕉️', mood: 'Spiritual', type: 'Ancient', color: 'from-rose-500 to-pink-500', costScale: 0.9 },
  { name: 'Udaipur', icon: '🛶', mood: 'Romantic', type: 'Lakes', color: 'from-teal-500 to-emerald-500', costScale: 1.15 },
  { name: 'Kyoto', icon: '⛩️', mood: 'Spiritual', type: 'Temples', color: 'from-red-500 to-rose-600', costScale: 2.2 }
];

console.log('--- STARTING ROULETTE SIMULATION ---');
try {
  rouletteSectors.forEach((landedSector) => {
    console.log(`\nTesting sector: ${landedSector.name}`);
    const budget = 150000;
    const duration = 5;
    const budgetTier = budget < 80000 ? 'Backpacker' : (budget < 250000 ? 'Mid-range' : 'Luxury');
    
    console.log(`Generating itinerary for: ${landedSector.name}, duration: ${duration}, tier: ${budgetTier}`);
    const detailedPlan = generateDetailedItinerary(
      landedSector.name,
      duration,
      budgetTier,
      ['Adventure', 'Relaxation', 'Food'],
      landedSector.mood,
      'Balanced'
    );
    
    console.log(`Detailed plan days generated: ${detailedPlan.days.length}`);
    
    // Simulate mapping to agenda
    const agenda = detailedPlan.days;
    
    // Test if timeline filter/map crashes (AdventureRoulette line 439)
    agenda.forEach((day) => {
      const filtered = day.timeline.filter(t => {
        if (!t.activity) {
          throw new Error(`t.activity is undefined on day ${day.day}`);
        }
        return t.activity.includes('Attraction') || t.activity.includes('Exploration');
      });
      const mapped = filtered.map(t => t.activity.replace('Morning Main Attraction: ', '').replace('Afternoon Exploration: ', ''));
      const text = mapped.join(' ➔ ');
      console.log(`Day ${day.day} mapped: ${text}`);
    });
  });
  console.log('\n--- ALL SECTORS SIMULATED SUCCESSFUL WITHOUT ERROR ---');
} catch (err) {
  console.error('\n!!! CRITICAL ERROR ENCOUNTERED !!!');
  console.error(err);
}
