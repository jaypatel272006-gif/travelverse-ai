import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { CinematicLoader } from './components/CinematicLoader';
import ErrorBoundary from './components/ErrorBoundary';
import PWAInstallPrompt from './components/PWAInstallPrompt';

// Helper to catch dynamic chunk loading failures on new deployments and auto-retry
const lazyWithRetry = (importFn) => {
  return lazy(() => 
    importFn().catch((error) => {
      const isFailedFetch = error.message && (
        error.message.includes('Failed to fetch dynamically imported module') ||
        error.message.includes('error loading dynamically imported module')
      );
      if (isFailedFetch) {
        window.location.reload();
      }
      return Promise.reject(error);
    })
  );
};

// Lazy load all page components
const Home = lazyWithRetry(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Destinations = lazyWithRetry(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));
const DestinationDetails = lazyWithRetry(() => import('./pages/DestinationDetails').then(m => ({ default: m.DestinationDetails })));
const AITripPlanner = lazyWithRetry(() => import('./pages/AITripPlanner').then(m => ({ default: m.AITripPlanner })));
const Flights = lazyWithRetry(() => import('./pages/Flights').then(m => ({ default: m.Flights })));
const Hotels = lazyWithRetry(() => import('./pages/Hotels').then(m => ({ default: m.Hotels })));
const TourPackages = lazyWithRetry(() => import('./pages/TourPackages').then(m => ({ default: m.TourPackages })));
const Weather = lazyWithRetry(() => import('./pages/Weather').then(m => ({ default: m.Weather })));
const Maps = lazyWithRetry(() => import('./pages/Maps').then(m => ({ default: m.Maps })));
const Wishlist = lazyWithRetry(() => import('./pages/Wishlist').then(m => ({ default: m.Wishlist })));
const Dashboard = lazyWithRetry(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Contact = lazyWithRetry(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazyWithRetry(() => import('./pages/Login').then(m => ({ default: m.Login })));
const Register = lazyWithRetry(() => import('./pages/Register').then(m => ({ default: m.Register })));
const IndiaExplorer = lazyWithRetry(() => import('./pages/IndiaExplorer').then(m => ({ default: m.IndiaExplorer })));
const Challenges = lazyWithRetry(() => import('./pages/Challenges').then(m => ({ default: m.Challenges })));
const AdventureRoulette = lazyWithRetry(() => import('./pages/AdventureRoulette').then(m => ({ default: m.AdventureRoulette })));
const LegacyCapsule = lazyWithRetry(() => import('./pages/LegacyCapsule').then(m => ({ default: m.LegacyCapsule })));
const SpiritualUniverse = lazyWithRetry(() => import('./pages/SpiritualUniverse').then(m => ({ default: m.SpiritualUniverse })));

// New pages
const LiveExplorer = lazyWithRetry(() => import('./pages/LiveExplorer').then(m => ({ default: m.LiveExplorer })));
const DreamTripGenerator = lazyWithRetry(() => import('./pages/DreamTripGenerator').then(m => ({ default: m.DreamTripGenerator })));
const EarthEngine = lazyWithRetry(() => import('./pages/EarthEngine').then(m => ({ default: m.EarthEngine })));
const RecognitionEngine = lazyWithRetry(() => import('./pages/RecognitionEngine').then(m => ({ default: m.RecognitionEngine })));
const PersonalityLab = lazyWithRetry(() => import('./pages/PersonalityLab').then(m => ({ default: m.PersonalityLab })));
const TravelUtilities = lazyWithRetry(() => import('./pages/TravelUtilities').then(m => ({ default: m.TravelUtilities })));
const Achievements = lazyWithRetry(() => import('./pages/Achievements').then(m => ({ default: m.Achievements })));
const RoadTripOS = lazyWithRetry(() => import('./pages/RoadTripOS').then(m => ({ default: m.RoadTripOS })));

// High-fidelity Scroll coordinate manager (restores scroll coordinates per path)
const ScrollManager = () => {
  const { pathname } = useLocation();
  const scrollPositions = useRef({});
  const lastPath = useRef(pathname);

  useEffect(() => {
    const handleScrollSave = () => {
      scrollPositions.current[lastPath.current] = window.scrollY;
    };

    window.addEventListener('scroll', handleScrollSave);

    const saved = scrollPositions.current[pathname];
    if (saved !== undefined) {
      window.scrollTo(0, saved);
    } else {
      window.scrollTo(0, 0);
    }

    lastPath.current = pathname;

    return () => {
      window.removeEventListener('scroll', handleScrollSave);
    };
  }, [pathname]);

  return null;
};

// Route-based Page Transition container
const PageTransition = ({ children }) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const variants = {
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, filter: 'blur(3px)' },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, filter: 'blur(3px)' },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={prefersReducedMotion ? { duration: 0.1 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// High-fidelity Loading Fallback with animations
const LoadingFallback = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full min-h-[400px] flex flex-col justify-center items-center gap-4 text-slate-500 font-mono text-xs"
  >
    <div className="w-10 h-10 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
    <span className="animate-pulse tracking-widest uppercase text-teal-400 font-bold">CALIBRATING WORKSPACE...</span>
  </motion.div>
);

function App() {
  const location = useLocation();
  const [appLoading, setAppLoading] = useState(false);

  // Play cinematic loader once per session
  useEffect(() => {
    const shown = sessionStorage.getItem('travelverse_intro_shown');
    if (!shown) {
      setAppLoading(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('travelverse_intro_shown', 'true');
    setAppLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <ScrollToTop />
      
      {/* Cinematic Load State */}
      <AnimatePresence>
        {appLoading && (
          <CinematicLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>
      
      {/* Custom Mouse Cursor */}
      <CustomCursor />
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-start">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/destinations" element={<PageTransition><Destinations /></PageTransition>} />
                <Route path="/destination/:id" element={<PageTransition><DestinationDetails /></PageTransition>} />
                <Route path="/planner" element={<PageTransition><AITripPlanner /></PageTransition>} />
                <Route path="/flights" element={<PageTransition><Flights /></PageTransition>} />
                <Route path="/hotels" element={<PageTransition><Hotels /></PageTransition>} />
                <Route path="/packages" element={<PageTransition><TourPackages /></PageTransition>} />
                <Route path="/weather" element={<PageTransition><Weather /></PageTransition>} />
                <Route path="/maps" element={<PageTransition><Maps /></PageTransition>} />
                <Route path="/wishlist" element={<PageTransition><Wishlist /></PageTransition>} />
                <Route path="/india-explorer" element={<PageTransition><IndiaExplorer /></PageTransition>} />
                <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
                <Route path="/challenges" element={<PageTransition><Challenges /></PageTransition>} />
                <Route path="/roulette" element={<PageTransition><AdventureRoulette /></PageTransition>} />
                <Route path="/legacy" element={<PageTransition><LegacyCapsule /></PageTransition>} />
                <Route path="/spiritual" element={<PageTransition><SpiritualUniverse /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
                <Route path="/register" element={<PageTransition><Register /></PageTransition>} />

                {/* New Routes */}
                <Route path="/live-explorer" element={<PageTransition><LiveExplorer /></PageTransition>} />
                <Route path="/dream-trip" element={<PageTransition><DreamTripGenerator /></PageTransition>} />
                <Route path="/earth-engine" element={<PageTransition><EarthEngine /></PageTransition>} />
                <Route path="/recognition" element={<PageTransition><RecognitionEngine /></PageTransition>} />
                <Route path="/personality-lab" element={<PageTransition><PersonalityLab /></PageTransition>} />
                <Route path="/utilities" element={<PageTransition><TravelUtilities /></PageTransition>} />
                <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
                <Route path="/road-trip-os" element={<PageTransition><RoadTripOS /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Footer Details */}
      <Footer />
      
      {/* AI Assistant Widget */}
      <AIAssistantWidget />

      {/* PWA Installer Overlay */}
      <PWAInstallPrompt />
    </div>
  );
}

export default App;
