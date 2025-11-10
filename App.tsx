
import React, { useState, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { CardTemplate, CardData } from './types';
import Card, { templateStyles } from './components/Card';
import Controls from './components/Controls';

const App: React.FC = () => {
  const [template, setTemplate] = useState<CardTemplate>(CardTemplate.Red);
  const [cardData, setCardData] = useState<CardData>({
    title: 'IRYS (🦄).canvas',
    description: 'DATAPUNK of the IRYS. Those angel, demon. Those who trust in IRYS and in his vision',
    image: 'https://picsum.photos/seed/irys/400/400',
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
      title: 'IRYS (🦄).canvas',
      description: 'DATAPUNK of the IRYS. Those angel, demon. Those who trust in IRYS and in his vision',
      image: 'https://picsum.photos/seed/irys/400/400',
    });
    setTemplate(CardTemplate.Red);
  }

  const backgroundStyles: Record<CardTemplate, string> = {
    [CardTemplate.Red]: 'from-red-900/50 to-black',
    [CardTemplate.Purple]: 'from-purple-900/50 to-black',
    [CardTemplate.Green]: 'from-green-900/50 to-black',
    [CardTemplate.Gold]: 'from-yellow-800/50 to-black',
    [CardTemplate.Blue]: 'from-blue-900/50 to-black',
    [CardTemplate.Electric]: 'from-blue-900/50 to-purple-900/50',
    [CardTemplate.Neon]: 'from-green-900/60 to-gray-900',
    [CardTemplate.Golden]: 'from-yellow-700/40 to-gray-500/60',
    [CardTemplate.Mystic]: 'from-teal-900/50 to-pink-900/50',
  };

  return (
    <div className={`min-h-screen w-full bg-black text-white transition-all duration-500 bg-cover bg-center`} style={{backgroundImage: "url('https://picsum.photos/seed/space/1920/1080')"}}>
      <div className={`min-h-screen w-full bg-gradient-to-b ${backgroundStyles[template]} backdrop-blur-sm flex flex-col items-center justify-center p-4`}>
        <header className="text-center mb-4 md:mb-8">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold tracking-widest text-shadow-glow" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)'}}>IRYS</h1>
        </header>

        <main className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
          <div className="w-full max-w-sm flex-shrink-0">
            <div ref={cardRef}>
               <Card template={template} data={cardData} />
            </div>
             <div className="flex justify-center items-center gap-4 mt-6">
                <Controls onReset={handleReset} onDownload={handleDownload} onImageUpload={(image) => setCardData(prev => ({ ...prev, image }))} />
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Template</label>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(CardTemplate) as Array<keyof typeof CardTemplate>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setTemplate(CardTemplate[key])}
                      className={`h-12 w-full rounded-md border-2 transition-transform transform hover:scale-105 ${template === CardTemplate[key] ? 'border-white scale-105' : 'border-transparent'}`}
                      style={{ backgroundColor: templateStyles[CardTemplate[key]].colors.glow }}
                      aria-label={`Select ${key} template`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center mt-4 md:mt-8">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-widest text-shadow-glow-footer" style={{ textShadow: `0 0 15px ${templateStyles[template].colors.glow}`}}>IRYS CARDS</h2>
        </footer>
      </div>
    </div>
  );
};

export default App;
