import React from 'react';
import { MY_LOG_FROGS } from '../constants';
import { Frog } from '../types';

interface MyLogProps {
  onSelectFrog: (frog: Frog) => void;
  onGoHome: () => void;
  onGoMap: () => void;
}

const MyLog: React.FC<MyLogProps> = ({ onSelectFrog, onGoHome, onGoMap }) => {
  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark flex flex-col relative animate-in fade-in duration-500">
      
      {/* Header */}
      <header className="px-6 pt-12 pb-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Log</h1>
            <p className="text-primary font-medium text-sm flex items-center gap-1">
              <span className="material-icons-round text-sm">eco</span>
              {MY_LOG_FROGS.length + 32} Sightings logged
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="material-icons-round text-primary">account_circle</span>
          </div>
        </div>

        {/* View Toggle */}
        <div className="bg-primary/5 dark:bg-primary/10 p-1 rounded-xl flex items-center border border-primary/10">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary text-background-dark font-semibold shadow-sm transition-all">
            <span className="material-icons-round text-sm">list</span>
            List
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-500 dark:text-slate-400 font-medium hover:text-primary transition-all">
            <span className="material-icons-round text-sm">map</span>
            Map
          </button>
        </div>
      </header>

      {/* Search */}
      <div className="px-6 mb-4">
        <div className="relative group">
          <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          <input 
            type="text" 
            className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-primary/20 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-sm transition-all text-white placeholder:text-slate-500" 
            placeholder="Search species or location..." 
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-6 pb-28 hide-scrollbar">
        {/* Quick Date Grouping */}
        <div className="flex items-center gap-2 mb-4 mt-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Recently Found</span>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-primary/10"></div>
        </div>

        {/* Log Cards */}
        <div className="space-y-4">
          {MY_LOG_FROGS.map((frog) => (
            <div 
              key={frog.id} 
              onClick={() => onSelectFrog(frog)}
              className="group relative bg-white dark:bg-white/5 border border-slate-100 dark:border-primary/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={frog.image} 
                  alt={frog.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {frog.verified && (
                  <div className="absolute top-3 right-3 bg-primary/90 text-background-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Verified</div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold">{frog.name}</h3>
                  <span className={`font-bold text-xs ${frog.rarity === 'Rare' ? 'text-primary' : 'text-slate-400'}`}>{frog.rarity}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 italic">{frog.scientificName}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
                    <span className="material-icons-round text-sm text-primary">location_on</span>
                    {frog.location}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <span className="material-icons-round text-sm">calendar_today</span>
                    {frog.date}
                  </div>
                </div>
              </div>
              
              {/* Decorative Leaf Accent for Rare items */}
              {frog.rarity === 'Rare' && (
                <div className="absolute -bottom-2 -right-2 opacity-10 pointer-events-none">
                  <span className="material-icons-round text-6xl text-primary transform rotate-45">eco</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Navigation Bar (Custom implementation for this screen to match Screenshot 3 style) */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-200 dark:border-primary/10 px-8 flex items-center justify-between z-10">
        <button onClick={onGoHome} className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons-round">home</span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-icons-round">auto_stories</span>
          <span className="text-[10px] font-medium">My Log</span>
        </button>
        
        {/* Center FAB */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button className="h-14 w-14 rounded-full bg-primary text-background-dark shadow-lg shadow-primary/40 flex items-center justify-center border-4 border-background-light dark:border-background-dark hover:scale-110 active:scale-95 transition-all">
            <span className="material-icons-round text-3xl">add</span>
          </button>
        </div>

        <button onClick={onGoMap} className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons-round">explore</span>
          <span className="text-[10px] font-medium">Map</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons-round">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>

      {/* Leaf Accent Floating element */}
      <div className="fixed top-20 -right-20 pointer-events-none opacity-5 dark:opacity-10 scale-150">
        <span className="material-icons-round text-[300px] text-primary rotate-12">eco</span>
      </div>
    </div>
  );
};

export default MyLog;