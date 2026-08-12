import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SandstoneHeritageLanding from './pages/SandstoneHeritageLanding';
import DesignSystemShowcase from './pages/DesignSystemShowcase';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SandstoneHeritageLanding />} />
      <Route path="/design-system" element={<DesignSystemShowcase />} />
      <Route path="*" element={<SandstoneHeritageLanding />} />
    </Routes>
  );
}

export default App;
