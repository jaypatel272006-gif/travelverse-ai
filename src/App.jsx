import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RouteErrorBoundary from './components/RouteErrorBoundary';

// Lazy loading core application pages for maximum performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AITripPlanner = lazy(() => import('./pages/AITripPlanner'));
const ExploreEngine = lazy(() => import('./pages/ExploreEngine'));
const JourneyCockpit = lazy(() => import('./pages/JourneyCockpit'));
const MapAtlas = lazy(() => import('./pages/MapAtlas'));
const MemoryVault = lazy(() => import('./pages/MemoryVault'));
const BudgetOS = lazy(() => import('./pages/BudgetOS'));
const TravelDNALab = lazy(() => import('./pages/TravelDNALab'));
const DesignSystemShowcase = lazy(() => import('./pages/DesignSystemShowcase'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Smooth Sandstone Heritage Loading Screen
const PageLoader = () => (
  <div className="min-h-screen bg-[#1B120C] flex flex-col items-center justify-center space-y-4 text-[#F5E7CF] font-sans-ui">
    <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center animate-spin duration-3000">
      <span className="font-serif-heritage text-lg font-bold text-[#D4A66A]">TV</span>
    </div>
    <span className="text-xs font-mono text-[#D4A66A] tracking-widest uppercase">
      INITIALIZING MISSION CONTROL OS...
    </span>
  </div>
);

export function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Core Mission Control Routes */}
        <Route path="/" element={<RouteErrorBoundary><Dashboard /></RouteErrorBoundary>} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/planner" element={<RouteErrorBoundary><AITripPlanner /></RouteErrorBoundary>} />
        <Route path="/explore" element={<RouteErrorBoundary><ExploreEngine /></RouteErrorBoundary>} />
        <Route path="/journey" element={<RouteErrorBoundary><JourneyCockpit /></RouteErrorBoundary>} />
        <Route path="/map" element={<RouteErrorBoundary><MapAtlas /></RouteErrorBoundary>} />
        <Route path="/memories" element={<RouteErrorBoundary><MemoryVault /></RouteErrorBoundary>} />
        <Route path="/budget" element={<RouteErrorBoundary><BudgetOS /></RouteErrorBoundary>} />
        <Route path="/dna" element={<RouteErrorBoundary><TravelDNALab /></RouteErrorBoundary>} />

        {/* Official Design System Showcase Route */}
        <Route path="/design-system" element={<RouteErrorBoundary><DesignSystemShowcase /></RouteErrorBoundary>} />

        {/* 404 Fallback */}
        <Route path="*" element={<RouteErrorBoundary><NotFound /></RouteErrorBoundary>} />
      </Routes>
    </Suspense>
  );
}

export default App;
