
import React from 'react';
import { CardTemplate, CardData } from '../types';

interface CardProps {
  template: CardTemplate;
  data: CardData;
}

// --- ICON COMPONENTS ---

const SwordIcon: React.FC<{ color: string }> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 17.5l-10-10" /> <path d="M5 12.5l5-5" /> <path d="M14.5 7.5l5 5" /> <path d="M19.5 2.5l-5 5" /> <path d="M12 12l-7 7" /> <path d="M3 21l-1-1" /> <path d="M22 2l-1-1" />
    </svg>
);

const ElectricIcon: React.FC<{ color: string }> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
);

const NeonIcon: React.FC<{ color: string }> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
);

const GoldenIcon: React.FC<{ color: string }> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
);

const MysticIcon: React.FC<{ color: string }> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 12c0-7.73-19-7.73-19 0 0 7.73 19 7.73 19 0z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);


const StarIcon: React.FC<{ color: string }> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
);

// --- TEMPLATE STYLES ---

interface TemplateStyle {
  colors: { base: string; glow: string; text: string; shadow: string };
  Icon: React.FC<{ color: string }>;
  framePath: string;
}

const templateStyles: Record<CardTemplate, TemplateStyle> = {
  [CardTemplate.Red]: {
    colors: { base: '#C70039', glow: '#FF5733', text: 'text-red-300', shadow: 'shadow-red-500/50' },
    Icon: SwordIcon,
    framePath: "M25,2 H275 L298,25 V475 L275,498 H25 L2,475 V25 L25,2 Z",
  },
  [CardTemplate.Purple]: {
    colors: { base: '#9B59B6', glow: '#AF7AC5', text: 'text-purple-300', shadow: 'shadow-purple-500/50' },
    Icon: SwordIcon,
    framePath: "M25,2 H275 L298,25 V475 L275,498 H25 L2,475 V25 L25,2 Z",
  },
  [CardTemplate.Green]: {
    colors: { base: '#2ECC71', glow: '#58D68D', text: 'text-green-300', shadow: 'shadow-green-500/50' },
    Icon: SwordIcon,
    framePath: "M25,2 H275 L298,25 V475 L275,498 H25 L2,475 V25 L25,2 Z",
  },
  [CardTemplate.Gold]: {
    colors: { base: '#F1C40F', glow: '#F4D03F', text: 'text-yellow-300', shadow: 'shadow-yellow-500/50' },
    Icon: SwordIcon,
    framePath: "M25,2 H275 L298,25 V475 L275,498 H25 L2,475 V25 L25,2 Z",
  },
  [CardTemplate.Blue]: {
    colors: { base: '#3498DB', glow: '#5DADE2', text: 'text-blue-300', shadow: 'shadow-blue-500/50' },
    Icon: SwordIcon,
    framePath: "M25,2 H275 L298,25 V475 L275,498 H25 L2,475 V25 L25,2 Z",
  },
  [CardTemplate.Electric]: {
    colors: { base: '#8A2BE2', glow: '#7DF9FF', text: 'text-cyan-300', shadow: 'shadow-cyan-400/50' },
    Icon: ElectricIcon,
    framePath: "M20,2 L280,2 L298,30 V200 L260,250 L298,300 V470 L280,498 L20,498 L2,470 V300 L40,250 L2,200 V30 L20,2 Z",
  },
  [CardTemplate.Neon]: {
    colors: { base: '#1C1C1C', glow: '#39FF14', text: 'text-green-400', shadow: 'shadow-green-500/60' },
    Icon: NeonIcon,
    framePath: "M25,2 H275 C287.15,2 298,12.85 298,25 V475 C298,487.15 287.15,498 275,498 H25 C12.85,498 2,487.15 2,475 V25 C2,12.85 12.85,2 25,2 Z",
  },
  [CardTemplate.Golden]: {
    colors: { base: '#E0E0E0', glow: '#FFD700', text: 'text-yellow-800', shadow: 'shadow-yellow-400/50' },
    Icon: GoldenIcon,
    framePath: "M2,25 V475 L25,498 H40 L50,488 V12 L40,2 H25 L2,25 Z M298,25 V475 L275,498 H260 L250,488 V12 L260,2 H275 L298,25 Z",
  },
  [CardTemplate.Mystic]: {
    colors: { base: '#008080', glow: '#F50057', text: 'text-pink-300', shadow: 'shadow-pink-500/50' },
    Icon: MysticIcon,
    framePath: "M2,100 C40,20 260,20 298,100 V400 C260,480 40,480 2,400 V100 Z",
  },
};


const Card: React.FC<CardProps> = ({ template, data }) => {
  const style = templateStyles[template];
  const { colors, Icon, framePath } = style;

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
                <linearGradient id={`grad-${template}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: colors.glow, stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: colors.base, stopOpacity:1}} />
                </linearGradient>
                <filter id={`glow-${template}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <path d={framePath} stroke={`url(#grad-${template})`} strokeWidth="4" filter={`url(#glow-${template})`} />
            {/* Inner details */}
            <path d="M15,40 H285 M15,460 H285" stroke={colors.base} strokeWidth="1" strokeOpacity="0.5"/>
            <path d="M40,15 V485 M260,15 V485" stroke={colors.base} strokeWidth="1" strokeOpacity="0.5"/>
        </svg>

        <div className="relative w-full h-full flex flex-col justify-between p-4 z-10 bg-black/10 rounded-[20px]">
            {/* Top section */}
            <div className={`border-2 rounded-lg p-2 flex justify-between items-center bg-gray-900/50 backdrop-blur-sm`} style={{borderColor: colors.base}}>
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <span className="font-orbitron text-sm md:text-base font-bold text-white tracking-wider">{data.title}</span>
                </div>
                <div className="p-1 bg-gray-800 rounded-full">
                    <StarIcon color={colors.glow} />
                </div>
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
                    <div className="p-2 border rounded-md" style={{borderColor: colors.base}}>
                        <Icon color={colors.glow} />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm leading-tight text-gray-200">{data.description}</p>
                    </div>
                </div>
                 <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                    <span>Mogad Gards</span>
                    <div className="w-5 h-5 border border-gray-500 rounded-full flex items-center justify-center font-bold">B</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
