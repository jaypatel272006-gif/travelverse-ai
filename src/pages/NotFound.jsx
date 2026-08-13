import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, AlertTriangle, ArrowLeft } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <AppShell title="404 // Coordinate Out of Bounds">
      <PageContainer className="min-h-[70vh] flex items-center justify-center py-12">
        <div className="w-full max-w-lg p-10 rounded-3xl bg-[#24170F] border border-[#B9854F]/30 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#342117] border border-[#D4A66A]/40 flex items-center justify-center mx-auto text-[#D4A66A]">
            <Compass size={32} className="animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#D4A66A] uppercase block">ERROR 404 // UNMAPPED COORDINATES</span>
            <h1 className="font-serif-heritage text-3xl font-bold text-[#F5E7CF]">
              Destination Beyond the Atlas
            </h1>
            <p className="text-xs text-[#E8CFA8]/80 leading-relaxed font-light">
              The requested spatial coordinates do not exist in the TravelVerse AI 2100 database. Return to Mission Control to resume navigation.
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <Button variant="gold" size="lg" onClick={() => navigate('/home')}>
              <Compass size={16} className="mr-2" />
              RETURN TO MISSION CONTROL
            </Button>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
};

export default NotFound;
