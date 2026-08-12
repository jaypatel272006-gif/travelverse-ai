import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResetLanding from './pages/ResetLanding';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ResetLanding />} />
      <Route path="*" element={<ResetLanding />} />
    </Routes>
  );
}

export default App;
