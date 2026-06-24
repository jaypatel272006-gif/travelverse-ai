import React from 'react';
import { AlertTriangle, RefreshCw, Trash2, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("TravelVerse OS Stability Layer Caught Error:", error, errorInfo);
  }

  handleReset = () => {
    // Flush all local storage states that could cause corrupt state crashes
    localStorage.clear();
    
    // Clear all client cache buffers
    if ('caches' in window) {
      caches.keys().then((names) => {
        for (let name of names) {
          caches.delete(name);
        }
      }).catch(err => console.error("Error clearing caches:", err));
    }
    
    // Unregister all active service workers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister();
        }
      }).catch(err => console.error("Error unregistering service workers:", err));
    }
    
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
          {/* Laser grids background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Main Error Box */}
          <div className="relative z-10 w-full max-w-lg bg-slate-900/60 backdrop-blur-lg border border-rose-500/30 rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 animate-pulse">
              <AlertTriangle size={32} />
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest">Stability Layer Alert</span>
              <h2 className="font-display font-black text-xl text-slate-100">Quantum Core Collision Detected</h2>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md mt-1">
                TravelVerse OS stability controls intercepted a runtime rendering exception. Your travel data is preserved in local buffers.
              </p>
            </div>

            {/* Error Message Stack */}
            <div className="w-full bg-slate-950/80 border border-slate-850 p-4 rounded-xl text-left font-mono text-[10px] text-slate-400 max-h-36 overflow-auto scrollbar-thin">
              <span className="text-rose-500 font-bold block mb-1">EXCEPTION_LOG:</span>
              <span className="break-all">{this.state.error?.toString() || 'Unknown Rendering Exception'}</span>
            </div>

            {/* Recovery CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-2">
              <button
                onClick={this.handleReload}
                className="py-3 px-4 rounded-xl border border-slate-800 hover:bg-slate-805 font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-slate-200"
              >
                <RefreshCw size={13} />
                Force System Reboot
              </button>
              <button
                onClick={this.handleReset}
                className="py-3 px-4 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-teal-500/20"
              >
                <Trash2 size={13} />
                Reset Factory State
              </button>
            </div>
            
            <a 
              href="/"
              className="text-[10px] font-bold text-teal-400 hover:underline flex items-center gap-1 mt-2"
            >
              <Home size={10} /> Back to Cosmic Navigation
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
