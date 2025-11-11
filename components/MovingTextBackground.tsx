import React from 'react';
import { CardTheme } from '../types';
import { themeStyles } from './Card';

interface MovingTextBackgroundProps {
  theme: CardTheme;
}

const MovingTextBackground: React.FC<MovingTextBackgroundProps> = ({ theme }) => {
  const color = themeStyles[theme].colors.glow;
  const textContent = 'IRYS COMMUNITY '.repeat(10);

  return (
    <div className="moving-text-bg">
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '10%', 
            animation: 'scroll-left 80s linear infinite' 
        }}
      >
        {textContent}
      </div>
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '30%', 
            animation: 'scroll-right 100s linear infinite' 
        }}
      >
        {textContent}
      </div>
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '50%', 
            animation: 'scroll-left 90s linear infinite'
        }}
      >
        {textContent}
      </div>
      <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '70%', 
            animation: 'scroll-right 70s linear infinite' 
        }}
      >
        {textContent}
      </div>
       <div 
        className="moving-text-bg__row" 
        style={{ 
            color, 
            top: '90%', 
            animation: 'scroll-left 110s linear infinite'
        }}
      >
        {textContent}
      </div>
    </div>
  );
};

export default MovingTextBackground;
