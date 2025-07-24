# Transformation du projet en PWA (Progressive Web App)

## 1. Installation du plugin PWA

J'ai installé le plugin officiel pour Vite :
```bash
npm install vite-plugin-pwa
```

## 2. Configuration du plugin dans vite.config.js

J'ai modifié le fichier `vite.config.js` pour ajouter le plugin et configurer le manifest :
- Nom, description, couleurs, etc.
- Utilisation de `logo.svg` comme icône principale (192x192 et 512x512, maskable)
- Enregistrement automatique du service worker

Extrait :
```js
import { VitePWA } from 'vite-plugin-pwa';
...
VitePWA({
  registerType: 'autoUpdate',
  includeAssets: [...],
  manifest: {
    name: "Joe's Shop",
    ...
    icons: [
      {
        src: "logo.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any maskable"
      },
      {
        src: "logo.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any maskable"
      }
    ]
  }
})
```

## 3. Ajout du bouton "Installer l'application"

Dans `src/components/Layout.jsx` :
- Ajout d'un bouton qui s'affiche si l'installation PWA est possible (événement `beforeinstallprompt`)
- Le bouton déclenche l'installation de l'application

Extrait :
```jsx
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
```

## 4. Test de la PWA

1. Build du projet :
   ```bash
   npm run build
   npm run preview
   ```
2. Ouvre l'URL locale dans Chrome.
3. Va dans l'onglet "Application" des DevTools :
   - Tu dois voir l'option "Installer".
   - Le bouton "Installer l'application" s'affiche aussi dans l'interface.

## 5. Résumé

- Le projet est maintenant installable sur mobile et desktop.
- Le logo utilisé comme icône est `public/logo.svg`.
- Le bouton d'installation est visible si l'installation est possible.

N'hésite pas à demander si tu veux personnaliser le manifest, l'icône, ou ajouter d'autres fonctionnalités PWA ! 