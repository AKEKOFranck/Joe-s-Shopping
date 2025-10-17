import '../styles/InstallBT.css';
import { useEffect, useState } from 'react';

export default function InstallBT() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [supportsPWA, setSupportsPWA] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
        const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
        
        // Vérifier si l'app est déjà installée
        const checkStandaloneMode = () => {
            return (window.navigator.standalone === true) || 
                   (window.matchMedia('(display-mode: standalone)').matches);
        };
        
        const standalone = checkStandaloneMode();
        setIsStandalone(standalone);
        
        if (isIOSDevice) {
            // iOS : montrer le bouton seulement dans Safari et si pas déjà installé
            if (isSafari && !standalone) {
                setIsVisible(true);
                setIsIOS(true);
                setSupportsPWA(true);
            }
        } else {
            // Android et autres : utiliser l'API standard
            const handleBeforeInstallPrompt = (e) => {
                e.preventDefault();
                setDeferredPrompt(e);
                setIsVisible(true);
                setSupportsPWA(true);
            };

            // Vérifier si l'API est supportée
            if ('beforeinstallprompt' in window) {
                window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            }

            return () => {
                window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            };
        }
    }, []);

    const handleInstallClick = async () => {
        if (isIOS) {
            showIOSInstructions();
            return;
        }

        if (!deferredPrompt) return;
        
        try {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            
            console.log(outcome === 'accepted' ? 
                'Installation acceptée ✅' : 
                'Installation refusée ❌');
            
            // Suivi analytics
            if (window.gtag) {
                window.gtag('event', 'install_prompt', {
                    'event_category': 'PWA',
                    'event_label': outcome
                });
            }
        } catch (error) {
            console.error('Erreur lors de l\'installation:', error);
        } finally {
            setDeferredPrompt(null);
            setIsVisible(false);
        }
    };

    const showIOSInstructions = () => {
        const instructions = `
📱 Pour installer l'application :

1. Appuie sur le bouton Partager (📤)
2. Fais défiler vers le bas
3. Sélectionne "Sur l'écran d'accueil"
4. Confirme l'ajout

L'application sera alors installée sur ton écran d'accueil !
        `;
        alert(instructions);
        setIsVisible(false);
    };

    // Ne rien afficher si déjà installé ou si PWA non supportée
    if (!isVisible || isStandalone || !supportsPWA) {
        return null;
    }

    return (
        <button className='install-button' onClick={handleInstallClick}>
            <div className="install-button-content">
                <span className="install-icon">📱</span>
                <span className="install-text">
                    {isIOS ? 'Installer l\'app' : 'Installer l\'application'}
                </span>
            </div>
        </button>
    );
}