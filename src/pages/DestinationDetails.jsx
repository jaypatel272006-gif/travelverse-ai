import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Calendar, Clock, ShieldAlert, Sparkles, Plus, Send, RefreshCw, Thermometer, Info, Heart, ArrowLeft, Save, Globe, Cpu, Camera, Volume2, VolumeX, Maximize2, Minimize2, ChevronRight, HelpCircle, Landmark } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { getDestinationImage } from '../data/imageRegistry';
import { fetchCityDetails, fetchCountryDetails, fetchWeatherForecast } from '../utils/countriesApi';
import { DestinationDetailsSkeleton } from '../components/SkeletonLoader';
import { generateDetailedItinerary } from '../utils/itineraryEngine';
import { logger } from '../utils/logger';

const getPremiumGuideData = (name) => {
  const defaultData = {
    architecture: "Features local vernacular planning blended with modern micro-climate adaptation protocols, passive solar cooling, and locally sourced construction layers.",
    culture: "Draped in centuries-old heritage, featuring daily devotional assemblies, classical music legacy, and unique native pottery crafts.",
    unesco: "Protected under national heritage preservation laws with active ecological buffer corridors.",
    sunrise: "05:42 AM",
    sunset: "06:48 PM",
    emergency: {
      police: "112 / 100",
      medical: "108 / 102",
      touristHelpline: "+91-11-2365-2200"
    },
    transit: {
      airports: [
        { name: "Sector Main Airport", dist: "18 km" }
      ],
      railways: [
        { name: "Central Terminal Station", dist: "4 km" }
      ],
      road: "Connected via National Expressway grid routes, providing high-speed asphalt connectivity.",
      local: "Eco-friendly metro corridors, ride-sharing cabs, and app-based electric shuttles."
    },
    culinary: {
      restaurants: [
        { name: "The Imperial Vault", type: "Traditional Fine Dining" },
        { name: "Quantum Spices", type: "Fusion Regional" }
      ],
      cafes: [
        { name: "Solar Brew Cafe", specialty: "Locally roasted coffees & micro-bakes" },
        { name: "Neon Leaves Tea House", specialty: "Infused regional teas & herbal decocs" }
      ],
      streetFood: [
        { name: "Old Quarter Food Market", specialties: "Crisp hot patties, sweet milk cakes, spicy potato skins" }
      ]
    },
    shopping: [
      { name: "Central Heritage Bazaar", specialty: "Handcrafted textiles, brass works & silver ornaments" }
    ],
    packingChecklist: [
      "Light climate-appropriate apparel",
      "Universal power grids adapter",
      "Local offline maps database",
      "Hydration flask & basic medical kit"
    ],
    festivals: [
      { name: "Spring Equinox Festival", season: "March - April", desc: "Grand cultural processions, traditional dances, and floral decor." }
    ],
    tips: [
      "Acclimatize for the first 24 hours if arriving in high-altitude zones.",
      "Prefer bottled mineral water or purified community dispensers.",
      "Respect local dress protocols by keeping shoulders covered inside shrines."
    ],
    faqs: [
      { q: "Is it safe for solo travelers?", a: "Yes, the sector has a high safety index with 24/7 tourist police assistance." },
      { q: "What is the primary language spoken?", a: "The local residents speak the regional dialect, but English is widely understood in shops." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
    ],
    aiRecommendations: [
      "Optimal Route: Morning visits to monuments yield 40% lower crowd density.",
      "Energy Conservation: Reserve high-exertion treks for early sunrise windows.",
      "Local Dining: Street vendors with high local traffic compile the safest culinary quality."
    ]
  };

  const overrides = {
    'Goa': {
      architecture: "Indo-Portuguese baroque architectures with bright whitewashed plaster facades, terracotta tiled sloping roofs, carved wooden pillars, and window panes made of polished oyster shells.",
      culture: "A beautiful fusion of coastal Indian traditions and Portuguese heritage, celebrated through traditional Manddo songs, annual street carnivals, and village church feasts.",
      unesco: "Churches and Convents of Goa (UNESCO World Heritage Site, registered in 1986).",
      sunrise: "06:05 AM",
      sunset: "07:02 PM",
      emergency: {
        police: "100 / 112",
        medical: "108 / 102",
        touristHelpline: "+91-832-243-7722"
      },
      transit: {
        airports: [
          { name: "Manohar International Airport (MOPA)", dist: "35 km" },
          { name: "Dabolim International Airport (GOI)", dist: "28 km" }
        ],
        railways: [
          { name: "Madgaon Junction Railway Station (MAO)", dist: "12 km" },
          { name: "Thivim Railway Station (THVM)", dist: "15 km" }
        ],
        road: "Linked via NH-66 providing direct road transit to Mumbai, Pune, and Bangalore.",
        local: "Self-driven scooter rentals, app-based GoaMiles cabs, and local ferry routes."
      },
      culinary: {
        restaurants: [
          { name: "The Black Sheep Bistro", type: "Pan-Asian & Goan Fusion" },
          { name: "Gunpowder", type: "Coastal Peninsular South Indian" }
        ],
        cafes: [
          { name: "Artjuna Cafe Anjuna", specialty: "Organic Mediterranean breakfast & coffee" },
          { name: "Eva Cafe", specialty: "Sea-facing Greek cafe with fresh juices" }
        ],
        streetFood: [
          { name: "Miramar Beach Stalls", specialties: "Chorizo Pav, Fish Cutlets, Gadbad Ice Cream" }
        ]
      },
      shopping: [
        { name: "Anjuna Wednesday Flea Market", specialty: "Handmade jewelry, beachwear, local spices" }
      ],
      packingChecklist: [
        "Light cotton/linen beachwear",
        "Reef-safe sunscreen & sunglasses",
        "Waterproof dry pouch for accessories",
        "Flip-flops & swimming gear"
      ],
      festivals: [
        { name: "Shigmo Spring Festival", season: "March", desc: "Vibrant folk dances, parades, and street colors celebrating spring." },
        { name: "Goa Carnival", season: "February", desc: "Colorful float parades, live music bands, and non-stop dancing." }
      ],
      tips: [
        "Pre-book a cab through GoaMiles at the airport to avoid street taxi haggling.",
        "Always wear a helmet when driving rented two-wheelers; police checks are strict."
      ],
      faqs: [
        { q: "When is the beach swimming season?", a: "October to May. Avoid swimming during monsoon months due to high undercurrents." },
        { q: "Is vegetarian food easily available?", a: "Yes! While famous for seafood, all major restaurants offer delicious pure veg Goan curries." }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
      ],
      aiRecommendations: [
        "Beach Safety: Verify flag color status before swimming in Anjuna or Calangute.",
        "Monsoon Travel: Water sports are closed from June to September. Use this time for forest hikes.",
        "Transit: Rented scooters are optimal for budget solo travelers; use cabs for group safety."
      ]
    },
    'Jaipur': {
      architecture: "Indo-Saracenic styles with Rajput symmetry, featuring massive pink terracotta sandstone walls, delicate jali screens, dome chhatris, and open courtyards built to Vastu Shastra rules.",
      culture: "Rich in royal Rajasthani heritage, folk Ghoomar dances, miniature painting arts, and blue pottery crafts.",
      unesco: "Jaipur Walled City (UNESCO World Heritage Site, registered in 2019) and Jantar Mantar (2010).",
      sunrise: "05:38 AM",
      sunset: "07:22 PM",
      emergency: {
        police: "100 / 112",
        medical: "108 / 102",
        touristHelpline: "+91-141-282-2200"
      },
      transit: {
        airports: [
          { name: "Jaipur International Airport (JAI)", dist: "12 km" }
        ],
        railways: [
          { name: "Jaipur Junction (JP)", dist: "3 km" }
        ],
        road: "Linked via the NH-48 Jaipur-Delhi highway corridor.",
        local: "Jaipur Metro, app-based Uber/Ola, e-rickshaws, and tourist buses."
      },
      culinary: {
        restaurants: [
          { name: "Laxmi Mishthan Bhandar (LMB)", type: "Traditional Rajasthani Thali" },
          { name: "1135 AD Amer", type: "Royal Fort Dining Experience" }
        ],
        cafes: [
          { name: "Tapri The Tea House", specialty: "Premium regional teas & street bites" },
          { name: "Wind View Cafe", specialty: "Direct view facing the Hawa Mahal" }
        ],
        streetFood: [
          { name: "Link Road stalls", specialties: "Pyaaz Kachori, Mawa Kachori, Rabdi Kulfi" }
        ]
      },
      shopping: [
        { name: "Johari Bazar & Bapu Bazar", specialty: "Gemstone jewelry, bandhani sarees, mojari leather shoes" }
      ],
      packingChecklist: [
        "Lightweight sun-protective clothing",
        "Wide-brim hat & sunglasses",
        "Comfortable walking shoes for fort climbs",
        "Hand sanitizer & tissues"
      ],
      festivals: [
        { name: "Gangaur Festival", season: "March - April", desc: "Colorful processions of Goddess Parvati throughout the city." },
        { name: "Jaipur Literature Festival (JLF)", season: "January", desc: "The world's largest free literary festival." }
      ],
      tips: [
        "Hire official guides with ID cards at Amer Fort to learn the true history.",
        "Shop at state-government authorized handloom cooperatives to ensure genuine crafts."
      ],
      faqs: [
        { q: "Is the city crowded?", a: "Yes, the walled old city is highly active. Walk along pedestrian lanes for safety." },
        { q: "How many days are needed?", a: "At least 3 days to comfortably explore the major forts, palaces, and markets." }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
      ],
      aiRecommendations: [
        "Amer Fort: Visit at 8:00 AM to beat the tour bus crowds and enjoy soft morning lighting.",
        "Shopping: Bargain at street stalls, typically offering items starting 30% below initial quotes."
      ]
    },
    'Varanasi': {
      architecture: "Densely packed old town alleys with multi-tiered temple shikhara towers, ancient stone ghat staircases, and traditional brick Havelis.",
      culture: "The spiritual heart of India, famous for classical music gharanas, Sanskrit study hubs, and Benarasi silk weaving heritage.",
      unesco: "UNESCO Creative City of Music (since 2015). Walled ghat complexes are on the UNESCO tentative list.",
      sunrise: "05:15 AM",
      sunset: "06:40 PM",
      emergency: {
        police: "100 / 112",
        medical: "108 / 102",
        touristHelpline: "+91-542-250-2200"
      },
      transit: {
        airports: [
          { name: "Lal Bahadur Shastri International Airport (VNS)", dist: "24 km" }
        ],
        railways: [
          { name: "Varanasi Junction (BSB)", dist: "4 km" },
          { name: "Deen Dayal Upadhyaya Station (DDU)", dist: "16 km" }
        ],
        road: "Connected by the NH-19 grand trunk highway corridor.",
        local: "Cycle rickshaws, electric e-rickshaws, and hand-rowed or motor ghat boats."
      },
      culinary: {
        restaurants: [
          { name: "Keshari Restaurant", type: "North Indian Satvik Thali" },
          { name: "Brown Bread Bakery", type: "Organic rooftop bakery & live music" }
        ],
        cafes: [
          { name: "Mona Lisa Cafe", specialty: "Lassi variations & local snacks" },
          { name: "Filo Cafe", specialty: "Espressos & fusion desserts" }
        ],
        streetFood: [
          { name: "Kachori Gali", specialties: "Kachori Sabji, Tamatar Chaat, Benarasi Lassi, Malaiyo" }
        ]
      },
      shopping: [
        { name: "Vishwanath Gali", specialty: "Benarasi silk sarees, copper utensils, rudraksha beads" }
      ],
      packingChecklist: [
        "Modest traditional clothing",
        "Slip-on shoes for temple crawls",
        "Sanitizing wipes & small flashlight",
        "Small bag to secure personal accessories"
      ],
      festivals: [
        { name: "Dev Deepawali", season: "November", desc: "Millions of clay lamps lit on the river ghat steps." },
        { name: "Maha Shivratri", season: "February - March", desc: "Grand spiritual wedding procession of Lord Shiva." }
      ],
      tips: [
        "Book a boat ride at early dawn (5:15 AM) to observe the spectacular sunrise prayers.",
        "Beware of fake priests demanding high sums for special rituals; stick to official counters."
      ],
      faqs: [
        { q: "Is Varanasi safe at night?", a: "Yes, the main ghat corridors are highly active and guarded by police until 10:30 PM." },
        { q: "Can I take pictures of the cremation ghats?", a: "No, photography is strictly prohibited at Manikarnika and Harishchandra cremation ghats." }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80"
      ],
      aiRecommendations: [
        "Ghat Walks: Explore the ghat corridor during late afternoon to experience ghat actions.",
        "Silk Sarees: Buy only from Government handloom centers (e.g. Chowk) to avoid artificial polyester replicas."
      ]
    },
    'dest-varanasi': {
      name: 'Varanasi',
      heroSubtitle: 'The Eternal Spiritual City',
      gallery: [
        "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80"
      ],
      aiRecommendations: [
        "Ghat Walks: Explore the ghat corridor during late afternoon to experience ghat actions.",
        "Silk Sarees: Buy only from Government handloom centers (e.g. Chowk) to avoid artificial polyester replicas."
      ]
    }
  };

  const cleanName = Object.keys(overrides).find(k => name.toLowerCase().includes(k.toLowerCase()));
  return cleanName ? overrides[cleanName] : defaultData;
};

export const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { saveItinerary, user, isInWishlist, toggleWishlist, showToast, customPhotos, updateDestinationPhoto } = useApp();
  
  // 360 Panoramic and Holoportal States
  const [previewAngle, setPreviewAngle] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isEditPhotoOpen, setIsEditPhotoOpen] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');
  const [isFullscreen360, setIsFullscreen360] = useState(false);
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [gyroPermission, setGyroPermission] = useState('unknown');

  // Web Audio Drone Synth Ref
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const gainRef = useRef(null);

  // AI Neural Guides States
  const [selectedGuide, setSelectedGuide] = useState('aarav');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Loading and Data states
  const [loading, setLoading] = useState(true);
  const [cityData, setCityData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  
  // Interactive Calculator & Planner States
  const [estimatedDays, setEstimatedDays] = useState(5);
  const [travelerTier, setTravelerTier] = useState('Mid-range');
  const [selectedInterests, setSelectedInterests] = useState(['Food', 'History']);
  const [generatedItinerary, setGeneratedItinerary] = useState([]);
  const [travelStyle, setTravelStyle] = useState('Solo');
  const [pace, setPace] = useState('Balanced');

  // Premium Travel Guide interactive states
  const [activeTab, setActiveTab] = useState('telemetry');
  const [checkedPacking, setCheckedPacking] = useState({});
  const [hoveredMapNode, setHoveredMapNode] = useState(null);
  const [galleryLightbox, setGalleryLightbox] = useState(null);

  // Local helper for destination travel snapshot dossiers
  const getTravelSnapshot = (targetId) => {
    switch (targetId) {
      case 'dest-goa':
        return {
          bestMonths: 'November - February',
          avgBudget: '₹35,000 - ₹55,000',
          duration: '4 - 5 Days',
          travelerType: 'Couples, Groups, Solo',
          language: 'Konkani, Hindi, English',
          currency: 'INR (₹)',
          safetyRating: '⭐⭐⭐⭐☆ (High)',
          accessibility: 'Airport / Rail Link',
          climate: 'Tropical / Coastal',
          highlights: 'Beaches, Portuguese Architecture, Water Sports, Nightlife'
        };
      case 'dest-jaipur':
        return {
          bestMonths: 'October - March',
          avgBudget: '₹40,000 - ₹65,000',
          duration: '3 - 4 Days',
          travelerType: 'Families, History Buffs, Couples',
          language: 'Hindi, Rajasthani, English',
          currency: 'INR (₹)',
          safetyRating: '⭐⭐⭐⭐☆ (High)',
          accessibility: 'International Airport / Rail',
          climate: 'Semi-arid / Warm',
          highlights: 'Forts, Royal Palaces, Shopping, Culinary Feasts'
        };
      case 'dest-delhi':
        return {
          bestMonths: 'October - March',
          avgBudget: '₹30,000 - ₹50,000',
          duration: '2 - 3 Days',
          travelerType: 'Foodies, Shoppers, History Buffs',
          language: 'Hindi, Punjabi, English',
          currency: 'INR (₹)',
          safetyRating: '⭐⭐⭐☆☆ (Moderate)',
          accessibility: 'Metro / Airport / Rail',
          climate: 'Extreme / Continental',
          highlights: 'Red Fort, Qutub Minar, Chandni Chowk Street Food'
        };
      default:
        return {
          bestMonths: 'October - March',
          avgBudget: '₹35,000 - ₹60,000',
          duration: '3 - 5 Days',
          travelerType: 'Solo, Couples, Families',
          language: 'Hindi, English',
          currency: 'INR (₹)',
          safetyRating: '⭐⭐⭐⭐☆ (High)',
          accessibility: 'Rail / Road Networks',
          climate: 'Moderate / Varied',
          highlights: 'Local Landmarks, Heritage sites, Food trails'
        };
    }
  };
  const snapshot = getTravelSnapshot(id);

  // Reviews States
  const [reviews, setReviews] = useState([]);
  const [reviewerName, setReviewerName] = useState(user?.name || '');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewRating, setReviewRating] = useState(5);

  const interestOptions = ['Food', 'History', 'Nature', 'Adventure', 'Art & Museums', 'Shopping', 'Beach', 'Nightlife', 'Relaxation'];

  // Load city, country, weather, and reviews
  useEffect(() => {
    const loadDetails = async () => {
      setLoading(true);
      try {
        // Resolve base destination details from mock list or raw query
        const baseDest = mockDestinations.find(d => d.id === id) || 
                         mockDestinations.find(d => d.name.toLowerCase() === id.toLowerCase()) ||
                         {
                           id: id,
                           name: id.replace(/-/g, ' '),
                           country: 'Global',
                           image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
                           tags: ['Culture', 'History']
                         };

        // Parallel API fetching
        const resolvedCity = await fetchCityDetails(baseDest.name, baseDest.country);
        const resolvedCountry = await fetchCountryDetails(baseDest.country !== 'Global' ? baseDest.country : baseDest.name);

        setCityData(resolvedCity);
        setCountryData(resolvedCountry);

        // Fetch Weather using coordinates
        const lat = (resolvedCountry && resolvedCountry.latlng && resolvedCountry.latlng[0] !== undefined)
          ? resolvedCountry.latlng[0]
          : (resolvedCity && resolvedCity.lat ? resolvedCity.lat : 20);
        const lon = (resolvedCountry && resolvedCountry.latlng && resolvedCountry.latlng[1] !== undefined)
          ? resolvedCountry.latlng[1]
          : (resolvedCity && resolvedCity.lon ? resolvedCity.lon : 77);
        const resolvedWeather = await fetchWeatherForecast(lat, lon);
        setWeatherData(resolvedWeather);

        // Load Persisted Reviews
        const savedReviews = localStorage.getItem(`travelverse_reviews_${baseDest.id}`);
        if (savedReviews) {
          try {
            setReviews(JSON.parse(savedReviews));
          } catch (e) {
            logger.warn("Failed to parse reviews from localStorage:", e);
            setReviews([
              { id: 1, name: 'Commander Alex', rating: 5, comment: 'Incredible coordinates mapping. The historical quarters are a must-see.', date: '2026-05-12' },
              { id: 2, name: 'Sora Tanaka', rating: 4, comment: 'Stunning landscapes. Weather was exactly as compiled by the forecast matrix.', date: '2026-06-01' }
            ]);
          }
        } else {
          // Seed initial feedback logs
          const seed = [
            { id: 1, name: 'Commander Alex', rating: 5, comment: 'Incredible coordinates mapping. The historical quarters are a must-see.', date: '2026-05-12' },
            { id: 2, name: 'Sora Tanaka', rating: 4, comment: 'Stunning landscapes. Weather was exactly as compiled by the forecast matrix.', date: '2026-06-01' }
          ];
          setReviews(seed);
          localStorage.setItem(`travelverse_reviews_${baseDest.id}`, JSON.stringify(seed));
        }
      } catch (err) {
        logger.error('Failed compiling destination details:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [id, user]);

  // Handle Dynamic AI Itinerary Compilation using local engine
  useEffect(() => {
    if (!cityData) return;
    const compiled = generateDetailedItinerary(cityData.name, estimatedDays, travelerTier, selectedInterests, travelStyle, pace);
    setGeneratedItinerary(compiled.days);
  }, [cityData, estimatedDays, travelerTier, selectedInterests, travelStyle, pace]);

  // AI Neural Guide Profiles Config
  const guides = {
    aarav: {
      name: "Aarav Sharma",
      role: "Heritage Historian & Mythologist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      intro: "Namaste. I decode the timelines, architectural alignments, and sacred mythologies of this quadrant.",
      accent: "en-IN",
      presets: [
        "What is the historical significance of this place?",
        "Are there specific temple rules or customs to follow?",
        "Explain the local architecture style."
      ],
      responses: {
        history: `This region possesses centuries of deep spiritual history. Its ancient coordinates were mapped according to cosmological alignments to channel positive planetary currents.`,
        taboos: `Please ensure you remove footwear before entering any temple or sacred threshold. It is customary to cover your shoulders and knees. Circular walks around shrines must always be clockwise.`,
        default: `The history here is rich and profound. From its early founders to its medieval dynasties, this area remains a spiritual pillar. Let me know which dynasty or custom you'd like to investigate.`
      }
    },
    nisha: {
      name: "Nisha Patel",
      role: "Culinary Alchemist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      intro: "Hello! I map local culinary tracks, spice blends, and hidden street food kitchens.",
      accent: "en-IN",
      presets: [
        "What local dishes must I absolutely try?",
        "Is there a secret street food spot nearby?",
        "Tell me about regional spices used here."
      ],
      responses: {
        food: `You must try the cardamom-infused local tea, fresh clay-oven flatbreads, and regional vegetable stews. They are absolute masterpieces of taste!`,
        spicy: `The local recipes use a combination of cumin, ginger, and turmeric. If your travel DNA prefers mild spice, tell the cook 'no extra green chilis'.`,
        default: `Every dish here carries the soul of the region. Ask me about street food tasting tours, regional breakfast items, or vegetarian specialties!`
      }
    },
    vikram: {
      name: "Vikram Rathore",
      role: "Extremophile Adventure Guide",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      intro: "Hey explorer. I calibrate mountain tracks, weather-fatigue advisories, and landscape photography spots.",
      accent: "en-GB",
      presets: [
        "Where is the best photography vantage point?",
        "Are there any safety warnings or physical checks?",
        "Suggest a quick trekking route."
      ],
      responses: {
        vantage: `For the ultimate drone-like view, hike up the eastern path at exactly 05:40 AM. The mountain mist clears just enough for a stunning golden-hour reflection.`,
        safety: `Pay close attention to altitude sickness and weather fronts. Stay hydrated, carry a thermal layers kit, and never trek past dusk without emergency radio links.`,
        default: `Safety and preparation are the keys to exploration. Let me know if you need to optimize your climbing paths, physical exertion indexes, or hiking gear list.`
      }
    }
  };

  // Seed default message on guide change or initialization
  useEffect(() => {
    if (!cityData) return;
    const guideData = guides[selectedGuide];
    setChatMessages([
      { sender: 'guide', text: `[${guideData.name} initialized] ${guideData.intro}` }
    ]);
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [selectedGuide, cityData]);

  // Voice speech synthesis helper
  const speakResponse = (text, accent) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    // Remove brackets or special markers for speech
    const cleanText = text.replace(/\[.*?\]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voices = window.speechSynthesis.getVoices();
    
    let matchedVoice = voices.find(v => v.lang.toLowerCase().includes(accent.toLowerCase()));
    if (!matchedVoice) {
      matchedVoice = voices.find(v => v.lang.startsWith('en'));
    }
    
    if (matchedVoice) utterance.voice = matchedVoice;
    utterance.lang = accent;
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleAskGuide = (questionText) => {
    if (!questionText.trim()) return;

    const userMsg = { sender: 'user', text: questionText };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsSpeaking(true); // animate waveform while thinking

    setTimeout(() => {
      const q = questionText.toLowerCase();
      const guideData = guides[selectedGuide];
      let reply;

      if (q.includes('history') || q.includes('ancient') || q.includes('old') || q.includes('dynasty') || q.includes('myth')) {
        reply = guideData.responses.history || guideData.responses.default;
      } else if (q.includes('food') || q.includes('eat') || q.includes('dish') || q.includes('cuisine') || q.includes('taste') || q.includes('spice')) {
        reply = guideData.responses.food || guideData.responses.spicy || guideData.responses.default;
      } else if (q.includes('safety') || q.includes('warn') || q.includes('danger') || q.includes('climb') || q.includes('height')) {
        reply = guideData.responses.safety || guideData.responses.default;
      } else if (q.includes('photo') || q.includes('vantage') || q.includes('sunset') || q.includes('view')) {
        reply = guideData.responses.vantage || guideData.responses.default;
      } else if (q.includes('rule') || q.includes('custom') || q.includes('taboo') || q.includes('dress') || q.includes('respect')) {
        reply = guideData.responses.taboos || guideData.responses.default;
      } else {
        reply = `As your TravelVerse ${guideData.role}, I advise that ${cityData.name} holds many mysteries. ` + guideData.responses.default;
      }

      const guideMsg = { sender: 'guide', text: reply };
      setChatMessages(prev => [...prev, guideMsg]);

      if (isVoiceEnabled) {
        speakResponse(reply, guideData.accent);
      } else {
        setIsSpeaking(false);
      }
    }, 1000);
  };

  // Web Audio ambient synthesizer
  const startAmbientSynth = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      oscRef.current = osc;
      gainRef.current = gain;

      // Create a warm, low drone matching the theme
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(selectedGuide === 'aarav' ? 110 : (selectedGuide === 'nisha' ? 147 : 98), ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(250, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      gain.gain.setValueAtTime(0.0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 1.5);
      
      osc.start();
    } catch (err) {
      logger.warn("Failed creating ambient audio context:", err);
    }
  };

  const stopAmbientSynth = () => {
    if (gainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainRef.current.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 0.5);
      setTimeout(() => {
        try {
          if (oscRef.current) oscRef.current.stop();
          if (audioCtxRef.current) audioCtxRef.current.close();
        } catch (e) {
          // Swallow audio context termination exceptions
        }
        oscRef.current = null;
        audioCtxRef.current = null;
        gainRef.current = null;
      }, 600);
    }
  };

  // Sync ambient audio with state
  useEffect(() => {
    if (isAudioPlaying) {
      startAmbientSynth();
    } else {
      stopAmbientSynth();
    }
    return () => stopAmbientSynth();
  }, [isAudioPlaying]);

  // Request Gyroscope permissions (mainly for iOS 13+)
  const requestGyroPermission = async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const state = await DeviceOrientationEvent.requestPermission();
        setGyroPermission(state);
        if (state === 'granted') {
          window.addEventListener('deviceorientation', handleDeviceOrientation);
          showToast('Device Gyroscope connected to Holoportal.', 'success');
        }
      } catch (err) {
        logger.error("Gyroscope permission error:", err);
        setGyroPermission('denied');
      }
    } else {
      // Android / Desktop default
      setGyroPermission('granted');
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
  };

  const handleDeviceOrientation = (e) => {
    if (e.gamma === null) return;
    // Map left-right tilt (gamma) and front-back tilt (beta)
    const x = Math.min(Math.max(e.gamma * 6, -300), 300);
    const y = Math.min(Math.max((e.beta - 50) * 6, -200), 200);
    setTiltOffset({ x, y });
  };

  useEffect(() => {
    if (isFullscreen360 && gyroPermission === 'granted') {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [isFullscreen360, gyroPermission]);

  // Drag interaction handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      y: e.clientY || (e.touches && e.touches[0].clientY) || 0
    };
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    const dx = clientX - dragStart.current.x;
    const dy = clientY - dragStart.current.y;
    
    setDragOffset(prev => ({
      x: Math.min(Math.max(prev.x + dx, -400), 400),
      y: Math.min(Math.max(prev.y + dy, -300), 300)
    }));
    dragStart.current = { x: clientX, y: clientY };
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleInterestToggle = (tag) => {
    setSelectedInterests(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Cost Index calculation (scaled by 80x for Rupees INR)
  const getCalculatedCosts = () => {
    const costPerDay = travelerTier === 'Backpacker' ? 4800 : travelerTier === 'Mid-range' ? 14400 : 36000;
    const flightCost = travelerTier === 'Backpacker' ? 32000 : travelerTier === 'Mid-range' ? 64000 : 144000;
    const hotelCostPerDay = travelerTier === 'Backpacker' ? 3200 : travelerTier === 'Mid-range' ? 9600 : 28000;

    const lodging = hotelCostPerDay * estimatedDays;
    const meals = (costPerDay * 0.35) * estimatedDays;
    const activities = (costPerDay * 0.4) * estimatedDays;
    const transport = (costPerDay * 0.25) * estimatedDays;
    const total = flightCost + lodging + meals + activities + transport;

    return {
      flights: Math.round(flightCost),
      lodging: Math.round(lodging),
      meals: Math.round(meals),
      activities: Math.round(activities),
      transport: Math.round(transport),
      total: Math.round(total)
    };
  };

  const guidePremiumData = useMemo(() => getPremiumGuideData(cityData?.name || id), [cityData, id]);
  const calculatedCosts = getCalculatedCosts();
  const isWishlisted = cityData ? isInWishlist('destinations', id) : false;
  const displayImage = cityData ? getDestinationImage(id, customPhotos) : '';

  // Save itinerary to Dashboard context
  const handleSaveItinerary = useCallback(() => {
    const compiled = generateDetailedItinerary(cityData.name, estimatedDays, travelerTier, selectedInterests, travelStyle, pace);
    const newItineraryObj = {
      id: `it-${Date.now()}`,
      destination: cityData.name,
      country: countryData.name,
      image: displayImage,
      duration: estimatedDays,
      budgetType: travelerTier,
      travelStyle,
      pace,
      dateSaved: new Date().toLocaleDateString(),
      costs: calculatedCosts,
      days: compiled.days,
      averageWalkingDist: compiled.averageWalkingDist,
      emergencyServices: compiled.emergencyServices,
      transportationAdvice: compiled.transportationAdvice,
      packingList: ['Passport', 'Climate wear', 'Universal adapter', 'Local currency credits']
    };
    saveItinerary(newItineraryObj);
  }, [cityData, countryData, displayImage, estimatedDays, travelerTier, selectedInterests, travelStyle, pace, calculatedCosts, saveItinerary]);

  // Submit Feedback Review
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewComment.trim()) {
      showToast('All fields required.', 'error');
      return;
    }

    const newReview = {
      id: Date.now(),
      name: reviewerName.trim(),
      rating: reviewRating,
      comment: reviewComment.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem(`travelverse_reviews_${id}`, JSON.stringify(updated));
    setReviewComment('');
    showToast('Feedback telemetry logged.', 'success');
  };

  const getCityFacts = (name) => {
    const facts = {
      'Goa': [
        "Goa is India's smallest state by area but has the highest GDP per capita.",
        "The first printing press in Asia was established in Goa by the Portuguese in 1556.",
        "It features the Dudhsagar Waterfalls, one of the tallest multi-tiered waterfalls in India."
      ],
      'Jaipur': [
        "Jaipur was planned from scratch according to Vastu Shastra (traditional Indian architecture).",
        "The entire city was painted terracotta pink in 1876 to welcome Prince Albert of Britain.",
        "It is home to the world's largest stone sundial, the Jantar Mantar (UNESCO World Heritage site)."
      ],
      'Varanasi': [
        "Varanasi is widely considered one of the oldest continuously inhabited cities in the world.",
        "Mark Twain once said: 'Varanasi is older than history, older than tradition, older even than legend.'",
        "It holds the famous Ganga Aarti at Dashashwamedh Ghat every single evening at dusk."
      ]
    };
    return facts[name] || [
      `${name} is a highly unique travel sector featuring outstanding local heritage and culinary trails.`,
      "The region supports a dynamic tourism footprint with both premium hotels and backpacker communities.",
      "Travelers can explore historic architecture and beautiful natural scenery throughout the year."
    ];
  };

  if (loading) {
    return <DestinationDetailsSkeleton />;
  }

  return (
    <div className="w-full flex flex-col gap-8 text-left py-4 relative">
      <style>{`
        .glass-neo-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        @keyframes audio-bar-grow {
          0%, 100% { height: 3px; }
          50% { height: 12px; }
        }
        .animate-audio-bar-1 { animation: audio-bar-grow 0.8s ease infinite; }
        .animate-audio-bar-2 { animation: audio-bar-grow 0.5s ease infinite 0.2s; }
        .animate-audio-bar-3 { animation: audio-bar-grow 0.9s ease infinite 0.4s; }
      `}</style>
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-900/10 p-3 rounded-2xl border border-slate-200 dark:border-white/5">
        <Link to="/" className="hover:text-teal-400 transition-colors">HOME</Link>
        <span>&gt;</span>
        <Link to="/destinations" className="hover:text-teal-400 transition-colors">DESTINATIONS</Link>
        <span>&gt;</span>
        <span className="text-slate-400">{countryData.name}</span>
        <span>&gt;</span>
        <span className="text-teal-600 dark:text-teal-400">{cityData.name}</span>
      </nav>

      {/* Cinematic Full-screen/Taller Hero Banner with entrance animations */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[450px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-teal-500/10 group"
      >
        <img
          src={displayImage}
          alt={cityData.name}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[12s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
        
        {/* Floating Details Overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse relative block">
                <span className="absolute inset-0 rounded-full bg-teal-400/50 scale-200 animate-ping" />
              </span>
              <span className="text-[10px] text-teal-400 font-mono tracking-widest font-bold uppercase">{countryData.continent} Sector</span>
              {guidePremiumData.unesco && (
                <span className="ml-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded">
                  🏛️ UNESCO HERITAGE
                </span>
              )}
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              {cityData.name}
            </h1>
            <p className="text-sm font-mono text-slate-300 font-bold uppercase mt-1.5 tracking-wider flex items-center gap-1">
              <MapPin size={13} className="text-teal-400" /> {countryData.name}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => toggleWishlist('destinations', { id, name: cityData.name, image: displayImage, country: countryData.name })}
              className={`p-3.5 rounded-2xl border transition-all duration-300 transform active:scale-95 cursor-pointer ${
                isWishlisted
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                  : 'bg-slate-900/60 border-white/10 text-white hover:border-teal-400/50'
              }`}
            >
              <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={() => setIsEditPhotoOpen(true)}
              className="p-3.5 rounded-2xl border bg-slate-900/60 border-white/10 text-white hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center gap-1.5"
              title="Customize Photo"
            >
              <Camera size={18} />
              <span className="text-xs font-mono font-bold tracking-wider hidden sm:inline">CUSTOMIZE PHOTO</span>
            </button>
            <button
              onClick={handleSaveItinerary}
              className="px-5 py-3.5 bg-teal-500 hover:bg-teal-600 text-slate-955 rounded-2xl text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-teal-500/10"
            >
              <Save size={15} /> SYNC TO OS
            </button>
          </div>
        </div>
      </motion.div>

      {/* Futuristic Glassmorphic Tab Bar Navigation */}
      <div className="w-full flex flex-wrap gap-2 bg-slate-900/40 border border-white/5 p-2 rounded-2xl backdrop-blur-md">
        {[
          { id: 'telemetry', label: '🛰️ OS Telemetry', desc: 'Realtime Radar & Map' },
          { id: 'culture', label: '🏛️ History & Culture', desc: 'Chronology, UNESCO, Design' },
          { id: 'transit', label: '🚀 Transit & Helplines', desc: 'Terminals & Assistance' },
          { id: 'culinary', label: '🍛 Lodging & Dining', desc: 'Hotels, Cafes & Shopping' },
          { id: 'planning', label: '🧠 AI Planner & Checklist', desc: 'Scheduler, Packing, Budget' },
          { id: 'logs', label: '💬 Voyager Logs & FAQs', desc: 'Feedback, FAQs & Gallery' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-[150px] p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-teal-500/10 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.15)]'
                : 'border-transparent hover:bg-white/5 hover:border-white/10'
            }`}
          >
            <span className={`text-[11px] font-bold block ${activeTab === tab.id ? 'text-teal-400' : 'text-slate-200 dark:text-white'}`}>{tab.label}</span>
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block mt-0.5">{tab.desc}</span>
          </button>
        ))}
      </div>

      {/* Main Tab Render Grid Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {/* Tab 1: OS Telemetry & Weather */}
          {activeTab === 'telemetry' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Geological Dossier */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl relative overflow-hidden flex flex-col gap-6 text-left">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div>
                      <span className="text-[9px] font-mono text-teal-400 font-bold tracking-widest uppercase">SECTION 01 // OVERVIEW SUMMARY</span>
                      <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide my-0">Geographical Dossier</h3>
                    </div>
                    <span className="px-2 py-0.5 text-[8.5px] font-bold font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded flex items-center gap-1 shrink-0">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Live Sourced API Data
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                    {cityData.overview}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200 dark:border-teal-500/10 pt-6 text-xs font-mono font-bold text-slate-500">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest">Capital City</span>
                      <span className="text-slate-900 dark:text-white">{countryData.capital}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest">Population</span>
                      <span className="text-slate-900 dark:text-white">{countryData.population}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest">Currency</span>
                      <span className="text-slate-900 dark:text-white">{countryData.currency} ({snapshot.currency})</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest">Official Language</span>
                      <span className="text-slate-900 dark:text-white truncate">{countryData.languages}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest">Local Timezone</span>
                      <span className="text-slate-900 dark:text-white">{countryData.timezone}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest">Sector Coordinates</span>
                      <span className="text-teal-400 font-black">{countryData.latlng[0].toFixed(2)}°N, {countryData.latlng[1].toFixed(2)}°E</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Interactive Holographic Vector Map */}
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-teal-500/25 shadow-xl flex flex-col gap-4 relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-400/40 font-bold select-none">
                    <span>TELEMETRY: VECTOR_GRID_RADAR</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-teal-400 font-bold tracking-widest uppercase">SECTION 02 // GEOGRAPHIC SECTOR MAP</span>
                    <h3 className="font-display font-black text-xl text-white mt-1 uppercase tracking-wide flex items-center gap-1.5">
                      <Globe size={18} className="text-teal-400 animate-spin duration-[20s]" /> Holographic Sector Map
                    </h3>
                  </div>

                  <div className="relative h-80 w-full rounded-2xl bg-slate-950 border border-white/5 overflow-hidden flex items-center justify-center">
                    {/* Retro Grid Background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:25px_25px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020617_90%)] pointer-events-none" />

                    {/* SVG Map Lines & Nodes */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
                      {/* Connection lines */}
                      <path d="M 250 150 L 120 70 M 250 150 L 380 90 M 250 150 L 160 210 M 250 150 L 340 220" stroke="#14b8a6" strokeWidth="1" strokeDasharray="5,5" className="opacity-40" />
                      <circle cx="250" cy="150" r="10" stroke="#14b8a6" strokeWidth="1.5" fill="rgba(20,184,166,0.1)" className="animate-pulse" />
                      <circle cx="250" cy="150" r="4" fill="#14b8a6" />
                    </svg>

                    {/* Interactive Node Hotspots */}
                    {[
                      { id: 'center', label: cityData.name, x: '50%', y: '50%', type: 'City Center', details: 'Telemetry core' },
                      { id: 'airport', label: guidePremiumData.transit.airports[0]?.name || 'Airport Sector', x: '24%', y: '23%', type: 'Terminal Gate', details: `Dist: ${guidePremiumData.transit.airports[0]?.dist || 'N/A'}` },
                      { id: 'rail', label: guidePremiumData.transit.railways[0]?.name || 'Railway Terminal', x: '76%', y: '30%', type: 'Railway Hub', details: `Dist: ${guidePremiumData.transit.railways[0]?.dist || 'N/A'}` },
                      { id: 'scenic', label: cityData.attractions[0] || 'Vantage Point', x: '32%', y: '70%', type: 'Scenic Reticle', details: 'Optimal sun alignment' },
                      { id: 'culinary', label: guidePremiumData.culinary.restaurants[0]?.name || 'Dining Hub', x: '68%', y: '73%', type: 'Culinary Vault', details: 'Traditional specialties' }
                    ].map((node) => (
                      <button
                        key={node.id}
                        onMouseEnter={() => setHoveredMapNode(node)}
                        onMouseLeave={() => setHoveredMapNode(null)}
                        className="absolute w-6 h-6 rounded-full flex items-center justify-center group transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-15"
                        style={{ left: node.x, top: node.y }}
                      >
                        <span className="absolute w-4 h-4 rounded-full bg-teal-400/25 scale-150 animate-ping group-hover:scale-200 duration-1000" />
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-400 group-hover:bg-sky-400 border border-slate-950 transition-colors" />
                      </button>
                    ))}

                    {/* Telemetry Floating HUD overlay on hover */}
                    <AnimatePresence>
                      {hoveredMapNode && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-teal-500/30 backdrop-blur-md text-left flex flex-col gap-1 z-20 pointer-events-none"
                        >
                          <span className="text-[8px] font-mono font-bold text-teal-400 uppercase tracking-widest">{hoveredMapNode.type}</span>
                          <span className="text-xs font-bold text-white uppercase">{hoveredMapNode.label}</span>
                          <span className="text-[10px] font-mono text-slate-400">{hoveredMapNode.details}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Coordinates Reticle labels */}
                    <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                      COORDS: {countryData.latlng[0].toFixed(3)}N / {countryData.latlng[1].toFixed(3)}E
                    </div>
                    <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-500">
                      GRID SECTOR: ALPH_4
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Snapshot & live details */}
              <div className="lg:col-span-1 flex flex-col gap-6 sticky top-6 self-start text-left">
                {/* Sunrise, Sunset, and live snapshot */}
                <div className="p-6 rounded-3xl bg-slate-900 border border-teal-500/10 shadow-xl flex flex-col gap-4 text-slate-100">
                  <span className="text-[8px] font-mono text-teal-400 font-bold uppercase tracking-widest block">TELEMETRY: SUN_CYCLE</span>
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-teal-300 flex items-center gap-1">
                    🌅 Planetary Light Cycle
                  </h4>
                  <div className="grid grid-cols-2 gap-3 font-mono text-[10px] mt-2">
                    <div className="p-3 bg-slate-950/50 rounded-xl border border-white/5">
                      <span className="text-slate-400 uppercase text-[8px] block mb-0.5">🌅 SUNRISE</span>
                      <span className="text-xs font-black text-teal-400">{guidePremiumData.sunrise}</span>
                    </div>
                    <div className="p-3 bg-slate-950/50 rounded-xl border border-white/5">
                      <span className="text-slate-400 uppercase text-[8px] block mb-0.5">🌇 SUNSET</span>
                      <span className="text-xs font-black text-indigo-400">{guidePremiumData.sunset}</span>
                    </div>
                  </div>
                </div>

                {/* Weather forecast */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    🌦️ Live Weather Radar
                  </h4>
                  <div className="flex flex-col gap-2">
                    {weatherData.map((w, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-950/30 border border-slate-200 dark:border-teal-500/5 text-xs">
                        <span className="font-mono font-bold text-slate-400 uppercase">{w.day}</span>
                        <span className="text-base" role="img" aria-label={w.summary}>{w.icon}</span>
                        <span className="font-mono text-slate-500">{w.summary.substring(0, 10)}</span>
                        <span className="font-mono font-bold text-slate-800 dark:text-white">{w.maxTemp}° / {w.minTemp}°</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Snapshot metadata items */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    📋 Core Metrics Dossier
                  </h4>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 uppercase text-[9px] font-mono font-bold">Recommended Visit</span>
                      <span className="font-bold text-slate-800 dark:text-white">{snapshot.bestMonths}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 uppercase text-[9px] font-mono font-bold">Average Budget</span>
                      <span className="font-bold text-slate-800 dark:text-white">{snapshot.avgBudget}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 uppercase text-[9px] font-mono font-bold">Trip Duration</span>
                      <span className="font-bold text-slate-800 dark:text-white">{snapshot.duration}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 uppercase text-[9px] font-mono font-bold">Safety rating</span>
                      <span className="font-bold text-slate-800 dark:text-white">{snapshot.safetyRating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Chronology & Culture */}
          {activeTab === 'culture' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-left">
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Complete History Timeline */}
                {cityData.history && (
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-5">
                    <div>
                      <span className="text-[9px] font-mono text-indigo-400 font-bold tracking-widest uppercase">CHRONOLOGICAL HISTORICAL ENGINE</span>
                      <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide">Historical Timeline</h3>
                    </div>
                    <div className="relative border-l border-slate-200 dark:border-teal-500/10 pl-6 ml-3 flex flex-col gap-6">
                      {cityData.history.map((hist, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 fill-indigo-400 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                          </div>
                          <div className="flex justify-between items-baseline gap-4 flex-wrap">
                            <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest">{hist.era}</span>
                            <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">{hist.event}</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mt-1">
                            {hist.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Details: Architecture, Culture, UNESCO */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Architectural styling */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300 flex items-center gap-1.5">
                    <Landmark size={14} className="text-teal-400" /> Architectural Heritage
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold leading-relaxed">
                    {guidePremiumData.architecture}
                  </p>
                </div>

                {/* Cultural Importance */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-indigo-400" /> Cultural Identity
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold leading-relaxed">
                    {guidePremiumData.culture}
                  </p>
                </div>

                {/* UNESCO Badge info */}
                {guidePremiumData.unesco && (
                  <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 shadow-xl flex flex-col gap-4">
                    <h4 className="font-display font-black text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      🏛️ UNESCO World Heritage Status
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-200 font-semibold leading-relaxed font-mono">
                      {guidePremiumData.unesco}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 3: Transit & Connections */}
          {activeTab === 'transit' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-left">
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Connections terminals */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-6">
                  <div>
                    <span className="text-[9px] font-mono text-teal-400 font-bold tracking-widest uppercase">LOGISTICS CORRIDOR TERMINALS</span>
                    <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide">Transit Terminal Connections</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Airports */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-white/5 flex flex-col gap-3">
                      <span className="font-mono font-bold text-[9px] text-teal-400 uppercase tracking-widest block">✈️ NEARBY AIRPORT TERMINALS</span>
                      <div className="flex flex-col gap-2">
                        {guidePremiumData.transit.airports.map((ap, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs font-mono border-b border-slate-200/50 dark:border-white/5 pb-1">
                            <span className="font-bold text-slate-800 dark:text-slate-200 truncate pr-1" title={ap.name}>{ap.name}</span>
                            <span className="text-teal-400 font-black shrink-0">{ap.dist}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Railways */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-white/5 flex flex-col gap-3">
                      <span className="font-mono font-bold text-[9px] text-indigo-400 uppercase tracking-widest block">🚆 RAILWAY JUNCTION CONNECTIONS</span>
                      <div className="flex flex-col gap-2">
                        {guidePremiumData.transit.railways.map((rw, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs font-mono border-b border-slate-200/50 dark:border-white/5 pb-1">
                            <span className="font-bold text-slate-800 dark:text-slate-200 truncate pr-1" title={rw.name}>{rw.name}</span>
                            <span className="text-indigo-400 font-black shrink-0">{rw.dist}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Road & local connections */}
                  <div className="grid grid-cols-1 gap-4 font-mono text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-white/5">
                      <span className="font-bold text-[9px] text-slate-400 uppercase tracking-widest block mb-1">🛣️ HIGHWAY ROAD CONNECTIVITY</span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">{guidePremiumData.transit.road}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-white/5">
                      <span className="font-bold text-[9px] text-slate-400 uppercase tracking-widest block mb-1">🚏 LOCAL TRANSPORT LOGISTICS</span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">{guidePremiumData.transit.local}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Emergency Helplines Contacts */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/20 shadow-xl flex flex-col gap-4 text-left">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-rose-500 flex items-center gap-1.5 font-bold">
                    🚨 Emergency Helpline Contacts
                  </h4>
                  <div className="flex flex-col gap-3 font-mono text-xs mt-2">
                    <div className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-xl border border-white/5 text-slate-300">
                      <span className="text-[8px] font-bold text-slate-400 uppercase">🚨 POLICE CONTROL</span>
                      <a href={`tel:${guidePremiumData.emergency.police.split(' ')[0]}`} className="font-black text-rose-400 hover:underline">{guidePremiumData.emergency.police}</a>
                    </div>
                    <div className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-xl border border-white/5 text-slate-300">
                      <span className="text-[8px] font-bold text-slate-400 uppercase">🚑 MEDICAL HUB</span>
                      <a href={`tel:${guidePremiumData.emergency.medical.split(' ')[0]}`} className="font-black text-teal-400 hover:underline">{guidePremiumData.emergency.medical}</a>
                    </div>
                    <div className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-xl border border-white/5 text-slate-300">
                      <span className="text-[8px] font-bold text-slate-400 uppercase">📞 TOURIST HELP</span>
                      <a href={`tel:${guidePremiumData.emergency.touristHelpline}`} className="font-black text-sky-400 hover:underline">{guidePremiumData.emergency.touristHelpline}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Lodging & Culinary */}
          {activeTab === 'culinary' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-left">
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Hotels / Stays list */}
                {cityData.stays && (
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                    <h3 className="font-display font-black text-xl text-slate-900 dark:text-white uppercase tracking-wide">Premium Recommended Lodging</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {cityData.stays.map((stay, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-white/5 flex flex-col gap-2">
                          <span className="text-[8px] font-mono font-bold text-teal-400 uppercase tracking-widest">{stay.type}</span>
                          <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white truncate">{stay.name}</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">{stay.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Restaurants & Cafes */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-5">
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white uppercase tracking-wide">Culinary Food Map Directory</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Restaurants */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-white/5 flex flex-col gap-3">
                      <span className="font-mono font-bold text-[9px] text-teal-400 uppercase tracking-widest block">🍽️ RECOMMENDED DINING RESTAURANTS</span>
                      <div className="flex flex-col gap-2.5">
                        {guidePremiumData.culinary.restaurants.map((rest, idx) => (
                          <div key={idx} className="flex flex-col gap-0.5 text-xs">
                            <span className="font-bold text-slate-800 dark:text-white">{rest.name}</span>
                            <span className="text-[10px] font-mono text-slate-400 uppercase">{rest.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cafes */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-white/5 flex flex-col gap-3">
                      <span className="font-mono font-bold text-[9px] text-indigo-400 uppercase tracking-widest block">☕ ARTISANAL CAFES & TEAHOUSE COORDS</span>
                      <div className="flex flex-col gap-2.5">
                        {guidePremiumData.culinary.cafes.map((cf, idx) => (
                          <div key={idx} className="flex flex-col gap-0.5 text-xs">
                            <span className="font-bold text-slate-800 dark:text-white">{cf.name}</span>
                            <span className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">Specialty: {cf.specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Street food specialties */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-955/30 border border-slate-150 dark:border-white/5 flex flex-col gap-2 font-mono text-xs">
                    <span className="font-bold text-[9px] text-slate-400 uppercase tracking-widest block">🍢 STREET FOOD EXPERIMENTS</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-800 dark:text-white">{guidePremiumData.culinary.streetFood[0].name}</span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold italic">Specialties: {guidePremiumData.culinary.streetFood[0].specialties}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar: Shopping areas & nearby attractions */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Shopping Sectors */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    🛍️ Premium Shopping Sectors
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {guidePremiumData.shopping.map((sh, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5 text-xs">
                        <h5 className="font-bold text-slate-800 dark:text-white uppercase">{sh.name}</h5>
                        <p className="text-[10px] font-mono text-teal-400 font-semibold mt-0.5">{sh.specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nearby attractions list */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    🗺️ Top Nearby Attractions
                  </h4>
                  <div className="flex flex-col gap-2 font-mono text-[11px]">
                    {cityData.attractions.map((attr, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5 text-slate-700 dark:text-slate-200 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span className="font-bold">{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: AI Engines & Itinerary */}
          {activeTab === 'planning' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-left">
              {/* Daily scheduler */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* AI Daily Scheduler timeline */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono text-teal-400 font-bold tracking-widest uppercase">QUANTUM AI ITERATIONS ROUTER</span>
                      <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide flex items-center gap-1.5">
                        <Sparkles size={18} className="text-teal-400 animate-pulse" /> AI Daily Scheduler Suggestions
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                    {generatedItinerary.map((d) => (
                      <div key={d.day} className="flex flex-col gap-3 relative border-b border-slate-100 dark:border-white/5 pb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-bold font-mono text-xs flex items-center justify-center shrink-0 z-10">
                            {d.day}
                          </div>
                          <h5 className="font-bold text-xs text-slate-800 dark:text-white uppercase font-display">{d.title}</h5>
                        </div>
                        
                        <div className="flex flex-col gap-3.5 border-l border-slate-200 dark:border-teal-500/10 pl-4 ml-3">
                          {d.timeline?.map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-1 text-[11px]">
                              <div className="flex items-center gap-2 font-bold">
                                <span>{item.icon}</span>
                                <span className="text-slate-800 dark:text-white">{item.activity}</span>
                                <span className="font-mono text-[9px] text-teal-400 font-medium bg-teal-500/5 px-2 py-0.5 rounded border border-teal-500/10 ml-auto shrink-0">{item.time}</span>
                              </div>
                              <p className="text-slate-500 dark:text-slate-400 pl-5 font-semibold leading-relaxed">{item.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="p-6 rounded-3xl bg-teal-500/5 border border-teal-500/25 shadow-xl flex flex-col gap-4 text-left">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-teal-400 flex items-center gap-1.5 font-bold">
                    🧠 TravelVerse AI Smart Recommendations
                  </h4>
                  <div className="flex flex-col gap-2.5 font-mono text-xs text-slate-700 dark:text-slate-200">
                    {guidePremiumData.aiRecommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 bg-slate-900/40 rounded-xl border border-white/5">
                        <span className="text-teal-400 font-black shrink-0">►</span>
                        <p className="font-semibold">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Planner Parameters & Packing Checklist */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Credits budget Matrix Estimator */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-400/45 font-bold select-none">
                    <span>CALC: DEBIT_INDEX</span>
                  </div>
                  
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    Estimated Budget Calculator
                  </h4>
                  
                  {/* Days Slider */}
                  <div className="flex flex-col gap-2 border-b border-slate-200 dark:border-teal-500/10 pb-4">
                    <div className="flex justify-between items-baseline font-mono text-xs font-bold uppercase text-slate-400">
                      <span>Duration Days</span>
                      <span className="text-teal-500 text-lg font-black">{estimatedDays} Days</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="14"
                      value={estimatedDays}
                      onChange={(e) => setEstimatedDays(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Travel Tier buttons */}
                  <div className="flex flex-col gap-2 border-b border-slate-200 dark:border-teal-500/10 pb-4">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Travel Tier Level</span>
                    <div className="grid grid-cols-3 gap-2">
                      {['Backpacker', 'Mid-range', 'Luxury'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTravelerTier(t)}
                          className={`py-2 rounded-xl border text-[10px] font-mono font-black uppercase transition-all cursor-pointer ${
                            travelerTier === t
                              ? 'bg-teal-500/10 border-teal-500 text-teal-400'
                              : 'border-slate-200 dark:border-teal-500/10 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-850/50'
                          }`}
                        >
                          {t.replace('-range', '')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget breakdown */}
                  <div className="flex flex-col gap-3 font-mono text-xs text-slate-500">
                    <div className="flex justify-between items-center">
                      <span>✈️ TRANSIT CORRIDORS:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">₹{calculatedCosts.flights.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>🏨 LODGING ESTIMATE:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">₹{calculatedCosts.lodging.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>🍔 MEALS INDEX:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">₹{calculatedCosts.meals.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>🎟️ ACTIVITIES MATRIX:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">₹{calculatedCosts.activities.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>🚕 SHUTTLES INDEX:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">₹{calculatedCosts.transport.toLocaleString('en-IN')}</span>
                    </div>
                    
                    <div className="flex justify-between items-baseline border-t border-slate-200 dark:border-teal-500/10 pt-3 text-slate-800 dark:text-white mt-1">
                      <span className="text-[10px] font-bold uppercase">NET TOTAL ESTIMATE:</span>
                      <span className="text-xl font-black text-teal-400">₹{calculatedCosts.total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Packing Checklist */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    🎒 Packing Checklist
                  </h4>
                  <div className="flex flex-col gap-2 font-mono text-xs">
                    {guidePremiumData.packingChecklist.map((item, idx) => {
                      const isChecked = checkedPacking[idx] || false;
                      return (
                        <button
                          key={idx}
                          onClick={() => setCheckedPacking(prev => ({ ...prev, [idx]: !isChecked }))}
                          className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-white/5 text-left transition-colors cursor-pointer"
                        >
                          <span className={`w-4 h-4 rounded border flex items-center justify-center font-bold text-[10px] ${
                            isChecked ? 'bg-teal-500 border-teal-500 text-slate-950' : 'border-slate-300 dark:border-slate-800 text-transparent'
                          }`}>
                            ✓
                          </span>
                          <span className={`font-semibold ${isChecked ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'}`}>{item}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Safety guidelines advisory */}
                <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 shadow-xl flex flex-col gap-4 text-left text-xs font-mono">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-bold">
                    ⚠️ Safety Guidelines
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold leading-relaxed">
                    Always carry a digital copy of your sector passport visa coordinates. Pre-book taxi transits inside vetted hotel hubs and avoid dark alleyways during late hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 6: Voyager Logs & FAQs */}
          {activeTab === 'logs' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-left">
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Photo Gallery (Masonry-like layout) */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white uppercase tracking-wide">High-Quality Photo Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {guidePremiumData.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGalleryLightbox(imgUrl)}
                        className="h-40 rounded-2xl overflow-hidden border border-white/5 hover:border-teal-400/50 transition-all duration-300 transform hover:scale-[1.02] cursor-zoom-in"
                      >
                        <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reviews Core Section */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-6">
                  <div>
                    <span className="text-[9px] font-mono text-teal-400 font-bold tracking-widest uppercase">SECTION 01 // VOYAGER FEEDBACK LOGS</span>
                    <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide">Voyager Reviews</h3>
                  </div>

                  {/* Input review form */}
                  <form onSubmit={handleSubmitReview} className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200 dark:border-teal-500/5 flex flex-col gap-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">LOG NEW FEEDBACK MATRIX</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1 text-xs">
                        <label className="font-mono font-bold text-slate-400 uppercase text-[9px]">YOUR NAME</label>
                        <input
                          type="text"
                          value={reviewerName}
                          onChange={(e) => setReviewerName(e.target.value)}
                          className="px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 font-semibold focus:outline-none focus:border-teal-500 text-slate-800 dark:text-white text-xs"
                          placeholder="Enter name..."
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-xs">
                        <label className="font-mono font-bold text-slate-400 uppercase text-[9px]">RATING TIER</label>
                        <select
                          value={reviewRating}
                          onChange={(e) => setReviewRating(parseInt(e.target.value))}
                          className="px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 font-mono font-bold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-teal-300 text-xs"
                        >
                          <option value="5">★★★★★ (5 Stars)</option>
                          <option value="4">★★★★☆ (4 Stars)</option>
                          <option value="3">★★★☆☆ (3 Stars)</option>
                          <option value="2">★★☆☆☆ (2 Stars)</option>
                          <option value="1">★☆☆☆☆ (1 Star)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-xs">
                      <label className="font-mono font-bold text-slate-400 uppercase text-[9px]">COMMENT STATEMENT</label>
                      <textarea
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        className="px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 font-semibold focus:outline-none focus:border-teal-500 text-slate-800 dark:text-white text-xs h-16 resize-none"
                        placeholder="Share details of your travel sectors..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="py-2.5 bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-955 hover:bg-teal-600 dark:hover:bg-teal-400 font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <Send size={12} /> TRANSMIT FEEDBACK
                    </button>
                  </form>

                  {/* List Reviews */}
                  <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/20 border border-slate-150 dark:border-teal-500/5 text-xs flex flex-col gap-2">
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <span className="font-bold text-slate-800 dark:text-slate-200">{rev.name}</span>
                          <span className="text-[10px] text-teal-400 font-mono font-bold">{'★'.repeat(rev.rating)}</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic">"{rev.comment}"</p>
                        <span className="text-[8px] text-slate-400 font-mono font-bold uppercase self-end">{rev.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar: Festival calendar & FAQs & Did You Know */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Did You Know? Facts Card */}
                <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 text-left flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-bold">
                    💡 Did You Know?
                  </h4>
                  <ul className="list-disc list-inside flex flex-col gap-2 font-mono text-xs text-slate-700 dark:text-slate-200">
                    {getCityFacts(cityData.name).map((fact, idx) => (
                      <li key={idx} className="leading-relaxed font-semibold">{fact}</li>
                    ))}
                  </ul>
                </div>

                {/* Festival Calendar */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    🎉 Annual Festival Calendar
                  </h4>
                  <div className="flex flex-col gap-3 font-mono text-xs">
                    {guidePremiumData.festivals.map((fest, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5">
                        <div className="flex justify-between items-baseline font-bold">
                          <span className="text-slate-800 dark:text-white uppercase truncate pr-1" title={fest.name}>{fest.name}</span>
                          <span className="text-teal-400 text-[10px] shrink-0">{fest.season}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug font-semibold">{fest.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frequently Asked Questions FAQs */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-300">
                    ❓ FAQs Question Desk
                  </h4>
                  <div className="flex flex-col gap-3 font-mono text-xs">
                    {guidePremiumData.faqs.map((faq, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="font-bold text-slate-800 dark:text-white">Q: {faq.q}</span>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Destination Comparison Matrix Card */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
                  <div>
                    <span className="text-[9px] font-mono text-indigo-400 font-bold tracking-widest uppercase">COMPARISON MATRIX</span>
                    <h3 className="font-display font-black text-lg text-slate-900 dark:text-white mt-1 uppercase">Sector Comparison Grid</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-[10px] text-slate-500 dark:text-slate-300 border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-white/10 text-slate-400 font-bold">
                          <th className="py-2.5">METRIC INDICATOR</th>
                          <th className="py-2.5 text-teal-400">{cityData.name.toUpperCase()}</th>
                          <th className="py-2.5 text-slate-500">ALT REGION A</th>
                          <th className="py-2.5 text-slate-500">ALT REGION B</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-semibold text-slate-700 dark:text-slate-200">
                        <tr>
                          <td className="py-3 text-slate-400">Budget Range</td>
                          <td className="py-3 text-teal-400 font-bold">{travelerTier}</td>
                          <td className="py-3">Backpacker</td>
                          <td className="py-3">Luxury Elite</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-slate-400">Pace Density</td>
                          <td className="py-3 text-indigo-400 font-bold">{pace}</td>
                          <td className="py-3">Relaxed</td>
                          <td className="py-3">Fast-Paced</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-slate-400">Family Rating</td>
                          <td className="py-3 text-emerald-400">⭐⭐⭐⭐★</td>
                          <td className="py-3">⭐⭐⭐⭐⭐</td>
                          <td className="py-3">⭐⭐⭐★★</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-slate-400">Adventure Exertion</td>
                          <td className="py-3 text-rose-400">High Exertion</td>
                          <td className="py-3">Medium Exertion</td>
                          <td className="py-3">Extreme Level</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-slate-400">Safety Index</td>
                          <td className="py-3 text-teal-400">95% Score</td>
                          <td className="py-3">90% Score</td>
                          <td className="py-3">98% Score</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 🎙️ SECTION 01 // NEURAL LOCAL GUIDES WITH VOICE SYNTHESIS CHAT */}
      {activeTab !== 'telemetry' && activeTab !== 'logs' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-5 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-400/40 font-bold select-none">
            <span>NEURAL: COMM_GUIDES</span>
          </div>
          <div>
            <span className="text-[9px] font-mono text-indigo-400 font-bold tracking-widest uppercase">🎙️ SECTION 01 // NEURAL CORRIDORS</span>
            <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide flex items-center gap-1.5">
              <Cpu size={18} className="text-indigo-400 animate-pulse" /> Local AI Guide Avatars
            </h3>
          </div>

          {/* Guide Avatar Selectors */}
          <div className="grid grid-cols-3 gap-3">
            {Object.keys(guides).map((key) => {
              const guide = guides[key];
              const isSelected = selectedGuide === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedGuide(key)}
                  className={`p-3 rounded-2xl border text-left flex flex-col sm:flex-row items-center gap-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-500/10 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.15)] text-indigo-900 dark:text-indigo-300'
                      : 'border-slate-200 dark:border-teal-500/10 hover:bg-slate-50 dark:hover:bg-slate-850/50'
                  }`}
                >
                  <img
                    src={guide.avatar}
                    alt={guide.name}
                    className={`w-10 h-10 rounded-xl object-cover border-2 shrink-0 ${
                      isSelected ? 'border-indigo-400' : 'border-slate-300 dark:border-slate-800'
                    }`}
                  />
                  <div className="flex flex-col text-center sm:text-left overflow-hidden">
                    <span className="font-display font-black text-[11px] truncate">{guide.name.split(' ')[0]}</span>
                    <span className="text-[8px] font-mono text-slate-400 font-semibold truncate uppercase">{guide.role.split(' ')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Neural Chat Logs & Waveforms */}
          <div className="flex flex-col gap-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-teal-500/5 p-4 rounded-2xl min-h-[160px] max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
            {chatMessages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col gap-1 max-w-[85%] ${
                  msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start text-left'
                }`}
              >
                <span className="text-[7.5px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {msg.sender === 'user' ? user?.name || 'Explorer' : guides[selectedGuide].role}
                </span>
                <div 
                  className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-teal-500/15 text-slate-900 dark:text-teal-200 border border-teal-500/20 rounded-tr-none'
                      : 'bg-indigo-500/10 text-slate-800 dark:text-indigo-200 border border-indigo-500/20 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Waveform playing graphic */}
            {isSpeaking && (
              <div className="flex items-center gap-1.5 self-start pl-2">
                <span className="text-[8px] font-mono text-indigo-400 font-bold uppercase tracking-wider animate-pulse">Voice streaming:</span>
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-[1.5px] h-2 bg-indigo-400 rounded-full animate-audio-bar-1" />
                  <span className="w-[1.5px] h-3 bg-indigo-400 rounded-full animate-audio-bar-2" />
                  <span className="w-[1.5px] h-1 bg-indigo-400 rounded-full animate-audio-bar-3" />
                </div>
              </div>
            )}
          </div>

          {/* Guide Presets Trigger Buttons */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-widest">Neural Presets</span>
            <div className="flex flex-wrap gap-2">
              {guides[selectedGuide].presets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAskGuide(preset)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-teal-500/10 bg-white dark:bg-slate-900/30 hover:border-indigo-400/50 hover:bg-indigo-500/5 text-slate-600 dark:text-slate-300 text-[10px] font-semibold text-left transition-all cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight size={10} className="text-indigo-400 shrink-0" />
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input Bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskGuide(chatInput)}
                placeholder={`Ask ${guides[selectedGuide].name.split(' ')[0]} anything...`}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-indigo-400 transition-all text-slate-800 dark:text-slate-200"
              />
              
              {/* Voice toggle button */}
              <button
                type="button"
                onClick={() => {
                  setIsVoiceEnabled(!isVoiceEnabled);
                  if (isSpeaking && window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                    setIsSpeaking(false);
                  }
                }}
                className={`absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg border transition-all cursor-pointer ${
                  isVoiceEnabled
                    ? 'bg-indigo-500/15 border-indigo-500/35 text-indigo-400'
                    : 'border-slate-800 text-slate-500 hover:text-white'
                }`}
                title={isVoiceEnabled ? "Mute Speech Voice" : "Enable Speech Voice"}
              >
                {isVoiceEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleAskGuide(chatInput)}
              className="px-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-md shadow-indigo-500/15"
            >
              <Send size={12} /> Transmit
            </button>
          </div>
        </div>
      )}

      {/* Customize Photo Modal */}
      <AnimatePresence>
        {isEditPhotoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[8.5px] text-teal-400 opacity-40">
                PHOTO_EDITOR_V1.0
              </div>
              <h3 className="font-display font-black text-lg text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Camera className="text-teal-400" /> Customize Destination Photo
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed font-semibold">
                Paste any high-resolution image URL below to customize the backdrop for <strong>{cityData.name}</strong>.
              </p>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-teal-400 uppercase tracking-wider mb-1.5 font-bold">Image URL</label>
                  <input
                    type="url"
                    value={customPhotoUrl}
                    onChange={(e) => setCustomPhotoUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-teal-400 transition-all font-mono"
                  />
                </div>

                <div className="flex gap-3 justify-end mt-4">
                  <button
                    onClick={() => {
                      setIsEditPhotoOpen(false);
                      setCustomPhotoUrl('');
                    }}
                    className="px-4 py-2 border border-slate-800 bg-transparent text-slate-400 rounded-xl text-xs font-mono font-bold hover:text-white transition-all cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    onClick={() => {
                      if (!customPhotoUrl.trim()) {
                        showToast('Please enter a valid URL', 'error');
                        return;
                      }
                      updateDestinationPhoto(id, customPhotoUrl.trim());
                      setIsEditPhotoOpen(false);
                      setCustomPhotoUrl('');
                    }}
                    className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-slate-955 rounded-xl text-xs font-mono font-bold shadow transition-all cursor-pointer"
                  >
                    SAVE PHOTO
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* High-Quality Photo Gallery Lightbox Modal */}
      <AnimatePresence>
        {galleryLightbox && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 cursor-zoom-out"
            onClick={() => setGalleryLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={galleryLightbox} alt="Expanded Lightbox" className="max-w-full max-h-[80vh] object-contain" />
              <button
                onClick={() => setGalleryLightbox(null)}
                className="absolute top-4 right-4 p-3 bg-slate-950/70 border border-white/10 text-white rounded-full hover:bg-slate-900 transition-all cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
