import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Map, 
  MapPin, 
  Calendar, 
  Award, 
  Search, 
  Compass, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Camera, 
  Download, 
  Printer, 
  ArrowRight, 
  Clock, 
  AlertTriangle, 
  UtensilsCrossed, 
  Info, 
  Volume2, 
  ChevronRight, 
  RefreshCw, 
  Plus, 
  Play, 
  Pause, 
  ShieldAlert,
  Heart,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { ReligiousSkeleton, ItineraryBuilderSkeleton } from '../components/SkeletonLoader';

// Coordinate positions for spiritual nodes on the interactive SVG canvas
const CIRCUIT_NODES = [
  { id: 'kedarnath', name: 'Kedarnath', x: 380, y: 130, faith: 'Hinduism', state: 'Uttarakhand', desc: 'Himalayan Shrine' },
  { id: 'amritsar', name: 'Golden Temple', x: 310, y: 150, faith: 'Sikhism', state: 'Punjab', desc: 'Harmandir Sahib' },
  { id: 'ayodhya', name: 'Ayodhya', x: 440, y: 210, faith: 'Hinduism', state: 'Uttar Pradesh', desc: 'Ram Janmabhoomi' },
  { id: 'varanasi', name: 'Varanasi', x: 470, y: 240, faith: 'Hinduism', state: 'Uttar Pradesh', desc: 'Kashi Vishwanath Temple' },
  { id: 'bodhgaya', name: 'Bodh Gaya', x: 520, y: 250, faith: 'Buddhism', state: 'Bihar', desc: 'Mahabodhi Temple' },
  { id: 'somnath', x: 190, y: 310, name: 'Somnath', faith: 'Hinduism', state: 'Gujarat', desc: 'First Jyotirlinga' },
  { id: 'rameshwaram', x: 380, y: 540, name: 'Rameshwaram', faith: 'Hinduism', state: 'Tamil Nadu', desc: 'Southern Dham' },
  { id: 'dwarka', x: 140, y: 290, name: 'Dwarka', faith: 'Hinduism', state: 'Gujarat', desc: 'Western Dham' },
  { id: 'puri', x: 550, y: 340, name: 'Puri', faith: 'Hinduism', state: 'Odisha', desc: 'Eastern Dham' },
  { id: 'badrinath', x: 395, y: 110, name: 'Badrinath', faith: 'Hinduism', state: 'Uttarakhand', desc: 'Northern Dham' },
  { id: 'ajmer', x: 290, y: 230, name: 'Ajmer Sharif', faith: 'Islam', state: 'Rajasthan', desc: 'Dargah of Khwaja Moinuddin' },
  { id: 'dilwara', x: 260, y: 260, name: 'Dilwara Temples', faith: 'Jainism', state: 'Rajasthan', desc: 'Jain Marble Marvel' },
  { id: 'vatican', x: 70, y: 90, name: 'Vatican City', faith: 'Christianity', state: 'Europe', desc: 'St. Peter\'s Basilica' }
];

const CIRCUITS = {
  chardham: {
    name: 'Char Dham Path',
    color: '#f97316',
    nodes: ['badrinath', 'dwarka', 'rameshwaram', 'puri'],
    desc: 'The four cardinal points of India established by Adi Shankaracharya.'
  },
  jyotirlinga: {
    name: '12 Jyotirlinga Circuit',
    color: '#e11d48',
    nodes: ['kedarnath', 'varanasi', 'somnath', 'rameshwaram'], // highlighted representatives
    desc: 'The sacred shrines dedicated to Lord Shiva across the Indian subcontinent.'
  },
  buddhist: {
    name: 'Buddhist Enlightenment Trail',
    color: '#eab308',
    nodes: ['bodhgaya', 'varanasi'], // bodhgaya & sarnath (represented by varanasi)
    desc: 'Trace the path of Siddhartha Gautama from enlightenment to sermon.'
  },
  sikh: {
    name: 'Sikh Sacred Corridor',
    color: '#14b8a6',
    nodes: ['amritsar', 'bodhgaya'], // Amritsar & Patna Sahib (represented by bodhgaya)
    desc: 'Holy Gurudwaras celebrating Guru Nanak and Guru Gobind Singh.'
  },
  multifaith: {
    name: 'Global Spiritual Quest',
    color: '#a855f7',
    nodes: ['vatican', 'amritsar', 'ajmer', 'dilwara', 'bodhgaya', 'ayodhya'],
    desc: 'Inter-faith exploration of sacred global architecture and spiritual practices.'
  }
};

const JYOTIRLINGAS = [
  { name: 'Somnath', location: 'Prabhas Patan, Gujarat', desc: 'The first of the twelve holy shrines, representing the light of Shiva.' },
  { name: 'Mallikarjuna', location: 'Srisailam, Andhra Pradesh', desc: 'Nestled on the Shri Shaila Mountain beside the Krishna River.' },
  { name: 'Mahakaleshwar', location: 'Ujjain, Madhya Pradesh', desc: 'The only south-facing (Dakshinmukhi) self-manifested lingam.' },
  { name: 'Omkareshwar', location: 'Mandhata Island, Madhya Pradesh', desc: 'Situated on an island in the Narmada River shaped like the sacred Om symbol.' },
  { name: 'Kedarnath', location: 'Garhwal Himalayas, Uttarakhand', desc: 'The highest Jyotirlinga, reachable via a scenic mountain trek.' },
  { name: 'Bhimashankar', location: 'Pune, Maharashtra', desc: 'Located in the Sahyadri hills, source of the Bhima River.' },
  { name: 'Kashi Vishwanath', location: 'Varanasi, Uttar Pradesh', desc: 'The spiritual heart of India on the banks of the sacred Ganges.' },
  { name: 'Trimbakeshwar', location: 'Nashik, Maharashtra', desc: 'Source of the Godavari River, featuring a unique three-headed lingam.' },
  { name: 'Vaidyanath', location: 'Deoghar, Jharkhand', desc: 'A major pilgrimage site where devotees carry holy Ganges water.' },
  { name: 'Nageshwar', location: 'Dwarka, Gujarat', desc: 'The shrine of the Lord of Snakes, near the coast of Saurashtra.' },
  { name: 'Rameshwaram', location: 'Pamban Island, Tamil Nadu', desc: 'Consecrated by Lord Rama himself on his return from Lanka.' },
  { name: 'Grishneshwar', location: 'Ellora, Maharashtra', desc: 'The last Jyotirlinga, located adjacent to the UNESCO Ellora Caves.' }
];

const FAITHS = [
  {
    name: 'Hinduism',
    focus: 'Darshan, Aarti, and Satvik Heritage',
    timings: 'Varies (Typically 4:00 AM - 10:00 PM)',
    food: 'Pure Vegetarian (Satvik) options, onion-garlic-free dishes available at major temples.',
    etiquette: 'Remove footwear outside. Wear modest clothes covering shoulders & knees. Avoid leather items inside temples.',
    architecture: 'Intricate Dravidian spires in South India, Nagara stone carvings in North India.',
    spotlight: 'Varanasi Ganga Aarti, Ram Mandir (Ayodhya), Kedarnath Himalayan temple.'
  },
  {
    name: 'Sikhism',
    focus: 'Sewa, Kirtan, and Universal Langar',
    timings: 'Open 24 Hours',
    food: 'Guru ka Langar: Free, nutritious vegetarian meals served to everyone regardless of religion, caste, or background.',
    etiquette: 'Cover your head with a scarf or bandana at all times. Wash feet at the entrance pool. Remove footwear.',
    architecture: 'Gilded gold domes, pristine white marble courtyard walls, reflecting pools.',
    spotlight: 'Golden Temple (Harmandir Sahib) in Amritsar.'
  },
  {
    name: 'Buddhism',
    focus: 'Vipassana, Meditation, and Mindfulness',
    timings: '5:00 AM - 9:00 PM',
    food: 'Nutritious vegetarian food. Cafes serve Japanese, Tibetan, Thai, and Indian vegetarian meals.',
    etiquette: 'Maintain absolute silence. Walk clockwise (circumambulate) around stupas and shrines.',
    architecture: 'Tiered pagoda structures, ornate torana gates, sacred Bodhi tree meditation zones.',
    spotlight: 'Mahabodhi Temple in Bodh Gaya.'
  },
  {
    name: 'Christianity',
    focus: 'Mass, Liturgical Art, and Devotion',
    timings: '7:00 AM - 7:00 PM',
    food: 'Standard local food. Fish options on Fridays. No strict dietary rules inside premises.',
    etiquette: 'Keep silence. Switch off mobile devices. Hats must be removed. Dress modestly.',
    architecture: 'Renaissance domes, stained-glass windows, vaults, and stone gargoyles.',
    spotlight: 'St. Peter\'s Basilica in Vatican City, Basilica of Bom Jesus in Goa.'
  },
  {
    name: 'Islam',
    focus: 'Dua, Sufi Qawwali, and Devotion',
    timings: '5:00 AM - 9:30 PM',
    food: 'Degh Langar: Huge cauldrons cook sweet saffron rice, porridge, and vegetarian stews for pilgrims.',
    etiquette: 'Cover your head. Wash hands and feet. Remove footwear. Sit respectfully in the prayer halls.',
    architecture: 'Arched entryways, dynamic jali screens, minarets, marble tombs.',
    spotlight: 'Ajmer Sharif Dargah, Hazratbal Shrine.'
  },
  {
    name: 'Jainism',
    focus: 'Ahimsa, Pratikraman, and Meditation',
    timings: '6:00 AM - 6:00 PM (Tourists limited to 12 PM - 5 PM)',
    food: 'Strict Jain food: Pure vegetarian, no root vegetables (potatoes, onions, garlic). Meals served only before sunset.',
    etiquette: 'Bathe before visiting. Wear clean white cotton clothing if performing rituals. Leather prohibited.',
    architecture: 'Finely carved white marble ceilings, concentric circular domes, multiple pillars.',
    spotlight: 'Dilwara Temples in Mount Abu, Palitana Temples.'
  }
];

const FESTIVALS = [
  { name: 'Kumbh Mela', location: 'Haridwar / Prayagraj', baseDays: 200, crowd: 'Extreme', safety: 'Follow designated bathing ghats, stay with groups, avoid pocket bottlenecks.', demand: '98% Sold Out' },
  { name: 'Ram Navami', location: 'Ayodhya', baseDays: 28, crowd: 'High', safety: 'Pre-book temple entry passes online. Wear hats for heat protection.', demand: '95% Sold Out' },
  { name: 'Gurpurab', location: 'Amritsar', baseDays: 145, crowd: 'Very High', safety: 'Prepare for queues at the entry bridge. Utilize free shoe storage counters.', demand: '92% Sold Out' },
  { name: 'Buddha Purnima (Vesak)', location: 'Bodh Gaya', baseDays: 88, crowd: 'Medium', safety: 'Arrive early morning for silent meditation spots. Bring a sitting mat.', demand: '78% High' },
  { name: 'Christmas Eve Mass', location: 'Vatican City', baseDays: 184, crowd: 'Very High', safety: 'Book free tickets 6 months in advance for the Basilica entry.', demand: '94% Sold Out' }
];

export const SpiritualUniverse = () => {
  const { saveItinerary, awardXp, showToast, user, customPhotos } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('directory'); // directory, map, jyotirlinga, planner, calendar, passport, walkthrough
  const [selectedCircuit, setSelectedCircuit] = useState('chardham');
  const [hoveredNode, setHoveredNode] = useState(null);

  // Spiritual Directory States
  const [dirSearch, setDirSearch] = useState('');
  const [dirFaith, setDirFaith] = useState('All');
  const [dirRegion, setDirRegion] = useState('All');

  // 12 Jyotirlinga Tracker State
  const [visitedJyotirlingas, setVisitedJyotirlingas] = useState(() => {
    const saved = localStorage.getItem('tv_jyotirlinga_progress');
    return saved ? JSON.parse(saved) : [];
  });
  const [showCertificate, setShowCertificate] = useState(false);

  // Pilgrim Passport Stamps State
  const [passportStamps, setPassportStamps] = useState(() => {
    const saved = localStorage.getItem('tv_spiritual_stamps');
    return saved ? JSON.parse(saved) : ['Varanasi-Kashi']; // Default stamp for startup
  });

  // AI Spiritual Planner States
  const [plannerFaith, setPlannerFaith] = useState('Hinduism');
  const [plannerDuration, setPlannerDuration] = useState(5);
  const [plannerBudget, setPlannerBudget] = useState('Comfortable');
  const [plannerTransport, setPlannerTransport] = useState('Rail Route');
  const [plannerPace, setPlannerPace] = useState('Balanced Devotion');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationSteps, setGenerationSteps] = useState('');
  const [compiledItinerary, setCompiledItinerary] = useState(null);

  // Faith sub-guides state
  const [selectedGuideFaith, setSelectedGuideFaith] = useState('Hinduism');

  // Virtual drone audio walkthrough states
  const [selectedWalkthrough, setSelectedWalkthrough] = useState('kedarnath');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioVolume, setAudioVolume] = useState(50);
  const [activeAvatar, setActiveAvatar] = useState('guru'); // guru, historian, foodie

  // Countdown timer simulation for festivals
  const [festivalCountdowns, setFestivalCountdowns] = useState([]);

  useEffect(() => {
    // Generate countdowns dynamically
    const updateCountdowns = () => {
      const formatted = FESTIVALS.map(f => {
        const timeRemaining = f.baseDays * 24 * 60 * 60 * 1000 - (Date.now() % (15 * 24 * 60 * 60 * 1000));
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        return {
          ...f,
          countdown: `${days}d ${hours}h ${minutes}m`
        };
      });
      setFestivalCountdowns(formatted);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000);
    return () => clearInterval(interval);
  }, []);

  // Save Jyotirlinga state
  useEffect(() => {
    localStorage.setItem('tv_jyotirlinga_progress', JSON.stringify(visitedJyotirlingas));
  }, [visitedJyotirlingas]);

  // Save Stamp state
  useEffect(() => {
    localStorage.setItem('tv_spiritual_stamps', JSON.stringify(passportStamps));
  }, [passportStamps]);

  // Toggle visited Jyotirlinga
  const handleToggleJyotirlinga = (name) => {
    if (visitedJyotirlingas.includes(name)) {
      setVisitedJyotirlingas(prev => prev.filter(j => j !== name));
      showToast(`Removed ${name} from visited log.`, 'info');
    } else {
      const updated = [...visitedJyotirlingas, name];
      setVisitedJyotirlingas(updated);
      awardXp(150, `Completed Pilgrimage to ${name} Jyotirlinga`);
      showToast(`Logged ${name}! Received 150 XP.`, 'success');

      // Add to stamp collection automatically
      const stampName = `${name}-Shrine`;
      if (!passportStamps.includes(stampName)) {
        setPassportStamps(prev => [...prev, stampName]);
      }
    }
  };

  const checkAllJyotirlingas = () => {
    const allNames = JYOTIRLINGAS.map(j => j.name);
    setVisitedJyotirlingas(allNames);
    allNames.forEach(name => {
      const stampName = `${name}-Shrine`;
      if (!passportStamps.includes(stampName)) {
        passportStamps.push(stampName);
      }
    });
    setPassportStamps([...passportStamps]);
    awardXp(1000, `Achieved 12 Jyotirlinga Maha-Pilgrimage Master Rank`);
    showToast(`Incredible! Unlocked all 12 shrines. 1000 XP awarded!`, 'success');
  };

  const clearAllJyotirlingas = () => {
    setVisitedJyotirlingas([]);
    showToast(`Cleared Jyotirlinga progress.`, 'info');
  };

  // Compile Spiritual Path (AI Form handler)
  const handleCompileSpiritualPath = () => {
    setIsGenerating(true);
    setCompiledItinerary(null);
    
    const steps = [
      'Initializing karmic pathfinder node...',
      'Aligning planetary routes and road traffic density...',
      'Querying spiritual databases for timings and queues...',
      'Analyzing dietary constraints (pure vegetarian/Jain)...',
      'Configuring rescue nodes & backup weather contingency tracks...',
      'Assembling holographic spiritual itinerary...'
    ];

    let currentStepIndex = 0;
    setGenerationSteps(steps[0]);

    const interval = setInterval(() => {
      currentStepIndex++;
      if (currentStepIndex < steps.length) {
        setGenerationSteps(steps[currentStepIndex]);
      } else {
        clearInterval(interval);
        
        // Formulate trip content based on chosen faith
        let destination = 'Ayodhya';
        let country = 'India';
        let img = 'https://images.unsplash.com/photo-1706682229566-a36ccfe29864?auto=format&fit=crop&q=80&w=800';
        let description = 'A customized journey to the spiritual birthplace of Ram Mandir.';
        let emergency = 'Ayodhya Civil Hospital Support and National Highway Rescue Team.';
        let transportAdvice = 'Excellent highway expressway access or train route terminating at Ayodhya Dham Junction.';
        let baseCosts = { flights: 6500, lodging: 8000, meals: 3500, activities: 2000, transport: 4000, total: 24000 };

        if (plannerFaith === 'Sikhism') {
          destination = 'Golden Temple';
          img = 'https://images.unsplash.com/photo-1588598126743-39d738ff9eb7?auto=format&fit=crop&q=80&w=800';
          description = 'Sikh Spiritual corridor focusing on Sewa and community dining.';
          emergency = 'Amritsar SGPC Volunteer Rescue desk & Fortis Hospital.';
          transportAdvice = 'Fast rail links via Shatabdi Express directly to Amritsar Junction.';
          baseCosts = { flights: 7000, lodging: 9000, meals: 2500, activities: 1500, transport: 3500, total: 23500 };
        } else if (plannerFaith === 'Buddhism') {
          destination = 'Bodh Gaya';
          img = 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&q=80&w=800';
          description = 'A mindfulness path tracing Gautama Buddha\'s steps under the Bodhi Tree.';
          emergency = 'Bodh Gaya Tourist police and Anugrah Narayan Medical College.';
          transportAdvice = 'Flights arriving at Gaya International Airport or Express trains via Gaya Junction.';
          baseCosts = { flights: 9500, lodging: 11000, meals: 4000, activities: 3000, transport: 4500, total: 32000 };
        } else if (plannerFaith === 'Christianity') {
          destination = 'Vatican City';
          country = 'Vatican City';
          img = 'https://images.unsplash.com/photo-1546955121-d104fb60b8e2?auto=format&fit=crop&q=80&w=800';
          description = 'A sacred exploration of Catholicism in Rome & St. Peter\'s Basilica.';
          emergency = 'Vatican Gendarmerie Corps and Rome Policlinico Umberto I.';
          transportAdvice = 'Take Rome Metro Line A directly to Ottaviano. Avoid driving in inner Rome ZTL zones.';
          baseCosts = { flights: 68000, lodging: 32000, meals: 15000, activities: 8000, transport: 7000, total: 130000 };
        } else if (plannerFaith === 'Islam') {
          destination = 'Ajmer Sharif';
          img = 'https://exploreworldtrip.com/wp-content/uploads/2026/03/4-Days-Goa-Travel-Itinerary-Beaches-Forts-and-Cafes-1024x683.png';
          description = 'Devotional Sufi spiritual path focusing on prayers and Qawwali services.';
          emergency = 'Ajmer District HQ Police & JLN Hospital Ajmer.';
          transportAdvice = 'Well connected via Jaipur International Airport (2 hours road trip).';
          baseCosts = { flights: 6000, lodging: 7000, meals: 3000, activities: 1000, transport: 3500, total: 20500 };
        } else if (plannerFaith === 'Jainism') {
          destination = 'Dilwara Temples';
          img = 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&q=80&w=800';
          description = 'A pure Jain pilgrimage seeking quiet reflection among marble architecture.';
          emergency = 'Mount Abu Civil Hospital & Rajasthan State Highway Police.';
          transportAdvice = 'Drive up via Abu Road rail station. High altitude curves, careful braking recommended.';
          baseCosts = { flights: 8000, lodging: 10500, meals: 3500, activities: 2000, transport: 5000, total: 29000 };
        } else if (plannerFaith === 'Kedarnath') {
          destination = 'Kedarnath';
          img = 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800';
          description = 'Himalayan high-altitude mountain pilgrimage dedicated to Lord Shiva.';
          emergency = 'Kedarnath Disaster Management Heli-Rescue team, Gauri Kund medical post.';
          transportAdvice = 'Drive to Gauri Kund, then trek 16km or pre-book official helicopter tickets.';
          baseCosts = { flights: 9000, lodging: 12000, meals: 4500, activities: 3500, transport: 7000, total: 36000 };
        }

        // Adjust costs based on budget tier selection
        const multiplier = plannerBudget === 'Luxury Ashram' ? 2.2 : plannerBudget === 'Pilgrim Economy' ? 0.5 : 1.0;
        const adjustedCosts = {
          flights: Math.round(baseCosts.flights * (plannerBudget === 'Pilgrim Economy' ? 0.7 : multiplier)),
          lodging: Math.round(baseCosts.lodging * multiplier),
          meals: Math.round(baseCosts.meals * multiplier),
          activities: Math.round(baseCosts.activities * multiplier),
          transport: Math.round(baseCosts.transport * multiplier),
          total: 0
        };
        adjustedCosts.total = adjustedCosts.flights + adjustedCosts.lodging + adjustedCosts.meals + adjustedCosts.activities + adjustedCosts.transport;

        // Generate day objects
        const generatedDays = Array.from({ length: plannerDuration }, (_, idx) => {
          const dayNum = idx + 1;
          let morningText = 'Morning prayer and entry queue preparation.';
          let afternoonText = 'Detailed exploration of the sacred central shrine complexes.';
          let eveningText = 'Attend night prayers, Aarti, or group chanting congregations.';
          
          if (plannerFaith === 'Hinduism') {
            if (dayNum === 1) {
              morningText = 'Arrival in Ayodhya. Cleanse hands at Sarayu River banks.';
              afternoonText = 'Explore Hanuman Garhi Fort temple base and seek blessings.';
              eveningText = 'Attend beautiful evening Sarayu River Aarti with floating clay lamps.';
            } else if (dayNum === 2) {
              morningText = 'Early morning queue entry at the grand Ram Janmabhoomi Mandir.';
              afternoonText = 'Marvel at the detailed sandstone temple structures and garden grounds.';
              eveningText = 'Listen to Vedic chants and classical devotional music at local ashrams.';
            } else {
              morningText = 'Spritual walk through Kanak Bhawan heritage galleries.';
              afternoonText = 'Sample traditional Satvik feast (kheer, pooris, and subji).';
              eveningText = 'Quiet meditation session and sunset photography by the river.';
            }
          } else if (plannerFaith === 'Sikhism') {
            if (dayNum === 1) {
              morningText = 'Arrival in Amritsar. Walk the clean Heritage Street leading to Golden Temple.';
              afternoonText = 'Enter Harmandir Sahib complex, take in the serene hymns playing live.';
              eveningText = 'Participate in Kar Sewa (cleaning work) or peel vegetables at Langar halls.';
            } else if (dayNum === 2) {
              morningText = 'Attend Amrit Vela early morning prayers starting at 2:15 AM.';
              afternoonText = 'Sit by the sacred Amrit Sarovar pool and observe holy readings.';
              eveningText = 'Eat hot Langar meals (dal, roti, and kheer) served with ultimate humility.';
            } else {
              morningText = 'Explore historic Baba Atal Rai Tower and Jallianwala Bagh memorials.';
              afternoonText = 'Shop for traditional Phulkari embroidery textiles in old city bazaars.';
              eveningText = 'Observe the night Sukhasan ceremony where Guru Granth Sahib is carried to rest.';
            }
          } else {
            // General multi-faith defaults
            if (dayNum === 1) {
              morningText = `Arrival in the sacred city of ${destination}. Check-in to accommodation.`;
              afternoonText = 'Familiarize with the local dress codes, custom rituals, and layout.';
              eveningText = 'Quiet devotional walks or attending introductory spiritual lectures.';
            } else {
              morningText = 'Participate in morning meditation or group congregation prayers.';
              afternoonText = 'Visit historic temple museums, library halls, and architectural sites.';
              eveningText = 'Enjoy pure vegetarian meals and reflection under twilight sunset skies.';
            }
          }

          return {
            day: dayNum,
            title: `Sacred Path - Day ${dayNum}`,
            timeline: [
              { time: '06:00 AM', activity: 'Devotional Awakening', icon: '🌅', detail: morningText },
              { time: '01:00 PM', activity: 'Mid-Day Darshan', icon: '🕌', detail: afternoonText },
              { time: '06:30 PM', activity: 'Evening Aarti / Contemplation', icon: '🔥', detail: eveningText }
            ],
            activities: {
              morning: morningText,
              afternoon: afternoonText,
              evening: eveningText
            }
          };
        });

        // Pack list based on faith
        const packingList = [
          '📄 Mandatory temple entry passes or pre-booked QR codes',
          '🧣 Head scarves or bandanas (Required for Gurudwaras/Mosques)',
          '👟 Easy slip-on shoes or sandals (Footwear is removed frequently)',
          '🛕 Modest cotton clothes (covering knees and shoulders)',
          '💊 Sanitizer, moist wipes, and personal water container'
        ];

        setCompiledItinerary({
          id: `sp-${Date.now()}`,
          destination,
          country,
          image: img,
          duration: plannerDuration,
          budgetType: plannerBudget,
          interests: ['Spiritual', 'Culture', 'History'],
          travelStyle: 'Spiritual Seeker',
          pace: plannerPace,
          costs: adjustedCosts,
          days: generatedDays,
          averageWalkingDist: `${(4.5 + plannerDuration * 0.2).toFixed(1)} km daily`,
          emergencyServices: emergency,
          transportationAdvice: transportAdvice,
          packingList,
          roadTrip: {
            fuelCostEstimate: Math.round(adjustedCosts.transport * 0.45),
            tollEstimates: Math.round(adjustedCosts.transport * 0.1),
            foodStops: [`Pure Vegetarian Highway Dhaba`, 'Govt Tourist Rest Stop'],
            scenicStops: ['Panoramic river valleys', 'Spiritual ashram gateways'],
            restAreas: ['Clean Highway Rest stop with washrooms'],
            evChargers: ['Tata Power EV charging point, City entry gate'],
            emergencyContacts: { phone: '+91 112', details: 'Highway Police Patrol Emergency Desk' },
            alternativeRoute: 'Standard national highway bypass corridors (less congestion).'
          },
          confidenceScore: 94,
          weatherSpecs: {
            aqi: '62 (Moderate)',
            uvIndex: '5 (Moderate)',
            pollen: 'Low',
            photographyScore: '92/100 (Optimal lighting, low haze)'
          },
          contingencyPlan: `Weather contingency: In case of heavy mountain/monsoon delays, automatically reroute pilgrimage base to Haridwar/Rishikesh ashram hubs.`
        });

        setIsGenerating(false);
      }
    }, 400);
  };

  // Save the compiled itinerary to context
  const handleSaveSpiritualItinerary = () => {
    if (!compiledItinerary) return;
    
    if (!user) {
      showToast('Please log in to save your spiritual itinerary.', 'error');
      return;
    }

    saveItinerary(compiledItinerary);
    awardXp(500, `Planned Spiritual Path to ${compiledItinerary.destination}`);

    // Unlock passport stamp for this destination
    const stampName = `${compiledItinerary.destination}-Stamp`;
    if (!passportStamps.includes(stampName)) {
      setPassportStamps(prev => [...prev, stampName]);
    }
  };

  // Virtual guide interaction response
  const getVirtualGuideSpeech = () => {
    if (activeAvatar === 'guru') {
      if (selectedWalkthrough === 'kedarnath') return "Welcome, seeker. Kedarnath sits at 11,755 ft, protected by the giant Bhim Shila stone behind it. Feel the raw energy of the Himalayas and chant Om Namah Shivaya silently to calm your mind.";
      if (selectedWalkthrough === 'varanasi') return "The river Ganges is a conduit of spiritual release. Walk the ghats at sunrise, observe the cyclic nature of life, and witness the fire rituals of Ganga Aarti which represent cosmic elements.";
      return "Let the sacred architecture remind you of internal geometry. Quiet your thoughts and observe the devotion surrounding you.";
    }
    if (activeAvatar === 'historian') {
      if (selectedWalkthrough === 'kedarnath') return "Architecturally, this temple was built using massive grey stone slabs locked with iron clamps. Adi Shankaracharya revitalized it in the 8th century, though archaeological dates trace back further.";
      if (selectedWalkthrough === 'varanasi') return "Mark Twain famously observed that Varanasi is older than history. It has survived multiple reconstructions, notably the current structure built by Queen Ahilyabai Holkar in 1780.";
      return "Every stone carved here represents centuries of cultural layers. Notice the fusion of medieval and ancient architectural design.";
    }
    // food expert
    if (selectedWalkthrough === 'kedarnath') return "High-altitude foods focus on hot broths, ginger tea, and GMVN Bhandara khichdi to sustain energy in extreme weather.";
    if (selectedWalkthrough === 'varanasi') return "Do not miss the famous Banarasi Tamatar Chaat served in clay pots (kulhad), and cool saffron-infused lassi topped with thick malai.";
    return "Satvik dining rules apply. Local lentils, wood-fired flatbreads, and spice-infused tea provide pure vegetarian nourishment.";
  };

  // Print certificate logic
  const handlePrintCertificate = () => {
    window.print();
  };

  // Filtered Spiritual Directory Destinations
  const filteredDirDestinations = mockDestinations.filter(dest => {
    if (!dest.tags.includes('Spiritual')) return false;

    // Search query
    const matchesSearch = dest.name.toLowerCase().includes(dirSearch.toLowerCase()) ||
                          dest.description.toLowerCase().includes(dirSearch.toLowerCase()) ||
                          dest.country.toLowerCase().includes(dirSearch.toLowerCase()) ||
                          dest.region.toLowerCase().includes(dirSearch.toLowerCase());

    // Faith Filter
    let matchesFaith = true;
    if (dirFaith !== 'All') {
      const text = (dest.name + ' ' + dest.description + ' ' + dest.tags.join(' ')).toLowerCase();
      if (dirFaith === 'Hinduism') {
        matchesFaith = text.includes('hindu') || text.includes('shiva') || text.includes('rama') || text.includes('temple') || text.includes('mandir') || text.includes('jyotirlinga') || text.includes('balaji') || text.includes('devi') || text.includes('puri') || text.includes('somnath') || text.includes('badrinath') || text.includes('kedarnath') || text.includes('tirupati') || text.includes('meenakshi') || text.includes('konark') || text.includes('siddhivinayak') || text.includes('shirdi') || text.includes('kashi') || text.includes('varanasi');
      } else if (dirFaith === 'Sikhism') {
        matchesFaith = text.includes('sikh') || text.includes('golden temple') || text.includes('gurpurab') || text.includes('sahib') || text.includes('gurudwara') || text.includes('amritsar') || text.includes('patna sahib') || text.includes('anandpur');
      } else if (dirFaith === 'Buddhism') {
        matchesFaith = text.includes('buddha') || text.includes('buddhist') || text.includes('monastery') || text.includes('gaya') || text.includes('sarnath') || text.includes('stupa') || text.includes('bodhgaya');
      } else if (dirFaith === 'Christianity') {
        matchesFaith = text.includes('christian') || text.includes('church') || text.includes('basilica') || text.includes('cathedral') || text.includes('vatican') || text.includes('jesus') || text.includes('mary') || text.includes('velankanni') || text.includes('bom jesus');
      } else if (dirFaith === 'Islam') {
        matchesFaith = text.includes('islam') || text.includes('mosque') || text.includes('dargah') || text.includes('masjid') || text.includes('sharif') || text.includes('mecca') || text.includes('medina') || text.includes('ajmer') || text.includes('nizamuddin') || text.includes('haji ali') || text.includes('dua');
      } else if (dirFaith === 'Jainism') {
        matchesFaith = text.includes('jain') || text.includes('dilwara') || text.includes('palitana') || text.includes('ranakpur') || text.includes('tirthankara') || text.includes('shikharji');
      }
    }

    // Region Filter
    const matchesRegion = dirRegion === 'All' || dest.region === dirRegion || (dirRegion === 'International' && dest.country !== 'India');

    return matchesSearch && matchesFaith && matchesRegion;
  });

  return (
    <div className="py-4 text-left flex flex-col gap-8 w-full">
      {/* Premium Futuristic Header */}
      <div className="relative overflow-hidden p-8 rounded-3xl bg-slate-950/80 border border-teal-500/20 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-950/40 via-slate-950/90 to-slate-950 z-0 pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-semibold mb-4">
            <Sparkles size={12} className="animate-pulse" />
            <span>KARMIC SYSTEM V.2100</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 mb-2 mt-0">
            Spiritual Universe
          </h1>
          <p className="text-sm text-slate-400">
            An immersive AI-powered Spiritual Journey Operating System. Navigate sacred coordinates, track holy pilgrimages, analyze festival schedules, and organize satvik travels.
          </p>
        </div>

        {/* Global Progress Widget */}
        <div className="relative z-10 shrink-0 bg-slate-900/60 backdrop-blur-md border border-teal-500/10 rounded-2xl p-5 flex flex-col items-center gap-2 w-full md:w-56">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pilgrim Path Progress</span>
          <div className="relative flex items-center justify-center w-20 h-20">
            {/* SVG circle progress */}
            <svg className="w-20 h-20 transform -rotate-90">
              <circle cx="40" cy="40" r="32" stroke="rgba(20,184,166,0.1)" strokeWidth="6" fill="transparent" />
              <circle 
                cx="40" 
                cy="40" 
                r="32" 
                stroke="#14b8a6" 
                strokeWidth="6" 
                fill="transparent" 
                strokeDasharray="201"
                strokeDashoffset={201 - (201 * Math.min(100, (visitedJyotirlingas.length / 12) * 100)) / 100}
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-lg font-extrabold text-slate-100">{Math.round((visitedJyotirlingas.length / 12) * 100)}%</span>
            </div>
          </div>
          <div className="text-center mt-1">
            <span className="text-xs font-semibold text-slate-300">{visitedJyotirlingas.length} of 12 Jyotirlingas Visited</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 pb-1 border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'directory', label: 'Spiritual Directory', icon: <Search size={15} /> },
          { id: 'map', label: 'Sacred Route Explorer', icon: <Map size={15} /> },
          { id: 'jyotirlinga', label: '12 Jyotirlinga Tracker', icon: <Award size={15} /> },
          { id: 'guides', label: 'Multi-Faith Guide', icon: <BookOpen size={15} /> },
          { id: 'planner', label: 'AI Spiritual Planner', icon: <Sparkles size={15} /> },
          { id: 'calendar', label: 'Festival Intelligence', icon: <Calendar size={15} /> },
          { id: 'passport', label: 'Pilgrim Passport', icon: <Compass size={15} /> },
          { id: 'walkthrough', label: 'Virtual Sanctuary', icon: <Camera size={15} /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === tab.id
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sub-Tab Contents */}
      <div className="w-full text-xs">
        <AnimatePresence mode="wait">
          
          {/* TAB 0: SPIRITUAL DIRECTORY */}
          {activeSubTab === 'directory' && (
            <motion.div
              key="directory-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6"
            >
              {/* Search & Filter Controls Panel */}
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full md:max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                  <input
                    type="text"
                    placeholder="Search sanctuary..."
                    value={dirSearch}
                    onChange={(e) => setDirSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-xs focus:outline-none focus:border-teal-500 text-slate-800 dark:text-slate-100 font-medium"
                  />
                  {dirSearch && (
                    <button 
                      onClick={() => setDirSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-405 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Filters Row */}
                <div className="flex flex-wrap gap-3 items-center w-full md:w-auto justify-start md:justify-end">
                  {/* Faith filter */}
                  <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-850">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Faith:</span>
                    <select
                      value={dirFaith}
                      onChange={(e) => setDirFaith(e.target.value)}
                      className="bg-transparent text-xs text-slate-750 dark:text-slate-300 font-bold focus:outline-none"
                    >
                      <option value="All">All Traditions</option>
                      <option value="Hinduism">Hinduism</option>
                      <option value="Sikhism">Sikhism</option>
                      <option value="Buddhism">Buddhism</option>
                      <option value="Christianity">Christianity</option>
                      <option value="Islam">Islam</option>
                      <option value="Jainism">Jainism</option>
                    </select>
                  </div>

                  {/* Region filter */}
                  <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-850">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Region:</span>
                    <select
                      value={dirRegion}
                      onChange={(e) => setDirRegion(e.target.value)}
                      className="bg-transparent text-xs text-slate-755 dark:text-slate-300 font-bold focus:outline-none"
                    >
                      <option value="All">All Regions</option>
                      <option value="North India">North India</option>
                      <option value="South India">South India</option>
                      <option value="West India">West India</option>
                      <option value="East India">East India</option>
                      <option value="International">International</option>
                    </select>
                  </div>

                  {/* Clear Filter button */}
                  {(dirSearch || dirFaith !== 'All' || dirRegion !== 'All') && (
                    <button
                      onClick={() => {
                        setDirSearch('');
                        setDirFaith('All');
                        setDirRegion('All');
                      }}
                      className="text-[10px] font-bold text-rose-500 hover:underline uppercase tracking-wide px-2"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              {filteredDirDestinations.length === 0 ? (
                <EmptyState 
                  title="Sanctuary Search Failure" 
                  message="No sacred coordinates fit your specified criteria. Try clearing query fields to scan a wider range." 
                  onRetry={() => {
                    setDirSearchQuery('');
                    setDirReligionFilter('All');
                    setDirStateFilter('All');
                  }}
                  retryLabel="Reset Search & Filters"
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDirDestinations.map(dest => (
                    <div 
                      key={dest.id}
                      className="group bg-white dark:bg-slate-900/40 border border-slate-150 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-500/20 transition-all flex flex-col justify-between"
                    >
                      {/* Image section */}
                      <div className="relative h-48 overflow-hidden bg-slate-950">
                        <img 
                          src={customPhotos[dest.id] || dest.image} 
                          alt={dest.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 text-[9px] font-bold">
                          <span className="px-2 py-0.5 rounded bg-slate-950/75 backdrop-blur-sm text-teal-400 border border-teal-500/20">
                            {dest.region}
                          </span>
                        </div>
                      </div>

                      {/* Info section */}
                      <div className="p-5 flex flex-col gap-3 text-left flex-1 justify-between">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <h4 className="font-display font-extrabold text-xs text-slate-800 dark:text-slate-100 leading-tight">
                              {dest.name}
                            </h4>
                            <div className="flex items-center gap-1 shrink-0 text-amber-500 font-bold text-[10px]">
                              <span>⭐</span>
                              <span>{dest.rating}</span>
                            </div>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {dest.description}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 pt-2">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {dest.tags.map(t => (
                              <span 
                                key={t}
                                className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-[9px] font-semibold text-slate-500 dark:text-slate-455"
                              >
                                #{t}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Link 
                            to={`/destination/${dest.id}`}
                            className="w-full py-2.5 rounded-xl bg-teal-500/10 hover:bg-teal-500 text-teal-605 dark:text-teal-400 dark:hover:text-slate-950 font-bold transition-all text-center flex items-center justify-center gap-1"
                          >
                            <span>Explore Sanctuary Portal</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
          
          {/* TAB 1: SACRED ROUTE EXPLORER */}
          {activeSubTab === 'map' && (
            <motion.div
              key="map-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Selector & Description */}
              <div className="lg:col-span-4 flex flex-col gap-5 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">Circuit Matrix Selector</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Select a sacred circuit path. The holographic map nodes will highlight, demonstrating the geographic alignments of holy locations.
                </p>
                <div className="flex flex-col gap-2.5 mt-2">
                  {Object.entries(CIRCUITS).map(([key, circuit]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCircuit(key)}
                      className={`flex flex-col gap-1 text-left p-3.5 rounded-xl border transition-all ${
                        selectedCircuit === key
                          ? 'border-teal-500/40 bg-teal-500/5 dark:bg-teal-500/10'
                          : 'border-slate-150 dark:border-slate-800 hover:bg-slate-55 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-xs">{circuit.name}</span>
                        <div 
                          className="w-2.5 h-2.5 rounded-full" 
                          style={{ backgroundColor: circuit.color }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">{circuit.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right SVG Canvas */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-950 border border-slate-800/60 overflow-hidden shadow-2xl p-4 flex items-center justify-center">
                  
                  {/* Cyber matrix background style injection */}
                  <style>{`
                    @keyframes cyberDash {
                      to { stroke-dashoffset: -40; }
                    }
                    .circuit-line {
                      stroke-dasharray: 8 5;
                      animation: cyberDash 3s linear infinite;
                    }
                    .pulse-ring {
                      animation: pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                    @keyframes pulseGlow {
                      0%, 100% { transform: scale(1); opacity: 0.8; }
                      50% { transform: scale(1.4); opacity: 0; }
                    }
                  `}</style>

                  {/* SVG Grid Overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:30px_30px]" />
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-950/20 via-transparent to-transparent" />

                  <svg viewBox="0 0 800 600" className="w-full h-full relative z-10 select-none">
                    {/* Render active circuit paths */}
                    {(() => {
                      const circuit = CIRCUITS[selectedCircuit];
                      const points = circuit.nodes
                        .map(nid => CIRCUIT_NODES.find(n => n.id === nid))
                        .filter(Boolean);

                      if (points.length < 2) return null;

                      // Create route path
                      let pathD = `M ${points[0].x} ${points[0].y}`;
                      for (let i = 1; i < points.length; i++) {
                        pathD += ` L ${points[i].x} ${points[i].y}`;
                      }
                      if (selectedCircuit !== 'sikh' && selectedCircuit !== 'buddhist') {
                        // Loop it back
                        pathD += ` Z`;
                      }

                      return (
                        <g>
                          <path 
                            d={pathD} 
                            fill="none" 
                            stroke={circuit.color} 
                            strokeWidth="2" 
                            strokeOpacity="0.8"
                            className="circuit-line"
                          />
                          <path 
                            d={pathD} 
                            fill="none" 
                            stroke={circuit.color} 
                            strokeWidth="6" 
                            strokeOpacity="0.15"
                            className="blur-sm"
                          />
                        </g>
                      );
                    })()}

                    {/* Render all nodes */}
                    {CIRCUIT_NODES.map(node => {
                      const isHighlighted = CIRCUITS[selectedCircuit].nodes.includes(node.id);
                      return (
                        <g 
                          key={node.id} 
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredNode(node)}
                          onMouseLeave={() => setHoveredNode(null)}
                        >
                          {/* Outer pulse */}
                          {isHighlighted && (
                            <circle 
                              cx={node.x} 
                              cy={node.y} 
                              r="12" 
                              fill="none" 
                              stroke={CIRCUITS[selectedCircuit].color} 
                              strokeWidth="1.5"
                              opacity="0.5"
                              className="animate-ping"
                              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                            />
                          )}
                          
                          {/* Glow circle */}
                          <circle 
                            cx={node.x} 
                            cy={node.y} 
                            r={isHighlighted ? "7" : "4.5"} 
                            fill={isHighlighted ? CIRCUITS[selectedCircuit].color : '#475569'} 
                            className="transition-all duration-300"
                          />

                          {/* Outer ring */}
                          <circle 
                            cx={node.x} 
                            cy={node.y} 
                            r={isHighlighted ? "10" : "7"} 
                            fill="transparent"
                            stroke={isHighlighted ? CIRCUITS[selectedCircuit].color : '#64748b'} 
                            strokeWidth="1"
                            opacity={isHighlighted ? "1" : "0.3"}
                          />

                          {/* Name Text */}
                          <text 
                            x={node.x} 
                            y={node.y - 12} 
                            fill={isHighlighted ? '#f8fafc' : '#94a3b8'} 
                            fontSize={isHighlighted ? "11px" : "9px"}
                            fontWeight={isHighlighted ? "bold" : "normal"}
                            textAnchor="middle"
                            className="pointer-events-none transition-all"
                          >
                            {node.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  {/* Tooltip Overlay */}
                  {hoveredNode && (
                    <div 
                      className="absolute bg-slate-900/95 backdrop-blur-md border border-slate-800 text-slate-100 rounded-xl p-3.5 shadow-xl w-52 z-20 pointer-events-none"
                      style={{
                        left: `${Math.min(70, Math.max(5, (hoveredNode.x / 800) * 100))}%`,
                        top: `${Math.min(75, Math.max(5, (hoveredNode.y / 600) * 100 + 4))}%`
                      }}
                    >
                      <div className="flex justify-between items-center gap-1 mb-1">
                        <span className="font-bold text-[11px] text-slate-100">{hoveredNode.name}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 font-semibold">{hoveredNode.faith}</span>
                      </div>
                      <span className="text-[9px] text-slate-400 block mb-1">{hoveredNode.desc}</span>
                      <div className="flex items-center gap-1 mt-1 text-[9px] text-slate-500">
                        <MapPin size={9} />
                        <span>{hoveredNode.state}, India</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 bg-slate-950/40 border border-slate-850 p-3.5 rounded-xl">
                  <span className="flex items-center gap-1.5">
                    <Info size={13} className="text-teal-400" />
                    <span>Coordinates mapped globally. Hover over nodes to preview landmark summaries.</span>
                  </span>
                  <span>Circuit Color: <strong style={{ color: CIRCUITS[selectedCircuit].color }}>{CIRCUITS[selectedCircuit].name}</strong></span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: 12 JYOTIRLINGA MISSION */}
          {activeSubTab === 'jyotirlinga' && (
            <motion.div
              key="jyotirlinga-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6"
            >
              {/* Tracker Panel */}
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl text-left">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <Award className="text-rose-500" /> 12 Jyotirlinga Mahapatha Mission
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Check off the shrines you have visited to track your progression, unlock ranks, and claim your spiritual completion certificate.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={checkAllJyotirlingas}
                      className="px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-605 dark:text-teal-405 font-bold hover:bg-teal-500/20"
                    >
                      Check All Shrines
                    </button>
                    <button 
                      onClick={clearAllJyotirlingas}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350 font-bold hover:bg-slate-200 dark:hover:bg-slate-700/80"
                    >
                      Clear Progress
                    </button>
                  </div>
                </div>

                {/* Shrines Grid Checkbox list */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {JYOTIRLINGAS.map((j, idx) => {
                    const isVisited = visitedJyotirlingas.includes(j.name);
                    return (
                      <div 
                        key={j.name}
                        onClick={() => handleToggleJyotirlinga(j.name)}
                        className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                          isVisited 
                            ? 'border-rose-500/40 bg-rose-500/5 dark:bg-rose-500/10 shadow-sm shadow-rose-500/5' 
                            : 'border-slate-150 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isVisited ? 'bg-rose-500 border-rose-500 text-white' : 'border-slate-300 dark:border-slate-700'
                        }`}>
                          {isVisited && <CheckCircle2 size={12} fill="white" className="text-rose-500" />}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className={`font-bold ${isVisited ? 'text-rose-600 dark:text-rose-400' : 'text-slate-700 dark:text-slate-300'}`}>
                            {idx + 1}. {j.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">{j.location}</span>
                          <span className="text-[10px] text-slate-500 leading-snug mt-1">{j.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievements, Badges, and Certificate Release */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Badges checklist */}
                <div className="lg:col-span-7 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4">Unlocked Badges</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: 'Pilgrim Novice', count: 1, desc: 'Logged 1 shrine' },
                      { name: 'Sacred Seeker', count: 4, desc: 'Logged 4 shrines' },
                      { name: 'Spiritual Pathfinder', count: 8, desc: 'Logged 8 shrines' },
                      { name: 'Jyotirlinga Master', count: 12, desc: 'All 12 shrines' }
                    ].map(badge => {
                      const isUnlocked = visitedJyotirlingas.length >= badge.count;
                      return (
                        <div 
                          key={badge.name} 
                          className={`p-4 rounded-xl border flex flex-col items-center text-center transition-all ${
                            isUnlocked 
                              ? 'border-teal-500/30 bg-teal-500/5 dark:bg-teal-500/10 text-slate-800 dark:text-slate-100 shadow-sm' 
                              : 'border-slate-100 dark:border-slate-800/40 text-slate-400 opacity-60'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                            isUnlocked ? 'bg-teal-500/20 text-teal-400 animate-pulse' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                          }`}>
                            <Award size={22} />
                          </div>
                          <span className="font-bold text-[11px] leading-tight">{badge.name}</span>
                          <span className="text-[9px] text-slate-405 dark:text-slate-500 mt-1 font-medium">{badge.desc}</span>
                          <span className="text-[8px] mt-2 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-950/20 text-slate-500">
                            {isUnlocked ? 'Active' : 'Locked'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Certificate Request Widget */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-teal-500/20 p-6 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />
                  <div>
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest">Holographic Certificate Generator</span>
                    <h4 className="text-sm font-bold text-slate-100 mt-1 mb-2">Sacred Pilgrimage Certificate</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                      Obtain your official Pilgrim Certificate. You must have checked at least one visited Jyotirlinga to generate your authenticated certification of devotions.
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        if (visitedJyotirlingas.length === 0) {
                          showToast('Please check off at least one visited Jyotirlinga to generate certificate!', 'error');
                        } else {
                          setShowCertificate(true);
                        }
                      }}
                      className="w-full py-3 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2"
                    >
                      <Sparkles size={14} /> Generate Digital Certificate
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: MULTI-FAITH GUIDE */}
          {activeSubTab === 'guides' && (
            <motion.div
              key="guides-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left"
            >
              {/* Faith Tab Buttons */}
              <div className="lg:col-span-3 flex flex-col gap-2 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-4 rounded-2xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-2">Select Faith Guide</span>
                {FAITHS.map(f => (
                  <button
                    key={f.name}
                    onClick={() => setSelectedGuideFaith(f.name)}
                    className={`px-3.5 py-3 rounded-xl font-bold text-left transition-all ${
                      selectedGuideFaith === f.name
                        ? 'bg-teal-500/10 text-teal-600 dark:text-teal-450 border border-teal-500/20'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 border border-transparent'
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>

              {/* Faith details */}
              {(() => {
                const info = FAITHS.find(f => f.name === selectedGuideFaith);
                return (
                  <div className="lg:col-span-9 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl flex flex-col gap-6">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">{info.name} Pilgrim Guide</h3>
                      <p className="text-xs text-teal-600 dark:text-teal-400 mt-1 font-semibold">{info.focus}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-900 flex flex-col gap-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1"><Clock size={11} /> Standard Timings</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">{info.timings}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-900 flex flex-col gap-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1"><UtensilsCrossed size={11} /> Food & Langar Advice</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{info.food}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-900 flex flex-col gap-1 md:col-span-2">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1"><AlertTriangle size={11} /> Sacred Etiquette Rules</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{info.etiquette}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-900 flex flex-col gap-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Sacred Architecture</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{info.architecture}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-900 flex flex-col gap-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Featured Landmarks</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{info.spotlight}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* TAB 4: AI SPIRITUAL PLANNER */}
          {activeSubTab === 'planner' && (
            <motion.div
              key="planner-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form Inputs (5 columns) */}
                <div className="lg:col-span-5 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl flex flex-col gap-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">Quantum Pilgrimage Form</h3>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Faith Preference</label>
                    <select
                      value={plannerFaith}
                      onChange={(e) => setPlannerFaith(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-teal-500"
                    >
                      <option value="Hinduism">Hinduism (Ayodhya Ram Mandir)</option>
                      <option value="Kedarnath">Hinduism (Kedarnath Jyotirlinga)</option>
                      <option value="Sikhism">Sikhism (Golden Temple Amritsar)</option>
                      <option value="Buddhism">Buddhism (Bodh Gaya stupas)</option>
                      <option value="Christianity">Christianity (Vatican City Basilica)</option>
                      <option value="Islam">Islam (Ajmer Sharif Sufi Dargah)</option>
                      <option value="Jainism">Jainism (Dilwara Marble Temple)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Duration (Days)</label>
                    <input
                      type="number"
                      min="2"
                      max="10"
                      value={plannerDuration}
                      onChange={(e) => setPlannerDuration(parseInt(e.target.value))}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Comfort Ashram Tier</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Pilgrim Economy', 'Comfortable', 'Luxury Ashram'].map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setPlannerBudget(b)}
                          className={`py-2 rounded-lg font-bold text-[10px] border transition-all ${
                            plannerBudget === b
                              ? 'bg-teal-500/10 border-teal-500 text-teal-605 dark:text-teal-400'
                              : 'border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Preferred Transport</label>
                    <select
                      value={plannerTransport}
                      onChange={(e) => setPlannerTransport(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-teal-500"
                    >
                      <option value="Rail Route">Rail Route (Pilgrimage Trains)</option>
                      <option value="Flight Corridor">Flight Corridor (Air Travel)</option>
                      <option value="Road Journey">Road Journey (Private Cab / Drive)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Meditation Pace</label>
                    <select
                      value={plannerPace}
                      onChange={(e) => setPlannerPace(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-teal-500"
                    >
                      <option value="Slow Meditation">Slow Meditation (Relaxed immersion)</option>
                      <option value="Balanced Devotion">Balanced Devotion (Standard pace)</option>
                      <option value="Quick Darshan">Quick Darshan (Rapid visits)</option>
                    </select>
                  </div>

                  <button
                    onClick={handleCompileSpiritualPath}
                    disabled={isGenerating}
                    className="w-full py-3.5 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
                  >
                    {isGenerating ? <RefreshCw size={14} className="animate-spin" /> : <Sparkles size={14} />}
                    {isGenerating ? 'Compiling Path...' : 'Compile Spiritual Path'}
                  </button>
                </div>

                {/* Itinerary Display (7 columns) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  {isGenerating && (
                    <div className="flex flex-col gap-4">
                      <div className="text-xs font-semibold text-teal-400 font-mono tracking-widest animate-pulse mb-2">
                        {generationSteps.toUpperCase()}
                      </div>
                      <ItineraryBuilderSkeleton />
                    </div>
                  )}

                  {!isGenerating && !compiledItinerary && (
                    <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-12 rounded-3xl flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                      <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-950 text-slate-400 flex items-center justify-center mb-2">
                        <Sparkles size={20} />
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-350">No Active Spiritual Path</span>
                      <p className="text-[10px] text-slate-455 max-w-xs">
                        Configure the parameters on the left and click Compile to compute a custom pilgrimage plan with safety forecasts.
                      </p>
                    </div>
                  )}

                  {compiledItinerary && (
                    <div className="flex flex-col gap-5 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-3xl">
                      
                      {/* Itinerary Header Banner */}
                      <div className="relative h-44 rounded-2xl overflow-hidden mb-2">
                        <img 
                          src={compiledItinerary.image} 
                          alt={compiledItinerary.destination} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div>
                            <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest">Spiritual Plan Unlocked</span>
                            <h4 className="text-lg font-extrabold text-white mt-1">{compiledItinerary.destination} Pilgrimage</h4>
                          </div>
                          <div className="bg-teal-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                            <Sparkles size={11} /> {compiledItinerary.confidenceScore}% Karma Conf.
                          </div>
                        </div>
                      </div>

                      {/* Travel environment index metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex flex-col">
                          <span className="text-[9px] text-slate-400">UV Index</span>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">{compiledItinerary.weatherSpecs.uvIndex}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex flex-col">
                          <span className="text-[9px] text-slate-400">Air Quality</span>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">{compiledItinerary.weatherSpecs.aqi}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex flex-col">
                          <span className="text-[9px] text-slate-400">Pollen Count</span>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">{compiledItinerary.weatherSpecs.pollen}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex flex-col">
                          <span className="text-[9px] text-slate-400">Photo Index</span>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">{compiledItinerary.weatherSpecs.photographyScore}</span>
                        </div>
                      </div>

                      {/* Cost details */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-850">
                          <span className="font-bold text-slate-700 dark:text-slate-350">Pilgrimage Budget Summary</span>
                          <span className="font-bold text-teal-605 dark:text-teal-400 text-xs">₹{compiledItinerary.costs.total.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2 text-center mt-3 text-[9px] text-slate-500 font-medium">
                          <div>
                            <div>Flights</div>
                            <div className="font-bold text-slate-700 dark:text-slate-300 mt-1">₹{compiledItinerary.costs.flights.toLocaleString('en-IN')}</div>
                          </div>
                          <div>
                            <div>Ashram</div>
                            <div className="font-bold text-slate-700 dark:text-slate-300 mt-1">₹{compiledItinerary.costs.lodging.toLocaleString('en-IN')}</div>
                          </div>
                          <div>
                            <div>Transit</div>
                            <div className="font-bold text-slate-700 dark:text-slate-300 mt-1">₹{compiledItinerary.costs.transport.toLocaleString('en-IN')}</div>
                          </div>
                          <div>
                            <div>Satvik Food</div>
                            <div className="font-bold text-slate-700 dark:text-slate-300 mt-1">₹{compiledItinerary.costs.meals.toLocaleString('en-IN')}</div>
                          </div>
                          <div>
                            <div>Darshan</div>
                            <div className="font-bold text-slate-700 dark:text-slate-300 mt-1">₹{compiledItinerary.costs.activities.toLocaleString('en-IN')}</div>
                          </div>
                        </div>
                      </div>

                      {/* Day-by-Day Agenda */}
                      <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Daily Ritual Schedule</span>
                        {compiledItinerary.days.map(d => (
                          <div key={d.day} className="p-3.5 rounded-xl border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20">
                            <span className="font-bold text-slate-750 dark:text-slate-200">Day {d.day} — {d.title}</span>
                            <div className="flex flex-col gap-2.5 mt-3 text-[10px] text-slate-500">
                              {d.timeline.map((t, tIdx) => (
                                <div key={tIdx} className="flex gap-2 items-start">
                                  <span className="font-bold text-slate-400 w-16 shrink-0">{t.time}</span>
                                  <span className="text-xs shrink-0">{t.icon}</span>
                                  <div className="flex flex-col gap-0.5">
                                    <span className="font-bold text-slate-700 dark:text-slate-300 text-xs">{t.activity}</span>
                                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-snug">{t.detail}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Contingency Plan and Emergency Alert */}
                      <div className="p-3.5 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 flex flex-col gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1">
                          <ShieldAlert size={12} /> Contingency Protocol
                        </span>
                        <p className="text-[10px] text-rose-605 dark:text-rose-400 leading-relaxed font-medium">
                          {compiledItinerary.contingencyPlan}
                        </p>
                        <div className="text-[9px] text-slate-405 dark:text-slate-500 mt-1">
                          Emergency Assistance Contact: <strong>{compiledItinerary.emergencyServices}</strong>
                        </div>
                      </div>

                      {/* Save Itinerary CTA */}
                      <div className="mt-2 flex gap-3">
                        <button
                          onClick={handleSaveSpiritualItinerary}
                          className="flex-1 py-3 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold transition-all shadow-md shadow-teal-500/25 flex items-center justify-center gap-1.5"
                        >
                          <Plus size={14} /> Save Path to Dashboard
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: FESTIVAL INTELLIGENCE */}
          {activeSubTab === 'calendar' && (
            <motion.div
              key="calendar-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 text-left"
            >
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-4">
                  <Calendar className="text-teal-500" /> Sacred Festival Countdown & Intelligence
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Track major upcoming religious gatherings and check live crowd prediction analysis, accommodation booking warnings, and custom crowd-avoidance pathways.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {festivalCountdowns.map(f => (
                    <div key={f.name} className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs">{f.name}</h4>
                          <span className="text-[9px] text-slate-400 font-semibold">{f.location}</span>
                        </div>
                        <span className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-950/60 text-teal-450 border border-slate-800 font-mono font-bold animate-pulse">
                          {f.countdown}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-[9px] mt-2">
                        <div className="p-2 rounded-lg bg-slate-950/20 border border-slate-850">
                          <div className="text-slate-400">Crowd Level</div>
                          <div className="font-bold text-rose-500 mt-0.5">{f.crowd}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-950/20 border border-slate-850">
                          <div className="text-slate-400">Hotel Demand</div>
                          <div className="font-bold text-amber-500 mt-0.5">{f.demand}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-950/20 border border-slate-850">
                          <div className="text-slate-400">Queue Time</div>
                          <div className="font-bold text-slate-300 mt-0.5">3.5 - 6 Hours</div>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 leading-relaxed border-t border-slate-200 dark:border-slate-800/80 pt-2 flex items-start gap-1">
                        <Info size={11} className="text-teal-400 shrink-0 mt-0.5" />
                        <span><strong>Safety Advisory:</strong> {f.safety}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 6: PILGRIM PASSPORT */}
          {activeSubTab === 'passport' && (
            <motion.div
              key="passport-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 text-left"
            >
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-2">
                  <Compass className="text-teal-500" /> Digital Pilgrim Passport
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Earn holographic stamps for completing sacred routes or visiting major religious hubs. Completed journeys auto-stamp your passport.
                </p>

                {/* Stamp Collection Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {[
                    { id: 'Varanasi-Kashi', name: 'Kashi Vishwanath', icon: '🛕', color: 'from-amber-500/20 to-orange-500/20 border-orange-500/30' },
                    { id: 'Ayodhya-Stamp', name: 'Ram Mandir', icon: '🏹', color: 'from-orange-500/20 to-red-500/20 border-red-500/30' },
                    { id: 'Kedarnath-Shrine', name: 'Kedarnath', icon: '🏔️', color: 'from-sky-500/20 to-indigo-500/20 border-indigo-500/30' },
                    { id: 'Golden Temple-Stamp', name: 'Golden Temple', icon: 'ੴ', color: 'from-yellow-500/20 to-amber-600/20 border-yellow-500/30' },
                    { id: 'Bodh Gaya-Stamp', name: 'Bodh Gaya', icon: '☸️', color: 'from-teal-500/20 to-green-500/20 border-teal-500/30' },
                    { id: 'Vatican City-Stamp', name: 'Vatican City', icon: '⛪', color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30' }
                  ].map(stamp => {
                    const isUnlocked = passportStamps.includes(stamp.id);
                    return (
                      <div 
                        key={stamp.id}
                        className={`p-4 rounded-2xl border flex flex-col items-center text-center justify-between aspect-square relative overflow-hidden transition-all ${
                          isUnlocked 
                            ? `bg-gradient-to-br ${stamp.color} text-slate-900 dark:text-slate-100 shadow-lg shadow-teal-950/20` 
                            : 'border-slate-150 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-950/10 text-slate-400 opacity-40'
                        }`}
                      >
                        {isUnlocked && (
                          <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full blur-md animate-pulse" />
                        )}
                        <span className="text-[8px] font-bold uppercase tracking-wider text-slate-500">St. Stamp</span>
                        <div className={`text-3xl my-2 select-none filter ${isUnlocked ? 'drop-shadow-glow animate-bounce-slow' : 'grayscale'}`}>
                          {stamp.icon}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-[10px] leading-tight">{stamp.name}</span>
                          <span className="text-[8px] font-semibold text-slate-400 mt-1 uppercase">
                            {isUnlocked ? 'Unlocked' : 'Locked'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 7: VIRTUAL SANCTUARY */}
          {activeSubTab === 'walkthrough' && (
            <motion.div
              key="walkthrough-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left"
            >
              {/* Left Selector & Audio Control */}
              <div className="lg:col-span-4 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-6 rounded-2xl flex flex-col gap-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">Sanctuary Screen Controller</h3>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Select Sanctuary</label>
                  <select
                    value={selectedWalkthrough}
                    onChange={(e) => setSelectedWalkthrough(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-teal-500 font-bold"
                  >
                    <option value="kedarnath">Kedarnath Himalayan Shrine</option>
                    <option value="varanasi">Varanasi Ganges Ghats</option>
                    <option value="amritsar">Amritsar Golden Temple</option>
                    <option value="bodhgaya">Bodh Gaya Mahabodhi</option>
                  </select>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex flex-col gap-4">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Ambient Hymn Player</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-slate-950 transition-all ${
                        isPlayingAudio ? 'bg-teal-500 animate-pulse' : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                    >
                      {isPlayingAudio ? <Pause size={16} fill="black" /> : <Play size={16} fill="black" className="ml-0.5" />}
                    </button>
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-700 dark:text-slate-350">
                        {isPlayingAudio ? 'Playing Sacred Resonance...' : 'Audio Stream Paused'}
                      </span>
                      <span className="text-[8px] text-slate-400">Includes ambient sitar, chanting, and wind bells</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 mt-1">
                    <div className="flex justify-between text-[9px] text-slate-400">
                      <span>Volume</span>
                      <span>{audioVolume}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={audioVolume}
                      onChange={(e) => setAudioVolume(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                {/* Guide Avatars Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Consult AI Companion</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'guru', label: 'Guru Guide', icon: '🧘' },
                      { id: 'historian', label: 'Historian', icon: '📜' },
                      { id: 'foodie', label: 'Culinary', icon: '🍲' }
                    ].map(a => (
                      <button
                        key={a.id}
                        onClick={() => setActiveAvatar(a.id)}
                        className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center ${
                          activeAvatar === a.id
                            ? 'border-teal-500/40 bg-teal-500/10 text-slate-800 dark:text-slate-100'
                            : 'border-slate-150 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-950 text-slate-400'
                        }`}
                      >
                        <span className="text-base filter drop-shadow-md">{a.icon}</span>
                        <span className="text-[9px] font-bold">{a.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Viewport (8 columns) */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-900/60 shadow-2xl flex items-center justify-center p-4">
                  {/* Sanctuary Live Feed Simulator Background */}
                  {selectedWalkthrough === 'kedarnath' && (
                    <img 
                      src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800" 
                      alt="Kedarnath live scan" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 filter blur-xs"
                    />
                  )}
                  {selectedWalkthrough === 'varanasi' && (
                    <img 
                      src="https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=800" 
                      alt="Varanasi live scan" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 filter blur-xs"
                    />
                  )}
                  {selectedWalkthrough === 'amritsar' && (
                    <img 
                      src="https://images.unsplash.com/photo-1588598126743-39d738ff9eb7?auto=format&fit=crop&q=80&w=800" 
                      alt="Golden Temple live scan" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 filter blur-xs"
                    />
                  )}
                  {selectedWalkthrough === 'bodhgaya' && (
                    <img 
                      src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&q=80&w=800" 
                      alt="Bodh Gaya live scan" 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 filter blur-xs"
                    />
                  )}

                  {/* Matrix HUD Overlays */}
                  <div className="absolute inset-0 bg-slate-950/20" />
                  <div className="absolute inset-0 border border-teal-500/20 pointer-events-none rounded-2xl m-4 z-10" />
                  <div className="absolute top-8 left-8 z-20 flex flex-col gap-1 text-slate-100 font-mono text-[9px]">
                    <span className="flex items-center gap-1.5 text-teal-400 font-bold"><Activity size={10} className="animate-pulse" /> LIVE ORBITAL SCAN V.2100</span>
                    <span>HD FIELD DEPTH PANNING ACTIVE</span>
                    <span>GEO COORDS: 30.7351° N, 79.0669° E</span>
                  </div>

                  {/* Scanning Line overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent bg-[size:100%_4px] pointer-events-none" />

                  {/* Audio visualization bar */}
                  {isPlayingAudio && (
                    <div className="absolute bottom-8 right-8 z-20 flex gap-1 items-end h-8">
                      {Array.from({ length: 8 }, (_, i) => (
                        <div 
                          key={i} 
                          className="w-1 bg-teal-400 rounded-t"
                          style={{
                            height: `${15 + Math.random() * 85}%`,
                            animation: `cyberDash ${0.5 + i * 0.1}s ease-in-out infinite alternate`
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Center speech bubbles */}
                  <div className="relative z-10 max-w-md bg-slate-900/90 border border-slate-800 backdrop-blur-md p-4 rounded-xl shadow-2xl mt-24">
                    <div className="flex gap-2.5 items-start">
                      <span className="text-xl">
                        {activeAvatar === 'guru' ? '🧘' : activeAvatar === 'historian' ? '📜' : '🍲'}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-[10px] text-teal-450 uppercase">
                          AI {activeAvatar === 'guru' ? 'Spiritual Guru' : activeAvatar === 'historian' ? 'Local Historian' : 'Culinary Guide'}
                        </span>
                        <p className="text-[10px] text-slate-300 leading-relaxed font-medium">
                          "{getVirtualGuideSpeech()}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[9px] text-slate-400 bg-slate-950/40 border border-slate-850 p-3.5 rounded-xl">
                  <Volume2 size={13} className="text-teal-400" />
                  <span>Interactive immersive audio simulations are created using procedurally generated sound arrays. Wear headphones for optimal spatial depth feel.</span>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* MODAL: HOLOGRAPHIC DIGITAL CERTIFICATE */}
      <AnimatePresence>
        {showCertificate && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-slate-900 border border-teal-500/30 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
            >
              {/* Background glowing rings */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Certificate Inner Border */}
              <div className="border border-teal-500/20 p-6 rounded-2xl text-center flex flex-col items-center gap-4 relative">
                
                {/* Close Button */}
                <button 
                  onClick={() => setShowCertificate(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-200"
                >
                  <span className="text-base">✕</span>
                </button>

                {/* Holographic Seal Header */}
                <div className="w-16 h-16 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 animate-pulse my-2">
                  <Award size={36} />
                </div>

                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">KARMIC PILGRIMAGE CERTIFICATE</span>
                
                <h2 className="font-display font-black text-2xl text-slate-100 my-1">Certificate of Devotion</h2>
                
                <p className="text-[11px] text-slate-400 max-w-md leading-relaxed">
                  This certifies that the traveler has successfully logged their journeys and visited multiple sacred pilgrimage shrines inside the TravelVerse AI database, attaining the respected rank of:
                </p>

                {/* Unlocked Rank Display */}
                <div className="py-2.5 px-6 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 font-extrabold text-sm uppercase tracking-wider my-2 shadow-sm">
                  {visitedJyotirlingas.length === 12 ? 'Maha-Pilgrimage Master' : visitedJyotirlingas.length >= 8 ? 'Spiritual Pathfinder' : visitedJyotirlingas.length >= 4 ? 'Sacred Seeker' : 'Pilgrim Seeker'}
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-8 text-left w-full max-w-sm border-t border-slate-800 pt-4 mt-2 text-[10px] text-slate-500">
                  <div>
                    <span>Traveler Account:</span>
                    <div className="font-bold text-slate-300 mt-1">{user?.name || 'Authorized Guest Pilgrim'}</div>
                  </div>
                  <div>
                    <span>Shrines Visited:</span>
                    <div className="font-bold text-slate-300 mt-1">{visitedJyotirlingas.length} of 12 Holy Sites</div>
                  </div>
                  <div>
                    <span>Verification Hash:</span>
                    <div className="font-bold font-mono text-[9px] text-slate-400 mt-1">SHA-2100:{Math.random().toString(36).substring(2, 10).toUpperCase()}</div>
                  </div>
                  <div>
                    <span>Certificate ID:</span>
                    <div className="font-bold font-mono text-[9px] text-slate-400 mt-1">TV-SP-{Date.now().toString().slice(-6)}</div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6 w-full max-w-sm relative z-20">
                  <button 
                    onClick={handlePrintCertificate}
                    className="flex-1 py-2.5 rounded-xl border border-slate-850 hover:bg-slate-805 text-slate-300 font-bold transition-all text-xs flex items-center justify-center gap-1.5"
                  >
                    <Printer size={13} /> Print Certificate
                  </button>
                  <button 
                    onClick={() => {
                      showToast('Certificate saved to vault.', 'success');
                      setShowCertificate(false);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold transition-all text-xs flex items-center justify-center gap-1.5"
                  >
                    <Download size={13} /> Add to Vault
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
