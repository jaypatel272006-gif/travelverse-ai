import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppContextProvider');
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('tv_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // User Auth state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('tv_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Wishlist state: destinations, flights, hotels, tours
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('tv_wishlist');
    return saved ? JSON.parse(saved) : { destinations: [], flights: [], hotels: [], tours: [] };
  });

  // Saved Itineraries state
  const [itineraries, setItineraries] = useState(() => {
    const saved = localStorage.getItem('tv_itineraries');
    return saved ? JSON.parse(saved) : [];
  });

  // Budget / Savings Tracker state
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem('tv_budget');
    return saved ? JSON.parse(saved) : { target: 500000, currentSavings: 180000 };
  });

  // Travel Journals state (Social Travel Layer)
  const [journals, setJournals] = useState(() => {
    const saved = localStorage.getItem('tv_journals');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        title: 'Misty Mornings in Munnar',
        location: 'Kerala, India',
        date: 'June 10, 2026',
        content: 'Woke up at 5:30 AM to catch the sunrise over the Munnar tea plantations. The mist was rolling over the hills like waves in the ocean. Truly a magical sight! If you visit, try the local cardamom tea at Tata Tea Museum.',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80',
        author: 'Alex Mercer'
      },
      {
        id: '2',
        title: 'Leh-Ladakh Road Trip: Crossing Khardung La',
        location: 'Ladakh, India',
        date: 'May 24, 2026',
        content: 'Successfully crossed Khardung La at 17,582 ft on a Royal Enfield! The wind was freezing and the views were breathtaking. Make sure to carry portable oxygen cans and rest for at least 36 hours in Leh to acclimatize properly.',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80',
        author: 'Alex Mercer'
      }
    ];
  });

  // AI Travel Twin preferences state
  const [twinPreferences, setTwinPreferences] = useState(() => {
    const saved = localStorage.getItem('tv_twin_prefs');
    return saved ? JSON.parse(saved) : {
      hotelCategory: 'midrange',
      foodPreference: 'all',
      budgetRange: 'midrange',
      flightClass: 'economy',
      adventureLevel: 'medium',
      travelPace: 'moderate',
      favoriteStyle: 'nature'
    };
  });

  // Travel Gamification states
  const [userXp, setUserXp] = useState(() => {
    const saved = localStorage.getItem('tv_user_xp');
    return saved ? parseInt(saved) : 0;
  });

  const [userLevel, setUserLevel] = useState(() => {
    const saved = localStorage.getItem('tv_user_level');
    return saved ? parseInt(saved) : 1;
  });

  // Departure City Hub state
  const [departureHub, setDepartureHub] = useState(() => {
    const saved = localStorage.getItem('tv_departure_hub');
    return saved ? saved : 'Delhi';
  });

  // Dynamic Widget Config
  const [dashboardWidgets, setDashboardWidgets] = useState(() => {
    const saved = localStorage.getItem('tv_db_widgets');
    return saved ? JSON.parse(saved) : [
      { id: 'budget', label: 'Budget Simulator', visible: true },
      { id: 'dna', label: 'Travel DNA Genome', visible: true },
      { id: 'achievements', label: 'Achievements Logs', visible: true },
      { id: 'wishlist', label: 'Wishlist Telemetry', visible: true },
      { id: 'journals', label: 'Travel Journals log', visible: true }
    ];
  });

  // Workspace Preset Mode
  const [dashboardPreset, setDashboardPreset] = useState(() => {
    const saved = localStorage.getItem('tv_db_preset');
    return saved ? saved : 'traveler';
  });

  // UI Theme Styling Lab
  const [uiThemeStyle, setUiThemeStyle] = useState(() => {
    const saved = localStorage.getItem('tv_ui_theme_style');
    return saved ? JSON.parse(saved) : {
      colorTheme: 'noon',
      accentColor: 'cyan',
      cardStyle: 'hologram',
      layoutDensity: 'comfortable'
    };
  });

  // Map Studio custom markers
  const [mapMarkers, setMapMarkers] = useState(() => {
    const saved = localStorage.getItem('tv_map_markers');
    return saved ? JSON.parse(saved) : [
      { id: 'm1', name: 'Kyoto, Japan', type: 'dream', coords: { lat: 35.0116, lon: 135.7681 }, notes: 'Visit Fushimi Inari shrine at dusk', media: [] },
      { id: 'm2', name: 'Agra, India', type: 'visited', coords: { lat: 27.1767, lon: 78.0081 }, notes: 'Explored Taj Mahal in early morning mist', media: [] }
    ];
  });

  // Calendar blocked dates
  const [blockedDates, setBlockedDates] = useState(() => {
    const saved = localStorage.getItem('tv_blocked_dates');
    return saved ? JSON.parse(saved) : [
      { date: '2026-06-25', type: 'blocked', desc: 'Project release window' },
      { date: '2026-07-02', type: 'vacation', desc: 'Goa monsoon break' }
    ];
  });

  // Watchlist items
  const [watchlistItems, setWatchlistItems] = useState(() => {
    const saved = localStorage.getItem('tv_watchlist_items');
    return saved ? JSON.parse(saved) : [
      { id: 'w1', name: 'Japan', type: 'country', dateAdded: '2026-06-15' },
      { id: 'w2', name: 'Air India', type: 'airline', dateAdded: '2026-06-18' }
    ];
  });

  // Memory Vault
  const [vaultMemories, setVaultMemories] = useState(() => {
    const saved = localStorage.getItem('tv_vault_memories');
    return saved ? JSON.parse(saved) : [
      { id: 'v1', title: 'Agra Dome Flyover', type: 'drone', description: 'Stunning drone capture of the white marble reflection.', location: 'Agra, India', mediaUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80' },
      { id: 'v2', title: 'Local guide interview', type: 'voice', description: 'Transcribed notes from spiritual history discussion.', location: 'Varanasi, India', audioTranscription: 'The Ganga Aarti starts precisely at sunset, aligning seven wooden steps facing eastward...' }
    ];
  });

  // AI Autonomy setting
  const [aiAutonomy, setAiAutonomy] = useState(() => {
    const saved = localStorage.getItem('tv_ai_autonomy');
    return saved ? saved : 'balanced';
  });

  // AI Theme Generator state
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('tv_active_theme') || 'space';
  });

  // Smart Stability: Network state tracking
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Smart Stability: Offline storage state
  const [offlineItineraries, setOfflineItineraries] = useState(() => {
    const saved = localStorage.getItem('tv_offline_itineraries');
    return saved ? JSON.parse(saved) : [];
  });

  // Custom destination photos state
  const [customPhotos, setCustomPhotos] = useState(() => {
    const saved = localStorage.getItem('tv_custom_photos');
    return saved ? JSON.parse(saved) : {};
  });

  const updateDestinationPhoto = async (id, imageUrl) => {
    setCustomPhotos(prev => {
      const updated = { ...prev, [id]: imageUrl };
      localStorage.setItem('tv_custom_photos', JSON.stringify(updated));
      return updated;
    });

    if (supabase && user?.id) {
      try {
        const { error } = await supabase
          .from('custom_photos')
          .upsert({
            user_id: user.id,
            destination_id: id,
            image_url: imageUrl,
            updated_at: new Date().toISOString()
          });
        if (error) throw error;
        showToast('Destination photo updated in cloud database!', 'success');
      } catch (err) {
        console.error("Supabase custom_photos Upsert Error:", err);
        showToast('Destination photo updated in local memory!', 'success');
      }
    } else {
      showToast('Destination photo updated locally!', 'success');
    }
  };

  // Effect to sync activeTheme classes directly on document.body
  useEffect(() => {
    const bodyClasses = document.body.classList;
    // Remove all previous theme classes
    const themePrefixes = ['theme-space', 'theme-luxury', 'theme-himalayan', 'theme-temple', 'theme-ocean', 'theme-minimal', 'theme-cyberpunk'];
    themePrefixes.forEach(cls => bodyClasses.remove(cls));
    // Add active class
    bodyClasses.add(`theme-${activeTheme}`);
    localStorage.setItem('tv_active_theme', activeTheme);
  }, [activeTheme]);

  // Effect to listen for network state events
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      showToast('Quantum network restored: Online Mode Active.', 'success');
    };
    const handleOffline = () => {
      setIsOnline(false);
      showToast('Network collision detected: Engaging Offline Mode.', 'error');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Offline caching method
  const saveItineraryOffline = (itinerary) => {
    const alreadySaved = offlineItineraries.some(i => i.id === itinerary.id);
    if (alreadySaved) {
      showToast('Sanctuary data already buffered in offline memory.', 'success');
      return;
    }
    const updated = [...offlineItineraries, itinerary];
    setOfflineItineraries(updated);
    localStorage.setItem('tv_offline_itineraries', JSON.stringify(updated));
    showToast('Sanctuary data cached offline. Ready for remote flight.', 'success');
  };

  // Alert/Toast Notification helper
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Sync theme to DOM
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('tv_theme', theme);
  }, [theme]);

  // Sync auth state to LocalStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('tv_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('tv_user');
    }
  }, [user]);

  // Sync wishlist to LocalStorage
  useEffect(() => {
    localStorage.setItem('tv_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Sync itineraries to LocalStorage
  useEffect(() => {
    localStorage.setItem('tv_itineraries', JSON.stringify(itineraries));
  }, [itineraries]);

  // Sync budget tracker to LocalStorage
  useEffect(() => {
    localStorage.setItem('tv_budget', JSON.stringify(budget));
  }, [budget]);

  // Sync journals to LocalStorage
  useEffect(() => {
    localStorage.setItem('tv_journals', JSON.stringify(journals));
  }, [journals]);

  // Sync twinPreferences to LocalStorage & Supabase
  useEffect(() => {
    localStorage.setItem('tv_twin_prefs', JSON.stringify(twinPreferences));
    if (supabase && user?.id) {
      supabase.from('profiles').update({ twin_preferences: twinPreferences }).eq('id', user.id).then(({ error }) => {
        if (error) console.error("Supabase twin_preferences sync error:", error);
      });
    }
  }, [twinPreferences, user]);

  // Sync XP & Level to LocalStorage & Supabase
  useEffect(() => {
    localStorage.setItem('tv_user_xp', userXp.toString());
    if (supabase && user?.id) {
      supabase.from('profiles').update({ user_xp: userXp }).eq('id', user.id).then(({ error }) => {
        if (error) console.error("Supabase user_xp sync error:", error);
      });
    }
  }, [userXp, user]);

  useEffect(() => {
    localStorage.setItem('tv_user_level', userLevel.toString());
    if (supabase && user?.id) {
      supabase.from('profiles').update({ user_level: userLevel }).eq('id', user.id).then(({ error }) => {
        if (error) console.error("Supabase user_level sync error:", error);
      });
    }
  }, [userLevel, user]);

  // Sync departureHub to LocalStorage & Supabase
  useEffect(() => {
    localStorage.setItem('tv_departure_hub', departureHub);
    if (supabase && user?.id) {
      supabase.from('profiles').update({ departure_hub: departureHub }).eq('id', user.id).then(({ error }) => {
        if (error) console.error("Supabase departure_hub sync error:", error);
      });
    }
  }, [departureHub, user]);

  // Sync personalization states to LocalStorage & Supabase
  useEffect(() => {
    localStorage.setItem('tv_db_widgets', JSON.stringify(dashboardWidgets));
    if (supabase && user?.id) {
      supabase.from('profiles').update({ dashboard_widgets: dashboardWidgets }).eq('id', user.id).then(({ error }) => {
        if (error) console.error("Supabase dashboard_widgets sync error:", error);
      });
    }
  }, [dashboardWidgets, user]);

  useEffect(() => {
    localStorage.setItem('tv_db_preset', dashboardPreset);
    if (supabase && user?.id) {
      supabase.from('profiles').update({ dashboard_preset: dashboardPreset }).eq('id', user.id).then(({ error }) => {
        if (error) console.error("Supabase dashboard_preset sync error:", error);
      });
    }
  }, [dashboardPreset, user]);

  useEffect(() => {
    localStorage.setItem('tv_ui_theme_style', JSON.stringify(uiThemeStyle));
    if (supabase && user?.id) {
      supabase.from('profiles').update({ ui_theme_style: uiThemeStyle }).eq('id', user.id).then(({ error }) => {
        if (error) console.error("Supabase ui_theme_style sync error:", error);
      });
    }
  }, [uiThemeStyle, user]);

  useEffect(() => {
    localStorage.setItem('tv_map_markers', JSON.stringify(mapMarkers));
  }, [mapMarkers]);

  useEffect(() => {
    localStorage.setItem('tv_blocked_dates', JSON.stringify(blockedDates));
  }, [blockedDates]);

  useEffect(() => {
    localStorage.setItem('tv_watchlist_items', JSON.stringify(watchlistItems));
  }, [watchlistItems]);

  useEffect(() => {
    localStorage.setItem('tv_vault_memories', JSON.stringify(vaultMemories));
  }, [vaultMemories]);

  useEffect(() => {
    localStorage.setItem('tv_ai_autonomy', aiAutonomy);
  }, [aiAutonomy]);

  // Supabase Auth change listener and session restoration
  useEffect(() => {
    if (!supabase) return;

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Fetch public profile from profiles table
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profileData) {
          setUser({
            id: session.user.id,
            name: profileData.name,
            email: session.user.email,
            avatar: profileData.avatar,
            bio: profileData.bio,
            joinedDate: profileData.joined_date
          });
          setUserXp(profileData.user_xp);
          setUserLevel(profileData.user_level);
          setDepartureHub(profileData.departure_hub);
          if (profileData.twin_preferences) setTwinPreferences(profileData.twin_preferences);
          if (profileData.ui_theme_style) setUiThemeStyle(profileData.ui_theme_style);
          if (profileData.dashboard_widgets) setDashboardWidgets(profileData.dashboard_widgets);
          setDashboardPreset(profileData.dashboard_preset);
        } else {
          // If profile does not exist yet (e.g. during trigger execution lag)
          setUser({
            id: session.user.id,
            name: session.user.user_metadata?.name || session.user.email.split('@')[0],
            email: session.user.email,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
            bio: 'Ready to discover the universe with TravelVerse AI.',
            joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
          });
        }

        // Load user wishlists
        const { data: wishlistData } = await supabase
          .from('wishlists')
          .select('*')
          .eq('user_id', session.user.id);
        if (wishlistData) {
          const newWishlist = { destinations: [], flights: [], hotels: [], tours: [] };
          wishlistData.forEach(w => {
            if (newWishlist[w.item_type]) {
              newWishlist[w.item_type].push(w.item_data);
            }
          });
          setWishlist(newWishlist);
        }

        // Load custom photos
        const { data: photosData } = await supabase
          .from('custom_photos')
          .select('*')
          .eq('user_id', session.user.id);
        if (photosData) {
          const photoMap = {};
          photosData.forEach(p => {
            photoMap[p.destination_id] = p.image_url;
          });
          setCustomPhotos(photoMap);
        }

        // Load itineraries
        const { data: itinerariesData } = await supabase
          .from('itineraries')
          .select('*')
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false });
        if (itinerariesData) {
          setItineraries(itinerariesData.map(i => ({
            id: i.id,
            destination: i.destination,
            country: i.country,
            image: i.image,
            duration: i.duration,
            budgetType: i.budget_type,
            travelStyle: i.travel_style,
            pace: i.pace,
            dateSaved: i.date_saved,
            costs: i.costs,
            days: i.days,
            averageWalkingDist: i.average_walking_dist,
            emergencyServices: i.emergency_services
          })));
        }

        // Load journals
        const { data: journalsData } = await supabase
          .from('journals')
          .select('*')
          .order('created_at', { ascending: false });
        if (journalsData) {
          setJournals(journalsData.map(j => ({
            id: j.id,
            title: j.title,
            location: j.location,
            date: j.date,
            content: j.content,
            image: j.image,
            author: j.author
          })));
        }
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const toggleTheme = () => {

    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Auth Operations
  const login = async (email, password) => {
    if (supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true };
    } else {
      // Basic mock authentication: accepts any valid looking login or checks local credentials
      const registeredUsers = JSON.parse(localStorage.getItem('tv_registered_users') || '[]');
      const matchedUser = registeredUsers.find(u => u.email === email && u.password === password);

      if (matchedUser) {
        setUser({
          name: matchedUser.name,
          email: matchedUser.email,
          bio: matchedUser.bio || 'Wanderlust explorer & travel enthusiast.',
          avatar: matchedUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
          joinedDate: matchedUser.joinedDate || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        });
        showToast(`Welcome back, ${matchedUser.name}!`);
        return { success: true };
      } else {
        // Allow fallback default login for demo purposes
        if (email === 'demo@travelverse.ai' && password === 'password') {
          const demoUser = {
            name: 'Alex Mercer',
            email: 'demo@travelverse.ai',
            bio: 'Adrenaline junkie, amateur photographer, and world traveler.',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
            joinedDate: 'June 2026'
          };
          setUser(demoUser);
          showToast('Logged in successfully as Demo User!');
          return { success: true };
        }
        return { success: false, message: 'Invalid email or password.' };
      }
    }
  };

  const register = async (name, email, password) => {
    if (supabase) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
            avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
          }
        }
      });
      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true };
    } else {
      const registeredUsers = JSON.parse(localStorage.getItem('tv_registered_users') || '[]');
      if (registeredUsers.some(u => u.email === email)) {
        return { success: false, message: 'Email already registered.' };
      }

      const newUser = {
        name,
        email,
        password,
        bio: 'Ready to discover the universe with TravelVerse AI.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      };

      registeredUsers.push(newUser);
      localStorage.setItem('tv_registered_users', JSON.stringify(registeredUsers));
      setUser({
        name: newUser.name,
        email: newUser.email,
        bio: newUser.bio,
        avatar: newUser.avatar,
        joinedDate: newUser.joinedDate
      });
      showToast('Registration successful! Welcome to TravelVerse AI.');
      return { success: true };
    }
  };

  const logout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    showToast('Logged out successfully.');
  };

  const updateProfile = async (updatedInfo) => {
    if (!user) return;
    const newProfile = { ...user, ...updatedInfo };
    setUser(newProfile);

    if (supabase && user.id) {
      const dbPayload = {
        name: newProfile.name,
        avatar: newProfile.avatar,
        bio: newProfile.bio,
        joined_date: newProfile.joinedDate
      };
      const { error } = await supabase
        .from('profiles')
        .update(dbPayload)
        .eq('id', user.id);
      if (error) {
        console.error("Supabase Profile Sync Error:", error);
      }
    } else {
      // Sync back to registered users list as well
      const registeredUsers = JSON.parse(localStorage.getItem('tv_registered_users') || '[]');
      const index = registeredUsers.findIndex(u => u.email === user.email);
      if (index !== -1) {
        registeredUsers[index] = { ...registeredUsers[index], ...updatedInfo };
        localStorage.setItem('tv_registered_users', JSON.stringify(registeredUsers));
      }
    }
    showToast('Profile updated successfully.');
  };

  // Wishlist Operations
  const toggleWishlist = async (type, item) => {
    let exists = false;
    setWishlist(prev => {
      const list = prev[type] || [];
      exists = list.some(x => x.id === item.id);
      
      let updatedList;
      if (exists) {
        updatedList = list.filter(x => x.id !== item.id);
      } else {
        updatedList = [...list, item];
      }

      return {
        ...prev,
        [type]: updatedList
      };
    });

    if (exists) {
      showToast(`Removed from Wishlist.`);
      if (supabase && user?.id) {
        try {
          await supabase
            .from('wishlists')
            .delete()
            .eq('user_id', user.id)
            .eq('item_type', type)
            .eq('item_id', item.id.toString());
        } catch (err) {
          console.error("Supabase Wishlist Delete Error:", err);
        }
      }
    } else {
      showToast(`Added to Wishlist!`);
      setTimeout(() => awardXp(150, `Wishlisted ${item.name || type}`), 100);
      if (supabase && user?.id) {
        try {
          await supabase
            .from('wishlists')
            .insert({
              user_id: user.id,
              item_type: type,
              item_id: item.id.toString(),
              item_data: item
            });
        } catch (err) {
          console.error("Supabase Wishlist Insert Error:", err);
        }
      }
    }
  };

  const isInWishlist = (type, id) => {
    const list = wishlist[type] || [];
    return list.some(x => x.id === id);
  };

  // Itinerary Operations
  const saveItinerary = async (itinerary) => {
    const localId = Date.now().toString();
    const dateSavedStr = new Date().toLocaleDateString();
    
    if (supabase && user?.id) {
      try {
        const { data, error } = await supabase
          .from('itineraries')
          .insert({
            user_id: user.id,
            destination: itinerary.destination,
            country: itinerary.country || 'India',
            image: itinerary.image,
            duration: parseInt(itinerary.duration) || 1,
            budget_type: itinerary.budgetType || 'midrange',
            travel_style: itinerary.travelStyle || 'sightseeing',
            pace: itinerary.pace || 'moderate',
            date_saved: dateSavedStr,
            costs: itinerary.costs || {},
            days: itinerary.days || [],
            average_walking_dist: parseFloat(itinerary.averageWalkingDist) || 0,
            emergency_services: itinerary.emergencyServices || {}
          })
          .select()
          .single();

        if (error) throw error;

        if (data) {
          const mappedItin = {
            id: data.id,
            destination: data.destination,
            country: data.country,
            image: data.image,
            duration: data.duration,
            budgetType: data.budget_type,
            travelStyle: data.travel_style,
            pace: data.pace,
            dateSaved: data.date_saved,
            costs: data.costs,
            days: data.days,
            averageWalkingDist: data.average_walking_dist,
            emergencyServices: data.emergency_services
          };
          setItineraries(prev => [mappedItin, ...prev]);
          showToast('Itinerary synced to cloud dashboard!');
          setTimeout(() => awardXp(500, `Planned trip to ${itinerary.destination}`), 100);
          return data.id;
        }
      } catch (err) {
        console.error("Supabase Save Itinerary Error, falling back to LocalStorage:", err);
      }
    }

    const newItinerary = { ...itinerary, id: localId, dateSaved: dateSavedStr };
    setItineraries(prev => [newItinerary, ...prev]);
    showToast('Itinerary saved to local dashboard!');
    setTimeout(() => awardXp(500, `Planned trip to ${itinerary.destination}`), 100);
    return localId;
  };

  const deleteItinerary = async (id) => {
    setItineraries(prev => prev.filter(x => x.id !== id));
    
    if (supabase && user?.id) {
      try {
        const { error } = await supabase
          .from('itineraries')
          .delete()
          .eq('id', id)
          .eq('user_id', user.id);
        if (error) throw error;
        showToast('Itinerary removed from cloud.');
      } catch (err) {
        console.error("Supabase Delete Itinerary Error:", err);
        showToast('Itinerary deleted locally.');
      }
    } else {
      showToast('Itinerary deleted.');
    }
  };

  const updateItinerary = async (updatedItinerary) => {
    setItineraries(prev => prev.map(x => x.id === updatedItinerary.id ? updatedItinerary : x));
    
    if (supabase && user?.id) {
      try {
        const { error } = await supabase
          .from('itineraries')
          .update({
            destination: updatedItinerary.destination,
            country: updatedItinerary.country || 'India',
            image: updatedItinerary.image,
            duration: parseInt(updatedItinerary.duration) || 1,
            budget_type: updatedItinerary.budgetType || 'midrange',
            travel_style: updatedItinerary.travelStyle || 'sightseeing',
            pace: updatedItinerary.pace || 'moderate',
            costs: updatedItinerary.costs || {},
            days: updatedItinerary.days || [],
            average_walking_dist: parseFloat(updatedItinerary.averageWalkingDist) || 0,
            emergency_services: updatedItinerary.emergencyServices || {}
          })
          .eq('id', updatedItinerary.id)
          .eq('user_id', user.id);
        if (error) throw error;
        showToast('Itinerary synced in cloud.');
      } catch (err) {
        console.error("Supabase Update Itinerary Error:", err);
        showToast('Itinerary updated locally.');
      }
    } else {
      showToast('Itinerary updated successfully.');
    }
  };

  // Budget Tracker Operations
  const updateBudget = (target, savings) => {
    setBudget({ target: parseFloat(target), currentSavings: parseFloat(savings) });
    showToast('Budget tracker updated.');
    setTimeout(() => awardXp(200, 'Updated savings target metrics'), 100);
  };

  // Journal Operations (Social Travel Layer)
  const addJournal = async (title, location, date, content, image) => {
    const localId = Date.now().toString();
    const formattedDate = date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const fallbackImage = image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80';
    const authorName = user?.name || 'Alex Mercer';

    if (supabase && user?.id) {
      try {
        const { data, error } = await supabase
          .from('journals')
          .insert({
            user_id: user.id,
            title,
            location,
            date: formattedDate,
            content,
            image: fallbackImage,
            author: authorName
          })
          .select()
          .single();

        if (error) throw error;

        if (data) {
          const mappedJournal = {
            id: data.id,
            title: data.title,
            location: data.location,
            date: data.date,
            content: data.content,
            image: data.image,
            author: data.author
          };
          setJournals(prev => [mappedJournal, ...prev]);
          showToast('Travel journal synced to cloud feed!');
          setTimeout(() => awardXp(300, `Logged travel journal "${title}"`), 100);
          return;
        }
      } catch (err) {
        console.error("Supabase Add Journal Error, falling back to LocalStorage:", err);
      }
    }

    const newJournal = {
      id: localId,
      title,
      location,
      date: formattedDate,
      content,
      image: fallbackImage,
      author: authorName
    };
    setJournals(prev => [newJournal, ...prev]);
    showToast('Travel journal entry logged successfully!');
    setTimeout(() => awardXp(300, `Logged travel journal "${title}"`), 100);
  };

  // XP Award Operation
  const awardXp = (amount, reason) => {
    setUserXp(prev => {
      const newXp = prev + amount;
      const threshold = userLevel * 1000;
      if (newXp >= threshold) {
        setUserLevel(lvl => {
          const newLvl = lvl + 1;
          showToast(`LEVEL UP! You are now Level ${newLvl}! 🚀`, 'success');
          return newLvl;
        });
        return newXp - threshold;
      } else {
        return newXp;
      }
    });
  };

  // Dynamic Gamified Achievement System
  const achievements = [
    {
      id: 'ach-1',
      title: 'Incredible Explorer',
      description: 'Saved your first custom itinerary to dashboard.',
      icon: '🏆',
      unlocked: itineraries.length > 0
    },
    {
      id: 'ach-2',
      title: 'Himalayan Rider',
      description: 'Saved or wishlisted a trip to Kashmir or Ladakh.',
      icon: '🏔️',
      unlocked: wishlist.destinations.some(d => d.name === 'Ladakh' || d.name === 'Kashmir') || itineraries.some(i => i.destination.toLowerCase().includes('ladakh') || i.destination.toLowerCase().includes('kashmir'))
    },
    {
      id: 'ach-3',
      title: 'UNESCO Heritage Hunter',
      description: 'Saved or wishlisted a trip to Agra (Taj Mahal).',
      icon: '🕌',
      unlocked: wishlist.destinations.some(d => d.name === 'Agra') || itineraries.some(i => i.destination.toLowerCase().includes('agra'))
    },
    {
      id: 'ach-4',
      title: 'Beach Vagabond',
      description: 'Saved or wishlisted a trip to Goa.',
      icon: '🏄',
      unlocked: wishlist.destinations.some(d => d.name === 'Goa') || itineraries.some(i => i.destination.toLowerCase().includes('goa'))
    },
    {
      id: 'ach-5',
      title: 'Wanderlust Guru',
      description: 'Wishlisted 3 or more dream destinations.',
      icon: '🧭',
      unlocked: wishlist.destinations.length >= 3
    },
    {
      id: 'ach-6',
      title: 'Journalist Laureate',
      description: 'Logged a custom travel journal entry to the social diary.',
      icon: '✍️',
      unlocked: journals.length > 2
    },
    {
      id: 'ach-7',
      title: 'Level 3 Navigator',
      description: 'Reach Level 3 in the travel XP operating system.',
      icon: '⚡',
      unlocked: userLevel >= 3
    },
    {
      id: 'ach-8',
      title: 'Veteran Pathfinder',
      description: 'Cached 3 or more itineraries in your mission control.',
      icon: '🚀',
      unlocked: itineraries.length >= 3
    }
  ];

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      user,
      login,
      register,
      logout,
      updateProfile,
      wishlist,
      toggleWishlist,
      isInWishlist,
      itineraries,
      saveItinerary,
      updateItinerary,
      deleteItinerary,
      budget,
      updateBudget,
      journals,
      addJournal,
      achievements,
      twinPreferences,
      setTwinPreferences,
      userXp,
      userLevel,
      awardXp,
      departureHub,
      setDepartureHub,
      dashboardWidgets,
      setDashboardWidgets,
      dashboardPreset,
      setDashboardPreset,
      uiThemeStyle,
      setUiThemeStyle,
      mapMarkers,
      setMapMarkers,
      blockedDates,
      setBlockedDates,
      watchlistItems,
      setWatchlistItems,
      vaultMemories,
      setVaultMemories,
      aiAutonomy,
      setAiAutonomy,
      toast,
      showToast,
      activeTheme,
      setActiveTheme,
      isOnline,
      saveItineraryOffline,
      offlineItineraries,
      customPhotos,
      updateDestinationPhoto
    }}>
      {children}
      
      {/* Global Toast component */}
      {toast && (
        <div className={`fixed bottom-5 right-5 z-[9999] flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl transition-all duration-300 transform translate-y-0 border
          ${toast.type === 'success' 
            ? 'bg-teal-50 border-teal-200 text-teal-800 dark:bg-teal-950/90 dark:border-teal-800/40 dark:text-teal-200' 
            : 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/90 dark:border-rose-800/40 dark:text-rose-200'
          }`}
        >
          <div className={`w-2.5 h-2.5 rounded-full ${toast.type === 'success' ? 'bg-teal-500' : 'bg-rose-500'}`} />
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}
    </AppContext.Provider>
  );
};
