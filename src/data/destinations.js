export const mockDestinations = [
  {
    id: 'dest-goa',
    name: 'Goa',
    region: 'South India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 2200,
    price: 36000,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    description: "India's beach paradise. Known for its golden sand coastlines, active night bazaars, Portuguese heritage churches, and lush spice plantations.",
    tags: ['Beach', 'Nightlife', 'Relaxation', 'Food'],
    coordinates: { x: 64, y: 35 },
    moods: ['Relaxed', 'Romantic', 'Party', 'Road Trip', 'Nature Escape'],
    photoSpots: [
      { name: 'Chapora Fort Cliff', type: 'Sunset', desc: 'Overlooking Vagator bay with beautiful panoramic rock views.' },
      { name: 'Fontainhas Alleys', type: 'Instagram', desc: 'Vibrant pastel Portuguese lanes with vintage balconies.' },
      { name: 'Butterfly Beach Cove', type: 'Hidden Viewpoint', desc: 'Secluded crescent-shaped cove framed by dense hills.' },
      { name: 'Galgibaga Pine Belt', type: 'Drone photography', desc: 'Vast empty golden beach lined by symmetrical pine trees.' }
    ],
    history: [
      { era: '300 BC', event: 'Mauryan Empire', desc: 'Incorporated under Emperor Ashoka as an administrative marine node.' },
      { era: '1312 AD', event: 'Sultanate Conquest', desc: 'Briefly ruled by the Delhi Sultanate under Alauddin Khilji.' },
      { era: '1510 AD', event: 'Portuguese Rule', desc: 'Afonso de Albuquerque captures Goa, making it the capital of Estado da Índia.' },
      { era: '1961 AD', event: 'Operation Vijay', desc: 'Indian Armed Forces liberate Goa, integrating it back into the Indian Union.' }
    ],
    stays: [
      { name: 'Taj Exotica Resort & Spa', type: 'Luxury', desc: 'Five-star beach paradise.' },
      { name: 'Zostel Goa (Anjuna)', type: 'Backpacking', desc: 'A lively backpacker community hostel.' },
      { name: 'NomadGao Assagao', type: 'Remote Work', desc: 'Premium workspace and coliving rooms for creators.' }
    ],
    nomadHub: {
      internetSpeed: '95 Mbps',
      coworkingSpace: 'NomadGao, Clay Co-working, Llama',
      costOfLiving: 'Medium (₹45,000/mo)',
      monthlyRent: '₹22,000 - ₹35,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4200,
      tollEstimates: 820,
      foodStops: ['Keri Highway Dhaba', 'Hotel Darshan, Belagavi'],
      scenicStops: ['Chorla Ghat Viewpoint', 'Anmod Waterfall curves'],
      restAreas: ['Mollem Forest Rest Node'],
      evChargers: ['Tata Power EZ Charge, Panaji'],
      emergencyContacts: { phone: '+91 832-2419555', details: 'Goa Highway Patrol & Emergency Ambulance' },
      alternativeRoute: 'NH 48 Hubballi route (Better roads, bypasses narrow ghats)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Weather', text: 'Monsoon season (June-Sept) triggers landslides in Chorla Ghat.' },
      { level: 'Low', category: 'Safety', text: 'Only take licensed prepaid cabs. Avoid unmetered airport taxis.' }
    ]
  },
  {
    id: 'dest-jaipur',
    name: 'Jaipur',
    region: 'North India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 1430,
    price: 44000,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    description: 'The Pink City of Rajasthan. Renowned for its magnificent hilltop forts, royal palaces (Hawa Mahal), vibrant textiles, and traditional culinary feasts.',
    tags: ['History', 'Culture', 'Shopping', 'Art'],
    coordinates: { x: 63, y: 31 },
    moods: ['Romantic', 'Spiritual', 'Luxury', 'Family Fun', 'Road Trip'],
    photoSpots: [
      { name: 'Hawa Mahal Windows', type: 'Instagram', desc: 'From Wind View Café directly opposite the facade.' },
      { name: 'Amber Fort Stepwell (Panna Meena)', type: 'Hidden Viewpoint', desc: 'Symmetrical geometric yellow stairs.' },
      { name: 'Nahargarh Fort Walls', type: 'Sunset', desc: 'Golden hour shot of the entire city from the high ramparts.' },
      { name: 'Jal Mahal Lake', type: 'Night photography', desc: 'Illuminated floating palace reflecting off Man Sagar lake.' }
    ],
    history: [
      { era: '1727 AD', event: 'Founding of Jaipur', desc: 'Maharaja Sawai Jai Singh II founded the city, moving the capital from Amber.' },
      { era: '1876 AD', event: 'The Pink Paint', desc: 'Jaipur was painted terracotta pink to welcome the Prince of Wales.' },
      { era: '1949 AD', event: 'Integration', desc: 'Became the capital of the newly integrated state of Rajasthan.' }
    ],
    stays: [
      { name: 'Rambagh Palace', type: 'Luxury', desc: 'Authentic palace with gardens.' },
      { name: 'The Moustache Hostel', type: 'Backpacking', desc: 'Artistic backpacker hostel.' },
      { name: 'Naila Bagh Palace', type: 'Remote Work', desc: 'Heritage boutique stays with fast WiFi.' }
    ],
    nomadHub: {
      internetSpeed: '75 Mbps',
      coworkingSpace: 'Wired Hub, DevX Jaipur',
      costOfLiving: 'Low-Medium (₹35,000/mo)',
      monthlyRent: '₹15,000 - ₹25,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3600,
      tollEstimates: 550,
      foodStops: ['Mannat Haveli NH-48', 'Shiva Oasis Resort Hotel'],
      scenicStops: ['Aravalli Pass valley view', 'Amber Valley winding turns'],
      restAreas: ['Highway King Kotputli'],
      evChargers: ['NH-48 EV Supercharger, Shahpura'],
      emergencyContacts: { phone: '+91 141-2565656', details: 'Rajasthan State Highway Emergency Line' },
      alternativeRoute: 'Delhi-Mumbai Expressway (NE 4) (Fastest, zero traffic)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Summer temperatures can cross 45°C in May-June. Keep hydrated.' },
      { level: 'Low', category: 'Safety', text: 'Politely refuse unsolicited tour guide offers near Amber Fort.' }
    ]
  },
  {
    id: 'dest-kerala',
    name: 'Kerala',
    region: 'South India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 1980,
    price: 48000,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    description: "God's Own Country. Famed for its serene backwaters with floating houseboats, tea plantations of Munnar, and authentic Ayurveda wellness centers.",
    tags: ['Nature', 'Wellness', 'Relaxation', 'Food'],
    coordinates: { x: 65, y: 37 },
    moods: ['Relaxed', 'Romantic', 'Spiritual', 'Family Fun', 'Nature Escape'],
    photoSpots: [
      { name: 'Alleppey Backwater Canals', type: 'Sunrise', desc: 'Golden beams slicing through coconut tree leaves over silent canals.' },
      { name: 'Kolukkumalai Tea Estate', type: 'Sunrise', desc: 'Highest tea plantation in the world with sea of clouds.' },
      { name: 'Athirappilly Waterfalls', type: 'Drone photography', desc: 'Massive roaring waterfalls framed by deep tropical jungle.' },
      { name: 'Kochi Chinese Nets', type: 'Sunset', desc: 'Silhouetted spider-like nets against a fiery orange coast.' }
    ],
    history: [
      { era: '300 BC - 1100 AD', event: 'Spice Trade Hub', desc: 'Direct trade established with Rome, Greece, and Egypt.' },
      { era: '1498 AD', event: 'Vasco da Gama Arrives', desc: 'Portuguese explorer lands in Calicut, shifting spice geopolitics.' },
      { era: '1956 AD', event: 'Kerala State Act', desc: 'Merging Travancore, Cochin, and Malabar into a unified linguistic state.' }
    ],
    stays: [
      { name: 'Kumarakom Lake Resort', type: 'Luxury', desc: 'Lakeside heritage luxury villas.' },
      { name: 'Zostel Alleppey', type: 'Backpacking', desc: 'Beachfront co-living hostel.' },
      { name: 'Coconest Coworking Munnar', type: 'Remote Work', desc: 'Stunning mountain views and robust fiber internet.' }
    ],
    nomadHub: {
      internetSpeed: '80 Mbps',
      coworkingSpace: 'Inkel Kochi, Kerala StartUp Mission',
      costOfLiving: 'Low-Medium (₹38,500/mo)',
      monthlyRent: '₹14,000 - ₹22,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 5800,
      tollEstimates: 480,
      foodStops: ['Kuttanad Backwater Dhaba', 'Aryaas Veg Cochin'],
      scenicStops: ['Munnar Gap Road viewpoint', 'Vagamon Pine Valley curves'],
      restAreas: ['Kanjirappally Highway Rest stop'],
      evChargers: ['KSEB Charging Station, Alappuzha'],
      emergencyContacts: { phone: '+91 471-2331656', details: 'Kerala Road Safety Emergency Cell' },
      alternativeRoute: 'MC Road (Scenic but winding) vs NH 66 (Wider, faster bypasses)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Heavy rainfall during July-August causes flash flooding near waterfalls.' },
      { level: 'Low', category: 'Health', text: 'Drink bottled mineral water or boiled house water (Jeeraka Vellam).' }
    ]
  },
  {
    id: 'dest-kashmir',
    name: 'Kashmir',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 1750,
    price: 52000,
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
    description: 'Heaven on Earth. Walk through snow-capped alpine meadows, sail in traditional shikara boats on Dal Lake, and stay in premium floating wooden houseboats.',
    tags: ['Nature', 'Romantic', 'Adventure', 'Culture'],
    coordinates: { x: 64, y: 28 },
    moods: ['Relaxed', 'Romantic', 'Nature Escape', 'Wildlife', 'Road Trip'],
    photoSpots: [
      { name: 'Dal Lake Shikara Lines', type: 'Sunrise', desc: 'Misty water reflections of colorful wooden shikaras.' },
      { name: 'Gulmarg Gondola Phase 2', type: 'Drone photography', desc: 'Cable cars climbing above majestic snow pines.' },
      { name: 'Betaab Valley Meadows', type: 'Instagram', desc: 'Crystalline Lidder river cutting through lush valleys.' },
      { name: 'Pari Mahal ruins', type: 'Sunset', desc: 'Overlooking the terraced lawns and Dal Lake.' }
    ],
    history: [
      { era: '3rd Century BC', event: 'Srinagar Founded', desc: 'Emperor Ashoka founded Srinagar as a major Buddhist center.' },
      { era: '1586 AD', event: 'Mughal Annexation', desc: 'Akbar annexed Kashmir, building magnificent Mughal pleasure gardens.' },
      { era: '1947 AD', event: 'Accession to India', desc: 'Maharaja Hari Singh signed the Instrument of Accession to India.' }
    ],
    stays: [
      { name: 'The Khyber Resort Gulmarg', type: 'Luxury', desc: 'World-class heated mountain chalet.' },
      { name: 'Zostel Srinagar', type: 'Backpacking', desc: 'Cozy backpacker sanctuary in Nishat.' },
      { name: 'Kashmir Co-work Hub', type: 'Remote Work', desc: 'Reliable fiber backup lines and wooden stove heating.' }
    ],
    nomadHub: {
      internetSpeed: '65 Mbps',
      coworkingSpace: 'Srinagar Startup Cell, Kashmir WorkSpace',
      costOfLiving: 'Medium (₹40,000/mo)',
      monthlyRent: '₹18,000 - ₹28,000',
      visaInfo: 'Requires registration if on business visa.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 6200,
      tollEstimates: 380,
      foodStops: ['Jakhani Highway Plaza', 'Kashmir Rasoi Ramban'],
      scenicStops: ['Banihal Tunnel exit view', 'Titanic Viewpoint overlooking Qazigund'],
      restAreas: ['Peera Highway Rest stop'],
      evChargers: ['ChargeZone Station, Srinagar Outskirts'],
      emergencyContacts: { phone: '+91 194-2452222', details: 'Kashmir Tourism Emergency & Safety Cell' },
      alternativeRoute: 'Mughal Road route (Highly scenic but closed during winter snow)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Heavy winter snow (Dec-Feb) blocks the Jammu-Srinagar Highway.' },
      { level: 'Moderate', category: 'Transit', text: 'Prepaid SIM cards from other Indian states do not work. Purchase a local Postpaid connection.' }
    ]
  },
  {
    id: 'dest-ladakh',
    name: 'Ladakh',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 1120,
    price: 58000,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    description: 'The Land of High Passes. A high-altitude cold desert offering dramatic barren mountains, pristine blue lakes (Pangong Tso), and ancient Buddhist monasteries.',
    tags: ['Adventure', 'Nature', 'Culture', 'Trekking'],
    coordinates: { x: 65, y: 28 },
    moods: ['Adventurous', 'Spiritual', 'Nature Escape', 'Road Trip', 'Wildlife'],
    photoSpots: [
      { name: 'Pangong Tso Lakeside', type: 'Sunrise', desc: 'Intense cobalt blue lake shifting colors under morning rays.' },
      { name: 'Khardung La Pass Signboard', type: 'Instagram', desc: 'The iconic yellow pass board surrounded by colorful prayer flags.' },
      { name: 'Thiksey Monastery Stairs', type: 'Sunset', desc: 'Staggered whitewashed cell clusters reflecting twilight.' },
      { name: 'Hunder Sand Dunes', type: 'Sunset', desc: 'Double-humped camels walking silhouettes on cold sand dunes.' }
    ],
    history: [
      { era: '10th Century AD', event: 'First Dynasty', desc: 'Establishment of the Maryul Dynasty, introducing Tibetan Buddhism.' },
      { era: '1684 AD', event: 'Treaty of Tingmosgang', desc: 'Defined the borders between Tibet and Ladakh.' },
      { era: '2019 AD', event: 'Union Territory Status', desc: 'Carved out of Jammu & Kashmir as a separate Union Territory of India.' }
    ],
    stays: [
      { name: 'The Grand Dragon Leh', type: 'Luxury', desc: 'Solar-heated premier eco-luxury hotel.' },
      { name: 'Zostel Leh', type: 'Backpacking', desc: 'Backpacker haven with bonfire spaces.' },
      { name: 'Leh Digital Nomad Camp', type: 'Remote Work', desc: 'Satellite fallback internet (Starlink-like speeds) in Leh.' }
    ],
    nomadHub: {
      internetSpeed: '45 Mbps',
      coworkingSpace: 'Nomad Leh Cafe, Leh Tech Space',
      costOfLiving: 'Medium (₹42,000/mo)',
      monthlyRent: '₹16,000 - ₹24,000',
      visaInfo: 'Requires Protected Area Permit (PAP) for border villages.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 7800,
      tollEstimates: 220,
      foodStops: ['Upshi Highway Kitchen', 'Whiskey Nallah tent dhabas'],
      scenicStops: ['Morey Plains stretch', 'Gata Loops hairpin curves'],
      restAreas: ['Sarchu tented resting coordinates'],
      evChargers: ['Solar Powered Charger, Leh city square'],
      emergencyContacts: { phone: '+91 1982-258888', details: 'Leh Army Base and Medical Trauma Centre' },
      alternativeRoute: 'Manali-Leh Highway (More adventurous) vs Srinagar-Leh Highway (Gradual ascent, less AMS risk)'
    },
    riskAlerts: [
      { level: 'High', category: 'Health', text: 'Acute Mountain Sickness (AMS) risk. Rest completely in Leh for the first 36 hours.' },
      { level: 'High', category: 'Weather', text: 'Rohtang and Baralacha passes close completely from November to May due to heavy snow.' }
    ]
  },
  {
    id: 'dest-agra',
    name: 'Agra',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 3150,
    price: 32000,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    description: 'Home to the iconic Taj Mahal, a monument of love. Agra displays the finest Mughal architecture, royal fortresses, and heritage culinary delicacies.',
    tags: ['History', 'Culture', 'Art', 'Heritage'],
    coordinates: { x: 65, y: 31 },
    moods: ['Romantic', 'Spiritual', 'Luxury', 'Family Fun', 'Road Trip'],
    photoSpots: [
      { name: 'Taj Mahal Central Garden', type: 'Sunrise', desc: 'Symmetrical reflection shot on the central pool without crowds.' },
      { name: 'Mehtab Bagh riverbank', type: 'Sunset', desc: 'Framing Taj Mahal from across the Yamuna river.' },
      { name: 'Agra Fort Archway', type: 'Instagram', desc: 'Red sandstone frame capturing the distant marble dome.' },
      { name: 'Yamuna View Point', type: 'Night photography', desc: 'Taj Mahal silhouetted against stars and river mist.' }
    ],
    history: [
      { era: '1504 AD', event: 'Founding by Lodi', desc: 'Sikandar Lodi founded Agra and shifted the sultanate capital here.' },
      { era: '1526-1658 AD', event: 'Mughal Golden Era', desc: 'Agra serves as Mughal capital under Akbar, Jahangir, and Shah Jahan.' },
      { era: '1631-1648 AD', event: 'Taj Construction', desc: 'Shah Jahan builds Taj Mahal in memory of Mumtaz Mahal.' }
    ],
    stays: [
      { name: 'The Oberoi Amarvilas', type: 'Luxury', desc: 'Ultra-luxury resort with Taj views from every room.' },
      { name: 'Zostel Agra', type: 'Backpacking', desc: 'Friendly budget community hotel.' },
      { name: 'Workspace Agra', type: 'Remote Work', desc: 'Reliable fiber setup near the Taj East Gate.' }
    ],
    nomadHub: {
      internetSpeed: '85 Mbps',
      coworkingSpace: 'Incubate Agra, DevX Plaza',
      costOfLiving: 'Low (₹28,000/mo)',
      monthlyRent: '₹12,000 - ₹20,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2200,
      tollEstimates: 650,
      foodStops: ['Food Plaza, Yamuna Expressway', 'Shiva Tourist Dhaba'],
      scenicStops: ['Expedition bridge over Yamuna river', 'Mathura border plains'],
      restAreas: ['Yamuna Expressway Rest stop 2'],
      evChargers: ['Tata Power EV Supercharger, Yamuna Expressway Toll'],
      emergencyContacts: { phone: '+91 562-2421239', details: 'Yamuna Expressway Emergency Highway Patrol' },
      alternativeRoute: 'NH 19 (Old highway) vs Yamuna Expressway (Fastest, speed-limited at 100km/h)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Thick fog during winter (Dec-Jan) drastically reduces visibility on Yamuna Expressway.' },
      { level: 'Low', category: 'Safety', text: 'Taj Mahal is closed every Friday. Plan your travel accordingly.' }
    ]
  },
  {
    id: 'dest-varanasi',
    name: 'Varanasi',
    region: 'East India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 1540,
    price: 28000,
    image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80',
    description: 'The spiritual capital of India. Explore ancient ghats along the sacred Ganges river, watch the magical Ganga Aarti, and walk historic narrow alleys.',
    tags: ['Spiritual', 'Culture', 'History', 'Art'],
    coordinates: { x: 66, y: 31 },
    moods: ['Spiritual', 'Nature Escape', 'Culture', 'Relaxed'],
    photoSpots: [
      { name: 'Dashashwamedh Ghat', type: 'Night photography', desc: 'Multi-tiered dynamic fire rituals of Ganga Aarti.' },
      { name: 'Assi Ghat Riverbanks', type: 'Sunrise', desc: 'Subah-e-Banaras morning prayers and music.' },
      { name: 'Narrow Lanes of Vishwanath Gali', type: 'Instagram', desc: 'Old texturized blue-brick walls and passing sages.' },
      { name: 'Floating Boat middle river', type: 'Sunrise', desc: 'Silhouetted towers of ghat temples mirroring off the holy river.' }
    ],
    history: [
      { era: '1000 BC', event: 'Ancient Settlement', desc: 'Founded by Lord Shiva, making it one of the oldest continuously inhabited cities.' },
      { era: '528 BC', event: 'Buddhas Sermon', desc: 'Gautama Buddha gave his first sermon nearby in Sarnath.' },
      { era: '1916 AD', event: 'Banaras Hindu University', desc: 'Madan Mohan Malaviya founded BHU, establishing the city as an education center.' }
    ],
    stays: [
      { name: 'BrijRama Palace Varanasi', type: 'Luxury', desc: 'Restored 19th-century palace on the Ganges ghats.' },
      { name: 'Zostel Varanasi', type: 'Backpacking', desc: 'Charming heritage backpacker hostel.' },
      { name: 'Ganges Nomad Hub', type: 'Remote Work', desc: 'High-speed coworking hub overlooking the river.' }
    ],
    nomadHub: {
      internetSpeed: '70 Mbps',
      coworkingSpace: 'Banaras Startup Nest, Workspace Varanasi',
      costOfLiving: 'Low (₹25,000/mo)',
      monthlyRent: '₹10,000 - ₹18,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4800,
      tollEstimates: 880,
      foodStops: ['Harihareshwar Highway Veg', 'Highway Food Junction'],
      scenicStops: ['Varanasi bypass bridge view', 'Mirzapur mountain turns'],
      restAreas: ['Chandauli Rest point'],
      evChargers: ['Tata Power EZ Charge, Varanasi Bypass'],
      emergencyContacts: { phone: '+91 542-2501728', details: 'Varanasi District Emergency Services' },
      alternativeRoute: 'Purvanchal Expressway (Excellent roads, bypassing town traffic)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Weather', text: 'Flooding of Ganges river during Monsoon (July-Sept) submerges the ghat stairs.' },
      { level: 'Low', category: 'Safety', text: 'Be aware of rowdy boatmen. Always pre-negotiate boat rates with your hotel desk.' }
    ]
  },
  {
    id: 'dest-mumbai',
    name: 'Mumbai',
    region: 'West India',
    country: 'India',
    rating: 4.7,
    reviewsCount: 2480,
    price: 40000,
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
    description: 'The city of dreams. A bustling coastal metropolis featuring the Gateway of India, heritage Victorian architecture, Marine Drive, and Bollywood servers.',
    tags: ['Urban', 'Food', 'Culture', 'Nightlife'],
    coordinates: { x: 63, y: 33 },
    moods: ['Party', 'Luxury', 'Urban', 'Family Fun', 'Road Trip'],
    photoSpots: [
      { name: 'Marine Drive Queen\'s Necklace', type: 'Night photography', desc: 'The curved road lights shimmering like diamonds along the sea.' },
      { name: 'Gateway of India Archway', type: 'Sunrise', desc: 'Gilded beams striking the basalt basalt stone monument.' },
      { name: 'Bandra-Worli Sea Link viewpoint', type: 'Sunset', desc: 'Stunning suspension bridge silhouetted against twilight waves.' },
      { name: 'Chhatrapati Shivaji Terminus (CST)', type: 'Night photography', desc: 'Victorian Gothic monument lit with dynamic colors.' }
    ],
    history: [
      { era: '1534 AD', event: 'Treaty of Bassein', desc: 'Sultan of Gujarat ceded the Seven Islands of Bombay to the Portuguese.' },
      { era: '1661 AD', event: 'Royal Dowry', desc: 'Portuguese gifted Bombay to Charles II of England as marriage dowry.' },
      { era: '1869 AD', event: 'Suez Canal Opening', desc: 'Transformed Bombay into one of the largest marine ports on the Arabian sea.' }
    ],
    stays: [
      { name: 'The Taj Mahal Palace Mumbai', type: 'Luxury', desc: 'Iconic 1903 flagship sea-facing luxury hotel.' },
      { name: 'Zostel Mumbai', type: 'Backpacking', desc: 'Artistic backpacker retreat in Andheri.' },
      { name: 'WeWork Colaba', type: 'Remote Work', desc: 'State of the art hotdesks and high-speed internet.' }
    ],
    nomadHub: {
      internetSpeed: '120 Mbps',
      coworkingSpace: 'WeWork, Ministry of New, Awfis',
      costOfLiving: 'High (₹65,000/mo)',
      monthlyRent: '₹35,000 - ₹60,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 5100,
      tollEstimates: 1100,
      foodStops: ['Food Hub, Mumbai-Pune Expressway', 'Lonavala Cafe Cloud'],
      scenicStops: ['Khandala Ghat valley view', 'Amrutanjan Bridge viewpoint'],
      restAreas: ['Food Mall Expressway Point-1'],
      evChargers: ['Tata Power Supercharger, Lonavala exit'],
      emergencyContacts: { phone: '+91 22-22620111', details: 'Mumbai Expressway Control Room & Ambulance' },
      alternativeRoute: 'Old NH 4 (Scenic but slower) vs Mumbai-Pune Expressway (Fastest)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Extremely heavy monsoon rain (July-August) causes waterlogging and disrupts trains.' },
      { level: 'Low', category: 'Transit', text: 'Utilize local trains during peak rush hours (8-10 AM, 6-8 PM) with extreme caution.' }
    ]
  },
  {
    id: 'dest-udaipur',
    name: 'Udaipur',
    region: 'West India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 1210,
    price: 46000,
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=800&q=80',
    description: 'The Venice of the East. Beautiful lakes (Lake Pichola), romantic white marble palaces, royal heritage hotels, and scenic mountain backgrounds.',
    tags: ['Romantic', 'History', 'Art', 'Heritage'],
    coordinates: { x: 62, y: 32 },
    moods: ['Romantic', 'Relaxed', 'Luxury', 'Road Trip', 'Nature Escape'],
    photoSpots: [
      { name: 'Ambrai Ghat viewpoint', type: 'Sunset', desc: 'Classic shot capturing Lake Palace and City Palace glowing under twilight.' },
      { name: 'City Palace Balconies', type: 'Instagram', desc: 'Intricate glass mosaic work framing the lake view below.' },
      { name: 'Sajjangarh Monsoon Palace', type: 'Sunset', desc: 'Hilltop castle overlooking the lakes and Mewar hills.' },
      { name: 'Lake Pichola Boat Cruise', type: 'Sunset', desc: 'Silhouetted dome arches reflecting on gold waters.' }
    ],
    history: [
      { era: '1559 AD', event: 'Founding of Udaipur', desc: 'Maharana Udai Singh II founded the city, shifting the capital from Chittorgarh.' },
      { era: '1818 AD', event: 'British Treaty', desc: 'Became a princely state under British protectorate rules.' },
      { era: '1948 AD', event: 'Union of India', desc: 'Merged into the state of Rajasthan following Indian independence.' }
    ],
    stays: [
      { name: 'Taj Lake Palace', type: 'Luxury', desc: 'Floating marble palace resort in the middle of Lake Pichola.' },
      { name: 'Zostel Udaipur', type: 'Backpacking', desc: 'Terrace-top hostel overlooking the lake.' },
      { name: 'Lake Nomad Workspace', type: 'Remote Work', desc: 'Fiber internet and beautiful lake view workdesks.' }
    ],
    nomadHub: {
      internetSpeed: '75 Mbps',
      coworkingSpace: 'Udaipur Startup Zone, Rise Co-working',
      costOfLiving: 'Low-Medium (₹32,000/mo)',
      monthlyRent: '₹12,000 - ₹22,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4100,
      tollEstimates: 620,
      foodStops: ['Rajputana Highway Hotel', 'Bhim Bypass Plaza'],
      scenicStops: ['Aravalli Lake view curve', 'Haldighati pass viewpoint'],
      restAreas: ['Gogunda Rest Stop'],
      evChargers: ['Tata Power Station, Udaipur Center'],
      emergencyContacts: { phone: '+91 294-2410111', details: 'Udaipur Tourism Safety Desk' },
      alternativeRoute: 'NH 48 Ahmedabad highway route (Smoothest asphalt)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Weather', text: 'Extremely hot and humid summers (April-June) make afternoon excursions taxing.' },
      { level: 'Low', category: 'Transit', text: 'Agree on auto-rickshaw prices before boarding. Uber Auto is available.' }
    ]
  },
  {
    id: 'dest-delhi',
    name: 'Delhi',
    region: 'North India',
    country: 'India',
    rating: 4.7,
    reviewsCount: 2890,
    price: 36000,
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    description: 'The capital territory. A historic melting pot featuring Red Fort, Qutub Minar, bustling Chandni Chowk bazaars, and world-class street cuisine.',
    tags: ['History', 'Food', 'Shopping', 'Urban'],
    coordinates: { x: 64, y: 31 },
    moods: ['Urban', 'Spiritual', 'Family Fun', 'Road Trip', 'Party'],
    photoSpots: [
      { name: 'Humayun\'s Tomb Gardens', type: 'Sunrise', desc: 'Perfect symmetry of the red sandstone Mughal precursor to the Taj.' },
      { name: 'Qutub Minar arches', type: 'Instagram', desc: 'Framing the giant minaret through the ancient mosque archways.' },
      { name: 'Lotus Temple Lawns', type: 'Sunset', desc: 'Marble lotus structure contrasted against twilight violet sky.' },
      { name: 'Chandni Chowk streets', type: 'Instagram', desc: 'Motion blur of cycle rickshaws and colorful street vendors.' }
    ],
    history: [
      { era: '1206 AD', event: 'Delhi Sultanate', desc: 'Established by Qutb-ud-din Aibak, beginning the Sultanate eras.' },
      { era: '1639 AD', event: 'Shahjahanabad', desc: 'Shah Jahan builds the walled city (Old Delhi) and Red Fort.' },
      { era: '1911 AD', event: 'Imperial Capital', desc: 'British shift the capital of India from Calcutta to New Delhi.' }
    ],
    stays: [
      { name: 'The Leela Palace New Delhi', type: 'Luxury', desc: 'Five-star grandeur in Chanakyapuri.' },
      { name: 'Hustle Hostel Delhi', type: 'Backpacking', desc: 'Lively community hostel in South Delhi.' },
      { name: 'WeWork Forum Nehru Place', type: 'Remote Work', desc: 'Premier coworking infrastructure with high speed connections.' }
    ],
    nomadHub: {
      internetSpeed: '130 Mbps',
      coworkingSpace: 'WeWork, Innov8, Awfis',
      costOfLiving: 'Medium-High (₹50,000/mo)',
      monthlyRent: '₹25,050 - ₹40,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2100,
      tollEstimates: 420,
      foodStops: ['Sukhdev Murthal Dhaba', 'Haveli Highway Lounge'],
      scenicStops: ['NH-44 farm vistas', 'Panipat battle bypass'],
      restAreas: ['Murthal Highway Food Hub'],
      evChargers: ['Statiq EV Station, Murthal'],
      emergencyContacts: { phone: '+91 11-23010100', details: 'Delhi Police & Traffic Highway Emergency Patrol' },
      alternativeRoute: 'Eastern Peripheral Expressway (EPE) to bypass city congestion'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Severe AQI air pollution during November-December. Carrying an N95 mask is advised.' },
      { level: 'Low', category: 'Safety', text: 'Use the Metro system instead of road taxis during rush hours (9 AM, 6 PM).' }
    ]
  },
  // --- 5 NEW OFFBEAT "HIDDEN INDIA" DESTINATIONS ---
  {
    id: 'dest-ziro',
    name: 'Ziro Valley',
    region: 'Northeast India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 340,
    price: 34000,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    description: 'Arunachal Pradesh\'s hidden pine valley. Famous for its pine hills, rice fields, and the indigenous Apatani tribe with unique tattoos and nose plugs.',
    tags: ['Nature', 'Offbeat', 'Adventure', 'Culture'],
    coordinates: { x: 70, y: 30 },
    moods: ['Nature Escape', 'Spiritual', 'Relaxed', 'Road Trip', 'Adventurous'],
    photoSpots: [
      { name: 'Tarung Paddy Fields', type: 'Sunrise', desc: 'Mist rising off geometric wet rice fields framed by pine mountains.' },
      { name: 'Apatani Tribal Homesteads', type: 'Instagram', desc: 'Traditional bamboo houses and historic indigenous customs.' },
      { name: 'Kardo Forest Giant Lingam', type: 'Hidden Viewpoint', desc: 'Massive natural stone structure inside deep bamboo jungles.' }
    ],
    history: [
      { era: 'Ancient Era', event: 'Apatani Settling', desc: 'The valley was settled by the Apatani tribe, creating sustainable wet-rice farming.' },
      { era: '2012 AD', event: 'Ziro Music Festival', desc: 'Launched the valley into global independent music fame.' }
    ],
    stays: [
      { name: 'Ziro Valley Resort', type: 'Luxury', desc: 'Wooden pine cottages with traditional hearths.' },
      { name: 'Arunachal Homestays', type: 'Backpacking', desc: 'Live with Apatani elders in bamboo huts.' },
      { name: 'Pine Nomad Desk', type: 'Remote Work', desc: 'Fiber connectivity in the hills with backup power.' }
    ],
    nomadHub: {
      internetSpeed: '45 Mbps',
      coworkingSpace: 'Ziro Startup Lounge, Arunachal Hub',
      costOfLiving: 'Low (₹22,000/mo)',
      monthlyRent: '₹8,000 - ₹15,000',
      visaInfo: 'Requires Inner Line Permit (ILP) for domestic and PAP for foreign travelers.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 5200,
      tollEstimates: 250,
      foodStops: ['Itanagar Bypass Kitchen', 'Naharlagun Veg Corner'],
      scenicStops: ['Subansiri River gorges', 'Potin Ghat winding pine turns'],
      restAreas: ['Kimane Checkpost rest zone'],
      evChargers: ['State Power Station, Itanagar'],
      emergencyContacts: { phone: '+91 3788-224224', details: 'Arunachal Highway Safety Division' },
      alternativeRoute: 'Tezpur route (Better road conditions, fewer rockfalls)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Monsoons (June-August) cause massive landslides and block valley roads.' },
      { level: 'High', category: 'Transit', text: 'Secure your Inner Line Permit (ILP) online before crossing the border.' }
    ]
  },
  {
    id: 'dest-tawang',
    name: 'Tawang',
    region: 'Northeast India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 290,
    price: 49000,
    image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80',
    description: 'High altitude mountain sanctuary. Nestled at 10,000 ft in Arunachal Pradesh, featuring the massive Tawang Monastery, frozen lakes, and waterfalls.',
    tags: ['Adventure', 'Offbeat', 'Spiritual', 'Nature'],
    coordinates: { x: 69, y: 30 },
    moods: ['Adventurous', 'Spiritual', 'Nature Escape', 'Road Trip', 'Romantic'],
    photoSpots: [
      { name: 'Tawang Monastery Facade', type: 'Sunrise', desc: 'The largest monastery in India glowing orange under morning mountain rays.' },
      { name: 'Sela Pass Lake', type: 'Instagram', desc: 'Prinstine frozen lake framed by snow-covered mountain peaks.' },
      { name: 'Nuranang (Jung) Falls', type: 'Drone photography', desc: 'Roaring 100m waterfall cutting through high alpine cliffs.' }
    ],
    history: [
      { era: '1681 AD', event: 'Monastery Founding', desc: 'Tawang Monastery founded by Mera Lama Lodre Gyatso, following the 5th Dalai Lama\'s wishes.' },
      { era: '1959 AD', event: 'Dalai Lama Transit', desc: 'The 14th Dalai Lama fled Tibet and crossed into India via Tawang.' },
      { era: '1962 AD', event: 'Sino-Indian War', desc: 'Tawang was briefly occupied during the borders conflict.' }
    ],
    stays: [
      { name: 'Tawang Heritage Lodge', type: 'Luxury', desc: 'Heated luxury rooms with views of the valley.' },
      { name: 'Monyul Backpacker Nest', type: 'Backpacking', desc: 'Warm budget community homestay.' },
      { name: 'High-Altitude Nomad Desk', type: 'Remote Work', desc: 'Satellite backup internet in the central town.' }
    ],
    nomadHub: {
      internetSpeed: '40 Mbps',
      coworkingSpace: 'Tawang Tech Sanctuary',
      costOfLiving: 'Low-Medium (₹30,000/mo)',
      monthlyRent: '₹10,000 - ₹18,000',
      visaInfo: 'Requires Inner Line Permit (ILP) and permit approvals for border lakes.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 6800,
      tollEstimates: 180,
      foodStops: ['Bhalukpong River Inn', 'Dirang Valley Dhaba'],
      scenicStops: ['Sela Pass peak (13,700 ft)', 'Jaswant Garh War Memorial'],
      restAreas: ['Bomdila Rest hub'],
      evChargers: ['AP Power Station, Bomdila'],
      emergencyContacts: { phone: '+91 3794-222222', details: 'Tawang District Administration & Army Command' },
      alternativeRoute: 'Bomdila-Dirang highway route (Well paved, military maintained)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Winter temperatures plunge below -5°C. Sela Pass blocks due to ice.' },
      { level: 'Moderate', category: 'Health', text: 'AMS risk at Sela Pass (13,700 ft). Travel slowly and carry motion sickness meds.' }
    ]
  },
  {
    id: 'dest-spiti',
    name: 'Spiti Valley',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 460,
    price: 45000,
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=800&q=80',
    description: 'The Middle Land between India and Tibet. A cold mountain desert in Himachal Pradesh, known for its ancient monasteries and high-altitude road loops.',
    tags: ['Adventure', 'Offbeat', 'Nature', 'Road Trip'],
    coordinates: { x: 64, y: 29 },
    moods: ['Adventurous', 'Spiritual', 'Nature Escape', 'Road Trip', 'Wildlife'],
    photoSpots: [
      { name: 'Key Monastery Hill', type: 'Sunset', desc: 'Iconic monastery looking like a fortress stacked on a sharp conical hill.' },
      { name: 'Chicham Bridge gap', type: 'Instagram', desc: 'Highest bridge in Asia hanging above a massive rocky gorge.' },
      { name: 'Langza Buddha Statue', type: 'Sunset', desc: 'Giant golden Buddha sitting in high alpine meadows against snow peaks.' }
    ],
    history: [
      { era: '996 AD', event: 'Tabo Monastery', desc: 'Founded by the legendary translator Rinchen Zangpo, making it the oldest functional monastery.' },
      { era: '1846 AD', event: 'East India Company', desc: 'Spiti was annexed by the British following the Anglo-Sikh war.' }
    ],
    stays: [
      { name: 'Spiti Valley Eco Resort', type: 'Luxury', desc: 'Mud-baked heated luxury suites in Kaza.' },
      { name: 'Zostel Spiti (Kaza)', type: 'Backpacking', desc: 'Backpacker co-living at 12,000 ft.' },
      { name: 'Kaza Nomad Sanctuary', type: 'Remote Work', desc: 'High-speed internet lounge with traditional butter tea.' }
    ],
    nomadHub: {
      internetSpeed: '35 Mbps',
      coworkingSpace: 'Kaza Tech Center, Spiti Workspace',
      costOfLiving: 'Low-Medium (₹32,500/mo)',
      monthlyRent: '₹12,000 - ₹20,000',
      visaInfo: 'Requires inner line permits for border zones (near Tabo).'
    },
    roadTripDefaults: {
      fuelCostEstimate: 7200,
      tollEstimates: 150,
      foodStops: ['Recong Peo Inn', 'Nako Lake Highway kitchen'],
      scenicStops: ['Khab Sangam (Sutlej & Spiti rivers confluence)', 'Chango hairpins'],
      restAreas: ['Sumdo Checkpost rest zone'],
      evChargers: ['HP Charging Station, Kaza'],
      emergencyContacts: { phone: '+91 1906-222212', details: 'Kaza Emergency Command Center' },
      alternativeRoute: 'Shimla route (Longer but gradual climb, open year-round) vs Manali route (Shorter, steeper, via Kunzum Pass)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Kunzum Pass is blocked from October to June due to massive snow.' },
      { level: 'High', category: 'Transit', text: 'Roads are extremely narrow with sheer drops. Self-drive only if experienced.' }
    ]
  },
  {
    id: 'dest-gokarna',
    name: 'Gokarna',
    region: 'South India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 880,
    price: 26000,
    image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=800&q=80',
    description: 'Tranquil beach town of Karnataka. Famous for its sacred Mahabaleshwar Temple, rocky beach treks, and quiet beaches that are clean alternatives to Goa.',
    tags: ['Beach', 'Spiritual', 'Relaxation', 'Offbeat'],
    coordinates: { x: 63, y: 35 },
    moods: ['Relaxed', 'Spiritual', 'Nature Escape', 'Romantic', 'Party'],
    photoSpots: [
      { name: 'Om Beach Cliff View', type: 'Sunset', desc: 'Clifftop view framing the shore which naturally shapes like the sacred OM symbol.' },
      { name: 'Half Moon Beach Cove', type: 'Instagram', desc: 'Quiet crescent beach reachable only by cliff trekking or boat.' },
      { name: 'Mahabaleshwar Temple Archway', type: 'Spiritual', desc: 'Dravidian architecture arches leading to the beach.' }
    ],
    history: [
      { era: '4th Century AD', event: 'Kadamba Dynasty', desc: 'Temple records trace back to the royal Kadamba kings.' },
      { era: '1665 AD', event: 'Maratha Navy', desc: 'Shivaji visited Gokarna to construct coastal defense batteries.' }
    ],
    stays: [
      { name: 'Kahani Paradise', type: 'Luxury', desc: 'Boutique luxury villa overlooking the ocean.' },
      { name: 'Zostel Gokarna', type: 'Backpacking', desc: 'Beautiful clifftop container hostel overlooking the sea.' },
      { name: 'Nomad Beach Workation', type: 'Remote Work', desc: 'Beachside shacks equipped with power backups and high speed WiFi.' }
    ],
    nomadHub: {
      internetSpeed: '85 Mbps',
      coworkingSpace: 'Zostel Cowork, Gokarna Beach Office',
      costOfLiving: 'Low (₹29,000/mo)',
      monthlyRent: '₹12,000 - ₹20,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3400,
      tollEstimates: 450,
      foodStops: ['Kumta Highway Family Veg', 'Ankola bypass dhaba'],
      scenicStops: ['Mirjan Fort ruins', 'Sharavati river bridge view'],
      restAreas: ['Gokarna Bypass Rest Stop'],
      evChargers: ['Tata Power EV Charger, Gokarna Highway Junction'],
      emergencyContacts: { phone: '+91 8386-226033', details: 'Gokarna Highway Police Patrol' },
      alternativeRoute: 'NH 66 Coastal Road (Extremely fast, well-paved 4-lane)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Safety', text: 'Sea currents at Kudle and Half Moon beach are strong. Do not swim after sunset.' },
      { level: 'Low', category: 'Culture', text: 'Dress modestly when visiting the ancient Mahabaleshwar Temple.' }
    ]
  },
  {
    id: 'dest-majuli',
    name: 'Majuli',
    region: 'Northeast India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 190,
    price: 24000,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    description: 'The world\'s largest river island. Located in Assam on the Brahmaputra River, famous for its Neo-Vaishnavite culture, handmade masks, and pottery.',
    tags: ['Offbeat', 'Culture', 'Nature', 'Relaxation'],
    coordinates: { x: 71, y: 30 },
    moods: ['Relaxed', 'Spiritual', 'Nature Escape', 'Culture'],
    photoSpots: [
      { name: 'Kamalabari Satra courtyard', type: 'Sunrise', desc: 'Monks performing traditional Satriya dance under morning mist.' },
      { name: 'Brahmaputra Ferry ride', type: 'Sunset', desc: 'Dramatic sunset reflecting over the massive river island waters.' },
      { name: 'Samaguri Mask Workshop', type: 'Instagram', desc: 'Artist crafting traditional wooden and bamboo masks.' }
    ],
    history: [
      { era: '16th Century AD', event: 'Srimanta Sankardev', desc: 'Saint Sankardev established the Satras (monasteries), creating a cultural renaissance.' },
      { era: '1950 AD', event: 'Assam Earthquake', desc: 'Altered the flow of Brahmaputra, starting the island erosion challenges.' }
    ],
    stays: [
      { name: 'Majuli Heritage Eco-Cottages', type: 'Luxury', desc: 'Stilt bamboo luxury cottages by the river.' },
      { name: 'Mishing Tribal Homestay', type: 'Backpacking', desc: 'Traditional bamboo stilt homestay.' },
      { name: 'Brahmaputra Nomad Corner', type: 'Remote Work', desc: 'Quiet workspace with solar battery backup.' }
    ],
    nomadHub: {
      internetSpeed: '50 Mbps',
      coworkingSpace: 'Jorhat Tech Hub (Mainland), Majuli Eco Space',
      costOfLiving: 'Low (₹20,000/mo)',
      monthlyRent: '₹7,000 - ₹12,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4500,
      tollEstimates: 180,
      foodStops: ['Jorhat Bypass Veg', 'Kamalabari Ghat Hotel'],
      scenicStops: ['Luit river views', 'Mustard fields of Garmur'],
      restAreas: ['Nimati Ghat rest lounge'],
      evChargers: ['NRL EV Station, Jorhat (Mainland)'],
      emergencyContacts: { phone: '+91 3775-274424', details: 'Majuli Civil Administration and Police Headquarters' },
      alternativeRoute: 'Brahmaputra Ferry crossing is required from Nimati Ghat (Jorhat)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Monsoon flooding (July-August) causes massive river rise and suspends ferry operations.' },
      { level: 'Moderate', category: 'Transit', text: 'Ensure you reach Nimati Ghat before 4:00 PM as the last ferry leaves early.' }
    ]
  },
  {
    id: 'dest-ayodhya',
    name: 'Ayodhya',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 3120,
    price: 22000,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    description: 'The legendary birthplace of Lord Rama. Home to the grand Ram Janmabhoomi Mandir, peaceful Sarayu River ghats, and historical sacred sites.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 66, y: 30 },
    moods: ['Spiritual', 'Relaxed', 'Cultural'],
    photoSpots: [
      { name: 'Ram Mandir Facade', type: 'Architecture', desc: 'The magnificent pink sandstone carvings under warm evening spot lights.' },
      { name: 'Sarayu Ghats at Sunset', type: 'Sunset', desc: 'Rows of glowing lamps during the evening Sarayu Aarti reflections.' }
    ],
    history: [
      { era: 'Treta Yuga', event: 'Birth of Rama', desc: 'Reverenced as the ancient capital of the Kosala Kingdom and birth site of Lord Rama.' },
      { era: '2024 AD', event: 'Pran Pratishtha', desc: 'Inauguration of the grand Ram Janmabhoomi Temple.' }
    ],
    stays: [
      { name: 'Ramayana Hotel', type: 'Luxury', desc: 'Boutique premium hotel themed around ancient heritage.' },
      { name: 'Birla Dharamshala', type: 'Budget', desc: 'Comfortable community lodging near the temple.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Ayodhya Startup Hub',
      costOfLiving: 'Low (₹22,000/mo)',
      monthlyRent: '₹8,000 - ₹15,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2800,
      tollEstimates: 420,
      foodStops: ['Lucknow Highway Plaza', 'Ayodhya Bypass Dhaba'],
      scenicStops: ['Sarayu River Bridge views'],
      restAreas: ['NH-27 Highway Rest Area'],
      evChargers: ['Tata Power EV Station, Ayodhya Centre'],
      emergencyContacts: { phone: '+91 5278-222007', details: 'Ayodhya Police & Medical Emergency' },
      alternativeRoute: 'Lucknow-Ayodhya National Highway (Fast 4-lane expressway)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Crowd', text: 'Expect heavy crowds during Ram Navami and Diwali festivals.' }
    ]
  },
  {
    id: 'dest-kedarnath',
    name: 'Kedarnath',
    region: 'North India',
    country: 'India',
    rating: 5.0,
    reviewsCount: 4210,
    price: 38000,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    description: 'One of the most sacred Hindu shrines. Located high in the Garhwal Himalayas near Mandakini river, this ancient temple is dedicated to Lord Shiva.',
    tags: ['Spiritual', 'Adventure', 'Nature', 'Offbeat'],
    coordinates: { x: 64, y: 29 },
    moods: ['Spiritual', 'Adventurous', 'Nature Escape'],
    photoSpots: [
      { name: 'Temple Facade with Peak', type: 'Landscape', desc: 'The majestic stone temple framed by the towering snow-covered Kedarnath Peak.' },
      { name: 'Mandakini River valley', type: 'Drone photography', desc: 'Winding valley trails lined with yellow tents and misty glaciers.' }
    ],
    history: [
      { era: '8th Century AD', event: 'Adi Shankara Restoration', desc: 'Adi Shankaracharya rebuilt the temple and attained Samadhi here.' },
      { era: '2013 AD', event: 'Himalayan Deluge', desc: 'The temple survived a massive flash flood, protected by a massive boulder behind it.' }
    ],
    stays: [
      { name: 'GMVN Kedarnath Cottages', type: 'Budget', desc: 'Basic government-managed mountain cabins and dormitory tents.' },
      { name: 'Kedar River Retreat (Guptkashi)', type: 'Comfort', desc: 'Premium base camp hotel situated down in Guptkashi.' }
    ],
    nomadHub: {
      internetSpeed: '25 Mbps',
      coworkingSpace: 'None (Satellite / BSNL base)',
      costOfLiving: 'Medium (₹35,000/mo due to extreme height porterage)',
      monthlyRent: '₹15,000 - ₹25,000',
      visaInfo: 'Requires inner line permit for international tourists.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 5500,
      tollEstimates: 250,
      foodStops: ['Rishikesh Bypass Food Court', 'Srinagar Garhwal Dhaba'],
      scenicStops: ['Devprayag Sangam (Alaknanda & Bhagirathi confluence)'],
      restAreas: ['Rudraprayag Tourist Rest Stop'],
      evChargers: ['EV Station at Rishikesh base camp'],
      emergencyContacts: { phone: '+91 1364-233215', details: 'Kedarnath Disaster Management Helpline' },
      alternativeRoute: 'Trek 16km from Gauri Kund or take the authorized heli service'
    },
    riskAlerts: [
      { level: 'High', category: 'Health', text: 'Altitude is 11,755 ft. Altitude sickness is common. Carry pocket oxygen cylinders.' },
      { level: 'High', category: 'Weather', text: 'Temple closed from November to April due to heavy Himalayan snowfall.' }
    ]
  },
  {
    id: 'dest-goldentemple',
    name: 'Golden Temple',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 5200,
    price: 18000,
    image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=800&q=80',
    description: 'The Harmandir Sahib in Amritsar. The spiritual center of Sikhism, famous for its gilded golden facade, sacred Sarovar pool, and the world\'s largest free kitchen (Langar).',
    tags: ['Spiritual', 'Culture', 'History', 'Food'],
    coordinates: { x: 62, y: 29 },
    moods: ['Spiritual', 'Relaxed', 'Cultural'],
    photoSpots: [
      { name: 'Gilded Facade Mirroring', type: 'Night photography', desc: 'The glowing Golden Temple reflected in the pure still water of the Amrit Sarovar.' },
      { name: 'Langar Hall Preparation', type: 'Human interest', desc: 'Volunteers preparing fresh rotis and dal in massive cauldrons.' }
    ],
    history: [
      { era: '1577 AD', event: 'Founding of Pool', desc: 'Guru Ram Das excavated the holy tank, naming the city Amritsar (Pool of Nectar).' },
      { era: '1604 AD', event: 'Adi Granth Installation', desc: 'Guru Arjan completed the temple and compiled the Sikh holy scripture inside it.' }
    ],
    stays: [
      { name: 'Hyatt Regency Amritsar', type: 'Luxury', desc: 'Luxury hotel located minutes from the Golden Temple.' },
      { name: 'Guru Ram Das Niwas', type: 'Budget', desc: 'Free pilgrim hostel managed by the temple administration.' }
    ],
    nomadHub: {
      internetSpeed: '90 Mbps',
      coworkingSpace: 'Amritsar Co-work Nest, Startup Station',
      costOfLiving: 'Low-Medium (₹30,000/mo)',
      monthlyRent: '₹12,000 - ₹20,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4200,
      tollEstimates: 650,
      foodStops: ['Haveli Murthal', 'Sukhdev Dhaba (Murthal)'],
      scenicStops: ['Green mustard fields of Punjab'],
      restAreas: ['NH-44 Highway Amenities Hub'],
      evChargers: ['Zeon Charging Hub, Jalandhar highway'],
      emergencyContacts: { phone: '+91 183-2561222', details: 'Amritsar Tourist Assistance Cell' },
      alternativeRoute: 'Delhi-Amritsar-Katra Expressway (Fastest route)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Cover your head with a scarf and wash your feet before entering the complex.' }
    ]
  },
  {
    id: 'dest-bodhgaya',
    name: 'Bodh Gaya',
    region: 'East India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 980,
    price: 24000,
    image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=800&q=80',
    description: 'The cradle of Buddhism. The location where Prince Siddhartha Gautama attained supreme enlightenment under the Bodhi tree, now centered around the Mahabodhi Temple.',
    tags: ['Spiritual', 'History', 'Relaxation'],
    coordinates: { x: 67, y: 31 },
    moods: ['Spiritual', 'Relaxed'],
    photoSpots: [
      { name: 'Mahabodhi Temple Spire', type: 'Architecture', desc: 'The towering stone pyramid structure illuminated by thousands of oil lamps.' },
      { name: 'The Bodhi Tree', type: 'Spiritual', desc: 'Monks in orange robes meditating quietly under the fluttering green leaves.' }
    ],
    history: [
      { era: '528 BC', event: 'The Enlightenment', desc: 'Siddhartha Gautama sits under a pipal tree and achieves Nirvana, becoming the Buddha.' },
      { era: '260 BC', event: 'Ashoka Pilgrimage', desc: 'Emperor Ashoka visited Bodh Gaya and constructed the first Mahabodhi temple.' }
    ],
    stays: [
      { name: 'The Royal Residency', type: 'Comfort', desc: 'Premium hotel catering to international Buddhist pilgrims.' },
      { name: 'Sujata Guest House', type: 'Budget', desc: 'Simple rooms near the Mahabodhi Temple complex.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Gaya Innovation Center',
      costOfLiving: 'Low (₹23,000/mo)',
      monthlyRent: '₹9,000 - ₹16,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4600,
      tollEstimates: 720,
      foodStops: ['Varanasi Highway Oasis', 'Gaya Highway Junction Dhaba'],
      scenicStops: ['Chota Nagpur plateau hills'],
      restAreas: ['NH-19 Highway Rest Point'],
      evChargers: ['Tata Power EV Station, Bodh Gaya'],
      emergencyContacts: { phone: '+91 631-2200418', details: 'Bodh Gaya Tourist Police' },
      alternativeRoute: 'Purvanchal Expressway followed by NH-19 (Smooth well-paved)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Maintain absolute silence inside the meditation gardens and walk clockwise around the temple.' }
    ]
  },
  {
    id: 'dest-vatican',
    name: 'Vatican City',
    region: 'Europe',
    country: 'Vatican City',
    rating: 4.9,
    reviewsCount: 8400,
    price: 125000,
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80',
    description: 'The heart of Roman Catholicism. An independent city-state located within Rome, home to St. Peter\'s Basilica, the Vatican Museums, and the Sistine Chapel.',
    tags: ['Spiritual', 'History', 'Art', 'Culture'],
    coordinates: { x: 35, y: 25 },
    moods: ['Spiritual', 'Cultural', 'Luxury'],
    photoSpots: [
      { name: 'St. Peters Square Colonade', type: 'Architecture', desc: 'The massive columns forming a symmetrical keyhole shape surrounding the obelisk.' },
      { name: 'Sistine Chapel Ceiling', type: 'Art', desc: 'Michelangelo\'s legendary frescoes including the Creation of Adam.' }
    ],
    history: [
      { era: '326 AD', event: 'First Basilica', desc: 'Emperor Constantine built the first basilica over the tomb of St. Peter.' },
      { era: '1929 AD', event: 'Lateran Treaty', desc: 'Signed by Mussolini and the Holy See, establishing Vatican City as an independent nation.' }
    ],
    stays: [
      { name: 'Hotel de la Ville, Rome', type: 'Luxury', desc: 'Five-star hotel overlooking the Spanish Steps near the Vatican.' },
      { name: 'Vatican Relais Guesthouse', type: 'Comfort', desc: 'Charming boutique guesthouse adjacent to the Vatican walls.' }
    ],
    nomadHub: {
      internetSpeed: '110 Mbps',
      coworkingSpace: 'Regus Rome Barberini, Talent Garden Rome',
      costOfLiving: 'High (₹1,50,000/mo)',
      monthlyRent: '₹75,000 - ₹1,20,000',
      visaInfo: 'Schengen Visa rules apply (90 days entry).'
    },
    roadTripDefaults: {
      fuelCostEstimate: 14000,
      tollEstimates: 2800,
      foodStops: ['Autogrill Highway Station', 'Tuscan Countryside Bistro'],
      scenicStops: ['Hills of Tuscany', 'Lazio Valley viewpoints'],
      restAreas: ['A1 Autostrada Rest stop'],
      evChargers: ['Enel X Way Supercharger, Rome'],
      emergencyContacts: { phone: '+39 06-6982', details: 'Vatican Gendarmerie Force' },
      alternativeRoute: 'Utilize Rome\'s fast Metro A line to Ottaviano-S.Pietro station (Highly recommended over driving)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Security', text: 'Pickpocketing is highly prevalent in crowded areas around St. Peter\'s Square.' },
      { level: 'Moderate', category: 'Dress', text: 'Strict dress code: Shoulders and knees must be covered to enter St. Peter\'s Basilica.' }
    ]
  },
  {
    id: 'dest-somnath',
    name: 'Somnath Temple',
    region: 'West India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 3820,
    price: 24000,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    description: 'The eternal shrine on the Arabian Sea coast. It is the first of the twelve holy Shiva Jyotirlingas, reconstructed in magnificent Chalukya architecture style.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 60, y: 34 },
    moods: ['Spiritual', 'Relaxed', 'Cultural'],
    photoSpots: [
      { name: 'Shoreline Temple Silhouette', type: 'Sunset', desc: 'The temple towers standing bold against the orange sunset ocean waves.' }
    ],
    history: [
      { era: 'Ancient', event: 'Creation of Shrine', desc: 'Soma (the Moon God) originally built the temple in gold, Ravana in silver, and Krishna in wood.' },
      { era: '1951 AD', event: 'Modern Reconstruction', desc: 'Sardar Vallabhbhai Patel initiated the grand modern temple resurrection.' }
    ],
    stays: [
      { name: 'Somnath Sagar Darshan', type: 'Comfort', desc: 'Government guest house offering clear sea-facing rooms.' },
      { name: 'Lords Inn Somnath', type: 'Luxury', desc: 'Premium boutique stays close to the temple complex.' }
    ],
    nomadHub: {
      internetSpeed: '55 Mbps',
      coworkingSpace: 'Veraval Startup Center',
      costOfLiving: 'Low (₹20,000/mo)',
      monthlyRent: '₹7,000 - ₹12,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3200,
      tollEstimates: 380,
      foodStops: ['Rajkot Highway Food Hub', 'Jetpur Highway Dhaba'],
      scenicStops: ['Coastal Saurashtra highway views'],
      restAreas: ['Junagadh Bypass Rest stop'],
      evChargers: ['Tata Power EV Station, Veraval'],
      emergencyContacts: { phone: '+91 2876-231200', details: 'Somnath Temple Trust Helpdesk' },
      alternativeRoute: 'Ahmedabad-Rajkot-Somnath NH 47 corridor (4-lane well-paved)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Cameras and mobile phones are strictly prohibited inside the main temple.' }
    ]
  },
  {
    id: 'dest-mahakaleshwar',
    name: 'Mahakaleshwar Jyotirlinga',
    region: 'West India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 4120,
    price: 21000,
    image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=800&q=80',
    description: 'The south-facing shrine in Ujjain. Famous for its sacred Bhasma Aarti (ash ritual) on the banks of Shipra River.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 62, y: 32 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Shipra River Ghats', type: 'Sunrise', desc: 'Devotees performing holy baths under early morning orange skies.' }
    ],
    history: [
      { era: 'Ancient', event: 'Self-Manifestation', desc: 'The swayambhu lingam is the only south-facing Jyotirlinga, representing lord of time.' }
    ],
    stays: [
      { name: 'Ujjain Ashram Retreat', type: 'Budget', desc: 'Simple rooms with serene garden meditation spaces.' },
      { name: 'Hotel Shipra (MP Tourism)', type: 'Comfort', desc: 'Reliable rooms close to the central complex.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Ujjain Startup Hub',
      costOfLiving: 'Low (₹21,000/mo)',
      monthlyRent: '₹8,000 - ₹14,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2900,
      tollEstimates: 410,
      foodStops: ['Indore-Ujjain Highway Plaza'],
      scenicStops: ['Shipra river bridge views'],
      restAreas: ['NH-52 Rest stop'],
      evChargers: ['Tata Power EV Station, Indore road'],
      emergencyContacts: { phone: '+91 734-2551222', details: 'Ujjain City Police Helpdesk' },
      alternativeRoute: 'Indore-Ujjain Highway (Fastest 4-lane corridor)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Crowd', text: 'Expect huge queues during Shravan Mondays and Mahashivratri.' }
    ]
  },
  {
    id: 'dest-badrinath',
    name: 'Badrinath Temple',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 3500,
    price: 36000,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    description: 'One of the holy Char Dhams, located along the Alaknanda River in Uttarakhand. Dedicated to Lord Vishnu and framed by the majestic snowy Nilkantha peak.',
    tags: ['Spiritual', 'Nature', 'Adventure'],
    coordinates: { x: 65, y: 28 },
    moods: ['Spiritual', 'Nature Escape'],
    photoSpots: [
      { name: 'Colorful Temple Entrance', type: 'Architecture', desc: 'The bright Tibetan-style painted archway against dark mountain rocks.' }
    ],
    history: [
      { era: '8th Century AD', event: 'Adi Shankara Revival', desc: 'Adi Shankaracharya retrieved the Saligram idol of Badrinarayan and established it in the cave.' }
    ],
    stays: [
      { name: 'Sarovar Portico Badrinath', type: 'Luxury', desc: 'Beautiful resort looking out towards Nilkantha peak.' },
      { name: 'Garhwal Mandal Tourist Lodge', type: 'Budget', desc: 'Basic rooms near the hot water Tapt Kund.' }
    ],
    nomadHub: {
      internetSpeed: '30 Mbps',
      coworkingSpace: 'None (BSNL base)',
      costOfLiving: 'Medium (₹32,000/mo)',
      monthlyRent: '₹12,000 - ₹20,000',
      visaInfo: 'Requires border permits for foreign nationals.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 6200,
      tollEstimates: 180,
      foodStops: ['Joshimath Himalayan Cafe', 'Rudraprayag Highway Dhaba'],
      scenicStops: ['Devprayag Sangam views'],
      restAreas: ['Karnaprayag Rest Area'],
      evChargers: ['EV Charging base at Rishikesh'],
      emergencyContacts: { phone: '+91 1389-222102', details: 'Badrinath Disaster Response Team' },
      alternativeRoute: 'Rishikesh-Joshimath-Badrinath highway (Be cautious of landslide zones)'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Heavy mountain rainfall blocks routes during July-August monsoon.' }
    ]
  },
  {
    id: 'dest-puri',
    name: 'Jagannath Temple (Puri)',
    region: 'East India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 3910,
    price: 25050,
    image: 'https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=800&q=80',
    description: 'The coastal temple in Odisha. Home of the famous Rath Yatra chariot festival and the mysterious daily changing temple flag.',
    tags: ['Spiritual', 'Culture', 'History'],
    coordinates: { x: 69, y: 33 },
    moods: ['Spiritual', 'Relaxed', 'Cultural'],
    photoSpots: [
      { name: 'Grand Chariot Path', type: 'Festival', desc: 'Huge crowds pulling massive wooden chariots during the Rath Yatra.' }
    ],
    history: [
      { era: '12th Century AD', event: 'Temple Construction', desc: 'Constructed by King Anantavarman Chodaganga Deva of the Eastern Ganga Dynasty.' }
    ],
    stays: [
      { name: 'Mayfair Waves Puri', type: 'Luxury', desc: 'Premium sea-facing luxury resort on the golden beach.' },
      { name: 'Puri Youth Hostel', type: 'Budget', desc: 'Simple budget backpacker rooms.' }
    ],
    nomadHub: {
      internetSpeed: '75 Mbps',
      coworkingSpace: 'Bhubaneswar Startup Zone (1 hour away)',
      costOfLiving: 'Low-Medium (₹28,000/mo)',
      monthlyRent: '₹10,000 - ₹18,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4100,
      tollEstimates: 550,
      foodStops: ['Cuttack Highway Food court', 'Puri Bypass Dhaba'],
      scenicStops: ['Chilika Lake red-crab zones'],
      restAreas: ['NH-16 Highway Rest Stop'],
      evChargers: ['Tata Power EV Station, Puri Beach Road'],
      emergencyContacts: { phone: '+91 6752-225023', details: 'Puri Police & Lifeguard helpline' },
      alternativeRoute: 'Bhubaneswar-Puri NH-316 (Smooth 4-lane expressway)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Crowd', text: 'Extremely heavy crowds on beach and temple during June-July Rath Yatra.' }
    ]
  },
  {
    id: 'dest-rameshwaram',
    name: 'Rameshwaram Temple',
    region: 'South India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 3670,
    price: 29000,
    image: 'https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=800&q=80',
    description: 'Located on Pamban Island in Tamil Nadu. Consecrated by Lord Rama, it is famous for its longest corridors of carved pillars and 22 holy water wells inside the complex.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 65, y: 39 },
    moods: ['Spiritual', 'Cultural', 'Relaxed'],
    photoSpots: [
      { name: 'Pamban Sea Bridge', type: 'Drone photography', desc: 'The railway bridge crossing over ocean waters towards the island.' }
    ],
    history: [
      { era: 'Treta Yuga', event: 'Rama Consecration', desc: 'Lord Rama constructed the Shiva Lingam here using sea sand to pray after Lanka conquest.' }
    ],
    stays: [
      { name: 'Daiwik Hotels Rameshwaram', type: 'Comfort', desc: 'Excellent boutique hotel catering to spiritual tourists.' },
      { name: 'TTDC Hotel Tamil Nadu', type: 'Budget', desc: 'Simple rooms close to the beach and main temple.' }
    ],
    nomadHub: {
      internetSpeed: '65 Mbps',
      coworkingSpace: 'Madurai Cowork Nest (2.5 hours away)',
      costOfLiving: 'Low (₹23,000/mo)',
      monthlyRent: '₹9,000 - ₹15,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4900,
      tollEstimates: 620,
      foodStops: ['Madurai bypass veg dhaba', 'Ramanathapuram Food plaza'],
      scenicStops: ['Pamban Bridge entry curves'],
      restAreas: ['NH-87 Rest Node'],
      evChargers: ['Tata Power EV Station, Rameshwaram Center'],
      emergencyContacts: { phone: '+91 4573-221200', details: 'Rameshwaram Coast Guard Patrol' },
      alternativeRoute: 'Madurai-Rameshwaram National Highway (Well paved, scenic ocean sides)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'You must take a wet bath at the sea ghats before entering the 22 wells.' }
    ]
  },
  {
    id: 'dest-dwarka',
    name: 'Dwarkadhish Temple',
    region: 'West India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 3410,
    price: 23000,
    image: '/destinations/dwarkadhish.jpg',
    description: 'The ancient capital kingdom of Lord Krishna. Situated in Gujarat where the Gomti River meets the Arabian Sea, featuring a majestic 5-story sandstone spire.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 59, y: 32 },
    moods: ['Spiritual', 'Relaxed'],
    photoSpots: [
      { name: 'Gomti Ghat Temples', type: 'Sunset', desc: 'Small stone shrines reflecting off the Gomti River meeting the ocean.' }
    ],
    history: [
      { era: '5000 BC', event: 'Kingdom Founding', desc: 'Lord Krishna reclaimed land from the sea to construct the golden city of Dwarka.' }
    ],
    stays: [
      { name: 'Goverdhan Greens Resort', type: 'Comfort', desc: 'Eco-resort with organic gardens and yoga lawns.' },
      { name: 'Dwarkadhish Devsthanam Lodge', type: 'Budget', desc: 'Simple rooms managed near the temple steps.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Jamnagar Startup Zone (1.5 hours away)',
      costOfLiving: 'Low (₹21,500/mo)',
      monthlyRent: '₹8,000 - ₹14,500',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3800,
      tollEstimates: 480,
      foodStops: ['Rajkot-Dwarka highway plazas'],
      scenicStops: ['Saurashtra windmills land'],
      restAreas: ['Khambhalia Highway Rest stop'],
      evChargers: ['Tata Power EV Station, Dwarka Bypass'],
      emergencyContacts: { phone: '+91 2892-234007', details: 'Dwarka City Police Patrol' },
      alternativeRoute: 'Jamnagar-Dwarka NH 947 highway (Smooth 4-lane)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Weather', text: 'Coastal winds are very strong. Keep umbrellas and hats protected.' }
    ]
  },
  {
    id: 'dest-vaishnodevi',
    name: 'Vaishno Devi',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 5430,
    price: 28000,
    image: '/destinations/vaishnodevi.jpg',
    description: 'The highly revered cave shrine of Mother Goddess Vaishno Devi in Katra, Jammu & Kashmir. Located at 5,200 ft on the holy Trikuta Hills.',
    tags: ['Spiritual', 'Adventure', 'Nature'],
    coordinates: { x: 63, y: 27 },
    moods: ['Spiritual', 'Adventurous'],
    photoSpots: [
      { name: 'Ardhkuwari Valley view', type: 'Landscape', desc: 'Misty hills and glowing path lights of the trek route winding at night.' }
    ],
    history: [
      { era: 'Ancient', event: 'Devi Meditation', desc: 'Mata Vaishno Devi meditated in the cave for 9 months to escape Bhairav Nath.' }
    ],
    stays: [
      { name: 'Hotel Hari Niwas Palace', type: 'Luxury', desc: 'Heritage hotel located down in Jammu city.' },
      { name: 'Shrine Board Nipun Lodging', type: 'Budget', desc: 'Affordable dorms and rooms at Katra base.' }
    ],
    nomadHub: {
      internetSpeed: '50 Mbps',
      coworkingSpace: 'Jammu Startup Corner',
      costOfLiving: 'Low-Medium (₹29,000/mo)',
      monthlyRent: '₹10,000 - ₹18,000',
      visaInfo: 'Standard entry. Heavy security checkpoints.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 5200,
      tollEstimates: 820,
      foodStops: ['Haveli Jalandhar', 'Katra Base Dhaba'],
      scenicStops: ['Shivalik mountain loops view'],
      restAreas: ['Udhampur highway rest node'],
      evChargers: ['ChargeZone EV Station, Katra base'],
      emergencyContacts: { phone: '+91 1991-232009', details: 'Vaishno Devi Shrine Board Command Center' },
      alternativeRoute: 'Trek 12km from Katra base or take the official battery cars/chopper'
    },
    riskAlerts: [
      { level: 'High', category: 'Health', text: 'Trek is 12km steep climb. Ensure you are physically fit or book pony services.' }
    ]
  },
  {
    id: 'dest-tirupati',
    name: 'Tirupati Balaji',
    region: 'South India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 5120,
    price: 32000,
    image: 'https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=800&q=80',
    description: 'The richest temple complex in the world. Located on the Seven Hills of Tirumala in Andhra Pradesh, dedicated to Lord Venkateswara.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 65, y: 37 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Gilded Ananda Nilayam', type: 'Architecture', desc: 'The pure gold-plated central dome shining under high spotlights.' }
    ],
    history: [
      { era: '300 AD', event: 'First Records', desc: 'Ancient Sangam literature mentions Tirumala hills as the gateway to the South.' }
    ],
    stays: [
      { name: 'Taj Tirupati', type: 'Luxury', desc: 'Five-star hotel reflecting the local spiritual architecture.' },
      { name: 'Tirumala Trust Pilgrim Halls', type: 'Budget', desc: 'Massive free accommodation complexes for pilgrims.' }
    ],
    nomadHub: {
      internetSpeed: '85 Mbps',
      coworkingSpace: 'Tirupati Startup Space, Regus Chennai base',
      costOfLiving: 'Low-Medium (₹31,000/mo)',
      monthlyRent: '₹12,000 - ₹20,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4500,
      tollEstimates: 550,
      foodStops: ['Chennai-Tirupati Highway Plaza', 'Sri Kalahasti Veg Inn'],
      scenicStops: ['Tirumala Ghat winding road curves'],
      restAreas: ['Alipiri Toll Gate Rest Zone'],
      evChargers: ['Tata Power EV Station, Tirupati base'],
      emergencyContacts: { phone: '+91 877-2264205', details: 'TTD Temple Trust Helpline' },
      alternativeRoute: 'Take the scenic Alipiri footpath (3550 steps) for a spiritual trekking experience'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Crowd', text: 'Standard queue times can range from 4 to 12 hours. Book Special Entry tickets in advance.' }
    ]
  },
  {
    id: 'dest-meenakshi',
    name: 'Meenakshi Temple (Madurai)',
    region: 'South India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 3880,
    price: 26000,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of Dravidian architecture. Located in Madurai, Tamil Nadu, featuring 14 massive gopuram towers covered in thousands of colorful stone figures.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 65, y: 39 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Golden Lotus Pond', type: 'Architecture', desc: 'The central reflecting tank framing the colorful temple towers above.' }
    ],
    history: [
      { era: '6th Century BC', event: 'Founding of Madurai', desc: 'According to legend, Lord Shiva showered nectar over the city from his hair.' }
    ],
    stays: [
      { name: 'Heritage Madurai', type: 'Luxury', desc: 'Stunning luxury resort set in historic heritage villas.' },
      { name: 'Madurai Residency', type: 'Comfort', desc: 'Clean mid-range hotel near the railway station.' }
    ],
    nomadHub: {
      internetSpeed: '75 Mbps',
      coworkingSpace: 'Madurai Coworking Space',
      costOfLiving: 'Low (₹24,000/mo)',
      monthlyRent: '₹9,000 - ₹16,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4200,
      tollEstimates: 580,
      foodStops: ['Trichy Highway Veg Plaza', 'Hotel Sabareesh Madurai'],
      scenicStops: ['Sirumalai foothill passes'],
      restAreas: ['NH-45 Highway Rest stop'],
      evChargers: ['Tata Power EV Station, Madurai Center'],
      emergencyContacts: { phone: '+91 452-2344360', details: 'Madurai City Police Helpdesk' },
      alternativeRoute: 'Chennai-Trichy-Madurai National Highway (Excellent 6-lane road)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'No camera equipment or mobile phones allowed inside the temple walls.' }
    ]
  },
  {
    id: 'dest-konark',
    name: 'Konark Sun Temple',
    region: 'East India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 2980,
    price: 19500,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    description: 'The monumental stone chariot of the Sun God. A UNESCO World Heritage site in Odisha, carved with intricate sun wheels that act as sundials.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 69, y: 33 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Chariot Wheel Sundial', type: 'Detail', desc: 'Close-up of the intricately carved spoke wheels indicating real time via shadows.' }
    ],
    history: [
      { era: '1250 AD', event: 'King Narasimhadeva I', desc: 'Constructed the monument using black granite to celebrate military victories.' }
    ],
    stays: [
      { name: 'Lotus Resort Konark', type: 'Comfort', desc: 'Beautiful cottages set where the Kushabhadra River meets the sea.' },
      { name: 'Yatri Nivas Konark', type: 'Budget', desc: 'Affordable rooms managed by Odisha Tourism.' }
    ],
    nomadHub: {
      internetSpeed: '70 Mbps',
      coworkingSpace: 'Bhubaneswar Hubs',
      costOfLiving: 'Low (₹22,000/mo)',
      monthlyRent: '₹8,000 - ₹14,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3600,
      tollEstimates: 240,
      foodStops: ['Marine Drive Food Joints', 'Puri Highway Dhaba'],
      scenicStops: ['Konark-Puri Marine Drive forest canopy road'],
      restAreas: ['Konark Sanctuary entry rest area'],
      evChargers: ['Tata Power EV Station, Konark Plaza'],
      emergencyContacts: { phone: '+91 6758-236825', details: 'Konark Tourist Police Assistance' },
      alternativeRoute: 'Bhubaneswar-Puri-Konark Marine Drive (Stunning coastal road)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Weather', text: 'Summer is extremely humid and hot. Carry hats, sunglasses, and coconut water.' }
    ]
  },
  {
    id: 'dest-siddhivinayak',
    name: 'Siddhivinayak Temple',
    region: 'West India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 4890,
    price: 15000,
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
    description: 'The historic Ganesha temple in Mumbai. Visited daily by thousands of devotees seeking blessings, featuring a small sanctum with gold-plated ceilings.',
    tags: ['Spiritual', 'Culture', 'History'],
    coordinates: { x: 61, y: 34 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Prabhadevi Temple facade', type: 'Instagram', desc: 'Devotees lining up outside the illuminated multi-tier dome structure.' }
    ],
    history: [
      { era: '1801 AD', event: 'Temple Founding', desc: 'Built by Laxman Vithu and Deubai Patil to fulfill wishes of childless women.' }
    ],
    stays: [
      { name: 'Taj Mahal Tower Mumbai', type: 'Luxury', desc: 'World-famous luxury hotel overlooking the Gateway of India.' },
      { name: 'Zostel Mumbai', type: 'Backpacking', desc: 'Energetic backpacker hostel in Andheri.' }
    ],
    nomadHub: {
      internetSpeed: '120 Mbps',
      coworkingSpace: 'WeWork Mumbai, Ministry of New',
      costOfLiving: 'High (₹75,000/mo)',
      monthlyRent: '₹35,000 - ₹60,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2100,
      tollEstimates: 380,
      foodStops: ['Prabhadevi Local Street food', 'Shivaji Park Cafe'],
      scenicStops: ['Bandra-Worli Sea Link crossing view'],
      restAreas: ['Worli Sea Face rest node'],
      evChargers: ['Tata Power EV Supercharger, Dadar'],
      emergencyContacts: { phone: '+91 22-24224438', details: 'Siddhivinayak Temple Trust Safety Desk' },
      alternativeRoute: 'Utilize Mumbai Local trains to Dadar station to bypass traffic blocks'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Crowd', text: 'Tuesdays are extremely crowded. Queue wait times can exceed 3 hours.' }
    ]
  },
  {
    id: 'dest-shirdi',
    name: 'Shirdi Sai Baba Temple',
    region: 'West India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 4670,
    price: 22000,
    image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=800&q=80',
    description: 'The home of the revered saint Sai Baba. Located in Maharashtra, it attracts millions of multi-faith pilgrims celebrating universal peace and charity.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 62, y: 34 },
    moods: ['Spiritual', 'Relaxed'],
    photoSpots: [
      { name: 'Dwarkamai Masjid', type: 'Spiritual', desc: 'The ancient mosque room where Sai Baba lived and kept the sacred fire (Dhuni) burning.' }
    ],
    history: [
      { era: '19th Century', event: 'Sai Baba Arrival', desc: 'A young ascetic saint arrived in Shirdi, preaching "Sabka Malik Ek" (One God governs all).' }
    ],
    stays: [
      { name: 'Sun N Sand Shirdi', type: 'Luxury', desc: 'Five-star hotel offering excellent spa and temple shuttle services.' },
      { name: 'Sai Ashram Bhaktniwas', type: 'Budget', desc: 'Massive clean state accommodation at very low rates.' }
    ],
    nomadHub: {
      internetSpeed: '65 Mbps',
      coworkingSpace: 'Nashik Startup Hub (1.5 hours away)',
      costOfLiving: 'Low (₹22,000/mo)',
      monthlyRent: '₹9,000 - ₹16,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3600,
      tollEstimates: 550,
      foodStops: ['Samruddhi Mahamarg Food court', 'Sinnar Highway Plaza'],
      scenicStops: ['Western Ghat hill entries'],
      restAreas: ['Kasara Ghat rest stop'],
      evChargers: ['Tata Power EV Station, Shirdi Bypass'],
      emergencyContacts: { phone: '+91 2423-258500', details: 'Sai Sansthan Shirdi Command Center' },
      alternativeRoute: 'Samruddhi Mahamarg Expressway (Fastest expressway route from Mumbai)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Cameras, laptops, and electronic gadgets are not allowed in the main shrine.' }
    ]
  },
  {
    id: 'dest-ajmer',
    name: 'Ajmer Sharif Dargah',
    region: 'West India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 3120,
    price: 19000,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    description: 'The Sufi shrine of Khwaja Moinuddin Chishti in Rajasthan. Renowned for its universal message of peace, Qawwali music, and giant food cauldrons.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 62, y: 30 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Silver Dome Portal', type: 'Architecture', desc: 'The glowing silver dome of the mausoleum framed by Sufi flags.' }
    ],
    history: [
      { era: '13th Century', event: 'Sufi Saint Resting', desc: 'Khwaja Moinuddin Chishti settled in Ajmer, establishing the Sufi Chishtiya order.' }
    ],
    stays: [
      { name: 'The Gateway Resort Pushkar', type: 'Luxury', desc: 'Luxury resort located just over the hill in Pushkar.' },
      { name: 'Hotel Khadim (RTDC)', type: 'Budget', desc: 'Clean government rooms in Ajmer center.' }
    ],
    nomadHub: {
      internetSpeed: '65 Mbps',
      coworkingSpace: 'Jaipur Workspaces (2 hours away)',
      costOfLiving: 'Low (₹23,000/mo)',
      monthlyRent: '₹9,000 - ₹15,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3400,
      tollEstimates: 480,
      foodStops: ['Jaipur-Ajmer Highway Treat', 'Kishangarh Highway plaza'],
      scenicStops: ['Kishangarh white marble dumps (Instagram hotspot)'],
      restAreas: ['NH-48 Rest Area'],
      evChargers: ['Tata Power EV Charger, Ajmer Entry'],
      emergencyContacts: { phone: '+91 145-2627444', details: 'Ajmer Police Helpline' },
      alternativeRoute: 'Jaipur-Ajmer Highway (Fast 6-lane national highway corridor)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Security', text: 'Watch out for pickpockets in narrow congested alleys leading to the Dargah.' }
    ]
  },
  {
    id: 'dest-dilwara',
    name: 'Dilwara Temples',
    region: 'West India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 2880,
    price: 24000,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    description: 'The marble masterpiece of Mount Abu, Rajasthan. Built between the 11th and 13th centuries, famous for its impossibly delicate stone carvings.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 61, y: 31 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Vimal Vasahi Ceiling', type: 'Architecture', desc: 'Concentric carved rings and hanging marble lotus pendants.' }
    ],
    history: [
      { era: '1031 AD', event: 'Vimal Shah Founding', desc: 'Built the first temple dedicated to Rishabhdev, using pure marble carried up the hills.' }
    ],
    stays: [
      { name: 'WelcomHeritage Connaught House', type: 'Luxury', desc: 'English cottage heritage villa set in Mount Abu forest.' },
      { name: 'Mount Abu Youth Hostel', type: 'Budget', desc: 'Budget accommodation near Nakki Lake.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Mount Abu Tech Lounge',
      costOfLiving: 'Low-Medium (₹29,000/mo)',
      monthlyRent: '₹12,000 - ₹19,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4100,
      tollEstimates: 550,
      foodStops: ['Palanpur Bypass food court', 'Abu Road Highway Dhaba'],
      scenicStops: ['Mount Abu Ghat hairpin curves overlooking plains'],
      restAreas: ['Abu Road rail-junction stop'],
      evChargers: ['Tata Power EV Station, Mount Abu Entry'],
      emergencyContacts: { phone: '+91 2974-235133', details: 'Mount Abu Civil Police' },
      alternativeRoute: 'Drive slowly on mountain passes, especially during winter mist'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Strict photography ban inside the temple structures. Cameras must be deposited at entry.' }
    ]
  },
  {
    id: 'dest-mecca',
    name: 'Mecca',
    region: 'Middle East',
    country: 'Saudi Arabia',
    rating: 5.0,
    reviewsCount: 9400,
    price: 110000,
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80',
    description: 'The holiest city in Islam. Located in Saudi Arabia, home to the sacred Kaaba within Masjid al-Haram and the destination of the Hajj pilgrimage.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 30, y: 25 },
    moods: ['Spiritual'],
    photoSpots: [
      { name: 'Holy Kaaba Courtyard', type: 'Spiritual', desc: 'Pilgrims circumambulating the black silk-covered Kaaba structure.' }
    ],
    history: [
      { era: 'Ancient', event: 'Abrahams Prayer', desc: 'Prophet Abraham and Ishmael constructed the foundations of the Kaaba.' }
    ],
    stays: [
      { name: 'Makkah Clock Royal Tower', type: 'Luxury', desc: 'Ultra-luxury hotel overlooking the Holy Mosque.' },
      { name: 'Hajj Pilgrim Tents (Mina)', type: 'Budget', desc: 'Specialized state pilgrim camps set up during Hajj.' }
    ],
    nomadHub: {
      internetSpeed: '95 Mbps',
      coworkingSpace: 'Regus Makkah, Makkah Startup Lab',
      costOfLiving: 'High (₹1,20,000/mo)',
      monthlyRent: '₹55,000 - ₹95,000',
      visaInfo: 'Requires specialized Hajj/Umrah visa. Open exclusively to Muslims.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 9500,
      tollEstimates: 1800,
      foodStops: ['Jeddah-Makkah highway diners'],
      scenicStops: ['Hejaz mountain desert ridges'],
      restAreas: ['Haramain Express Station lounge'],
      evChargers: ['Schneider EV Station, Jeddah Gateway'],
      emergencyContacts: { phone: '+966 911', details: 'Saudi National Security Operations Center' },
      alternativeRoute: 'Haramain High-Speed Railway (Fastest transit from Jeddah Airport)'
    },
    riskAlerts: [
      { level: 'High', category: 'Crowd', text: 'Crowd density is extreme during Hajj. Keep hydrated and follow group pathways.' }
    ]
  },
  {
    id: 'dest-medina',
    name: 'Medina',
    region: 'Middle East',
    country: 'Saudi Arabia',
    rating: 5.0,
    reviewsCount: 8120,
    price: 95000,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
    description: 'The Prophet\'s City. The second holiest site in Islam, housing Al-Masjid an-Nabawi (The Prophet\'s Mosque) with its iconic green dome.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 29, y: 24 },
    moods: ['Spiritual'],
    photoSpots: [
      { name: 'Prophets Mosque Umbrellas', type: 'Architecture', desc: 'Giant Teflon folding umbrellas shading the white marble courtyards.' }
    ],
    history: [
      { era: '622 AD', event: 'The Hijra', desc: 'Prophet Muhammad migrated from Mecca to Medina, establishing the first Islamic state.' }
    ],
    stays: [
      { name: 'Oberoi Madina', type: 'Luxury', desc: 'Five-star hotel offering immediate luxury access to the Prophet\'s Mosque.' },
      { name: 'Medina Rest House', type: 'Comfort', desc: 'Affordable family suites close to central gate.' }
    ],
    nomadHub: {
      internetSpeed: '90 Mbps',
      coworkingSpace: 'Medina Chamber Coworking',
      costOfLiving: 'Medium-High (₹85,000/mo)',
      monthlyRent: '₹40,000 - ₹70,000',
      visaInfo: 'Umrah/Tourist Visa rules apply. Inner holy boundary restrictions.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 8200,
      tollEstimates: 1200,
      foodStops: ['Desert Oasis Highway Kitchen'],
      scenicStops: ['Red sand deserts of Hejaz'],
      restAreas: ['Medina Highway service hub'],
      evChargers: ['Medina EV Charger, Ring Road'],
      emergencyContacts: { phone: '+966 911', details: 'Medina Police & Emergency Medical' },
      alternativeRoute: 'Haramain Train (Jeddah to Medina in under 2 hours)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Observe absolute respect in the quiet zone around the Prophet\'s tomb (Rawdah).' }
    ]
  },
  {
    id: 'dest-westernwall',
    name: 'Western Wall',
    region: 'Middle East',
    country: 'Israel',
    rating: 4.9,
    reviewsCount: 7120,
    price: 98000,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
    description: 'The sacred site of prayer in Jerusalem. The ancient limestone retaining wall of the Temple Mount, representing centuries of Jewish heritage.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 34, y: 22 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Prayer Wall Close-up', type: 'Human interest', desc: 'Devotees inserting rolled paper notes containing wishes into the limestone crevices.' }
    ],
    history: [
      { era: '19 BC', event: 'Herods Expansion', desc: 'Built by Herod the Great as a retaining wall for the second Jewish Temple.' }
    ],
    stays: [
      { name: 'The King David Jerusalem', type: 'Luxury', desc: 'Historic grand hotel overlooking the Old City walls.' },
      { name: 'Abraham Hostel Jerusalem', type: 'Backpacking', desc: 'Highly social, clean backpacker hostel in city center.' }
    ],
    nomadHub: {
      internetSpeed: '110 Mbps',
      coworkingSpace: 'WeWork Jerusalem, Jerusalem Tech Hub',
      costOfLiving: 'High (₹1,30,000/mo)',
      monthlyRent: '₹60,000 - ₹95,000',
      visaInfo: 'Standard entry visa. Airport security check is very comprehensive.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 11000,
      tollEstimates: 1500,
      foodStops: ['Jaffa Highway Bistro', 'Jerusalem Hills Cafe'],
      scenicStops: ['Judaean Mountains valleys view'],
      restAreas: ['Route 1 Highway Plaza'],
      evChargers: ['Afcon EV Charger, Jerusalem Entry'],
      emergencyContacts: { phone: '+972 100', details: 'Israel National Police Emergency' },
      alternativeRoute: 'Take the new high-speed train from Tel Aviv Ben Gurion Airport (Only 20 mins)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Security', text: 'Expect multiple security metal detector checks at Old City gateways.' }
    ]
  },
  {
    id: 'dest-mountkailash',
    name: 'Mount Kailash',
    region: 'Tibet',
    country: 'China',
    rating: 5.0,
    reviewsCount: 1250,
    price: 145000,
    image: 'https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=800&q=80',
    description: 'The sacred cosmic peak in Tibet. Revered in Hinduism as the home of Shiva, and in Buddhism, Jainism, and Bon, surrounded by Mansarovar lake.',
    tags: ['Spiritual', 'Adventure', 'Nature', 'Offbeat'],
    coordinates: { x: 63, y: 26 },
    moods: ['Spiritual', 'Adventurous', 'Nature Escape'],
    photoSpots: [
      { name: 'Mansarovar Lake mirror', type: 'Landscape', desc: 'The snowy pyramid peak of Kailash reflecting off the crystal waters of Mansarovar.' }
    ],
    history: [
      { era: 'Ancient', event: 'Cosmic Center', desc: 'Considered the Axis Mundi (cosmic center of the universe) in major faiths. Unclimbed to this day.' }
    ],
    stays: [
      { name: 'Darchen Guest House', type: 'Budget', desc: 'Basic guest house down at Darchen base camp.' },
      { name: 'Mansarovar Tent Camps', type: 'Budget', desc: 'Basic pilgrim camp tents set by the lake shore.' }
    ],
    nomadHub: {
      internetSpeed: '15 Mbps (Mobile Data)',
      coworkingSpace: 'None (Satellite base)',
      costOfLiving: 'Medium (₹45,000/mo due to extreme remote locations)',
      monthlyRent: '₹20,000 - ₹35,000',
      visaInfo: 'Requires Chinese Visa, Tibet Travel Permit, and military permits.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 22000,
      tollEstimates: 3500,
      foodStops: ['Lhasa Highway tea house', 'Saga Border food post'],
      scenicStops: ['Tibetan Plateau mountain plains views'],
      restAreas: ['Ali Regional administrative rest post'],
      evChargers: ['None (Use solar back power generators)'],
      emergencyContacts: { phone: '+86 891-110', details: 'Tibet Border Police Command' },
      alternativeRoute: 'Join authorized spiritual tour groups departing from Kathmandu or Lhasa'
    },
    riskAlerts: [
      { level: 'High', category: 'Health', text: 'Altitude exceeds 15,000 ft. Altitude sickness (AMS) is a severe risk. Spend 3 days acclimatizing.' },
      { level: 'High', category: 'Weather', text: 'Heavy winter snow blocks passes. Trekking is only open from June to September.' }
    ]
  },
  {
    id: 'dest-patnasahib',
    name: 'Takht Sri Patna Sahib',
    region: 'East India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 1450,
    price: 18000,
    image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=800&q=80',
    description: 'The birthplace of Guru Gobind Singh Ji in Bihar. A key Takht seat of Sikhism, situated on the banks of the Ganges, featuring a pristine white marble shrine.',
    tags: ['Spiritual', 'Culture', 'History', 'Food'],
    coordinates: { x: 67, y: 30 },
    moods: ['Spiritual', 'Relaxed'],
    photoSpots: [
      { name: 'Marble Dome reflections', type: 'Architecture', desc: 'The main white marble dome reflecting over the central courtyard tiles.' }
    ],
    history: [
      { era: '1666 AD', event: 'Birth of Guru', desc: 'Guru Gobind Singh, the tenth Sikh Guru, was born here and spent early years.' }
    ],
    stays: [
      { name: 'Hotel Maurya Patna', type: 'Comfort', desc: 'Clean premium hotel located in Patna city center.' },
      { name: 'Guru Gobind Niwas', type: 'Budget', desc: 'Free accommodation managed by Patna Sahib committee.' }
    ],
    nomadHub: {
      internetSpeed: '65 Mbps',
      coworkingSpace: 'Patna Startup Nest',
      costOfLiving: 'Low (₹22,050/mo)',
      monthlyRent: '₹8,000 - ₹15,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3600,
      tollEstimates: 420,
      foodStops: ['Ganga Highway Dhaba', 'Patna Bypass Treat'],
      scenicStops: ['Ganga River Bridge views'],
      restAreas: ['Patna City entry node'],
      evChargers: ['Tata Power EV Station, Patna city'],
      emergencyContacts: { phone: '+91 612-2641950', details: 'Takht Patna Sahib Management Board' },
      alternativeRoute: 'Purvanchal Expressway followed by NH-31 (Smooth direct route)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Cover your head and remove footwear before entering the Gurudwara.' }
    ]
  },
  {
    id: 'dest-anandpursahib',
    name: 'Anandpur Sahib',
    region: 'North India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 1820,
    price: 21000,
    image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=800&q=80',
    description: 'The birthplace of the Khalsa. Nestled in the foothills of Punjab, hosting the historic Hola Mohalla martial arts festival and housing white heritage Gurudwaras.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 62, y: 28 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Hola Mohalla charge', type: 'Festival', desc: 'Nihang Sikhs demonstrating horse riding and mock battles in blue robes.' }
    ],
    history: [
      { era: '1699 AD', event: 'Khalsa Founding', desc: 'Guru Gobind Singh initiated the Five Beloved Ones (Panj Pyare), founding the Khalsa order.' }
    ],
    stays: [
      { name: 'Anandpur Retreat Resort', type: 'Comfort', desc: 'Boutique farm resort set in green fields.' },
      { name: 'Sri Guru Teg Bahadur Niwas', type: 'Budget', desc: 'Basic pilgrim accommodation near the main Takht.' }
    ],
    nomadHub: {
      internetSpeed: '70 Mbps',
      coworkingSpace: 'Chandigarh Startup Zone (1 hour away)',
      costOfLiving: 'Low (₹23,000/mo)',
      monthlyRent: '₹9,000 - ₹16,050',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2800,
      tollEstimates: 380,
      foodStops: ['Ropar Canal Dhaba', 'Anandpur Highway Plaza'],
      scenicStops: ['Shivalik foothills landscape view'],
      restAreas: ['Rupnagar Highway Rest stop'],
      evChargers: ['Tata Power EV Station, Anandpur Entry'],
      emergencyContacts: { phone: '+91 1887-232007', details: 'Anandpur Police Station' },
      alternativeRoute: 'Chandigarh-Ropar-Anandpur Highway (Fast well-paved 4-lane)'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Crowd', text: 'Extremely heavy crowds during March Hola Mohalla festival.' }
    ]
  },
  {
    id: 'dest-sarnath',
    name: 'Sarnath',
    region: 'East India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 1650,
    price: 19000,
    image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=800&q=80',
    description: 'The sacred deer park where Gautama Buddha gave his first sermon. Located near Varanasi, featuring the massive Dhamek Stupa, ancient monasteries, and Ashokan stone columns.',
    tags: ['Spiritual', 'History', 'Relaxation'],
    coordinates: { x: 66, y: 31 },
    moods: ['Spiritual', 'Relaxed'],
    photoSpots: [
      { name: 'Dhamek Stupa bricks', type: 'Detail', desc: 'The geometric floral stone carvings on the base of the massive stupa.' }
    ],
    history: [
      { era: '528 BC', event: 'First Sermon', desc: 'Buddha preached the Dharmachakra Pravartana Sutra to his first five disciples.' }
    ],
    stays: [
      { name: 'Sarnath Buddhist Temple Lodge', type: 'Budget', desc: 'Quiet rooms run by international Buddhist monasteries.' },
      { name: 'The Golden Buddha Resort', type: 'Comfort', desc: 'Premium modern hotel close to archaeological gardens.' }
    ],
    nomadHub: {
      internetSpeed: '70 Mbps',
      coworkingSpace: 'Banaras Startup Nest (Varanasi base)',
      costOfLiving: 'Low (₹24,000/mo)',
      monthlyRent: '₹9,000 - ₹17,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2200,
      tollEstimates: 150,
      foodStops: ['Varanasi Sarnath road plazas'],
      scenicStops: ['Serene deer park gardens'],
      restAreas: ['Sarnath Museum entry rest area'],
      evChargers: ['Tata Power EV Station, Sarnath road'],
      emergencyContacts: { phone: '+91 542-2585002', details: 'Sarnath Tourist Police post' },
      alternativeRoute: 'Take auto-rickshaws directly from Varanasi Cantt station (Only 10km)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Maintain quietness. Do not step on ancient brick foundations in excavation zones.' }
    ]
  },
  {
    id: 'dest-bomjesus',
    name: 'Basilica of Bom Jesus',
    region: 'South India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 3100,
    price: 24000,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    description: 'The legendary UNESCO world heritage church in Old Goa. It holds the sacred mortal remains of St. Francis Xavier, demonstrating fine Baroque architecture in red laterite stone.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 61, y: 35 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Laterite Stone Facade', type: 'Architecture', desc: 'The classical three-story exterior facade combining Doric, Ionic, and Corinthian orders.' }
    ],
    history: [
      { era: '1605 AD', event: 'Consecration', desc: 'Completed by Portuguese Jesuits, establishing it as a key basilica of the East.' }
    ],
    stays: [
      { name: 'Heritage Village Resort Goa', type: 'Luxury', desc: 'Heritage luxury resort set close to beaches and Old Goa.' },
      { name: 'Old Goa Residency', type: 'Budget', desc: 'Clean budget hotel managed by Goa Tourism.' }
    ],
    nomadHub: {
      internetSpeed: '95 Mbps',
      coworkingSpace: 'NomadGao, Panaji Cowork Zone',
      costOfLiving: 'Medium (₹45,000/mo)',
      monthlyRent: '₹22,000 - ₹35,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2200,
      tollEstimates: 180,
      foodStops: ['Panaji Riverfront Cafe', 'Old Goa highway dhaba'],
      scenicStops: ['Mandovi river views from Ribandar road'],
      restAreas: ['Panaji Bus Stand Rest Zone'],
      evChargers: ['Tata Power EV Station, Panaji Center'],
      emergencyContacts: { phone: '+91 832-2419555', details: 'Goa Highway Police' },
      alternativeRoute: 'Take a river ferry from Divar Island directly to Ribandar dock for a scenic route'
    },
    riskAlerts: [
      { level: 'Low', category: 'Dress', text: 'Observe dress decorum inside the basilica. Keep absolute silence.' }
    ]
  },
  {
    id: 'dest-velankanni',
    name: 'Velankanni Church',
    region: 'South India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 2650,
    price: 21500,
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
    description: 'The Lourdes of the East. The Basilica of Our Lady of Good Health in Nagapattinam, Tamil Nadu, attracting millions of multi-faith pilgrims seeking healing.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 65, y: 38 },
    moods: ['Spiritual', 'Relaxed'],
    photoSpots: [
      { name: 'Pristine White Basilica Spire', type: 'Architecture', desc: 'The stunning white Gothic spires reflecting off the blue coast of Bengal.' }
    ],
    history: [
      { era: '16th Century', event: 'Marian Apparitions', desc: 'According to legend, Mother Mary appeared to a young milk-boy and healed a crippled child.' }
    ],
    stays: [
      { name: 'Hotel MGM Residency', type: 'Comfort', desc: 'Comfortable family rooms close to the church gates.' },
      { name: 'Velankanni Trust Dorms', type: 'Budget', desc: 'Basic pilgrim accommodation managed by the shrine administration.' }
    ],
    nomadHub: {
      internetSpeed: '55 Mbps',
      coworkingSpace: 'Trichy Startup Zone (2.5 hours away)',
      costOfLiving: 'Low (₹22,000/mo)',
      monthlyRent: '₹8,000 - ₹14,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4500,
      tollEstimates: 520,
      foodStops: ['Tanjore Highway Veg hotel', 'Velankanni Bypass Dhaba'],
      scenicStops: ['Delta canal views of Cauvery River'],
      restAreas: ['Nagapattinam entry stop'],
      evChargers: ['Tata Power EV Station, Velankanni Town'],
      emergencyContacts: { phone: '+91 4365-263212', details: 'Velankanni Shrine Office Helpdesk' },
      alternativeRoute: 'Tanjore-Nagapattinam highway route (Scenic and fully paved)'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Observe queue disciplines in the Holy Path, especially during the annual feast in September.' }
    ]
  },
  {
    id: 'dest-palitana',
    name: 'Palitana Temples',
    region: 'West India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 2210,
    price: 26000,
    image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=800&q=80',
    description: 'The sacred Jain hill city in Bhavnagar, Gujarat. Featuring 863 marble-carved temples on the Shatrunjaya Hills, reachable via a climb of 3,500 stone stairs.',
    tags: ['Spiritual', 'History', 'Adventure'],
    coordinates: { x: 60, y: 33 },
    moods: ['Spiritual', 'Adventurous'],
    photoSpots: [
      { name: 'Shatrunjaya Ridge Temples', type: 'Drone photography', desc: 'The panoramic grid of marble domes and walls cluster on the mountain crest.' }
    ],
    history: [
      { era: 'Ancient', event: 'Adinath Sermon', desc: 'The first Jain Tirthankara, Adinath, sanctified the hills by meditating here.' }
    ],
    stays: [
      { name: 'Palitana Jain Dharamshala', type: 'Budget', desc: 'Prinstine marble dharamshalas serving pure Jain meals.' },
      { name: 'Hotel Sumeru (TCGL)', type: 'Comfort', desc: 'Clean government accommodation at hill base.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Bhavnagar Startup Hub (1 hour away)',
      costOfLiving: 'Low (₹21,000/mo)',
      monthlyRent: '₹7,500 - ₹13,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3600,
      tollEstimates: 410,
      foodStops: ['Bhavnagar highway veg plazas', 'Palitana base dharamshala kitchen'],
      scenicStops: ['Shatrunjaya Dam reservoir view'],
      restAreas: ['Bhavnagar Entry toll rest zone'],
      evChargers: ['Tata Power EV Station, Bhavnagar road'],
      emergencyContacts: { phone: '+91 278-2844222', details: 'Palitana Police & Medical Emergency' },
      alternativeRoute: 'Ahmedabad-Bhavnagar-Palitana Highway (Fastest 4-lane expressway and NH corridor)'
    },
    riskAlerts: [
      { level: 'High', category: 'Health', text: 'You must climb 3,500 stairs. Carry water. Doli (palanquin) services are available for seniors.' },
      { level: 'High', category: 'Culture', text: 'No eating or carrying food items up the hill is permitted. Leather items are prohibited.' }
    ]
  },
  {
    id: 'dest-ranakpur',
    name: 'Ranakpur Jain Temple',
    region: 'West India',
    country: 'India',
    rating: 4.9,
    reviewsCount: 2450,
    price: 24500,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    description: 'The forest temple of Pali, Rajasthan. Famous for its 1,444 uniquely carved marble pillars where no two pillars have the same carvings, dedicated to Adinath.',
    tags: ['Spiritual', 'History', 'Culture'],
    coordinates: { x: 62, y: 31 },
    moods: ['Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Pillared Hall Shadows', type: 'Detail', desc: 'The interplay of light and shade in the massive halls carved with stone elephants.' }
    ],
    history: [
      { era: '1437 AD', event: 'Founding by Dharna Shah', desc: 'A Jain merchant built the temple following a divine vision, patronized by Rana Kumbha.' }
    ],
    stays: [
      { name: 'King\'s Abode Ranakpur', type: 'Luxury', desc: 'Premium palace-style resort set in the Aravalli hills.' },
      { name: 'Ranakpur Jain Dharamshala', type: 'Budget', desc: 'Clean, peaceful marble rooms offering traditional meals.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Udaipur Cowork Hubs (1.5 hours away)',
      costOfLiving: 'Low-Medium (₹28,000/mo)',
      monthlyRent: '₹10,000 - ₹18,000',
      visaInfo: 'e-Tourist Visa valid up to 1 year.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3200,
      tollEstimates: 380,
      foodStops: ['Udaipur-Ranakpur highway plazas'],
      scenicStops: ['Aravalli forest curves and monkey bridges'],
      restAreas: ['Pali Bypass Rest Area'],
      evChargers: ['Tata Power EV Station, Ranakpur base'],
      emergencyContacts: { phone: '+91 2934-285022', details: 'Ranakpur Temple Trust Helpdesk' },
      alternativeRoute: 'Drive slowly through the winding ghat sections of the Aravalli hills'
    },
    riskAlerts: [
      { level: 'Low', category: 'Culture', text: 'Strict dress codes apply. Do not wear short clothing. Leather products are prohibited.' }
    ]
  },
  {
    id: 'dest-bali',
    name: 'Bali',
    region: 'Southeast Asia',
    country: 'Indonesia',
    rating: 4.8,
    reviewsCount: 4120,
    price: 45000,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    description: 'The Island of the Gods. Renowned for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.',
    tags: ['Beach', 'Culture', 'Nature', 'Relaxation'],
    coordinates: { x: 74, y: 39 },
    moods: ['Relaxed', 'Romantic', 'Nature Escape'],
    photoSpots: [
      { name: 'Ubud Rice Terrace', type: 'Landscape', desc: 'Symmetrical green terraces at sunrise.' }
    ],
    history: [
      { era: '900 AD', event: 'Balinese Kingdom', desc: 'Ruled by warm, independent Hindu dynasties.' }
    ],
    stays: [
      { name: 'Four Seasons Sayan Ubud', type: 'Luxury', desc: 'Overlooking lush green valleys.' }
    ],
    nomadHub: {
      internetSpeed: '85 Mbps',
      coworkingSpace: 'Outpost, Dojo Bali',
      costOfLiving: 'Medium (₹42,000/mo)',
      monthlyRent: '₹20,000 - ₹32,000',
      visaInfo: 'Visa on Arrival valid up to 60 days.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 2800,
      tollEstimates: 150,
      foodStops: ['Naughty Nuri Ubud', 'Warung Kayana'],
      scenicStops: ['Bedugul Lake curves'],
      restAreas: ['Kuta Beach Node'],
      evChargers: ['PLN Charging base Denpasar'],
      emergencyContacts: { phone: '+62 361-224123', details: 'Bali Tourism Police' },
      alternativeRoute: 'Scenic central highlands bypass'
    },
    riskAlerts: [
      { level: 'Low', category: 'Nature', text: 'Active volcano zones (Mount Agung). Watch warning updates.' }
    ]
  },
  {
    id: 'dest-santorini',
    name: 'Santorini',
    region: 'Europe',
    country: 'Greece',
    rating: 4.9,
    reviewsCount: 3890,
    price: 95000,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'The pearl of the Aegean. Famous for dramatic views, whitewashed houses with blue domes, and active volcanic caldera cliffs.',
    tags: ['Romantic', 'Relaxation', 'Luxury', 'Culture'],
    coordinates: { x: 45, y: 22 },
    moods: ['Romantic', 'Relaxed', 'Luxury'],
    photoSpots: [
      { name: 'Oia Blue Domes', type: 'Sunset', desc: 'Iconic whitewashed churches overlooking the sea.' }
    ],
    history: [
      { era: '1600 BC', event: 'Minoan Eruption', desc: 'One of the largest volcanic events in human history.' }
    ],
    stays: [
      { name: 'Grace Hotel Santorini', type: 'Luxury', desc: 'Infinity pool overlooking the caldera.' }
    ],
    nomadHub: {
      internetSpeed: '60 Mbps',
      coworkingSpace: 'Santorini Hub',
      costOfLiving: 'High (₹98,000/mo)',
      monthlyRent: '₹45,000 - ₹75,000',
      visaInfo: 'Schengen Visa regulations apply.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3600,
      tollEstimates: 0,
      foodStops: ['Ammoudi Fish Tavern'],
      scenicStops: ['Fira cliff trail'],
      restAreas: ['Kamari Rest area'],
      evChargers: ['Fira Town EV Chargers'],
      emergencyContacts: { phone: '+30 22860-22640', details: 'Fira Tourist Police' },
      alternativeRoute: 'Coast road avoiding narrow Fira centers'
    },
    riskAlerts: [
      { level: 'Low', category: 'Transit', text: 'Extremely steep roads. Rent automatic cars if possible.' }
    ]
  },
  {
    id: 'dest-kyoto',
    name: 'Kyoto',
    region: 'East Asia',
    country: 'Japan',
    rating: 4.9,
    reviewsCount: 5210,
    price: 88000,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    description: 'The ancient imperial capital. Renowned for its thousands of classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.',
    tags: ['History', 'Culture', 'Nature', 'Heritage'],
    coordinates: { x: 82, y: 28 },
    moods: ['Relaxed', 'Spiritual', 'Cultural'],
    photoSpots: [
      { name: 'Fushimi Inari Torii Gates', type: 'Detail', desc: 'Paths framed by thousands of vibrant vermilion gates.' }
    ],
    history: [
      { era: '794 AD', event: 'Heian-kyo Capital', desc: 'Established as the official seat of the Japanese Emperor.' }
    ],
    stays: [
      { name: 'Hoshinoya Kyoto', type: 'Luxury', desc: 'Traditional ryokan accessed via wooden riverboat.' }
    ],
    nomadHub: {
      internetSpeed: '120 Mbps',
      coworkingSpace: 'Kyoto Nomad Box, DevX Kyoto',
      costOfLiving: 'Medium-High (₹65,000/mo)',
      monthlyRent: '₹28,000 - ₹45,000',
      visaInfo: 'Digital Nomad Visa launched.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 4200,
      tollEstimates: 1800,
      foodStops: ['Nishiki Market stall', 'Gion Veg Restaurant'],
      scenicStops: ['Arashiyama Bamboo Grove curves'],
      restAreas: ['Kyoto highway service area'],
      evChargers: ['Nissan EV charger Kyoto'],
      emergencyContacts: { phone: '+81 75-343-0110', details: 'Kyoto Municipal Emergency Unit' },
      alternativeRoute: 'Kyoto Jukan Expressway'
    },
    riskAlerts: [
      { level: 'Low', category: 'Etiquette', text: 'Respect Geisha privacy in Gion districts. Photographing them without permission is forbidden.' }
    ]
  },
  {
    id: 'dest-swissalps',
    name: 'Swiss Alps',
    region: 'Europe',
    country: 'Switzerland',
    rating: 5.0,
    reviewsCount: 4890,
    price: 110000,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    description: 'The peak of European luxury. Famous for soaring snow-covered peaks, glaciated valleys, high-altitude alpine lakes, and world-class ski chalets.',
    tags: ['Nature', 'Adventure', 'Relaxation', 'Luxury'],
    coordinates: { x: 44, y: 20 },
    moods: ['Adventurous', 'Nature Escape', 'Luxury'],
    photoSpots: [
      { name: 'Matterhorn Reflection', type: 'Landscape', desc: 'The majestic peak reflecting off Riffelsee alpine lake.' }
    ],
    history: [
      { era: '1865 AD', event: 'First Ascent', desc: 'First successful mountaineering expedition to climb the Matterhorn.' }
    ],
    stays: [
      { name: 'The Chedi Andermatt', type: 'Luxury', desc: 'World-class heated mountain chalet.' }
    ],
    nomadHub: {
      internetSpeed: '95 Mbps',
      coworkingSpace: 'Impact Hub Zurich (base)',
      costOfLiving: 'Very High (₹150,000/mo)',
      monthlyRent: '₹65,000 - ₹120,000',
      visaInfo: 'Schengen Visa regulations apply.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 8200,
      tollEstimates: 3200,
      foodStops: ['Interlaken Peak Cafe'],
      scenicStops: ['Furka Pass hairpin turns'],
      restAreas: ['Gotthard Tunnel Rest Area'],
      evChargers: ['Swiss Charge EV stations'],
      emergencyContacts: { phone: '+41 144', details: 'Swiss Alpine Rescue Service' },
      alternativeRoute: 'Scenic pass route bypassing long tunnels'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Heavy snow can block passes. Carry winter snow chains at all times.' }
    ]
  },
  {
    id: 'dest-eiffeltower',
    name: 'Eiffel Tower',
    region: 'Europe',
    country: 'France',
    rating: 4.8,
    reviewsCount: 6120,
    price: 78000,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    description: 'The symbol of Paris. A wrought-iron lattice tower on the Champ de Mars, named after the engineer Gustave Eiffel.',
    tags: ['History', 'Culture', 'Romantic'],
    coordinates: { x: 41, y: 19 },
    moods: ['Romantic', 'Cultural', 'Luxury'],
    photoSpots: [
      { name: 'Trocadéro Steps', type: 'Sunset', desc: 'Perfect sunrise or sunset view of the Eiffel Tower.' }
    ],
    history: [
      { era: '1889 AD', event: "World's Fair", desc: "Inaugurated as the entrance arch to the 1889 World's Fair." }
    ],
    stays: [
      { name: 'Shangri-La Paris', type: 'Luxury', desc: 'Stunning direct views of the Eiffel Tower.' }
    ],
    nomadHub: {
      internetSpeed: '100 Mbps',
      coworkingSpace: 'WeWork Paris, Coworkshop',
      costOfLiving: 'High (₹85,000/mo)',
      monthlyRent: '₹38,000 - ₹65,000',
      visaInfo: 'Schengen regulations apply.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 5400,
      tollEstimates: 1200,
      foodStops: ['Parisian Croissant Cafe'],
      scenicStops: ['Seine River Banks'],
      restAreas: ['A1 Highway Rest stop'],
      evChargers: ['Belib charging base'],
      emergencyContacts: { phone: '+33 112', details: 'Paris Emergency Command Unit' },
      alternativeRoute: 'Boulevard Périphérique bypass'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Security', text: 'Watch out for pickpockets near the Champ de Mars area.' }
    ]
  },
  {
    id: 'dest-burjkhalifa',
    name: 'Burj Khalifa',
    region: 'Middle East',
    country: 'UAE',
    rating: 4.8,
    reviewsCount: 5430,
    price: 69000,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    description: 'The tallest structure in the world. Standing at 828 meters, this architectural marvel dominates the Dubai skyline.',
    tags: ['Luxury', 'Architecture', 'Shopping'],
    coordinates: { x: 55, y: 25 },
    moods: ['Luxury', 'Family Fun'],
    photoSpots: [
      { name: 'Dubai Fountain Walkway', type: 'Night photography', desc: 'Burj Khalifa framed by water fountain light shows.' }
    ],
    history: [
      { era: '2010 AD', event: 'Grand Opening', desc: 'Opened officially as part of a new downtown development project.' }
    ],
    stays: [
      { name: 'Armani Hotel Dubai', type: 'Luxury', desc: 'Located directly inside the Burj Khalifa tower.' }
    ],
    nomadHub: {
      internetSpeed: '110 Mbps',
      coworkingSpace: 'Nook Dubai, AstroLabs',
      costOfLiving: 'High (₹92,000/mo)',
      monthlyRent: '₹40,000 - ₹70,000',
      visaInfo: 'Green Visa option available.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 3200,
      tollEstimates: 250,
      foodStops: ['Sheikh Zayed road cafe'],
      scenicStops: ['Dubai Canal bridge'],
      restAreas: ['Al Khail road service center'],
      evChargers: ['DEWA superchargers'],
      emergencyContacts: { phone: '+971 999', details: 'Dubai Tourist Police unit' },
      alternativeRoute: 'Al Khail road bypass'
    },
    riskAlerts: [
      { level: 'High', category: 'Weather', text: 'Extreme summer heat (June-Sept) makes outdoor walking impossible.' }
    ]
  },
  {
    id: 'dest-iceland',
    name: 'Iceland',
    region: 'Europe',
    country: 'Iceland',
    rating: 4.9,
    reviewsCount: 3120,
    price: 105000,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80',
    description: 'The land of fire and ice. Famous for active volcanoes, glaciers, black sand beaches, hot springs, and majestic waterfalls.',
    tags: ['Nature', 'Adventure', 'Offbeat'],
    coordinates: { x: 38, y: 15 },
    moods: ['Adventurous', 'Nature Escape'],
    photoSpots: [
      { name: 'Kirkjufell Waterfall', type: 'Landscape', desc: 'The pointy Kirkjufell mountain framed by waterfalls under auroras.' }
    ],
    history: [
      { era: '874 AD', event: 'Norse Settlement', desc: 'Norse chieftains settled the volcanic island.' }
    ],
    stays: [
      { name: 'The Retreat at Blue Lagoon', type: 'Luxury', desc: 'Lakeside silica thermal pool resort.' }
    ],
    nomadHub: {
      internetSpeed: '85 Mbps',
      coworkingSpace: 'Reykjavik Coworking Unit',
      costOfLiving: 'High (₹110,000/mo)',
      monthlyRent: '₹50,000 - ₹85,000',
      visaInfo: 'Long-term remote worker visa available.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 7200,
      tollEstimates: 180,
      foodStops: ['Reykjavik organic cafe'],
      scenicStops: ['Seljalandsfoss waterfall route'],
      restAreas: ['Vik rest station'],
      evChargers: ['ON Power charging network'],
      emergencyContacts: { phone: '+354 112', details: 'Icelandic Search and Rescue team' },
      alternativeRoute: 'Ring Road NH 1 route'
    },
    riskAlerts: [
      { level: 'Moderate', category: 'Weather', text: 'Wind gusts can blow car doors open. Check weather alerts.' }
    ]
  },
  {
    id: 'dest-maldives',
    name: 'Maldives',
    region: 'South Asia',
    country: 'Maldives',
    rating: 4.9,
    reviewsCount: 3450,
    price: 120000,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    description: 'A tropical nation in the Indian Ocean composed of 26 ring-shaped atolls. Renowned for its blue lagoons, reefs, beaches, and overwater bungalows.',
    tags: ['Beach', 'Relaxation', 'Romantic', 'Luxury'],
    coordinates: { x: 63, y: 39 },
    moods: ['Romantic', 'Relaxed', 'Luxury'],
    photoSpots: [
      { name: 'Overwater Villa deck', type: 'Landscape', desc: 'Blue lagoon waters stretching below an infinity pool deck.' }
    ],
    history: [
      { era: '5th Century BC', event: 'Buddhist Period', desc: 'First settlers came from Sri Lanka and Southern India.' }
    ],
    stays: [
      { name: 'Soneva Jani', type: 'Luxury', desc: 'Overwater luxury villas featuring retractable roofs for stargazing.' }
    ],
    nomadHub: {
      internetSpeed: '50 Mbps',
      coworkingSpace: 'Male City Tech Center',
      costOfLiving: 'High (₹98,000/mo)',
      monthlyRent: '₹40,000 - ₹80,000',
      visaInfo: 'Tourist Visa on Arrival valid up to 30 days.'
    },
    roadTripDefaults: {
      fuelCostEstimate: 0,
      tollEstimates: 0,
      foodStops: ['Male Local Diner'],
      scenicStops: ['Sandbank walks'],
      restAreas: ['Speedboat nodes'],
      evChargers: ['Eco Solar chargers'],
      emergencyContacts: { phone: '+960 119', details: 'Maldives Coast Guard Command' },
      alternativeRoute: 'Transit via speedboats or seaplanes only'
    },
    riskAlerts: [
      { level: 'Low', category: 'Transit', text: 'Seaplane baggage weight is strictly capped at 20kg.' }
    ]
  },
];

