import React from "react";
import "../styles/Page6.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 

function Page8() {
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
        <h1>Porque tu sonrisa ilumina mi mundo y el de los demás</h1>
        <p>
        Me encanta la forma en que tu cara se pone cuando te ríes de algo, cuando te emocionas con algo simple, cuando disfrutas de los pequeños detalles. Es una sonrisa que me hace sentir afortunado de tenerte, que me hace querer verte feliz todos los días, que me motiva a hacer lo que sea necesario para que nunca falten motivos para que sonrías. Y lo que más amo es que tu sonrisa no es solo hermosa, sino que siento que hay una niña chiquita en tu corazón.
        </p>
      </div>
    </div>
  );
}

export default Page8;