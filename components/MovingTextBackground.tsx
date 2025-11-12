import React from 'react';
import { CardTheme } from '../types';
import { themeStyles } from './Card';

interface MovingTextBackgroundProps {
  theme: CardTheme;
}

const themeSpeedConfig: Record<CardTheme, number[]> = {
  // High Speed Themes
  [CardTheme.Electric]: [60, 80, 70, 50, 90],
  [CardTheme.Cyber]: [55, 75, 65, 45, 85],
  [CardTheme.Inferno]: [50, 70, 60, 40, 80],
  [CardTheme.Neon]: [65, 85, 75, 55, 95],
  // Medium Speed Themes
  [CardTheme.Red]: [80, 100, 90, 70, 110],
  [CardTheme.Purple]: [80, 100, 90, 70, 110],
  [CardTheme.Gold]: [80, 100, 90, 70, 110],
  [CardTheme.Blue]: [80, 100, 90, 70, 110],
  [CardTheme.Oceanic]: [75, 95, 85, 65, 105],
  // Low Speed Themes
  [CardTheme.Green]: [120, 140, 130, 110, 150],
  [CardTheme.Golden]: [130, 150, 140, 120, 160],
  [CardTheme.Mystic]: [125, 145, 135, 115, 155],
  [CardTheme.Starlight]: [140, 160, 150, 130, 170],
  [CardTheme.Royal]: [130, 150, 140, 120, 160],
  [CardTheme.Forest]: [115, 135, 125, 105, 145],
  [CardTheme.Cosmic]: [150, 170, 160, 140, 180],
};

const MovingTextBackground: React.FC<MovingTextBackgroundProps> = ({ theme }) => {
  const color = themeStyles[theme].colors.glow;
  const speeds = themeSpeedConfig[theme];
  const textContent = 'IRYS COMMUNITY '.repeat(10);

  return (
    <div className="moving-text-bg">
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '10%', 
            animation: `scroll-left ${speeds[0]}s linear infinite` 
        }}
      >
        {textContent}
      </div>
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '30%', 
            animation: `scroll-right ${speeds[1]}s linear infinite` 
        }}
      >
        {textContent}
      </div>
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '50%', 
            animation: `scroll-left ${speeds[2]}s linear infinite`
        }}
      >
        {textContent}
      </div>
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '70%', 
            animation: `scroll-right ${speeds[3]}s linear infinite` 
        }}
      >
        {textContent}
      </div>
       <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '90%', 
            animation: `scroll-left ${speeds[4]}s linear infinite`
        }}
      >
        {textContent}
      </div>
    </div>
  );
};

export default MovingTextBackground;
