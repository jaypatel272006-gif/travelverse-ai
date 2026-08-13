import React from 'react';
import { DollarSign, TrendingDown, Sparkles, PieChart, CreditCard } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import BudgetCard from '../components/cards/BudgetCard';
import AIInsightCard from '../components/cards/AIInsightCard';
import Badge from '../components/ui/Badge';

export const BudgetOS = () => {
  return (
    <AppShell title="Budget OS // 2100">
      <PageContainer className="space-y-12">
        
        {/* Header */}
        <section className="space-y-2 border-b border-[#B9854F]/25 pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="gold">
              <DollarSign size={12} className="mr-1" />
              FINANCIAL INTELLIGENCE
            </Badge>
            <span className="text-xs font-mono text-[#D4A66A]">OPTIMIZED SPEND RADAR</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-4xl font-bold text-[#F5E7CF]">
            BUDGET OPERATING SYSTEM
          </h1>
        </section>

        {/* Budget Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BudgetCard className="lg:col-span-2" />
          
          <AIInsightCard
            title="AI Expense Optimizer"
            insight="By booking heritage havelis through TravelVerse direct partner passes, you saved ₹6,500 on your Rajasthan itinerary."
            score="99.4%"
            tag="COST SAVINGS"
          />
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default BudgetOS;
