import React from 'react';
import { CardTheme } from '../types';
import { themeStyles } from './Card';

interface ThankYouModalProps {
    theme: CardTheme;
    onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ theme, onClose }) => {
    const style = themeStyles[theme];

    const shareText = "Check out the cool IRYS card I created! Made with the IRYS Card Creator by @Peter_ajay07. #IRYS #Web3";
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

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
                    
                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t" style={{ borderColor: `${style.colors.base}40` }}></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-gray-900 px-2 text-sm text-gray-400">Share your creation</span>
                            </div>
                        </div>
                        
                        <div className="flex justify-center gap-4 mt-4">
                            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" title="Share on X" className="h-12 w-12 bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 hover:border-purple-400 transition-all duration-300 transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="Share on Facebook" className="h-12 w-12 bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 hover:border-purple-400 transition-all duration-300 transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Share on Instagram" className="h-12 w-12 bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 hover:border-purple-400 transition-all duration-300 transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            Remember to upload your downloaded card!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouModal;