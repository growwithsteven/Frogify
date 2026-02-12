import React from 'react';
import { NEARBY_FROGS, FROG_OF_THE_DAY } from '../constants';
import { Frog } from '../types';

interface HomeProps {
  onScan: () => void;
  onSelectFrog: (frog: Frog) => void;
}

const Home: React.FC<HomeProps> = ({ onScan, onSelectFrog }) => {
  return (
    <div className="min-h-screen pb-24 animate-in fade-in duration-500">
      {/* Top Status Bar */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-background-light dark:bg-background-dark">
        <div>
          <p className="text-xs font-medium text-primary/80 uppercase tracking-widest mb-1">Pond Status: Active</p>
          <h1 className="text-2xl font-bold tracking-tight">Ribbit, Alex! 🌿</h1>
        </div>
        <div className="bg-nature-dark/40 p-2 rounded-xl border border-primary/10 flex items-center gap-2">
          <span className="material-icons-round text-primary text-sm">water_drop</span>
          <span className="text-xs font-semibold">88% Humidity</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-icons-round text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          </span>
          <input 
            type="text" 
            className="w-full bg-white dark:bg-nature-dark border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/50 shadow-sm transition-all placeholder:text-slate-500 text-slate-100" 
            placeholder="Search species or habitats..."
          />
        </div>
      </div>

      {/* Main CTA: Scan a Frog */}
      <div className="px-4 mb-8" onClick={onScan}>
        <div className="relative overflow-hidden rounded-3xl bg-primary shadow-lg shadow-primary/20 p-6 flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-transform">
          <div className="z-10">
            <h2 className="text-background-dark text-xl font-bold mb-1">Scan a Frog</h2>
            <p className="text-background-dark/70 text-sm font-medium">Instantly identify any species</p>
            <button className="mt-4 bg-background-dark text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2">
              OPEN CAMERA
              <span className="material-icons-round text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
            <span className="material-icons-round text-[140px] text-background-dark">photo_camera</span>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        </div>
      </div>

      {/* Sighted Nearby Section */}
      <div className="mb-8">
        <div className="px-6 flex justify-between items-end mb-4">
          <div>
            <h3 className="text-lg font-bold">Sighted Nearby</h3>
            <p className="text-xs text-slate-400">Activity in the last 24 hours</p>
          </div>
          <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
            VIEW MAP <span className="material-icons-round text-xs">map</span>
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-4 hide-scrollbar pb-2">
          {NEARBY_FROGS.map((frog) => (
            <div 
              key={frog.id} 
              className="min-w-[200px] w-[200px] bg-white dark:bg-nature-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer active:scale-95 transition-transform"
              onClick={() => onSelectFrog(frog)}
            >
              <div className="h-32 w-full relative">
                <img src={frog.image} alt={frog.name} className="w-full h-full object-cover" />
                {frog.verified ? (
                  <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-primary flex items-center gap-1">
                    <span className="material-icons-round text-[10px]">verified</span> VERIFIED
                  </div>
                ) : (
                  <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-white/80 flex items-center gap-1">
                    <span className="material-icons-round text-[10px]">schedule</span> {frog.timeAgo}
                  </div>
                )}
              </div>
              <div className="p-3">
                <h4 className="font-bold text-sm truncate">{frog.name}</h4>
                <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                  <span className="material-icons-round text-[12px]">location_on</span> {frog.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tools */}
      <div className="px-4 mb-8">
        <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-slate-500 ml-2">Quick Tools</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-nature-dark/50 p-4 rounded-2xl flex items-center gap-3 border border-white/5 active:bg-nature-dark transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="material-icons-round text-primary">audiotrack</span>
            </div>
            <div>
              <p className="text-xs font-bold">Listen ID</p>
              <p className="text-[10px] text-slate-500">Identify by sound</p>
            </div>
          </div>
          <div className="bg-nature-dark/50 p-4 rounded-2xl flex items-center gap-3 border border-white/5 active:bg-nature-dark transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="material-icons-round text-primary">menu_book</span>
            </div>
            <div>
              <p className="text-xs font-bold">Logbook</p>
              <p className="text-[10px] text-slate-500">Your collection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Frog of the Day */}
      <div className="px-4 mb-6">
        <div 
          className="bg-gradient-to-br from-mud-dark to-nature-dark rounded-3xl p-5 border border-primary/10 relative overflow-hidden cursor-pointer"
          onClick={() => onSelectFrog(FROG_OF_THE_DAY)}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="material-icons-round text-primary text-sm">stars</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Frog of the Day</span>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/30 flex-shrink-0">
              <img src={FROG_OF_THE_DAY.image} alt={FROG_OF_THE_DAY.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-bold">{FROG_OF_THE_DAY.name}</h4>
              <p className="text-xs text-slate-400 mt-1 italic">{FROG_OF_THE_DAY.scientificName}</p>
              <p className="text-xs text-slate-300 mt-2 line-clamp-2">{FROG_OF_THE_DAY.description}</p>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;