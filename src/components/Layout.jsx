import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from 'react';

export default function Layout() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstall(false);
      }
    }
  };

  return (
    <div className="app">
     <Header/>
      {showInstall && (
        <div style={{position:'fixed', top:70, right:20, zIndex:1000}}>
          <button onClick={handleInstall} style={{background:'#f5c16c', color:'#222', border:'none', borderRadius:8, padding:'10px 18px', fontWeight:'bold', boxShadow:'0 2px 8px #0002', cursor:'pointer'}}>Installer l'application</button>
        </div>
      )}
      <main>
        <Outlet  />  {/* Emplacement des pages */}
      </main>
     <Footer/>
    </div>
  );
}