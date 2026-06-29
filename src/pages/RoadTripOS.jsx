/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Compass, Navigation, Heart, Calendar, Sparkles, ChevronRight, X, Plus, 
  Eye, Award, Trash2, Mic, Play, Pause, RefreshCw, AlertTriangle, Battery, 
  BatteryCharging, Zap, Gauge, User, Users, DollarSign, Cloud, CloudRain, Sun, 
  CloudSun, Camera, Star, Info, ShieldAlert, Award as BadgeIcon, HelpCircle, ArrowUpDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RoadTripOS = () => {
  const { awardXp, showToast, wishlist, itineraries } = useApp();

  // 1. Vehicle Profile States
  const [vehicleModel, setVehicleModel] = useState('Tata Nexon EV Max');
  const [fuelType, setFuelType] = useState('EV'); // Petrol, Diesel, CNG, EV, Hybrid
  const [mileage, setMileage] = useState(6.2); // km/L or km/kWh
  const [tankCapacity, setTankCapacity] = useState(40); // L or kWh
  const [serviceDue, setServiceDue] = useState(4200); // km remaining
  const [tyreSize, setTyreSize] = useState('215/60 R16');

  // 2. Route Builder States
  const [startCity, setStartCity] = useState('Mumbai');
  const [destinationCity, setDestinationCity] = useState('Goa');
  const [stops, setStops] = useState(['Pune', 'Kolhapur']);
  const [newStop, setNewStop] = useState('');
  const [scenicPreference, setScenicPreference] = useState('Coastal'); // Scenic, Mountain, Coastal, Forest, Heritage, Religious
  const [savedRoutes, setSavedRoutes] = useState([
    { id: 'sr-1', name: 'Mumbai-Goa NH66 Scenic', start: 'Mumbai', end: 'Goa', stops: ['Pune', 'Kolhapur'], scenic: 'Coastal' }
  ]);

  // 3. Daily Fuel Prices state (India)
  const [fuelPrices, setFuelPrices] = useState({ petrol: 104.2, diesel: 92.5, cng: 79.8 });
  const [loadingPrices, setLoadingPrices] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoadingPrices(true);
      try {
        const res = await fetch('https://mi8y.github.io/docs/api/daily-fuel-prices-india/prices.json');
        if (res.ok) {
          const data = await res.json();
          if (data && data.petrol) {
            setFuelPrices({
              petrol: parseFloat(data.petrol) || 104.2,
              diesel: parseFloat(data.diesel) || 92.5,
              cng: parseFloat(data.cng) || 79.8
            });
          }
        }
      } catch (e) {
        console.warn("Failed fetching live fuel prices. Engaging robust local fallbacks.");
      } finally {
        setLoadingPrices(false);
      }
    };
    fetchPrices();
  }, []);

  // 4. EV Specific States
  const [initialBattery, setInitialBattery] = useState(100); // %
  const [chargingType, setChargingType] = useState('Public Fast DC'); // Public Fast DC, Home AC charger

  // 5. Budget Sliders & Calculator States
  const [hotelBudget, setHotelBudget] = useState(3500); // ₹ per night
  const [foodTier, setFoodTier] = useState('Standard'); // Budget, Standard, Premium, Luxury
  const [shoppingAllocation, setShoppingAllocation] = useState(10000); // ₹ total
  const [activitiesBudget, setActivitiesBudget] = useState(4000); // ₹ total
  const [emergencyBufferPercent, setEmergencyBufferPercent] = useState(10); // %
  const [travelDays, setTravelDays] = useState(4);
  const [travelersCount, setTravelersCount] = useState(3);

  // 6. Group Expense Splitter States
  const [groupMembers, setGroupMembers] = useState(['You', 'Sarah', 'Aditya']);
  const [newMemberName, setNewMemberName] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 'exp-1', title: 'Toll plaza charges', amount: 1200, paidBy: 'You' },
    { id: 'exp-2', title: 'Highway Lunch Dhaba', amount: 2400, paidBy: 'Sarah' }
  ]);
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expensePaidBy, setExpensePaidBy] = useState('You');

  // 7. Trip Simulation States
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // Calculations
  const totalDistance = 590 + (stops.length * 45); // simulated base distance
  
  // Fuel Required calculation
  const fuelRequired = parseFloat((totalDistance / mileage).toFixed(1));
  
  // Get active price per unit
  const getUnitCost = () => {
    if (fuelType === 'Petrol') return fuelPrices.petrol;
    if (fuelType === 'Diesel') return fuelPrices.diesel;
    if (fuelType === 'CNG') return fuelPrices.cng;
    if (fuelType === 'EV') return chargingType === 'Public Fast DC' ? 22 : 8; // cost per kWh
    return 85.0; // Hybrid average
  };

  const unitCost = getUnitCost();
  const estimatedFuelCost = Math.round(fuelRequired * unitCost);
  const runningCostPerKm = parseFloat((estimatedFuelCost / totalDistance).toFixed(1));

  // EV specific calculations
  const batteryDrainKwh = fuelType === 'EV' ? fuelRequired : 0;
  const evChargeStopsNeeded = fuelType === 'EV' ? Math.max(1, Math.ceil(batteryDrainKwh / (tankCapacity * 0.8))) : 0;
  const chargingTimeMins = evChargeStopsNeeded * (chargingType === 'Public Fast DC' ? 45 : 360);

  // Budget summaries
  const tollCharges = Math.round(totalDistance * 1.8);
  const parkingCharges = 600;
  const accommodationCost = hotelBudget * travelDays;
  
  const getFoodPricePerDay = () => {
    if (foodTier === 'Budget') return 300;
    if (foodTier === 'Standard') return 800;
    if (foodTier === 'Premium') return 1800;
    return 3500; // Luxury
  };
  const foodCost = getFoodPricePerDay() * travelDays * travelersCount;
  
  const transportCost = estimatedFuelCost + tollCharges + parkingCharges;
  const baseSubtotal = transportCost + accommodationCost + foodCost + shoppingAllocation + activitiesBudget;
  const emergencyReserveAmount = Math.round(baseSubtotal * (emergencyBufferPercent / 100));
  const grandTotalBudget = baseSubtotal + emergencyReserveAmount;

  // Add stops helpers
  const handleAddStop = () => {
    if (newStop.trim()) {
      setStops([...stops, newStop.trim()]);
      setNewStop('');
      showToast('Stop added to itinerary sequence.', 'success');
    }
  };

  const handleRemoveStop = (idx) => {
    setStops(stops.filter((_, i) => i !== idx));
    showToast('Stop removed from route.', 'info');
  };

  const handleMoveStop = (idx, direction) => {
    const updated = [...stops];
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx >= 0 && targetIdx < updated.length) {
      const temp = updated[idx];
      updated[idx] = updated[targetIdx];
      updated[targetIdx] = temp;
      setStops(updated);
    }
  };

  // Saved route helpers
  const handleSaveRoute = () => {
    const newRoute = {
      id: `sr-${Date.now()}`,
      name: `${startCity}-${destinationCity} ${scenicPreference} Route`,
      start: startCity,
      end: destinationCity,
      stops: [...stops],
      scenic: scenicPreference
    };
    setSavedRoutes([...savedRoutes, newRoute]);
    awardXp(300, 'Saved custom road trip route blueprint');
    showToast('Route saved to local command console!', 'success');
  };

  // Splitter helpers
  const handleAddMember = () => {
    if (newMemberName.trim() && !groupMembers.includes(newMemberName.trim())) {
      setGroupMembers([...groupMembers, newMemberName.trim()]);
      setNewMemberName('');
      showToast('Travel companion registered.', 'success');
    }
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseTitle.trim() || !expenseAmount) return;
    const newExp = {
      id: `exp-${Date.now()}`,
      title: expenseTitle,
      amount: parseFloat(expenseAmount),
      paidBy: expensePaidBy
    };
    setExpenses([...expenses, newExp]);
    setExpenseTitle('');
    setExpenseAmount('');
    showToast('Expense entry logged.', 'success');
  };

  // Group balances calculator
  const totalGroupExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const sharePerPerson = totalGroupExpenses / (groupMembers.length || 1);
  const memberPaidTotals = groupMembers.reduce((acc, name) => {
    acc[name] = expenses.filter(e => e.paidBy === name).reduce((sum, e) => sum + e.amount, 0);
    return acc;
  }, {});

  // Timeline simulation steps
  const simulationSteps = [
    { label: `09:00 AM — Departure: ${startCity}`, weather: 'Sunny', speed: 80, battery: initialBattery, alert: 'Clear highways en route' },
    { label: `11:30 AM — Sector Checkpoint: ${stops[0] || 'Waypoint 1'}`, weather: 'Cloudy', speed: 65, battery: Math.max(10, Math.round(initialBattery - 35)), alert: 'Toll plaza ahead - Fastag active' },
    { label: `01:30 PM — Highway Lunch Stop`, weather: 'CloudSun', speed: 0, battery: Math.max(10, Math.round(initialBattery - 35)), alert: 'Recommended Dhaba: Satkar Highway Rest' },
    { label: `04:00 PM — Mountain Pass: ${stops[1] || 'Waypoint 2'}`, weather: 'Cloudy', speed: 45, battery: Math.max(5, Math.round(initialBattery - 70)), alert: 'Construct sector. Road Quality: ★★☆☆☆' },
    { label: `06:30 PM — Arrival: ${destinationCity}`, weather: 'Clear skies', speed: 0, battery: Math.max(2, Math.round(initialBattery - 90)), alert: 'Sector Destination unlocked' }
  ];

  // Simulation playback loop
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setSimStep(prev => {
        if (prev < simulationSteps.length - 1) {
          return prev + 1;
        } else {
          setIsSimulating(false);
          awardXp(500, 'Completed high-fidelity road trip simulation');
          showToast('Simulation complete! Route telemetry synchronized.', 'success');
          return 0;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Title Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
          <Navigation size={10} className="animate-spin" /> ROAD TRIP OS_V2.5
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Automotive Road Trip Command Center
        </h1>
        <p className="text-sm text-slate-450 font-semibold max-w-2xl">
          Build multi-stop custom routes, estimate dynamic fuel & EV range consumption, simulate real-time driving telemetries, and split shared group expenses in a unified premium dashboard.
        </p>
      </div>

      {/* Main Grid: Builder vs Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Builder Panels */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Section 1: Route Builder */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-4 text-left">
            <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-150 dark:border-white/5 pb-3">
              <MapPin className="text-teal-400" size={18} /> Route Architect
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Start City</label>
                <input
                  type="text"
                  value={startCity}
                  onChange={(e) => setStartCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Destination</label>
                <input
                  type="text"
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-slate-200"
                />
              </div>
            </div>

            {/* Stops list */}
            <div className="flex flex-col gap-2.5 mt-2">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Intermediate Waypoints</span>
              
              <div className="flex flex-col gap-2">
                {stops.map((stop, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 rounded-xl text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-teal-500/10 text-teal-400 font-mono text-[9px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 dark:text-slate-200">{stop}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Reorder up */}
                      <button
                        onClick={() => handleMoveStop(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-900 rounded disabled:opacity-30 cursor-pointer"
                        title="Move Up"
                      >
                        <ArrowUpDown size={11} className="rotate-0 text-slate-400" />
                      </button>
                      {/* Reorder down */}
                      <button
                        onClick={() => handleMoveStop(idx, 'down')}
                        disabled={idx === stops.length - 1}
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-900 rounded disabled:opacity-30 cursor-pointer"
                        title="Move Down"
                      >
                        <ArrowUpDown size={11} className="rotate-180 text-slate-400" />
                      </button>
                      {/* Trash */}
                      <button
                        onClick={() => handleRemoveStop(idx)}
                        className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded cursor-pointer"
                        title="Delete stop"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add stop input form */}
              <div className="flex gap-2 mt-1">
                <input
                  type="text"
                  placeholder="Enter stopover name..."
                  value={newStop}
                  onChange={(e) => setNewStop(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-700 dark:text-slate-200"
                />
                <button
                  type="button"
                  onClick={handleAddStop}
                  className="px-4 py-2.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-bold font-mono rounded-xl hover:scale-[1.02] cursor-pointer transition-all border border-slate-800"
                >
                  ADD STOP
                </button>
              </div>
            </div>

            {/* Scenic Routes Preferences */}
            <div className="mt-2 flex flex-col gap-2.5">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Scenic Route Filter</span>
              <div className="flex flex-wrap gap-2">
                {['Scenic', 'Mountain', 'Coastal', 'Forest', 'Heritage', 'Religious'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setScenicPreference(p)}
                    className={`px-3 py-1.5 text-[10px] font-mono font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                      scenicPreference === p
                        ? 'bg-teal-500/10 border-teal-500 text-teal-400'
                        : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/5 pt-4 flex justify-between mt-2">
              <span className="font-mono text-[10px] text-slate-500 font-bold self-center">
                ESTIMATED DISTANCE: <span className="text-teal-400 font-black">{totalDistance} KM</span>
              </span>
              <button
                type="button"
                onClick={handleSaveRoute}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-mono font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
              >
                SAVE ROUTE BLUEPRINT
              </button>
            </div>
          </div>

          {/* Section 2: Vehicle Profile Configuration */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-4 text-left">
            <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-150 dark:border-white/5 pb-3">
              <Gauge className="text-teal-400" size={18} /> Vehicle Telemetry Profile
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Model</span>
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none text-slate-700 dark:text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Fuel Type</span>
                <select
                  value={fuelType}
                  onChange={(e) => {
                    const type = e.target.value;
                    setFuelType(type);
                    setMileage(type === 'EV' ? 6.2 : (type === 'Petrol' ? 14.5 : (type === 'Diesel' ? 17.2 : 22.0)));
                    setTankCapacity(type === 'EV' ? 45 : (type === 'Petrol' ? 50 : (type === 'Diesel' ? 50 : 12)));
                  }}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none text-slate-700 dark:text-slate-200"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="EV">Electric Vehicle (EV)</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  {fuelType === 'EV' ? 'Efficiency (km/kWh)' : 'Mileage (km/L)'}
                </span>
                <input
                  type="number"
                  step="0.1"
                  value={mileage}
                  onChange={(e) => setMileage(parseFloat(e.target.value) || 12)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none text-slate-700 dark:text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  {fuelType === 'EV' ? 'Battery Size (kWh)' : 'Tank Size (Liters)'}
                </span>
                <input
                  type="number"
                  value={tankCapacity}
                  onChange={(e) => setTankCapacity(parseInt(e.target.value) || 40)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none text-slate-700 dark:text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Tyre Spec</span>
                <input
                  type="text"
                  value={tyreSize}
                  onChange={(e) => setTyreSize(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none text-slate-700 dark:text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Service Due</span>
                <div className="text-xs font-bold text-teal-400 py-2 font-mono">
                  {serviceDue} km remaining
                </div>
              </div>
            </div>

            {/* EV Charger sub-configuration */}
            {fuelType === 'EV' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10 flex flex-col gap-3 text-xs mt-1"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-teal-400 uppercase text-[9px] tracking-wide flex items-center gap-1">
                    <BatteryCharging size={13} /> EV Charging parameters
                  </span>
                  <span className="text-[8.5px] bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded font-mono font-bold">CHARGER SYNCED</span>
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono text-[10px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-bold uppercase text-[8px]">Charger Tier</span>
                    <select
                      value={chargingType}
                      onChange={(e) => setChargingType(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-350 focus:outline-none"
                    >
                      <option value="Public Fast DC">Public Fast DC (25kW+)</option>
                      <option value="Home AC charger">Home AC Charger (7.2kW)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-bold uppercase text-[8px]">Start battery (%)</span>
                    <input
                      type="number"
                      max="100"
                      min="10"
                      value={initialBattery}
                      onChange={(e) => setInitialBattery(Math.min(100, Math.max(10, parseInt(e.target.value) || 100)))}
                      className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-350 focus:outline-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Section 3: Group Expense Splitter */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-4 text-left">
            <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-150 dark:border-white/5 pb-3">
              <Users className="text-teal-400" size={18} /> Group Expenses Splitter
            </h3>

            {/* Registered companions */}
            <div className="flex flex-col gap-2 mt-1">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Travel Companions</span>
              <div className="flex flex-wrap gap-2.5">
                {groupMembers.map((name, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-full text-xs font-semibold flex items-center gap-1.5">
                    <User size={10} className="text-slate-400" />
                    <span>{name}</span>
                  </span>
                ))}
                {/* Add member inline */}
                <div className="flex gap-1 items-center">
                  <input
                    type="text"
                    placeholder="Register name..."
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    className="px-2 py-1 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] font-bold focus:outline-none text-slate-700 dark:text-slate-300 w-28"
                  />
                  <button
                    onClick={handleAddMember}
                    className="p-1.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded hover:scale-105 cursor-pointer text-[10px]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Expenses Logger form */}
            <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 items-end mt-2">
              <div className="flex flex-col gap-1 sm:col-span-2">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Expense Title</span>
                <input
                  type="text"
                  placeholder="e.g. Toll, Snacks, Dinner"
                  value={expenseTitle}
                  onChange={(e) => setExpenseTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none text-slate-700 dark:text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Amount (₹)</span>
                <input
                  type="number"
                  placeholder="₹"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none text-slate-700 dark:text-slate-200"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-teal-655 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer"
              >
                LOG COST
              </button>
            </form>

            {/* Logs display */}
            <div className="mt-2 flex flex-col gap-2 max-h-32 overflow-y-auto pr-1">
              {expenses.map((e) => (
                <div key={e.id} className="flex justify-between items-center text-[11px] border-b border-slate-100 dark:border-white/5 py-1.5">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{e.title}</span>
                  <span className="font-mono text-slate-400 font-bold">
                    ₹{e.amount.toLocaleString('en-IN')} paid by <span className="text-teal-400 font-black">{e.paidBy}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Expense calculation calculations */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 text-white flex flex-col gap-2 font-mono text-[10px] mt-2">
              <div className="flex justify-between">
                <span>TOTAL GROUP COST:</span>
                <span className="text-teal-400 font-bold">₹{totalGroupExpenses.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>SHARE PER PERSON:</span>
                <span className="text-slate-350">₹{Math.round(sharePerPerson).toLocaleString('en-IN')}</span>
              </div>
              
              {/* Balances matrix */}
              <div className="flex flex-col gap-1.5 pt-1.5">
                <span className="text-slate-500 font-bold text-[8px] uppercase tracking-wider">Balances Ledger</span>
                {groupMembers.map((name) => {
                  const balance = (memberPaidTotals[name] || 0) - sharePerPerson;
                  return (
                    <div key={name} className="flex justify-between">
                      <span className="text-slate-400">{name}</span>
                      <span className={balance >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {balance >= 0 ? `Gets back ₹${Math.round(balance)}` : `Owes ₹${Math.round(Math.abs(balance))}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: OS Analyzers & Budget Dashboard */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Section 4: Live Budget Dashboard */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col gap-4 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <div>
                <span className="text-[8px] font-mono text-teal-400 uppercase tracking-widest font-black">BUDGET CORE: METRIC_CENTER</span>
                <h3 className="font-display font-extrabold text-base text-white mt-0.5">Live Cost Dashboard</h3>
              </div>
              <span className="text-[9px] bg-teal-500/10 border border-teal-500/25 text-teal-400 px-2 py-0.5 rounded font-mono font-bold">SIMULATION ON</span>
            </div>

            {/* Sliders Simulator */}
            <div className="flex flex-col gap-4 mt-2">
              {/* Hotel Slider */}
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between font-mono text-[9.5px]">
                  <span className="text-slate-400 uppercase">Hotel budget (₹/night)</span>
                  <span className="text-teal-400 font-bold">₹{hotelBudget.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="15000"
                  step="500"
                  value={hotelBudget}
                  onChange={(e) => setHotelBudget(parseInt(e.target.value))}
                  className="w-full accent-teal-500 cursor-ew-resize h-1 bg-slate-800 rounded-lg appearance-none"
                />
              </div>

              {/* Food Selection */}
              <div className="flex flex-col gap-1.5 text-xs">
                <span className="font-mono text-[9.5px] text-slate-400 uppercase">Food Dining Tier</span>
                <div className="grid grid-cols-4 gap-2">
                  {['Budget', 'Standard', 'Premium', 'Luxury'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFoodTier(f)}
                      className={`py-1 text-[9px] font-mono font-bold uppercase rounded border transition-all cursor-pointer ${
                        foodTier === f
                          ? 'bg-teal-500/15 border-teal-500 text-teal-400'
                          : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shopping Slider */}
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between font-mono text-[9.5px]">
                  <span className="text-slate-400 uppercase">Shopping Allocation</span>
                  <span className="text-teal-400 font-bold">₹{shoppingAllocation.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="30000"
                  step="1000"
                  value={shoppingAllocation}
                  onChange={(e) => setShoppingAllocation(parseInt(e.target.value))}
                  className="w-full accent-teal-500 cursor-ew-resize h-1 bg-slate-800 rounded-lg appearance-none"
                />
              </div>

              {/* Travelers count inline picker */}
              <div className="grid grid-cols-2 gap-4 font-mono text-[10px]">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 font-bold uppercase text-[8px]">Travelers</span>
                  <input
                    type="number"
                    max="10"
                    min="1"
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-350 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 font-bold uppercase text-[8px]">Days</span>
                  <input
                    type="number"
                    max="30"
                    min="1"
                    value={travelDays}
                    onChange={(e) => setTravelDays(Math.min(30, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-350 focus:outline-none"
                  />
                </div>
              </div>

              {/* Emergency slider */}
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between font-mono text-[9.5px]">
                  <span className="text-slate-400 uppercase">Emergency Reserve Buffer</span>
                  <span className="text-teal-400 font-bold">{emergencyBufferPercent}% (₹{emergencyReserveAmount.toLocaleString('en-IN')})</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  value={emergencyBufferPercent}
                  onChange={(e) => setEmergencyBufferPercent(parseInt(e.target.value))}
                  className="w-full accent-teal-500 cursor-ew-resize h-1 bg-slate-800 rounded-lg appearance-none"
                />
              </div>
            </div>

            {/* Calculations displays */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-950/70 border border-white/5 flex flex-col gap-2 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>ESTIMATED FUEL COST ({fuelType}):</span>
                <span className="text-slate-200">₹{estimatedFuelCost.toLocaleString('en-IN')} ({fuelRequired} {fuelType === 'EV' ? 'kWh' : 'L'})</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>TOLLS & PARKING:</span>
                <span className="text-slate-200">₹{(tollCharges + parkingCharges).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>HOTELS ({travelDays} Nights):</span>
                <span className="text-slate-200">₹{accommodationCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400 border-b border-white/5 pb-2">
                <span>FOOD & DINING:</span>
                <span className="text-slate-200">₹{foodCost.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between text-base font-black text-white pt-2">
                <span>GRAND TOTAL:</span>
                <span className="text-teal-400">₹{grandTotalBudget.toLocaleString('en-IN')}</span>
              </div>
              <span className="text-[8px] text-slate-500 uppercase tracking-widest text-center mt-1">
                Running cost: ₹{runningCostPerKm}/KM
              </span>
            </div>
          </div>

          {/* Section 5: Trip Simulation Mode */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-4 text-left">
            <div className="flex justify-between items-center border-b border-slate-150 dark:border-white/5 pb-3">
              <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Play className="text-teal-400" size={16} /> Trip Simulation Mode
              </h3>

              <button
                type="button"
                onClick={() => setIsSimulating(!isSimulating)}
                className={`px-3 py-1.5 rounded-xl font-mono text-[9px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1 border ${
                  isSimulating 
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                    : 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                }`}
              >
                {isSimulating ? <Pause size={10} /> : <Play size={10} />}
                {isSimulating ? 'Pause SIM' : 'PLAY SIM'}
              </button>
            </div>

            {/* Playback interface */}
            <div className="flex flex-col gap-4 mt-2">
              {/* Playback bar dial */}
              <div className="flex justify-between items-center font-mono text-[10px] text-slate-500 bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <Cloud className="text-sky-400" size={14} />
                  <span>Weather: <span className="font-bold text-slate-700 dark:text-slate-200">{simulationSteps[simStep].weather}</span></span>
                </div>
                <div>
                  <span>Speed: <span className="font-bold text-teal-400">{simulationSteps[simStep].speed} KM/H</span></span>
                </div>
                {fuelType === 'EV' && (
                  <div>
                    <span>Battery: <span className="font-bold text-emerald-400">{simulationSteps[simStep].battery}%</span></span>
                  </div>
                )}
              </div>

              {/* Progress timeline */}
              <div className="flex flex-col gap-3 relative pl-6 border-l border-dashed border-slate-200 dark:border-white/10 ml-2">
                {simulationSteps.map((step, idx) => {
                  const isActive = idx === simStep;
                  const isPassed = idx < simStep;
                  return (
                    <div key={idx} className="relative flex flex-col gap-1 text-left text-xs transition-opacity duration-300">
                      {/* Node indicator dot */}
                      <span className={`absolute -left-[30px] top-1 w-3 h-3 rounded-full border-2 transition-all ${
                        isActive 
                          ? 'bg-teal-500 border-teal-400 scale-125 shadow-[0_0_8px_rgba(20,184,166,0.8)]' 
                          : (isPassed ? 'bg-slate-500 border-slate-400' : 'bg-slate-900 border-slate-800')
                      }`} />

                      <h5 className={`font-bold font-mono text-[10px] ${isActive ? 'text-teal-400' : (isPassed ? 'text-slate-500' : 'text-slate-600')}`}>
                        {step.label}
                      </h5>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[9.5px] text-slate-400 font-semibold italic flex items-center gap-1"
                        >
                          <Info size={10} className="text-teal-400 shrink-0" />
                          <span>Telemetry advice: {step.alert}</span>
                        </motion.p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 6: AI Road Trip Warnings */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-white/5 text-white flex flex-col gap-4 text-left shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
            
            <h4 className="font-display font-black text-sm text-amber-500 uppercase tracking-widest font-mono flex items-center gap-1.5 border-b border-white/5 pb-2">
              <ShieldAlert size={16} /> AI Road Co-Pilot Analyzer
            </h4>

            <div className="flex flex-col gap-3 font-mono text-[10.5px] mt-1 relative z-10">
              <div className="flex gap-2.5 items-start bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl">
                <AlertTriangle size={15} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-amber-500 block">⚠️ LONG DRIVING WARNING</span>
                  <span className="text-slate-400 mt-1 block leading-relaxed font-semibold">
                    Driving from Mumbai to Goa via Pune takes approximately 10 hours. AI recommends an overnight rest stop in Kolhapur to prevent fatigue.
                  </span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start bg-sky-500/5 border border-sky-500/20 p-3 rounded-xl">
                <CloudRain size={15} className="text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-sky-400 block">🌦️ MONSOON HYDROPLANING HAZARD</span>
                  <span className="text-slate-400 mt-1 block leading-relaxed font-semibold">
                    High probability of monsoon rain showers along the NH66 coastal path. Ensure tyres are inflated to {tyreSize} spec and check tyre traction.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Achievements Badges */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-4 text-left">
            <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-150 dark:border-white/5 pb-3">
              <Award className="text-teal-400" size={16} /> Road Trip Milestones
            </h3>

            <div className="grid grid-cols-2 gap-4 font-mono text-[10px] mt-1">
              {[
                { title: 'Coastal Rider', desc: 'Active NH66 Goa route', unlocked: destinationCity.toLowerCase().includes('goa'), icon: '🌊' },
                { title: 'Himalayan Rider', desc: 'Visited Leh or Spiti', unlocked: startCity.toLowerCase().includes('leh') || destinationCity.toLowerCase().includes('kaza'), icon: '🏔️' },
                { title: 'Temple Trail Master', desc: 'Completed pilgrimage', unlocked: startCity.toLowerCase().includes('ayodhya') || destinationCity.toLowerCase().includes('puri'), icon: '🛕' },
                { title: 'Desert Voyager', desc: 'Crossed Rajasthan/Kutch', unlocked: startCity.toLowerCase().includes('jaisalmer') || destinationCity.toLowerCase().includes('kutch'), icon: '🏜️' }
              ].map((b, idx) => (
                <div key={idx} className={`p-3 rounded-xl border flex flex-col gap-1.5 ${
                  b.unlocked 
                    ? 'bg-teal-500/10 border-teal-500/20 text-teal-300' 
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500'
                }`}>
                  <div className="flex justify-between">
                    <span className="text-base">{b.icon}</span>
                    <span className={`text-[7.5px] font-bold uppercase ${b.unlocked ? 'text-teal-400 animate-pulse' : 'text-slate-650'}`}>
                      {b.unlocked ? 'UNLOCKED' : 'LOCKED'}
                    </span>
                  </div>
                  <h5 className="font-bold text-[10px] text-slate-800 dark:text-slate-200 truncate mt-1">{b.title}</h5>
                  <p className="text-[8.5px] text-slate-500 font-semibold">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
