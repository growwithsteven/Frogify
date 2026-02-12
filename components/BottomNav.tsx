import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, setScreen }) => {
  const navItemClass = (screenName: Screen) =>
    `flex flex-col items-center gap-1 group cursor-pointer transition-colors ${
      currentScreen === screenName ? 'text-primary' : 'text-slate-400 hover:text-primary'
    }`;

  const iconClass = (filled: boolean) =>
    `material-icons-round ${filled ? '' : ''}`; // Can add styles if needed

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-nature-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 px-6 pt-3 pb-8 flex justify-between items-center z-50">
      <div 
        className={navItemClass('home')}
        onClick={() => setScreen('home')}
      >
        <span className={iconClass(currentScreen === 'home')}>home</span>
        <span className="text-[10px] font-bold">Home</span>
      </div>

      <div 
        className={navItemClass('log')}
        onClick={() => setScreen('log')}
      >
        <span className={iconClass(currentScreen === 'log')}>auto_stories</span>
        <span className="text-[10px] font-medium">My Log</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-slate-400 group cursor-pointer hover:text-primary transition-colors">
        <span className="material-icons-round">explore</span>
        <span className="text-[10px] font-medium">Explore</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-slate-400 group cursor-pointer hover:text-primary transition-colors">
        <span className="material-icons-round">person_outline</span>
        <span className="text-[10px] font-medium">Profile</span>
      </div>
    </nav>
  );
};

export default BottomNav;