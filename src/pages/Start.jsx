import { useEffect, useState } from "react";
import "../styles/Start.css";
import loadingGif from "../assets/LoadingApp.gif"; // ton GIF animé

export default function Start() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule le temps de chargement (ou attends que l'app soit prête)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes d’attente (à ajuster)
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="splash-screen">
        <img src={loadingGif} alt="Chargement..." className="loading-gif" />
      </div>
    );
  }

  return (
    <div className="home-page">
      <h1>Joe's Shopping</h1>
    </div>
  );
}
