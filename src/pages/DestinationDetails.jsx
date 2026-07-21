import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Calendar, Clock, ShieldAlert, Sparkles, Plus, Send, RefreshCw, Thermometer, Info, Heart, ArrowLeft, Save, Globe, Cpu, Camera, Volume2, VolumeX, Maximize2, Minimize2, ChevronRight, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { fetchCityDetails, fetchCountryDetails, fetchWeatherForecast } from '../utils/countriesApi';
import { DestinationDetailsSkeleton } from '../components/SkeletonLoader';
import { generateDetailedItinerary } from '../utils/itineraryEngine';

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
        "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
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
        "https://images.unsplash.com/photo-1561361531-997c5d23db16?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598977123418-45f04b615967?auto=format&fit=crop&w=800&q=80"
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
  const [selectedInterests, setSelectedInterests] = useState(['History', 'Food']);
  const [generatedItinerary, setGeneratedItinerary] = useState([]);
  const [travelStyle, setTravelStyle] = useState('Solo');
  const [pace, setPace] = useState('Balanced');

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
        const lat = resolvedCountry.latlng[0];
        const lon = resolvedCountry.latlng[1];
        const resolvedWeather = await fetchWeatherForecast(lat, lon);
        setWeatherData(resolvedWeather);

        // Load Persisted Reviews
        const savedReviews = localStorage.getItem(`travelverse_reviews_${baseDest.id}`);
        if (savedReviews) {
          setReviews(JSON.parse(savedReviews));
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
        console.error('Failed compiling destination details:', err);
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
      console.warn("Failed creating ambient audio context:", err);
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
        console.error("Gyroscope permission error:", err);
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

  const calculatedCosts = getCalculatedCosts();
  const isWishlisted = cityData ? isInWishlist('destinations', id) : false;
  const displayImage = cityData ? (customPhotos[id] || cityData.image) : '';

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
      `}</style>
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-900/10 p-3 rounded-2xl border border-slate-200 dark:border-white/5">
        <Link to="/" className="hover:text-teal-400 transition-colors">HOME</Link>
        <span>&gt;</span>
        <Link to="/destinations" className="hover:text-teal-400 transition-colors">DESTINATIONS</Link>
        <span>&gt;</span>
        <span className="text-slate-405">{countryData.name}</span>
        <span>&gt;</span>
        <span className="text-teal-650 dark:text-teal-400">{cityData.name}</span>
      </nav>

      {/* Travel Snapshot dossier */}
      <div className="w-full p-5 rounded-3xl bg-slate-900/60 border border-teal-500/10 shadow-xl relative overflow-hidden text-slate-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-3xl pointer-events-none" />
        <div className="flex items-center gap-2 mb-3.5">
          <Cpu className="text-teal-400 animate-pulse" size={14} />
          <h3 className="font-mono text-[9px] font-bold text-teal-400 uppercase tracking-widest">
            COGNITIVE CORRELATION: TRAVEL SNAPSHOT
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          <div className="p-3 bg-slate-950/60 rounded-2xl border border-white/5 text-left">
            <span className="text-[7.5px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">📅 BEST MONTHS</span>
            <span className="text-[11px] font-bold text-white block">{snapshot.bestMonths}</span>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-2xl border border-white/5 text-left">
            <span className="text-[7.5px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">💰 AVG BUDGET</span>
            <span className="text-[11px] font-bold text-white block">{snapshot.avgBudget}</span>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-2xl border border-white/5 text-left">
            <span className="text-[7.5px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">⏳ TRIP DURATION</span>
            <span className="text-[11px] font-bold text-white block">{snapshot.duration}</span>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-2xl border border-white/5 text-left">
            <span className="text-[7.5px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">👤 TRAVELER TYPE</span>
            <span className="text-[11px] font-bold text-white block">{snapshot.travelerType}</span>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-2xl border border-white/5 text-left">
            <span className="text-[7.5px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">🛡️ SAFETY RATING</span>
            <span className="text-[11px] font-bold text-white block">{snapshot.safetyRating}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 mt-3.5 pt-3.5 border-t border-white/5">
          <div className="text-left text-[10px]">
            <span className="text-slate-400 font-mono">🗣️ LOCAL LANGUAGES:</span> <span className="text-white font-bold">{snapshot.language}</span>
          </div>
          <div className="text-left text-[10px]">
            <span className="text-slate-400 font-mono">🪙 CURRENCY USED:</span> <span className="text-white font-bold">{snapshot.currency}</span>
          </div>
          <div className="text-left text-[10px]">
            <span className="text-slate-400 font-mono">⛅ CLIMATE TYPE:</span> <span className="text-white font-bold">{snapshot.climate}</span>
          </div>
          <div className="text-left text-[10px]">
            <span className="text-slate-400 font-mono">🛞 ACCESSIBILITY:</span> <span className="text-white font-bold">{snapshot.accessibility}</span>
          </div>
        </div>

        <div className="mt-3.5 p-3 bg-teal-500/5 rounded-2xl border border-teal-500/10 text-left text-[10px]">
          <span className="text-teal-400 font-mono font-bold uppercase tracking-wider block mb-0.5">⚡ TOP HIGHLIGHTS DOSSIER</span>
          <span className="text-slate-300 font-medium">{snapshot.highlights}</span>
        </div>
      </div>

      {/* Hero Parallax Area */}
      <div className="relative h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-teal-500/10">
        <img
          src={displayImage}
          alt={cityData.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[12s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        {/* Floating Details Overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse relative block">
                <span className="absolute inset-0 rounded-full bg-teal-400/50 scale-200 animate-ping" />
              </span>
              <span className="text-[10px] text-teal-400 font-mono tracking-widest font-bold uppercase">{countryData.continent} Sector</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase">
              {cityData.name}
            </h1>
            <p className="text-sm font-mono text-slate-300 font-bold uppercase mt-1 tracking-wider flex items-center gap-1">
              <MapPin size={13} className="text-teal-400" /> {countryData.name}
            </p>
          </div>

          <div className="flex gap-3 relative z-10">
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
              className="px-5 py-3.5 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-2xl text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-teal-500/10"
            >
              <Save size={15} /> SYNC TO DASHBOARD
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          <style>{`
            @keyframes audio-bar-grow {
              0%, 100% { height: 3px; }
              50% { height: 12px; }
            }
            .animate-audio-bar-1 { animation: audio-bar-grow 0.8s ease infinite; }
            .animate-audio-bar-2 { animation: audio-bar-grow 0.5s ease infinite 0.2s; }
            .animate-audio-bar-3 { animation: audio-bar-grow 0.9s ease infinite 0.4s; }
          `}</style>

          {/* Virtual 360 Preview with Holographic Device-Tilt Portal */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 relative overflow-hidden text-left animate-in fade-in duration-300">
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-450 dark:text-teal-400/40 font-bold select-none">
              <span>PREVIEW: VIRTUAL_360_HOTSPOTS</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] font-mono text-teal-655 dark:text-teal-400 font-bold tracking-widest uppercase">SECTION 00 // ATMOSPHERIC RADAR</span>
                <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide flex items-center gap-1.5">
                  <Globe size={18} className="text-teal-400 animate-spin duration-10000" /> Virtual 360° Preview
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsFullscreen360(true);
                  requestGyroPermission();
                }}
                className="px-3.5 py-1.5 rounded-xl border border-teal-500/25 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 text-[10px] font-mono font-bold uppercase transition-all flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 size={11} /> Holographic Portal
              </button>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/5 bg-slate-950 group">
              <img 
                src={displayImage} 
                alt="360 View" 
                className="w-full h-full object-cover opacity-80 filter brightness-90 transform scale-110 transition-transform duration-1000 origin-center"
                style={{ transform: `scale(1.25) translate(${previewAngle}px, 0px)` }}
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full border border-teal-500/35 flex items-center justify-center opacity-75 relative">
                  <div className="absolute w-full h-[1px] bg-teal-500/20" />
                  <div className="absolute h-full w-[1px] bg-teal-500/20" />
                  <span className="text-[8px] font-mono text-teal-400 tracking-wider absolute bottom-1.5">RETICLE LOCK</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-slate-950/75 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                  className="w-8 h-8 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
                >
                  <span className="font-bold text-xs">{isAudioPlaying ? '⏸' : '▶'}</span>
                </button>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-bold text-slate-400 uppercase font-mono tracking-wider">AMBIENT DRONE</span>
                  <span className="text-[10px] font-bold text-teal-400">{isAudioPlaying ? 'SYNTH ACTIVE' : 'MUTED'}</span>
                </div>
                {isAudioPlaying && (
                  <div className="flex items-end gap-0.5 h-3 ml-2">
                    <span className="w-[2px] bg-teal-400 rounded-full animate-audio-bar-1" />
                    <span className="w-[2px] bg-teal-400 rounded-full animate-audio-bar-2" />
                    <span className="w-[2px] bg-teal-400 rounded-full animate-audio-bar-3" />
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 right-4 flex gap-1.5 bg-slate-950/75 border border-white/10 p-1 rounded-xl backdrop-blur-md">
                <button 
                  type="button"
                  onClick={() => setPreviewAngle(prev => Math.max(-50, prev - 15))}
                  className="px-2.5 py-1 text-xs font-mono font-bold text-slate-300 hover:text-white cursor-pointer"
                >
                  ◀ PAN L
                </button>
                <button 
                  type="button"
                  onClick={() => setPreviewAngle(prev => Math.min(50, prev + 15))}
                  className="px-2.5 py-1 text-xs font-mono font-bold text-slate-300 hover:text-white cursor-pointer"
                >
                  PAN R ▶
                </button>
              </div>
            </div>
          </div>

          {/* Fullscreen Holographic 360° Portal Overlay */}
          <AnimatePresence>
            {isFullscreen360 && (
              <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col justify-between overflow-hidden select-none">
                {/* Background Panoramic Image */}
                <div 
                  className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDragMove}
                  onTouchEnd={handleDragEnd}
                >
                  <img
                    src={displayImage}
                    alt="Holographic View"
                    className="absolute w-[150vw] h-[150vh] max-w-none object-cover opacity-90 transition-transform duration-200 pointer-events-none"
                    style={{
                      left: '-25vw',
                      top: '-25vh',
                      transform: `translate(${dragOffset.x + tiltOffset.x}px, ${dragOffset.y + tiltOffset.y}px) scale(1.15)`
                    }}
                  />
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/10 to-slate-950/80 pointer-events-none" />
                </div>

                {/* Laser scan lines & grid overlays */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_90%)] pointer-events-none" />
                
                {/* Neon circular scopes */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full border border-teal-500/20 flex items-center justify-center relative animate-pulse duration-[8s]">
                    <div className="absolute inset-0 rounded-full border border-sky-400/10 scale-110" />
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal-500/10 animate-spin duration-[60s]" />
                    <div className="w-10 h-10 border border-teal-400/40 relative">
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-teal-400/40" />
                      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-teal-400/40" />
                    </div>
                  </div>
                </div>

                {/* Top UI Panel */}
                <div className="relative z-10 w-full p-6 bg-gradient-to-b from-slate-950/90 to-transparent flex justify-between items-start backdrop-blur-sm">
                  <div className="flex flex-col gap-1.5 text-left">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                      <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-black">HOLOGRAPHIC PORTAL LNK_360</span>
                    </div>
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-wider">{cityData.name} Sector</h2>
                    <span className="text-[10px] font-mono text-slate-400">TELEMETRY: X={Math.round(dragOffset.x + tiltOffset.x)} Y={Math.round(dragOffset.y + tiltOffset.y)}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsFullscreen360(false);
                      setDragOffset({ x: 0, y: 0 });
                      setTiltOffset({ x: 0, y: 0 });
                    }}
                    className="p-3 bg-slate-900/60 border border-white/10 hover:border-rose-500/50 hover:bg-slate-900 rounded-2xl text-rose-400 hover:text-rose-300 transition-all cursor-pointer flex items-center justify-center shadow-lg"
                  >
                    <Minimize2 size={16} />
                  </button>
                </div>

                {/* Bottom UI Dashboard */}
                <div className="relative z-10 w-full p-6 bg-gradient-to-t from-slate-950/95 to-transparent flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur-sm">
                  {/* Environmental Telemetry */}
                  <div className="flex gap-6 text-[10px] font-mono text-slate-350">
                    <div className="flex flex-col items-start">
                      <span className="text-slate-500 uppercase">GYRO STACK</span>
                      <span className="font-bold text-teal-400">{gyroPermission === 'granted' ? 'CONNECTED' : 'DISCONNECTED'}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-slate-500 uppercase">ELEVATION</span>
                      <span className="font-bold text-teal-400">3,250m Sector</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-slate-500 uppercase">ATMOSPHERE</span>
                      <span className="font-bold text-teal-400">{isAudioPlaying ? 'SYNTH ACTIVE' : 'MUTED'}</span>
                    </div>
                  </div>

                  {/* Gyro Sync CTA & Audio Toggle */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                      className={`px-4 py-2.5 rounded-xl border font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                        isAudioPlaying
                          ? 'bg-teal-500/10 border-teal-500 text-teal-400'
                          : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white'
                      }`}
                    >
                      {isAudioPlaying ? <Volume2 size={13} /> : <VolumeX size={13} />}
                      {isAudioPlaying ? 'Mute Drone' : 'Drone Audio'}
                    </button>

                    {gyroPermission !== 'granted' && (
                      <button
                        type="button"
                        onClick={requestGyroPermission}
                        className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-400 hover:to-sky-400 text-slate-950 rounded-xl text-xs font-mono font-bold shadow-lg shadow-teal-500/20 cursor-pointer uppercase"
                      >
                        Request Gyro Sync
                      </button>
                    )}
                    
                    <span className="hidden sm:inline text-[9px] font-mono text-slate-500 uppercase border border-slate-800/40 px-3 py-2.5 rounded-xl bg-slate-900/20">
                      🖱️ Drag mouse or Tilt Phone to Pan
                    </span>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>

          {/* 🎙️ SECTION 01 // NEURAL LOCAL GUIDES WITH VOICE SYNTHESIS */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-5 text-left animate-in fade-in duration-300">
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-450 dark:text-teal-400/40 font-bold select-none">
              <span>NEURAL: COMM_GUIDES</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-indigo-555 dark:text-indigo-400 font-bold tracking-widest uppercase">🎙️ SECTION 01 // NEURAL CORRIDORS</span>
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
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-teal-500/10 bg-white dark:bg-slate-900/30 hover:border-indigo-400/50 hover:bg-indigo-500/5 text-slate-650 dark:text-slate-350 text-[10px] font-semibold text-left transition-all cursor-pointer flex items-center gap-1"
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
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-indigo-400 transition-all text-slate-800 dark:text-slate-250"
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
                className="px-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-1 cursor-pointer transition-all shadow-md shadow-indigo-500/15"
              >
                <Send size={12} /> Transmit
              </button>
            </div>
          </div>

          {/* Historical Time Travel Mode */}
          {cityData.history && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-5 text-left">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-[9px] font-mono text-indigo-555 dark:text-indigo-400 font-bold tracking-widest uppercase">CHRONOLOGICAL ENGINE</span>
                  <span className="px-2 py-0.5 text-[8px] font-bold font-mono uppercase bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full flex items-center gap-1">
                    ✓ Verified Historical Information
                  </span>
                </div>
                <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide">Historical Time Travel</h3>
              </div>

              <div className="relative border-l border-slate-200 dark:border-teal-500/10 pl-6 ml-3 flex flex-col gap-6">
                {cityData.history.map((hist, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    </div>
                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-xs font-mono font-black text-indigo-455 dark:text-indigo-400 uppercase tracking-widest">{hist.era}</span>
                      <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">{hist.event}</span>
                    </div>
                    <p className="text-xs text-slate-655 dark:text-slate-350 leading-relaxed font-semibold mt-1">
                      {hist.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Photo Spot Finder */}
          {cityData.photoSpots && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-355 flex items-center gap-1">
                <Cpu size={14} className="text-teal-400" /> AI Photo Spot Coordinator
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cityData.photoSpots.map((spot, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/20 border border-slate-150 dark:border-teal-500/5 flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[9px] font-black text-teal-400 uppercase tracking-wider bg-teal-500/10 px-2 py-0.5 rounded-md">
                        {spot.type}
                      </span>
                      <span className="text-[8px] font-mono text-slate-500 font-bold">LATENCY SYNC</span>
                    </div>
                    <h5 className="font-display font-bold text-xs text-slate-900 dark:text-white">{spot.name}</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">{spot.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Digital Nomad Hub */}
          {cityData.nomadHub && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-355">
                Digital Nomad Coordinates
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[10px]">
                <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5 flex flex-col gap-0.5">
                  <span className="text-slate-400 text-[8px] font-bold uppercase">WiFi Speed</span>
                  <span className="text-xs font-black text-teal-400">{cityData.nomadHub.internetSpeed}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5 flex flex-col gap-0.5">
                  <span className="text-slate-400 text-[8px] font-bold uppercase">Cowork Space</span>
                  <span className="text-xs font-black text-slate-800 dark:text-white truncate" title={cityData.nomadHub.coworkingSpace}>{cityData.nomadHub.coworkingSpace.split(',')[0]}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-teal-500/5 flex flex-col gap-0.5">
                  <span className="text-slate-400 text-[8px] font-bold uppercase">Cost of Living</span>
                  <span className="text-xs font-black text-sky-400 truncate">{cityData.nomadHub.costOfLiving.split(' ')[0]}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-teal-500/5 flex flex-col gap-0.5">
                  <span className="text-slate-400 text-[8px] font-bold uppercase">Monthly Rent</span>
                  <span className="text-xs font-black text-indigo-400">{cityData.nomadHub.monthlyRent.split(' ')[0]}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-500/5 border border-teal-500/20 text-xs leading-relaxed text-slate-655 dark:text-slate-300 font-mono">
                <span className="font-bold text-teal-450 uppercase text-[9px] block mb-0.5 font-mono">NOMAD VISA POLICY</span>
                {cityData.nomadHub.visaInfo}
              </div>

              {/* Stay Recommendations */}
              {cityData.stays && (
                <div className="flex flex-col gap-2 border-t border-white/5 pt-4 mt-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Smart Stay Matches</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cityData.stays.map((stay, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5 flex flex-col gap-1 text-left">
                        <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-wider">{stay.type}</span>
                        <h5 className="font-display font-bold text-xs text-slate-900 dark:text-white truncate">{stay.name}</h5>
                        <p className="text-[9px] text-slate-500 leading-snug">{stay.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Travel Risk Intelligence */}
          {cityData.riskAlerts && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-355 flex items-center gap-1.5">
                <ShieldAlert size={14} className="text-rose-500 animate-pulse" /> Travel Risk Intelligence
              </h4>
              <div className="flex flex-col gap-3">
                {cityData.riskAlerts.map((alert, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs flex justify-between gap-3 items-start">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase ${
                      alert.level === 'High' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {alert.level}
                    </span>
                    <div className="flex-1">
                      <span className="font-bold text-[9px] uppercase tracking-wide text-slate-405 block mb-0.5">{alert.category} Warning</span>
                      <p className="text-slate-655 dark:text-slate-350 font-semibold">{alert.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Dossier Information Overview */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl relative overflow-hidden flex flex-col gap-6">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <span className="text-[9px] font-mono text-teal-655 dark:text-teal-400 font-bold tracking-widest uppercase">SECTION 01 // OVERVIEW SUMMARY</span>
                <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide my-0">Geographical Dossier</h3>
              </div>
              <span className="px-2 py-0.5 text-[8.5px] font-bold font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded flex items-center gap-1 shrink-0">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Live Sourced API Data
              </span>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-355 leading-relaxed font-semibold">
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
                <span className="text-slate-900 dark:text-white">{countryData.currency}</span>
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
                <span className="text-teal-555 dark:text-teal-400 font-black">{countryData.latlng[0].toFixed(2)}°N, {countryData.latlng[1].toFixed(2)}°E</span>
              </div>
            </div>
          </div>

          {/* Sacred Site Etiquette & Guidelines Widget */}
          {cityData && cityData.name && (['varanasi', 'dwarka', 'puri', 'rameshwaram', 'badrinath', 'ayodhya', 'rishikesh', 'haridwar', 'somnath', 'kedarnath', 'hampi', 'ellora', 'vaishnodevi', 'tirupati', 'meenakshi', 'goldentemple', 'bodhgaya', 'mahakaleshwar', 'shirdi', 'mecca', 'medina', 'westernwall', 'mountkailash', 'patnasahib', 'anandpursahib', 'sarnath', 'bomjesus', 'velankanni', 'palitana', 'ranakpur'].some(
            shrine => cityData.name.toLowerCase().includes(shrine) || (cityData.id && cityData.id.toLowerCase().includes(shrine))
          ) || 
          cityData.tags?.some(t => ['spiritual', 'temple', 'shrine', 'pilgrimage', 'holy', 'sacred', 'religion'].includes(t.toLowerCase())) ||
          (cityData.description && cityData.description.toLowerCase().match(/(temple|holy|sacred|shrine|pilgrimage|mosque|church|cathedral|synagogue|gurudwara)/i))) && (
            <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/25 text-left flex flex-col gap-4">
              <div>
                <span className="text-[9px] font-mono text-amber-500 font-bold tracking-widest uppercase">🕌 SACRED PROTOCOLS ACTIVATED</span>
                <h3 className="font-display font-black text-lg text-slate-900 dark:text-amber-400 mt-1 uppercase my-0">Spiritual Site Guidelines</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-950/45 border border-slate-200 dark:border-white/5 rounded-xl">
                  <span className="text-[8.5px] text-slate-500 font-bold uppercase block mb-0.5">👗 DRESS CODE PROTOCOL</span>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">Traditional conservative attire recommended. Keep shoulders and knees fully covered. Footwear prohibited past temple boundary.</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/45 border border-slate-200 dark:border-white/5 rounded-xl">
                  <span className="text-[8.5px] text-slate-500 font-bold uppercase block mb-0.5">🕒 OPENING / DARSHAN TIMINGS</span>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">05:00 AM – 12:00 PM and 04:00 PM – 09:30 PM daily. Queue waiting times fluctuate from 45 mins to 3 hours.</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/45 border border-slate-200 dark:border-white/5 rounded-xl">
                  <span className="text-[8.5px] text-slate-500 font-bold uppercase block mb-0.5">📸 PHOTOGRAPHY RULES</span>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">Strictly prohibited inside the inner sanctum. Cameras and mobile phones must be deposited in secure lockers near gates.</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/45 border border-slate-200 dark:border-white/5 rounded-xl">
                  <span className="text-[8.5px] text-slate-500 font-bold uppercase block mb-0.5">♿ ACCESSIBILITY</span>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">Wheelchair assistance and rampways available at the main gate. Golf cart shuttles operational for senior citizens.</p>
                </div>
              </div>
            </div>
          )}

          {/* Travel Advisories (Visa, Safety & Climate) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Visa & Safety Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-350 flex items-center gap-1.5">
                <ShieldAlert size={14} className="text-rose-500" /> Voyager Advisories
              </h4>
              <div className="flex flex-col gap-3.5 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-teal-500/5 rounded-xl">
                  <span className="font-bold text-teal-655 dark:text-teal-450 font-mono text-[9px] uppercase tracking-wider block mb-0.5">VISA REQUIREMENT</span>
                  <p className="text-slate-600 dark:text-slate-350 font-semibold">{countryData.visa}</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-teal-500/5 rounded-xl">
                  <span className="font-bold text-rose-555 dark:text-rose-455 font-mono text-[9px] uppercase tracking-wider block mb-0.5">SAFETY TELEMETRY</span>
                  <p className="text-slate-600 dark:text-slate-355 font-semibold">{countryData.safety}</p>
                </div>
              </div>
            </div>

            {/* Weather & Best Season Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-355 flex items-center gap-1.5">
                <Thermometer size={14} className="text-sky-500" /> Climate Analysis
              </h4>
              <div className="flex flex-col gap-3.5 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-teal-500/5 rounded-xl">
                  <span className="font-bold text-teal-655 dark:text-teal-450 font-mono text-[9px] uppercase tracking-wider block mb-0.5">METEOROLOGY OVERVIEW</span>
                  <p className="text-slate-600 dark:text-slate-355 font-semibold">{countryData.weatherOverview}</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-teal-500/5 rounded-xl">
                  <span className="font-bold text-sky-600 dark:text-sky-450 font-mono text-[9px] uppercase tracking-wider block mb-0.5">RECOMMENDED VOYAGE PERIOD</span>
                  <p className="text-slate-600 dark:text-slate-355 font-semibold">{countryData.bestTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Attractions & Cuisine */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Top Attractions list */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-350">Top Attractions</h4>
              <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-600 dark:text-slate-300">
                {cityData.attractions.map((attr, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span className="font-bold">{attr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Culinary Delicacies */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-355">Local Cuisine</h4>
              <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-600 dark:text-slate-300">
                {cityData.cuisine.map((food, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-teal-500/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <span className="font-bold">{food}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Open-Meteo Weather Widget */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-5">
            <div>
              <span className="text-[9px] font-mono text-teal-655 dark:text-teal-400 font-bold tracking-widest uppercase">SECTION 02 // WEATHER METRICS</span>
              <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide">Real-time Weather Radar</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 mt-2">
              {weatherData.map((w, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-teal-500/5 flex flex-col items-center justify-center text-center gap-1.5 shadow-sm"
                >
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{w.day}</span>
                  <span className="text-2xl" role="img" aria-label={w.summary}>{w.icon}</span>
                  <span className="text-[10px] text-slate-455 uppercase font-bold tracking-wider leading-none mt-1">{w.summary}</span>
                  <span className="text-xs font-mono font-black text-slate-900 dark:text-white mt-0.5">
                    {w.maxTemp}° / {w.minTemp}°
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Core Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-6">
            <div>
              <span className="text-[9px] font-mono text-teal-655 dark:text-teal-400 font-bold tracking-widest uppercase">SECTION 03 // VOYAGER FEEDBACK LOGS</span>
              <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1 uppercase tracking-wide">Voyager Reviews</h3>
            </div>

            {/* Input review form */}
            <form onSubmit={handleSubmitReview} className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200 dark:border-teal-500/5 flex flex-col gap-4">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">LOG NEW FEEDBACK MATRIX</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-mono font-bold text-slate-450 uppercase text-[9px]">YOUR NAME</label>
                  <input
                    type="text"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 font-semibold focus:outline-none focus:border-teal-500 text-slate-800 dark:text-white text-xs"
                    placeholder="Enter name..."
                  />
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-mono font-bold text-slate-450 uppercase text-[9px]">RATING TIER</label>
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
                <label className="font-mono font-bold text-slate-450 uppercase text-[9px]">COMMENT STATEMENT</label>
                <textarea
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 font-semibold focus:outline-none focus:border-teal-500 text-slate-800 dark:text-white text-xs h-16 resize-none"
                  placeholder="Share details of your travel sectors..."
                />
              </div>

              <button
                type="submit"
                className="py-2.5 bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 hover:bg-teal-650 dark:hover:bg-teal-400 font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
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
                    <span className="text-[10px] text-teal-605 dark:text-teal-400 font-mono font-bold">{'★'.repeat(rev.rating)}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic">"{rev.comment}"</p>
                  <span className="text-[8px] text-slate-400 font-mono font-bold uppercase self-end">{rev.date}</span>
                </div>
              ))}
            </div>
            {/* Did You Know? Facts Card */}
            <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-505/20 text-left flex flex-col gap-4">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-bold">
                💡 Did You Know?
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 font-mono text-xs text-slate-700 dark:text-slate-200">
                {getCityFacts(cityData.name).map((fact, idx) => (
                  <li key={idx} className="leading-relaxed font-semibold">{fact}</li>
                ))}
              </ul>
            </div>

            {/* Destination Comparison Matrix Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
              <div>
                <span className="text-[9px] font-mono text-indigo-400 font-bold tracking-widest uppercase">COMPARISON MATRIX</span>
                <h3 className="font-display font-black text-lg text-slate-900 dark:text-white mt-1 uppercase">Sector Comparison Grid</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-[10px] text-slate-655 dark:text-slate-300 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-400 font-bold">
                      <th className="py-2.5">METRIC INDICATOR</th>
                      <th className="py-2.5 text-teal-650 dark:text-teal-400">{cityData.name.toUpperCase()} (CURRENT)</th>
                      <th className="py-2.5 text-slate-500">ALT REGIONAL SECTOR A</th>
                      <th className="py-2.5 text-slate-500">ALT REGIONAL SECTOR B</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-semibold text-slate-700 dark:text-slate-200">
                    <tr>
                      <td className="py-3 text-slate-400">Budget Tier Range</td>
                      <td className="py-3 text-teal-605 dark:text-teal-400 font-bold">{travelerTier}</td>
                      <td className="py-3">Backpacker Budget</td>
                      <td className="py-3">Luxury Elite Elite</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-400">Pace / Action Density</td>
                      <td className="py-3 text-indigo-500 dark:text-indigo-400 font-bold">{pace}</td>
                      <td className="py-3">Relaxed / Slow</td>
                      <td className="py-3">Balanced / High</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-400">Family Friendliness</td>
                      <td className="py-3 text-emerald-600 dark:text-emerald-400">⭐⭐⭐⭐★</td>
                      <td className="py-3">⭐⭐⭐⭐⭐</td>
                      <td className="py-3">⭐⭐⭐★★</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-400">Adventure Exertion</td>
                      <td className="py-3 text-rose-500 dark:text-rose-400">High Exertion</td>
                      <td className="py-3">Medium Exertion</td>
                      <td className="py-3">Extreme Level</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-400">Travel Safety Index</td>
                      <td className="py-3 text-teal-500 dark:text-teal-400">95% Confidence</td>
                      <td className="py-3">90% Confidence</td>
                      <td className="py-3">98% Confidence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (1 Column): Estimated Credits Calculator & Itinerary Generator */}
        <div className="lg:col-span-1 flex flex-col gap-6 sticky top-6 self-start">
          
          {/* Voyager Hub Booking Sticky Panel */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-teal-500/10 shadow-xl flex flex-col gap-4 relative overflow-hidden text-left card-premium-hover">
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-400 font-bold select-none">
              <span>BOOKING_CORRIDOR</span>
            </div>
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-teal-350 flex items-center gap-1.5 font-bold">
              <MapPin size={13} className="text-teal-400" /> Voyager Hub Booking
            </h4>
            
            <div className="flex flex-col gap-3.5 text-xs font-semibold text-slate-300 font-mono">
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/40 border border-white/5">
                <span className="text-[9px] font-bold text-slate-400">ESTIMATED BUDGET</span>
                <span className="text-sm font-black text-teal-400">₹{calculatedCosts.total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/40 border border-white/5">
                <span className="text-[9px] font-bold text-slate-400">LOCAL CLIMATE</span>
                <span className="text-sm font-black text-sky-400">24°C // SUNNY</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/40 border border-white/5">
                <span className="text-[9px] font-bold text-slate-400">RECOMMENDED LODGING</span>
                <span className="text-[10px] text-slate-205 uppercase font-black">Taj Villa Res.</span>
              </div>
            </div>

            <button
              onClick={() => {
                window.location.href = `/planner?dest=${cityData.name}`;
              }}
              className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-2xl text-xs font-mono font-black uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-1 cursor-pointer"
            >
              Plan Your Journey →
            </button>
          </div>
          {/* Credits budget Matrix Estimator */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-teal-450 dark:text-teal-400/40 font-bold select-none">
              <span>CALC: DEBIT_INDEX</span>
            </div>
            
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-350">
              Estimated Credits Matrix
            </h4>
            
            {/* Days Slider */}
            <div className="flex flex-col gap-2 border-b border-slate-200 dark:border-teal-500/10 pb-4">
              <div className="flex justify-between items-baseline font-mono text-xs font-bold uppercase text-slate-450">
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
                        ? 'bg-teal-500/10 border-teal-500 text-teal-605 dark:text-teal-400'
                        : 'border-slate-200 dark:border-teal-500/10 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-850/50'
                    }`}
                  >
                    {t.replace('-range', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed cost rows */}
            <div className="flex flex-col gap-3 font-mono text-xs text-slate-500">
              <div className="flex justify-between items-center">
                <span>✈️ TRANSIT CORRIDORS:</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">₹{calculatedCosts.flights.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🏨 LODGING ESTIMATE:</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">₹{calculatedCosts.lodging.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🍔 MEALS INDEX:</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">₹{calculatedCosts.meals.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🎟️ ACTIVITIES MATRIX:</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">₹{calculatedCosts.activities.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🚕 SHUTTLES INDEX:</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">₹{calculatedCosts.transport.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between items-baseline border-t border-slate-200 dark:border-teal-500/10 pt-3 text-slate-800 dark:text-white mt-1">
                <span className="text-[10px] font-bold uppercase">NET TOTAL ESTIMATE:</span>
                <span className="text-xl font-black text-teal-655 dark:text-teal-400">₹{calculatedCosts.total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* AI Itinerary Core compiler widget */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-teal-500/10 shadow-xl flex flex-col gap-4 text-left">
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-800 dark:text-teal-350 flex items-center gap-1">
              <Sparkles size={14} className="text-teal-400 animate-pulse" /> AI Daily Scheduler
            </h4>

            {/* Travel Style Selector */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest text-left">Travel Style Preference</span>
              <select
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 font-mono font-bold text-xs focus:outline-none focus:border-teal-500 text-slate-700 dark:text-teal-300"
              >
                {['Solo', 'Couple', 'Family', 'Group', 'Senior Citizen', 'Backpacker', 'Luxury', 'Adventure', 'Road Trip'].map((style) => (
                  <option key={style} value={style}>{style.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* Daily Sightseeing Pace Selector */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest text-left">Daily Sightseeing Pace</span>
              <select
                value={pace}
                onChange={(e) => setPace(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/20 font-mono font-bold text-xs focus:outline-none focus:border-teal-500 text-slate-700 dark:text-teal-300"
              >
                {['Relaxed', 'Balanced', 'Fast-Paced'].map((p) => (
                  <option key={p} value={p}>{p.toUpperCase()}</option>
                ))}
              </select>
            </div>
            
            {/* Tag Selection */}
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Select Interests</span>
              <div className="flex flex-wrap gap-1.5">
                {interestOptions.slice(0, 6).map((tag) => {
                  const isSelected = selectedInterests.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => handleInterestToggle(tag)}
                      className={`px-2 py-1 text-[9px] font-mono font-bold rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-500 border-teal-500 text-slate-950 shadow-sm'
                          : 'border-slate-200 dark:border-teal-500/10 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-850/50'
                      }`}
                    >
                      {tag.toUpperCase()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compiled Days Timeline preview */}
            <div className="flex flex-col gap-5 border-t border-slate-200 dark:border-teal-500/10 pt-4 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin">
              {generatedItinerary.map((d) => (
                <div key={d.day} className="flex flex-col gap-2 relative text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 font-bold font-mono text-[10px] flex items-center justify-center shrink-0 z-10">
                      {d.day}
                    </div>
                    <h5 className="font-bold text-xs text-slate-800 dark:text-white uppercase font-display">{d.title}</h5>
                  </div>
                  
                  <div className="flex flex-col gap-2.5 border-l border-slate-200 dark:border-teal-500/10 pl-3.5 ml-2.5">
                    {d.timeline?.map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5 text-[11px]">
                        <div className="flex items-center gap-1.5 font-bold">
                          <span>{item.icon}</span>
                          <span className="text-slate-800 dark:text-white">{item.activity}</span>
                          <span className="font-mono text-[9px] text-teal-400 font-medium bg-teal-500/5 px-1.5 py-0.2 rounded border border-teal-500/10 ml-auto shrink-0">{item.time}</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 pl-5 font-semibold leading-relaxed">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveItinerary}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md shadow-teal-500/10 flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
            >
              <Save size={13} /> SAVE COMPILED TARGET
            </button>
          </div>
        </div>
      </div>

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
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-650 focus:outline-none focus:border-teal-400 transition-all font-mono"
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
                    className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-xl text-xs font-mono font-bold shadow transition-all cursor-pointer"
                  >
                    SAVE PHOTO
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
