
import React, { useRef, useEffect } from 'react';
import { CardTheme } from '../types';
import { themeStyles } from './Card';

interface NetworkBackgroundProps {
  theme: CardTheme;
}

interface AnimationConfig {
  particleCount: number;
  velocityFactor: number;
  lineDistance: number;
}

const themeAnimationConfig: Record<CardTheme, AnimationConfig> = {
  // High Energy Themes
  [CardTheme.Electric]: { particleCount: 130, velocityFactor: 1.5, lineDistance: 130 },
  [CardTheme.Cyber]: { particleCount: 140, velocityFactor: 1.6, lineDistance: 135 },
  [CardTheme.Inferno]: { particleCount: 150, velocityFactor: 1.8, lineDistance: 120 },
  [CardTheme.Neon]: { particleCount: 120, velocityFactor: 1.4, lineDistance: 140 },
  // Medium Energy Themes
  [CardTheme.Red]: { particleCount: 100, velocityFactor: 1.0, lineDistance: 120 },
  [CardTheme.Purple]: { particleCount: 100, velocityFactor: 1.0, lineDistance: 120 },
  [CardTheme.Gold]: { particleCount: 100, velocityFactor: 1.0, lineDistance: 120 },
  [CardTheme.Blue]: { particleCount: 100, velocityFactor: 1.0, lineDistance: 120 },
  [CardTheme.Oceanic]: { particleCount: 110, velocityFactor: 1.1, lineDistance: 125 },
  // Low Energy Themes
  [CardTheme.Green]: { particleCount: 80, velocityFactor: 0.8, lineDistance: 110 },
  [CardTheme.Golden]: { particleCount: 70, velocityFactor: 0.7, lineDistance: 115 },
  [CardTheme.Mystic]: { particleCount: 75, velocityFactor: 0.7, lineDistance: 110 },
  [CardTheme.Starlight]: { particleCount: 60, velocityFactor: 0.6, lineDistance: 100 },
  [CardTheme.Royal]: { particleCount: 70, velocityFactor: 0.7, lineDistance: 110 },
  [CardTheme.Forest]: { particleCount: 90, velocityFactor: 0.8, lineDistance: 130 },
  [CardTheme.Cosmic]: { particleCount: 65, velocityFactor: 0.5, lineDistance: 100 },
};


const NetworkBackground: React.FC<NetworkBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const particles = useRef<any[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const config = themeAnimationConfig[theme];
    const particleCount = config.particleCount;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() * 0.5 - 0.25) * config.velocityFactor,
          vy: (Math.random() * 0.5 - 0.25) * config.velocityFactor,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = themeStyles[theme].colors.glow;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;

      for (let i = 0; i < particleCount; i++) {
        const p1 = particles.current[i];
        
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles.current[j];
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

          if (distance < config.lineDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = 1 - (distance / config.lineDistance);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if(animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]); // Rerun effect when theme changes to update colors and particle behavior

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default NetworkBackground;