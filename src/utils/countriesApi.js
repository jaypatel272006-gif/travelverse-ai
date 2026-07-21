/**
 * TravelVerse AI - Global API & Database Utility
 * Fetches real-time country details, Wikipedia summaries, and weather forecasts.
 * Provides fallback data for offline mode or API limits.

// Lightweight fetch wrapper with built-in AbortController timeout to prevent infinite hangs
async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 6000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });
    return response;
  } finally {
    clearTimeout(id);
  }
}


// Local fallback database for prominent destinations
const curations = {
  delhi: {
    overview: 'Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque.',
    cuisine: ['Chole Bhature & Butter Chicken', 'Paranthas of Gali Paranthe Wali', 'Dahi Bhalla & Chaat'],
    attractions: ['Red Fort & Chandni Chowk', 'Qutub Minar Complex', 'Humayun\'s Tomb', 'Lotus Temple'],
    activities: ['Ride a rickshaw in Chandni Chowk', 'Walk around Lodhi Gardens', 'Shop at Dilli Haat open-air bazaar', 'Pay respects at India Gate at dusk'],
    visa: 'eVisa available for tourist arrivals from over 160 countries. Standard passport must be valid for at least 6 months.',
    safety: 'Generally safe for tourists. Stay alert in crowded markets, secure belongings, and use registered app-cabs for night transit.',
    bestTime: 'October to March (Winter season) offers highly pleasant coordinates for exploring ruins.',
    nearby: ['Agra (3h away)', 'Jaipur (5h away)', 'Rishikesh (5h away)'],
    hotels: [
      { name: 'The Oberoi New Delhi', price: 21200, rating: 4.9, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Taj Palace Delhi', price: 18500, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' }
    ]
  },
  mumbai: {
    overview: 'Mumbai (formerly Bombay) is a densely populated city on India’s west coast. A financial powerhouse, it’s India’s largest city and the heart of the Bollywood film industry, featuring historic colonial monuments.',
    cuisine: ['Vada Pav & Pav Bhaji', 'Bombay Sandwich & Bhel Puri', 'Coastal Fish Curry'],
    attractions: ['Gateway of India', 'Marine Drive Queen\'s Necklace', 'Chhatrapati Shivaji Terminus', 'Bandra-Worli Sea Link'],
    activities: ['Walk along Marine Drive at sunset', 'Take a ferry to Elephanta Caves', 'Explore Colaba Causeway shopping lanes', 'Eat street food at Chowpatty Beach'],
    visa: 'eVisa required for international tourists. Easily obtained online prior to flight corridors.',
    safety: 'Extremely safe metro with active night policing. Standard precautions apply in crowded local trains.',
    bestTime: 'November to February when breezes from the Arabian Sea keep temperatures moderate.',
    nearby: ['Lonavala (2h away)', 'Alibaug (1.5h ferry away)', 'Pune (3h away)'],
    hotels: [
      { name: 'Taj Mahal Palace Hotel', price: 36600, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
      { name: 'The Oberoi Mumbai', price: 29000, rating: 4.8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' }
    ]
  },
  goa: {
    overview: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations.',
    cuisine: ['Fish Curry Rice & Bebinca', 'Goan Vindaloo', 'Feni & Seafood Platters'],
    attractions: ['Baga Beach & Anjuna Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Falls'],
    activities: ['Enjoy parasailing and jet skiing at Calangute', 'Tour a tropical spice plantation', 'Dance at an Anjuna beach party', 'Take a sunset cruise on Mandovi River'],
    visa: 'Standard Indian tourist eVisa valid for arrival at Goa International Airport.',
    safety: 'Very friendly tourist state. Ride scooters carefully and avoid swimming in high currents.',
    bestTime: 'November to February for beach weather, or July to September for monsoon landscapes.',
    nearby: ['Gokarna (3h away)', 'Hampi (6h away)', 'Dudhsagar Falls (1.5h away)'],
    hotels: [
      { name: 'Taj Exotica Resort & Spa', price: 28600, rating: 4.9, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
      { name: 'W Goa Beach Sanctuary', price: 22000, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' }
    ]
  }
};

/**
 * Fetch country demographics and info from REST Countries API
 */
export async function fetchCountryDetails(countryName) {
  try {
    const res = await fetchWithTimeout(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`);
    if (!res.ok) throw new Error('Country not found in registry');
    const data = await res.json();
    const country = data[0];

    // Extract attributes
    const name = country.name.common;
    const capital = country.capital ? country.capital[0] : 'N/A';
    const continent = country.continents ? country.continents[0] : 'Asia';
    const population = country.population;
    const flag = country.flags ? country.flags.png : '';
    const currencyCode = Object.keys(country.currencies || {})[0] || 'USD';
    const currencyName = country.currencies ? country.currencies[currencyCode].name : 'US Dollar';
    const currencySymbol = country.currencies ? country.currencies[currencyCode].symbol || '' : '₹';
    const languages = Object.values(country.languages || {}).join(', ');
    const timezone = country.timezones ? country.timezones[0] : 'UTC';
    const latlng = country.latlng || [20, 77]; // Fallback coordinates

    // Dynamic visa advisor
    let visa = 'Visa rules vary. Standard passport validation required.';
    if (continent === 'Europe') {
      visa = 'Schengen Area rules apply. Visa-free entry for up to 90 days for most passport holders. Valid passport for at least 3 months required.';
    } else if (continent === 'Asia') {
      visa = 'eVisa / Visa on Arrival available for many nationalities. Passport must be valid for at least 6 months with two blank pages.';
    } else if (continent === 'North America' || continent === 'South America') {
      visa = 'Online Travel Authorization (e.g., ESTA) or tourist visa required. Validate with local consulate before flight corridors.';
    } else if (continent === 'Africa') {
      visa = 'Tourist visa or eVisa required for most international entries. Yellow Fever vaccination certificate may be requested.';
    }

    // Dynamic safety advisor
    let safety = 'Generally secure. Standard safety precautions apply. Keep belongings secure and respect local laws.';
    if (name === 'Egypt') {
      safety = 'Follow tourist guides. Stay alert in crowded souks. Avoid military installations or unauthorized demonstrations.';
    } else if (continent === 'Europe') {
      safety = 'Safe destination. Beware of minor pickpocketing scams in transportation hubs and crowded tourist locations.';
    }

    // Weather and best time guidelines
    let weatherOverview = 'Temperate climate, seasonal rainfall.';
    let bestTime = 'Spring and Autumn months provide optimal coordinates for sightseeing.';
    if (latlng[0] > 30) {
      weatherOverview = 'Four distinct seasons. Warm summers and cold, snowy winters.';
      bestTime = 'Spring (April-June) and Autumn (September-November) offer moderate weather.';
    } else if (latlng[0] < -30) {
      weatherOverview = 'Southern hemisphere seasonal cycle. Warm summers, mild winters.';
      bestTime = 'October to March is ideal for outdoor activities.';
    } else if (latlng[0] > -15 && latlng[0] < 15) {
      weatherOverview = 'Tropical monsoon climate. High humidity with warm temperatures year-round.';
      bestTime = 'Dry season (December to April) is recommended to avoid heavy rainfall.';
    }

    return {
      name,
      capital,
      continent,
      population: population.toLocaleString(),
      flag,
      currency: `${currencyCode} (${currencyName}) ${currencySymbol}`,
      languages,
      timezone,
      latlng,
      visa,
      safety,
      weatherOverview,
      bestTime
    };
  } catch (error) {
    // Generate a fallback country profile
    const continent = countryName.toLowerCase().includes('france') || countryName.toLowerCase().includes('italy') || countryName.toLowerCase().includes('spain') || countryName.toLowerCase().includes('london') ? 'Europe' : 'Asia';
    return {
      name: countryName,
      capital: countryName.toLowerCase().includes('japan') ? 'Tokyo' : countryName.toLowerCase().includes('france') ? 'Paris' : 'Regional Capital',
      continent,
      population: 'Varies',
      flag: '🌐',
      currency: 'Credits (₹)',
      languages: 'English, Local dialect',
      timezone: 'UTC+00:00',
      latlng: [0, 0],
      visa: 'eVisa or visa-free entry depending on nationality. Passport valid for 6 months required.',
      safety: 'Secure zone. Respect local norms and carry valid identification files.',
      weatherOverview: 'Seasonal conditions. Check weather advisory radar prior to voyage departure.',
      bestTime: 'Spring or dry seasonal intervals.'
    };
  }
}

/**
 * Fetch description summary, photo galleries, and activities from Wikipedia
 */
export async function fetchCityDetails(cityName, countryName = '') {
  const normalizedKey = cityName.toLowerCase().trim();
  const curated = curations[normalizedKey];

  try {
    const res = await fetchWithTimeout(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cityName)}`);
    if (!res.ok) throw new Error('Wikipedia article summary not found');
    const data = await res.json();

    const overview = data.extract || 'No article description found.';
    const image = data.originalimage ? data.originalimage.source : 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80';

    // Build custom things to do and local specialties dynamically
    const cuisine = curated?.cuisine || [
      'Authentic street delicacies & traditional dishes',
      'Fresh regional seafood & organic vegetables',
      'Artisanal desserts & locally crafted beverages'
    ];

    const attractions = curated?.attractions || [
      `${cityName} Historical Downtown Landmark`,
      'Scenic Riverfront Boardwalk & Promenades',
      'Metropolitan Art Museum & Cultural Center',
      'National Botanical Gardens & Parks'
    ];

    const activities = curated?.activities || [
      'Take a private walking architectural tour',
      'Sample authentic local cuisines in market districts',
      'Watch sunset from a panoramic skyline lookout',
      'Rent a local bicycle and cruise the parkways'
    ];

    const safety = curated?.safety || 'Standard safety precautions apply. Respect local traffic systems and protect electronics.';
    const visa = curated?.visa || 'Check online visa registries. eVisa available for most tourist corridors.';
    const bestTime = curated?.bestTime || 'April to October is highly rated.';
    const nearby = curated?.nearby || ['Nearby Sector A', 'Nearby Sector B', 'Scenic Mountain Outpost'];

    // Generate random premium mock hotels list
    const hotelStock = [
      { name: `Grand ${cityName} Palace Resort`, price: 260, rating: 4.8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
      { name: `Boutique ${cityName} Sanctuary`, price: 180, rating: 4.7, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
      { name: `${cityName} Elite Horizon Lodging`, price: 390, rating: 4.9, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=400&q=80' }
    ];

    return {
      name: cityName,
      country: countryName || 'Global',
      overview,
      image,
      cuisine,
      attractions,
      activities,
      safety,
      visa,
      bestTime,
      nearby,
      hotels: curated?.hotels || hotelStock
    };
  } catch (error) {
    // Return curated values if available, else standard template
    if (curated) {
      return {
        name: cityName,
        country: countryName,
        overview: curated.overview,
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
        cuisine: curated.cuisine,
        attractions: curated.attractions,
        activities: curated.activities,
        safety: curated.safety,
        visa: curated.visa,
        bestTime: curated.bestTime,
        nearby: curated.nearby,
        hotels: curated.hotels
      };
    }

    return {
      name: cityName,
      country: countryName || 'Sovereign Core',
      overview: `Explore the incredible history, architectural marvels, and cultural heritage of ${cityName}. Located in a prime travel sector, it represents a world-class hub for cuisine, arts, and tourism.`,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      cuisine: ['Traditional local specialties', 'Fresh regional street foods', 'Regional beverage pairings'],
      attractions: ['Historic Central Square', 'Scenic Observation Promenade', 'Local Art & History Archives'],
      activities: ['Guided walking highlights tour', 'Culinary testing sessions', 'Explore botanical park networks'],
      safety: 'Secure zone. Respect local norms and carry identification files.',
      visa: 'Visa rules vary. eVisa or visa-free entry is common for tourism.',
      bestTime: 'Moderate seasons (Spring / Autumn) are optimal.',
      nearby: ['Regional District Alpha', 'Regional District Beta'],
      hotels: [
        { name: `${cityName} Central Hotel`, price: 140, rating: 4.6, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
        { name: `${cityName} Heritage Lodge`, price: 90, rating: 4.5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' }
      ]
    };
  }
}

/**
 * Fetch 5-Day weather report from Open-Meteo API
 */
export async function fetchWeatherForecast(lat, lon) {

    const data = await res.json();
    
    const daily = data.daily;
    const forecast = daily.time.map((time, idx) => {
      const code = daily.weathercode[idx];
      let summary = 'Clear';
      let icon = '☀️';

      if (code >= 1 && code <= 3) {
        summary = 'Partly Cloudy';
        icon = '⛅';
      } else if (code >= 51 && code <= 67) {
        summary = 'Drizzle / Rain';
        icon = '🌧️';
      } else if (code >= 71 && code <= 77) {
        summary = 'Snow';
        icon = '❄️';
      } else if (code >= 80 && code <= 82) {
        summary = 'Showers';
        icon = '🌦️';
      } else if (code >= 95) {
        summary = 'Thunderstorm';
        icon = '⛈️';
      }

      // Format date to short string: e.g. "Mon"
      const dateObj = new Date(time);
      const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

      return {
        day: dayName,
        maxTemp: Math.round(daily.temperature_2m_max[idx]),
        minTemp: Math.round(daily.temperature_2m_min[idx]),
        summary,
        icon
      };
    });

    return forecast.slice(0, 5); // Return 5 days
  } catch (error) {
    // Return mock seasonal forecast
    return [
      { day: 'Day 1', maxTemp: 26, minTemp: 18, summary: 'Sunny', icon: '☀️' },
      { day: 'Day 2', maxTemp: 25, minTemp: 17, summary: 'Partly Cloudy', icon: '⛅' },
      { day: 'Day 3', maxTemp: 23, minTemp: 16, summary: 'Showers', icon: '🌦️' },
      { day: 'Day 4', maxTemp: 24, minTemp: 18, summary: 'Sunny', icon: '☀️' },
      { day: 'Day 5', maxTemp: 26, minTemp: 19, summary: 'Clear', icon: '☀️' }
    ];
  }
}
