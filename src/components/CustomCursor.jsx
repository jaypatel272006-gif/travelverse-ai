import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }
    return false;
  });
  const [isHovered, setIsHovered] = useState(false);

  // Keep track of coordinates
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only activate custom cursor on fine-pointer devices (desktops)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-active');

    const onMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // Smooth inertia animation loop for outer ring
    let animationId;
    const updateRingPosition = () => {
      const ease = 0.15; // smooth lag speed
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * ease;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationId = requestAnimationFrame(updateRingPosition);
    };
    animationId = requestAnimationFrame(updateRingPosition);

    // Event delegation to detect hovering over clickable tags
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('select') || 
        target.closest('textarea') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.classList.contains('cursor-pointer');

      setIsHovered(!!isClickable);
    };

    const onMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999] select-none">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-teal-400 rounded-full transition-transform duration-75 ease-out shadow-lg shadow-teal-400/50"
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-teal-400/40 mix-blend-screen transition-all duration-300 ease-out flex items-center justify-center
          ${isHovered 
            ? 'w-10 h-10 bg-teal-400/10 border-teal-350 scale-110 shadow-lg shadow-teal-400/10' 
            : 'w-6 h-6 scale-100'
          }`}
      />
    </div>
  );
};
