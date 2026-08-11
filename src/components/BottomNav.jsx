import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Compass, Search, Sparkles, Map, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BottomNav = () => {
  const { user } = useApp();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Compass size={18} /> },
    { path: '/destinations', label: 'Explore', icon: <Search size={18} /> },
    { path: '/planner', label: 'Planner', icon: <Sparkles size={18} /> },
    { path: '/dashboard', label: 'Trips', icon: <Map size={18} /> },
    { path: user ? '/dashboard' : '/login', label: 'Profile', icon: <User size={18} /> }
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 xl:hidden block">
      <div className="glass-neo rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(5,8,22,0.6)] px-4 py-2 flex items-center justify-around">
        {navItems.map((item) => {
          // Highlight active state
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-1 px-3.5 rounded-xl transition-all duration-300 min-w-[50px] min-h-[44px] justify-center outline-none ${
                isActive 
                  ? 'text-teal-400 font-bold scale-105' 
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[9px] font-mono font-bold tracking-wider uppercase leading-none">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
