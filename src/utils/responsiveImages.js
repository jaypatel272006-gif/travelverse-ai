/**
 * TravelVerse - Responsive Image utility for Unsplash photography assets
 */
export const getResponsiveSrcSet = (url) => {
  if (!url || !url.includes('images.unsplash.com')) return undefined;
  
  const baseUrl = url.split('?')[0];
  const params = new URLSearchParams(url.split('?')[1] || '');
  
  // Set default formats to automatic high-performance format (WebP/AVIF)
  params.set('auto', 'format');
  params.set('fit', 'crop');
  params.set('q', '75'); // Optimal quality vs payload size trade-off
  
  const widths = [400, 600, 800, 1200];
  return widths
    .map((w) => {
      params.set('w', w.toString());
      return `${baseUrl}?${params.toString()} ${w}w`;
    })
    .join(', ');
};
