import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import FrogDetail from './pages/FrogDetail';
import MyLog from './pages/MyLog';
import { Frog, Screen } from './types';
import { NEARBY_FROGS } from './constants';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedFrog, setSelectedFrog] = useState<Frog | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate a scan delay then go to detail of the first frog (Red-Eyed Tree Frog)
    setTimeout(() => {
      setIsScanning(false);
      setSelectedFrog(NEARBY_FROGS[0]);
      setCurrentScreen('detail');
    }, 1500);
  };

  const handleSelectFrog = (frog: Frog) => {
    setSelectedFrog(frog);
    setCurrentScreen('detail');
  };

  const handleBackFromDetail = () => {
    // If we came from log, go back to log? Simple back logic: go home if nothing else.
    // For this simple app, we can just track previous screen or default to home.
    // We'll default to 'home' unless we implement a full history stack.
    setCurrentScreen('home');
    setSelectedFrog(null);
  };

  const handleAddToLog = () => {
    setCurrentScreen('log');
  };

  // Render logic
  const renderScreen = () => {
    if (isScanning) {
      return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3a4yWYyURsnuX7ap6zr7_YWFe5HCkPNM6AtW2IZb9AAeTMQJG_SiI7Dhy530-FpYr6Kv-aZaz0c2hMEYJyTarYXdFApiH8GxuPXyMy09tvTveHA7mDbVKyEi4Qul3en-xVi01K2CNSraxfNV6QAW-MZveH9X7931P914IvQfGmkFGCxZCjJPWk0V9Bjt1Uicwqt13VSCDsPbzIXh4lLkawmlyp-MxAqgLb2ffJLNm3_tM3V4MEkedZlF80rrBaeeWZahqKRgc6dc"
            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
          />
          <div className="w-64 h-64 border-2 border-primary rounded-2xl relative z-10 flex items-center justify-center bg-black/20 backdrop-blur-sm shadow-[0_0_50px_rgba(19,236,91,0.3)]">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary -mt-1 -ml-1"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary -mt-1 -mr-1"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary -mb-1 -ml-1"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary -mb-1 -mr-1"></div>
            <div className="w-full h-1 bg-primary/50 absolute top-1/2 animate-ping"></div>
          </div>
          <p className="mt-8 text-primary font-bold tracking-widest animate-pulse z-10 uppercase">Scanning Species...</p>
        </div>
      );
    }

    switch (currentScreen) {
      case 'home':
        return (
          <>
            <Home onScan={handleScan} onSelectFrog={handleSelectFrog} />
            <BottomNav currentScreen="home" setScreen={setCurrentScreen} />
          </>
        );
      case 'log':
        return (
          // MyLog has its own nav bar in the design
          <MyLog 
            onSelectFrog={handleSelectFrog} 
            onGoHome={() => setCurrentScreen('home')}
            onGoMap={() => console.log('Map View')}
          />
        );
      case 'detail':
        return selectedFrog ? (
          <FrogDetail 
            frog={selectedFrog} 
            onBack={handleBackFromDetail} 
            onAddToLog={handleAddToLog} 
          />
        ) : null;
      default:
        return <Home onScan={handleScan} onSelectFrog={handleSelectFrog} />;
    }
  };

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen font-display max-w-md mx-auto shadow-2xl relative overflow-hidden">
        {renderScreen()}
    </div>
  );
};

export default App;