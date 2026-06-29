import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { CinematicLoader } from './components/CinematicLoader';
import ErrorBoundary from './components/ErrorBoundary';
import PWAInstallPrompt from './components/PWAInstallPrompt';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Destinations = lazy(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));
const DestinationDetails = lazy(() => import('./pages/DestinationDetails').then(m => ({ default: m.DestinationDetails })));
const AITripPlanner = lazy(() => import('./pages/AITripPlanner').then(m => ({ default: m.AITripPlanner })));
const Flights = lazy(() => import('./pages/Flights').then(m => ({ default: m.Flights })));
const Hotels = lazy(() => import('./pages/Hotels').then(m => ({ default: m.Hotels })));
const TourPackages = lazy(() => import('./pages/TourPackages').then(m => ({ default: m.TourPackages })));
const Weather = lazy(() => import('./pages/Weather').then(m => ({ default: m.Weather })));
const Maps = lazy(() => import('./pages/Maps').then(m => ({ default: m.Maps })));
const Wishlist = lazy(() => import('./pages/Wishlist').then(m => ({ default: m.Wishlist })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));
const Register = lazy(() => import('./pages/Register').then(m => ({ default: m.Register })));
const IndiaExplorer = lazy(() => import('./pages/IndiaExplorer').then(m => ({ default: m.IndiaExplorer })));
const Challenges = lazy(() => import('./pages/Challenges').then(m => ({ default: m.Challenges })));
const AdventureRoulette = lazy(() => import('./pages/AdventureRoulette').then(m => ({ default: m.AdventureRoulette })));
const LegacyCapsule = lazy(() => import('./pages/LegacyCapsule').then(m => ({ default: m.LegacyCapsule })));
const SpiritualUniverse = lazy(() => import('./pages/SpiritualUniverse').then(m => ({ default: m.SpiritualUniverse })));

// New pages
const LiveExplorer = lazy(() => import('./pages/LiveExplorer').then(m => ({ default: m.LiveExplorer })));
const DreamTripGenerator = lazy(() => import('./pages/DreamTripGenerator').then(m => ({ default: m.DreamTripGenerator })));
const EarthEngine = lazy(() => import('./pages/EarthEngine').then(m => ({ default: m.EarthEngine })));
const RecognitionEngine = lazy(() => import('./pages/RecognitionEngine').then(m => ({ default: m.RecognitionEngine })));
const PersonalityLab = lazy(() => import('./pages/PersonalityLab').then(m => ({ default: m.PersonalityLab })));
const TravelUtilities = lazy(() => import('./pages/TravelUtilities').then(m => ({ default: m.TravelUtilities })));
const Achievements = lazy(() => import('./pages/Achievements').then(m => ({ default: m.Achievements })));
const RoadTripOS = lazy(() => import('./pages/RoadTripOS').then(m => ({ default: m.RoadTripOS })));

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Route-based Page Transition container
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(5px)' }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// High-fidelity Loading Fallback
const LoadingFallback = () => (
  <div className="w-full min-h-[400px] flex flex-col justify-center items-center gap-4 text-slate-500 font-mono text-xs">
    <div className="w-10 h-10 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
    <span className="animate-pulse tracking-widest uppercase text-teal-400 font-bold">CALIBRATING WORKSPACE...</span>
  </div>
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
