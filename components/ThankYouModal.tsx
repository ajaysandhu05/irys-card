import React from 'react';
import { CardTheme } from '../types';
import { themeStyles } from './Card';

interface ThankYouModalProps {
    theme: CardTheme;
    onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ theme, onClose }) => {
    const style = themeStyles[theme];

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-gray-900 border rounded-2xl p-6 md:p-8 w-full max-w-md text-white shadow-2xl relative animate-fade-in"
                style={{ borderColor: style.colors.base, boxShadow: `0 0 30px 5px ${style.colors.glow}` }}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center">
                    <div className="mb-4 text-5xl" style={{ color: style.colors.glow }}>
                        (✧◡✧)
                    </div>
                    <h3 
                        className="font-orbitron text-2xl font-bold mb-4"
                        style={{ color: style.colors.glow, textShadow: `0 0 10px ${style.colors.glow}` }}
                    >
                        Thanks for creating!
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Please follow <a href="https://x.com/Peter_ajay07" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{color: style.colors.glow}}>@Peter_ajay07</a> on X and don't forget to give credit when you share your card!
                    </p>
                    <a 
                        href="https://x.com/Peter_ajay07" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
                        style={{ 
                            background: `linear-gradient(45deg, ${style.colors.base}, ${style.colors.glow})`,
                            boxShadow: `0 4px 15px 0 ${style.colors.base}80`
                        }}
                    >
                        Follow on X
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThankYouModal;
