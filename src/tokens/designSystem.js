/**
 * TravelVerse AI — Centralized Sandstone Heritage Design System Tokens
 * Phase 1 Architecture
 */

export const colors = {
  // Primary Dark Foundation
  bgDeepWalnut: '#1B120C',  // Level 1: Deep background
  bgDarkBrown: '#24170F',   // Level 2: Surface
  bgEspresso: '#342117',    // Level 3: Elevated card/surface
  bgHeritageBrown: '#4A2E1B',// Level 4: Active/focused surface

  // Primary Material Colors
  darkSandstone: '#6B4325',
  sandstone: '#8B5E34',
  warmCopper: '#A66A3F',
  antiqueGold: '#B9854F',
  lightGold: '#D4A66A',

  // Surface Colors
  warmIvory: '#F5E7CF',
  cream: '#E8CFA8',
  lightSand: '#EFE0C5',

  // Text Colors
  textPrimary: '#F5E7CF',
  textSecondary: '#CDB99D',
  textMuted: '#9D8870',
  textDark: '#24170F',

  // Accents (Restrained)
  terracotta: '#A85D3A',
  mutedOlive: '#596044',
  deepMaroon: '#54261D',

  // Border & Glow Transparencies
  borderSubtle: 'rgba(212, 166, 106, 0.20)',
  hoverSubtle: 'rgba(212, 166, 106, 0.10)',
  activeSubtle: 'rgba(212, 166, 106, 0.16)',
  glowSandstone: 'rgba(185, 133, 79, 0.25)',
};

export const typography = {
  fontDisplay: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
  fontCormorant: "'Cormorant Garamond', 'Playfair Display', serif",
  fontUI: "'Inter', system-ui, -apple-system, sans-serif",
  
  scale: {
    displayXL: 'text-5xl sm:text-7xl font-bold font-serif-heritage tracking-tight leading-[1.1]',
    displayL: 'text-4xl sm:text-5xl font-bold font-serif-heritage tracking-tight leading-tight',
    displayM: 'text-3xl sm:text-4xl font-bold font-serif-heritage leading-snug',
    headingXL: 'text-2xl sm:text-3xl font-bold font-serif-heritage tracking-wide',
    headingL: 'text-xl sm:text-2xl font-bold font-serif-heritage',
    headingM: 'text-lg font-bold font-sans-ui text-[#F5E7CF]',
    bodyL: 'text-base font-light font-sans-ui text-[#E8CFA8]/90 leading-relaxed',
    bodyM: 'text-sm font-light font-sans-ui text-[#CDB99D] leading-relaxed',
    bodyS: 'text-xs font-light font-sans-ui text-[#9D8870]',
    caption: 'text-[11px] font-mono tracking-wider text-[#D4A66A]',
    overline: 'text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4A66A]',
  }
};

export const spacing = {
  base: 4,
  rhythm: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120],
};

export const radius = {
  control: '8px',
  button: '10px',
  card: '12px',
  panel: '16px',
  hero: '20px',
  immersive: '24px',
  full: '9999px',
};

export const motionConfig = {
  fast: 200,
  normal: 300,
  slow: 600,
  easeHeritage: [0.16, 1, 0.3, 1],
};

export const designTokens = {
  colors,
  typography,
  spacing,
  radius,
  motionConfig,
};

export default designTokens;
