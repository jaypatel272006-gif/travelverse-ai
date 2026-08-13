import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

if (import.meta.env.PROD) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('TravelVerse OS Service Worker registered successfully:', reg.scope);
        })
        .catch((err) => {
          console.error('TravelVerse OS Service Worker registration failed:', err);
        });
    });
  }
} else {
  // In development, ensure any previously registered service workers are cleaned up
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister().then((unregistered) => {
          if (unregistered) {
            console.log('Cleaned up active development Service Worker.');
          }
        });
      }
    });
  }
}
