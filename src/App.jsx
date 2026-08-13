import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';

// Core Operating Pages
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import ExploreEngine from './pages/ExploreEngine';
import DestinationDossier from './pages/DestinationDossier';
import AITripPlanner from './pages/AITripPlanner';
import JourneyCockpit from './pages/JourneyCockpit';
import MapAtlas from './pages/MapAtlas';
import BudgetOS from './pages/BudgetOS';
import MemoryVault from './pages/MemoryVault';
import IndiaExplorer from './pages/IndiaExplorer';
import SpiritualPassport from './pages/SpiritualPassport';
import TravelDNALab from './pages/TravelDNALab';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

// Account & Utility Pages
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Help from './pages/Help';
import DesignSystemShowcase from './pages/DesignSystemShowcase';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Operating Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<LandingPage />} />
          
          {/* Heritage Atlas & Destination Dossiers */}
          <Route path="/explore" element={<ExploreEngine />} />
          <Route path="/destinations" element={<ExploreEngine />} />
          <Route path="/destination/:slug" element={<DestinationDossier />} />

          {/* AI Planning & Reality-Based Itineraries */}
          <Route path="/plan" element={<AITripPlanner />} />
          <Route path="/planner" element={<AITripPlanner />} />
          <Route path="/itinerary" element={<AITripPlanner />} />

          {/* Special Travel OS Engines */}
          <Route path="/cockpit" element={<JourneyCockpit />} />
          <Route path="/roadtrip" element={<MapAtlas />} />
          <Route path="/map" element={<MapAtlas />} />
          <Route path="/budget" element={<BudgetOS />} />
          <Route path="/memories" element={<MemoryVault />} />
          <Route path="/india" element={<IndiaExplorer />} />
          <Route path="/spiritual" element={<SpiritualPassport />} />
          <Route path="/dna" element={<TravelDNALab />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Profile & Settings */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/help" element={<Help />} />
          <Route path="/design-system" element={<DesignSystemShowcase />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
