import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, Eye, EyeOff, Sparkles, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Login = () => {
  const { login, showToast } = useApp();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get('redirect') || 'dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      showToast('Please fill out all fields.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = login(email.trim(), password.trim());
      setLoading(false);
      
      if (result.success) {
        navigate(`/${redirectPath}`);
      } else {
        showToast(result.message, 'error');
      }
    }, 600);
  };

  return (
    <div className="py-8 text-left flex items-center justify-center min-h-[75vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-xl flex flex-col gap-6"
      >
        {/* Header Branding */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow shadow-teal-500/20">
            <Sparkles size={20} />
          </div>
          <h2 className="font-display font-extrabold text-xl text-slate-850 dark:text-slate-100 mt-2">
            Welcome back to TravelVerse
          </h2>
          <p className="text-xs text-slate-450">Sign in to sync your wishlist and trip itineraries.</p>
        </div>

        {/* Demo Account Reminder */}
        <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/25 flex items-start gap-2 text-xs text-amber-700 dark:text-amber-400 font-semibold">
          <AlertCircle className="shrink-0 mt-0.5" size={14} />
          <div className="flex flex-col gap-0.5">
            <span>Demo credentials:</span>
            <span className="font-mono text-[10px]">Email: demo@travelverse.ai</span>
            <span className="font-mono text-[10px]">Password: password</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@travelverse.ai"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-205 dark:border-slate-805 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-800 dark:text-slate-105"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-205 dark:border-slate-805 text-xs font-semibold focus:outline-none focus:border-teal-500 text-slate-800 dark:text-slate-105"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-teal-655 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow flex items-center justify-center gap-1.5 disabled:opacity-50 mt-2"
          >
            <LogIn size={13} />
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center text-xs text-slate-450 border-t border-slate-100 dark:border-slate-850 pt-4 font-semibold">
          Don't have an account?{' '}
          <Link to="/register" className="text-teal-600 dark:text-teal-400 hover:underline">
            Register for free
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
