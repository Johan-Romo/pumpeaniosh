import React from "react";
import "../styles/Page6.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 

function Page7() {
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
        <h1> Ser una mujer demasiado hermosa.</h1>
        <p>
        Te dije que desde la primera vez que te ví en las oficinas, mis ojos solo fueron para ti. Tus ojos,  tu cara, tu cuerpo, tu cabello negro, tu sonrisa, tus manos, tu forma de vestir, la manera en que eres linda sin maquillarte, la manera en que llevas tus carteras manillas o anillo, tu color de piel, tus lunares, tus 2 dientecitos mas grandes que los otros,  tu cintura, tu "flacura",  tu nariz respingadita, tus cachetes al sonreir y todo lo que tienes, son cosas que para mis ojos, eran consideradas una linda obra de arte. Y tuve la suerte de para mí, estar con la mujer mas hermosa de este planeta.
        </p>
      </div>
    </div>
  );
}

export default Page7;