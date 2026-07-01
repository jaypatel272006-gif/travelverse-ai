import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Heart, User, LogOut, Compass, Sparkles, Map, CloudSun, CalendarDays, Landmark, Layers, Mic, MicOff } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { theme, toggleTheme, user, logout, wishlist, setActiveTheme, showToast } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showEnginesMenu, setShowEnginesMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isListening, setIsListening] = useState(false);
  const [voiceTooltip, setVoiceTooltip] = useState('Voice Commands');

  const startVoiceControl = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('Speech recognition not supported in this browser. Please use Google Chrome or Microsoft Edge.', 'error');
      return;
    }

    const rec = new SpeechRecognition();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onstart = () => {
      setIsListening(true);
      setVoiceTooltip('Listening...');
      showToast('Speech recognition active. Speak command.', 'info');
    };

    rec.onend = () => {
      setIsListening(false);
      setVoiceTooltip('Voice Commands');
    };

    rec.onerror = (e) => {
      setIsListening(false);
      setVoiceTooltip('Voice Commands');
      if (e.error === 'not-allowed') {
        showToast('Microphone permission blocked. Please enable permissions.', 'error');
      } else {
        showToast('Speech recognition error occurred.', 'error');
      }
    };

    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript.toLowerCase();
      showToast(`Voice query: "${transcript}"`, 'success');

      // Commands routing
      if (transcript.includes('flight') || transcript.includes('plane') || transcript.includes('ticket')) {
        navigate('/flights');
        showToast('Navigating to Flights tracker...');
      } else if (transcript.includes('india') || transcript.includes('explorer') || transcript.includes('360')) {
        navigate('/india-explorer');
        showToast('Navigating to India 360 Explorer...');
      } else if (transcript.includes('spiritual') || transcript.includes('temple') || transcript.includes('shrine') || transcript.includes('pilgrim')) {
        navigate('/spiritual');
        showToast('Navigating to Spiritual Shrines...');
      } else if (transcript.includes('map') || transcript.includes('location') || transcript.includes('marker')) {
        navigate('/maps');
        showToast('Navigating to Explorer Maps...');
      } else if (transcript.includes('dna') || transcript.includes('personality') || transcript.includes('quiz')) {
        navigate('/personality-lab');
        showToast('Navigating to Travel DNA Lab...');
      } else if (transcript.includes('achieve') || transcript.includes('mission') || transcript.includes('badge')) {
        navigate('/achievements');
        showToast('Navigating to Explorer Missions...');
      } else if (transcript.includes('itinerary') || transcript.includes('plan')) {
        navigate('/planner');
        showToast('Navigating to AI Itinerary Planner...');
      } else if (transcript.includes('dream') || transcript.includes('generator')) {
        navigate('/dream-trip');
        showToast('Navigating to Dream Trip AI...');
      } else if (transcript.includes('earth') || transcript.includes('globe') || transcript.includes('twin')) {
        navigate('/earth-engine');
        showToast('Navigating to Digital Earth Twin...');
      } else if (transcript.includes('utilities') || transcript.includes('tool')) {
        navigate('/utilities');
        showToast('Navigating to Travel Utilities...');
      } else if (transcript.includes('live') || transcript.includes('radar')) {
        navigate('/live-explorer');
        showToast('Navigating to Live Radar feed...');
      } else if (transcript.includes('wishlist') || transcript.includes('cache')) {
        navigate('/wishlist');
        showToast('Navigating to Wishlist ledger...');
      } else if (transcript.includes('road') || transcript.includes('drive') || transcript.includes('car')) {
        navigate('/road-trip-os');
        showToast('Navigating to Road Trip OS...');
      } else if (transcript.includes('home') || transcript.includes('space') || transcript.includes('station')) {
        navigate('/');
        showToast('Returning to Home space terminal...');
      } else if (transcript.includes('theme cyberpunk') || transcript.includes('cyberpunk')) {
        setActiveTheme('cyberpunk');
        showToast('Active layout updated: Cyberpunk 2100.');
      } else if (transcript.includes('theme space') || transcript.includes('space theme')) {
        setActiveTheme('space');
        showToast('Active layout updated: Space Station.');
      } else if (transcript.includes('theme luxury') || transcript.includes('luxury theme')) {
        setActiveTheme('luxury');
        showToast('Active layout updated: Zenith Luxury.');
      } else if (transcript.includes('theme temple') || transcript.includes('temple theme')) {
        setActiveTheme('temple');
        showToast('Active layout updated: Sacred Temple.');
      } else if (transcript.includes('theme ocean') || transcript.includes('ocean theme')) {
        setActiveTheme('ocean');
        showToast('Active layout updated: Ocean Wave.');
      } else {
        showToast(`Command not routed. Try saying "show flights" or "theme cyberpunk".`, 'error');
      }
    };

    rec.start();
  };

  // Total wishlist item count
  const wishlistCount = Object.values(wishlist).reduce((total, arr) => total + arr.length, 0);

  const navLinks = [
    { path: '/', label: 'Home', icon: <Compass size={14} /> },
    { path: '/destinations', label: 'Destinations', icon: <Map size={14} /> },
    { path: '/india-explorer', label: 'India Explorer', icon: <Landmark size={14} /> },
    { path: '/planner', label: 'AI Planner', icon: <Sparkles size={14} /> },
    { path: '/spiritual', label: 'Spiritual', icon: <span className="text-[12px]">🔱</span> },
  ];

  const engineLinks = [
    { path: '/earth-engine', label: 'Earth Engine 3D', icon: <span className="text-[12px]">🌏</span> },
    { path: '/dream-trip', label: 'Dream Trip AI', icon: <span className="text-[12px]">🔮</span> },
    { path: '/recognition', label: 'Landmark Scanner', icon: <span className="text-[12px]">📷</span> },
    { path: '/personality-lab', label: 'Travel DNA Quiz', icon: <span className="text-[12px]">🧬</span> },
    { path: '/utilities', label: 'Travel Utilities', icon: <span className="text-[12px]">🛠️</span> },
    { path: '/live-explorer', label: 'Live Explorer', icon: <span className="text-[12px]">📡</span> },
    { path: '/achievements', label: 'Achievements', icon: <span className="text-[12px]">🏆</span> },
    { path: '/flights', label: 'Flights Tracker', icon: <span className="text-[12px]">✈️</span> },
    { path: '/hotels', label: 'Stations & Lodges', icon: <span className="text-[12px]">🏨</span> },
    { path: '/packages', label: 'Packages Ledger', icon: <CalendarDays size={12} /> },
    { path: '/weather', label: 'Atmosphere advisor', icon: <CloudSun size={12} /> },
    { path: '/maps', label: 'Explorer Map', icon: <Map size={12} /> },
    { path: '/road-trip-os', label: 'Road Trip OS', icon: <span className="text-[12px]">🚗</span> }
  ];

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/login');
  };

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-4 sm:px-6 lg:px-8 ${isScrolled ? 'py-2.5' : 'py-4'}`}>
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 backdrop-blur-lg border ${
        isScrolled 
          ? 'bg-white/75 dark:bg-slate-950/75 border-slate-200/50 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] px-6 py-2.5' 
          : 'bg-white/90 dark:bg-slate-950/90 border-slate-200/30 dark:border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] px-6 py-3.5'
      } flex items-center justify-between`}>
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 select-none group shrink-0 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded-lg">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            <Sparkles size={18} className="animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold text-xl tracking-tight text-slate-800 dark:text-slate-100 bg-clip-text">
              Travel<span className="text-teal-600 dark:text-teal-400">Verse</span>
            </span>
            <span className="px-1.5 py-0.5 text-[7.5px] font-black font-mono tracking-widest bg-gradient-to-r from-teal-500 to-sky-400 text-slate-950 rounded uppercase shadow-[0_0_8px_rgba(45,212,191,0.4)] animate-pulse">
              2100 OS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Link Menu */}
        <div className="hidden xl:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500/10 to-sky-500/10 text-teal-655 dark:text-teal-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-teal-500/15 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 border border-transparent'
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}

          {/* OS Engines Hover Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setShowEnginesMenu(true)}
            onMouseLeave={() => setShowEnginesMenu(false)}
          >
            <button 
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-500 outline-none"
            >
              <Layers size={14} className="text-teal-400 animate-pulse" />
              <span>OS Engines</span>
            </button>
            
            <AnimatePresence>
              {showEnginesMenu && (
                <>
                  <div className="absolute top-full left-0 w-max min-w-[200px] mt-1 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 shadow-2xl z-50 flex flex-col gap-0.5 text-left animate-in fade-in slide-in-from-top-1">
                    {engineLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setShowEnginesMenu(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 rounded-xl"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Floating Voice Mic Trigger */}
          <button
            type="button"
            onClick={startVoiceControl}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center relative ${
              isListening 
                ? 'bg-rose-500/10 border-rose-500 text-rose-500 shadow-[0_0_15px_rgba(239,68,68,0.25)] animate-pulse' 
                : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300'
            }`}
            title={voiceTooltip}
          >
            {isListening ? <Mic size={15} className="animate-bounce" /> : <Mic size={15} />}
            {isListening && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            )}
          </button>

          {/* Light/Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 relative transition-colors"
          >
            <Heart size={15} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center animate-bounce shadow-md">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Profile Dropdown or Log In Button */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-7 h-7 rounded-lg object-cover"
                />
                <span className="hidden md:inline text-xs font-bold text-slate-700 dark:text-slate-300 line-clamp-1 max-w-[90px]">
                  {user.name.split(' ')[0]}
                </span>
              </button>

              {/* Profile Menu Dropdown */}
              <AnimatePresence>
                {showProfileMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowProfileMenu(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2.5 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-2xl p-2 z-50 text-left"
                    >
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-xs text-slate-400 font-semibold">Logged in as</p>
                        <p className="text-sm font-bold text-slate-850 dark:text-slate-150 truncate mt-0.5">{user.name}</p>
                      </div>
                      
                      <div className="py-1.5 flex flex-col gap-0.5">
                        <Link
                          to="/dashboard"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <User size={13} className="text-teal-500" />
                          My Dashboard
                        </Link>
                        <Link
                          to="/maps"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <Map size={13} className="text-teal-500" />
                          My Life Map
                        </Link>
                        <Link
                          to="/challenges"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <Sparkles size={13} className="text-teal-500" />
                          Missions & Food Passport
                        </Link>
                        <Link
                          to="/roulette"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <span className="text-[12px]">🎰</span>
                          Adventure Roulette
                        </Link>
                        <Link
                          to="/legacy"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <span className="text-[12px]">⏳</span>
                          Poster Lab & Capsules
                        </Link>
                        <Link
                          to="/spiritual"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <span className="text-[12px]">🔱</span>
                          Spiritual Universe
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl transition-colors cursor-pointer text-left"
                        >
                          <LogOut size={13} />
                          Log Out
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-teal-600 dark:hover:bg-teal-400 dark:hover:text-slate-900 font-semibold text-xs tracking-wide transition-colors"
            >
              Sign In
            </Link>
          )}

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 xl:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-850 p-6 z-50 xl:hidden flex flex-col gap-6 text-left"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="font-display font-extrabold text-lg text-slate-850 dark:text-slate-100">
                  Menu Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[70vh]">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-teal-500/10 text-teal-600 dark:bg-teal-400/10 dark:text-teal-400'
                          : 'text-slate-655 dark:text-slate-305 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                      }`
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}

                <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest px-4">OS Engines</span>

                {engineLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-teal-500/10 text-teal-600 dark:bg-teal-400/10 dark:text-teal-400'
                          : 'text-slate-655 dark:text-slate-305 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                      }`
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-100 dark:border-slate-800 pt-4 flex flex-col gap-3">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-850 text-center font-bold text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 rounded-xl bg-teal-600 dark:bg-teal-500 text-white text-center font-bold text-sm hover:bg-teal-700 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">{user.name}</p>
                        <button
                          onClick={handleLogout}
                          className="text-xs text-rose-500 font-semibold hover:underline mt-0.5 cursor-pointer"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <Link
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                      >
                        <User size={13} className="text-teal-500" />
                        My Dashboard
                      </Link>
                      <Link
                        to="/maps"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                      >
                        <Map size={13} className="text-teal-500" />
                        My Life Map
                      </Link>
                      <Link
                        to="/challenges"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                      >
                        <Sparkles size={13} className="text-teal-500" />
                        Missions & Food Passport
                      </Link>
                      <Link
                        to="/roulette"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                      >
                        <span className="text-[12px]">🎰</span>
                        Adventure Roulette
                      </Link>
                      <Link
                        to="/legacy"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                      >
                        <span className="text-[12px]">⏳</span>
                        Poster Lab & Capsules
                      </Link>
                      <Link
                        to="/spiritual"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                      >
                        <span className="text-[12px]">🔱</span>
                        Spiritual Universe
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Premium Voice assistant Indicator Overlay */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-55 px-6 py-4 rounded-2xl bg-slate-950/90 border border-teal-500/20 shadow-[0_10px_35px_rgba(20,184,166,0.15)] flex flex-col items-center gap-2 backdrop-blur-md min-w-[320px] select-none text-center"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-widest">TRANSMISSION ACTIVE: OS LISTENING</span>
            </div>
            <p className="text-xs text-white font-bold animate-pulse mt-1">"Speak system command coordinates..."</p>
            <span className="text-[9px] font-mono text-slate-500 uppercase mt-1">Try: "flights", "spiritual", "road trip", "theme cyberpunk"</span>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
