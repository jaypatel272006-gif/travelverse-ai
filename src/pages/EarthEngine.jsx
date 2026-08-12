import React, { useState, useEffect } from 'react';
import { FuturisticGlobe } from '../components/FuturisticGlobe';
import { useApp } from '../context/AppContext';
import { 
  Globe, Compass, Plane, Shield, Sun, Eye, MapPin, 
  Wind, ShieldCheck, Activity, DollarSign, Clock, Utensils, 
  ListFilter, Sparkles, Building, Briefcase, Camera, Image, Cloud
} from 'lucide-react';

// Country Database containing details for the explorer
const COUNTRY_DATABASE = {
  'India': {
    code: 'IN',
    timezone: 'Asia/Kolkata',
    currency: 'INR (₹)',
    exchangeRate: '1 USD = ₹83.45',
    visa: 'eVisa online available. Rapid airport clearance active at major travel hubs.',
    weather: { temp: '31°C', humidity: '72%', uv: '4 (Moderate)', aqi: '24 (Optimal)' },
    budget: { lodging: 28000, flights: 45000, food: 12000, total: 85000 },
    hotels: [
      { name: 'Taj Mahal Palace, Mumbai', rate: '5.0 ★', price: '₹28,000/night' },
      { name: 'The Leela Palace, Udaipur', rate: '4.9 ★', price: '₹34,000/night' }
    ],
    flights: [
      { route: 'DEL ➔ BOM', airline: 'Air India', price: '₹4,500' },
      { route: 'BOM ➔ GOA', airline: 'IndiGo', price: '₹3,100' }
    ],
    restaurants: [
      { name: 'Karim\'s, Old Delhi', specialty: 'Mughlai Heritage' },
      { name: 'Gajalee, Mumbai', specialty: 'Coastal Seafood' }
    ],
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Lock entry slots for Taj Sunrise window early to avoid long queues.',
      'Deploy waterproof gear; West Coast is currently under active monsoon cycles.'
    ]
  },
  'Switzerland': {
    code: 'CH',
    timezone: 'Europe/Zurich',
    currency: 'CHF (Fr)',
    exchangeRate: '1 USD = 0.88 CHF',
    visa: 'Schengen requirements active. Turnaround time average is 12 working days.',
    weather: { temp: '19°C', humidity: '54%', uv: '3 (Low)', aqi: '12 (Pristine)' },
    budget: { lodging: 95000, flights: 65000, food: 25000, total: 185000 },
    hotels: [
      { name: 'The Dolder Grand, Zurich', rate: '5.0 ★', price: 'CHF 650/night' },
      { name: 'Chalet Zermatt Peak', rate: '4.9 ★', price: 'CHF 850/night' }
    ],
    flights: [
      { route: 'DEL ➔ ZRH', airline: 'Swiss Air', price: '₹62,000' },
      { route: 'ZRH ➔ GVA', airline: 'Swiss Connect', price: '₹8,500' }
    ],
    restaurants: [
      { name: 'Restaurant de l\'Hôtel de Ville', specialty: 'French Gastronomy' },
      { name: 'Fondue Stübli, Zermatt', specialty: 'Cheese Fondue' }
    ],
    images: [
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Purchase the Swiss Travel Pass to unlock unlimited train and boat transits.',
      'Track alpine trail webcams early morning for high visibility forecasts.'
    ]
  },
  'Japan': {
    code: 'JP',
    timezone: 'Asia/Tokyo',
    currency: 'JPY (¥)',
    exchangeRate: '1 USD = ¥154.20',
    visa: 'e-Visa options online. Fast-track biometrics active at Tokyo Narita.',
    weather: { temp: '26°C', humidity: '60%', uv: '5 (Moderate)', aqi: '18 (Optimal)' },
    budget: { lodging: 60000, flights: 55000, food: 20000, total: 135000 },
    hotels: [
      { name: 'Aman Tokyo', rate: '5.0 ★', price: '¥145,000/night' },
      { name: 'Park Hyatt, Kyoto', rate: '4.9 ★', price: '¥98,000/night' }
    ],
    flights: [
      { route: 'DEL ➔ NRT', airline: 'Japan Airlines', price: '₹58,000' },
      { route: 'HND ➔ ITM', airline: 'ANA Express', price: '₹9,200' }
    ],
    restaurants: [
      { name: 'Sukiyabashi Jiro, Ginza', specialty: 'Premium Omakase' },
      { name: 'Ichiran, Shibuya', specialty: 'Tonkotsu Ramen' }
    ],
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Load contactless digital cards onto Apple Wallet for local subway transit scans.',
      'Book Michelin-star sushi lounges at least 2 months in advance.'
    ]
  },
  'France': {
    code: 'FR',
    timezone: 'Europe/Paris',
    currency: 'EUR (€)',
    exchangeRate: '1 USD = 0.92 EUR',
    visa: 'Schengen requirements apply. Apply at least 15 days before travel cycles.',
    weather: { temp: '22°C', humidity: '50%', uv: '3 (Low)', aqi: '22 (Optimal)' },
    budget: { lodging: 70000, flights: 50000, food: 22000, total: 142000 },
    hotels: [
      { name: 'Ritz Paris', rate: '5.0 ★', price: '€1,200/night' },
      { name: 'Hôtel Plaza Athénée', rate: '4.8 ★', price: '€950/night' }
    ],
    flights: [
      { route: 'DEL ➔ CDG', airline: 'Air France', price: '₹55,000' },
      { route: 'CDG ➔ NCE', airline: 'EasyJet', price: '₹6,500' }
    ],
    restaurants: [
      { name: 'L\'Ambroisie, Paris', specialty: 'Classical Haute Cuisine' },
      { name: 'Le Comptoir du Relais', specialty: 'Bistronomy Specials' }
    ],
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Bypass heavy Eiffel/Louvre queues by purchasing structural passes online.',
      'Venture into Paris 11th Arrondissement blocks for local gourmet bakeries.'
    ]
  },
  'USA': {
    code: 'US',
    timezone: 'America/New_York',
    currency: 'USD ($)',
    exchangeRate: '1 USD = 1.00 USD',
    visa: 'Tourist B1/B2 visa required. Interview wait times vary by region.',
    weather: { temp: '28°C', humidity: '48%', uv: '7 (High)', aqi: '35 (Moderate)' },
    budget: { lodging: 85000, flights: 75000, food: 30000, total: 190000 },
    hotels: [
      { name: 'The Plaza, NYC', rate: '5.0 ★', price: '$850/night' },
      { name: 'Beverly Hills Hotel, LA', rate: '4.9 ★', price: '$950/night' }
    ],
    flights: [
      { route: 'DEL ➔ JFK', airline: 'United Airlines', price: '₹78,000' },
      { route: 'JFK ➔ LAX', airline: 'Delta Airlines', price: '₹14,500' }
    ],
    restaurants: [
      { name: 'Eleven Madison Park, NYC', specialty: 'Plant-based Degustation' },
      { name: 'Joe\'s Stone Crab, Miami', specialty: 'Fresh Stone Crab' }
    ],
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Keep track of regional time differences as transit routes span 4+ timezones.',
      'Leverage metro systems in Chicago and NYC to bypass gridlock delays.'
    ]
  },
  'Australia': {
    code: 'AU',
    timezone: 'Australia/Sydney',
    currency: 'AUD ($)',
    exchangeRate: '1 USD = 1.52 AUD',
    visa: 'Electronic Travel Authority (ETA) active. Approved instantly.',
    weather: { temp: '15°C', humidity: '58%', uv: '2 (Low)', aqi: '10 (Pristine)' },
    budget: { lodging: 65000, flights: 70000, food: 22000, total: 157000 },
    hotels: [
      { name: 'Park Hyatt Sydney', rate: '5.0 ★', price: 'AUD 880/night' },
      { name: 'The Calile, Brisbane', rate: '4.8 ★', price: 'AUD 450/night' }
    ],
    flights: [
      { route: 'DEL ➔ SYD', airline: 'Qantas Airways', price: '₹72,000' },
      { route: 'SYD ➔ MEL', airline: 'Virgin Australia', price: '₹6,800' }
    ],
    restaurants: [
      { name: 'Quay, Sydney Harbor', specialty: 'Modern Australian' },
      { name: 'Lune Croissanterie, Melbourne', specialty: 'Artisanal Croissants' }
    ],
    images: [
      'https://images.unsplash.com/photo-1524820197278-540916411e20?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Australian UV values are intense. Reapply sunscreen blocks regularly.',
      'Purchase tickets for Harbor ferries to secure premium sunset photography slots.'
    ]
  },
  'Brazil': {
    code: 'BR',
    timezone: 'America/Sao_Paulo',
    currency: 'BRL (R$)',
    exchangeRate: '1 USD = 5.12 BRL',
    visa: 'eVisa online required. Average verification averages 5 days.',
    weather: { temp: '29°C', humidity: '80%', uv: '8 (Very High)', aqi: '28 (Optimal)' },
    budget: { lodging: 45000, flights: 85000, food: 15000, total: 145000 },
    hotels: [
      { name: 'Copacabana Palace, Rio', rate: '5.0 ★', price: 'BRL 2,200/night' },
      { name: 'Rosewood São Paulo', rate: '4.9 ★', price: 'BRL 2,800/night' }
    ],
    flights: [
      { route: 'DEL ➔ GIG', airline: 'LATAM Airlines', price: '₹95,000' },
      { route: 'GIG ➔ GRU', airline: 'GOL Express', price: '₹7,200' }
    ],
    restaurants: [
      { name: 'D.O.M., São Paulo', specialty: 'Amazonian Fine Dining' },
      { name: 'Aprazível, Rio de Janeiro', specialty: 'Traditional Feijoada' }
    ],
    images: [
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Leverage rideshare channels rather than walking dark beach alleys at night.',
      'Secure travel insurance policies coverages before launching rainforest tours.'
    ]
  },
  'UAE': {
    code: 'AE',
    timezone: 'Asia/Dubai',
    currency: 'AED (د.إ)',
    exchangeRate: '1 USD = 3.67 AED',
    visa: 'Visa on arrival valid for major passport holders.',
    weather: { temp: '38°C', humidity: '45%', uv: '9 (Extreme)', aqi: '48 (Moderate)' },
    budget: { lodging: 55000, flights: 35000, food: 25000, total: 115000 },
    hotels: [
      { name: 'Burj Al Arab Jumeirah', rate: '5.0 ★', price: 'AED 4,500/night' },
      { name: 'Armani Hotel Dubai', rate: '4.8 ★', price: 'AED 1,800/night' }
    ],
    flights: [
      { route: 'DEL ➔ DXB', airline: 'Emirates', price: '₹22,000' },
      { route: 'DXB ➔ AUH', airline: 'Etihad Connect', price: '₹4,500' }
    ],
    restaurants: [
      { name: 'Al Mahara, Burj Al Arab', specialty: 'Seafood Classics' },
      { name: 'Arabian Tea House, Bastakiya', specialty: 'Emirati Breakfast' }
    ],
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=80'
    ],
    aiSuggestions: [
      'Schedule high-elevation visits (Burj Khalifa deck) for late afternoon sunset windows.',
      'Stay hydrated; thermal scales in noon hours hover above 40°C.'
    ]
  }
};

// Running Timezone Clock Component
const TimezoneClock = ({ timezone }) => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setTime(formatter.format(new Date()));
      } catch (e) {
        setTime(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);
  return <span className="font-mono text-teal-400 font-bold">{time}</span>;
};

// Live Animated Chart for Budget Metrics
const SmallBudgetChart = ({ lodging, flights, food }) => {
  const total = lodging + flights + food;
  return (
    <div className="flex flex-col gap-2 mt-2 bg-slate-950 p-3 rounded-2xl border border-white/5 font-mono text-[9px]">
      <div className="flex justify-between items-center text-slate-400 border-b border-white/5 pb-1">
        <span>BUDGET METER</span>
        <span className="text-white font-bold">₹{total.toLocaleString()}</span>
      </div>
      <div className="flex gap-2 items-end h-16 pt-2">
        <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
          <div className="w-full bg-teal-500/80 rounded-t-sm animate-pulse" style={{ height: `${(lodging/total)*100}%` }} />
          <span className="text-[6px] text-slate-500 uppercase">Lodging</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
          <div className="w-full bg-indigo-500/80 rounded-t-sm animate-pulse" style={{ height: `${(flights/total)*100}%` }} />
          <span className="text-[6px] text-slate-500 uppercase">Flights</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
          <div className="w-full bg-purple-500/80 rounded-t-sm animate-pulse" style={{ height: `${(food/total)*100}%` }} />
          <span className="text-[6px] text-slate-500 uppercase">Dining</span>
        </div>
      </div>
    </div>
  );
};

export const EarthEngine = () => {
  const { showToast } = useApp();
  const [selectedCountryName, setSelectedCountryName] = useState('India');
  const [viewMode, setViewMode] = useState('satellite'); // Toggle: 'satellite' or 'hologram'
  const [activeTab, setActiveTab] = useState('overview'); // Tabs: 'overview', 'flights', 'restaurants', 'weather', 'ai'

  const countryData = COUNTRY_DATABASE[selectedCountryName] || COUNTRY_DATABASE['India'];

  const handleCountrySelect = (name) => {
    setSelectedCountryName(name);
    showToast(`Focused orbital coordinates on ${name}.`, 'success');
  };

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* HUD Header */}
      <div className="flex flex-col gap-2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent blur-xl pointer-events-none" />
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          SYSTEM SCANNER ORBITAL CONTROL
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Sentient Globe Explorer
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl mt-0">
          Target countries to zoom cameras, trigger vertical coordinate highlight beacons, scan satellite textures, and pull local timezone index rates.
        </p>
      </div>

      {/* Main OS Panel layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        
        {/* Left column: Country Navigator Sidebar */}
        <div className="lg:col-span-3 p-5 rounded-3xl glass-neo border border-slate-200/50 dark:border-white/5 flex flex-col gap-4">
          <span className="text-[9px] font-mono text-slate-500 uppercase font-black tracking-widest">
            Coordinate Node Registry
          </span>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[460px] pr-1 scrollbar-thin">
            {Object.keys(COUNTRY_DATABASE).map((cName) => {
              const c = COUNTRY_DATABASE[cName];
              const isSelected = selectedCountryName.toLowerCase() === cName.toLowerCase();
              return (
                <button
                  key={cName}
                  onClick={() => handleCountrySelect(cName)}
                  className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-500/10 border-teal-500 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.15)]'
                      : 'bg-slate-950/40 border-white/5 hover:border-teal-500/20 text-slate-350'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{c.code === 'IN' ? '🇮🇳' : c.code === 'CH' ? '🇨🇭' : c.code === 'JP' ? '🇯🇵' : c.code === 'FR' ? '🇫🇷' : c.code === 'US' ? '🇺🇸' : c.code === 'AU' ? '🇦🇺' : c.code === 'BR' ? '🇧🇷' : '🇦🇪'}</span>
                    <span className="font-mono text-xs font-bold uppercase">{cName}</span>
                  </div>
                  <span className="text-[8px] font-mono text-slate-500">
                    {c.weather.temp}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto">
            <span className="text-[8px] font-mono text-slate-500 uppercase font-black block mb-2">Configure Viewport</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { setViewMode('satellite'); showToast('Loaded Satellite Texture grid.', 'info'); }}
                className={`py-2 px-3 rounded-xl border text-[9px] font-mono font-bold uppercase transition-colors cursor-pointer ${
                  viewMode === 'satellite' ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                SATELLITE
              </button>
              <button
                onClick={() => { setViewMode('hologram'); showToast('Rendered vector wireframe grid.', 'info'); }}
                className={`py-2 px-3 rounded-xl border text-[9px] font-mono font-bold uppercase transition-colors cursor-pointer ${
                  viewMode === 'hologram' ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                HOLOGRAM
              </button>
            </div>
          </div>
        </div>

        {/* Center column: Large Globe Container */}
        <div className="lg:col-span-5 p-5 rounded-3xl bg-slate-950 border border-slate-200/50 dark:border-white/5 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[500px]">
          <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
          
          <div className="w-full flex justify-between items-center z-10 font-mono text-[9px] border-b border-white/5 pb-2">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Activity size={12} className="text-teal-400 animate-pulse" />
              <span>ORBITAL_SCAN_SYS // LIVE</span>
            </div>
            <span className="text-teal-400 font-bold uppercase">ZOOM LEVEL: ACTIVE</span>
          </div>

          <div className="w-full flex-1 relative flex items-center justify-center">
            <FuturisticGlobe 
              selectedCountry={selectedCountryName} 
              viewMode={viewMode}
              onSelectCountry={handleCountrySelect}
            />
          </div>

          <div className="w-full flex items-center gap-2 border-t border-white/5 pt-2.5 z-10 font-mono text-[9px] text-slate-500 select-none">
            <Compass size={12} className="animate-spin-slow text-teal-400" />
            <span>DRAG SCENE TO SPIN • SELECT BEACONS TO FOCUS CHANNELS</span>
          </div>
        </div>

        {/* Right column: Country Stats details tabs & forms */}
        <div className="lg:col-span-4 p-5 rounded-3xl glass-neo border border-slate-200/50 dark:border-white/5 flex flex-col gap-4 text-xs">
          
          {/* Active target details */}
          <div className="flex justify-between items-start border-b border-white/5 pb-3">
            <div>
              <span className="text-[8px] font-mono text-teal-400 font-bold uppercase tracking-widest">Selected Target</span>
              <h3 className="font-display font-black text-xl text-slate-900 dark:text-white leading-tight mt-0.5">{selectedCountryName.toUpperCase()}</h3>
              <p className="text-[10px] text-slate-500 font-mono mt-1">TIMEZONE: {countryData.timezone}</p>
            </div>
            <div className="text-right">
              <TimezoneClock timezone={countryData.timezone} />
              <span className="text-[8px] text-slate-500 font-mono block mt-1 uppercase">LOCAL SEC TIME</span>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="flex border-b border-white/5 overflow-x-auto gap-2 pb-1 scrollbar-thin">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'flights', label: 'Flights/Hotels' },
              { id: 'restaurants', label: 'Food/Budget' },
              { id: 'weather', label: 'Weather/Visa' },
              { id: 'ai', label: 'Directives' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-1 px-1.5 font-mono text-[9.5px] font-bold uppercase whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === tab.id ? 'border-b border-teal-450 text-teal-450' : 'text-slate-500 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab contents */}
          <div className="flex-1 flex flex-col gap-4 justify-between pr-1 overflow-y-auto max-h-[340px] scrollbar-thin">
            
            {activeTab === 'overview' && (
              <div className="flex flex-col gap-3.5 text-left">
                {/* Images grid */}
                <div className="grid grid-cols-2 gap-3.5">
                  {countryData.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={selectedCountryName}
                      className="w-full h-24 object-cover rounded-xl border border-white/5 hover:scale-102 transition-transform duration-300"
                    />
                  ))}
                </div>
                {/* Currency rates */}
                <div className="p-3 bg-slate-950 border border-white/5 rounded-2xl flex flex-col gap-1 text-[9px] font-mono leading-relaxed">
                  <div className="text-slate-500 uppercase tracking-widest text-[8px]">Currency Exchange rate</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white font-bold">1 USD</span>
                    <span className="text-teal-400 font-bold">{countryData.exchangeRate} {countryData.currency.split(' ')[0]}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'flights' && (
              <div className="flex flex-col gap-3.5 text-left">
                {/* Flight lines */}
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase font-black tracking-widest block mb-2">Transit Flights</span>
                  <div className="flex flex-col gap-2">
                    {countryData.flights.map((f, i) => (
                      <div key={i} className="p-2.5 bg-slate-950 border border-white/5 rounded-xl flex justify-between items-center text-[10px] font-mono">
                        <div>
                          <span className="text-white font-bold block">{f.route}</span>
                          <span className="text-[8.5px] text-slate-500">{f.airline}</span>
                        </div>
                        <span className="text-teal-400 font-bold shrink-0">{f.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Hotels */}
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase font-black tracking-widest block mb-2">Ranked Accommodations</span>
                  <div className="flex flex-col gap-2">
                    {countryData.hotels.map((h, i) => (
                      <div key={i} className="p-2.5 bg-slate-950 border border-white/5 rounded-xl flex justify-between items-center text-[10px] font-mono">
                        <div>
                          <span className="text-white font-bold block truncate max-w-[160px]">{h.name}</span>
                          <span className="text-[8.5px] text-slate-500">Rating: {h.rate}</span>
                        </div>
                        <span className="text-indigo-400 font-bold shrink-0">{h.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'restaurants' && (
              <div className="flex flex-col gap-3.5 text-left">
                {/* Specialty food */}
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase font-black tracking-widest block mb-2">Culinary Specials</span>
                  <div className="flex flex-col gap-2">
                    {countryData.restaurants.map((r, i) => (
                      <div key={i} className="p-2.5 bg-slate-950 border border-white/5 rounded-xl flex justify-between items-center text-[10px] font-mono">
                        <span className="text-white font-bold">{r.name}</span>
                        <span className="text-teal-400 font-medium shrink-0">{r.specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Budget visual */}
                <SmallBudgetChart 
                  lodging={countryData.budget.lodging} 
                  flights={countryData.budget.flights} 
                  food={countryData.budget.food} 
                />
              </div>
            )}

            {activeTab === 'weather' && (
              <div className="flex flex-col gap-3 text-left">
                {/* Weather cards */}
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase font-black tracking-widest block mb-2">Environmental Scan</span>
                  <div className="grid grid-cols-2 gap-2.5 text-[9.5px] font-mono">
                    <div className="p-2 bg-slate-950 border border-white/5 rounded-xl">
                      <span className="text-slate-500 block text-[7.5px] uppercase">Temperature</span>
                      <span className="text-white font-bold">{countryData.weather.temp}</span>
                    </div>
                    <div className="p-2 bg-slate-950 border border-white/5 rounded-xl">
                      <span className="text-slate-500 block text-[7.5px] uppercase">Humidity</span>
                      <span className="text-white font-bold">{countryData.weather.humidity}</span>
                    </div>
                    <div className="p-2 bg-slate-950 border border-white/5 rounded-xl">
                      <span className="text-slate-500 block text-[7.5px] uppercase">UV Index</span>
                      <span className="text-white font-bold">{countryData.weather.uv}</span>
                    </div>
                    <div className="p-2 bg-slate-950 border border-white/5 rounded-xl">
                      <span className="text-slate-500 block text-[7.5px] uppercase">Air Quality</span>
                      <span className="text-white font-bold truncate block">{countryData.weather.aqi}</span>
                    </div>
                  </div>
                </div>
                {/* Visa policy */}
                <div className="p-2.5 bg-slate-950 border border-white/5 rounded-2xl flex flex-col gap-1 text-[9.5px] font-mono leading-relaxed mt-1">
                  <div className="text-slate-550 uppercase tracking-widest text-[8px] font-black">Visa Policy</div>
                  <p className="text-slate-300 mt-1">{countryData.visa}</p>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="flex flex-col gap-3 text-left">
                <span className="text-[9px] font-mono text-slate-500 uppercase font-black tracking-widest block">AI Travel Directives</span>
                <div className="flex flex-col gap-2.5">
                  {countryData.aiSuggestions.map((sug, i) => (
                    <div key={i} className="p-3 bg-teal-500/5 border border-teal-500/10 rounded-2xl leading-relaxed text-[10px] text-slate-300 font-mono flex gap-2">
                      <Sparkles size={12} className="text-teal-400 shrink-0 mt-0.5" />
                      <span>{sug}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Validation note */}
          <div className="border-t border-white/5 pt-3.5 flex items-start gap-2.5 font-mono text-[9px] text-slate-550 leading-relaxed text-left shrink-0">
            <ShieldCheck className="text-emerald-400 shrink-0 mt-0.5" size={13} />
            <span>
              All parameters are compiled and synced automatically via localized regional centers.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
