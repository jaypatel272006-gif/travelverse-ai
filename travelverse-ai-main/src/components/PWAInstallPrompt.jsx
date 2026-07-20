import React, { useState, useEffect } from 'react';
import { Download, X, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PWAInstallPrompt = () => {
  const { showToast, awardXp } = useApp();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      
      const dismissed = localStorage.getItem('tv_pwa_dismissed');
      const now = Date.now();
      
      // If not dismissed, or dismissed more than 24 hours ago, show the prompt
      if (!dismissed || now - parseInt(dismissed) > 24 * 60 * 60 * 1000) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Also check if app is already installed / running as standalone PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      showToast('Quantum installation initialized! Welcome aboard, Commander.', 'success');
      setTimeout(() => awardXp(1000, 'Installed TravelVerse AI OS'), 500);
    } else {
      showToast('Installation deferred. System remains in sandbox browser.', 'error');
    }
    
    // Clear deferred prompt state
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('tv_pwa_dismissed', Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="glass border border-teal-500/30 rounded-3xl p-5 shadow-2xl relative overflow-hidden bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-xl">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 transition-colors p-1 rounded-lg hover:bg-white/5"
        >
          <X size={16} />
        </button>

        <div className="flex gap-4 items-start pr-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-sky-400 flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-500/20">
            <Download size={22} className="animate-bounce" />
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-bold">TravelVerse AI 2100</span>
              <span className="text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded font-mono font-bold flex items-center gap-0.5">
                <Award size={10} /> +1,000 XP
              </span>
            </div>
            <h4 className="font-display font-black text-sm text-slate-100">Elevate to Native Travel OS</h4>
            <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
              Install TravelVerse AI to your home screen for immersive standalone exploration, offline tracking, and offline neural tools.
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-4 justify-end">
          <button
            onClick={handleDismiss}
            className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-805 text-slate-300 font-semibold text-xs transition-all"
          >
            Later
          </button>
          <button
            onClick={handleInstallClick}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-400 hover:to-sky-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 flex items-center gap-1.5 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={13} />
            Install Operating System
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
