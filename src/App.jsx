import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppProvider from './context/AppContext';

// Pages
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import AITripPlanner from './pages/AITripPlanner';
import ItineraryViewer from './pages/ItineraryViewer';
import JourneyCockpit from './pages/JourneyCockpit';
import RoadTripOS from './pages/RoadTripOS';
import BudgetOS from './pages/BudgetOS';
import MemoriesVault from './pages/MemoriesVault';
import IndiaExplorer from './pages/IndiaExplorer';
import SpiritualPassport from './pages/SpiritualPassport';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

// Account & Utility Pages
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Operating Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          
          {/* Heritage Atlas & Destination Dossiers */}
          <Route path="/explore" element={<Destinations />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:slug" element={<DestinationDetails />} />

          {/* AI Planning & Reality-Based Itineraries */}
          <Route path="/plan" element={<AITripPlanner />} />
          <Route path="/planner" element={<AITripPlanner />} />
          <Route path="/itinerary" element={<ItineraryViewer />} />

          {/* Special Travel OS Engines */}
          <Route path="/cockpit" element={<JourneyCockpit />} />
          <Route path="/roadtrip" element={<RoadTripOS />} />
          <Route path="/budget" element={<BudgetOS />} />
          <Route path="/memories" element={<MemoriesVault />} />
          <Route path="/india" element={<IndiaExplorer />} />
          <Route path="/spiritual" element={<SpiritualPassport />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Profile & Settings */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/help" element={<Help />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
