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
      <div className="textoder" >
        <h1>Porque tu mirada tiene un brillo que hipnotiza</h1>
        <h4 className="texto">Tus ojitos son preciosos y grandotes. No sé si es el brillo que tienen y más cuando hablas de algo que amas, te gusta o te interesa y la ternura que transmiten cuando me miras o la intensidad con la que me miran cuando te enojas</h4>
      </div>
    </div>
  );
}

export default Page14;