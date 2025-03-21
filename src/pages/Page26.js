import React, { useState } from "react";
import "../styles/Page24.css"; // Archivo de estilos
import { Link } from "react-router-dom"; 

function Page26() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    {title: "", content:"Se que los girasoles son tus flores favoritas, y sí, no me hubiera molestado, pero lo que si me molestaba es no poder darte algo por este día especial. No te respondí en la tarde porque queria que primero mires todo esto.  Esta vez no te los quería dar reales porque no quiero que se mueran, quiero que se queden por siempre contigo. Quería y pensaba dartelos en persona estos días, pero no se si reaccionarias mal porque entiendo que estoy irrespetando tu espacio. No sabía cual eran los más bonitos para tí, pero por suerte conocí a Cami que me ayudo un montón en elegir y cuando los ví en persona creeme que encantaron para tí. Cami me dijo que los girasoles son milagrosos, espero que sea asi, además que representan el amor de una relación sincera. Me dijo que te vio feliz cuando te las dió, espero haya sido así . La frasé que elegí tiene un mensaje oculto, ojala lo entiendas y  si no es asi solo escucha la canción de la que es parte. Te las dí hoy jueves porque capaz mañana salgas con tu familia o amigos entonces queria asegurarme de que las recíbas. Con respecto a todo este detallito de la página creeme que esforce mucho y que le puse todo mi cariño del mundo. No sabía como demostrarte todo lo que siento, asi que lo hice, haciendo lo que más me gusta hacer. Se que puedas pensar que es una página web y ya pero enserio me esforce mucho toda esta semana y espero que por lo menos te haya hecho sonreir. Se que puede ser poco pero enserio mi corazón esta aquí. Y por qúe hice esto? No queria que pases un mal cumpleaños, ni que termines llorando como me dijiste, te dije que iba a estar contigo y aqui estoy, no físicamente dandote un abrazo, que es lo que más quiero, pero aqui estoy, como siempre ha sido. Espero que te haya gustado y perdón si es que soy intenso, y si no te gusta que lo sea solamente dimelo yo entenderé, pero lo hago porque enserio me nace. No es rogar ni humillarse, se trata de darlo todo hasta el final, asi como cuando me aconsejabas cuando estaba en las pasantías, que debo darlo todo y que yo siempre puedo. Que tengas un lindo cumpleaños, te deseo todo lo bueno y que sigas siendo la chica de la cual me enamore perdidamente. Solamente te pido un favor si ya no te vuelvo a ver, cuida esos ojitos mios..."}
    ,{title: "", content:"Y una última cosa..."}  
    ,{title: "", content:"Cuando esas flores se marchiten, te dejaré de amar...", image: "/imgs/girasoles.jpg"}  
    ,{title: "", content:"Me caes mal", image: "/imgs/mal.jpg"}  
];

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 1000); // Duración de la animación
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 1000); // Duración de la animación
    }
  };

  return (
    <div className="book-container">
      
         <Link to="/" className="back-button">
      🏠 Regresar al menú
        </Link>
      <div className={`page ${isFlipping ? "flipping" : ""}`}>
      <div className="page-content">
  <h1>{pages[currentPage].title}</h1>
  <p>{pages[currentPage].content}</p>
  
  {pages[currentPage].image && (
    <div className="image-container">
          <img 
      src={pages[currentPage].image} 
      alt="Imagen especial" 
      className={`page-image ${currentPage === 3 ? "large-image" : ""}`} 
    />
    </div>
  )}
</div>
      </div>
      <div className="controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Página Anterior
        </button>
        <button onClick={handleNextPage} disabled={currentPage === pages.length - 1}>
          Siguiente Página
        </button>
      </div>
    </div>
  );
}

export default Page26;
