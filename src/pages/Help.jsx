import React from 'react';
import { HelpCircle, BookOpen, Compass, ShieldCheck, Mail, Sparkles, ChevronRight } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';

export const Help = () => {
  const faqs = [
    {
      q: 'How does the Human-Like AI Itinerary Engine differ from generic AI generators?',
      a: 'TravelVerse AI models physical human constraints: wake-up and sleep cycles, walking fatigue accumulation, authentic meal windows (breakfast, lunch, dinner), real transit times with traffic buffers, and attraction opening hours.'
    },
    {
      q: 'Can I track my expenses while traveling offline?',
      a: 'Yes! Budget OS caches transaction logs in your local storage and automatically syncs with the central cloud ledger once network connectivity is restored.'
    },
    {
      q: 'What is the Spiritual Passport feature?',
      a: 'The Spiritual Passport provides reverent, detailed historical context and route planning for sacred Indian pilgrimages like the 12 Jyotirlingas, allowing you to track visited shrines and earn experience points (XP).'
    },
    {
      q: 'How is my Travel DNA calculated?',
      a: 'Your travel genome evaluates your climate choices, pacing preferences, accommodation selections, and food choices to personalize future destination recommendations.'
    }
  ];

  return (
    <AppShell title="Help & System Guide // Documentation">
      <PageContainer className="space-y-12">
        
        {/* Header */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B120C] border border-[#D4A66A]/30 text-xs font-mono text-[#D4A66A]">
            <HelpCircle size={14} />
            <span>KNOWLEDGE BASE & SUPPORT</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF]">
            TravelVerse AI Operating System Manual
          </h1>

          <p className="text-sm text-[#E8CFA8]/80 max-w-xl mx-auto font-light">
            Everything you need to master your futuristic travel operating system.
          </p>
        </section>

        <HeritageDivider label="FREQUENTLY ASKED QUESTIONS" />

        {/* FAQs Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#24170F] border border-[#B9854F]/25 space-y-3">
              <h3 className="font-serif-heritage text-lg font-bold text-[#F5E7CF] flex items-start gap-2">
                <Sparkles size={16} className="text-[#D4A66A] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </section>

        {/* Support Section */}
        <section className="p-8 rounded-3xl bg-[#24170F] border border-[#D4A66A]/30 text-center space-y-4">
          <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF]">Need Additional Assistance?</h3>
          <p className="text-xs text-[#E8CFA8]/80 max-w-md mx-auto">
            Our support desk is available to answer questions regarding custom bookings or system issues.
          </p>
          <div className="pt-2">
            <Button variant="gold" size="lg" onClick={() => window.location.href = 'mailto:support@travelverse.ai'}>
              <Mail size={16} className="mr-2" />
              CONTACT SUPPORT DESK
            </Button>
          </div>
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default Help;
