import { mockDestinations } from '../src/data/mockData.js';

console.log("Analyzing mockDestinations types...");
let count = 0;
mockDestinations.forEach(d => {
  const issues = [];
  if (d.price === null || typeof d.price !== 'number') issues.push(`price: ${typeof d.price} (${d.price})`);
  if (d.rating === null || typeof d.rating !== 'number') issues.push(`rating: ${typeof d.rating}`);
  if (d.reviewsCount === null || typeof d.reviewsCount !== 'number') issues.push(`reviewsCount: ${typeof d.reviewsCount}`);
  
  if (issues.length > 0) {
    console.log(`Destination ID: ${d.id} (${d.name}) has issues:`, issues);
    count++;
  }
});
console.log(`Total issues found: ${count}`);
