import '../styles/InstallBT.css';
import { useEffect, useState } from 'react';

export default function InstallBT() {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      console.log('Installation acceptée ✅')
    } else {
      console.log('Installation refusée ❌')
    }
    setDeferredPrompt(null)
    setIsVisible(false)
  }

  if (!isVisible) return null

  const isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
if (isIOS) {
  alert('Pour installer, appuie sur le bouton Partager → “Ajouter à l’écran d’accueil”.')
}

    return(
        <button className='bt' onClick={handleInstallClick}>
            <p className='bt_text'>
                Installer
            </p>
        </button>
    )
}