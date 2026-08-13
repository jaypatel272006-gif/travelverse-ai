import React, { useState } from 'react';
import { Settings as SettingsIcon, Shield, Bell, Moon, Sun, Lock, CheckCircle2, RefreshCw } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';
import { useApp } from '../context/AppContext';

export const Settings = () => {
  const { showToast } = useApp();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [fatigueAlerts, setFatigueAlerts] = useState(true);
  const [weatherAlerts, setWeatherAlerts] = useState(true);

  const handleSave = () => {
    showToast('Operating settings successfully committed!', 'success');
  };

  return (
    <AppShell title="System Settings // Preferences">
      <PageContainer className="space-y-12">
        
        {/* Header */}
        <section className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4A66A]">
            <SettingsIcon size={16} />
            <span>TRAVELVERSE OS CONFIGURATION</span>
          </div>
          <h1 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF]">
            System Preferences & Security
          </h1>
          <p className="text-xs text-[#E8CFA8]/70">
            Configure notification channels, fatigue thresholds, and cloud synchronization parameters.
          </p>
        </section>

        {/* Notifications & Warnings */}
        <section className="p-8 rounded-3xl bg-[#24170F] border border-[#B9854F]/25 space-y-6">
          <h2 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">Notification Intelligence</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20">
              <div>
                <h4 className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">Global System Alerts</h4>
                <p className="text-[11px] text-[#E8CFA8]/70">Receive flight route delays and travel milestone updates.</p>
              </div>
              <input 
                type="checkbox" 
                checked={notificationsEnabled} 
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                className="w-5 h-5 accent-[#D4A66A] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20">
              <div>
                <h4 className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">Walking Fatigue Warnings</h4>
                <p className="text-[11px] text-[#E8CFA8]/70">Alert when scheduled walking distance exceeds 8 km/day.</p>
              </div>
              <input 
                type="checkbox" 
                checked={fatigueAlerts} 
                onChange={(e) => setFatigueAlerts(e.target.checked)}
                className="w-5 h-5 accent-[#D4A66A] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1B120C] border border-[#B9854F]/20">
              <div>
                <h4 className="font-serif-heritage text-sm font-bold text-[#F5E7CF]">Live Weather & UV Alerts</h4>
                <p className="text-[11px] text-[#E8CFA8]/70">Push notifications for monsoon rain forecasts and high UV index.</p>
              </div>
              <input 
                type="checkbox" 
                checked={weatherAlerts} 
                onChange={(e) => setWeatherAlerts(e.target.checked)}
                className="w-5 h-5 accent-[#D4A66A] cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button variant="gold" size="lg" onClick={handleSave}>
            COMMIT SETTINGS
          </Button>
        </div>

      </PageContainer>
    </AppShell>
  );
};

export default Settings;
