import { useState, useMemo, useCallback } from 'react';
import { mockDestinations } from '../data/destinations';
import { getDestinationImage } from '../data/imageRegistry';
import { useApp } from '../context/AppContext';

export const useDestinations = () => {
  const { customPhotos, isInWishlist, toggleWishlist } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [budgetTier, setBudgetTier] = useState('All');
  const [sortBy, setSortBy] = useState('rating'); // rating, title, duration

  const allDestinations = useMemo(() => {
    return mockDestinations.map(d => ({
      ...d,
      name: d.title || d.name,
      displayImage: getDestinationImage(d.id, customPhotos)
    }));
  }, [customPhotos]);

  const regions = useMemo(() => ['All', 'North', 'South', 'West', 'East', 'Northeast'], []);
  
  const allTags = useMemo(() => [
    'Royal Forts', 'Palaces', 'UNESCO Heritage', 'Backwaters', 'Ayurveda', 
    'Houseboat', 'Shikara Ride', 'High Altitude', 'Spiritual Sacred', 
    'Ghats', 'Beaches', 'Desert Dunes', 'Tribal Culture'
  ], []);

  const categories = useMemo(() => [
    'All', 'heritage', 'nature', 'alpine', 'spiritual', 'beach', 'adventure'
  ], []);

  const filteredDestinations = useMemo(() => {
    return allDestinations.filter(dest => {
      const q = searchQuery.toLowerCase().trim();
      const nameMatch = (dest.title || dest.name || '').toLowerCase().includes(q);
      const stateMatch = (dest.state || '').toLowerCase().includes(q);
      const countryMatch = (dest.country || '').toLowerCase().includes(q);
      const tagMatch = (dest.tags || []).some(t => t.toLowerCase().includes(q));
      
      const matchesSearch = !q || nameMatch || stateMatch || countryMatch || tagMatch;
      const matchesRegion = selectedRegion === 'All' || dest.region === selectedRegion;
      const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
      const matchesBudget = budgetTier === 'All' || dest.budgetTier === budgetTier;
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => (dest.tags || []).includes(tag));

      return matchesSearch && matchesRegion && matchesCategory && matchesBudget && matchesTags;
    }).sort((a, b) => {
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'title') return (a.title || '').localeCompare(b.title || '');
      return 0;
    });
  }, [allDestinations, searchQuery, selectedRegion, selectedCategory, budgetTier, selectedTags, sortBy]);

  const getDestinationByIdOrSlug = useCallback((idOrSlug) => {
    if (!idOrSlug) return null;
    const cleanKey = idOrSlug.toLowerCase();
    const found = allDestinations.find(d => 
      d.id.toLowerCase() === cleanKey || 
      d.slug.toLowerCase() === cleanKey ||
      (d.title && d.title.toLowerCase().includes(cleanKey))
    );
    return found || allDestinations[0];
  }, [allDestinations]);

  const toggleTag = useCallback((tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }, []);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedCategory('All');
    setBudgetTier('All');
    setSelectedTags([]);
    setSortBy('rating');
  }, []);

  return {
    allDestinations,
    filteredDestinations,
    regions,
    allTags,
    categories,
    searchQuery,
    setSearchQuery,
    selectedRegion,
    setSelectedRegion,
    selectedCategory,
    setSelectedCategory,
    budgetTier,
    setBudgetTier,
    selectedTags,
    toggleTag,
    sortBy,
    setSortBy,
    resetFilters,
    getDestinationByIdOrSlug,
    getDestinationImage: (id) => getDestinationImage(id, customPhotos),
    isInWishlist: (id) => isInWishlist('destinations', id),
    toggleWishlistDestination: (dest) => toggleWishlist('destinations', dest)
  };
};

export default useDestinations;
