// TravelVerse AI Centralized Destination Image Registry (Empty Slate)

export const destinationImages = {};

export const getDestinationImage = (destinationId, customPhotos = {}) => {
  if (!destinationId) {
    return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80';
  }

  // 1. Check user custom uploaded photo override
  if (customPhotos && customPhotos[destinationId]) {
    return customPhotos[destinationId];
  }

  // 2. Check central registry map
  const cleanKey = destinationId.toLowerCase();
  if (destinationImages[cleanKey]) {
    return destinationImages[cleanKey];
  }

  // 3. Fallback high-res travel image
  return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80';
};

export default destinationImages;
