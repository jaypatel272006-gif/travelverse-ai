import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, Lock, Mail, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import { useApp } from '../context/AppContext';

export const Login = () => {
  const navigate = useNavigate();
  const { login, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        navigate('/home');
      } else {
        setErrorMsg(res.message || 'Login failed.');
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred during sign-in.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    const res = await login('demo@travelverse.ai', 'password');
    if (res.success) {
      navigate('/home');
    }
    setLoading(false);
  };

  return (
    <AppShell title="Authentication // Sign In">
      <PageContainer className="min-h-[70vh] flex items-center justify-center py-12">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center mx-auto text-[#D4A66A]">
              <Compass size={24} />
            </div>
            <h1 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Welcome Back</h1>
            <p className="text-xs text-[#E8CFA8]/70">Sign in to your TravelVerse OS profile</p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300 text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-[#D4A66A] uppercase block">EMAIL ADDRESS</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-3 text-[#D4A66A]/60" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="explorer@travelverse.ai"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs text-[#F5E7CF] placeholder-[#E8CFA8]/40 focus:outline-none focus:border-[#D4A66A]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-mono text-[#D4A66A] uppercase block">PASSWORD</label>
                <Link to="/forgot-password" className="text-[10px] font-mono text-[#D4A66A] hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-3 text-[#D4A66A]/60" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1B120C] border border-[#B9854F]/30 text-xs text-[#F5E7CF] placeholder-[#E8CFA8]/40 focus:outline-none focus:border-[#D4A66A]"
                />
              </div>
            </div>

            <Button variant="gold" size="lg" className="w-full" disabled={loading}>
              {loading ? 'AUTHENTICATING...' : 'SIGN IN TO OS'}
            </Button>
          </form>

          <div className="pt-4 border-t border-[#B9854F]/20 text-center space-y-3">
            <button
              onClick={handleDemoLogin}
              className="w-full py-2.5 rounded-xl bg-[#1B120C] border border-[#D4A66A]/30 text-xs font-mono text-[#D4A66A] hover:bg-[#342117] transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              <span>LOG IN WITH DEMO ACCOUNT</span>
            </button>

            <p className="text-xs text-[#E8CFA8]/60">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#D4A66A] font-bold hover:underline">
                Create Explorer Profile
              </Link>
            </p>
          </div>

        </div>
      </PageContainer>
    </AppShell>
  );
};

export default Login;
