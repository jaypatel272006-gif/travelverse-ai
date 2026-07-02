// TravelVerse AI - Curated Travel Database (Exclusively Travel India Edition)

export const mockDestinations = [
  {
    id: 'dest-goa',
    name: 'Goa',
    region: 'South India',
    country: 'India',
    rating: 4.8,
    reviewsCount: 2200,
    price: 36000,
    image: 'https://exploreworldtrip.com/wp-content/uploads/2026/03/4-Days-Goa-Travel-Itinerary-Beaches-Forts-and-Cafes-1024x683.png',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
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
    image: 'https://static.toiimg.com/photo/58490365/.jpg',
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
    image: 'https://felixferiatravel.com/images/1752667250Blog_image_(1).jpg',
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
    image: 'https://images.pexels.com/photos/38041592/pexels-photo-38041592.jpeg',
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
    image: 'https://images.pexels.com/photos/31393861/pexels-photo-31393861.jpeg',
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
    image: 'https://images.pexels.com/photos/9229738/pexels-photo-9229738.jpeg',
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
    image: 'https://media.istockphoto.com/id/2197451137/photo/architectural-beauty-of-city-palace-in-udaipur-during-twilight.jpg?s=612x612&w=0&k=20&c=FcwhXgHTvAjOETUcXLKGyzsaBVedHnvagu0OLlB103o=',
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
    image: 'https://images.pexels.com/photos/33928936/pexels-photo-33928936.jpeg',
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
    image: 'https://images.pexels.com/photos/14024478/pexels-photo-14024478.jpeg',
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
    image: 'https://images.pexels.com/photos/31403072/pexels-photo-31403072.jpeg',
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
    image: 'https://images.pexels.com/photos/5324319/pexels-photo-5324319.jpeg',
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
    image: 'https://travloger.in/wp-content/uploads/2024/02/murudeshwar-1-scaled.jpg',
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
    image: 'https://images.pexels.com/photos/27757421/pexels-photo-27757421.jpeg',
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
    image: 'https://namandarshan.com/images/ayodhya-yatra-banner.jpg',
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
    image: 'https://images.unsplash.com/photo-1667849357658-16bfafe50dc6?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.pexels.com/photos/18275890/pexels-photo-18275890.jpeg',
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
    image: 'https://www.tripsavvy.com/thmb/vzVTgJuv8L5RU3iXFaaZ0KYoh5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg',
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
    image: 'https://www.aciafrica.org/images/stpetersbasilica072424.jpg',
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
    image: 'https://images.unsplash.com/photo-1621415410141-bb05ec7f7fcd?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://i.pinimg.com/736x/92/be/81/92be8100612be9b87b09c427feb18ebb.jpg',
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
    image: 'https://travelvaidya.com/blog/wp-content/uploads/2025/07/ChatGPT-Image-Jul-8-2025-05_08_04-PM.png',
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
    image: 'https://i.pinimg.com/736x/4c/10/38/4c10382ccb7ae0e5b04d5479f73b503b.jpg',
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
    image: 'https://i.pinimg.com/736x/b9/5b/cc/b95bccf6c9b29f2688c15fda24c453a0.jpg',
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
    image: 'https://images.unsplash.com/photo-1620894084661-bc4ccde6042b?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://i.pinimg.com/736x/46/30/bb/4630bbd32c953af7a5def66eefa34768.jpg',
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
    image: 'https://i.natgeofe.com/n/b9e9b8d1-fa08-4b90-96bb-310cace03847/meenakshi-amman-temple-india.jpg',
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
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/konark-temple-puri-odisha-2-attr-hero?qlt=82&ts=1726674676369',
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
    image: 'https://i.pinimg.com/736x/df/62/86/df6286044ff1031f352a9f95ee9ce2e6.jpg',
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
    image: 'https://saishishirtours.in/wp-content/uploads/2025/07/Sai-Baba-Samadhi-Mandir.jpg',
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
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/4c/06/4f/caption.jpg?w=900&h=500&s=1',
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
    image: 'https://vwitours.com/wp-content/uploads/2023/04/dilwara-jain-temple-1200x900.jpg',
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
    image: 'https://i.pinimg.com/736x/ff/1d/fc/ff1dfc6b19e0a2ab4b9a56858cb18206.jpg',
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
    image: 'https://i.pinimg.com/736x/01/8b/52/018b529b2762854258fc8e6cd1d08256.jpg',
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
    image: 'https://i.pinimg.com/736x/c5/99/6a/c5996a21e90f2e37e3f627aaa1ea1ab8.jpg',
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
    image: 'https://images.pexels.com/photos/4343535/pexels-photo-4343535.jpeg',
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
    image: 'https://images.pexels.com/photos/32536434/pexels-photo-32536434.jpeg',
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
    image: 'https://images.pexels.com/photos/33134859/pexels-photo-33134859.jpeg',
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
    image: 'https://images.pexels.com/photos/37349128/pexels-photo-37349128.jpeg',
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
    image: 'https://images.pexels.com/photos/30875613/pexels-photo-30875613.jpeg',
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
    image: 'https://images.pexels.com/photos/30104968/pexels-photo-30104968.jpeg',
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
    image: 'https://images.pexels.com/photos/15544401/pexels-photo-15544401.jpeg',
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
    image: 'https://images.pexels.com/photos/29449926/pexels-photo-29449926.jpeg',
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
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
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

export const mockFlights = [
  {
    id: 'fl-1',
    airline: 'IndiGo Airlines',
    flightNumber: '6E-2051',
    from: 'DEL',
    to: 'GOI',
    departureTime: '08:15 AM',
    arrivalTime: '10:45 AM',
    duration: '2h 30m',
    stops: 0,
    price: 7600,
    class: 'Economy',
  },
  {
    id: 'fl-2',
    airline: 'Air India',
    flightNumber: 'AI-821',
    from: 'BOM',
    to: 'SXR',
    departureTime: '09:40 AM',
    arrivalTime: '01:10 PM',
    duration: '3h 30m',
    stops: 1,
    via: 'DEL',
    price: 12800,
    class: 'Economy',
  },
  {
    id: 'fl-3',
    airline: 'Vistara',
    flightNumber: 'UK-943',
    from: 'BLR',
    to: 'COK',
    departureTime: '02:30 PM',
    arrivalTime: '03:45 PM',
    duration: '1h 15m',
    stops: 0,
    price: 6400,
    class: 'Economy',
  },
  {
    id: 'fl-4',
    airline: 'Akasa Air',
    flightNumber: 'QP-1102',
    from: 'DEL',
    to: 'BOM',
    departureTime: '11:00 AM',
    arrivalTime: '01:15 PM',
    duration: '2h 15m',
    stops: 0,
    price: 8800,
    class: 'Economy',
  },
  {
    id: 'fl-5',
    airline: 'SpiceJet',
    flightNumber: 'SG-234',
    from: 'DEL',
    to: 'IXL',
    departureTime: '06:15 AM',
    arrivalTime: '07:45 AM',
    duration: '1h 30m',
    stops: 0,
    price: 14600,
    class: 'Economy',
  }
];

export const mockHotels = [
  {
    id: 'ht-1',
    name: 'Taj Exotica Resort & Spa',
    destination: 'Goa',
    rating: 4.9,
    price: 24000,
    image: 'https://images.pexels.com/photos/34636887/pexels-photo-34636887.jpeg',
    tags: ['Luxury', 'Beach', 'Spa'],
    description: 'Mediterranean-style villas spread over 56 acres of manicured gardens along the Benaulim beach.'
  },
  {
    id: 'ht-2',
    name: 'Rambagh Palace',
    destination: 'Jaipur',
    rating: 5.0,
    price: 48000,
    image: 'https://accidentallywesanderson.com/wp-content/uploads/2026/03/Rambagh-Palace_Jaipur_009-1-scaled.jpg',
    tags: ['Luxury', 'Heritage', 'Palace'],
    description: 'A masterpiece of royal heritage, formerly the residence of the Maharaja of Jaipur.'
  },
  {
    id: 'ht-3',
    name: 'Kumarakom Lake Resort',
    destination: 'Kerala',
    rating: 4.9,
    price: 18000,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80',
    tags: ['Nature', 'Lake', 'Wellness'],
    description: 'Heritage villas constructed by assembling old ancestral homesteads directly on the banks of Vembanad Lake.'
  }
];

export const mockPackages = [
  {
    id: 'tour-1',
    name: 'Golden Triangle & Royal Rajasthan Tour',
    location: 'Delhi, Agra, Jaipur - India',
    duration: '6 Days / 5 Nights',
    rating: 4.9,
    reviewsCount: 680,
    price: 55920,
    originalPrice: 71920,
    image: 'https://www.indiatoursntravels.in/wp-content/uploads/2025/01/Golden-Triangle-357x338-2.jpg',
    description: 'Tour the royal cities of India. Marvel at the Taj Mahal at sunrise, climb Amber Fort in the Pink City of Jaipur, and explore Old Delhi bazaars.',
    activities: ['Agra Taj Mahal Sunrise Guided Tour', 'Jaipur Palace passes', 'Old Delhi Rickshaw Ride', 'Traditional Rajasthani dinner'],
    itinerary: [
      { day: 1, title: 'Arrive in Delhi', details: 'Transfer to hotel. Rickshaw ride through Chandni Chowk and spice markets.' },
      { day: 2, title: 'Agra Fort & Sunset Taj Mahal', details: 'Drive to Agra. Guided tour of the red sandstone Agra Fort and Taj Mahal under sunset.' },
      { day: 3, title: 'Agra Sunrise & Drive to Pink City', details: 'View Taj Mahal at sunrise, then drive to Jaipur, visiting Fatehpur Sikri ruins en route.' },
      { day: 4, title: 'Jaipur Palaces & Forts', details: 'Visit Hawa Mahal, explore City Palace, and climb the majestic hilltop Amber Fort.' }
    ]
  },
  {
    id: 'tour-2',
    name: 'Goa Beaches, Spice Farms & Water Sports Adventure',
    location: 'Goa - India',
    duration: '4 Days / 3 Nights',
    rating: 4.7,
    reviewsCount: 380,
    price: 39920,
    originalPrice: 47920,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4RowRXhpZgAASUkqAAgAAAACADEBAgAHAAAAJgAAAGmHBAABAAAALgAAAIYAAABQaWNhc2EAAAQAAJAHAAQAAAAwMjIwAqAEAAEAAABgBQAAA6AEAAEAAAAAAwAAIKQCACEAAABkAAAAAAAAAGFhOGIwMmMwZmVkYjRkMGUwMDAwMDAwMDAwMDAwMDAwAAAGAAMBAwABAAAABgAAABoBBQABAAAA1AAAABsBBQABAAAA3AAAACgBAwABAAAAAgAAAAECBAABAAAA5AAAAAICBAABAAAARBkAAAAAAABIAAAAAQAAAEgAAAABAAAA/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABgAKADASIAAhEBAxEB/8QAHAAAAgMAAwEAAAAAAAAAAAAABQYDBAcBAggA/8QAPxAAAQQBAwIEBAMFBgQHAAAAAQIDBBEFABIhBjETIkFhBxRRcTKBkQgjQqGxFRckUmLBMzRy4RYlc6LR8PH/xAAcAQACAwEBAQEAAAAAAAAAAAAFBgMEBwIBCAD/xAAxEQABAwIEBAUDBAMBAAAAAAABAgMRAAQFEiExBhNBUSJhgaHwcZHRFDJSwbHh8SP/2gAMAwEAAhEDEQA/AFzN5xLIQxFbBcWbS4FApKOLPsR9NE2H4y3BGbkpfdQgFVD9dLMZ/JZHOMANsRlqJKGC3aSlKRYBN+v5d9NGJiiN/h1N8hO9K/DCQQT249RpswLGru4xNaXD4VAGNwJ+xE9DHYdjWX45g9ta4ahaP3CROxMfcGOvqe4qTw/bXIa1b8PXbw61oOes/wCbVUNetakS17anCNSJbJ9NcldcFyoUN+2i3TuHcy2Zg49CL+ZkIbI/0k+b/wBtnXSJDKjatOfQCTAyc3LJSCcbjJMlNi/ME+U/10JxS+/T2y1joDRjBcON5dtoXsSPt1rP+och/a/xTzXU5UXYi3lxIgsbFNN/utiv9B20a5tQOiomZHqLLT8G/PU1Dgy2lx1lACGPEQkhZ9RaiQCKom7B7LHwcmxpLzOFyEYTWcgmQQpSbU2tSbBs9uSvt99Fuo0TWpwTGxShHVCDj5sJ+aUlAveRypAA4H1FkXr50eu1lxROkkR5jWtxU34J3k0bl5eHG6fyeKW5BnS46FOvuPE7294oFH1JPBPt9CNL/wAOcyqJ01JU+/EcbAc+YhANhUtBICSlZ5CklRqr43VXOliVCnmXNyypQS2+wdiPCKAWylQRQr8IAT+ujfS3T+AzeOjs5CC1KfRDUpClLKC1VkKtNHbuFcG/01GlDaUBLegH/T8NSNAptlDz/FHek8lDPV61yOnWX0xGn35UhbYVvKj5SeLXSq2jvfbWaSHGY86QZCSf/NTIYUCLpJO4X6q5FDnue2m57BLcycNTGeYxKn3TIcS44na60g1vAUm+R2sgDvzpTdCWV5GVAhHJOB8u+GUeI00orUkFZqlgpr1uyfQHUrUIKiO/rU6Rmzieopq+AGHh5LrmFl3UEqCl5GWlaEeRtgBSdlDgBe0HnnvWtOcW9JUuVIVuffWp1w/6lGz/AF0q/s84ZnC9M9aZBiQ29JWGoSy0f3aC44SUoFWnyqF/bTotuhQHbjWi8LNgMqd/kaXsS0CUD60Ldb1XdjO7Cvw17P8ANtNfrqTKz1xIMiTGjSHlN/gcbQqkq9iO59hpSyvxQyeY6GyUOSgfPJUiM4A3W7eeFV37Ag++rN7xJyVtptkhwFaUqMkZQTGbaCB1g9uhmpU8OP8ALK3RBgkAQdf4kAyknpI99KOPM36apPMe2lLEZuXiXY8aROjfK2Nzbh3FKfU7xwD7cjT40WpLCH2VpcbWkKSpPIUD66ZbLEE3IJSCPqIkdDS9iFk3buctLqXCN8pJAPUSQJjuJB6GlXF4eFPycfKwE1FitlsIA8yu/avrzoRkcmuT1NHixQ5TLaitBWElavcD0TYJonVvC9TQMIhtpcjwUHypacXSUAHaaTVqIIFk/rrr0vEhScm/mpUlmMWUeQeIFKSATySD3NpJuuD9K0hDGmblDSmDleJ1O20ekabaiiJwpSFLbuPE2Bp17+s0xR4RdjtupcSvckG0jg/bXIgOk9ho3iHoGQhoeguNuNkBXlAHfm6H11eTFB7J1pjGJcxtKgQZG9Z2/gSQ4RBFLjeMURZUB+WrTONAPY6PoiC/w6sNRPbXq70nrXTeDIB2oQxE29hox4jmK6C6qyzOwveCxEaQofiUtwcfajqy1FT6jQL4qZFjG9NYXp5byY8jJyHMmVkcJQ0QltKh6hRJHYjnnSxxLf5LBfnTdw5h2S6CzsB/r+6BYjpaPj8jJzOIj5D5nDyI1wvBKUr8ibO4juVOKA9u9XqvkOuHxlMji50dxCoEpxccEejqaKK5CyN23afrd6Zegeqca5iMnjm1vQy8vw1FptS1lwAfvCq6RuKaFA8nv9V7LQobuTky5aw0qVJSpaXkA7HNiyBYPNUPp2GsYEBAymSRB9J1p8UrmDw6UqY+KPElYvHSIzcByC86YqkArcUkgghZ5ABs0OPbVRbeccyONiY11tpuVGLKo4cQfKhW51Z5sDZ3NcgeurvTsaK91gjxXgWVsPsjyAlBDZUVD38tfn6d9CosgKyEB9GOVILC3kJacpKVAj8VmxwO3PGp+ZASehr0ACzM9x/Vd/iDLnSFmRi322HIyQ0+y0lKv3G4kFIrclJAHN/f00pTc/kky0uQGW28dJcMhRRQdWSvnZZtROwAjt/PR3qOPJXKLrHgolIfVKUhx4NpStCQS3wAs0AB2As9/XVGP1BGbwKZMfGvQpEFKpDe1JcbbcPl2J3WTusbRfKgearVxlJITABNQF1QScogzPvW/wDwiYT/AHSLyYjojOZrOKecaKgpXkSUkkigeUj04B0anbGWHXXSUtoQVKI7gAcnX3SOHfwfRPTHTspW+Tj8cl6WoiiZD3nVfvzq5PipkRnWFEhLiFIJHcAir/nrR8LQWrUJ60IvsxXpuBWbsZJHVQTCS6G4TACHUKNJbQASCB2KibHPtoPmslgsKtuLiGIjTTgXv8RxPnWmtpc3HsefoPpqr07icxjV5vHx8e9NdMjY74iCjakJG2uRYu6UDRr8tUMv0F886y+Xskks0l5JQFUSPtxz99LF/iDVpizbTmZNuiABlV4jpmKoBzaTp0FNWD4bbtYS666Qq5cSYOhgmYjWU66ydz7U5/U2FzzrcJ+HHMhSSUKjtJStKh/CVJFK/K703fCZ1+R0sWH21pMSS4wkkd0g2P0utU+nPhdHipcIYdbU4NyZUhSVrTfolIrb96vT709g2sNim4Lay4UkqWsiipR5Jr0+2i/Da30vOlOfkH9ueR13AOoBG+2vSqXFL2H3TTSmkgPADNlAjbXUaaHbr3rzw/IdUpkyYcZqSy+txpK217HkmyN1i7FBRSKHbm9Wf7TbgdPsQJMMPyNwICmkW+kE2oq5JAC/5fbTXjIXVz891jMFp9uM/UiUndITtO7zI3JUFcUN3vq1K6YYY8SS9BwOQYlLSlh2MrylSjyFlG3aeBzzdVfppS/QNKSnKrU6gd/oZ8/+Vact7psZlpBTJBIJ021IIGnrVbFZt/GsxlsuPssKdATGBFGhuo0BzVca0zGdQ4yUYbRdDciSVpDXfapAtQJ+mkL/AMLvNwHWG4ciJKYSHWvDdQ7uo3wkhJsWOSb59a0KRjMnEHzjofTL3+Dyw4laBfcCu9FPbVnC8TvcNBTGZPadu8e8+dD7/CG7ghQEHuOvzSK3FnYpIUkhQIsEcg6tNto23uT9tYQ1J6ogOpVHkTFqbbH7pCyFDn/IeSKFasRurusCQgTdxVwXl+GgJ7cFKqIP3H9dNLHESXkyUEUEcwRxo7TW6q8JMR0/x7aAI0h/FnNuY/4lZCBJjsycdDhR47Ud8FSXdqRuA4IBJUKsc1oP8PuouppvW+Axs9svRp2QDUkqH40hVq4sgAVVgAV/IT19nY+S6r6lyrb7Sy1kFobeQreXwlRQWUJ77rQABXv250B4ou13NuhLQOp+3w1csmVMoMpg0cMpcWNGkt4ZrGuTGVBALTakld8qX9PLvsEWeKTYOrGRcbyWQlQlyo7zqEJ3xyoUpRBUkA7iqzZqqPcVpXxuXnOv45GPx7b7MhIcLCwUuMqDezzpukndfcjn76+mHF5SKiW+67hJ0MCg6QlW/tsCQkWLqqo+bk8aQ7ht0qynfv8APnaatmcog/NaY5HT8cYqVkoIbkTJTa3G2Ug2igAoAkbrNgX3J9a0jY+E283IGTLr5jvoAkIUkiOgKTuCD2Uq7SEggglRNUdG4fULkLHy5Eh9a/DIdIaKiQki+FkbgL2mqJrg3ydL3RuSgzcxlpcl1LsV9SnXCpNeIontXBNg80OAPbXrRd5JKhqIGnbTvUy3yLXKdz+aVfiDknJsyFjzj5nyqVBYWmYn/iOuEjzBJA/CLrnvydF/h1io+eznTDDqpaWJuZRHaU1KHiFoqG8OEeYi0Ju7FV6HUvxVGP8Al2HsdjYSypxoCGtpKdzSQacTVHabP4ePLd/Vq/ZviOTPiRjZ+VxQaREEiQ2tnaGk+GzaLCa4ST2+p799MdrC+WAI171EJIBHXet/lPCRlMhJJNuSV1fcAcAfy1AutZ231s+y0XUR4iy8pSyrcbXZJBP5HXRfX06/+RYI+tnWmtWjoSBS+9i1qFGT7U/uBJ5A1X3JVe0g/X20kP8AXcgA7GGCR6EKB1WHXMlB2iHFSn6AqH37jU6bV09KrLxa0BjNT8uhqFZGkNfXUvxP+TYI/wDVr/fQbO9UZnI0lhxMRqqUltXJ+5B12bZ4CQJ9RUYxazJ1VHofxWoNdBZeBlJ7+JyECJFmAJXGTHAbA90lJB7D6e1an/u8iswmGHMq+220d2xtFIK+9kdlc0aUCNN6p7riyEJShH+budQlFAFa1rI5BUqzrIXLxTm3+AK1dq35fr5k/wCaEtdP45tspkl2W3wVCQsFJIFbqrg19DqDISocl/5NiDEkAUVLcSHBY7CubP37aIznghpVo30Ow9dLjTKmZDimmfDbVR2DsL76/WiM69dq7e8KfOqclLbLigzBYaSDwFNhVV9x/LQScjMuvuKZyLDTav4Pl+SPchQv9NOK45fQpxVE+gHB0PdijcrbX27HThZP2yQE5APSkfFrK8USoOGPrQfpcq6aendVZGQ8/HweNkTVoDitrjhTsQkJJoKUVce41leA6i6blQnH4sFAcfaIdWqAmysAqKArbRO/uQRZPNgXrS/itJjYj4PuKfLjRzOfjQxQsKS2FOBJ4Np3o5++spysmDJjojZpmOSmQU7QCUgo5B3Ctt+na+xOgHEryXnkoAMAdPmtXMDsFItlIzSv90HrqOp026UxR85IMWVFalS1IccUhkuupVIbX+IcJG2tnPv27Dhd6FzsRzJT5U2Q0uYEgOksoKdxNEgtX5qAFnkEiwNUMUyvI4WRHwamUPOXQQ+54hKCeATVEgAeUdzoR0/0xncZOWrwRHaILrqStyjQ7KHZV2BzX5aAhLag6CYPnvpUrdotQJA86Z+oocfGyZ0WPlX3WXGlrClGwF0VXu/AKJq+aN886AdFzpE3xFT/AJZTjzhXJedJQsoVV7vqkk+nPHtq1Kex0/p6VlClcBIUErQ2fEZS4QL2pJNgkUBfF37aCQ4kyJm3GIMgzkLZQ0tbQ3JCqshJ7Gu1/pepkIlBSeleLbQlkg7j8/PSjecRk0vPpxM6LEW6UPIhpSpBPlVtDBWLO0Cwq7OtC+Estxjpzq/qyUypEw49jDsvKre+89W5RrsQlIv7n31l0uJMkvstCS8y8l394/JlJ2NIAG6rPF8eo7cXrWp8Fnp34NdFYxgKW5lZUvLPrVf708IQo8AnyKRXHoNGcCt0vXiAemtVMRf5Vup0HYGPU/k6UNPhoSEhtYAAAKnAO3/321EtxKU0mzfYhV/00KekBtdrdCFn1NkV/XUBlFIpR2+oUoE3+vOtUCqzRa5ou683ZH8fqCnt+uqzz1ik7B+RB0LVMAITwj3I7/76jVKcItLSBz32nnXYXFQK1or4jhItINdvKQT+VahcWkGtqeD2B0OMtwivDSPuLGo1yTY/BwKuv+2uw7XBbmvWjagE0fKqrodtcOOXZF376hcdUikn8Xr/APJ1DvWSSVC/trAs0CBX0kBrUM1a91CxfrqubCar89TvEqHIB1VJUDR5+mr9hcJQSDvUdwyVgV3bNKCkqIVfBvtr54oPmU2Cu+VA819v/wA1ClRSfrriSsojuKAshJI59fT+eiS3p2qsGAdFUg/tFKee6K6RxrMlUctsSsi42Gg4XSrytpANDdyv179r1heJybmReYnstSoDCm/OX0FSHJHN7CBSrB4BNjXof4y4jpfLZOLjs8458tiIbMYbZimh4lFaidp5rdXP01n3S+PxkPHZiLmczEcx/wAsVRGFOITuKP8AhpTaQSqq/iP211esuK8QTOwoO3bJWtRKo7filSRgpuKRKybTUxuK8sNqPy6x5xe42B5TRBrzX+RAZnXIUzBtqm5UpUxSGyJYRvI4obqB9eBXbVKHksHBxE3ExloclSglxl+WOGFDnlSU3XtdH6aJPxcW90xizIDeRltrW2/8qhxSW0gApUV9h39TzoeqxczAK+/lFFrZbbKVRr0iKDS+n0wMrEbj/LSn1JU8gLktrhlHI3Xwmu/HIHHftrrNx3zOKhxBGg4+Q63uW6VKLbzY/E2lIIJ7gUR/tovJyf8AaWYxrmULECLAR4JbkxSVuM835lpUCKJodh9ONR1HlOY+B05m3YyWJDjrUdpVk2vg0nnsPp9ddCze7zFUH7Rp0yTBJ00oNn4eO6dxjSl5CEqTNQH2ojja3keElOxKju7kn0sJ4H5aP+0DMbZz+BwACA3icEw2ptIAbC19wPySjTEvp/pvIuxoiocHIvKfbYS6t5SloU4pO/busjm+L9DrLfjPn4+a+J+emxd7jDb4iMbRxtZSG7T7EpJ/PTFwwwpDhWsyYpU4jQu3teWo6qP+/wAUvLmrSopCUMoFeWhz+v8A319H+ZkOBuJHdfUocBLe4+5AAvUeDgTszmI2Mx7bj0qU6G2mykBSlE+h449+K516T6M6BjdO4t1mCEuy9p+byCk8A/RN9xfZPr3OiPEfEZwhpHKbLjqzCUj3J30H0/NL+CYGrE3TKsqE7n+vrWJR+jMy/wBQDExnIkhQALzyFqDbNi6UopHm9hZ1X6mwTUGSwzh5EnJhdhRbY4UtItW3uVVf5adcvhxEltTct1HMbAU5SEr8SU8CSduxAKgqroBIrRrGYuVJTDLbCsDiUuACKpafmJLZT2WsKtoE0dqbP1I5Gu7bFrrlIcuEhJI2+fBR5fDNmoqQ0SfPt886w35halUgAfUEa+tX4lIWL9dw/wB9ekZfTnTzmHDUjpuE5CQiklpIU4B/1DzbvcEk/XStmPhF0zk2lScTkJEAlNBrd4qEq70QTuv2vV5vG2SYWCKEu8KXQTmaIUPLf561pClr8feocH0vUlhSSa1GhSVgnvWuC4CK1jhVNbQE10cNapyHKUANWl6Hv8Ok67YV467I0rneb4rRLpmIMh1FCiLQVtFfiOJJ42p5/rWhIPI40SwGai9Pt57OzVhuPAxZcU6o0EEq4/U1ozZq5j6Umql3KGFKFYB13Ay83M5bqHH4uO7MkznnVFwKctW815FeU9u1Eaz7DYXNZTPpOSjvQVvBQU7LR/h+LVtSq759EAEj01tsfqPoYw2w71FGS8UbnEfPrJCjZP8AHXc+ml/rSB8P+pYpKM9BbkhApapx2n6X5iRzXbto8VcwQTB70FR/5mRr5VnjWXxMJx6MvGnJRzQcckpKUWTz5bFkV9U9+3JGjzUvL5dliPG/xsVgEMsbvBDYAJDaV1sH0CSmya82qnS+JEiQr5/qvpUxW+EOydr75H03Gtw/6idO0FHQMRRdkZ2NOc2FoLM3aEJ7EJSnalAPsBx3vVRaTOUD1mfntVxLiSMxPtFK+T6jVgMUz4sHwnlrUVMb0yFIdBBShQTSEKNgiyo9/LodD6wlS2pAjw1Y9h9PgyVtxEKC3fxc2NwFgn8Qrjvxq51L0r0XIlLnYHquHj5Nchc5JBH+Um6I9iNdugsViYUlT+ZzHSiwgkhxh4KX6dkFRaSeBztOvHGMqZTrPz5vXTVykmFiKbfhyiZjI7mfTjX0KxsGXkG5jagEOFKCltS0KSFklawQbIO3k3rKVKcICn1ALUNytyvMSebOtv6uyGFgfBbqLKYSS4+MxNaxbbxmLeU5Sg46bJNdgPtxrBPG83az76YcGb5LBJ3JpA4tf59ylI2SKPdOdR5DpjMx81iFoRKine3adySSCCCPXgnTHnv2h/iVkIiozS8bEQU1uYhkKHuLUa/Q6zwlSlfir78DXZS0JZpNH7gWPt6/01auUFwhQ0oHZXblskoSdDRXoH4jZfB9SP5vKeJkpEgeGt9xXnQmwSEj8IFiyAAT9dbp0P8AEHpjqWFGnkt/2goJaeBSlJTaiACkqNDt2Kv9teX3GbJpN39DqFTTrS23GFrZWhaVoKe9g2NUXbIk5gZPnTHZ4wUAIXtXuMNQ2WdzBQ6VEkeGSQeOft666RIAxwdWmQ44p2lkcWL7AADXl7oz4t5zDZ1o5kF5hqIWvEYbHiXvBBUT+Ie38tb70h8TMJ1fOlhD7b4ihCP3TRSpNj8RvhV+3b6aGrYIPi0NMrF6hY8O1f/Z/9sAhAAFAwQQEA8QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAVEBARERMTExAQFhgWEhgQEhMSAQUFBQgHCA8JCQ8VFRIVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRX/wAARCAMABWADASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAQIDBAUGBwAICf/EAFQQAAIBAgQDBQUFBgQEBAMCDwECEQADBBIhMQUGQRMiUWFxBzKBkaEjQlKxwQgUYtHh8DNygpIVQ6LxFiRTsmNzwtIXRIOTNFSjs+IJJZTyZXTD/8QAHAEAAQUBAQEAAAAAAAAAAAAAAQACAwQFBgcI/8QAOhEAAQQBAwMDAwMCBQQCAwEBAQACAxEEEiExBRNBBiJRFGFxMoGRI6EHFUKxwTNS0fAW4SRigpJD/9oADAMBAAIRAxEAPwBuaECjRQxXuRK+crRYrqNFCJEEfA1C+Sk9jCfwim0YmNPGk4o2Dx7W3lxmtNpcgHMAdmABglDrpGkin+PwoGqkH01BEkB1PVWyn0MisePrbGz9iYaSeL8rYf0hxg70R1Ac/ZR0UMUoBTPF4iP78p/KteTIYzkrJZG5/AS9dFRb4/8An/f0pzgcTNRsy2uNKR2O5osp3FcRR6CKtqvaLFcBRoropI2iEV1GiuikjaLFBFHigiilaLFdFGIrhSStEIroowoKSNopFdFGiupI2giuo0UEUkEWK6jRXRSRtBXUYUFJBFoaEChFJFFoa6KGKSFoK4CjAVwFBK0UiuFGFDFK0rRIroo8V0UrQtFArgKPFcooWhaLFDFGAoQKVoWiAUIo0VxFC0rRSK6KOBXAUrQtEAoRRooQKFoWgAoYowrqCbaCK6hihimpIKGKEChApJqLFDFCBQxSStBQgUIFdFBC0EUIoYoYoIWgArooYoYpIWi0ahrooWhaCKJcpWkb1RPdQUkbbKbpZLuqDdmVR6sQP1r2Dy9w9bVpLaCFRQoHkB+Z3PnXmT2S8M7bHWREhCbjf6BIP+7KK9UqK8+9RT65Qz4XrnozE0QukPlDXk39tXmvtL9nCIZWwO1uj/4jiEB/yW5P/wCMr0/zXxtMNYu37hhLSM7HyA2HmToB1JFfPXjPFXv37uJu737jM48MxkAeSjQeQFcjlyU2l12Q6m0m2Fj3Ts2x8Kb8QsE/50+opz2MSsbGR6VPcF5cbEWrty0ZvYcBmt9XtbFk8Sp3HhWV32s/VwswNJOymvZLzoQcruVHd+OXoekivTOM4ot7Dlz3oWCF9O60eR18K8U/ubL9so7uYBgD7refka9TezrjmHv2BdwoZezC/vOGzTlWAC6EmSJEiNx0B3ZmxNkiIVvFcbIWF8yWyt1nEr35H8LDw8juK1vG82q44WcgbM+Y5tYcwp+ZzED+VF9oHJitdV7YPY3isg9DMmD5iSB6jpVu4hyThQMM91sqYUaBO72lwEZM07+JG5JrmsfOBlEBG/lOgge1xpMuMvbW+ysB2jwymdY+u1S1rkJ2KXheUMzC4M0xlT7hYRoeumlRHMXA2uYjOjhBAkdYB6TtpTK5zJFy4uY57DyrBoiU0TKTBBOpIHhXSZbmRtDngnfZW8h4A3XoHhd1mRSwCsQCQDIB8j1qq+1TlS3ibWZ2yG2CQ8kQuhZSJghgI12rPvY5zxedcRicRcbslKprEC4OiiJCwQCRuTVu9q3N9rsRYtsr3L5CAAyFU6sxj+GY860486J8dk/soyWvjtQPFeLhMO7LkCxlQDSYGhHrvXmfmdC5nXNJkb7kz861jmUi9fSwt5bQVN3PdLBTKxsTsKjsfxGxgVFrE4KzeYJIxFttGLHMpM6yNJGm21UMrJbI7TdLJkYXnfYBZZwi89loMgyMpIKkjeB+Yr0/7OOZMLicOFcqt60MkFtcx++s/iqAw3N9vieHK3cD2otlSxt3baPBGUNazlHnbQMB61564u9/CYjIy3LWVjlD6OUB0JiRMeBI3qJ0QY01uDynhva9zTYXpvmbhoEoddNSDofTzqpWRrkMkLOV/AeBpDlzmVr1sAtPXXUkkbjyP0po+La2xZdjowOoivNcyBrJ3NAoKpK4E2pPBMUYN1VhHzn5VdeXnNy47EQWkmPTSqHhsdn0byg/l8K0blTDrkDA6kePhpFZEsT3u0AXurWAbdXhI4ThRuXe2ZRltiF0O43I+FYj7SM17Ev0hgupmAPHzr1HZszbgaHaPExVF4/7LVu3bFtQFW3muYm4PfdmIyqN+k/5R5mu5xekSMjaI99t/wAlX8mDUNlS/Zrwo2mRmQzcA7JvdBIjXzkTqYGo1qJ9r7Z7u0QqkroRlUHNIkEZj5+HrWz8V4GzXEIbL2QVbQXQ5REkg77ACsa9tGHPbbkgldMsyuq9nI6d2f8AtWrj4UuPH/U8laXTYw32hUPDpsNBsxXYQJME/iiNqW47jBEd0SQvUhoHvNpoNd+oqbw/LdsWVum6AXtknaD0C7htwJPxkgVWMddNtspyklgUbeAR3e8BH+kj9anLStcvACjgJltAoJmDqd9wfMjYzVv4Dw8tZLEOTYBBExKOumWCJytroNiJ21jcBgFFu3dzHM93KRlDALIJmNfMyIIOh0rVuDXltLlyKpjdQxB1ZS1xYAEBhM9I8NJhFY3UOr4WfYbgbpftFgVts6QHHvAwc3x1nwM16uuYJHtLbbvKV3XTpv8ArVducTwVvDYY4js4CK1sMvULJIGu+pnbWqpiPaXhSfsmKhsykMNI+6FE6a7RWTNH9MXEkOsVXlYhe2NxspbknhN6zi7ptW5BfIxZjGU7EbgR16+VPParwE2sIzE5yWOcHbvkwFO8CRuTtWgcrcWstYRrbqVyjXr5z1B8ZqG9p3A1v2TctsO0thnSTNtjEQy7HTbwNXY+jMbi3eo8gXwkGDTtwvMPAIs3lLkiLggTAIzDu6eArefbBaW5hVz3AkAMo8W8Pjv8Kyr2lYFnNu+rKxRACMoQTB7xHQqRE9aunNmEu42xbuAIlu0gOp95iNSoHTeJ60/E9jC35UmE4A0sxxGFVJZyYInfw2qse0jHfvM5VOawoaIjuMdflp9asPHUzlEHUgAmdY3qa5Y5UH75YuCSjlUuHcCTEHp0jWqveAlDPJV/J93tWScD4RftMLrW7tu3nVS7IwXMYOXNESRrFO/aNam4rwVBEa9WXevXPtssZ7NuxKDtrqkyNSLQzSB6hR8azXmTkkYjAXHAQ3bJzDeQFEvt4iTJG8bVWzZWx5rY27mt1k9iis85Oh8LrHcM6+I6VI8d4hdv27SXFzC2T2cQDDHYkRIA2mq/wi0RbsWg4UXbqqzdO+cuvpXpfh/JWGS/as27Yhbf2pILSFIKFmJ0LayPCqsWHK9znRnk1Sz3Ype47rAuK8iO5tZDrc1ymIBDRE/2av3B+WWtwMwUsmZhAgm3q0HxcAjfr5VsQ5Gti/nyr2ejBdsrjw6ZTvHj5UbnrlpHtu2ikIfIQqk9NR6jpUx6JnAanEe08fIVnHwwxwcV5u5o53eynZWgFOgzk6gtqs7jQA94+PyyDimODGWZ17xAYAtLZpO4iIOhGsSPW681Y0ZnVdVRSSSdnP4NpK7CSIg+ANZ7xm6AY00hdjGf8cdIMgkiSZ0gVvxknYrojsErwvhj3ASltm1zHLsYOoM9SCNBPSrHw1iEl86lSLbqN2JcN3lOoOXTTqPjTjkbmK0iIpIQppCq0P3t9DBLSOgOh8RV743wIMna5QL9wrlaSFJyjJJLDUMwb4VNIwaDuqrpKNFHDAkkSpKhi5zd0JPcVDpJGUa6Deegw7mPgd03GJtustMspghtQZiPOtNxHJ1q0GOKuvfuBJy2zlQlvAqCT07xiSRoaqHMnC8RhALttrlsOYCT7okgKTOpgLOYfe9RWN08wtce2T+VmuMV0CqeMV2RlTJ7peRqIP3RoRqBtW/+1K+sYNtLgOotn+JVIn0mdfBjWGcS49buswxdmHLKGu2YS4I0MgL2TnxlQf4q2TmfHpiRhuyUBchORlhigtqFaCQW6DuA/GTW6WWKU4YRG4BM+cOHG5h1S0UW47TcC6ZlUklmZumw0GseelI45yylpEe2XL2WVrr6FSGOw6AAxp4GtAu8FvPeUXHzSiyiAKkdBoZMnckbAnwqR5/wlvD4W6hylnUAIBoXYwD/AKelWPpQ2M2sUSmwAsz45zCBYZgCrkZIjQsw1fWdYkiPKsrvLVt52xLutkMEH2c9zL3gO6C2X70L1qtuu1UMSNsbdvJVtgoKd5Xu9oRbY96IQnYiNFJ8fA/DwqYtcAu2rji4GQLkeYnONGGUjQjLrIPyp17MeS+2Zbl05LMkBicpZgJ7pg6DqfgNdt84TwGw9trT3C1u4xcKWJ7G4FyqyuveC3NQ6lRpqapvyYxPo+yexgde6y7HqrqrLoGAZZ0gHpr4VW8LwE3sTZtZsxvXbduAOjMBOngDPwrT/a1w9VyPatJatm2EK2mzKrpIIMDus28HUxPjUf8Asw8F7fiqNuthLl4+sdmn/U4PwraxgCBSMVg0vZ/DMMEREUQFUKANgAIAHoKc1wqO5l4stiy91/dRSfU7ADzYwB5mtgC9grZIAtZF7eeN57yWAdLYzv8A5290f6V1/wBdVPhyVGvimu3Huvq1xix+PQeQGg8gKnMFbrrcKLtsAXMZcut5Kd21oYowFARV9UkU0BoxoDRTUQ0BFHiimigiUBFHiimnIUiEUWKUNFiimopoKMRQRRQRCtBR4oDRTUQii0cigIooIhoDRooCKKaiEUEUcigiihSTNcRRiKCKKaiEUWKUigpwKBCSIoDSkUUiim0iEUWKORXEUU2kkRRSKUigIp1ppCTIopFKxRSKITCEnFBFKRRSKcE0hJkUU0pFBFEJhCTIopFKkUEU5NISUUEUoRQRSKACiAKMBQCguNW04rhxuU4FjzKkfH5jf5VIXB3YdVAYwGT7rxIY+CXABPgdelQr3zAgmQZgQRHXQn6ERVq5WdXDZlUjKSYHQiJ1kAg9J0Neb+rOsSYdPYeCvRPTfTIshha4chVi9a6GqucQ9i6up7G5nj8K3NO0TyDd24One8jV84nhu6GGoiJA8Bp9I+tVXjJDI1piO+Q1qel9JKidIzrKH1HhTurZTeodOizY/wBQo/hVulwOws2TEfwbpPb+Jhcw6CfgNfnFVzF48NdIGqwpDTsWMTHiV0jxmmGM4uezEGCpUnz7pBBB6aFZ9Aaacu2M1x3PuIJiNpPcUTp730GlYXVvUrpjGIz8Wtbp3QxGH6x80pTFAiNuk7mNNiFG/WNKccKt3NJIjp3Y0+c/SmGJxGuhB6hZZvopifVoqb5ftNEtpPTKB+rGun6Xk/UyDTZ/HCw+owfTxm6/flTFqY1o1dXV3rBQpcadyuigihNcaeggrqGKCkkuiuiuNCKVoosV1DXUUkU10UNcKCSLFdFDFdSRQRXChoaSSKK6hoSKSSLFDFCK6KVpWgiuijAUEUrSQCuijAV0UrQRSKGKEChIoWlaCK4UMUaKVoWixQgUMV0ULStFihijLXUrQtABQxXUMULQtABXUMV0UrQXRXCuAoaCCChArooaCSChFDFDFJNtBFCBXChiklaAChAoYrooIWgFCBQxQgUEEEUNDFDQQQAVwoa4UkEFDQ0MULQRRRooQKPlppKIFooprijTxhTDGtVWd1BXsVluAWr/ALMvDZe/ePQLaX495v8A6K3Ws+9gPDOzwNs9bpa4f9Rhf+kLWgTXmHUZe5O533XunRoOziMb9rXn/wDba5ha3hLOHXbEXZuf5LUMB8XKH/TXmXh91AlxSNWyPbMe6Qe8PQqfoK139oTiZxuLxNsCRhxktQQZNrv3D65i49FXwrF7baI3h3T8RXLTzCVxA8KXJJtPMTMKfwmPUf8AapTlLj7YTEW79to170AGUbRwRsdDROHYbtBk6n3fNhsPjtUPl0Kkagkj9RVEbgtcqYJ5V99qXLgw18XVV/3XEQx0gHMJYDp/Ev8ASqxwm4+DxKlGZbbkZXjRrZPUbMB1Feg/ZkE4nwlsPd71y0MgY/cy62mHw084NUHgHKxvWL2AvDLicOGuYfPMsu7KP4Y1HkfKmtnIbRVkwkEOHla/heX3SxDtntMFuApqVYjNPgUnWQNAar/tz406WMOIgPetEhToYIiR5kVHckc6YjD4Q4e4ua5h8uYMO81h9AVM97Lt6VGe1PDuLWFNySpuqyAEk5CZCv5r8qptxou7rjH5Wi2T2/dW7it+cUJZQco0O8Vm9nFYSzxPEfvaO6MrZQskB4EEwQTIkDwJrTuO4W32oLWyzADX8uvSvO/tneMbchSuqg66kwK1pzQAKr5xpoKmH5yJGUStvMQUiQTJhm0ifOtL5dxds4eHQ9pBKuBqSBAAO8T93rWDW+PGyynKHRtXVxILCtB5N4g1wIVzAA5xmBChdZCzoY8vOsp8Xb97RarY7jW6R4dy/aLv2xd7pzHJtHmKkuLcICYW4Y7saTqYA0k+sfGr7zpwtLtvtbUduqjJkTRljUHrNVnmTgV25g1UFQXgHXUA6a+EGTFZmE8yyOleTQvY+EyeEtNLHuXeYntOHUsCp90GJAO3mK1z/jWGv9ndu4cXswyFXksM/RT0YHUHTem9n2S4YYfMWPaC2TnLaT4gfhqu+zbguIFnF3wQbeGC5gQZJ3m34lVhvlW3hZgkJY3hQdt7Unx7hV3CXsjLctWyxNgvvGhykjQ7j+lWTAYwXFDfBx+dWHlO8OK2HbE3lHZAKqBRMR742lo69eu1Z/iLL4a7ldpVjE9DPusR0JG/pWb1vphe3uNCgnjr3DhXhsAbcdVYSjdCI8fEVb/Z1ezNvIUGfCajORnW/ZbDt7yy1s7xPh/e1O+S7T27jqemjDyHWua6XEDkC1NA3S4OHC1fhFtVXtCdBMeu39KUx3ExbGWRmOrH+/lUJY4gbmRFgInebxMHT5msV5o9sZTGlMma2lwqZIk6QSPQ16ViyR48YtaUuQGhby9hmudo0QFER51intEvGWiNQ8GdcvaasdhPQT4+FT3LvtHDgGdG0AmdZ0ms95nxga48zoGGpMEyToN9I00ga9daz+odUincGRnjlX+kSB5JVT4kjgkzOeQDOiI22xgHQ92OvnVSxFy2oIyljm2YtMkaCB4eJjWrtxJltiWgfZnLJliSTDaT3zuNYA16AChcYLEy25YkQfxDckSATEzA0ioxuFo5WwVl9nXFFW4odygOh021UQegXQid960vHcxBWxBU/wCIqKG7wXtGgE6yMjZSfMRWL8EXvEEBXYEKwGaTAADSPdYmc3j9b9wjEA2XUnKVUpcBWGYgswcAwCRETAO+lSOeQxNhGykrN3t7dhcVdbKFAXqAsRlnTXrP8qpXFuzts6JLKGhWNbj/AOGLd/C2QIJ7JQpAghig6CsX4zwN7T3LTqcw6wdx1B8K43EzWyyvBO4PC5jMY7WSVpP7N/Fx272XeA6d0eLDcDwMflWncBxNu3imW4WYAFANcgJOkjYyOvlXmTlztLbrcSTcDBkygkyD869OcC41g8VZDn7O+sF0ki6Li+USwnb9K7DDnAj3PCs4c40aSo32jcoXGYOqLlNwNlBOqjcPptv5VX8dgCENoXAAq5iZ7rKTOVR1jzrU25vQ2zIiO6ZO06eunhWJe1KLLqEE2uhHgSTvO1VX5EOQbx3WfKmhFyW0qu2VLWjIlrbGNNYNXzkWypw14ZtoYfiDKAfgaqv72VtlhlGY7nwPj86snKl9Oyv69n3VPdEh9NYnx1qOZoa/V5orUd+u/sjcCvO2JVrxckq5slzpB6AePj41beD8JVz2bXSguKZRNCxmI69Cd6pHtE5ktHDi5auQ9llNqdD/ABA1H43nBwmHMqrM4JcdJGwP0iuY6VjzT5gyX8CwQVmh5Lis99pnBmw982G3tOCuX7yESp9Y38DNelf2esQWssWGpCEt1Oh96etYPztxQ/v9q7cltVQ5hoy6ifQT863rkLiy2FKkLlBCrlMaE6eo1roHZcWNmx6tm2d1A2tdrTjeA1JAEVnfOvF7l+2wtgLayOxfOO9llYAGpBPTSasPOhAtBi5UKQ2gnOfwec+FZjj7V6932hMMkMiQVJEnQAeO5LCPAb1rdTzZpJRDGDpq7CmLzqACyrnK2VVe6EZyVUuWHvam6NAFEdye9oNjFZhzNY7qrCjvKSFlgZHvNpqzGdJ2jetV9pnGrYlLRNxg3euksV8UVQR3gCfuisnxGOzajL1B1K6wSWj8jM/Ki3YrbP6VBi/AI0HeA8O8J7xEHStB5G5kuXLliy3eRWWNCVYjMJuECdABHkKp5tggaCC2wMk6t3nABIjYx0jxq0cpYVe2tNalA7gFD3VS4WyZQZzNbYMBJBgA1JN7onAeQqcrbarvzrxHMgCkq4uIo0I7QqScxiTlEgRECorjl8m7eHZW7KLaNvXOxDKMzX0B6ue6G03+Wjc7cBu4dEYYlO2yNbSzashrt0k7KzEsR4uRoB6Vl/PF42LIJug37jKHYqxNwqZcHNp3NFAAA+dYXToDH7HBZkcLWDUeVTeP8FVLYzN9pdUXmYAZR+FRAnrJ8TNXj2nJbOHwxuNcBTKEuWE74PZrlCmNQPvCfD45riuO9ouVhoJ9TP8ALw2rexy8l9LCXWFu1bVXIVyNFQaaAkMxJmNwRW+yUt3I4T8d7i1yqnCOa0RpuOruwC9vBR0WNP3i2ASD43UkfiGxqme2rm4u64dUdFBV2dzrcMQCrdbepIYEgn0qwe0vl4gwOzVQQ6Q0MVPQEASRuY9OlV3F8vv2QJU3bW+TN9rbB62WK6HSShlW00PS63JMjKVMdtzt9iqff92fAH6nSkEwRI0EgCWMaCfHzNTX/AHdrdu331usFtsO7JGrK0+46/eU7dJEE+ivZz7K8Nf4aIvZLzuzOWIVVKEqLbLoxSACCddSR4VQOpuzRupNJ4WIWOb8iBFzKMvZhQDCjq0ExLHXbepPgHE7qIHysULEK6lp3+9G2o2JBPpVx9mXs4TEpirdyJF8It1TJQpJbK2xUj1nTaoH2rqMLiUwuFuFbdhELmfeu6sWaDlZgCBppM1lx5MLpXRge4cqItIFqXGHd7b2srE3Azy7R7uqsR0MyusbitO/Yq5fy28ViSNXdbK+lsZ2jyJcD/TWL8g3b128zqSzZWBzNAJfRddBJJ0EjaelewvYvwNsPgbFt/fINx+veuMX36wCB8K2+jg2bUuOLKuVY/8AtFcYMWsODo03H8YUwg9Ccx9VHhWvmvM3P/E+3xl591VuzT/Knd08iczfGuuwItcv4SzpNMdfKa8KsVPWEplw+1UnbFdUwbLm3lcaLRzRSKlUaLFAaNQUUEU0Wj0U0bTUU0EUciixRSRIoDRq40bQRIoDR6LFJNRKA0eKKacgiGgNHiixSTaRCKCjGgNG0KRSKA0agiimohoCKORQRTrQIRaKRRzQUbTaRAKCKOaLFOQpEIosUpFARRtNIScUEUYiuiim0iRRSKUIopFEFAhJkUFKGimnAphCTIosUqRRSKcEwhJkUUilIoCKdaaQk6LFKRQZaRKbShoptxC5Ap1TLimGzCBpPXwrXlvSaXEw1rGpZ/x/ijM2RQSJgkETqPECQo6mrZyPzeuGt5DMyoLRoSRBEkKMoidjpPnLr/g1tR7o9SB9dKrPGWVZE24OkZ3UfQEVwPWvTv1DXOmdyu96P1trCGQt4Vu5U4znS9bEkrLBjtPdGkdCTAPgdYqsc641YddntkEqdCIgajcjXcbdfGoPgnFgt9JcssrKq0qqZtVYlVMEwfSetTXNmF7VTcErcA6CTlJY5XESTGoncelcHFmv6eH4p3Yf7Lr5MBmWW5A2cFWMJxT7ModWBKyfwk5t+sETPnU3aATDquxuMXJP4U7if9Wc1TlslYGhDDRhsSOnkw6jerLxppui2NeyVLcAE6qve2GhzljPrWE9lyABaDm6Qpfgj5jlUTA3i4oAnUzMa1fuFcLLARtG4G3896qPDEZcoAA8TnZyNh3xBCwD1H61ofA+ZURAAhJXQkDfx6iZPlXZ4fqNnSowzkrnJ+g/5jJqfs0JhjeEMq5jEfD+5qOq4Yjj1q6Dm7hOgLKQJPnJg1VuNWxb1O2kbak7R4zXfdD9TQZrNzR+Fx3XfTr8NwMYtqQoab2MTOvTx6fDxjx2pa20108c7X8Fcw+NzeQhFDXUNTKO0WuoYrqSKCgIo0V1JJFrqNFBFJJBXUMV0UkkEV0UJoQKSVouWhAowFdFC0rRYroowFDStK0SK6KNFDQtC0EV0UMV1K0rQRXCjRXRStC0EV1GNdQStAorjXUIpIWgoRXCuighaCK4UauikkgiuAowFcKSFoIoaGKGKCFotCKGKGKSVoAK4UIropIWuFcKGKGKCFoBQ0NdSQtdFdQxQgUELQUNdFDQKCChFCKGKFpIFFGyUKilUWoy5SNbaKtujFaMq0tlqNzlZZHaZuKjsQkkKN2IA9SYFSWIqe9j/Ae3xqE+5Z+1b1B7g/3QY8FNZnUMgRxOcfhbXSMIyztaPlejuX8CLVq3bGyIqj0UAfpSHN/Fxh8PfvttZtXLh88ilo+MRUqorIP2weJ9nwi+AQDee1aHnmuBmA9UVvhNeYzO2JXtrG6GgfC8+fs+4G7imvFSMxDO7Pr3n/8AtEuD6mqTgcHDvaIk97boyEgx8qs37NfNX7tedSSBcUoTEgEarp66U3594a2GxLNM5nF0R+G7uCfWuZhcBI4Uq87QWqIRiCwGhBDL8KufPHLFsYTC46yf8TuX1Jki4PvAdBIIPw8ai+E2UXF4drom07AODtlOk/Wau/s2sJcGMwDLnzZmsGdV1iR5e6dPOqmflCH3AXX+yqRNuwU3/Z25iOGxgWfsr5CMunvHVDrpEyPjWjftHYQns8TZWLtiQWHvFTuDHRZ6+Jrz1lZG8DbYo0bgg/mIq8YHj91iwLM4uAecrEQfOq888ukaK0nlSRy+3QVHWuY3vZWILXLIiF+/aMkgxvH0qwc98yu1jBwTka4hGaCdDEfCSKe8h8HGDtnEkZ2Ziotn3shOixvP0pp7ZeXms28IzZV7S8GVI1t5iGynbafoau48IFKaMEC1rnHeL5by28k5lnN4V5w9tlhBduPmli+nlAGleiuZMRZzqpIL5R8NPnXm79oRvtFAjcwB67mpM9xL2NB8qXLA0LObFzO6qzQGdVk7AExJ8hvXrjn26xtrgc1i4ptoFuohVkYABRlVmUEwSCD12ryhilXsrAUDNnJc9TrABraeQE7XE27ZBX3XmdwABGvrVHPynRsqPkqvikcKR9kvOn7u7YLEnv23yox8+k/UHrUrx7hpdzYtglnudop/h3Pyiap/t15Na1jRcsqzG8Jjc5l3j86kOWOPuVV8zG7YPeUQG7PZgeulNMTZY7HPlTu50kK3Hl8tjbeFS81yzCFyokLEl1JGkmI8p8am/aZxC5hLjWbS5LOIAB+zBGaCpCgRuAAaunIHGrItoEthM43ESZMyx3n1oPaVy72o7ZLhL2u8EdgLZUSSNBIJncVYPTwzFL4f1fb/AGTnR0DSxPlvglzD4o3QCLJUkj3dt1A6xvrU5zry0uMtm7YEv4dGWJ6bMOny6054BeTiJM3DYyDPE6MRod47o6xqavPJQtYe2xBBbNqYhf8ATPSNetRdKz35DOzkCiqhxh+ypfst5TxQ7O447LKPv6EgdI32nerF7RMCxziyhLlczMp06aE9OtZr7Rva2/b/AGLOEtOQQNcxjfwABqzcd5/Frhdt2b7XEBVk6PLNq3+lf0p8GBjNLgzn5UTdDWlgUTguZ2wmHxJulhcDQuZSI7ugXxEnes15L5O7Zu3xB0aWAMgtrufjW6cy8CtYq2modkyFR0On3iPHzqJPLt0EW7hW2sFdN5B0VCQBtVbqkWXpEUA2+VG9hr7KE4NwO3bgkgTBQDYAHw8fCoHjePZbjMIgk2sxkug1ZmVRHvLprOYkjpWpnkq0gDBnJUEgkyZGvpGlY5zdjMzQ2uVwMgB1OrHNB01OhMAakxWdidNmxX3Kdyt7o0elpVT514gc7WswyWV1MtmzlQGOXcwTEExofSqt2UxlE9SDHeyjUkEyAPD122q6cOsm/mY2khVJuXCxMHMCTBjO+UwIO2o1qD4jaZgv3RK5UUFlFsTuASY6mZ6eNdA2qV97S42mvCMEW1Qa5fPoCGA2BGndAI18atuBxxFtlgqbZQklS3aLnK5oI0GoVtdRpUfwO/bLZSWGhUK4MCSYZSokBZmTsM3xkXxAA1mDbKDVj3ozTJiVY5gJJjXwpPoilI1tBa/wDiloWMMxusjItvQjQgjXT9fCrNzdiEum0iBCbpmeuUDXXzFVu1wVRhbFwKGy2bbEMfeAAJE9fWmHMPMS3Ldi5YGUo2VlWBlHUfGvNupdKliyBzuSb8fZc9LOBqBTrDckG3xCzdRZtZxKgHugAhjAnQfnUL7SOMW14pc7K4oVggZgIAuAa/HYH41sfst4nbcEhXLanNqRECQPDXpXnX2zcE/85edFKK1wmH0YtALaHWCdR5V3HTYzHgsMpskqKVgEdjyn/FealW4bb93XNmnuuI8POpTmLEC9hUddp2PrsPIVkXFGzxvmUQCfLpWp8l8O7XhimZKOw1MRrtVqHDjbKZWc0n9NFSKB44/2TAkwYAjpT7A8xtYtgSIgKCNZy6j60y9rHCOywoZZGqkkVT8Bh3bDAjvZWkmZyqY6fGnZDdPK1cp9HlT3EeYDfTKLemY5gPFtyPOi8bxPbYe3Ztqc9thqPj16VAJc7NsytmBHTQE+vj5UzvcfZJgFWJ6bmqMEToyQxZ0TebUvdfEsU7UzEhc+kfPf1Favynzh3VFzV1ZQIGkDw8daxnh9i/i7gzEhQPeOir/Wtg5Q5FuYjsyCBYtiO0M6keGveg/CqWdgfVODOXc7eFUeHE+1aD/4zVAXusIEG3b3PqQTuB8hTrF45r9lnkC266aAiNOk9dt/GiYblnD29WXtMg1e53h5mDoPlVAse0Em+1u3kFpiQhG4CqSCB5kSBW/ha8SMMmqzt91aiDmvGoqP9oEKuVlWCcoKNm7NJ7rATGYQwiZjWOtYdx8HSQIBgRswAIzHUw2gkn6zWq84cfMsEkW1MByDNy6PvBWOiyT3vKOkVml/gFy4DdDKiySJOWVBEwCJYAnxJJPykDha6F3CjBjihmIgGAusFt9BAAIp3yldnEWWIMLcSJ2MMDvrOaCNo+VWThGEtBXOQPlUKs5jmujTMBvuZDGAIiJigwGClHaQGV7bowXZhdhk12ADTtvHjQkPsNKrPs0rWuBcYIu/vuKIgLcS0kDMg8Rm8u6I2E7TVD9unH7WOTNYtkHDGZyhZDRnmNTl0I8iar3tI5oYlUzAhTsNgfLy2PnReSsat0utyJKtJ1ykEAGQPz6RVPpRla331Rtc/G4k0szdTtMTXp7D8SSzYJJVktKEkEAswUagSZnQCepHhWTc5+zQ2lNy2xZAoMMPHwI+gIBPSrH7ROJXMLhLdxAFuAqBIXKQVy5mBBkyDv5VpQTMm/Qb3pXMXhwPwqF7TuZRicQbly49l0hFtsvuoBIBjUMToTAqV9m/HDcGRwWZSMrE7qIgVSOAYK5jsQ9y8/ecyzMOsQo0gACAPACKk+GYz91RiTLrcyoFII03MeB8a1O2GhZ8jAdgtlx/L96y74qwJdCrXLOmW4pBkqel1VkhhqR4xrDY7EvjLgOHVhaNsTBj/NnC/eHX51TP/EeOxFsw2RBAYjuDvdNNTp02pzyLxh8K7OCDab7N4BkdA4iDPjB11HWsyWZ7Wu01fhTMi1iidwtz5BxYwVm5aQi6jOHtsGGYXCsMrhgoySNCvSsk5s4TiWZrty0QXcgsozKSTPvKWHkATtFbFheVz+5jFdvaa2ydqw+7l6gNvmB+6YjadKzjiHHLOfu3euXKAygnzOuoPTxrltMzJi5zNzyQiWlooptwMm3cw+FDN21+5bRktkZftDkGYgbqDt/mr3LhbIVQo0AAAHgBoK81+x7kWxf4kmKssWtYa2GcnNlfEOpClc2ogFnbUwwWNDXpgV23R4tMWr5VmIUFEc6cU7HD3bvVEYj/ADEQo+LEV5o4PZrZv2gsZGFVP/UuqPgoLn6gVk/CbVdp0uP2lyyupP8AdSmMIlO4olhaVit0LHKKaAijGgpyaiEUEUauiigk640agNJBFiimjxQRRQRCKA0eixRQRaCKNFdFEFJJkUBFHigIopqIRQEUagiigiRRSKUK0BFG0KSZFARRzQEUbQpEIotHigopqLQRRiKCKKaQiUBFHIoKdaFIlBR4oCKNpqIRRctHiuijaFJI0BFKEUUijabSJQEUeKAinAppCTigIo5FBFOtMIScUEUoRRTTrTSEnFFilIoCKRKACzy9x8ooYqSNAQNTBO+mbveRj41M8M4mlwSp+B0I9RuKqWHwHaaLcC6E5cjoAW0BYgnvE7GNulI3+HXkAZ1Lhf8Am2TmKiCQTBnWQTmUbiuSwfVoY+nnb7q5n+lA9ltG/wBlfb6adfhVU5kwOYRkY9ffafpIFN8NzmEuG3d23DaTB8QPAanqPOpnG3xcWbZDA9Z0HrqPlXV/X4+ZGdJ3+FyrMDJwZBqG3ysu5qwmzG4SRoVLs+nhMCAIEyanOAYk3Hc+8zKLrCRACghhrP3T4yTGtE5mwAggsT4KsE/EDuqp6kyahOXsSRcXfWFy6jTMNOggjc7V5Z6lxdEhIC9P6JkdyMAlWezgf/MKpWAGBIykBlHezECYOUanzpLg1wu5uQDLEsMr6ayZjeegqdw2PKAtkVYDAOO82VmyiTOgUSAxjQwQQdIbjVlhBtHNa0JIH3jHdYJ98DxMN6b8lA861uyw2FZeEY0OZlcolShMHyIQkE/FvhUzftWzujADaSwPwD6fAMRVQ5dw+bYMp0JydwtETmtvodTGhqfv8WCCJlo9zUEeEgkqs7eE12/R8THZH3smv3XJdXyZ3PEOPf7JbGWVgw2QHUnSNNdQND56fOq9exjuYf8Aw1nKJInUCRK91WByzOmvU01u41rjBmywd1jRQ0jbQ+Hf2E9KK+Bk5RoCZXNrlmfszr7jdD0MVfOLFlSdyBmkD42tU2TyY0fbndqJ+fCkcRiH8FABgKDKKB5zqQPKBUjgeJDacx6hZb5nb5VUMZh3Qhu9NsjMRocmwJ/iU91p/h3BqQ4ViC8z74aDGzR1Gu5kHwaa1cXNkgeGF38rMzMGKaMvA/hXexcnWlaa8NHdFO4rv8d5cwErg5hpcQgiuFDFDU1qO0WKCKPFBStK0WhihiuijaVoIroo0VwFC0LRYroo0UNC0rRYoaGKGKVoWigUNCK6glaCuoa6KSVoIrqGuikhaCKGhAropJWgArjQ0NJC0UVwFGiuFBK0EV1DQgUkrQRXUIFdFJC1wrqECuApJIIoYrqGKCFoKEChAoQKSSCK6hFdSQtdXChrhQQtdQmurgKSC6KGhArgKbaSAUIFCBRlFNJSAXKKELR0WlUWmFymbHaSC04QUKJSsVEXKzHFSTVKFjSkUleNROKtMYmGOet59hPLBsYc3HEXL5DkHdUA7inzglj5tHSsR4FhO1xFm2BOe6gI37oMt8AoNesLSwK4/wBQZR2jH5K9D9J4IszHxsEevL/7eHHBGCwvVrj328go7NJ9S7/7a9P14h/bfg8WTU6YS2OndOe6w+e9cjP+gruXcLPeXABcI2kJcB81IJ/Wtd9u3DVJsXEgi7YgxrqNQfjI+tYdw/H91CfunKx/hIrfOXOCNjbVkAytu2R/ljRfHrFc2/2WSqjrOwUDy9yfdxeAa+kTh5BX7xyiSB8DPmRS9vj/AGLcPxdvKGyGzegdZKnN5wZqyewbjXZDG4c6EjtBOwIBVx4+FU/EcDAe/YZWhvtbQ8pmQPoT61jz5LBbf/d0zRwQnHtF4MbeIbMNLy9rIBAJOjR+dNfZzxdbF05+8UkDTodiPQ/nWg8xcWtYnsI7xt2wxJmAuWCnwPjWP4THhcUjsO52hVhv3SdKd06R0kALxX5SewNf7VsPJnDDexq3Lh+ytAXDrpnaSumojqRrtVW9sfMRxXZvBKpiuzSDIIVtI9f5U74/j2sYVriuVe4/dBOjW5IjTXYbE/nVa4Q6nCWO8JbFgnTbv1exrLvx/dXLAFLc+L4C0byOf8WBoI+orzr7fcO37wSw0DaeA2/716A5n4EwxIvzKlR12jqKyL2z21e27DQrdHrr0NSdRk0OZt5TMvdiyFNAGjQODWx+ybi6tjrDbBsyL8pArMMVg/8Ay+b0P1qwct3OytWb6727qtp4AjTTxrKyiJAD9yFkxu0uBXonmHDN++WTc2zPkEaHu+NUf2wcrGxcfE4cGSJvAbQZk+XnV341z2uJuYVbax9oCSY07sQD8fSrVe4KWN3PBDoRB2II2pYbw0FrDe/K3DTwVk37OvHjdVrcaiYk/dO+vlW3XuDrftPZjKICs3j4wfGvK/LhucNxjKxgSSB0ZWOg9f5VsXCfau3ZuiW1DiO+W7m+p8zWlHnRRAh/ChEoApyncRystibIVXW4IVoAAABGpA+JgVl3tY48cL+7opLHNLrOhXaPTpT/AJq9oTOczN3kgAAwrSddB0qP535P7ci/iHZma33LFkAkEQe8eg8Tp61TxpY5XOMbaHhVXu1bNS/LvDygxl1rVvI6BiTDZVZZhR8SSNBtWIe0ziRuOkN9mqwoEwp6xV5xvBbyI9o33RXQsUJ3A90eHkQJ+NZzYtdxg0CCdDuIq/G2qPlQSN22Xoj9nvEqmAzu5JLHXwy6AePSrhzbijctg9Uy3FkTMb+eorzByJzy6qcPEq7CI+6SRMevj61uuM4wMywdOzOmwGlasDtTdJTmvptFTpxHaAlHlGQgkbjQzAJrEOeuLm2wRSA2iswmFzz3mMjvEADbx30q72byqpuLm7MqSyg6TtIOsHaqFi8ErPcYhiQQIEEm7DMgCkQE28DsNBWVmn+oLW10wkRkhOuBc2Kgf7JXYjKGYwFkZZXbQwDInU6z1iMZjkc5gzA7ggzEtsQPuk6gDxjwqO4nwowTGcnvbzlRgNZnUrmnLGhqBhkJVpkEgTIjwObSBpoKDLIV0SOvdWzg/GSgORVaZRw3UkQWg7HQQ06RtUzgHhACCShItErmBRswIJXQBNSNB3ZO1Vzg5iC0ZMhJ8WJJ1iYzgbeFWnly8Hs2+zUowuBWkaHTRtRJJkqyjwA8SQ/hTA2FpLcyJdwq2D71tVSF00UAGPGf61B8B5dUhmN3ughgE1I8ZHkOlZd/4xNi67AAwzKVOx1NTXBebcPefL2n7qXj3fc0Hy1+FZM/Scic6g79j8LlH7vN/K9bezzA2baM1m4zrcyzmI0IEaCBB8RWS+1vly5isZdC/ZxbXcyxImCB4GfpVO4h7T7uCCpZK3LWjG5lGrR94bEyNxVRxftNu3b3bZ4doB6CBsP0q51HvjGbFG2iP4ViWVmmkpz9yfcwzKjlZcZ1Zdj4gzGtXn2R2TdwFxBurt5CqpzFx8Ym2FZu8utsjxPQ1YfZjj3tYe7AM9pDfFdTUnTcgyN94ojlOwXN7vtTL2nY1+wFvQqIE9Brr+VVr2V4JimJSMxZTp5eP/arHzbiLbqA2bKXXMR4eU00wOC7C+Th7ge26mPEDSQ3pTOoPIGyvZx3CpN0BrDoIDWnk+La9POmXFMKrhbgJV1iQ2k+lXXnfh1qyVu213P2w0KmTuPj+lQfP+GzYc3ANJXLA8ennTte7Qq8Y9pKsHsI4Rdxl8KTlw9n/FK7POyT/FufKvT9wgAW0EIogAaCKqnsj5OGEwNpNndRcunxdhJ+QgfCjcz8zraU5YLDTx/7mtaSWHCj1v5/uUGsDBao/wC0FzZ2NpcPbkveIz+STtp1bb0msv5Fst/xJcym2UFzugTEWmH9a0fiPF8PcZRcGdiZMiIadJ8hUg/B0F3tFy5iHkxIIKkEeI0EfGuRPqDvTgOYRfCrxP7kw/KhPaTxBXUdmAShYHXplAJRfDwOpzTWU4nGNc+xAUjtBlJMNKwCCCIVT7xAA7w61bObcAJlRl72c7KQCD3QdY0E7CJqkcYxCLBPeuMMsk6IWMhgyjuwuhkE6k6QJ3ojqNrpnbBWngHBbd66M7swFkMYAtkkN00GZZEk+IJppxHgxsdszZghbRgYzKGQ91VkQRvPhSfLfOyrdDMhC5DbbKxYAlsxYSNBAnKDOvU1bOeOJW7mCutbcG3CjczJdTA6gidRV0sBYQs6dzt1l3MXEMO2yTHUEj0nz8af8jcRCqxCpqVUSNQupb4eJpHg3s/v3cptqBbYMReukrbOXfLoWeDpKqRNM7fKN5MS9t7gPZRLoy9mwyFoGvXbUAjqJ0qLFhY3grIjiINq2v7S8Qt1rACv2kWrZYSyrELAggDXeCY9Kh/aBxacDab/ABM2IdDnGncZyFVtO7qPkar1hznu4nXNbVgukg3GJVRr4AlvhVt5ZtLiuGXLWaDYc3kyLOqw2v8AmRnk+KialjjZG62j8rQhZbHKiWjcuhhbtOsL32VWIWekKOvnU7y3wJLahnhtJJOpn47AdadezbjX7qb1x7zqWQZEtGc7qwy5uigR4zuI10rXNnEUxDZgjWiXLMVMgz/CSIjyOtXI8ptkFZZj3VhwnHcEQ2ezeMt763GXJEgFRBGXaQfDSti9jHs1wdzCPcu577PmtgHudkTAHdzCTHezHy0NZj7OuaLGDw9+1dtLiRfuIRMSqqNnBUlRJzDKQQdKuXse53tYe+7Il50uHLBJIQCSLgAB7qrKsSDAjwrLleA8kA0rUFAqmcSxb4JsThTcLZDCb5e6QcwG3eEGPGaecZwbPZtgJLSCFC6lislyR1JPn4daS9sF1L167ftvmKZCYGjanP8ABSRv0FE/ZjS7ieLYZCzMqFrtwHUBLYzAa7KXCD1Iq108slaTW52TJmF7gQvZnsO5VbCYG1bux2zfaXo6XH1y+eRcqT1yz1q8Vwrq342BjQ0K2BQpYv8AtAY3NesWh9xWc+rnKP8A2n51U+GpUn7WzOPudYW2D5d2Y+s/GmnD1rquntqILnc11yFP7S0YihUVxFaQWei0EUcigiigk64ijGgijaCIaCj0BFJBENcaMaCKKCJRYo8UEUUEWgIo1BSSRSKKRSlBFG0qScUBFHC09s8Huna23xEfnFVps2GEW9wH5Kkjx5H/AKWkqONFIqY/8PXvwfVf50+w/J90iWKrPmWP00+tZ8nqLAjFmVv8qyzpeQ40GlVk0Uirb/4Q/wDif9P/AO9RLnKJ6XB8V/rWb/8AN+kg13QrH+Q5dfpVUIopFWDFcsXBtlb0MH66fWoLGjIYeFPgxAMeOu/wrc6f1nEztsd4cfgcrPysGXHFyNoJOgihS4DsQfQg0JFa1EcqgHA8IkUBFHigIpI0iGgijRXEUbTUQ0BFGroogoJOKCKORQEU5NpJkUUilYouWimpMigilIopFEFNIRDQUcigNOtNIRCKLFKxRYpEoALMuKk2bQRYzHRiDGjzLM205RCgjQGpnlm0y2kiJPeENLdme8AfEgDY+NLW+CBmMiZ6Zcx16xsIG2mlTV3hmVUEiAQVEAAA6FWI66fnXivrHp7sLSy/cfhdv6f6kzNYXNGw+VX+O9kxy3LaM0DvMAHgjbMsNJ161CPy6oObDXTaYmSj961qNJgA7+IanPG8K73CR11GsRlWdfh08R50HD+GOGYHrngT4KGUg7Geg86y+ms6jG0OiLldyvpnktfSjhwYbX1YFjujTbc7aMTEkyYPSNurPH8L+4irIgkqG0gTmdwNAvdERHSpXG4mRDyyRn02JVQdV6dQSNZpw/EzaTMEi3fUIjv93KSMjESpGVjAO8gmupPVZHxGPJbv8+Vn4vSW94SQu2+PCa8F4YbguwysxKaHRYVS5U9I6RuTr4UvgsIUDIwZgxDalltlADoxGhWNVbofiKR4NjGWxcZDCnElWJUyAwMrAHekQsDar1y7y/cfI18le0QAIANtCFMjIg0zEamN/LmWuY0O23vZdFPCRW+1KhcexiIQLfe73Z5lfOmb7jEsAV0+ZnwqqcNUvcuSJbK6jMNNCZAM6mDIO8zWs8bwOCsubKAYi9cOWLdxsis2gF24YXNvoo9Y6QvH8Nh7KJbUE3O6TkJyqWBy6nMS2YnwkVrYfUYQ9olsrDycR5Ye3VqAwPBxouacgm2094p+DwlOg2O1S/D8HM7eHlr/APS248G00p1btoWUISYCgwI+01ESSBIMg7aAyNqlbeE+9I03g+OpH616b0fIxJwBE4fhec9Yiy4bMjT+VFX+FBwZ3yxPiIIKt4+R9PConhvLxRyB7up16gFSo9RBE+dW8Cuy1u5PRYZ6J5C5/H61NDYHBRcPahB4yR5mNifURRhXRXRWpjw9pgYs6eXuP1Uurooa6plDaCuoYroooWgiuihrooJWgArgKGhiklaCK6KGuikggrqGK6klaAChrooaSVoK6KEUNBC0AFcBQ11JJBFDFDFdSQtBFdFCK6KSSChiurqSS6K6hoRQSRaGKGuikggFDQ1wpJIKGK4ChighaCuFDXUkrXUIrq6KSC6urooaCS4UIrhRloEoIoFCBQqKOgphKICLFHUUcijotMLlK1m6KFpcCgWlFSo3FW42IBSoFcq0YVGSrLW0gimmLanhqN4g9QSuoK5Cyyrv+z/w3PinuHa0mn+a4Y/9oYfGvQBrOvYNy8bOHNxvevw8eCR3B6wSx9Y6VosV531KbuzuP7L1zouN2cZo8nddNeB/2p8ej8WxFxHFwKbKtGysiC2yTsYZSD4GR0r3BztxhcPhr95jlFq07zvqFMadSTAA6mvm8gBcM+q3MysTvJnvmOs61gZs2mmrSkOyTzBc69PCOh1U/CvQ/wCzJzH2bZXMK6wJ1EwPzisG45gYKv8AwgOPAH9KufshxEd3WUMg/wALagisp41quNt1feM8O7PF31HdLBipHVSxMj6ipDmrE9lfwt/cBeyP8SsIB/OpDiHExexiMq7WiriNT4k1ZubuBi/ZZQYIyNaiNI1E7xH5VyfUM6PFmDHC75U0UBeCQstxTBLDrARu0YCdyGM/IDxoOXuS3upmyz2hVw3WA2p8hWi84cCs2uxdl7RiRnRe8GJXRifGavXBMFaWypkhikDSMs/djyNRyZzshtQbAK3Fg7+5YF+0FbytZt/gt/D4VVuDNGEs6/8A4Qp/6hWo+2blKFa6WZ2CkQRpPQD0FZJaBGFtCIi+o/6hWv0TJD2kHlVsmMskXprHYkm4sQBl67aVgPtgzs92FIUEliNiehrcuO4XObUsFIUEiYPpVKxHLNzE3HVY7Ncy5jvJ1jU/WrfWslsLWvfxaUzC8UFg3CsQWwt1OoIMeQq3cjcEuPZyMrAMAQI3mNvhWicicgYW2zrlY3AYZbpCqY8B11rTOAcBA1uW7Vq3bOpBBY+hIECqzY25TP6Z2JtUxj77qm4nlMgI1u3lhSM57sEARrrMHqN6vfJ/MytYdLjAXbYysSfeIG6nqDWQe3Dng3W7O1d+xQkAKQCx8dNwNqyBubrisCGbu6RNQjFMVtiKf3Qw7LR/bRhizJd3yHK2h0+PhVPPHCoGU+U+v61e+Ec6JjESw9oEsMpA946jX06+NJ82ezJrLplIdXICoDLqT+fy0qKDEd2tLt6VWQF+4VV4Jwtr5cm4ECJnZ2O0bAA9a2j2W3ycMHLHPcGVGcf8tdz8dTSHMPs2V2tW7aj3ALg2iYkxuT67moTmzmLsL3Y2m0tW8kHwOmnnWr0+N0ROttUpGt0LPPbRzLau4vRmyW1yAroC41O3SdDWf8SudpbzjdTrHUePzqz8J4faZX7QHMHJJidz1+GpP8qq/M1kWLxS22a0Yg/WKtmTuPOx2/hPa291b+QuUWXs3Md8Zx1Oh+lWbifFxlYTqFbXbrXezfGlg1xj7qADwE7gdPOsu4txItidzGfLp1E0MKR9Eu+VXkbfC3blO064KSp7xM+SGCTt0A0qrc6YfW02XUpbOVWJHeDKGZ5PfjKSDttV55jxQOGKKTCqrEJ7wGgOvQRvOkGs6xF95Oa4BmGdScmZbRBASddcsZbcCCZ6xVXKfqk2W906hCoXmbiRuW7aZAttCVm2WaTpJAiBsPKSTvURjLGVFeFI93QFifeALEgFXG+o2gzuA54RfIJH3jIl9lyjSCNQ/d09YOkmlcBgl7S3m1DEG4CBBJaRmIBEEayNYnrpT2P2pWmm1OcsYS3BEMTlVT7oMt0jYjwjrFWbBHIMlycoIyEhlzRAU+AIAOo/iG4pLhliwj3UcRmtzaeJyXVJbu5Y7hiAdtB6mx81WwRbuDVGVTGrLJ10O8iY/wBU0XjawrHAWF8d5MxYuOTZc5mLCNZBJIOnlrVRxnDWB7yspG4IIj1rX8T7XGF1WWYWRHlPUelO7HtOtm6Wa0jq4AYOBuPCqjOo5kf6o7/C5eRwDisdfE3FXIWJX8PSjYe+DGuU1q/FOE4XFsGA7NmP3BoB6eVVrmr2YXVuMtibqKJmIP8AI/CrsXUYph79j91GHBxpQeH4jkIO48q1/wBm3Fs+Hu67QWrA34bftmDbfeIKn6Vrnsdu5LV8XUdTCkKVIOvqBUggYHB7SreLHpkBVo5yxVoW1GpgSdNDrWV8L4r2WLVs3cY6DoA3Q1sfOCItpLxAZVglY1gbisx9plvD3Ozv4YiW0ZB0I6x49DFCWMEkuV/KddBTfOOGNu3I1D96OkeHrReWFfFhU2QZWiNJXYdd4qNw3G2vtatOQQdDPQx18hV85NwC4YP31IUzM6R/Py6VhdVn7LLjG/hUGyFopaBzdziQq2ycmVBmPUkDpWHcQ53uF+4IAMAnrrXcd5uF27327hbKY8NpqO4firVq66kq4BlCdRH8/SoI4ppWdzI9xrj4UOVk6wGNGy0jB2bly25FtScquxnWeh+HgKd8nWrpeWJKw0MwISSsAeZkz8D4UlyH7RrFuzdPczrtpObSB+vpR+G8+HEqbcgC2mZsiiIzbnrEGDGu9A4HbMbgLvn7IYbR3WqI5rCWlaRNy4xlz3R3gIkr9wSY01PjFZHxy77shd50BuA6aO2sZhBkeHlVy4rzC15goH3zA1lSRExsNIA1jTWq7xUG0xCkMpbMQ4WBAMTvlcGfiBtqK34nLqHcKvfupI0UanMNgGAmZBMj8z5VbeBYy4Mtog9m+SVTY25B7Q9wwCVAzbkfWDwaZQt1wsQeztna6wOpJOvZKffJPePcXqVtXCLCui3Q5GIzAMNe8pYZWmSAqqQMsBQoIgQImkJ0lVpBsVceN88Xr1i7awttksqpLsoJYWzoROyLpoN4+JrH+FIwaQzFiw011E6z5eNaPjuMXMEhw6m19uJa9bbMSh0ho00MwN49aivacq2cNhhZBS5ipz3RoTaGQhBBgAkySN486z8Jj9Rb4WGGl5UHzZwtRaFvtFQli50IBK5ixnqNQBXezDiYw2Fu3iJV8QtsLMZ1yd9DoSMweDUx7OuTTxG8WuEph7OlxwZZpEC0kyASAWLQcoOxJFbknLOBtWxZTDWCgkw6hzMRJLhiXIG5P6Veny2Qt0uWzg4ri215Q5q4T2b905rTjNaudGTwPg6HuuvRh4EEwtemueeSMN2TtbXJYkNdtgFlsyABiLQOqlDHaopCvazRGUV5643hhbuvadSjoxVh7y6feU6EqwhgYgqQetPgmEjbaqGZiuicmCXT119datnJHHBafNChjbu2xmBZYuW2WAOjSRB2qqO6/iHxJH50V1I+OoPT508sVRthXjg3CTdDWw2Usja+GVc3zMRXov8AYy5VRVv4vulmCWFIABAUB3zR95iUn0rzXy3zGLHZ3CuaWCmYI1EMdT4HSTvXu/2NcrrhMGlsGS5a8xiJa6c0f6Vyp/pq10uPm/lTQ2rnQGhque0nifY4S88wchVfHM/dWPOTPwrda3UaCmc7SLWJ83Xg+MxDA5h2hE/5QF08gQQPKnWDWq/wO1tVmwq112O3S0BcvO7U4lLrQUagNWVWQRQGjRQUkEWikUeKAinIIlBRooKSCLQEUaKAiikimi0c0EUUEnXRRooHsMfL8/5UQlRS2EwrOQqgknw/M+A8zVt4ZyaIm4Sf4V0HxO5+EVQL2HI6n50pg8ZctHMtxk8gZn1U92PUVn9TwcieMthk0q5h5EUbv6jbWtYXhyJ7qqvoNfnuaM6VWeWed1uEJdhGOgbZG8j+Bj/tPltVpuvXhnqPAy8V5GST+b2K7vp+RDM3+lX4Tc26PZ8Oh+hpK5epvcxI8a4n6mOJ12tbtlwTi4PKkzXNiQQD4/nTd8TUGTNG08p7GkpRxWM+3kL21oGdLPSDu7+la4+LrEPbRjc2KI/CiL9Mx/8AdXqH+D4EnUnPbwGrkfXJ0YNHyVRnUdG+cqf5fWl8Nx69b2do8GOZfrI+VR95qatcIr6d0tdyF43E5w4KvnBee1Ji6uX+NZK/Ebj1E1cbVwEAgggiQRqCPEGsRwuFa4wVBLHw2jqT0AHU7Cr5yw37sCjOzg66RkB6lJ1PnOWd4Fc71fLxMMjU6ifC7joHQeo9TaTCwkDyrmaA00wvFbbbMAfBtP6fWnpFUYM2GbdjgVLndFzMM1NGR+yJFdFGigq3aySEQigijGuIohNpEigNHiginWhSJFFilKAiimkJMUBFHigijabSJRSKVIopFG0KSHLMZokawNfAnXX6fGm3O+KVbfvAEm0w6KCGYx6ECfOsqx/PZLRbWYKz0gT3vE5dpOlH49iWxDDOctpUBIB/CSGifOSIOix4ivPfUGI3P6g2aI2Bz8LX6EXYWAYpRRP8pbFc6WhJhnGp7q7TGbUn5eFQ7e0GB3E1PVm6xCjQbgT12qL4pwwsAE3Opylj3ZIEgaLoQTBj46Uvf4CluwWuaka938RMQBP3Y10BI2OlQz9XMJ7ba/YK/jdJZJ/UdZ/JSdjiV/EGQqxaIzDQSo96c0ZwARIBEz8k8TzQANFULmKEKzCSBBYW30UmBl3Ay6bVI4DgxYuGydmXDpKwWgDKimVKq8xox1HWKqXE8CQwRpaGJytHdBJ7siTM7xP6VSzYnPAkkHK6Dp0sTLjYdwr1gOaAGAVVDENC9CzMR2jEEhHCneN4jWKmeXOYr11igY20CMsFmQEaEA3WEk3DplEaCNNKz7lnhadoM6nK2+mWZgeHdAOokirly9fezcay5RiSMj3grEWwuVezBMMWDe6RuN6wo2RiXT+603PL2GkpiuE5YKd8OxPcBBU3LZ7pMkE24JEScpmoriKZbzkGO0thwSNmyowHgIZCN9BVzt4SF7rCFcXTm0lV6P4sQQuXSNqj+O4UuRIgZhlWPukvoeoJ6CY1FWcmN8Xve3Y8ELKY9jyWtO45Cghxp1tKpEZb5W4ZgNnNyQfMDSf8vhVv5fxE6BmdGchC2wCkiCRqpECQZG+1RGL4al2w8AL3SVkEl7gYNvtmGYproZ6U99nmcI6t3WDMxB6QymQfxbjfXXxqXp72jJjdE6t91Vz49UD2vbeysDLFdXUMV7/CbYL+F4FOAJCB8oK6hihqVRWigUMUMUNK0LRIroo0V0UrStBFdRqCkkgiuo0V0UkLQRQRRoropIoK4ChiuIoIWgrqNFcBRStFoQKEV0UEkFdQiuikggoa4ChikkgiuoYropJIAKGK6K4Ukl0V1dFDSQtBQxQ1wFBK0FcKNXUkLQChrqECkkgiuoa6KCCAUMUMUMULSQUNCBQgULSRQKMooyrSiLTC5Oa1Ey0KillWj27etMLlO2K+EklKhaVNuuQVGXKy2IhFVaVUUYLR1SoyVZYykC0KLRwKFRTSVO1qRu1B8WbQ1N4mmPCcB2uIs2js91FP+WRm/wCmapZcmlhP2WlgxF0jQPleo+W8MEs2kGy20URtAUCpGiWUgADYUevN3GySvYY26WgfZYd+2Zxvs+HrZG+IugHX/l2vtG/6hbHxrxtwThxunIurGSo8T4DzNeiv22Mcf3mwnRcOzAeb3CCflbFYHy5iDauJdA/wyG+RrmuoTHW6vHCikd7kt2eiq3vAm1cny1U+XUfCp/2XYxbdzK+4JWfFT7p+B/OozGIzuX93tiWE+I7wj+/GnHL9odtaJ2Y5WI6T/I1VbNbQUwLXuSeKG3i87pKsGtydB3vdJOwmp7knGBTdbEXFEMUVS0jL0bx8qqnFsSUw9wQDm6neV2Knx0rMDxFgVZsziZJPkdiPCue6j0l2U5xVqF2iqXpDhHGc4gQVLETu0TPd8I3Hxq/4RAbYyd4AgHTUfHx8aoHs24jhsRlOQKSAGK7EgCB5ba7Vp1rBLaaV101A0HrG0/nWbhYxY0g8Db7hazH7Kp+0W5bKBXBZcwB8ttzWPe2k2sltba5R2qajQbjw0+VbzzPwPt1AjdgdOnrWK/tE8FFjsR0NxD9f6TNaXTMOVk2s8KrmcK1cfwf29oyYyLvoCdKT5Y48MLcvNcV8rv3YUkTGw9aV5s4v37aKgPdBnroPGrfiuXlu2kOQACDDNGbr0/71d9QMbIxrSLF7qAauQq/e45YKdqlsm87EDOmoM7gmAAPjWZ+2TnVktdgrEs+rsD0+G0+HhVs9pXNNlB2Y1IBhVkAH18PKvPyG293PfLi3qT1YtqQJ+nlVvBc2GABo2VCeRznUi4HC3WBcAsqiS33Vq8eyn2epi2z33y2lBLZdCTvv4RvUlxXjK2uFpaQBWvtHnlJmNtdABUgeItasWrNve8yrpoQojMfiPzquzJAdqPCiLaUpbGHwVyzaw6DO7NLtGfs99zO8elO/Zldd7+Ixt0nIjMiBjIGXcj5RPrVF4imbHqNe4p69BNSfCuch+7fuy5Q2d1bwAzEzPy+FXIspoBf4AtRMNuVh5C9oBa/jbtyQIBSfdCLO3ruax29xo379+62pcsRHh0q781ot1Gt20ghNShgZQP51mHDrPZSJBk7+vjT8POM8duFKR7DST4Rjnt3JjMJOZW90+VRfMmM7Ql8uUT7o2HpV94Ty9+8doAY7O0WIUfeFUDLo0/WrkORrZwkyw5WLlFhcRgXdAqaAfeI2+FQ3BNLoYicriRHn+dXPkrD5LFsrlLu5gRqfI+U1WOc8O9vEMhADSG7vU7/KsuOQyyPYOEx1E0te5PxNw3sWIM/usoCTGjLA8yZ267VR0dzE/a5SxytAjMkzm1BiJAExVk9iPFjffEF5UJYVSVEt74kgxvpMnYVGc0KQZYrcksxSQFCMkhtNM46LlkQKYInMpruVuYwHZ2VP4/xCTAKRn90CAxiGJHi0aCYOtSvL1kNbaFDQA0EQYIgspMSAYAEHX6Q3HL6OwCggZpO5YxAzd4aSNx5VYOFi4yoQttlBT3Sqll1AD9e95QB1kirjQKVjHG6meGfZlwwM5mVCbZLKGHUrpC+HSTGlWzCWWPYCTPZyATGZ3IUyuXTSCPhTfhnDs+iEh4VhqRmygk6surEaD8Q9DElxHEkBZGVEj3DMlBOkiQGBMRTDwrb9mlMeVv2asyG5iMQF0nJbEmSfE7/Bdqcca9kGDt3bNiwTcumC2Zj7u5J0gR5elTXG/aGLF8NZOZWsjMGkhCBsB0I9TRPZ5x+7futcJUHJo7L3tyYUaaU2WYyuEbR+SuX1scaVo41yJbw6KyKpVVAMDYnznWoPH4yzmEXWa6dOzTd26AAflrVtxODxF7DW4IOZoKsRsxgZj8ZgCprkLkWzhL7OzC5fdZDsAAg+8E8Jn1IqE9FEs1tBDfJUzWi9lRcbh0wWG/fMSsXt7dtgDBPVgPvEa+Q86rPJPMbY3tzcVSQJXIAFAaTH/eje3nn93u3baqrWUBtiR3s33iJ6E6TG1Vv9nTBmMScxAZVJnbWYHwH6VcjiYx2hvAVljveAFKcLwQxd1rVyVsqpVoMHT16TTN/Y4Ld2bNwskSqsJ+Mjw31HSpHiiphyzJcBYjMzDb0ruV/aCxxBgZgyQDMCB6bVSnfIJdI4VmfTrFrIfaJytisPdY9k4TcXEUldfMbfGo/iWMvrh1L5xnM7ESoG5reDzniVum3ctKwZotlTIA8SDpSHHeIKMgKKbhlmzL3Qs7DyP1oZOR26D28KlLCNyvMb4maNau1tvOPKGHxLZsqWXPW3AB842ms049yNesyR9og+8v6irMGfBKKBo/dVHQVwojDXCJGsHz3rTvYDZ+2veIsnfb31P6VnPBsI910topZ2YKqjcsTAHxNep+UfZAMHazm8Tfdcl1FAFtQSGIDaGRA7xIB8NandG5wJCOLtKFULfL0reeAVC3MrMIn3VLqpjf3Q0mdRvNZvzBbVI1UggSi6G641Kkn3cuablyYUaDVgK1LnfibKha6xWyAUSypBe45PdtrIYh41JJi2stvArIeJX3Je42QMwW0QFb7JZOVbaj/lqNSZlmJJmaUIHK6J7lBYy614l2iQQIWAFVRoqIRpbXYD8yZMpyZaDuUAJLZlAiGB00HkQIiPWN6s/AuSblxUZwhn7QFiQXBB0IzDLBmCYP0qKS0MLfS7MZCG7kCZDakksAfEHca9alkj1DdVJHAtNK3cV5ZIEZTlFuSY2A2giQWHWPOq3Zwl/F2bdhLLnsGZu2UM4y5FCoGPcQk9AfMjSpn2ccZv4jEtYe+Hw4DXrixDZGPuA7qWJUabCSNa2m/i7du2ETIltR3VUAKNdAB4ee5NZeRkMw3V5UXS8AyAudws79mIfB4Aq6taY370q6kMCQgX1ldjUfxnm3NEeIXfr106TO9RHtI50aTaOzEkNOgJkZRsNfGs6fiZnrr18+vX8pqsYH5J7h4K2C4RDS3wtmt80A27it7pt3FOu4yER6RWHYnFLfW32ki7aUJmGvaWhAVG1ENb1AbqndPuqaeYviZylQZLCCR4dY8zt6VD2LUNWhgRGBpFrIzsrUaCJetIdOzXTrrPzmpfgXBGa1dCrsue2TcgBlMEKD7xYGPWKa4ZACoIJzMo01gE7nbXw1r1NwjkzDJhRmXX3rcBWyQ3+HqJgnVvPrpUmRmGIb/3VSGMu5XmnkbDFrqWsSmQF7feZSBlLAHTxgmCPCvpZZEAAbAaV4p5P4d+8cZw1o9632hYrHdK2s1w6dFlBH9a9sKK2ulP7jDJVWnhtEoayb9obiWliyPvMbjeijKvzLH/AG1rIrz77Y7+bHuPwJbX6Z//AKq6HBZqlCrZj9MZUZwm3tU7ZWo3hiaVLIK6hnC5t/K6KChriKeo0UUFGNARRtCkU0UijmgpyCJQGjZaAiikiGuoxoIpIUgNcgprxTHLbUu2w+p6CkcLad4JOQHWIJbXaFkf9RFNkljibrkIAVrEwpsl+mJpJVgwYXpSmIQGm2Ew6KNTcPxUfTK350b97tAnvOOklVYDx2Kn4xWMeu4mrZ66Eemc7T+hM8RYgefj4en86rnEcTlNWfiJJEoVueSHvf7Gh/kDWbcw40knpHQ6RXQdOnjyP0uBXLdXxZsMe9hH5CWx3FfCrZ7PvaHqLF5tDpauHoeltyeh2Vuh0OkRkeMxlRd+9NT9a9O4/U8V0Mo5Gx8grA6f1ufGnEjePIXqzFYymN3FVnHsy5x7VexuH7VB3WP/ADEHj4sux8RB8atl3E+GtfGnqP09P0rOfjy+DsfkL3/pOdFm47ZWeefyp7B4/Qj4j8j+lJ3cZVbtYshxsJ0+en5xTjEXT4j5f1rIkhLqtWXnS7ZSN/H1hHOfE+0vXH8WMemw+laLzZxMpadpGg033Og+prFMTePX6f1r6K/wW6b2oZcg+SAF5j6/ydZjhH5S7XaJaBZgqiWJgDz/AJeewHpTC5iatfLeBKJnPvuNP4UPT1bc+UDqa9e631lnT4C88+AsD0j6Vl6xmNiA9vLj9k7sKLSFFMk/4j/iPgPBB0HXc9AGT40j08NxQ4zECoy7drw/MzpcyUyyG7X170vpeN03GbjwtAACkf32dt/D+Xj6b+tSXCuYHX3WPodR8jVPxFymr48gzP8AX+tKJ0jDqYSCpMiLHmbomaCPutj4ZzOjaP3D4/dP/wBn8qnKwO/xdssggDaT4+AG5P0qU5R59e0wVyXtTr3YK+LLqfUrsfWuv6T6heCGZH8ryn1X/h/jyMM+BsedPg/hbPQUWzcBAIIIIBBGxB1BHqKPXcNcHCwvDZYnRuLHchBFBRoriKdahRaCKPFBFOtAhEoIoxFdFFNSdcRR6A0SUgvO3CLyrZuMzQWi3Md4x320G+YwJ22oz3ze96UsgkkTqxOuUSNTA2GgFRXCeEtddEXUu0KPAsfpG5J2q58Z4EA4sIWNu2qspYgZiZFwkjYsYCz5V5G/qErmiCL96XbDDjDjLIoHG8ZyqQi5UDdmQDrqDMjeYiDtImluIcVUKqoVlmFsmJByvnW4d4Y7EDUQdw1RfEsoyqki6/vyNQxDwDqVOYR0nfx0muT+BAE/e7QFkMaAwrCJ2dSD6gGr3T+jl8gvc+VVzupNjiJ/hWe9dyIwymHGYLoMpcZhlIO0jSdNoqi4FmBfIoLXGPfCszqhmfdgCdz8KsnP7aDcgCBrlXWdhMlZ2H3T5UnyhhYCju6/dOgJ08CM06CTpvVr1TmduogOFW9MY5cHTE7ldhbOhVBOozErB06l2JAO+gnwpDnXAF0tXZIiEcrMZdxsR1/MGr9f5WZlBuuuUQyqmQW1B6wGnXYbEx0mK7BcJ0dBpqYHUaHTL06R1+IrhMnLEcjH/fddbE1wBUJybw4rbZLhlnJZEDZsqwCwE6hpiZmCDtUueH5risdQoDuCeolUQbyFzT8DTTilsh7LCYGmW3lUs0nMWJmIIgzEz4CppHDAlf8AKwBmCNxP5eVendPix8tv0rvItpXn/U8ifFd9W38OH/Kh8PwoNhhEAiXM6HTvET4sOzEeIovJ2KK/vCbwWYE+GZYA8NdN48asWHcAZTtqfHUsCdPgKrPFbBUSDl7usD3goLmfVio/71jdV9HzY7S+I+bV/pvqrHyiGuUrw/FKQAXBeFnYQWWYOuhp3We4bEsLt6WIXfKukdmFVTOkgCR51dOC49iIuAkTAcLrtuwGpBGoO++9bvQvUkuK1kWVu07A/B+6w+uem4skulxtnDcjwU+ihihj/vQ16Wx4e0OC8xkYWOLTyEAroo0VwFOTEWuijRXRSStBFdFDXUUrQRXUMV0UkLRYoYoYoYpJWigV1GiuiklaLXAUYV1BJBXRQxXRSQtBXUNdFJG0FdFDFdSStBXUaK6KVoWi0MUMVwFK0rXAV1dQ0kEEV1CKGKCSCurqGKKCChAoYrooWlaChAoYoQKFpIoFDFCBRlWmkpIIoQtGC0r2dMLlI1hKTUUqgo4t0dUqMuVhkZQAUrbFcqUooqIlXGMpdFcEoTR1FNtTgLooVoaOFppKlARVo0UKrRqYSpWhMcVUn7IcLnx9r+AO/wAlKj6sKi8ftVu/Z4w04q6/4bQX/ewP/wBFY/VZNMLlv9Ei1ZLfyt6FdXUljL4VWY7KCT6ATXCE0F6ivG/7VDG7xC8wgraS3amd2ADFR6NcIPpWSYxISB1In5VZuN4xrxvX3Y7loJmblwljp5T8NKqgXNl9Sa5CQufISflVJNyrZwfh7XsOuX3rOaddTGo+k1GYO4EuZTrqHE9DuR67ipn2W48q1xMwUXFIk9PTzNJc9cOy4i4FE5MpmIMACZH1qrDGQ518XsiBtYV35m1wzAawO0t+hE/Q9KzzhHFgxzMokGCBsddZFXrC44fuyhhK5SoPkdRB+lZaqnMdcjT4b671oNeAaUjG2FsPLGJNkfvGFzZBresaZdveT+Vaz7POc0xAKu0ZhIjqfCdh6fWvNHKHMly0SGGhO87idQOnwrVfZ9xFLd2D/g3ZKyPduRqs9J6edZHUcNv/AFmDfyrMEzmmits7UFT2RYQTJ3AMVgn7Ql+4wtdprFxfA9ennXoflHs2tyPQg+W/zrDv2jRLoAABnUR5zufpTY3uZ23Xs48KbIfqCleNJnu2/uwimddRG1WnnHnjD2bABuS5AAA3mI26eZqt8y3QLlvNqcq7belUvjnLoa8107jXKdfPb8qudSqhfyqsji0bKqc8YMAl3uSWltDPnHlFVLjOCJsI3TN+dXH2j4DLaBf33IygbBfSkOK8MZcMu0AqYqjNlhpbXzSzXXab+0zCoiYZQ5mBI6LoP7+FWblR82Iw66MLSFvWep+FZ9ztea9cBiYAAjarTyPZuW3z9SuQFtpO3lH8qqyNAhaCd9/7qZosqVxN7tcZduKBA7umgyjQxWYnFKmKvKCYkgfGtI4hwG/YR3KT94spmZ6aVXuBey5yhxOJuDDqzBlUjvETJOu3kNzVvBbbXB3FUlHASTSvfs/wCIjPccyyQsdQZBE+JP5VmXGsIUzKV3c6nymPlWu47mrBW0t2UZrrEafwtpBJ0H51Qfajh2t3Tm1DgMCYEmNaZiyuae278qRjdi1T/sc4QP3fEX2bUyqx1gbHx9Ky3nDCSisFggspjST471rfs34wq4B031J9J/WqP7WcAFSwVI74kgbzI386t4+eDN21GQGuU17KuVm7jPtklQdlnWfXyqM5+4eDj53HZltfKa1z2V8BZrGd2AWFEzB26eAqj+2LAwwuBp0KyB90edPbOWvBqrKrlvlJfsx3crY4gTFsMF/EAx03qB4rw5mlspYi4NdAWLjbNmkKu2Yaa9Jqb/Zft/aYrqGQLETMluh32qS5yt3BlEi4iBsq5lUdkAVGbKRLgk6FT8amyiS61u4W8KyazgRduzdL5SxkqM2Uz3ekBTOvUVZ+EYXKhGVZGb3soIgjaNI6qOhJ+MdhrpQkyxUdzXTu6be60g+omKe4m7KKwCqpKgwphjB1cfd32nUGgJLCuY4Ct3DbxTQgGdEJGYqHEQxX3csaCNNSPCrPdOltif8AlgEGOjQJMbnc9RtVQ4Pa70QoBBaAQCQJidwZ2jQx4VZ3xUL3iuQRsJ07m2/ejf8AXemSe4UrEo/pu/ChX5dNwnsmAk5oIjTqPM0/uXbcIqXCl1TlI2Gm4kaQD+taBzJx6xbFlLKow7PvGNhp16kVWeLJatq5ZVuC4MysNWEdG/vpQEkeM3TyVxmkB2xQYDmRRdt22ZmS2e0eD7zD3R6dYitOxvOy3UhRBK/e0gax5j1rz/yDipvlmGpMa6wJ8PCtZ4hwaziFC27rI9v3jOUmRoBIgjrG1Pj6q9s3aA2q1ZZIa2WVc7W7jXM1xABnIDJqGnrVh5UtEK6hCJGre7mHlpvFXbkfke7bRv3jLkGoVnkt/FOoXSNKXNwKoBhhBOWNd/HqIqn9cGzhjxWrhT49h4JWI8bw8JcUiM0xJ3HSof2X4W7bxFtSMyEEa+Z6HrVm5xYX70KAqrMD03FO+Q+HFGiT3WgT90Hz9auPeRIAFdy71haBxjh9tVJjvDXp1rMef0vNfS7bGeB3lGgjpPrWn82Yo91RGYxJ8ah+E8oXTc7a79lbbQA6u0ayF0CjbViPKpurubHEX0g4tLKcVjvM3Ld66/aWu4SO9bLag+VNeCWuIIcpw95wdJ7N2B9CFg1v2E4JZLh8zMyupBZ0ykzsV0mfCamcfinczKg6n/EyiPxZZMeQ+EVldJlZmsNgUNuN1lueGfpWd+zHk1rTrimtAXSDlUyGTvQ7OBscsgeGu1Xn2hc+KqtbUqbaP9tdzDQlcwCgiTHj4wBrtYOWeHK4LuAFClWZfvZpBJJ1iNyKrXHeSMO1triqxtnLkJ1L3LY7rkMP8MDRV8ta0p43Qt0h2x/lWsFmp2orIeM4a3dsveuKzMyL2ATUWkJ91/d77AZ7j6GBEgLWeYpbYaJYMJJykZgx0yzBGUf5iTrB1rTudeOdjKWgAO6hYykk6khZgmdDJ8utZ0byldVygNGgIzPJIJBDbjTQzRiK15B4W+8PuMtm3mEtlVTlMgSo1zHQHxmsQ9quAX7Xsc5u3SoKEBgGZtcpE6gDrqJrVOA8ypdVgsoVQK1ojKYjvGMwGh0ERtBGk1V+EY21axLu6qYBEZO7nOmaTrqqnUePnVrKyu1HraLrwqMlhrlDez/l4YBM7OS94Q+ndle9CmNd4JnepfmLmORvGgEA6R/fwp97TOZbPY3FuBZuBWt9nEoRsT5dCBGhImsbvY5iBvGkHofnXORwvzj3pNipem5tR6CVMczOrwW72UZo+sfGo3iZU2MPEE/bOw6qGbToIGniRTRccCwTMJYa+AHiTsKHE4eWXKGlhCqdtWOUCOm5jyNbuOwxM0n9lLkSBwNIlu1+VaP7OfZ52irfxAK2T7i7NcPQnwtee7dPxB37DsFg1uH95tm7fQnLbeBaGnRD77T+LTy61rPKfG8weywi5aJhWUrNttUMNqYHdPp4EVW77XyGLe6WI51brzTzxxY4fEYnCqirbuX0uEgHMEGqqs7LB00+NbrZxZe1IAKmzCrrI096egO8k+VU/wBuHDcOcRhbl3di1sjYSsFcx3gEkHrFOcFxH93t3UCi7bdBDwYtnKe4CT8hOsVU6s0SNjA5H91ZbNtatf7LHDieJtMEWcMzSNRLsiiG66Fq9ZV5v/YusAnF3NdBYtiTMf4jH81+lekK7DpbNEARYbFoDXmnmW+LmLvuDIN1gD5L3R8NK9Dcz4vs7F1/wW3b4hSRXmfgVraul6Yz3Fyz+ou2AVmwCVIAU2waU7it8LDKLFAaMaAinIIkUBoxroo2hSJQGjmgijaBCJFdFGiuo2gk4oIo0Unibkd0b9fLy9fH/vVDqPUGYkRe7nwtjovR5OoTBjePJTXGYYMwnXKZHUA+PmR0Ow+okFIUSf8AvTWyQNTsKhOKcXloBrzTP6pLku1PP4C9o6Z0WPHZ24m8cn5U5fxc1GY++AKSa9AqIx+JrML7C3cbF3SOPvTTHieOziLg7QbBiYuD0ubn0cOPIUXEXqisXfqbEzp8d+qJxBWjldGxcuLtzsBH3ChOK4SJKksvpDD/ADDUf6lJHptULcxHhr/fWp7G349aiON4PqN/vDaT9IP516h0P1l3Kiydj/3LxH1X/haIbnwNxzo/8Jph8ayMrqYdDKnwPp4dDO4mtz5Z5hXEWluDQnRl/Cw94fqPEEV56a9/fhVh9mvMHY3srH7O7CnwD/cb4+6fUeFZf+I/ppnVMP6mIW9oux5C5T0t1B+DkdiXYHaj4K2jGPofLX5a/pT1781GM80OFu9xfSPlp+lfNLodqPgr1OTfcKpe1bHQltPxvJ9EE/mRWaY7E61Y/apj5xCr/wCnb+rmfyAqj4u6dhudv5/Cvqf0FC3A6Kx7tr9xXknXon53U+0wWdgFL8q4M376p9xe85iYA6fHb41feP42JB+Y2P8AI1C8soMPY19+5qx6x0H6/HyqJ4txgazr5VyHXOpSdRyCf9I4XvvpTokXRMMXWoi3FGxmMplYuNcYJbVnY7KoJPyHTzq18p+ze5dAu4gmzZ0IX/msOmh0RfNtfBetX2ybOHTJZQIOpHvN/mY6sfU1Whw7WL6l/wARsbAtsZ1O/sqLwvkC4QDfcWh+BYd/iZyj/qqVHAMImgt5z+J2LH5CF+lLcR4kTUPdv1qRYDByvC+s/wCI/U81xDXlo+Bsu4rwHD3BGTJ4FNIPpt8xVY4hyPdXW2RdHh7r/ImD8D8KsD3jU3wm9mFOmxGEWmdD/wAQeq4Dq16mnw7dOvZRiHNg23BDWXKQQQQpGZRr4SR6AVcBUBg8YV9KnMNeDCR8uorr+kZbXRCMncIZvVG587pgKJ3pHFdQ0IrZUCKKA0YV1JCkUigIo8UEU4FNIRIoKMRXRRKAWJezLgzZnvSwCoVt6DNmZSScp6BSZ9a7mTij2lVIzOCVRw8nsj7hYdYjQHznUVLeyrj6pg79wk57ZX3tWZXQoqgQeu+2lMuGYPtVzXCHzEGYEgjKAPNRJBAO3hXlPSonOlIaPcf9l2XVXtjYNXA/3VNu8GLFoBDjvBvEoczAHQaq2YddKvgQW0Gg70lfRpIIUfeEkdBrTnhfBpQfdIKmB/DKsCehI0PjpSXMzBFgkhQNET3mGh7zf8tQPCDFeh4WD9LCXu5pcJmZwy5hG3i1ROZsP3wSRPvwQJgT91SQoOndOo1J6VK8Dxz2ct1dGBJExlII1U6g6jTf9ar1lSQWkDOwVYUiF30J1MbHfeTUlzgcllV6abeDCPn1rznqUgyMj916V0uHs42/wtH5Y4i+7JmZm+zLHO8kwCFzHs1twTDGNfEVZ/3XNmZNgQQYINwL7z9SZPnG/hVG9n1luxXMwAMEsohrijuhbjjQHN3TpniQN60y3e7OyF0zQqeeug8wqgGBv9a5/wBWYZgDSByArXScgTg/YqncS4cCzgEb5m1KxbYZsukzLAjQUhwp2tvDALauNARVykA7OEiQJGhzGdfGKl8bZm6JmY7Nx0gMSjECI7wjXxpbjWDzpmEsVloPSAdZ1MiQBOm46zW50ieabAbNF+qNYudFEzIdFL+l44SV62QSD0/v5Ea02xdjMIO2k+gIMfGKeYS7nSeqwPVdOv8ACxj0I8KArXr/AEXqLOqYYkPPBHwV491nBf0vMLBxyPws74twvLmYjQgn0/CDp952mPBasXLN6GQTmOVVbUgDRSGkajU5fKamMdgwwg/2aj+HYHLcY9GknzkiR8hNY2f6aDzTOCb/AAt3p/qfSLfyB/Kn+IAZjAI8iIPxpCKMWnUma6K7HHj7cbWnwFxWXMJZXPHkoKECurqnVZdQUYV0UUrRaGKGhikkixXRQxQxSQtFrqGKGKSSCgo0UFJJBFdQxXRQStBFdQ1wFJJBFdFDFdFJK0FdFGiuiklaCuoYoYpIWixXAUNDFJJBFdFDFDSQQCuihrhQSQUNDFCBSSRQKGhiuigkgFDFGAoyrTSUQLRQKVtLQEUraNRkqaNu6ELR1WupUVESrjGoFWjiuWjKKYSrDQuFCVoVFHyU0lSgIoo6ijKlGC00lSNCACjKKHLRlSm2pWhAFrmFHC0F0UwlTNaoriJrS/2bcJ3cRc/E6J/sUn/66zHijaVuHsIwWTBIetxnf5sVH0UVznW5Kir5K6303Dc9/AV9qD5+uZcJiW8MPePhtbY71OVQv2gsRl4VjSDGawyT/wDMISPjmj41x8rtLSV3y8TW7BGHB6ucxnooECPWou3e6joIq+cJtJ2b5lzkJlXTuqAN/L1rOcvegbTXJCUPJpVnspSVtoH1+Iqw8s4ovdD3Ne0JV/Rljr4VX8QmlWnlzAjL3tgCfjFUnTaK/KEYs0pngd3NYa3Em2Svw1g/1qj4yypkE5WUwPCpjkDHlcQVJhXPXbfSpH2n8tm04Mg5tYHn4VdcbpymjrcJDlHh9u8r23nNE2yPxDx9dKuvKllGt9ncYrdtkj0ce6Y+n/esx5P4y1i8r/hIkeImvQ97g+Hu2hiLer3CCVGradPEQfWqmVMYWknhTRN1LReVrhTCoxhmgSVHXasc9tt9y4FxQAXXIoOrev8Ac1pXIjOFa3mVwCMoG6iJj4Uw9r/J/a2jfLkuuXKAJAHUDqDWZgk5Lg4Xpb4/5ViZvt2VZxmK7yBlXVRodwKecZ4MiWTc1JulQD4Rtr5b1Dc18KzXbRAM5BBnTSN60PieDm3h7Z7wA28wOtdC9txkkccKpkDZYb7VuGycNBmTHnHnUhxvCdrhSqJqsZiT6bedX7nXgCstvQkq0wBUPx3h/wBm6KG2k7gaeQ6TvXEZs/8AXZEBuCqrI7cs7XlaDJMALv5x47VaOH4dWw4XMBliZ3mopcazWQiKxcnKdKs/s54OnajORKJmZW11PiPKtTthjm9wq45rWcBBy1j8PbLLdzmSCubMLfqN6zP27cfa66KuY2l2IJyz5D5V6JTg1u8rNeKqhEBVhY0gGTrXn72mcHGFfLbcOhkge9GuxOx8a1I5DpDq2VZ+QWDSBsqnwvhhe0cQrAG2QCvWrdzAvb4cMSSbeon0qFwHErQQrlylipY9NN/WR0rYMRwLCNhhcw+IV9BntkiToOmhUg9IqpLHI5+sDg/2UeOQX2qd7LuAtesPlA7neMyJ6x8aq4Q3sQinVUO3QQfyrbfZbgMmHvkHx90aju1n2O4O1lkaABcBhl133J8Ke7God1vJSzG6X7K1vjsgW0jBu7OSdJ8+kCqh7S+HN+7po0s3eYe7r0HhSXM/Ntq0MlqGulYJI2HiT5+FI8Q5kvYmyiFUtWrYknqxHXrTWtdC0OdufH2UMfklL+xFmwa4i8QT3rSgDQgMW1k6AeOoqF9oONL3WuZfeuFUUbLC90jvEZCTOsbfK6cjcaQYLGXDlYrkTqJZwwUyAfdJzfCqLzZgDbxFy2t0tlNtmdYgjIMwkxmKzGmm4jWrbXvcAXLbxT/SCruFwpRj2y5yZADNAVjrMwBqQSInbapTh6IIkNr3+6RprAG2UQfGNKa8Vve7MLLQEzHczLMZOQzBjUUnwrF5WJGY5gwbNKjXwYRJn3ZO5IqflX4iBsFoHLr6sILC4p96AELMMrKR90wNqccHfLeD3fcz3O0DAZSp7oyggSJgkdINQ/AOHEZRPaKSOyuKVPugkoR0JGuU9fpdOYeFFrLeGQ5SdYDEQc28id/A1E80pJgDE78LPOYuOrbc2pD2pJVhoYJOk7SB4VZeUcQUUvbUXLbiAhMsJ8R0rPeY+XL1l1V1lYDBl7yt/Kr/AOz/AAhKsSxsqcpCkQWj8NFsAc4GlxIHuWjcg4OwZS/ayOTmV47vkCwA1B6eVT/ErRuiVCt2bAad2QNJIqA41xe6qIzKHQAaIMxMTBb18vHepfljma3de2nZsouAl3giI2BJAA8NzV2V0LKYeSrrCOFG83cy9kGTN07wMnXw+H8qpHL3MJuXxowhDGvTqY6eVTntu5mtKvYW0UvmjtBrqRAE7k+Jqh8mWSMcLTuCwty8aamND+VYUGHeSZHHVXBSgJM4U7zRhLBHdPfIJkbg065T4U7hciln3LTAgH7x2GlK4floNigoGWZLE/dTqQPLb1rRHxdnDW4UBUWcqfec9SxOpJ6k6Dz0A2ixpOt5oBaGe8NcEtgLFq0BevkCJCmJLGPdtj/6j9BWP+1D2iqbgW67QoBWxYYFVBM/aMRq5G+nyFPuLc83Ljm5AJQ7LAVF8F1EDxO561kHHMYhZnyLmZixY6zOogE6RWfLmfWPMdHR/usR+TqOy0Xi/Ptt7SZO6A0qoADLGomJjWOlany9aOJFtrUradVc66kye6d8pU90g7QfKfKXAOC3sVdKIQAO89xjlS2kgZmIBMSQAFBJJ0BrUfZ9wFrdzEWmxRtm2B31Lqlwgd1QNCwzEEmcwAGmpFPwsVuECI978KSGFz/ceFsvPvN62EWwpViWtLehgIV3VCgGkmNTGwHidD8+c2oFNtGSGkZRARVHiekgQBWSe0vg1pMFexFw9peyWAjoO5bcXEEINCWOslp16VU+K492YFpZi2YFYgoQSFOpAkTp5z1Ezydytb+T/YLZwmtVt5+xlq9lGpYGZXQKxAgDNprBBmR10nWhY64dc4NxVdsrlipGYE5RGjGe8Y1kE+NJ4zEbyQQQWGpkzsBEiV+VR2C5hbN2QaLYDZtFkNljPlIjumIiJOvSnQ25X3kI+YPFtSg7ge64YgtlLSZIPeAMQNzprRE4u/ZuNZLq2YHcDNlJERAU7jU6U74Nw4dmWYEyjMpIWVUEqFP3gCTr1IjxppwLgrXVIUzlbUExEKZBO522FSSuDW+7hU8g/wBMqCKvdaNWZiFUakknQAeZ2AFbLi/ZLGGW25Np0AuOSGIzPugEATFWj2Ccv4PDs+JuHNcshQkroLjzmyyNXAgCdpNWH2m8+hkyW0VrlwyF3dmGiLA95ienSqsoMsIdE6j4CymNAH3XnfnbgiJYuxlGVcogZWkNMNG8gT61D8q3uzfANlFzNnzBkLKua66S0EE5RBEHSK1hPZKbih8bfKGGLWbOXukz79x8ylhsQiEDoxqH4lypBt/u93u2BbQrcISVzs8tcUAdpm8lkka6VaxJA1mh5srThxZGsspE4/E4bEB3ZLz23J9xYKHwJE6rselXLnEvfe3i7FsWxbtw40DXF94ggb5RqDpvTDm/ga3kfF2yQluyrXhcJUlhAVbZy5WZtBGmsnrVH4X7UL9q32S27Jt+DKxb/dI1+FZ+RjzdwOiofnyFkuY9jiHJp7Y8f+8DBohzZmd26lJKjvETAGvpFWN+aRiE7G3bFuygUXO9mLMkKIB0UHQmN9dTNULBccthi5VkadCAGVQdSAIBA+dN8Wjhjcw5Lo2rKCIDHpGhjwkSK0O33A1rhxwlZ4Xsn9kXh4XBXbgH+LiHPwRUQfUNW0Vnn7OPDzb4VhAylWa2bjA7g3Wa5r8GFaHXUY7dMYCvMFBVv2nvGCxH/wAph89P1rBuCptW0e2rE5cFcH4yifNwT9Aax/g6bV0PTB7SfusnqJ9wU9hVpeKJhxSprZCySiVxFHopFFBEigo5FARSQRK6jRQRSQRIoCKNQoKDnBosp8cZkcGt5KbYu/kXN8vXx+FVu5xUTqdT8SfQbmkOc+JFnW2m7aDy65j6AEmnXCeHhYCAsx0zbs38h5DQV496m9Q68kMG+9AL3bonSo+lYGpw9xFlMuKcYJEAAdILAH+nxqG5fwd65e0tuQJOgLA9BBErufHpV/5d5BzENiCT1FtTt/ncb+i/PpV6S2lpQiKEUTCqIA/v61oOwI9AIO9LksX1/lMLw+NoG9fKzbEctYgj3Av+Z1H6moXiPKmJ6C1/+U//AHa1bE36g+IYio24LVWm/wARMxn6GtCyXinLmMG1tG/y3F/Uiqpxazibc57FxQOuUkfNZH1racZjah8TxkDrU7MAeFCz/FXLYf6jWlYinFJYTsNSD5dPnRW4nJnxrTOL4izdYi5bR+7uRDe90YQ31qp8V5MsnW1ca2fwt31+ejD45qecFwXS9N/xRw5zUw0n+Qqtj7YbUaN/eh8vOosGZB0PXxH9+NS2P4Ffta5c6j71s5hHmPeHqQKYqwfrDdP5HxFdD0jrL8b+jPuw7b+FX6/0XC6yz6rBc3uDfbytj9n/ABrtrIJMuncfzI2b/UNfWfCrLg10I8GP11/Wsk9ll64MQFRS2fuXFHQdH10hT1PQnxrYcVw24JUFQ1zNk1MAquswPQ6V57130dMeoE4zbjcQ4EcC1lYfVQzH0z7PbsR+Fg/NuLz37z9M5APkndH5Uw4Zh9c7fLy6D1O58ql+ZOVb1hvtl+zGude8jnwn4EwwBPhSfCODviDPuWhqXMAfM6AnzPwO1ekdUyDHjx4UPAaAU70vjY2MZOqZbhydIKDtbl9wlsFmPyA8SdgPX/vrvI/s+tYQC9iCLl/cKR3UPkp6/wATCfIVXeF8w4XBJFgB7vW6fdU+KAjMzfxsAfAKNBFYjjmJxBJCu0/e2X/cYFZWJ0t7uAsD1N67nzCY8fZq0jjnMgJOoAOmvh4+tUbiXGx47VH/APA7p991HiBLH9BXcT4IiESSxKqxkxqROw/nXSYvp+d3il5blNkmJdIUhf4qKZPxOlXsL0Ufn+dJN8PkK2GemJPLgqTY4wh/fJp/y7xKHgnQ/nURcP8AcU1uDXQkHxHSmTemJAPa4FTMha5aHxPiyIoJIk9NJ+VMeH83qGkaeuxHgaomQiSSW8T1+P8ASm120Dqu/lXOuxpcR/vBCvuxWMcNDr25XoXh2MW4odTIP0PUHzFOYrKvY3xw9o1lj7wkf51Gv+5f/aK1Va6vGmEjA4LQZxRQxXUIoRU6cixQRRstdFK0KRSKCKOVrookoUsH5p4aLUW0uZpC3Dl0WQs5AQO8REz57a1L+zzD5rUCcoJInoSoEeh8vKlBwjtYcgLLZgQTEwQF8ACFUADzq0ct8GFpY8TMeGmw0/uK4/0zhOdN3q9q1vVeawQmK/clBYCg9J1P6is19pV3MDb1hoIVd2kjvXDJCIOi7nTaBWr4m1odJ9T1/pWd47AZ7ygkxm7RtwbmUgSc0gW1JgfiOgBrrOuy9vFcVx3p2PXli1BcR4f9pYswVNtFbKT954MDwGXLHlr1pvzEma4wH3FSQT3gI95Yn3G300U/ES/CCHuXb07scpP8MBAIiNABULxO2wxLlZBz+9uUIU5vUdSp3XbY15Zh1LkDZew5Q7OIVonKFwlBlhGEM/dk5hJBjYgkyGA9dd7PxfjWUJaRYztD3JzMWOjPExICmWOgJyroCarXKDZl1AVlEED5hkP/AKbbjw1HSrDhcCuZXOgQF2UiRlUd0Exr3jME/wAq6j1f02OXp/drcBcL6W6lIzPdAeCUOEsfb5ljVSCsFjuYzHXXYg+nhT3FCUf+IDQddZK/E6E+tIcil2DNc97MxykQyiQZ8tNgdvjRsHentlmclxgPGG7w18iD6Vw/oPM05T8V/DhX7ro/V+ITAMhnLTf7JlgnKXDmEKHa1pqGBbw8IzAH+GnGOw+ViN42PiOh+IqQ/dCwYjdVR1PmpJ38yTSXNF9UVWY7MLRaNNpUsdvETr0rtej5TejdTdiPPtfuPsVyPWcQ9V6c3JYPc3n7hRN1t/GJiQCQPAE6/CklcQGBBBAII21E/OkeNcLRxmIBMCGHvCDIKt0OmlUfGcXfDsuYkoGysD94SWS4R/EpKmOoNdj1Lq78Mh7qLSuS6d0iLKYWgkPC0BroG5FdYvgiQdKo3NHFyRaZD3bixvsy91l/6pJ8qecFxN24cqpCjqZVYEADq2oBMQKqYvquOeftNHKnyfTD4Yi8uVzFdSWDtkCG39ZFLRXXNdYtck9uk0grqGKGKcmIIrqGupILorqGuikkgiuoYropJIIoKNFdSQRYrhRoropJItCK6KGgkurq6hpJItDQigikkgrqEChikki11GiuikkgihiuIoYoWkgoYoQKEChaSLFDFHC1wWhqRDSiUKCj5KFUptohhQAUYCjBKURaYXKdsZRY0o6LRhbpXs6YXKw2NFUUoKItulUFRkqywIFFKJXZaOi00lTNCFUo1AopRRUanARRRgtGWj00lSNaihaOorhRlFAlSgIAtJ36XWm+KNRuKmYFBcXavT3KeA7Kxat75LaKT4kKAT8TXmnCWM960h2e7bU+hcA16oQaVyXW3+5rV3XpqP2ucjVj/wC1ljCuAW2NTdv21I/hXNcP1QVr9YL+2DdKpgjlzJ2twMAdQSgymPAa+lcxl/8ASK6oLOOW8HbGCus/4W8unw9Kxq9hSpAIjr8DXoc8vZ8MLK/8wrrvpoSTWQ8w8HZcQyFgxU5fIAVx7gYgbTJq4UXgsIWK+eseQqaxtwrbJHhEetS/J/AXvvcZBCoAs9B8fE1Hc5WOysgEiWNUYXCSWvhPjhOnUqYtwzI0KkfSt1tYa3j8IIYC8i65tyQPDrWPcJ4WLlu4wOqgEfrUlwK7csql5Zg6TPUeNbBYTFsFC32usquYm+UuZXGoMER4VuHsP40q3QG1BkKOgJ/KqLzHhVvqbmWHgHQb+JpHkDHG3cUmdGANZeW90kBFbhTN2dYXpbgvCDZv3bv/AC7msDx128o0q19n2mHy5hsTr/fwqsrx0fu4JIiNJ310HyqQt27hRYH3ZAGnzrHwstzHaYwXDz9ledVLO+cr6NdtEuyhB0EKTtBNWbkfH9rmlvd0UeXT51Ec+4iwFCvGbu93brvUTwbHLbvtbDjXK+mhANdg+6/4VWY21aphrBI1QEzofPxpzxbhaLbaYzEakDU0w4e7r3dwRIJMTR8fi3g5lMbaGagkixsUGZzLNfCqNJullnH1XCrcdmXM3eSI+VVn2A4zt8XiLtx4ygd3xMk/IeFR/tvxMjUMImJnfw+HlUd+zPiJuXDCzMyRI9PnrVWCWOSPvOFD7rQkrtL0za4NadC13Mqk6BzA+U158/aD4Fh57TD3BIkFQSQfTwjyMVu1vipYi44Q5CQE3+Op3qs+1Hmm3At5LbSJymC3noAfhRflwOi1R1sf5WVKBS8h9v3Sp3ruB8UNu4pkiD0PQ1pPGeTziCXS32KbS3dE/lWWcwcFe05SQ0HddRT8aZkwrhV2bOBWpYrn18LYvFJIurk16EjcfOnHsc9pNs4W5YvLmZR9mTLEg6wNNIPXTeobjPAhewLQDmVQw9RrV3/ZZ5bw9rCXL18KXukr3h7qjYeh3PwqeCJj4i297WjmN9wP2TDhfIQuXEv4oRYuST2cyJPdDn7o/ka0q77NcFc7RbGaOzEFWJCehzaz51KWsOtrDi0bqOrMSDpKo090DqFGnhUNx5zggHtGbLAZjIBBjSI6eIq0yBrGgEWFUsAKpYXgB4fhb1u4R9vdAtypYMChVS0e7lJJkT41ld+yzg3AhK9qQwJBJY7zMGCBproZr0LzRcXGYLtEJSAQWiYIQysbazE9KwHnIFXW0CQiBAxEa3N2ZsphiST3vAaaVSmAEi2sau2EjisoBfZYKjukBjEZp21j3hrIPgaPwfF92HBbKcgOVjGkCGHSfiN9ZqV41ZudhZtns1DFmVV0PeYAZyRuAxI8BRWUW37IFXAQEkAZUcfeBUzr0Y7+Apg2CvMG6meUcG/YZiubK5AklSQF1Kzo2XcHerpw/Fk2L/WCw7wykarEjY+QHWabWeA3UwydoV7JnVwBqbZYbaAdwgid4NE5xQrgr7AmWtgrsSO+D06x18CKjeLICfLXad+ClMBzkMNYuLdtqzj3ZIJIM6a7gj5D0qmcV5wu3LSK1sKobuuuhA6ACs/hswe4zExpP0q+cuYkXLeVoEQQDsY/vpWlr0toLiuTS0X2Li5eW7ZKZlBDB2JnLvlHgSdqs/NHFzhsKQMouMWBU7gHcnbUDwqI4ZzVh8EbVy2rFGQjERIGYQQdgM0yN9R6VmntO52tYm+zW8ypAIDH3miCY6TVHLi21N/Vx+yncdLa8ppzBw/tdVuQfenrPlNMfZjgriY1btwsQZ1PWCImnuNtr2dlgQyvplB1BP1NavxHlsC1bKrEJoaqYoliOhTdPZb7KTt88Zb92LdvM4VFuNtbgmS2moO/wG9HwXA+2hjezXLgnu5Hza6hQGJAHhA9Kh+XeXf3tmtKmXQ53OoVdsxHU+A6mr5exOD4RZyWVFzE5NB/zG/iuED7O3P3RE9JMmrwibILmPtCs9UhGu1l3te5abDEG5dS3YcnKf8AmsQoleyX3iPEsFGk1k7YOyxOVb9wfiJS0B/03Y+LVpmOwRxl038Uz3LhIy21WEVd4CzIQdB1Mkkk1U/a5xRZSxaKm0hzQgykE6BWA0DACSBMTEmqMWRE6TRANvlY/bBNhdybymjqbqC4pVgpRnXvEjNp3VLKABOms71eeEcDzQVB3AMRv/CP1qQ9ieDs3cKW3cXX7Vm1yiBAHlkg/wC47CoPnvnrDorWcPc7R3IVb1uMiH8KsYknRS6khRMEnbRDC0ajypmRFxrwmv7RPEhbwIsjKTcuqwSe8EtHMxI6d4KPjTT2bNaNsBhmUBO6yiSwWQ0kagSdQdRFU32jcVtOEt3beUvm+2GrWmHdYwCc9stqQxzbkNUlyHjgLYDHuhco3Pfy6OBoYjrPXbwizQ+XFHg7rYx4tDaCv3P/ABGy+GudxF7O39myqFIIMgArrqdCJ1rBOJ4oGPdmBsDDTqZPjP0raOH4NWDhlYpCsYAIZW0zAsNYJEaQDr0rPfaRgjbVMyW4ZnZXWAzCQAHVVAldyDOhGtR9IxnQx+8lSsceFDYTEt12BywDmB36bxrpsOtbh7NVsYfBXL9xFe72pyl1y6IOnjJJJgTIrJ+RsJmdnOqK0A5TOaRGXzUeJMCT41tXMXK9m3h8GL1yC9s3Li9Bml1geLTlkyTB8Klz4nujOnjz+FHluqOlmmL9quILNkVArOWKBZ1OmaN5jxNTnsuvRfuYi6SMi/ZG4CIuXtM0nSAoaI2kHwqU4VzPgku3bT4dBbuMoQgd45F2I31balue+GxhLbEMXlGKZcuW3sskbFTEyepqQQARexZ2BXeGpOOa+YFcwCJyhj8Okazm0O4qlcP4jmGIgE922DrAksddZ1HhrVRGPdrbHNBmIMkwPu+nh69OqPBsSy4S++Yd68qyRJgKzECfGenWquPiusuJ3XSvktehOXL/AO9cJxOGUFmtMezDCS8EXlURAJJzKOmo8KyPnngeHFm1ew7RmhXtHcPAkwCShzSCraSNxMDYfYHg8mDD5u9d+1I6BYyoB4GBJHiaz326cKtLczKpVmOYlBAclmlnA2O2vXzrRli9rSSsjJj1HUFj2OtEaMpB+tI8HLi6i2zrcZUyn3WzEABh6kVbeT+WmxOIysTkGtzyA003gnTWrfyv7PAnFMEEfNb/AHq0SG96EbOR4MDl8BvU0LCSPhVGtvde3OAYEWrNq2NrdtEH+hQv6U+oq0NdGNgrKzL9oDEns7CdGuFj/oXT6tVB4Sm1XH2/k58N4Rd+fcqqcJWug6eKjCws43Ipe0KPQWxRq0ws4olAaPQRRtBFigIoxoCKSSJRTRzQEUUEQimHG8TlQ+en6n+Xxp+aqPtGx2UJ6E/oPyrH67OYsVxHJ2XU+jsNuR1FgdwN/wCEw4Hw9r2KBEaWj12lgCfka1HhHClQQNSd26n08B5VWuQeEdkmZv8AEuauT90dEHp18T6CrpgzNeewdLi1994t338LW9WeqHZWQ7GgPsbtt5pPbTACq/xPiIzgeJj6U/47jAiEk1kPE+ZB2ya/fXr4mI+tbDIi/hed5+eIaatHxeJ0qncw8YCzrTrjvFCNFBZjso1J+H61SeIcu4i9q7LbH4fePxjT61ewunPlPCzsmZ7xTAmvFeZB0NVvGcbJq1WeTUX3izx4mAfgv86X/wCD212RR/pH5mTXT4/QD5KznY7zu5Z8ccSdNdDtJ8DSNzFP4N8jV14lctj1HmfyqD4nilOqgDoVA1ny8j4Vpj09GBb3UE1o3posqEtcVujUE/EH+VJYvFq+r2wT+NQVb5gQfiDV14H7OsXfhiosIfvXZVj6IO+f9QUHxq6cJ9k+HXW41y83WSbafBU73zc1x3XM/ouCC18uo/Dd12/Q+j9UcQ+G2fe6Ud7IrdtsLlWQy3GOYiHV9ChPiANPPWrVexhzWtIebqEfx5I08tyPIilLfDrGHEpbRATrA1YjbfUn1qvYrinaXYVApOY22+92mWAWMxBAKwI3qn0b1XiZNRsa4DgErqsr0pnmJ+Q4g0LKm8Xg1uns2hrQMXJ1ztGidZy+8SOsDxrL+HcoYq6O+l0oCQqIhUQDAYFgFAMaaTFXHB8auL3XlQCINoZSpO5jZvmD51Z8Jxi+FBW4LtvYE94A/hMgMrfwnXwkVo9W6hLiHWIdQ+VldG6bi9YZ2xN7h/oOyomC5Jup7mD1/FcZGb/qfT4AUvieBY472oHgGtj65jWg4fmX8aa+K/yP86lMLxS22zQfA6fnXLu/xA6jF+iFlfZb7/QELR7tX7LG8RwDF/8ApE+jof8A66Q43wPE5tbF0wAohS3uqBPdnwrcJXcgeXQ+v8qaXWHQkf5v5j+VSM/xWy461xtv44VN/wDh/ivFBzgvOmOVlMOrKfBgVP1imjNXonHXjEMJB8YZT85BqrcW5dw1ze0qnxt/Zn/phfmproMD/F3FedORGW/cbrJyf8MJwLgeD+Vi156bq2o9aufMvIbLLWXzj8DwH+DaK3xyfGqK0q4VgVYHVWEEeoNeidM9QYfUW6sd4P28rj8/0/l4BImYR9/CeOtNLtmDK6H6H1/nUtbsSJphiBWpk4kWQzTILWNDKQdkhw7Fsl7ONGBDDyIj5j869A8LxguIlxdnUH08R8DI+FedbtzWta9j/Ec1t7ZPuMGH+V9/kwn/AFVyoxTiSmPweFotfblehQ0C0YVaU66hrorqSNIIoIo0V0UigqrwTg4TDpbbUp3SJPQztHjpPrT8LS5WgyVL07DbiRCMFc/1TLdmTdwikhdGh0nSs0xydiz3zPakFVA2t5hCRlgT3ttdvWdVVKpnMWDDXEt75nNxvMLEGCNZJgeQHnWf6jaH4brWh6YBbnNHyqrxHD5LdqwDDO6DTY7bn161H8SsquJua9x2JOmiXF0kGem5/hYztU3x5ct+0SuYyO62sKWlSsbHQ77EiofhuHLXrkg5Wdrm+oOYrmUz0G4PnXE9DwHCUWvQPUGc3sbcLQ+WMEBbQ9QI9PEek9Dsam1uQIIlZDEad6IhT5GNRTfgo7gMROumlOuzr0qbGjlgMbxYpeSQZUsWQJIzvaf8tcNypcJPeZjcM7e7MdJmfkKqHKOK/wDM4lDPfLR4SMp26Hp5/Or9+9wl1CJbPlDQdyo28YCkepql8v8ACsuNxFydMzDUbnumJ8RMn0GteG4XT5cfqpcwbB+38r27KmZP0+nnlu/8J5xbHMmTKAZdcxbUQOkASQfCu5iu9pg3JXKsWyVOmquFJPhv8fjT+7bo3D8Nh3S7autpk7yg98zAQAeoB0M123qzpEYczOJ3aRa4H031Nzg7DA5BpZ9yjitHw7SxXNlnSVG4B/h3HlVR5uwnvpDSveGbeAfdkaFQZII6VoHOWBth7ZssO0UABZJYjKSQWkQxkCN5I3rPsThyrFCTBlsrQSsypWV2I0kGNtqzeqdXZk4Ya08KxjdLdj5JefKacn4Q3HGaSlubjL4jTT/U0Cta4LhiqktlJYzIgnXWCRpptpoPOsy5Xfs7YA1a4xieoXRR46sdtjHSK17hjMU+0gMYKoABlWNIA8/Gl6NnYMslw/BVb1LE5+NTSmzGgBqI5r4wLTC3pnMZtRNsHYmYGdvugnz2AmEwfMpQkOmUAwQBJ83ksc22temTdciY/Q3euSFwkPQZZI9Ttr4BVzFDTfAXc2oIZSJBGkjp4/8AeafdlWrBkNlYHhZGTiPhkLD4SVdSvY1xtVPqCrmNwSYrqP2dFilaaQQi10UaK6KNoIoFcKNFDFK0ESK6KMBXRSStFiuAo0V0UrSQEV0UaK6KCSLXAUaK6KVpIsUNGy0IShqRookV1KZKHsqGoI6CkqGlezoyWqGtERlJBaOqUotqlkSoy9TshtIdnQotOQtd2dM1qcQ/CQyUfs6VC0YrQLk8RBJIlCEpZEo+SmFymbEk0Sj5aMq0YJTSVM1iJko6ijBaOFppcpAxJqtGVaPFGAoWpA1Fy0YUIFGC021KGrlFCorgKMoppKeAuUUZRXKKOoppKkAQRTPF0+NMccajedlMwboeQ7WbHYcaaXM3+1Wb9K9KivPvsbwZfHK0aW0difCRkHx735+Fegq4zq77m/Zehen4y2Cz8oa80ftjcx5L+EtBc2RLt1/IXCqLp6K+9elSa8Hc4cXPEcRexDEpdZygA0VUQlba667AT/FJjWudzXDRp+VuPdQWweyfjAS0WaT3dOpgis84jgDdu3HSPeZj45ZplwzmVrGFKGRcDFZI0IPnWm+yW7hzhmY/4jyGldNdo8gf1riuv5RgiBaCUoGd00VP+xDgo/crugAuFoLCOkaH9awv2p4HI2TQ69DPxr1dwC4LeHFsqIVY0/ka8p804VWxuUk5SWOvqYFUenZMclOYfG61REWt0lVXgd5hnCjcfCKe8O4qYa3ErrCjxrTPZR7NlvNcLsRbBMRoSZjr0q5cO9lduxiUYHOgUyCJE7Sa1B1EbNHnZZxgdysT5Pxxc5BIbUa+FWDDYYK5t5FOeCG8PM1N868nLh7vaW1i2WMkbAnoD4HwqLW4AGI9QTqfKqmRntYdNbpocG7FapwHhrqiZ+9ngDwWPWtN5eQFmJb3VUekgk1lnsc4u2LstmOtkx4bDQekVccNxAKLz5hGvkNBFQYEwxJbe3Zx2VlxBGyzj2q8Cd78qAQRAJO2v0rJeLYk2uIsDI7igiekb1rXNdp3ua3cpIUgCNPT+xWQ80YT/wDmTqXn7NTM+W1dBqBJcAq+R+kL0Dy3zBnwS3BL5NGjeBoanOE8w2GCzJz7SdZHSJ3rC/2Z+Ys/b4RzpLFR18DUrz5wdk+2tgt2bHOAdRHXy86mmL9Idz8hQE7Wrn+0Ly6b2F+ztgkQcyiWAHkKqvsj5WOGw5JYB3Ob6fOR61O8gc/G6MtwrBiM2hPQ/GpriONwwkNCg6CTp5xXK+pJQYA2I0CdwFOJy5lKucdsC9lAvFMs5ypI/s1EjmHD4XMbdvtbiqJuPrI8cx1+AqT4Hy4bd3tS/aWdSFHujqAxOnwqvcb4UcZf+zTKmxadAevy8BoKp9Ix5GvaOQs+TZV/mjmm9ibcgrZQySBMsf78Kk/Y/Ysdg4uoCxlsxAk+G+4npU3xb2eWrYQJcDtMQTMn06RTXjfDuwA1VQAQY3MVvZE5Y8MDd1FqIO6h7OIi3diAozCPCo1eIs+HW3aTKBCkgwMx8accpRc7RZABNUvmsXrV0YfMVXNIYaGCd/hU8cbt1eyZNcbVXeK8yXsPeym4SU/iJHjttU2/tMuYhFtEmM0nU/3FU/2h8AC4hltObggEtvqRrqN6b8D4UymY9K1S1hjBB3VE0BS9aeylC/C7wHfBu3ZBjYIpkajYifWspx+F1OVQYYA7AnKD3tdiPGa1H9no3Bwq4yk5xeukaTsqEgT5AjfrWb8Yv5mMye8YX3hBnw1131rGzNQkA+y6Tp7QYQiYziQu2+wyquUghvxMoA1lYGYEAkbx5UPDsPbWYtp3cqHUlvORGo0gN008KC5dDOpZVgdzu6SygAmCIkjbqdPCnVjCQAQxbUlBmA7vuwToQwMd0yPrTgStJrQArzxfmjKoRBCEKhJBUBmBWVGoAABBnzHmKtzDiCuExMk93TadM6QJ2Zeo/rUtxu6eyZnUh7QAKicpIIaYOpVgCdtCp11NRPtIIfhl65b9w21jz+0QmRrqJiZqStTwCo5QO078LD+YOKzlXNrOnlUnwzjJ7szpG22lVjlqwqv9oM0jSalr90IY6HpWo9jWiguOeANlpGK9o8WDYKqbbyNRqJ8I/Wq6FslG7pOmhprhOC3AQ5UMh1if71qExXHSrMFBidvOqr4u5VFMolW/2N4BXxKh2MKZVdwYI6GvU3MDjKFzAACfQAV5w9gpR8RJENlJ/vwrQ+ceNlyF1B72k7gaCmvAa/daWBsP3Vi4Tzhbs2XXDr9s2r3GGuYExA6wNum5qq4DmazcNzOjtcygZ5jvBiSxiM0nTWqxyfxDMtwEENrJrYPZFyJZuYU37gF1rmdLe0JBIDQY72bWdY0qlLhOy/YCp+osuqWRc3cxfu6uTcJxDISqKZ7KdM1wjaBqFGs71jODxYBOY7yNfPxr0r7SuS8LhbS4e2iXcbjCLQe7q6hnGa6OiASEXKJJPWKr/tB5BsYS2tsYdbhygNcLblTOYsNZIBMDuwdjFWIcRmGwjn5WY2IFYZjeYLtmwbdt2i9BdVYhSBmC5gInc79IFN+BcaKAqyjQgMCJhmXQ+UeEadKm15YNxwzf4ah7j7jNaQnY+BjID4mqJgcQe0uFgTnzFh0BmQR6flNa0IZJHspo2lWvi1m1NpQrnNmDktMll0K6eJ36jTpVz9n/ABoW7dnMVIy5QCs9/VTMbFdIYDTes1v8Ui7byjMEMtpoPuzvpAHzq/ezbg630IJOjNBEblmy6NpG4kbzFQzxExgH/wB5WjG6uVuXKWNt3lRpZHHdyzGsaFc3vL5fSs39rQD6rDlGZWyvJAgDPlgRr4aSTtTvi117AIKI+oyvIGULtpEK0A7bxrOhrN+YMVrOYtmJJaNdehPUadPOqwedmqSKMDcLSOSmCWnGmitrrBEAd2d26Ex+UVnvtG9oVx0/d3nPbchWkmF1ygk9QCNRsIinHDOJ3LrLbkhQYAXYagkxroOm351WPbJfRr6FAFAAUkACcpiT5x1qzA4OkDCq2YQKCtv7PfCe1xHb3G7mHIYlti5By/KMxqz84e0Zr2Ks2bQFy2LjBhrF0GVYED7oH96VjFnnC5bQBCVtyZC6BjrvG8T41IchcZSw1zEE95EPZjxdzEfATVt0Ro7LNDCHagpvnDBC1mIYhQxUKdJHlrPlrS/DcW3/AA+6RbDRibcPEZQ9t1kEHcxOo8POqTzFzA195Py33/U1ovs84Wl3DXMORcFzElbltwGKo1i6AZAIBUo7EtrBgeNQNh0N9yvQzv8A9R8K/wDsq5uQWOxLZ2XMFloy2/enpIUyNgfKq/7U/aZc7W/aW2OzZUsi6yans9SwOUSCTpVy5U9k+Hw5V3JuMknM3dTXrkH/ANRNTHEcdYaLaReOvdABVY8TED51E8tIp3CqTZpIoBZh7AMU0Yp4LGF18Pe0/WtK9kWJN3imFzRvcYDrCWn1Hxqv8T5jw+HNxLaSxym4LS6Bj0YgADSpT9km2cTxa7f2t4bDkADYPdZVHxKrcqzC7U8NCfDLqAXr6K6KGk8Q8AnwBPyrcVtY17b8ZmxNu2P+Xbk+Rc/yUfOojhaaVBHiD37r3n9642Y+A6BR5KIA9KsvD0rpcVmlgC57JfqeSnyChijKK6rapohFFpSimjaFIkUWjmgiigimimjxRTRSSZqu8W4Ob2JtSPs7a9o/h3WOVfi3TwBqyEU6ww7p+P5Vkdaa10NH5VzD6o/A1Pj5LSP5THD4sTTy5xpbaySPL18PM+VUHifGhbBYnQCT/KpvlHg7EC7dntHEqvS0hGix+IiMx8dOmvA9a6rF0+MF/JNALM6JjzdQldXAskqM5sW5fnPcNtNwqat/qJ7qnyAb1qory3ba4tu1me5AZ2Z2y2lmQ75cslohbYgtvooJqe5k4qxfsLMG8dydVsr+N/P8Kbsd9N5rlvhK2LeVZJJLO7e9cc7sx6k+GwEAbV3Hp7HL4e7I3nhVDAHSku8JkMUyOQ0Eye8BEj9PSnb4wEVW+bcSVaenX+dNMLxYV2seGNILQo/rGscWFTeOu1TeYeMRoDtuZp7xriJgASSTAA1JJ0gDcknYDetA9nPs4FuL+JAa7uts6ra8C24a518F6SdaqdU6xj9Jh7kx38D5VnC6bN1OXRH+nyVR+TvZvexEXLpNm0dRI+0ceKqfdB/E/wAFIrUOCcu4XCj7K2ub/wBRu9cP+o6ifBco8qmeK46KQwmHgZm33A8PM+f5V4H171rn9Tkc1rtLPgL1vpHpjEwGA6bd8nlKI86vp4D+fhUfjOILrroOg+g+NR/MPEzsNSdBSFu2Avp18T1P6DyFcpiY31clu4H912EOIBRP8KA45jgxkn4eA8BURhbii4jAgw6nfwYfpTnjTiTVQ45iAoLeGtdZgsDJW6fBC61uI12M5vgtP+y0XmWwqkjTcjxqs4LipsuWUkzoyEdx18GHh4HcHUVceJYYOMw6975iaonHbcfOvfMOCOeINeLsL5Cz8Q4GU6WIkEOPH5V2bFo6C5bBIbSCdUYbo3n1BjvDUdQIPE5pk/0qp8F5g7FzmP2Twr9cv4bg80OvmuYdatt+/vO40PX4jxB3B6ivLvVPQv8ALpraPaeF9A+gfUY6ti0/9bdj/wCUa1zDct6TI8G1Hw6j4VLYHmRLmnut+E7/AAPX8/KqbiGk0zv25+Gx2IPiD41wmXhxZApw3+V6G7pcTxYFFaGcYRsdPDofUU3xENtofCdD6E7eh+dVPhnHyCEunfRbm0+AfwPg2x6xuZHF4uK52TCkgdpduFkZGL2jvsV2NxESDofA1HY3gC31zNAKz2bR3p/VPL5RTnDfaGGnKOo3A8PMeXTpFTGIeBpEdI29P6VpYvUZenPbJjkgrLy8KLMjMUwsFZJxS1cQlGgR08fMeINPuO8oXrdhcQXtMjKpgMweX2UKygMR5MdjVq5jwQuDwI2PUf0PhUN7R+YQ6YbDrtZtg3BEfaEZQPMKokHrnNems/xDzJ2ROiNEH3j7LysegGRZbmP3Yf0n4WYYzESdKvXsXx8YgL+NHU/AZx/7aonFbMP/AJtfj1/n8ad8ocXNi+l0a5W1Hip0YesEx516hBkjqGOyYcndcT1Pp30k7ofgr00KMKTw90MAymVYBgfEESD8RSwppVIBcBXAUYVxFK0qQRQUeK6KRKVKNC6AzuJ1EaEnpRUcHYiobmnmAJaQEjMVyDxDQsfD3tfWqo3G8t09TnZd9GcxHwUDXpXOen/Ukc+JH3He4jdVOrdLdFO7QPatGIqi8KudtizdiUAyW28Ah1b/AFNJHqKHjPGWZezVu/cBEzso1dhEjbujzPlVh5T4aqWwQIlR0jQfz3+VaeTKMyZsDeBu5SdPYcOB2S7k7NVa9ouBbMLgJB/FpplkwPPQH5+NPeWeCCc+6sS8GNHO5GmqsCDVj43w0XUy+YInb4+op1gsKEUKNgI/StOPCjjk7jeVmT9Qlmi7TuLtEFqNhFCgjXwpzloHGhPgJ+VXdWyy9GncIUGs/eOcnw1D/XWmtjCANcIk5nzT4MUExVV45zYQCEAzaxsdh16COpbbzqAxXNFwhAbjZnZFPZGR3tdCR3nChfd0EmuTzZcbFl1htm96XXYk2Rl4/bJraha0u6NyelZri+YWtYg3rSm7d2UDu2kUlYYtpnYeegjrUg+NuKABeZsxWM2V0AfVc5IBGxU66Gg4ljmRJvW1ZNJ7PpOneRtOh2Y/WosvqmL1GLtSW38hVMTp+Rgy91lH8FZhxPipLhlzHIwdmmCzGS0akmNpGwHXq95ju5wuMTSSqXfWBDGNDPut5x40jx3Aq+fs1Zm2AYEOM0ljlMRAGUEf9pb2fcrXQro6t2Dg5WI0Mgd7qAA2XvCdfpxvVunjHbrbx/wu0wZ/qNiN1K8AupbvWwxttlRO6VJkN3miIhgWmdIEmpri3N4Q5LBX3mGZRKqWPuiZYkR72wHSormzEhMwsjM4ANy5kKsoYAFEjcwNT6+FVflTgzFhOYgy4aCpBAlRm8yY8DB1FZ3TDK4VHsSnZcDG7vVqW12ZKXNRcMq+VnzyPfDTLDxBEjfppbcFwS2QNAQPjrrO+uUz8Qaj7XLpNtrZBciLll2kFSE1jXTMw1XqdRuRVg5asRZTfbrMjy11gdPKvQfTOPNE8tmXH+onRPjDokGA4cqKFXYbfEkx6CnyW6Nloy13QIAoLiQyzZQ9mKI9kUYtRhQsolrTtSRazSHYU+ohWnh5CgfA0pstrekHtU+K1xt04SKu/HBGyYNboCtPDborWqeJFA7GKaRQhacLaoRap2tRiApsFrslO1tUdLNNMieMYlMjboSlPOyo7WKHdT/pEwCUdLdPUw9KCzTTKpG4h5KZLYpS3h6dKoo1sVGZCp24zU3/AHeh7Cni0GSmdwqf6cJmbVGW1Tjs6NFLWkIAmot0dUpcii5aWpHtAJPLXZaUy0JSlaOhJZaMFpSKOFoak4MSYShUUploVWmkp4YkwtHC0oFoQtAlSBiTCUIFHihihaeGIoWhUUfLQhabaeGImWjRRwtCFptp4aiBaECjqtCBQtODUUCjKKGKNFC08NRWFRfEmqTvGoXHySFG7EKPUmB9arzPoWrcEepwC1L2AcKi3cvEa3Gyj/Knh6sT8q1Co7lrhos2bdsRCKBp4xqfiZPxqRrhMiTuSFy9Nw4e1C1v2SWIaASdgCT8K8EcB46HxF8BV7O/euOgbu5c7lhlP3TBiK9z8343s8NfuRPZ2brx45UZo+MRXzhwxOhA6/I1gdVk06aT5nVS0zme8Ut3LbIWVmGRtypA8dvSK0z2F3mW32V20cpClGI+U+BnaqeLAuWFDHTIGVgdSw8a0PlDnpXsRADquUAiSCBuOutcf1nPka0dttg7FTYzGl1krS7+Gt5GDhto36eRrynxNbP7+ApYrnIk+M9a1PiHPjujKwy3kBBH3XHQif0rF+G3y2NtkwNSSKp9Ja7S8aa2/lajZQSKXrL2X8OtqhYTqevQHyqfxXD9ZB3mqhyjzAoQyQIgHzIFNOO+0kSEtqSZg+AmtnpkTOyA8b2m5AIN+EPPttRg7ytGgJBPjWL4bhj9kHIIBWV8x4+nnWx80cvvewr6nMyyPCqzx6zcuPbwwyjs7IiDuNj8BGnrWf1nGez+oeNlmSgO4VD9h3NBtYi7a2W4DPhI+mx/KrPzRiDl0kAtlIn3gTuazTH8MbD3hJgh5Knw/rUnxnFXbzAhWFswB4Ejw9KqTxGZ0bwfaEdVMorS+buDBriN2gWUURMQBH51iftXIs8SJUz9mpnfoRWrc+8Kg2SoYk21EzsdNayb2tcOjF9T9mkk10rXhtghDI/SFXvZJx02cctyYBYqT5N/WK9G8jcwrcxGKRoI3I8RlE15VwlmCxHQ6VauT+Zmt3w5PvCG8+n8qsd6j9lVa+lqntV5KZMt/DS1pyNE1KsT0jp+VVDjmBvm6qXdMqgkSdB6+NaP7Dua86G0+q53CE7amR8ulQXtIwVxsTcVm1cqE/iWIAFZebEAQ5g/+kJB7bClOC82Pdw37vbQolsQ9zoRtA8SR1onLfMiolxF+6DB2AHiT60HMJXB4VLCEdrd089d2NZjxviTKyYdTBcgM3kdDTN43Naw71v+FUdISaVs5M7Ri+IOZlJOUzoIO/8AXxq28yXxiFVrhy20BgdSaX4ti0t4ZLFsKsqubTw1P/fzrPsbxF7jZV1QbeE0cCNkkpmO/wAJvCPwEhb1yPd0MDf1qS9o/Axesi8urJ9V6/Kh9lttWvXzc1gADT1qT4rxAWmZT/guSpA+6T+lXhIHSuYrsjf6LXLMsZyUbdlL2cTcgZQQTB6zv4+lWngvJyoFFxwCzLBiRr4+A+FRPInCjisWcLcdhbEkEdPwnXQVoFrl18Jci+Res6qjT3hG2YT9RUsU7Qe2/n+yqBu1rR8PhUsYC8FYKoV27ussQBM7yf51gePxRG8AnuiCfUMT+fjW0YfFC7wu/wBkuVYcayScrJmjSdY18Ky/mXk+5atrcYQrAHWSVYt3Q0xDR1GnSquW0ucCOAupwCAwKu8UujQZmkQ2hA1PT+u+hqKOLY75m6CAfUHWZHmDUlbuAnrufUsJjQ7aT5dKRtWGUsoBdffWSBA+6RB+EHTX1po4WjVqy2ONXnJZ3zZ1FrKNABAg6rtJJ8jPiadWAEw+IVpKoD3IIOhWAREGY6RrNQfB7BiCFuCSUJIzAQRlBHXSQsRpPlVo4rhW/dbpGjMhlgCS4lSDt0118vKoXWTulOB2nfhUDl7luxi3CZ+xuFiFnaANPU9Imovnz2fPhr3Z5xcygNmHWehHQ+VO+HcB93WC3eBGjCPyplxnity3cIeWmIY6kkbE69KmZK69LDa4YlTnJ/D1ukWnY22G86Db0/sVn/NgFq+6gggNEjYnxq4CwXVrix2qwdDEj+dR3COQcTjTcfD2+07MZrneEzrtO50Og1qzjs7bi4nYp0e6m/YrxEWbhcg6gRpO9aRzRYz4kRPdslojx8aN+zly6oeLigkAzmXVSI0M7EVfuK8JzXr9wEZYFsEeQ1HzqKJ3dc517WtXEFALDOS8ZBuJ97M0+FWv2Yc1XbGIjOBZAeUckLIBMqBsxgL8ah8Jwhbd26QdCTPjvVa5R4TcxfElw6khcxa4w+7aUS7esd0HxZafin+odKn6qCGNIT60mIxd9sY7Qtu5na6WhEVNQiGDJXTuidPWakcdz1e4kf3W3bVQxYtdJlAsxmA1ykiQNySYEb1Oe0PFrdZ8DhitrCYUTiXWPEfZJPvHNGY7u8kyEqTweCTAYB72gcqGAKgM1w6WrSxvEjT/ADGpWx6nkE2shriOFkxM4y7atgstuwbBDuQpZAJJPiXJhY3AAqB/4UL98Wi6Wg5e65gAAWxqAD77vGgnWZq28sck4gYa/exFlU7VkIu33Nt0M5i4T3ssmTmUHQGKqmM4Vb7RrolbFmVtZiM9xlgsxMKcrMZnwyiDTh7HnxQV2Nti1E2+CZ7txSR7irtHvREAjeNfGfhVg9mqNbXKwVraOZznLmywIQ/IkTSHKXea62zBswJ/g0Ajc+Qmk+RiXvtbFzuO1wsZ0y7nKCCocgaetP7jnAtPilboAWVoXGseot3BmUgr3RqDuAIyz597WR8KovMjFGyuACMo0kr7oKnw0n3h/SnfNHBLVvK9pny5jbhoZp6MrDKu+46fGq1jsW7sCxZirBYOpA1gaDedif8AvCxocbUsZBFhXLlTBFrTZQudQYOqk6Bt9mJgjx1FZhzTe7csEGoOg8ehrS+cuJHCWLTWjlckKQAIINvUjTvEzqfGsht4oqQ48fzqxhwkOMn8LNzv+oE6scCIS5YeO0GV0gzqRtp4jSq/b7qFTuXEjrp/3q14TFFnF0nVjr9KG7y52mJQTCMczt0ULqxPQfHxrRZke4td+f3Vdsnym3CeFZdesb/yrZrPOVjCYVRbl7psqhZlGW0S5Z8o6s5jbSAN6ofGcIFOmo6EbECqpzRxUFezXViRIHQD+tV3Ezu0jjymN9xVt5152xhUNnYBwczKSYB6T934RReR+enw6WxqZYtMwZOkE9RTDgXFQ6m2UIBAkE6Ega1XeLrHkAYA8poCBldshTSQtA2WrcrYwvZxF073bxk9NF1+AmvUn7IfKy2ME94DvYm6WLHqtvuL8M3aEf5q8v8AIdnPh8Jh1IDYi6ASenaXMg/TTrXv7gfDUs2rdq2IS2ioo8lED1PiepqbAi/qF3xsm47dyU8ol5gASdgJPpR6ZceuRauHwRz8lNbI5Vt3C848JXUkbSY9J0q14NdKq/L6aD0q2YRdK6eLhc3Lyl4oKPFFIqZQ0i0FGIoKKFIhosUeKCKNoFENARRqAinBNScUldxgFKXGgE1S+Y+JR1865/qry94asfqWUItlXuKW8+LtWT7rX0keK5s31Airb7VOcTYixZg4m6J8RaT/ANRvXUKOpk7DXPMfji121dSO0tupE7EKZk+ka+IomKHeZySzuczudyfDyUbBdgIrKxfRP+b58eTP/wBNnj5Kk6f6ibg4L44/1uPPwFN8poLa7ksxl2OrOx3JO9XnA3JFZlgcZ0q5cA4mCIr1HJxBG0Bg2CqdOy9f6iorn5dDWeLjMpg7flV953xJd1tW1L3G2VRJjqTOgA6sYA6mnfKXs7UXLZxDZ3Jzi0p7ihYJLne5rAgZVk/eFMyeqxYGIZJDwOFPj9KkzsvQwbHyrD7JeVQgXE3h9owm0p+4p++R+Nht+FfM6XfiPEx0pbGIp6R6VWuJYFp7pnyOn1r5p9Rden6nkF7jydh8Be7dC6PBhwiNvjk/Kf4BcxzNsNh4n+Q3PwpLjnEoBqNfieUZYIjx0J8/jUFxnHaVzc7qqJn7/crpcfF1O1uRrFwsxbw0X/MevwEn1ipHiVzKkeVRmBMED8O/+Y6t8tF+FN+Y+MINMwB8JrpcLGMcVAbrUZHbxaguLX5NUPnPFaR41Y+K44dDWf8AMmKlvQVsdPgcJAXLonuaISB8LdeVOIZrKa/cSf8AYKrfOhyk0w9nnEj2YE7BP/YulLc84gEjxivfemx01h+wXx56hk1TSj/9j/uqbxN5BqW5S47KZGPetwh80P8Ahn/TrbPkLdQeNvL4j51DWsZ2dwNPdPdf/K25/wBJhvUVD6m6c3Nw3N8jcLR9A9Wd03PY4/pOx/dawNdab4y6FEkgCoLC8eyrB1IMADWTtAHUnoOtXDhPLoVe3xpVQNRbcgW7fh2nR7n8GoG0MdvD8Poss8hB2A5K+neqdfhwog/kn9IHJVVbA3b4PZWndT96AqH0ZyoPwJobD37ZWziEZHP+GzEEOo3GZSQWTTrMET5yvM/taRe7hkznbtLgKoP8qCGI9SnoayrjXHb164Lly4zOPdOwXXZVEKo8gNa1OodIxWxaGm3Ln8TN6lnu1TMDWePlbPhccFED50a5jgapHA+J9ogYb7EeB6j9R5VJLdrzmbG0SG+VddY9qkcXjIPlUPxywLgkaONj4j8J/Q9PjS91ppi+lWYGUQ6Pn4UD3be5UzmBYKn/ADfpUXbqw842JAcdD3vjsfiYBqvCvoD0g68BoPI8LxH1g3/84uHBW8exXi3aYbITrZbL/obvL8jmHwFXtaxn2A3z211OjWg3xVxH0Y1sy1sTinLlGowowoFowqC05BFcaNXEUrSWNYq1nuWGkFcksDtKHb4g0W9aD3JZ4TplKgt3tZkyFn56eVQzcUK2T4iV+JgE054FiVgKmt1zkA70kzq87QoMRB3rxP0//SnDn8AbLoupwGYaW+SrRguHjW93ezXuoQpJhfEQNHbWrZwjiStpKg9ACI/MxHhVe5sxLqqYe0AxAVrojQEiFJkjMwGsePSNKT5Q5WvrDM7dTB7og9IAOhHga9H6JkTF7pA3Y+Vi9djiaGQg/pHCvWShCU4VTAnegy12DX2Fy7oqSQSksbaBVgdiDPypzXUbUbowRSzfhPJjXQ7sezzk5QJnLBjrEGZPjUknJ1ux2dxmUJZDkSNTcb73XWBAA8qu6VnvMHEnv3yigdnb3LCRIjUKGGZp2GmkkVnzwxtBOmyrMLn7N1KBuc24eyWVbd1wQSWIgQQPGYGkgxOulVu/z8GLFLQli0KTnnNpqNDAnSB1NTHDOU1vYdL1x+zl7gciVZlViAIYxsDqdBAGpqMxxS2cuHEEjVtDcjYEv6wYUCvP+pdaLJO20An7DhdngdMZp1G/3KPjOILctqsujPoT2THs2DHdu8ZeYgbecGmeA5m7K2UBHeuEL3jmGsQ8QMqAaSNztvSjv2Nt8wzhouJdmGzgEB8y7gDUq0EExrVHZA7aQDmLTqc8TrEf3rVPNnOQ0B63MGNsP6Vulnm0xlIC9oFXOssSHLEXHgwH6jqdoO1PcDjW0tzcDAN3sqyig5SV/GDMwNZB3qg8kqVTPJBe6qholtNdE2hQTr5x1M6nhsMWRXQ98AKM2jEhT3k/gkgkDqKzMSFwm0MdRI2Uua9hZqcLHlRWCxeJAAW5nnYnLqIDd1YmdCIO/Q0GH5jcO9toYoC4OTLmQQRAG5Inp46+LjAcMKW2U722eCfvWgVIEnqNcu0GfHSrWMQQXTVyjGS2pCCF7h94SrgncdfXfh+txiDJq/YrEkZiTim6VfOC8SW6isCIYSIM/A+YG9PwtVX2e3bYQhW7uaVDR3ZA7sjdgSAfX52+K9A6L1AZMAJNkcrhesYH08xoUDwkmWigU4ArstbIcsYxpCK5hSrLXZaOpM0JvlpULR8tcBS1ICOki6Ci5aWZaHLR1JpispI2qDs6XUUIFDUj2QkQKHLSoShC0tSPaSQFcDSpFcEoWj20QCuK0fLRgKFo6UkEoyilFo0ULTmxpIUaaPkrglK04NKToaOFoQtK0tBRAtCVo+SjKtAuTgxJZa4JS2Why0NSXaSSrQ5aVC1yrQ1JwYkwtGCUpkoQKFpwYkgtKBKMBRooEp4YkstCBR4oYpWnaUQChAo4FGC0LTg1JgUbLR8tGC00lODUQLXKtKBaNTbTg1JhaMFo0UOWmkp7WpnijTLlmyXxdhd/tVJ66Kcx+gNPMaKR5EvsuNs5ApZmyy2uUEd5hqO8EDR61QzX/wBN34Wn0+O5W38r0gtDRQKGuKXo44WdftI8X7HheJ1Ga4osrrEm6wUx5hCx+FeJsGYIny/s16W/bD49bP7thWOstiGGkQoKW5n8RNzr0NYNb4dKC5l7pEn+HWPka5TrcpL68BMycZxZ3AtY5M5ZsYnDB1LrcRSGHQsdRA2Kx4U34Vyhdw7s7DusDAFS37O1gN2v2sZMp7MkajxHkIifOtS5hAZRAEE9a59krey4u2r+6ZEwuAKyTAcvXLlt3ySY0JMH0FYRdvG1igXBVlY5h4a16649xBLSAIyq3y/vTpXn5uULGMx2RbzGczXDECZ0CmI3odCkMlvPBV46Yzsd1LYTiDMFdCSpOwrSOV+FG4F7neIn+tE5W5AFhOzJLAHuzv8A36VfuXnCMIX3dDWv32MkA+6dNMXilK4VylvK6kQI2rDfaPiv3fHWbwJyk5W8IJ2r0vhcQrjb4EVlv7SPLCPhTcC95DII/WK0OrYPegvxSqtBCxznHhhx2Pi2RlyjMRsFq3cc4L3bdpRC2wJPiRoNfM1ZP2fOVlXD9u4lrm3oNt/Hf41euYuV0uWyNQx1EdIMiuOn6VlAs7Z9o8IubqWTc98cuJdtWCoysijNtGw+lY/7YrGTEnWZRYP6fCtb9sfDQt7DGTIhZ6adTWd+1te0xXRgLaiRtW7K7T+o/CE49oWN2Lpa4VHjS+LwDKZqR4RgYvHwBq/8zcqFLdu57wcDbpTZsxrHAfZUSCeEh7K+IdmGtnRpFxPON6u/tIxxa7buqJAtyD+Ejc+e9Zt7QLJstaZdGAHlp0qe5f4i2LtC0TBQatsQppgmD4rdwUhuKVXwXNS4nGLnYyJAn10A8qlMBw9cRxIAwqIMxOw7o6fGq1xjkVcNirJa6HsNdTOynvKpIzTHgNa1n2scirhXW7YJ7K8oAbcqeuv4TuOu9DIjY0dyM7FtJj8cjdQ/NV4O0I2kQddhNFs49bVvQCQIFML3DxbUAHWNfjrJpG93gFB21Y/pVjpsQbGA1Vnqf9kAdmxDfeaJnbrTXmy8Udw2oOvkQPDzp57MsYQ+IVSIAWPkajOfcV2iPGly1t5jrTY3ac0ivC0ntvGaVFeyjiLXMTe7Jgt3IQuYTmAnTz6VeeU8GuJF1cU7pctGRqQJ6kDr6VgPJuMa1fDq2UzIPhV74zzNdbciJ1YbmfMVZzXyCgwKo0BekeSMCrKUU/ZC1cUwsBmZoDCdCdN/So72oX8mFAuZQWyWxIJyFYOcx1856029m/FsnD7bq+gTM2YxIF45kGm5HUwPOoj2qcUuXbvZKhKKyxDgyzqDn8CFHjoPKgHgRaT+pdFjMJo+FnHElzoAoXuv3jMZnJPeKmdxA8JFXnly9w/sQHtlXyQ5ZXJJGjFSNJ8GAEDQ1TOP3sl29aABGaCzorOIIKusbRJkgxJJG9K8OvkggQO6YYsVMbhgDoCZAHQnffWvZC0w0OCQvWRGZcqpBCENBL6shZSN4In1rWvY/jBdbDSAFS26Mr7lghzETuO9p5zWdcMvWbFu6l201xLhXvFVDI5kZSSNMvvAgyGp3a4myBBbXKLakDKYYkEr3wDAkGTG+lRSSdsaghOf6bgtZ9oXIGFu2bl61Fu4gYhtl01II2g+VeYcZxpVKq1uSTPf/wDpJqy+1Xn24bORZE+9rEfAVknMHHbt8W86j7MQGHX+4/OpsDXkASOaG/hcXJTjsrpxXDoRntsVJiRMD0ra/ZzyXjcAoxAg27trMy25a4ukrmEAGPKYrB/ZtxhBdtdpHZrdtm5nGhGYT8Ir21jOYgrhQUCMi5R0YH8P97VdyI2GMh5rwKU+HHus09lHG5u4gEpmeXzREddR41UuKe0Z7DNbYAqzttvM9akuaeOrhsfiUtoCXRWDAZQrEajXp1NUa5w3tkF05QWclp3idx86xwx0NAcC1d3oBvKLiHZ7oKyWeTlAJ8+mpq4ezBxhRi8Qbc3cihW6aliEZjAEuEza9PKkzzBcC9jhLPYCGV75I7UoBL3HciVRVBaEjbTeqJzHx57llreHzjC28vdK5rlxmle1utsGY95beyL4xRxzJr1Xsjnz2A0qO4Dznh8PaLXjne49x3t2xmdmB7hctCqsywkk6zB2q7+yXnA4rFm5irYt9laFzCWmErbOYK90zGa9lKwxGgJyhax7k3gyEm8wHdPdDGRO5Yzv4DxNF5x49ct3M1tjmZCjQSO68yuhGhGnxrVikb3O3Hz5KymvBNBbp7XuOnFocPhCboWLl05cyXAGjIp0XKDJZiQJAAnWskflHFImZxCs5c5mR8iTsVmRLa6EjQTWpewLsruAVhAbtLq32XuxDZgD5ZCpHTU+dR/NvOFm8zYWzFy0qXWe4Apk2hIRQYJQNBL7E7TBNTSBzbtX4pHXpaNlmvJF09mWgEG6yNEh++egG8DTymoDCcLtrcZG7TMlwqw90odMpg75gDMgH5itX9m/AuwsW7lyBchbxDjuBCpI8QzFYPjrFZRj+YRexd0gdy7OXfTIMqkzsYBPxpMaSXUrUkuptBLf8aW4oRp7rt3gSSrA6ESdo3GlIHHnu5tQDBJAJDGSG03AmRJqC4KneueAc/rVu4Hw4PB0J1ENtopMz4/ypS6YzXhQ4s51aCrbdFu7bU3gLj5mMsIWICiAI/CZ8xNVziPBbBIBtgAfh00/L6Vp/EeSjcw6PaabqWwDZOhZdwUOmoOYQRqAIM6HLuI4K6rm2yMHmMhBDT6HWscSO7hAf+1rLzy4zFSPEOQrJtB8O+Vl1Ku6kEeXUN0g1YMRYtrwwWUKm/dZTcIHekse7PTQAHp86ovtJwiYSxaXMWxLsWuGdFQbKAD49esHpUTxXmoiwptyrOQAR0jUx8avxQ5Dmgh12eSg0OICtPtO4acJYsof8QggDfXSSPIE7jrVG4bYS0suQXOumpJPSluFYXE4+4ue4WKiM9xoVAPM/kKv3LHs6tMXAftWs22uu0xbGXYAiZJOgBPyq3C8YjNLjbuTSfqDdlWr3A2dAyhVOhguATPjV0xHsxwd3DK/7y1vEBMzkgPamZyjYgx4n51DYPBXbrEWrTXI/CpIHq2w+Jp5xbl7GJZJa0QhIDAXFza7d0GaoyTZEjg5prdBs54Vh9hmEsPxLA2bYZzbuZy/QCyjONPDMs/rXukNXhH9l0XLPFrSlBmuFkl0Y5Uym4+Q6ZXKrE7QTO9e7wK6Pp7QGK7Bwhqu+0jHdnhLzdShUer9wf8AuqxVl3t84j3bNkffYu3omg+Zaf8ATWrC3U8BOmdTCVQeB29qs2GFQnBre1WCwtdJHsFz7+UauIo1BFSKNEIopFKEUUikgQiEUU0oRRYo2mohFFo5FARTrTSFGcbu5VrIec8fLVqfPCHsGYfd73w2Py3+FYRxbE5jWHlRnvWuU6sxxnAPCk+CNu3hoP1+mnxocbdgx8vMdPpRbQyqB5fnTPHNI8x+X9P516P0nHEOO0fysUN1PKUGKinlnjLDKEEuzBVHizGAPn16VUsTjYq4exHD9riix2s2yw/zuQg+Sl6ly5GtYSVsYWG4vC1LlnhIsqSSGuNrdun7xGsAna2vQfE6k0pyNjO1u3b/AN3S3b/yjUn/AFHvfEDpUZz9izAsJ71zVv8ALOg/1n/pB8am+CYbsbSp1Ak+p3r5+9feobP0zD+V7n6R6H24u+8bnYfj5U5jseBUZcxenr+XT57+keNRuKxMnyH18B8Tp6SelMcdj4G+vX1ry9r3Bus8nhd/HjC6/lL8RxYOh1/vpVcx19VOaZVZYg7womPOdvjTTiXEqiVvZjB/sAg/nlq30+AukBctOGMPOlqnuFXcM/8Aj4lQTr2QuG0Nd87HKzGeilVH8VWXAcLwbD7O3hnHkLdwn1PeJ+JNZ5jbYIhgCPMTVd4ly+h1Q5T4HUfXUV6f0/rEELQ3thZfU/R+RkuLxkOH28LWeNchYe4D9l2Z/Fam2fkO4fitY37ROQb2Gl57SydO0Agr4C4Ok7BhKnyJApk2JvWjAuXE/wAlxlHwgilb3OGKyspxFxlZSrK5DggiCCHDaEVpy5mNONmUfkKrg9D6pgk1MHN8gp3yOLrRbsrmuELHRVUIoLudlUePU6CTpWmcO5BRe9fJvv1mVtA+SjcDxcmfAbVi/COLXraslq9ctKSJCNlmFAElYYx010+NNMbnbV3d/NnZvzJr03FEj4GVxQXgPVWxszJb51H/AHW/XMdg0WH/AHW30ynsfyGv0rPueLnCrinK2R+jYe28T5pC22HxU+dZytgUW4tS/Tn5VNkwaQQpblbmPsiLmQPdURbL+6rDTtCoMs+WMokBSSddKQ49xu9fbNddnPSfdX/KohVHoBUHbME/P9D+lPUavMusMdj5DmDYcr6N9JOizMNk7xbgKs78IjUk9LPSbCsi7XYEKQ5X4h2dyD7r6HyPQ/pV6zVl9yrzwLHZ7anrsfUfz3rmusYu+sLLyY6NqXZ6iec+0tFAylBcQXFPUqTGnhtqN9R41d/Z7wA3nzsJtofg7jXL/lG7fAdTRvbDird9rSKc5slyzD3SzZZQHqBlk9JgdDWz0DEhwY/rMr/+WnyuA63mTZcv0eL/AP0R4VD4Tg89sqfvg/XY/DQ1SE8DuN/WtOwiRWf8etZb9wfxSP8AVDfrXU+i+tHJy5g7YH3D7LB9YdJEGLERuRt+Vo/sAwhNy9c6LbVPi7T+SGtjUVV/ZbwPsMKg3a5F1yPFh3RP8KwPXNVsVa7mWQPdYXm2gg0Vyij5a5Vo0VFaNIkUEUpFdFIlKl5kxpCvcXoCWj1Gny0q7ey/hAyvi7rHs0Uuummh1EnbOwj08ZqnW8I13Esi6Zss7mAIn5RA8fjWr84YULZTBqdwLl1dFyg+4uo8e8RrsD1rxPGptE+aXdMZTTJ8Ktcu8HvYjEfvFxVMtJGdCAJ02BMAd3XUQIrYrdqAB4VU+UbCYeyXdQoUAZ4USOneTQz0kddajeJ+0i0CMrsZJByrmAkwDKnWI3nSa9HZ1ODp0LQAST4G64d2JJmSueSOVfmSk2WsnscY/e7pyOzKsKEe5lXzeFygkmIlusGrdwzG3LUIy90RDakH01KDSD7/ANdDbx/UcUlWCFWm6W9hrlWYpXRS1tTEkRQFK6FkocAQsp0VGkjFZxa4k1rF/u1sKgk3rt1u+yp1yIdC0QAT1O2laVeIAJOgAkk7ADrWB8b412l266JmF1iLdtQ3aXSm1xjoRZt6tlBhnAGykjH67O5uOQw0T5V/pGM2TIBcLAU/z9eJtZFGZiAVCkgi1LFgRp3iB4b1AcN5Z7O219jCFUvow3UCe6SCACSQI8au3JfK4uW7d4kgsLbg65gySCDJOhXSKae0bGJ/g93sbGV738btrasCP97RsMtcnD0GPGxjLMbJ3C6N/VHSz9qEUAs+4jbFx27JR3gXMvCquvdM+AIJ318ar+HsBmzD3RCD08dIiakrOJksBuxyo8EBWOmgggghiRGtWjBcvj7JJAOjuPwhe7DeLncrpG3nXP55bBED88lb+K1zyUryXieyuldRmG7AlVBOUsIIjukiY860Tm9SbAu2tGt5b1nKZhB3WnWRmENlPxmSKqXDUHb21YKRnNsow0J1Kknoubp5VJ4DiJOKIkhFVkWR9nIjM/TuliVXTSY8aijx3zYzclp3aU58zWyGFw5CuvLuK7a0GcKXgZ42kiZHhvqOh+FJW+W7YudoBrlZfmZmd56b7aVE2Q6X5Udxi1wFdMyZQBmU766aVbcNiAwkeh8iNxXpPR8vuxtjm5rYnyFw3UsXtvL4uL3+yzjifKH7sjPaDOVylQNxDd5iIM9zfTYbbirjwTGi5bRxOoAMiCGGhBHkQfhUu1NsPhlUEKAASTA8TWtj4DIZe5HtfIWXkZTpY9D9/gokUJFKlaKVrV1LJMdJNhQRSpWuC0tSboSQFCFpTLQqtLUiI0kqUGWl6DLS1IGNJBaELR4rgtK0NCDLXFaOBXRQtO0omWuy0eKGKNoaUnXAUplrgtK0tCJloQKPloQKFohiIBXBaOBRlFK0dKTC0IWjhaFRQtHSixQxRgtGihadSIBQgUYCjRQtHSiAUIWjxRgKFohqTAoQtKZa4LS1I6EXLQhaPlo0U0uTwxJZa4LSuWhC0NSOhJxQgUoEo2WhaIYkwtDFHC0YLQtPDEmBQhaUC0IWm2nhiIq1zClAlA60CVI1qi+IbVO+w/hQfE3LpE9ioy+TPIn1ygj/AFVAcVOlaT7CcFlw7v8A+pcPyUBR9c1YvU5ajI+Vv9Hh1Sg/C0OuoaZ8a4ilm1cu3DlS2jXHbwVAWY/ACuYJpdkvFH7WfEFvcUuDP3bS2rOnQhczD4M5n4+FWDkTh9t+xAMqyG2406jQ+s7VkfErL429duAd+9duXSdz32LbfGPhVo4Bir+ECTooI166H+9PCuSzXNkfz54WzEwGMt+ynuIcLu4W7lGZWzfZuPvAHQH12IrS+Fc157AuagoCrqejDyJqe4pwe3i7FtpUvAdTMEabg/mOtZNzDgnHaZZLjS9bX3WXZbg8fA/Oue6p03wDsf8A2lzjCWOLQm55kRr+e8SyjYDbekeT+M9txBmQAAIQukMI6n09KtuF5aW1hlvfuTXWjWGEmesHp6a1CexRrdzHXosdhCAEN4zr6GruFhuYzSB42VmB3krbeW+OygFz3kMHwPnVq4ddRmzKAYqkWOWyHLI3dJ7ynqPKrly7Zyd3xqbBxZO+NfAV90jTH91acJiAwmKpftvxuXB3ABJfKmv8ZCz8Jqw8OxREjfWor2j5Ww7K3WI9ekeYNdbmPAgP4VEGt1WE43bwZsWF91lAA8DGlWy5xWNfGvNfEL7/AL7bzuWgiCegHh61ueGsdoA090CSR5Vh4/vBIVds5c6lQ/aliM2IRXjLGlUf2gcMFuGEd5dPQeNW72jcZtdraESTGtU/2yliyAHQrI8qy8+KyfyFZyTbAshe93yR1NbRwwl7CWoLPAMHwH6TWWcC4WWuiNddvStcwNm4JuKcuVY1qhltjk0gnhVo6A3VR5rwbXXzXBGSAB5CjJw57NvtbYEOCDGpAjWr63Ae2so/Uzm8zWd+0LHX8AogTaeVyt0J8tquOx5HsDWBLskG1XOHYFXS40szgyOsf31q7cF5ye8i2bxzC0IUHpAgT6fpS3sVu22sPKy7yQY8f0pTA+z4y7k5VOYjx+PlWXNkB0jonXtwmSl1qC4Ta7XtHH4iPLTwpvcsmYGgGrH0qV5DwkIyz7rsPWl+YMvdtjSZZz6Vs42WGENCryMFWq/7PL04m90ED4095tAftIWCup/yneo7lNsl66R1yx6Ufmu/DuUaS9uGXzpdwnLs/C0gy8Tb5VLx/CEHeGh3o/BXIfLGbNpB8TsaT5exk9y5tMT1U1eeXeWGe4iqQWZlCNt1rVlj1NsLJaCDSsWBtNZtWbZOoEBen2hYmSII32O2tSOHxGW4O6DNkjU5SRlJnNrrmUDXp6VZ+dOUXtOilhcLoIeMoBUgsDrEifqPGoVuHBmuBrkKBnAIHeykqUAJEaT5x01FYEUcjJSHfK7PFA7I/Co93jBzXLl6O0vLGpkgnQCRAC5RGs/QVGXbuWNjMwd4Dz3Sx2g7T6+NP+d7ovXENlSltNBKwNJLaRookQCT111ptawoUjtJCPo7aEKd1cCY1Onzq6RvasMOyk8Zgb2HK/ayrMGZSZXuLIEEd7eAw0PWl+FW9bkSZs5zEaEuDBjoNh10FR/CcHdvZmZ2KgMJYjUCTlWRHu671a+R8DpiGzSiWs3u6gNlMDSDAHw3qCcFzSAo8n/pFVvmHlcuhuNvFUrCWrQlGGo0/qK0XnLjtu5lWy5aBPeEQOoPiaxDnXiDC7IPyp3RWzjaRcU9m9BPsQpW6FyyuYfET+dXzj3GHPZi27d0BiuYnLH3fKPz+FVX2W8p3sdcMXLVtbRXM91wBJOgC6sx06CB1Ir03yXyRbtubj2MOOyBJvIzssBR7syMw1aelTZ8jO61nJ+FNEHALJ8NwjH3ezcYa6wJzZmWM2kAEtlkGBUjwXht9Lz9rYcZFMJcUrbLkSBJgGN6lOfPbMWV7dhTAkKxUFvJpOvpt4+VNPYk+NxXbdqX/dMrhrl1Sx7Yju9kDAZgAdRos6nUCmdt0oIYNvkp7Jvdyk+N3z+7NcCZLmJXswJhTZtn7Qgb/aXMqDTUK3jWP8fw9+xeNtnKE5HZEbQSJEgdcp907TrW587cXtYC2mfLdxRX7FCQVtIGlc0KAEGpgQbjfwjXEuO8Ra5cNy603bjZiSNe9ux2gDoKbiNkY4gjZVsl2p12pjlfDdueytK2cCOzAOoUEs+YmFUbmdpp5xr2fwQtxGLaCDI18su413nWpD2McStWsWHP2VtVuq7yQ10smgcs2VUJGkRrGnUaF7S/aNhsLba7P7w5jKtszDH3QzwVUeMZj0A8LLMfU62OoqNjfjlZJznwdsDg3a0SEzKGSTDFgV1MjMRvlIIHpVAw3MGZVeBbZu4SAB2k6sSZMSTrptoKlfavxy9jXshmW2jIHIAItpocwI1ZmUQJ1MyABNBy7y9bumAPs7YUZkXvZ4mGDTO5LfLpNagja2P37lasTu233K3LxPFO6X3Vj2TJ2dpbY7IqygMANCJUaEj5db3zHyXYxFr94tIFYqBbcAKVfql0Aa691gRI/PBOKcGulw1i40ErEvkK+IGuXKpB22mtL5N5gfDWsrv23aIzFFIEOuq3F6liNDnAzb6kCqjwGAEOu/ATJm+QVk/DreU3Z0IuMD5ROnzq58k2ibBjUm4DHkIB6+dQ9rg17FG5dthJa6xa2WCuGbvQAQoI13FTvaHDWYYZWAClSDJJbVh4x40Mx17DkkKGA1LavnFefTYxNljogtZbiKDGUu0ZZ0MAAiNtqmucuZrVy014FHOSbTn3wV+7pr5RWdcye1I2Wt2lw+Gv2+zVmS7ZBILa5VbcALHiMxNXrlPnfhji293BrhmPu5VzLM9OzgzI+9brPm6OJC2Ymj/uoMsl0hIVD4h7KTcwhxWIvFb9wdqiHUBNYDzrmOndGgkVUeGYJbeW2kO/4iJgkahZ0HrW+e0bA38bZUYQK6ScwZhauae6uW4E7o3O1Ytx3APgjD5e3iCEZXCBv4lJGby6VahknLSHnzsAmBx4Vi5K5OW6SMxbL/in3VBJ91APebxO1a7yryclhXWyMouqFuCScwg6E79dhArMvZRz1h7dpbdwxdLkERCjMdGLnSANDOojrWocW46XBtWCch0N4DVvEW519XPw8amZFv7uVC67VS43isLhSVw6M11QZyXXW2jeDmYJ/hA+NZJzdzxibrZLmVYMyo73rmMkgVM+0njCWWXD24OQ5rp37x2UnxG59RVHxt7tHk+EfCpI4y1xsbKeFnyF6A/YY4U1/GYnEXLj3P3ZFW2CSVD3ywLeEhEK/wCo+VeyK8//ALDPAha4feuRrexL6nqtpVQfANn+tegK6LHaAwUtRgoLqwL2ocT7bGvGq2gLQ9RJb/qJHwrd8diQiM7GFVSxPgAJP0rzXgO+7PEZ3Z48MzFo+tauCy3Wqma6m0rDwu1UzbFM8BbqQUVthYzkWKAij0FOtNRKA0oaKRRtBEiimlDRaSFJMrRaVIorCnIUm98iDmjLBzTtHUH1rz7xjhyjEFUMpMjxy7wfMDSts57QnDXY3Czp4AifprWE8Mud5ifD8yKphhlzGMPFrnetSEUAPHKdcQuVFXb9OsfdqDxt6vSDTWgBYeNFabcWTqPiP1H8qvf7PvEVtnFu33bVpo6nvuAo8ySBWb4i7V29h/Cg9y47AlBlzAaZokgT6mdCJykVynqfqDcbEc4mvAv5K7z0zgHJyGsIsDc18BapyvhizHEXfeYkqPpp5Ad0eQqR4hj6kcHh7TDuqsDpGo8iNwaG9wRDqJU76GR8QZH5V4dk+isnMPfEgde69Wi9WY2O7tOY5tbBVXG4qPh/7uv+0d31zVXOJ46al+auD3bWp7yfjXp/nG6k+Oo86qlxq5XO6dLjS6ZGkVsF12FmRZEYdG67XXblNeX7ua5dP4cqD1gs35gfCi4/EBVLHYAn5Uw9nLk23Y7tcJPxAq706L2l/wCy3+mst9qc4g9V/H4upDit+qvxHEa1v40drZnfWyS4hjJ0qGxVylr92o7FvWmwgEBZ81iNx+xT7AvqfWngeovBNv8A5j+dPM1e24BqBn4C+R+sjVmSH/8AY/7o94U0vGlWakLpqy4qkwKOvPDDzkf38Ypzh7tMse0EHwIpW1Xm/quOpmu+V7n/AIbZNwPi+DafBq5lpBGqy8q8q38SfsrZy9br920P9R94+SBj5VzEcT5DTQvRcrOhxm6pXABVx0qz8r8OuoO+jKjw6k92RJBInx6GIMTrBrU+XuRcPhIe79ve3VSO6D4pbMgAf+pcnxABpLnxiyBz7xuCY8MpAA8gNPmetZnWZosZojJBefHx+Vyp9QtzZe3EPb/3f+FEYrj9woLSkW7SjKLduQI/iY95p3MkAkkkVF0QNQk1zGTlyz/rKvY+JFB+gc8pZDUNd4YDiDcMbKV16gQSR5RpUmpphymbmKxItKFy5iWeDK2l3J1iY0XT3mFdB6awcuYvOPttRKyPUGdiY7G/U/NgLa+ULZFi1PgSPQsSPpUyBRbNsAAAQAAAPADQD5UqBXsGJEYoWsPIC8SzJhNM57RsSUUChFCBRoqxarUiRQUciuilaFLJfZlwvs1bE3u6AnaM0A9waKh/zEdd9KYDj9xbz4hiua43eYEMApjKCDpAAy6eFXfmLDWBZOGdijFQ5ywGI0yZ1MSCTJCzA9Jqq4HhEkAkhB3JXJB89SdOsEzO1eC5eS1p0/C9Fmj0tDQoLjfH2v50Rfs1OVlU97/DYtcy7NtIHjNIctcALBsqnNZcNpoWTTPljee7cXTYwdBVyu+z0GOwukMbgco0EbQe/bmFIPhFWPg2HFgPJyuqlETfxKwWAmNV3OhFdB0XrONr/qnx5XN9RwJi3+n/AGUDwLkKLpYCLLrmygxBcd4ZTI0YAjw+FWPh/KvZ6AyjaXLZ9xhpqB91tOmmpruXeMXXt2xBBBIuFhqAsSD0/FHXSKccX53sW3dGb/DTO5lYE7Lvq3kNq9AxJcWWESACiuYljkZJpJNhS3DMJkUJJIWQpO+XpJ6kbT1imfFuLLb03YbiVUD1ZiAKheD8/WrjAAgAnxG0gA77k9Ke8xcl2roZnljqROoXYnKh7smBqZ39KuQZzJWlsJFhRT4zmm3hJcc40pw1x8pPdjIDBaYgT+A7Zh0ms35ZwBPEE7QMHXOp70qq5AygRsiA5at/ALrWCO1kW3IDCAVQXDFtBA0ykAx5085oxFu3duZOzW4qMrHc6q4InadhP3QBXNdame/HJlNOb4+Vq9OaxkgMYsFSGL4olnCdp3QFWAB1de7EeZ/WsF5ltFwGe5D3D2gAEkgzLNB0YjaekCrVxrmjtLHZsJi8zMT1gaCPXePHxqI5t4O3a2xcynNbW5CkmBqcnqNgorFPVZMiFrK/SAP3WrjYbY5S75URwNj+8WbWhKK9yNdGyGIAG6gCBrrWgcq4RbZu3Lj57pUKBM5XukmIgDSdWGxJ8aoGF4Uy4xAHIZiryRsGGV1gEmBsfIGthscGt28jNBMhhbQSHyqWDNMyWY9dNh4VZzsU5HTn/IV7GlbHlsHyFG3LAF9AYbMLffUEgMdQT+Fonvb/AKL82cPKlABoCMw3GVAbmUdSzNqfCBR+H22XE2yxjOSuXUjNnLFGiACAJB13jzq6cx8NFy2w6wQD4TuR4aVpemMQO6eWHysjr8xjzAQoXhSB7AAPeUFSdmUN34+AJFIYTGG3d1JyXXYAFdsqjKxPgddfXwo/LJi9cU6ZwxHgQhgGIEGM397yPHcHOTXZk08dTI8hrr5TUkOO5+MHt2fGSP8A39lFNI0TaXfpeFINQqKNlrstdtBIXRhx+FyM0el5ARRQEUaKEVOCoC1Ey10UeK6KWpN0omWhihy0IFG0KRKEUeK4ChaWlEIroo5WjBaOpLSkorstKZa4LR1JulJgUOWlCtCBQ1IhiIFoSlHUUYChqTgxI5a6KVIrgtLUhpSeWhC0crQgUtSWlEC0IFHAoVFDUjpRMtDFHC0IWhqTtKTC0YCjhaEChaIYkwKOFoQtGC0CU4NRIo4FDFHC0LTg1J5aGKOBQgULTg1EC0YLR8tDFC04NRAtDFGC0bLQ1JwYixQ5aUC0YCm6k8MSIFHy0cChC0LTg1EC0S9S8U3xZppKe1qgOMXd63fkLAdlhrKdQgJ/zN3m+pNYfw3CdriLVvcO6ggfhHeb/pBr0WgrnOqyWQ1dV0SKgXIaxT9rbmTs8IuEX3sWSrH8NpMpc/62Kp5qXra68me2Lja4ril+2yytgJZtsplhlhrnd299mBnXQVzmbIWRGuVvE0qNY7PBWhCk3GHvaTBH0FQnE+M9su/oD41f+NC1aWbljtu0UAM47ix0BGx8uutUvA4a0c3dAM6EevUeFcXLK1r7cDat4+W2M6XHlWrlLCNfw4ZbhS7YBnvEK6RtAI1HjU7yPjbRlTdJeO6WIP8ApPWJqE9nuH7O4Vbui5KkHwNSXsu9kpOMZrzDsLTyiz37k6iQPujSfE012IMk0DSmzImxO7lXa27l/htx7Ks5yDQabMPGDprVDw3KOIt8Qa/ANllyyIEmdMw9OtXz2kcdWzYgMAJCgeEa/kKo+K9raQAtstHidDVzKzIsciKySBysU5DWOWi4PDyPAin+EBDAHrWPcU9rd0/4aJb8z3j+g+lRfCec+I37gSy5ZidAEWB5kxAHmaUfVYi4BgJKb9a0mgvQ2Ct5XPnUX7THT93ctOgnTxqJ4HwrG22RsRilefeRbSx6BtDp4wKT9tGKurg7pRQe6Z8hGprbnn147rbX5U1nTwvO/LvCr2NxRFqYU95jsgnafHTYV6F4NYNrDupMlVg+JMVTP2U77GxePZxNwnPHvaD8q0LiV5bVlzcYSxMz+VUMdjYotRPKjhjr3LEvadcyNZbL0ECmPGgl6xcdzluIIAO4H51a/axhle7hiGA1Gg6Cq/zN7O3u3Wuofs8gkAnUj86z+pY2sW01RBV2Yjti1D+yfhoH2jkANsT5evjTP2xc5XLRtIkBZ7xA3Hh+ddiswCoswhggaUfHcrLirtq2xKrBJJ6xWLixNflhzt/sq0TrNLQOUOYA2H7QaBY06bCs0/aGd8Tk7IF00JC6x59f6Vf+J8NFnAMq6jNGm5A0qA9knDWbEOx/wUQZgdd/CfKtyeZ0BFH9lfcNgrP7MOHjD4FHKSVUnz2103/oKY8Ba/iEu3p+y1IUgxI/QeNDiOcLbm5ZwytcaWAUA6dCfCKzrivP2IsOuGhrSuYYFdYJiB5Vn4mEXvc+UcqnkgeETC8ygFlIyHPqehM6055jxJuEMoIEAE+VTnMPBLdxQDAMBtBrPrS+Fup2BMaquX4iq2W1uO9rmjyqzGhzSqjy9o1wRO3yqD9pCGzfUg+8oOlWPkNZu3CfCYqt86WTdxEE+Q8hNajADLq+yuMfWNRVVwuNi6WI0Y6/zrUeBYwDKQ0agqfA+IqkjgeVcxk5GyP/AJT7ponMOEe2gyzAII9PI1psmaNlmFu69Tce4mQlu4ZchT72nehWBWd5IMnXY1luMxbuzEnU3CSIkkHfXSV8h01rQPZlPEsIjX1KdkQsAaMAgk67ZhEj18amfaPwZOxm0gm00qqAKSDAI9I6T0qrJivkuQHZdNi5DWtDSsq4pctuH7NpAUsUmCMu5AO65em+/lVex+Pw8/eUZAIyHL5mSY3MgkfSIfcbu9k727RAXLle7u2cLmbVRoskKddcutA2HtXMMp7putcYHQnudc3RMp1j4+VQt25WgHjwo7hPE3AJVmjRdgwcQd13giBp51aGxgRIBypezZEIywPdKbSYIWNdAfOqlye/Zu2dS2VmVdJ0giQw1BWAQenlVk53Ks9gqActsOcp0BLDVjpJI303JqKUijShyDqYQozE4YaSMq7T4eVUT2h8sdmc2hU7MDOvnWgcT4qLwa2beS4JkLsYNUd7jjMupQ7q36UcXKN+4UuLLS1xRvYZyqty8L13/CtsCQdmPgfEDc+NbxzrzWblnsLTC1aIIYkhWfXyGieXWs+5XxqWsIQsZvDbU/yqd5T5Ct4m9bH74joENy8qK2a2n+ZoVd4npqfCqQklyclzuBwFO02KCmfZXytbDrcZP3i6VPZ2woa2sbXLjNABOy5pA31MVJcW56srceziUvIAy/4b6gqe9CgKGSRGk6CoDi3tGUXBguHqUsBsr4hZz3fxZCdQvTtD3m6ZRuX2m8RsdlatvHaZlVI0KgatPiD4eMVoS4srIr1cf3Tb/wC3lZrzbxRP3i7irxF5y5Ni2VJVtlQ3CfuII7o94gjQbwKcqXriNirjLmdTcjQ6b97UBAY7q69BArQvax2H7prBbuG1kiZnXbpUXxHhFm/ZF20WtlbQgyIaB7rjqdxIpuDkmWHXVb1ukY/KonJ7m5cFuC7O8AdSToB8T/elX/2r8lZcLhrRf7e7iVW4RJt21W3cjbcJ7zN+m7v2E8AI7TEmAdUtMo1zf8xhPgIQHxLUPtL5iR7xtEM3ZSC5ByrcugFlMsBCoAD1YsRoBBu21jjIOVHENBsrGuZLs3gLKvctWUCWyFJJgnvnQiXYlj5QKsHsvxv7vbudrKF3EBgRmzKRoSBqCBPr5VbMPaza5ljyI/QwAKr/ADrzB2ChbbKz5gNQGRBIMlWBVi0eG1KHqDpj2w1TtlMx01sofEWMrNYuygS8C0nRULAGCDGqmfhNejOG4K1Z7qW1UDugADUdJOpPqSZrzJzPjbl621zLbDADtDbASVLGCUACgg6EjSMoEVI+zv2s4q1ks3OzuoPda7mzAAd1c6nUbABgfCYq83H1N1fCky47A0r0hzGbfYvmyj3cpOkXGYKiho6kxHWqzh+E2sQhS4kiYI0DKdsyHceUfXrjPOvtBv4wqGy2ktsG7O2WWXGgckySy9NgusDUmtH5E9plhh/5kdi4IXOik2yR94x3kadSIZdd+ghkhF6lUjx3O3byormjgCW73YYi2bqNlNrEIhF9bW2uWEfKZDBo8QROmgcr8tDDqwti2UYr2d0IGcZde6WLZTrMTO9SHGOaOzuWr9lVv21w14ORmgBypXvAd33RM7A+orN7HPN4lrgzZzcYgKDk16MD3SvoAapmRrn6TuPyjNG6Me5XX2pNjb1vJZurEQ4M2rrHwDSUjTxWZrDMdwy7bbJcRkfqrDXXr5g+O1bzytz0XtO+Kw3ZZdC6lSjbe6rMHG/QsPCpK9gsNjEhGJP3CRD2z5BgDlOxA0PqAatyY7Wt/pKAWRaxTlDk7PcUH73QDXzP9auntT5wXB2Gt2jmvAQAPuabt4AdB6VUufecHwllgkLfulkU/etohhnE9WIgfE1TuReDG5bN24WY3GJ11Yx1JPiad0+J+juSc2po4vLlR+G4y4WLMfeJYs/U7nzJqYu3tcwbUiSYiI8Ki8LYz3bhOuViAPDU/SrDyDy+cVj8Lhlk9teRGjpbmbh9FQMfhWm9oc+lcA3X0Q9gXBDh+F4O0ZzdgrvO+e79q8+jOR8KvVEsJAAGgGwo9abRQVpUH22cXyWBaHvXmyn/ACLBf56L/qNZnwTDVNe1rFF8aV6W0RR/qGcn/qA+ApLhNmtnDZpasnLfblI4W3TiK60tHIrQWeQiRQUcigNJCkQ0EUeKAijaCJFBFHigo2kiEUUilDRSKIKBSNy2CCDqCCCPEEQfpXnbj/DzZvXbZ3Rjr4roVPoywfjXo1hWfe1bl4PkxA/5ZUXR+K1mHzKkx6N/CKqZbnRjus5buqWV0/6otaObpY1xK7BIOhGhB3FQOLxFXDnPAG4DcHv7sPxD/wC0Py08KoDNXQ9F9QR9Th1N/UNiE/qvpmXpMga/g7go125W2+yDAdnhp6u0n5A/TMaw5UkgeJA+ZivQ/L/dsIPIn5n+Vedf4pZxETIB53Xon+G+ACZJj+E9xTGQVYow2Yb+hB0ZT+FtPQ6084fzbl7t9Y/+JbBKn1X3lPkM3pVdx2MqKv44mvOOjdczMEe11t+Cu86t0LEzP1t3+RytdwPELdwdx0fpAIn0KnX4EVUOb+Rc0vYGVtza2Vv8hOin+E909MvWjXL3lQrxFxs7j0dh+Rrosr1RjZsejIi3+QudxfTU+FJrx5dvgqoc83ytsoQQxYKQdCI1IIOoOm1DyRiItHzc/kKtWEwKYi7mvDtSgBHaFmnXY6gkQIGtXfA8NwMZWw1u35gEr6yuo+I+NZ/T34kn9HXpN3uup/8AkR6eKewuPmlkfEr9VzFtXov/AO7/AAF0d22p87d65+QuH6iofiPsawxPda+kifeVgP8Acs/Wuri6OQ22Paf3VYev8Rzv6jXD9l59u1H4g6/Gtu4v7EG/5d+fK5bI/wCpGb/21QuZvZnirOpFu4J/5dxS3+xsr/JTVObHdA8F5FX8rT/+T4WVE4Ru3o7FVPBtp8T+Zp4Gqb5c5AxNyARbted+6if9ILOf9tXbAeyAb3MZaHlbAb/qd1/9lep4vW8MRNAkbx8r51zsCZ87naTyVl1I362qz7O8Anv3mueXajX/AE2kB/6qk8Lw/AWv8PCpcbxuLmHzvG43yUVXzPVmBA23PH8psHRsh52aV5txxBqz8qcn3r4BGW2h+/cOUfBQC7fBY862+4meMyoFBkW0QIg+AGvxmmuG6/5j+deUeofXUWW6oWWB5Plej+ncWbpzHEHcqL5a5LwdiC4fFXPFly2gfJGgH1bP6CrVieNXCIQC2BoI1YDwBIAX/Sopmoo4Fcjkerst7dEdNH2VmeHvv1zEuP3SdmzrJkk7kmSfUnU1D+0C9FpR4v8AkDP5ip9arvMfCb2IuhLVtmW2NW91AzakZmhSQI0EmszpkU+bk2Lcf5V7DdFE8OeQ0BVK09LqauXDfZo4Ga9dRFGpy6wOss2VQPPWqzznirVsZcOrMzHJbOrXHbSXURoB0CgHad669np/IMjGPFajVeVqnr2MWPew2GiyfCrfMXFYBtpOY6MfCeg/iO3l61sfsr5S/dbPeH21yGufwj7tv/TOv8RPgKrnsr9nLIy38SO+O8lo6lW/Hc6ZhuF1g6nUQNYVa9i6d06Hp0Ihi/c/JXjXWery9RmL38DgfCIq0MUcLXRVy1lAIorgKNFdFC0qRKCKOaAilaVLBuOZTfa8Xuu76hPdCEGFA11AAGoERPlLzlBbdy41vEPcUk5lP3RBGjDqhB339JktvaLi+xW3iElsrG0wJhTbYbfnUpwi6Ly2rzRaBACW0jPpBLMY28AfKvBnuL2CU8L0LKdq2U1/wiAWtkrkDE5CehjcN00YbmKibfN98Eq7C6qkCLwDnT8JiRt49etS3GOKnDSGhpAH2gUo6mYdcu+kifI/CucEtJevBWYosMueFYTO5GniPOKU7Md0bXNFHysyHuh5BKsl/ncgkaZGOVlOwkCQOo8JBmoHE8nYe7LIHGv+GWDrnOuueGyk6b7AUxxXLdyyCxy3LQkm4hJAImM4jMh1GpEeetXXlrCg2+0EGRlaRPvScwYH7sgeOlVxmTY4Ajea+L2U0mIx5tw3VG4Ty6yrfYjRTMhQGTKC2VQdIDRmnTQeOl95L4q5tvkftouQNypEaCTqpmFJOhOug3ruF5l7dL2HlVZ8xJ0gIEknMNZaFmrByEEsyiMCzBnfYITlB7nlPu+lazusvxWB8d6vKzziCQ6XcI3tPxythHORgxU5RsQVImehNs65TrAkVlWBLpalhLPncPHfNt+6M0xsRqKvHtjdHt65iLirdUbRetr39oEXLZ10mRVB4lhrqWUcjNZZTADyEzEgKdip8jvvWjndX/zCJhOx8qri4Qge4BRnL2NzXFXXU9BqdYJ+U69N61/g/AzeS5caSsKCcpm3A7gBUe6i+9B61mXs94RkQ3322VY1YmIUabtuf4Z8av3BrrtmYs5VrZEQDZzs2i92IEEEDf4VEzJjxDZF/ZaUsR7dDkqP/c7aY23cn7Iqe0JVt2D94SJAO89KveNwKOBDiCVcHUtlBhQPEa6RpVH5cuS5a4ouW7bkbSwEBWVlOsCZj+E1onDuFBGXLmNtgAoB0tn3gV65W2gzBium6VlyZcT2kCidwsuTTDIxx5CheP8ADrjXLZABK3RcIHQZ8pI6ggamd5q9stHt4cAk9TuTRitdhgYzMdmlqweo5LsiTUVCXcLF9H8VZNuhBbf1p5icPIj0+hmq5zNzU1i6y5GfuqLemnaHYGCNGEiTpv4Gk8VzsOyS6E0zMtwNoVKLLL4iehjx8Kym9XxYZpI3bfKmlx5XxtcPCsziiZar3CMfdyLlTtb1wC9d7wCWVfvIhY/eyQRbGu5MdbJYkgEggkbHceXWuhxslkrAW8LGlic126JFDFHy10VatVy1EAoAKOFoQKNpulEiuAo8V0UrQ0osVwowFGpWlpScV0UpFdFK0tKKBQxRstCBStHSkwKGKMFoQKVoaUUChijZaHLSR0okVyijgUIFC0tKJFCoo8UNK0tCIFo0UIFCKVpwai0IFGAoQtC0Q1BFDFCFo0ULR0ogFCKMBQhaFohqACjAUYChC0LTgxEijBaOBQ0208MRFWjBaGKNQJTw1FAoctGihAptpwaigUIWjUIoWjpRQKGKMBQgUNSOlFIqN4i+lSN01CcVudBqdgPEnYetRPfQU0ceo0rh7FeEAtcvnoezTy2Ln/2j/dWq1CcjcH7DDpbPvRL/AOZtW+RMegFTdcpkSdyQldthw9qIBQHtE5lTB4S/iX2s22YD8TbIv+tyq/GvAfs/47GI/eLjEvcus12CO92kl2MwdCZgVv37d3NwWzYwQ3uN29wTEIhypPkXJaPG3XmLC8JcKHXvdQNxr09fhWDny70nyu8L15wPC2r1sghXtsIZehUnfxVhuGGxggg1k3tO5W/d3yS2QgtYvb5gNTbeIHaL1jcQepAeew7jIu2zZcst6yAcynK/Zz8myHQgjaK0rE4pbyGxcKXA5JtXNILptI17O8Ok91xIO5rHyoWPZZ58KAUTRWOrxA3LFl5/w2Ac7GR/StA9m/EYa9iC5IIFu3P8OpP9+FMuO8vWhbdnQqgALXMMpZRcH/q2W1tnr3SV03quXON2jbS1ZvIBGXv9w+ZMiNT51zmRJJp0x2Df8LRzM64AwcovPXMTX7hkkqpMCfmfU1GcJwjuQqKWY7ACTpTO3w252mSJJ2K95SPEFZFS/sox9wcRVS3ZqFZYI0Pr5mn4+N3Xhrj+SsGKEyOsq9eyTku3f+0xBIVXKG2NDI/Ed/gPnXojg+Ds2UC2kVFGwUAfPxPmazDiWNewxv2rfaW2HfQAbge+PHwNQnDPbKJMWhBmBOoPh6eVaLMpnT36dN/daMRijbR5W3W7hZhIGXoetQ/P90G2La5WN0hQCenU/AVi/wD9492SdQCdpI0np8KnuQ3TEXw3asezOcJMnpoTrpvpTIvUDpj2tB3PKnbK2Q0FpmF4WMPahFAAAkARXnX25ceuXLyYaSMzqIXeWMfKvQ/NXNdlLTkuAVBEdZ9K8jY2/iHxa4nsmC9qChYbqG6edX55GOla1rraBv8AlR5BoBoW3c0+zZWt2zbYh1QCWM1I8E4muGsdm7DPG879KrntF50ebdtTlkAk9azLnqxeNy3ekskqCBvqZmoupuDhURoqWbWyMErRxg82YhB3tc0dPCmGQPiLdsCCoMxv6fGrThwrWlg5O5oCYk+VZpwfid9MWoZO9J16ZZ39ayeiSNmN1wd0cZu9rQebeFFMKw3AkxWU+yLmNu2v2ToHBjWI6amto5tvjsDnIBZayXk7htoX8p1d5MRq20R13rYzIo3nSQruR7WWte5C5cw2EzMWTtCJ0Ikg66zr8Nqrvtk5fw+Na24YW3sgsNBLT00+dTVjjWFto1u5aYXcp1I1O8Q3QVT+SCLjtcdpyA6HpqY9YFRvj+nYAHLLfkWKpV7EYXJbZmOwgTXcn8LuPhrjnKqCYJ3Pp5frXe07ioylF0UnfxqG5Oxj3fsS5FtNY6Gs2dwyGW0WAqkR0E2mfJdib1wSdVJqK5nw+XEp0kHXxqycvX8uKYRupA84qM5t4xmxNqUACmKuYp2JI3pXgT2h+VL8R5VIsW2Uk5l787ETofHSqfjOdRYLWrloNsAd9P1rU+ZLpFi3BmF0A8Oorz9zec15swip8WESEhya6MEr13+z/wAQVsFmQQuY/kJil+Jced2+yTOJIJzBYYEA6akgAz8KgP2YAG4YwJ07R19BlWrsLKpIBUAKBtAA/mY+NaEURZCGg7bq8yrVZ4pwFGssgygEMGMDUkljMAyPEjWKwDimGGFxJyyVaNJ074nLoTsJg7+PWrti8QFkKzgZneCdG1jsyAw3GvQkHXas84/b1aF7wZjDd0gR92NDEiB0PrWc2nONLTLC1t2rfjsfYWzaNliHEi4Doc2hBJ92N12JIqATihaVPjvIBAEnKumx6eY8qp/D+KgmHE6+HXbedR5VNG8DGwHUgRLTuRvtUEsBbyqxlcdlp+OCWCX1a44VjI/EgPkevzrP+aMf2jTAWKvfMmH7S3avZh3rNsEnxVcvy0+NUrCWraks5DHoKoYdF5JK56dx1kKtDGtsJ9KlExt1EcqzKLi5HCkjMszlaNxIGhouMvKWLAR5US1eZ2CxpNbELo2qsOdlNcncVFqCQB4GKgvajinv3VcSIAg9P6VIccXIII06U75QAu5rbbxpPhWhHLqGlTQgg2o3g3DFxwCHtUvWQSbiguhAXSR0161ZfZ3wS42FNrs2Nxr5XOwP2aMn2hCjWU31gajXerryfzHhMKOyIZSASxUauY2JG4+FWjF8ew+FwxxRGW5dU3FtsT2l3N7qgfhgAltgDrrAOZDkukkdFppoVpztiq1zlzHa4fhhlgsFy4e0RBcr/wAx/wCAHvMfvHQbmMU5LxX73iUXFXxatuXe67HLsGc67ZnjKCQQJ6xBjuZsTdxl0GGuXrrQqLqdScqIOijYD4+dSvCPZ/jAb1p8OUuBMqi9ChiSNLbkw7ydMk6SZgGr7Y26LKrws7jqHClueubbLt+44JSmFIU3r40a4iGSZbvC2sE96DcbLIAhazTmniZNxiRALyuswIXLP+VQoqy8Y4AttxgrRV77qDiruuS2qQ7WkbqiAZnf77AAbCtM9lvLuBvC4wtI94O4m8gJuWx7lxLZlQkArKjQjWZq0CxgDgFoyFsLNIWDNj2Fm7sQSFzbHvEHTx92aZPbBAYeRH516x5s9nOFvWmRrSjNrmtKqlTESMoG3QGR5V5n4zy8+Fv3MLcMlDKtEZkIlSB5ggx0MidKfFKHNNCiqErw4bJrwmwp1Y90SWjcAampzlfh9y79odQWlVIkAR4eMRVV4jiezN1CPfUAeAJIk/KR8auvJvHlRBqB3fkahzQ9sVs8q/0wAOsra/Z7xUWbIUsASVgae7MfprPjVC9qYfB31uWe9hLxJNtoyK499B1UGQyxEAkfdqocN5kLPBmM2noNh4RV24/GKwVwMYW0puBgs98KVUDu7DZmB0kViY8EsU41bg8/ZanVJIJYN+RwlOJ8etGwLthil/Mii1q6mTrmU6QDBzANpuKt13iWRMmZRcCgvc8wBt4ARoNIrzNwTjTWz2dwErMAj30PiD1HlWl8K4j2921YlmJPfbWSoE6g+Vb8EIgJB3vgrltJGyQ4Zy4uPxs3MzrJJ1gZQdAI8TVx9o97D8PtOvuubZFi2o+9tM+AnU1J8AAw1y46L5L0iOlYj7b+YRevqpIZknO3mx934VeiF7KVgtQvsv4EL95s9woApOhGZifCd/GvWn7Fvso7G/iMZdh2T7GwYOmYZrra/eylEBHQuOtePLGEcQUmdIy7z5RrX0z9gPKj4Ph2Hs3SWvZO0vEmSLlw5is//DBFv/TViP3vtWWbutXwU04zjhatvcbZFZj/AKRP1p3Wa+3bjOW0lhd7plv8iEH/AKmj4A1djbqcApJHaWkrOcLfa7ca4/vOxY+p6DyGw8qtPD7elQXBMPVnwyaVvRtoLDkNlKqK6KGK6plEi11GigikhSLFBFGigIpJEIpFFijxQGimokUBo5opFK0EmwpjxfBdpbe3MZ1Kg+BI7p+Bg1IURhSIsUUWktNhYBjm95SIIJDj8LCQQfjI+FXHiHIeHx+Gt3lAs4jIFa4gGVnTuHtUEBpyzmENBEltqg/bzwhrdxcQkgXe65HS4o69O+onzKtVQ5d9pWKw6FLZtlSxbvW5gkAGII3gaePrVPpPp6TFndNA72u8fBW11b1IzOxWwzN97fPyFE8W5Qv4a+i3UgZu669628a91tunumGHUCtSGLi2o/hH5VRj7QsVfuIt5w9vOGa0qIisF1gwMx8tdKvPNHL7oM9qblkgERqyqRIzAbrH3h8Y681686VkZMjZKuhuAup9DdUgx4DGdrOxPCh8ViJprnpt200KtXl0rC3YheiNIduEqXolx64mkbpqABStYpflN+8/+kfnVqmqfyqdX9R+VWm29ZmcD3LC5XqQqUoLtgHoKFGYbO49Hb+dHzV2amx5+RH+l5H7rKdG13ICRu2s3vEt/mYn8zSWLQKjQANOg8dKds1RnGb3djzH509uVNK4anE/upYYm3sE5mRrrSbYUeA+VN8LcPWniNQdJI07EoPYL4SPYUrbtUpNCKidI48lNDQOEorxURhbunrr8zUvibEWnc7AaeZOg+pqvJdA6ip8fHe9hIBKsCmt3KmLdylA1RtjEDxHzqSwGHd/dVm9AY+e31qRvTp5DTWE/sq0krG7khLWlJIA3JAHqav9lAiheigD1/qTrUPy/wAI7PvPq/3V3y+JJ8fPYDxmpkL47/3tXsPor0+7BiMsw9zvHwFxXW+oCZ2hh2CjOM8KW8IuZiszlDMoP+bLGaPA6D60Xh/BbVuCiKpAy5ol48M5loJ6TrUrFBFdz2Y9eut/lYv1Eujthx0/CRVKNFKRXVNaraUSK6KPFdFK0qSddR4oKNoUi0FHigilaVLz3z5aYcPzFY0WdD+IHN8pE1C8u8VcoAg6CZMACPdHrHx2rT8fxSzi7d3DJr3dwIB0yyqmZynXTwrH+UcV2LhX2mJ6EqYI8iNfmK8LwjrgLXCiDdflegzt32KuHMV67fTtbiki0oBCKAqLEA6AHQ6ExHyp1yUw/d7r/hVp/hEKRr6jWpjhuI7zKplnQXLag6FmOtplOhVl0ZfSqvzXhHFm7ewgK2D3b9kiXsMYHhJsyIDfdIg+JgY3v/0+N1VdHp9yeYHnFmLKNmLKdTqBGYEdEyzvPWprlvHWLRfLdItsHGRtkJXTvgmc0RBBMb9Kwwc0dkQtqCdnuNIJbqFg6J9T9A/wnMNpyQ4ZXLZsw7ykeBBjSeoO2laEnRj44URyaCsbWbSXy4DhDmbLEnU/4YYGIPTrGlO7vOjofs7aIDEM4Nx/CBmgQNR3RHmaquH48wHdWQCNidx1yj/tTnHcyG4uqEEGZGuok6BgYBnUCrrMS/1i9lmue69lf+FcRNxcxSSq6oAOgP2iyZzAnUDUV1rGhrb2ZYdo/wBsp9xVQ5gwJEgEEyDsJM1SuUbxu3FRQSW3gt3TprA8unWrbxDs7Z/di5JIy3yIzAnVbWuszrcM6aL0NVmYbWOLncDgLQgbY1FSnA8WHbSOytlQq5ZIEibpGwLRrOwgVdTesgHKVHaZxdtSFtsiggXLevdcECB5aRWT2OaChuWsMhUXQqO59/Ps2WBoh9D+URT8aVb6iSzLAckaO87a/cnpAJqpJDI+Rzv4T3G9ytXw64ay5cK757us3FUCVhW7qloIJ7x0361ZOG82YftbYMgEFAcwa2pLaE7ECBA6gVn+C4vKIbircXPb02YAE/4bL3lymRr4DpTfmFbTOAlxrbG9mJy9ookAznXvAGZiDVjp+bJA6w4j5CrzRh+1Bazx29ctW2dG7TRiM0Kq9QZkSIE6zVI4F7Q3V2GIXuB+zVwoXOSTBQyVddI6fGrLhcRZuqtq5cm0oPaDvornVQFYjUDMDAjQAddaZ7TsVgbFoy4uMUVUSzGcZTIcdEUay51MmOtdrjdWbkWYnEEDe1iZGC6P9QsK9YvLfssYziDlYCHVlE5SJnMjCYjUZhWM82cZGYAFe+wLgahmBYFv9W0U55W9pQQarlzQuZszZjmkHUDWDGcfKqFzrgzbvZ1JeyxlHiDPvZGHRln4jUdY5zqLW5E4ednVv91ejiIZp8LfuQ+MJbtqDBLKGcKmuYncmeiwBPQeVRGC5ixeJul7I/8ALo+Tusufr3zoc2kaaDX1qncDufYPclsxTIsNu9wxseiqST4Vo1vFLgMMlsBTiCoY6QCAo7x+8QIgAAFjV3oPVJI7jldTQqedhB24G6ujmNzHrXRWOYHmB2ftD27sSFJ7mVG09219xf8AVPnrWmcrY9rgMnNBIJjKQfwlTtFd30/rMeS7S1YWT050QsqWIoDShWgrbtZ3bRKGKMBQgUdSGhFAroo4FdFHUloRa4UcCjKKGpDQk4oRSgFdlpake2iEV0UeKMq0NSXbSQoSKViuilqS7aSAoaVy0IWlqR7aSFCq0oFowpakRGkoowSjihFDUiGBJ5aNko0UMULR0hFC0MUYChAoWlpRRQijAUIFK07SgAoQKNXAULR0ooFGFDFCBQtODUUUIFGAoQKaSjpRQKMBQgUYCm2nAIoFDFCBRooWnAIoFDQxXPQtENTTF3KN7PcB22LWfdtfaN4SNEH+7X/SaY8Vu6VoHsY4dlsNc63WJn+Fe6PrmPxrNz5tLD91rdNx9UgtXugNdURzpiSmHvENkYoyo/VXcZUI8wxBArnSaC6peIvbzzGMVxLFMz28tt/3e0pYHuW+6WXzNzM2596qjw64QASrQDlAHUye9v73lVe9oXI17BYrsrsnMQ1u7BAuqSO+pOu+jDdWBB6VcMBx1LADXAInaJzadPAmN/H0rn81lu28qjNYOyunLWBFriluDAv2hcYNICq9olwfRlOtMOLK4uNlJ71x2RlJYspbTTXajce43a7DDXkfv9lcTIO9cIzaggg5IlhJkRr5VXHxl9wsHslgd1P/AKjqzHyiKw8iN7juaCsQ47X7vdS03lXizWjFztCLxXJLaSDDZx4HwPl51G+1nk1Fm9ZGXX7S0NQNPeSOniOlJcq82WUXLesrNshc+Uaz1Knva7zSfNnMKi4BaaUMMDJ1P3hqBp8KyZMeSOUSMP5HyrObHCIfY61nuHxj2zmtsykdVMVaeBe0llDLetpdzf8ANygXRvsRod+oqA47hofMvuPqPI9V/vpU5juUrXYG4LhFxQhyETmDbkRqIPlV9zoyBqHKwWBwNBWbl32t3LBCle0sSIJ98eInx9atPMPIbYh1xODAy3RJtMchDRMjoJ8PGs25Za3YKm6iXbbaEHWGI0OnUVovs/52PaGyQUAPcOwC9FGtSMi7vtINBamJCJWkPVW5v4ViLeVL6tanYnVT6MND86tn7PLLZxLlrg7yQJ8jNW7nfFtdssjZbqMOu6jxB8RVG9nvJrrilIYG0ASusn0NUpYvp3ew18WkcUwPBClOfcQ+Jvutsa5ojXvAaknyqW4JyZdvKTiLgtIvuoD9ddqf8V41aw7m53Qwn+xQcvY67iQb10xbyyiLuddCaxY58h8pDBte5R9hfZUd7SeXgLmGIBcnu+UCkhyxag3bjaKQchY5RHSOutWS6WuNaZmjKJVTE+FZXzvjLlu7fW3mKt46hSfD1rpOqRPkiHbdpJq1cnI7YHK5ONNjsatuzIt2TqFnXp6QKs3NtnssVbkET3R50l7DeDNhrZfKDcfWTp8PhvS3O/FXuXbd64FZbbxCiT61exIYo46CZAzTulPbDdIFi2CYYjWsz5r4t+68Rwt0AsFXvAeB0+m9ar7SsX22Hm0hdgohvwN8dqwnDc0MjgXUW47EKCdSNdh+VQR5Bkc57Bwpp3itK17jnMVq6z4i6IRV0A6adfX1pblrsHti4hIRtxMT/fj1qp+1G4Owt2UEPfKg+AHX5UrxzBtYwtm1aOcmA5H9Kr5bDKy73Kyp4wF3MuFW+5GZVS3t51Vk4iLTgDdjsOtWLB4UXLZEGdjH5ms+4lhhYxSF2zL0n160zpFaSz4UEke9qw8J4mTjFBGUmfWKZe07BhLitP3pNSWAuB8bbKkDMdPSKN7c8IVYTB31FXXQv7oI48q7C9vZIPNqxYOz+8207F9EAk+BjUVjXtBwji/BIJJ0itS9lt1bFnMoLqw70dDFZNzbxEvi5Bnv6CrWJHocaKfqsWvTnsBvBMAtuQGa8wPdJgBVk/T8/CrJztw03LNxcwUg5wToIXUDcaGNjVF9inFjbtntCqIbjKS0iSyqQV8tMpI8quftVxpXC3MgBzFUIiSAfeHrAI8hrUjZg5jgSr0Tf0lY7xnDWxGUsZ36wxXWCJ7pP+rSo7nK2rsh7TIVthXLZioKGBBAlpEEzr57ClrwZFVjotxiU2Jgd3NAOmU9KinxYbTKImCYHvQRIU9T41mxktO61jRCquGJbRVBYvGxJO8nKNt+lTV5CLewGXLnzAgsxYkGDtAMH5RvVk5KsC0xuMDmByoR3e8YGhMCDqGM9RHU0ticVaxNx7b/AGZcFbLGSq3bW2cwdLgkFl122g1M9wcaVV0NBQF3jTsP3QBpJCgQZkDaPD4Uybh5yjfb+laFxbm60b1o2rCvdtW8pumC2Y2wCT4lCNGaW1iqje4qERMyk5gST8f1qjINIqMLmsqOiVDpgT4VfPZtywLz5DAMTNQuA4hafUGPI6Vb+XMf2YLKYMaEVQlynsI1AqrCKdunvtG9msICskqNp0NVXDcIZbYYLlYfpTTm3mXiJcKjtcDkKqqssSekDcmtg9nfKF23YD491Ayksm2Qf/EcbnxCaDaTW7ENbA9nC1mOjo0FkWCuhr65rZfIC+SAe2fZLR1mGYgGPuzUL7b7nZ3VtO3aYnLnxD7KhcAphrSzC2rK+AElvICtB4p7RLKM/wC5YW2tiwD2l0oRcvmYS2pytkRn17xzMoY93Y4txDA38RdLkFrl982plmLn9SYA8KljoH3FU8gitlqXsAvWbVi9imAe4rpatjKSxJA+zt9M9xmUT0Cnzqwc1cbKG5cuOpvopDXAfssMpH/5vhgRq86Pe95jOwEVAcd4TcwuEwtnDT29y+B3RB7TKcxU/dkkIrn3VWaqHtX4TetX1w9y4GVbKPnT3Jk9qdSSTmlcx1Pxps8UkwDQab5+Snxu0MpvKtvMnDMNh8LbuY52uXsS63CFO1m4k9MrZVWMxMidADFNeMcgrYPa4Vns3URDZYMXtkNrPe7yz8VIMEGaxDnbjV28VDu9wnKSxGoUDLbQeCKmw21Nbd7F+ZbeJwf7u8tfsKV1PeNoe4QeuX/DI8Ap61FmY82LCJmOJo7jxX4Uzg6gVYOSfaxbP2WOUYe+O4zhT2Lb6mJNsmJ6proQNBk/7SrKcal20QytYtnOjB1aGeCGUkbRpMxFW32l8JUZGkG53u6feCQJzDfuk761QBwkOpEbdBH+4ev1+NX8DI7zRKBVqpM5oPCU4/wpMTZGItgEEAMvVXUd9f1HiCDVL4fw9Uci6botspCm0AWDkdzMrEArIgwQY2qyYW9dwrEKua20Zk6Oo3MalWWdGEx1kVY3xODY2cxZrdy8qtbKkXEQHXNpBE6SjePiRV4SaB8j4Si1tI08FVzhWGt2rYcoLlxhIElhBOzKpXJAAJ3kmKXHGrzplzEWxpkWAu8gZR0B8Z1qb4pgcM2JexYuMiEAo695O2ZdbQJyyhAhTvOhnWmHMvDnwZs3L1vt7DyM6OyqzD3lPVLgHQ6EbTrVKw91eTvRQmY8ncqo8Vw4DIx6MD5xNa17O+Dg4+68ju2gdPFoH5CpLlzC8IxajuC050CvcuI3wIdkaD1HyqW/8BXcOzNhbw74ysl1Q0xMZbijcdAV+NTmwRvwoQ6tiqp7Z+bVsIQhHaGQo8P4j6VgHDuC372Z0Rn73eP8R1+daB7UORsUrs7BrnUkAyJPh1Hmsj0qoYHjd2zaa0py52ltIIitGF/s9lWrsRFbLS/2RuUHxfFbSOD2eHPb3gdotEZFP+a4UEdRmr6QV5u/YE5TFrh74th9pi7rd479lZJRR8X7Q+cjwr0jV6NtBWGiguNYDz9je2xlw7qh7JfRN/8AqLVtvMnEOys3Lh+4jN6kDQfEwK8+cDtk6nUnU+p1JrQxG2bVbKdQpWThVmpm0tNMBbp+BWu1ZZRYroo0UEU602kWKCjUFG02kWuoYoKSFICKCKMKCilSIaA0c0BpIUkyKIwpaKIwo2hSg+b+BriLD2m0zjun8LjVG+B38QSOteVuN4B7VxrdxcroYZT0Pl4gjUEaEQRvXsFxVa5z5MsYtR2qnMBC3FgOo8Jghl/hYEeEHWr+FmdnY8KpkY/c3HK8s4W7lZW8CCfTr9K2jlrnB7SBCguKPchsrAHpMEMvhoI2mNBGcU9id0H7K9bceFwNbb6C4p+Yp/wbkDFoqrcFsgMFzJcBhCfeMgRl2kT6Vg+qhM/TPiHfgj7Lr/SU+M1j8fMG3IP3Vj4PhbeMYlsMqIPeuhyHLdFGRVBPU5s0CPGnV/2a2fu3Lq+uRh/7QfrVw4bhgiBFUKEEQPznrm3k6mnAFUIOjRSRg5DQXedk3I67NHKRjOIb4F2s/Hs3T/1n009xf/tUQ+zNf/Wb/wDJj/7VX+NfUfl/T8qMRTj6cwT/AKAmj1R1Af8A/RZpd5LazmZGNwSMwyww03ABMjx6j5w0t3K1S3ufgfzFQfHOVUclkPZud9JQ+o6HzX5GuQ9Q+ie5/UxP/wDKu4nqJ0hrI/lUvPQq1PMVy7eUxkzeakEH4aH5gUpheA3j9wqPFiB+s/SvP3en84O09p1/hbIzoKvUEjgsKWIAonN3DhaVdyWMkwYAA8dtzVx4FwUIJYgny2Hx3P0qVtayfHSPL+zXTdJ9BZMvvndp+B5VOb1HDAajFrHrbUuj1pHEOW7L6m2AfFO4fpofiDUU3JKfduOPUK3/ANmn5foPLaf6ZBCDPUWO/wDUCFUg1L4RSxAAknYf308+lWmzyWg3uOfQKP8A7VTHD+GomiLA6ncsfAk6wPDaemlLA9BZL3jvkBv91Dkdfha3+nuUhwDh2RZPvH6DwH8+tSLIPAfIUc0Tfb5/y/n0/L1TB6Xj4sQiY0UFyWRmyzPLnEouUdAB4mBp9N/yrmfoP+3r5+VCPLQeP8v50IFXmwRt4aP4VcyPPJKIq10UegipVHSIRXRR4roo2hSTiuK0eK6KVpUkyK6KPFdFK0KRKA0eKAijaVItAaORQEUbQpYL7PktDG3sgMAZcxPUtqwHQQYjxqm8zWxbxV20dUd2dPJiSNDpuf0q5ezHgr4Vne6FBfKCCc2Ue8SfAkj4/CoX2h8vO1psRp/iuO6dQDqCdNDIiOsjxrw+CRv1DhdggBd64EhJclY4tfFwtJXSfjoB51ZuYuLNbbIPcvEq5Ylcrvvqv3bijVSCJ13ANQnsb4arJ2p7xB0DbCIlvUmrFjOHdq7odmEKf4w3db4NG3SqU87I8v7DYqFwNLF+I8BIxBtXsyxusAbnuwfAiO8Ohqx4DlzBj3rbwCNe1MkAwYhAJnbStB5uwlu7acsOzxWGABVpJZFjMoI3AnOuune6Gst4lxaCPCCB8SdRW5DmSZDRpsfKqyR6DSc43Ijnsw2Ud0ZjJGhEkiAfSPWoWzZZ3yqCWLQokyR8KeYe92rraBAnV23Cj7x6axt/Wti5L5dsQHt2yLVuO+RNy60DQnoDrAUxEnpV2XJ7Q93woocTuOtRuDw4wWFzpAxBE25EQBobxkaxMIOpHUKazLBcQUuQ11ULasxVmzE7gkCZnUmtN9quLObSNUmTsoA0CnwUaAVieCIN0PoTIids259QKq4c/wBS0v8AHhXnANOkLXOA4JLiv3wrD7QFisuq+8pgatEEKYAAjWajOdOCPiE7e2uc22YEIMpdTJDHX3lPlsfKpz2dYBRFwlVYRvGpYg6AggLl0MnrWi8J4EiOcgLW3UlDIkEgHszGmZYkfwkeFZGRnCGTWzwpHRB42WNctcCvsjHXuEO6MWUlYJZRMe75bk1eeSeWz+63GgkSGAYGVKKGkjQEASsH8VWOzcLZgxKy2uX77CFKtm3LAxpv8as+DRcrBcrKqFezSVJIEA5dCTqBpPpVjH6g2flipvx9Ju1hmL5mv2Vyq4Ia5KqxDW1DagwQxUyBoPD1qL4dhsNeu3P3gOj5lWQWdGOY5gRAKg7KVMACI6mT5mv4dHYSzM0sR7oXTwJOq7AQPyqxcncFsqi3bwS65TMLVyRkGaQNpZyPHQSBV6LI7DNbW7/7qB4DjpcVlnOdt+0OYFRMKhGqAAZABMxl69alOH4jPYGf3QQCD+IAlW1naavXMGHS6GudjKpCujABrTCSDpBFs/i18/GomzjLCWltpaHa5wqgjdpkOWmNPdiIOh6axT5TpANTSCpYYgR7TsnXF8Gqlbsr2VpFt2cpAz3FhnLDcANoTuYjyp3ypcGIvjt3ZNxmG2cSVEkkxGkeGtPeC8uNcthSomVOYqdFBOaF65pzQI01mpTlPlMIWNx072YqrESwy6EqSCognXeazJZSdhymv/UrFwDh9li0DOQApY5SGzCcwy9en8jVis4FVJIEE7+dZ9Zxxw9+/bR8+he0CpVezdM2ad9IiKYcX5qvkK1t1YggRmCo2cE5pLZoTQbAeo39A6F1fHx4Ax49wWDn4kkjrHC1NhRapXBOZboOW6mylmbNuAN0zDvajoSKaXec2t9sxUQ160tqZGjWwSxG522HX1rpY+v47huaWW/p0gV/oQKpmL9oFu2623gNoHOZYUmO7uddRpsPGrlhrgYBhsRIrWiyWSfpNqk6It5COBRgKEUMVNqTNKKBQgUNDStKkAoVFDQ0rQpBFDFcK4UrRpcKGuAoaVpUgrqGKEClaVItDRgtGApaktKKFoQKHLRlFDUjpRQKGKMBQ0NSOlFArqNQihqS0osUNDFGoakdKLQxQijAULTqRRQgUYChihaICKKMtCBQxQtOAQUIrgKMBQtHSgAoQKPbtzS37qaYXgKRsRO4TaKTvnSna2qRxwgU0yBSthKq/HL2lblydhcmHsrERbSfWAT9ZrEWw/aXbdsffuKvwJEn4CTXoRRWJ1CSyAt/pkWkErqwn9rvjt1bFnD2Cudn7W4GcKSlv3FHm1zWRtkrd68ee2fi64vHYw5hlsN+7L1g2hLfA3C/0rnOp5PYi1LVPCsvJXF7OIw62eL2EOXvJcZgdo2e2e0VuhKmGgTUi3JvL1zQYZ30MMr4nbyJuj8qzTg3BkuIGWVcDKVYDUwDIHQHwjT41a+XM9uFK7fw/SY2rkZ+vvZwAoS8XVJ7xP8AZ7wF4E4HE3LFyNEvfaIfAahLg16539DWL88co4vh9wW8UjKD/h3kabTx+F+viUYK4GpWNT6FwfExsRHlEf38KsdzE2cTZbDYhe2sOIZW99I2ZG3BXcEHMCJB8ZoOqQZPtkFH5QfCHheaPZ17L8TxBWxRxFqxYVsna3WLZnEaKoyiBIBLMupgTBiy8c/Z+x0dpZu4fFAbdm+RyfR/s/8A9ZWunlFMDwu3YW4LttcUXDkQStx3Kh40zrmCk6CRMCYEJh7ZXvWmZD5HKQfh0qxl5EcDg3TYrlQPY1ntIXnzj+BxNj7PFWbtmTINxCuo/C0ZW/0k1ZPZw6PeHaEFWtsANxIEfOvQ/DOa3ZTaxCLftkQy3FBkeGoyt/qFVHmj2S2wy4vh4LWw03MNqWSdza6wNzbJPipIhaaIo5W64vG9IsaA7UFm/wC42lvFACwGmu2bxH99auaclm4pA7pIzAjcaaa094LyzZz5rt5Rn7wUFe6fFiSJA20qf4Vi2UOoXMQwVD1ceK66in/WwDa1dhmYCsw4Lxt2nDMSGV8pY9dYrauTeADKCWhQdTsTI29Kol/gyWcV+9OjZY1VdYcayRGtaNwjmK3ekWmglZyOMsedVJYY55A87gf7qfLsgEBYXzphWfibJE21KlpOhTQmOmu1ary/zSe0IsWgEUZSGHvHbugdB8qsfC1tLmRkt5mBl4B6detVLDYa7NxLTldZDsAqZVOwPUxWVna49Ji4Px4WVroqY4zywbjpca5lgEwpgTvAqv4fhxuXLmqhEYSTufKnftM5hZEwrC2SFaXg76H5gmTUBw24+Ie8qZVUANc8R/CPOKl6tE6RjWx87brTlH9MWrTxPmFFGRQsARI29ZrOuBXeyZ0aGW6xKzrAPU1ZeFcmW7ym8L1zszKhT3TpvM9Jqltyo3bsFZiJhF1mPGJ+oqhjZYox6iXcFV5HloWp8QVLVjIjghwZ8iR8gJrGuA+zlP3pXZywDyViY6j4VsfBOX1tqf3lsqwMsnSf4jpr6Ux4tiP3Ut2RS6jrJYAHLptIOoq+xuSxwfw34UIkdYKy/wBtbt+9JaRTlygBwNp9Jjaoy7jL2GIzTdtHqYkE6f3NSeBe52jXbd0XlLBnRvuLrIHhGoph7RuZhdYWbFolm1hRm29JrXh0ltlCV/cetM5LuJZstcusi9qNB1AI0+NZNz2cKrrlBckmTOgmp9uRMWbCXHWBp3WaIB8ZNTvEfYj2iSL0Pl0GhE+X865//MMfGltz9ifCmMb37AcLLOXcCz4u2bQLKhBaOgqx+31MoQwQDpr4055U4Xc4cjlwGcsBsDoDvO8esUz/AGjsSWtWXJmenwrdxsjvPIbx4PymBlClKeyHhOfh93vRv9BWQcNw84tO7nOcd2CSdddACa1/2D8Wt3La4XOLfaAhj1OnT+dafypyLg+H3+2RjcuXO6meDHiV23PXwrMy+uRYjnscDq8CuVZYzU34UdzawvWVFq2Fa2hbI4Kz2Y76wdCYbu6SIrNf+KPcHfa42W6CFBBC9poQBozQOk6Vq3tXxHZtYuB8rS8ZRrmJWMx8Oh8RIrKuO2AEstpmNsl4BUly5AYkGdRpBiPrUeDO6WIPcKJWtDFUYVix3M+HRDZs2A6ElROjGRGYSGYkETIiCPKqNfvxv6RrM9DP0mgw2OuNcFwEoyvCkakbn4a6mNPLeleYCFYzDSW3A1Y65gekk9dR61oSHVSm0UFoHILJezLfSUt6wDKTCgkzG/gCPGluf+CYVbWZFS06rmQqM0jMDlYeLDYmTHWs74RzBFnIAilXzExq40DBtRPkCDIjwqucwceLHUiAMgiREHcjz138/CKaxridITHOHKdYbiQW/BBBMg+ZzeHh0ikOeOJAFVOgHTymrzyD7OExOFbE9qVvC7ktye4VthCwYRJZpMMD8DUHzb7KMbevtktShJCuzooIXqJIkeY+m1SCJrZQ4mtlgZbbeVSH4gkaEfCnfCePIe67OhGzKZHxFaNyH7CbbozX7ji4hBKKAJTQnKWHeJ2EQPCaY+0Lkjh1i6Oxe6wKMWRxBtuNhmIBI6Zddt6kuB4JBtVGxgIfZvzQLV+3dy9t2eYbwe8pAYToCN5NaSedP3241tyltBbc5RqAQPen7zEHToKwbknh0Xl2idBMAj/tV04Vyc93GC3ZeFLBmZSSLSR3nPjHh1JA61Smj1f0mEgcp0c/b2UX2RWwqgz2jO50iO8UWfgCR6zTj2fYeMTak97MQs75sjRHxqf4i2HN27btjMltUt2ND3mVsvaXIj3zmaesz4VRPaFhsTgrtq5IKAhrdy3qpcNmyt4MOo6iljBzpdFp7sSRw7nhereXMCWTS2FZWgOIJZssDRoET1B615v9sXateDXrSLdD9iDmyq4BJ0SWAUSCDMN51qGA5xfF2XFtXw+EtIrXbjQbty/75sprKW4nO4ObLpKzXl/2lcbbEX+0klQYSJGVczFRJJOoPwEVtGLW5rRsAhp9qnVwLtbIIQqx1bKubKxnKWyyIIkGdPpVR4rg3wtwvYcgqwIbZl+I0I8dNeorYeWrQ7JiNO7OvQESNOh6yfWsY9oGPylhMySPrvVqBhsN5vkJkcr9VIeO87Xr2JGIMSoVYE5SAoVgepFzUn16QI0TlDi1m7lysqkyptOQrDwgmA4k6Ea+IFY9wC2GX4mae3MDnIVYnU+Ggq05jGewCgEyUBzqK1rmzi1m1icLZdty/bkGQi3QETzB0zkaGI8aR5p4b2PdKjLlYAkz3QdD5MPLyrI8Zwq4NcpMaSNf61bbfMbYhLFpz3wRbYncqNFP+0wZ3KiqmRAHU9h/KsxAGmtKlfZ7y3duNntIcmZmFxiFXOpOWCZzEE65QfhWme23ihOCZLmHZD9mWyQ1hbq6tcDrIUuCVhsu5qL4fxnI620jIiwFjQAnoPGDM+NXDBcX95W7ynWGEgpqCCNiPLb51gzZY7we4cfyukj6TG6Or3Xl/huPZSGtE5lOYKdwR4dG9Ovga1vAe2aLaMLENIF0Zm7NoXVlH3S51gaLGxFUX2l8uW7OLPZiLbw6KPuydVHkCDHgIqGwNkKbi67yJ6gj/tXRExytD2/lcvkwdpxaeQvTXCOabGNtCGy54HZ3GC3AwnVD97UGCp9QNqx32xcFS00XgRmns7uXuvHgd8wnvKT+hOd8WxLhAk90PPmD5eHwpXgfBLl/F4fChmZb960iBiTHasFJiYBEmfSpYsYOcHXumRRAmwV9LfYZwX934ZgrPVMNaLf5nUO//Uxq50TDWgqhRsAAPQaClK2BwtBZ97ceJZbCWhvdcT/lTvH/AKsorP8AgdnapT2u47tMZk6WkVf9Td4/QqPhROE2q1cVtNWbkutylsKlOKLaWjkVdtUigigihNdRtKkWuihNBStBFIroo1BRtCkWgihroogpUixQUegIp1oUiUBo0VxFK02kmRRStKEUBFFCklkrstKRQGklSbkR8B81/mv970pRri/Maj+/Ok7LdPl5eI+B+npSSpBd8fDX+f0o5FGiiWtvp8qVpUiDf4fqaUoCO8PQ/mKOaVoJAjveg/M/0ob+x9Pz0obQ1J8wPkP60N79R+c0KCd4RL/h8/Qfz2oyDSigTr4n6D+e/wAaVinWmJN64CuHjQO3hv8Al50kkV9dPn/fj/fhRgK5VorH5fU+nlRCCBvp1P6D+dcFnyHh/fTyowXx+A6D+tGmjaFIsUEUauijaVIhrqNXRStCkSKACjxXRRtKkSgij0EUkKRDQUeKCilSJXUaKAikhSCgNDFcRRSpYY/G1azcvXbjdlIiBq9yAVSfAiZI6TtUPheZibWLW5sw7Qd7Zi6xE+g21mojjaZOG4UwWzXLjmT00QdJ0JJHpVD4vxsrayD3nARswJygMTv4tp8BXjsHSxw35XdOl0rfPZlZs9gylwAJJ294KPDdZPTeprB4MNMEZlZmUeIU6r4ztpWB8nc1d1kRWNwsuUAGO6V7qQZGaDMjatL4RxFxjRbeA4Cl1VsygsVbcROhCnTSNaxupdCnjL5fCEeTG5wb5Uf+0xxHLctZN7lgB4OoysRDDqdI11MCsi5Y4YbrGTCLqzdY6AT96tX5w5WGJx913aLC5IBIkyqnKPAAydCetVnjKItzJZ0XQBQCAfu6ak+hJrY6dM2OBsLN3ULPxarz7vtKcqcnrexCogbLPf21HQE+LfTXwrYOXOZLbs1iz3rdrMobQB8q991HloE/h9aoPH8X+44Ps0MYnEoQTOqWtnuDqC/+Gp8M56CqbyVxNrAuuF1KZVMkEGQWKzA2BEelTdQxnTY5Ze6fG8RlXz9oTG5LQUDvOez+Agz5nafWsRxmHa01ncZSC5jUM2pHwWKti8XuY7EdpdEW7UsVXUKoH5sYBJ3pHEYUs5YjMGJzCNNxMeBFSdOh+hxxE/nylIQ42rfwvGkhQq6MREfeUHdhvuYifzFabw/jq4S1D/8AMYFRMgDUAzoAV38KyrlC4mHxSdspbTuhhCwfdYzrAkmddRWkc84ZLotostbLAZtAPwgLuNSTEaaGud6k1vea0j2ne1NCNiUjieIWXzst7ugNcB2h8wgeExOmnlNFXFt2dx1MBV7QEbEKxJOmskflVXfhhw11rbCVb7pHde2xEab/ABGoO1XjlbCogdGJFq5ZbsnO+WCGtsToXQkTA1EeMCtMxsYDmG+P4UT4i47Ku87WLeIttiRFy9bRc2XqkAMWA+/bkHMdSsjWBEdhAtzSxLnsu9cLFLQcmSWZt2EwFUfrSGK4dbwpK28zuwy3GYgpqBICgwRv723ypTEY09kojKGBFvKYCrJHu/Ek9THnW3FlERBjdxexKqvxWl2oqU4Zw669r7VraAoQGCd5xI1LN7yzp1mNNtO4VhiiMArE4bVoUa25GdpGsjfecpppyTxfNaW03fNlriLmMDKZYEddNSPpWl+yvAIrkzIbcz4gaa9Nx51l5+c6EnufKtY8YvSFneA5ha9mCq+a6SSbZuMyoZBYLMKR1kxFRuM9nOLYs9sG4F+6S1u7HSVeJOo0WZqwcU4euGxPaYe62Us6FEMtaYiSsTrbnQGPEHxqz8S4ldvYbfLcYo+dZLlcxV1nMCIAzRMCKutlA09vg/KD8NjrJO6qPInBLl4RGVl0zMXlWUGBsZknbbxquY7lLEWsUc4aVctnyuUyyCMhiGBGg9fjVj4rw7E2BmQtcQKZcG4rASSCy7xoZIkedLezTma7cuCw+Z9yCSwIZVkQxOqkAwKn1SQtLwAVWGO0+1S3OmPtDDNDiQi5QCwIuEkKIg6HZgI1qlY21ftLZe8Ea3ci5bKnOFbLCIdNCu+U9Iqwc+YdFdHyE274YG0QCFvSoMdVJXUE9dfOmeKxmQixmFy3meEIPcy922WXZSmcwQNvHSp5uo99rXAeFA3FEdi1avZny/Yi6rDtLskXc6AKSY1WRO867yK0PBYMIoVRCjQDw8qzflbmZVudlZGfY3rzKZBnKCoAXuLOgJ18KlsXyncu3O1GIdyPtFlptkHZQi5chHXLOvWu86J1RjoA1o9w5XO5uIWvs8K75a4CiYC7KiYzAQwkGGGhBilq6iOUPFhZbo6KIKGhihqS1HpQAVwFDQxStLSuAoQK4Cho2jpXAVwFCBQ0LSpBFCBQ11K0KXAUaKAUM0rRXUMVwoaFpUuoa6hApWjpQRQgUIoYoWiGoAKEUIowoEpwYiZaEClAa6hqTtCKBQijRRYpWloXUIFdFGC0LRDUAWlEt0NkUuGqNz1MyL5RrCRR2NJzQFqh+6tCgKXE1FcTv71JXmqA4y+hpO2CQ52Ut7KMH2mKL9LSE/6n7o+matiqk+x3AquHLDUu5LEeUAAHrl2PnmHSrtWBkP1PK6LGZpYE14tjltW3uOYW2jOx8FRSxPwAr578m4j7Z7zx22Jd7q23nIFuMWFxp3Zm9xT0ljuK9iftR8fXD8JxTN/zFFgAaFjeYIRP+QsfQV4j4Tdud+4y5RKMgJOq24V0tjqiZhJGwB86werAujLQpq1GlsPCcSyqGymRGkbiJkE/e8vCrJwrmNWHTXx8evoR1G4rM8Lx7tFMAqd+8SMsAbdJ/CDuKOMQzElYF0DVTqtwdCQIkHowhh51wf0p3B2KqPthWzcNxKnfbp5fWIqT/d0G0z0iP7jyrIeXeY0BC3CbLbambZ9Hju+jj41pnDL8qJhgdm8f8rbH4VkZL3wmnN/dTwyBykuMYtzhr9pe9nQlF0/xV71thP8AGqgj+VVnlTinbWkuD724GhmNQfQyKnFYz9QdqrZsCzd0Pdul3CmNLm9xQPAkhxp1YdK0MDPMw0P5HH4Qy2WNQ8K12I23HQ/p6ipnl7iZtPI22I/Ev8x0qrG9p5HUx08x4EU3GLZZgz4a7+cePiK2WZBgcCOFSEnkKB/ae5b7O7bxVv8Awb+8bLdjNp4C4stH4lfxFV3knja3VCG81t0K5Z92OsnWCPSthuYccQ4fiMJp2qrns+IdTmT/AKxkP8L15+9mGAt3nZLucXCBkyaSVPeV/HTpTupY0cjBK3g/HypGRB0oI8rZLXEi9nvCCGKG5IIY+J+FIjm9LKNacLmykBhGq+RnfrR+XeCtN+wwbIy5rbNrqP1FRfEOSEvWMrEZyIRxoQR0P/eqOtsDG2TS3CwhtBZ1bxq4i4EW7iFBbUrLjfQaa6ePWtvw9vssEg/xBbP3vfPjIGw6Vi/KHKt7CXye0yqu56PrOxmrvxLnkxkBEH3o6nx/vepJc6JgLWbmtlz0srYyflWrj/ErV63aQq3cgkHoegFdyxltF3UBc4MnT+5jSarfLyteOkKsM2Z9Acu4XxNM/aZh3fDoMN2jk63BBB0/SdNPKsLsZuU8Oc7SFKz6iZus7AKX45zLbVVyC2QGKuqtAHgT5ny8KofFuIXximuICGEFG/5cdQPI1H+xLgC38bdsYmQHtMQjSCHERHgQJMVo2M5OuWV7PS4FMWjB7w89YXTxrQe2Pp5pu7vk+VMXPDLG6qXPXMmKxNlLZ2+8Fnc6ak6x1p/wXB3MJgCtwhi5MdYzD67+lJXrJUkOjWiDHe90nyO1PbkMuV9R01mPSnydbkAp7VT+rLeQpHgHL+EsYEoGD3LoJe5sQWE/ADYDf51M8oXsFg7C6qHP34kmfr8NgIqt8s3rQZkuQVcQM396GmvPONXBqCtkXrLnWYJVvDrpWc3MkyZ+2SRfHwVNjzat9lpzYa1jBmHaumgBkqk/SaqHtQxBwVsOhfug6Zpnw/vwpt7OvaHcAhwEs5cwBgCfwzI6dKh+ZbB4tc7LCghh33ztChdtN5nyFTQdHDJGh1nfe+FpOkDhflZR/wCNL+JYl1ItjQwOs9T1qxe07l+9iLVhbSs7EDpsI3PgPOtA4PyKbNp0e0unVvvMOqmIInrUxheZXTDqtqwM/u55gTsTO5iujMxYT221XCYCyk89k3I2FwGFV2Rb2KZe+TBgnZU/CAdNNTvVE50x15b6W+yfOz/ZAHU66geAqwcovfTtBetNczHuT0G5eNIjx0q+cHQkC9dVMwEIQPdXaSfEispjZMrKHcA25UEkjdKp3P2ayLZaATbEzLKlwuCsH7pBEzBmqjx7sWtqQGTEBnS53WKONW7QE+Gmg0Anxmp/2o8xnMrbqBIQrmW53/vCdQCPrVS5rLAKY7l0G6IuEsitpGsZWB0Ij8NaRbocQ0bLewCHQhO//CD2sI2JL98qGCqBGQlZznTU7wOhA61mWIv5tDpBkkmcxG+h8qtGM5mu9iuGLfZjyknXQFvwzrl9PAVE47BqRHxMCASN/MnzqaR7LFKUtdRtR9ywQguFcqHMBqRLDy6EbxM7nWKjuKXD3NFIJBMag76k+J/L41O4LhXdfMzQQcoB0G2vSWGmg1qC4dhvtVtsCdWGuxI93Sen97U+OuVXLStN9jF9xcUJcVDmzL2rQhhDnUCIZjoAZ8Kd4vCYq7NwJcvPauNmVSQLYJJACA9BPuzTD2X8ppiCMzMAHAGWB3gssFJ0XXr1rXMZirFnEdgQ1m6CjW7qgBbwOn20GMxM+tZ72iSQjVt5WL1A2+iq5y7cxmOw9y4MQMO1o9mVyzIAMMzHUDzHrWEY7AYi/fyFjduyRv0HWdgOskivVfPHErHYsLhVQQR3NyesjqBJOteceKcfRJWyMoJJY/fefxEdPBRoKMYEDi2Oj/ws+efQ0AcqQw/CLWHAN1u0uAHuqfs1P+bdj6QPUVZuZcecJgxatnJicWga70NqxqbdseDXBJOswfSlPZz7JL2JAu4ljZtMJCwO1YdCAdEU+JknwjWtI4xyVh7MdjZW/irmqPiXNwIEABuXM3dyqNgqyxgCqjcxkcm5t39gjDiyOGty89cLxN+3lZTkVhqzDKrBYMKTqdQPdk1YcJbxPECFY9nhkJZnC6B46Tq7kagbCQWPQzPtX4VasFc917+KfvNcfurbSNFtIPdBOijoNgNKvWJsW8Bg1DtlFq2GfxZmAL5fF3LZV/Tpp4jGyu11x5VoZMgb2r2Ub7Qb4wHCOyslc937Nc8Fu/LXGYnUtkkTGhKjTQVhPOWGFuwt11FsXAFRAmUM0DMVB1hAZJO5I8RWschcW/fk/fMTGWy9y1ZUqDas2QMzt/HdJIBePu6AACvPXtb5wbGYlmk9incsL+G2DvHRnPeb1joK3Gxa3fhNIuq4UhxLFs+JvNZYqocKuWVBtooRZE9QAYJ61XeaOFZrfagHuns2nfNuD46+daf7AeTFxQdnMorKCqkBmLCdSdlGXp1PlSft24Zh8GFs22HasxNxZmF+6WkaEk6DwBPUVGyV7ZaaOExrj3Nlk/LPLt0jNqqsDEzr4HoPKatfBuVm1bPDA9PeHUH0rYOA8Dt4jDWrloShtqTGkMoyuka7NI+R61BcRwNs4i5btXIu2LdpnXYkGc497U2+4GA6HXY1Tmzp5XuGmqVeSRznEqpvdFsE3LZuKIm5bEXAOpKHusPMFaWPDcFiRms4i2l4QydowsnN+Fg+UEHaQTG8xNX/AA3LOaAAczgNAOkj3onYnwP6VmHFuA4fDcUs9qoNjODctssruVKkSAVDQYB20qTFId+qwa8eftSfiuDnfBSOH40BemJgANDSARoddfDefOp48fjrpGgJ8TTVeW8JeZ0DNg8QpKhV+0w5AMZgScy6HXvEdau/JXsx7LLdYDEMubL2kC1OwKqCQ5G8liP4agyIYTRPPxS3m9W7Y+6qbcBuYq9hrj22WwWt2ze+6AWYktMHU6Dpt4ior2z4HJi0CASEXROveMaDyj6VvGOtXUyN+7rd7pzKjFwp6SjK0xvtHhFY9zPw6/hsZbxt5O0w/ajvQQEWYW26wCjAag6gwIJNWoBRGngA7LFfkGd5c5ZzzJgyrz0MMP1HwNbl+x1yWuI4imIbUYO2bg007S4ClsHwjvuPNBTC/wAn2r9rE4h2PZo7mwUjvEkNH+X6716Q/ZL4DatYEvbKlrtxjcI1ym2SipP8IEx4u1WsCfuvDfI5T4GnUtjFczRQ1B8+4/ssLffqLbAf5mGVf+oiuhA3V4mgsQbE9reuXPx3GYek936QKtHDbelVXl6ztVywK6VsxihSyJDZTtRXVwrpqVR0goDQxXUkKQGgoaA0bQpBQUNBSCVIDQUauo2hSLQRRqAUUKQUFDXUrSpBQEUJFdRtCkUigIo0UAo2hSLFI306/wBz0P6Hy9KWrqNoEIiGaKN/XX5aH9KKuh8j/Y/l8vGj3fHw/wCxpWgiPuPj+n8qUiiXNx6/oaG+0A+lFJEwu3rJ+ZmgxHQeJ+kH/tSiiNKIo1B9flsPzmglSEjX0H5/9qC5RlPWi+f9xRtKkDGKBV8f7/oK4Dqf+w/nQEz/AH/evlRQpAxn+/z8vzoyr8/7+lCorqSFLqChoKKVLq6urqSFItdQzXUghSLQUNdRSpBQUJoKKFLqA11dRtFAa6urqVoIpoKNQGihS828331VXsyo7LCpbBcMLqXdLk21UAGWaDJmAfCKxLFreHdLEDcSYmeuo2rdfaKlvPmYI9wZiSGz2iDqCozyxnQ6Dbas14hg3vuqosFiAqqDHh0B18Yry/EzBzW3yV0znuc/ZRPK+S2VdpJBX3eveEjMCCBpvE1o+N5ksFrZynOIINoiNGJ7zZZfMIEkyPOKstr2K2bdnNdukvlAYqQoBPRQRrHiSPSst45y/ZTMBeYwdNmMAxqAdD5VJD1aHLa6Jm4/CjkwCJBKTutvx9omy4AzA2ZWDGVoJEt1JWYPWRWc+zPlrvNiL5ZbNpC5YQ/c8OveZu4o01J3pTkHjly5h3wqhjca4qhgCx7NRt4TGgjxqxcxcZs2V/c0cMtsg3NAftgNUAEBltaiJEvJ1iszDgfiB9i99lpNDXe4rNOM465isQ9+53SSIU+6ltYCoo8FUADx1PWg43qgIErOkHeZG3TbatU5e4RbxeGutC2LtvusdAoWIkjwk97p1qq8v8n3FxYw7gMCFIg5lefddY6azr0Hwp8OYJpCDsR4QMBu/lRAwptYfIIDXRLdO4h09Qz/ADyVKezS8vboCMymVaeoMA+Wm8/ypx7QMdZOIYhiy2wEXLlAKp3SCSBOYy3WZFQPBr0HPakOHLQwCkZdRBG/pFS5EZnaQoZSQ/bwpz2tOFZVUA90hWDZgUOqz4MNRHltU3jeNdnwi1cBlu0RADvKuzEj4DpWf4jBXLhLXGhSxJY6fAaageWlG4lj1e2uGLQiOXUwNGIy6x08htVR2GxwjYd9JBKcyfSStY4+f3yxhcQhC3FcW2k6BXGYAnyYEa+NW3hV0dgihZbLcdI071iSD/rTONDrA8KzXkJyOH3gPuvaA8Cc53nyPy9Kr+D9pty3dtKLcrbuSwInTMwKgdFKsyx51mMwXvJYzhpP8cq53AKJ8qy8QxpKkwLVoM2ZgRmfxMkyx1AECKzvm7mppKW+6kZQxgu0/iPTzAq0+2BxZdLaSSFzAHbvHuQJ6KZ8Z1rLsddNxddw/wD3J69PlWv0zEaQHuChn2NBW3gsrb1Yq90AyTsgBJZvKJ32GvWrx7FudWW7lIJt5oBaCYMQPiNYjf4is9x+bJ73fvLAJ6W0OsDpnYZR5K3jUpcY2UHd+6rSdDmA0AHT0qTNw45mFjhuU1pLTYVx4rcZOIX2QMYxDeYIJ108iSDUBzDzLeGIITMiIcgAOYNJ723j8gIqT9il5rqXSwNxsxPe6ZllmB/hIBn+dSPNOBFm+yqC6Xx2kGN4gkHxUktp4VRYWxSmN25ApTaCRqVr4fzebrXXcBFyG3bSY7NFSQdxJfzncUhy2EDyFm2/djRXtXG62z+ErtJiNOlF5a4Gt+whYDOuXsywGVgV7qvJiCZXNtPpS/KHBmS8LVzvLdzFU0EFRpuTDqdB4z6VB9Wxxc29/hSdnhNubeYcNbuBXzXTmkxHchQMwKmQZ38CKrF7A5sYmJtZmR5uH+FwJKGSZkiR118qc+1vgKi6l1IBuq0liAAy6PlA0IO8aGZo3LXD4RFRpmAVzBWzEaEITJgeMSdKjDGxM1Ms3yqErXa6UhgGJYhFAKMGLjMqhAcxzRqxVmAJI2qY4hxK7dDWxcFtgSiITFi4WkkrcGoMwQGkfOqxwp7mFxZR84FxXW4XDL3LndmNJGzSOuhptyqB2i4e47BCxz3G7yC4jMVOoMBl08YmtPByHxEBh5VaeBrx7lP+zDif7v3XliSEICkHtSYyloKkQNCR131rVOEcTW6JGhBIKmMykGNQCYms3uYy069xS5GYEISwzCSrBSCe5MyQIkDWpL2XcvBGJZgXJzrchkd1Y95GUgAhTodzpXadGziH9oG/+Fg5uNtqpaFFDFHyVwFdfqWRpSdCBUPzTzNbw6szhgQDllHCOQJyi7lKT6nofCqtw/ne4zl4AtFUNtdGJZ4VVbL3l7wY6g6QDVLJ6hHAQHeVIyAu4Wh0YUSxeViwUg5WKNHRgASp8xIkdNt6WAq4H2LCj7aLFdRqCKNoFi6uFdFDRtLQuoZrqEUrS0Looa6hBpWjoQRRgKAGhoWlpQgUaKBKdWWprnUpGMtNooQafCwDQmwBUfdCmGMU1t25pUYU0ZWilBfppefCe2JvlM3FAKWxBmkYqRrrChcyilLVLLFNaEGgRaLXUnopS3ZFMUelkumonNPhWGvb5UolgERXW8KKZ23o4uVAQflWg5p8JrxK3vVT49cIBq3Y29pVO4+86DckAep0FOLvbuo9A1bLXPZTiw+FTKuVVLKBmLGAdyTGpMk+dWuovlThQsWbdrfKNT4sdWPxJNSlYLzZNLoYxTRa8+ftqY6bODwwgm9iC8H/AOGmUH4NdB+FeTub+N5MQhTMbVkC0nUMkt2hMf8AqEsa9C/tg8S/85bAPet4fIvXK19mzt8LagT4keFYxi8IHQJatlgVHvKFUEbHz18N65zMyAJt+OE1zqKnOReIqr3LFz3bh1zAgZGjLB31U6f1q/2vZ7hz/hZkYLIIuM3XQwZk6xHhNZlxHly/bsWmkdsqh2yglxatmNoEhAyhtxEeFX32a8y50QyGmTPgfCQfu+A8RXJdVbIwd2I7eVJKza/lRHMvLd23mLrnUf8AMUbj+NdwRBJI0FV/gmNvIZtXGQdIbQ+q6qT6ivQYtAiAEMid5JU9fHN4aa1kHtg4SyBr+HENbPfWPeXrpAAI1M9RPhVDBzRO8ROqz/CovgrdpS2F55xiDvW7V8HyNt/P3e5/01B88c6ds1lhauWL1kmMxDIwIUiGAEkFYggSCd6jOWuLXLqZmCifCZPrPT40bi6Z1KnT06Hoa0o4445vc0XxY/8AaUP1DgNLitX5c4v21pLg6jX+Fh7yn0P01omPvkSDsdQR08/51jfKvMeIwTZYFy2xBYHY/wASke60b7g9a0/hPNNjEDutkf8A9Nzlbzj7rD0Pyo5mO5rSW7j7KBzTftVl9mHHzaxdqdmcW29H7v8A7irfCqZz7h/3Hi18LoBdF5fDLeAuED0LMv8Apo2LZrd63sZZCh8e8IHqDVk/apxVsYuIGfsbOvUd+7+kVYxGl+G5rvB2UjXHt35BWh8vcy27oGVhJWSDuPKqz7ReZbVq0FSDcJnT7vr/ACrLOC8byJI95tB5Dxqsc18VLsLYPebc+ArJjikmd2zwrZz5Hs0gfurD+/3cQ5VAzmCzHwA3JPgPCpLhXKrXe6l5FublW7oIiTD1YfZJwMYYi5fmWQdlbXvZ5IJzgRqdNK07E8ItXbbMqL3pBXZl8oiRHhRzWnFAc0WPNKp9NqHO6pfLKPhlsZ0lWYqBmzZc3UeRgmr3iMUnaKzuiJZA7vW4d40qr8a5QdcHae2Wa7YYsVnTKJ7utUnm/HXsRctfY3Jgd1OsjVj5DzrXBcIm0OQCFrC249K9cZxNlr92+LBXMoRbvuwYkt4ztFVjD8TxFlcysbwzyADJVZ3Jn9IptwfFOuaziBNnOILNJBPpO1K84cO7BxctsRZYZBEHVh1jQjzrn8h5dNpk5KoFjnN1Aqcv8ds45WtsB3iATMFW2BMdfMUblr2Ztbu5Huk2yDlAhmPgT0+AqAwvChgcO185Lukgb6nYz+IHw23q2chczXcRadjaKagBt8uk93qaE94wLpN2qXHh7oojdQftA5CZAWtmQDt94fzFUzhfE2/wrozLsQ1aRzDx0WHQXbocONQFOYeZPnVb4mli+S1tgSNjsfQiqzpQRrDfaeD8LPyoTE62qP5m4ITbHZKDbWGjbUax6HQGpTB4vEyLyWlsC4qoMmrsw0JkDbwp/wAKxMDKwnxHjWicF5ltEgsqqLS/ZoBpPUgRoegq7hdWMrTDI6j4KswZGttEqsYrjJxCHB3gcwgi6JWD/F59PjT/AAXL1tLKq7GQ4Om2+1S2I4PaCm8wIvXWDD4nQDyigxzEqQR7rDLP3jWsJXt9rjZrZTAkKv8ADMbdbG3AwhQoAHQLG8eJP0pxz9xLIgRfeuEKo8uv0qYUBSzGAzRPoNhWY8wcUF3Fkz3bICr4FjV7FjGPCXv5PKrSG/aEy9o9vK+HYAyqEJEmWDqe8B0+FVDjPE3uABoKoXVYJOUGWMg9JMx/Kt5tcECvbukoxW2SVaO6JGqGCc4G3gawbnu9N12jKC7gp1BJ6wB66+c1UMgkOpvBXW9PiLIQCq+bEAbLJB8SQJk6/wB6jyqTs3+6AOgyj4kx6Hem93CyRkmFUFifvMBDbeZiNvjT/g3KeIvKWtWnuKD7yxA/hkkCdfdGtSOYXHZTyO0HdN8anctJoQobMNJU3Ces6wB9aaYLBBh3WhlOUEnXeTvseo1jcdKc8fBtsFZYIAXIwaVbXcnXTxqC4rmttqYDQwKwdGGknr6HWiGuKgLwStW9l/A2uIDbYgm8Sd+kaxuPGnXtxsMl9WL7p3vE5TpA8/Go32X8+fu1toQMe8yad3vd0gnyIkxvEVTuaOKvednuEszGT/26AdBWQyMiR+rm/wCy5rq8wDtI5UZzTzJcvkKJgAAak6DaalPZ7wW0WBuN35EDoPPzP5Ujy1yrdvvksoWO7NHdUDqzbAfU9Jq6YTC2cMzdkwvXigEkaK50ORZmQdB1PlU2TJpj7cd2fhZcTCacVu3AR3FZiWEAAAz6T51iHtG9rb5nt4fuhGIN46kxpFtdgBrDGSdxFMueea8RhcImDLt+83Qz3iYJs23jLbBGzsvvfhXTrWQY7WFmY39fD0qXE6cxrRqAtaWTmbBrE7x3ELuJvAkl7lxgAXMnwBJPh8gKuP7QvMT3uyRpygDYghrg7rNI3202gHzqv+znli7i3u2bDKl1UBuXWYqtu3MMBEyzGBA132GY1Me3fltsOcOnbNiD2cMzqEIykKIWZyEDQmSTm1PTZbA5rmkbD4UUcZrdV3hXtAOHwF7ChY7Scr5vdDgdouSCCSF0OkZj4RWP37h3jrNS3FUm5l3C6T+dE4lhe751swAM58rXjg9isPLPMlzDq4tObbXkFsmNQJmQd1YbSIMEiqfzXiGd5JJPUzMkdZOpJ8TvVq4/fbscG3Z21m23uKFLhXNsPc0EuQsZusA+VVfjZ2J2n8vP1mpoGgPtMEQatA9nHHLyBUtOQbuVLaD711gVQ6ggNmIE6T46VUsBfxFnEFx2i37bMXJBzqwMPnkTMyGDeYNF4bdYZCkq1sq4YGMpBkGfKAYrQONcauYm9exIUqboVrtu3MOcmW5DQT3zLwZ330FVyBG40OVXeGtVn4b7YrS4V3YD95QFVSCVZ2kBgf8A01JzFSQREAmQRmPMPE+0t2XYySupMk5pOYyZ3Ovxppw7gVp7faTcIM9VUeYBgyy6DXxqxezDlXCYktauPiEvCezUMmV165SUPfHvFeokjagI4hx4UBYxg2VewfF7isj5iSvj1U7qfI7VquG5kv2kS9hbrhN2tyChE6yjArmB30moe77JbnbC2txRbObvuIZcvRkG5OwIMHrFTuG5Yv4KQzC7hjGdgMptltMxVjoPEgkeMVQyadTmchVpDe4Vh/8AvLxhs5l7I3AA09n7wk5ge/3cojYQR4VWeI+2MXEuWsVhVm53G7No0Ok5HD6jcENoYIip/jNy3guzvGwb1tgyvoAqTsQ2q6idToRsdhWH3uJWTirbupNkOMy9cs+75wIE6T5TUuO17v1J0Qs7q0Xud7uFtXMEBKSSjtuLbrI0iJKnfoSda9p/sp4m0/C7JsoUXM4bMILXAftH1JkM0wfDTpXhbh3Hgt4u1u29u4SpFwA5UJlSpjukDQRX0W9kvLwwuBw9gT3LYLSZOdyXfXT7zGPKK0cGIB2oD8rRjburTVA9uuLjDKn/AKl1B8Fl/wA1FX+sj9vmKm5h7fgHc/Eqo/Jq2YhbwnSn2lVvgSbVasKKr3BV2qx4ethqy3BKV1BNcaem0urjQGumkkuoK6a6kguIoK6upIUuigoTQUkKXUU0M0BNJKkBrprqA0UKXGgriaA0UlxrqCuooLqCK4V1JBJ3UkUW00iDvsaVpK8I1+fp/SiChSBjoPIj+VGvdB4kfTX9KJeP6H5Ef0oz7+gP9/nRSXP4eP5f3pQt+lcnj4/l0opbX+/760LSpCfCiMfl+fn6eH/agJ+XXz/pXR4/3/fhTkKXb+n9/wBz/wB6MBXUE0QghIrq6gpIIZoK6a6aSCCgmhNBNFJBNcaCupILjQGuoDRCC6aCumuNFJAa41xNAaKS6uoCa6aSC6grpoKKC8jYe2MRisq/YqqltYGQWQSwXO4DM2+WR+dTOL41dw+QnsLwOUi7ayC4ibKGIIyMcuoIIPidas3NXJpS8hUKjWyruHlDdaTmJMPEgxmXQgDSnnDLd5O0E4XVi4fICXzEEI4yBSEjQ5f6eanGdIKa2wtIdfwmDd4CpvMnPj3LV3s1uSEgswMLrlJkHV9h8dhWZgFVie/dPX3gp2HxP5eVbTheVCffuKIz6qDJ7T3tWhRHSFH0rsF7N5vI5ZWUQuqREbNpI0HqfGavY3TxjRktZSiHqjBllDO4P34SHA1GAwXahv8AzD9ywNvtD/iXNdxaU6H8RQbTWU8awWQglxmaDvMk6mW8fGtP9tFlWuKxuDJbGWzYy5mW2pghzoAztL7ajL4VlnOOGzBbokhSFbXbNquo+Iqo12p9FbzpWvrTwr7y1zEf3S4FE3ApDwcpZWDS8z3ipCiI6CdDUjyZxFsNgrmLZi1y59hYzHrHfIncW0k6bMy+VROL5aNrsrSvPaqrBQAc06MARIKzAGx3kA1Oe07l1me1hkIyYVAoB63GIN4wo+60JPQJVINiYSfkq2HENtQfC+KC7A7O00kE/Zpp5A6H6irbjeVbIRbpRcr7G27aGASpEtDR08+tUmzy2yFftEOZiVJZQpCbiSwaZ2BAq23saXwrTcI/8zYCwSUDdjdLQ0CToup+PjVebFkJthICrxytdaIOX7d4BC920Jy5u64kHQEHJsPOovmP2RYi2GuWnXEW1EkWwRcEdTbOpHmjN41JcP5twqM+Z+5laFbVs8ASsd0wZjXafKbTwXm5CEe2+soCA2+pAIP4oiQdprKkyM3HdYbbfuP+VI2NhG6pCcwIcBZtoAXN4dsgIDBLalsx/wAxJJkknLsIFVrAcQF5jbVVzK5YsO6GCmQx8DB3ETA8atPt05fUZcbZGRXYrdQaAXSMweBoBdUGR+IH8VZBi8a9q4wtmDcHfOkw26g+G0xW/hxx5EWtm1/7pkryHUVpVviYcveMn93tsxMble5aGs/fZF9AfOqzyzwftmRcuUGWuXN8qASznwyAFj8PGlU4qLFpLbILnaw91TIOQT2Q01BJJfqP8M1euG4TD2cOFLtYuYtAYbVhZDTBgABLrjRjrkQ6d6pj/RbVJwIcd1V8Mi3bhunu20GRFP3baABATprAzEbkk+NKcYvNjH7qgO7wozaMICTudTp5AbdZW4naRJtqVut4LPZjSJJ0zN5DT8qn/Zpg1ss+KaAMOgIP3Tdc5LagkEbkvH8FVBLZ1fwi14JpWX2YcEbCtdssveYOoJDZQoABbMQMykzqNqY864+cdaEiLdsLp0zKZ9Y0p2eY1s5CjHE2ycqs0TbDEHundSdZRgR8zEDzDw9+17ZSLnaHMrJMBSZgwNCNZB2FY8jLyDK48jZOdlhzA0DyrFwPHH/hQeGLW0ZO6dRFwZX0/DPWori/Fbpt4W/LWw6G0W1JN224nXpmWDPWKsXL+KGGs29FZDmzo6TnDsQfHu5VPoYqw4m1h2tvZtL3Ba7eyNJRoEAySSykQcpMgx4VUD2h5NcuP8FSOcSKvws74likuYpMMz51zl7jCSqAKT2ag+HU+flVX5s4Sf3sm1sQtwxoF8VBmPTWg9nl8g4vE6fZ2ywU6ktccKP1nymiWnu3n7R2VQe8xnKCJmOmbTQAaDQTWwI3RmhwBX7qvy3flXwY97ts278vsq3DDPabYMpOrL+JTv0IMVWuG3rmGuG2dWjfKSGmQGUncMpMN51YeWbPahlM6KW84X3fgeupNPcbfAstnTvIUUGMxAIIKTII173lGhrMjyTG4tKDotQsp3ylgewVmAA7UkLJgBbkhQX0C6wTJJruD81qrMx+0uoBat52CrbIIklvebNrv4VL8qWxdshCYOUQg1kiSrZTqZbQxr5RWaY7Gt2gVgCQwJTJBLA5Tn03q/hdQe1xe3YhV8uAFgC0fB8z4sYiztcs3bvZXAFEW2M+6VBMAZTLMJ1Eda0DmTifYpmCNcdmCW7ae87nYSdFAAJZjooBNZTiOZTbNtUMtkCmJn7SdY905di3wHla+E89qtpjcbM1vKM5UKHZ47gkgB5nrqNa7jovW2zN0SHf7rnMnELOAqnxbi7tf7S7bCmewa12wFvUd/vC4wY5CRqqawRtFVj/AIMUvm3aOZGIvJckrFpQYzFoBZdvNhUZzriWuvnuGyQ8utqzqypqNSBAfSWYk70+tYVRh8Kyl1ftMrLnl3Uw0qp0yggiNtayOq5ZMux2taWHh6o9+aWtch3rj2Li2FCLbkW7lzvm7dnM+cQoAJJBdZ8iY1vBqg8u42/nEMSXLM6tki2uUiAndIeRI3Un11tfAGuw63dSrEJcgL2qHVWKgkKwnKw2kSN663o+a2eIEeNlkZWOYn0VI0FUPnrne5YuZUVGVlIRve+1UjMjgGRAiNNZ69J7l3mJH+zZz2gLiWQorZe8QpPd7ikA6iSPMTebnRmQx3uFXMRAtT1GFAusEagiQR1HiPKhirWpMpBNDXUIo2hS6hFcK4UrSpCKMKAVwo2lSMDSiNSJNDmppThsnlu9R+3piGoc9RlgUwlKc3blJ56TLUINOAQLrRy1cTRJrpooI8100ANcKFoUjCjKaIKEUkUstyj9tTcUJNNoJ4eQkMfc0qB4Taz4mwnjdWfRTmP0FSvEGpD2drOOs+XaH5W2/nUGRswqxje54W7LQ0Aoa59dKvJHt4wjNxC/fIHZi4uHUk94stm2zZV8FnU7S3lUBwjDALnbpsPE/wAqvX7SuIAxduyDoFa5r+O8/wCgQVQ8be90eAH9/GvO+vPIyCGqtNsoT2r8XuYdcJirfv2rzAzqrrdXvIw6owUgjwqvY+8LNxL+EB7K9LHDywe25UMyqB93WUPUSOlWD2wW82Ab+Frbjy1y/kaPyRwoMLJgFhZXXTvGAQF0nMTp46abVPFkMbhNLxfII+fP/KLMimaSLU3yd7SVZQHMkAgqdGU7gnWQRt4bHSmntJ5yVEJZc3aHu9SS2yvMiNyfKnHHvZ/au5nWbbmGFxW1AP3XIEE6bN061lWP4PiExgs33zhMrpKwGUxlbLvJ93bcbmqGDh4c0hlYarctP/CZrBCuPB+GXrVoNcRcmVSXRldVze6HynuH4RtvUryvZt38RbtPcyK+aWETopIAnSTtJn41Z+V7sA2wsq2jZyFmAT2ZEEEEaDMPGpnl1MBbRsLctiy15/sMUJZld2GQBm1TszAhSEYaH3pLow3KkcBsfCjZitkOofwrZyZ7M+Htb76G64lWNxid9iqoVWB0YCam+WOSMNg8xt4ayDJYXGXtGg/dzPmZdNwpAmqLy7xW5hrrWLv+LZaHg6GRIZZ3S6pDD1itBvcyK1vMNjpBM/2RVRue+C45NnN/ur7WM8BMuO8jYfGPbuWgti/auW7j2x/h3ER1ZgAIAJAIDqBqYYEEEecPbxxxr/EcQWVkK3OzVXEMFtgKCR/FGf0bTettTjDpczqcrK0j66R1U9RTf2z8n28Y2Fx1sABmFnEeX4SfMEG3mMkg262OmdSZmQuFU4c/f7qvNGCNliXALiB17UjKRoAY9JrW+EcmYe9lKgAhe86xB8FknSRpIrP/AGk8nlscbdkLlFtSSPdQ/wDaKluBcOfDWmCXLhnViNF06SazM57YnDQ7f4TH5TGR6GtVr43x68oRbeFyrakBmhifNf5zULcvYrtDew9wu7wblh2jLpr3CZIHiDPWkuA8BxmJIu3LjWbUFlJJJaNoXw86f8RwIe121uBfswJB98DQ5oMgnxqJ87wQJa3VAa61LTMBxHFNhbRdUDMYu/wzpr61VfaLzK1gBLSqHggtETpr/wBqd8m8bc4YoWnKQTm1ImCB5gbT5VmHtb4kzvLA50mI934+cVsjIjLG0fC3DJ/+NflRXBMYt28LTXOx7QybjmQD4GeprSeD38Pa+wS4cTc8oZQTueoECT6V55bhdx9SJk+p+WtT/s65ibBYjtcmbKrKVPmIkT10+VUc7prMk219fb7rJiyAwVW62nlnkFRcm7d7VbgYpbDmFneR5eAFXXljhNvCWWtq8kEsC28t0HlWc8O9qWATDreBy31zHJAzG4dunuT4esVn2J9rWKvsG7iZXLSB706AN4j+xWJmen82Ye6Tb4/HC0hnRhtBu63vHYFcSpW7ZDxuVAkehGsVRfapwq1hrds4W2VJMlhPQbMZg/8AennLHNZZFcHK494KdR5jyNXa1fTEKVYA3CNBAyv+gb86qYk0uNcT9/sf+FVsSCise5c5kFzRtLg3Hj5j+VWbC4vbyqO457NA1ybL9jcmSrzA9B09KUw2DuW5D6spysQDDfxDxBp+XisfH3ouPI+Cs6aIxm2q38Mwdy7ftv2phIlTsNdx5nb4mr210hWBAPekMfLwrNuB4ogzPhVv5w5kRFtoskvMeGo3J6VuencyMtLZT7hxasRS6mWoLm7mAWrDXPIx69KrXs04cMn7xdElmzICNP8AOf0+dRvHXGIv2cOZ7NftLgH0B9TVr5knsytt0U6KASBA0Gn9Kr+os90jm48Z55/C2+kYrAw5MvA4HyVoHLGBW8jOTIbMsgdJju+czr5VkHPPDZYynuOEkHMzsc0uUk+6IM9K0rk3jaYfBdpcJyoWAE95jOiqOrNuB8aoV3GX8VfJAVQ2S5Jn7O2DJD+JacoWdSQT4DYgiiZjRtad6WhjZJeXPPCouLwpEAqFaCASxUMomSV1EtpEiDHnWr8K5ntthra2QilUUPZUlWVgNWI3IYy2brOsVN88XbOJTI1rbui4O66A/gaBl8cux8K8t+0nhD4W6bctvmR1MEgkxGukHQgRBHnVuLS11MdaineMhungq/e2P/lM5klmSQD7pGbKTO4M1nOEs2wJYEgkkEGdJgAqRpB118NKgjzXic32jdqobRLvfU6RJBE/EEHzrX+QuMcOvgI9i1YumBDE9mxHVXYmDPRoPmas9nUeVSbOYGaXC1SOFYw27Rt/xCfhJ+etSfKPA7mIuBV2J7zdFHif0HWrzzb7OQwZrQCNuMslH/kT0I+NSfI3FbVu0qWhEe/mEN2g3zec/Suf63rxG6gLtYWTK2abUdgtM4pibfDcJbtplBymfxEx3nO0mep9OlYT7P7mGTHrde8rIO1e2HkZbgWVDHWW3IH4oqye1LjDXyGOsALWb8pez+5i7zKCLdq2Q9282q219OrGDA8iSQBQ6Rk912o/sCnSTCR+lvASuJs3MVeJVWu3bpJOUFjqdT5KB1OgA8BUvxrla1gMK+IvZLuIINu0kyi3CYmBo7IJYk6TEA70jzh7Qv3e2+GwFp7WHZjbbFvpexDDRsr/AHU10VdY/DJFReDwaMtq7jGufulmSFmXxd5jLiztC7Z7uyjQGTWt9PocDdgox43+oqy+xJcc9sLhltWUdi17EsgMQsQzH32XVgqjSdSBJqdw3AcLjHuWLb/vRtgfvfEHGZmeT2dmwNUC5hLso91SoZpmsf8AaH7T8Res/utkLh8KGIFq1IlSZCO+5UdVEAnUgmrF7GOaBgOHXrpkvdxGS2p2cpbGpP4Vzk+pq2WhjL+/ClaaOyyPjGDNl3RxDqzKwIghgSCDUUzliEUZmaAANSSdAAK17njh379afG3YtXWgIEA74VRqy9doDTPjMVT/AGPcOUYhmJDMq92ekmGb1A0/1Gpm5jBE5/lvj7rVZkhzNk+5g5Vv27A0Ujs0BE5nRVkuE0gAtq0H5gTWacXsjIADOWCfVht8K9L8wY8KrM0EBDPhtsK8xcVQ27h8PA+esEabUOiZkmSCXiq4UTXEq4cr8PLWc2+Zm/6YEH61rHs54OCFiNCPLU1mnsr4usGw8aktbnbMwgrPiYBHmD41a+eeY2w2G7NCBcvEpmHvIiwHI8CZyg+bRqKtPvu6VnTNd3N1nuP48bWIxK2iGw1y9c7hEoy5zBUR3TGzLGkDai8SxZVrN5A1sAgo66arrIEnVdiP0NQbYTSrFypx4WrVy3dtdraZhEmDbeCCyToGIO4IMgeYNl9chTOIIXpL2fczpirebum4Uhre5Bicy/wncHpsYii87c72MG1u1fVyt5D31yuNDlKujGRE7jfSqD7PeK2sOStxO8yt+73rYk3e0jLnYGFZdiMp3I00NW72ocrLeA/em+0tqq21tkFRIBzM+Uy07jQHbzrnpM1kMmmQGvlUtNGzwnPIty3kKW8UuJsAMRYuAO6SdFDjULBgJcTxrMfa5wWzbJ7FUyFouKVhsNd+5EHMttx0OZNNDsKdey3CPhXxNtjs1vvAGHXvxlJ6GfhUB7Tsay386SBdTJcB1D5Ts3j90jwIB6VbjyQZtAPiwmiSnbKu8i8Ma5xDC4Z1jPibFthvIa4oMeIKkmdor6kgV87P2d7BvcWwDMJyXgcx27qMVEx4gRX0TroMQgttasEmttoaw/2y5jjASO6ttEBkakl3Om/XfyrcKxr23qFv2o3YM7bdMqL8AAfiT41pY/60Zv0pjwcVPWjUJy+siZAAEmSB8BmIE/Gn2A4qjIp912zdxmWQqkgsCpOaSNAKty5kcWziqrMWSQamp/XGksPfDAFTIPX++o6ilKttcCLCquFGihmuoK405NXV1BXTSSQ0BNBQUkEM100FBNJJDNBNBNBNFBDNdRTXUkrQ0WuoJooIaCuoKKC411BXUkF1Aa6gmikm18wCPIkfLUfDelSZJ/vQf1NBjLcqR5H4GN6iuTeJm9h7V0qVNxA2UkEjcbroZidPGhaVHlTE0iLm/qRp5dPXxpnjeLqA2WLrhSwtWyGdo0AgTEnSWgfKmfI2JD4e24ftM2cl8nZ5j2jZsqbquaYnUiCdTTb3TtO1qaUf08v60agriakCYhNBXV1OTV1dQV00kF1caAmgmiguoJrpoJpJLq6uoJpILpoCa41xopLqA0FdSQXUFcaA0UFxNBNBXUUkM0E0UmumigpniHC0urDqtwfA/wC0jUfA1SuL+zRCZtsR/C36Nv8A7p9awr2f4ftL9qyt50W44H2T5XGhOkR18cxinmE5vxiQoxF3f/11byiHVvrXk2PkzQbsK6jP9Bic6TV/PBWkYzlFk0aR67fMSKNw4dmYfvIfmp8RPSoDlznDG3WW0WRjdYIjubbJLHTMFQMdiND4b1F2fadqwvKFiAMo0zAwwZS+inXUEbHQbVuwdcLm+9v8Lhsz/C7Pa8iJwPmirnzFylZxAJZQSRGcEB48mG/owI8qzZvZtdw93NbAxFgsM9phDlYI1UkKxEyGUyCJC1Yhz41kKL1tFLol1QpJHZ3JysSHYjQT7p3p1wv2sYVywZHXK2UnusCdZIko0abxNSS5GNKDqBCjwvT/AKi6eR2hqb8XYVO5U4a37wGKODZW64Q5tOzZmRBIkM7FZ6Hxqf4Dcv2lBs2Iu3LZFy7e0OZmljGaSDtBXzIq5YHmTB3IyXwC2oDQZnToS3zGlStvCK+tt7Vwbd1lOvpMipMTB6fL/wBWT9jspOqdY67GNIxq++5WK8x+y9r9wu1y3bmO7bVmUR6ldzJOmpM0txTlS5b4cMOB2zLiu1It6Ta7IpOsEvOhAnSPOtT4jhXX3kIHjlPzBGkfGo8+UfDr8q6kdIwZowGH9wVy0XqrqmO4mRv7FtLyvzJhWVirI1sjWGBB112Oo6VK8O4SgtB8zq+p20mBAAmdusbivSvEuXVv28txbbqSPePeBHgfeQ+hFRmE5HRV7M2bboJ13cAmdW94xtpGlZ83QSTpa4UujxvXEfb1SMIPws7574vdvWyLoFsi7YtoN1It2SSxO5Y5lJ1MZgKz7/g2e4gzLrOY+CgmZ8IFbZzn7PjeKtaYWyrFghkpmKhZzCWHuroQahMR7Nb8qVKl7hIuQcqhcxJElY7wA16azWDP0uXD2Dab9uF0vT+v4vUHDtvGr4OxUHypwRb+IF26ot2batcvODmiymgA/CYAtqOrEVG8aDYzEvfaEQxlE+5bSFS2gj7iBV06z41s2P8AZgRhv3exetCXL3u0kM7f8q2CgMW01bUd5iCRoBWd83ez/FYaGa0zIoBL2e8kD8RWSvqwUViS5G+lp3XSSYkrW3WyqPOl37QBVKqqhVgQDHU66k6mR+lTvtJv9hYw+BHvELicR5PcX7K2f/l2jJHjco/Iidve7S9PYYZTfujplXZJk63XK2wPM1G84YN3ufvZbMb75n00DnXKP4QIUDcAARRY4MaA7lM0FrSQj4DhMm3bL6tDQNhsBJmBAkyROkeBqx8Q4g1nu22GVQbZMzrsSRJUkiZgRrFF5aR7T5r9tNFYIsqzSRMsJ0A/igirpyxwqzcVmdksro0KqvcOxnvk6a7bk9Kw8man07cJQwuKhuc1vWrGCRGX7WyysRsG7QkgtGwBUxvS/LOBtWypufa3D3WOYBR/lWR/uNOLmIdgykNCsQVeAsAeUG3cbKdQRVU5kuBXtEA9m/ek++wDQVeNmUzJmCIOk6RNJlFN2+aViQb6lcOOcJVA5sqt23KMy2gFbb3bqglio/EPGeutB5tYtcW2iEd5TkDzMnLlXxUbHxJ+Wkcs4YQOzd7L3E+zKZY1MLP3iJ30JGsSKomHW6eJOcR/i2DdZoAUfZqzgwBsWgyRqCtaHSql1Bx3CjddilOcESyVe4DdtdisPazZyI0LRALWmOhK6r101q88ES1dw4YvAK6PAKl0GYAjybQzJ86pXA+AB0bs2zuDlCMctyGEugH31aSI8+lJ8l3OwuNYObIQ1y3m3IykMrdAyERPl5iqudgPrW3m9vwhFMCaSvEWdsjWwQ9pzOXuZo1LaSZVvHSN+tTlrBG+hfIty+wzXYIJZRuybMGj3gAZ33qHtY601hcSe6ACCoMN2gZQY3JkENJjrSnPPaKtnF4drzWiBOVspW4e9t0DCR1GYEa1Axj7DDt9ylXk7qMx7drca7KqwGQKfeyoAAUBABJ0iY660lZ48xDdoFkGAIjM4BCs6GAddQdwfSmuPKupdEyXBle6jSO5ckFwTrAMZk1AOo01qP4V3gVbvNbnKzSZVQZG/wAVPiTWr2TEAQf4VOVgd4ROX+X3N1swghnDzJAB11PRRv8ATrVj5WwxxGLBYjJbXKsdEUFFgbTJJqEu813LgS3mhdVKjrmMwTEn4k/SrPwTh1y3luJ72YMiSpheuYDvDaTpHnUeTkEc/CONJoNEJ7Zl1z3ZbEYd/wB2Yh8mdJi1cLA6spA8iK0Tmbmv92tJnUC65ChdWQmAS2fTuA9RWf8AMWJIFrUpmcdo6IIU6sSS0KwOaATsB0onFcUj2wLvau8d09qFQojZU2BCqUOoAzM3WNK2eidQ7Ubt6vhUepMEkgICcY+L+Zito4lQQVSOzuQpJcN/6qM0ae8p8qf8k8HsIS2JhnEBRczNbVnlWQSINxiSTm6bVSV4bqDnXWL4OZpt2xPdiIzt0UeA3mn2N5jzNGjKbmc95szFFJFx18II0HgaiZ1BzMju8/KdJjNMVLasZirdm2UQ21a2pC2yYChQNxuFE9AYGwIqlYrn24Lw7qC3JDgspIIDDuFTLZiAyk+kVT+EcR7Nu0DBnW8ChacuvvQomQfMEjQajZNCuIvklAhZgYClVUr+KQdCCWeBWvL6i1s9uxtZ8eD7t1uGKxwW0buVyAmYJl+0OkgZT94jpVE5a9ozXbzIbcglRbRZ7US5VjcB0AQCSdKq/EuaLqZpxDlyWXRSq5F7qdlDAHMT72TTxqB4ZxRyGiRcuqczMO9LGNSsEKOo1k+pq1L17Zun91H9FyvRgFGCVjXJ/Ntw2zZ7Q/ZoSGChSvZ6le+wkMekzAPjqjY5igjs3hrjWC8M2XOoYglmkornXTwy7Vf/AM8jDQaUIxHFbXlriKpmC52CGxbKl1dVGctmus8mTl2jeASCQOvVbmHnxLNyyrqUW5mJZvwgGCkaNJEwYgH5X4epRSM1gqF8DmmirYRQU04XxZLi5pCHKjMrMuZBc1TNBIGYagTVW4zzsUxKWsoVO+XZ/vIuzWyNDMNA1nTbWpnZkbW6iUzQbpXShFR+C4lnsi6ltzmXMiEBWb8I1OUZtxJ1BqiXed7lu+GuC4iOgy2HVV1CmYbp3hOcsZXoKMuUxgBPlANJWmTQzTHl3iS37SXFjvqGgMGyz0keB06UrwniNu61xbbh2tELcAnukyIJiDqCNJ1BG9S9xtWkE6FDVV4zz/h7YOssLr2ShOQh0EmZmFP3T94nQVYsDxBGsrekLbZA+ZiAFB3lthGxMxpQErSaCQIToUz4nxW3bDF2AyqWKjV8o6hB3j8BRX43YCu/bWittQzkOpCq3ukwT72w8aybjGAuX7l9i9pri2++baW2KNDFLad85u5ozRMDxqN81cIrW+C8Vt3kz2mDLsdwQYBysCAQwBEgin9Z1ydZxVnD23JRbaoGytogQATnILNmABjL46nSo32dcxl8SxuX7mS6ztZTPNtjm7MqQdUA3VIHQkmkJTQsKXSLpauK41XuZecrFhlVmzOzAFEILKp3dhMhR0HvMdFBqwtUuoXSaN1F8Tak/ZkhbH2o+6LhPpkI1+JFKcVGlXH2LcFUW2v7u5ZB/Cqtt6kiT6CqeXIAwrQwoiXhaLQGhqne2rjhw3DsXdBystllQ9Q7/ZpHnmYRWE92lpK3l5p9uHGVxHFLhQylvLaUjZinvR4jMWE9YqEx+H7uadRBn9KieVtXHloP51aOOWgLZ/iiPjXl/U8nXkfuq0hsFVHmwPesPaQSSk+UIO0Y+QAWlfZZj5tWwdWUAayCuUHbUabH+lTnAOHd1mMzdBtr/wDKB+1bb70C2D1+08Kj+YOCGyyshi2x+GY9NI0I8PCpDOx0X0/nkKqTsr812O8qnJc7txIAUMZ0XfaO6xBA1qke1HhQGIwl7NJLPYYjVYjNa1gQR3hrrp5VZeWeKZ7WX79vvqS0LlUd5YO5J1Hqai+eXFzD3OzJzWwmIUHXNctElyvdmCmfczpBmqHT9UWRp+bH87Iar2T7hdwGcwBOqmROpnvzOmuk/nUH7Q+FZrBKkh0AuWirZipUe7sMugJ3GsfF1y9xdSgaZVlygxOUt3sw16T4z8qe8R4cbls+6MymTOrRmENoYY6nLuYowuOPkWdt0oXFpXe2PmJv3fhPEiCHxFg2cSAPfCBWDDzDG4y+RA6U65Y5hLAd6UYDXxB2Ya7irVzr7PG4hwzh64PIwwqZWtO2U5uyVGAJ7oZXUyrESGmdYOb8qcjY+w123cw14W7EvmKkKq+KNJVx1IRmIgnxNdL1zpzcmPusG9ePKsylwdYV7xD6wSCNIyncdCPWrryEO0s4vDzIe0bieTqIkeYPZn1FZt+8Soj1XWQR4D46irf7D8cTjAJ3t3AR/tP6VynRWuiyh99imslt1FZzylxK2hZ8QXKQWiD3z4SNQKc4znFr+TIqJZVsqWtwTsC3jNByZxoHPYcBlLMAMohhmjKTuD6VbLXL9p2m2CuVf8NoGv8AA3j011qfIkYxzmuG9qHaqCNf4deLomJunsiuUJh4JO2jBRoNY1qqY7glyzduW8rkvOXMSgW3t3uh6HrVx5f5iVXKW8MbTMO9cckEFdJY66fnSHGOZ7LOhfNibjDLqQFt9M0L90T1qyO2Y+d0jxuqHy7ins3G7QscrZCPHqCI3FWjE85Wdc4Ug790a/A/pVkx3C8Lh7D4i9lZbZzFk3eIhBPTpHWmvC+XMHxZUxYz2LYBXsxlRmjSWZRA6x5VBBgDP9+4o18KeWB7Gcqlf8VwplltLPkP0mR8Kq/E8dbdtLSR4Rr8da0vnvknh9m0Tbfs7iK2RgxJY+epmsw5QxbCVez2isRmbL7oJ3n06SI3q6zp4ids6/3VV2P7eVDcTwFlv+UVPQrP5GRSXLfDYeD3gfgfLQ6E1O+117Ni4gwxOo7wD5l2ERuQd5HpVc4XzATAJg+Dfzq8+OYMNGwoS17VpfKz2VuAuuQ7HWM06a1bruMW04ytKHVGn6fCsj/eyRqMw+Y/pS/C8eqmCTlP3SZAPiK57Iwu4LJ3UrZL2W0Y/Hi+NW74EBuvlPjVexvHHX7O5Bjx39QfOqueMgDNbJIEAg7z+oo9/ja3gATDj3T+h8qz48WWOwboqGZxPPKs+Gxo6bflU/gccGRlaDoQPL0rOsJiCPhuP76VP8PxHWqsuPodYVeKcsNJ/wCzzDILNy6dXLsGJ3AXRQKNypwlb19r14SqQUQ7H1HgBr5mprkrggW0A2ud2eOmpqUxmHCM7HKiZcuZpAHdMQBqT6aVWdlOfM/RZJ8/ZdL3ZJY2RtHtHKSwt+12OW5bR5LMA6grMmDHiBqDUX7N8fa/eMdaWAyG1CgR9mFI0kknK2/qKjOK8QhrAnQqTp6aVlnG+aHwfE3xCrMsFuLOj22Vcy+R0BB2DBa6X0+ZHPIedq2/lPgcTbQvS9zhqxBP+I0xO7RIjXyrLPbxwJOwDnR1uAA6nuvIYadNAdfCtF4NxuzjLatauSAyuQvvowPuON1J1BB36TvWb/tCcbXuYcEEz2txeoA0QerSTHgB41vmMNdYU8d6gsH4rYlxEGACP6+f9aSw/BnusZYKF30kj4bxrGan6YYsYjrmjXbWZ3iOvhTq3ZCurQxDdx12JzT/AGJ8PSrLZS3ZTzQ6jas/sW5uv2rhw7MzW8pyq+oDKdYnVQR0BjarNxPhpN+5fskKGM3LWwn7xB8yJ16nes55bxKrjCScoIZVXz0EHzPj4itQ4Rf75HQisHrM8jX7cEceFzHUAGyUm6EOcsgT407fE/ulq7cu3SuFbusimGvuBAtJ5ke82yr8AYvjWDCktMAasR0ESSKm7HB7BsJjuJKWGVRgsCZUFZlS67u90w7ToAZaZCiHpOL3Xa79o5VXHbvZWc4g50XH49QUMjAYDVVuKD77AEFcMp3bRrzaTEmqnzFzDdva3CJOigCFVeioogIi9EUACtI555Sv4zF2Y71y8gLdLVhR90RoqWlgADXyJNXq/wCwDDK9t3vMLSWx2q/fuOPeIb7inaACY28a6hk0czdTKoK255k2asI5P5KvYllSzbNwncx3V83bZR61p3tc9njWcBh7SKzdgxuXOgm7pcYbHKrBFBPQitE45zouDtLawdlLSCYzDbzjcsfFiSaY8ewN65gLl2+7Nfa0znMe6tvKSqACBroT5+lVDL3yHQuujv8ACTHNYC3yvPvCZci0bmRerHUKgGpA9Bt1NQmDDC+bmHzRmyqrD3k65soG+5iKkb94qh2zNpqOlegcZwDh2GwtpVdJIV7l0OVDSoYs7kx3ie6g9ANDE8Z0tcRW/j5ToHkNNLBctwXrZclu+/d1KBMsEidJBJ38t6y7mDEdpcZvEwAdTAECT6V6H5u4xZKsbQe8GUqlpUcjO32aw+ksJmPpVN4hysmCsG5ehb34Y77MfupMiF6tEeewq5hZGgXp34ACuRzU3cbrMeC2xnViCVtjO+8Qp0A/zNCjzNSWC4PibsubbkHUM+g7xkQWifQVa+H8sYx07UhEnI9tD0UajuxBJme8T6SaU5hx2Nw72musezZ1Dso01PuktqO7JA28K0JJHHZtWhNKCKbVqAfljEBQSEERpmE7+Uz6DWr3gsF2dt8PbUYqy6BszWzba3cKgMVnfIR3SddZ01rTLHCx95cy7KBHqDvrOhmo7nqz+7WGuqqi5myW1YKqy25B0ByCW+VYss08m1DlZnfeTSoPJlgWsPetjs7jMxK5rjI6AKVLBDBfU+7OpHkKp9jnTGJ3TdZ0RjKsSwOvgRmWrrgLTYSy371btXblxw2HAxB7e2Ss581piOzMqcrH3p0qb4HcXGKVxGFUzMXkhLoEeOmcx1O53Bp7nxssy0QfKlLq2Ki+B8wC+mZdNIZTEqf5HoajuP2FuCHEiQfl1pC3yoLF1jbulNT2S3Rlt30AJK9oshWgRB0DdRVW524wXvBMO2ZIUmND3hLKSfw7SNDUEOBql1Qnbn8JrMJzne3hab7Dn7TiuBtWhCreznL4W1LsT5QsT1mve1eW/wBhTlK3GJxx1cucPbUmTaUBHuSdpclBpqAv8Rr1JXWYUXbYtVkYjFBdWG+1vHLdxkKZ7JAh/wA0lmHwkA+YPhWy8ex3ZWrlz/00d/8AapP6V5q4CSTLakkknxJ1J+dauK23Wosh1ClMcSNwIgS2LgLQ3UoCIzhZGbLJMTvHnTXhbYy4LqtbCA3GAuXWgtbmRlUE5GGXeI706kVauFrT6/MEqAW6AkgE+BIBI9Yqy/EjebcFV75oAJjypwcWLQtglu87T5uxaBMmBMCdevWpQmiGumrgVVHrjRZoJopI1cTRZrppIIZoCaCgJpIo1BQTQE0kLRjQGgmizRQtGoDQTXE0kLXTXUFdNFJdXTQUE0UENFmumgmkkhmgmgFdNBJExdwhSQpYwYURroT16aR+VUX2ccDR8Lbks9kZ1tWyQLfZrefIzBAvbZgAwNzMIIhRrN7zUnaQAAAAAaAAAADwAGgHpSpHXQXYayFAVAFUbKoCqB5AQBSeAwSWxlRcqlmaBMZnYsx12liTA01pYGumngJhKNXUE100UF1cTQE0FFBdNBNdNBNJBDNBNBQTRStLWrUgmVULuWYAfX0pHOJIBBgwYIMHfceVMuKYEXBBZ1iYKmNSI13B+IqJ5U5day9x2um52gRR3AsZM2pgnM7ZtW0mOtVWd7um60+PlW39jsir1Kx0E11BVpUrXUBrjQTRSQmi100WaQQQ0BoJpK/fCgliFA3JMADzJ0FFJKzQFqrb85Wu0CLL6SWWIGsAzO0zr085qC45x5LhB7NWuKCIJLQJBGWCBMgamKryZbGeVaiw3v3V5x+MW2uZzlURJMwJ2qHv832gqt3yrsVDBNARuSDBjrIBrNMTj7/3z3dQMzHUREkT0GgjaleHv3RJZViMskltQdjss/lVKbqWnhWY8AeVCcngfveFIgML9sbDq3lrUXj+GWw791JDN5GQxqoezriVwcUtW2uMUGKUROYf4qx8Kq/PfHLyYvEqLjgLiLygSdhcYR6VxbenOPtBXqbuvwNf3Sznavwt19nrj97wokmL1sAfE/CKjsRwIMX/APMWx3mJD2z3ZY92evwnrUF+zhimfE4dmYlv3i1BOp0J0H0qY53u9lecC5Zg3He4rXm74zGEdNg2+gHhNSwdLllBbGdwd1k9Y9S/TSNka3ZzVaOcOX7d1sKWvi237lh1yhNWEMAwJIENtr+lExvs3thFK3ijAEs1wIUIOmuQyN+uYUy9qnNVnDLw83bRudrgLZXLkhVDMIGYb+BBEVXeIc4YfF4e5bsWLqsoR2a5kKoudVkw5ZgS0ZdB9apZXS8s5A0vpvlUcH1HM9wYIzXzspvl7l3ssZhDnt3QcRa71qYU5upIA1+NVXFPiUcsjOpDtlZG72jHWYLA+W3lTj2GX+1xtlSpXs7ts92RJFwCCpJAEeEfz03hnL6l7mgMPcGo1BFxhv6da63E6FbdMrr2u6XX4mTFkSEvb48qD5Z9sN+2pXFWnuiMvaISl2NtRAVj1numfGpLmDnopbtX2sLdsYlrosFgUxCi0yoyu1sR1lTrMkmnXEeXArElFZScozkkrqNdjoKg/avxFbOAwGfM69vjFOUhdVuod9o/rVLL6Q3COuJx3+CsP1F07DdHqDB/Cjk59uA50tXLagn/AJrGAu/vKwMaCdql8L7SbmZQ1vMWiJVWMnpKMvyiagOW8dbvYe5eyOqot7MuaScoUnLrHoCRQ8kc1Ya9ibNu2LkvdGUOixIndg7R1rXEk0UbXajuL3XkMfTcXJmewRDZ1bK68O54sto9ooxg90jUHYhXCmPQmpXCcew7bXSsfiRh+QK/Gs59p/EbSHDBmKs+Ew7ghG0XvAQVjQEbEbVZ+V+Ei42GfLIvLhCGgtMgqcw8Gy6zSxepzSMJNbC6Kq9R9JYcLwRqbZABB+Vb+HcXUyUe25PXMJkfUEfOp7g/MQGjzqdDrpPSdx8ZrMrPJKnMsnW87AxqCpeF293QVFJgh+8NZzuHC3WCyyqVWybiGZJJiJERFcVP1zp+c5zDFTh5bsu5wfT3VOmhpiydTP8AteL/ALrY+Ocl4TFK4a2B2kFmsns2cqZUsU0eDqM4NUnG+xd7akYa+CDsl9YjQjRlBXNtrkGo3FVLhnMOItYVr79pKPBUHK5UKNdABEkb66j1qcwXtBvfvBwy3X7W2rFgySvct9qTmObZdNYrDkfJZDQS0f8AC6kRMkaO4AHfZVzmLk+9hcpe20SJce6WJiMwJEEawYPlUDcxlxSJYxmDKFPeYE+G2kVrPAvalduKxP7u6KVUs4a2rM6swXXcsFMSsGl+McKwl/KXwmQnLDYS6sZiMxTJovuySMoMDemR05+lw/kKvJg+WFQHEuMi7gr0Ic5sok5TqWYjMDGUOBuxJGu9Umzw2xbtoWzsTlKyJEnuwBImCJY7GIjaPQvDHbKcsEBVLWWHZMyjY2xrbbTTLEEjrSHGeRcLi8zW81lwIyAKMh1/5RAiCfuESa6aT02+KG4jfk+FlPkBdRWcclsxD22Q3SGKouTIwQd5mtE7QAe7rE9az/m8EXuIXczAkJZGf3lZ3XunzCWnB1rceJci3hARw2VGVCWdCrMT3gNp1MgtE1nHM3LOJtiL1lnz3Xe4+UOiqqBLTFrciYZzrGtZeLgyYznSPCfYqlSsJzBmWLaQezM3O8qi4BBcCTLkadKeng7ItgHN2rMzXAT7guKcqggkgwstP3jFJ4vDLaHvd7Dw7MQcrXn/AMNBBiE94yNYNRfJGNNzEIjvLHtTM6MSGIJPrPhVxjTI3bhQNa1h+5TzlTEm9exFwwFCsgQ+6BCooCiBmiCTU2efuwttgwovIGZJUxlzAgARBJQ97wDfIwfDbnYPiFQ5jba4UBXwGXMfSQfVQfCKvguHsCpM5mYEEDWCZnXrVaWJjiS7xwk6XTsFrXDbvaWmtYg/+YS0AjHTtLWWVIfSSNiDuPMTWe8V4eyMpIKjKNFMkk/lvIHptV25oxAe3hbKwb2XMSsgC2QFKswGYGQS3QCoXmHG3BNi1oLYRbr5pzkGZEjRV2EfGoYLPHnwi/SVacVwW01xyFY5VtZjbWQua0DcIUyZB1JBH82qcOQPnS6sIo97MpfrEmZ00I08POnPsmx7fawCXlmboSNJjrOmx3086Vz2nd7RRhaun7XPBFq7OUvafodQCCdZrLc9xldG7gKTtMoFOuM3FVAUH2F8jNbMFFaPunoD0OsayDtVQ43wNnZWtuiprkzvlJCtoAp3yjSRoTNNOD8Va3bu2Sf8NngnbbLoDrvqB0qafhp7VEPf7CxbgRB2F1yIHmRViLVADZVN4DilGwJVJAgm3rqveticxmZLNGwG3pTDmPgeS3avCWdFto+UyIuGU7wjb3CD4im/PzNmXELnNoJkjN/h3DrljTuNJK/EU24YmIuqo1CEAlnMBsuyhSO9tEwauwElgksJhsnTSM6PYusRHa6soaCLcwZJ/GNgOlTPKeJu5jcuNmgMWW51D6NAMEgCTOmsUcWbuVu2QWrjto2U5wrCBIAgKNtdR+bNuC3lbOPtYAAZG0DH3cxnN8GHpPQFwc6ikISN1A8cwalCwcdzW3B1hTqCN1Y6GBp41I8GwbOq3SpPdAeA3QasYnodPPwphe4QmYDUvHaPqvcWdVGnXTfU1ZsE+VRctllCpluBSBlJAKkgfcOxnr4VZmOloAR7FiynluLTB+8e0yMuaG7rHWD0cRqx6GOlRvOvEQ7rbQE27bANEZszn3RA73ZgBVO1OMbeus5JJUtbPdMQqwToNBJju6UzwYi23QuC+aO8QSIEmPcgkx6A1LC4hqgMG6sXGOPsnZ9mLeUqrXVZbfZTbkC2xgsCyydwSZ9apHGeNAuuQN2bEOoaCqOJXs0Yzmtgn1yxPQ1NXMMjKqMqhWQMxSMrEBo7QxMnYgAetVk4EZ2te5mJay3RGXRNSdA2x0B92at4+Ue3oKgmxPfqVku4+8x7Nli4HLBRmK3gqzDEsogADKAIMQPCiC7C5hv7jQSw7/eJUtpbyzl+O9RvGLRyW7svmRVQQ3Qjy2IYaLtBnxFOMDgbtxf3tSDmy9qrNlAcMAXy7NbOhPgZ+Ca4kWSo3Qj4U/Z5ouoiAW4TtIbKSXdWWMrAZgNNnCg9REUrwvB/YPEWy7FlzyzC2ZUAj7oQgd7qJplibhttKsWIDHKSGtBdRAA1ZJ2BHXp0VtWzIz3iq5AVFtlYLOsMJWBP3QDOms0JcmR4DbUUcTWm6Vi4XzK1sdnh0Q3GGdrpYDNkBByqpVVQRmAYzI84EXZ49DXGza3LbCToxkmG7jd660kDNsNdDpULwfjEJcKytwf8yO8RAEHUAHrEROpMLrDW8EP8zH7RSPejwZjoIAmN5HnVr62UiieFWfjgOFeVP3+JsmUKULllPjqcxD3Gb3XQtGq9BvSuJ5pvXFa0/wBooYrlOZVEjKAWUBDBgqIjMNtTURxbhweCTC5c2YHNKlpOYSCXJjUfoKYYLj2VezKqyAkAOgMEEkZeqk7Ek+dT42U4jY7qCfGDHKVwbMDeWD9pPey6ZEIYdxdHCsIBiBJ9KneTOcTh7bFLYe85ChmSFtn7wOmY5izMYboNwIqn4FbjJZuLOuZNbgSddIGndAnXTUfN5xW3cRbTEK8xMKDq097USbnnHUEUW5j2Hc7pnY+Fvf8A46w72bzwrC0pzoWEPEA5NO8snwBA89Ki+UOJriC6iytsJatMzyLgGs5V8MgiWXYAzrWO4fiDW5BzZCzIoZSrBXPe7uUgjQjNBAPhrTzC3WtAi0SEuzlZW7xtvupXQZiATr0Hnrc/zhwoEIMjcd1JcVsq+KbEfvC5Xe5qlt1dQiZUtkjQBwdDr0J8KvfDedrdq0hV2xCG4FliFvWkygkXBu2T/wBQxPyrKeIcXshyucNbgjIbcBZGXPoYkQJg7k/GExuIkKw6FAuWArAyAWgGG/Sp4sx59xCXacDstGxHOt67fhcxVyLdm0gkMXOVczd1i53kaaivW3JnBRh7Fu0N1XvHxc6ufixPwivK37OOAD8WXO2c20e5rEZ1VVBSNABnJHnFewaY+Uv5XQYUIaLXVkH7WeMA4eLcibt+0oB6hJun5dnWv15d/bn45kucNt9M9243p9nbn4Bmqll32nV8K291C1nvLNnVdPXw6GpvEWQ7ZnOWzaGe63hrEDxYkhVHiRTTl7CFiqqJYmFHn4/zPh6VG+17iy272GwCNIW5bu4lvxXGINtT5KDng/iXqteXRQHIySPi7VR52Vx4fbznMRlEZVUfcQe6o9NyerEnrSfNnDe0wjLMMF7pH3XUyD8x06TTzg9zTT0prxrEQrDpvrsJ3rHZK4ZFjwVGeLWVcrcxEHKwGa3IZSYIeZLb7GNDoJq5txvOXlZW6UK3GHeVWBzhVAIyE5gSBHjVC4jwXPdN1ZXcEjr5EdRG9JvintkdMqlRHuPmOoYE90EfCuufjxSuDmbH4TQArj7OLBW06KdEuXLZnqqFtVmBmCmRsTqKsna5ugWGAZRJ7RgDDOhMjPO460blD2a3/wDh4xKo1w3XuXHsLv2Z0tXLQESwhmy6llKwCRBrGJ5qyx2gDAAqM4lwJIloIK3Le2u20iqvUMCXul1c7ouYW7raPYVi3FzEYeHti8jsjaArcUhSQPusA6+M5AazHgXt+4lauBb9y3cS3cRLue0qsVDRchkCidD0PnVq/Z6xBvY8XBGW1auF2zkswbKikqSRqTPwPhWR86cvPda86OCnb3riywkg3W0iPA6TvrXQ4MzosVok/CsB5DQtb9rXATYudognDXe/auJ7q5u8LZI0G8p0ZCIkgwt7D8VF+7fMC3Zw924zHoIG/wAAT8DWY+zj2q4rC2msslvFYVe6cNeMson3UaD3fBGV1E6BakecPbDYOGu4bBYP91OIIW+xfNKDdF66yV6AKWhQWkQN6bEJu80/elYxME5ElsUjyFdt4qMiAuQ0qNNR1DdG11mNq0blPgdzJc7S52T23WFfWY69DlI2ImawTlDE3bA/eMI5S4qxcQgFCCIMqd18dJG9X5faicSn2i5LqQjqs5DPuvmmY8jIHnpWLm9OY25K1b8fCsdQ6LJijWdwtP4viiULCA4kGdVYHQyD/cVnQ4HZu9uUD2cTEAKfsnMf9JPkY2oOJYzFWlDQezYAhpz2zOwzbfAxTQ84kpke1bHeDZlBDT6jf0MisWDHmhLnHz4WAJiHC0+5j5VxC8KS1cDPeZ9UnfMTl1+RqB4lynicLbs21Lg3G76IZ7x6TtH8jWsez/mk3/smIaACrNuFURHqKn73E1e7lVlYWjEgSZNbORmNhwzMDv8AH3W0ZhOGgcLLuZOSblvCW2Zs7rBZTsQTtJ2CidNqkL2EOF4aHZVbtAYBAlS5kR5x60HtL4w9y+LADqiDKGHuvcbYE6+NWTnfh9tcGi4ss7CMiroJA0y+MHc61Q6W6V8JfL+dvuqkwbqIavNN3ldsQW7IzeWWKMdSBr3Sdz5daP7P+VLTpcuXmYXLbQbUQRG89d9Ire+XcTatWGxFjAhxbXvsYNyRrpIJ23qOwftIwGJzB7PZ3zGsKH+DrE+hrYOTI7HNWP8Af7phioBYPc5ut9r2SqQAcoJ8vEVc+S+P4e3dDXrSXbZGVwdd+q/xCh5h9j6ve7bD3NGbMyGJHiV9fA1WOOchYiyzMoLrCvABMK34vAg6GnRvxJwO07evPyl2xdtW/wDEvZtg79sXsBcyEjN2TElG8QJ7yt8SPSsW5jRrd0hkKMPeBEH1+PjQcjc53MI8EnJOqH8xWtcXNjiFudO0juXNJH8LeI8qx8maTHm/qC2HyP8AlPfCyZvt2d8LNMDxbafQH9D5VaOVryNdRHbKhaGPgPKqm/J922l0se9ZIzJ+JD99fEUPKlxmdVGrfdp8+MwjW3cLIMWiQagtg4jzTZtGLY7SBobh0WP4R+TT6VT+NcUuYkDtrq2VJkdoSJBmCiDvNtoYC1Icu8qLaVsRiAYLSiSZuHoPEKT8T5DU1fmfgJ7d7lw9pcYLGmZbendVIJgJoPhtVaHFijf7tvjZdLP1BvbDI218q68m8sriWDtc+xsgWmKGHa4ROQTMALBZt+8AOpBeafY2Lt25dS6FR5hcpbKNAF7QtqBEzE67mq97GuaXw/b4O5m7Q3lbMwA0cBXjNEnuqRE6MfCtvu8WXIWaEULoD7oUfeb5T/WuvxMeCNgA5+VnNndEdvKwPH8n3OGp+8LiwLudcqohBuGf8PUtmESxzKRA8TpWuYuVcS1huIO4fM57Rde0TvgBm0CkCVGUbKU0jaxcwcV/ebwckG2oPZAjz1cj8Tx8BFTXD8R2mDxVkmRGbL5spT5ZstUnZjTNobwpIuoO1UVkvLPECbmc7n4aeH5x51IcYtj/ADa90jfrAaNisaaeVUzC48e9sBoV6hh08RHj0qx4fiYKho7p0M66+PqPSp5YS02t9kgcE34irNftsSO6BBXaQden96VqXDmkhh1ANZk9uMh/Ebh/64+G1XPlvHdPD9axurtL2j7LjOoyXMVcGueIBAiQdjFOuWcIOI4i5icQyi3aOSwkmAd5In3Rv/Ex10EVEYnBXLqOtoZmynSQNOp1p3g8IVKHCW2Uqi2r1sgw9yO85naOpgb9KzMVkjYHBprVsEcVhdZPCuRvqoJkQvdBGnlT7gvHbT9pbvMWOXMrGcoAGoBE6ggGoEjEYWw93JZuO+URmlrY+8QNiOs1VeB4q9aty6MVZ9HYxp1DbEDpTMXHkxNy675apdJYVLcE5htYluzuW++Wyp3Trrvr5GfCrT7RrROFuoCuZoSWYW0VQRmZmYhVAWdSfLeKe4S7bLIzYe3bMRaW2Ab947yggRbXrceFAO9Vn2rcGzW2uYl5iBawdsMbOfxdxD3XA1ZyABqBpFdF0+JkELi3yniKhbisa4hwrDxE3LwZgC9v7O0NdhduKSwnrkFNee+K2GW1avXLxSymRLNgLkBB3N1ozt4vkOkRpArReG8Mtqhe/bENbb93sqhhCCALjjMAo3hTM7kVmvNnBlvOzhOyJbQCNdgTBOhMT4VJjTgPAddJzZGsCuXK/N+HsYItbW45swVtGQqXbjtkzNr3SASWBzE+ECMR5049cxV1r95szvp4BQNlReigaAD66zpeFRbWCu4cwGuYuyskaG2iOxOYj8bRNZBx5Mtxl3ysYPiBttW3i0TstLHY3TqXoP2XcdS/h19xrqItt017uUZQx8nAkHxkdKU9s2HtrgbiuSDca0tvYzcDhjHkqhiY/WvPXA+I3bV1TZco7MoEayCfdI+8CY7pBmrr7R+P3buIhrgvG0VTuplthwB2mRB0LCCTq0D4WXjSdlSlx9D9SuHJPNtyygtqysqrCdssmQABlggspOgUzE6eVTxHtNuu9y3igl6yWIAyqr29festl7vmrBpGhprwjjrLiLV0qri0690iVIUyQRvrR/2jHwt2/bv4WVNxftlyZFD/AHWA2DFdGjQlc33jVbGj95a/ymNjHlF5rt57SOuuQjWIbITo2mjDQQwMDUdKv1ni6pbDEgLlAA6nQRA8TWc+yrjtoj92xAz2nMBhPaWCdykScjfeEEaTB1nW+T+VreHxJv3bhupZt58MoUvnPTu7G4o90DTNDaQBVXO6cHNDCdgonxkupR/NgY2ra5CrT2gDke6RBOUg6sdIMaCs75h5SRma5YGVwVHYtorMd8ngZ1CHQzp4VYk5td8ZcfEAW7dz7PLEdkF/w5EAjc5idyS1aj7KuWlucSw2cjKCbsTo5tAsnkRmCn4VewMURMDWFWIpnRu0+F6B9hfJ37jgLNlgoukdpfy7G9c7zx5LogPgoq81wrq6JooUryqHtixmTBXv4wqD/UwB+k1i/Abe1Xf9qbipt4ayBHevjfwVHP5xWOcF5sYR7vy/rWthY7nNsLHzsxkb9LlrmAFPc1Z3hec3/h+X9aWfnR4J7sASdNgNzvWj9M4crO/zCNxoK/ZqCaoOG5zuFcxQqJiWQrroevrQ/wDjV/4fl/WiMVxTXdQjbsVfRXE1n553fwX5f1oG53f+H5f1pwxHqM9UhHlaBNdNZ/8A+Nn8F+X9a487v4L8v60fo3of5tB8q/TXE1QP/G7+C/L+tAed38F+X9aX0b0P81h+Vf66az//AMcP4L8v60H/AI7fwX5f1pfRvS/zaD5WgE101n555fwX5f1oRzy/gvyP86P0b0P82g+VfprqoQ54bwX5H+dCedm8F+X9aX0j0R1SE+Ve5oJqjDnRvBfkf50X/wAbmY+zkbjqPUTIpfSvS/zOJXuaCqN/4zb+D6/zo7c3PCnuQQ0yGmQRAUT3pE66ARvSOK8IjqcPyrrNDVFuc9Hoq/EGfz09KT/8dnwX5H+dIYkhTD1aAeVe2agmqIeez+Ffkf50H/js/hX6/wA6cMN/wm/5vB8q9zXTVC/8en8K/X+dCefT+Ffr/Oj9HJ8Jv+b4/wAq90M1Qv8Ax6fwr9f50H/jw/hX6/zo/SSfCH+b4/yr7NdNUL/x6fwL8zQ/+PD+AfM0vo5PhL/N8f5V6rpqijnv+Bfma7/x3/AvzNH6OT4S/wA2g+VeSaCaq2G5ldlL9nCAZi5D5IHiwED41Gpz6DsqmN4Y6UwQkmgpnZrA3UbpXqgNUcc+fwD5n+Vd/wCO/wCAf7j/ACp/0snwoD1WD5V1K6zrtHlEzttPnQzVI/8AHn8A/wBx/lQjnv8AgH+7+lEYknwmnq+P/wByu0101STz2PwD/cf5UdOdpGiD/dS+lf8ACI6tjnyrlNATVZt8wXSARh3IMQQrkGdBqFrn5guAwbDg+BDf/ZpnYcpP8wi+VZJoCarF7mcrGa3lnYEkE6+GX138KiMfzreDjLYm34yCxiZIgiNYgHxoGNw8KZmTG4Xavl1wBJMACSTsB4k9BWZ+0HnKxctm2M7HNsARsJDTuVnWCBI8KDiPMly8GQo4UjVYyA6e7ILMdfCAddqq+Lt21yhVI0AYhW0Y6HNqSwH9iqsrXnYAq/DJA3cvH8p9y+9vs8xYyTJE5R4hRrMU6x8kmSiiBAnYHxI3O0b1VeI4IKAttzv33KMOnurp7ug6flSV/DNIm+SfEK8eS67ADrFZz+nvcdW/8K7/AJpEBp1D+VZsHkUFpDN1YxppqAs6bb0xxfFQxAljqNFGhPhPp8PhUcuCQd3tNI1yq3eYeJ03+FOsJh0X/mAyQYAOgPQAj5mfSahOA4bkE/sm/wCYRu21D+VmPIPCLtvH2LjW2C9shkjuj7URr/Peq/7UuGv+/YshGg4m+QQpgjtG1BjUV7A9qXsyFte3wqDuFWe3BZgFYEvbk7gSSpnTbwOc2hbvXcTbk9sly/2YzNF0IylUUEjLcbNm0zCNhXK9C6mOqDVBV/HC7rJxsdsYJca/5VK/ZoJF/DrAzfvKQDodxrr8R8apftOxWfHYtvHE3v8A9owrWeSL4OKsNkyn95thELsbqKt17bEyMrDRe90LCqvxngllnvsUBIxr2m97UNccyYYa7agdK6zo0bmSPDvKrZ3TvqixrCNm+Uh+0mZt8KP/APj0+Wc1C+zO6AmMPQYe2T6C9b/Wt34xylh7+Hw93E2w9vDcPBXvsrMVZvs0CkTtJJDEUjyn7MsC2GS+UawuIbsjaF58zg3Ao1MhgWBYQFmBrrTJMV7nWPlNw8YwDU4j4WYewS7/APzKevaqf/1q/wA63DgAy3rwkf41/T/8a39KgPZ1yXhVu3bthbouYfEm26u+vdZW7RxEBSA2k77TV5w/C0D3HBJz3HuSYCguxcqo0mCYkn+VTz9VixNn81wF0PTWkm/tyhxbzMfkfnpWY+2rl29dwWFW3ZuOy4zGaKjGM5tlSYBhWIME6aHWtTuYxMrE33Qie7kjXyj+fjUn7NsC1xTfcs2Y5beZie6D70bSxGnkNN65PrHqQ6LDPxup+oYQkgJc6gD8HdYbwPlHE4bBX1v2XtkpfPeAywUEEsJXWDpM1l3sYUf8QwvibqgfEGvd2MwLa91vPcz9Naoj8g4Tt0udhbtXFYMly2uSHB0zosI3+pT8N6dh+qxlRtZLGWkbLisP022CSSWN96jdfC82/tHaXcDPTh9gaeTXBW1+yG5/5fAsIX7DCAzvHbMJXzmKi/bF7G3utacsRbw9hbOZEDFgru+dlZlK6NGhYCKccJK2bOGVHtOMOtpO8xzOlq61yRl0UsTlMTHnFdH0iEztJZ8ELD9QMe0NA51ApxwviZPEMmU5RdvKTm94jtYOXyqqYzFMeLm32YA7Bz2sHMScExCZpiPIDx+E8AtvE/vRcaNcuATpFzN3MwWTlzddT5VU72MQYxsWpYsFyLbL9w/YmyWIjNJUyNta5vB9EdR+oc/te0g72ObXQZPqPEELRr32Tbgbl+G3XKmCt2BMkEdlqZJP9+VKcNwQ/wCMXmMa27qx64M1aOXOUQuDNqGC3AYBbvxcC5tSgE9wRpEeNSvAeW0uXnxKse1hxctQgIzWTakTqR18yI0qdvpXPh1nSKs8H5pQnreNIWjVvt4WScg8JP7jdQkZmxeGKkQQJt3on51drHGnw9hipWf3+2molMtyywLZRl16jzqR4P7N7iYe7at3UlrthwSj24FtbgYGAxzEuOvQ+NNedeXns4dy2U5sbh7i5SzaAG3BzAGSTp5VjzaYcgCQ0+xQP+4V+Br5XewW2uVWR7YcXKqbdrvlQs9qdCxTMO/oJWrV/wCOsYJORNDlBi5JAMBwSZAJ86gMNyY4IHaWyVUkiQYCXC4UHoTEd4J6mp9r0HKROjrBAJU55Gs1vz9Te4ARu/Ki/wArdESZW18K12ec76gF1BOc2ybbFgSCBLq/jBOhExUxgOfCCRcUBgBmXNlYSoYHLruNR40bCcFVrahiSGa4SIXusq3AhAIJGvXes155EYl17wLGyCVJEfYQJ8Yn6VzmUMgSatZ3V6JkZZWnhX/i7YXEA9vhSwI1OUAtpIOZMjEwZ3PSqZivZ7wuc6PftEbrm2BG0XFLdej1VebeYL1q7Fu7cEqndVjlX/yyNOUzu2p8aj+a+OXhi+zFxgpdFyyDo1pGJJidXOvka1Okye8CU2P2WR1jGlEdw0D8m1deI8mWWzNYvkMTm+0K5W2lSQA6jbcMKpFzhl1DFwMAJIBjIWBJ7twGIjwNSGKLot4q7R+82ShBMrbuC6xUa9RkPw8qfcCs4m+Gyu7Jn0TLbJZApaW7QqDClR9471o9Ux8R7SQC0/2XLYEeeX0S1w/unNq7BkoEtragd4e5OYzGpLMBB8N6acN4c1+6t7u3LQKLlUgd8kZVAMExllm6E+dXSxyLdYZ2ATTvJbYO5TqqKFygiToW6Cp3hXC8ObZS3eyZFFtkYKriGDNmUhTObTMDPy05vp8bYZdUm4XUv6dkPZ7dlSsJfRLAum+q3+2dLmGKsWPfAzWyqhy0bnvDQjXWqxfv9o5NklYZvsbpChmObNkYgBgT90kMNImr9xj2UW2uG7bxCqe07QAoCEmNAy3A2UdJ0FM+L+zhFAZr4usimBDd5pmSVZgp6SVpStY55qt092HMQNlm+MxqkTCqS4zGVIZjJkmNAJAOmseVWVeIsABCBn0a5IYlGJOYtrl/D6AaeLZeD2w7B1a25XKFcrqfFSFyGT1EHTTealeWuUrjHutBgyMpEqwgaEhYUeB8ImJpmV017Y9Xj55Cp47Nchj8/BUVxXFMFaRvl9zZjHdO0eDE1EcG401oEXASS2kyTIAg5gZCiNtfpV+f2c4q2CEdLwJ0BJUxG2V+78mGtRVy1awzKmMsn7YCZt+4ymBB0kR+BtddoqjDHpbpq1a+iew2dkNvA3LytibYY3Cua5azGLkQc9szOYfh1/nG8V40ptO8ZC6qHXTvOScrAjz30MHwq5cJuJZBa3mNsg3bL5gMpg5k8NANAYJgSN6zziXGLVzPFsq9x27v+pu+pMgCGGm060cdpc/cbBRTtAUPh8aHaRIVFZ77RqxDTrt3SYUVL8F4xlxFtWMpetBLgUDL38xQn/KwA+FS+M5fBtG3bE5lUyNA2UksGOoJY6bxH0j14PcVwz2m7tmFIRiqOsEAMBBJ0jXrPrrRujlBtN7bgPKWscYa5lGRCCQq5QPcBykeKSxnfp51Ec2I3akSZBUrlXKAoAbKPLU/LpGjPiF821ZgSG7x1kEKLiwPgZPpRW5m7W4y5RC2ii7kSqglgSZGbX0nStBmGQbbxSicRVFTK2La5nk3HDZGUmIdogBZOgaTmOxFNVwiKWfKXbMVJfZWbVYG7awddPjReXsCytdIcBWuIoYd8wrqzHaZGYb71OYxULKLZkMquxUaAgMWAGuYt13PQQKrujLHFqeI7FptguFPbRsyz3wBIZgTIlughI97z8Kg+JPbUhSznvEgLIIkiVboPHujw30q74rECzdKAuyMGuW5MTbupAEdGkkHodZmq9zDwy2e0NuE7LsEPiXaSwgTEEElxoY8wKngZZoqrPHbhpKWtXcroyMSzgM6mAmU7yw95Np9T8IzmLHWQS3ZKbhMsA5IYGCMupgKfnp8YjH8VdnEMB3QQvugIsiNN9NYBgmoDDd+8SxzRqfMA6Dp0irEWB7tRKY91bUr1Zx/Zt3DPaKCBl91rg1BnTukQd9DNL4nGEBQYAQhYUAhlDSznck5uumhqBwb5UmQe+wSZOrD3vKNIOtS4dLlgsNHuXFtgkQAttMzwRvmaCZpS4wtOLA4WluI3c7C6EylDlZEXKJJktAMwRv4U943hMpXPHZMgZGEslwxoD1Fxeo6kV3K94W1d+5LA5c8kFWKrlAIgkmeuwppzVx9lT93GXsyxMMBNvWB00MAiZ2NVWwvEgDOFBNitc2zyjYm0vvNkuiFhFBt2UaZC/ic67aAT1pZkGUnL3rRZWBCgZDJzrtJQiBEwAtQ+GxAFuZiWmPExoI8J0mm+KxWdVJnuELE6H3s3nrO1TzxucbSGM1rKCnce5fszGqBdDr3QTnDTG2hy7xOpih4/wARXLGVVVm0g91tXGcgAhYJiJ2+FDburcJC6dwgoDlmNWIGx8VAIOkaRVZ4hfUP2bAr3hnbfMQYzMDmgEHproabiHXbfhV2wXsUpxrAs6SqHQBoy7LqTqBqPvAgdfmz4exW1bmQWJ7pUtpIAMfh36TqfGrDx7GLaYKrZg9sMjBj3Q4Cm2ds2XXQVEYvj7hgqGFQqBAGsSJgzG+wgb+Na8YeY9wqD/6by1aP7A8ZfHFMMFGUZmW4NP8ADKuTO7GdCNoIXXXT2tXh32DYNm4xhZB997gYdVW0511JI0jfrXuKomcLcxCSzddXkD9vO6r4nCWx71uy7N5C64C//s2r1/WBe1/AYHiWMv4AMqcRs2bdy05EZtCxtMR76qpVmEZkz5lkBxUWSCWUFNK0ubQWccmcdTD4JcYwVmFpVVW0LXJKZR1lmUyeiZj5VgPGuIXHvNeZpuO/aFv4iZ+QPToIq2c1W79oLhLym3+7s/2ZEEM5zEno2nusJBXUaNVXv4aa5DFxmwPeTyT/AG+FmSyeFv8AyNxIXURxswzEefUR5EEUfm+0WGUaEn/vVH9iWMMNaOuRw4H8LaH4Bo/3VovENWJ6ageg3+Zrjs6DsZZI45UzQCxVJsBlAA8P7J86ZcL5VOKxFuwN7rgE75VGrv8A6Vk/Dzq1jDliFUFmbRQoJJJ6ADU1N89cSXgmBd8y/wDEsUhSyggmwn3n66JuW2e4EUSqsa2+hwSZEmo8DkpjIiTfhZ37evbPewvE7dnh90W7eBt/u7KIa3cclc6OhEMtsKlvoVZXggmasnDfbHw7GnLxTAC3eIAOIsAtuNScpW+oEbTdryjjMN3wzEmTLE6kyZJk7k761eOXriHL3lDAkoxGcupMG1cB0G5InTp1ruJnANsBWZHkDZen8JjcBw3D4l+H3WxF3EqOzzCTZVVaCT2aQq5mPe7xbIsaTWccg2DdS6iGcwBafugAZumlP+XuAXHsQrDQMjW3XNCt+AgzkPrI0qQ5I4e+D7fLZzh1EFbklQNGEMATO/yrGz2OkaK/sqpmEg+FSObOThbZIcxcMiOnx66zVH5q4UbbSZIPXz6/Pet55pv2r1q01kN3ZRlb3gzKDHnr8piqb7ZuX7lvIrplkDXo2hmD4gRWTi5Mgk0HceVodLyn402vx5VI4JxYqp6d2P7FWPke+hN3Nly3AqkMPiY9P1qoNwb3SjEgoGK9VEw06xpv8qu+P5T7YWlwYzuFIZNASR98mY1HwFTZYZem+V1PVutR5GL22clW48Qvfu13D2bg7JlIysAcvkp6DT4VmfCuKOMwILZDDg9PP0q58tezLiVtj9mRpr3lO/QCdar3EeXMRhrrXGtsocMGVxuDufAgHqJqJrRvG838Li+wSN1OcD5nAIIOU7eBHoavXJ2MsWrC3BcLXHut2xJOYLuNPDzrDeGp2kiQHH1FWTgiXlYqFJMe7BIPwE7bzVDJwGFro/nwoo3PgfQWjc0c2/vLZbMJbttOfQEtEAnqYiq3zPisQ+Qte7Rxos6Io+W9TPAOXHvYVGWyLV6WQ5+6janvz4+EDpQ8E5LewwW9i8Pku9wqXDMJ/CD/AH5U7H6a6AaWfp/3Tvc91kq7ezDjlrD8KuPeuqzfa54O5kgKvmRGnnVD5Q5d4VilzJ21i4oBbMTIPiJVl+GlW3jfJWAwthUIe5mbMVzAh9Pe02geEaetWPgXNGHtIEt21RGiFUKF08dpq7LltYdD/Hx8LQyWsLWhp/Kg+Ocj4i1a7a0e0RFmNrjKOoEQ2noapo43cv4dlslVZyA5OrZBqwHnGw8a1tPaoouNZCBmUAznABB6ASdaxTnDEnDYs3kXLbusWKjYMdWA8PEVlzR4weDB+rmj5VCVhiOofuqTz3gGZVvKuW0pFtcwhmInWOvrUDwnj72HkNlI3XofhXoTjH7pj7CJdYqoIK5NGBE6/M6iKpPGvZGt/EgBwtnKO8PeAEjKdhmPj+damPlQzt0SfuClrDzYR15qTG2SgYW74GhJjMBus9QfDxpDkJbeGQYq+DnnLYszHaHY3HnQWl2nqfSpLnL2d8PwyoiJca8IJJuGCBrLQY18ABVb4yn7xdt2lQs7EKqqdN4VF8FH9TtUAZFA4xx7j/ZNkIeQPK3LD4ixdc5icQwQXLlyD2Fot7oWCAQDMKNWg/Crc642FCqBpDkZYEAkZmnfN0H8hTzLbwtnss4yWl7TENOj3ANEX+ERlA8BO7Vl/MzN3WeTdxTi4YYwlqPs0jpA1Pw8Kxg12XMSdgNh9yuol6QIcTU4e6r/AAFaeIYyy6i4yKXtxcRwAGVxqNR7w8jUDzzzLcu4UogfcZgJLMMrPED/AJYjfw9CatHs05bw7YRrl8hlLshZ5CoLcEtAIkt56ADSs44zzIrX7pw2QW2uL2SQSDbAKlZcyquROUkCPSK3cTAkhAOqx8X4XOsYHH3eF3LPFRcRWjLpqu0EaHTwqw8CuFxfCsFJtazpP2qAD1/lSvND9jY/81ibCXSv2eEw9m0RrEd9crQNZKjLpALdIE8dt27SxlId0JjVioAMTr11/npQmxCyXUBydlH9MS628Ks8b5cuPjWXDrma59qBsIIlyfuhQcxJOgHrUvzHgLYbuMpOmc25azniHyT0BGhEjwqQ9pfHuxsLZw5Aa8o7e4plmUiVtB493UEqPLxqjcoXtCnhqPTr9a05tRjDvhTmWVjAeKUpiL5KqPAvr01ad6nuW72p/wBNQto5SwIlToR/LwI6GpDhNoqWHoQfERof761lZAD2ELFm/qO1Fax7P+MIrlCQHdYT1BmJ89/hVtuY+zaLs+cNcAUuDAA3M9II0mqb7RfZ+MJhkxC3XN8G3m0GRc0e7AkQ0bkyJpzw5v3yzA99gbbjUQ0an02Poamhxy2LsuG/IVmPVEnfJXH7BLBXUEsRLkaKDIHmNKdJwzEvcuEOBYdgylxPeX8NqYK+bwD51WLPDsBwuGuH95xSiQqicp6Qmqp/nuS/UAbVBcV41jMeQI7O07ZQit2an/5lxiC0dY08qrR9HigkMkjib8K07I1NDfK0LmK+1u1cudpduXmGXtcyjOB07uyKRoqmJPWayzAc1Xlu2yWZu+pYHvgifA+Hyq+8b5aYYW3Zt3cMTbGp7dUZ8q6AZjAUEk6kbnc1jHP2FNphYRw90gPduW2zWxsVtI0alZBdhpJAE7m8MQvffAUTmue5bLwnDtcZipLDVmYknKSdMx2LeC065l4Xh8Nh7mIuIjm0ub7Qau50VfKWIH/arDy3xnDNh7X7vOWUW7bTVkyp3zc65tJLHRtwaz/9qLipa3bw1lTczntnCgkqo0tho8SWbyyzWnDjRadzZT2Y4tZ/zLxdb1lXT3WJU5oGR1SSqAaASxj/ADfLHOK2JcwOubU7AjrWnjCm3aw9t4E2+0uBwO42IY5CBodLaI3xqm8U4Cc023XvFiQTEdco1IaRqPEVJgNbESAtmNlMCqGIxjA5gcpBEEbiOvwq04e61kX0uArcOQgNMywmSendbN6/WFwnDS963b0791U+LMBr4b1O+0JLwxV0XspbtTGSMkAkLljSIEDyArTfpcAEHRB43UbhrLQcpMwTp9aSwzsdCSQOh1HyNWrkfhee9bU6guAR/CdCPrFF41y0bF9re66lWPVNwfUDQjxmqP1DdRb5VHL9rhSrPGOHmxcs3LLHvoLqxoyOGKsvwZTHipHnW4+y3nIYpexuRbvEd3LpmYfftfhuCJyesSJFZHjLT3BbCgsUYqoUaw5n46g/Opm/hUw15Q2aVZTntmGGujAa5WBBEb6a1K+cOaAeVCXB1K882cwriFNjGBe3WTbxaKczAGB2tvZlPUrqDOkzJvYpicRYx+F+0zWzfRAVM2ihORoMGCVbRTB8qqvHLGZ4ZmFxpvW2fYkySkmAFuRmU/i0+9Uv7HHZ8dg1VsmfEW8ygaMBcBbTYEAEz6HSq0ZII0/Km2tfQsV1AKGulHCtLE/2sMWvY4e2QMzXS4J6Kiw3Q7l1+VYfgBHUfIVrn7VGMRruGtadoqu5MkQjEKB8SpP+nzrM8Bw3aCPn/wB9q6fplNiFri+s26Y0n3Dsayaq5U+I0/Sn6cevCYvP3hBE+95HTWm//CQPeuH5iKIeF2/xfLY+pNag0O5Cw/6jeDSRw2OKlmVoZozMIzGDIzEjWKXfjVz/ANQnw0U70YcLTby8R/2NIX+H2x1EmPD89h8qcCzwFG4SnclI3cSTux/2ikwv8bf7R/OlLmBG2dR8f61z4JANXGmvQz+tSWFXc1xSDWP43n0X+dCbP8T/AO1f50s1tJ6+M6fLyrjjVA8hp/UCYpWm6B5TdgPxN9D9KMLf8R121WuGNXy8Nhv40V3X8KzHgNvnvR3TdkZ0A3c7eK/38aIWUffP+4R+VEu3k8Aem23nrSdy8sfd+U/HSiAmFwS/aJ+I/X+VchT8XzkU0bGAdfLYn4gU5sY4fiHxX6/1o0g148pS0oOzKfifnR2sR1H1NIHikdR4f96Pb4mT12Hl86bRUgkjVw5G5N7csbhdECyrLbJDHeASI218+lJ8x8m3bNtmyoQWLZjNuFVoLO4tSgCalSx1B1qBwvNt9BC3nWNR39PWNvhTjF874l1KtiHYMIIJUjXx028qzZsfKc62u2W/h9SwIm09hJUbwDAO9vOvZ38mUO9ljdUFiSuZSSwYgDZYAoxw7+DTtqjTPypxg+ar1v3LuWcvuKgBjaYUbVJWefMWJ+3JPmts/p9KsRtnYKNFUcqfEmfbbA+FB4rAuvvKV/zKRTa5a/iX5VYL/P8AiTvenxm1bInz7tNsRzTdaJe2T/8A69rQeuXbyqYGXyB/KouGOf0kqDkfiX/aaFQPxL/tqc/8aXFWD2LDb/CXY9DAAjyqMPGLbSTh7JMyTldZ/wBripA5/kKFzIvDkg6L+IfBR/OknC/iH+0fzp61+021hRts1weumY6edSOGvWUBmwh33LH4A5p09KOsjwgIWu8hV4EeJ/20OdfH5ipq7jsMf/weOnde5P8AKi4dbEHuNHm7yB5GKd3Psh9MPDgojtF8vl/WuW+Pwj4/96eYm1aPurcWDsGnb/MtDZwKdTe1kyAh0+VO1hR9l11YTQ4sfhHzoi4kT7o8aejBp95r4G3+GhPx7wopw1qdHu//AJNZ+j0tYSMLwpHh/OV+2uRLrqkRkgMuvSHzADyECm1vmBwpWbcEkkdha1kyfueP9imRsW+jt13tEfkxoDg16XF26o/9ai7UV2ApO9kVp1bflK3uI5v/AEvhZQfkopsI8V/2/wBKJcwX8dr/AK//ALNc2DP4rPwY/qBUwIHCgc17uULYf+Jfl/ShXD/xW/7+FJXOG3AdlM7EMpH51x4Vd/CPQFP/ALVO1D5TNB+EqbB8bfzFB2D/AMHzWk24dcA9z6A/kaBeGXv/AE29ctLUloPwnNkXehjp3Wj8jQGxdPidfxTr6zTVsJdH/LP+zfypO89wb24/0kUNk8B1b2ndzC3OoPz/AK0i2HfwP1pob7eBH+75UuuKb9dz+tOtCj90e5abwb60mLZ8/rRRfOuh+fT1n9KNaxDQSCf92tGwmFp+SgW0PP50GQeH1oXxjefzFFTGHwPyBpbJpDvlBk8qFbI/CPlSzYvTqPWBRFxlAgfCQJHlesKwf2z8sGxcR1C/u73jcYwc9u9cATKrCMqnV0J0DCNNKZcv+1+5cvYdHNxFxRi20W+6MxTM8KJ7ykabSPCnFj264ZxezLiSLIEqwtEP3xbJGsaMQdenpXy/6Z6b1HomUJxRbw4XyF9JZWEchhjFrHOR7TpiOHEsSVxV2z3wc8dpbcKxkggMzEH18BR8YkYniNo7LimvehXEMp066H5VreO9ruG7kYW6TdWVk2AVIbLMBGIIIPnSuM5pt3cXcwrYZCyF7Rd+zbMyqzKYyISHIiS069dq9Ch9QOZIXmM/ynYsT4XC/CPyFxXssEt7RzbwDMpYkKgF24khfvkkagdBrFN+P8Rc2OGC0gAuXLbOlsyCpUxndpKEN2rknYnyNWX2I8JsY/Cm7dtZGt3nthLT3LaIvduBQoaB7+o2mrwnsuwgDAC6A3vAX7oBmZ2fzPzNasfXmBu7d1Qmhc6S72vhYHjebcUcQbSKqOXKC2iLmuMggMW0DsQCZnqfija9oGJtErckMp1V0gj1A1+MVr/HeRsMrKIufZlnt/bXJVyIlTO+g0/nUdcwNt7nZXltO7KvZC6CzFFXuAs7a96VYDcxvXLTtOTKXMJvldh/8uxMGJrZYBpoDbm1SsJzUL5T94uC1Z0YgI0vrlILRop/F67VtHDOL28im3lKCMmVgFMaaQelYX7RuzsoMtuz2qpIAtqUU5190gnSCZVpnpFUTkXmy8121aLFbb3MrhQyCXuLLLBgHUjQdTWf1Lo88rNbH0Vmzeo8TPcAxpDRtXheuv8Aiynq3iIcyPgTFR/F8SLmzFTAEMFPx01kV5956xrrfe2mIurluP3WuRlVWIABEsTodCJ2q88jcA7fDB2xN/OGcEqwIkaKMpE6iN9zNYjIc1jd5AR+FebDix04PWncvceFy0A8M6koxGhlTE6+Ig/Gs69qvALgPbYRZJOtsFFCkx31nQz95DHiKc8ucIZdVuv3spIdFIJgjSCsHx61YeHcJe67J2iroTqh1gxGXPHxrW6T6hy8XJHaIJ+PBVLqPTMSdpDjt/svNvMRxH7zkxZZCGhgVKgKROZejCDPdmrRwLhuFsvbZjmDEMHZlIyjUmAZBBHUaa1bvaDexuFxXdAu2gwe3mtzbIKAMoGpkQZUnUbVS+I8wWdUxOCtR2mZSoNq6AYaABByyZGp6wa9Zh/xCaY9ErKNb0VwWR6St2qJ9jxa2i/xOzcSEe242ARln5TI+VUPiKvbfOoKkNpGs+XofA025F5WwuIu4m2j5CuID2SF75s3LSnJlctIRp/j13q/8E9mttHJuNnXKcq99VmdGntC0iNtB5aUMT1lhRtOoHfxSrZXpzJkcAK28qVtYTtrauJhlUkTBB8D6eNUj208PVcJcIXLFywQSSZi8uYwNJg/yrQeG8omyuVMVfVIMKexcAkkyC1osPnVH9q2FCYa4jXWvXiJQMie5bZHa5FtARlA1JPUCK5TrWTgZ5DqOoG2nz+66HpONk47q8eU8wvI+CdFvdlGcJOV7gPeA6ZvE7VUeb17C+6Io7JLlsEPaznKbY1DTJIJMn0kzVxsYcthUC3FDZcO1sst1QQpVmEKdyJE6ECq9xPk+9duFmxNuWLAEC/OVtQuWYhYiYnxrl/TGH28mQ5kpDN68/hbPVsqd0YDAXEHyrDy/cDYSyYRiGl80KzZL2XKOuocGrVwfgmHuKc+HtsyyjlgnaZkOSZAmIIjX8qyfGYs4d7aPau5FeXPeWyYJJK+8wLAl9wTkiOlaVhEsjVGXvWyS/du5j73UKwMbkvtA6iujy44o3amuDgs7Hnc8EFpBVP4zyLZuXB9mudhpNx0JRbE7A5ZiF0qg8+cEsrjLJAi47W8wFwQDktBdGTrB1zDatQ4rdIezbiy73YAcWjKhlcTpckwAAQPKpDh/L1m/dbtEw9y4tq3BAcsrQQA03SVKjTUVmwO0v1NVyYh7dJWSXkJzBVglsL7zKozC0532iOh1qr8dwKC1ai5mJuAnbSbKFlBEaA16V/8DWNB2VuAQW/xBLKCEPv/AHcxFQ3Nfs3wptgZMgUyMjsIZhlnvZp6CI6CpcnLL21aq4uJHE/VSwEYlgNGbcRDN1nzrSfZJy0uJV+0JbujWXLLq/gRMwBrsKc4r2ZqkuzqLa283eLHWNNfs1keBIHnVy/Z/wADk7VlA0W2uikAxLGAZncCZ39ad052qQGrVzMk/pkA0so4hgsnEcThwzFLanJbFy4ApC29fe6yY1/Km/MmGAXMLt5Abj2wC7lptpKxLEQzCCfWrNxDlu+3E794W81q5ILEd0oMqFiRMQUMyBuImpDma5bt4W1cNm02UqrLZVD3oa5mLuWXUNlMwZjyrayGxuxCWNBdfhcYySdnVQHvcGaeDwSsqwLM1hGZmLG2TLSTmGaDrPhTRMTiFxQRL90AvoiFpVezV4Gvr5VcrfOeC3OFuhdoC2IWfDbz0q6Y/DWwLR7GcwUo/cDKTbJyzGhiBO4ERE1yozDjtcJPPC7T6cSua5p4WXY7mnHWO1DXroa00FSQ3VQM0jaDPnT5ebsXcBtu1u7Dd5HS2yZcyqDqu5zRoAd9av8Aj7eCv3r9nEZkf7MOzsUFwAIVyupyypAmROvwqTxfIeBYa3AqkDUXlk5XzqSSDPeMk9amw8iIstwTMmCUn2u2WcYTiOGPcdtCuUWwMtsXDK6Fi0alhOhEGRFG4VjcHhRmOHNxgYLlkuNmLRlUNoDpIhZMb1aeaeUcO9nMhuKyuuS7ZQXVYZyWLAKqzqTm3A3MbRHPnJVoYUFTDJcWWU2XuXIdiWNtGVwy5gI1kR6iSGASG28eVTe0wn3V9lJcJ9sGFyM/Z3UAkZYQzlIUgKW11I0HQ0i3P+DaXQYiwc2UtaQZS8jR7ebKZ36GBWftwjDMNXvWlZgzXGsXJksdSIIVWkaAHYHWrxy/yYmIRWtsCAwuM6Nkd2Ev2gUhQfey6npHSrL8WFo8qeOSR+wpOcXzXhrq/wDmLPbA9wuUUTckymrFlfuk91h001ql8zcrYKWbDPetN3ka3dts9sXIlkzg5lPkc+42qyXeX8Nny3Fudmb5zC26hs0NJZBosAggjcD1q9f8L4a4IICObgOVna3N3YNMlO9tm8KMEzGWGE2quTg5DyLApee+W0ez2qEHMVIA21WIYHwMfH0NH4PjCqkBpYFn7p76aFYPpoIFbPzJyZZYM4sPacAgQme05Hhdtsyg5joX9Iqr8F5QdRcNzCFSG0vG6AASwIEDSQAWBA11BGtJ0hcdwqv0Dz/q2VF4Jx9VzFxduqDEAZSMsEEkq4IEExpE/CrJw7mnDHvXLN1AYDRbQz4NoACYB7xB+tKY7lBAIGMsWwzGS56NuhdBM+MxvUa3Ib5vssVhrqr7q/vASCG2GcAdYkmr0MmkV/ws6bpDXv1kmx8FXvD8K4ZdGi2BICg5ltvqNNUI19YPrURifZHZkmxc1APcuEMokfiTvAbakH1qDPLqkIpCp31VzbYOr3AbveuQzKiEwJ102qQxXKLW8rJeQG463CZCqgJM2u0W4PeIECJmKvQ9ONahKP3Vp/Uo70Oi/cJrZwiYXTE4W3dXurPekiTBQqxAkaQyg/Wrdhjw24FiytskEi2S1vL0bv8AaZQfGoLFcDYAyyFZH/N7NkkNGdnMMFHeJ+mukPe5BvsxZDh7krDJ21tsxYTIIOm4jehk4QZVvG/wUYs0kHRHx8haFhPZXnMDDGCVgDFKyjSRBDEz8dacXvYXJLdk7SCZ7adZmOhnw0JnxrIOHcr3w5jKrdo2VxcRIREOgKOZYRoMup0q6YDA3UuOt7HMtnsHuIwxDM+YwLVtlLLrAJ01k1AyKOt30n92Qn/pphxr2bj3bZa2yELF2SoImRmhWBneQf1qt3uX7tnW7bOUSS6L2i54MEFZjpv8hNW3jNqwUVz2ZLZVc2s91ZOrO5B7jAqwI197T3aTXhGGtqHt4g4Yu1p7RV3Kku8ZD3cygeOux3rRb01pYT3AVQkzw54b2iEt7N+DWsSrdvd7E22QgEKA4KiWzPG0KGABqx8R9jOHusTbxJLAeNq4AZnZcjET06UtiOBq8IeIYdmUrcPaoRbYKxDLnABZbmpnqTUTxrlewLb3rGKts63c5tKwQMAxD2rZMXNJDDN0J10IrJMTIne1w3WnFEDyxUvmD2VY0XmKWzdUE5XBVVYafdZgy7nSPSqpzFydi7Bz3bFxVGrMBmUa9WQkL8TV045h8SWU/vFy1kQyC7guyZp91iFJJWBERrrSOJt4lBmGLuRd7FkTtGYKrls6uXlWKgRlIE+OmurHmDt6XUsifpIMuptq/wD7G1hLuMe6F/wbBhiZ1usoA30OVXHpXrSsA/Yy4Si2MXdUEZ8RkkpkaEXMARJmDcOor0BVRgAGyuhmjZFuNGtfMP2gc13bvFcRj7DOjHEs9l1kMFQ5bRB/yKumxBIOhivoF+0FzD+68Kxt6YIsOieOe79kkeYZwfhXzEQuFHeaOkHpG1RzH4R0l3C9X8ve1Th/FLaWeL2xh8SqhVxtsZFMnZjB7PXUq4azJJlNBXc0/s+YlB2mFe3i7JEqbZCuRvMFijeqOSfCsL5J4WroXcZjBBkjQCIgEzm1qzYDmHF4CXwuIuWZIPZq0ofW2QbbD1WaxZpInv0OG/ynSdPDmain+Bwl3B31N1Lloj30dSrFDo0AgEwNQdpg1uf/AIRa+LJtkW7a22bEX7hhFBOYGJ7xyy0SABqxWqVyl+0c91ey4hhrOLTWWVAriDGqMGttpr3ezqD9sntTGLsrhMKj2MHADgwr3NNFOUtFtTrBYlzqdgKoSdOgc/U83/us8RNj2JV55n9seB4cjWuHqMZigut8ibS+JLiC48LdmFPVzFed+J8XvY1r9++WvXgQ9x2IAVNoUaBUSdEUQB0FNcfyneUFrAZ9tIlgI+7+IeX0qX5L4J+891Lxs3Fci5bbMFbN5qAYOoKkGOtakfaZHTNm/ZOdI0tVSxeHDDQ6RIqOSwQQdiNo30r1VyZ7H7eW5aazZYOCc4uMzLtopPeRhHSAes6VXOZfYCVuAJeKq5OXOhOUASQSNCfAwKDHkDZMZIDaW9iXOy3QEaBdUCV/EAPeXy8V6ekRqvEltPrmFt4kZiAD5TIn6/GvPvN/szxGCK3LZzd9YuICrL11Rt512JmrVzXjlu4IBhdQugZCQRlcaNBGhQ+G4kTVLKe6Aj4J/hVXRAn2nZS3M3BOyU3LfVgWKtKqZ98QY/71V+Nc4YnEuljElXUMzW+6AzQIDE9f6VC+zj94C4i1kuPZNs5mklFcbGdhJ6TUnypw838cij3VT3l+6I1+M6etZ2WWQlzuBVlXoAY2kEqoYE/u90ue8AxUgdUO+laxwvBi+bd/B3BZZO6G21IkBlHyJHyq88ucicPUt2mGF0sdXcksCRqAJAAJ8NRVH5i4lh8DdbDYS0ZvwpQnOVZpUBdc0nQjc+dZsefDmUYTbvhMNHcK48P4xxAg2rmexiTBtXwoOEugbo+4Vj02nwqi898axuJGTELlW0zr3FIJbaRpBB8t61zkbkW/h0IxGL7S0QD2LLIQmDo7a90+ApDmvG2UiMrZZC6AsfoKk6pktxg1xFu+E9uSWN0k7LyTdZrT9cwbaDPyrR8BzDi1CvZsv7plxbJJBG23StHvST2jrasg/fYKHPoT3vlVK5v9qlrDvkRXvEaM5aE18Imarsz35bgI4rI+6j7jn7hqpfH+fcZiBkzNbVdCqyDrvpM1rvsV4Dw9bObEBWu7lrwJ6ahZOm513rOMX7UpyzZtd4jcSR8T1qxe0hDdwlm5ZUgOdX206zHSetaD55g9jSygf3U8UgohwVv5g49buvGHt23SzDaghMoOxPgegpblj2vi/cNlMGt0KDJUqEVV0PvA1kHGOZTawy4WyQXYHtXG5k66+fj4VLcl2b1nDtattaRrkl7mhIUjbx8hU8sPaGpu7j/Cgca3KPzpznhAWOGw/Z3VPecuSqEbiASNT4RUhhVu4vCF7lpwp925HdJGxHxMTWS8UtGyDbJDl3kQJnX8ya0FuJcYtogvW71rDoF0FruZembKDGn4op2TgMe3WB7hwU57i9oCY8tXijG23Q/Wrli+KXEXtLfedBORvddeqkdfKNZqmcciRcUyG1H9+VWzkTm+2V7O9bVyogT3W/3DqKw3RW8S/wArNa0sk5VZ45zi2IDXFXK5Az2pLMgA94EyWtk9d1Oh8alsHxA4PDrd93GYhSLAbQ2bDHK+I12a5qlv+HM3UUnxk4ZbpvJhlNwMMxFy4Fg75190htj0Os71Gc/r+8O2KCszBAty2TIUDQPbjTs1EDKB3PQ6asXYv2jlbMbW/wDVbuR4TrGY3t1WyG7pKm5c1ACBQTO/eMGJ3Iq68v8ADla7+8Xygw1gBRnBKuQJY6xKroInvGB41A+zPh3aWxodAuZAPekMAx8Qo1+FSvGeCYvF/YYe1dbC2dEa6AiXXmC5LEZoMxGaBr1qCCCn7DYE/wAlaWb1x+Qwx1XH9lB83832sSlzD4dWyFmctIUMF1B7MQFSYmNSBWTcVwJt3Ap0KypgyJ8fMGt6f2Q2sJg797E3V/eRaIthCezRidFiAbrN7s6KJOh0NZhxzCWGsLt2io0uAQ3aFvdbfMANPGtEHtOr5VGDHD4iPKqHE+HBgJkNpBA28j403xuLypbQaqCJB3JBIPoN6l+GYvMuupWVb1GxqGfBZrxgGBDMSCVHjqNPjVyIndrvChxJC1xY5OeM8RL9mCDA/PQEemlLcDvZLinoTHwOlI4RFYgE5TMT00nX4094nglABRpIC/zJ0JAKxUb6rSrM8Rksqz8St9atXKfL73b+FsupUO4BOh7g+0bUfwhvTSqdxTFSEPiAaneE82NhlW6oBZZCzsCylZ9QCawg1wc3a91zsjQySluXt14wq4Y28ySzrCnfKhkkekaHxrEL/OeIuWRZtBU/5c2ZFy7LSCx3Jafu6k79BUZi/wB74jcZkV7rKku+gRFA+85hEEbLIJ6TVz9mnA7eHsPeN0SoC3MQgk22bXssKGHeuxo+IIhPdtg6tWhI+j3HbfZW3W/fwo27yWqRbuZ2xBAL2wyxb/8An3AT2c9Lay56xIqz4+9awdjM7Z2HuA6gHcJbU+6vidyN5ql4vmtc02wLeHQ5jnnNebT3iZlm3O5qn848xXMVdBIEaZB0A6z4k9flWa7GlyZBezOT8/hQ+dloHC8LZhr97LeulGdu01RAw0VF226+MxUbyV7O8deQ3BltWXYMDdBh1n/loAWy+BOUHSCavns64Lhls28RjLlpe6HS01xcpXo1xZJZjuLcQBEzsLlz97Q7OHUBVe/cKdolu3MZYEF2ICqIMwAzfw9a3cPHABMrueArEbTRWcYTlK5hGY2bjK8gswtjLB3VhmMqQdiD5b0yxItJiTi8VjYuMGTswqpCsvZhGPeKoAYAIWNarvNPtAxuIB7iYS3P3ZF1p6ZmJc6fhCCs95rxWa0FAYqziWIhmKiWPmATSEI7lNOx5Tsdry7SCtr4nyzYuyYeWRVDh91AAHiu22m1ZDzHODvtaJzAAssiMwuLAPkw28JFOOAcYuqidlcKSB7xlSVOUjKZGunSoninE72NvoGCG4B2SxltgkEkMxYhdZO5HhSw4Xsc7UbCvxsljd7jsicv2i2Mw4PdIvJqSCO7BzE9dt6dc0OWxKKYbvk5gRDEgajoBNW3l/2dYxLlu61pCFzadpbJ1VgPva6mZqJ4zydi+3UnD3AqgiUXMBpqQULddtamOSxz9iNgVM3Ij4tPvZ/YOcPknJ2g1IALAE5uh7oE/AVYOYOXhnuW7l4E5gVKnNrcSZzabaSo2+FV/jRNqyRpbYgLIU5gGJOYz94wBSnMl25auWhdYu3ZpcLzIYkS24BJX3T6Vlytc862FVcz3N2UZwTCvhcWiuNUZTpswOzKeoIMg1sXC+R8Hi799b4ftXt27lpkbL3TpcA6MZg6g7nwqpcxYNXWzcDBmIUDwCb77jK079DWh8qqAgLZS2Qd/TujwBBkVGe5ObYaNKix4Yd1jPt5wPY4vsZJtrbUWyREqJAmIEjYwAOvWrb+xxy4lziS3JJNhHuqvTVezk+YNwRQ+03CZ7xkC5buqHh9CCNGNthqp0Go3G4Nad+xjyoLT428DmQm1atkiGAGZ3DdJ1TUaGAdNq2umkFzWHkc/dTxuD3r0ktcaGozmniQs2Lt07W7buf9Kk/pXUAWaVxxoEryx7ZuLm/xC+QSFtkWViDPZ6N/1lvhTHgdqfvEdNTB18v1qscOvMSSdSxJLdSzazOnXyqZtswiGIOm0fnuTXW40elgC4HMnDnlys9rhIOmYnzzH+W9dY4agkGSR+IET6HqPSojh1x9YZ4md9fgNqUu4tgZLMNzLNoB5RVoNPyqBmYN6Uli+4J7gG3Ux6HeaZXcapgA+AMA6+hNR1/iQM/ap4avr60W3eUj3kgCPeG/iBrTw1V5J7Oye3LanYXJ+FN9RuD4agk+vTSmOHxCye+PEaax4bQfQaedO7XERGmv3Z2Px12p6hLwV162Ygbx5/OAZmutXSB3gCf4dT8jRTdGZRp8tD6mfWhxVwTBA8SPu/8Au3o2mH5RjdzfdZddTHXx9POuuJESI6DcifH+5pLtLZ6abaqR+VOsPaSNpHmx28qJKDRabXsCx1BLa+O3ymiW+GnxYa+B38NdBThLx/CPEQ/0k7D40rcJ309O0B26EEUtZR7bUzfhLeIn13/vwor8NPkfIbfnvS1287aTlE7Zx8dv0iihH338If8AOlqKYWN8BJ2sIBoT12GsegjWuGBk6zHTu/LoNKUuYg5pk6fEem2vzpa9jQYhlOuxzAf0o6igGNKRscMby8jpoPXT5U0OBEkZtd/6TrUrbD9cp6g5pjyHx6U1IMnx36SB4TO/lSDig+JvwhPDJGjLpEzpJ9DTYcMJkiDGmhE/I7UbKq6gsDudVGnhNCzAxsOukEnzaSadZTC1vwkBhADB8fr4HpFFayV2/pHwqQNodXY+i/rMVwvDpmPWCVH01pak3tBNEQnSAPMkxp69fCiXkK9d9jM7+Mfyp126iTInoCSSPSNIorMPxaxPdkgnzJ0o2kWik3En752/yj5xrSLIVOhmeobTX0FSS4gfegeehOvqTpTm5hlYaPHT7vw0oaktFjZRV1ojVgdNiNfOhF5+on1n9AKG9acHfY7z9Oopa6pCyRm/v1+lG0KKRzs2pOx0EnT4b0YXGHXx8T/2NJ3DoD6bfz6UV8Uw+8d+oUj4mKKFp0OL3B1E6QSJ+Z02+NK2uMNJkz4iFj+opi7kxInbQT+nWnX7uImG120EUKCIe/5R8VxFmAAWNQTpAPwA0Hx1pazjpmUG0bE/IHpUPdxVwGO7E7ENHp4fKl1dydcu34iPzoUFJrPKk7FxCDCr8gPXfegxN1ANl8NhGvWelRzXQOoGk7mJ9Y3pmb89VOuhzt/KkAj3NlKXVQnoI8CsfM6zRr1uz4gf5QPqZIqNBZdQZ/6h+WlDdUmSSfmBHoKdSi7n2UlfwiAAyBOg+PnO9GXADoTt0On/AHqEs2NZzddDI0+lO7t3KN1PgZ2+nTwikn6x8KRFlxszR/m/vWkhdua99/ixG361Fi4w2bz3/pTjDYljPeHxOvnApUmGQFOb2Ou9GbwP9N/nS9nFXon3hPXUx8Bp8ajUvONjm8P++nypJsVqZU+oJGvh6UaQD1LHijeKbeH9N6R/4s3ghk/h09DTDD4k/nodflS1vHMfAgdCB+UUaQ7v3Tx8ZO6W/j/2ps1xf/TXfwP08aI3ECeuUA/E/A7UY4zy8uvzpAUk51+Uqrj8A28P6zNFtun4Bv50lfKn7rD5Gf1oLKW+paZ67/360TwmgqtYzh7C1w/EZGlMTctM+uURdS4sse7Jl9vA+FWzmrkVMNcxFs31LX7VwhDaIZCbodZiZTTQ+Jr0jiOBYVk7FrNo2wc+RkAXMPvAZYDeY1qie0n2XpirhxFm/wBjiMgCTraJXYOu8Ed0kT45Sa8cYceaYB5LWr6HjzcuFlii5ef8Rw9lXvWiShL5o74BmIKyNWYkjTTwqx8z8Q7K+90Qxa9hbsx3oNgMYncAkhvP5hLA8WIuPYvKLWKSQ6dGH47bbOh3EdKtXCuP2EsMuIQXAgZk+zVyZ0IM6yu4NavUfTjW4/exnah8KDF6wZpu3KKKtv7Nt3Jd4hYkdy+HC7QGzKdPRVrazXmfiPMWFsxew925h7rFVZ0tMSdz9tbeQw1B0IJgaEVp3sv5xuXWKXmFxbgZ7F1bbKCqnK1u4coTMPeWNxM7CedxiXsO3C2svp8rB3CNlO8wYaWOgOvUdY01rOvaxwInDpfWc2GJJI37NiM5mB/hsFeegDVr5MnUUa5hFIIIBBBBBGhB0II2IIoY8pik1jwsnOxW5MJid5XmzjPNVrEWGw75bd29Zyh30tuc4yvmUNlbYHNFVrkTlC8Ltp5tOiXFU5bqP7rhmdRo0QJ+PwrevapwawmDZTbTs0EIoQSssuluIyt4EEbeE1jPs15OZMXYIKPYUs8i6MzDtMo7W2ZlhpOum81qOmbksc69NePlQYnTxiRNaAXfJSXO3JmKuYq/cTDu4e/cZHECULEqd9iNda0T2R8Iv2VdL9tgrBSCSD3wY6HTujr4Ul7T+SzYLYmyrtYPfdbbHtcOxgm7ZIMm31ZPu7gZZyzHJ/NyuqreeQw+zxAjK8zAuR3Vf+LZv4TpWNNivkZ7V0EWF7O6w38jyFJ8uYabSjTedvP18qR4fznYt41cOW75RlnTIHIzBGckAOVBOX08aNzDzXg8GMly+Mw/5Y79wAxrktgkbyM0A61g/DuIYdXa8t17tt7p+1urF205SVZ7TNMZtO0XQ6g9BWbgdJc2TuPH4QllDhpW/wDD+ecJjG7O04d1Ott1ykwYkZozCeqkxWO4TmV7t4PcWw+HOK7E4d7QBUCbaMrATOoJ6bHrVH4jda4PsCLd1WDgTlAO7NYcMVGYiShiJMVZOWsS9i2huo6gvdOYqzgi4c0t2YYK6XBv1EHSK6f/ACz2mQKh9TGx/bcVaOcfZo6tbuYMw964rNbzx2emjW3GuToQZK6birpyZzo9u4cJjRluiFS60RcUrKyRoSejjRjpod5flrnS1cRrl+yLDghFL6JcEe9acjSdTlZVI8TVa5g4JZuYlrmMdXsuF/dblu4RctNbleyhB96c87HTxrLycCWEEn4QjzY3mgR/KvuH5hsvqt60QBBGcAgzGqkyNfEVSOLYsu9y+QpRlu2EIgk27ILXDExF180ayQqelSPOXLGCx9tl7W32yAZLqx2ikDTOpMXFk7NGuxBqlcK9j+JtQqYtSJLGC665SAAJdQD94RVPBmZWqQEFaeHJC93udVLUeBLYvW0uWSrW9ChXYaCBHQjqpAPxp9j+GZgCN1hht0O1ZRy/y5xKxcuMLdg5rnaFbF/IhhcoU22XKJ3JGWfGrvb4/jRlDYS3qBMYhJB66kaAfGnZL4IzerZTSQA7xuB/dJ+0PC5sPcU5YyknNA2gmJ001I8dQN6y3ljmhcNdYMrhGbI6AdwE93Pbgx7uhWTuTrpWyrww4hftytnWey7RLs6aySoHj40Tifszw9xMjKpSIHcUEeBBBGvn4U6DJYRtRWZI2yqPi8eDfwDqdA8KRrK51VZjY6NUPyNgr2E4wysr9lfe6wuBTle3d79udNcrZV8mka1o/DfZdh0jvXDlOZZYSGEwwyoNs0+E60Ti/sttXLnbdviVbT3biwIAiAUMHugyOsnrV7FnbGTflQTRl1Urr2nfMGcwk/31qP5hwpuIQo1kabe6ZpoOTxIPa3ZHWR0nQ6e6eo0qVwvAgJJuOxIA1gbR0WNdNzVRxcTVbKbYKne0DhZuYTEWwMxa0wUD8XvAfSKR5c467WLKGxfsYhEtSWs3TbYW2CspdAR2bDWTqPzvXDuDFZm4znoSqiPkOkb+Zp9dwx0hyI8AsH1061bxZnQAgKGVoeQVXfZyiJca4ciG6v4ic5LsYGYABgCAUE9KquK9nrJiCLdvPh2e4wy3e8QyH7N0PdYKxiNcyE7GK0B+D25kqrazqie947b0FnhVpdkVQddNNfLw+FW8fqboQW1yqWZ0uPKcHO5G4Xn7nH2cntCcMgewQCVt9/s2UKWtEmGkEnKYmCAdaf8AGOYTaOV8JiRbGgZlIWSsAr0OUAjcbedbhw7htq0CLaIgZizBAACx3YjxPjTs3BWXlduZ9uC08fXEzSFhGIs2rwcC6LbhhcIuAAXIASbepzA6rKSfWKa8F5fVjdtC/YcqUZFzdpmgBsn3CFykSBJlddorcONcIw94AXrNq6F2zoGKmZ7siQZ10Iql8R9kHDXn7Fkklvs7txYJ3KgsQCfIRTI44GCgnmWQnhMuW8UcGiYdw7EXCEZQQG7QZgMzBQD0g6eJ8WHHuUbWMudsEftLiZmCCySwJys7ZtVIyqIG48zJkT7KbS/4WKxtqCCIvAiRpsy9af8AB+XLllw5x9y6oDjJdtWSO8IHeAHunvRrqPWrUE4iNtKhyIxMKc1VPhnsnLL3FU22tsQwudoc6mbQIfRBlhGyzEGnfB+Xcfh1ZbeEtFSxIQ3LZUIQsW0MqVAI0nTfrV45XxnY28j4lb8RlJRLZAAA1ynvHTc61JNzEp2hv8sn8hVhua4ii2/2VE4FO1B5H7rO+dOHXryIbmEez2YztdS5h2yFQdWmCyiToZ9aiuB+zrE96AcrE3UuOLSXO+NEZle6IVocdyOgiZq9c9cRL4a/bySHtMsEOSQwiAAJnWdPCp7C32CqO6oAUD3gIjQjyI1E1J7njaMKRpdHsZCqHguSMW1srcTDowKNntP/AIrKxzC8r2iIdTqVHhpvUv8A/d84QEPaN0DqjBC2fMHJQqyuqdyRp1jWrJf4oAffSP4ZIn0ple4+PH5LpHxNTiHJfVNVZ2TjxghzlWMF7O7oDLcVI1INnEPBOmpt37TgEmSYaNqW4X7PZLrf7VkM5T2lghoChe6LYhve1PgpqUxHMJ6Zvy/Ko88cbz1Omu1XmYmY8U6llP6jgROsE2ohfYxagp9oFynUdiCYByq5AJOp1YCfCKlcF7OVy3xeKILzIwWyYXLaCi3JKhlbRs2Q6z6yjh+YGdQQ2momCPdJU6NruDQ3OLXD975R9aeekTyCiVX/APkmJCdgp08uopM4m52LN3rF5rV62xYZQqteUus6wM1IXeRcDABtICq91g3ZsBObQoQP16VUMfx0PcGHZw1zJ2oRkzAKpgPqIDA6jr1p1ex1zq9Ss6NK7bUq03qyCIXpO+6f472a8OKMiJkLgMzLcuZsynMsTI33ERqaieH8jpbRU/eO4FuKG7Fe0UG5nQBTbhshCwZBgRtujcxlz/1Kb3mY73T86st9POP6nLPl9fsjb7GKU5g5e7U5bmKtEKQ6seH2wzMCSAYOu+ug6monlK/YBC9vndmuXVY4BFXMrFWtKznKbS9J2nTpENzVh7zWwLN0BswkvGqjUgSrayBrHiKr9zD8R63rEiROQaBjJX/D2MajapT0ksOnchQwerWys1ktB+Cti5Tx1jB21sjvgltWFpWzXGzNsYKjSPDxp9xfi2DfS5YV4nU2kbfQkEdY61hl7hWObRr9n4Iu/l9l0o1rhuOAj94t9TraVvmezqQdFYd9JTHerng/9Rg/YrT7nMVq0zNas2wBA7PRDcUaEMArtJga5hMbeMXzRzMt9IfDLlAMKzIchjf3MwaCcs6zWef8NxwbN+9KCCDPZA7GQAMu1NTwrEXbym/eN45gqKJQSYUGFgHWKc7pLBy0/wAoxeqHvO0rT9gCvXPsCwATAWiFC9oWuQJjvNC7+KhTV+pjy/w9bVq3aX3baKi+igAflT6ssgDYLr4y4tBdyvNv7f8Ax4JgLGHkA38QGI8UsqSZ8g72zXjDDYbvNpoVJXWQAdo8/wCdet/2qeXLOO4jaS9eZUw9kA20CglrpLsc7SFlRbEZSdKjeXuQeH2QIw6XI+9dbtWjzDHLPoornOpdYhx3Fpsn7BWI3Use9idi0/b27iq8qjKWBGUahiD06A13tS7OzcVLYYBlLHvEga5VAk7SDXohOEYDUjD4e2YjMiracD1tR9flWT+032ZXMTiU/dLqOLgFsq7AG0o1zlohkH8IzzAht6wMbPjnyy+yG1wflTyTXHpHKyrlPGfbPaZSCWJnTXQSPDbURWjYHl17oAtWnuCD7iM0kbSQCBWp+zr2GWMM4e6oxV+I1EWlH4shnMZ+9cJ6QorU8bjksqFZhIELbSIA9TsPgB4Dal1Hq8Wr+nus84BedTisK5cwV2zbZb+FvplEi4bLnSOrAFREaSRVR9ofHbaKiWkDXLrAtcyAuAuoIA70kmDpJAr0RjeYWHeLJaXKW1YkiNixnQAamelZdwnj11y1+1kBuOzh7IXMQxiXgKc0CY6TUWN1Ylhc5uwS/wAva03aqvJ3OGNtgF8Pibi7SLN7MOnvBDI8J1rV+WfaZbuzZvr9puhcalIHdcQCtxfMCRrUMvNOLG0iOuoJI8e9Vf5u46+IgXVIuKZt3lH2ittuBLW/FCYI2IMGreN1kawQP7qN+GGg6StG5w4zZvL2ZXMNgRt5R5g1AcP4cMjWz3kAYoDruIjXofLrrWb8O48UMN9xilwToHU66H7p3B0q+cH4uHGZTppIB1HwrUmnbkWCsJ5LXe5aN7J+L4e5hxhraC0UUo9siTr7zAnfMdydajeJ8lWOHlHs5gHORy5mWnMI0236+FUHiTGxcGItsVk97ycj8mq1WOcFxCZb/eUnTLpB8fEEb1l5kzMiB2NIKPAKtMyrFFOMXxLKwfofe/OovgL4excfF5Vu4q+xZWYaWU2UDwYgSSNTMbbuuZsD2dhrmabYWJPvbaT4+o8aofD+2upntW5UQAzEKg+G7flXJYeJNgl1bE7X9kSXchaDxbmG5fAAgndiTCj8gIqv8RuGz2bm27i45Hbd3KAN+zBMk7wep0FIYbCrC/vN/u6yo7tsdekkn4UnhOL8NZDcVnb93MIrEKBJmbYMK2vlVvC6e7IeXON/cqWIf6nC1J8UxGCdc1zCXrpPdlw5YT1AzCJ6QBXm/nXBWxibq21ZLamVRzLAjcH+tek8LzTY1uut7IVzBgQ4+I6VFX8FwniGITNcJukGUjs8489BJHrXTdNxXQnnb4V49QLhp01+FgXLOLss2V0zT18CK0fh3OrWMM9hkzpBW2YkLm8T0+dMfanyDa4ZisPcVi2FuvMNqyFSMymNwRqDvTniHtKti3cwtuzauo90lXK7BoiPMdNat5MbmuBAsJgAI1KO9g/Bbd174vgMrDLruJO4PiKufBvYeGxN6019lsqoNsg95g2wO40+tMsNxKzgbYdlVi4yqi6GT1PmD1rTvZLzJ2mGDkjM7HTcqVMATWF1LqMmK0z1YsClFG0yuo7BVc+z7hli+tm8t1j903CQg/iJEdetTFvnJ7GLOHsBsThSFEM3aFD97K++VRrlad6sPOHJqY4sxutbvFcoO6abBl/kRWaeyzl+/hcZds4glctslNO44n3kMCQfnuKEPWxLjOnZ48eVMYCw0Snftu5dW0UuplS3eMC3oCrkTKj8LeWxrHrt4ocw0INXr2y8INxmu5n+ztyoLEqrAjYdJFUTF3VNntTuQFj+Pr8OtWsZ7MhgkZ55H3WdkMGqwrzexobCtdKAiArMNInSD8YPyqM4XjFsnKri4phgwBEAjYg/IiqxhnvLh2QNFu4VLL00/sU5v4bKFjaKa6BrRpB8p8TnRC2rfPZ7xfDYa3icVeKWreZURZ6KgLJbXUsSze6k6eArO/aD+0Dib57PBA4eyDo5Cm83nMFbY8lBPi1UjmDl+60EhjlVZDH3c65gY6SAKfcR5SfCgW7iw5QXPEQwkfLYjxq/DkNihACmlkOrcK48Q41cxeCTOHe4ge29wmSWHeDf6l/XzrNuCcEV3y3botA6Cd3JjYmFGnUmty/Zr5dF3DYl7+X91zjfTvKCWM9FVSJIjePGsT9q163fxN04cIlprkWljKFQd2dTpmjNHnUeNjvaSSdibC0IWFzCQaWnci+zaykhwQTCqxgyzbEkiFG2w+PjZ+YOUThZW4A1vLJcGECKCXDaAQBMz5HrWR+zzni5bBw13O4XW1cJmMonISfeXSV6jb0ee2j2uXMWBh1BS0CBcMQztAkQPdSRqN2I18KtCL3EHnm1mMx3OeQf5VDsW81xAukscg/zHSfh+VLpwko7Kd8za+UbE9QaaWMd2T2mEShVo6nX8960nE8L7YC6mux0G6nX6eHwqOd7mDZXcvKfDQCp+LRlRVYQQI9eoI+dNuI3iQiDUk6Aak6aACrjxDg+dI3MSvkQNvjVh9lfEbeDwlzGtZL3Wum3abLslte9lY+6C05mAmFAqrCWuNlZBd3XalM8L5vK8O/dlw5t5ctu4wUgHNq24Eu/3i2o9IqvYvmfLodUKZQFSRGXKY6AxpO+vnVd509qdzEpkFpLaM5LlRNy40QMznWF8qvN+6lixhLTIGLDKM8EB+65I/iLErPnUE+K57tT/wBlJI5ZnzNhEJAJJAVSqoIAmSQ8xDbTAphwu5EdOg9PKrH7RmC4oHpdRbjDZZWVb5xPqac+zzk18Xc7Zkb93SDABBvQYyJGuUH3nGgHnEWmRuI0nhENdJwoTDoztlRGuuTAW2rM0/CaleI2eIXW/cj2xIGbsi4bLMHUgnKIAnMQFA11q5c232wttbOHL27mLEM6js7NpCSciOV2GpdgSQqnqRFD579oqpaOCwJK2T/j4mCtzFXD7xknMlmdlmWETA0qeHHtSiIs/VaaYDH2cO6rAxOJDZcisTZDHSGdTNxp0y24X+KtM5+4bbwli22I7PEY9gVVWA7DDLvFm37pKaAOwYs2ogVj3sitBcXYZiBlcsNNyqll/wCoDSrjzfxI4jGKXM5YOp0CpM/PemZEgjdpb8Xa3+iYjH3IfC0nD8kYfEYRO20vBVY3EhSCxzQIAWBIGVgRp0rAeaeF3bV9sLkN11fOGQEdovQkD7sbzsZ161teA4/GmaRlI8tCYqtjmBBfuliuY2k33gM2nwBmOsVn4Gc/UQQtLrDGxx628pr7OeartjKmIP2egic7WyZ26lR1WfTwOsC4GAZSCDsV1H9+W4rJ8ZhLbh3Rlbs1NxwTG3ugCDudOkVluF5qv4Ri9u4R3hmRtUY9ZU6GfHQjxq23CMxJFA/C5AQOmaX8L01j7Fu6Ml62rr0zAFfnup8war/tD5Pz4f7JczpDHN33yAszJaP8UzlOpga7CmHKfPCYi2rMAhbqNUJ6qeqkH4bbTV64Li4OUz/CZ8ek+HgapseY36H+FVbM+O22vM/EeKMssScoXRR08BvAExTTgwQoA1q+WYkl12IaCMo0EgzMzPjV/wCf+E2xj3QW0UAC5MktdZ5MlTIAUsdAADlnWiPgwOu21aUmU2EaQNzutaLEBj1Xyqv/AMcyL2P7wwVSe5etsHWRtIzabaAjyivaf7KPC+z4XaYmTea5dnXUFsixOsFEUj1rxjzjwXtirIJuSF/zKdviD8dfSvodyXwgYfDWLA2s2bdv/YgWfjE1s9KDH/1G8+U2OPS4qXrLf2neJ5OHtbBhr7pb3g5Zzt8wuX/VWpV5t/az4wP3jDWSYCW2ufF3yjT0Q/OukxGapQFF1CXtwOKyfh+EGmnhrM9fHapwWWEat46ZQB/f86icLi0Xdh46HU/PSptuL2431y6kAT+e9dYy15/K5u9lL34YRv0OhM/y9aZ3OCppp8AQRHnIkUlheLoZbtXnaGDaDpoBB+dC113+88dAqhdPjvNTC1TcWlO14Xb/AAAwdYY/3FFxGEQfcHhsdY8No9RSNtrombbGDpJB+B0260vxB7jATCrvBf5gjoPKje6b7a4SeByhZVQPkGGnrt60NwzHejrplPznr5UDQNDERt/Sd6Tsr1zEjoDl08fQ/wB9aNptJ1hiMv3ifhP5EAE/3pSNm+ZObtADOwEf+3b0NNhfIOpeJ33+mXb4mlbl4fi+DQPkMtGkNWyJibtskS5EaSCT8TMAUuLCz3W89JMjw2BPpIpvh7xJ3aJ/hAmfCNPjThXIMSZ1JkjQeWo1olNBB3TlLgHQgeGU/A0W1iBJbIzHbUbehn+dIXMKekkdQddPn8IoLXDVO6fIkCPjTaT9R8JVMcBJNttdPdk+cEEUOIvyR3bsbaACYPUfrNIXE6ZdBoN59esetBg7MyMrgzPvGI+ImlQQ1HhLi8RsWmZ9/wDTXXypJrkk9553nRvgQNqG6WWBmAPUwfqT/L5UibQG0g7zpr5T1mkECn14tIEaRpofnroDTa5bK6Zyus65Y/P6UZgxO0aad4fWZ38KTvDN3dV11ygMPDWBpSCTtwiXMbIhQDuJAB+hP1pG5iCIntD46Io9NAae/wDDsuwzeukeka/SkryiIUSf9QEg9T1p4IUZY7kpE32IGVY9Zb5jpSeLsEgZ5bbQRp8P1NPLL3CSGER11+kxI9frR1tiBoCYkRrPke986WpN0WmBwv8AA4EeUekdKNZy/hYDbXWPqBT1bNx9W1g7agAeQifjQ5SDBEmRG8x6gmBS1JGNMHuIB7o12Ea/Q6UAxA8GHT3JHwpe/gzMkgCZBE/Lzpa1ZHRkYbQe7r4xuPWaNpgYUzXE6d0QNiSBPrBiKBn226awI9SQdDQvEwBbGuxB1/1dAfWnmIsJHeEdAV2+BnX40bQ0kpjdUk7gn/TEfCl2w0CYU/LfygjaufBj56jbXyP8gKbYhP4D57z8O7p60bQ00j9q07pv129Ca66k6/Zb7ZtD/frSd7EDMNNABow/KOvrQOwJ0C77FCJPnSKCG5c6fZj4H6T1rsPio/CfQEGPUbU6Z3WAba+RAn4dNPWhstEmBm32GnpG2vj/AEpeEa3RLylguU5fgTtvPhRhgS3/ADV+RXXxiPrRrOIb8MaeJGvj4T6US5nmD11JzAH00/I002pBXKb4rBkffBPX0n5fCkrNsE6ETtr3T9ZqSu2E1zmfip+XlUdiTaHTN5f1ED86cHKNzPKUw5GsnXqR+m0/WiPh517SBOkp/SKTtXmjuLHzbWemmnwp6rOZkBQB4R8QCfrRQFJBUyjeT0mN/UHQUhfaD0ncyRE/CSfSna4cj7sk6mDr+ZHzoMVhwBoj/QajpoJPqKNoaFH3MQT+ED/XB+lKYe76Ez0zb/KljjyPu/Akn5RtRP3knwQeW8/6tflSBKDgEL4oDQiPgd/GaB1n70bbSfy611kZpYkyPEAkf350qUPVj9APpTrQ02klTfT9D8p+tIGwQZHj/Y0NOrgG2ceEA/mZ/SiGwFGh+u/yFK0zTSAXo6D5bH1oqyd3jXYR/f50ZoM6QPrPjrRrWEU6wPiYNIlABekucebFw5UOhYMpMhlWANI70Enyqqcb9oSumWzaC3WGUPdyMltSJzhVcFyBsMy+dTv/AIzsMcoIbTMD3GU+HXX0rO8CcMmLxF+9ldHkWw1uUBZgTlUdcmWD5mvKOl/SyNIkjJI+DyvZetfXQvBilADjW44VY5wwy4pGN6yEdTbW1fsKi3bRU9+6PtIKuZY2267GTVM4PfxVvMLtl7mTQXLeQFx0LITuR4TV0s42w/ELnagrhsjqlq0LgWV7NUe4iEOpLOzeGg8Iqr83ce+2nDEjDLct2QWJLMmU9q6dqBmCv3QZ3ETXS4mdiwAsZqA+L2WU7H6o+nksP3ohLW+Z1jLcwtwKU942JYsPdYkbOmgDCRAAgVZ+TPbOLCrauK9xAvdLWnR4HuggKykgAa6UvyNy9dvWMSr3kW5ZuXLdl4Vy4UAo7hWhFB7uZZ66mNXfIHLr3jcS/dRRalVZSCzXVuFXjWTaAyENuc0RprnE4BcSCRfOy3h1jrYiDHMa4fcqE497QOHXrrXs97DMwGdVtllZ/wAeqqVY6TlgGPEk0thufcFplx7J0kreHzyufpV64v7OlVHudspCoze4TMCYnOYJ29TVc4T7P3v2jdC2ioLDI8KZQCYBUgeUmkek4crTI2Xb8LMd6qz4pO0/H3q9imPMHF7WLtGwmPw7zkab1y4F7jZoytvmGhGtJ8h8sGw73M9gpirN5bgs31cIWJhwhAyhRJnXWBR8KqC8tgYa5cvoQLgS3a7qMqmV091QwlzC69atfJfEBbVyuDe4AGsG4LaQjKpL27nuQisIJ1zZqzMjBhhjPbkvf4W70/r2ZMdD4dIrklQzexRU0XH3VhM+i/c6k5G2ilOH+zIKALePtFAJZSiFYP3mGfQnx01HjWi8k4q4cEHTDWxdYaWwTaV1YBcxLSVBgtlO2kb1G4bA4kLdU8OwoV1ykJdRTcAPdVu7rpqTI1rNfOWHZb+PmSAbbKm8X9kFq8QXxFliBq6qbZI13ZLuu8azpSfCfZELcNZxOXKYkXyQdZgh7bgiTsZq18T5bV1+04a0QVK27tnRW1MZbtuSD1Ovzp17OOV7GHuu1uxiLTMpE3wGSM0whUvBnxMwKDc53CmdN/q8qm8b5Bz93EX8MLcgmbjqx0gEBezSYO4Ub6zTpfY7YGtq+bYIgML2+k6nLBgaxvEetSeL5Cw+ezbGHvFHOe88N79toth2JlVOdpy5e4sGTVj5i9muGv2bdjvWktMHTs8oaQuXUspzCI3E6DWmP6hITQUGQ1ktFwH8LG+I8i4ixtftsjXuwUteZWl9iyyyga9M2kUOA5Px2HuhHxQUjK9t+2fLBzGAAo7xVWIE9K1XjPsks3Zm9eWbvb6dnpdy5cwHZwIAEDoRUhj/AGbWrrK9y7fd1Rbc5lEqswCAnmZO++upqoZpibtZLujYpN1/Cr2Fe4rut97sq9m3e7Ns4LXwptZSwmIOpkwY8amOZ8QQoQJjVKISGsTDMraBzD96P4QPzq0XuW7TOzkEszWXOpAzWP8ACMaDu+HWBMxUowqbIypJmgOrb7JvTujwYRJjuz8klY9xLiN22VK3sfkYtn7SwrPa+zzJEWYOd+6ddNzS/Dse1y2rtjLlu4VDFbuDAdD1Xuhevgetav2tGz1nSRMkFOAWxsPCo3CsViReFu5esXrbhiGKQwC5ZlZME5oALa1O8Ew5zsWI+zLICBlBnXbaACAI86lrmTWQOvSklxi9I84Hh4iq/wBDEHB3wkBXATnIP1pSmS40EwB8Ygf0pNrZknXXT3mj1A2Hwq9rA4S0lPy9JnEgbkU17FusH5ikrOEIPl5zp6Hw8oppe7wEdATz98XpQdvREUDr+VAzCjbilpC5gW8QPrRRg9Zn6mue751D8b4ubYJBoiPUldKXuJG5po2LQdR8x/OqJj+O3HI75UfwmP0/On3D7aNucx/iCH9AangxRIUySbQp6/zCo91WbX7q/rtRP/EDH/lOPXL/ADo/D8MpIEQPBYH56U+xPAX1KrK7iGB/s1os6YxVHZtJrg2uXASW7IecT06E6j0PwqA4hwFJJa6XM7iT18CsD4TTi/e8aavdrSh6dHXCzMjqZaUpZs2wIAXTT3d6PhsbkMp3T4iBpTPtQf7/AEpNro/sVpRYbB4WPP1R58p+eOXM4cMc4BUMcpMERGtMXxRO5J9T/Om91VPQePnSdy8B/STV5kLR4WLNnSk7lK3LtItfjcH5TQPf0nUD0P5UUsCN9PKassa0LLmneeCii/8AD1kVH2eLq117UMGt5dWHdfMmfuGegB3y7V3GFJChXKCe+QoLZY2ViDlM9YJjQa1lftCwi2GS7aJdi3Z3bbOz3LqnUHvyQRGWR+IeEUpdQbbFFimNz9MpWtWe5bQGAcqjUAAEiYnbrUHzlgrly3lRirBleRMEJJysykMFJA2k7aVQE4spMnCXxtsXER10YD6VycR1JKYs+OrHTw1NRGSXTpACm7OL3A8udz9j/wAq4clcZ7bEZrtk2illrYuu1yCbbCWbMoH2moUT47TVpxbZTDb7QCCIIkRB1kVlP/FE1zLizOkd/QeGhO0mlG4vbygH95O/vdoY/LXzmoceTIiP6Qf3VnPxsHJaDrcKH/b/APa0a9eUamAPOAJ9ZpjexVj71y2PVl0+TedUVsdhjp2dw6QMyXSY8dbtLW+N4YKFFhoETFldY8SxY1pCaU77BYDun4bdvef2AVoxPHcOB76MJgBAWPr3QameEcFv3lQpaChi0PcYWwSuwNvv3SD/AJBNUce0RFHdsXNNAIVR8gDU5wz2y3kXLZwoQmDni4xkeSqoJ9ZqtkTSFtB/8BWcLGxGPt0W3yXA/wBgrFzBw/sXyM2Z4Vrgy5FVmA7iLvAEasSST00AjVuL4fH+9KkrmLN4C64l3ALZoDZmAJEAaFTpHpTY2resggg7fynf6Vr4h0RAHdcr1SPvZLntoC9gPhRWNuLUh7KOHC9j7C9FftD6W5cfDMFHxqK4rcEbRB/vxitL/Ze4Tmu3752VVtL6sczfEBV+dQZ89Rlafpvp5kyW/m1v6ihNdVW9rHNK4LBYjEsY7O2cvncaEtj4uy1yEjtLSV7KF5R9pPAMbf4vjMTZvWVRnCBHLkMtlVtDMFQ5SchMgzrXcVxl3DLOKtFEEfbWna5ZE7ZiBnt67B0A86NyTxtbkHNMmc0jU6e9r85q/XXVkKkIQRDKCGDrGuZYIII6bGvPc7PD5amZt9uVMyMOCzjh/MqYi4lrDlLlxyAqoxLHqSx0hQNWZoAEk1ceCYFMHd7W7fVrpS5b7JUhAxjUXGM6RGaF8Krvs85VGFxGKfCWi5vWgLMSexOYl7ZcwEDHIylie6sa0XHcH4iC7YgvDFicly0z7GFC6gZd5n4VWnjh1VCQBXnk2kG6eVccN7TexU2ryhb0sxZWEMNNZDEkAzp1qqcX9p9oNBuhnubCS1wydFABIX0Jq48icy4ezZXskXPAVnOU3Lh+8bjHvFp01MDoNqgfaDdwmKk37KK6nu3lKpdSNslwa6EzDZlncVVjZj93TIHV9lK51jlJ8v8ADji9cXK2CDNgOQz/APzXWJ2nIpA2k9KsX/hnC2kIwn2J6W2dmtufAyWZCdBmUwOqmqxyxxVAoS4wuAaLfQy4USAbtqZnT3kDKd4WnHEcIbnew91b0nQKTn/2ifHwqDI7rX6B+i+PCQNBVbA8/LdxP7p+7YgYjMUa2SsArqxZi8BAJbNEZddZque1DmDF4bEHD9guHYjS4T2pdToHttAXLOkhTlII0Iq7chX0uY+9dAVbli0mHuvDZs7uSQQRqyKmQnw0rbudeUrOMw4t3QAwCm3eUDPaYgarOsHTMmzjzg1sMmxseZo7de0Xe9Ephjc5theO+R+E3SzIQ5NycxY6STo5PruT41M8DwF43eyQ5HB70tAEbyfAVd+X7/Y3bmHvd2/ZbJ2i7EDxX8LAhlYjUHWpvHcsJcvN9qLTOoeTB7QTBURAidRJG/pV7LLv1s8rnZoy52/KlOEY3BpZyYiLhgC4x1zEH7kMIjaRrS+GbgsgBipcjKouXd526ga+Zqp8w9jgLF+1fQXe1E2iNM2mgP3lymTIO53NROA5Vs41EvYNuzu2llrDajMN48M3Q7HbQ1WFxAOlN/ek6NjTstE9qmKFsWbSqGQDPkIYllXQKdNd9tZAo2F9o1pFzZAoQAdmLexiBpS/LHDca2GF0m2jZY+1E3MqAjQ/dzfyqA5d4cct1mCnMZi4B2jmfdSd6zupY+twkeD9gFaDg0UFjXtA5vuXSZAyB27sQdTJn+VVvCMVRp1Q9+PnFbHzBwHBXcwuW3ssTGcCBPmIy/lVbucitauW7qr+94dD3lT3mXzT+UitrB6hBpDCNP5UsU7BsoL2Uc06Nhmkgzlnw8NfnTTmiyou2biuVfYkGCCh0g0z5i4vg+1Y28PcstmECT3fGR0nwpxiuDdvctDMBnmI6H08OtbJIUrWNsuS3OeIv48BcxbswYnbzPr5015N5BxcLc7G4bf4gs9YkeXmavGJ5eOGe7aQm4xtrlcKQDI73pFL8Ix2KRLdh77KhYBUDAkqNTr0HlUAmDGaSVDftOlWnlXkGxbe3cxRuXlEkqwBQGOo1mKvvNXF8ElsdiqoVYH7Ncix4MIHzrKvbRxxrNm3bssQXIOhPdHnHjU9wf2bYq5h1a5cBulQYIOWCNp3kelYebiyTMLQQWnx5VXW4C1P4/nFUCMpzK+hIO39aV524uz4XtlUlrJU59yEPvL9ZjyrK+Ocu4nDEi5bPZH7w1SfXofIxWuezlBi8C2Ht3bdkFSt1vfuNM6gSBGwnXQRWLi9IbHIGN4PP3Sjne4kErF+eebg9po++APOqErd0Dp4Vv8Ag/YyuFLm+UvqR9lvsN5X8R8jFNuUfZXZxBE23USTIkQJ213P5VuQNbjnsNaeVA4HhZJxK9Fsa6EDTyqV5D4nbN1bl0BrdogrbMw7/dUx0B1PpFav7XeSOF4WwO07RbuUi2qPLsY0JUkiPEwAPWsD4JZYsCTlRdV84/Xzq27H0NIPKsRtAFFaDx7ifaXb2sZ2sEjpPhHgPyqB5w53NxjbH3TDM2rMZOk9FAOgFI3bha8wJ1LWxp5DKPlI+VLcz8izjXy/Z2FW1de4QSF7RQcsTLuWkKo38gCaijay/f8AFq68N7pv4CvnHueguAs4HDgFOxD4lx3c1xjnZAN8oYwxPvQANBrhPMTS5I0Mz8fAVqOO4eAsJhnIuwO3umXgb5bdvRJjbvN51Mr7LrzIbi4RyIEBgqs3qCQ3noBT48gh10T+FK/IDW0AsGwnMl1GBAXRomNQT1A2HhpT21cOdi25OvqZkilObuHhW0ABU6qCW6nc+K7GkOYLmoA+nn4/WtS2vAoVamjaKsJPF4kG4T0EKPQdauPs4547FuzcE2i0933kPUjoVjdfkRVAt9QRqPAVLcGxaT3tDMaiPrTJ4xp4tMfjiXZy3vGcLDxew/eU5ZWdQWP5eIOoqc5r4nhRYs4O5ba3kMM1tRK3EBLxJ17RjqSvnWQ8H5sazftOssjIFuoNmVW+pA7wbxoeNcSzX7x1BdmaTrCxoRWK2JzD+QsmTH7DiAk79m1exSC2oVAwmQASBqZAEa7Va/bRmNqwy6tbvCAP4wdPmBUJyDw20SXW4HKie7Ayz4hiDPTQQKe+0vit1VVUUqSQQZzNroIjY+e+ulWGSBpDf23VPcupTPs/4Vbv4hO2IZ1X3GAZUQEl2fSCRsqHSSJnavQlzilrC2xatAAhZ8TG/ePjt5eAFeeuSuG3cJYu3LjqblyyuVV1ZQSGJuGNCe7tsNDTrmPm8hj35JVWJnqQsj0kaVmuynhxbHv4tdn0jEjEep3Km+KcatthbthoZRcuWspGio7ZljwIzEA9IFecL3Llx7j27Vu5cyE+4jNpMAnKDFXbA8xktdU+7dzGfEjSR8/pSfKHMd/CYr7MOyuwm1Ji4syraahlOoP6GtLB7kROr4tM62GOYHNCgOGXLNtFOW+cStyC4ZRaVekKELsZ0MsPTWpjnTCX8K6tcQAOuZXHeXvCchPR16o0EfWlsbh0OMNxnNtLru5LypRhqPusDqd4j41F8083Yi7Nq6wcFhICjvd3KrnSJiIIE1cpsjrI8LHwsqSI0OEkOasloAsM0Es0zMnYecdKruH4sXulyd4geQ0AofafwVLT27aRoupUHveZmdTqPQDxqp4fEFSJBgGPOrkGFEWFzOSr+TO6YUVqvCcaQl6PvoAR4jOp+O1UPn9iQmkAmfiAAfrVn4TjC8KBE9fHcfLWo32l4f7ZEUAlVGijSZj4kgCocIaJt1DGNEdJTkDj5w4/FbgF0JifNfBh4/A1u/KPMlt1DKc1vbwe23gR90jw2O4NZTyZyGboTPIzjS2sZyemY6hAJ8CfStCxfJ2HwFp2UuL2XKsOzC6SZgqRlKDqYHkRVLPgiySSz9Q+FlZTGP3HKkfaPyk+Iezes3FW6LbKS0xcCS6KD+IgsADodAY3qkG6dQQQy9110BVgYYET41ceXebh2TzCvaPaBTrlZVJkbyrbeU9aqH/h5bSdrfu5sXfC3Fs2T3EDnMXvt+Mja2oABI1MEVRha9zSJf8ATsPlT405bHR8KW9j/BrmI4lhrTL9mLquesi1Nw5tdJC5dute8hXmL9kLhGfEX75/5aBB/muHf1CoR/qr07XW9Ib/AEdVcqxC8vbqK41499v/ABS3e4ne74HZKlmSCRK6tBjozEfA16u5r4stixdvN7tpGc+eUEx6navF644XCzswBdmdv8zEsfu9Sa6fprPeXLI61J7AxH4QQTlZiy+QA8OpAPyqQu4BAZS5lI0knMP/AGmlMJcClYC69SAB+c6+NTV/GqBAKA+AUuvrppNdCHFcc6Jpu1F4XD3iNHHjORAD8wD9KWxKBT37luT/AAiQf9MxFDnH32YiNlWB8YP9aPawdnfs3JOsZQfhtp+dSalEIq4/umIxllJMu5I2CNl+GwH1on7wGAZGA11VhBPlGsirDhcQI/w2SNNRMekH6UDYlfuoTpvly6+rHU/WlrRMP3UHh7xDk6/Huj0E9PTWnN/EZxGW3E7F5H0jT1NPsVeQgDISTvKgA/FiZ36UxuuqR3EOY/dySJ8e6B9d9aOu03t6fKSu2SozBEOnTMAOuhB1+FNMPiGMnIg3kkOpPlJ3p9iOImcnYnXYlkj6aCOpocRdcfcXKIn7XQ+URTg5ROYPBUdgcMC5JUzr1JHTx1j4+FOrCztrv3fD010pyvE0WYUAnWVBJ+OiiKbNfunUAwTOugjzECfnRspugAJDE4QrBytHUAA/PrHx+VOezc7IwEdYHpEkx8qXuv7sqinxAUkfNj5miYrEuIhA6/w5RHmdzP0oWUQwBEbDuynM5Xy+k7Cfh51HLwwnXtTAMEkn6rv9al7r3GAi2ARtmZdx02+hpt2uJQH7O1B1Ik6+W+vlSspOY3yinCvbEgmNPMR5iaUbO0d5fHQgafEH5UxxPGr507O0ADtDn6FhR8Fjbre8trKNYNtvoC+1HdN9ngqRYN+InTrlHxB1P0qMu311ntCZ6MZ+RA0rsTinP3LZg9UYfTtAaTwpYuD2dv8A2sOviWIohNc4eE6w2OQ7MFO0Opn1mSKIbxOna2ySeiiSfCYA+dD2zB5UL5jIBp4z19aCzdBYkgesAR6dNaKGrwgw2EYSTlO+uePhp+UUp2/WABt/iD6AxH0o+BcEmTcI8S4HyAiYptiySdHuwDEkZl8ve0j1JpXugQANkZsTbkDUnQE5zI8j0j0NK4vDKRI0MSIMj0OoNIaj/mpt/wClbPygb1H4y5MDtWbqciBY+gohAnbdSWAwy/iQa+DfMSR+etSPcMqZJ3JgLI+YJ+etQNnExu/TTNJbyMAxNJi2PezQTqCfe9NjSpMD68KY7MlQRHgBm2+uh+NINw27M9mTPUOJmmiXenasBG0Ms/HLv8PjTbsyvuXJB1MdB65dDRBKDq8qZfBhdYZm6y8Aeenn401uXPEONYJDE6f6h+tM8QWkHOxO8giPh1or4k6d+5692P79acExzlIizAgP5wcp0+BmaZLcElZPqJ285P1oxwxbYn1lZ18T0oL/AA1x/wAwz/m0j5fnRtNq0gUAPdUt0JM6fLTTxml75iNBPUad6Oskmmr2WG5Y9DJ0PmYkxQrl6rtpsSP0M0Uy0Zr7NoNBPQif+1PcMzRAYnybKw9N9DUfhsTGypuN1P1PSnV4sWmFGnQQPgdJNJOBThrfms7nRY+Gs/CkrNzxGx96GEfAU0s23BPdUHxzAH4abf3NKXc8AwvSZuAyfQ0LSIQ9rJ0e2TPWQR+VO8LhzrrpvuYPl5+gpplbqFE7wFkeczStpbijusenUa/AbfCkkK8o13vd3MFE7DNE+pGlKrYYe93wNoJn6DameIxBOhyHylon08aUw91hMLHowAHntPypJ1hKqksGGmmoOkiem0/OiXUGpUCAfunU/AnQ/OmzYhuvZ6Hqza05zg79lt1YmDRtKgU0gnpcifBadreA2BHSSvXzMwaSw1qCSTb8QATHy2+H60tis5AjIANYmR8R09KVptJvikJA7yjqdvnpNF/do1Db+Bn57Uc3W8LU/wCX+/lQC/3jmRfgMvy6fOiCmmkRCBuzfp9d/rQmDsy77ERNOr9yQBkYR1B/TwoqJ4prI6H8zFG02l6IxfImCc97C4cnQ/4aqdNtVAIikuJcg4a571tjAA0u3QIXYQHAIGnwq1Mg8KVVK8MY97f0ml9EyRMk/UL/ACs7w3suw1txdsi7YugEdpbc5ip3VswdWB03E6DwqIuexSwbD4ftb5ssWbI3ZNDMQSQWtSDInQ1qyXZ2B+IIpQJQ1OO9qQUBVLH8P7FLSxDqQFKw2FwxkfxEICT5zUJiP2e0CgW7ltSr5g3Z3FJBJJRgt7KV1OwBHQ1vQFKJbpAv+UiR8LAMJ7Gr9m4LiZLurd1bt1IzAAHLcLoyr70EyTFSXEPZHibrlzfSyDBCJ2jZCR3h3WtqZOu1bZkoFBHnVxubK1mi9lQf0+F8vdI3qln/AAT2evav3MQcXda5ctdlORO5EQy7wRlEAyNJM1K8s8pfu+Hawl+/D3Dde4WXtS7RnObLsxGsDqfGrbXKKr63nyrYa0eFD8D4YtpQql4AjvMST+nyqTRj1+FKEnwHzoGamBtJ+q0knWuBNHLx8fKuW6JiRJG3Wlsla4pSVxI6fL+VLlug3pMPG+ppGkgSik0QOZ8o2gz85oHx6BspMNEwQRofOIPw2pO1ilGknx1k/I0wuHyngH4R8Td0/KN6jV4mpJXMwKgEnI4GsbMVyk66gE0teSTMtt49PCNj+dFB8vL+xNV3PJUrW0k2vAH75nqBIHrG3r6+lGYA9dvqPjS1q0Iol5Dp/OP+9Mop+ybqyhpEid9Gg/oKcWyNwBr1A3+NKta8yPjQinBqFoHuqup676E/kKOb31oknxpJ286kBTaR+2NJPfNJM9IXb9C0aSl29UZxHjKpudfASTSPFuIEDQ/kf1qp8SxbsR19JqyyCxZUbpK2T7jHMjnRdB5iDTfCXpgsgbz71dw/Md0ePX+Yqft2xG35VcxsYndV5ZUTC4S0dQkdNSw/PenHpAHwpbCYa3PefKPITHzMV3F7FpQMjlj4ACAPEkGa0GtY34VOSUpk92PXegvcXukRnaPDMRTUHwINEb4fOtGCNtWsrJnciMx6mkjHnSrE+H1/pRY+dX2UBssaYlxTZcSP7B/lQ3GXcj4waWdT6fOgYCpmlZ72lJgg0LgddPga57PUdf76UdE9alDlVc0lIkAf3/KhBHj/AH6Ua5bHgPjqaTup4R6bflUgKrOjKK0Hx+X86bjhiZs2Rc34iBm+cTTi2h6x8zp6V125sJA+Z/7VIHKq6EHcpAYEfhUfr/3oxwYHQf1pXL5n4Gi9ifxMesd0/pUoKhMDfhJWcGoJOUddYjX18Kb3eEpOw8dNNPCn1y4R1HxmjKpPX16f1p1qN0DSKCisbw8MR3RAGxB+lHt4FR91fgNfnGlP2w4XWW/3MaMF/wC39P60/XsqhxBdlRwwAM90qdfMfA6n6V1m2qSO8dPA6fE90R4edSIueXpv86Us2eu3qfr4UNSQxh/pUPjMUjAAEDKQT9oizH1nzoj44eA12i4hJ9etS5tDq30X6VHcUyASxG+mg/QfOnCQJhxnXdqq8ZxIAIkjr0+Vehv2e+EdlgUOs3i10zvDaL/0KprBr2H7V0tJvcdUHqxA+k16z4XhBbREXRUVVA8lAA+grJ6jNYDV2HpjD0uMh/CdV5p/bY5/tWhhsCzANdPbvOwRCVtht9HfMdv+XXpU18xP2j+ZGx/E8TiRJtB+ys9fsrPcUjwDwbn+usOdrXN0ldmTSvnC8LZurmUzA95GXU+EggfOrDydwY3byqblxLSjNcl9cgPuiJ7zGFHhqelecuKqURHtko0wCpKkiOpHWtw/ZsvO+FxD3btxs11UjVmhEmAT0JfWPCuQ6n0/tQula6/tSdE4FbnjOa7VodnaUKqg5VgAeupn4nU1U8bxDtp1hZ77t4eCzMnWofjfM+GsAlmtJA91tXPmRLOT1iPWqDzN7T7Yth7ea5mJVFgr3hp3p90DoFk/pzmN0ueYghp/JU73Kf4py7exGLt2cEVUMrdqxHdtqpA7VwIGc+6I1YwNNSNLw/LGDwSCR+8Xl3u3YYyPwIZRPIKJ8WNR3JS3cNhVzL/5m6A94xlCEju2/Ei2pyxr3sx61nftB51CzmftLg91F6D/AOn1OvgOtTSCedwx4+BsSPP7/CY4hgvyrLz8h4m1rCjusXzrcUd60i/4jQsaQYgkAuVHQVqGB4XY4fhxbsqVj3nJl3O8u3vO5+Q2AAAFZj+ybfa6cXibkBy1qymmltIZyF9TlJ8ctWj2gcZV2YFotW5Ltrrl3P8Af61W6h3Y3Nw2nYbn8lSMd7dZVB5C43k4rjkmO17K8RH8ADnUjX7TNM+NbRxXjQHZW4ZV/wAZyGBi3bHdPXV3geMV5KwmMu/vbYtJDlyRbMgPbIjs5G8p3at/OvtAJtkYa3c7Z1XvFG/8uqfc1nO0iZHcG+p0G3l9JdLIwt/7QD9qFKKPIFHdS3NnFVu8Tdgyzltq2kS6qAUI8YhT5iKt9vl4NqvduFYSPcJ6Ky/d8JGo89qw7kjCmM7P3ySdfeYmCZJOh6+NahgvaFbs3Ut3ZNtlQi/Msj9QY99Aeo1HWas9hof2uaH+yy8qHUdQVF5g44GZrV+26uhKsp70MNCNdvhQctcOxSOLuGS9MiIRoI8D4g/KtMbhlh+M581vLewq3VcnMhYrkLaabLMnaprjnMFqz7/eZmyp2VwkZQNzPuyepqtkTCF/aY29vPCq9na0/wCO8YuLh7b20e5eGXPaClssSWUrI6/T0qgcTa5irq3XF7CXZAAVGCMQSc0E6HWKk7HO2JtqzYe27tM9m6MQfMNuOg+dRXN/tN4neRUbCPaRSHYhHJaPNpgdZAmiwuniJsB3gbKzDY2V74HxKVv4XEqct1CVuOJ74G49TqPA1ieE59ewYkqRpp1AMVYeL+1JHtZCGLsIBOmVojemPs54PaV3vYhExCQTlkMROugO5/KocSBxZWU38KxpaeVE4v2h4V3/APMWFuFho2gb1kQRVq5e57wWBUdnh2e8wLK1wghQegJ6egmsN5rtrdxT9jbNpWuEJbP3R4f0qwNg2/wLqs0AC3cCnu+M+I8a6BuFHEAWk8bi1K2FmmrW58h+2fD4t2t4lFts0wT7p8piQapvA+L4Y45xbw3ajORbz3GyqANYHh11qiYTh2Hw5+0l3A0WIHzqxeyDjifvYOVEBBAn++tQTxhzToBquVXdCGgkLf8AF/u3ZL3EZ2kiVkow2gnp6UjxPmniFu2uS2jgzBQFiI20mofmbnTC2FCXbTFm7wYCBI2100qH4T7Zk0Kggg6DQf8AcVy8keZFKHR7t8qqAfK7i/NuLcRfzAOYNspHxginvJXCBYxiMbvZWApuAnuM0D3CD4n8q1pubsNiMJ27IpiFa247yt5aEjxBHSKyPnjlZrxQ2cRbdpMWidg2ognqNtRU8z2wytp/KQZRtavwTnLDC47u09bcgmBGsDUkn0qtc8e3W2kpYtOSBJNxSkDxCxPziqv7L+UMThr4a+UZI0MzBJgQDB+PnV/9rXCxewt0qitdCEoYE6Db4iRFauNJK5hGoH7pwJKyPD3kx6YjEDCLcZRDXXuOWzR90HTQawNNqrPI/KPa30RmAtrme5voiySNNiYyjwJFaF+zzjRb4Xecx/juCD6AUfjHErQssbRW2XBRivvOGMnbY71RzMkwSBgs2nQxgvF/KquFbDEuXQ2vtFUtaYvcTK8iVuaMv+Ug6RNN/aPxB8yqwIGpzzo8yLVwAGB3BoOhnrNOMRzPgrLBXsXbpTust0qAeoJVVBnqCahMbzDhsZirFtl/d7BeGKwSAx9NFB1/hk77U+GJ73AkbLrc7Bj7WoVdLSvY7xy1hrBvYhhlt2y06SZMEL1Z2AAUflVC9qXtdxeKWEJs4dtktmHKkkRdcamQNVEL5Hepzn72ZXC1qxauf+XKvd7Rt11gKVHdZvwlYWDOlV7mj2dsqxbZmIQDK8d6PArAB8J+daOM0xsr7lYjpoWuAKyvC44C4p6AwR4g6H6Gkrutwxrqfp/SnmJ4YEE9d/6es014Yxa43QgTB00H6+VXm0RbVcpL27RJ+fy8aeYLBBmgrOu4Goj9I/vSmlvEAgH1UjwOs6VIcN4llYMejQfAg6H51BKX1siRQtSvA7BzqumudPSVIBPpUfxm8RZLTsBbbx3M/StM9nrYe3d7S7bzBZKiAyg6d4qfe0mNYBg1UeL4u3dv3pt/YtdP2akiM05flpWdDOHP445WLkzB7gUz4Pw61awQvGTeutIbbKA0BRr1EsTGkAVPc28w/YoV3YAIu8aDUfEaUxTlu7dUEKLeHRWKO7ZFgE+6G1Y9NJ2qQ4L7NMRiinYAsm3au2S0CN+8QCSfBFYinGNs0momzZP/ANKJrSDZCsVrh+NfA2W7NnD5gGkO5t+6CyjvKsDQnTrWY808tYgOYDEAxEjMPUZthXpfGrd/dLWEDg9naFq9ct6Z8sDKrkAhRAncn41C8I5NRfeUSfGGgeO2/nRihMUlxgUebU/+YOYaasi9nnK7YjE2kdHW1ZWX7pM6+7Ogm43hsJrUPaHcsWfsrNqy2JZQ0BAOwUGA1wwToNFTdjrsKb+0/mP9xw8WTF1iyqRBKK2rXCkaae7O++wpL2a4vD4fAJexF1A97NeuM0teuMzkBfvMxUACADBnaa0GtDhvSGRO+YWVnvE+W0JZ7gZo7zFi2p8NAILEwB5iq2nK2L7c3EtlVDKIzLGUEEAiekCd9RVu9pPNdy9cVsPYuLhbV1HLOpzXHkEFyPdUfdSTvLHYDT+AZLmW4hBVhII2nqpHQjYisnqOc/CaC0agdvwqbS6PdYFz3wdxeVyjBCVGbWBBiCdxO+vnUTjODpcdjEd7SP7mK9W8W5cttcAA7l5e8NNmBDD1EyPCsmf2eqZKXGnVYcBtfhBHrBp+N1QlgvYq3j5rRtIs34hhmsRbRg2dB4HLvsRp/ew0qOVMl9QZk2kYTvrqdfOrDxvly7aug3FIEgBplT/CCPy0MdKrXMuKC43XUIVt6DTKFCk/AzWtAe4CBzSuyESM9q1FOPjC2O1jM8EIPE7geMdSRUVyZxNsZba5ceGVmzk/dXcR+FMunwqncZ432l1duztlUgjedyR5/lU9gORbI+0W67i8Hy2EyoAZ0F1i09mN5Kgx13pYUDYGkv5O/wD9LNdGA2io/mBnv3ECKVtklbZHvXjMZgIkgkwOlNeNXLli6UVsyIQpkDUj3tp+9IBmnXGuIfupi2c985lOI72RBEZcPm1Ond7UxA9wD3ipyvhGxARAJuOy21EbsxhfmTTpb2dQoqOiB9l7S/ZP4Xk4ct2IOIdrnnlHcX4d0keta9UVyhwdcPh7NhfdtW0tjzyKBPxifjUoxrex4xHGGhabBpbSyD9p/mQW8OmHkZr7SRIH2dshj83yD5159tYu0Il1Gmi7n/pJqa9unGRieI3Wnu2fsLeoI7k5z8XLfACoLC4FDECTH4VI+I/SupwIQ2MLjOrZJfKa4Gye4S6Pux4iAuo8ySdfhU3Z4gg7pBk6kgn6wAI9KjreAuECLmUb922ix8zP6UGLRgYALnoz5T8gCAB6itMC1hmUt3U5iuOomVe6Mw8SD6wJ+tMuKcwWYicwB+6CP1ANV66t3MIVZO+0esyT8aPicFc0hUJ/DII+R1+RFODAFG7JedgEtd5jj3cu8wAsfGZpfCczXM2rSI1WEHyPjSFmycsutmfEAn4Rr+lK4PCaGOz/ANrCPUaaDzp9BQh7/lFucbaZXtDr0uTA8PdIHziuwvF73VzEz3ihGvnE0fDWt5axv+fx2pVr6jdrRA6ZmPxAEmhskdfNoz8WtqZNySd+9I+SiI8qLe4xnBC3baifEz9R+VM8XjE6WyQdZFsDXwBbf5UfCcOZu8oYeTZRp5aEmlQ5RD3cBOsLxC4oM9/aCSRp6wBHlSQ5qI0CjzPe/s/GlcVhbu2UQOmYkkj0iBSSYi6JXs0Bnchvl5+lKghqcEGN4g3dNswTuYgHxzEgzQNeuyCe96ZlA8tBt50WyjENnCiTHdDBvl4UNvgCnXM/+4qfgDM0dggNRKX4lf0Ekk/wsT9ADpNM7FweJHTdgfUyugoyWwpgBmOol8w+TFvrFKpgW/Daknc3WJ9PhR4TTZTe5hE3y5vFjcMClrtoCD2YPhlcn0kAE0ujspylQx6SAR4SDoQB4kUF/DOdWYDrBIiPCNPrNJKtkXCyZm2gHkpn5s3r0pXG5W0yh4Gg2+sxUdZgNvZGsaNBJ85kVPG4yCTB8wQB+QBH/egSnM35UfgsAIk2SAOkqQfnr8qc2eIRotogDeSqj9fzpPG8agCMmumtxQJ8dP1prieJhQCQDOkqV38QZ1+NAfdFxDeE4OKBPuAnchnWPjIJ+FI3sY/RLaga63DH0gUxHEEnq2sknMfg0kCKlDeB/DEaKZj1ABOvlTkwOtMf3qWzC4oYdA65fPRiPzp25LRraeNdOv1NMFso2aRaETq2cfIMsCj4fAW4JyKT02M+Y1n50kAU/wARacwAFG0gTEeGo+gNExDtGmXT+I6noIGv5VF3eG54EMB/E4A9AATpSmF4QEJiAfUaekRrRTSUZeMvMZfKe9PmBNEtY7K0667+H0gGPOjuxEAMmu8zr5EzrSl64wj/AAJ0013PWZogphB+UliMe3Qt4jKqxQWeMHZsw8CbYY+exGnwpR7VyScqeoJ+hzUhacg+6J8YM/MkEmnbJpJCa3rxMnXefur8wZNKnidwDuhfTMSfkI+VPbOKJn7pncpOnmSaTuW263R5Qq/DUA0igEzw9xpPcidSe9+pA09ac3MQy6kBttAT+hOvwmhxOYEAiR4wYPqAAKUu4ZiNB8FaIP50U0BMrl5jshH+7fypLs2GuY6+B8fHwp89kr/zCCN8wDH4b0W8FO91m691D/QUrR0pm+EY7M0jwegh10knrDAGP608zx/6jeGZgo9CNTSox4UahQZ0gydehOm3pSCSjQT1AOsmUI+EilHKmIyDykx8yJ09ac2LgnRiOvvAiPiKc28cq/eUk7ZlUx8R0pWkKPKaPfYRoh9H/nrSeViZy+veB+u/ypTFXyZ71rXcBNfypLB4UmdQI6kZTPlp08qQKTgPCHE59szRseo+f86araboT9fqf7FTi4EZZZiT/mM/KKaXrzicrGN9cp/OjaGmuUa3fuAbBvM/z0+RpsrOCYME9YAHwMf0ptexDnrr8f8AtTnBG4RqZ8yNR8ZFJBCt8QczfQ/0EelIF0/CvhuZ9d4FL3nyjX3j5H6maQuIu5J+B0+mtFNQXXGwXyJBNGw9sjYsuugmfpNBZvJE5vKNQflrSll7R/r/AN/0+FG0N17BcUn2AA0Hnp50s2+3x0rnmvECAvoi02uYcaHr49aUAFEursCJnwG3maRVXmNMvjOp+EafOo+PCeN0sbi/EaU3ys3j/SnNuxoQdz1H0+VDbuKO7InzOtLSTylqpN0shgMykEGYJ1EHQgqdqP2JAgGddzv+lLMAdxNFg9CIEevpR0pakkATofnt/SlcOp6/MxR8QdJ7u+s+HX40ZmFHTSBdaRt2tT5+n9xQlB4UKkAan5nX50mSACZ+pNDZFHYqNddfUj+lNsfiMokGfX9IpwbsRuZ00H5+ApDHYBXgkTG3lTH3WyLKvdMjjnmPKdqLZxLsJM+YMA05GFCj9TrTH99TLmzrl2nMImY38Z0qoS4clWgGngLsajwcsTGmaSPkP512GkCCCekx5ddTSv7wOukeNDhcQGAZSCDsQQQfTxoAAp1kJS0YEUGTrFcW8/hQNcqSkxGY+VFZ/I/309a5b1GJ86NJIlu9oCZE+Oh+I6UpNJm6KI1+jaVIxaknekrmIqL4jx23bMO0Hw1/lQG/CPHKky1Fc+NVniHONtfdBbzGn561DYvm1z7oI8iBTgyjuhrCtnEsHab3oB8RUCbCqe64P0PxpjhOLO+408daU/4fOswfj/KtCO69u6rPI8qRtYs7aGnAc9Qfkaa4XCR1E+MTUxZvmNYNaEBd5VWQDwmmHsZiB4nrIFTOK5SVtm3gsf0B1HzpiTTzhmOynUmPn9PCpixpO4URJrZRvEODdlsJXxA28t6Y79P7+dW9+IIZ/LKYny86ruLUySDInaI+FWWShmyz58cu3UcEHga5Wpe4T4UYgVebI0iwsl8RTIWx/wBq4+Y/Wlrybba+NFa3UrXqo+FNSse6N+sEUYWz4j4UrdLeVJeub5/3+dSiRQOhSbKB0E+g+ddexIA6fNfnqaVdgNIn4T9aIMOu8AdfdT+VSh6ruiKb3SW1zGPKI+Maml7K6fTWiKRsAT5xH1P8qNeU6d4L8z9ae16rmEDdG1+P9+lIG3O8/Ex+VHcdJ9Tpr9aQt3NYB8gYJ/MxUzXKtIxHuONApB8oLUcWD4KNP70ijqkbsxPgIH5V1wA/dafEf96drUHYKQsYbxVTpuP1Bo9rBgfdPoTMeg2iuuYgj7rQPKf1olu6hPUHbXMv02pwcojEEa3ZUSVAXxgx9NqOU/iP0PzmlVRfHp4xXJYYSZUjpuv86WpM7JHhdkPQdNyRUZxG24B1X6j+n0qQzaasfgRA/WobjeL00J06kj+tNL1MyIHZTnsU4MLuMDnUWFLxuM7d1Z8/eYea16GrO/YJwnJhe1I715i09cq91PyLf6q0SsXIfqeu76bjiKED5WZ/tNc7HAcMvXUMXbkWLP8A8y7IzDzRA7jzUV4E4Th9R8PrW9ft681dpi8NgVk9inbOB/6t05UB81RSfS5WI8GxY0J8I9DGvpFZOR7nKxOdlG838JPaAqNGXNHQEaGOmpE6bTFRmD4o9oMod1RiM6KxUMdQCQIkwSPSpLnDGzfAkdxFUgba94j/AKh8qhOaTIWNJM/CKi02Q08JRk2EHCrAa44DalZE6yZ1A+H5VPYbg7e9bEtbKkwNspkNlO+sTSvKfs4e5as32urbt3WjQMzqMxWT7q7qdM2xFa3Y5EWxN1b7PEZldQEZNA/eBkQBI3qjmZscbqDt+KW6MCV8WrT91ny8SxuKuMl7EXG0Y5VOVT5QgVdpNC/KhUbGevpV1xHA3DXr9omAq3UiCGcAyNPeXRlMamdqPwvmSziUZli3cAPaWy0lAIEiYzIehGo6gVXjl1NJaKr4XNTucSnfsO4uMMmPUtAy2nHgBDozT0AlZPmKqHPHNz3CsKThi3eddCx6GN8inZTuR6U8ucIw9wmL1vNoMvaBJGhggkFtYqw/8JW1ZZmXPbTLKoJbKxgkHYgTvVYYsffM5Fkp31TtIZSR4by0mIw6OhBAhkcTowGojodNjUtwvg5tsobc94eB8Y/kfrUDa5YxSK74S8rw2fKhyvrqAUPdeOvXpUnyxz0t5RZxOW3dbRbkQk6wT+Bgd/unyq+9zHtschRuiJFtUj7Y+B2uwW/CpdDqkjQOrA+9G5Uj3vD4RmPDrrIy9qgZVYFQwzI0fofI1oHtPGKu4O0zWu7auv2rdDlAFtwInIwzd7aazS3zE1mLbKLltoJR9QP8p3Ux1FVHtc7doTQwkL1Jynw3h2OsC4thLTIMri33HtTMxGUFD0J6edZhxTmy3ZYraw1shLjIXc5iSD73UxGu8eFV3lXixUh7OZRGoJ6HdLg6qduk1eefeI27+C+xw1tbisM0ABrYEsWRpBYNqNutUpXxzHS8UQjD7zpcqlxzn7FOPsXtzBMIJgDpDTHwpLkP2uXHuC1iQHk5c0QPCHAgEfCqzyhywbme4Rdt2Vlu0CM+g3E6CJO5NaJyTyXhgovhGvNJzNcXuAnburuY110qnljFxmEOG/gjm/ypHMa3YKQxXJfC8SWAtmzfbRTZaUk7SpJX6D1FUxvZdcw17K18gDZ8pXN1HvEDTqJNXW5yZddnvYdkzkhsuXIBH3UI6+VV727c/WcRg7NtA37wHm4DMrlBDCeoJ6fGpum5TslukOv/AHQDH+U3TkDBG52t3Fs10/dtqp1+AOvnUR7TuN4eyinD3LwuqYAdRlI6kzrJrHbPN9+00IcgB6bn1NK8w8Ya6gzksc2/jNdCMN+purcKRsZBFlTeI46Mb3XAW/8AdZRCsPA+dK8rcGPbBTowG3gaq7YUreQLIJAIHWa0rgPEVZytybd8d0NHdYR94+NOyaaKbxSmcK2C0G1zWtq0bWKsq9tNAxAJgjWZ39dDVexXs7w2MR72Aum3l17O57ubeAdx8SagsUuJxTLhraF2YkSdoHUnovnWj8pez27gbLk31NxwA1sNFuAfMTp46VlyXFGXsO/x4KDXNaN1V+Vud7tsfut63Lk5SepOwkdfUV1xHw+IVjI1DDXpM0y9oydmUvD31YEwZHjv4VPc78xW8VZsXrahSDDDqPH4Tr8ax3s1FsjW7OsO+xVCZur3BbNxzEm8ti5qMyDrpsCf6Ubj3Mi2bZYnugR6k6D61mnOnOxtDCqpkLaDEf5gBp8qhk9oeHDsMSucEAqv3RGuu3z1jzqzG58bKY0k/ZGFpe9M8TdexhntHuK103VHirgkH0NVbhGExF0NkVjqBOw18PEnyFXu+lrFW8oItkZWt5o1tEgMJ11AEjpofGlOO8MHbKLF1MiW8oQuLeiyFYwYJI1kb/GmRyDcuG5+Vr5HTXRtL2+KVdxyXIuW8Qua6nZ27bsTny75CAYdY2OpFZ/hcXdshwgCG42XOVBbJJEISNAx3K7wBOlaDxvhToUdm7UtqxVs4XoonceO1JWuFZ+xtunZtatt2kqQWCuXLgwe+QSo8TV/HyQ0WqkeVLq0yWnnC+NX7NrD377t2Lk2hJZmZU3cCRAB2jRspjarZxLiodc4aUZd5MEHZh+dQntO4ZiHw9lituxaARbGHdpu5HEdowyk6iGM6hYka65lzNjrthjaS7mTRTk9wmASVnbUx02+FTRAu42KUuOJ3amlc2DIG6sCZ32APUdJ9PzqvcbxuoABWJaYiQQNoAkaedTHA7pdoIMQc3hEbx/OhskhLogOqkQjgMkCZkHUSNJUg1ZiIa73LTLCAAE25cuyGIUE6kFoAG2o1GvzoeLajQaTqRsTrJ6n41YbuDttYs4m2r27Lu1tkYllW6oUkI4IJtMDpmBcQQS29R+LtqZKiJkSQR+ZOnTc0HvAeVPpOndWflvioayrTBC971Ux+VOOIcGDOxRwO1tZ/RxrAjyqg4F3CXLS65iIHqYIHmdKtOG4TfwzLaumGZScqkMbcgrlJGgbMNQNvGs1+MI3F7TyePsufyYtDitY9k2BvX8OFvqhsO6hCVAe5btSDPVbebdtC0EdJqL9r3thFs/umCI7MEJdu2wB3Qe9bsaQqxoXG+w01MXwTmbOtnApeY22UDGYgKSezWCcNa2K2lzZWeQXYmNN4jk3kW3iLr3ipt4TtXAzDKxVdgu4AA0L9PWrkYZEDtyo5JLAsqx8M9pzXGyWbCoJ0NxiwVR1hQiiPXU1D87e0d2HZLcLNsSoCoNOgX3j6kgVFe0K3hmvKmDTLbtplZgzBbrAyWgkmPuzu0fJnwfhgtlLl5Dl95LbBkF3Q6swgraHivebZSNWEDtOqyf2UGi+E/5Z4F+8Lnu3ls2FkXsRdEgMR7iCZu3iNra7DUwNai+KmxLthwy2ZFu0H1uEKJzsdgbhliF0WY6a7H7KuT0xRGIxQVrKMRZsBQtkQdSqDQIDpG7tJYtGr/2uYC0rqyIhUdwpChQIISBEAj6aVTkz2MFNHldDi9JdJHZNbLCOBcUvgFRLA76MR4a/dPxpfgOOv4V89piUzjNZJlW8dBP+4QRUjzpzabvZ4LDKwTMofUBrt09JGyKenWNapnC+D3rGKNi8rK4YZxm95cyxlOxE9RpV6KHuMJcALF6fkKkcFwNFbvzv7R7aYG46NF4qbSWzo6Owgv8A/iwWObqQPGq17KebhiLQzH7VAEuDbMoEI423Ag/xD+IVQOfMbaZwjKwgMrEEHUk5CT0iZOuoqlcm8XfD3O1TXKxVl6FDup9engQD0p8PTWux6HINg/8ACjmwmhtBeouIICIYBlMGD94eJHiPmKwv2mcH7ByDJW4Tdtsd94KMZElSdY3BB61tPLfE0xNkOhkGSPEEbqw6MOo+PXWt+2ThQexZOxGIQKfJwQwn4KfhUOI/Q+iqmJIY36SqHy9wux2lrtbDguQVKvNtj3SO0UiV94aBx001q4cW46FLJhzKP3WIQKB4qsn0k/DWovnPELYtIWt27hFzui4O6wA1LRv4eWkUS1zlhLiu/YGxcYLAs5WtyPIkHXyGYHqZNTMkfMzWBtdKTIj1m2qve0fCHswT0YT5bgxWofsf8unE423dZpXCqXa2RrmAy2jI3GZswnqlZvzvxhHshkMgkA+REkgzsR4V6l/Yg5U7LAviWENirkr/APKtSq/7nNw+Yy1qYkZeQD4TsUEiivQIqr+1XmP90wV++PeVCLY8bjd1P+ognyBq0V5w/bD5qg4fCAFt79wCIjVLYM+P2h+ANdFBHreApcybtRFyxThqvuZ7xknLJk7mfHr8asXD+Ekyc2gOugDfIQahOHcW0AW0T/mOnyXSrNw3E3fCP4QoBnykzFdVG2hsvPZZRfuXWuF2zPdc+MhlHzLU6w3DEH3RqNBEn55tPWkrmMuja38GugSfRf50tw7FPlOcKp27pZgB5g7RUu6gthR8RhbKgSigxsQCT6QZmmOAwySfsVXXSdvmf0Gwov75rOp10GVIPlHvH0mpVHdp1KiJ7qKv/uM/GnbhMsErruIjQkWxOgtqTPqSCBTFcda1BLxOjGd/jlEUGIsnfM7+ANw6j0XT4TUbj+In3Qloeon8+vntRATHy0pt8ao2KjQ9Cx8o3ANNFxCbliTP4oI9QogD40zs8UgSTan/ADtI+AnQeFG4ZxYsSMqHWcwzg+knQ+UkClSb3AVJ4l5WF09NyPj1nyo+GuSCGNzTXUhdPIkAmoo3SGJZVE7FnYnf7sEx/etR4xJkntFUA7hWJ+ZUmPjR0pdyipzCayYEE7n34+LGfWhxOMgwseojQ+J72p8TUYnGiB72bX74B/ITHkadcNw+aXKW95kSD8jpA9RSquU3uWKCXwofxQ9Z6/NYprisXeHW2JMgliD6+9RMdjonQHX3TsfXvaUlgMfa2aws+KgnT4x85okJBw4tc9q5qxusY6hgRO+0ikXxLNOgbwLAE/U1Ipxa2PcQjXcxI9AI0+MetI3sMzFWVp16kiJ12Aj86IPymPHwVHKX6BCR/wDDWIpzhiZ9y1JGuVBp9dDUiLLDQvbJnrAPzB/vwpO7h7p1U226ajUekfnS2QDSmmPtL+F2/iMqAdPAa0wvW0MT8dLn5kR9DVl4dZvQcxDfOf006aimnG0bTK9tY8dx6Zv0ihq3pOMe1qHHCU/CY3HeX+WlOrWGZRATfWZJ29BH6CkcNxBpgud95VfgCJ+tIJYHaffafFvpodacFDsU6w3DWJ0EHzMfqZpzdwt5d3jw90/pPwim97Br+C9HiAs+cUW5ZtiNLvxyz+c0rKcGgJTDXAQ2YM0fwtHzJ39a6xxHJ7luPPSR8iI+NL2FthTDN/qcg/ATrSN/isR3x5TDfkpg/GlaR2QHEMdjc11MMv8AYpCxibgkSfidI8zH60vgb4aTnO/jGnkIgj5eldeDyQVLhtjMGPTb6fGimEnlGv4lmhcyr5FxP5UmEfpct/7wfzMU3ucPgywyj1WfSNNqVtYAHoSPCFWfmT86VoXaS/d3kkOJB3Vl/MDQU8Fi8Bq+h8QjfU00fDp/6Z8In+QijYbhoMnKUAPj/ODHnSR+yG1hzB+1A18R+Rj6Umr3R94EebD9DTjHvbVe8yE9ABmJ9YJI+MUzw2Ltj7qmfxo4/KdKOpIsKWXtfCZ13I/+rWm1/F3J7xP/AFf2akuHYtTMpbOu4MR8GH/auu3pJIzwNh3R/IkUbQDVEWru8NE+KsPyp3bW6Yh/SFMeu1PbvEiFgW2E7sAPnGsnzJFLJi3yzlMgb65vkDH5ULTtITMW3Yd52IG/T6aUkcM3gdfEN8zXWOL5Wkr8SCT/AH8ae3uOo33mHgIOn11pak3QCN03bhZ3LAaT4/mdKa2LS9DMaQNPofzpe7xDNHfMT0t7fSl8JaPk3UzAPp7s04FNLd9k1stlbZR5uf5bH0pQYkf/AA48JuQalMk/dyr5AA+pn+lN71mfvER6R9cxoak4RkBIC/b6IpMdZj85+lI2riz7izO0GPqaPjlgDvMx8FAC/P8AnTP953lHHowJ+o1FGwm6SneIE/dIjaNfznT0oy3YBBQSdcxH/wDaPkKj8lvcMyeRDA/SR9KJgypMdo0+ZI+XT5xStHSpNLqRqR6LmJ9dDv60xXFLm2ues/pNOlwYP3vmw/TemuJ4Z109Rp/Oih+U4vlY0Zp8JU0bC20PvKJnrAn5RTFbEbFp8iTSy4ZjrmA9RH060VHe69hu3h+U0oo9DSDFs2kR1Os/yily0a14mF9DFdkjakXSdCPr+o1pYXPKkspmf10+XWkUghtGNIPr5UR7o/r/AGKcJPWKTuWvD5HakQiCks0mRBEePXy6R50e1J308gZ+sClUWABSVy4s7603Yco88IwT4z6fKutNI1BU+BiR8pFRqY1lU5irNLQQCoiTlkEsQQIBImTrpNV/jPH3yGWsWj3YLliu8FfuHMdgRtNQPyWNUjYHFW1bEz3pHhA0PqKbYi52fvEAToSQPQEkgVX+EOq95BlL6nKCqlpOpB0La7xNP2YtOaWHgYIB+VQ/Uhw2G6m7BBR8fjlyB3ORTEZmCjXQaz1nTWkmxPnvtGv1E137vPvAEdBAP0IilrWmkR4aRURcSpQ0AJo9gHx8dI+VOcOKj+ZMPiDbuDD9l2hX7M3CwAP8UBp8vOJpTgovdmO2QLc0DZHDLMakGBoTJiNqbpIPCdYIUkra7aRoZHyI6ULWhtFFS1pr9aAWgDManQkbkDYHxipxfwoykmQD+lCGo9wjz+VcLFOCBSav50ZvWhNn0or26RSCRY0k4pZlomSoyU8BN2Sori/BxcBGYgHpAb5SNPgamXpMrRa4goloPKz7ifLATUNt5RPxBqJsqAes/GtH4lgywMH5zVaxfCLk+6p9D/OrRaHgEKuQWldwy+umuvxH6xUvbtn/AL1DNhYXVAD8D/Kk8Ji2TYk+R2+lW4pxHs4Ku9pO4VgUHrHzpwtvzppw/HBtCpn6fpUgLY8D860Gua4WCoDflJ5qBmo2XWNa4pTg8olgS2AxmUkwNtJnQ+OlLXOGtchgMqxMsYPnpUebdTHD+MMq5Tr0E6mPCpG78qCVu2yicTgwNiT8AflBpuyfH1qU4tfL3O6AFygnQiTOo0PQU2xOEI8vIH8waeJgx1UqT8fULTBrVEd4/wCxpeB4+W9cyDxPzq9HO1wWbJA5qbET1/Sk7S+Z+etOS3T+/nQPa/vSPyqYSgqAwlFKx5+fX6UhdcePwg0sIEjUfl8KDUeB9DFSNkVeSJNXujy+O/1puMs7b+h/Kn+cH1G4MT9aYXsOJ0DL5hQfzqZr1SljKUFhT92lntZRoCfIRSDYd/8A1PnbH6GndjD/AMc+igfrUokUQj+yStIfwjx3E0ZmjdfjEn6CgxNsnz9f+9IJbjdT8GMfWnCUE0o3xkJSziJEgH4iPlXXrniG26AH5xQWrnh9d6Patt00HmAfy1qbVShLLTV+JDYAnpov6H9KVGOHhE/346Vz4Zifvg7SDp8mBFM7uBurHfJHhCrp4e7r86b3VEWvvhOMZi4Gonz/AOx/SoFMIb11LS+9ccLttJ1JPgBJPkDTnHYmPeUj0M/rVy/Z+4eHv3b0f4ahV8meZPqFEf6qimlAbYVzDx+5KAVs/C8GLaIiiFRQoHkoAH5UvdaBJ6Uas5/aX5m/dOE428DDGybSHrnvEWlI81z5vhWOSu0AoUF4m585nXG8SxGIBB7W8VXU/wCEvctEeYRF26kUjwXka7fxDJYEIHJe5cOW3b0mHY6SdSFWXYbKaqnsx4OL19M9zJatjPcaQr5MwAVOpdmIUaGASx2r0Fdxx0zKotoxi3ZPcERqykd7T3nMlj10rnuoZBgO3KWNiGaUN+VGcD9jWFQG9iGu4t5kpa+ys+hIzXXHgQbenQVJ4nheBgKMFhQF01UsY8C5YvP+qnOBxYbW08EkELMoT5xqp9NqV4heQki/b7Mk6XVOhnTRtj6OJrlcrLyJXXrI/Gy3sr00/TcL9/gqK4tgrf7uFtqttEJyoskLu0CSTuSd+tPMNa7SzGsMpXQ/iUgz8/lSuCwoCOqvnEhgYgxHxk6TpoaJywcuZCZKsRr01kT8D4VXD3AbmzdrqMKF4xg14300VH+xvlrFfu15fsLxtsGtYdb4N0SvfgHuENocpYazWc84cFtNfbslfCYkNL2LilA06wAe8jHYT3G02mtCwrdndJtHLcViQU7rDX6+kVo3H+L4TF4Q3OIWQ/ZwHuoIv2gSALlsqBcUSRIXMs7ggVs4+eHO3FE/C8ykaDK5vBBXkDjjZ7oEFWACtmGsjQyNIpdsdcsqApYE93RiNPh51beb1svfuCw73+yg271xcj3LQAzJcGma5aOgce8A0j3YrXF8PmQGdZkela/cGwKicCHbqS4dz7eVcrw4YHvGQ6nXUMsSQdRM0bgPDXa01xRnt5oLT3hPSNxUzxbh9k8PsKoTtmuKA0HPLTmzdSolQPSovg1y7gcTcw7k9mSFfKCVPVXX0neqznB0bnRij/vSeHgcKw8ue0a7YDWbhN20CF7JjJC9cjeEdDIqP5wwlq7ctnD7sSOzYAFY2J6QfLqPOKr/AD1y1cN3PbBadTGkHo3of50PAOD3S6ZpZzoqrqxIImYp/caYg4OHH8JzQxxtXLlhxbuiQ2S99ncXwnZh6ETVu4UljD31F2L1kEhl1zRuJHUAgEj4dapvMXCbiDtLeaNAwYQFLeHQa9Z0q9ckJYtWBicVba45OzKSrCB4RJJ0k1z2Q8WJAb8UPlPdhWbCcc5cXv4hS2R7WCX/AA7NvQMo1DXIgHTZQAF8KqXLPtOw6XAqtcQjZlaB6TMVZeT+fVJuYV7ZLG44souohphPCQIHh41n6+wfEI1y/ddMq5mFtQzmTMKYECOsExVjFxPqzIMsVX6a8qu5jWu3K1HgvtdsXLV2wl7IXLBXeJts27DadRO+lZFzVypctS7FbqLqbqHMJOveHSaz0cFa232nd1Ig6EeBqa5Y45eUPbW4TbbRgTKkdND1rQg6UzG3gdt5v/yp3HUFEcTsI6lo+I8aiOK2Cqow1108KccOT7R7ZmCTHkaksVy7dNuBBEyI1rca8REAlRssOpNeCY12ui8QNI9BFanb58SCqpbckCQUHTz+tZdy1hSrlXU5CYYAa/z0qQ4rw1bDK9ty4dTHQr0g+dVsmKOV9E+NlY0AusrY/ZdzFaTPdYmdAoGwAHeHpVl5U9peFxJu27iAgnLJEMB4jpWDcu32S3lnUzI8B1qBwTPh7naowZC0EA6xPWsyXpnfa9mqj/pQDBqtb37VOAC2Jt9+wV36qSNmH61WuG4rDPg7aqhS8pKt+FtZk+e3yqT4Xx43rRUtKMus+m3r51J8u+xPHZDdQ2HS4AyAXgdD55csjqJrOxIXmMxO5Bv8oPiABVNwnEM14NcGYKuUL4QNKlcTfw7qWu2UyhTqND8D4+daFh+RClo2sXhimUkJirIVmAfX7QoSLiA9HCkDYiso9sPL13DZUbvWmPcup7jx0HgwB1RtR5jWpmxF8gG4pV44/cACluVMUrIuWYDMmusI2o+WtTaezgse2uXlt4dycr6l4mAFTqTsMxE7gEVSOSMREgaaqQPH+5qb5q5tuXGS2D3LcBF6ToC3qaeWOZM7Sr/Up3jS0fCvOP5gWz9jYk2rJlZbv3LoXV7riJCdFBCr86qN7HLiLgtm5duEKWIsrmE9ZYnYbs2wiBUTzZgm/dBdUxnu9mY3y5Y1O/eJ10jamns45vfBBlW0jtcdQDmIYBdg0bqSSSJ1MTUsGKHtMhO6pzwlrRas3FsRhxh7me6/atcyoN4yEQBMjJlJJPvSANpqh8xYKFVgO6QYI1BBkg+R3+VXO3wZMXdi7fTDW7aG7dZhJVmM5baCMzsdAummuwoOZbGG/wDzfDpeESc95stxwEkRZCjKp321mnwjQ0OvzupcUkFVjkt8wbxg/wB+dNr9zvMp+8pqZ5ZshVaIED0qA4h/jL5miwh8rlrDkLQDeQ8GsWx0LHzz9q8z8DE+ECqG+PhNR7pCwT/7QTvVh4YP/K5CdFvXY8gYP61S+bNAPUeXSlisuVzSeXErQz6DGkfClRiM7LBglhr133Mfh0+VXLimJL3GuWLnbEIodWgXFVdO6B7wgCSuup9ayPhnGspJaZncf3+VWvlHCOG/eQwS0GLF/A7hBIOZm2y66amrM+Jp3Pjj7rlcppe+1pXsb5cvvbv3riqmFKHMX7rEgj/CkSfdjONBJAJNE9pvPA7L93w+ia5yNv8AIv8ACOp61INzrdxODuXHIAtAW0VQApnKASdyVViBsAdhrUP7H/Z2cdcNy7K4SyQLrDd2OotqfqzdBHVlqo9zNV8Vz+VU0GR2kJH2WYSwUe/dys1pkRbUnM7ODDFQCCF0gEgTvoIL3nK4brNcuvBAGhJIULoFE9QP1phzsljD4tlwd1UQySrS9tW2yZ4LQIBEgwSe9Va4jYxF2WYG6sxNpldBPU5CY/1CarvxzI8SA0FPJbQGALcOBc+JbwlsrqotQOnfEqdP80n41Rr3MxxV1bVy4LSsxVnMmPvSBsW0gdNRVP5zwK4dERGcjLLSCIc6mB+HoOsqapPGOMkJAPfJGXxGo19dIqPE6S2QlzTdk0fhdDFnERD8L0hwzHYTCKxtW1zKNb1wB7rH/Mdp8FgeVZl7UsY1zEYW4JDOcpj8OZWAgdO8dKZYbmHtLZDKQcoziJExuPz8qjuE41rmNw3RFZQh30DTLATqYp+DhPilL3kki7v8eFQGUXEtKac2YS4cVdtpqHeVOpAjTMQJAA/OrPwvlFcotkDaSTAzHfN4g+GtQ/OPFLlp3dDDSZlIUwxlII7wMz86kOWOfC6ZmtjN3hKtpp0CtJHjof6b8Mn9LUVUyWyF3tU9yhb/AHTEZEctbuq1wrM5co36d7QjzBHhTX2ocwi9kRDNtGDyBHeOw/0ifiT4VXsZxjtLjPEZbTARsAe4J89dT1NGw2EGWSdzou4On1rJlYO73FK3Fa4hx5U5zXx+yzW7TdkwyBj2kgd7pnHutAHXrvVU5g5cs5TctM1kgSEfvI/U9ncG58AS0zvTfjXKdy7de4xWzZ0+0YmCAAO4vvNt0ET1FBheJWbCFbQuXp0ZrhK2j6Wx6dTV2CFsbB23H7jwoHxBpsFQ/LN65icVasWVlsRcSzkI7jFmC5iOhB7xbcQTX1I5Y4SmHsWrFsQlm2ltR/CihR8TEmvIP7E3AUxGOu4k2bYGFtgoyrEXbuZRGse4LnSdq9oVvY9EXVJ8YFWgJrxF7X+OJieI4i4GYgP2awpIy2u5I23KlvjXsLnzi3YYW/e/9O1cceoUlR8TArwfwdb470Iw3IhTJ89tetbfTWe4uWH12WmBisnC7SETNwx+JmT4CPGntu7aWPs1YnxZ3IH6fOm/DMTfMfZiT4kwPrHwqR/cr2ultTP4BP8A1b10LVxb3EpTB4i2QYR56jstAPI/zoBwgNBUWfNTcysfUETNR9+xeHv3HKz4gA/AHakf3S2dAqE+JzAeXTWn7quXC6IUlxBzbUxk9ASpPoVmfUgVHWLIclntuNdw8/R/z2pyeDXF702lWd429JBJo2IyEQZPUsFyg+Or7/AUgg60xxeQ6AoIOxGZj/s/pSlu7a2OYLsYtGPUEnT4imiC0CdZ8IJ0+Qj5VJLclQEED8RDGf8ATJ+Zp6jG6dYa1hVk5SfAsBHwHdM12Is27moS5A0gGB8joBTS/wAFmCziTHu22P5RrTrDWAuxvaTJKgD5MaapbPBCRv4UyFVcqeRLSP4o0GlGucJYnQAwJjXL/fwpDE2Q/vXLjQfxoIHoDTfE4C0ANzPhcE/GdKIJUZDeU7wljcBbRbwzFd+kbnWkmwd7pbsrrtBafqfrUQ/DhMQR6FTA826U5TAR94+gcR8TP6UiCUA5o8KQe3iOuVYOyIoH1rrmJYGGKztPckec6/QUlazD7i67EXAfnmBmneGzCdjGoUlPpBWB86Q2RO5TTFXgd7zkeAn9FFIYe5ZGpF0/D670/s466ZJtIP4jcHy00o4xTgxFuTqCPyJED50gUCKSR41biFss0bySNfgT+lJY7ipy922w8tIPgNiTTlMBeMkwPOBP1Appc4eWOpZj49PnMR5iiAEC53wmmEuuToirPUlon1JAH1p81sjQssnyX4wZpvxSwiQGc+g739KRFy3tmMHplYUkDflOhwoCdTHkVmfgaRDhZBdh4SGC/qfypTB8MG6n0OYD8tafWsAWeWQGBucxPr0n5j50UKUQmu2XXqO0k/U09wNnpnYeWbT/AKop3ccp9wanQ5mMesTHpTHEYpCZNrOerSwE+W/6elEFNIpIYqyQe7sPw2w31MzTjD3SsSoPrZIPzUj+lG/4uqgdxttBlMA+RzfWmuDxEkkWS3mzEj8oPoKBIRANJzd4kDM22GvRmUfGf51HPJ2B9ACdPUtUq2IuEQqrbnwOvprMfSi2MRdWZYH/ADrPyMD6UUj91H4ME7Wp8ZcgH4DX4Sa7F4Bn3QL5SZj47U7XirD7532ymPSNPrR3x63D33ueQC934/1FJIV4Ubh+GRpMHzYAUq+CGnfBPgSpHzmpMWLBGUMrNPgQT8Tl6+VNsTwRYn8oPzpBItPlJHBoIlfihP5RpQ4U2tpy+baEecmPlRbfDBoBp55oP60tfwKqJZvQZp+hFFMSdy1a63h8MxP0pCwbQPvXG/3AfDUUrg7Ougn5T9CKc3NNBZLHrLKAT6AGknNdfCFrdo7OwnoXj5yZpsMOo1DtppIuCfzrsVw/OZ7NV8s2npuNflSaYEr922Z8/wD976UgiUrdQmDndgNvtBP1FKrimWICn/Xmb5AfpT25ZBXVSCPAZgfgdaib+AOuj+XcI/I0rQ0lK424W1L3QfALCj5Rp8KblW2F7SOpI/MUbC8OaZZbhHwHw1JqWtWkju2200g7fA5qSdRKh/3RiJDkjxD7/Wmdmy4Pdd/HRv61K2SZICqBrrJLDw94gfnRV7RSe8Z10KK/5UiEASPKTs8QuqNS3qZ/qKWbjTkCSPhM/HT9aSt4+6N2BE9bZU+ndp5YvK2mYSejIMvwOhpWiR8FMMbxqRCiT5CJ/PX4UwPEGO6HT6/MVPXMHb63LcDxI+gn8qbWsOZlHtsNvP1gail+6JH2SFrijKNLceZYT+X0pv8Avc6xv4zv60e4VnW5qD/ER/7aXsXh0g+HeIE+h6UQo3b+EZUeJOUeYaT6e9SOx98DXxn9YpyvaHQjJ5qwg/Az+dCMG/grCfvLB+Yp1phbuvYCg+P5UqiRSQfSRO0+fy8aStYmQd1/zLH514pqAX0JVpw7UjYxYP5QQQZ+MfOmd/Hlf4z6Rp+tNruLY1A/IAUrICVLpd8YpNsYvU1DZG/ETPQ/0pieGDOSZPXWQAfKN9usxUDst3gKYY48lWDE8VRYBO8xudtegMfGmF52YHvLBMrAOgjYw2vrpTd0y6yddDufy2pa2o6D+/hUTpnP2KkbE1u6QxGBBA1KnQypg6fn6GojiPAUuwty5deJIHaG3udP8MJmKmImYIqx2Vbrl+AP6muvIOoB6jyPiPCh2rTtdKO4Lg8iKpe4+URNwgsfUhRPrv61IWwBsPlRpFKqtSsjATHOtN3saHTU+Wk+OhmjsfL5CYo/aeVM2xzQTkJgwVG+41kwCBvoaJ0hAWU6Gumv5UV586E3TXFtvr5/HpTg5KknccjrRReB60r2ooC1GyhSRUmfGnAcelIs1Eam2nAJ2keNJ3APOkUoGelaVIzEUU0WaTY00pwR3akmFFIFAy01PCK60zxdknqPiJpe/m6VGvn6x86u4jSTYVedwAUdicIdfd+VMbNog/1IqRxxbp/f1pnZuN1UfOpZq1UoW8J0jHz+c/pT7C3KZJcHUH4N/SnC5f4h8qtQkhRPATztqIL3ippvmHSfiKd2Gq1d+EwUhtXAfEetA586OLfp+VJlvEEUzWWp2gFGVo8NPE6H1ovEMSGYtMa6jUik7mU+HxFNbmEA90kazodPlQfIT+kpnZHlOBdHj/fxoe0oeE8JNxsvTqTMD9JqaxXLGUDKSfInr5R+UVax+4RZAWfkRtB2UKCPCk3vU7/cW1OUwN6ROHJqyHeFRcw0mttJ/rNKmz4t9KMndrp8qsNIVdzEg48GHyoozfD40o1z+Ej5UFzFAdY9ana4N8qs9oKIzr4E/wCn9aRuWxvlifE0a7iB4j+/CKRtXAfE+OkfnU/1DWqq6ElHDRuB+n51zX1/CP7+dGtvm0AI8TAA+tKJhD/C3yn8qnEgKrFhSVtA38I89P7+dCbHkI8uvy2rr2I6EMI8B/elLYa7pp9dIomQpvaaUU2gNgT5B2pK5iNCMp+Rb84pYs34fjNNL5fxAHwP8qaXFN00qzx3FgA6ED/5R/7VufsT4KLODtkCGu/atIgnP7sjyQKIrHLdg3b1uzP+I6qY8CQCd+gk16XsWwAANAAAB4AbVUyH3stjpsFEuR681/8A8QDE3GwOGw1sSb2JzNsBktI25MADM6b+FelK8i/tscUZsdhbC7W7JuE9JuuRrp4Wx86zcmXtsLgtdxoLzPheRcUFDLkLyIAuqGEdBsPrWi+yrFX1uXv3prmchAA56d7MV6EDugkTOhqf5exwRYhCOumvmYruYLNm8IZcrDZl7rSNvKuRyOqGa43t58p2Hn/Tyh5F0pjE8IVpe2TafcMp0Yz1XZvoaSXi921K4hMybdoom3B/EpkqfOCKreF4w1nQubqD8UC4OmjDRvQ/OrDw7mNbolCGEQyycw9VO3rt61mmNw8WPld5h9Tx8kWx1H4S3Ar1tbjdnOR0zAAkqGU7jwEMNPKn9q7GIIBkXEDaeI7p+kVFcNwtsXpUZS6sIERqJ22DabikcVeZWslgZS72bHplcaa+oH0qN7NR2+FpMcQFLcX4Sju2Vsl3Q7mDMRmA28My/EGo7EXsRaBS4SUZSjAkNbdTupPUEdND6V3tI4ZezW71hS8IQ6q0NAMqVH3iJIIEnaBUdwPnfN3HyHqyNvpoVYGe95EU9kLtAe3/AOwuc6n0ODJeS32u+fBQ8HtYZNsPYB11hmidD77MPgBVlwmMw8ANh8KQOnYWoj/ZOtNbnA7dzvWiFb8BJK6+BGqx5yPSou5w9kMMrg/Q+h2PqCaqTl7t9R/lcRn9PzMM+8WPnwrbf5VwF/KwQYe4mqPYJgN0LWmJtsBOoXIT+IVl/NaY/C4jsmbts/etugzW7q+IkTK7MrCVO+hBNnt312kj1H60reus6m1nbKxEG2YdTtmUxvEgjYjQ9CJ8HLkYdEp1D78hUWz69nBSPLV/EOAb9uwAREvlzARt3R+Zpxy9w3BYW9curdRXcQoZ1dU6kodCDNZtzhyi1oo4xHbWywXvsBcVjr3kzGVj7y6TuBVmxvLNlrKhoGQLFxRsSZM661byBHE7nZ3Ktwgt8qb5lu2hh7hS+rZyGIg75xKjoSd5mNIpW/zigtGyj2898dkMwOVQTrdPhlHQVnHGeEm2koZUDx0PnHSpPkzlyzdLNevtZIClBklWk6ifwjXQb61WZBGBrvayrzXvk2arpwG/gsHmexbGJxEa337qz1KjoD4KJPU1mftD9rHELzMi3TZtjZLQ7NT5T7x+dTPtDZ7YUWmZR4kATE/IbQKpeI48y/4qi6DrJEfCa1sCZz/eaIPAVd+K5htyNy5j0xqdhiP8QaJd6jp9DuOtRnFuR7+FcJcUgE92591/CD+lPkxaBg1qwEJBJMk+cgdKuHL/AD0uItvhr4LBvcY723A0IqzLK+MnQPb8fCjFjhUC/wANUMQ827qgRpo8+vWpnB8zjCEZQGYiGDAETVc5gdmMuWJtnKCeomofjQFwiDBG4n+9assi7lajsnxNJdurPg8c/wC8G8hUhtTMZdtop/wLCPdZ2dFCyJAG3+XzNVWzw3Mg7N9RuAd6Lg+K3bKgSSAdgSDUxhvhXXQXutQxWBsYZz2drOWUhs5kSR92NKqvK/CrDPdz2y+5AE5QP6aUzwXN7OwUiAfHUidJqxYa2+HZ3tZbiOMrLMHWqpjlaT909mPtuV3J+CRHb7UBZ0Hh6jw6Vpyc03MBcT93urct3Ezm3uk9cyzofNSDWd8v4FXGYYc6anM3dPjE1A8S4pN9u6EAGUKNhHhVOTEcX9wHdKYACl6u5J9ouHxyAH7G60jsmPvFd+zJgXF8veE7Urx7l7D31exdUKGAOXZSRs67FXHRlA+O1eRuf8Sq37FpS3Z2FQsQdczw90jz1AHpW42sWz2xdwV9nAVYt3DnkgdQ05X+k7EbUcyfshrnefPwqboTQeFR/aB7Or+DvZlBvYYwEuIpMSQAtwKO448fdaJB3AR5h5ENnC9vdfsr2cRacDvBjspBJLAakEAKOs6VfuT/AGrvm7G/Fp2MZ1lVBGnfXWPUfKu9oiYe9ezMr3Mi28qhyVzsZfce6dNtdhtUMmawbuG/+6jnmL3AOVDGIZbGItFQw+zZLhPuQJJA/iKgT6eNMcJ7Kr3YDFhfsiwb8Tm2TAcIs92dJJBO4Ea1ZvZzkN53dQwtjVHGZWJcwSDp3RqB4xWjW+Ys2EW2gOa9dVEAMEjtJgeAyiNPE1TOeYyWD/3ZdNjdGOTD3nHbhZTx4X8JcYFEt35UlyAzoCoYG3MqrR98AmfCsu4hxBlxAvMzM2cMWLEs0kySdzO01qntix9ztC14Q4EFfwlpMeZgr/2FZhe4LeZ1ZrZVCBGfuSBr3c0Ez+IDzrS6W4ujtyypRHDamm4gFVhtJIXodfHrVTtXj2gJ1ht/jVr4hcuOqlrKhUY962pXPPRmCwco0zdOhprzBaR8oS32YHcIkd46946Cd4nwGtWYwxl/dNgyO4dgniYkdlcA27RT8Son8jVd4wgbQnfUfyqd4VwlVEddzJ0MDSPQ1F8cwWx8SCPj0mmxFok2WnPLraAofldbZfJeJFsZmMCW0+6J6tAE9N6uPBsRZvXbdu/mtYdf8Kxb0mSPfY6ywOrbmI0qmYu3ldPHMJPrG/jUlzJbK9m+u41+R/MGrk3vIo8grAyW+5XwHsWu2CD2d1CbcaiBqp9RBB8xTrmj2kXOw/c8MDh8MoCsNrt1wJdrhERnOpA6QNYqL5ktPfyOtztGtrlCsQraDcD1gwes+NQ+Pw+IuMC4WSZMkDUgAk9elZMcbDRfV/8AKqghv6SnCYCycNn1a6xyjX3TpsOojr4xUrypwBkAZjkG8zlmNfe3MeW5pThXCsqwroHjRm1VT4rE67bimDcuYi6ZuXA+uhNyT6Bf6UmysNhx2Ti8O8pbjnMjdqFnMraZmgzOkiekAU05ls27mUm2mZR3SoAJPTYQdY6VN2fZtiLxDQlq0o71644S2sdZbvH/AEg1YOA8ro6n93vaIShxZQ5mubxhrZP2aDY3mJcz3cutSwwfpMeyjfIb52WfcGwjWlZbndL65CRmAg6kfd9Dr5UHs2UfvVtDOjMNPNWgj0NW+x7IQXLXMQ7wRJChWPlLM3z1NWnFcp4fCNh7yKRc/eAsliSym28gjUEiAen8rbscgFxPKdDvKKVU9t2CgNKAAhlUKRqRuxGoBiPXSsM4NiLiE5dus7H+tehfbNjAzG2oVUQd4Ed5ngAncmNQN4kVhnE+HZSYJBPh+XrT8J7QCwrakb5UzfxpKsYC5sqjToO8f09ZqTVfs0IMMpDCPPT6eFRVjh5GHsEzmdrrGeqqVRYPXUNpVs5M4CbukgAQ2YyIAkxtuegqDJLYxfwkCACSqpzdzaxdrUdxDliSdtJPj1jpSfAz3fEbx47b1otr2aWGYl1djMnXKDrOw/nUpw3gVo3bWGtqtrtbi2gPvkuwXqSTEg6knSqw6hA8COEG1hSTBzqavSn7JPKy4fhy3MoV8Uxvt/lPdtj0yAP/AKzWwU24Vg1t20toIVFVFHgqgAD4AU5rrom6WALSaKFLKv2o+J5OHsmk37lu3BPQHtG+iR8a8rJAiSF8BA/nW5/tkYlS2DtEne68ATPuKPzb61jfCuBI2wuechVEeprounMqO1xnXZiZtI8KS4ZjV0+1O2uTKo+MSakL+PtpEKGY7MTn0O0kkAelRf8Awq0k/a5P9aj4aa/Sj/vuFSJbtD5Bmb1kgL+laopc+XEqQw1wMTCEk+C9fJpgU2vcTZHzEBQPulifkAd6b/8AidDotq4yg9Xj/pUEflRMdxhGAjDn5wP+kSfiaeFXft5Sz8zW+mdidwARH+4n8qRs40NLNm20znujw+8JH0maQwl0zJw6RPmpA8idPpTrivFbDgAo4j8JDfl3fpRGyBOoIi3dTlvYdZ1kAT8JmmmGt3RJW+DPQMTPwA0FKYbC2yCwVoGwIUA+p/lUhYxbKO5aHyg+k5hp8PhRpNDvCicVhGP30J30Ln/tXYLCv0a3v1a4DP8AKnV3F4okkW9Sd4YH56Ax8qZs98Em47gn7qmST0kAGF+fxppKdQUhcs3F/wCY22pXJl+BOv60xsanUm6dtXbT5Df0pzZsYhgTmXTxjMPIZlH6UXDLiFJAcLr1KD9NvjSBTHBLWOGf/Bf/AEkEf+2fr0paxhgDolweeUb+EAgGmOJN5tDctDXpdEk/7jR+HYW5H+KAP8wbXykaetPDkCE4xYLb3iIO2gj4ID+dcEWJZ2Ijcg/lk1FFXBQTmv8ASdCdfjFJYi8tsS1xmnZVltPA+6B9aVhLSUDcQspsrMfMZY+oj5UFjjCa63bfoZEfI0le4upAC2yYHXTXxjvUjh8Q5kG0pn+GD/X5U1O1UnmGwtu4M3a3CZ+8xDfL+RpxewllYJuFT078fEyZqExV19iqgeEH5af0pPC4Ibm2vjuZj0pUfCOsVup9b1obX2065wQfn/KnOI4paAHfRj4wA3zXaoQ4q2NrR+gH6mm1zEWjvZK+hk/UUTsgHBWBONWtQoYMfv5508tzHlFRGOQMfecnylvrpTjDNhwBGcMehURHwg/Cli9v8Sx6mfWCRHzpwI8qN9k7KK/dyIhr3+3/APfp3axbCdGb/Mi/nOlL/uVudHj4T/7CfrUdjUg6R/m+0/lQ28IG/Kdi7cJkK2o/i/XSnWCt4ozDsg6zC/p+tQD3bxj7ZhGoHfHy0pXD4ckHPdYjwhjJ+MCmgk+FIA1u9qSxIvbNe0mNWgfSZobWEu9LmYde8SPTT+lRyYLNoJ9SI+ZJoj4HvZUYk9YgCfWdadwmWCpfC3QszBbxCOSPjptT1Loj3J01lcsn1J/rUMmHvDZ2Hx0/n9KIVxCGQ7DxnUflFElJoCku0Ak9lHmIIA9Y+s0zxGIk73AOmVvpAFJjtjtdtknpoD+VFsWb3UB/Kf1EUrQLfunmHxndKm5dX4z+k/lSFi6f/VbfQET/AO4aU2/fGG9mfQn84pHtQf8Akn1n+lLUENJUni8GSNnY+IIAn4TQ4BCmos5j5t9KiGHhmX0/pTzB2rp2c6eMz9f50bSArylr3Eb2sWrag9CpJ+c0S1iX6pbH+k/Mya57lwdcx/vwobGLc6ZCT460gKSMhPwnV3jaARMHrlG/nJkTSVzmUAQHBk/eEEDwkdPKKTtYBm3VB/mkTSV7hdvqEnyY0CCntkHm0a9xJnETaA+Ovzp4uPYAdy20fgcD6GfjUbdwKD7yD47fHX8qILCjYqx9QPqT+lFHX8KR4jxG6wjs9N4JBH0jT1otrGsBraI03Ro/Q/nUXiMIx/5fyaaRwy9mZhl9CR+lCyjsRvypF8Y06m4J/i1+UfWivim0i78GEx8xR7nFAxBJYR5yPPczR8RxuzHusfRY/M70SR5TWtJ4Rf3rxe03XvL+oFJm/bO3ZSfBiI+YoLmOstAFtx5wPymKb3rdvqrD4ATQv4TqHlSNguu0MPNgRPzFEucRublZ8unzH6mo9Vtnow/L6Gl8Fw4jVSY/vppThaj2CNhuK3JgIoHXp9dK65htQTIn8LT9N6Vs2SZ1j46/KabMhn3yDP3lP9aVUm6rO2y9i4rEBhHaFPMAA7+LA77Uxx4kwczLEaGB/qAYTp5Us9yiMV8tq8FkkLl9GsjATLtltgKiE7CEA06ayQIpZsWugJAZhoJifz2pC7jbanVlHkY/nQox0y5Mp6kknf6H41X1FTUo3hnL2S610Xr7TPde8zIB4C2YWBAjSam7CmYOo8Yg0lfx4XoSToABufiQBPiSKeWHkAkZTA00keRI0+VSsAJTXEhGSyB4/OjrSar0k/OfzoACOvzq00AKIkpXNSN5iNvr/Oue7G5rhc28D10j033NHUEKXKzeFGZjRw1dmogIEotv1PxoyiiEV0f3NFJCTRXTzoSK6TQStJG1Q5KMW8qKxooop9K7N5UBNFam7I2gY0Bak3NEIpieCjsaSZqBiabXrh8BTU4JbNTe/jQu9M72IboD8qh8e1wnVT8p/SpWx1uU1z/AUve4nMwPqP50UYwfH4H9ajOGoeqg+kA/WpNrSn7n0H51qY7ab7VSldZ3TPHWQ3QfOP50ztWo2DD4n+VOcYP4WA9AaCwF/EQT5j+YqCTdyLeEvggep/v40tcP96UexZMe8CKLcUdTr6TVyIUFE7cpFj/cUug8hSOTyHwmlbYqdpTaTi29K9p40inrQn1pOo8p7dknetfhPwOo/nSOHRmYrlJYDWBpHjMU8WpXhuOhY0HSdvHWZqAY4LuU98pA4UPYa4g7rMPLofoaUTiDiMxM+MmJ/SplioOhWT6zJ86DG4AlZOo0mJkeYHXSpnQPA9pVbutd+oJhZxhjUDrqDE+v/am14j+L+/htQ4zhxAETr+Xgf+1NjeK+Y8J1HyqH6lzNnJrsZrt2rgf7MUdr3pRMPdB02+ER9aOy+YEf3508ZY+VC7HrwuZQd9J9KaXMMs+746zH0FO8o6EGivZE+fjpV2A6hfKpTxhR68P1kRPoCKUfCH+A/CKfCx40ZFq2wm1RfE1RowZPgPTb611/C3BGs+Q2/nT6+pGoM/H+tAt4+E/KalMRPkqq7S3wo8Mw3Sf78+lAEOugUeg/nS91v/hfHxpCxeYfc08P5HT9ala14HKquLbRLGI1gMCf8oj86R4lcaN0PwoMZbiCGI117s/kP1qP4h5P8/7ikHvBohAMBU57JbOfGpMEIrvoNoGUfVhW/ViX7PNn/wAxiCdSLaAGOjMSf/aK22onmytzFbTF1eMP2huJLe4viEQgtaW1bZZ17qBjp4AuRpOtezbjQJOw1r5ec8cXOKx9+9ZLdpexFy6GmMoLsVM9ABGunxrPzo+4zSpZG6hS03B8IeZGUaTq0fD0pPHreiMpIn7pBn9aieE86MpFrFZQ+gF0TkIgwXUDuzvnUR4gb1NvfutDKucHRChzIdehUkHw9dK5WbFEe5H7qg5jhyq1i+Wb11sqWnzN5aCN9ToFHUkwPGm93lk2J+0BvNCMyA5bYLT3X3ZjABYACJAzTNa/YsMlvKe65EuRpBP3PML1AiTPlVM5gw0jf7yeXidfOqMHUi5+hvCLZe0dlV+S+Y7q4i1bvd5u0VA2zCTlAbSGU+Ig69a0XjmHhbwG8C6pgzKEPGvTSs356uNaaxejQOqvO5yMGX5gHWela/xO+M6kxB7o0nRv7/uasZ4HskaOf+F3/pvLdPE4ON0luNcTjDLfGyFXMCe4YBPwDT8KjMfwbCYwZnGS4QCL1shbhPmYIb0cHyikOTTnsXsMTJXtbJ9BKrp6ZfCqRy/iyqgoZXaAZg9eu48DrVWKJzb0E2D/AGW5JI0kB3BUvieX8Zg+8v8A5myJ+0tA51Hi9qZ+K5hA1ipXgfPyXVi4A6GPDfz8DvrIp/wLmG4sayNIO5Hr6Cicycq2MSS6zZva/aWohj/8RNFf10Y+NOLmSbSij8jj9wmOiJbQ9w+ClDwZW71mWH/ploJn8LGBqNO9HrWU87cy4oObDWXwqyJzaXGGmnaQAV12t6HqWqyNYxeDM3E7S2B/i25KgeLr7yR4kQOhNO+ZObFxGEe0sXHbs9Hg5O+sOrfdO6zIMEg1bxIuy/docDwfhct1Ho2MGulZ7SPCzl+FOcrr3l07wPh0PgfzrQjfb93beDkkDSIO9Ich4EroWXK4hrZcAnUaQYnyI1FaNiOVgo7Re/YEZ1PeZBO5y/dH4unXxqPqDnFuoCwFxxNlZbzZdIsNBgECB13E1aeV8LdFsXGCLae0mUMQzHLHeQHUEnb41J+3fB4RcEWtKq3M1sLlLRBOuh6EfGRReL8HxF23ZUGbVu2jCAdsomYHvEDTw8ZNZjckSYrTwC4jf7UtjDY1g9yjefLqlEV3H+IGJInpt8dqhcdxK0zAZVKnRUKkQYgGTtTvh3KlzGh+yK5sOoaLjFcxnULoZbbTSrPxTgty3bsveS3fHdRmRQGS4YhPMEDU+IO01LHLHCwM1b/HlSOxXTMMnwsK5pxV22xTsymXTTUa9fP8qZcs2i4ZSxS4NbZiJPga2322ceODNrs7StaupPeA0YbgekjfzrJb3HbmKdR2aIQd1GUxPj4Cuhxp3Ph1aAB83/whHG0t2Ubax1wMS4mDBB8qsa8rWsQO0X7N9O7HdP8AKrlzrhML2VnsrM3o75nQ6ak+c/SqPwXiVyzckqAJAiYHypzJ9YtmytQQAi6TLjXJtyy3dmdDodDTW9gGYSUII38K1Li3Na3CLFy2giCLq77dagcZgpIhhB6TuPOpGzuP6lc+nBbYWZY7DZmATcdQPCpPC8DxTAQxjpJj51pHDOWszAKoJO0CJ9TVsT2fBFBv4i3b6gBs8eRA2p785rRWygdC1n6iob2VcpB0L4vEPbRTlVBIzyPxEbennQe1rlzCWrdpsMCHDlXJPvA7HU9KuXNOOa9grVq0qjK2VmgDbQMNZAMgydzWccewHZpkZsxkEz0Ou1Yj8kumFO2+FQkkBNKj8btNexLKvvMQggeAAJ016VrPLgODw4W3hLrsYzuQVk9Tl1OXTQQPEzWZcu4G+zXr1ggPa13GaGMd0HcxO3Su4fxvGXCCbzKo3Zmgb6xtP1rWkbrZpNVXlJ5vYK6cXxC4g51UreA1QiCQN/Ujx3+VWD2VcDvX7qMSbVq2QLlxx3V+8FExmYxtsBqdKpOF5hKw5JbWMx30iYO4mpzg9q/i74s2bhi6O0l3ZURVEtmInYd31isXsn9NbeFm5EX+palj+U7CYW5dS533NxlOaUuKrlVVYA1JJbSdaz3gnH8mJwgnS0Dc/wBQVjVuXtEwmGtAhrivf7g1GZbp016KAWk9PCqhx/gtgXBc75usW0DoEWSMsQCcoJIgnX6VXcYtZH2/ut3p3XTDC6F/7Kc4zdzY68yi3eIt2yS0HIWRZZZklxoqwCRPSj4DlA3JuXku3rrNJDkrbVeiwJYnwE/Cqzw7iLYXHXr14ggA5bdu4p7ViEIkSIVRrI6iI3pbn32lYhsqIpw9twJCse0IbrnfUafgUDzrRgiDWgX4XPZUbpZLUNzzijmNhQANmVT7qzoCPu97UzqIFQ/CsA7utu2oNxhkVRrLDc+QAkk9IJ9WOD4eRcFxHLpqCGMGW3BOx+Jn9d49kvLS2rZvkEPcGYSNVtk6KpOsv7xPhA6VYa1uoNtStnbixbcphyb7OraEdoou3ANSQezWZ91fvGdi2+8AVkntAdHxFzsgoQOFUKIHdGXMIAEEgmY61uftZ5i/dcMQCVv4gMASdVXZn8oByL/ETHu152FyPCYj59ZqxKQNmqTprZH3LIVF8eYKYgHMbceRG8H6UbnK99kvm4I9INF5kwzubaopZywVQoJZjHQDUmTV3s+y+9eCdq9uyBqVY5nBjYhe6PCM01K0gaHOPyn5b2tdZVZGKNsoQZkAkA6geDedWGzjkuFGdc2U6E7geB6ETrBqG555ObBx2rqzXtbQUtIRTJZlKiJJAUAke94VF8BxXTwqrkYwI1NWPNzqatAxWXQ5FG0MsqfoY+lMeLMYkEnLrE94efwptwziYZcp3gj5frRRxlLbrm1GhK+IkSPQjSsxsbtdUq7JXWrRzRjVvW8t0sEW0pQFicvU6bSd5IMR5zVU9mvNRCNazHusXGumVt/k2v8Aqp77W27DtbSgnMQLWssbVwK6Hz7pj1qjcC4S9kzc7rOMot/fXN1YCMsR7p120rUwoyyIucfOy0mstptbhwzmED7w2klj4ak/Ss25e5lu4nHl7rMV72VJlUTQaDZTl1J8TNBwe8bRzXLZuaXEVTMEspUOdCDlJka7+lOOXeHnDvnAbVNJQiCADlJjqB0+lSuyvaWlT4jNLhaZcyYy2XOUN75OZmObXWD0AB18fkKrnFUzbnWdD0j86sWNyFbRWS1wFiCG9/OVmSdR0FI4jhyAkH3hLNMRoSI06HSmsOjdazt05TC9omFtr3j2RhZiC924Rqfgat/C8F2NgknvQGIP8JhQux1nekuRuSL9xluMot2wtsIWkEwBqqjUg66mAfOtB4nyAt1YuXnMgBsoVZgyBrm08qx87LZr0E7eVnS5Db02szu89dqGszkuNIDrrB6ZWnfy69DtS37OfK9z/jWDz94Lce5nJJnIjtOusyBpvVpxXshwwGhvAEgzmTSOp7mn0rSP2fOA2xjgyXA5s2nkd0trCBiV02YjoaudPnibI1kA2J32VRhGv2r0qKGuormu1Cvk0vI/7U+Ia7xLLnypZs2096NWJuExvsy/Ks/w2HtEa3HbplE6/FtKkvapjxf4hiroAIN5lUholbcW19ZCzppUZw+2+uWB4zMfEsw0rpsRulgXnvVJdcrj90pZwRG1sEebD6xAp/Zw0astlfUkkfUn6Ubh6GdblkeIS3nY/IH86lBiAB3bL3TOpcLaB+Alj9KvghYumyo+3irAHfdnPgqGPgdJ+NM8Vxa2fcsE+un0GY/Wn2J4yc0PZVV8EBJ/QEeW1SGHxCHZGAiYy5FPqS4+lLdGwq6czkTZYfGdP9QAFStzhlrLrCtGmV1/IdfUCh4jfRtAbaEnqc/8wKSThREkXx5wUH0WZ+lK/lIN+EVOEkR9u8bgCXPloNqdNwoCJua6atbafmBp6UxuXyIC3WB2zA6eGrEx8gKPjrZCjPiWjwmR8ArUbrhA0UbiN0xBvEAHYKQPgBBplbxFv/1bnwDCfmdfpQ2Llo6AZvMoR8zJ+dTXDbtsNDW0II0IAJH5RRNqMc0VBJdtGe67/wATsf0/WgFy3qQNNvfIPyMTU/fx8d1La6ncSQPUKtJJhdCXFnefcYMaVo1flVxbo6KPLNA+f/ehF0j/AJgU/wAOUD5jWpTHtb6rp0IB28hr9YqMvPY6K5PksfMsY+lAlJrEe2WXa8wnWQ2n0M/lTy1YULPaMWP8Q1+unxFRxw6/wKPO5JHwUfSk8LhbRaCzeZVCR8J1+lK0NzspK8pMDKvroT8TMfSndpgu+Uz+LJ+YYaUjZwtkg5UbT7zgqD8idflR7OGtgEm3EeRM+W4IqS7CiOxRrvEcgi2qZuuoj6Ek/OPKkHxF5iCzEf5CIpc8TUCEVlnr2Y09O9+lMkwLsZDkesqf5AU3ZHUeE8vYFoBNxz6MsfmKZ3MOs6m56wHn/a1I3eFqZzXlJHQtP1g01fDWlIBcA+RJj1gflTdRCkoFOGwqE6fVXBoBw0eDR4jT8zTjE2rYURnueShwD8W0+lRYukbWh/qLEj5QKOoIds+Cn2Gw9kamTr1cD8pNOsdfAjs2Uj8OYx/7tfkNai0uOdgB/pBH1mlbGCuTMkRrsoH8qX4TdvJTpszbgD/K36Emlkw1zpLDwk/pR1tXNIZT6BY+Ma+sgUnxW3e0JfKB+HRR8tafeyaACd12N4e5AJUHyzTHw3movE4QA6o3wgUpdux715j6Zif0FL2sTm0tiTG7EqZ9J1ppcDyn0RuExawPwuPjNDatAbM49ZH8xTzEY28IEGB0jQ+szTU4s65reviBEfAiPypuwKduQk79sbkk+e/9fpRDjoiGUf6T9TFPBim0gkD/ACpNDJ6hW/zL/wDZokHwmhwHKaPxa7sLi+g0H5UA4zcBkz6gyPzqQw+HUgluzXyH8j0+tGZLQ6jzyg0A0/KeZGnbSo67xxj1I8AJpA492jKw+P8AWpa9cteBI/yR9STRGu2d+vhER8Yo0flAOaOGpsLl4a5gPRR/L61zY27/AOoZ8gP0oz3J2ZvTMR8tKT/eo0JcepNI7JXfx/CP++3/ABkekfkBS6gnUhpPhP60zt40/iPzNHZifvN8zRb9k12/OyXuYAde0JPl/Wmd3h6+JHlB0/OnVrDXOlw+Uz9P6UtZwtzq3zmflS58JBxHBTTKqD349Cf0FDaxi7h59TP0MU9txtIJ6jb86InD1P3RHp/KnUfCbrb/AKrRVxcjdW+AJ+VJ9uegHxQfyo5wNgfeg+un5Uq5C+6Q3x/qPyoj7pHbcJgVedQh8yoH5RSlvEXF0CAjyzf1pVlY/d09aWs4sp/ZNDSj3T5CZ3uJn7ykeWZf1WkrnEbRjRh6f3H5U+v40H7wHlkmkMNlboCfQClv4KdbashJDFp0dh8NPpR7Vxvu3FOuxEfmKPdwh/8ATP8Au0ozFV95Y8oB+oP6Ut/KFt8BerluifvGjtmLCCuUe8pBnygg6fEGaVFjqNaYHhFp7gulYur3c4LK0D7pIILLPRpFfP4BX0gSEutjvaiZ2IjbwOlP1tjwFIWMMASSxadQDGnpp6VwwFvMzRqw1MnX+4G1OY0hBxBSN/DEmQWHoxH01FK4dWG7EjfUD5SIpNsUq3Ft5XJZScwVjbAHRn90Mei7mnxintBTSQiC9/cUB9a5bfn4nU7fGk26kmZ22020Ef3rUmooUlbZnx08QR+dBh7ECP0A+nlQI4P4vrR1ugeU+NPB+UEqLfnRX06fGhZtNNfp9a5hI6j40/V8JtLmAohWgvNEaE69I089SPpRVu+R+Io6kKRWSgC0K3D4UJalYSpEmil6PNFZqGpODUQ3KKbtGLUBNMLk8NRCaITR81EahaNIjEUk9sUqwFFcCmEpwTDEWfA0zuWR1A+TCpO9YBpDsCOpq/jyt4JUErDyi4V16L9KcNeH9iiWTSrP/cVuREaVmSNNpli0U7Eg/wANNEwJP32+Kin1+D0HxkfpSaFvwr/vP/2ahfG0ushPa4gIbeAjrPwFBcwvkPkf504QH/sQfzFcp8/mKeI21whqKZfu4G4I+BpRbY6T9f5U5KDfX51zsRsfnTgykC5NDPh+dKIvlSxc9RXKtLSnByTUDzpzg8RlJHRoEgSwiZ8JEUkBXUKSJvZSzX1IiekwNNvI0P7/AJRCjp4x9J3qJmlUxBkSAw6/i3mddDpptTtRTDGErjXkg9TBOk/WTEUumEVhLH5ZYH5HSkWbMoZe6SYI6j5Sek7daJdwrDvDvjbQ9PMVG4b7i0RxtsmOIwxB0/7/AF+lNWuHw+X9amsFhM0hky+ckeHiN67G8PVYMA+ZLHTzHT/tULsYfq8I9zwoSzcjcHXypW3f/silcSoO2kef6U3KE/3+dTRTaNgq8uPq3KXw9xfAk13bL4fr+dItbA/sUAtA71O7McDsqn0YpLBvSuhfBfkKSXDfxRRhZjr9DU0fUh5CpS4DvCAeXy0oWad0JHoIozA9RPnrRf3c7iR8v6VeGYwjZUHYrh4RWsKB3RE9AY+k1WeN2TJO/rFTmIcbHf8AvzqFfCPcdbdsks7QoJEfE9B5+FP7wKDYd1fP2d8Gf/MXDsWRAf8ALmJHwzD51rVQ3JnAhhrCWhqQJZvxOdWb0nbwAA6VM1CTa2I26W0qV7deIPa4XjriBi4w13Ll3BZCuYf5ZzT0Ar5wWcVbwlvQZ8QwDRBhQds3kPw6E7mBFfRz293XXheONsKz/u12AxyrBUhjJIEqssBOpAHWvmjg+Dn3n7xI1B1g+Z3NU8hzQfcdvhJ5Fbptwvjbm4+bvG7M7b6/9IBOmgj0Fap+zHw5HxjvLEWLbOv4c7MEBYDTu5mYear4VmF3hBW4Cs77CTr4ehFav+zNcNu/iUmDcsggAad24CR8m+lZPWJAcSQx86f/AH+yDpG6dlrvMmPgnIIG09fM+Hx/lVH4xY7oOurzPoP5nerBxLFFmJ0gTp00/OoHF4w543UQpB89SY+k+VcJ02ItFrFcSSSq57ULZODcx7rW28veyz/1b1beCcRNy1YYiS9pDr0MCY18ZFVz2qOBgyvW5ctoo9CXPloFj4ik+RL+bDWgGM23ZCdoE5h8g1dLLHqxAfuuz9Jylri0+VYeA3eyxzr0u20uj1AyN6mVBrHOZy+HxN8WyVi84Hge8SAy6g6HqK2HmW1luYO7P33tGOodcyzt1T5mqnzpw0visRlRWkqSYkklEIAkiG9Nd6lwpADqPlo/tstPr73Rxgg8H/dQfLvPgkLeHZt+KDk9T1XX1FaPwHjIMEka6Ag6es7GqgOXkv8Ady9i2XKRezSx00Vo1M+Ovr1icTypisEc1s5lJnLo6b6hlIBB6SADT5YYJr07H+yoYHX3MAEm6t/Defzaxl4XJKMezgycqiIMaaNrPQ1Seasai9oEgdrcFwKBoloMxUa6gsxmOgA8akLvHFcg3MMRfADA5h2bEdWBXMVjoCdtTTHG8BJUsYdtSSsEQ2oYxsBt4ACpowyOrTc7PD2loN2md7iPahAXjJ7vlJk/GrlwHm0CMrusQrRIzdDPTXzrLMCSJB0IP9itJ9nvHxZs3JtrcR2XtBAzqRMMJBBQzBBG8HTQ0zLxxpr+FjdhpO6mva3xOcOVygKWtlSIlhMgtHXcafGrny3x/wDdlLO0JAloJUArAU+PkKz7nXANbwnfZWDsjqNyiEyBMQPMCluceIZ+H3W+6Rb0H4wQPSKw3YjZY2ReNZ/4VwRUFofIvMHY2c3ZjVmui4o/GRlk7AaR5fKrjyAlrFWsRZvTnNwuCp2I1VgP4Wj5+dZjiONm1hreHRhcS5YR4IBNtwqltfHTYUXgeKe1iMyZixe2SIMMHUZl086zMnp9Oc4c8j9ltNAGHunw5TxOIYi8k2lZgr3u6o/yk+98Kr//AN3iO7C2zKVOWFSZ8SCsafKt15042iqFus+ZQCbGHOZdp77HQeBEeNU3lvmTOXULatd4RrlYiYKg7k/IeFRjOyWD2cLn2Eg01VNPZ9dsLqkjp1PymR6VDcT4IGIlRI3BFanc5tX95Li2GVUKw6mD/ED+I+J6VGcW4mt/M3YKJ6opUgePgfWtfFzXFtu5W7ivkIAc3+FSBwm2PurFMsVbtJrA9BvV0wvAi5IRCRGpOn18abHgUE6Kvr0+PhWi2cLVMNjZUFuZYIVAxYzAVTPkP6VduVOT7zW875czKSUb3lX0P3qe4Xhtu1DkJmOzjVhr08IE1YDgrbszfvURCsH0P6QvpvWVmTlztLB+SsLNgkv7Kp2+XcuGZy+uYySdIH3ene61FY/ly5iAvZZXa2huNmMBgNcvmekTU5xnhFiDmuPcXMCLSkAeGk6wfECahOYeNulyMN9mvZZG06fhnrr18fSoMfeQG91lSsYHClVl59QI6jD4dA2hCpBMeZMn51WcdxvDNE2h/odlj4HMBSacML3zcvqFtBjmUMAT5DX5mnvG7GBYwlhknYi4cx+Guu1deyFgFkn9lIMYVYU1y+bDZFJKofenKxEagnqQdifAnUVO4jmgWrouWMncHZsVHdObQnL0kAfECs/wvJF6Va0WGojOcmWYiZ336CtF4XySLbBbjBxdV100C3VAKzMaEyQ20Gs3KETd9VqlI0NNWrDyu2KxUKiF2KXCzjRVNxiWJfYZvix6Upxn2f3MMqC4RLKbjZczRk1IMgaAGZiJqe5d5lvWMPaw2Fsh8Q4e42WGUZmOWRtIXLJYgKN/CoXmfnDEWLgw5ftruX7dyq925dEFF6ZLanLGxJ6GKqvgjMRLOSqmm5FnXF+IqmIN3uns7ZyLOrEmF6b6yTVQ4biLl+89+80i2DOYHLOyIBt5x4Cn3POGUMHJ70DMOh32iI9DVawfFpYqYKkhssQNOvnWrhx1FY5qlquYAVYuX7wW4tsnuXWAPUe8ApIGxBmvS3E+OLh7Ru3IFu2sKswTBhQPMmFHhv0rzhY4dbO3d0LFgNd+7Gp08o0/I3OvNd/EhLNwjJb/AA6F3EqHYmZaD0gakxJqtJD3ZWlpquVXy8TuOCkOaeaLmKftLhBYiFA2VOip5KPPUyetVPCEhiDJBny/s09t8KdUQkbnx+nlFKHAMSI1JIgA6nWPnUwLW2FfaAxteApi5x8YfB3HtEDEuRbR479tIlyp6GO7I1JPlVZwHtAxptrZS4zMCSCFzXDMGM0EnX4+taHgeRrBQHFORGptowUDye75dQmsdaHF+0jC4QFMHYQlfvIMqn/M5HaP8xUuNMwt0Buo3/7usiedjnHQLVRwnKvEsWwuXrd47Ave0IUbAB4YgeCirYnsqspo2KKPEwUT8hcLeUb+VI4b2i8RuWHxRS1bsL3VYp/i3CY7O3JJdgJZiNFAMkEgG4ezzn7DXLT3MRbZr1sSSVNxTtAWSMpJJEGadkvkb8BVHseVVeBciX1lkbDuZgFxJ08FZconzn1p1xDF4uzIxGEw7rIEth7ZU66APbBj0kelWx/aHbuEL+6NYtsRN8OEZdvukKpiZyhiRTTmTnMYdsrFcTZZQQ6nMrTJAbvEBhEEHXr4VlPlkDqq1GITe6juI81YW0Llz93W5fUoFdu8ltVQdy3m17pkaAHzAqK5a45hsS8Nh1a650yIAZOndIOYNJ6z4+NKcG9l13E4c3BdW2brM9tCGKsuoBLASMx0EA6QetRHJWBbhd66+KXJeC9nhxmHeZ/+aCDGQLIzaGW8QYvNhtnJtXBiuBBPCml4ucBbOHyBy9wsWzGV1OVH1AJXLmKkQDrPSj4jiQu2rzKCItnNJnLckAmepPlVd4lxiw2LS0/2qju3b0nL2zySyjSbaExB318al+ZsWlqzeCMgz5LUAaDWS3lMVSmhqRtg2fKu2NbQFRlzFugABUKWOkCQ3WNdfWtl9m/s/AW3fxC9/KMlsiQo6M4PvOdwp0XrJ2zvkq7ZuPZnugXE7XeYSWJI1kHbSD0g1buYvahexF1bOFBtpcYDtGANw97KSNxb+reYmnZomk/px7fJTcp7z7WLTeNcUt2hmuOqDpmOp9BufgDVT43zo+WMMiFjOt85U9Qqyx+LLWL8cxJfE35JJzPlLkkZVMRJ1mBpqKa4/jb2YKEkltQR3YiYjXr1qrD0bSQeT9+FVOIWs1eVN843eIXDmvMbqgyEtNFsH/5aZfmRPnW+/sK2nufvl95heysoCNvedxMAn/l7zWBct82tfuW7Itlrl11toEO7OQoGvmfHSve/sx5SXBYZLIgt79xh9+4QMx9BAVf4VHWuj6bFIX+9gFcUljayfcFaKjuZ8QUsXXUSVtuwA3JCkgD4ipGmXHWYWrhRQzhHyKTlDNlOVZOgkwJO1dC3lWpP0lfP7hGFuZZJIG+wBk+ZP1qe4ZazHq0DXM8D6VBLhz1ZAZ2zsxnrtI361KYLB39QLhA82In0kV1UQ2XmeS63m1MX8Mv4ZMad4gfQmfzpi+MiQbaADqQ5I+J3+VOcLwctANy4SN5aAPnrHnFSDcOSyslpJOkkMNeozFfmQash1Kk5lqFw9tdxdgnoqs30CfSpS5gLZgt2rHxFuP8A3ACPOl2xKr/zmmNg1tR8Mg/rUbhMGrsWJLdO8xn8tqIcmllLkxCgwU0nZiBp/pKj50XEcaQe4ijyCif90mn2Mu4dRByEjTLp9SCajX44qaILKk9QpYgesfSkSE0BwTW1i01JsFmP3ixMfAiPrSuL4kABCR/DKx8Y1HppFFTii7k2z/8Ai3P6gH402fi4Hugkz922iD5nOfyoWAnCynS8XfdUQecFj83MUFrjN8nRj/tWPou1MF468+5PqTI9CIH0rhxxh0UHxLOSPkfzFN1BO0Ep1iL11tSzGD6D5CDTY33n3QY/Ev5yfzo2CxbMdYjxVCW/qfU1MJjLjAC3aP8AmcRP+kafU+dOsKPSQVCWOJMpJyIfEFRHpA1+tPk4vcIgKAPwqun16U6v4e4NXZFJ6BMx+gO3rTnCYR2GZWt+ElMuv+ofWiAgXEcKNu3nO9o/Nf5aUOHNxTKoBO0sTr6j8jTjHpAIOJVT1Cxr5Sk/Wo64EEF75byBdoHyGvxoEpzR9k4xrXzv9AQPjJFMjaj8E+AJJ/MiaUHEbQ91pO3fDfOSYFGfF9AwPqEj5jX4Ug4eEnMPlJOLh0kgeC6fkaUTAD7x/wCofWSKQ/dZEkW48maflJ/KnGH4XbiTEeGbX6gR8aQ5QLduU3uYhB1B+Z/p9aSs4lQc2UH1Jn4RpU3huxAMLb/1XCWPpC0yOUtqi6/hedPjIolNFBBhuKATGdSeuYkD6UqOL3ejz5sB+ZFBi/JBA/iJ+BC6U3uu3RQD/mP5TRQv4XDGXTuAfOY/WKPmbbMg9Sp+smmLM4+7PwrrZudEH+2maq+U/RfwpVcIIk3APQ6/INt6U1NhZ1Ln4gfnNRzo7HVAPQEfrT/DYI/wDyzR+tODtXhBzdPlc+UeY832+VNrmJH3YHwn6mn+Jwq+FufO5NHsogEEL/pYR8aVbpuoAWmeD4jlkZ4nwH6+FOrWLjXtD6aEfI/yot2wkwI9SQPypdeH2/xp8x/WaIsJpIPgpK7jUI1lvQwfiJP5Ulbx9v8ACfjr+UU+XhVsjRl8+8J+RNN/3RBManxIB/I086k22fdIDFA+6P8ApiPkTTdres5tfWnrXWH31jzSPhtRrV4Hc2z8GpvOxTrrcJg2MvD3ZEfH+Yrv+KXdmX6f2KmGCdHHoF/uabiG00nwIyj50NP3ThLtRamhxZ3JYeqA0VOMR0n1UU6bh67hip/hcfqa64FUd5gT5jMfpp9aW6JLPhN147420Pwg0ZeLk/cUDyEH5zR3vDTKEn/Lr8Z0oTfaNgPQAflRF/KDi2uE3ZkPRvgf6URrKeDx6ingvoN9T6k/yo13GWzsSv8ApP8AM0aHlAOPgFMxZQbKx9elPhhxEgx5HT5yaRtWCdmB9R/MUVsGepA+FOArwmuN8lGvYY/hDehpuvD/AABB8D/OhxVoDdj+f5UFjHgaFs48wf5001e6e3Vp9qQu27gPhSq4y4N2n/SDS1zjCHYH4GPprR1x1s+X+YfqKXt+U731u1M34gG96PgtKm4kaEH5ilbt+30I+O30pG5aO4AI8oNK0tj4ISi8TZRCr8Z/sUl/xhvvA/38KJ/xNl8B89KUTiRPVT5QR+n1oavunBm36V64vXHkFRKnedIHiIGvpSeDxjFnU22UKYDEqQ4garDT4iGANP7W2oE+VI4mzJBzERrpEHybxHy614JoPK+i7Qo2p0iPHSf50rbg+NFZvL+/Skr907wfh/fSpWj5TSUq+Gkzmb4HT5UezbIESTv70T9ANulN7Lz4inaDzqVoCaURx40C2h0AHoKM5oqpTtkEqJ8qNlHhSLp8aFTSQQjSaKWoXNIk+vyp1gJUhL12auy11NLk4NQK1Gz0GWuCVGSngICaEmgIpNqFoozmkWNGY0RjQtFAaKzUDGi5qFooxFEagmitcppKKBqJmoHekbj1JHG552Sc4Abo9x6KqmutLSzqK38eDS3lZs0tlIZDO5+kflSqrRezH9mlVq20Ks5EKeVAR5GlCKI1r1+BNOKbaKHHh9DQMx6Af38KH51yL5mkkhShJNEkzsfpRbwH9/0pFycGozzXB6R7TxMfOuVx0NRlyeGpV2NHVqTRTQwaFp2lHAp5wm+qGCpLMYB3naB4LHnTDPQ9tOlFr6Ka5lhWjitsMAQAT1keXXwioLE3TO/3tABp8Y/WuwuLKkETAnuydZ/7bU8w1/OTCgAbkwWJMbD9akkAeNiq7QWeE2xODO8A+amfjGtRuOwhPeHy3/v0ipLEId4kzvqNPMr+VR7WCPu9d4Yf3FUpDRqlYZv5TO22+pHy0oC09Y+FOSVmO9M6yOvqenxowtx032PWPhRaRSY9hTeD4zS1smPHyajZKEqPGrDI2XdqpJqSJuHyHl4/nRccQdZg+X8iacXFHhJ+FI3V01PyirEcOnyqUjrUNjyR/F/flT72RYTNjVJA7iO/nMBP/qqM4q4Ggkeek1aPYDhJvX7mvdRUGv4mJP8A7RUwvUo2MC2Ourq6p1YWRftg8Z7Hg2K0BNzs7IBn79xZ2/hDGvEvCmz5SoJDAECNfP5V6L//AIi3H8mGwVgHW5fe6R5WUy/ne+ledvZJzHL9iQoz+6YjLoSUJkaE7efrWV1KMubqHhVcppLbCnsRwUoVuCAwkEHUGRsdPhFNOC/YYi1ebuqrgO2wKXO423kx+VaXxbBSoXTUiI6+ZrNfbABbtLbHvO2Y+IVOvoWP/SawISZXaL2Ox/CzYnOe7SrvxbHEPBG0/IH6SetRXDsUWeepOvqad4q4HVH6XLdtiT/EgYk9ABrJNUzmDihcNYsbNo92CJHVbekwdi5jNsNCSaWHi27TwAdyjo3opfnHin7zcyWouW8PI0ElnaM9xdpVYVVPWCfvU29kWMk4m3MRluqI2ykqfzX+xVg9mnKAtuGRnOweywjPJGqMANQQDr5+NM/aDjrGD4kOyXutZC31SZD3BOg072ivGnXxroHsa+IxM+Nl1PSnxRubI08bFXrmOwThg53tvZuCNoDBSTG2jGar3MXMq4fGsroLlm5atMZ1KOAFz29pPd2/KqviebZzL2zZHGqZDOX8OpgE7zMCiKpxrSy5WVAqHxyye9A1LEn0+FZUUHaH9Tj/AMrR67nwSw6Qd1K+0Dm7tLeW2JVmEMBlKxqN/veYj+Vg5P4y5tKb/flRF0HM4nTLdXrsdd6p3I/Drd7E2bN8sqPcCOVIBA266b6GtY9onLuHw9oG2RaYGFCwVcD8XXNp001qOfS2PQ3nm1ybAHMoBVnm3mOxbv8AYnC2SCgh2Ah82xEAxPjMjWoDBcStWWurbt5O1t5cpOdQfKeh8D8xFTWN4cMXbgEC4mtttDrGts+R6Tsar+J5WvpbR2TXVYkM8g9QCSsU2KUOYLNHghSxx7UFS+ZsMcoyg6nUgbHzI3pPBi5bjMpB0HkfI6fSrTgCHJUyD1APUdahua8NeOVQxYAk6mDpv5+FaMM+v+k5Wo5L9pUhjMU2I7Kwpk3bqjKTCqTpE7D16CrPxwIrNYa1lScjZmchyNAU2BVTrpvArNrfEdFy6EE6nXvERI9PGtc4ZzgcPZsWTlvvM3O2h1SR3QumZYG+u4qHIhDWgDxf8/Ks6DSZ8L4McO6vcZezJdiAdcg3hdw0aelWi/7WrdvKLFlIzd1j3W8IGpOnmYprx3AjEq+IsKfs1ysrtMZ5kp+JI08RtrVC49wYvcRFGYrZB7uiyB78+m5PhVEY7ZXapD4U7o3zR1ew8LRF5zu4m6LaQhb3okkxqSSZJ08PCKrHNdpmxA3OXKBlkd7zHiOtQXD75w4UJci62jPIyhT3RqddT1q7cO4RdsXM9xUZXUrnS7mBYic0rrI3/s1AcLskuYNqSjwjYpX7DXBc7MXH7N1CggiFuKB0JGu29WrFYqwFMKPARH6VkGIbJk73bKXgM2qhY3B1jzFTdviXZqF9Mp039fCq+LGWmqW9hPNlrgrJfwSEgguMv3VaAdZ70RPxpvieHodSuY/xEmq5j+N3Rs0dNFmD41CcSuYhoy32neNAD5eNaDYSfK0HSAcBTfGCUl5S2oBAG7yNtPOoTjmJtPZRJudozTcuEBAdI3ESnT4VB8QBYHtLu07Ekz1MT1qA4nx1QoEklRlVYOmnvR4b0XYzifasbNDncLQMBylZtHM73LmgYFSAI0OupMaUljOZs0qLaBllRlADBY+96D86o54q7EWsMTcuEd54IHSBB0EHx09ak8D7LMXPaXLqIWB3uDvE/CI+dNZ0wu90rt/CyPoy42q1x7hmHmIe4zMZOYAKZ8qk+VeE2LP2sDOPda4HKoAT/h9GY+J26VeuFYx7Nk2WwS3Llvuq9sKVdjJlswJM9CIqj8AxN1sxxX2WHtkhiF+0MkxbtK3XxMQtazdTmaQf7qafFGjSSpQ3g8srB9z75nTeQ2tGwuHZWW7dfsEZM9sNmJvAOFIUASo37zRsYmo/Gc32GZEs27dpUYMHUDtzl177mQx2lRAMVXeOc83LphlDrmaGKQe+3eKmdJ8NAOnjVNmA6z/ysV2EWPsbhX/lnnE4RMRbsXE7S6+VWM91UnIynqSWMBhAIBPSqdwfEsLy9oWzMSHYkmSTvPUk9Z13ptwTlS7eDvbuWlCnJldspYgTpKldupI1prgMPcLhGbvqdj93XXXXb5VN2Gtad08t942U/hOEYy7fc4NS7W1UORkyjNpDG53SW1gHeDpQ8S5bvrm/fcA6jrfw1sB1B6kW81lx4hghP4qjOXsUz4lVF42M99EZ1ZkgExIiNR0nQV6g5h4scJZ7QM15bXZi4l5vtnU6NcF0DTKYkMCseFWGPMTQKSy3lrl5cwHBmssSri7aZSLdwSBI1yurapcUboZ8iw1rrrd9dBpJM7Ejf8q9BP8AuPE0OTuXDuBC3R6wMtyOh108J1z5PZgFvEX76pZSCSoJuOrHQW0jRjsSxIXzqk/JYZPcQFWZmf8Ad4THkHl69jD2dlQQBLOzRbTNoC7HYnoBLGNAYNJYngnZXLii4ri33WvKCqmNGFudTroDu2+lXTmvnRMNgzYwAyWsxTP9+6wE3Tm32hS+jNMLlXSovkPgq4q2Lt9nSyDBVYUt3dWBg5UU/e1J+E0g0Ee3+VDnTyOaK2BVFxUuGBmCrACdRodaf+wjlnDi3dxuMAa3ZYItt9VLEAyVPvtqoVNpJJGlWvFcGssReydnhbakWkXMb2LZW9592VXIAECSo0AGtQA4IDZCuGUXHN9LFvM2Xo2YEdwnYTOVQOpqSKTtNLflVoHta0glWTiPtGwl3S5hRdW0SuHtOQLSqVOyqIa4TB1BAOkUn7Q3EWjYNsA4ZXXs7aqA76hFiO8AMsnUEHQa1nPDuDz3CSmZi2obMgWdcvXToKfYnhbrkGY3lzEoUuSMsSxMaoZM6jx31qBzATYP8q8w64/wqjjnuYnS47tcB0zNIPSADsfSkOF33sMwIOT/AJltgYPqOh3hhtWh47ljKV1ztIuHvL2ZB1ykjK6t5+PhVLxd2/iLzJkzMAQR+ELuWY9ANydK0IZtftFUi1ocLC3X2dc52lwL4q48m0ot2kgAWlt5YAEx2l3MImY38aw3nXij4x/3iSzhgtxSfcEkoV6ZFByz5Sd6d8D4Fe/d3tZD3rqsAT3QqKczawCGldesUwxfKuIsknI4B6jQlTvAEmCPHQ1K17GmgQpMjK4bavHKlu1YzsxzPl0dQhYncwZOVZ+PielSmEW5jOztLbt2bYDXHcEMY2LNKnvkHKo0E+lZMyvhbkgtlbKRm2IJBysNpGxreeUFWy9uWOXGYeVzaDPIuKqQJ2JUTuYjeqczS0g3YPlVWxPdbwVH4vk6yASnaW3UqyurS2ZdMxVgVPwA+GtU/hPDuwxtsNBIW4+YAjtIW4wJX7pBEEDTTStSxWNUZiWAGvvdPjWYYni4vY60qd4DOk66s6MCQdyNRUUcjnWPFFDHe8uoqC4XgnvMyoud2DPA89SSdhEbmozj/BmCozCBqJ1IIBIYz69djXprkzkZMJYy3D2Qde8xGa5cc9FtjvkLMKugnU1H8xcPw9qO0CooQKofI1+AZ2kpYH8Ky+8t0pzMijY4VyRzjzsFRf2Q+WmucWsXTaPZWkuuGKnKGCFVOY6Ey8iK95150/Zi4hbvYu+Uki1ZAnXL33Eanc9w+Fei66TBcXR2nR8Iaqnte4h2XD8W85SLFwAnSGZSq7dZIjzirXWKfth8wC1w8WidcReRI37qfasfmij/AFVoxC3gKLKfpicfsvMeDS2B3nZz4KCBHqYH0qWtYq2NjcHoOnrm+tQHDeNIgHcDnwK5QPiDNTOA5lPTD258e98t5rqY3AbLzOdpJso4TMD3bpHiz6flE+hqPvgdJHwn6mphOYBu9sEdFOaJ+YEUS7zP+CzbA/yyf5x8anJVQD7quvhi3u6ees/lT3DcIfYu3pmG3+6pBMbcOoQEnwLfoYA8qXtJdglwgHgVQsfTM0/Gm6BypA81VqJ/4XEzkAHViJ+hNKYPCWvxr6TH5jb61KX8a8QoRR5uGPwC6D4zR+HYUHRgGJ6wsfA9fTejSHOyJd4daOmk/wAJX+ZpVeXVic0A9JX+dOsUqKBlBE6HIoBHjvqfpHWoziDKxGVrhbzBPp3p+oWnWCo3NIT7GYK2inNHx6/EHX4A1BC/ZBmFPlmP5ZIp0OCXTrln1k/nApxgOAanMFj0E/AZvrSNpNTP/jw6W1A/zEfCIA+lN8ZzCzCBC+hn5CIH961YsZwW2AM5CjyIj4yYmoW/isKp7sv/AKYHw1WoyfupQPso39/c6Tdb4wPgNaPhbVxt0Yjx1kfE6VJ8P4yi6wI6Ajb0iSD50fG8w5hCtlG+iFj8zQ48oHccJLE8NuAA5ztrMEAfCfypoCNi8+lv9SBR8Nxi7M5h6suv9+VP7OMun7y6+FsH592nDdRmhyoy/wBkP4j5afmo+lEUt9xQJ89fiBA+dWG1bie0NmZ3nK3y6fIUwxuITYG3H/zD89qOyO/jdNO0ZT77ho1yhYA8yDApdrRYDvvcI6doun50Y4a2w0Kt5Zso+He1+VMbuDE7FfQZh8+tCktfhO8Rgn2Fr/rmflUXdtXJ7wI+f0pe3cK+Men5afrSl7jQIiG066/lP60j90hfgILdlhBm4fr+tK3Mew3JA/8Alr/Zps1zNsYnzj8zSuCwbfiaPUfqaP2Cb93JS9xTTurJ8coE/nr8KaPjnbe3P+7X608Fo9GE+Y/WKPba7128TmHyIinEFNa4fCTwJYbIB5wTHxJpa5budBmn0H/tpu+Enw+PammrYE+nwP60t0DV8p42HI95R6KCT8eg/Omz30G6v9P5CkHwLD78fP8AlQCw34wf79KaSVIGt+UsmIsncMPqKUa1Z/FPkJ/P+lIGx4waXs4Eb5fqRSAcgXNHynlnA2yO6hb/AFj/AL0S6kbWiPr+Yo9pVHgp8SH09P8AtTFr0H/G+rfyp5ICY0FxSd+545l9UBFKWLI6EH4EfypymLPSG9G/SZoy8TK7pHnH/ag2rRcXVQCbXLRpM2z4SPI0u+Ok6gHyI/Ua0ot211UD0b+dE0U0WPCadivhr6/1o9u6w+6SPIz/ADp3bu2iYXM3xAA+NL3sEhHvwfUH8qPjZDUb9wUaMcfEL6pH1ANOrDsd+zb5/pFdawZn/lv5kx/Khu4VjpAUeTj+dAWnOLTwim7H/LJPkWA+WtAOKFf+V8Y1/LWkLnCXGob5H+VHs5l3dj5TS3JRGgfdD/xO4doHlEGkXuXes/WnNvievuknzA/pSjYq6BItSPhP5fpTr+6VHigiWUBHu/Mf1ptd4Wp1GnoR+U0hicdm0YH4sdKTFxPAfAmfqaaXApzWOCUucEB6gH1rrPCH/ECPDf6UjJ+6xA8CJpa1fcffHpBH6UKb8KUmSuU5/wCFoPeA9RNdktJqDPx1+VM7uKJ3mhtovh8yadt4UdOr3Ep0+PB8R8j+dEWxP3zH+WuNwj/lJH9+dA2KHXu+mv60PylVfp/8r2H242/SuuN5UyGTMQWDMBMHUgfP60yxnMttCATuVXcGM0xmEyo03Ogrwbu1yvo3RfCmrN0ESCCPIyPhFDvtFEwl1Y7sR0iI+EaUoyDeNR1/lUzSSEwhJ3nIUkKWIGiiASfAFiAPUkUW67BlASVIMtI7rCIBGhg66idvOni0V38pp2n7ptplxHh4uo1u4sqwggMykj1UhgfQilsGkDLlKhe6smZUCAZkn/drShu+X60VDPWhqpGkm4M70qgPjRew1nMY0hdABE66CTM6yY0G1KlaNlKkTLRWahNuhmhqRpIs3lQx8KO0+FdeOtAlIIjCil640Q0kUfPSbNXGaJ8KSSEtRTND866aCKTc0QmjvTe7NIIozuKTLUmZ8qCjQRFol0UmoNGuGgStDFaVBMQjoT5UdW8vyrk+NHzVrNGyoOpAFHhRxRFYeI+dGIqQFMIQGfL60AB8vkf50Y11FNSTL/YNFtgzufpRmFcDRpJHC0ST5fWhz+VDFGglugu26KiCjRR1oUiCUXJRgtcSaENTSE4ORGWitbH970qNaKynpr/fjTCE8FJZv7NGA8vlXH4ijr8PyqHccKXY8pfAYo21hRpJIGuhPmfhS/D77OTAOZd/D08DM9KZpHn+Yol+D991PihyneddIPxpweb3UbogeFP3MKraFVmNZj49N5qMxPB8uqgwdhIB18DPSm9nFXEiPtQA25ysfATqpj4VK8A4r2qk3EyEEjK0EyIk6dNdKmtkm1KsWvj3UMARIkkD8UT6aHWuW8D4RUxjLUaiDOomIE/y9P5VE3cMfwofTQx4b71VeXMNKUAPFpsQJ0bXzBpF7vjr02p7ibZGwHnHh4GP6UzvMfwqKkZK75UL4WlQnFjodPpV3/Z5w3cxD/iuKv8AtWT/AO+qHxm/of0mtQ9hDr+6QCC3aOzqDJWTCyNxKqCKvwP1Km+PSr/XGurjVtRrwR//ABCuPC5xKxYH/wCD4aT/AJ7zliP9ip8688cBxcXADoG7unSdj8Gg1s/t5w9vF8Uxt4jN9sbYOYju2YtLA06JVOv+zxHWbblG6ZzKehaAV9e9VJ2TGbaVAZ2XRVus+0RlQLdTNdbKFIaBIOUhpkg+JB3qjc38fa+5ZvekKIGkDQKPL8ySadWuWbt0IDkQg952cEFhoYy5iQQAZAjenXG+U2tWS4YXMkF4VgZJ94TuoHX6b1lxRQxusc2pGdhh25K0rkTDfvVsLpksWLS5GIDOzKQXK/eVG0XoPMxUdf5dhzl6NHh6eXxqh8rcfu2Qjo+VrbRI1lR3gCOqnUfHx1rdeVcRaxVtb9nbXtEnvJc3KsPqp+8PjFHIiex1jhUsqAs3ChuH4C4kEMxjSDBAPyMRt/3rMPbBy52eKW5rlvnOSelxdLignoCQw8A4HSvRHZgz91soI2yvG4OvvHy86yH9pLHqLWFA0Oe8w1kgRaBGoB3/ACqfELhIAPKZhOIkrws7tYeDH4hI9DBFW3l3E9nA8DVT5UuG8bcKe4GB6zl7w9Jnap/mBltKwP8AiEHKnUD8beAHQdTTMuMvf2ylkNJfQQ8vYzNjUI/9YER5PP6Vf/a/gu+twXXRnDFrZ7wBB0ywToQNdBBqj+zLl65kfEi2zBFYWwN2YCWOo1AG5GutOOF8ZtX7hF0XMO7SGuLNy2NdA6sMyifvKTVaWI932cNG6uYTNLtR4CjeA3roZmLdkmaTBIJg9B5VfOGcXW8Ht9rkZyrKx2JGx8QfOq3iOWGtxnabLsIur3kKz001IHeKnKdOtS/MnKDYG6jXGW6lxS1m6o7lwDpHRgYMbQQZNRTsbLbm8j4Wt3IHbDldguWMxvZrnY3LZBGZRlefvA+A8BOhmqPz7xs22FpktNP/AD7bTm6Eg+cbHXyq+cM4/auNlvlrdtWCtMOoaCAY97KdZg/HSnnEvZILqO2Dv2L6lg3ZlhIkfdJLDbbNlNWMGQA/1WqFtWbCxluJLIgjwA8PP1q0QcgMCIB/zEnSaJxrkZ8HAxFi4ELAm6FnL4gESh6HXenGGw5Cl7ysbTqxsXPuEqdJEiG3BUkEedXptLh7VaimBNKw4HmV17y2iCI2zRO3uxEfCrLy5xFrtgFQna2iyuoUAsoBKzPh+QrM8DzyS05P4feIMRG3gKn8BfbD4kFbwftkz93UZh0bQCfzmsvKwSGEjkbqSWQ9vb+yacX5VOJtXMXcvlHGfLZVcwhddhEDXQwRTOzh71vCWjb7RiTmfuEm2hmGUjYHeR1q2YznhMMhXsWa7dzSw/w3UkqVlgSR5LpSHKPN3YYkC4jm26C3cXVUSeikQMoB21kTViGSVzBqbt4/CmgLXC9wUbkHjS3sOtozmTTeMzTo3nAME+HpV/u8vXLIBdDlIEEd8T6jSadc98g2uyF3h6W52OWWJzagpGzDqNjVTwX7/b7ruwUasCrCR1ABEEj4VVnLQSQr0MhZStfD7jagr8fKo7jHAEgELr6/U1K4O67DOqMVA1YAx570bDOrEg553OkR5VAH/C1w1rgqsvLzd8nKB92BJEeED3f1iq8nLzLc7VEuM5BnOIUnaI6z5R1rUL/dII6jyinmEuAzIG3XXXx8qlbO4KN2O1yyDGcOvDKFt5TI7qghSOoJiZ9DRLeFxblgFLZQSol4SPPYVovFMeBvGmwn61WMdzE2GzXDfcOwyizZyMoGhDO0kDzAHlOtTNlcRwqs0bGeVA8ocUvLeUAo75iSrEssQZEGdT086jubuKpjGzXLIVpyg2jA8JZdi0RqauHA+dsJhb6XB2l1pi4y5cgzZc0AAGRqN/6m5ux2Dv4v7MkWjlLlAqrmIM5Q0AagSBrMxThM5p1EbLKe9t2VQm5TtJroNJDEgk/pSmLItWNAhLEoqrqxmO9AGp31rcOUuT8GA3ZP+8JcADWGNu7H8ds910cddDO1MedOS1S6hsILS5TJCh2BWTlQsxy59iu486rnq8WrS4lQfWR7iq+6xS1xXsu1tkMUcq2mkHId/nrttU5yZibWGRb13DjEXLhGRbhyqFJMd2ILsdczSAo2qX5Z5VW9eIut2aKqM4I1IBiIMeOvWKV47wFr+VVyWrVssbl52yWrQBhAx6tAgIssegppzGPeGD9/wsyV1vDU14P/AMHxYYuj4Jw8EhiUBMgEO2dNf4kTyMVrNtCloC45xNoIUN9QGZk+72iLmBGXQuhI6mKwfG2sDbRrVpbmJuMDmuPmtWi0+8ttZdo6Fm26dKZcuc53cKAbRIXZkaSjN1lDrHTMINaBBePbf7qHLxtQ2P8AKs/MfL7YJ/3jDsWsMRBG6jcBj9FcQehg73PlHm4Yg9leCs3duW7jxDIFJKXOmsb7EjXeqrx/nq3dw9xkC2rpXK9iC1pw0S6HYETJEAxr0mqJy8uIukdjOcxCrPu6oZP3Fg6zoBVWfCEp1HYjyocXpUk0TnuNUtb505cwt5cxTsjKsvYiFYMwD5l28s6wRVmwOFQqyE5UCyFGggaBdNxHhrFQ3AvZtikstba9ZMKMidpcPZvMkq+SIJ6beBqwcG5cuqy2riFWyqzEkZcoHeKsJBXzB0mkdbNnHZYs+snTd0j8P4a114QHYwfCdDJ2UAaelBhOChGKgiWhcwgkiTtHQ+e+9V7mvjzYpzgsJeFvDqftrobI1zKVBC6T2cnKqjVzqYUas/aZzG6W+ySQboy5pUOq7IqyykG5EZtIX1FPGkuA8qQYRBa08lQftusx2fYojC2CHcEScxjYHVU1lyIzHp0zHlfD3C2dDEGcxJ08gddpovGeYXMWoFhPcYJILRuXZiSROu8TJ0pjiOINaJazcLpoGBIkHxIU7GPeBFXhA7TQpassbWgMjWp8P5tQhnxCrdMBTctKocCNe1txlYfxrTnhuLwa5vs7t12ywQVBuF/dE22EqBEgjQzJ1isx5Mwly+7CypN4d4AGO6B39doGggjWYq98MwVywvbFSy3VIv2M6rlRwWDWzMkErsBKmRVYxCM7lLFa3Xpcr7yu+EuG5cdWS1b+zti+65TdABedFByhRCxERpUfzLxpL2e1ZYMmhe4AFz/hW1IkrI1bTaPWI4/wgNglRotw6XWLKSAzE5gQNdmAqh4Pme7hnZOzlSVBkkgqk5MralevU/SqELfqGOMZ3BKZJiiW3NTnjXDFMhhIkaHx8fGpr2mYxWGHNqTkQAKNAk+6AfFYHp6RSA4pbxFvtFgMTDoTqp6eoPQ9aufB/YxicQBcvkYW2wgIys14g6yLIIy+EuynwWpscSatL/CHTSWFwcspwXFe0YzoRKw7HK0AyRvrNa17N8VZw1hbiGw2MuoX7VhK4KyDlJj719xrA191dplfiXsu4bw212+Ka9dOb7O2zZc7H7q27eUyRrLXIEa+FZTzXzEtyGs2RYtNlHZqSwAJIGYtu53kaeFWZorNRrRaGmywfutJ5p9pZ1FlmJ+9fdh21w9STJ7NT0RahcBx7BiGxGID3iJy3A+RZ8JWGPmTFZ3xrELnCqsZQCQSADEyW6E1EczYHtblsSc+UDKO9uTAEayKOPiN1e9QSY7QLcV7f/ZTxtm6uKuWXV1DWkldhAdo2HRgYrcawP8AYc4F+78NcNo9zE3HIO4AS2igj4T13rfK6fHa0RgN4SbVbLjXln9tzjS9rhLH4VuXmA/jIRP/AGP1r1NXiX9o3jiXOKYie8LZS0Ib8CDMPLvlprSw23Iszq8miA/dUHA4leiE+WUfnNSuCxLEwLQPwb9KJgeNquyqPOWJHy/KpKxx5TA77HwUBAfInUn5V0UZXASgFOsA6/fCr0H2TMfgdjTg8Kn3B8WUKD8C1NcbxG6Iy2ivh3ix+UiKZtmb/FdEn7oAZz6iSR8TU2pVTGFLrwRAM168D0Co0x8Bv8AB50WxwZG7ysQPOA0eMHX60xt2+lsAnx8P8x2+setExVthvfWfwgwPppHrR4TNQPhSGN4MRojax0yGR8Dqag7vDLomTdPl3v1NOrdvEH3bogdFcT+c0j++4pPvv8SD+c0wlStr5TKxhXJgWSfM5vr0qUGEZN8ieQyn4EsSfpURjeNX20Lt8NPyioy0uusk+dRh9FSFmoKcxnFGOhuSB91dB6zAHxop4/eIyqxUeRM/PU0Sxhh1CL5sxP0EmpTD4mzb1bvf/i8o+EkE06z5TBzsoq3hi2rszfAn6nSlLQtD7pPqe98IFKY3mFW0RTE9f/s6j5zSNzK+7EH/ACD/AOmDRBHhBwcD7kF50/C49dv502uYxx7n0nSpLB8GzaBj6kGPqYFPrnLURqp8wR+cn8qRBKQLeQoBeIX/AO1B/SlbhvsO85jwmPppUxiMGE3YKfgP1J+lRuOFvftFnykn6f0ppaByUg4nhv8AZES08RkkeJn8+lKW8JbHvAE+RJ/L+dK4bGIdFFxvWAP1o13FuNlCjqP5kmpBSidquuEW61rSLbt8Avw6mi28WAe7ZYep/kARSV7Ek6ZgP8kAfPSke1C6zJ8pP10FNJUg4qk/GLO/ZgeYJn4+8PnRjaze9nHUe7B/9tMP3jNH2eg6jQ/qKLc4eG3dh5HX6g/pSs+EKHnZLYnhC+IA8dT+XWkbPA2bVGUj5fQihGBj/mGPX+tL23Vf+YT6MZ/KlV8hEPI4N/siPhLw0z6DwOg+VObWCu6faD/dTX97Y6AOR/flSyhQJdnHgMyk/LpSsIHV5pOLWJcbuCPNc31iu/fidCTHkix8yaRXilsaSY8CDPrvH1pxhMYhEhS3+Zfy71PDx4KiLHeQhXEWhuBPiY+oBoDiV/Fp4AKPnuaJexdv8JHrbEfRqs/KHJeIxAzJbRbZ2e6vZqR/CPeb1VSPOmOmDeSpYsR8hprSVWP3jwAPrcA+mn0po7Xfu6eh/Wa07iXspxKqWVLF0x7qOVPwDBAfnVFxvCLoJU4W6CDBAD//AGdfmaY3IY/gqZ+BNF+phUDct3upn402ODY7rH0qZu4TKYa1dTxB3+RAo64dTsSP8w/rTw0FROlLPCh04UfxKPVhS64dxs6n0YU/xHD/ACVvQ02XAKdwV/Kjo+EO9Y3/ANkexfbYx65R+dGbBA7/AKVx4enifhrSFzhy9HPyNPogKK2k2DX7Jb/hdvrmHn0+sUb/AIei+6ST4ZgKadmB0Y+oj+dOLWIUdI9RP60BSc7X8kpvir9wbLHnqf6Ulb4leHvAFfAqPzAp9d42oHuk+mn86brxiToF9CIppq+VKwOrdgSlnmMDo0/5jFK/8dV98ynxG3x0mmrXVbdF+Bikb2DG6AHynWjbvlDRHxVKSuXGHuuWHgYYfn+lNWxhn8J/1Cmdm6RuAPmKkbeKQjU/Mhh9RNEOtJzK8Wk8ob3o9QRRTwlDs/0P504/f7W2QeoJH60W6i7p8iYP5mjseUzU4cWEmvCo+9+UfMmnK2ht3D8df0pmce+2WB/fjTu3eU7gA+S05pHhNdr/ANSJcOXYSPL+zSQxM/dYfART5LJic6keY1pA2wTqQfLX9Yom0AR5TPEYi50kjyrsIHbdJ9dKfLaA+78ZNDdc9APTMf1punyU4SCqA/desOGq4ADkOY98LlnXqNdY8NKc/uaSWyrJEE5RJHgTGtQQ4a7NFxg9qCSCpVpmVhlIkAdIqdsIqgAaADQT4bb6/OvBYTtuvo54XWcOoEBQANgAAPgBSoPlTTFXXI+zKgzqXDMI6wAVM+pinVhTAzEE9YECfQk/nVhrh4CYQfKT7QzuPTrShsjNmkjSCJ0I6SP1EGk2QT+tBZvA7HyjwjoaVi0KSzWxRDRjRTTkkX95NHW940Qk1xbypJISBRs1N2UeNFDHxptohOblz1pp+8UslyguLTTacECvXMa4RXGKBRCITRS9HIpNjQtGlxuUm90ChMURhRSST3/KkmuDwNK3HohFJFEz0R2o70QVPFFqKa51JMTSipQqwo6kVrwgNCpSElAAaET5UINDVm1DSJNcGoStJlDTDIR4RDAjq1DmFJ9n/c0YWRUjXu+EC1qEkUkLmtHa3/elAtvzNSBx+FGQAlFauJottPOuK060KCENRlpIUcNStKkdaEUnR1pupHSuihQUKijRTdaIak3Wd6IbI3GnpS5olMNFSC0kARQM59acAUV0mmEJ4KSVx6Ua3IzZGyltyApnz1G/T0oRYHjRgpHnTQSESAVF8S4riLbZ1QOIAYAxmA36TJ8jQ8N51FxytxezJAENEA6DfSZ2/wC9SDN/ZqP4jwq3c0ZQfP8AlGoqJ7neCnCNtcKfuMJEgIDH3umu46elMuKuCIlZnpoAAN58PLaoPFYRwyRccZYXvHMuUfd+Om59d6LeRgNQCTMMuhy+ckRHlNV35D2HYbJvYafKiuYlIGh+Jirz+zjw5gl+6dFuMqp55M0keUtHqDWXcx4sqIkkR6n4RXpPkvh/ZYazbiMttZ/zES3/AFEmtPpz+5uqGY3RspioXnrjowuFxGJIBFizcu5SYzFELBZ6ZiI+NTVY9+2LxcW+D4lJAfEG3Ytg/eZ3UsB6W1dj5Ka1nGgs+14m5W4jjMZiGyFVzO1y4+QMFzHMZJBJMzlWdfISRq3D+WbZAMLdy73bmtseMD3Wb/KAoPU1C+zHhqi0AZW0SAtpffxD9Wc6EI3htG5jfWGZbYLXjbXIoypsluBqVH/MYDqAQPugbnAlc1xvgLMlPcdTQoLA8Kt6KFLwJJZQijw0GpB6A/1qq8+cQwWHkXGAuH/l2wS46wybKD0zET4UXmT2mBlv28LnlULNeuDUtOWbSRII3zuZA2UGsV4tgOrEln7xYmSX1bc7zIprImF1FSRY1/qUnzlisKdbKXFLgMuwU6wSVEmd+6pAFN+R+M4jBXluqpKEgNbnu3LZ6NG0zKsYIOo61XOJJ3QR0JI8p3U+HiPI1EY3GPoCzQAIEmK04oAW6f8AdXg0adJXrvDczWrihljIw90EllYyQHA9xh4xB3rJP2kcUzX8PbZYyWQd51uOxn4qq1ReVeNPYuLetkkysr93fvIw6qdo86sHtP5mR+IdsiArb7NVS6AR3UX3hAB7xJFUYMZ0U3yKKjhxQx5cE35UuNhLdy4wYXCyC2GVgNQe8ZHu7eZIFOMDggxa/iA7O+YIhBUOYOW4WP3AYAAGsRsCKdcC50dnAuBchYTCjTw0JjKD0+UTU7xzGvce2pymWDKZJGUEjqTA6xUE8z2vNtonz9kA8tfRap3hV/FW7Nm3ZtrcCpmcF7bsHdpICZlI6dDSOL4/etkrfsMoI1BVQD8WQD5GauPJ/JWEvYe5fvC41/vElXCMpmUKp3QwIiSZPhTHC48kMELqVkFGYOCV0MhjJJ8Nd9JrMkLb4/NKKfZ2wUTy5zrh3i0wu20kHKgBBIO4QAww30EH41oXEOBC9aZRmu27TZltxku2iRMi0RDIZ6D4VmGB4hcW4ciJbct7wtoG31kx3R46aVMcxcq4m2WxKYlbl4CWt9qc4G/2bDKCCIUKFj1pzGMdYbsmwxMeeaSZ5btZmYWwRGsbx4kHbzHwqq86cj3Qwv4POucwVDBAmnvKwI0kHQ0/5B4jduXuzNwnPmZy5gWhOrM25A6gbyK0y5yThsSOyu4pkK5f8NUVWaZDDM2Zh8VkeFRYrZ4J/c62/dWMbEnMmxtqxbl72icTw2l7PetqQCt5WYEHoHInUeJI8jWs8H5hwt9FZ7S2QwnKAmXvddtjqNvWqxzXydewjKmIum9buliirLK2WQgYHMUIJkg5h4GJiU5K4XZvYViAQbRPa2zlBOksQwjuzplHmKk6sGPbqZt92qz1CERtBHKcYzkjAXpC9isg9+00MOuw0nyIrMV5JuWbrXVdLyISIRvtInQm2dVA3kSBFW3F8wW7CnKqIP4V1J6SfHTrVaxvHVv3PvWsSoi26iSxH3HCnvZpgGCag6c6cBwJJafJ3VXFmkB+ydWbpxDKLly3bt25RNJbLObQAGST1HwmnvPvEFt2LSi1bZWcQ6lmIVT7zKQsOdd9SKlOGezqzhrQv8UxPZTJFhGAefAmCSx/AimOrAyKHkzhuBxlxhYt3LVpIIu3L5LtqB3bZBWRqYJOhFaAOnerA/j+VtwOe91BNeC8x3rEkK+o+zUBgCd1J10NT3B/anfuKRcsm5Jg5kkCdJHWfnVlxHK5VDkIxKIAFbQ3UiSCUkSviR8qrvCOP3MxS5ZlgdGRd0GmYEajbw18qo7PBsLVijvYlPOA8c7FQrZgp1WTpBOisNBI1qxLxqwegkj5/LrTN+VrJIN64bYYZwEm4fJYiAfnUhwrhGDuZlsvcFwABQ6gqxPgU2PrrO9VgGt2WgyQsGkqNbiy69xwJics/SelLXFVhIMCCPA/KluE8u3rjFbVsk7MxYhVPmTpPlvUxiPZncyg3bqrG4toX+py61ZEZI1BPdkMaaJVWxeFtNAdgARvqSfKBvTrl72bYXEzkvS2gINnqeplpidP5VVPbFgktra7O61xlc5lKxlUgEEldBqIjcVVOTuO4jPltLczMwPdzk6HfQQPU6VKwOa3UqM0oe6grZzfyA1l3sMlu4sh5PdWDsyMNR4EEb6a1XOFcGw9vtBdsXrnfARVJCAjeQAD8a2rj/KGLbLeZWdhbQAo4JUDcMjBZPmNKq/E+XSbhdrjq1wCe1VwB6Nbzr9BUge+t+FCWxOq+VQLvD2W4j2jlKdYIiDsMuoI2mfCtN5Txd7IoxF/tTdluzcSyqFOrtGdTPQBtIJ6il8Dy5kRXOUXJBtwy5Z3DOxcTMEhNzpWf8w37qXMzd53fR1Kk69Mysy5t5B2rKzQJvYP5WXnzMrS0Kf4zihcxi6KmayoOwCgDVyRoYQTPXTrVM504jdxE9nbufuiEi3CkJm2NxjGUu0zJPdECmHMQa3ckF3DCR2ghspMFWAOkQZg0/8AaJ7TXv21wyDs7cgsq6AkQMoUbW1IGn3iB4VLi4ha4Eb7c/Cz+HAgJbBcRayq2LSq5MHEOMogHRVtvKk5R6y0+tRXMWW5KDLcG0CM4PjlJJHqpI9ah+B41rtwIcjoCSweROUN3jEGBOgHWBWicA9jVy7bD5v3fOC6hw5uE6kQABkVtIJMxrFarXFhpQ5ml7tuVkSYVrJZdSrggAjr0B8DI3o/KnELltjkGupKt7pAg94eGmk1qtj2Z40Bv3m3b7JQYvveQFUBAzEqSzaahSuaaDkrCcMtsBcVr7w2dnfs7ZnYqqEH/cST5bVM9/IIV/p0zzE6Ii1Ecr8y3LuebSnsxnNwP2S2xKzmzGGOuwlj0FXe5zjh0fKMVmDINES4yyBqozGIbaB0ikuf+XsGmHS9hwHU9w2e0LIGcSuXMysCSO9mLQNR0rNeT+KO968GS1bFqy4hUAyKCIggasxMZmJPXWKzZcYSAuHj7rBy8ftvIIpX3Bm1cxN/Fph2OUoEskgW0dgssoBncAhAIE6mjXubhZZ7aLYLX+8wuZXe2QYMsFgqB/y9dNPOqtybwzEXS62tveLyVC5vdlvE9F1J3g0z4fyfcsYuwbkMGuk90qT/AJbik5tTp3hqJpjLaS5zuBt99lVY8k2SkuJcp4e4bjPcu3SWLEp2dtQTqQC2diBsNB6VHYXkpBdtvh0usqCSpOeSOmZLaiPGR8a27C4KxmDNaRoGkroNdTHukjzFLY7mxwxt2MLcIU5c11ltWiYkZQCxKnyj4U7A6k7IBp37KNuTJqu1nvJmEOGFxjhb+Y6i4uryxHdIMd1dYAjeTNJc82rV+9hlXtVcQLouIyMR73xyd5STOjDwrSuC4C6wZr7Ln3NuyAtpNerEl2MdZA8jTPmkW2ayAVLr2rKQNcsBTB8JI+I8tJcpxY0vPIBUsOQQ4uIUZxy4Ws3QBJyGB4ldR+VZdwfhN/FkYWzbBZznbKR3jqCWc7IgMkkgDXqYOs4CzLRoPXbzn4VqnJHLljCWRbsHMWAL3oAa54f5UH3UGg31Mk5HQ5a1D72rGPLQO6r/ALLvZZh+HhXKrfxgGrwTatH/AOGDu0/8xhm8AgkVN858+28FbN69muXHOVVA1JgEhSdFUDc9NNCTFTGNxqoJJgAf36ms44/x7O65UGZJyMVBZc28EzlJgba1oZnUmQmjufhOdktabKoHOfN2P4nb7NsEluwzBg5Vg4ymQUu3GRQYkEquoJFVrG8pXmgM1tAQikFgxAQ/wBhPn8K0bid/rduAf5jLfLf6VFYrFL91WuGJ3VZ22GpO/hNUD1eeQ+xlJpzpdPsbQVLXkQB1ft9VYsItzPWCS2oBHUVKYHAW7N17w7xdVUd1RkC7xqdWgEnTrTTinNhWZsGP88/mtQ13m20xghkJ/EJHwK/yq1Gc2Tnj7UqjsmZ5Xqv9lXDsy4i/qEJW2onSVlmPr3l1/lW5VWvZjy+uFwliyo91AW83bvOT6sT8IHSrLXb4MRjha0rZjBDRaQ4hiQiM7GFRSzHwCiSfgBXz7xtntr128bbE3bty5qQPfYtrp0nyr2Z+0Lx4YfhmLcxLWjaUHq177MR5jMW+FeFuFMTpt8Cfzre6e3clc56gk2DVfcBw2wB32tr5KQ5/X6CkMdxayO6ikjxHd+g/WKiLaADV58oBp/hL1v8A9Et4lny/QD9a3GhcU54RV4jbEZLMt+J2J+g0py926BmKovh3EkegOtc3EZ0tqE81kn5k0hc4MffY5Z6uQPoTJ9Yp9KLXaj8Rij97O/qYHyH6RSFt+pEfDQU8CmYFwD0GUfEmP1p+psoJdu0b8Ik/NjCj5GmKTkKHvY/pmb0HdH9abZl9fiak8XxZBtbQerSaZLxJOqr8J/LamFw+U8MNbBL2OJMNFUDzPe+QiPpT5OJ3I1Y/BVH6A1HLzHl9xQP9I/WaTPF3dpOp/L5UQ4fKaWOrilK3OJ3I7qHTq8f0/Oo+8l0mWUEn+GaUTFEGS+X0kn+lJ2eMlSchIJ0zfe/pRNfKTdXgJxbsnQZYPgJ+skU9W2BuEHl3T/8AVJqK/wCIjwzE7s8k/DWiDGr0A+q/WT+VODwEwxklTd3HN9xSP4mOUeoWf1pkbnjN09dwv+4nX5UxTFjxVfPvM38q57x/HM+Wvw00oa07QQhuXZnuoo8Br9Sf1pvcKeHwH9kUqizvmb1IUfrTlcQi9FJ8gWj4+NN55TrrhJ4e42yWh6tqfhsPzo7IR7zLPmFP5T+VIXL8+A9cx/PSkrbn8X+1f+1C6RItGx97IFIGeTEAiZJ0hY1nXeB8xR+HuHfIrkPmyhMhBJJgAAAyx8B/3ILE/e+bHY77VoH7P2HtWcQ8klmQi1JLAMdXgnZmAHwBHWq0znstw4Wngx481Rv2PyoXHclYu2uc2WiJkxPxXNm+BUVXofyB8or1itoNcSddWbXXUDT60rx/lrDOJuWLbk/wAOf9QhvrVJvU6/UFszemgR/Td/K8lup+8/6/lSUoNhPxit6497L8KYKk2JPu5s8D/K0mf9VZvzjymtq8tm05uu4JAFtgwUCZaGO8GPTzFXY82N6x5uiZMV7WPsqXcvz935E0CYYnYketL2bQYStwEeIMifDf86d4Hgt64YtB7h/gUmPjsPnFWCRVlZoY69IG6jP+Gt4f38am+WuR8RiTFtZUaFyYRfVvH+ESfKr9yN7MjpcxbNA1FlW1P/zHUwB/Chk9WG1a7g8SqKFRVRVEBVACgeAA0FUJ8trdmrfwOiySe6XYKjci+ym1hiLlwG/eGxYfZqf4UMyf4nnxAWr1expG+lOLXFB1pPj7K9piPeUSD6dKx5Mhzjuuux8OOFtMCJY4xFQeO40f3/D2kPdxAK3F6aI7B46MMo734ZFVVuLxrOlRfIPFxcxV/FkwmGtFEJ27S8CoP+m2LjnyNOYwjdPkLTyoH21FP3kElpNsTEnQMyrOvgI9AKpCi3+L4EGak+ZuZRdvM4WRMKTM5Ros+u/qTUe3EWP3V+U/nXSYw0xgFea9RdryHFo2tJdvb6IT5yR/Ojqynq6fGR+lAbpbpHmNP1ojJl1zz5AZvnOlTKmE+scOJ1D5vT/vNFuIV6tPmQKhL189R8tD9KPhsYejsPJtR/fwodwBP7BO9qSu3m/Cp/vyIpqyT9zXyJ/WadF5Huo/mpg/L+lJ9sfuiPI6x/fpRsFNALdqTN7UUVEB6wfPSpVbrR3uzjz3+m1N79tD1A+cfOhXwnaz5Te6rDQ7fiGtBZV91M/386dYe4q/ePp0+tK/8RX8IHw/rRAHkoOcfASL3y2jafH+dIvw8HYj508u4odVRvQ/1pJseg+6PSTR28poLvATS5gY3HxGtK4VwNjR/wB68AR6GR9aMLKNuINID4Ti6xTkuce3ip9QKLeuZhrkHpTO9YYbLmFEXEn/ANOPiaWv5QEYqwn9nDp95h8D/Ok7uNsjTfzAP86Y3MMXpTDcHPiPp/OlbvAR0sG7nFP0xtrpP1j46mnB4ko9PLX/ALVG3+GED3x6f9qb2uGsdiD6aUtbhtSb2Ynb2vabr/FBHp8iKM1oHUmdKRw+FhQpYtlAGZiMzR1MACTuYAo3ZeBrw4NC+iClLNkDX9aTxrQPCutW9NfpST2T4n03pwKCRtu3l86dWxO8U1/cmnQj8qd2rB6mlykley86CRO+vr+lFdgOlItlmYg7T1+dFJOQ3hTa5I3FGRa649K0qSRafGjIKNkrkWm2nIoHkKOGoI866gkjNRCK4CgoJwXFaKRR5oDQRSRAojilJoGFC0U2urSLU7dKSa0KcH1ylSbUSKXZKJNXIZGnZRPaUSKUVaNArilaTGgKq4rgKEChC0MVOHKMtQTQGhYUFPDgm6VwFcooAKHLTgU1A1EFyaF5omalqKWlC1FDVxNEpaktKVDUIFIgilxNG0qQKaMGpMmjZ6CNIyv5UoHpNIo4t00lOAQk0mRRmoufzqMuT9KDPRhcoDXAU2yiAhzUZTRGpByaBcnBiWdz1oEQeEfSk0vUqH86Fgo6SEFywII6HodahMdFpAMpKjSRJI13IJ1gaVN3LlR3E20pjmByW6qOFw9u7irCoPfuICBMZc2srPhO/wCleogK8+8gW1/frTEDuC4xMbAI2v1rdeA403LVu4RGdQ4HgG1X4wR8a1sGMNaVk5rrcn1eVf27OI9pcwWEESO0xDzpv9lbjQzP2mm+3jXqqvH37Y2FRuKWDrP7ooPl9rdymZ9Zipct1RlZ8n6Vl+CTEBYQ6+7NsHy0kTG22lSnJrP2xD5i27F/ejSQc3lUtyvYI0GaSRox7pjoxmQD0cGR513tn4taWyghrTtdCnM3eAynNDAd63trPXzrl8nDdI2geVDhz9mQPAuvCu+I4rhcgsPctI0E2W7uoJlrd0/d1JKk7zHSvOntMxdt8QwsiLanun7pOzRsI2A9KsnDOWbbQcx2DCIJPlJ8fHar9zmLX/CntgJA7I2+6Mwul1zQejHXXqCZoYGP2nWSTsonZQlyC4Cr8LzjxjuZeqsIcdDB0I8D1B/SkU4QpAI7wI7p8vCPEdRT7iGFm6DuD90+R1WNp/vrUnwuwDKhTqYgbBuhHqNCPTwrcdNoZsVcmNBQfCOENm00G59AZPl0pbjmDa7ldEZu7DFQX1Q5RMAkSoU61eLmBCW2YzqAJGpGYgGB5dZrSeTufhaC27YRLSsICnI2UQJI2ZvEmSTNVfrtPvIU3TonZF7rA+AcObLHuMLi+8I6aAzr/wB6uPBrhbRbfVwxJnQDOYH3ICkZh4+Vb37S+JYfGYO6xAN22FuWrhgtIYDs5USQ4J7kwTB6Vj7XrSX7ZsJdBbDXA+dSoa8EYORmJJWQBG20bmq5yW5O4T8jEdDMA5KYDmYAFVLXJygW2cLcUR/y3GjeBQ67aVG8+8W7XK6q4NpwrARn/wBagAgjbN+VVqzwEu4k5EZjc7QgBh4gCZbXwj1FXXh+LFvKqkXHg5rl1Vc77mJIWBEHNv5VG7txEVv9k18kQdZG6R4TxLDLadi9xrshSXVu6zHb3gYG0wZ6xNWPhXDjcXNbU3ZBIRQ5II6gqSB49PpRfZ9y5gbmJ/8AM5Vhc5QE9ncfNEZtwqg5iFjwJia2DmbHm3FjCoLdpVB7VV+zM6xaVRl85b+tNdFE73XX2RGE2b3NCxPiHCb9lHdx2RbXI7AXCdCVVR3suXUlo2pDljma5nVcxmRv3vyk1dOIYBLh7wa4Z7zXDBJ9Bv5DarRyTw6zaIZLVtTBMlQD8Dv+VUM2RgaQFvYGO6MUmvPODxdyxbZEd4li05SrZQACsZsu5MaeNZDi3xVqXZLvdYTlBFojT3mWV1jXWvXHBMcW6AHx0H5zSfOPDUZC6A9uBKvbgHMNhc2V08Q8iPDemYWgR+7+6iz8XuvteUuNtcxH/wCcXEtWo7VLdkKbjecdWOupJI/DJovNWPfDm12GGdOzhhiMRadSZ2DFgwgN3vuyemgrTvadwbCnEWjC9sylLjWSqqHABDJnEBt1lY0idarmI5qxbIwF+65J7NlZLbALBCgmTmMDeNK1GZETfwqjnMjGilh/FsYcTdN3FNfuS+V7gIJUdAobTL4DStK9nuAs4UMe0uKLgMEG3IjYATvO8QYo3L3IF152RWaS5zQNZgKdGI3MaAdaJzFwGwWzTNqyuVrtpQLl1wczHKWPe/jA6VJJmRyjQOFJiTMa6wFdOPcBu4i3bQXuy0DFw5IddYVsuikztr+dVjD4F8I4tqzMHhu0bYCO+FaQO6dYjUb61XOCc9XJZcKluygWe0vA3HIXSCSCoLeCqBU1wDnzHPGYoxFzKc9sKPIqwEEeUR69Khx5mgjavjytLuBzw4K/G5iVmHW6APeIZTt5dP50ys8Wx1oHsrllldlPZMndXxhh+tMreIvu5N1gNIyW+6vrGmkfH8qkr2LVe8DAVdYBA+HQk1XDa+Fomi3daTyJ7TMLkFq5Fm4ghlJIQvGpJgkSerCPWobmnmDF4iQhtm2dkw91GkdM0MHPplA8qxbmnFI90uYtggagHUqCMrRABYak+NU98RdUkKSROhEfoT8q0IZHM22WNJG1xtbm/BXbS5buiNCAh1/6f51Mcr8N7MjImX0Ug77HTesBw3N+Jt7PcHxI/IinC+0nFjQXbn+5p/OoMiKWZSxFka9o8CxN3qG+sfWnHMvBrdxCxZLV2O6xKgT/ABDqJ6xNeLbXtAxraZ7p+LfrNW/lK/irrDO5UHxOvwG5NRyzPgjoi/3SbjCR9g0tcxnD7NjC31uOMRcuZczCOys6gBkLRLTsRGummtZfztxHB4c27dm0LjG53nZngad3N2bwz6z3QAukSa17BcrfYgOgdSuYC4sm4yahWUkQhJ8Z0rLfaTyxatv2ak58r33EAJbeGyoCATDR1MxBms+GV0nueP2WF1YaZaHHyqTzI1p7tsK7oHT7QuCezcmHK6yykCRMHWlMFbwtgqy2UvMRocQ0wPxdmpFseMNnqGXDG2LTM9u6HU3RkbPG65G0EOCPd9KtPLXLyi6Td7N7yKjG2+tqwpIGa8B/i3zIy4dTA++fuVe7ZaKs0FTlD36Q1XLlJcRdCOtrC4aywZu0yW1zhTpoULFZ6gAb+FbHy7iC1stdvlUUTKpbtISAD3WcElIOkQTNZRzRzbcshWwuDuQ1thcvXrLlcuoDBcpAMie9Crp3dKpvCefMRawoF1RcDHv27jZ5UxlaNGUmCJBEeA1qvHA9rxITt8K5jYOo+/lab7RMbh8ReFybroqZQnaMlvNB196SCYJACzA6aVjtrkK8W/xLcExmIbbp01j1ox53sGc9lkP4bd1gPk6v+dSfDeecGNYxA8s6H/6BV0kjcWtbHxWRHZaJy37PbL2BauXWZhJzJlC6jLBQg5h8Z8CKhOZvZS1oqQA1mQHdS1lCGaIu6MVJBgMWK7ayYpPh/tXwaR3bpjxZAf8A21asJ7bLDr2a2S4cFSjsWDA6QQFgg+GtQteGC32m5fT25BsDdZ5zpxbE4cnDi1+52yCqCyS5uADRluEywc6ZkEmDJqL5TSzaIBy4rGBM1yXyWsIoMs7OSO0uqN/uqdBJq8+0Dh13HGyS1rDJaTUhsjWkuQqqE952IEjwB8TWKcQwF+buHtm4yvdIuMLZZrgXRZyjMEG4U7nXoKfCY5wQCsWTBjjJatjwuJFwAqQVIkFdQR0IqwcE4VfkwjEbQpBMx3SBOp8orIOXuF4zDWcQrWLqW0Ga0zgplOhIHaFWbMASFUHUHxqN4f7Q7qOGDZGB3Ut3iPGD+dVMfpTYnkg7eFSw+jiWyT5UvztgMa2M/db73QGy6qrW7fZzPaZI1ESDIMMCJNS2AuXWxbO1trVhbPZWAzAkW0YBdN5YgsSQNTVp47zDexVizeeyWILBbltGBZYGZTcjUZhovUgx55vwjm97uKCMotqUeAR35X8RIB2EAVNlF8kbg0bVyUMvFfC4sA2+VpfA8O7lyilsqyYEkA6bbnXwmtB5Vxv2K+IBXwjKSPpWf8i8SVbkOQBc7gPg0yuvmdPiK0O/hyJBOn4usn8XjWNgQ6Gl7eVms2VV5943kRmY9xAWP5fMmIrAONc9XXkBhb1WFQxKmSZcd6QNwIFaH7b8RdB7IrFrLnzGIuMOi/8Ay98u8x5GsAv2iSfHNvtp/KtjpmA11ySi3H+y1cLHBGtwtWnGh0Ia25bORsTlg65ST126/rT+3d/wyQVJlpnxMADwEDSqZxXjTsOzQEKD3usHyH9mrRngqCR3Laj0gCfrNaU8GloVvKe3SGhM15jK3Gt3JZQAQ/3gCB734hr6jzqx8mcGS/i8KkKRcv2V8ipuLMEb6TWfYu6pv2S57twG2/lqVn4SD8KvH7MLMvF8PbY9y09y64if8G3cfMPDVRV2PCBLXN24VCXDaXBzTS+kCihqH5L4q1/D27zKENwFgoMwpY5NepKZSekk1MVuhW151/be4vFjC4eR9pda6Z8LS5R8zc+leaMK9td4PkNf5Vun7cOGT94wbGcxtXVI6ZVdCvoZZvkPCsN4Xhl/Cx89APnW1gj2ClxPXHf1jamOH8StDe0f9w/lPyNSVriKn3bSKOpIZ/z0+lR4uJspafRY+dBdtqN70/wrmb56BR8zWq00uacNSlzxLSERmPjAtj0AWSfnURfsGZcNPz/v501fEDpPxH9acYW6/wAPE7fyp2q1HpISoxuUd2F9FWfmZPyqMxeZzqSx8zJqWNm0ffukn+BCfqSo+lPLGAw52usP8ygfr/OmkWnstqrFvhJPQ/X+VOLHCUmCST4AfrVgxWLt2gAr5p6KSx+fdAPzqMxHFAwgBlB3Mku3kToI8gPnTNDAndyQpEYZQYGQebEEj9Kke0thYz+uTKCahzg1O2nrQpw3y09RRFjikDR5JTq7YQ7I8eJcfyowsKN1IHjM/kKj7y+aj6/zpL95A6s30FAuAKPbLuFKnC2ztmP+nSu/4ao1ZvgIJ+XSoxuIMdACPia5WO509Tr8qOoHwh23Dyn12wT7iNHjEV1jgt47KfWabo/Vsx8OlPOGXmLDIYPlpHx/U0NiUrIRbvDXG4+J0/P+VNxajrJ/hGnzqcuYZde0vBvJczfyWkbqKsQTBjrDeGoJgCfOdaD3NbypIYJZb0i1EDBk9J+Zp9a4aog3J8lBUH4yTFPsLlPui65OmkfQCSa0Xkv2UFwLmJzWlO1oaXD5uTOX/LGb/LWN1b1Bg9Mj7k7x+PP8K3hdLy8x+iNp/Ky3E4lAIUkeQA/906/Kj8rNnxNgKGk3bYmdfeGoHWK2XmD2S2SJtMyMNg5zp9IYesn0qV5F9nlrDxcY9rdjR4hU0+4Ndf4jr4RtXJZH+JfS/p9bSSeNNbrpMT0dmMmGsbfKtlhQgzOfQfe/pWe+032kCyDlbLG4B7220+J8BU/zHwPE3mgX0sJ+JEZ7rD1Zgq/AGs3509jlgIznEXmfxuBXzE76QD9TWUPW/TnPDWusn7Fd1F0qQjdIct+0ZXsZhme+SxZIIiDABdjAEa6SZJ8qpXG8ViDfuYi26q72+zyZMyrIA7rEGGAA72hmddaU7YYPLaaytxJjNLgN5kiRm6EeVXHlDmPhtxglzDXEcneXuW4/0kMNfFTXaQdQwzEH6uVy+VBnGUtbQAKqPs15IxuIVxbfDDsozdshglo0DpbPeIGs7A9a1v2d8Px9rEFL9mxbw+TVrLqUZ1gKVUQ0tLZjcTYCCDvbMJiUWzmsZOxQwVQZcvqsA/GKZDjM9ad9SJRbDYVqPEDP1gavmldMK4pzieFI4PQ9CP71qlYXilWPhvEpqu/UDsrjQKWd8Y4s9u41s7qY/rTm3x2LbEn7p/Kqxz/xENibhHjHy0qlcy8xwuQbmrbIbCrvlpdzTxs5cqyWbTTf4VN8j8svbsRc++xuMnTMwCw3jlUAR018aZ+zfgRYi/cnT3B5+Pw6edaTat+VaMcTeSqEsh4Czjj3LFpCO9kzaLJET1AmCT1iTULe5aI2Kn4wfkdPrWic48CTEWnt3FOUwQRGZWB0ZJ69PMEg71izcJxNq+9rDX+0W2wBznRdJhwZEjY5POKle57BqB2+6zj07HlNFtH7KXxfBiu8j4afMaUwawB1+hq/8Aw126VQWy90jVbUkHxIB1C+Z0Faryv7FQ6k4pUUsBCqSXU9SzIQs9I74qNnUR/qCqzem3D/AKbv5Xm0SdAdfBo+hpG9b/Esen862/2gewW7bDPhm7ZBr2R0uj/Lsr+ndPgDWL3LhQkahgYIO4I0IgnceBq7HMyQbFYWTiS4zqeP3TH9xXcEil0wxP3g3kdD/P61z4g9UB+h+mn0pQOvRTPgf5iKkFKuXOSYBH3T82pS3iR1BHoT+RrnukjaPSaNaQ9e8PPenfhMJ23RLyhtdI+RrkwVs9SD4RTgXz0t/OTSi3G6IB8KdQTNTgNkimHRehPmDP0o1zCIwlf6/Kle3I3yfLX6UNtVbvAwfIBfzogBNt3NlNbNtR1pyMUPEn4gD9aMwXqJ/P6UdLifhPyFO4TC602ONI3DAeR/pTizdB2+opYsvjlHw/nSVzErGjj4TP0ApXSafcNguuYMH7pnyoBaUbkD1pouCnVbn5ilreHI+8WPxj8jSBPwiQK/V+yVNpdwB/f5UUOPED1H60hfwRbdqatZy/eB8jqP1ppcQnsjDvK9owfL50hfxMHb4jafCjW6UW2K8QAX0UUhaZqXVZ3oTQZ/KlSVoxApMz4/lXPd8qQ/eaKSXaidnRk1oZikkiCyaOqRRO2rg80kkNy5SIc9aC/J8qKEPjTUUYqKOsUjQB6SKcRQFaRD0Iamoo5FAy0ANcTQRXAUBWuJoM9BFFZaIVo5agzUkQkWFIuKcM1EcUOE9NqUVqB1ometTGnFUVWljPhK0YGkg9GFaAeCqxFI5NBlFFBoZp1oUgy0AmuJoRRtNoIM/lQFhQ5aKy0dRQoIOyHSgZaBrddRDktKSYUtZbwNENCEo2lSVzeNJlR0o6GgpaijpCKVpSzcrhRwBTSUaXFxRWHlPpQOlCulNRRQ3lXKPWge5QW2nrSRR1byoS1CAa4AdRTCU4C0m6n/ALUE0sV8KRua70wuUjWrso8ajOIvUhcTzqH4ox9aAO6JApRKXiExOX33tCwmsQb9xUMeeUNXpDh2GCIiDZFVR6KAB+VecuSLRuYyzagFTdW62mv2IZxr0E/U16UraxN2rDzP1Lq8h/ta2Z4mDG2Fta+P2l3p9K9e14J9s/PNrFcTxVxnVbdtv3e2D3Wy2TlLbSQz52HWCPClmAllBZs5pqmuWSNmWVykywOgncESfhWde17BviHFzEXlsWLYKWberv0kxoC7wNATACjSJo172iIFZbUllBMkkI0EfE+QgTWZ8fx9y/33Ys2Ygg7AHUBRsBWbAybX8D+6ix4XHcqx+zzmkg9mxOkhCdJHRT5+Hy6CpT2occLLaw6t3QReuRoZAhRPiAWb4isyGJABMw86R4+PwqexQzWhcdjmYEsYksWaI8iB0q07HDZNY8/7qVuK3uake3f7WGUNntmWAPvLooYfxAxPrW3cieyu7esrevsuFTUvIJu76FklQmv42DeVYbydxFbN+xdOoVgSB4ZvlIGsEEaV6C5m5nW+wF12suO6yMC1pyTm7SFIZS0zsRrpVXLcGEAjZaMWK2UElKYjhlu1K2i11kgpcupCxuW7MTmJOxcxVe4d7MmYhmukTrAUkiTP3j+VO7TAHS9abWffuLI8CGQaVZuFcctg63LY8+0kT5GOlYuZkSNbUQ2W10/EiYd9lauVuC4VbXY3VW4CVzG6O/I2iIygdPCnvFvZth3UtahCqlVVwLgAO4nRx65mqFwnMeFXV725nTva+p0FWHD+1XA2wAGDHxP65cxJrOgklB34WhlQxv4FlZVi+SGuXbmHtZrOLRDkSWbDuoidWGa2WmQZZTIGkyMxwli/ovZPcIcF2Aa2y6xBcHKRA0LaDyr0Bxj2gi5m/dUClxFy9lhio1IB1YwNpOnh1qpcMxYyEQFDd1HD9moLLEuwO8HXTSrsXUN60rmepQMxyLG5VK5Z4Uq30Y32yl2zqO/cUHQ6wVK6yxGkDxpZ+bsRYdltXSwBiUJymOoH6EU4KvZUW2uI7aQVhoTcKtyBMkknfX0qKxPDbbySI13DQ30qy7S91uVzDBZHt5Uzf9q+JTRgjHfv21J/9opAe2a+Nktaf/DFQNzgPhcux4Eg/mKneWeQxcPevOo/0g/DSnmCICyrTZXE0E6s+2/HHRMo/wAttf5GrVy3xPiGKIFy48Mfd8fRBqflUzy57PcIkFjcuEficx8QuWtq5NNi2kKqW42yqB/U+c1mZDon+wU37q2C6Maqtef/AGnezq6Clz/EDKlqNVaw5OheNMrTox0DGDEiWXOvKD4W1ZZ71okMFZCWWCIMz/zFI0nz00reueb63AyhoFxCrQIOVgQT5EaEHoQK8kWsC9y4Ve+yOjdw31ds4XcKe8oEjwmTvpFP6bKycOjBvTtaryRUQ9w5Vw4rzrfe2Lelq2x7MC0SxgjwJ7igdBA18jSfAOH2rWGuX7nfkHKBDALOXKwOoZ/vdY9aneW/ZHdg38VeNi2VYkaM6qw66hEBG0knXbpVW5kfDgdjhle4qoVFy8xzQTuiJlA8i+byArRZAGG2quQ3Vspn2d8zpbcKf3c2j00CgHSGQjvHLInfz8bRzxgsFmVsOFKsTnCAm2raEMoJgAg+6NNKyDlP2ePccZnCITJMBm321jX1r0HgeRLP7uqWTNxBoXCuH2MuBB8gVOnnVbIkDX0HcrRhG2ohU1nDKFtrGusjLmiZOp/Kq57QsSyoqgQGYk6QNAAPhqYqz4209hyMRZyHQZ7YJUTpmyPMqfFT5b6U44py6LisrHNopQkd1kYTII1yt0IgjTzp8ERe6glkzt0bLLLGISIIJnzmZ9abXuDWmPu5T5Ert6H9KneM8tm2fvIFP3gXT4OgJj1WabYRiJANtuoOdZ22hip+lSkyM2IWe2j5USOXEOz3B/rn85p7g+RlaJu3fgy/yo7X2k/ZmfIT9QTSWFxN8Hurcidsp/lRL5AERXlXzlv2eYURnNxz/FdaPiFy1s/s/wCHYayRktJbEe8AJ9CxGY/M1h3BOJ3xE2X18RlE+rEVdeCYrEXYWUTb7wuN4e5azn6Cs+V8t2ASrYDC2iaWx8xcTV7eUFZmB8BvXm72ncBuYjG3RauWbTqtm7mu3xbL5lVIQEHMARJGmlb7wHlVioa85IiWmFkAzsMxHqSD5CqNz/yvg34lae9lKDCqbdoiFuMtxlSWGpygzl1zaTIkFYkGS6R00woVsFmZcUL2iNm+/K87ce5cv2+8yFvtMqtbUlWbXVWQFWE/hPTWlcWl/BMhdVW7cGYSCGhWgk5oYMWmJA0g9a3H2wc9m1OGwyHOF1YjKlsaEdmphWPmQQPA9MgxvAv3n7TEXWe40MSCHO5nMTB69IArYZECLKjjxwxwpTXs89tVyyxDqz22Kzqc4M6wSTI8iKYe0VEu4i7dtE21e4xVWBKkHUjL3YGaSANNan/Z9yjhrTpc7BLkahizOVObQlD3QRHUVu+L5etYxWIAt3iIz5V3/iWCrCesZvA+MD226mq86wLcvHmJ4GxOyN6OV+hB/Okk5cedLRmP/UT863T/AMBXHxL4a6gVsrML9tQqrpKMxQBHRj3SCA4ncEa5evEMvQmPDYx8ab3KNFGvhRPCeRb7H/CVZ6tdEf8ASCfpXof2I+yQKA95rcwO7bBJB3HfcCNtgvxrHMH7QOz2UmNIjT86uvKHtYve6qhAY3IA3+fwqGeUAW9thSMa5wpporQvblyra7PtBANmJK+81kHvJ6j3g2pGvjTLmLne2ti3+4pFoiXKKC9lhplZRqDGudgwO4NL808bttYJxMuro+iqQWOXS3bPU6ztA3MaV5dt8UuKc9pmAGgymGBHjBmoOnucS5zRQ8KCXFYD7ufK1LjvGTiRFwZgJ3CzOoJnx867lPg2HUj7JC5M5nQEfM6T6Cs7wHtDvj3wrn/4qK5082Un61K4X2leNizIP4Sv0DAVfm1EVSdAxrDYXpzlXi3cyMFdDAywCseEREeRpbm/lO01s3bOW2yKT2bgNbYblVVpyk9Munl1rznhfa+V92zaHwb/AO2asfCPbFirhC2kUHpktrInTchqrCUxsIc3ZPmgbKbHKV584I1vC2bzJ2RvM47OCNFUFXCnVAwnQ7aVcvZtzP29mHM3EhXn7w+63nmG/wDED41QPaJfvsLfbszMyl5JkTtlBge6NwNBm86g+W+NfuzrcM5PduAdUP6rGYekdazonguto2K4fqDBFkuaFtfMfA0vIbTglG91tMyMR0J2I6H4HSvNPHeVrmHxDWbjBVUT2hAGdSZBUHfNsfAgjpXqDA4kMBqCrAEEaiDsw/Oap/td5T/erBAAN+1LWyfvjqn+oCR4MBtJrQgkLHfZPxpnRmvC8z4jBOv+JbJ73dae74zIkHSfMVaMP2A+0u5nDaratysp+J7hGgJ6KJPiK3z2aezKzYtJcxQD3QMzW3OezanX3To7+JaQDoo0zFzzTdw+Jts7W7b5JCZkGZVt+QiFbznbarWTNVWpMubUAsJTjOGIAtYHP0HcDx55odp8yam/Z7Zytirv7v2LjDtbRipBZrzpbybCe7m1qw2uesKGyQyAd1R2cWwZjTLsPhtU/wAhsMRibVoQ4a/ZzkAyFtk3Tv0ypr/WreG/3tUEJJO69T8vYHsrNq3/AOnbRP8AaoX9KfVwrjXRLRXlH9tRx++YULGYWHJkHRTc7pnbUhvl6VjWHEiGux5QY+MVa/2j+bf3niV4qRksxh0I0nsyc5Pj9oXg+AFUXB2yehNbuIKYAuB6vJqmcVM4jDWwNLmc+SkL8zH5U0TQwoJb+/CntjDEDvQo+E06t8QKCLYC/wAQjN8+nwrRA2WAZN0S3ZyD7S5lc7IyE/ORpSa4VSdbtvX/ADfOIpAqT0Endj3j+tCttF+6Xbz7q/TU/ShunhzSneJw1kDTOT4grl+W4+MUzscMDGFLE/5Z/KlsPeE6gKPJso+ZJ/KnN/mNQIUFvHM7QfguXSiS3yg0OPCa3uXCu8/T+dI3cKV0j5fzBotri6zOSP8AKxA/U/WnuD4oupIUeqgmfn9aALPCDhJ5Ub+5z+I0C4SDqp+OlSo4uW0zuB/CFX8o/OjNetjXKznxc6fJf50dLUi9wUelqNrc/wCbb9PzpdbQGrm0P4RLN8l0+ZpR8evgPSCQP+qm128o1IUeACSfqdKTqCLHE8p6mMUD/DceagCfmNPnTUMWPdEeZ1PxNNv3wn3c39+hpYWL/wDFHxpupHSlVwVpdXcv5ID+Z0+hpPF8QU6ImVfUknzNN2S5trPpTy1wu5uUPlIihdI8/dNkG2mnwk1OHl44zsMPbLuVm5cywolgCVZvuhTEsZ3EawKnuReR7mIIMBUHvXCP/b+I+mg6mtx5S5dtYVMtsanV3OrOfFj+QEAdBXl/rb1vj4DezAdUn24H5Xf+k+jyuuSQUCmPI3L4wWGRbjAm2rFm2UZjJCzqfAE6nymKc8u8xm9cuoyBTbCMCHDgrcnKCQBlcRJXXen/ADBwhb9so7OolWlGysCpka+tM+X+BW7KdnZXIkySSS7t+Ik6k+Z+ECvEJ+oxZUD3zkmUnb4AXo0WOGOAaAAneKuE6KJP0HrXYdSoiZ6+Xwp0FA2qD5r4+lhCzb9FmCT8dh4msnGhfO4RRCyVfJFfZSjY1RqTHroPnVK9oXNdhYQoLtwEEJJyz0nKZP8AlFUq/if3hu0xd3sbUgjXLpE/Zq3ToXIJ/CJqhcY9qFuziw9iyrW7eim5mOcwQzAEkqTAgzI8Na9Nwv8AD6WGMTyO91Xp4/usV3Vou5ob/K3TC4bNanFBRIOWwgyIk/ijUv6kx61mOKDI7opz250LbkdJ8x41ZOLc0i9Zt3VkC6gcA7rI1HwOk9d6rGIsMVZtoiSfE7KP4jv5CqmDDkl72u+ePApXZnRgBys/JvHYcrOj27qFfEC2z/Qr9T41EcE4uT1qkcyY8yAhytbOeRuCQVUfESSPMeNO+U8fm9Rv616t6bxHRYnu88LlOpTh0tBarwzGmpjjHMItWi33ohfWqNg+IBd6rHM/HDdb+EbfzrdbEL3VLu7JvxniZ1O5Mn4mkuVOXzdbtLk5J6bsfwr+p6Cl+A8ENw5m0UdT18hNaDbsqqhV1y75JG2y55WFPXLqfEVSzepMZbGEX5KlhxnO9zhslb3EAgAVR4KoIYztGURoIqb4LauMMzyo8oBOvzy+fX6005Y4DHeK6Hcsq/7UjUDxbc6+cSXMnFkspmaTJypbX3rrdEXwG2Zo0HiSoNPAjmmf3pXnSOBxamn0MGhjRaYc2YlVtkyQzhlsqNyw0Nw//Dt+P3mhRuxDb2S+yY3VDGbdiZNw63Lx6spO5J3c6DoDEC28k8jGDjOJZUGhWwRAUD3UYdFXYWhqdS2pK045x59a79naHZ2tgBozDbWNh/CPrWzb5zQ4VYNZEPup1+M4TAqbdhASPeync+L3DJY/OPLaqpxr2n3okFbY8hJ+ZnX0FUzivEFVSxZQo0LE9wEdBEl2/gQE+OUa1SeHcaxGMv8A7vw9e+PfxNzTsl8dMy2Z6AZ7ragHeJ3dmFtuTB3JDsr/AMwe1e7Zg3LjrqD2Qg3rg6dz/lqfxXAD4K1ZRzPxH95vXLxVVNxsxUA7wB4CT4nqZPWrPiPYXets1y5i7N1tJLC4gDHrmhyderamelR/LuAH73atZSrC6A1xQHf3v8S2uxACk5isAamnY2TEQXNO/wALC6xjTyObGRtfKZryjiRk/wDLXvtPc7rd74RI+MVZcH7HcWyhiLaSJyvc7w8u6GAPxrfMNgxbkoDLFc7OWZrmURLOT4dBp5Cnna+VV39Vf4CsweloeXErz1Z9jmKMybCxO90nb0U/nUDxr2c4u0TNh3A+9a+0X/oJI+IFekOJXGHuIGP+bJ/UzTHA4lsxL2HQkwCjFgZ3aJBp8fUpDuaSl9MwDYEryvdtFTBBUjcHQ/EGkyjHYRXrbiOFt3TkvWrdwHYsqkgDzJJU+hFZ/wA/+y+zke7h5RhqLZJKMI2UnvKx2AJIJgaTNXYeoseadssXL9OzRAuZusKh+pB9YNFNs+X0qUx/Cb6+9Yvp623H5rSLct4kKbhsXwg3c22AA8dRt57Ve7rPlYgxpvLf7JmrEbMaVt3z1C+pEU2XEINy3y/rR3vW2/GfkP50/UPChMZvcJa7jrY31/yz+tNm4qOiAeZEn+VJsE+6hPqaSu4J98sCmuc5PZGxPzxfwePRBTNsZcO1yfiRTW40aaUXIDuaaXlStja3wnjXLnXvUmbR8I+FES2vR/zFKpiiuzH5z+dK/lIiuF66xXC815bouXlyoVNtWi006y6QZcdGEVM229SKbW79LWmrxYAr34lOaI93yot14pEYipExddZvSiWrE7mlu09KOTp0oJIp02on7yDpXPfFEuAUkUfEPpNFsYgU3xV07DTXWmjlp3BHnv6aU0lFSt8ztSEEU0a5BAg6gmegjx10J6U5t7UkghZj4UUT4UW4aATQRSoFKBabqpowNBFKk0UPRGaiM1BFL5qBqbg0daCKOKKaAtRGagnUjsKKaLnrs1C0QEDikXWlc1FJpB1JybxQq1DcNJg1oY8hIUD2pcUOWkJpS3cq+x3yq7m/CAEzrSytRSKDLUyj2ShohTzoA9AaNlCkD0lNKTRGWiCihWjZTSMGlFc0dSbpQlvGgD0btfKilRStKktbb0o5t00NulLNyKaQU4UlWFJ0oHowihaNJsQaMDO1K3LNJlKGpODQjzNczkdJoKMWoWkidpSimkWo6W/OKaQE+0GIIiq9xk6VP4hdKrPGutNaN0nHZWL2BYENfvXI/wANAgPm5k/EBB862ys/9hPD8mFzne7cd/gDkH/tn41oFb+M3SwLn8h2p5TTi+MFu29w7IjMenugnf4V4wT2S4TEO928jG5cZneLziWclmPhqTOmleovbnxHs8Dd0k3MtsDTXMwzb/whjWE8F4kVA7h+Efod6ZM4gpRRhw3SHDvYPw2P8G4Sf/jPp9RSmN/Z54a33MQoJmFu6f8AUGP1q14LjwEdy78B/WnmD4kpJhb4J8cxA+sVEJFL2Qs+b9mfhp1jFeP+Kv8A9ijYj9n3h+XL/wCaCjSM6nx/g86083HPUx9fqaI+EJ3zePvCkZCiIwsC9oPsa4bhLDXf/MlvdtqbirnY7AnszAABY+Q86z7mLEO4WUzKqwsE54gAAk+9AA13PxrZv2hcMTbsiDAZ2ILTIhRIHlPyNY5hbviJAOmsxHlNZ2Vke6iFbhjoWFVL6wf+Ynqp/SkA5/8AUPyar0OJD8PlGtWHg/HbFsA5czeYED02jrVd+Q1osBWY2kmiVn/BOA3bsBRdf/Kjn+lbDyF7HbjwWTLP/qkfLIuZp9Yqc5b5nVyI7uh8InwGsVfOC8zpblyROvvQI0185nr8Kw8nqJLqIoeVqMhpttNlO+B+zdcKO0LB2ykbBUQEQYXU67STselVzhfI2Ea5eV1uEt3gguMtvLsQFWIKnziCKtl/nA3lyrBUjcyAPHU7nyFR3DcEwY3tchzIDtmYiYXxACnXxiqmDKH9QHaBLSN7VbLh1Y5M1X4WP+0flzs7jJaQm2hhRLFlkA9SWOpOvXwFU2ywSQwk9JZhHnousedanzTjYxDbicuh390U9sBXGqg+oBrr5unhzraVlQ5GltFYiced5Xf8X8xTm3x1xsUH/wCM/pWsX+D2idbVv/YP5Ug3CrI2t2x/pH8qI6e4+UTlAeFVOV+cbui5kP8AvY+ndWtP5UXE3dQl0g+FvswZ/icj8qiOB3cjDKAPQAfyrXOFcWW1a7S62VQN/wBB4k9BWdmdBZJyf4VmLqRA2Tzlrk0mDdAA6rOZj5M2wHkN6zvmX2TYJrzM5uEdozBBchVLEnKukgCfE6VIjn65dvoVlLaOCqTq0Hdz1J8Nh571UfbHz0URskrcul41khZjT+InQeGp6VcxOmxYUdNH5VR+Q+d9kqpc6+0HIXwOKBuIlzR7bw5Rfc1gq0LoQRofSoHBYrANBF67bgj3rUmB4lW1+Qql8S4T2s3LhhzBhfuLrp0JPj6+M0yt8qnfPuNNjPkZjX50DCCNiQrTJK5C2fB4vAaf+ZT1yXASZnXT8qt3LHPeBsHML2aCdFR/pMfX5V54wXIV1yAGnp7o/OYq9crexJmg3bwUHoNW+UQPmaz58eMHU5y0I5nOFAbLWeYvaJgsTCsj3QDnCmLayNgYLOQfwiJGldjuKM5V2QIGtjKoGVFUEhEUaRlEaVP+zP2X4K1Eg3Cp/wCYdD55RCnpvNOufuABSyAwphljdR0j0OmnQ1VZlvxnCXll0o5I45biH6qWZ4jiusUthLNtjJVTI10E/lVRxV0hyD0MH51NcJxVdhTZGghYeosdSkMTwTDn/k2/gsbelJrwPDja0v1/nSwvb1z3KIhb8JGQpQW7a7W7f+0H8waunJ3FWbu+Gmmn0FZ9iblKWOOm0hCnvnr+EeI8/wAqcYhWwURfvutR5y5uA+wQ+HakHr+Afr8vGqn7bOY8OlixIL4pLbZMrlQi3F1Dj72aBC79dJ1oVjiREtqYBY+cCazrj+Na7dl5J3J3knf+XkKp5RAAYp8cWdSR/wDvCxCd1jnUbJfAuD4ZwfoRR7HtKUe9hrU790On/tYD6U7v27bAApMeWg321g0W1ypabUd2fBtfrVXQwBXhISn+A9soXbDJp5t+pqzYD9oe+AAllFHoP1mq9wv2doSMzNHgGE/HStK5F5AwisM1hXIIEvmck+h7vxiqs7o2fP8AKnjt3KHlfmjHcQOQlgjK05TCjTYkLl1OgBMHrVcx/s7tAlSWVhoQw1B8DBFemrRw+HszCJbG4gCNtgvTpAFZHzTird25fe3r2ZBLTOZCckeqNHnlYA+6KGLG1r6dvf8AZRTylwtoqllD+zu0N2J+B/8AtVf/AGVclYZbgJBaI3gfUd75GonEXqvXsvs98fCtSSBmnhUWzPvlZt7deOZ8c1pIRMPFtBsJgG4QOpLmPMKPCs1v4JHYmCrbF7ZyyfllM+k1qftR5eZ7966i9pLsSAYdTm3XoQfDx+ma4i6UMGVPhcBUg+okVmFj43bBXA5rhymrcFbpdn/PbE7eKxQNy9dP37H+1h89KeJjTvlDT+FlafhM0B4g3S28Dpl0qTuGkt1Kcv8AJV5iB2lkA9QjGPyHzrdfZV7KrYAe/fa5scqgW1+hLMNPEVi/B+YSpEW7ggDSABptMmrzwLn273QIXyLjx8Fk/CqM84H6hassjc4bGls3M3L9jMnctsswqMoZVJESqkaHQTFQw4JhW/8AwfDwNwbadPKDTnk1zfZW1ukTJjLbTrmHUtGxMelBY4f1g+hbp4aVN0iPUHOLaF7KhmQx6t6J8lPOHJatqES1bVQIAVBlA3gAART3tLZ+4nxUTTEYc/hHpmp1bwy9Qf7+tbfbZ8Kl2mfCcviFMgrbI8Co1+fjUVfwVrWLNjXfuKJ/6dadvbX8I0ptignVRRLGfCBiZ8KrcR4VhgD/AOWsb9LVuSfio+dTnsO4cjYt3W2qC0hPdVR3n7o2/hD1Hcbu2491flV89gmBAsXLgAHaXCNBuqCB/wBRapoY26uFHIxrRsFo9NOM45bVt7jmEtozsd4VQWY/ACndZ/8AtE8d/d+F4p8wVmtm0kkSWu/ZwviQGLR4AnpV9os0qcrtLCV4d4jxUXb967lLdrduXIOmjuWAIA8+lPsJxCPu5fJd/mZNQ3D7R6E/D+lT2G4LAzOcgO0q2vpXRQggbLzjLe1zjafLxBDvaJ82uMSfllrn4sF922gPoW/9xNDw/BW95uN6W9PmTpRL72517o8JzH5CrY4WY4b7BEbil1vIeQA/IUxxN+NzJ+dSTfaQqZo8AP0FLHldV1e4q+RMt8hJoOB8JzK8qs3QDvNI3SBVoxPDbeyMWPkh/U0ng+T7jmcpjxIgfMwPrUToip45QdlW7FstsKdphI3qe4lw9LQys4LfhQggepBqEusnifSKQYAk55cdkKcRy+7Sh4qze/JHht+VIG+Bsk+tKC4x6AfChZvlAtb8J0vElA7toT4kkx+lNTdHUChYfOut8Oc6xpRtybTU8w3ERGVF1P3tZ9BFPb+CZBme4FJ+7Mv8VG3+oimeHvOmi90+I3+e/wAqNY4azatOvU/3rT91CS1ETGLMd4+cxWqezP2f9sFvXlK290UklrnmfBD826QNSv7J/ZwjqMRdUm3MWkIgXSN3bxtrsB95vId7ZEQCvGv8QvW8mIThYxp3+o/C9E9Lem2yNGRMNvASWFsBQAoCgaAAQAPADpRzRororwKSV0ji5xslemNY1goILuu/ypNrlC7VFcR4hGg38fCnxxl5pTMZaWx+MCjz/vevOHtD577W59mhusp7sgm2mxBMwHf17q9AYkbiyM5yrqxHXYA9W8B9T0rsD7PMKgl17VzqWYkCfJVIAHrJ8zXYdA6nj9KJlkbbv9P2UeZD3G6AfyvL2MwGJxBm60DfcsflsI8tBVg5G5fw9l5u2VuE7O/eynxy+5Hwmt843yxhmUgWwh6FdI9RsfjWb3eEdm5LgFUIjwuH7qj13PgJrr4/U0vVLbZH9lnjAjx/cAn1vBdow0H8IPuqo/5jD8KjYdTHTdlzXlQKJIVDMHcAg5rj/wAbnYfdEdTpJW+Oqtohe9euyWMd1BMADxgbAaaz4RW+NcLuXrbgBiz65oOhBka6bnT0rcw2MhDY2NJJ5KpTOL7c41XCo2NtHMxO7MWP6D/SIHwpnhbrW2zD4jxFXLD8jYk75F8Szb+cLmNSuB9mk/4l34Iv6sT+Vek47CGAAbLmJXAuslVtuJZxpUvyxyw9who06ef9POrrwXkawkd0sf4mn6CB9KvPD8GFA0AA6DQClkRks03SMJ91qD4RyhtmO2wGw/T5zVnwvCLVse6CfPX+gpS1e8PnUtwbgVy9qO4n/qMNP9I0zHz0Hn0rJh6ZjxHVVn5O6vuyZHCrVf4hiCSqhWd3MW7Ke+/jE6Ki7tcaFUbnYGV4by7awX/m8ay3cWRFpF1SyOiWA28bteYAkydJgl4vzbhsGGXDRdvERcxDkECNgW0DAdLaQgPnM49zvz4ELXL90hiJOYjtCOkKZFlfAsM3glaIZYs7BQXXHKtvOnNr3nlyepS2v3R4gHT1doHpoKyTnb2hW7IIlXP4QSU9GYd66f4VhPHNRL3BOJ461nw9pbNhxKm8/Zm8OjQ03HHgzgLGwGlU6x+z/wASu3GDmyApANxrwZCSJhcgZtvFQPSkMtp9rCiYHD3OVO5q5/v4hoBbXuiN46KijRR0AWvZn7P3B1wvD7NpFHasva4gkEfbNqVuEg6opCBf4dt6xLlj2AYjDkXC9l7qNKMLjLBGxSbZEgwcxHTbWa9IcvOEs2kZgSiKHZTmDNEs33WJJMkkfpVDLjc+qKsYsoBNhK3ODWnftGtqz9cwOU9dFmDrGpk6DapAWBMwoMRIABjaJjw6Uml8HYz5SQx/0mD16Vy3hJ3+PjVQPMe1UrvbbJvdo+FtlZhmifxH8tqdC74gH6H6VHYu8wiBm+MD50PD8aHHUeOn9z8KXeTuwApDMPT12+Y/lSVraRrrv0A8vGmfEMWi6MRqYCQSzHwVRLMfICkOGX7k6qlu3lhbbCbgbTVoOVBA9wZj4wdKOxF8Ju4NcqSvMQO6JJ0/CPVjrp6AnyNILhNi5DsNuiKf4F11H4mluum1N8UWKkBgpM65J+MExI6U4wOJUKolmKiMxjMSOrACJPlHwod0AUCl2iTuEvDeJ8d6A4k+Pzoc4PX56f0oGtn+v8qZ3Hjgp3ajPICiON8Jw90fa2LTz1yjMP8AUIYfOqZxb2TYV5Ntrlkzt/iJ8mhv+utGtIs6b7/2dvlSj2x5T4/31qxDmzMOxVPJ6XjSj3NC82e0HlDEYTXS5aP/ADbaFQPJ51Q/Eg9DvVFJDfin5167uqbsogBQyHdgGt7QVj77EH3dh1IquD2O4CIyXZ8e1I+QiPhFb0PUvb/UXHZfps6yYOF5xt8KkbgfHWk14MehB+Nekf8A7p8FlK5Lp/jN05h6AAL81NVji/sQUz2OIKnot1fzZII9clXG50JWbJ0HMZxusZbh6/e0/wAopL/hyHZ/mKtvMHsxx9qT2XaqPvWW7T/pEP8A9NUm6XBg90g6gyCPUGpRMx3CzpMSeP8AXYXs9cPSgYCkUt+Zol7DmvGQV73ScBw1A1kUFlIpQUdSGlIlRTLEWyTpoKkCh8qb3Lk6GjqCWkomBuhRBM0q+JB2FJiwPCjoIoWEqRWQnc/AUTsI6Uurih7QUdSGlNiKOopaRXBhS1JaUQGhNGmuJptpwCJlohSlRFcDQtOpJFKIU1pcmgzUEUhXE0qRROzpWiiZqBqObdAVpqIRDQRRmWgakiEAWgYVxoQaSKTdaTNul3NJsKljfSBFpEpSltK5hQLV9kjSoS0pRlNEakr1lSysVBZJytGq5hBg9JETS2cdamDx8pmk/CDtK7SgKa+X1+VCEqQSFNLAgNJsKVy0OSpA8qMtATcXKUVxRjYpN7NO1FKgjkUAFJhRQxSDkNKUAriKBRXZDRRAXBPA0ZJrgtDJppTglbdyhYU3BoV0plp1ItwmiLdpftKJcA8KVorkej0iCKWQaUwlGk3xlyBVS5lumIG529T0qx8SeBUVylh+2xthOgfO3pbGfXyJAHxqWEW4BRTHS0lb3yvw7sbFq3+C2q/EASfiZNSVcKSxmICKzsYVQWY+AAkn4CuiAoLnCbKwv9o7nfCret4a5eRTbHaOpkkFxCSIP3ZPowqh8L524eN8TaiY70iPmo+ddxHF28Rfu37llWN1yZNtS2XZRJk91QF+FTGB4Rgz/wDg1sdDms2/5b1SkIJVyNtBOsH7QOHf/pVj4uB8qc2faVw0f/hVkerflXYfguD6Yex/+RT/AOzR7nBcKNf3fD/G1a/UVGpEmvtb4YY/83a38Gj/ANtDiPahwwx/5q0demb/AOzTZUwQ/wCXhxP/AMG3/wDZ2p9ZtYRhpbw58uxt/wD2aJTVVueeI4PGqFs3luFJJNs6pmjKZjUGCIM7VlnFeQbhMo6N4ZwVb5rNbXzXgrFtAbVu0hJObs0VCdDAMASB0mqsjUfp2PFkJplc00FlmJ5HxWkLMR7t0f8A1GhHJuL2yXP96fzrVkvGhfFkUz/L4ynfVOCz3gPJ+NJjIw/z3VAn4NNapyb7Mb2jO9lCfwzcYfFo+hplh8SfGtJ5SxRKjWqs/SoXchTR50g4UryzyNZtwWLXWH4tv9o/Ikim/tg4ullbBaFRWdjsAAFCDUwokvAmBVq4fcrMP2hcQkqLiq1tballYSpD3DuDofdFPxMOKI+xoChnne/dxWSc6cZS7iC6EZYUaFWggQRKkjw61K8Cx2lUTj9+0HAsqqJHuoAomfAddpM1P8Av6Cr5aomuVqvXNaZ4i4abtiaTu3Z61K0IOKcYfE5WBPSu5i4+12JPdX3VGw8/M+JqKxF2mGIu0+hyorPCt3KOKGZfUVXfaRwZ7ri6q5wFgACSGk6kDXrMidRSnAMeqspYiARM1P8ACOLKZKmQWYr00JkfQ1UyWBwpTwGisYC5SRczAT93Ug+Y00+VKKU3k6eIg6devyBrccQbVyQ9tH/zKCfgTrTG/wAt4Y/8sfBmA/OqAjcOCrtit1nXDuYcoERE5ZBM77wPzq8cD5qtx3ruWI7oBOk6jXrNSCcq4Tfsgf8AU35TFT/AOE4VDpZterKGPzaahyOnGUKeHP7Sk+V+aGYjsw7MdRAnQT4SRPnVxHB8RisjXFFqBEnVo9Op6iYih4JxVQAFAA8gAPpU/Z4yOhqj/lbAKeSR8J0mc5x1NFH5WD/tA8ESxiLS29A1hD5kqzISfMgCTVL4dfqb/aI5mF3HFQZFm2ls/wCYku3yzgHzBqm8PxtdJA0BgAWQ8m7KtdrEUqboqDOKHjRkxdWKTNak8TeqC4ji6HF48eI+dVzi+OHiKdtSYrRyxiRnE7TsdtuvlTjFchyzNbcAMNmmQSZgHUQPSapvBuMBYM7HWtG4fxTbWfGKoTgE7q7CNtlXk5UvKDmXOPI9fERrpvsKZvwq7aEsrZJ0bpvoNY18q0XD8SHpSzcSBEaH8qqOx2ngqxqI8Kg8P4wJAhvQDf4TV75O4ndcxbt3Dt91t/UTFOLXEF6AfKpnC8zldj6UPoGv5Kackt8KR5utYq7Z7FYRyBnJKwq9Qx7zZifAdPiKng+XFwqXhmBZ0OaBCjYwoJJ97UkmTpttU9ieZSevTU1TOdOZERIdgDcOUSdSBDNH0Hxq1BhRwjV5VSTJfIaUXdbWtB9lbfaD4Vl+H4lbOpcR6j+dXb2d8ZUXALZ7RuioM7fIHQeZ0qOWUVSmZGUPErwz3v8AOf8A3Go28FbRlVv8wB/OmV3FEu87kkn1zGhW7VuNoLd1CXUU24jyphrnvWlB8Vlfy0psvs8w3QOP9X9KmO3pzZugj0pr4G/ClbIflReD5Aw3g5/1/wBKuvKPKeGVxFoH/MWYfImPpUdg3FWnlyCwqu6Fg8KfU4jla1wZlt2GMBVVGaFEAAKSYAHlWQL7WcDof/MHTSLN0/pWu4G7Flz4I35HeqRbxFz8Sbbjf+X0p90AAq7Wkk2q3d9r+E0hMSfTDXf1FJJ7W8Pr9jjP/wClubdOlWmzinky7Truqj5T/fhTlOJfxE/ACkCnlqo2L9sFgRFjGEeP7tcH5rTLFe1+z/6GL/8A6Z/5VeeKF2HdIXTcmT8pAqDxgcbshPiSQfoTRtClnPGvapbMxZxOvjYIPw1FerPZ3guzwlhYKns1ZgdwzjOwPnmYzXna3ZN3EWrWac91FMEndtdc3hPSvUyCrUA8qpOd6Rq81/tt8ZSMHYLKe+910BBcZVCIY6K2ZwCdyNNjXpDE3gqliYABJJ2AGpJ9K+efPXGlxmNxGJe4Yu3CUAEkWx3bayY2QL8ZrSxmW+1idWnDIS35Q8N4owH2Vsj+IifyA/Wn2HuXTqVY+ZB0+J0qIRra+7n/AN36CnAuAj70ebGK34z8rz6YgnZLY3GBtGzH1cn6DSksO6DXKD5GTSXbRsFP1rjj2G4X/aP5U4uCjDTSlMZzK5XKgW0vgggn1bf4aCoU3/H50jcvTQdkT7x+FRl58KQM+VKYXH211Jdj4DQfPU/Sl+JcaNyBqqjZQSR9dz51ErlA6D6mihpo6ym6AOFJ8Pwg3yM/xj9CacYnioTRbNtT4kF2/wCokfSoS7dPSaJazCkXjgBFrTyU+bmC4eu/gqj8hSTX82ppzhHA3RT6z+hp1dxqH7tseisfzNOaD5Ka5wPhM8M9sbg/36inaY8SIWQNlPX5Cu/40qDuW0LfiZAY/wAoJI+JFNl4sxmYE9Qqj5QBHwoh4ukHR2LU7ax909Ldseir+ferUfYnyG+LbtbzTh1MGJHasPuKfwD77Df3RrJWiex32eNj7+uYWEIN655dEU/jbx+6NfAH2Hg8Mli0FRQlu2oCqNAFA0A/uTWV1HqIhYd+BuV0PROi95wleNvA+VBc1KAyIoAVEgAaADYAAaAQBoKixQ4vEl2LHrsPAdBS/D7IJ7xgDedK+WOsSHq3U3uZwTyfhewwM7EIH2QW8MYmmuJuAbnSnnHuNoBlTvHx6D08aqt+4znxqt1Tp0EEgjiddDc/dWcZr5BqcKXcR4iToug+ppng8EzmB/qPRf5t4D5wKeYPAF2yr6MwEx4qo1lvHovXwq68I5dIAH+Gvhux8zuAT4mTVzp/RsrJ9sEZP38D8qTJzI4RVqCwuGW2sD+rHxP96VGY/GEnugsfBQWP02q93uE202XM3Uv3vodB8BULx3iC2kZ20VRsPoAPE7V2fTv8N5HHXkyfsFjP6w1u7Qs+46XSM4K5thILf7QT9Yqg8Uv9o4W2A5AMl2hFk6nSMx8TqOgmKnuIYu5inaNFIhn/AAj8CToT4mpnh/BQihUTYDYST5sQDJrtcH0lDAah2Hlx/wCFmz9Ve/8AV/AUPwDh0wZELsBAzHxED3R0H9mRurFDjGKamVjxBApIcQVtVYN46yZ/OuzwMNmMwN5+6xcmV0ptCq04tWfHSlMFw6/c/wAOzcaeoUhf9xgfWrHw/wBn189666WV6ycxHyOX/qq8+Vo8qBkZPhQWEugVMcFwFy8fs1LD8R0Qep2+Gp8qdOeHYb3nbEuOkys+ghI9S1Vnmz2sXG+zsjsxGiW4zZfFn0CL4nugedVXBzzYH8qy2m8q6cbw+Gwy/bXS94QQlvLpGsFWBEHYl+mwrPOePaRdvqe8tuwNOqoY+7p37zfwoI9N6yXnHn+1akuy3H6ICTanzIIe+3plt+bVm1jHY7it427Cs0DU6AIngW7qWl8FET0zGoyWs+5UoBKtnPHtPW3Isks+oDmMw/yKCUsjzGa5/EKR/Z64SuLxD4zGFWtYdhktP7r3iCwLA+8EAzGZlis6SKuHI37MygB8beJMT2djaega4wJbzCqB51qXBfZLhbKqqG4ih8+RXBBbqDmUk5hAaTsIqllOLm1q3VuBul10rNhXY9677hUt2auslTJ750jbYfzpLDcQDqChAsgaISACVjSBuF23k/kfiWA7QAMVLqZUlQ20xmAOo1GlQOE5WugkdtCs5uGe0OaR/hwW7oH4gZPWd6qtY1gppU5e5xtwU3i+PKkd3fQDTWesToPM/KKLwniVtyTkhpgsV0PodAfhUVa5aurcUhw6z32LsGjwyGRMCJHjVoxOBGUqAEPiBqPIedMcSFM0NKj+NYi0MsqW10yKzZRvmMbAU8wN9TqpOXYnMGBj1n+dJ9k6DVZUbZSc0+LeHidahMFgHa/IXKGklEbM7TENcVu5aCn7xg6aTRjLjsU2QMaLRsfzCzi6toBeynM7rvBWSiFl0AJOecsiKTs8cuhe8F1BZbsMmYfcgLmBJjaetWO3ycrFWvkOyyMoGVTP4zAa5H8UD+EU/wAVy3YYZTbWAuUQWUR4d0ipDF5CqfWAbKict4cPDjE/+bzDtFNsTbAAlBbgME1BJzS2xq6MdhuSAJK5ZPUgTt6TXYXlzDoSVs2wx3aJcjT75lunjVW5x5EN1xcs32tuDKh8zomkSkMrKdjuw02pskYIRhy6KsdyzPXzPUemlFW+ATtIGoGkeomR8qgOCcIx9t4uX7d62cx1UlxA0AICEAkbnNpTnAcID3We5atB47txZZjMaHZpWNzIG3iaqOgWizJDlM4bFg+fwpwHbz8vCq8ly6hggNvHeAAA6g5ifgdad4fjeaAgDORIQNm0/EzTlQeZM+EmKaxrgaUjy2rUzaxKqD2jqpLQpPd0aAsTAmdB1Pyo+PCkFS0f64JjcT4HrTHAYNSQ1wh3GsQezQ9CgO7D8ba+GXaphmB3g+oFWhM0KqYXFJ8KxVtwy24i3CkLBVSROhGh06bjrrThwP6dTSNowNIHkNPoOtKNdPiD60jMHICItSBt+Ez8NvD08qAWZ8B8tv50qkddPyoOwO4Mj1+kRRBPhA15SIw5Gx/KoXm3l63iUK3UBP3bgAFxT0homPEbGrGriY2MdSfn5movjXEGHdtpnuFZ1IyquneYzA02GpNWI3PB2VeaKN4pwBUotryo161RgwomIP8AfSuF8LpEkW8vrRWfyNNcdgQ+8EayI01G4O4I8f7BUw0CASAPMn86YVIE6ZqiuKdqw+yCyGWS5IEZu/ECZyzHSaeJ60V7hG0HyP6GonEpwTopTdkiud52MR4UpYBjvamkJAdktKTihoy26DLT0kSa4UY1xNJJFAowFA7gCSQABudB86OaSS4CgFDFdStFBnos1z0AptooYoCa6a4vQ1I0uzVwoAaEmlaVLporCitRopWjSTZRRTR2FFJo2jS4UVrdDNcGopJNqIRSxFFK1I15CRAKRy0KijOKAA1cjeHcqJwIR8tJl+lKB6NIO9P1BNopA0GalLlrw+RohFStvwU018IVu0fPSQt0fJUgLkzS1CYpNloxWuKmpNRQ0hJk0K3aPloMlAkogBcL9KrfpPs6Hs6FlHZKpf8AEUcqtN+z86MEoWUaCU7MdKDsPOkYowNNtGkW5hKSuWmFOopK+aaU5QvFr5A1FTHsHshsTef8NsKPLO0n/wBlQHHbmhq8/s94GLN671uXMo/yoP8A7TNWhhMt4WfnPqMrUaz/ANvnF+zwToDDXyLI1jutq/8A0Bh8av8AXnP9prjmfFWrAIiymdp/HcP6Iqn/AFVsv4WIzlVLgmGURp03n+9atOAwZ3BUDz0+JkVTuD4lNjcTToWGnnvUvieJ2lAls8dEJYx4ToKq9tx8K13GjyrBicbcUe+o8IUEepj+VQHFcY9wasCAY07p89hNRHEeYnYRbtx/nOb000H51CX+IXzu3nK5QfyH51M3FeVE7JYOFY/3G1pmDN/+Ncx6waWfF4S2JJRfDvmRHUgmaofEizblyf8AMo+HvVBNgQpnIdfFh+lSDEPkphyx4C0fHc22bo7O2wJBnRWGg094gA7+tIYe7pVBOMW0c2gjeB0O4EfOp3hvG0cSrA6VIIQ3ZR90uNqzrdrnuVELjh41H828bbDqjmw7q9wIxXQgnaRBJJiBIAJETUbnNbsSpWsc7gK1Wmq9cmcUthTNxAFgNLqILGADroSdI3mskxfM1jstLwFy7auMgg/ZMsqO1JjIQdY3OlUbG8FvWMNagWrvaXLYuPaRndBGdLbTKHtCxbMAdYOsQKsszTsFbhxncuXs/iPHbeGtG9eJCAqpIVmjOQATA0HUnYDWs79vrC8Qth0uXCgXuumhVwy6khdQxiTXn/G833bqN2GJcG2tzNh8XcZW8CbbLlQwDAVoP6R/s849eKu96+QkMRbBt3GY90wQ/eAOyxLa6DxgDnDcKbsMJpylsZyViXYTdsJIJBa4v3dx3AwkfhmaksLy/irWmaxcMKcq3QrHNtAuBJn9R4iojkrAuSyKy3bKtfcWLoZLtshSpAVxlNwqZgEK0a60D3HtPcs3WDpfFp7d+4C96ytsFlZrYzZGt/4Z6REzApjppL5CkGLHXlSnE+PNabLdtXbbeBXf0jceYmmtzm9PB4/yN/Kn3DrpN67hsSyXFVWvKWa3luAqChQEd0nWUMabQd6ziuB4O65Cnsbhc2wmZzZkR9+cyE7iZH51KzJ8OUMmH5anOK5uH4X+IC/+4ioHFc7SYWCfAHOfkgj5kU4v8jAH/DDAfeEOp9Gkg+lOcNy2w2Uj0EflFW2uDuCqTmFp3CjuH3L95gXYok6qRqR4EDQL4iSTV5/4hk1DSBoYEARsf0qvYXhLz0GvVo+kmnmKwZAHuegIE+MjWnFgIpBpINq14LjM9al7XFB41lN7ElDpMeGs/DQSKcYbmEf9/wCVZ74y0q/HICFqVvH/ABorcU86oeF4+PGlTxwHrrTe6QndsFaPwjmaG1Jj1qZ5h58FmyWXvXCCLa+LdC38I3Pjt1rLeF4O9eIFm09wnwHcH+ZzCj51eeBexq9chsTeVB1W0MzAeGdoRfgGqu+aO/cU/tOqgvOvF8diQ7O/fLMWLagsWMk67ydfjVj5YwOMugMuHuBD99+4mm5BaM3+ma9EXOG8Pwebs7JxV20LbHIO2uIrtlDlm7oGhkWxOnyHnrH3boRcPkdGS432N5LbOVDgtmc5nVRBZCF1HgJp7s13+kJseGD+orI+FcBuMJYk+IRTsOuYjbzgU9u8JiIUliJAIzSPUmNasvFTemLd2zkvYVWGVltm2A0uyFbhW5ccaMjHVpGwFQnHgua8lywc5uBbD27bIuJBthlDQGa3lyqQbRyyNd+8vqXOUn0zWqocVfEWyc9m4uU6q1ogf+0g/Oi3sUIPb4fLBicuQydgcyjXymtW43zIBBCgo90IbqXLly1axWVcl5splbTjQ2yJkE+o8F5yt3C6XM63AHsp2wuG2CjNcW4LhBEk/wCGzJpoGnQlv1Lqukfpx8rDrvDrLvo1xVDa222I8MygQPnT7EY+5abaUOxU5wPIxqNPEVuXGeULd6yX7Oyzsttlu4chZQEhlzIIa+QZKFCHMxFUPA+z7CnOf3jEWwHVFz21tkuzkDLnyhwoHfhgVbSKP1II3Q+n+FXuHc1+Y/WpzC8azeGtNuLezTEWrL3LgFx7d1kyBZLWlyjOHGUzLDugnQzPSoTB2rM5He7h3Gh0F1FI/EvduLB8zRD2nhLQ4K528bA3mk04yfSou1yziGGaxctYkD/03yv8UeCPrUHxKxft/wCKos//ADCQfgoBJ+FSRuF8qGVp+FbP+LszKiAu7GAq6kk/3JOwGtJc1ey/tbofFY23bAELbXL3RudbjCSTqSE103gVntrGOHYozkEROqEjrouoU/hk+fk6tKx1yzPWT9Y1HxNXHMc7gqm0tadwrjguVOE2tWe5fIO0sQY8kW2P+qrhw3n/AAthQuHsFQPuytsfHLJP+ok1lFvBtOw/P8zR/wB2cSCB6wP51H9IDyVKMkjgK64fi63SzLAlmJUGcpJnL46flS63qxjF2btq6biE6nvAaT8hAPzFT2A55IHej/VKGfUSp+Yqw32ilATqNrS7lyi28TVW4LzI15gluzcuMeluH+cbDzMCtQ5U9ml67DXibS7lVhnA82/w0+Bf0qOTLiZyd1KyB7lCWMf57/WtB5E4deYhipVfFxB+C+98SAKdWMFg8CWW4QrquYR37pkwoz6hWfoq5Z6Cje0LmV/3F7mDS6pDKzP3c3ZrHaEasYUkBvAZp1BrLmznP/SK/PKux49EXv8A7K6XuJwjLEggq3jH6fnWacf9peHw17srlu8AMs3FAK94TADFSY6xOs/HPuG+16/AzMlwzJzCDH+ZMpqfw3tBs3NLtrQg6gh1Enwcb/GqDJ5AbJWgcZlUAr/wvnTB3PdxSAQNLga3v5kAb+dSvFOLdmyoxt94Eqc8hsu8flqRrWaraw+IZAgw66T213IrgqwIAtgDMDEatlPyqU5m5TxTXe0t3rTLCIgYtbCKBDAAK6Nmqb6x4ChOK21bsTxs9bcR4qB+Z1FVvi3Ej1Xc6QAQfWNqU4jbxqqDh79pjGZ7GIysmbZgjAEhTpCwI/F0qscV4xi1DfvPDTA3u4S4p0M72ybkR8KuxZbXDdVH47gdlZvZcxuY+wCogF322yo0dTGsV6Orz1+y8y3sRfugXB2SBIuIFKtcadwSCYtkHbfzr0JWtB+m1lzfqpZN+1dzScNwy6FMXMQRh11gxcB7Qjqfsww8iRXiDAYc1u/7cPHS+Mw+GUyLNo3GA6PdaBPmEQH0bzrE+G4Nj0NbWJHsuN6zPb6vhSFjKNAMx86NiLg+8ST4DalFuBdPyrrGGDanQeNaZG1Bcxe9lNlveApxYwLtrBjx6UtexNsDKgk9WP6VwDEb0A201ziE1xPd0G/lTJR1NSycOn7y/ExT23wdB7120P8AVJ+QBNAsKcx9DZQdsjwo9zEHwAqYLWE0X7RvEgqvwG5+MUW2bQlmBY9BoBPn1ikGfdAu33Chkuk04skkyacWwWOggeQp1csgDcCnNZ90x8niklevkiAAo+ZPqTSaI3iPlTZ386EyfvUSU3Sn9iyg97vHw6fGpvlXgRxN63ZtKM9wwBEhRuWbwVRJPp41X8LgjufrpXqz9nDkQYayb9wDtrwgDrbt7hf8zaM3+kfdM18mfts+60emYBypgPA5Whcm8tW8LZSzbEBRqYgux95282PyEDYCmPOmKIhB11P6fkT8qs4aqdzoPtB/l/U15n63yJGdNeWncr1TpULGyNaBsFD9rFM8TfJ3+VPjYG7MqjzNJ4S6jGLStdO0opYf7vcHxIrw3G6blvbcbTv8LqDNG3lM7OCJ30qW4NwE3fdJS1s1we83lbPTwNzp93XVZThnLLMZvd1f/TBkn/Ow0j+FdD1JEirUsAQBAGmn5V6J6Z9EvLhPmj8N/wDKys3qhPtjKb8PwKWlCW1CgCNP1O5Pmd6Uv3Y9aG68VHX7lerQwMjGlgAH2WE5xO5TfGXKx7mW8+OvdnbnsEMAj77bE+nQeWvWrtzji2ut+72zE/4zj7q/hnoSN/AadameWOEKiAWk0Ed9hA/0j3m+gq4HNjHu5UJaXnbhYn7RuYrmCfsLPYq9u1bdhcALNmkjIpEZQBB3Yk6Hw072He0NcfZbuql6yQt1VEKZnK6g6gNBBUkwQdSIpv7avZpg8aFe67WryLlW6kFiszldDo6gyRqpBJg6kGl8icKs8MW6LDvcuXcoe7cAXRSSAiLIUSxJJJJ8elSMb3G0FG46HbresfxG2gm4yqP4v71ql8R5+wtsns7QZvEKqA/GMx+VZRxrjT3GJLEnxJ/Lwpk98KCzEADUsxgD1JqwzEAG5UD8m+FofEvaZiG93JbH8Ik/Np+gqj81cyuRmv3THTMSZ8lXqfICqhx3ndVH2UH/AOI4hf8ASuhb1ML61nPDuYLmJxIt2RcvXiDDKuYj/KPdRRuXjKv1p5EcQspjdbzSu3HuaAu5NpYmNO2I8TPcsqfxPLeCmsc5z9o7PNuz3UnWJIY+LFu9cbzfQdFWvQXBv2fjcKtirvWTbtqpk+L3GVs7f6Y8KsI/Z34V1tXCdy3buPopVR6BQKoT5gO1/sr0OKfheevYH7Mf+IYgvimIsoquwzAXLhZsqL1KoSDJAzADSJket+AcLw+HthLVtbVtCwVVChf8xBOZifFpJppyVyfh8EGGHRlLaFndnJGpA72gAJJgRvVgxVsOVLLJWIIkER6aTWdJPfCvxwV+pJ8M4tvnAQGMpJALDxIB7pnpUhdafT0/rURxDl9LgjbUEEiTI+In0PjSvAeE3UBBuhl1IzDpOgk66eBn1mq25VqwE5sYVV0AgfwxMnx6zTi1b+J8+lMuN4dwoNp8rSBqA6HXUZZBk7aGfWoVMXjrTfajDOmYahntFRJk6g5oA2H6UxsRJtJ0wGymeO8RSyhZ2UDU94gTAkx1J8lBO1K8C4grrLZUZ2DW8zy/ZlQVMGGBOpKnUVn/ABTE9tfU4dVe4pJbEvL27ZjQLm7qmPu2wWJ3I1Il+E8JRcruRfvDU3LkSup/w11CDw3bxNWAQzkqBzDJwr5ib4iCemhBG/QiZ1ptyniLRV1talGAuPOYu5UHMzgnMYIn8O0DQVWMY5I1mDqCIJ9Pj4CmmD4o1vuoQgOsKRAnyAjMfA0hkBQSYTvlaIxPrUfxm7cVZQAkESGMDL126gbVXb3N7plkC4Cdfutrtttp4ip/hvHLdwgaoW0AYaTHiNPKTUrXtdwqT4HMO6WwLFxPT4ifnQpg8pJDHXxMgelPUsldSwK+M6fOjkA/0qTT8pnCj8Op12B8ev8AKorm/hjNbBVwmQ5nzCA6DVlzr3l8QR+siS4vxK3ajNJZjCWxq7nwVevrsBuRUNibLXIN6AAf8EEFPLtT/wAw/wAI7g/i3prmgN9ylh1F3sWa3wShvorPajcW7pzHpDRLAT7wEGD4UjynzJiFZ8lu66swVgbTsonQMJVfdEbsOvjpqt4nxERtpoPAaU0t8RJncR4kbDqdR9aziRe1roGtdp3pPsHjgiqLhVTCgkAhSx1IBMQZ6E1KrcHlrtEfoaqFzGlpUxlYGRPTqSNtaqbYO4lyUCtaJEANct3EUle7bIJDgQTLARI3qJzfhPF+Vq92xrIMHfTWfLSjWpjvRPkP71qp8L405Z1LqpEFc2qkTGVmAUq3wIqx4W6SCY2OpDBh8CP1pC01wATtnjei3FzAqZE6SDB9ZG0GgJH0/s61FsxuSqHLbmHux3ieq2+hPi0FV8zpVmJpu/CrSltV5UhZ4ymY2QHdkQZ3AzL4QzGIcjUL1GtMuJY4Ip0cgyIW0xMkb90EAab0pYshFCoAFB23JPVmJ1Zj1YmflStv5fn/ANqe/K3pNZi7WVKu39+NMrreVK3Lc9TTZrB6GuQJWyAjIp6mk7wPrTe5mHWiu5pqclg1ctqmeQn+dOrAPjTS0FG0phrAJ1NK3MKmbOFGfLlzdcszHpOtJXFO9OAZqNwpPBtBbTSgZKLn1o9ttNo9d6QdaRCTdTRfUUpNGn0opJIDSgUec+u9KgUQ0rSQUBFGorULTgizQGhaimm2jS5qAtXGgNJEIrNRg1FihoIrqA0M0WKSSE0DVytXEUUUArjXCuY0QUEAoDXTRWantKVIC1FZ6KWoKvR1SjcCjMaBD61xNchp+m0LQk0RqMyUGWnURwhY8ogajrd8qIRXRTwSgaSmcUE0TLQgU8OKZQR1uUBeikV2SlrSDQhW5Q9rRCtA2lASFO0BLdrQi5TfNXE0e6loTrP5USB50ktyjB6Ou0tCXDxTXF3aUL1G8Rv6UAd0iNlB8x4jQ1vfIXCRYw1q2NwgLf527zf9RNZj7M+XFxN03LizbtEQOj3N4PiFGpHWR0mtrArcwYqGorCz5dTtIRL1wAEnQAEknYAda+cnPnELWLxuJxTLdbtrrsveKjJMW42iECj4V7m9vfGew4ZjLnU2Wtr0712LS/IvPwr5+2cBcIED6/8A71aLQs4qSt4az0S5/wDlrn6E0B4WmhBveguvEeExIotrDXR976En86d2LbwSSwjfSD8iY0qbZR0U6WzbESl7XqL9+APPWjnD2dYNweX7xdB+Ez9aj8JfLHKiXHI/CGB08dx+VTOD4LdP3CCdZZ4I+v0oGRo5KQicfCiDhN8ovka/88fqKccN5fxF6OytYpv4heEemYrl+E1Z8Fwk2HS5iAGsqwDSxKjNopYR7uYiSTBrbeCY5JAMdmyxbKjupJ0iNIPQj00rNzeomIUwWtTC6aJd3FYXw/2Q3nA7W61obkdr2jD4KoX/AKqHE8iYPCXFFy5dvXILlM4U5FEliqFTEA7udR8r/wC3HnM4O2FswbjyjnRjakHKxQkHM7aLPmY6V5+5pxhu2Ri1uOzaWryXLgV7bEzKKpDG2dRBUZdI6VnRS5E/ucaH2Wi+DHh2aLP3Wk8ycW7K2VtIltslsoyspVkuMe8HnMbgA0UkjefEZo/P927IaybuSQQguKWEnvXILAmPvSCIGtRXHOHvdCNbS0Fa2WW2jEdmA2VixbQt1I3E6CjYThQewBYvzcQPdxGZwiHXKlu0YGZiJ0MA/KrscDWDfdVJJnPPt2CjuH8RvOutzsMOTkPUEEyQAe856yTGm4q44fjwTBi1ZyhmvBHI7Q3otsSrnKB78hQEmAPnW7GKuhtLHZK+ZHLlmEb5srGFFvQyo00ipHlXj2HsXrdxs91l7jPsxYEAMpOiqABpEkDU6mXTNFcIQPN1alONczWrxtorXbJs9oO9NxSS2YWiMpfLP4s2+wioP2h8VvKbKObZVT2qNaMkmRozZVIykaKR3fSrt7RsBhxesYm7buG1ikHaNmyNbxKlRcI2ElCrajUydaN7UOGPg0TLfXELccL2GIFq6yjLKMH1kEGPuwQN6hje3bZWHxmjumnB8Ot3DXsbimxBV2JWLkKl0QFO4LG4SR008ejm89yzxC3i8l02r6Ww+mQIroENt3JYSdGDEwZ9ag+OuxwlhF7G2rGbxW6XDZGyKWt7JElh093XQVLWwyWOys42zfW6zWHt37arctoFzTbLZtB013EASaZRNlPsCmqK5/4IuHulreGe7mTtc95jcRA2yhV+6p0U3CQdKd8D5vdMNaa/ZtX7V24yW2AXOpVhvbygAmWCsYbwOkFDi1y8ttbb9o1xbYtpdw0ML2FdSWFxR1thdO6CBMgxNE4RiTbtYVGW01u61w2TcXtJk5LRbL3rbI2bQgnUHWYqSraL3Ud+/ZWfhRvWMQxlhYuvcNy3fGQImwN0RFwZisMmsTmjQU4T9yxTOjs+CvI5tE2rjNh2ZfvZWbMoPSCq+E12G4oLhuZrZF2zbey2FcM6sSNXtO47v2hBHgDt41rmLksYbChnOXEtdVmMhpLFgbZiAoWJkjUnQxvCHV5oqVzNXi1L8y+zi/YXPmu3bYE9tZuZ0HmdAyjzYR51UsUn/wATEeshjW0fs7jEkNmDLYI0n3S8xKSNRG8aUh7WeSFa8HwyDv5u0VSFUMsQwBIADTqo6qT1qaDOt+h38qpkYNN1s/hefsZw6TmD3TB0JIBHwpezxC8N8twDq4k/MVqNn2fPIzlEnwlzPwgfWrDwj2d2AJbNcg9TkWehAGu/iTU8s7FWjx3qF9mHs4xOKytdSzh7bRBILXGB2KpIAB8WI6QDXojlj2P4OwAWTtWGpNyCCfJBCfMEjxrFuBe1MW3NrFIbd22cpdQShy7OV0ZSfeBAIjaK1BedmxNtP3e9ZjvC45JLEQQIywUO24+Wtc9JkSaiHj8LaGM3SNB/Km+J874PD3WsSA1sbKAAGy5lt97KAxUFso6CqnZ59OJfELkVkCOERg9swgys6uDkftcxyQ2hXprFN9onDXW5eudkXW5babrlyirkIKuVcqboygK5UDvRIiahzxo2sJZufvqXB9mewv2ke1cUMU7JDazOpT7xaJImaljja4AhBwLeU54JyqblpHTKilnvi8baKTbw0qiIhuyyudWQxJMx4RGDwbrdAtW7aC5ZEXbxLXCGk3L1q3cu/ZlJK5ZBI0G9Bw/HXLlrEphWWyli24uG6Hckhw32dtpNkENlzQQIAnUVDcIvYgMe3fE3+89lbJfKXzWyyOBmk2ZAKhCM0a+FXWMNG1Xc8XsnWB5hvEoAiizau27P7qMOYuMgb7VwSVW3cJ1OYCSNKd44DNbKrce32oZyxi9gb7hot2zbNxmt6SFKHSI3qP4txG1K9jdvYy/2KDtFFy2LRsnMVuZiQ6AaMsROpPSp3guEFmzeF27ad8QqX7OZsow7M0NluqAgudFVNNBtrRdQ3ASYSdkhwGzbVrzXv3q64vCLnam2gNwkI47LMD9pBPaBQo31kVH8rYq895MJis95brXpt3kIOHuE5ReDgmRMGRIgzE7vsJgLRuLlz4S4bty6mICs1m6LQ91s6FrZuNvqykwdZBoOM8B7V1u2vs8Yct67aNw21ZSzMShcIFIAXNaUZWXWYim2PPlOIPhPOF4uxZsXDea8LhN659qLiM99XAtvYa3KNbHmPvGSNqsnLnMqlCrZ0TF9o9q5iAStrGBCmIsFSIAfV1OkEnXY1AcOxc5mt2DdRbTqbGFvriLRNxyJ7G7DoWkMMmxAqT5OvK1u39iLthTdtG3YnOlws2VsThbpiTKqXUnvE6gVXeBRKnap9+LWmuLYtFJtqvasIFu7etKXNpkvH7ysxZkLMY0mAKd4zhGHvKHuWrOQqcsXQ2a27jVbqJn7ZZjI5JI2naojidy1jXL2cy4y3mX91dhZJi3GoYFSyjVL6GQYB6ExHCDaXE4XC3rd4q6ZsUcznNdYBrQurlS2YyKC66mRBndlbbJKL4pyHchrlhmHYi5nkPauZ0fQJm97ukEQVLQdG1lrwD2nYlBlvBMVaDQUvAMfAjPB/wCoN/O84PBs2XIDea3me2hNk9phs5PY5oIW/ZuDQuJAG/Uvj7LrVzLdxINqCS4DIO0JYtLgDKjQQGyGT9aAnaB70nRE/pQYfkfB4ywt+3bfCm4P+WYCtJEZCChWRuuWfKsx5x5YfCXTbe5dMAMrK6gMp2IDDMOoI1gg6net5w/MOFsgJZhwqwoHdRY2gnVj8yaovPXDmxWI7Q3QvcVdFZmGrEwAVA1bYyfnTsDMd3CCdlDl4o0WBuswe48e9dYeV2THmFXSkFDdLlwdYN1gR6aaVoOC5Ttf8xrrwYOq2/iRBIHxqcwnDcHb/wCQhJEguTcHxzMY+VbDsto4Wc3FcVlXAeV3xLZbfaXOrHtmCoP4idB+Z6TWmcm+weyxDXS90jdc7C16EmHf/pHlSWD9pFjDYh8PdtratsQyXbawkFQNVULMEEZgD8K13lPm+y1uFdHSe7ctnMBP4o1BHmKx8nMle/Tw1aUOIxrNQ3KSscBsYS2wS2kojOLaKETMqkgQIkkiNZOtYhyJ7YMUb4W65uJcV2uKVBW2oVjmtqoEBCBoSBE71s3GeN5ne1ZZXuDvOx1RAY1YmM7Hoi/EgCqrhOQLFsEQquZZ3OTvTqBPReuUaCqsTw0nb91YLbG6zHDcxqyuzo1wsM7nEFgC5be1aQrJiIzNp5CAJbhfP3Z28gSyFNokLkK5UzEZYJ1ZhvrBBk+FRPtQ5euKGuWO8w0CLrnAMwFWdQYI/wC1ZaeCcQiTZZZ/GQDB6Qxn4EVYjj1b2P3SdIBtSt3H+NYMTGHRWYx9m1y2yDyh2SR5rFUvjPFjbMrnNsgZS6kHXYE6Kx8x6xWh8p8YAebqWrSWMvZ2CFYNcKw964YzMe7oSYzEbAVdfZ7jiz3EuAm1dVnYMc2WCINsNOoAiPDakXNYdxac0OcNjSpfs74VYxKhM10XWt9y72ndDn3fsgDNsHRge9BMESKDk32osgyFzoYYFiBK6EDXar5xrglosz2jbzARmNtDI8QbfZuJ8ZpjyZwa2jMF4bhGI7+chhMdFN8XRJ8AR/OHWxwN/spDqHCeN7S7N1cl5S6sNF0OsyNdG+RFN72OwVwMQ9+0Oo7Z4GnRWdpAimXOnAsLic6pbGBxizlQxbtuRByOidw5h7txAp8QwiaTxvkbE2bSML1m5cbQ21zAgmQArmA5MRpG/WnxMHyo5NhwvYP7M3CBbwRuAs3b3GcFiSci9xRqSYlWI1O89a03G4lUVnYgKqlmJ2AAkk+QAmoj2f8ABv3fCYex1tWbaHzZVAY/FpNZz+1zzeMNw17YP2mKIsoOuQ63T6ZAV9XFdTAygAuTypQ3U9eXudeMti8ZfxTMqC7cJWdxbWFtiImQgUHzmoi+xOnaFh8RUJYuE0+tE10ETgAAF5zlOc9xcVIjDwJMfrTPE4qdCdB0o/7rPvGhFm2N5NTEkqm3SOUnZvqOk0t/xd/uwvoB+e9GQKdh86TvMOlA2BykCL4SVzEu27E/GipYnejqaMzDqY8qYfunX8IOzA60lOtGgdKMmHpUfCVgcoz45zoGMeG1EAJ60sEAo9m1PSnAE8ppcPCeYFrYGqZj45iPoKe2raxmICj5k+QB/M1GXIUa79B+ppi97zmpO4GqHQXq7+znhpxOMs29cpcM3X7NO80+AIEepr2Ly3iILJ4nMvr1H6/OvDvKXHbmGvJetGGU6joyn3kP8LDQ/PcCvXPL/FUxFpL1ppVxIPVWG6nwZTIPpWTnaib8LsfTbo2sLRytFqI47wFbxGZnWNO4QJHmSpPyIo3CuMqRDmGGknY+fkakbeIU7Mp9CD+tZGRjR5DNEgBHwV1THuYbCicByrYUj7MMfG4TcPwzlo+EVOhAP70ohaKQe5QhxIYhTGgfgIukc7kpW7drgYE0nbprjL/yqyAmJPEXpqOx9xohPeOgnYeZ8h4UXFYwVCcQ4lUrWpjipXhdq1YXU5mOrHcknUknxJpjxrmoxAOUeW/zqp8V42B1FVfH4y4/uqY8T3R9asNhBNuULpa2CluPcfnY1UOIYzqTA8SYqI41zLh7U9pfUsPuWftG+J90fEis15p9siJIsIFP42i7d+E9xPhNT95rBsqxY553WmY3iGVc0BV/9S6ezT/SD37h8kX4isn5958tg++brDaVygH+C1JA/wAzkms15k53v32JZmJP3mJZvmdB6ACkuV+SMTipNu2So964xCqJkiWYiSYJgSdKqS5pAu6U8eO0cq6eyzhV7i+M7E3DbsqpuXmBluzUgQCdC7MygD3VktBywfY3KHAcNgbYtYayE0ksAC7/AMV24TLH1OnSBpWA/sx8q3MHfv3GDEGyBDKVVz2gI1IhgYMEGOutb/wjmqy75GRbbGSzaMogwBOhHx02rNfKZNwbC0IdDRuKKkl4uG6H08fHSfzpyt6dYO2xB+PxppeALhkJKxMrGX006etSVlpBkfGNvSqRn92nSr4h9urUoniVp2bVitsEMAh7xI6O5Gi79xN+rdKUtXY8IjTXpSeHdGciLhncyVUSdzJ1nyqTvcOtkRrpqCGM+VNe4uPuTmAAbKOv8R8FJMwIH6TVD5vxeNW8L9twiIApUmBq2rOrd1tPAz9avuONu0JdgBHVu8fCf5DeqjxTg13FgBibNgk6Mv2j+BCHRQNwbmuxy1NGC3dRyU7ZUvF8VxuICvcxNhEDB0ZHygZGMl0USWYaAFtNDTvjnOQumLhY2Abi9jacqzuhDE3GuAMtsgbKSTJGka3Dg3s5w1saq1yFyg3HYkj/ACjKpM7GJp3/AOC8Kv8AyLO8zlDH4zMmOhpzpAeFGyIjcpzhFV7dprSAWXRLiJkCAIwkAARHgf8AvTV8FlaWYydVAjKB0WAQT8dKnrAyqFlWQEAJlgKBsqxER5aCnFrAprqyGZ8Rr4GMw+tRSM1HZTsfoG6qmOwJbQuVXeLZgnxV7h1E/hWDQYa2lsad1dgIk+qqekbu+vWrPf4Sd11jUZDIBHUrvPqKhcdwkXPeUjXUk95yOtzUEKPw6SacGluyZrDjai8Riwwyoe7uWBBYjxMmAInzIrsNwt91cCdgIOVfwzEyfCPjS9vluDuYmQZy6eHiFPhMmnt69bsLmdoHh95jpCoPAnTaT0mnMY4nZMke2t1IcPVu7pOVgTLMFyiQVj8R008dKUwvMNl8zW3VgpZCBmUqy7htN/zqCfCXb2UuGs2pkWQSLjA/jIP2Y8QJfxK7VKYdSqhUCoq6BQYEdSABv+Z1O9SzTCMVdlQxYxkN1so7i/MqWZugoz5SEUHO9zXRBEsCTA0qw39O9B1AkakqSJIYTuKj2dtO9G8R3j6GB86eNnyiCubTeQAP1NU5crXsQrsWN2zsU0u3p2keZ29YmfSofiGGXqMxOsgn4Fo2G5gVZUt5hrJMCTsYHgeo9aaYjhg1AOs7MYJnqTt6bVC0g/pVvVXKhL1xRGbXrqdJ/i8v4Y2pl2gg6mOo0liNvCEp1zFhmSARE+RMz4H8R/Ko8cFuTIM6TE6xvBA/KnFxUgDeU6s4tG0ZA8EfCPDxjxqcwONS1N0mEIIbUAN1B2Go8Z1qi4jEm3DXiqIDPZz3nMSCx+6D0X3j0GlT/BOAtey3cQsL7yYUyFA6NeG07EWthu2Y6BzDXuKhmA/SFd+H8TW4iXFkq6hlJVtj1g60U8UAdECs+ZoMK2VV1lmaAqgeBOtFw1wmZ0+e3ltpXPiDp9Nd6lbMFVdCU5v4c5s2ux8xSGLtnwPpv470C32G30oV4lvmWeh6GmuY1yc17m+FJXHpMPSD3aTFw1yOta+lFxCCaa3NKVusaTAnrS1JaUVCadWWNIL60otyKVpUnSXKNNILdFOLZ/s0uUkKN0pO9NGzUown9abScmwuUpbFEuChXSKbqRpKFqBxQEzQZ6GpKkUGuLUNcRSRCKYotKAUUmkiiR/f6UEV1zz23oFahacuNAzUM0DCgkgzVxrprg1JFFJrmNCTRQ9JJcGoxFJA0sDSRSTURjS7Cm963ViNhTS4IjUCiiERXZqvNYotSMaEtRC1AzU4BK0oHrs9JK9CGp2lN1JQt5UE0XNQE0d0tkfNQCiZqDNRsoUEqDQg03LUZXpWUgAnFcKTVqNmpupOpAyfGiMKVVqMzUi5Gk2PpQZ6VagZqFpJO7dqHxSs7BEBZ2MKB1P9/SnuNvQDU97FbStfusYzIgyjr3iZI+UT5+dW8Vmt4Cq5UuhhK0PkXgn7vYS2YLas5HVm1PwGw8gKnK6urpWtDRQXNOcXGysQ/a5xoOHsYeJ7W6XI12tDrH8TqfhWIcG5ftECbIPmSQOnnMVdf2tHN7HWrQzRZsAnKY1uOSddtlXc1mmD5SYR/ignUFXnfYE7Dx3qtK/flWoo7HCtWM5aswItqD0KwR5SSfDwihw/Dysx2QEEgm2ob4En+9aYXeTMQwAXNI2LXVOo8d4+H61G8WwGMwhXVXzicwdmQHTumAAD4DrUTSXGgVMQGCyFMXsNGqsCd2lVj001g+AppjccF3CAT+LKp8yG0qrY/iONYd64U/yqLf8A1Rm+ZqExXDerOzNpr3W+ZOtWG4x8lQOyR4CuHGuarBVrTHOjrDBQvXTRiAJHQjqBWe8B5uv4RsmYvZOyPIRh/D1RvHLpPQ0pxLDkADMfHTIBVY4/jGgqTmHnGnppoaMmK0ikI8t7XWtYxGGwnEJe0WtYtgRlkliQO6zLtcy7ZrcMNyKzv/wxfW7kxCHOS7W8SjIuZlGoLvCMNJytlf51UMJxJkMyQRswkEeBncHzFaby3z4Li9nipuqYm4AGaP8A4tva6o8dH8ztVPS6H8K+Hsn/ACqngeFG6pJudmouMpYDtHYExmyg9xdgYMetNeEcOvW7t21bNpikAq5WLhEgFVO56jwmtM4h7P5Q3cBdDoc32ZE28zbhSQCh0924NCPe0rPOAcqscQyYm42FdVLjMBmLCdpZfPUEgjaaljna4KOXHc0jZNOXse1u9cuNAbvKWuCWQzqUUwM0SAPCR1qy8k5MVfXDITbS7PbXyivdC+QGi5mgALG9Qp4TFxrb9neR7hAvFspOUSezZnUhjPuvoTTZ8Few90NYL29Vh2tm20NqASC6EjcQxJ3p5AdwmNJbyn3FrWNtPFzMyKzrb7QzbYrKEqNVbQbAiNqt3OvPUrg0Zbd6xdwqZpUBw/aQ4VxLKylBB0MQNqY8D4bduYW9aS/bv22lwC7rftm0wdyLZEFiJiCZ116UxxPIdw3UtC7Kqva2Itlu4wmGVdVYtCkaxvrUBLP9VbKyA8D2eVeOEcUe7jsRhStm6HDBGBQHsxbWBPZgMWWCe6pzidOlC5XWxh+I2GuC8baODdW/b1RwNJ/EqaNpE+AmpzkH2eY1MULzIbSK5791kzQQQRlOpkbSFA01FWDjvK2CzlsVi79852fIrLpmOwIzkf7h/OEzRsJF+PClEMj2gn5UTxDG2cQbd7Ck4e7me3fuC3msspZylx1BPZZvdBiIPnrJ8ncIxF0XO1uBrVyxcFrs7awne7qByqpaZWGeVkx170U0wXMuFw2YYXDohYyWukuSBtIYtsekxRLeI4hjNLaXWToY7KyJ/jbKsfGoHTnho2+6mbCOXc/ZTnL3DHtWuzx2Js5RJNtYvXZZSpOeN41A7wBPlUkvNOGsoiW7ZvG3JS5iWzZQTJAUyN9dFBmkOUfZS10Z7uKt5ZKsMNDkEbqbh0BHWFan/CuN8NwjXclhrhs5gMQ8XM91IzW0Nw6MJ+6omDA6iq8ueSBv+FO0tYLOyV4NjcfjGBRXW233gOzt775m1f0Wa1G9wY6Z3RAFAAETpuZMCTuTVC4x7Xxcsl8KCXWe0S8oDIixmZQWUMZMZQdAKomM9puIS/et31LC48BAnaKltk7jWShI70+7r4TRjxpT7uE2TJj/AE8rX7xwokNiV85dPy1H1qM4phrVxQuHxdlWOgz5G+OjAg+eU1mHFcQLhRcPYtEDsVvPnZAC4JPcJL2yIyM4zANuIIhfhHJ6YhO0sXpADhrbhQVuITNsEkTC94MYzfWpmxPbuSoi9jrACjfaXyFjtbhQ3yv/ADLRDyo6ZQFeB/lMVm3C+MtbfdrdxfAlHU+uh+dbBwPt8NiDZtYrKTaW7YUhmW/miEKHMiEyQJ0kbgEGj4nm3C4vuY/CqTt21sQ6xptIcQeivH8JqZzif1i/womsA/Sf5Udyr7YMRbgOVvL/AB91z/rXf/UGq64DnLAYgQS+CdlglcqKZM6tla03e1l1VvOs9457Gs6m7w3ErfQa9k5GceWaBH+tU9TWZ8U/eMM+TEWntN/Gpg/5Tsw81JFRDFa7dhUjp3N2cF6Y49yecTiVxFy8mJssVRtCv2QtlD3bTBLxJhpDKwYT5VkntA5IXD3EBuXbaqxCvcQkMFZQnZKO8FIMGTIYRqKrXLPNty0c1q41s/wHun/Mh7p+IrVOX/bAxXLirSX0O5UAE9dbbA22jyC0g+WI77ppjjk4SXDsI37ulq3IcYhr4VuzQqQ5S9h0MhS2QrcFu4pBB20quYrE2B9optJbRrlg2u+hdznCX7uHZXSBmhijCNxHTVbuO4bjQFFwWCGFxLZi3lvDa5keUY9CFfvAfGl+WuRriLcz37NzuMli5+7jPbklzGaUAYnJuwC0Bkircj9Ob2Va5p5vf92wbIuZL9psHiUcOJgrAVV1QgZgLkajLpFR3DOIWVW0UxOJw2S85Iv2mdS1sN2dsHJBQr3DDa9V0qwcE5IxCZyLWR2/eM7dvKagdk9oI4Cv0CkBVnSNqHHckY0GwVtW8SqnVbhFnKQ4dLpObW9lBVri7yNxQ7jOAj23Wojjlm0ttbZuvbvP2GKVrcXUS7cuQLWZERrdoghgFaNIGtSdz7YOy2pfDZ7d/DtcKP3bub941HaTDQFJYiY10Ju/DuSez72IxIyDtVKZVJ7O6AexLkCVRtUhO70inicawthi+HsKbhgNiLk5myjSWaWI02GWYFVn5LBypmROJ2CpPKHKd6Etdkbtq2L7YfFMUAtFpWHz21d8sAgAGQSpGs1LNyxhrRVsRde/cQH7OySiGXFwqcpkqr6pLDKIGo3Z84+0DMCGfNInKvdQH4an61j/ADV7RokBukZU1P5wCfPWomySzn2BPLGRfrK3Ti3tBCBhZS3YX3o0LE66wABJMnWazrmTne47ABiXYQAxzMT/AAqNB9KofAuGcQxsGzbNu2f+a5iY/ibf/QCat3DeSzg7T3e1t3MUF7QW3UlnRSM4th2GePe937relStwg0+91n4TfqC79AofKs/J/Bbzhbjh3YAkKilkSBIkoYZtOkgHxjSX5TxKYpBctXhCk9oLmZDbboGgto33TsTpIO+c8v8At/vr7wtGIgFcsRsQFOU6dCKgOF8wzjHv2gSt0lr9hCEXK5OfIJ1A0ZRuD8Yn7Lmg7UiA0nc2vQ3GuEKlvOb8synKqA3M7a9xSCsu0HQiBBOwmqLwvmgMt+3ca3hr9osi9vJS5lbLlU6Q4EdMrSIMbSCc2uXztkVMJbNtQ3dPbX1+0uAdStvQAdT5yKzw3GYbM5Swl2FVnN7syWAH3nZ4kwNFBPSqwyi3kWVYbg6ky9pXKOKvDNNm+LZQBrbKgTP+JWVLkazsQPOZOacWF7BYg2+0KOkEXLTMoZWUMrKdCVIO5Fa5j+KsMmItC2SSLqr2x7ikZDYBgLAkOEYaSYJAio/h3GsMXaxiLIxObTC3r2VmhlEWswKgAsMoYEZW6EEg24py8e4KvJh6P0ndQHCfazejLiEt4pP4xluenaIB9QfGpK3i+GYja5ewrnTJeZ7lkel1MzD/AFLHlUhxPkzhWIV3R7mCe3CPbJJK3ApLA2XLFog/4dxfTxg+S/ZF2pDm9du2TnKtbsm2WtqPfJvGFBOmgafGjpiIvhRVIDRCWwWGxeCJv4RVvKRlZrRXE2WQGe8FlkOm8IfSpTDe1q1e7mIwz236vZBuLB37jQ6j0ZqoPtGs2sDdsrhrl9b2Ute74hJg28txFSWKyzASBIEzICnDvaVdcAX0tYkeN1PtI8Bet5LvzY1J2AW2Qo9ZDqVu41yeMZrYS4xjuXVQoPGCzFVOm4JB3qycoeybiKos4izlKmFZHdlH+ZdPkW+NZ9wHGYcHNZv4nBMWmA3bWZ8SR2dwR/EtytD5bxXEoLWb9vGCZzYe8FubdbVwL/7daidYGkcfdStG9qXsezfGKpV0t3ViAUudncXWZtsyhh17pYioDmXDcQwdxQLdzEW20Fu6ha4ARpmKSh6gODOmoFaj7MeOYnX94uXFEGUvW1W5IiSGgDKNepJ8tKtnEOJ2gfxtGhYhtNT46fCs0ytY5Tua8leaeYeVeIYi6t4WewUW0BV2LFiu2aAzSOgMQAKsvsw5Zxd7iOBt4i6rW7dwObYDGFtA3NSw01UD0Mda0fnDnO1aUHMoPgREnfNvS37LfERisZibwAy2LYWQNC95p8TqFtn/AHVoYbjLINtlUzP6cZJK9HxXg79p/nQ47iLIs9jhC1i3/E4P2r/6mGUfwop6mvaHtL4+MLg8TiJANq07LP44i2P9TlR8a+deGxZ8SzEyWPUnUn1J1muvxWAmyuB6zkFjNI8pbD4M1K4bhrRMQPE6fnSOHutvMUdsRPvMTWw0NC4mRznJZ8LG7D4UmLSDVjPkKSuXx0FNmANJzh4TGtPlK4nGj7ogUlbuE0qltfWnFph6UACeSnkgDYJMWTXJaHrSl6+vjNIi8OlI0mDUl1YCj271J2WE6jSnQ4iF91FHrqfrT2lMLUph4GpWfAdPjSd/imug/lTHGY1j1NJLaNAvPDUWx1u5KXDmMk604w+EXct8AJpqmFbwpRLpXqPzpg+4T3DagU9UCfKr17MufHwbEEZ7D6tbzCZ/Ek6BuhB0YROwIzU4udxSWNKxrI+ppsxa5tUpMV0kMgc00V6wwntJwN3QX1tt+G5KH5nun4MalrOPtv7lxG/yurfkTXiq7Y/CZ+In86ZcRwDNsSjLsR+sR161jOi+F2OP1m6Dx+691XLzAaMw9Cf511nE3Pxv/vb+deE7XE8daHcxFyB0S9cB+U1I4P2ncVTRb97T8UN/7lNRaVqNzYjwV655k4/czdjbuDtWB1u3CqIAJLPqCfJB3mNRPA+YrGDbs2vA3btvt7uIvsApAORFCqTlk5slsAQoJJOhryFxHmXHXGzsWLSTmIEydN4HTTyqPunFtvcI/wBQH5VIHtAUbspl/qC9j8X9q+GEziQ3/wAu07fVoFUjjntxwq7C5cP8bpbHyXMa80NwVz790n4lvzIoycCtj8R+n9/Ol3goXZsY8/wtY5g/aAbXsUt2/NULt/uuQP8AprNeYfaFi8Qe89x/JmJH+xYQfKiJgEGyj8/zozH0H0phnJUBzm+BagLmGv3PeJA8JgfIfypSzwID3mnyH9/pUrcujxH50AvxspY+egFRF5KBypXcbImHwyIJgADqdT8J6+lbz7J+eMLh8OLNx7mHa7ae4bltEuM2ZiiKwZTkHZqCNIMnxrCFQEy8trqBAgdcsgwekkUul0vczMoOwCgbBYCgeAVQPgKryNDzvwp8aft267cvUXJPNeDa1+7W7xN1iSheyyF8gBVQTm1Cgn7oPeIGtPbMHQ+8oKFiMs67qfOdq88ezDiCpihc2KpcKCMwzRAMeQJMjaK1LFc8q2rW4UMQVBOrfjCkSFI1EHoaz5MjsPpg2W9j/wD5Mep6u3KnMLgm2uZWgzI0ABAg9CYg9DM/Gy4/nPsyTdsygXQ29mImSe9A2JHQ1U+U8favK7J3XkPsAw0HdYeukxBqZxfEFWRd7uaIJGhDGNf1qXCymPb/AFFLkwvYf6anrHFbdy2t+3LWiAO9KkO2kEAHKRtqBprTjjvHFshVBm7cdbVpSZzu5AEEfdkyWiAtYPxa81hrlqXFi4zXEdCQohWWGCnVRA2gmBTHgnEc2N4eGcuy3lJbNcJYBTlJD6quafn5CpiGB2oINe8tor0hgeAhDmuRcuj75Oik/wDpqZyj+LVj1OsB1eyg6iT4nb5/pSeF5gt3H7ykACBOo9Y+oqUTBBhKkMJ6HX5a6057Cd0Y5WjZRBEyenn4eEHp6b0o0RrIBEwNz8PuilMdhSuoBb4aj09OlM8TaJA1jSYmJHUselFjQ1J51JnfwazKkqTrpGkdAY38vmad4EHUMJg76/AbdKNwpQxM6AfeiNQNgDt6inl8RoMsj8vCR1NNk3To9knh75B0B6AH3fl4/OhRmuPcUhYTIVkAswIPeJ0EA6RvOvUU1xd5VE3DlXfU/lOw+tR7Wbt7KQxsWgQ2YCLzRtlBnIp6s4k9F61JECG25RykONN5VgLeAXTzI+MflUYuCTtu0cMzt3bbOQVtkjZF0AZgD3tW8CJineQ/+o0ARPcP/wBO/oKYWOBqLi3TduMyNmRWYBA0QCUVFkjpmmkJWjymuhcfCllWPnGuh/Om2KVF1I1PlqfSNh51Jm6CDmUTtmQfmDp+VAbAjuESRBB96PQ/oTVKaEP3BV2OYt2IUJe6QwWN5AYED7gE/P8AOnVjEMYkKBv5x6bAnwBMCnWO4aGGUjwMbaDoeseXWmtzhUAZWZSDmOWJI8CToB4aaVFRbsVISHbhL4rXQwCRp4+uh3qnYXlkSe1TMVH2dxHuK5AMjtADEiAeoq02sUAcu567wNY1JpbMBoupiY/U6/SmnVftThVbqie0LDYhsMyWUOYxAW6FkAySC33jAESNCfhScHzNisP9ncts+RgX7WXKZxKrntnMw0032rT+LcSLMLVkBrjA5j9xR+JyPdX5ltgDSfL3I1i1mdwt69cg3bjjcrOXIuoRV6Aa+JPSzo0t9x3UPct1NGyqXKjvcuB3w1pEV84d1dnY+AV2MQSSGyiOlXzA41byLftksjFhqDurFSu+pBETsadYrg1plIZBBBEZnEg+Pemj8Mwa2kW3aRbaKO6iiEHjp4k6nxJM71A6nCiVOCWmwEhbx2bSCD57fnsK7EEjb4xrp40uuCEz565fPoR4ekU6XBAzBn4n8t4pgjPhOdK3yo1WYAncnVVU6gDxOmvmdvXdHCXiwBYFTHunWfPrHympK0qzAmRvI0H6ennSrWQAdhoZ8vXxJp+/lMscri/hSYc+FKi2fGiQa5ZaS4jzpNFpYJNJXrEajXypXSVI8TSGK0/7Ue25nb4+c7RvS2ehdpJKzNOEvUg9wb7CnVm1pJ2/vajdBJEe9S9ltPWm2k6fpvQljQu0aR7rV1pv1pMtSlhOs6UqSSpXSigUIrsxoFqIKKU8K6aEUQ0EUIaitQtQE0rSpFK0UoKMaAUE5FigFGBoGakiizXH+/8AvXMaA0klxoDQE100kUUmhF2N6A0Umkijo9AxFEakiaswkhNcLQPXEUWa41dDlFSECi12agLU4FNpdmFcDXE0NO1IUgDUYUShpWlpRoopowego6glpRctFilDXRS1JUig0daIyV1AkJwCOpo4okV2em2jSMaTvN/ZpRRTfEvQSUbxZ4qw/s/Yab2IufhVEH+osx/9oqo8bxAANa77F+D9lhFYjvXj2rf6oyj/AGBfiTWr06O32svqL6ZXyrvXV1AxrfWEvFft5xuPucTxZsm0LasttZuQ0IiK2njmB3BqpYS3xRdAbZg5v/zjXXpEAfCKm+auNs+LxJg97EXtSII+0aNZGkU/4W9zfWdwTqfnP0qk87q8xu3KrdriHFQdOzGmy3kC/EAAE+tBisZxcgBgjA7DtbREfz1NXvhmKvSZKAb6xLDTeAP78aR49jrxgLEE6joB6b0wHfhOLbHKy3HYjiNs95FBOsgodfIgwfSo04jG6krrM7rr8ANv7mtaxNhiuVssHcLaJ8ifEa+Gv5VXeJcvt3jbLMBpkOZWJ6ROh+MfGrscoP6lUkiI4We4r956gHxhlqIx1q6Zm2fTumrXi8YZgo2m6mdPh0qPxli4xBUgCNQRv9f5VY03wVBqrlUvGYQndG+lMR3DK5h5GrjiOGOfD6fSobGcEOv9/rUb4rCcySjsnvK/OT2nBRmRxuB7rR0ZdmHqJrRLPOOFxKlMXbAJ1DBM9sTvH/Mtz/AaxbE8N8jSdnEsm8kfX+tZ0uGOQtOHOI2ctrxnKnCru2INtRqALxGu2i3UaNPMUW3g+FW1ZGxd28jlCyO8iUmCMlrSJ6GseXiK9dPWjLdtdfXc1CIZBsXFWPqGO4aFqPBuKcKw7B7Vm5ddGlS7NHyJCn42zU5xL2sXf+UluyCI11Pw0An4Uy9nfsluXgty6f3e0wBCgDtmB2MHS2D0LSf4eteheSPZThLCZxaXMBo7w9w+eZ5yz4IFHlWVkSx6iLJIWjGHhoJFBedMPh+IY0got64p+832dnz1bKp/0yatXB/Ym0ZsViAoiWFkaAfxXXGnn3PjWxcf45ZswLtxULBsikgFsoJOWd/CdBWP8e9ogxivgci2rztlJLZ0XIynJcygHXVZBynx8GQull/QKHyny9uP9Rsq28q8t8OtKXsrac2yQ1242dgVEnvPIDaGMoH00pNj2yTfcMU7Jma0LREuixCuGB1ckaDQ+HlVeJYy0WWyz3EDhmxBtuGQXUVgEKyyqGyroJIAnrpG83cMDFCl+2jNZOKZS3aq1ySAoOUFXKj3YEH51oQ4YDvebv5VGbKJHs2pOuCtft5ezQgl3UW3LYUkAEMWOeLjMIOYAQfEmBAYnna7bxJa9ZslGEG32WZWGUKLoMDMWEHONTvVT4Mz3Wz3Wd0TvFSTLxrkQk6fDarvheJojsz2VuYa+ULWnYBrKyQBlQiJA0KgHURJFafbDVm90uSuP4fY+1axau37bWrLO+Zv/L3WJZwgEM6wCIOojXzHkHjww9yzmZmw90q9zMQGtXASFIymSoGo6MDtpQ8N5rGEW0Qlxh2t821KtaIV+6gIIyuhE+JmQYiqZw0WhZxHaKwvKUNor0OaCCPwQTBGoMU0NJBtOLqIW5cc4Th7uOe4lmzdXE2DdUNcazaZyMtwWjABaQGGu5pjy1cVcQ2Dt3rtkkDJaxCo9ntEVg9i6wgnScjzImDINUjgXNatg+yuJd+we29plUsphiHRmIIQFTJadYHgad8Yv2LKYbE2s1q9cxBNwLczA24l9DORlPdkTMT6QCMjlWDICNlOchnD37mJy4ZyllGuL2ly447re6MskQVm2B4mTrUjhUtXwIuq1q3h2zKz5brFmaIQpnLWnOxaWHUzrLhLOBskWbZjFDtrVyGuMpuK4KXTaAIFuJBEgTNQ3C7+FfsUxS27q3Ss3UtOuJw2UMqC4qkO65gTmAIadfKLVZJHCmqgAVH4Plu/a7RkZxdU58OVK2+1srmzuO9mDDLITXqDuJs3AufHu2CcXYTF4bP2ZuQuYNEgMIKkxqCwHk1Icd4pYVsOlp2uXUZULWAbSj35t3M+ga6CM5B1nXrSNrh2WzcSzcDL+9pcTtuyUJqZtk5WZkZhl7oKggD71Mc0OFlEO0mgmnFfZRgMYC/D7/Y3Tr2DyR/tJLr6qbg8hWWc1cp47BE9tabIP+Ynft/710Ho2U+VXwWu2uYtgps3LNwutu3bcLlEZhOhRp74A0g1Y+TPaDiFIS79vbJAOfS4B4B+vo007W9mx9w+/P8AKWhj9xsViWE45m0NWfl/mi9a/wAG/dtjwS4wH+2Yrcec/YxgsYpuWl/d7rAMr2gOzObY3La92OhKZGB/FXm7mrlLEYS69m5o6fEMDsyHqrDUHTwIBBADGxTbN2Pwg90kH6tx8rQ09p+PQdzEs3iGW2x+ZU/nQWvabxFt7zb9FRflCzWWWsTeHQfWp/l3AYzEMEtjU6d0TE+LHQepIpOwtI3pBuYHHa1oN3ne6O9duQYiSZP+5p+lQWL5zuXmCWEe652ABMnxiCx9YArQeR/YGrENi7puNuUQkKPJrpE/BAv+atnscvYPA2gFQWwdlsqCXgTqdXfzZiazXdhp2Go/2VzVKdjt/uvMtjkK/cI/fcRbwqmJtlgbmU9SimBtu7aeFWjjPLeBwmGd8KbN6+ty2vaswuOqkyzi2wyxpEosid96Z/tBcON7FC9YyxcQZgxA7MoMvezZVUMADAnUNVH5dsKHRVbtb7goFTuqk6Tm954EkiAAB6VaGpzbBofARbGwHcb/ACV6KwvO1hMHZxFzs+1a0sW10YkAg5dYEwSSYC/SsoHtRC8R/fXi8VU2rNtZCWVIjRyO80FpOWCWJ10FVfmjiRazbzMVHeyMphbiKxQqFcQGB1IkAzNUI4LUxdhd5IIJ8t8s+pp2LijdxQyJtPtaFZueeP4S7ce5+7qrEaqlxgpbqxCwAx6xA8qsHLWHtqJdFti0naYjuqOxtv7ltSQzviLgiJMIGOhIYiicJ4RYlnzuXS7ZyWntgreDk5pZW0ykaiDInWnXPXNJOawhGTMC7AEdrcE5nbx1MAdABV58NjQN1SZPR1u2WjcS5gNrOymVVkttBysou2le06uBJLgMjFgRKr+KonG8WuPmuoTdFsSyuMt5B4mJlR1e3tuQo1qD41xKcPiCT/iYbBk6aZkZE08+62vkarHKnH7iXEKz2ilchH3ugU+PhruNDpVYYQDbAWgM8atJ8q94Dm+3ft3cPiGvKL7W37UE3Oye3IByEDOpUlSAw0gg6VXOHcOClZvgLJIm2+UhZ8dQT4Cd6H2i4a9auEyyo6hguXJkDjNkAnVQZCkaEAGrV7MeHpYtribkNinK/uy3FzKgJI7QrMSAC2YiFAEamVkLQxlj+FCXmR9HwrHyHwm5l7Q28ytlZnYXV7RUzK+hUkFbb95wQSsxqwjReP8AtCw9hR2TKxjsSk3MikDRmGXLlHS3oPGsixPO+e5jMjs1pLdtVB1FxFv2+3uEEmDdlnMagEAEBRDC3xRlZrJdu2Rilu60QyR3FuAyCjLGV4JQ+INUJMVznaiVejlYWgK/cLxd13ZWv4XG2++4tX7eUEnQWkZkKLcP3VzAeHnCvwbg+JYqy3uHXpgrrkVxoQVfMBB6A2/hUbwK5dZ+xuW7il2VmuWEAuBkMQyKDbuQT1IPXSTWp3vZ/hcQi3797tbuQ57i3Bae4wM5GGVlZ10UmZIjypdws5P8Js0DTu1Zbxv2NYlQXwt21jLfQowR49CxQn/LcJ8qz/FXL2HuAXEu2Lg2zBrbDzBgE+o0rXee+FLh8R/5L94sjskuGSwAZuiO2VntnQSynvT0innL3tHZ/scbaS/bBhsyKWEaSVIyP8AD57VYDzpsi/7FU3No1wqtyt7XcZbAHai6o6XhmPpnBD/Mmr1gvbFacRfwYbx7Mow+AdQf+o084z7GcFik7bBsbBbVcktZJ6hrbGUI2IVhH4TWH878HxOAui1iEOslLiS1u4BuUOm06qQGEiQJE1u1HMfbz8HlSGQsFuWtY7njhbTOBaY+9aRv/wDoYr0N+ynatNg3vWbQtJdvNAyLbkWwqTCyPeDCZrwY/HwR7r7fh/rX0b9gvBf3fhmDtkQewV2HUNd+1YHzDOR8K08GAsO4WVnzNc2gVWf2vOI204TeRyA11rSWx1ZxdS5p6KjMfT0rxHh7gFeo/wBvbEgYfBJ95r9xh/lS3DfV1ryxhLc10mNsNlwPWTclFSBxJO2goVNCqAUKNV3fyudNeEVlJpW3hDSyYiKG9ihTw1qiLncBIMlcopxaZetL2uJAbIp9RNO0hN1H4TFnXwo5bwFOrVhdWYfLxpFbUnQGjoKGoFFQVzml/wB3rkQDeD8aOkpuoJBMcV1ET6A/nRm4oxOu/oKWCWwJY6+A1pu2ToKbpPyn7HwjNLeNcmGFJEkbEj40jcB6maBP2RDfunyKv4vpTDG8SCmAJ+lHtqKTxd9V1KAnz/WopidO2yliaNW+6T/e7end19I/WiY7HIYyoNOpOp8tIEU1u40H7ifI/oab3bkkmAJ6CYHpJJ+tZckpqlebEOUe5fMkjQHp0+tEN40m1Faqbt1MEr2h8qTe9RDNEZ6ZSeGoVuHw+etEKzuSfoPpShFEU0qUgPwiPh1/smm9vBL4T6mnDSa5zFIKVr3DYFJ5ANhRe3PSi3b9JZvnTgE8AnlKC51Jo1nGsk5dCw1bqAZkDwkHWiLhJqQw3DwUJkBljQg94Hw0iR4UdFqRjw3hI8KxhR1cKCVB0bUEEEH86nrnMgcKi5hk0CO22/uNvMnQHTy1qGw9uJplisKNfzqpPitebPK1cPOdEK8K543FXbbC5buMY7sxkdZGY51jYE76qR6xWgcP54/eEtpcA7RGUmTFtwNNCdQSZ0/KsVwGMIyIdFzqWuffUAQQDBkdYg7VYOD4u1cJDnIWYjtEBYbjV06gakFYPkKzsjF0tpbuNnNebBW4cu8ZSLzZLQuhJFx1Ny2gJE+73rQRpm6qkEkCRNPeNYvB3rlm4+MwpuIEK3FL3HLrvbQhFCo0xBE/GvN/MPF2tABLmqq1suhYEqTqD4iPhrVY4Njma5bXMxXtFgAmYLDbz/pU8OOCzV8IvyTqrbde4+DICsDprDb+lOw7W2lSRP061EctcYtOItsDEyPvKeoZdx4/zplzhxC4mVkI0B06NqJDecaiPOrGP1JgZpfyFBNhPL9TFoWA5i0i6M23e6jy86kVa0ZKMOpgkA/l8qyzlbjPaFwRGpKmCAVESJJOqk0+4kCVaNDBgjxrSjZHMLaqbpZITTlebN5GbQksfTX06RTLjPECjC3bVrlxpyoBJ03O4CqvVmgCsl4F7T71tyr4dXJEyGKmBodSCNYnep72H81tiMbjbtzu5bVm2qjXICXJHxIE+amoi1rSrAe5wV/4XwXUPeKtcXWNSls/wg++4/GdugHWXvofImP7k04wN9nztl7gMLA6Lud51J0oVX/t+p16VWybulbxSKtQHDr7Fm0MAwCVIE+AHgPGpEDwI9enwHU+dPHCmfzI38hTe5bI1Lax5QB4DzqpwrXJTe5cI06Hr4DxjQTXXLYO5jw2+FK3Lc+XXf8AP+VJ5fn8/nrv5UwmuE+r5RGvsARuAdm1n06/Km+L4mmYIAe0ILZZ0yggElugnQA05HlHiT/e9RXGhbQrdPcIkeGZDqVaOkwZ6fE1NH7uVBKNO4QYfiOpDW51EZWkx4wwA06QaJxbO5FqyOzDA57twAZQIkAT33I90CANzTXl7HJft9rbtuqlmAbIzAqv3lYe8h6MBTvid5EBhLt1iphFt3GMnfUqFX/UQKna0NPCgcdQ5Utwfgq2kCgNvqzRmY/ic9SfkBoIFOxht/7+Fdyu9xrK9qIcEjKWDMqSQitHdLAaGCadvaPiarzxucbVmGRoFKHx9oxoZjp5fSuwmIWImCN53n+VPOI2JiIPiAY+dMP3YdRP99Koye07K4z3DdDctxqNZ89PjXfvGX3p1MBgNf6UcJ/fl50d3y+H8j0+FOZJSD472XDERvDdNd9fMDeo1+JzmyqSqkqRKkhoJ1XyGvp6U5sXJJEeWuxPWmXGsVbthrjEDMsESYcbDQRLAkQd+laEEgk2IWfPGY92lS5Uz0jxn6RFDFHJ/vzopIrigt9dbQRRbgpXL/OkMViCpUBGbM0ErEIIJzPJBjSO6CZI0pyCId6MR/f60dl/v+lAx+FNKITImenlTmzb8zpOk6Ulik67/T4zTmwdPXr61GPgp5+yI2EHjR6UU/lvRW/v+/Gn7DhN5QBfGjO3jtp9dhRFNGU/3/SlaVI9s0YGiZ9dKENRtJC1EDb0c0UxTUggDUU/3/Ohj4VwNJORB+tDNCRRJoJLiKKaEnagH9aSKLQFa4mhpJyAGixQ1xakiEWiqdaPFFuN4UgkiXXpJhRHahmrUcZQJCAUAWuz0HaVME0rjQAUJNdNSgpiCuU1xNARRpC0YUJoimhpC0dkJNdJrjQEU5BGBoQ1FJowFK0kIoVWuVaNTNSdSELRcgoQKBzQ1I0gYUyxj08Z/wAqi+I3ae3cpjjSNybhhdxllGUMssWBEggI24PnFb9bQAQNANAKxz2I4XPibtyP8O2FB8C5/kpH/etmrpens0x2ucz33JSCmfHMcLVq5cOoto7n0RSx/KnlFvICCCJB0IOxq8VRC8OcyYHLdRdrhtJdvkkz2t+bpENpKI6J8D40+4fmAJZZ10aNT8VJ9dqX54uWrmNxNwkGb1wCIiFORd9dlG1P+X8baAgeMSQDB8d9qoO5Wg0bJri8dcOUAgDTTvGPUxNSOBwbvBN614aqxj5r+tTOEuvOjLt0tpH5xTvD4htc75VA1hLaz6TP0pptPtRuN4JbjNllonMhj4nWoXiODjYCfCNx4k6/zqxLjLAOrhp2zMxidp0gU14jh7LRG0/c1EjxJGg+NIApWFT+YuDriVyurAqe6ySCAek5QCpPQ/Cqhxjk0WNYzLsWgmPIydD16itcxGFEABSdiIefnIIjypezw2f+UAesvv6ACflpU8cxYoZIg9YPbwiH7g+UD5zQX+EL4D4bR61rnMHAVmTbsAHfMr6H1WCTUWOXLB3K/wCntAvzzVY+qb5Cg+ld4WT4vlsHYj0B/rULe5Z1ganoBM/Sa3/A8pWzstqB/CxJH/4xz9BUngMIts91FEyAVVVP/SQf7FQvyR4ClbjHyV50w/s9vPEWrmvVhlX5tAqf5e9kjhkuPkOUh+ygsXyGcpgAQ0R13rZuKcUsKIe4dNYVmzEjxAkD4kVXsfz+yDuDNqTNxpJB6Quo9M1QkyyCgFK0RxmyVa+V+bbWIgo0P1tto69dvvDzE/DatHx3Mo7B2hi1tCxtgSWKiYUdSTAFePuMcSi41wDJmYt3AVyMdyOoE+B0rQOTfag65Rd+1X8YgXR8dnHrB865vJwJIXEhb8GZHO0A+FEY/mlMTda5cxDWWe06C32aNbUgLFsK2Zk1JDHQk7Hc1Q+McMa7ebtLly1dUm3JUutzs0DTmTXM+4YzMjU1vXMHJ+D4gDetNkvEH7W1pcBI2uoYn1MGNmrI+ZuBYjBZkvhrlu4bI/eQ7i2otPmUHLqjRpDfAmtbByYnANGx+FRzMd493I+VBcp/uDhe0t3FKtLt2uryN+zaAQGmQDJGk9aTtc2szMtm3at22uIWtgAA5VyExPdBEyoOs9aksNyUuLGIvWLltDZLXCruT2ijVmtlvdO+jbmNqjsXwOwiKUd8RfYSCBkt2nGVu9Kke6SIzEkjbUToe21n06lFcYwzveJVHtW3eJKFbamIZkUfdhSR+c1Nc3XsGXsLZwyDIoW7fR7i2yzAZc5M95GksesgbCpFuA3b2As3/wB4tZFuEvbzBbltbj5JkxmXUzbBgeNOLfKl7Cq1y1dS7h8wFwSEbK5yFhafMtxQDoUJIPhrRLwgGFRnG8XiThba4i5ZfCPeIVrZRrhdDsWIDLKyVY6Gh9nfHMEM9m7ZkuzIjP2ebK8hSztqCpgqQQAfWrDzzwuxYwVrD2bpu2sUSWVlV72He04JZCvu23mIOu+81nnJ2PTDXSL+HFy2022V7Yz5T95M0FX6g/ypNIc1Fw0uCunEeD4vCW72EsPZv28QhbtBcGZUyqzhkLd1mBAnUEiVNRPKFgqiWO1W2zXLd3K1g3IQSCWzw0AzOUd4HeN4fgHB7qi+9u4UgNaQGCWBYALcbQJIPWASKn8LzJZvBBjVuWlVRbS8iMXULMZLhMFSd1YHrr1oEEBEEFysS8efDcUuW78LLC3FnPbtrbKqUuW8pML94jxnzin8V4+bOPu3bQIf94ZkWGRSPukdQGmROmvym+Z+I2rVvhyQt5lH7zcu5X7UgsEW0xkmRlzQDA0ij+13jX7zcsDDWrjAjN21y3ka4Wyg21ZlGZFKzBnrHnG0b8KR5+6t3FMQ/wC8XEa0IupbS4ptXSoe5ZhcQ2wZlfukgGCJGm1T5b5htW7ZsYgWw9lXw9sm0c+ZyTnLgSptv3gzbj4ip3gPF7t5LV25h2vth82GcWbjrfRm0FxbQILDLmB+7IB8TVq4X7MDiVU37HYKEAD3mH7xnDyLj9nAML3SLkHXyqu+Vkf6irDInP8A0qh4jEXbTImL+2s3Lj9liQ5BZypXOGtjNCN7yPO8+tn4XyVfxNwFFRbQ7va94JcyQvaWw0k59TA0ncitAuWsDhlti4f3x7SALmCsBBmSABaDA/ehmHjUDzH7SXghMtlY0Cwzx/mO3wAis2fqF7MCvQ4dbuWsYBLeHRFdsqqgVZIzOF6ZRqSayz2n8rtjcQjjLbRbeXMSSdXZssaTlB11iSR0qt8mtfxLZpItCQ15iSZ8ELasTtI7q/StRwmFMFe10gCFyQfDwM+NDFEjXaihluY5ulVDgXspwy+8e0bLJzGB6qoGvxJqTxnDreHtXXRZFpSwTKyEqhzGMogggHU/pTjj3MNm2QrEXGX7qmT6MZgD6z0qr8X9oDkEIEtg6EkdoxB6ajLHlFaf08kw3WcJo4jsrlwfme1iVzWnBB3QaOp10Zd413AIqM9o2JvFWZVlSILKxhBBBVjuo1mQNPWvN3GM+HuZ7bMFmVdZUqfwyNo+Rq+cne2G8sC8O2Xqwhbnx+63xHxrPdhPgO24Wi3KZPXgrOeceKYhmOadNBBJXKNBsT9TRvZRjct+5dYw1uzcIPWSMv5E1u9/A8Nx4JtsLN1h7ohGnztnuP6oQT41nPNvszxWGzNZQXVdSjNbWTlJB1tnvAyAe7m9avRZEbm6KoqtLDK12u7CrOMbtMP2DkZrNxjaBOkOPtAWnSYDjzmq5Z4U1thmuWwNyJLA/wAJgb9PGksBgL5vC2PfYwdNo1OYRIygTB10qy3MVYsxoLrqT3rqkg/5bebLB6ZpmrV6BQ3UI/qG3bJlgOEtbZdSVcSotkNBJ7uu4IOsNBiaaX+S3Dd8kKSxEDM7AHcKsxO0nY1pr4wnDdveAXOjtZthFyJbt90XTAHea53LY2ADHaKgeL8SN3Di7am2yKuZVkWihIUuBmlXS5AcAEFXVtNZiZPJq4T347C3cqk4sYgI1gW3KFliUOYBCxVZy6CXJI2JqetXr3ZqmLs3VFsKtu9kIa0o93XLDAfhbfoZGrTD813FJ7RA8CB1X1gGJ8xU7y9jLzwyrlRtO0uXOzTu9ASRnjaFDGjNI4Ddv90/GhYXWHftSDjvDnvWQveu3sPla3cB7t7CXHhSv/yrpGm4DsD7lXH2ocq28NwwNcU/vRu2raXSzSQLbG8gAJUIui6bmNtqkeXcAFdLzhScrF1QXUHeYAMykQLZJhWCjM4HdO9T/NXNQdVFu3ZZAWW0bpDwGaRcQspChyMpcn3lIMEQc5+adYobBX/otTTvuV5o5Nxi27w7UE22BS4Bubbgq0eYBkeYFXvmDlPEXX7e0gZLWHQs4cBX7FRbcpmguSFBKrJ1jyqf5+5h0ttdwttijw125bQhiBoqPbEMuh0zUHM/OVy3Zw5tIBbcXO2tdmptZ7dwGFgSECsDpsSat/UOkotbyoW4gibTncJry3zxatYZriMExCW8otuC/a3nLKtwEyqi0hkbaqOp0acP4wz8OdQCewvWrgMyAt5WtXJHgXFv+zU9heL4PE2L3/lrfaw7tat21FzLkbv2bq5Wm28MUYGR0IkFh7NfZ1fuWbhz9nbvqLYJIYwHS4WZBJjuaEkbzUbzE1up+2/lOuTVQ32TDhHPGdRaxMuilQGkm5bE69k/h4o0qfKrRj+AaKRqjZWUkRmQ+60EkiQdvHx3q88hexmwhVigu3FMyfdHqvux11k1q1vl6zZ+1uZJXYtARP8AKPvEdDv4RWf9ezV/TBpF8ZI9/Krvsm4E9vDHtAV7RsyrtC5QM0bgtvHoetMfb9whLmC7Ntbhu2mtDqsSGYnUgFMw89PDR7xz2h65bAmdDccf/s0/VvlVf4qWcDNlY+8xuEli3rHQaeG9Ox7fKHKKemx0VDfs++w6xjHxH7zmNu2qKuR8pDuWJMiZhViCI70xtXs3D2goCgQAAAPADQCsv/Zp4eVwtxyFm5eYyogFVVVH1DVqldTEPaualPuXj/8AbvxROLwadFsO48Je5B+lsfOsEwjmt1/bcxgbiFi3I+zwwJ8jcuP+ig1juEsjpPwFbGMwloXE9YlAlK7DYfqad208BTnCKOo08zUsvEVQSqgeZMzWg1gC54vLim2E5eJTOxyjxOn5xTR+FqfdZfUsB+tMOMcSuXD3mMDZeg+G1RbKaiMoG1KYRX5VhHD0HvXF+Bn8qK9+yvugufPQfzqCQAb0spFLvfAQMX3UjiMTm8FHgKSPEWGimPSmpopsmgZHeEmsanBxB8ZpM3BQi1pMj060VR5UbKVBOkvKB7gPmST9JAprexU7AD0FKNZJ/wC4oiYUjUx8xQdaLa8rrNsnyp1ZwA3Zh8NTTc4roBQsp30ojSgdScteUe6s+Z/kKh8QrMxmI8Onwpy9yiQem9Qze5SRewqMxaLOny/rTapxTA70eu/0g0xvWQxnMvyI/Ib1myR0r7H2mhFFIp5ewDLBgMD4GfnEEUkLBn3DHhrUJYVICE3igW2KmMQudQFtOAsx38wk6nTICfnUSymoy1OtFNB2VSGF4dm3ZR8dflS3/CVgkv5bf1oaCgHKHYimt5SamrmGRNzJ8Kb4xxHdEeZ0ohqlY+jsosWAN6VsEDYU4TCCJNJvdA6VK1ik16kYTvSuJxQI2+W1N1vz6eH86f8AC+JtbcOhhlmDAOhBB0II1BqdjL4Q45SeHuMQenkP7mm8UoT1oRcPjTZMQ8hTx5AHKRsWtwaA4YrDjTfUHWR6aj406RAaJdtxr/KqvadwQphKLsFRWJE76+u/1pvh7gW5bcaZGUk+jA7eUU4xjk9IPWowrJoFgqlahlcHarWt3uZGZ+2wrEOzQwUgQTEMpLGc0AlW0k7VI2vaLcjJiVzgN7yiLi9O8uxHXSKxzDqySV0P0qyW+YkuZUur7oAzk98a6wdiBJ0asebBLfFhdBj9Qa/zRXof2acUW6pKxrt466E5dxqNf61ZeLYtUUZphpBb7oMGCeo+Gtec+DOCym3d7I5TDSVzanUuJCny2OmmtaZy3zvc7K6l627hUaLirOkZQX0ggn7y/Sjiy9lpaDSmyGiQhyuWF9l2bMGvntXQsiW1SUB173aHMQPIAU29lXAv3W9jF7RLs9jLKDuFeQ+kBwTqBtVGX2pRhR2vZXbtoGy3b5w4RYyMlxGVirL3SpG4J2IoeRvaubuISxbs2FR5zfu6OGBynvOzEyojWfE661bbrvWTsoSWFukDdblh8a6ahiD0I8KkbXMQMi6k6+8phj+lVvEYkkbbHceVNL2OIUE6iQDHn+tWRlQyBV2wSxmwtKw+KRxFt8x2yvow02HjHlSWKtEb6eRn571nuEOrQRMgj49KncHzK6iHAuAdG8PI70XYwcLansyy005TN22fMdYHUef9xSV5RHeJXroenh0psOM5nAUZQYhd5k66z8qc828cs2LD3rhXKg0UblugHmT/ADqucQKyMsqI4xx5LIlyNpUE/IQPkBuTTHhfBHvRdxMwdVw7Aj0N4flb2H3p1Ac8ocvArbxN4Fr13K9lWErZRhK76drEEuZiYGxm3PZj3iCY3Gw9PM04t0CmoB+s2VA/vjqcpACj3Su3koGgEDwFObXED6+piKG9fA8PAfzPp1qLuWnJhApnUDqfPzY66eFUTqvlXRp+FYuA3M76zCmZiPSnvFrpVjlMg96G1XzHl8KU4Rh1UZdZ3ZjMHynxE+lJ8ZweZdDtqNdPSQOtWWtc1qrktc5NbOOXrKny1X+Y+tdds5tRqPFTMx41XMNjwSRrIJBVhBBG+h108ae4G+Z0JB8RppUJa1/IUwLmcJ3ckRrGmx1n+/CjfvMRI1+evifCkreLJu5SF1tswOxMMAQBsYmSRQX8OdNBvAEfXf8A7Uw4wB5Txkl3hRnHcYttS7nKIJDE6Hrt08/61G8rcGe6Vv39QO9ZtFdvC7cHj1RD7u51gLL8S4Atx0ZmchDm7OQbbMNswIkgGDExIHxm8BcmZEGCCTv6/E1Zj0sbTVWfqkdbkUt/fnRQNaH+/Wi3GjpXDroUoD/2oGNEczRk+PxpyC4t/f60Q66fOhy+f/agUT4j002/nQSRgf5U2bQ/3rTy2NNa4r5flp/32oEWiCkkuUJNI4i3EEfKlLQkZgdJqME3SdXlGC+FH8aBRpRgvnT0LQKKF6ECgY0UEUNQfHfXX8qGk7q7Hznpt1G3x6UEUPaRQl6TddKUYUkUQmg/nXA6UVhQRRj0oDQVwpIoIoGoZoWoIpMUGX+dC61y0kUEUjdFK0ndp7UCmrsaCTR3WiVdadkykUmjKaE+tAKfaVIwWhAoJo00gUiEnRiKErQZaktMXRXEVwFDFLUlSChCUULRqRclSACjZqACummFyeAjg0fSkjQimak7SjmuZaIXrmehqKOlJX6g+K3YBqVxtyq1xA53VJjOypPhmYCfrU8AsqvMaC2P2KcCNqwbjDvXyH88kdyfmW/1VfaSwdgKqqNlAA9AIFK12MTNDQFycj9biV1MeP40W7Vy4dkRm8PdBMfGKfVln7UnMX7tw12yG52l21ayiZMtmOwPRD4etOdwmjlYDwrloly5O5LHun3jruImr7wbhoUQS/8AtGvw61jeB9qxWP8Ayj+OzRHpB+VS1v24x/8Agdz5H9RpVBwKvtIWsYjAg9T5Sh28oP5VGtgYaArHfUwqj4np+tZuntxGv/kbvXUBp/8AbTy37c00/wDJ3l2kwdvgv60zS5OsLQP3dtIYg+iER8acDCXBr2rSTMdyPlFUAe3qz1w+I1/hWkf/AL9bWsYe8PRR/KhpKOoK8lLkwX3kAk669eoiiXMNe6Nn18TAHTUfyqm3fbpay5hYvhhpBUbddxt5VH2vbqOuHkE9AQfT3Y09aIDkdQV+t8EuzJCMZkzO3hNKXeB5tCtoQdpZp+FUoe3dP/0Y66Dwnz7v5EUc+3i3p/5cxpMnT4d07eelHS5DUApnmbGrh4XLbLkGFEyNNC5YQBvtqfLeqFxfjuJubnL/AAqAF+hJPxp7zV7XMPdhhh2DjrKgFfBtNY6TtVcb2mWutga+n8quQMaBvyqcz3X9k2x3ELmxII9NB8RULjrJOog6/dO39/OpDG892GGtob7Du/ODUZd5hwx+4RPgdvnVlV1D8aTT3mn1quWMe9s6EkeB/Q9KtmP4ph+jN9PzqvYvsTsxHw0qKSMO5Usby02FZuXOcYYOjtbuDYgw3x6MPIyK1flr2mrcGTFKIOhdVBtsDuLluD8coI/hrzhibSdCfKP70p1w7jpQ6ksPHr/I1kZPTWndq1sfqJGzl6H5h9l1i+jXMFcFrtJGVSWwzz4qO8nTRdBHu1QsNg8Tg7V/C4nD3Gt3bZVWBBsZ/wAZuCegnUqQY06Uy5Q5we0c9m5Hiu6t5Oh0NbByt7TbV3uXwLTHQney07zuVnzkedUO/NBs7cf3Wj2optxsf7LA7fLH7y4XDduwBabRyvAQAuUYsA0mSARPUTQcy8OC2lFvP2lpyLqEXCy7NNzdbZUggxppOkaelDyXhi3bWV7FiNLmGYKpPjlg222/DUNw3kXEWL92/YxQc3jmuLftyrN/EUaNPDL1NWGdWjP6tlA/pbx+ndYjg7q9hdxF27dOK7ZBYRChVhmUspUd4AiTOgJA0MmbB7UuIC7hLWIVbahb5Qxdz3YcZijqdRBXQ+fnVp/+6S6wCuMISCzZ07S25YklTKqPcJ2Oh2qQ5G9lF212i3mwt23dDdzs2Yhjsx0WSsSNd9dak+vg51Jn0UtaaWVcncFwuL0S1fVlzvdRGLArICt3jAyEkx3pA6b0vy3w/Evhr/Z3LV3DWHV3ssoNx7VtgM6I4KwZmAw1mK3nAezpLV1sQ2INvMqq6WlWxblUKAgS7BoJMqRJJ8aNwvCYPCD/AMtZAOzXGnWNdS+ZoJ1hYE1DL1Zg/TupY+mOPKzDlP2e33tqtm21yzdU3ld27E4a8r6BjAZxA+5MztprfcPyLZt4dbOLvG6QELJZLDv2yxUowllJDHMRkn40rzJzueryCNVXur477mfWs+45z4FmCqiPz8T/ACqi7Onm2YKVtuJDFu4q+px61hlIw9lLIE95tXJ8W1LM3mzHwqkcz+0BrmjXGeOmyj4DT41m/Geb2c9yW13MgfzPppUZw/DrcP21x1XrlTMPlmT6mp4enOdvKVDN1BjdowrXj+dR7szOmW2JPxOwq4eyzgxdjexCBbY9y3cViz+DsNJQRoNiekCo3lDiXDcNlIs3bjiO/cVTHiQobKPI6keNX/Ae1jBqfcuE5eqIY9CGEVZ+la0Uwfuqv1Tnm3H9lY+M822bChVgtlhbYSI00MkwoPTQ+lZZzBzLiL0BxlXoEbJptuNT8THlUrzf7QcJdKuouZwCGkIoYeZB3G3p6VDXOe8PtkO3QqK08SFjRZ5WbkzPJocKExWFHVf/ANYfrrTfEWwoGnoA/wDWpDEcz4ffJuToHSfqKj8ZxzDMIKkT+Fk/lWhsqW6rHMd64RAED5/nVR7Z1NX7HtY097/cp089KicZbsH8XzWo3MB5T2vLeFDWeN9D/I/Crtyp7ScRagC5nUfcu94fBveHwNUTHcOB90/OPrTZ8Iy6hgfImqcuGxwVuLOe07r0Vb53wOLAGKtGzc2F1dwCIMXUAYDyYEVWuZ/Yc1wG7g8Qt5eiuwk+AW4vcY/5gnrWQ4Li2Xf+lW3lbmh7TZrVxkb+EwD6rsfiDWc6GWA2w/8AIWmzIim2epX2r3b9tRh+zuJbCW0lxGZbajRTsRnLEwTJqk8tcUyK1q5OQhjGoMsuXQj4GIgxBrcOE+04uuTF2UvodyAJ+KHun4ZaXXkbh+KObC3Ozdv+Ue9H/wCLch/9rEUI84NGmQfunSYpc7Uw/ssg9mPKyXrpN64tu1bjNLQTudBBYrp3iBOw0mRI47m5UuFwFdkkWlYdy0Ae6VXYkdAdB4VZ+Y/Y5iE1VBcA3NswT6o2VvgJrMuP8rPbJDI6HfvqV+GoqcPindZd+yjBkxxTW7/K032e8Ve81k3GfPi8UrO5M/Y4UB2/0m48xt9mPCqzyLzSysLclsjsbOugze9bIOht3REqdMwHiaW5WxBtYYXcwDJaexZEmc9527QxGy2yTm01KionhnJty9Bsq2cb5VZvOdBAjTUU0iIXZoKczSAtPPyrDxziXZFbqIRh72Z+zYZ0FxT37TIdGVTBUkTkYeBrjh0v2rfYuLJtOW7Nm37dgGFpm0yrA7lwgwT3jWgcl+yq/cthcQgyHvksxnOMwDKgGYEgwwMSBWlcuex7BWMrtbQsN3eQg6+4e7I6EzWcc+OPZu5+3CtyRl/PCxbkj2SYh7iXFuKiEls2QhtNO6vidt4/KvSVngVpBmcIiaaCFAgdSAN/BabcX5nt2RFmGI6n3R4QBBP0FZJ7QfaYqkZ27V/wL934e6vx+VZsjpMt1FOAbC3mlqnFOfLdsEWAIGmZhCz/AAp7zHzNZfzJzx21xUDm5cfuxMx4n8KLWM8V57uXiZzIk6hN4nqTE+mgqzcnc+4TDKAmGcsfeuM6Fm8QTl0X+EADyJ1rUi6eWj3fwqL8xt+3+VrnA8OiQxUs+2Yo0Dp3RsPXU1JcUv6aggRpv/Os5Hths/8A6O5npnEfILH0qR5F5nfiGKtYS1Zym6xlyxhEVSzMQFAMAbDcwOtaMMVbAKhNNe5K9Z+xuyq4DD5fvIXPqzFj9TFW6o/ljhK2LNqyvu20VAfGBqfidfjTD2j8w/umDxGJjN2Np7gX8TAd1T5FoB8q2GjYBY0jqsrxh+0dxhb3FcU4grbK2BHU2lAb5PnHwqkWGY7CBUfdxzO7XH1Z2Z2PizEsx+JJp4mIJ8q24faAFwGa4vkLk8XTcyaSu35pvcuiiqalL/CoCPyUd3A86EYnyFETDzS6YbSfzpo1FPOlN2fyrkWaVe0PEUJtqNjJ9IoaTaV/CMixRbjDrRRZc9DSg4e/VSPhTt/ATaA5KTS6o6TQtjPAAU4/cY3NJ9mPEAfWidQSBaU1kmnK8NeJIyjxbT8/0ooxoX3Rr4mkcReZzLMT6moi4KQX+EobsaD503ZCetAWiuF2mF1ogVwlUWKG5idIgesa0kLlGMUr+Eq+UUPRbliT3WydSNSvwESPr8KUy0VhUb4w7lPZIW8LsFcuyFlf8xOmn6etFvWHBIYgdZBnf0MUYPS2HdZ7wJHgDB+cGou1SkMtp1w1VykFUc+BJDH/AC+f1qMv4dATKuh8DBA+Bg1IXha0y5x6kH+VTfb5UAWbh273e8IiDt5GongDelNGb2tVVrfgFPmCQfkYpNGOzKR5gaj6a1OWGckg2gZ/hy/UiKJigANTlMbasfQkGBQOlODSmWoGwYeejfEbGmV/EzsAPUz9KfYtMwHz0/MiaaPYHg7f9IppAT2hMOIWxoBrpqdh6CmBSOlPcWsEggnw/l1pG2fHU9B4UmqdpICNbtCPdpEaaU6VSKC4fjVxjK3UetNyK5RRnaiAeNSpw3SnbxSeaaVS4Oomk3tE7UNKISNyxIP500wVgZtp/Kn1zaJI9KLhsBro30NUZWb8K3E+hyjX8KD5U34fw9DcAusyW9ZZEzsIBIhSVmTA94RM9KmLlqm15ARHyqGiptdJtwvGvYJNs6GAUYAo4BBAdCCCNBpU/g+avsypdkJzXCuQPbckiLagZWRSszOYaCoK7aA8zSOIbuhcq6EnNBzGehOxAjTTqagkxWP5Csw50jNklzRxFrgIVGAY5unhOkDb6VaP2dMfkxFxgAbgtQg2JbOO7rprAnbSapOLvHp00pTlnijWbudc38WUwYBmQYOs+NRPh0xlrVoQZOt1uXonCe1DKxXE2WtHMAxUE5ZjQqROnipYVb+0F1VuWXzJMyDoY128ddjWZ8s8+2bqEYlBdQ6y4zEaAFQYlWEzJ0130p0+AyXEfAXDBQkWywjuiSCdQ33RlaW31rnJSRbSKK3I3eRuFqHDsQRv/YmpgifMVR+TeaHYkYmybTKdbgBFuREgg6ruDIkedXi42ZS1sqdDEaqTGm1avSppWgh5VXOjY421ULn+wxZMrhCDIkldAPEa+lVLm3iriwtp3a4bjqFDEkd5gDl9AIk+NanwrDYTFKwCXDibZ7O7Z7UlhEk3LYEB0YAkAGREVEcX5RsXAj217NbLgbvnYq4LKyMG94CJB+hqxPmAOohCDEJFgrYeA8YTsLecgRaQQRscvQfypZMEGGdH7TWe6dZI2I6RVK4mnuyQdBAj6fDammBZ7ZlWI6yNCPLzq3G0SMBVdzzHIQr6nBGb+DY976jx/nUtw7ABJjUn7x+seA6VWOF88NtdXOPxDRo8PA1cuEY+3eE22k7ZTo3y8PSmOgANqVuQSKST4bcCYO46elIWuHR0MT0PX+VSoUjQjWufT+96BanB6rvH+V0vjvSG3DDcDwPiD1H1FRNrlN7U5WLKTJB2A/CNz4datuKxoX/NEwOnmfConGcW7udjlQdNif1qMxAn7p4mIG/CgeIsqrmfuhfdYGCCB907gn5Eb6TTTlnma5fW45w5FqfsbwdQb4mCwtmIUQe9OVtxpUdg8I2McXH0wqsYTX7cjSB/8IfeYe8ZUaAmrZeWYkZQNgNgNABHhGyjy9KEnsFcoxe83wEwxONIPds3CY6KPzzQD6mk+Xrl1s7XwtsEjs7chnVQsHtGWVlm1CqSFEazUm6+g0/ufFj4U3awBMb+vTw+PhUAfXhWe3flOfL+/hNdbugzB905Tvo0A7/Gk3/sT0oy3/7/AL/OuLtblLgsf3/eldXWzOtdk/nTklxobaVymP0o6iP760EEZ5jT4f1oLg0idPL+9qAetcaBRpEW2P1oMOsEjodQPDxrrj9NJ8yRpOp9Y6VyNrp0+FMRSorpolxvp+Vcr060kJb+VFNBP9/zrmoJIQ1Ec1xJoTSRRSaED+fwrga40kkU0SaOaAg0kUAFCT/f9aBRXUkl0UBFdPlXT40LTqQE/wAqCd6NRWoIohFEJo9JtRB3RpIuaQNHvPQD9KusNBRkIVNA1CDXA0+0aXA0ZWoFoCaSCMbtdmrlaucUQ5LSumumuAodaJcUKCDNQqfKizQCmpyPFCgpNDSqGkkEAFCTXMaAULTkVm/v9aEn+tDlorNQtKlH8ReojliyHx2HU/8Aqhv9svHxK1KcTuaUl7McD2mPtawLee4fEwMsfNh8Jq9hC3hUcw0w/heiBQ1wrq68LlV1Yd+0vxoZ8PYDMIDXWCk9TkSY9H+mlbjXnb2/jDNeFy3cJv8Aam1dysSFFq2srliFgsuvjmHQxHKdlJEPcongmJVhB7QH/Mf1irFgMAD1uR5sR+e9U3gSARrdPoRpPwNXbCCQP8U6R70fp4VQcVeATnEWAPvXG06ER6aUyfFn8DRsSzQfXppS9rBa7tG8Mx+IpO5wtRJCgkjXrHzimWU4AI/Y2tzEx+In6fyqMLie6wA21tH8zSWLwpDLlEg6mVHj17wJHp5U7ThZPQL5TpPmC5H0NHdHZBcwGYbmSOkQfhNB/wAJO+fbplXf0mT8KdjCwPtGnyUgAD6VC47ID3WcSZ7raeU+H1ohxQ0hSl28YjIDBicpn1ggipHh3DjlLNAB2zAZo09B+dVfGcSKwYVvGSx/3RTvCcYLaaqD+EE/nApaihpCsCKhnaBPQfPWfzqE47Zwx0uKs7BgveA9Qv0OlOr9htwZ06x+hmmfD7b97PAHQAkmPOdIpwkIQMd7FUnmDBKhJTK6jrkGZeveEDQeIqqY3EjeEg+GUx5xFbb/AMHXou+uw/uTVc4/yehllARztl93/UoH1EH1q7FmDhyqS4h5asgxNhTuCZ1Hdtj8lqIxmBJnQDpqB89BV7xODvq5QqoK+eh8x5H4Uli8PdjdKvggjZU9xsVl+J4E341+X9KiMTwcie8v0/lWicy4fIpe44AH4ZJ9ABVewJS+CbZPd0IIg+p11G/yqNzAntcs+xWHymQYI8BFK4LjzKe+PjGnxFW3iXCSOonyH1qu4/g/WZ+FU5sdruQrMWQ5nBVn5Y53uWoNm4U/hkG2T5qZU/KaumG9sGIAGa3abzGZfhoSPpWIYjh7Lqs/Daj4biFxfuz9PoayZulg8Ba8PUyOSvQC+2O5E/u6T45z/wDZ/Wmqe07F3DC5LY37i6/AsT9IrIMPzKRvbJPoP50c8fvNoqhPU/oKp/5ab4Vv/MR8rV73N7A5ncs3i5k/npVU477QM3dXvnwXXXx8BTHgXIeKxEF9FOxuHInwUd4+sa1p/K/sosJHat2pB7yKMiD5EMfmJ8KLcOGPd5v7JrsyR4pgpZJhxisScqKw8l77fE+6vqYq3cB9jjEhr7RO4E3H+J9xfhmrc8Ng7NtcqoFUCYUKFnpoN/zrsNxa1qYy9CMsR5jWpe6QKjFKIx3u82qny/yLh7fu2kbLpNyGJ+e3wX4VPYfkuzP+DYM66WkI8502+FIcS4raaAqmZ94AqZHmd6mOXrjnckwZ16+XQEUWtcdyUwubwAhTku0N7Fg+lpPl7v0p5Y4HaH/Isr/+JSPhpR8TxS5PuwAfHQ/35UqvGnHh5ak607dN2TYYKyTBt4Y7wP3dQflFJ/8AArDSP3XD7H/kIPiO7vSt3FMelvx21/KaeYDHGNV12Bj/ALUg13ygS0+FVMdyDg4JyOrToq20JPkoKa+k7VmPFOB5SZw7hQT3mtAaT1hYHzrflVzuqkTuYn5xSmOYIJ67QBofSP1q3FkOZzuq8kDXcLzavDUb7qR4ZV/rTfE8sp+C2PgsfHStv4/y5acElQrdGt6b/iAEHznXzqm8S5Nvrqv2ij8E5vLunX5ZqvRzsfyqckLmrKcbwFde6nwA/lVcx3BR+Ef7a1VwqkhzB8GBBB9NKZ8RsWmAhlJ8p+tWNAKg1LIsRy6OsCfL+tR2M4RlMofiK1PF8GUzufSP7ioXiXAI269KBjTg5U3D8WuJ72o8v5VLYbjqtEGCNuhH60XH8HbqKgcXwgzVKXCY5XI817Vr3LXtPxNmBmF5B9273j8H94aeJI8q0PhvtdwtwRft3LZ8Moup+hj/AE15btX7ieY8/wCdSvD+OidZX1EisqbplbgfwtKHqN7Er1XwznXhbHe2pOnesEfH3KkrntCwKe5L9O5bMf8AVlFeZeGcUsk6uB6EVLXOYMOuxNzyWfqTArOdhOuqKvNym8kheiuHe0a2+tu1r+K4RAPSFXf/AHVUOefaOq6Pc7R+ijp6KO6vqazngdvF4ru2U7K3sXnQeRePogJrT+R/Zbh7UPd+3ubnN7gPkhnMfNifQUBhBv6z+wQdlX+gfuqTglxuPjswbNk/f1g/6gMzHyQR4kVoPJXssw9mGYdrc3LXLZKjzVNh6tmPnWhcLwFv7oZSPgB8hp6VLNZYbN5DUR9RvVtgoU0UFVe6zbt1CWOH2l27L/8AIx8N6cZrX8P+yP1qV7Np98+OpX6afnUVxbEkNAM+Zy/y2qZjCFC5yj8e6AEysfX9Kn/YThS9+7ejuomQHpmYgmN9QF19RVH48/n8sv6Vt/sh4aLeDtaQXHaNO5L6gn/TlHwrSxWb2qGS/albqyH9r/EsvB8QFYLmaypkwWU3UlV8SY2/DmrXq8p/t58eM4PChu79pfdfEiLdonyE3Y+PhWpGLcFj5b9MRK824fzp8j0zwiU/CCthoK4WY7ogbypZV8aSFKm6KI+6gd9ksb3wFNrt2d6EtNdaszSJJQAARGu+Aohangsr4ilVe2PE/Clo+SlrHgJPCs3SadXOKOujEnypliMf+HQeVNSaaZSNgUgwHkJe9ip3pu70WKURKjLnOTwA1AlC1ca7JSopJJqEUq1s0UW6FJ1oLa0fNRSKTIpXSFWnLjz9aRIrlNL2cKTQ5Q4SQFCaf4jh7LExrsZkU1IoiiEDsUOEwjOcqqWJ6ASdNTREvspOUlT1gxXC4QdDB8qeWOK3B1nrqAfqRNMeCeE9hA5SFzjN2IzGP7670mOIaQVDRsTuOtO7LW2LG6WDHYrEDxkU3v4NJ7twHWBIKn41AA26pWA5xF2mpxJPlSvEL5CrsZHQzHr504xuFVABILHqNflFRLCn6A4bIhxB3RLt4k6CB06EnrTdLes0s7UXJRZGApNZKIwPjQK1CRFGVgdwBUzUUWziQDqsjqNpHr0NPOL3cOdbQuL5OQ31EdaaX8KOhoi4SjRJtSBzQEgy12U05XSlxjNgRI6xTqSDlHi1SljumRvT+zhZPrtr+dBi7Srod/IzUYc12ycdQ3TXIx6/CkLuHI1o1w0TtTtTHMI4UjXA8obZnYR4g/pTbHNI3/vwp2rn1pI4Odev0qu+MhTtkCgMQJ1o2Fw81NX+Hg6+6foaJw/AzJzRHTrUBbStiWxsmXavbYOpZGUgqymCD5EVJ8I5rdLgZ9dSSy91teoiFzL00j1pHGnpUdfwoP8AelQSYzZBuFagynMPK3Tlj2hdp3GAu6gkXtAVMgspIkbaxnFWbAohdv3V3sXpDG0+tpzvC7ghswgifKBXm3BXCMswwWYR+8sGc3d+ojY1JrzRdUroGRcndLNmOTuyrkllJHSYFUnYj4x7OPhabMtj/wBS0W3zZcwuKuu6kZm7O4UHfDZiwuWwdMyaadVJB0NQXM3tXuNclLttpuEqVsJbuTOheUbU+RNUHjvNDs7MFOpmGbNB2B9QPrUBgVm4k6S4mPNtTU8TCG+4Jzngn2lew/Zlx3E4qybmIKZg5UFEybATm6HvTqAOtWq9cK6n6VW+QsJkwtl1JaQc6ZupdjPjKjpVntYpWmPAyD5eVR9yhYT9NndJ4bDK6kSdZnXY+VBwzPZiCZGxB1EHSfhv41F4xT9xwuojL1AJ0P8A2qd4fiSVGYQ0aj18DTochkxAPISkidGNuFo/LXNnaJ3gCV0YdR5jyNPOL8YVRKgmSAB1k+XgB+lUfl6FuDwbQ+vT61VParx9rVwujEZBCx4jca6an8qvvYK2VVshHK1C7ierAef9+NVGzbPELz2wYwthgLuU952iRb02BA7x6KQBq0jNOKc6Y3sm7UqAy90gDMZAOsaDT41b/wBmLGRhbrE+/iXPqQqCqocGqzpL1p9pAO7GQL3QAAMqjYAdB0FDcsjSeg7o8J6+bGnGKYs0gbDoJBM+W1IK58D4QfHx3qF43Vhh2TPEYf7o3ifT+ZNRzoR002G5+IHU+dWBQDMGQPePifD4/SkL9ob+RgeA/mfyqOvlSWVGMlcFo5uRXTv/AHrXDrokKP51yn+/KiMKPY2pWlSNaofhXAaUJH9+FFBDP8h6/wBKBqMo9KLNJIJNlnXwmPjXaULXB4Gk7reVNRQl9B8qBXrrW5/vWuY0EUJP1o00SdPjRix/SiiuOtdNcDRV/P8AOhaSFTXEUB/qDQt/YpI0gauUVzD+dcW+NJKkAFAR/f6VxP8AfjQKfGhaKBRvQvQn+/SgZ6aSnAIH+tEb+tGNAVpWnUiNSVwa0uaI0dTTmlApvdt0jFOrgpF08auMdsoyEQ+tABRwtcVqTZLdEzUANGy0FODbTSV2ajhqTAowFHSEtRR5oGFEoTRSQmuC0WhAppTghH9/0o9JoKMDUZTwlI+FFOlFNGFMKIQ6daLdE0IFJOaFpyjuKvUbybxjsMQ947WsPfuH/SsgT5mBTzilyq9wjDG7e7Aam+1q0dDIt9oty622wt2yD61qYF6ws3NrQV6U5Iv3Gwthr3+K1pGuaR3mUE6DYiamaBRQ11zeFyxUTzdxpMPYuXn922paOpP3VHmxhR5mvIXBM1y41x1Ga4zOdDEs2YmT5k1tH7UfGBksYeCc79q4E+6ndWY3liT/AKKxo3yIFtWM6HQiB5d4TVSd+9K3Aza1d+EcNVdSY6nUf00qWXHNIW3bDjx7QAfITVIwGEdsuayIn+IE+fhV+5fwyqpGQDbWNvrrVQkBWQLSt7FXB7ygGPxn6ePyqNxnFxmCklm8naPCDC1PYy/bhV0Oo1IbL197WmeM4WhbMXtKM0wcxJgRrJjTxjypwcPKaWo+Cst17H45iZ9Y1oMTwzrmtT1OtJ3yoHda3vuDr+VMMVhnP3gddgSZ9aBeiGqRTDSYJATYBSTPx8PSnLcCtnrt1BioK5hHESNNoVzSKhRIKXfPvGKbZTiFLnB2w0QTrvnn5jYUbEWFnQx4alh/Kq5csh9FS63oxH86eYLgr6Sp9C5J9KcLQICk8NhEWc7gzrsB8B/fypS+bA1ldun/AHpriODt+A7eP6VHWeXm1JSPNjr6RTqQsKWwvEbS7SenjHyNIcXwlq8MrPcA3lXymf5VEYgi1uvXwI/nTvh2JRzAkN4EQPmabpKOoJPG4fBqnZiyzz3S0kMDsDnJJ6TG3lVL5o5eNkFhLJAESZBPQkGD6gVfhg9dQAJnQyTB6irPhuX7dxAZAGh0IJnxOlTxzOYVBJE14Xknj/GryvkFkwfvk5gOkwTEDw3qJXiN1fdZSSZIACgfIa7bCvUvNXJmHIa45SdzDZTA30Ag+kVmWO4RgCxCYlNToGgHN5yFgfyq63Ja7lVTjuHCyUcUxLMywI17xED4SBP12qu80XcSpEZvgBv6CTGleh7vIeUGboYskiFJjr3QDBHnTXA+zGye/evM/jlyqRP3ZJJ+XjQfkMpFsDivP/A8DiD7wABEguY+URp61YOHcBv3iBatdp4sqnKT5uYUfOvRFnl/BW4i2tyB945yOn3jqdumlWPgJUjKEgBe4AsAGdNRAO/T9KpSZgA2CtR4hPJWL8s+ytjlN9goOhVIkHzYiPlNaHwDk7C2dVtISPvk5nnxltvhFXvHcMRRB0JgnXSZ0JPn/elIJZwylpcswiQBpJ6AgamqL5HPO5VxrGt4CgsPw22pJFtRmkzvv01NI3bVqf8ACG+pgjXx03qzm0nYl8vec5LQZSY10bTcdZ6044dwFiozRPvS0jTeIMyf6UzthO1qtYgoy5FuBNAZ1Eaz5/SDQXbllDvnJGp0YkxrEER8hU1zY1m2LedQcxKqMsaeOpgfHSoTg3Y3Wi3YOWSWcyqjLvrPePlT2NagXFJWceo2SJ27m/qZ+tOLNy2wlsxPhmAj4SKnXOHCmAzHaAkL8CdagrWEwzSVWD8Z+p1qcAKLUUninH3c2moygH4U7wmMJHuMIPX9P5U2v4soPs0zeU5Y9Zppf41eEZrEDqVefyAo6ENSmcewYAxqNo0I+E0wv4pv03P5UzOIncOJ8Grl4HnBINwer/lS0o2nXDuIPOUyQfEaeop1dxUfPT+xUTw6wwJzHQaamTv11pzcxgEkInx1Pyn9aGlG0vaukHoNzpvTkXtu823SNPDao7hvGy33QI0jaPTWlzdEky2o1AbT5UtKWpRvE+Vbdxy7l2Y+Nzp0AAHTwqu8Y5LP/LcgH7rrPr3gv5j41bnuSRJbyhqXcjTvEHxzA/pUrZnN8qN0TT4WQ4zg7WtHUr5kaH0I0PwplfVOuvwNbffSBBhgddSCPjpUHxTl6zc1yZDG6d0fLY/KrLMweQqzsU+FjmJwaEGI+Rmq1jOEifjW48R5PQARdy/5gD+RFR132eA6i8n+0/zqX6iMqPsP+FimI5bnx+hpr/4WHn8hW5YHk62GAuO3gSEgfAkn8qtWD5VwqAEAMw2LHNPwPd+lRPyWDhPZjuPK89cC9nr3SBbtkg/fbRB6sdPgJPlWj8u+yq1ahrn2rjXKNLfyHeb/AFQPKtHxd+2ogsIA0ET8gtK2eJoI31jQK3Xb51Qlmc/jZXo4mt5TPh+CYaBQijQASAPQCABTu5hbmhF1gR1EEf361I2L9ttg4PhHQUF7HoPTaINVhCp+6lcPiryxF71lA35frUxbvmBmvEnfuqAP1qof8SOuS051gkmPlrrUoccyoCLbFiQMonY9T1/vpUojTC+1LYrGgbu0eOn/AH+VQXFuKKwgkkbdPr/WneMxrRPYPtpp1/SqnjuInUFIMn7v66VI1iic9I2VNy/asIf8W4lvQCYZu8dPASZ8q9dWLQUAAQAAABsANAKwX9mzgSvfvYhl1tBUtyNAzyXYeYUAejnxrfa0oW0FmzOsrq8J/ti40vxi4p0FqzYRfMFTcJ/3XCPhXuTiOMW2jXHYKiKzux0CqolifIAE183/AGoc0fvuOxGKAhbtyUB3FtQEtz4HIqk+ZNXYB7lj9UfUdKOw7xSzXJpthUpyreArSBK494FoctHt4X0+dFmKAiko90sQBRLr0FkAb0S7cpEoBu65aC41dmpW2k03lE7JFbZo6rSl0xpRTdNCglZKFBRjRbTVzvTvCYRujRRWigAojigSiAj5q6kRSgNNtOIQmihDRyAKFXJ2p1IIymKN2hpezhj4UndIp1Jl7pdLSlMxud4bJBJPx2FOMBcsgd7Nmn/SR8xrUQ10etJtcqAtHFqVvzSsnEr1js4VQG6HUvM7NrER61X7r0hNHJpjG6RynPOo2uJJoOyNOcFYzGMwX1pY4QkwveHiNqNi90gDWyjblukslSN8FIJjyBg/MUxe4dSI1Mx0+HhQLt9lK0Gt0V0pJhFLn+42oEt08GxsiDXKbiKB7QpW8BTdhRtSA2g7QeFHS7SZFc1EOTqCVuGaSKRSdxKVw9+N9R504PTgK4S2HvldZijWLaNuSDTHG3p0FIpZNMNE7KRrdtynmLwRHmPGk7eHpxgcQy76jwpG5dMzEU5p+U2z4Roy7GirfPjB8RRrZB975in1+1aWIbNPwj1pOootJUReJPWjcPgA6wfOj4q4v3aTsoCdTB6TsfKonxN5U7HlExbnwBHkaZm0PMetS7YRTqNPT+VNLmDPQz9KhAarIcUhdwkjzo6YlkUrPdJDFdCJXYwQdR5UcOw3ptxBC3w6Ux0ZClbKoi+MxYkiTrtvNNRb103qS/cWgkAkLE+U+PlPXamZ0M1EQrjH0te5F5yuWntW5DF1AWGgBydrmfKocEMCDvpB3rR+X/aFbcsuIUW3DZSYIgRuQYZQfHUa/PzhcAYSdT/PxonEuM3e6GJuKuWM+rZQAAmb3gsAQJgdKzn4ZaSWH9loQ5gds5en2sC4RdsXA/ZtBGaAw1JVoEyehPzqzW+MoqKbh7PQE5unjr1jfTpPhXlzgHNrZgEfK5IYZm7MDKDK59mkARnidjWwcG51DqVxNskHLpAzAMNCVIEzuGUbR41VdURtwpXWuLxQ3WtYfEBhKkEEbgyD6Gq5jOWP3wE2b4YIQLiOhDIw3UiSIP3ToDrqKT4GAMpsNo5zlG0QgCCAIlD6aVRcfzG2BxwvQzW3MXFDQHtvusgkAq0lT0I8DU0eQXCgUDGGmyFeeIeybu5RfuG4ynLnRTbmNu62ZTpEk/Cpf2bYB8PhhbK5WW9cDodwwby8RBB8IqJ5q9q9vIuS7YNuT3cXZvllEgDLcshiY9AR4mpfkrmXAPbyfvi3L7QyjJcUSFAyKWUM40nM/eifCnGJwKk7ja2U6OO3EfMCR08vKasHDeabb6XVg/iX+VVTtAZ9aSfD+FaDGBwtUHPLFpdm2ribbBx4Axr0MeIpC6pEzJ0OpGo8t9qzvBYp0PdJFWrhHOM926Mwj3uo8/OoZMb4U0eV8oVeua4BSNwz5fkaG2teb6l2VJU3Pz+dKlgBJPp1+Gms02URR7L6zQ1FLSE4w14NMdDB6RHjOtLFYpvhT7x2JPl/fpNOJ8/T+/KpW7hRnlEg0WjsY/vrRSZ/v+96dSVonT1ojULv8P1ohuf3501FCTFCD/fnRSf7NAzjf4H+fwpUijB64mit8KAt8aaij0bNNEdv76UNo0kkJNDRFXf50INJFGzV00C/36UE/wB+dJJcF1riaMGos0KRRD/fnRgfyoDQTQpOCF2osUeiZv786FIoBptSN0/nSob+/OiM1PAQtJMaQc04uCm1xqnjCaShtmjMaTDUbN51YCauBoGoZrpp9oUuUUdvSkw1HmhaVBcxoho1A5pwQKAvQq1dXFZoEhEBCrUaaKBQBv6UwlSAI7T40AA+NAWoBTEQhmk7x9aPFJ4gaUBynHhQ3GX0/OpD2D4INjmeJ7O0xB8CzKv1XMPnUZxdtDV4/Zx4fC4i6fvuqD0QSfq/0ra6Yy5AsbqL6jK1ygY0NUr26ceGG4ZjL3VbDqvTv3B2af8AW6105NBc6F5P9pHtetX8ffuDVA5t22nQ27ZygjUaPBf/AFUXhPtRsbwdIkEj9Tt6VieH4cIGnh0pweHKNYE+n51SdRV1pIC3/De26yBra0Hgyk/lT657ccPoFTKSN5X667151GGQ7rB9P1/70icIJgjTxAO3yqPtNKd3CvR+H9tNqdtehJEfy+lIcR9rtm5E51K65kIOvmCIImK853sAh/F6wf7+VJXeHMPdkjqCDREbUO45enMJ7ZbIEAHTrlB1jyMUvw324Ws5V+ux0HoGkAD4V5Z/4e/3Myzqd4+RFPrXC7n3yTp4aD6Uu01Lulelm9tgYE9xYMRnGbT4bHpTG97aF/Gvh7wkfSvPtvh+bSPjrGlJ4rhI8J89QKIY0JayvQmD9ribdtvJ1Cn0AIqd4X7ULcf4mbUyGK9fMQa8s4Xgja6gb+tLtwxljY7T/OiWBDUV6ZPtMsEwxI8wx+Wv6Ux4bzxYR864m7lnVGylZ+Ik/CvO+LsuCAdRprr8vGnNvBIRqDJHn/KlpCWor0avOmFuXCz5Wk6MzED5CB9KlMPzLgxslv1kg6+Gv1FeWLfD1mCG11GrRFC5KkRMf6ojwpuhHUvSnEuaMIx7zMAmigXCo38M2x9flRV5nwS5QGEeCXWEQdM2tYDZyXBGsgaggiP78ajMVwUgjKSBMnfT40NASLl6E5w4qt1fs7gJEnKbmkbxI+YnrPjURyRds5Lv7wyl7p9yVbKRGkkag69ZOg9caxPD2ynKxzR1Jj/vVR4Vj7zvlAYtJM6giN9dBThCCEO6QV6Q4pwRRdz2bz2lObOuYEZcsQktC5j4jQxTezwIWgHw90i4O8VvMMhHhoTObTfczttWFcOxD3mILXFgbHNr6GpM8LdSpFxzG4MkEfpUnGyaDa3zDcVFxlbEhSyGUFkg2wdNW0DOdNMxMVb8Hzfa3kZRoJBkfCvLuJBA0+WtR1vFGfdcHyLRUDow5TNeQvWGM9p+GDBM4zQNI6naT+tGx3OFtoCBV6ljHveO+8aTH5V5mt3wdGTWNDBn5xNJ4azmnVhGm5+FM7bU7WV6bTjhSJ7wObKVbUCBodIX1pjwz2omWtX0G+RWKuQPMuARlO8jrXm3GYy8vuXLgg9Gb5x/2pHiHMmLRVyXbhE95emvXUGl2AeETMfK3bjXtQC38j2bbZCCvaMdVyiHGYe6ZmBP00l+E+2FD3GsqJ0zKcwAPSCPyNecrvGrt2DcJchcoLJJjwGn0phii4MG2seKjKfpFSNiaFGZCV6ox3M6FSUtvcboiKAR/uIWoF/aCtrW5g8SkSJFpWB85QsJrBcKWUaNcnwDvH506bilwR33/wBzfzp2lLUtwte2LCfet3V11m0f0pZva1gz96BtBRgfyrB1ulidXk+JaPWkuI4EiNzPUT86WlDUt7v+0DDNBQkae8IB+OYa06PtLsAgXCIbZtNfWDpXm/FcGIEjN6a7fEUJ4QWWdZGvUGlpCWtekW5hwjwwuazJAI/PanuM4jg317QTAkgzr5z+leW8PhxtDjx3pfF4NgRlzRpO9DSjrXoq7x2xmjtBGbfpHmN6cLx/Do4YOpGoYBgN9oM/SvNVy43VT9dajrONJOXKwM+BilpSL16hucYwmrAka+6GX9aeYfnPCDTT4tv5E/zrzJZxDbZOm+tEOJ/gO/nS0Jdxeocf7QLa/wDIdk0Oa2bd1Y9EYuPkKSte1bCHxA2gowP5aV5kukiDH0NNC0mCjeoml2wl3CvVeH9pGA1kga7Hf4SNaTPPuAb70a+IkfA/pXlO7JIEERpOv1pdOHt1La7AD+YpdsJd1eosX7Q8CRlzBgPXb5UI5uwXvB112UFQZHjIGleVMf2qwELeem3xjWnOHwpIBYuT8flS7QS7pXpy7z5w8+8pVgd7ZO/j4a+VPcLz5w9QQNQY1O4/1Db415psW2ECNPOTFOcXkA6knoBS7YS7pXppOd8CuodBM+8cx8tZP1pN/aXhF924sno9sFfgV1rzFhwhJifjNDfuACY2203oiIJvcK9E4v2uJlaBbkaiHjN6Bl0mkP8A75rLDUlTsVKmR8Rpv1+lecVxxJ28tvzpS+zTuf5fSj2wl3Ct7b20WgCrB28G1mOkiAKgOK+16wwOjeEFfroayC8X/ET8KYY1CwgAknQCNz0856U5rAmOeV9CP2bcJHD7d0qV/eGN4A6HI0BCf8yqGHkRWl1GcqW2XD2Q6hHFq2GQbIwQBlEaQpkCPCpOrgFBVCbWC/ts81Gxw9cOhhsXc7Nv/lIM9z5nIh8mI614wwtuvR/7e1l/3jBNMobV4KPBw6Fj8QU/2155wixV/HaKXMdWkOuk5tJRzNctGVatLAJQpbNdcrmu02XegSEg0lLPRKG6aJFNtEBOLIHWlLuJjYAU3t0VqfqobJumyutvrRqIBT3DoOtMaLRfsm6muNOcRiB0WPhSGc0SANk0XzSAUdW8q40UvR4Q5R+1jwrkeenypHelVvRtvRBSITkYQULXwNhTQ3j1og1pF48JnbPlOMTxBiMuy+A/XxpqBSkUXtCKiUo+y4x4UpYszSIFKZyNqIASIKmrPATlzEqPKfzjaoxbyKdVDAbgkwfiKZNcPnQ9nUbb3tPcG7JbG41Se6oUeEk/nSIxbRAJjwmuOHrktUqRDh4SYFBcEUrkrmU+FAJB26bZ64saNHlQ5acnobdjxNKDCr402eaN+7HqaScPui3SNqTVadfu9EiKSIclcNZWgx6L0GtJRQB6FI6kgtgTNPrTKdKSQSdqNdw9FLXvug4hbjQbUnZnY60qLRG9GbDk0NVJWkL/AA/SaZPg2HnUg2HfxpsxIpwcCpGuISVrDg76UliMGRSt25Uhg+MnKUZQQepGo9DRL1K0nlRmExpXSJHn/OpO+0rmVQR1HWk3tjwo+ExOXpIqGRo5CkiyL2TUXlO8g/SmuKAB3GtTN/Bq+o0PpUJisIQYIP1oMo8KYu+VH4mz4aGmP7uZ2mN4qSu4RhtPyouGzKSSCZqNzFbjk2Sti1HTMI29fTqKkOB8tLfV8lwdqoBWyQFd5IBgswBidMuYmDKqNaRw5JEwflRMVhAdx8etQbqYOAUNe4b6T5/UU9wfFryEEOxyjKAxJAEERHUa6DpUg9sEAZYgdBufE+dNzhvI010bXiipG5DmHZX3lH2r3LKgMg0GmUTp94a7A77EVXOOczW7jMQSM0tvIE7DKfw+VQRtkdPLaoTFYUzsflVAdNja7U3ZaEfUHOFOTvjnMl5gbb7abrBIjuk6DpsfStc9hWD7S5hogi2j3G8QIy/+5orHeJYlmRUdSwWArEHOgH3Qeqdcp2MxFaB7GObHwrBsmZGBtkQQ0EgwDGmokToQTtU0pIapIqcV6gFtQNBlG+nSk0xPT/sagOBc2Wryn3kOxRgQw1ifwsPMGpqwgHUEevSqH1MjHUOFb7LXDdLqT19PI+hobgpdrogDoaA2x0P12rRgnsUSqkkXlf/Z',
    description: 'Immerse yourself in tropical bliss. Relax on golden beaches, taste authentic vindaloo, explore organic spice farms, and enjoy parasailing and jet skiing.',
    activities: ['Beach parasailing & jet ski', 'Spice Farm tour with lunch', 'Portuguese Churches walk', 'Mandovi river sunset cruise'],
    itinerary: [
      { day: 1, title: 'Arrive in Sunny Goa', details: 'Transfer to beach resort. Relax on the beach and enjoy a beach shack seafood barbecue.' },
      { day: 2, title: 'Historic Old Goa & Spice Farm', details: 'Explore Basilica of Bom Jesus, then visit a tropical spice plantation for traditional lunch.' },
      { day: 3, title: 'Adventure Watersports & Cruise', details: 'Enjoy jet skiing and parasailing at Calangute beach, followed by a romantic sunset river cruise.' }
    ]
  }
];

export const mockFaqs = [
  {
    q: 'How does the AI Trip Planner generate itineraries for India?',
    qClean: 'How does the AI Trip Planner generate itineraries for India?',
    a: 'Our AI Planner combines geographical layouts of Indian cities, walking constraints, weather patterns, and local heritage recommendations matching your selected travel style and pacing. It plans meal blocks and rest stops so you do not suffer from travel fatigue.'
  },
  {
    q: 'Can I find vegetarian food options easily in these packages?',
    qClean: 'Can I find vegetarian food options easily in these packages?',
    a: 'Absolutely! India is incredibly vegetarian-friendly. Our AI recommendation engine defaults to displaying premier vegetarian and regional culinary hubs (like LMB in Jaipur or BrijRama vegetarian menus) when building your timelines.'
  },
  {
    q: 'Do I need special permits to travel to Ladakh or Kashmir?',
    qClean: 'Do I need special permits to travel to Ladakh or Kashmir?',
    a: 'Yes, certain areas in Ladakh (like Pangong Lake or Nubra Valley) require an Inner Line Permit (ILP). The AI Telemetry Advisory Card dynamically flags these rules and provides instructions to secure permits online.'
  },
  {
    q: 'Are local transports like auto-rickshaws covered in calculations?',
    qClean: 'Are local transports like auto-rickshaws covered in calculations?',
    a: 'Yes! The local transit index is factored into the "Taxi & Shuttles" calculations, using Indian Rupee indices suited to auto-rickshaws, metro networks, and outstation private day-cabs.'
  }
];

export const mockTours = mockPackages;
