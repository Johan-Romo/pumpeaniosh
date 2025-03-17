import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importa los estilos CSS

function Home({ isPlaying, startMusic }) {
  const [showAviso, setShowAviso] = useState(false); // Estado para controlar la visibilidad del aviso

  // Verifica si el aviso ya fue aceptado al cargar la página
  useEffect(() => {
    const avisoAceptado = localStorage.getItem("avisoAceptado");
    if (!avisoAceptado) {
      setShowAviso(true); // Muestra el aviso si no ha sido aceptado antes
    }
  }, []);

  const handleAceptar = () => {
    setShowAviso(false); // Oculta el aviso al hacer clic en "Aceptar"
    localStorage.setItem("avisoAceptado", "true"); // Guarda en localStorage que el aviso fue aceptado
    if (!isPlaying) {
      startMusic(); // Inicia la música si no está reproduciéndose
    }
  };

  return (
    <div className="home-background">
      {/* Aviso inicial */}
      {showAviso && (
        <div className="aviso-overlay">
          <div className="aviso-container">
            <h2 className="aviso-title">Hola... 🥺</h2>
            <p className="aviso-text">
              Se qué capaz ya no tenga nada que ver en tu vida o ya no sientas
              nada y perdón por la intensidad, pero como te dije, iba a estar
              contigo en tu cumpleaños y me gusta cumplir las promesas, así que
              te hice esto. No lo tomes a mal.
            </p>
            <button className="aviso-button" onClick={handleAceptar}>
              Aceptar
            </button>
          </div>
        </div>
      )}

      {/* Título y texto centrados en la parte superior */}
      <div className="text-container">
        <h1 className="home-title">🎉 FELIZ CUMPLEAÑOS RASHELL 🎉</h1>
        <h2 className="home-subtitle">
          Solamente quiero desearte lo mejor en este día, porque te lo mereces.
        </h2>
        <h2 className="home-subtitle">
          Aquí 23 razones por las cuales eres importante en mi vida:
        </h2>
      </div>

      {/* Contenedor de botones centrado */}
      <div className="home-container">
        <div className="home-buttons">
          {[...Array(25)].map((_, index) => (
            <Link key={index} to={`/page/${index + 1}`} className="home-button">
                {index + 1 <= 23 ? index + 1 : "Extra"}
            </Link>
          ))}
        </div>
      </div>

      {/* Imagen en la esquina inferior izquierda */}

    </div>
  );
}

export default Home;