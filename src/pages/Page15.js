import React from "react";
import "../styles/Page11.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 
function Page15() {
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
        <h1>Porque en tus momentos más tristes, sigues siendo una luz para los demás</h1>
        <h4 className="texto">Aunque a veces sientas que se te cae el mundo y demasiado estres, quiero que sepas que incluso cuando estás triste, tu luz nunca se apaga. Que a pesar de sentirse decaída, nunca dejas de ser la increíble persona que eres. La forma en que te preocupas por tu familia y cómo te ofreces a ayudar en lo que sea necesario me demuestra lo que eres. </h4>
      </div>
    </div>
  );
}

export default Page15;