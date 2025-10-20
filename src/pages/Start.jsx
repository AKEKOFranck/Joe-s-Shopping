import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Start.css";
import loadingGif from "../assets/LoadingApp.gif";

export default function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // redirige vers First.jsx après 3 secondes
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={loadingGif} alt="Chargement..." className="loading-gif" />
    </div>
  );
}
