// TravelVerse AI Centralized Destination Knowledge Base
// Rule #32 & Rule #33: Stable IDs, rich metadata, explicit image references.

import { destinationImages } from './imageRegistry';

export const mockDestinations = [
  {
    id: 'jaipur',
    slug: 'jaipur',
    title: 'Jaipur — The Royal Pink City',
    subtitle: 'Rajasthan Heritage & Rajput Palaces',
    region: 'North',
    state: 'Rajasthan',
    country: 'India',
    description: 'Immerse in the grand era of Rajput royals. Jaipur offers towering sandstone fortresses, intricate lattice havelis, vibrant bazaars, and opulent palace hospitality.',
    whyGo: 'Explore UNESCO World Heritage Amer Fort, witness sunset over Nahargarh, shop for hand-blocked textiles and Kundan jewelry, and dine in royal palatial courtyards.',
    bestTime: 'October to March',
    budget: '₹28,500',
    budgetTier: 'midrange',
    duration: '4-5 Days',
    image: destinationImages.jaipur,
    heroImage: destinationImages.jaipur,
    gallery: [
      destinationImages.jaipur,
      destinationImages.udaipur,
      destinationImages.jaisalmer
    ],
    tags: ['Royal Forts', 'Palaces', 'UNESCO Heritage', 'Culture & Food'],
    weather: '24°C • Clear & Pleasant',
    rating: 4.9,
    reviewsCount: 3420,
    travelStyle: 'Royal Heritage',
    category: 'heritage',
    coordinates: { lat: 26.9124, lng: 75.7873 },
    topExperiences: [
      { title: 'Amer Fort Sunrise Ascent', description: 'Explore the Mirror Palace (Sheesh Mahal) and Maota Lake views before peak crowds.', timeNeeded: '3 Hours' },
      { title: 'City Palace & Jantar Mantar', description: 'Marvel at astronomical instruments and private royal armory collections.', timeNeeded: '2.5 Hours' },
      { title: 'Nahargarh Fort Sunset Tea', description: 'Watch the entire Pink City illuminate as dusk falls over the Aravalli hills.', timeNeeded: '2 Hours' }
    ],
    foodSpecialties: ['Dal Baati Churma', 'Laal Maas', 'Ghevar', 'Pyaaz Kachori', 'Ker Sangri'],
    accommodationTypes: ['Heritage Haveli', 'Luxury Palace Hotel', 'Boutique Courtyard Stay'],
    transportOptions: ['Auto-Rickshaw', 'Private Chauffeur', 'Guided Walking Tour'],
    suggestedItinerary: [
      { day: 1, title: 'Arrival & Johari Bazaar Walk', details: 'Check into your haveli. Stroll through Johari Bazaar and savor fresh Ghevar.' },
      { day: 2, title: 'Amer Fort & Anokhi Textile Museum', details: 'Early tour of Amer Fort followed by a block printing workshop at Anokhi.' },
      { day: 3, title: 'City Palace & Nahargarh Sunset', details: 'Visit City Palace, Hawa Mahal, and catch sunset at Nahargarh Fort.' }
    ]
  },
  {
    id: 'kerala',
    slug: 'kerala',
    title: 'Kerala — God’s Own Country',
    subtitle: 'Backwaters, Spice Gardens & Ayurvedic Sanctuaries',
    region: 'South',
    state: 'Kerala',
    country: 'India',
    description: 'A tranquil tropical paradise of emerald backwaters, mist-shrouded tea valleys, palm-fringed coastlines, and ancient Ayurvedic healing rituals.',
    whyGo: 'Drift along serene Vembanad lake on a luxury Kettuvallam houseboat, sip fresh cardamom tea in Munnar, and experience Kathakali dance performances.',
    bestTime: 'September to March',
    budget: '₹34,000',
    budgetTier: 'midrange',
    duration: '6-7 Days',
    image: destinationImages.kerala,
    heroImage: destinationImages.kerala,
    gallery: [
      destinationImages.kerala,
      destinationImages.munnar
    ],
    tags: ['Backwaters', 'Ayurveda', 'Houseboat', 'Tea Gardens'],
    weather: '27°C • Tropical Breeze',
    rating: 4.95,
    reviewsCount: 4120,
    travelStyle: 'Backwaters & Nature',
    category: 'nature',
    coordinates: { lat: 9.4981, lng: 76.3388 },
    topExperiences: [
      { title: 'Alleppey Overnight Houseboat Cruise', description: 'Glide along coconut-shaded canals with private chef preparing Karimeen fish fry.', timeNeeded: '24 Hours' },
      { title: 'Munnar Tea Plantation Safari', description: 'Walk through century-old tea estates and visit the Tata Tea Museum.', timeNeeded: '4 Hours' },
      { title: 'Authentic Abhyanga Ayurvedic Therapy', description: 'Rejuvenate mind and body with herbal oil therapies at an accredited sanctuary.', timeNeeded: '2 Hours' }
    ],
    foodSpecialties: ['Kerala Sadya', 'Appam with Stew', 'Karimeen Pollichathu', 'Malabar Parotta', 'Coconut Payasam'],
    accommodationTypes: ['Traditional Kettuvallam Houseboat', 'Eco Spa Resort', 'Treehouse Lodge'],
    transportOptions: ['Private Car', 'Water Taxi', 'Backwater Canoe'],
    suggestedItinerary: [
      { day: 1, title: 'Arrival in Kochi & Chinese Fishing Nets', details: 'Explore Fort Kochi, Dutch Palace, and witness Kathakali performance.' },
      { day: 2, title: 'Kochi → Munnar Tea Highlands', details: 'Drive past Cheeyappara waterfalls to Munnar. Evening tea garden walk.' },
      { day: 3, title: 'Alleppey Houseboat Check-in', details: 'Board your private houseboat for an overnight backwater cruise.' }
    ]
  },
  {
    id: 'kashmir',
    slug: 'kashmir',
    title: 'Kashmir — Paradise on Earth',
    subtitle: 'Dal Lake Shikaras & Alpine Valleys',
    region: 'North',
    state: 'Jammu & Kashmir',
    country: 'India',
    description: 'Snow-capped Himalayan summits, mirror-like lake reflections, saffron fields, pine forest trails, and warm Kashmiri wooden houseboat hospitality.',
    whyGo: 'Stay in a carved wooden houseboat on Dal Lake, ride the Gulmarg Gondola over snow fields, and wander Pahalgam alpine meadows.',
    bestTime: 'March to October (Summer) / Dec to Feb (Snow)',
    budget: '₹42,000',
    budgetTier: 'midrange',
    duration: '6-8 Days',
    image: destinationImages.kashmir,
    heroImage: destinationImages.kashmir,
    gallery: [
      destinationImages.kashmir,
      destinationImages.ladakh
    ],
    tags: ['Shikara Ride', 'Alpine Valley', 'Snow & Skiing', 'Houseboat'],
    weather: '16°C • Cool Alpine',
    rating: 4.92,
    reviewsCount: 2980,
    travelStyle: 'Himalayan Alpine',
    category: 'alpine',
    coordinates: { lat: 34.0837, lng: 74.7973 },
    topExperiences: [
      { title: 'Dal Lake Sunrise Floating Vegetable Market', description: 'Witness traditional wooden boat trading at 5:30 AM amidst misty reflections.', timeNeeded: '2 Hours' },
      { title: 'Gulmarg Gondola Phase II Ride', description: 'Ascend to 13,780 ft at Mt. Apharwat for panoramic Himalayan views and skiing.', timeNeeded: '4 Hours' },
      { title: 'Betaab Valley & Aru Valley Trek', description: 'Walk through lush pine glades along icy turquoise rivers in Pahalgam.', timeNeeded: '5 Hours' }
    ],
    foodSpecialties: ['Wazwan Feast', 'Rogan Josh', 'Kashmiri Kahwa Tea', 'Dum Aloo', 'Modur Pulao'],
    accommodationTypes: ['Luxury Cedar Houseboat', 'Alpine Ski Resort', 'Heritage Cottage'],
    transportOptions: ['Shikara Boat', 'Private SUV', 'Pony Ride'],
    suggestedItinerary: [
      { day: 1, title: 'Srinagar Arrival & Dal Lake Shikara', details: 'Check into house boat. Sunset shikara ride through floating gardens.' },
      { day: 2, title: 'Gulmarg Day Trip', details: 'Ride the highest cable car gondola and explore snow fields.' },
      { day: 3, title: 'Pahalgam Valley Exploration', details: 'Drive to Pahalgam via Pampore saffron fields. Riverside picnic.' }
    ]
  },
  {
    id: 'ladakh',
    slug: 'ladakh',
    title: 'Ladakh — Land of High Passes',
    subtitle: 'Pangong Tso & Trans-Himalayan Monasteries',
    region: 'North',
    state: 'Ladakh',
    country: 'India',
    description: 'A starkly beautiful moonscape of high-altitude desert passes, azure alpine lakes, prayer flag lined gompas, and starlit night skies.',
    whyGo: 'Cross Khardung La pass at 17,582 ft, marvel at changing colors of Pangong Tso, ride double-humped Bactrian camels in Nubra Valley, and experience Thiksey Monastery chanting.',
    bestTime: 'May to September',
    budget: '₹48,000',
    budgetTier: 'luxury',
    duration: '7-9 Days',
    image: destinationImages.ladakh,
    heroImage: destinationImages.ladakh,
    gallery: [
      destinationImages.ladakh,
      destinationImages.kashmir
    ],
    tags: ['High Altitude', 'Monasteries', 'Desert Dunes', 'Motor Touring'],
    weather: '12°C • Crisp Sun',
    rating: 4.96,
    reviewsCount: 2150,
    travelStyle: 'Himalayan Alpine',
    category: 'alpine',
    coordinates: { lat: 34.1526, lng: 77.5771 },
    topExperiences: [
      { title: 'Pangong Tso Lake Camping', description: 'Watch sunrise and sunset over intense turquoise waters at 14,270 ft.', timeNeeded: '24 Hours' },
      { title: 'Khardung La High Pass Crossing', description: 'Drive across one of the world highest motorable mountain roads.', timeNeeded: '3 Hours' },
      { title: 'Thiksey Monastery Morning Prayer Ritual', description: 'Listen to monks blow traditional brass trumpets over Indus valley.', timeNeeded: '2 Hours' }
    ],
    foodSpecialties: ['Ladakhi Thukpa', 'Momos', 'Skyu Stew', 'Butter Tea', 'Apricot Jam'],
    accommodationTypes: ['High Altitude Glamping Dome', 'Eco Homestay', 'Boutique Leh Hotel'],
    transportOptions: ['4x4 Mountain SUV', 'Royal Enfield Bike', 'Guided Expedition'],
    suggestedItinerary: [
      { day: 1, title: 'Leh Arrival & Acclimatization', details: 'Rest completely to adjust to altitude. Evening slow walk to Shanti Stupa.' },
      { day: 2, title: 'Indus Valley Monasteries', details: 'Visit Thiksey, Hemis, and Shey Palace.' },
      { day: 3, title: 'Leh → Nubra Valley via Khardung La', details: 'Cross Khardung La. Camel safari at Hunder sand dunes.' }
    ]
  },
  {
    id: 'varanasi',
    slug: 'varanasi',
    title: 'Varanasi — Eternal Sacred City',
    subtitle: 'Ganges River Ghats & Vedic Spiritual Heritage',
    region: 'North',
    state: 'Uttar Pradesh',
    country: 'India',
    description: 'One of the world’s oldest continuously inhabited cities. A sacred realm of ancient ritual, riverbank sunrise boat rides, temple bells, and timeless spiritual devotion.',
    whyGo: 'Witness the hypnotic evening Ganga Aarti ceremony at Dashashwamedh Ghat, take a sunrise boat ride along Manikarnika & Assi ghats, and walk ancient alleyways.',
    bestTime: 'October to March',
    budget: '₹19,500',
    budgetTier: 'economy',
    duration: '3-4 Days',
    image: destinationImages.varanasi,
    heroImage: destinationImages.varanasi,
    gallery: [
      destinationImages.varanasi,
      destinationImages.agra
    ],
    tags: ['Spiritual Sacred', 'Ghats', 'Pilgrimage', 'Vedic Culture'],
    weather: '23°C • Clear Sky',
    rating: 4.88,
    reviewsCount: 3890,
    travelStyle: 'Spiritual Sacred',
    category: 'spiritual',
    coordinates: { lat: 25.3176, lng: 82.9739 },
    topExperiences: [
      { title: 'Sunrise Ganges Wooden Boat Ride', description: 'Watch morning bathers, morning prayers, and foggy riverfront mist.', timeNeeded: '2 Hours' },
      { title: 'Dashashwamedh Evening Ganga Aarti', description: 'Feel the spiritual energy of rhythmic brass lamps, incense, and Vedic chants.', timeNeeded: '2 Hours' },
      { title: 'Sarnath Deer Park Excursion', description: 'Visit where Lord Buddha gave his first sermon after enlightenment.', timeNeeded: '3 Hours' }
    ],
    foodSpecialties: ['Banarasi Kachori Jalebi', 'Tamatar Chaat', 'Malaiyyo (Winter Dessert)', 'Banarasi Paan', 'Lassi in Kulhad'],
    accommodationTypes: ['Heritage Riverside Palace', 'Boutique Ghat Homestay', 'Pilgrimage Ashram Stay'],
    transportOptions: ['Hand-rowed Boat', 'Cycle Rickshaw', 'Walking Alleyway Tour'],
    suggestedItinerary: [
      { day: 1, title: 'Arrival & Evening Ganga Aarti', details: 'Check in. Take boat to Dashashwamedh Ghat for twilight Aarti ceremony.' },
      { day: 2, title: 'Sunrise Boat & Kashi Vishwanath', details: '5:30 AM river boat tour. Visit Kashi Vishwanath temple corridor.' },
      { day: 3, title: 'Sarnath Excursion & Weaver Colony', details: 'Explore Sarnath stupas and visit famous Banarasi silk weavers.' }
    ]
  },
  {
    id: 'goa',
    slug: 'goa',
    title: 'Goa — Tropical Sunshine Coast',
    subtitle: 'Portuguese Heritage, Beaches & Coastline',
    region: 'West',
    state: 'Goa',
    country: 'India',
    description: 'Golden sandy beaches, swaying palm groves, Portuguese Latin quarters, spice plantations, and vibrant coastal dining culture.',
    whyGo: 'Explore colourful pastel streets of Fontainhas in Panjim, relax on quiet South Goa beaches, enjoy fresh seafood shacks, and visit UNESCO churches.',
    bestTime: 'November to February',
    budget: '₹26,000',
    budgetTier: 'midrange',
    duration: '4-6 Days',
    image: destinationImages.goa,
    heroImage: destinationImages.goa,
    gallery: [
      destinationImages.goa,
      destinationImages.mumbai
    ],
    tags: ['Beaches', 'Portuguese Heritage', 'Coastline', 'Seafood'],
    weather: '29°C • Tropical Sun',
    rating: 4.85,
    reviewsCount: 5200,
    travelStyle: 'Relaxed & Wellness',
    category: 'beach',
    coordinates: { lat: 15.2993, lng: 74.1240 },
    topExperiences: [
      { title: 'Fontainhas Heritage Walk', description: 'Stroll through Latin Quarter pastel houses, wrought-iron balconies, and art cafes.', timeNeeded: '2.5 Hours' },
      { title: 'South Goa Quiet Beach Sunset', description: 'Relax at Palolem or Agonda beach with coconut water and sunset waves.', timeNeeded: '3 Hours' },
      { title: 'Old Goa Basilica of Bom Jesus', description: 'Discover UNESCO Portuguese cathedrals and colonial architecture.', timeNeeded: '2 Hours' }
    ],
    foodSpecialties: ['Goan Fish Curry Rice', 'Pork Vindaloo', 'Bebinca Cake', 'Rava Fried Prawns', 'Xacuti'],
    accommodationTypes: ['Portuguese Villa', 'Beachfront Resort', 'Boutique Heritage Inn'],
    transportOptions: ['Scooter Rental', 'Private Car', 'Ferry Crossing'],
    suggestedItinerary: [
      { day: 1, title: 'Panjim Arrival & Fontainhas', details: 'Walk through Latin quarter and dine at a riverside Goan restaurant.' },
      { day: 2, title: 'Old Goa Churches & Spice Plantation', details: 'Visit UNESCO basilicas and spice farm with traditional Goan lunch.' },
      { day: 3, title: 'South Goa Beach Relaxation', details: 'Unwind at Palolem beach and watch golden sunset.' }
    ]
  },
  {
    id: 'udaipur',
    slug: 'udaipur',
    title: 'Udaipur — City of Lakes',
    subtitle: 'Romantic Island Palaces & Lake Pichola',
    region: 'West',
    state: 'Rajasthan',
    country: 'India',
    description: 'Often named the most romantic city in Asia. Udaipur is a breathtaking vista of white marble palaces floating on serene blue lakes surrounded by green Aravalli peaks.',
    whyGo: 'Take a boat ride around Lake Pichola, explore the massive City Palace complex, enjoy rooftop dining with palace reflections, and visit Jagmandir Island.',
    bestTime: 'October to March',
    budget: '₹36,000',
    budgetTier: 'luxury',
    duration: '3-5 Days',
    image: destinationImages.udaipur,
    heroImage: destinationImages.udaipur,
    gallery: [
      destinationImages.udaipur,
      destinationImages.jaipur
    ],
    tags: ['Lakes', 'Romantic Palaces', 'Heritage', 'Luxury Stay'],
    weather: '25°C • Pleasant',
    rating: 4.94,
    reviewsCount: 2840,
    travelStyle: 'Royal Heritage',
    category: 'heritage',
    coordinates: { lat: 24.5854, lng: 73.7125 },
    topExperiences: [
      { title: 'Lake Pichola Sunset Boat Cruise', description: 'Glide past Lake Palace and City Palace as lights sparkle on the water.', timeNeeded: '1.5 Hours' },
      { title: 'Udaipur City Palace Museum Tour', description: 'Wander peacock courtyards, mirror galleries, and royal balconies.', timeNeeded: '3 Hours' },
      { title: 'Monsoon Palace Sunset Panorama', description: 'Drive up Sajjangarh hill for high-altitude lake and valley views.', timeNeeded: '2 Hours' }
    ],
    foodSpecialties: ['Mewari Thali', 'Kachori', 'Safed Maas', 'Dal Baati', 'Rabri'],
    accommodationTypes: ['Lakefront Palace Resort', 'Heritage Lakeview Haveli', 'Boutique Suite'],
    transportOptions: ['Private Lake Boat', 'Auto-Rickshaw', 'Private Chauffeur'],
    suggestedItinerary: [
      { day: 1, title: 'Arrival & Lake Pichola Sunset', details: 'Check in. Take sunset boat tour around Taj Lake Palace.' },
      { day: 2, title: 'City Palace & Jagdish Temple', details: 'Explore City Palace corridors, Jagdish Temple, and Bagore Ki Haveli show.' },
      { day: 3, title: 'Saheliyon Ki Bari & Monsoon Palace', details: 'Visit royal fountain gardens and Monsoon Palace for dusk panorama.' }
    ]
  },
  {
    id: 'spiti-valley',
    slug: 'spiti-valley',
    title: 'Spiti Valley — Middle Land',
    subtitle: 'Trans-Himalayan High Altitude Desert',
    region: 'North',
    state: 'Himachal Pradesh',
    country: 'India',
    description: 'A remote cold mountain desert tucked high between Tibet and India. Famed for ancient Key Monastery atop cliff crags, turquoise Chandratal Lake, and raw mountain wilderness.',
    whyGo: 'Visit Key Monastery perched at 13,668 ft, camp by blue Chandratal Lake, send mail from Hikkim (world’s highest post office), and stargaze under pristine milky way skies.',
    bestTime: 'June to September',
    budget: '₹38,000',
    budgetTier: 'midrange',
    duration: '7-10 Days',
    image: destinationImages['spiti-valley'],
    heroImage: destinationImages['spiti-valley'],
    gallery: [
      destinationImages['spiti-valley'],
      destinationImages.ladakh
    ],
    tags: ['High Altitude Desert', 'Monasteries', 'Stargazing', 'Adventure Expedition'],
    weather: '10°C • Cold Alpine',
    rating: 4.93,
    reviewsCount: 1650,
    travelStyle: 'Adventure',
    category: 'adventure',
    coordinates: { lat: 32.2461, lng: 78.0349 },
    topExperiences: [
      { title: 'Key Monastery Cliff Exploration', description: 'Discover thousand-year-old Buddhist murals and scriptures atop a cliff.', timeNeeded: '3 Hours' },
      { title: 'Chandratal Moon Lake Trek', description: 'Walk around the crescent-shaped turquoise lake reflecting snow peaks.', timeNeeded: '4 Hours' },
      { title: 'Hikkim Highest Post Office Postcard', description: 'Mail a handwritten postcard from 14,567 ft elevation to anywhere in the world.', timeNeeded: '1.5 Hours' }
    ],
    foodSpecialties: ['Spitian Seabuckthorn Tea', 'Tsampa Porridge', 'Tingmo Steamed Bread', 'Thukpa'],
    accommodationTypes: ['Village Homestay', 'High Altitude Safari Camp', 'Basic Monastery Guest House'],
    transportOptions: ['4x4 Camper', 'High Clearance SUV', 'Expedition Bike'],
    suggestedItinerary: [
      { day: 1, title: 'Manali → Kaza via Atal Tunnel & Kunzum Pass', details: 'Cross Kunzum Pass to reach Spiti Valley headquarters.' },
      { day: 2, title: 'Key Monastery & Kibber Village', details: 'Visit iconic Key Gompa and high elevation Kibber village.' },
      { day: 3, title: 'Hikkim, Komic & Langza Fossil Village', details: 'Send postcards from Hikkim and search for prehistoric marine fossils in Langza.' }
    ]
  },
  {
    id: 'agra',
    slug: 'agra',
    title: 'Agra — Monument to Eternal Love',
    subtitle: 'Taj Mahal & Mughal Empire Architecture',
    region: 'North',
    state: 'Uttar Pradesh',
    country: 'India',
    description: 'Home of the immortal Taj Mahal. Agra preserves the pinnacle of Mughal architectural splendour, marble inlay craftsmanship, and historic fortresses.',
    whyGo: 'Marvel at sunrise glowing pink over white marble Taj Mahal, explore Agra Fort red sandstone palaces, and sample authentic Agra Petha sweets.',
    bestTime: 'October to March',
    budget: '₹15,000',
    budgetTier: 'economy',
    duration: '2-3 Days',
    image: destinationImages.agra,
    heroImage: destinationImages.agra,
    gallery: [
      destinationImages.agra,
      destinationImages.delhi
    ],
    tags: ['Taj Mahal', 'UNESCO Wonder', 'Mughal Architecture', 'History'],
    weather: '22°C • Clear',
    rating: 4.89,
    reviewsCount: 6100,
    travelStyle: 'Royal Heritage',
    category: 'heritage',
    coordinates: { lat: 27.1767, lng: 78.0081 },
    topExperiences: [
      { title: 'Taj Mahal Sunrise VIP Walk', description: 'Be first through the gates to see pristine white marble illuminated by dawn rays.', timeNeeded: '3 Hours' },
      { title: 'Agra Fort Palatial Tour', description: 'Walk through Shah Jahan marble octagonal tower (Musamman Burj) overlooking Taj.', timeNeeded: '2.5 Hours' },
      { title: 'Mehtab Bagh Sunset Viewpoint', description: 'Capture reflection of Taj Mahal across Yamuna river in evening light.', timeNeeded: '1.5 Hours' }
    ],
    foodSpecialties: ['Agra Petha Sweet', 'Bedai & Aloo Sabzi', 'Mughlai Biryani', 'Parcha Kebab'],
    accommodationTypes: ['Luxury Taj View Hotel', 'Heritage Haveli', 'Boutique City Stay'],
    transportOptions: ['Battery Auto', 'Private SUV', 'Walking Guide'],
    suggestedItinerary: [
      { day: 1, title: 'Arrival & Agra Fort', details: 'Check in. Afternoon tour of Agra Fort and Mehtab Bagh sunset.' },
      { day: 2, title: 'Sunrise Taj Mahal & Fatehpur Sikri', details: 'Early Taj Mahal entry followed by afternoon excursion to Fatehpur Sikri.' }
    ]
  },
  {
    id: 'ziro-valley',
    slug: 'ziro-valley',
    title: 'Ziro Valley — Enchanted Pine Highlands',
    subtitle: 'Arunachal Pradesh Tribal Culture & Green Valleys',
    region: 'Northeast',
    state: 'Arunachal Pradesh',
    country: 'India',
    description: 'A breathtaking emerald valley populated by the hospitable Apatani tribe. Known for sustainable wet-rice cultivation, pine forests, and famous outdoor music festivals.',
    whyGo: 'Meet Apatani tribal elders, hike through pine and bamboo groves, sample local bamboo rice, and immerse in pristine Northeast biodiversity.',
    bestTime: 'September to March',
    budget: '₹32,000',
    budgetTier: 'midrange',
    duration: '4-6 Days',
    image: destinationImages['ziro-valley'],
    heroImage: destinationImages['ziro-valley'],
    gallery: [
      destinationImages['ziro-valley'],
      destinationImages.tawang
    ],
    tags: ['Tribal Culture', 'Pine Valleys', 'Northeast Hidden Gem', 'Nature'],
    weather: '18°C • Pleasant Highland',
    rating: 4.91,
    reviewsCount: 920,
    travelStyle: 'Backwaters & Nature',
    category: 'nature',
    coordinates: { lat: 27.6006, lng: 93.8340 },
    topExperiences: [
      { title: 'Hong Village Apatani Tribal Walk', description: 'Discover traditional bamboo stilt homes and sustainable paddy-fish farming.', timeNeeded: '3 Hours' },
      { title: 'Talley Valley Wildlife Trek', description: 'Hike through virgin bamboo forests and search for rare clouded leopards.', timeNeeded: '5 Hours' }
    ],
    foodSpecialties: ['Pike Pila', 'Apong Rice Beer', 'Bamboo Shoot Pork', 'Boiled Wild Herbs'],
    accommodationTypes: ['Apatani Family Homestay', 'Eco Bamboo Lodge'],
    transportOptions: ['Private SUV', 'Local Escort Guide'],
    suggestedItinerary: [
      { day: 1, title: 'Guwahati → Ziro Valley Drive', details: 'Scenic journey through Assam tea estates up into Arunachal hills.' },
      { day: 2, title: 'Apatani Villages Walk', details: 'Guided village walk in Hong and Hari villages.' }
    ]
  }
];

export default mockDestinations;
