import React from "react";
import "../styles/Page6.css"; // Importa el archivo CSS específico para esta página
import { Link } from "react-router-dom"; 

function Page6() {
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
        <h1>Siempre calmas mis tormentas</h1>
        <p>
        He tenido tantos problemas que siempre han atormentado a mi cabeza, situaciones que yo no he podido controlar pero de ti he tenido el apoyo suficiente para no caerme. Un consejo,  un enojo pequeñito o una charla contigo me ha dado suficientes fuerzas para no perder la cordura.
        Hay días en los que todo parece salir mal, en los que el estrés, la ansiedad o el cansancio me abruman. Pero cuando estoy contigo, todo se vuelve más bonito.Siempre buscabas  la manera de aliviar, de hacerme sentir en paz.

        A veces con tus palabras. Otras veces simplemente con tu presencia. 
        </p>
      </div>
    </div>
  );
}

export default Page6;