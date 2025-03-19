import React from "react";
import "../styles/Page11.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 
function Page12() {
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
        <h1> Porque entiendes mis silencios</h1>
        <h4 className="texto">No siempre tengo las palabras correctas para expresar lo que siento. A veces, me cuesta abrirme, o simplemente hay momentos en los que necesito silencio. Y lo hermoso de estar contigo es que no necesitaba explicarlo, tú lo entiendeias sin que yo lo diga. Simplemente me acompañas, me das mi espacio cuando lo necesito, pero siempre con la seguridad de que estás ahí cuando esté mejor.</h4>
      </div>
    </div>
  );
}

export default Page12;