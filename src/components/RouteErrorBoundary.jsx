import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { logger } from '../utils/logger';

export class RouteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logger.error("TravelVerse Route-Level Stability Intercept:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full p-8 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-rose-500/20 text-center flex flex-col items-center gap-4 py-16">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 animate-pulse">
            <AlertTriangle size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-mono text-rose-400 uppercase tracking-widest font-bold">ROUTE_TELEMETRY_FAULT</span>
            <h3 className="font-display font-black text-lg text-white">Component Loading Failed</h3>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mt-1">
              TravelVerse core could not resolve the current sector interface. You can attempt to re-establish the connection.
            </p>
          </div>
          <button
            onClick={this.handleRetry}
            className="py-2.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow transition-all mt-2"
          >
            <RefreshCw size={12} />
            Re-align Coordinates
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default RouteErrorBoundary;
