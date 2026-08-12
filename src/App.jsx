import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SandstoneHeritageLanding from './pages/SandstoneHeritageLanding';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SandstoneHeritageLanding />} />
      <Route path="*" element={<SandstoneHeritageLanding />} />
    </Routes>
  );
}

export default App;
