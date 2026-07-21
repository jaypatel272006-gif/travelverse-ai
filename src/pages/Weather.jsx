import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CloudSun, Thermometer, Wind, Eye, Droplet, Sun, Umbrella, CloudRain, Snowflake, AlertTriangle, Sparkles, Navigation } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { WeatherSkeleton } from '../components/SkeletonLoader';

// Coordinates mapping for major global cities to call keyless Open-Meteo
const CITY_COORDINATES = {
  'kyoto': { name: 'Kyoto, Japan', lat: 35.0116, lon: 135.7681 },
  'tokyo': { name: 'Tokyo, Japan', lat: 35.6762, lon: 139.6503 },
  'paris': { name: 'Paris, France', lat: 48.8566, lon: 2.3522 },
  'new york': { name: 'New York City, USA', lat: 40.7128, lon: -74.0060 },
  'nyc': { name: 'New York City, USA', lat: 40.7128, lon: -74.0060 },
  'bali': { name: 'Denpasar, Bali', lat: -8.4095, lon: 115.1889 },
  'rome': { name: 'Rome, Italy', lat: 41.9028, lon: 12.4964 },
  'cape town': { name: 'Cape Town, South Africa', lat: -33.9249, lon: 18.4241 },
  'sydney': { name: 'Sydney, Australia', lat: -33.8688, lon: 151.2093 },
  'rio de janeiro': { name: 'Rio de Janeiro, Brazil', lat: -22.9068, lon: -43.1729 },
  'london': { name: 'London, United Kingdom', lat: 51.5074, lon: -0.1278 },
  'india': { name: 'Agra (Taj Mahal), India', lat: 27.1767, lon: 78.0081 },
  'delhi': { name: 'New Delhi, India', lat: 28.6139, lon: 77.2090 },
  'dubai': { name: 'Dubai, UAE', lat: 25.2048, lon: 55.2708 }
};

export const Weather = () => {
  const { showToast } = useApp();
  const [cityInput, setCityInput] = useState('Kyoto');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      let resolvedName = '';
      let lat = null;
      let lon = null;

      // 1. Resolve coordinates via local cache
      const cityKey = cityName.toLowerCase().trim();
      const cityCoords = CITY_COORDINATES[cityKey];

      if (cityCoords) {
        resolvedName = cityCoords.name;
        lat = cityCoords.lat;
        lon = cityCoords.lon;
      } else {
        // 2. Query keyless Open-Meteo Geocoding API for global lookup
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
        );
        if (!geoResponse.ok) throw new Error('Geocoding system down.');
        const geoData = await geoResponse.json();
        
        if (geoData.results && geoData.results.length > 0) {
          const match = geoData.results[0];
          resolvedName = `${match.name}${match.admin1 ? ', ' + match.admin1 : ''}, ${match.country}`;
          lat = match.latitude;
          lon = match.longitude;
        } else {
          setError(`We couldn't resolve coordinates for "${cityName}". Try searching with another city/state name (e.g., Surat, Bharuch, Delhi).`);
          return;
        }
      }

      // 3. Query weather reports for the resolved coordinate vectors
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      
      if (!response.ok) throw new Error('API server down.');
      const data = await response.json();
      
      setWeatherData({
        cityName: resolvedName,
        current: data.current_weather,
        daily: data.daily
      });
    } catch (err) {
      console.error('Weather retrieval error:', err);
      setError('Network error: Failed to retrieve weather records.');
      showToast('Could not fetch weather data.', 'error');
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  // Load initial city weather
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchWeather('Kyoto');
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchWeather]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      fetchWeather(cityInput);
    }
  };

  // Weather Code formatting helper
  const getWeatherInfo = (code) => {
    if (code === 0) return { label: 'Clear & Sunny', icon: <Sun className="text-amber-500" size={42} />, adv: 'Great day for outdoor trails and walking tours. Pack light clothes and sunscreen.' };
    if ([1, 2, 3].includes(code)) return { label: 'Partly Cloudy', icon: <CloudSun className="text-teal-400" size={42} />, adv: 'Pleasant sightseeing conditions. Carry a light jacket or cardigan.' };
    if ([45, 48].includes(code)) return { label: 'Foggy Mist', icon: <Wind className="text-slate-400" size={42} />, adv: 'Reduced visibility. Double check local transport schedules.' };
    if ([51, 53, 55, 61, 63, 65].includes(code)) return { label: 'Rainy Shower', icon: <CloudRain className="text-sky-500" size={42} />, adv: 'Wet weather. Pack an umbrella, raincoat, and prioritize museums or galleries.' };
    if ([71, 73, 75].includes(code)) return { label: 'Snowy Cold', icon: <Snowflake className="text-indigo-400" size={42} />, adv: 'Freezing snowfall. Layer up with thermal coats and boots.' };
    return { label: 'Unsettled Storms', icon: <AlertTriangle className="text-rose-500" size={42} />, adv: 'Strong winds or lightning. Seek indoor recreation and avoid trails.' };
  };

  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' });
  };

  return (
    <div className="py-4 text-left flex flex-col gap-8 max-w-3xl mx-auto">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Global Weather Advisor
        </h1>
        <p className="text-sm text-slate-500">
          Check real-time conditions pulled directly from meteorology systems. Receive packing checklists and travel suggestions instantly.
        </p>
      </div>

      {/* Search Input bar */}
      <form onSubmit={handleSearchSubmit} className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search global city (e.g. Paris, Tokyo, Cape Town, Bali...)"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          className="w-full pl-12 pr-28 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/40 shadow-sm text-sm focus:outline-none focus:border-teal-500 text-slate-800 dark:text-slate-100"
        />
        <button
          type="submit"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 px-4 py-2 bg-teal-605 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow"
        >
          Check weather
        </button>
      </form>

      {/* Weather Info Panels */}
      {loading ? (
        <WeatherSkeleton />
      ) : error ? (
        <div className="p-8 rounded-3xl bg-rose-50 border border-rose-200 text-rose-800 dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-250 flex items-start gap-4">
          <AlertTriangle className="shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-sm">Location Lookup Failed</span>
            <p className="text-xs leading-relaxed font-semibold">{error}</p>
          </div>
        </div>
      ) : (
        weatherData && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Current Weather summary card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col gap-6">
              
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <span className="text-[10px] font-bold text-teal-650 uppercase tracking-widest flex items-center gap-1">
                    <Navigation size={10} /> Live Conditions
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-slate-850 dark:text-slate-100 mt-1">
                    {weatherData.cityName}
                  </h3>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                      {getWeatherInfo(weatherData.current.weathercode).label}
                    </span>
                    <span className="text-[10px] text-slate-455 block mt-0.5">Updated just now</span>
                  </div>
                  {getWeatherInfo(weatherData.current.weathercode).icon}
                </div>
              </div>

              {/* Temperature display and winds */}
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-slate-850 dark:text-slate-100">
                  {Math.round(weatherData.current.temperature)}°C
                </span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  / {Math.round((weatherData.current.temperature * 9) / 5 + 32)}°F
                </span>
              </div>

              {/* Minor stats grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-850 pt-6">
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
                  <Wind className="text-teal-500" size={16} />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Wind Speed</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{weatherData.current.windspeed} km/h</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
                  <Droplet className="text-teal-500" size={16} />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Climate Type</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Temperate</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
                  <Thermometer className="text-teal-500" size={16} />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Real Feel</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{Math.round(weatherData.current.temperature + 1)}°C</span>
                </div>
              </div>
            </div>

            {/* Smart travel advisor card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white flex items-start gap-4 border border-slate-800">
              <Umbrella className="text-teal-400 shrink-0 mt-0.5" size={20} />
              <div className="flex flex-col gap-1.5">
                <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400">Smart Travel Advisory</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  {getWeatherInfo(weatherData.current.weathercode).adv}
                </p>
              </div>
            </div>

            {/* 5-Day Forecast Grid */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-350">5-Day Forecast</h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
                {weatherData.daily.time.slice(1, 6).map((timeStr, index) => {
                  const maxTemp = weatherData.daily.temperature_2m_max[index + 1];
                  const minTemp = weatherData.daily.temperature_2m_min[index + 1];
                  const code = weatherData.daily.weathercode[index + 1];
                  
                  return (
                    <div 
                      key={timeStr} 
                      className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col items-center gap-3 text-center"
                    >
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {getDayName(timeStr)}
                      </span>
                      
                      {getWeatherInfo(code).icon}
                      
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-black text-slate-800 dark:text-slate-100">{Math.round(maxTemp)}°</span>
                        <span className="text-[10px] text-slate-400 font-bold">{Math.round(minTemp)}°</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};
