import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plane, Calendar, SlidersHorizontal, ArrowUpDown, X, Grid, ShieldCheck, Ticket } from 'lucide-react';
import { FlightCard } from '../components/FlightCard';
import { mockFlights } from '../data/mockData';
import { FlightListSkeleton } from '../components/SkeletonLoader';
import { useApp } from '../context/AppContext';

// Procedural Flight Generator to support unlimited global city/state searches & class multipliers
const generateMockFlights = (fromVal, toVal, selectedClass) => {
  const fromClean = fromVal ? fromVal.trim() : 'New York';
  const toClean = toVal ? toVal.trim() : 'Tokyo';

  const getCode = (val) => {
    const parenMatch = val.match(/\(([^)]+)\)/);
    if (parenMatch) return parenMatch[1].toUpperCase();
    const clean = val.replace(/[^a-zA-Z\s]/g, '').trim();
    if (clean.length >= 3) {
      return clean.substring(0, 3).toUpperCase();
    }
    return 'LHR';
  };

  const getCityName = (val) => {
    const parenIndex = val.indexOf('(');
    if (parenIndex !== -1) {
      return val.substring(0, parenIndex).trim();
    }
    return val.trim();
  };

  const fromCode = getCode(fromClean);
  const toCode = getCode(toClean);
  const fromCityName = getCityName(fromClean);
  const toCityName = getCityName(toClean);
  const finalToCode = fromCode === toCode ? `${toCode}2` : toCode;

  const domesticAirlines = [
    { name: 'Vistara', code: 'UK', basePrice: 6200 },
    { name: 'Air India', code: 'AI', basePrice: 7500 },
    { name: 'IndiGo Airlines', code: '6E', basePrice: 5000 },
    { name: 'Akasa Air', code: 'QP', basePrice: 4800 },
    { name: 'SpiceJet', code: 'SG', basePrice: 4500 }
  ];

  const internationalAirlines = [
    { name: 'Emirates', code: 'EK', basePrice: 45000 },
    { name: 'Qatar Airways', code: 'QR', basePrice: 48000 },
    { name: 'Singapore Airlines', code: 'SQ', basePrice: 42000 },
    { name: 'British Airways', code: 'BA', basePrice: 38000 },
    { name: 'Japan Airlines', code: 'JL', basePrice: 52000 },
    { name: 'Lufthansa', code: 'LH', basePrice: 40000 },
    { name: 'Delta Air Lines', code: 'DL', basePrice: 46000 }
  ];

  const internationalKeywords = ['jfk', 'hnd', 'lhr', 'dxb', 'sin', 'nrt', 'cdg', 'lax', 'sfo', 'hkg', 'syd', 'tokyo', 'york', 'london', 'paris', 'dubai', 'singapore', 'usa', 'japan', 'uk', 'emirates', 'france', 'germany'];
  const isInternational = internationalKeywords.some(k => 
    fromClean.toLowerCase().includes(k) || toClean.toLowerCase().includes(k)
  ) || (fromCode !== 'DEL' && fromCode !== 'BOM' && fromCode !== 'BLR' && fromCode !== 'MAA' && fromCode !== 'CCU' && fromCode !== 'STV' && fromCode !== 'COK' && fromCode !== 'SXR' && 
        toCode !== 'DEL' && toCode !== 'BOM' && toCode !== 'BLR' && toCode !== 'MAA' && toCode !== 'CCU' && toCode !== 'STV' && toCode !== 'COK' && toCode !== 'SXR');

  const selectedAirlines = isInternational ? internationalAirlines : domesticAirlines;

  let classMultiplier = 1.0;
  if (selectedClass === 'Premium Economy') classMultiplier = 1.6;
  if (selectedClass === 'Business Class') classMultiplier = 4.2;
  if (selectedClass === 'First Class') classMultiplier = 8.5;

  return selectedAirlines.map((airline, idx) => {
    const randomFactor = 0.85 + (Math.random() * 0.3); 
    const stops = idx === 0 ? 0 : (idx === 2 ? 2 : (idx % 2 === 0 ? 1 : 0));
    const stopPriceFactor = stops === 0 ? 1.1 : (stops === 1 ? 0.9 : 0.8);
    let price = Math.round(airline.basePrice * classMultiplier * randomFactor * stopPriceFactor);
    
    if (selectedClass === 'First Class' && price < 40000 && !isInternational) {
      price = Math.round(35000 + Math.random() * 10000);
    }
    
    let durationHours = isInternational ? (6 + idx * 3) : (1 + idx * 0.5);
    if (stops > 0) durationHours += stops * 2; 
    const durationMinutes = Math.round(Math.random() * 59);
    const durationStr = `${Math.floor(durationHours)}h ${durationMinutes}m`;

    const departures = ['06:15 AM', '09:30 AM', '11:45 AM', '02:30 PM', '06:40 PM', '09:15 PM', '11:00 PM'];
    const departureTime = departures[idx % departures.length];
    
    const parseTime = (tStr) => {
      const [time, ampm] = tStr.split(' ');
      let [h, m] = time.split(':').map(Number);
      if (ampm === 'PM' && h !== 12) h += 12;
      if (ampm === 'AM' && h === 12) h = 0;
      return h * 60 + m;
    };
    const formatTime = (minutes) => {
      let h = Math.floor(minutes / 60) % 24;
      const m = minutes % 60;
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12;
      if (h === 0) h = 12;
      const hStr = h < 10 ? `${h}` : `${h}`;
      const mStr = m < 10 ? `0${m}` : `${m}`;
      return `${hStr}:${mStr} ${ampm}`;
    };

    const depMinutes = parseTime(departureTime);
    const arrMinutes = depMinutes + Math.round(durationHours * 60) + durationMinutes;
    const arrivalTime = formatTime(arrMinutes);

    const layoverCities = isInternational ? ['DXB', 'SIN', 'DOH', 'LHR', 'AMS'] : ['DEL', 'BOM', 'BLR'];
    const via = stops > 0 ? layoverCities[idx % layoverCities.length] : undefined;
    const flightNum = `${airline.code}-${100 + Math.floor(Math.random() * 899)}`;

    let amenities = ['Free Wi-Fi', 'In-seat Power', 'USB Port', 'Meals Included'];
    let baggage = '1x Checked Bag (23kg)';
    if (selectedClass === 'Premium Economy') {
      amenities = ['High-speed Wi-Fi', 'Legroom Space Plus', 'Select Dining', 'USB-C Charging'];
      baggage = '1x Checked Bag (32kg)';
    } else if (selectedClass === 'Business Class') {
      amenities = ['Holographic Wi-Fi', '180° Flatbed Pod', 'Multi-course Dining', 'Wireless Charge'];
      baggage = '2x Checked Bags (32kg each)';
    } else if (selectedClass === 'First Class') {
      amenities = ['Sovereign Suite', 'Personal Chef', 'Ambient Sound Block', 'Massage Chair'];
      baggage = '3x Checked Bags (40kg each)';
    }

    return {
      id: `fl-proc-${idx}-${fromCode}-${toCode}`,
      airline: airline.name,
      flightNumber: flightNum,
      from: fromCode,
      fromCity: fromCityName,
      to: finalToCode,
      toCity: toCityName,
      departureTime,
      arrivalTime,
      duration: durationStr,
      stops,
      via,
      price,
      class: selectedClass,
      amenities,
      baggage,
      gate: `${['A', 'B', 'C', 'D'][idx % 4]}${Math.floor(10 + Math.random() * 20)}`
    };
  });
};

export const Flights = () => {
  const { showToast, user } = useApp();
  const [fromCity, setFromCity] = useState('New York (JFK)');
  const [toCity, setToCity] = useState('Tokyo (HND)');
  const [searchDate, setSearchDate] = useState('2026-06-25');
  const [cabinClass, setCabinClass] = useState(() => {
    try {
      const stored = localStorage.getItem('tv_twin_prefs');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.flightClass === 'first') return 'First Class';
        if (parsed.flightClass === 'business') return 'Business Class';
        if (parsed.flightClass === 'premium') return 'Premium Economy';
      }
    } catch(e) {}
    return 'Economy';
  });
  
  // Set initial flights procedurally
  const [flights, setFlights] = useState(() => {
    const initialClass = (() => {
      try {
        const stored = localStorage.getItem('tv_twin_prefs');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.flightClass === 'first') return 'First Class';
          if (parsed.flightClass === 'business') return 'Business Class';
          if (parsed.flightClass === 'premium') return 'Premium Economy';
        }
      } catch(e) {}
      return 'Economy';
    })();
    return generateMockFlights('New York (JFK)', 'Tokyo (HND)', initialClass);
  });

  const [loading, setLoading] = useState(false);
  const [priceFilter, setPriceFilter] = useState(() => {
    const initialFlights = generateMockFlights('New York (JFK)', 'Tokyo (HND)', 'Economy');
    return initialFlights.reduce((max, f) => f.price > max ? f.price : max, 120000);
  });
  
  const [stopsFilter, setStopsFilter] = useState('all'); 
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookedTicket, setBookedTicket] = useState(null);

  // Set default price filter when flights change
  useEffect(() => {
    if (flights.length > 0) {
      const maxP = Math.max(...flights.map(f => f.price));
      setPriceFilter(maxP);
    }
  }, [flights]);

  // Scaled Trend Chart prices matching current search and class tier
  const averagePrice = flights.length > 0 
    ? flights.reduce((sum, f) => sum + f.price, 0) / flights.length 
    : 50000;

  // Generate 15-day price forecast points matching route pricing index
  const forecastPoints = [
    Math.round(averagePrice * 0.96),
    Math.round(averagePrice * 0.92),
    Math.round(averagePrice * 0.86),
    Math.round(averagePrice * 0.80), // lowest price index
    Math.round(averagePrice * 0.84),
    Math.round(averagePrice * 0.90),
    Math.round(averagePrice * 1.00), // today (index 6)
    Math.round(averagePrice * 1.06),
    Math.round(averagePrice * 1.12),
    Math.round(averagePrice * 1.15),
    Math.round(averagePrice * 1.08),
    Math.round(averagePrice * 1.02),
    Math.round(averagePrice * 0.95),
    Math.round(averagePrice * 0.91),
    Math.round(averagePrice * 0.88),
  ];
  const maxForecast = Math.max(...forecastPoints);
  const minForecast = Math.min(...forecastPoints);
  const todayPrice = forecastPoints[6];
  const isBestTime = todayPrice <= minForecast * 1.05;

  // Calculate SVG line paths dynamically
  const svgPath = forecastPoints.map((p, idx) => {
    const x = (idx / 14) * 300;
    const y = 90 - ((p - minForecast) / (maxForecast - minForecast || 1)) * 80;
    return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const newFlights = generateMockFlights(fromCity, toCity, cabinClass);
      setFlights(newFlights);
      setLoading(false);
      showToast(`Found ${newFlights.length} flights matching query.`);
    }, 800);
  };

  // Seat layout configuration per cabin class
  const getSeatLayout = () => {
    if (!selectedFlight) return null;
    const seatPref = localStorage.getItem('tv_seat_pref') || 'Window';
    const isAislePref = seatPref.toLowerCase().includes('aisle');

    if (selectedFlight.class === 'First Class') {
      return {
        columns: ['A', 'aisle', 'B', 'C', 'aisle', 'D'],
        rows: [1, 2],
        description: "Sovereign Quantum Suite - Fully enclosed cabin with sliding virtual door and 180° lie-flat zero-gravity memory bed.",
        preferredSeats: isAislePref ? ['1B', '1C', '2B', '2C'] : ['1A', '1D', '2A', '2D'],
        occupied: ['1B', '2A'] 
      };
    } else if (selectedFlight.class === 'Business Class') {
      return {
        columns: ['A', 'B', 'aisle', 'C', 'D'],
        rows: [3, 4, 5, 6],
        description: "Nebula Reclining Pod - 180° flatbed shell with built-in massage control and personal media lounge.",
        preferredSeats: isAislePref ? ['3B', '3C', '4B', '4C', '5B', '5C', '6B', '6C'] : ['3A', '3D', '4A', '4D', '5A', '5D', '6A', '6D'],
        occupied: ['3B', '5A', '6C']
      };
    } else if (selectedFlight.class === 'Premium Economy') {
      return {
        columns: ['A', 'B', 'aisle', 'C', 'D', 'E', 'aisle', 'F', 'G'],
        rows: [7, 8, 9, 10],
        description: "Stratosphere Recliner - Extra-wide ergonomic seat with 38\" pitch, legrests, and charging dock.",
        preferredSeats: isAislePref ? ['7B', '7F', '8B', '8F', '9B', '9F'] : ['7A', '7G', '8A', '8G', '9A', '9G'],
        occupied: ['7B', '8G', '10A']
      };
    } else { 
      return {
        columns: ['A', 'B', 'C', 'aisle', 'D', 'E', 'F'],
        rows: [12, 14, 15, 16, 17, 18],
        description: "Standard Smart Seat - Multi-adjust neck rest, mesh seating, and personal USB power station.",
        preferredSeats: isAislePref ? ['12C', '12D', '14C', '14D', '15C', '15D'] : ['12A', '12F', '14A', '14F', '15A', '15F'],
        occupied: ['12A', '14F', '15B', '16C', '17D', '18A']
      };
    }
  };

  const startBookingFlow = (flight) => {
    setSelectedFlight(flight);
    setBookedTicket(null);
    
    // Resolve seat layout dynamically and auto-select matching user preferences
    const seatPref = localStorage.getItem('tv_seat_pref') || 'Window';
    const isAislePref = seatPref.toLowerCase().includes('aisle');
    let tempLayout;

    if (flight.class === 'First Class') {
      tempLayout = {
        preferredSeats: isAislePref ? ['1B', '1C', '2B', '2C'] : ['1A', '1D', '2A', '2D'],
        occupied: ['1B', '2A']
      };
    } else if (flight.class === 'Business Class') {
      tempLayout = {
        preferredSeats: isAislePref ? ['3B', '3C', '4B', '4C', '5B', '5C', '6B', '6C'] : ['3A', '3D', '4A', '4D', '5A', '5D', '6A', '6D'],
        occupied: ['3B', '5A', '6C']
      };
    } else if (flight.class === 'Premium Economy') {
      tempLayout = {
        preferredSeats: isAislePref ? ['7B', '7F', '8B', '8F', '9B', '9F'] : ['7A', '7G', '8A', '8G', '9A', '9G'],
        occupied: ['7B', '8G', '10A']
      };
    } else {
      tempLayout = {
        preferredSeats: isAislePref ? ['12C', '12D', '14C', '14D', '15C', '15D'] : ['12A', '12F', '14A', '14F', '15A', '15F'],
        occupied: ['12A', '14F', '15B', '16C', '17D', '18A']
      };
    }

    const availablePrefSeat = tempLayout.preferredSeats.find(s => !tempLayout.occupied.includes(s));
    if (availablePrefSeat) {
      setSelectedSeat(availablePrefSeat);
    } else {
      setSelectedSeat(flight.class === 'First Class' ? '1A' : (flight.class === 'Business Class' ? '3A' : '12A'));
    }
  };

  const confirmBooking = () => {
    if (!selectedSeat) {
      showToast('Please select a seat to continue.', 'error');
      return;
    }
    const ticketId = 'TV-' + Math.floor(100000 + Math.random() * 900000);
    const passengerName = user?.name || user?.username || 'Alex Mercer';
    setBookedTicket({
      ...selectedFlight,
      seat: selectedSeat,
      ticketId,
      passengerName,
      gate: selectedFlight.gate || 'B22'
    });
    showToast('Flight booked successfully! Boarding pass generated.');
  };

  // Filter Logic
  const filteredFlights = flights.filter(f => {
    const matchesPrice = f.price <= priceFilter;
    const matchesStops = stopsFilter === 'all' || 
                         (stopsFilter === 'direct' && f.stops === 0) ||
                         (stopsFilter === 'stops' && f.stops > 0);
    return matchesPrice && matchesStops;
  });

  // Safe pricing ranges for filter sliders
  const minPrice = flights.length > 0 ? Math.min(...flights.map(f => f.price)) : 2000;
  const maxPrice = flights.length > 0 ? Math.max(...flights.map(f => f.price)) : 120000;
  const sliderMin = Math.max(1000, Math.round(minPrice * 0.8));
  const sliderMax = Math.round(maxPrice * 1.2);
  const sliderStep = Math.max(100, Math.round((sliderMax - sliderMin) / 25));

  const layout = getSeatLayout();
  const gridColsClass = layout ? (
    layout.columns.length === 6 ? 'grid-cols-6' :
    layout.columns.length === 9 ? 'grid-cols-9' :
    layout.columns.length === 7 ? 'grid-cols-7' : 'grid-cols-5'
  ) : 'grid-cols-5';

  const getPassTheme = (cls) => {
    if (cls === 'First Class') {
      return {
        bg: 'bg-amber-500/5 dark:bg-amber-950/20',
        border: 'border-amber-500/30',
        text: 'text-amber-600 dark:text-amber-400',
        badge: 'bg-amber-500/10 text-amber-500 border-amber-500/20'
      };
    }
    if (cls === 'Business Class') {
      return {
        bg: 'bg-indigo-500/5 dark:bg-indigo-950/20',
        border: 'border-indigo-500/30',
        text: 'text-indigo-600 dark:text-indigo-400',
        badge: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
      };
    }
    if (cls === 'Premium Economy') {
      return {
        bg: 'bg-cyan-500/5 dark:bg-cyan-950/20',
        border: 'border-cyan-500/30',
        text: 'text-cyan-600 dark:text-cyan-400',
        badge: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'
      };
    }
    return {
      bg: 'bg-teal-500/5 dark:bg-teal-950/20',
      border: 'border-teal-500/30',
      text: 'text-teal-600 dark:text-teal-400',
      badge: 'bg-teal-500/10 text-teal-500 border-teal-500/20'
    };
  };

  const passTheme = bookedTicket ? getPassTheme(bookedTicket.class) : null;

  return (
    <div className="py-4 text-left flex flex-col gap-8">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Flight Comparison & Booking
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Search, compare, and book round-trip or one-way flights with top airlines. Use price trends to book on the cheapest day.
        </p>
      </div>

      {/* Flight Search Form Panel */}
      <form onSubmit={handleSearch} className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm grid grid-cols-1 sm:grid-cols-5 gap-4 items-end">
        <div className="flex flex-col gap-1.5 col-span-1">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">From</label>
          <input
            type="text"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-slate-200"
            placeholder="Origin State or City"
          />
        </div>
        <div className="flex flex-col gap-1.5 col-span-1">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">To</label>
          <input
            type="text"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-slate-200"
            placeholder="Destination State or City"
          />
        </div>
        <div className="flex flex-col gap-1.5 col-span-1">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Departure Date</label>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-slate-200"
          />
        </div>
        <div className="flex flex-col gap-1.5 col-span-1">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Cabin Class</label>
          <select
            value={cabinClass}
            onChange={(e) => setCabinClass(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-slate-200"
          >
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business Class">Business Class</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-teal-655 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow"
        >
          <Search size={14} /> Search Flights
        </button>
      </form>

      {/* Quantum Price & Crowd Predictor (Vercel Production Upgrade) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-md text-white animate-in fade-in duration-300">
        
        {/* Panel 1: Monthly Forecast Chart */}
        <div className="flex flex-col gap-3 md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6 text-left">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest font-black">ANALYSIS: TICKET_INDEX</span>
              <h4 className="font-bold text-sm mt-0.5 uppercase tracking-wide">Forecasting Matrix</h4>
            </div>
            <span className="text-[8px] bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded font-mono font-bold">15D TICKET RANGE</span>
          </div>
          
          <div className="relative h-28 w-full mt-2 bg-slate-950/60 rounded-2xl border border-white/5 p-3 flex items-center justify-center">
            {/* SVG line graph */}
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Shaded Area under the curve */}
              <path
                d={`${svgPath} L 300 100 L 0 100 Z`}
                fill="url(#chartGlow)"
              />
              {/* Glowing Line */}
              <path
                d={svgPath}
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2.5"
                className="drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
              />
              
              {/* Circles on lowest point and today's point */}
              {forecastPoints.map((p, idx) => {
                const x = (idx / 14) * 300;
                const y = 90 - ((p - minForecast) / (maxForecast - minForecast || 1)) * 80;
                const isToday = idx === 6;
                const isLowest = p === minForecast;
                if (!isToday && !isLowest) return null;
                return (
                  <circle
                    key={idx}
                    cx={x}
                    cy={y}
                    r={isToday ? 4 : 3.5}
                    fill={isToday ? '#0ea5e9' : '#10b981'}
                    className={isToday ? "animate-pulse" : ""}
                  />
                );
              })}
            </svg>
            
            {/* Overlay labels */}
            <div className="absolute top-2 left-3 text-[8.5px] font-mono text-slate-500">MAX: ₹{maxForecast.toLocaleString('en-IN')}</div>
            <div className="absolute bottom-2 left-3 text-[8.5px] font-mono text-slate-500">MIN: ₹{minForecast.toLocaleString('en-IN')}</div>
            <div className="absolute bottom-2 right-3 text-[8.5px] font-mono text-sky-400 font-bold">TODAY: ₹{todayPrice.toLocaleString('en-IN')}</div>
          </div>
        </div>

        {/* Panel 2: AI Purchase Advisory */}
        <div className="flex flex-col gap-2.5 md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:px-6 text-left">
          <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest font-black">DECISION: QUANTUM_ADVISOR</span>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider ${
              isBestTime
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                : 'bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
            }`}>
              {isBestTime ? 'BUY NOW 🚀' : 'HOLD / WAIT 🛑'}
            </span>
            <div className="flex flex-col font-mono text-[10px]">
              <span className="text-slate-400">CONFIDENCE</span>
              <span className="font-bold text-slate-100">{isBestTime ? '96%' : '92%'} CONFIDENCE</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-semibold">
            {isBestTime 
              ? `Prices are currently at their lowest historical channel index for this flight sector. Buy now to secure direct cabins.`
              : `AI forecasting predicts ticket costs will drop by approximately 12% over the next 4 days as airline systems release unbooked cargo seats.`
            }
          </p>
        </div>

        {/* Panel 3: Crowd Density & Airport Queues */}
        <div className="flex flex-col gap-2.5 md:col-span-1 md:pl-6 text-left">
          <span className="text-[9px] font-mono text-sky-400 uppercase tracking-widest font-black">CROWD: PORT_DENSITY</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-white font-mono">{isBestTime ? 'Low' : 'Peak'}</span>
            <span className="text-[10px] text-slate-400 font-semibold font-mono">SECTOR LOAD</span>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Security Queue Wait</span>
              <span className="font-bold text-slate-200">{isBestTime ? '8 mins' : '34 mins'}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                  isBestTime ? 'bg-emerald-500 w-1/4' : 'bg-rose-500 w-3/4 animate-pulse'
                }`}
              />
            </div>
            <span className="text-[9px] text-slate-500 font-mono mt-0.5 leading-snug">
              ℹ️ Recommendation: Cheapest flight departure window is {isBestTime ? 'immediately active' : 'opening next Tuesday'}.
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid Content (Filters + Results) */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Flight Filters Panel */}
        <aside className="w-full lg:w-64 shrink-0 p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300">Filters</h4>
            <button 
              onClick={() => { setPriceFilter(maxPrice); setStopsFilter('all'); }} 
              className="text-[10px] font-bold text-teal-500 uppercase hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Stops */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Stops</span>
            <div className="flex flex-col gap-2.5 text-xs font-semibold">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stops"
                  checked={stopsFilter === 'all'}
                  onChange={() => setStopsFilter('all')}
                  className="rounded-full text-teal-655 focus:ring-teal-500"
                />
                <span>All Flights</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stops"
                  checked={stopsFilter === 'direct'}
                  onChange={() => setStopsFilter('direct')}
                  className="rounded-full text-teal-655 focus:ring-teal-500"
                />
                <span>Non-stop only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stops"
                  checked={stopsFilter === 'stops'}
                  onChange={() => setStopsFilter('stops')}
                  className="rounded-full text-teal-655 focus:ring-teal-500"
                />
                <span>1+ Stops</span>
              </label>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>Max Budget</span>
              <span className="text-teal-500 font-bold">₹{priceFilter.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={sliderMin}
              max={sliderMax}
              step={sliderStep}
              value={priceFilter}
              onChange={(e) => setPriceFilter(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </aside>

        {/* Flight results */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          {loading ? (
            <FlightListSkeleton count={4} />
          ) : filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} onBook={startBookingFlow} />
            ))
          ) : (
            <div className="py-12 text-center rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 p-6">
              <p className="text-sm text-slate-400">No flights found matching your budget limits.</p>
            </div>
          )}
        </div>
      </div>

      {/* Seat Selection & Boarding Pass Booking Modal */}
      <AnimatePresence>
        {selectedFlight && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFlight(null)}
              className="fixed inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl p-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-850 dark:text-slate-100">
                    {!bookedTicket ? 'Select Seat' : 'Booking Complete'}
                  </h3>
                  <span className="text-xs text-slate-400">{selectedFlight.airline} • {selectedFlight.flightNumber} • {selectedFlight.class}</span>
                </div>
                <button
                  onClick={() => setSelectedFlight(null)}
                  className="p-1 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <X size={16} />
                </button>
              </div>

              {!bookedTicket ? (
                /* Seat Layout selection screen */
                <div className="flex flex-col gap-6">
                  {/* Seat Grid Layout */}
                  {layout && (
                    <div className="flex flex-col items-center gap-4 bg-slate-50 dark:bg-slate-950/80 p-6 rounded-2xl border border-slate-150 dark:border-slate-850">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Front of Aircraft</span>
                      <div className={`grid ${gridColsClass} gap-2.5 max-w-full overflow-x-auto p-1`}>
                        {/* Row labels */}
                        {layout.columns.map((col, cIndex) => {
                          if (col === 'aisle') return <div key={cIndex} className="w-8" />;
                          return <div key={cIndex} className="w-8 font-bold text-[10px] text-slate-400 text-center">{col}</div>;
                        })}

                        {/* Rows of seats */}
                        {layout.rows.map((rowNum) => {
                          return (
                            <React.Fragment key={rowNum}>
                              {layout.columns.map((col, cIndex) => {
                                if (col === 'aisle') {
                                  return (
                                    <div key={cIndex} className="w-8 flex items-center justify-center font-bold text-[9px] text-slate-400 font-mono">
                                      {rowNum}
                                    </div>
                                  );
                                }
                                
                                const seatId = `${rowNum}${col}`;
                                const isBooked = layout.occupied.includes(seatId);
                                const isChosen = selectedSeat === seatId;
                                
                                return (
                                  <button
                                    key={cIndex}
                                    type="button"
                                    disabled={isBooked}
                                    onClick={() => setSelectedSeat(seatId)}
                                    className={`w-8 h-8 rounded-lg text-[9px] font-bold flex items-center justify-center border transition-all ${
                                      isBooked 
                                        ? 'bg-slate-200 border-slate-200 text-slate-400 dark:bg-slate-800 dark:border-slate-800 cursor-not-allowed opacity-50'
                                        : isChosen
                                        ? 'bg-teal-500 border-teal-500 text-white shadow-md shadow-teal-500/20'
                                        : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100/50'
                                    }`}
                                  >
                                    {seatId}
                                  </button>
                                );
                              })}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Seat Class Description */}
                  {layout && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-455 text-center italic px-4 bg-slate-50 dark:bg-slate-950/40 py-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      {layout.description}
                    </p>
                  )}

                  {/* Seat Selection Legend */}
                  <div className="flex justify-center gap-6 text-[10px] font-semibold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded border border-slate-200" />
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-slate-200 dark:bg-slate-800 opacity-50" />
                      <span>Occupied</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-teal-500" />
                      <span>Selected</span>
                    </div>
                  </div>

                  <button
                    onClick={confirmBooking}
                    className="w-full py-3.5 bg-teal-655 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors mt-2"
                  >
                    Confirm Booking (₹{selectedFlight.price.toLocaleString('en-IN')})
                  </button>
                </div>
              ) : (
                /* Boarding pass generated card layout */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-6"
                >
                  <div className={`rounded-2xl border-2 border-dashed ${passTheme.border} ${passTheme.bg} p-6 flex flex-col gap-6 text-slate-850 dark:text-slate-100 relative`}>
                    
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Ticket className={passTheme.text} size={18} />
                        <span className="text-xs font-extrabold uppercase tracking-widest font-display">TravelVerse Boarding Pass</span>
                      </div>
                      <span className={`text-xs font-bold ${passTheme.text} font-mono`}>{bookedTicket.ticketId}</span>
                    </div>

                    {/* From - To airport route details */}
                    <div className="flex justify-between items-center border-y border-slate-200/50 dark:border-slate-800/50 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 uppercase font-semibold">Origin</span>
                        <span className="text-xl font-black">{bookedTicket.from}</span>
                        <span className="text-[10px] text-slate-500 mt-0.5">{bookedTicket.fromCity}</span>
                        <span className="text-[10px] text-slate-500 mt-1 font-semibold">{bookedTicket.departureTime}</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1.5">
                        <Plane size={16} className={`${passTheme.text} rotate-90`} />
                        <span className="text-[10px] text-slate-400 font-mono">{bookedTicket.flightNumber}</span>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-400 uppercase font-semibold">Destination</span>
                        <span className="text-xl font-black">{bookedTicket.to}</span>
                        <span className="text-[10px] text-slate-500 mt-0.5">{bookedTicket.toCity}</span>
                        <span className="text-[10px] text-slate-500 mt-1 font-semibold">{bookedTicket.arrivalTime}</span>
                      </div>
                    </div>

                    {/* Passenger names, seats, and cabin details */}
                    <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">Passenger</span>
                        <span>{bookedTicket.passengerName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">Seat Assign</span>
                        <span className={`${passTheme.text} font-bold`}>{bookedTicket.seat}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">Cabin Class</span>
                        <span className={`px-2 py-0.5 text-[9px] rounded border font-bold ${passTheme.badge}`}>{bookedTicket.class}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">Gate</span>
                        <span>{bookedTicket.gate}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedFlight(null)}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 rounded-xl text-xs font-bold transition-colors"
                  >
                    Done & Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
