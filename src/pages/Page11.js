import React from "react";
import "../styles/Page11.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 
function Page11() {
  return (
    <div className="page-11-container">
         <Link to="/" className="back-button">
      🏠 Regresar al menú
    </Link>
      <div className="container">
        <div className="glass">
          <div className="shine"></div>
        </div>
        <div className="thorns">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="leaves">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="petals">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="deadPetals">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="textoder" >
        <h1>Porque me amas de una manera única</h1>
        <h4 className="texto">Desde el primer momento en que empezamos a estar juntos supe que tu forma de amar era diferente a cualquier otra que hubiera conocido antes. No era un amor superficial falso ni pasajero, sino un amor profundo, real, que se demuestra en cada palabra o acción, en cada gesto, en cada mirada. Lo sentia en la forma en que te preocupas por mí, en cómo te interesa saber cómo estoy, en cómo siempre buscas maneras de hacerme sentir bien.</h4>
      </div>
    </div>
  );
}

export default Page11;