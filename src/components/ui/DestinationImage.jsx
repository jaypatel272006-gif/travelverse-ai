import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { getDestinationImage } from '../../data/imageRegistry';

export const DestinationImage = ({ destinationId, alt = 'Destination image', className = '', style = {}, ...props }) => {
  const { customPhotos } = useApp();
  const [src, setSrc] = useState(() => getDestinationImage(destinationId, customPhotos));
  const [loading, setLoading] = useState(true);
  const [errorCount, setErrorCount] = useState(0);

  // Sync image source if destination or customPhotos change
  useEffect(() => {
    setSrc(getDestinationImage(destinationId, customPhotos));
    setLoading(true);
    setErrorCount(0);
  }, [destinationId, customPhotos]);

  const handleError = () => {
    if (errorCount === 0) {
      // First error fallback: Force default registry fallback
      setSrc('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80');
      setErrorCount(1);
    } else if (errorCount === 1) {
      // Second fallback: Solid local static default asset if available
      setSrc('/favicon.svg');
      setErrorCount(2);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ minHeight: '100px', ...style }} {...props}>
      {loading && (
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-md flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border border-teal-500 border-t-transparent animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={handleError}
      />
    </div>
  );
};

export default DestinationImage;
