import { mockDestinations } from '../src/data/mockData.js';

console.log("Analyzing mockDestinations...");
let count = 0;
mockDestinations.forEach(d => {
  const missing = [];
  if (d.price === undefined) missing.push('price');
  if (d.rating === undefined) missing.push('rating');
  if (d.reviewsCount === undefined) missing.push('reviewsCount');
  if (d.image === undefined) missing.push('image');
  if (d.name === undefined) missing.push('name');
  
  if (missing.length > 0) {
    console.log(`Destination ID: ${d.id} (${d.name || 'Unnamed'}) is missing:`, missing);
    count++;
  }
});
console.log(`Total invalid destinations: ${count}`);
