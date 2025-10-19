import '../styles/InstallBT.css';
import { useState, useEffect } from 'react';

export default function InstallBT() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        // Vérifier si l'app est déjà installée (mode standalone)
        if (window.matchMedia('(display-mode: standalone)').matches || 
            window.navigator.standalone === true) {
            setIsStandalone(true);
            setIsInstalled(true);
        }

        // Détecter iOS (Safari)
        const ua = window.navigator.userAgent;
        const isiOS = /iPhone|iPad|iPod/.test(ua) && !window.MSStream;
        setIsIOS(isiOS);

        // Écouter l'événement beforeinstallprompt (Chrome/Edge/Android)
        function onBeforeInstallPrompt(e) {
            e.preventDefault();
            setDeferredPrompt(e); // On stocke l'événement pour l'utiliser plus tard
        }

        window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);

        // Écouter l'installation effective
        function onAppInstalled() {
            setIsInstalled(true);
            setIsStandalone(true);
        }
        window.addEventListener('appinstalled', onAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
            window.removeEventListener('appinstalled', onAppInstalled);
        };
    }, []);

    async function handleInstallClick() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('Utilisateur a accepté l\'installation');
                setDeferredPrompt(null);
            } else {
                console.log('Utilisateur a refusé l\'installation');
            }
        } else if (isIOS) {
            // iOS : afficher instructions manuelles
            alert("Sur iPhone/iPad : ouvrez le menu de partage (icône en bas du navigateur) puis choisissez 'Ajouter à l'écran d'accueil'.");
        } else {
            // Fallback pour autres navigateurs
            alert('Votre navigateur ne supporte pas le prompt d\'installation intégré. Vérifiez le manifest et le service worker.');
        }
    }

    // Ne rien afficher si l'app est déjà installée
    if (isStandalone || isInstalled) {
        return (
            <section className='bt_main'>
                <div className="installed-message">Application installée ✅</div>
            </section>
        );
    }

    return (
        <section className='bt_main'>
            {deferredPrompt ? (
                <button className="install-button" onClick={handleInstallClick}>
                    📱 Installer l'application
                </button>
            ) : isIOS ? (
                <div className="ios-instructions">
                    <p>Pour installer l'application sur iOS :</p>
                    <ol>
                        <li>Ouvrir le menu de partage (icône 📤)</li>
                        <li>Faire défiler vers le bas</li>
                        <li>Choisir <strong>"Ajouter à l'écran d'accueil"</strong></li>
                    </ol>
                    <button className="ios-help-button" onClick={handleInstallClick}>
                        Afficher les instructions détaillées
                    </button>
                </div>
            ) : (
                <div className="browser-info">
                    <p>L'installation sera proposée automatiquement par votre navigateur.</p>
                    <p className="small-text">Navigateurs supportés : Chrome, Edge sur Android et desktop</p>
                </div>
            )}
        </section>
    );
}