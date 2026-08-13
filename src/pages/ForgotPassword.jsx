import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Compass, ArrowLeft, CheckCircle2 } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import { useApp } from '../context/AppContext';

export const ForgotPassword = () => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    showToast(`Password recovery link dispatched to ${email}`, 'info');
  };

  return (
    <AppShell title="Authentication // Password Recovery">
      <PageContainer className="min-h-[70vh] flex items-center justify-center py-12">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center mx-auto text-[#D4A66A]">
              <Compass size={24} />
            </div>
            <h1 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Password Recovery</h1>
            <p className="text-xs text-[#E8CFA8]/70">Enter your registered email to reset your OS passkey</p>
          </div>

          {sent ? (
            <div className="p-6 rounded-2xl bg-[#1B120C] border border-[#D4A66A]/30 text-center space-y-4">
              <CheckCircle2 size={36} className="mx-auto text-[#D4A66A]" />
              <h3 className="font-serif-heritage text-lg font-bold text-[#F5E7CF]">Recovery Email Sent</h3>
              <p className="text-xs text-[#E8CFA8]/80 leading-relaxed">
                Instructions have been dispatched to <span className="font-mono text-[#D4A66A]">{email}</span>. Please check your inbox and follow the secure link.
              </p>
              <Link to="/login" className="inline-block text-xs font-mono text-[#D4A66A] hover:underline pt-2">
                RETURN TO SIGN IN
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-[#D4A66A] uppercase block">REGISTERED EMAIL</label>
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

              <Button variant="gold" size="lg" className="w-full">
                SEND RECOVERY LINK
              </Button>

              <div className="text-center pt-2">
                <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4A66A] hover:underline">
                  <ArrowLeft size={12} />
                  <span>Back to Sign In</span>
                </Link>
              </div>
            </form>
          )}

        </div>
      </PageContainer>
    </AppShell>
  );
};

export default ForgotPassword;
