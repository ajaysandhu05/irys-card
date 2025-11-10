import React from 'react';
import { CardTheme, CardDesign, CardData } from '../types';

interface CardProps {
  theme: CardTheme;
  design: CardDesign;
  data: CardData;
}

// --- THEME & DESIGN STYLES ---

interface ThemeStyle {
  colors: { base: string; glow: string; text: string; shadow: string };
}

export const themeStyles: Record<CardTheme, ThemeStyle> = {
  [CardTheme.Red]: {
    colors: { base: '#C70039', glow: '#FF5733', text: 'text-red-300', shadow: 'shadow-red-500/50' },
  },
  [CardTheme.Purple]: {
    colors: { base: '#9B59B6', glow: '#AF7AC5', text: 'text-purple-300', shadow: 'shadow-purple-500/50' },
  },
  [CardTheme.Green]: {
    colors: { base: '#2ECC71', glow: '#58D68D', text: 'text-green-300', shadow: 'shadow-green-500/50' },
  },
  [CardTheme.Gold]: {
    colors: { base: '#F1C40F', glow: '#F4D03F', text: 'text-yellow-300', shadow: 'shadow-yellow-500/50' },
  },
  [CardTheme.Blue]: {
    colors: { base: '#3498DB', glow: '#5DADE2', text: 'text-blue-300', shadow: 'shadow-blue-500/50' },
  },
  [CardTheme.Electric]: {
    colors: { base: '#8A2BE2', glow: '#7DF9FF', text: 'text-cyan-300', shadow: 'shadow-cyan-400/50' },
  },
  [CardTheme.Neon]: {
    colors: { base: '#1C1C1C', glow: '#39FF14', text: 'text-green-400', shadow: 'shadow-green-500/60' },
  },
  [CardTheme.Golden]: {
    colors: { base: '#E0E0E0', glow: '#FFD700', text: 'text-yellow-800', shadow: 'shadow-yellow-400/50' },
  },
  [CardTheme.Mystic]: {
    colors: { base: '#008080', glow: '#F50057', text: 'text-pink-300', shadow: 'shadow-pink-500/50' },
  },
  [CardTheme.Cyber]: {
    colors: { base: '#00FFFF', glow: '#FF00FF', text: 'text-magenta-300', shadow: 'shadow-magenta-500/50' },
  },
  [CardTheme.Inferno]: {
    colors: { base: '#DC143C', glow: '#FF8C00', text: 'text-orange-300', shadow: 'shadow-orange-500/50' },
  },
  [CardTheme.Starlight]: {
    colors: { base: '#483D8B', glow: '#E6E6FA', text: 'text-lavender-300', shadow: 'shadow-indigo-500/50' },
  },
  [CardTheme.Oceanic]: {
    colors: { base: '#00838F', glow: '#4DD0E1', text: 'text-cyan-200', shadow: 'shadow-cyan-500/50' },
  },
  [CardTheme.Royal]: {
    colors: { base: '#4A148C', glow: '#D4AF37', text: 'text-yellow-200', shadow: 'shadow-yellow-500/50' },
  },
  [CardTheme.Forest]: {
    colors: { base: '#1B5E20', glow: '#9CCC65', text: 'text-lime-300', shadow: 'shadow-lime-500/50' },
  },
  [CardTheme.Cosmic]: {
    colors: { base: '#1A237E', glow: '#C5CAE9', text: 'text-indigo-200', shadow: 'shadow-indigo-500/50' },
  },
};

export const designPaths: Record<CardDesign, string> = {
  [CardDesign.Standard]: "M25,2 H275 L298,25 V475 L275,498 H25 L2,475 V25 L25,2 Z",
  [CardDesign.Edged]: "M20,2 L280,2 L298,30 V200 L260,250 L298,300 V470 L280,498 L20,498 L2,470 V300 L40,250 L2,200 V30 L20,2 Z",
  [CardDesign.Rounded]: "M25,2 H275 C287.15,2 298,12.85 298,25 V475 C298,487.15 287.15,498 275,498 H25 C12.85,498 2,487.15 2,475 V25 C2,12.85 12.85,2 25,2 Z",
  [CardDesign.Ornate]: "M2,25 V475 L25,498 H40 L50,488 V12 L40,2 H25 L2,25 Z M298,25 V475 L275,498 H260 L250,488 V12 L260,2 H275 L298,25 Z",
  [CardDesign.Curved]: "M2,100 C40,20 260,20 298,100 V400 C260,480 40,480 2,400 V100 Z",
  [CardDesign.Digital]: "M2,25 V475 L25,498 H275 L298,475 V25 L275,2 H25 L2,25 Z M20,2 L2,20 M275,2 L298,20 M2,475 L20,498 M298,475 L275,498 Z",
  [CardDesign.Beveled]: "M20,10 L40,2 L260,2 L280,10 L298,40 V460 L280,490 L260,498 H40 L20,490 L2,460 V40 L20,10 Z",
  [CardDesign.Sculpted]: "M150,2 C100,20 20,100 2,150 V350 C20,400 100,480 150,498 C200,480 280,400 298,350 V150 C280,100 200,20 150,2 Z",
  [CardDesign.Hexagon]: "M150,2 L290,75 V425 L150,498 L10,425 V75 Z",
  [CardDesign.Wave]: "M2,100 Q 75,50 150,100 T 298,100 V400 Q 225,450 150,400 T 2,400 Z",
  [CardDesign.Tech]: "M50,2 L250,2 L298,50 V450 L250,498 H50 L2,450 V50 Z M50,2 H2 L50,50 M250,2 H298 L250,50 M50,498 H2 L50,450 M250,498 H298 L250,450",
  [CardDesign.Classic]: "M25,2 H275 L298,25 V475 L275,498 H25 L2,475 V25 L25,2 Z M15,15 H285 V485 H15 Z",
};


const Card: React.FC<CardProps> = ({ theme, design, data }) => {
  const style = themeStyles[theme];
  const framePath = designPaths[design];
  const { colors } = style;

  return (
    <div className="aspect-[3/5] w-full max-w-sm p-3 relative font-sans" style={{
        '--color-base': colors.base,
        '--color-glow': colors.glow,
      } as React.CSSProperties}>
        <div className={`absolute inset-0 bg-black/30 blur-3xl rounded-[30px] ${colors.shadow}`} style={{
            boxShadow: `0 0 60px 20px ${colors.glow}`
        }}></div>
        
        {/* Frame SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={`grad-${theme}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: colors.glow, stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: colors.base, stopOpacity:1}} />
                </linearGradient>
                <filter id={`glow-${theme}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <path d={framePath} stroke={`url(#grad-${theme})`} strokeWidth="4" filter={`url(#glow-${theme})`} />
            {/* Inner details */}
            <path d="M15,40 H285 M15,460 H285" stroke={colors.base} strokeWidth="1" strokeOpacity="0.5"/>
            <path d="M40,15 V485 M260,15 V485" stroke={colors.base} strokeWidth="1" strokeOpacity="0.5"/>
        </svg>

        <div className="relative w-full h-full flex flex-col justify-between p-4 z-10 bg-black/10 rounded-[20px]">
            {/* Top section */}
            <div className={`border-2 rounded-lg p-2 flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm`} style={{borderColor: colors.base}}>
                 <span className="text-lg font-bold" style={{ color: colors.glow, textShadow: `0 0 5px ${colors.glow}` }}>
                    (✧◡✧)
                </span>
                <span className="font-orbitron text-sm md:text-base font-bold text-white tracking-wider" style={{ textShadow: `0 0 4px ${colors.glow}` }}>{data.title}</span>
            </div>

            {/* Image section */}
            <div className={`flex-grow my-3 border-2 p-1 bg-black/30 rounded-lg`} style={{borderColor: colors.base}}>
                 {data.image ? (
                    <img src={data.image} alt="Card art" className="w-full h-full object-cover rounded-md" />
                ) : (
                    <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
            </div>

            {/* Bottom section */}
            <div className={`p-3 rounded-lg bg-gray-900/30 backdrop-blur-sm border-t-2`} style={{borderTopColor: colors.base}}>
                <div className="flex items-start gap-3">
                    <div className="h-16 w-16 flex-shrink-0 rounded-full flex items-center justify-center bg-black/30" style={{border: `2px solid ${colors.base}`}}>
                         <span className={`font-bold text-xl ${colors.text}`} style={{textShadow: `0 0 8px ${colors.glow}`}}>
                            🦄
                        </span>
                    </div>
                    <p className={`text-xs leading-snug font-mono ${colors.text} flex-grow h-16 overflow-y-auto pr-1`}>
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

// FIX: The original file was truncated, which resulted in invalid JSX and a missing default export. The component has been completed and the default export has been added.
export default Card;
