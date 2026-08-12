import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Map, Sparkles, Navigation, BookOpen, 
  Calendar, Layers, User, Command, Sun, Moon, Search, 
  ChevronRight, Award, ShieldCheck, Heart, LogOut, X, Activity, DollarSign
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AppShell = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userXp, userLevel, wishlist, theme, toggleTheme, logout } = useApp();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Keyboard shortcut (Cmd+K or Ctrl+K) for Spatial Command Center
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const primaryNav = [
    { path: '/', label: 'HOME', icon: Compass, exact: true },
    { path: '/destinations', label: 'EXPLORE', icon: Navigation },
    { path: '/planner', label: 'PLAN', icon: Sparkles },
    { path: '/cockpit', label: 'JOURNEY', icon: Activity },
    { path: '/maps', label: 'MAP', icon: Map },
    { path: '/memories', label: 'MEMORIES', icon: BookOpen }
  ];

  const secondaryNav = [
    { path: '/india-explorer', label: 'INDIA', badge: 'HERITAGE' },
    { path: '/spiritual', label: 'SPIRITUAL', badge: 'PASSPORT' },
    { path: '/dashboard', label: 'OS DASHBOARD', badge: 'MATRIX' },
    { path: '/budget', label: 'BUDGET OS', badge: 'FINANCE' }
  ];

  const commandActions = [
    { title: 'Plan Kashmir 7-day trip', query: 'Plan Kashmir 7-day trip under ₹50,000', path: '/planner?dest=Kashmir' },
    { title: 'Explore Goa beaches', query: 'Explore Goa coastlines and beaches', path: '/destinations?search=Goa' },
    { title: 'Open 12 Jyotirlinga Passport', query: 'Open Spiritual Universe passport', path: '/spiritual' },
    { path: '/india-explorer', title: 'Launch India Regional Explorer', query: 'Discover Northeast & South India' }
  ];

  const handleRunCommand = (action) => {
    setIsCommandOpen(false);
    setCommandQuery('');
    navigate(action.path);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      
      {/* Background Spatial Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(45,212,191,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[30%] -right-[15%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(56,189,248,0.05)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Top Telemetry Header / Command Bar */}
      <header className="sticky top-0 z-40 w-full h-16 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(45,212,191,0.2)]">
              <Compass size={18} className="animate-spin-slow" style={{ animationDuration: '12s' }} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-sm tracking-wider uppercase text-white flex items-center gap-1.5">
                TRAVELVERSE <span className="text-teal-400 text-[10px] font-mono font-bold bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">2100</span>
              </span>
              <span className="text-[8.5px] font-mono text-slate-400 tracking-widest uppercase">Travel Operating System</span>
            </div>
          </NavLink>
        </div>

        {/* Center: Command Trigger Bar */}
        <button
          onClick={() => setIsCommandOpen(true)}
          className="hidden md:flex items-center justify-between gap-6 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-slate-200 hover:border-teal-500/30 transition-all w-80 text-xs font-mono cursor-pointer shadow-inner"
        >
          <div className="flex items-center gap-2">
            <Search size={13} className="text-teal-400" />
            <span>Search or type prompt...</span>
          </div>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-[9px] text-slate-300 font-mono">⌘K</kbd>
        </button>

        {/* Right: Telemetry Controls & Profile */}
        <div className="flex items-center gap-3">
          
          {/* User Level/XP Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs font-mono">
            <Award size={13} className="text-amber-400" />
            <span className="text-slate-300 font-bold">LVL {userLevel}</span>
            <span className="text-teal-400 font-bold">{userXp} XP</span>
          </div>

          {/* Quick Wishlist Link */}
          <NavLink
            to="/wishlist"
            className="p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-rose-400 hover:border-rose-500/30 transition-all relative"
            title="Saved Destinations"
          >
            <Heart size={16} />
            {wishlist?.destinations?.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-mono font-bold flex items-center justify-center">
                {wishlist.destinations.length}
              </span>
            )}
          </NavLink>

          {/* Mobile Search Button */}
          <button
            onClick={() => setIsCommandOpen(true)}
            className="md:hidden p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300"
          >
            <Search size={16} />
          </button>
        </div>
      </header>

      {/* Main Spatial Workspace Body */}
      <div className="flex-1 flex w-full relative z-10">
        
        {/* Desktop Left Spatial Sidebar */}
        <aside className="hidden lg:flex flex-col justify-between w-64 shrink-0 bg-[#030712]/60 border-r border-white/10 p-4 sticky top-16 h-[calc(100vh-4rem)]">
          
          {/* Navigation Groups */}
          <div className="flex flex-col gap-6 text-left">
            
            {/* Primary Nav */}
            <div className="flex flex-col gap-1">
              <span className="px-3 text-[9px] font-mono text-slate-500 uppercase tracking-widest font-black mb-1">Primary Workspace</span>
              {primaryNav.map(item => {
                const Icon = item.icon;
                const isActive = item.exact ? location.pathname === '/' : location.pathname.startsWith(item.path);
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                      isActive
                        ? 'bg-teal-500/15 border border-teal-500/30 text-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.15)]'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-teal-400' : 'text-slate-400'} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Secondary Nav */}
            <div className="flex flex-col gap-1 border-t border-white/5 pt-4">
              <span className="px-3 text-[9px] font-mono text-slate-500 uppercase tracking-widest font-black mb-1">Specialized Modules</span>
              {secondaryNav.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                      isActive
                        ? 'bg-sky-500/15 border border-sky-500/30 text-sky-300 font-bold'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 font-bold">{item.badge}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Sidebar Footer telemetry */}
          <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>OS v2100.4 ONLINE</span>
            </span>
            <span className="text-teal-400 font-bold">LATENCY 8ms</span>
          </div>
        </aside>

        {/* Content Outlet Frame */}
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-4rem)] pb-24 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#030712]/90 backdrop-blur-xl border-t border-white/10 px-2 py-2 flex items-center justify-around">
        {primaryNav.map(item => {
          const Icon = item.icon;
          const isActive = item.exact ? location.pathname === '/' : location.pathname.startsWith(item.path);
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-[9px] font-mono font-bold transition-all ${
                isActive ? 'text-teal-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Spatial Command Overlay (Cmd+K) */}
      <AnimatePresence>
        {isCommandOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-xl bg-slate-900 border border-white/15 rounded-3xl p-4 shadow-2xl overflow-hidden text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-teal-400 font-mono font-bold text-xs">
                  <Command size={14} />
                  <span>TRAVELVERSE SPATIAL COMMAND</span>
                </div>
                <button
                  onClick={() => setIsCommandOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-3 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
                <input
                  type="text"
                  autoFocus
                  placeholder="Where do you want to travel? e.g. Kashmir trip under ₹50,000..."
                  value={commandQuery}
                  onChange={(e) => setCommandQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && commandQuery.trim()) {
                      setIsCommandOpen(false);
                      navigate(`/planner?prompt=${encodeURIComponent(commandQuery)}`);
                    }
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-950 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold px-1">Suggested Quantum Commands</span>
                {commandActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRunCommand(action)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-teal-500/10 border border-white/5 hover:border-teal-500/30 flex items-center justify-between text-xs font-mono text-slate-200 transition-all cursor-pointer text-left"
                  >
                    <span>{action.title}</span>
                    <ChevronRight size={14} className="text-teal-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AppShell;
