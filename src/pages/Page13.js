import React from "react";
import "../styles/Page11.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 
function Page13() {
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
        <h1>Porque eres la definición de lo que siempre soñé sin saberlo</h1>
        <h4 className="texto">Antes de conocerte, no sabía exactamente qué buscaba en una persona, pero ahora lo tengo claro.Tu manera de ser, tu esencia, todo en ti es exactamente lo que necesitaba en mi vida. Eres el amor que no sabía que me hacía falta, la persona que llegó a llenar cada espacio vacío en mi corazón. No hay nada que cambiaría, nada que pediría diferente, porque eres perfecta tal como eres incluso con tus imperfecciones. </h4>
      </div>
    </div>
  );
}

export default Page13;