import React from "react";
import "../styles/Page6.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 

function Page9() {
  return (
    <div className="page-6-container">
           <Link to="/" className="back-button">
      🏠 Regresar al menú
    </Link>
      <div className="sunflower">
        <div className="flower_wrapper">
          <div className="flower_stem"></div>
          <div className="flower_center"></div>
          <div className="flower_petal flower_petal-1"></div>
          <div className="flower_petal flower_petal-2"></div>
          <div className="flower_petal flower_petal-3"></div>
          <div className="flower_petal flower_petal-4"></div>
          <div className="flower_petal flower_petal-5"></div>
          <div className="flower_petal flower_petal-6"></div>
          <div className="flower_petal flower_petal-7"></div>
          <div className="flower_petal flower_petal-8"></div>
          <div className="flower_petal flower_petal-9"></div>
          <div className="flower_petal flower_petal-10"></div>
          <div className="flower_petal flower_petal-11"></div>
          <div className="flower_petal flower_petal-12"></div>

          <div className="flower_leaf flower_leaf-1"></div>
          <div className="flower_leaf flower_leaf-2"></div>

          <div className="flower_light flower_light-1"></div>
          <div className="flower_light flower_light-2"></div>
          <div className="flower_light flower_light-3"></div>
          <div className="flower_light flower_light-4"></div>
          <div className="flower_light flower_light-5"></div>
          <div className="flower_light flower_light-6"></div>
          <div className="flower_light flower_light-7"></div>
          <div className="flower_light flower_light-8"></div>
        </div>

        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
        <div className="light light-5"></div>
        <div className="light light-6"></div>
        <div className="light light-7"></div>
        <div className="light light-8"></div>
        <div className="light light-9"></div>
        <div className="light light-10"></div>
        <div className="light light-11"></div>
        <div className="light light-12"></div>
      </div>

      {/* Contenedor blanco con texto */}
      <div className="text-container">
        <h1>Porque siempre estás ahí para mí y los demás</h1>
        <p>
        Hay muchas personas en la vida que te dicen estar ahi, que prometen apoyo y compañía, pero cuando realmente las necesitas, desaparecen. Tú no. Tú siempre estuviste ahí, sin importar la hora, el lugar o la situación. Nunca me haces sentir solo, y eso es algo que valoro más de lo que puedo expresar con palabras.
        </p>
      </div>
    </div>
  );
}

export default Page9;