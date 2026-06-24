import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, MapPin, X, Building, DollarSign, Calendar, Heart, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
import { HotelCard, RoomSelectionList } from '../components/HotelCard';
import { mockHotels } from '../data/mockData';
import { CardGridSkeleton } from '../components/SkeletonLoader';
import { useApp } from '../context/AppContext';

// Procedural Hotel Generator to prevent crashes from undefined mock fields and support global search query scaling
const generateMockHotels = (destinationQuery) => {
  const destClean = destinationQuery ? destinationQuery.trim() : 'Goa';
  
  const getCityName = (val) => {
    const parenIndex = val.indexOf('(');
    if (parenIndex !== -1) {
      return val.substring(0, parenIndex).trim();
    }
    return val.trim();
  };

  const cityName = getCityName(destClean);

  const hotelBrands = [
    { name: 'Grand Taj', type: 'Resort', basePrice: 18050, suffix: 'Resort & Spa' },
    { name: 'Sovereign Heritage', type: 'Hotel', basePrice: 28400, suffix: 'Palace' },
    { name: 'Radisson Cyber', type: 'Resort', basePrice: 11200, suffix: 'Resort' },
    { name: 'Marriott Quantum', type: 'Hotel', basePrice: 16800, suffix: 'Marriott Hub' },
    { name: 'Zostel Nomad', type: 'Hostel', basePrice: 3200, suffix: 'Community coliving' }
  ];

  const images = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=600&q=80'
  ];

  return hotelBrands.map((brand, idx) => {
    const randomFactor = 0.85 + Math.random() * 0.3;
    const price = Math.round(brand.basePrice * randomFactor);
    const rating = parseFloat((4.4 + Math.random() * 0.6).toFixed(1));
    const reviewsCount = 120 + Math.floor(Math.random() * 800);

    const rooms = [
      {
        type: 'Standard Classic Room',
        bed: '1x Queen Bed',
        price: Math.round(price * 0.8),
        refundable: true
      },
      {
        type: 'Executive Club Room',
        bed: '1x King Bed',
        price: Math.round(price * 1.1),
        refundable: true
      },
      {
        type: 'Presidential Sovereign Suite',
        bed: '2x King Beds',
        price: Math.round(price * 2.2),
        refundable: true
      }
    ];

    const amenities = ['WiFi', 'Pool', 'Gym', 'Spa', 'Breakfast Included'].slice(0, 3 + (idx % 3));

    return {
      id: `ht-proc-${idx}-${cityName.toLowerCase().replace(/[^a-z]/g, '')}`,
      name: `${brand.name} ${brand.suffix}`,
      destination: cityName,
      location: `${cityName}`,
      rating,
      reviewsCount,
      price,
      image: images[idx % images.length],
      tags: [brand.type, 'Luxury', 'Wellness'].slice(0, 2 + (idx % 2)),
      description: `Experience the premium comfort of ${brand.name} in ${cityName}. Offering beautiful views, zero-latency room service, and verified safety networks.`,
      amenities,
      rooms
    };
  });
};

export const Hotels = () => {
  const { showToast } = useApp();
  const [destQuery, setDestQuery] = useState('Kyoto, Japan');
  const [checkIn, setCheckIn] = useState('2026-06-25');
  const [guests, setGuests] = useState(() => {
    try {
      const stored = localStorage.getItem('tv_sim_group_size');
      if (stored) return parseInt(stored);
    } catch(e) {}
    return 2;
  });
  
  const [hotels, setHotels] = useState(() => {
    return generateMockHotels('Kyoto, Japan');
  });

  const [loading, setLoading] = useState(false);
  const [priceFilter, setPriceFilter] = useState(60000);
  const [ratingFilter, setRatingFilter] = useState(0); 
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookedReceipt, setBookedReceipt] = useState(null);

  // Sync price filter to generated hotels
  useEffect(() => {
    if (hotels.length > 0) {
      const maxP = Math.max(...hotels.map(h => h.price));
      setPriceFilter(maxP);
    }
  }, [hotels]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const newHotels = generateMockHotels(destQuery);
      setHotels(newHotels);
      setLoading(false);
      showToast(`Found ${newHotels.length} luxury hotels in ${destQuery}.`);
    }, 600);
  };

  const startBookingRoom = (hotel, room) => {
    setSelectedHotel(hotel);
    setSelectedRoom(room || hotel.rooms[0]);
    setBookedReceipt(null);
  };

  const confirmRoomBooking = () => {
    const nights = 3; 
    const subtotal = selectedRoom.price * nights;
    const vat = Math.round(subtotal * 0.1); 
    const total = subtotal + vat;
    const bookingRef = 'HTL-' + Math.floor(100000 + Math.random() * 900000);

    setBookedReceipt({
      hotel: selectedHotel,
      room: selectedRoom,
      nights,
      subtotal,
      vat,
      total,
      bookingRef,
      checkIn: 'June 25, 2026',
      checkOut: 'June 28, 2026',
      guests
    });
    showToast('Hotel booking confirmed! Invoice generated.');
  };

  // Filter Logic
  const filteredHotels = hotels.filter(h => {
    const matchesPrice = h.price <= priceFilter;
    const matchesRating = h.rating >= ratingFilter;
    return matchesPrice && matchesRating;
  });

  const minPrice = hotels.length > 0 ? Math.min(...hotels.map(h => h.price)) : 3000;
  const maxPrice = hotels.length > 0 ? Math.max(...hotels.map(h => h.price)) : 50000;
  const sliderMin = Math.max(1000, Math.round(minPrice * 0.8));
  const sliderMax = Math.round(maxPrice * 1.2);
  const sliderStep = Math.max(100, Math.round((sliderMax - sliderMin) / 20));

  return (
    <div className="py-4 text-left flex flex-col gap-8">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Luxury Lodging Finder
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Find and book world-class hotels, boutique retreats, and luxury private villas verified for maximum comfort.
        </p>
      </div>

      {/* Hotel Search bar */}
      <form onSubmit={handleSearch} className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Destination</label>
          <input
            type="text"
            value={destQuery}
            onChange={(e) => setDestQuery(e.target.value)}
            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none text-slate-800 dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none text-slate-800 dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none cursor-pointer text-slate-800 dark:text-white"
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4+ Guests</option>
          </select>
        </div>
        <button
          type="submit"
          className="py-3 px-6 bg-teal-655 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow"
        >
          <Search size={14} /> Search Hotels
        </button>
      </form>

      {/* Main Layout Grid */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Hotel Filter panel */}
        <aside className="w-full lg:w-64 shrink-0 p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300">Hotel Filters</h4>
            <button 
              onClick={() => { setPriceFilter(maxPrice); setRatingFilter(0); }} 
              className="text-[10px] font-bold text-teal-505 uppercase hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Star Rating filter */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Guest Review Rating</span>
            <div className="flex flex-col gap-2 text-xs font-semibold">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={ratingFilter === 0}
                  onChange={() => setRatingFilter(0)}
                  className="rounded-full text-teal-600 focus:ring-teal-500"
                />
                <span>Any rating</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={ratingFilter === 4.6}
                  onChange={() => setRatingFilter(4.6)}
                  className="rounded-full text-teal-600 focus:ring-teal-500"
                />
                <span className="flex items-center gap-1">Excellent (4.6+) <Star size={11} className="text-amber-500 fill-amber-500" /></span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={ratingFilter === 4.8}
                  onChange={() => setRatingFilter(4.8)}
                  className="rounded-full text-teal-600 focus:ring-teal-500"
                />
                <span className="flex items-center gap-1">Exceptional (4.8+) <Star size={11} className="text-amber-500 fill-amber-500" /></span>
              </label>
            </div>
          </div>

          {/* Pricing slider */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>Max Budget/Night</span>
              <span className="text-teal-555 font-bold">₹{priceFilter.toLocaleString('en-IN')}</span>
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

        {/* Results */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {loading ? (
            <CardGridSkeleton count={2} />
          ) : filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div key={hotel.id} className="flex flex-col gap-2">
                <HotelCard hotel={hotel} onBook={startBookingRoom} />
                <RoomSelectionList hotel={hotel} onSelectRoom={startBookingRoom} />
              </div>
            ))
          ) : (
            <div className="py-12 text-center rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 p-6">
              <p className="text-sm text-slate-400">No hotels found matching your search bounds.</p>
            </div>
          )}
        </div>
      </div>

      {/* Booking Checkout Modal */}
      <AnimatePresence>
        {selectedHotel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHotel(null)}
              className="fixed inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl p-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-850 dark:text-slate-100">
                    {!bookedReceipt ? 'Review Booking' : 'Booking Confirmed'}
                  </h3>
                  <span className="text-xs text-slate-450">{selectedHotel.name}</span>
                </div>
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="p-1 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <X size={16} />
                </button>
              </div>

              {!bookedReceipt ? (
                /* Invoice preview screen */
                <div className="flex flex-col gap-6 text-xs text-slate-600 dark:text-slate-350 text-left">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-150 dark:border-slate-850 flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Room Type</span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">{selectedRoom.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Bed Setting</span>
                      <span>{selectedRoom.bed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Duration</span>
                      <span>3 Nights (June 25 - June 28)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Guests</span>
                      <span>{guests} Adults</span>
                    </div>
                  </div>

                  {/* Calculations */}
                  <div className="flex flex-col gap-2 border-t border-slate-100 dark:border-slate-850 pt-4 font-semibold">
                    <div className="flex justify-between">
                      <span>Rate (₹{selectedRoom.price.toLocaleString('en-IN')} x 3 nights)</span>
                      <span>₹{(selectedRoom.price * 3).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Occupancy Tax & VAT (10%)</span>
                      <span>₹{Math.round(selectedRoom.price * 3 * 0.1).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-slate-800 dark:text-slate-100 border-t border-slate-100 dark:border-slate-850 pt-3 mt-1">
                      <span>Grand Total</span>
                      <span className="text-teal-500">₹{Math.round(selectedRoom.price * 3 * 1.1).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <button
                    onClick={confirmRoomBooking}
                    className="w-full py-3.5 bg-teal-655 hover:bg-teal-700 text-white font-bold rounded-xl shadow transition-colors mt-2"
                  >
                    Confirm & Reserve Room
                  </button>
                </div>
              ) : (
                /* Booking Confirmed / Invoice screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-6 text-xs"
                >
                  <div className="p-5 rounded-2xl border-2 border-dashed border-teal-500/30 bg-teal-500/5 dark:bg-teal-950/10 text-left flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="text-teal-500" size={16} />
                        <span className="font-extrabold uppercase tracking-widest font-display text-slate-850 dark:text-slate-100">Hotel Voucher</span>
                      </div>
                      <span className="font-bold text-teal-600 dark:text-teal-400 font-mono">{bookedReceipt.bookingRef}</span>
                    </div>

                    <div className="border-y border-slate-200/50 dark:border-slate-800/50 py-4 flex flex-col gap-1.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Lodging</span>
                      <span className="text-base font-black text-slate-800 dark:text-slate-150 leading-tight">{bookedReceipt.hotel.name}</span>
                      <span className="text-xs text-slate-500 font-semibold">{bookedReceipt.room.type} ({bookedReceipt.room.bed})</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 font-semibold text-slate-600 dark:text-slate-350">
                      <div>
                        <span className="text-[10px] text-slate-405 block mb-0.5">Check-In</span>
                        <span>{bookedReceipt.checkIn}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-405 block mb-0.5">Check-Out</span>
                        <span>{bookedReceipt.checkOut}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-405 block mb-0.5">Total Stay</span>
                        <span>{bookedReceipt.nights} Nights</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-405 block mb-0.5">Total Paid</span>
                        <span className="text-teal-500 font-bold">₹{bookedReceipt.total.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedHotel(null)}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 rounded-xl text-xs font-bold transition-colors"
                  >
                    Close Voucher Receipt
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
