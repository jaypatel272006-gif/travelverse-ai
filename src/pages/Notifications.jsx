import React from 'react';
import { Bell, Sparkles, AlertTriangle, CheckCircle2, Clock, MapPin } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { useApp } from '../context/AppContext';

export const Notifications = () => {
  const { showToast } = useApp();

  const notifications = [
    {
      id: 1,
      type: 'weather',
      title: 'Monsoon Advisory — Kerala Backwaters',
      message: 'Light evening showers forecasted for Alleppey backwaters tomorrow between 16:00 - 18:00.',
      time: '10 min ago',
      unread: true
    },
    {
      id: 2,
      type: 'budget',
      title: 'Budget OS Threshold Notice',
      message: 'You have utilized 65% of your allocated Rajasthan Expedition budget (₹18,500 / ₹25,000).',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Achievement Unlocked: Heritage Explorer',
      message: 'Awarded +250 XP for completing 3 UNESCO Heritage Site dossiers in Rajasthan.',
      time: '1 day ago',
      unread: false
    }
  ];

  return (
    <AppShell title="Notifications // Intelligence Stream">
      <PageContainer className="space-y-8">
        
        <div className="flex flex-wrap justify-between items-center gap-4 p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4A66A]">
              <Bell size={16} />
              <span>LIVE SYSTEM PUSH STREAM</span>
            </div>
            <h1 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF] mt-1">
              Notifications & Alerts
            </h1>
          </div>

          <Button variant="outline" size="sm" onClick={() => showToast('All notifications marked as read')}>
            MARK ALL AS READ
          </Button>
        </div>

        <div className="space-y-4">
          {notifications.map((n) => (
            <div 
              key={n.id}
              className={`p-6 rounded-2xl bg-[#24170F] border transition-all flex items-start gap-4 ${
                n.unread ? 'border-[#D4A66A] shadow-md shadow-[#D4A66A]/5' : 'border-[#B9854F]/20 opacity-80'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A] shrink-0">
                {n.type === 'weather' ? <AlertTriangle size={18} /> : n.type === 'budget' ? <Clock size={18} /> : <Sparkles size={18} />}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif-heritage text-base font-bold text-[#F5E7CF]">{n.title}</h4>
                  <span className="text-[10px] font-mono text-[#D4A66A]">{n.time}</span>
                </div>
                <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed">{n.message}</p>
              </div>
            </div>
          ))}
        </div>

      </PageContainer>
    </AppShell>
  );
};

export default Notifications;
