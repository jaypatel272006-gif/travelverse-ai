import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AppShell from './components/shell/AppShell';
import { TravelOSBootLoader } from './components/loading/TravelOSBootLoader';
import ErrorBoundary from './components/ErrorBoundary';

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
const JourneyCockpit = lazyWithRetry(() => import('./pages/JourneyCockpit').then(m => ({ default: m.JourneyCockpit })));
const Maps = lazyWithRetry(() => import('./pages/Maps').then(m => ({ default: m.Maps })));
const Memories = lazyWithRetry(() => import('./pages/Memories').then(m => ({ default: m.Memories })));
const BudgetOS = lazyWithRetry(() => import('./pages/BudgetOS').then(m => ({ default: m.BudgetOS })));
const Flights = lazyWithRetry(() => import('./pages/Flights').then(m => ({ default: m.Flights })));
const Hotels = lazyWithRetry(() => import('./pages/Hotels').then(m => ({ default: m.Hotels })));
const TourPackages = lazyWithRetry(() => import('./pages/TourPackages').then(m => ({ default: m.TourPackages })));
const Weather = lazyWithRetry(() => import('./pages/Weather').then(m => ({ default: m.Weather })));
const Wishlist = lazyWithRetry(() => import('./pages/Wishlist').then(m => ({ default: m.Wishlist })));
const Dashboard = lazyWithRetry(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Contact = lazyWithRetry(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazyWithRetry(() => import('./pages/Login').then(m => ({ default: m.Login })));
const Register = lazyWithRetry(() => import('./pages/Register').then(m => ({ default: m.Register })));
const IndiaExplorer = lazyWithRetry(() => import('./pages/IndiaExplorer').then(m => ({ default: m.IndiaExplorer })));
const SpiritualUniverse = lazyWithRetry(() => import('./pages/SpiritualUniverse').then(m => ({ default: m.SpiritualUniverse })));
const LegacyCapsule = lazyWithRetry(() => import('./pages/LegacyCapsule').then(m => ({ default: m.LegacyCapsule })));
const NotFound = lazyWithRetry(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full gap-4 text-center">
    <div className="w-10 h-10 rounded-full border-2 border-teal-400 border-t-transparent animate-spin" />
    <span className="font-mono text-xs text-teal-400 uppercase tracking-widest animate-pulse">
      LOADING TRAVEL OS QUANTUM MODULE...
    </span>
  </div>
);

// Route-based Page Transition container
const PageTransition = ({ children }) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const variants = {
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    exit: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export function App() {
  const location = useLocation();
  const [booting, setBooting] = useState(true);

  return (
    <>
      <AnimatePresence>
        {booting && <TravelOSBootLoader onComplete={() => setBooting(false)} />}
      </AnimatePresence>

      {!booting && (
        <AppShell>
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                  <Route path="/destinations" element={<PageTransition><Destinations /></PageTransition>} />
                  <Route path="/destination/:id" element={<PageTransition><DestinationDetails /></PageTransition>} />
                  <Route path="/planner" element={<PageTransition><AITripPlanner /></PageTransition>} />
                  <Route path="/cockpit" element={<PageTransition><JourneyCockpit /></PageTransition>} />
                  <Route path="/maps" element={<PageTransition><Maps /></PageTransition>} />
                  <Route path="/memories" element={<PageTransition><Memories /></PageTransition>} />
                  <Route path="/budget" element={<PageTransition><BudgetOS /></PageTransition>} />
                  <Route path="/india-explorer" element={<PageTransition><IndiaExplorer /></PageTransition>} />
                  <Route path="/spiritual" element={<PageTransition><SpiritualUniverse /></PageTransition>} />
                  <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
                  <Route path="/flights" element={<PageTransition><Flights /></PageTransition>} />
                  <Route path="/hotels" element={<PageTransition><Hotels /></PageTransition>} />
                  <Route path="/packages" element={<PageTransition><TourPackages /></PageTransition>} />
                  <Route path="/weather" element={<PageTransition><Weather /></PageTransition>} />
                  <Route path="/wishlist" element={<PageTransition><Wishlist /></PageTransition>} />
                  <Route path="/legacy" element={<PageTransition><LegacyCapsule /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
                  <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
                  <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </ErrorBoundary>
        </AppShell>
      )}
    </>
  );
}

export default App;
