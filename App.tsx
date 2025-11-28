import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import BootSelector from './components/BootSelector';
import BootSequence from './components/BootSequence';
import { Theme } from './types';

type AppStage = 'selection' | 'booting' | 'desktop';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>('selection');
  const [selectedTheme, setSelectedTheme] = useState<Theme>('macos');

  useEffect(() => {
    // Check local storage for persistent theme
    const savedTheme = localStorage.getItem('ybio_theme') as Theme;
    if (savedTheme) {
      setSelectedTheme(savedTheme);
      setStage('desktop'); // Skip boot sequence if returning
    }
  }, []);

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('ybio_theme', theme);
    setStage('booting');
  };

  const handleBootComplete = () => {
    setStage('desktop');
  };

  const handleLock = () => {
    // "Log Out" action
    localStorage.removeItem('ybio_theme'); // Clear persistence
    setStage('selection');
  };

  return (
    <div className="w-full h-full">
      {stage === 'selection' && (
        <BootSelector onSelect={handleThemeSelect} />
      )}

      {stage === 'booting' && (
        <BootSequence theme={selectedTheme} onComplete={handleBootComplete} />
      )}

      {stage === 'desktop' && (
        <Desktop 
          onLock={handleLock} 
          initialTheme={selectedTheme} 
        />
      )}
    </div>
  );
};

export default App;