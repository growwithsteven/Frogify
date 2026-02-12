import React from 'react';
import { Frog } from '../types';

interface FrogDetailProps {
  frog: Frog;
  onBack: () => void;
  onAddToLog: () => void;
}

const FrogDetail: React.FC<FrogDetailProps> = ({ frog, onBack, onAddToLog }) => {
  // Use frog stats if available, otherwise mock them for the layout
  const stats = frog.stats || {
    status: 'Unknown',
    size: '1 - 2 inches',
    active: 'Diurnal'
  };

  return (
    <div className="relative w-full min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-effect border-b border-white/5">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-background-dark/20 text-white hover:bg-background-dark/40 transition-colors"
        >
          <span className="material-icons-outlined">arrow_back_ios_new</span>
        </button>
        <div className="flex gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-background-dark/20 text-white hover:bg-background-dark/40 transition-colors">
            <span className="material-icons-outlined">share</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-background-dark/20 text-white hover:bg-background-dark/40 transition-colors">
            <span className="material-icons-outlined">more_horiz</span>
          </button>
        </div>
      </header>

      {/* Hero Image Section */}
      <div className="relative w-full h-[450px] flex-shrink-0">
        <img src={frog.image} alt={frog.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 custom-gradient-overlay"></div>
        
        {/* Floating ID Badge */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="inline-flex items-center px-3 py-1 bg-primary/20 border border-primary/40 rounded-full mb-3 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                {frog.matchScore ? `Match Confirmed ${frog.matchScore}%` : 'Species Identified'}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight leading-tight">{frog.name}</h1>
          <p className="text-lg text-primary/90 italic font-light mt-1">{frog.scientificName || 'Unknown Species'}</p>
        </div>
      </div>

      {/* Content Area */}
      <main className="flex-1 px-6 pb-32 -mt-4 relative z-10 bg-background-light dark:bg-background-dark rounded-t-3xl pt-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <span className="material-icons-outlined text-primary mb-2">security</span>
            <span className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Status</span>
            <span className="text-sm font-medium mt-1">{stats.status}</span>
          </div>
          <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <span className="material-icons-outlined text-primary mb-2">straighten</span>
            <span className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Size</span>
            <span className="text-sm font-medium mt-1">{stats.size}</span>
          </div>
          <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <span className="material-icons-outlined text-primary mb-2">dark_mode</span>
            <span className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Active</span>
            <span className="text-sm font-medium mt-1">{stats.active}</span>
          </div>
        </div>

        {/* Habitat Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-icons-outlined text-primary text-xl">potted_plant</span>
            <h2 className="text-lg font-semibold tracking-tight">Habitat & Environment</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm">
            {frog.description || 'These iconic amphibians inhabit lush lowland tropical rainforests near rivers and ponds across Central America. They spend most of their time in the canopy, sticking to the undersides of large leaves to stay hydrated and hidden from predators.'}
          </p>
        </section>

        {/* Map/Location Mini Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-primary text-xl">location_on</span>
              <h2 className="text-lg font-semibold tracking-tight">Sighting Location</h2>
            </div>
            <button className="text-xs text-primary font-medium">Change Location</button>
          </div>
          <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVw_qDJFWht-NglvKBpVi-4Mc-e4d06HqhpuD-20BU2-oVa_R4itIakzlGRLIMsnY92f6sub1NZz2xZTrTyZoNSCuseNTim4_zLqw3K2_tY1dMqWSs2pxxd96ppTjRp_-CpDlrX0lYyEoFGo3zTAzt3lGsozH5gtHz3jHryVrBe7AcapxdL-o4CYHGvtaYT5qZgmQrCjmIUQrYUilGqB4xxLVPrBnCDIawoQeI3L3rcNB4fAH7n4EHYIOxRZEXS8HCCsr88PyPUX0" alt="Map" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary w-4 h-4 rounded-full border-4 border-background-dark shadow-[0_0_15px_rgba(19,236,91,0.6)] animate-ping absolute"></div>
              <div className="bg-primary w-4 h-4 rounded-full border-4 border-background-dark relative"></div>
            </div>
            <div className="absolute bottom-2 left-3 bg-background-dark/80 px-2 py-1 rounded text-[10px] font-medium text-white backdrop-blur-sm">
              Near {frog.location || 'Unknown Location'}
            </div>
          </div>
        </section>

        {/* Species Fun Fact */}
        <section className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-l-4 border-primary">
          <div className="flex gap-3">
            <span className="material-icons-outlined text-primary">lightbulb</span>
            <div>
              <h4 className="text-sm font-semibold mb-1">Did you know?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">Their bright colors are actually a defense mechanism called "startle coloration" to confuse predators.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Action Button Container */}
      <div className="fixed bottom-0 w-full p-6 glass-effect border-t border-white/5 z-50">
        <div className="flex gap-4">
          <button 
            onClick={onAddToLog}
            className="flex-1 bg-primary text-background-dark font-bold py-4 rounded-2xl shadow-[0_8px_30px_rgb(19,236,91,0.3)] hover:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-icons-outlined font-bold">add_circle</span>
            Add to My Log
          </button>
          <button className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300">
            <span className="material-icons-outlined">camera_alt</span>
          </button>
        </div>
        {/* iOS Home Indicator Spacer */}
        <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-6 mb-1 opacity-40"></div>
      </div>
    </div>
  );
};

export default FrogDetail;