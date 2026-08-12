import React from 'react';

export const ResetLanding = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#030712',
      color: '#f3f4f6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        maxWidth: '600px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '900',
          letterSpacing: '0.05em',
          marginBottom: '16px',
          color: '#2dd4bf'
        }}>
          TRAVELVERSE AI
        </h1>
        <p style={{
          fontSize: '14px',
          letterSpacing: '0.1em',
          color: '#94a3b8',
          textTransform: 'uppercase',
          marginBottom: '24px',
          fontWeight: 'bold'
        }}>
          SYSTEM RESET COMPLETE
        </p>
        <p style={{
          fontSize: '13px',
          color: '#cbd5e1',
          lineHeight: '1.6'
        }}>
          The old website has been completely removed.
          <br />
          READY FOR NEW ARCHITECTURE.
        </p>
      </div>
    </div>
  );
};

export default ResetLanding;
