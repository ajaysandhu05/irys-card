import React, { useState, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { CardTheme, CardDesign, CardData, TextEffect } from './types';
// FIX: Import designPaths and themeStyles from components/Card.tsx to resolve errors.
import Card, { designPaths, themeStyles } from './components/Card';
import Controls from './components/Controls';

const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA10dzkAAABmWlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGBkZGBgYGSUYXBgYGBhY2AggA9hZWBgYJkYpjlQUhxDMIp5ILMXg4k5aZ5wzEk83cHBxADy3i4fB4d4Mjg4YmSE4OBgAYkBAWkZWMARsgsgSg7gNEBSkZpsFiA3sLMF0t2Dyv2gOojgA8g2kjQ2yyA7cBsF23DkDoDkPumeywPEeA4j6zAYAAAZh3k/iQe4gRgQj85x5z/wz/A/s+w/+w//l/2/2324/x/A/s9/s/yv/N8F8wMDCwMNiwubCzMDNwsXDwcPAxMPDIsPDw8/AycjExMXExcjJycrJycvIychLycnIKygoamlrauvq6uobGBoZGxiamZuZW1udnZ1dHV1dPT19fUNjYwMjYxNTM3MLSytrG1s7ewdHJ2cnZxdXN3c3Tz9/P0AgQGCQoNCRYWERoZFR0ZFx8YkJCUmJyZnpmfk5+QWFBSVlJWWlZuXn1hQVFZWVVdU1NLW0dXT9/AzgAAhMwgK0iHw4AAAAASUVORK5CYII=';

const App: React.FC = () => {
  const [theme, setTheme] = useState<CardTheme>(CardTheme.Red);
  const [design, setDesign] = useState<CardDesign>(CardDesign.Standard);
  const [titleEffect, setTitleEffect] = useState<TextEffect>(TextEffect.Glow);
  const [descriptionEffect, setDescriptionEffect] = useState<TextEffect>(TextEffect.Glow);
  const [cardData, setCardData] = useState<CardData>({
    title: 'IRYS MAINNET CARD',
    description: 'my self peter i m shihan at irys community and i have created this so my lovely family in irys.',
    image: defaultImage,
  });

  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(() => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'irys-card.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('oops, something went wrong!', err);
      });
  }, [cardRef]);

  const handleReset = () => {
    setCardData({
      title: 'IRYS MAINNET CARD',
      description: 'my self peter i m shihan at irys community and i have created this so my lovely family in irys.',
      image: defaultImage,
    });
    setTheme(CardTheme.Red);
    setDesign(CardDesign.Standard);
    setTitleEffect(TextEffect.Glow);
    setDescriptionEffect(TextEffect.Glow);
  }

  const handleImageUpload = (image: string) => {
    setCardData(prev => ({ ...prev, image }));
  };

  const backgroundStyles: Record<CardTheme, string> = {
    [CardTheme.Red]: 'from-red-900/50 to-black',
    [CardTheme.Purple]: 'from-purple-900/50 to-black',
    [CardTheme.Green]: 'from-green-900/50 to-black',
    [CardTheme.Gold]: 'from-yellow-800/50 to-black',
    [CardTheme.Blue]: 'from-blue-900/50 to-black',
    [CardTheme.Electric]: 'from-blue-900/50 to-purple-900/50',
    [CardTheme.Neon]: 'from-green-900/60 to-gray-900',
    [CardTheme.Golden]: 'from-yellow-700/40 to-gray-500/60',
    [CardTheme.Mystic]: 'from-teal-900/50 to-pink-900/50',
    [CardTheme.Cyber]: 'from-cyan-900/50 to-magenta-900/50',
    [CardTheme.Inferno]: 'from-red-900/60 to-orange-800/50',
    [CardTheme.Starlight]: 'from-slate-900/60 to-indigo-900/50',
    [CardTheme.Oceanic]: 'from-cyan-800/50 to-blue-900/50',
    [CardTheme.Royal]: 'from-indigo-900/50 to-purple-800/50',
    [CardTheme.Forest]: 'from-emerald-900/50 to-lime-900/50',
    [CardTheme.Cosmic]: 'from-black to-indigo-900/60',
  };

  return (
    <div className={`min-h-screen w-full bg-black text-white transition-all duration-500 bg-cover bg-center`} style={{backgroundImage: "url('https://picsum.photos/seed/space/1920/1080')"}}>
      <div className={`min-h-screen w-full bg-gradient-to-b ${backgroundStyles[theme]} backdrop-blur-sm flex flex-col items-center justify-center p-4`}>

        <main className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
          <div className="w-full max-w-md flex-shrink-0">
            <h2 className="text-center font-orbitron text-2xl font-bold mb-4 text-white uppercase tracking-wider" style={{ textShadow: `0 0 10px ${themeStyles[theme].colors.glow}`}}>
                IRYS MAINNET CARD
            </h2>
            <div ref={cardRef} className="bg-zinc-900/80 p-4 rounded-2xl backdrop-blur-sm border border-zinc-700">
              <div className="aspect-[4/5] w-full">
                 <Card theme={theme} design={design} data={cardData} titleEffect={titleEffect} descriptionEffect={descriptionEffect} />
              </div>
            </div>
             <div className="flex justify-center items-center gap-4 mt-6">
                <Controls onReset={handleReset} onDownload={handleDownload} onImageUpload={handleImageUpload} />
            </div>
          </div>
          
          <div className="w-full max-w-md bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
            <h2 className="font-orbitron text-2xl font-bold mb-6 text-center">Customize Your Card</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  value={cardData.title}
                  onChange={(e) => setCardData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                  placeholder="Enter card title"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  id="description"
                  rows={3}
                  value={cardData.description}
                  onChange={(e) => setCardData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                  placeholder="Enter card description"
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title Effect</label>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(TextEffect) as Array<keyof typeof TextEffect>).map((key) => {
                    const currentEffect = TextEffect[key];
                    return (
                      <button
                        key={key}
                        onClick={() => setTitleEffect(currentEffect)}
                        className={`py-2 px-1 text-xs font-semibold rounded-md border-2 transition-transform transform hover:scale-105 ${titleEffect === currentEffect ? 'bg-purple-500/30 border-purple-400 text-white' : 'bg-gray-900/50 border-gray-600 text-gray-300'}`}
                      >
                        {key}
                      </button>
                    )
                  })}
                </div>
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description Effect</label>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(TextEffect) as Array<keyof typeof TextEffect>).map((key) => {
                    const currentEffect = TextEffect[key];
                    return (
                      <button
                        key={key}
                        onClick={() => setDescriptionEffect(currentEffect)}
                        className={`py-2 px-1 text-xs font-semibold rounded-md border-2 transition-transform transform hover:scale-105 ${descriptionEffect === currentEffect ? 'bg-purple-500/30 border-purple-400 text-white' : 'bg-gray-900/50 border-gray-600 text-gray-300'}`}
                      >
                        {key}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Design</label>
                <div className="grid grid-cols-4 gap-2">
                  {(Object.keys(CardDesign) as Array<keyof typeof CardDesign>).map((key) => {
                      const currentDesign = CardDesign[key];
                      return (
                          <button
                              key={key}
                              onClick={() => setDesign(currentDesign)}
                              className={`aspect-[3/5] w-full rounded-md border-2 transition-transform transform hover:scale-105 p-1 flex items-center justify-center ${design === currentDesign ? 'bg-purple-500/30 border-purple-400' : 'bg-gray-900/50 border-gray-600'}`}
                              aria-label={`Select ${key} design`}
                              title={`${key} Design`}
                          >
                              <svg viewBox="0 0 300 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d={designPaths[currentDesign]} stroke="currentColor" strokeWidth="15" className={design === currentDesign ? 'text-purple-300' : 'text-gray-400'}/>
                              </svg>
                          </button>
                      )
                  })}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Theme</label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {(Object.keys(CardTheme) as Array<keyof typeof CardTheme>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setTheme(CardTheme[key])}
                      className={`h-12 w-full rounded-md border-2 transition-transform transform hover:scale-105 ${theme === CardTheme[key] ? 'border-white scale-105' : 'border-transparent'}`}
                      style={{ backgroundColor: themeStyles[CardTheme[key]].colors.glow }}
                      aria-label={`Select ${key} theme`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center mt-4 md:mt-8">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-widest text-shadow-glow-footer" style={{ textShadow: `0 0 15px ${themeStyles[theme].colors.glow}`}}>IRYS CARDS</h2>
        </footer>
      </div>
    </div>
  );
};

export default App;