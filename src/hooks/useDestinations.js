import { useState, useMemo, useCallback } from 'react';
import { mockDestinations } from '../data/mockData';
import { getDestinationImage } from '../data/imageRegistry';
import { useApp } from '../context/AppContext';

export const useDestinations = () => {
  const { customPhotos, wishlist, toggleWishlist, isInWishlist } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [maxPrice, setMaxPrice] = useState(160000);
  const [sortBy, setSortBy] = useState('rating'); // rating, price-low, price-high

  const allDestinations = useMemo(() => {
    return mockDestinations.map(d => ({
      ...d,
      displayImage: getDestinationImage(d.id, customPhotos)
    }));
  }, [customPhotos]);

  const regions = useMemo(() => ['All', 'North India', 'South India', 'West India', 'East India'], []);
  const allTags = useMemo(() => [
    'Culture', 'History', 'Nature', 'Food', 'Beach', 
    'Adventure', 'Romance', 'Shopping', 'Wellness', 'Nightlife', 'Spiritual'
  ], []);

  const filteredDestinations = useMemo(() => {
    return allDestinations.filter(dest => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        dest.name.toLowerCase().includes(q) ||
        dest.country.toLowerCase().includes(q) ||
        dest.region.toLowerCase().includes(q) ||
        dest.tags.some(t => t.toLowerCase().includes(q));

      const matchesRegion = selectedRegion === 'All' || dest.region === selectedRegion;
      const matchesPrice = dest.price <= maxPrice;
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => dest.tags.includes(tag));

      return matchesSearch && matchesRegion && matchesPrice && matchesTags;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [allDestinations, searchQuery, selectedRegion, selectedTags, maxPrice, sortBy]);

  const getDestinationById = useCallback((id) => {
    if (!id) return null;
    const cleanId = id.startsWith('dest-') ? id : `dest-${id.toLowerCase()}`;
    const found = allDestinations.find(d => d.id === cleanId || d.id === id);
    if (found) return found;
    // Fallback for custom search query names
    return allDestinations.find(d => d.name.toLowerCase() === id.toLowerCase());
  }, [allDestinations]);

  const toggleTag = useCallback((tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }, []);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedTags([]);
    setMaxPrice(160000);
    setSortBy('rating');
  }, []);

  return {
    allDestinations,
    filteredDestinations,
    regions,
    allTags,
    searchQuery,
    setSearchQuery,
    selectedRegion,
    setSelectedRegion,
    selectedTags,
    toggleTag,
    maxPrice,
    setMaxPrice,
    sortBy,
    setSortBy,
    resetFilters,
    getDestinationById,
    getDestinationImage: (id) => getDestinationImage(id, customPhotos),
    isInWishlist: (id) => isInWishlist('destinations', id),
    toggleWishlistDestination: (dest) => toggleWishlist('destinations', dest)
  };
};

export default useDestinations;
