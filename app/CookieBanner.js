'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [prefs, setPrefs] = useState({
    marketing: false,
    analytics: false
  });

  useEffect(() => {
    const hasConsent = document.cookie.includes("cookieConsent=true");
    if (!hasConsent) setShowBanner(true);
  }, []);

  const saveSettings = (all = false) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
    
    const finalPrefs = all ? { marketing: true, analytics: true } : prefs;
    
    document.cookie = `cookieConsent=true; expires=${expires.toUTCString()}; path=/`;
    document.cookie = `cookiePrefs=${JSON.stringify(finalPrefs)}; expires=${expires.toUTCString()}; path=/`;
    
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="projekt-card" style={{
      position: 'fixed', bottom: '60px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 10000, width: '90%', maxWidth: '500px', textAlign: 'left'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>🍪 Cookie Settings</h3>
      <p style={{ fontSize: '14px' }}>We use cookies to improve your indie game experience!</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '15px 0' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" checked disabled /> <span>Necessary (Always On)</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <input type="checkbox" 
            checked={prefs.marketing} 
            onChange={(e) => setPrefs({...prefs, marketing: e.target.checked})} 
          /> <span>Marketing</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <input type="checkbox" 
            checked={prefs.analytics} 
            onChange={(e) => setPrefs({...prefs, analytics: e.target.checked})} 
          /> <span>Analytics</span>
        </label>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => saveSettings(true)} className="box-button" style={{ position: 'relative', left: '0', flex: 1 }}>
          <div className="button-text" style={{ backgroundColor: '#72a11d' }}>ACCEPT ALL</div>
        </button>
        <button onClick={() => saveSettings(false)} className="box-button" style={{ position: 'relative', left: '0', flex: 1 }}>
          <div className="button-text" style={{ backgroundColor: '#963f3e' }}>SAVE SELECTION</div>
        </button>
      </div>
    </div>
  );
}