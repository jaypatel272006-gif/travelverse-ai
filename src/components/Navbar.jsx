import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Moon, Heart, User, LogOut, Compass, Sparkles, Map, X,
  CloudSun, CalendarDays, Landmark, Layers, Mic, Search, ArrowRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { theme, toggleTheme, user, logout, wishlist, setActiveTheme, showToast } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showEnginesMenu, setShowEnginesMenu] = useState(false);
  const [showDestinationsMega, setShowDestinationsMega] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceTooltip, setVoiceTooltip] = useState('Voice Commands');
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for Ctrl + K command palette trigger
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const wishlistCount = Object.values(wishlist).reduce((total, arr) => total + arr.length, 0);

  const navLinks = [
    { path: '/', label: 'Home', icon: <Compass size={14} /> },
    { path: '/destinations', label: 'Destinations', icon: <Map size={14} />, isMega: true },
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

  const featuredDestinations = [
    { name: 'Varanasi Gateway', sub: 'Spiritual Matrix Core', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=120&q=80', link: '/destination/dest-varanasi' },
    { name: 'Goa Coastline', sub: 'Atmospheric Ocean Wave', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=120&q=80', link: '/destination/dest-goa' },
    { name: 'Jaipur Palace', sub: 'Solar Amber Heritage', image: 'https://images.unsplash.com/photo-1477587458883-4713584000a4?auto=format&fit=crop&w=120&q=80', link: '/destination/dest-jaipur' },
    { name: 'Leh Ladakh Twin', sub: 'Glacial Heights Terminal', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=120&q=80', link: '/destination/dest-leh' }
  ];

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/login');
  };

  const burgerVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    opened: (custom) => {
      if (custom === 'top') return { rotate: 45, y: 8 };
      if (custom === 'bottom') return { rotate: -45, y: -8 };
      if (custom === 'mid') return { opacity: 0 };
      return {};
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-4 sm:px-6 lg:px-8 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? 'glass-neo shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_25px_rgba(20,184,166,0.08)] px-6 py-2.5' 
          : 'bg-transparent border-transparent px-6 py-3.5 shadow-none'
      } flex items-center justify-between`}>
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 select-none group shrink-0 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded-lg">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            <Sparkles size={18} className="animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 align-middle">
            <span className="font-display font-extrabold text-xl tracking-tight text-slate-800 dark:text-slate-100 bg-clip-text">
              Travel<span className="text-teal-600 dark:text-teal-400">Verse</span>
            </span>
            <span className="px-1.5 py-0.5 text-[7.5px] font-black font-mono tracking-widest bg-gradient-to-r from-teal-500 to-sky-400 text-slate-950 rounded uppercase shadow-[0_0_8px_rgba(45,212,191,0.4)] animate-pulse">
              2100 OS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Link Menu */}
        <div className="hidden xl:flex items-center gap-3">
          {navLinks.map((link) => {
            const isMega = link.isMega;
            return (
              <div 
                key={link.path}
                className="relative py-2"
                onMouseEnter={() => isMega && setShowDestinationsMega(true)}
                onMouseLeave={() => isMega && setShowDestinationsMega(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none hover:scale-[1.03] active:scale-[0.97] relative ${
                      isActive
                        ? 'text-teal-600 dark:text-teal-400 font-bold'
                        : 'text-slate-600 dark:text-slate-350 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 border border-transparent'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.icon}
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500 dark:bg-teal-450 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                {/* Destinations Mega Menu Dropdown */}
                {isMega && (
                  <AnimatePresence>
                    {showDestinationsMega && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[480px] p-4 rounded-3xl glass-neo shadow-2xl z-55 grid grid-cols-2 gap-3.5 border border-white/10"
                      >
                        {featuredDestinations.map(dest => (
                          <Link
                            key={dest.name}
                            to={dest.link}
                            onClick={() => setShowDestinationsMega(false)}
                            className="flex items-center gap-3 p-2 rounded-2xl hover:bg-white/5 border border-transparent hover:border-teal-500/20 transition-all duration-300 group"
                          >
                            <img src={dest.image} alt={dest.name} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-white group-hover:text-teal-400 transition-colors truncate">{dest.name}</p>
                              <p className="text-[9px] font-mono text-slate-400 uppercase mt-0.5 truncate">{dest.sub}</p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}

          {/* OS Engines Hover Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setShowEnginesMenu(true)}
            onMouseLeave={() => setShowEnginesMenu(false)}
          >
            <button 
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-350 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-500 outline-none"
            >
              <Layers size={14} className="text-teal-400 animate-pulse" />
              <span>OS Engines</span>
            </button>
            
            <AnimatePresence>
              {showEnginesMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowEnginesMenu(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="absolute top-full left-0 w-max min-w-[200px] mt-2 p-2 rounded-2xl glass-neo shadow-2xl z-50 flex flex-col gap-0.5 text-left"
                  >
                    {engineLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setShowEnginesMenu(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-650 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-850/60 rounded-xl"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Spotlight Palette Trigger */}
          <button
            onClick={() => setIsPaletteOpen(true)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 relative transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none hover:scale-[1.05] active:scale-[0.95]"
            title="Command Palette (Ctrl + K)"
          >
            <Search size={15} />
          </button>

          {/* Floating Voice Mic Trigger */}
          <button
            type="button"
            onClick={startVoiceControl}
            className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center relative focus-visible:ring-2 focus-visible:ring-teal-500 outline-none hover:scale-[1.05] active:scale-[0.95] ${
              isListening 
                ? 'bg-rose-500/10 border-rose-500 text-rose-500 shadow-[0_0_15px_rgba(239,68,68,0.25)] animate-pulse' 
                : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300'
            }`}
            title={voiceTooltip}
          >
            <Mic size={15} />
          </button>

          {/* Light/Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none hover:scale-[1.05] active:scale-[0.95]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 relative transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none hover:scale-[1.05] active:scale-[0.95]"
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
                className="flex items-center gap-2 p-1.5 pr-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-55 dark:hover:bg-slate-800/60 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none hover:scale-[1.03] active:scale-[0.97]"
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
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="absolute right-0 mt-2.5 w-56 rounded-2xl glass-neo shadow-2xl p-2 z-50 text-left"
                    >
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-xs text-slate-400 font-semibold">Logged in as</p>
                        <p className="text-sm font-bold text-slate-850 dark:text-slate-150 truncate mt-0.5">{user.name}</p>
                      </div>
                      
                      <div className="py-1.5 flex flex-col gap-0.5">
                        <Link
                          to="/dashboard"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <User size={13} className="text-teal-500" />
                          My Dashboard
                        </Link>
                        <Link
                          to="/maps"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <Map size={13} className="text-teal-500" />
                          My Life Map
                        </Link>
                        <Link
                          to="/challenges"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <Sparkles size={13} className="text-teal-500" />
                          Missions & Food Passport
                        </Link>
                        <Link
                          to="/roulette"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-655 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <span className="text-[12px]">🎰</span>
                          Adventure Roulette
                        </Link>
                        <Link
                          to="/legacy"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-655 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
                        >
                          <span className="text-[12px]">⏳</span>
                          Poster Lab & Capsules
                        </Link>
                        <Link
                          to="/spiritual"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-655 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/60 rounded-xl"
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
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              Sign In
            </Link>
          )}

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex flex-col gap-1.5 justify-center items-center p-3 rounded-xl border border-slate-200 dark:border-slate-850 hover:bg-slate-800/40 text-slate-300 transition-all focus-visible:ring-2 focus-visible:ring-teal-500 outline-none w-10 h-10 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <motion.div animate={isOpen ? "opened" : "closed"} custom="top" variants={burgerVariants} className="w-5 h-0.5 bg-slate-500 dark:bg-slate-300 rounded" />
            <motion.div animate={isOpen ? "opened" : "closed"} custom="mid" variants={burgerVariants} className="w-5 h-0.5 bg-slate-500 dark:bg-slate-300 rounded" />
            <motion.div animate={isOpen ? "opened" : "closed"} custom="bottom" variants={burgerVariants} className="w-5 h-0.5 bg-slate-500 dark:bg-slate-300 rounded" />
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
              className="fixed right-0 top-0 bottom-0 w-[280px] glass-neo border-l border-slate-850 p-6 z-55 xl:hidden flex flex-col gap-6 text-left shadow-[0_-10px_35px_rgba(0,0,0,0.35)]"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="font-display font-extrabold text-lg text-slate-100">
                  Menu Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl border border-slate-800 hover:bg-slate-850 flex items-center justify-center min-w-[44px] min-h-[44px]"
                >
                  <X size={20} />
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
                          ? 'bg-teal-500/10 text-teal-400'
                          : 'text-slate-300 hover:bg-slate-800/40'
                      }`
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}

                <div className="h-px bg-slate-800 my-2" />
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest px-4">OS Engines</span>

                {engineLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-teal-500/10 text-teal-400'
                          : 'text-slate-300 hover:bg-slate-800/40'
                      }`
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-800 pt-4 flex flex-col gap-3">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 rounded-xl border border-slate-850 text-center font-bold text-sm text-slate-300 hover:bg-slate-850 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 rounded-xl bg-teal-500 text-white text-center font-bold text-sm hover:bg-teal-650 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-bold text-slate-100 truncate">{user.name}</p>
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
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-850/60 rounded-xl"
                      >
                        <User size={13} className="text-teal-500" />
                        My Dashboard
                      </Link>
                      <Link
                        to="/maps"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-850/60 rounded-xl"
                      >
                        <Map size={13} className="text-teal-500" />
                        My Life Map
                      </Link>
                      <Link
                        to="/challenges"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-850/60 rounded-xl"
                      >
                        <Sparkles size={13} className="text-teal-500" />
                        Missions & Food Passport
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Ctrl + K Command Palette Overlay */}
      <AnimatePresence>
        {isPaletteOpen && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaletteOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="w-full max-w-lg p-5 rounded-3xl glass-neo shadow-2xl relative z-10 border border-teal-500/20 text-left"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 focus-within:border-teal-500 transition-all duration-300">
                <Search className="text-teal-400" size={16} />
                <input
                  type="text"
                  placeholder="Type a command or coordinate..."
                  value={paletteQuery}
                  onChange={(e) => setPaletteQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-white text-xs w-full placeholder-slate-500 focus:ring-0 focus:outline-none font-mono"
                  autoFocus
                />
                <span className="text-[8px] font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-slate-400">ESC</span>
              </div>

              <div className="mt-4 flex flex-col gap-1 max-h-[250px] overflow-y-auto">
                <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest px-2 mb-1">AI TELEPORT DIRECTIVES</span>
                {engineLinks.concat(navLinks).filter(item => item.label.toLowerCase().includes(paletteQuery.toLowerCase())).map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setIsPaletteOpen(false); setPaletteQuery(''); }}
                    className="flex items-center justify-between p-2.5 hover:bg-white/5 rounded-xl text-xs font-semibold text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight size={12} className="text-slate-600" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
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
