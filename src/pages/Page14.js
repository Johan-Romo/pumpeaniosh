import React from "react";
import "../styles/Page11.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 
function Page14() {
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
      <div>
        <h4 className="texto">Mi amor por ti durará hasta que caiga el último pétalo ❤️</h4>
      </div>
    </div>
  );
}

export default Page14;