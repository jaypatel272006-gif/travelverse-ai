/**
 * TravelVerse AI - Human-Like AI Itinerary Engine (Year 2035)
 * Generates highly realistic, logistically sound daily travel plans.
 * Factors in travel fatigue, meal times, rest blocks, travel styles, and pace.
 */

// Local databases of authentic recommendations by destination
const localRecommendations = {
  delhi: {
    cafes: ['Indian Accent Café', 'United Coffee House', 'Blue Tokai Coffee Roasters (Khan Market)', 'Kunzum Travel Cafe'],
    restaurants: ['Karim\'s (Jama Masjid)', 'Bukhara (ITC Maurya)', 'Saravana Bhavan (Connaught Place)', 'Moti Mahal'],
    attractions: ['Red Fort', 'Qutub Minar', 'Humayun\'s Tomb', 'India Gate & Rajpath'],
    gems: ['Agrasen ki Baoli stepwell', 'Sunder Nursery organic gardens', 'Chandni Chowk spice market alleys'],
    views: ['Jama Masjid minaret overlook at noon', 'Signature Bridge at sunset', 'Qutub Minar illuminated at night'],
    emergency: 'All India Institute of Medical Sciences (AIIMS, Phone: +91 11 2658 8500). Dial 102 for ambulance services.',
    transport: 'The Delhi Metro is highly efficient and covers all zones. Use pre-paid auto-rickshaws for heritage street hops.'
  },
  mumbai: {
    cafes: ['Kyani & Co. (Irani Cafe)', 'Leela Cafe', 'The Tea Centre (Churchgate)', 'Subko Coffee Roasters'],
    restaurants: ['Trishna (Seafood)', 'Britannia & Co. Restaurant', 'Bademiya street food', 'The Table (Colaba)'],
    attractions: ['Gateway of India', 'Marine Drive Promenade', 'Chhatrapati Shivaji Terminus', 'Elephanta Caves'],
    gems: ['Chor Bazaar antique markets', 'Banganga Tank spiritual oasis', 'Khotachiwadi heritage village'],
    views: ['Marine Drive Queen\'s Necklace at night', 'Bandra-Worli Sea Link from Bandra Fort', 'Gateway of India at sunrise'],
    emergency: 'KEM Hospital Medical Core (Parel, Phone: +91 22 2410 7000). Dial 102 for emergency trauma services.',
    transport: 'Local trains connect north-south suburbs. Use auto-rickshaws in suburbs or yellow-black taxi cabs in south Mumbai.'
  },
  goa: {
    cafes: ['Artjuna Garden Cafe (Anjuna)', 'Carpe Diem (Majorda)', 'Baba Au Rhum (Arpora)'],
    restaurants: ['Gunpowder (Assagao)', 'Fisherman\'s Wharf (Cavelossim)', 'Mum\'s Kitchen (Panaji)', 'Thalassa (Siolim)'],
    attractions: ['Baga Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Fort Aguada'],
    gems: ['Chorla Ghat waterfall treks', 'Divar Island ferry and heritage trail', 'Netravali bubbling lake bubble pool'],
    views: ['Chapora Fort sunset view', 'Cabo de Rama cliffs overlook', 'Dona Paula jetty point'],
    emergency: 'Goa Medical College Hospital (Bambolim, Phone: +91 832 245 8727). Dial 108 for emergency trauma services.',
    transport: 'Self-drive scooter rental (₹350-₹500/day) is common for solo travelers. Private taxi cabs (GoaMiles app) for comfort.'
  },
  jaipur: {
    cafes: ['The Tattoo Cafe (Hawa Mahal views)', 'Anokhi Cafe (organic/healthy)', 'Tapri The Tea House'],
    restaurants: ['LMB - Laxmi Mishran Bhandar', 'Chokhi Dhani ethnic resort', '1135 AD (Amber Fort)', 'Niro\'s Restaurant'],
    attractions: ['Hawa Mahal', 'Amber Palace', 'City Palace', 'Jantar Mantar'],
    gems: ['Panna Meena ka Kund stepwell', 'Galta Ji monkey sanctuary temple', 'Amrapali Museum of Jewellery'],
    views: ['Nahargarh Fort sunset ramparts', 'Jaigarh Fort cannon overlooks', 'Jal Mahal lake viewpoint at twilight'],
    emergency: 'SMS Medical College Hospital (Jawahari Lal Nehru Marg, Phone: +91 141 256 0291). Dial 102 for emergency services.',
    transport: 'Auto-rickshaws are best for short hops. Private day cabs (₹1,800/day) are highly recommended for sightseeing in hot weather.'
  },
  agra: {
    cafes: ['Sheroes Hangout (inspiring run)', 'Café Sheroes', 'Taj Terrace'],
    restaurants: ['Pinch of Spice', 'Dasaprakash (south Indian)', 'Jahanpanah Mughlai dining', 'Taj Bano'],
    attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri ruins', 'Itmad-ud-Daulah (Baby Taj)'],
    gems: ['Mehtab Bagh sunset gardens', 'Sadar Bazaar marble crafts shops', 'Taj Nature Walk trails'],
    views: ['Taj Mahal from Yamuna riverbank at sunrise', 'Agra Fort royal towers overlooking Taj', 'Mehtab Bagh gardens at sunset'],
    emergency: 'Agra District General Hospital (Phone: +91 562 246 0033). Dial 102 for medical aid.',
    transport: 'Battery-operated golf carts and e-rickshaws operate around the Taj Mahal eco-zone. Private cabs for outstation ruins.'
  },
  kerala: {
    cafes: ['Kashi Art Cafe (Fort Kochi)', 'Teapot Cafe', 'The Pepper House Cafe'],
    restaurants: ['Oceanos Restaurant (Kochi)', 'Paragon Restaurant (Calicut style)', 'Villa Maya (Trivandrum)', 'Spice Garden'],
    attractions: ['Munnar Tea Gardens', 'Alleppey Backwaters', 'Varkala Cliff Beach', 'Athirappilly Waterfalls'],
    gems: ['Silent Valley bio-reserve trails', 'Marari secret fishing beach', 'Kumarakom bird sanctuary walks'],
    views: ['Munnar tea peaks shrouded in mist at sunrise', 'Varkala cliff sunset vistas', 'Alleppey houseboat lake views at twilight'],
    emergency: 'Cochin Medical College General Core (Kalamassery, Phone: +91 484 258 2300). Dial 108 for ambulance service.',
    transport: 'Pre-book private cars with drivers for hilly terrains like Munnar. Use government ferry networks in the backwaters.'
  },
  kashmir: {
    cafes: ['Books & Bricks Cafe (Srinagar)', 'The Chai Jaai Tearoom', 'Winterfell Cafe'],
    restaurants: ['Ahdoos (traditional Wazwan)', 'Mughal Darbar', 'Lhasa Restaurant', 'Shamyana Restaurant'],
    attractions: ['Dal Lake Shikaras', 'Gulmarg Meadow & Gondola', 'Pahalgam Valley', 'Shalimar Bagh gardens'],
    gems: ['Dachigam National Park hangul reserve', 'Nigeen Lake quiet houseboats', 'Aru Valley offbeat meadows'],
    views: ['Dal Lake floating market at sunrise', 'Affarwat Peak from Gulmarg Gondola', 'Betaab Valley pine forest views'],
    emergency: 'SMHS Hospital Medical Core (Karan Nagar, Srinagar, Phone: +91 194 250 4800). Dial 102 for ambulances.',
    transport: 'Book local prepaid tourist cabs (JKSRTC). Shikara boat rides are the primary local transit across Srinagar lakes.'
  },
  ladakh: {
    cafes: ['Lala\'s Art Cafe (Leh)', 'The Tibetan Kitchen Cafe', 'Leh Open Hand Cafe'],
    restaurants: ['The Tibetan Kitchen', 'Chopsticks Noodle Bar', 'Gesmo Restaurant (German bakery)', 'Alchi Kitchen'],
    attractions: ['Pangong Tso Lake', 'Nubra Valley dunes', 'Thiksey Monastery', 'Magnetic Hill'],
    gems: ['Tso Moriri high alpine lake', 'Alchi temple complex murals', 'Hemis high national park trail'],
    views: ['Pangong Lake color transition at noon', 'Diskit Monastery giant Buddha at sunrise', 'Leh Palace sunset overlook'],
    emergency: 'SNM Hospital Leh Central Core (Leh Ladakh, Phone: +91 1982 252 012). Dial 102 for emergency services.',
    transport: 'Rent high-ground vehicles (4x4 SUVs) with experienced local drivers for mountain passes. Royal Enfield bikes are popular.'
  },
  varanasi: {
    cafes: ['Brown Bread Bakery (organic)', 'Open Hand Cafe', 'Dosa Cafe (Ghat side)'],
    restaurants: ['Kashi Chat Bhandar', 'Deena Chat Bhandar', 'Baati Chokha restaurant', 'Lotus Lounge'],
    attractions: ['Dashashwamedh Ghat (Ganga Aarti)', 'Kashi Vishwanath Golden Temple', 'Sarnath deer park ruins', 'Assi Ghat'],
    gems: ['Lalita Ghat terracotta temple', 'Kachori Gali street stalls', 'Ramnagar Fort vintage museum'],
    views: ['Ganga Aarti from river boat at twilight', 'Sunrise boat ride along Manikarnika ghat', 'Assi Ghat subah-e-banaras morning rituals'],
    emergency: 'Sir Sunderlal Hospital Banaras Hindu University (BHU, Phone: +91 542 236 9224). Dial 102 for trauma services.',
    transport: 'E-rickshaws are useful in main streets. Walking is the only way to navigate the ancient ghat lanes.'
  },
  udaipur: {
    cafes: ['Jheel\'s Ginger Coffee House', 'Café Mewar', 'Sun N Moon Rooftop Cafe'],
    restaurants: ['Ambrai Restaurant (Ghatside)', 'Upre by 1559 AD', 'Millets of Mewar', 'Savage Garden'],
    attractions: ['City Palace Udaipur', 'Lake Pichola Boating', 'Jag Mandir Palace', 'Sajjangarh Monsoon Palace'],
    gems: ['Ahar cenotaphs royal tombs', 'Shilpgram artisan village crafts', 'Sajjangarh biological sanctuary'],
    views: ['Ambrai Ghat waterfront view of City Palace at night', 'Monsoon Palace hilltop sunset view', 'Lake Pichola boat cruise at twilight'],
    emergency: 'Maharana Bhupal Government General Hospital (Phone: +91 294 252 8811). Dial 102 for ambulance aid.',
    transport: 'Auto-rickshaws operate on standard routes. Private lake ferry cruises connect island palaces.'
  }
};

/**
 * Generate a highly realistic daily travel agenda matching travel style and pace
 */
export function generateDetailedItinerary(destination, duration, budgetType, interests, travelStyle, pace) {
  const normKey = destination.toLowerCase().trim();
  const rec = localRecommendations[normKey] || {
    cafes: [`Local Café de ${destination}`, `Central Coffee Roasters of ${destination}`],
    restaurants: [`Traditional Specialty Diner of ${destination}`, `Regional Heritage Kitchen`, `Hidden Alley Bistro`],
    attractions: [`Historic Landmark Palace`, `${destination} City Promenade`, `Old Quarter Cathedral`, `Local Heritage Museum`],
    gems: [`Historic Backstreet Alley Sanctuary`, `Old Quarter Botanical Walkway`, `Architectural Archway ruins`],
    views: [`Panoramic City Observatory Peak`, `Central Bridge viewpoint at twilight`, `Hilltop Fortress viewpoint`],
    emergency: `Local Central Hospital Medical Hub. Dial regional emergency lines for trauma services.`,
    transport: `Utilize local public rail systems and official city taxis for safe transit.`
  };

  // Read granular local storage preferences
  const isJain = localStorage.getItem('tv_food_jain') === 'true';
  const isVeg = localStorage.getItem('tv_food_veg') === 'true' || isJain;
  const isLowWalking = localStorage.getItem('tv_low_walking') === 'true';
  const isEvPriority = localStorage.getItem('tv_ev_priority') === 'true';
  const isScenicRoute = localStorage.getItem('tv_scenic_route') === 'true';

  // Base parameters based on Pace
  let startHour = 8.0; // 8:00 AM
  let restDuration = 1.0; // 1 hr rest after lunch
  let endHour = 20.5; // 8:30 PM
  let averageWalkingDist = isLowWalking ? '1–2 km' : '6–8 km';

  if (pace === 'Relaxed') {
    startHour = 9.0;
    restDuration = 2.0;
    endHour = 18.5; // 6:30 PM
    averageWalkingDist = isLowWalking ? '1 km' : '3–5 km';
  } else if (pace === 'Fast-Paced') {
    startHour = 7.0;
    restDuration = 0.5;
    endHour = 22.0; // 10:00 PM
    averageWalkingDist = isLowWalking ? '2 km' : '12–15 km';
  }

  // Adjustments based on Style
  if (travelStyle === 'Senior Citizen' || isLowWalking) {
    startHour = Math.max(startHour, 8.5);
    restDuration = Math.max(restDuration, 1.5);
    endHour = Math.min(endHour, 19.5); // early dinner
    averageWalkingDist = isLowWalking ? '1–2 km' : '2–4 km';
  } else if (travelStyle === 'Adventure') {
    startHour = Math.min(startHour, 7.5); // early start for treks
    averageWalkingDist = '10–18 km';
  }

  const days = Array.from({ length: duration }).map((_, idx) => {
    const dayNum = idx + 1;
    const timeline = [];

    // Helper: format decimal hour to AM/PM string
    const formatHour = (dec) => {
      const h = Math.floor(dec);
      const m = Math.round((dec - h) * 60);
      const suffix = h >= 12 ? 'PM' : 'AM';
      const displayH = h % 12 === 0 ? 12 : h % 12;
      const displayM = m.toString().padStart(2, '0');
      return `${displayH}:${displayM} ${suffix}`;
    };

    // Day 1: Logistics & Jet Lag Recovery
    if (dayNum === 1) {
      timeline.push({
        time: formatHour(startHour),
        activity: 'Voyage Arrival & Transit',
        details: `Arrive at airport/station. Secure local SIM/rail passes and transfer to hotel.${isEvPriority ? ' EV shuttle selected.' : ''}`,
        icon: '✈️'
      });
      timeline.push({
        time: formatHour(12.0),
        activity: 'Hotel Check-in & Decompress',
        details: 'Check into hotel. Refresh and drop off luggage. Rest to recover from travel fatigue.',
        icon: '🏨'
      });
      timeline.push({
        time: formatHour(13.5),
        activity: 'Lunch nearby',
        details: isJain ? `Taste local pure Jain delicacies at ${rec.restaurants[0]} (no onion, garlic, or potatoes).` : (isVeg ? `Enjoy local vegetarian lunch at ${rec.restaurants[0]}.` : `Relaxed lunch at ${rec.restaurants[0]} to taste local culinary profiles.`),
        icon: '🍽️'
      });
      
      const exploreHour = 15.0;
      timeline.push({
        time: formatHour(exploreHour),
        activity: `First Orientation Walk: ${rec.attractions[0] || 'Downtown Square'}`,
        details: `Relaxed walk around the central sector. Photo breaks and exploring hidden boutiques.${isLowWalking ? ' (Low walking mode: wheelchair friendly trails and flat pavement).' : ' (Wait times: minimal).'}`,
        icon: '📸'
      });

      timeline.push({
        time: formatHour(18.0),
        activity: 'Decompress at Lodging',
        details: 'Return to hotel, refresh, and adjust to timezone indices.',
        icon: '💤'
      });

      timeline.push({
        time: formatHour(19.5),
        activity: 'Welcome Dinner',
        details: isJain ? `Pure Jain vegetarian dinner at ${rec.restaurants[1]} (custom prepared).` : (isVeg ? `Vegetarian dining selection at ${rec.restaurants[1]}.` : `Fine dining at ${rec.restaurants[1]} to celebrate first night.`),
        icon: '🍷'
      });

      timeline.push({
        time: formatHour(21.0),
        activity: 'Quiet Evening Walk',
        details: `Short stroll around hotel block. Safe return and sleep prep.${isLowWalking ? ' Golf cart shuttle pre-reserved for night transit.' : ''}`,
        icon: '🌙'
      });
    } else {
      // Standard days
      let currentHour = startHour;

      // Wake-up and Breakfast
      timeline.push({
        time: formatHour(currentHour),
        activity: 'Rise & Refresh',
        details: travelStyle === 'Adventure' ? 'Morning gears check & stretching.' : 'Wake up and enjoy hotel amenities.',
        icon: '🌅'
      });
      currentHour += 0.75;

      timeline.push({
        time: formatHour(currentHour),
        activity: 'Breakfast local briefing',
        details: isJain ? `Jain breakfast at ${rec.cafes[idx % rec.cafes.length]} (herbal teas and flatbreads).` : `Breakfast at ${rec.cafes[idx % rec.cafes.length]}. Order local specialties and review daily transit routes.`,
        icon: '☕'
      });
      currentHour += 1.0;

      // Morning Attraction
      timeline.push({
        time: formatHour(currentHour),
        activity: `Morning Main Attraction: ${rec.attractions[idx % rec.attractions.length]}`,
        details: `Arrive early to beat queues. Queue wait time: ~15-30 mins. Focus on major highlights.${isLowWalking ? ' (Low walking: golf-cart rental station near entry gate).' : ' (Estimated walking: 1.5km).'}`,
        icon: '🏛️'
      });
      currentHour += (pace === 'Fast-Paced' ? 2.0 : 2.5); // time at sight

      // Mid-day coffee/snack break
      if (pace !== 'Fast-Paced') {
        timeline.push({
          time: formatHour(currentHour),
          activity: 'Mid-day Hydration & Cafe Rest',
          details: `Enjoy a light tea/coffee break at ${rec.cafes[(idx + 1) % rec.cafes.length]}. Upload photography logs.`,
          icon: '🍵'
        });
        currentHour += 0.5;
      }

      // Lunch
      timeline.push({
        time: formatHour(currentHour),
        activity: 'Lunch break',
        details: isJain ? `Pure Jain lunch recipes at ${rec.restaurants[(idx + 2) % rec.restaurants.length]}.` : (isVeg ? `Vegetarian meal at ${rec.restaurants[(idx + 2) % rec.restaurants.length]}.` : `Taste regional delicacies at ${rec.restaurants[(idx + 2) % rec.restaurants.length]}. High comfort seating.`),
        icon: '🍜'
      });
      currentHour += 1.0;

      // Post-lunch Rest block (Fatigue preventer!)
      if (restDuration > 0) {
        timeline.push({
          time: formatHour(currentHour),
          activity: 'Mid-day Rest Interval',
          details: travelStyle === 'Senior Citizen' || travelStyle === 'Family' || isLowWalking
            ? 'Return to hotel or relax in air-conditioned park lounge to prevent travel fatigue.'
            : 'Find a shady viewpoint spot or local library, review coordinates, and rehydrate.',
          icon: '🌴'
        });
        currentHour += restDuration;
      }

      // Afternoon Attraction / Hidden Gem
      timeline.push({
        time: formatHour(currentHour),
        activity: `Afternoon Exploration: ${rec.gems[idx % rec.gems.length]}`,
        details: `Discover this local hidden gem. Less crowded, highly scenic. Ideal for photography.${isLowWalking ? ' (Low walking: shuttle drop-off directly at gate).' : ''}`,
        icon: '💎'
      });
      currentHour += 2.0;

      // Late afternoon viewpoint / sunset
      timeline.push({
        time: formatHour(currentHour),
        activity: `Sunset Spectacle: ${rec.views[idx % rec.views.length]}`,
        details: `Position yourself at the best coordinates for golden hour views and photographs.${isLowWalking ? ' Accessible elevator/ramp view platform pre-marked.' : ''}`,
        icon: '🌇'
      });
      currentHour += 1.0;

      // Evening decompression
      timeline.push({
        time: formatHour(currentHour),
        activity: 'Lodging Rest & Refresh',
        details: 'Return to hotel. Shower, change attire, and decompress from day walk logs.',
        icon: '🛀'
      });
      currentHour += 1.25;

      // Dinner
      timeline.push({
        time: formatHour(currentHour),
        activity: 'Dinner Session',
        details: isJain ? `Custom Jain dinner at ${rec.restaurants[(idx + 3) % rec.restaurants.length]}.` : (isVeg ? `Pure vegetarian menu items at ${rec.restaurants[(idx + 3) % rec.restaurants.length]}.` : `Dine at ${rec.restaurants[(idx + 3) % rec.restaurants.length]}. Traditional recipes.`),
        icon: '🍲'
      });
      currentHour += 1.25;

      // Night experience if matching pace
      if (currentHour < endHour) {
        timeline.push({
          time: formatHour(currentHour),
          activity: travelStyle === 'Adventure' ? 'Stargazing / night hike briefing' : travelStyle === 'Backpacker' || interests.includes('Nightlife') ? 'Social tavern crawl & nightlife coordinates' : 'Local evening stroll & desserts',
          details: 'Decompressing evening experience matching travel style preference indices.',
          icon: '🌌'
        });
      }
    }

    return {
      day: dayNum,
      title: dayNum === 1 ? 'Arrival & Orientation Dossier' : `Sector Mapping - Day ${dayNum}`,
      timeline
    };
  });

  // Apply modifiers to advice
  let finalTransport = rec.transport;
  if (isEvPriority) {
    finalTransport += ' [EV Priority: charging stations mapped at tourist parking].';
  }
  if (isScenicRoute) {
    finalTransport += ' [Scenic Route: follow coastal/mountain bypass loops for maximum photogenic vistas].';
  }

  return {
    days,
    averageWalkingDist,
    emergencyServices: rec.emergency,
    transportationAdvice: finalTransport
  };
}
