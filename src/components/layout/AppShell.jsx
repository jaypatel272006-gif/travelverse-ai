import React, { useState } from 'react';
import Sidebar from '../navigation/Sidebar';
import TopBar from '../navigation/TopBar';
import AICommandBar from '../ai/AICommandBar';

export const AppShell = ({ children, title = 'TravelVerse OS Workspace', showHeader = true }) => {
  const [commandBarOpen, setCommandBarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1B120C] text-[#F5E7CF] font-sans-ui flex selection:bg-[#8B5E34] selection:text-[#F5E7CF]">
      {/* Desktop Navigation Sidebar */}
      <Sidebar />

      {/* Main Workspace Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 min-h-screen">
        {showHeader && (
          <TopBar
            title={title}
            onOpenSearch={() => setCommandBarOpen(!commandBarOpen)}
          />
        )}

        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppShell;
