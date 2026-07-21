import React, { useState, useEffect } from 'react';

/**
 * TravelVerse UI - Reusable numeric CountUp ticker
 */
export const CountUp = ({ to, suffix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to);
    if (isNaN(end)) return;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return (
    <span>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};
