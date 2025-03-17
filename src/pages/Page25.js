import React, { useState } from "react";
import "../styles/Page25.css"; // Archivo de estilos para Page25
import { Link } from "react-router-dom";

function Page25() {
  // Lista de videos
  const videos = [
    { id: 1, title: "Video 1", src: "/video1.mp4" },
    { id: 2, title: "Video 2", src: "/video2.mp4" },
    { id: 3, title: "Video 3", src: "/video3.mp4" },
  ];

  // Estado para guardar el video seleccionado
  const [selectedVideo, setSelectedVideo] = useState(videos[0].src);

  // Estado para controlar la visibilidad de la ventana modal
  const [showModal, setShowModal] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);

  // Lista de 100 razones
  const reasons = [
    "1. Nos volvimos a buscar",
    "2. Te amo",
    "3. Tu amor hacia mí",
    "4. Tu risa",
    "5. La forma en la que cuidas de mí",
    "6. El cómo me miras",
    "7. Tus abrazos",
    "8. La forma en la que hablas de mí",
    "9. Tu paciencia",
    "10. Tus cejas",
    "11. Tus lindos ojos",
    "12. La forma en la que nuestras manos encajan",
    "13. Tu lado protector",
    "14. Me siento seguro contigo",
    "15. El mundo se detiene",
    "16. Todo deja de doler",
    "17. No me siento solo jamás",
    "18. Me siento amado",
    "19. Tus besos",
    "20. La forma en la que me tomas del rostro",
    "21. Tus chistes malos",
    "22. La forma en la que me molestas y en seguida me das un beso",
    "23. Nuestras pláticas",
    "24. Nuestra conexión",
    "25. Te volviste mi safe place",
    "26. Nuestros planes",
    "27. El cómo me haces reír",
    "28. Cada mensaje",
    "29. Cada llamada",
    "30. Cada te amo",
    "31. Cada desvelada",
    "32. Cambiaste a bien",
    "33. La forma en la que al estar en tus brazos me siento seguro",
    "34. Cada vez que hiciste todo por mí",
    "35. Cada vez que hice todo por ti",
    "36. Cuando calmabas mis ataques de ansiedad",
    "37. Las veces que te perdoné",
    "38. Cada vez que nos buscamos",
    "39. Las veces que me perdonaste",
    "40. Cada ocasión que intenté entenderte",
    "41. Cada ocasión que intentaste entenderme",
    "42. Cada besito en la frente que me dabas",
    "43. Cada vez que me agachaba para besarte",
    "44. Los momentos juntos",
    "45. Nuestras canciones",
    "46. Tu olor",
    "47. La forma en la que me amas",
    "48. Me haces llorar",
    "49. Me haces reír",
    "50. Me haces enojar",
    "51. Me haces externar lo que siento",
    "52. Te hago externar lo que sientes",
    "53. Me motivas",
    "54. Estoy orgulloso de ti",
    "55. La forma en la que te veo",
    "56. La forma en la que nos amamos",
    "57. Me gustas",
    "58. Cuidas de mí",
    "59. Me haces querer vivir",
    "60. Te admiro",
    "61. Fuiste la primera persona con la que vi un futuro",
    "62. Me siento completo contigo",
    "63. Me siento escuchado contigo",
    "64. No me veo con alguien más",
    "65. Me haces ver las cosas de otra forma",
    "66. Me haces salir de mi zona de confort",
    "67. Ya no me siento en modo supervivencia",
    "68. Tu amor por tu familia",
    "69. Eres buena mujer",
    "70. Sabes lidiar con mis cambios de humor",
    "71. Me conoces",
    "72. Te conozco",
    "73. Sabes qué es lo que no como",
    "74. Tu amor y pasión por ciertas cosas",
    "75. Tu compromiso",
    "76. El cómo me alegras",
    "77. Haces que deje de sobrepensar",
    "78. Tu amabilidad",
    "79. Tu buen corazón",
    "80. Tu empatía con los demás",
    "81. Cuando te preocupas por mí",
    "82. Me conoces mejor que yo mismo",
    "83. Tus defectos",
    "84. Tus virtudes",
    "85. Tu cariño",
    "86. Tu personalidad",
    "87. El brillo de tus ojitos",
    "88. La tranquilidad que traes a mi mundo lleno de caos",
    "89. La forma en la que me ves",
    "90. Traes equilibrio a mi vida",
    "91. Sé que puedo confiar en ti",
    "92. La forma en la que nuestras naricitas se juntan",
    "93. Me tapas cuando tengo frío",
    "94. La tranquilidad que tengo al dormirme en tus brazos",
    "95. Nuestro primer beso",
    "96. Nuestro primer te amo",
    "97. El miedo que tenemos de perdernos el uno al otro",
    "98. Tu esencia",
    "99. Contigo puedo ser un niño pequeño de nuevo",
    "100. Cómo mejoramos día a día para el otro",
  ];

  // Función para cambiar el video seleccionado
  const handleVideoChange = (src) => {
    setSelectedVideo(src);
  };

  // Función para mostrar la ventana modal con las razones
  const handleShowReasons = () => {
    setShowModal(true);
    setCurrentReason(0); // Comenzar desde la primera razón
  };

  // Función para cerrar la ventana modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Función para mostrar la siguiente razón
  const handleNextReason = () => {
    if (currentReason < reasons.length - 1) {
      setCurrentReason(currentReason + 1);
    }
  };

  // Función para mostrar la razón anterior
  const handlePreviousReason = () => {
    if (currentReason > 0) {
      setCurrentReason(currentReason - 1);
    }
  };

  return (
    <div className="page25-container">
      {/* Imagen de fondo */}
      <div className="background-image"></div>

      {/* Botones laterales */}
      <button className="side-button left" onClick={handleShowReasons}>
        100 razones para intentarlo
      </button>
      <button className="side-button right" onClick={handleCloseModal}>
        1 para dejarte ir
      </button>

      {/* Cuadro central con los videos */}
      <div className="video-box">
        <div className="video-list">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => handleVideoChange(video.src)}
              className="video-button"
            >
              {video.title}
            </button>
          ))}
        </div>
        <div className="video-wrapper">
          <video controls key={selectedVideo}>
            <source src={selectedVideo} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </div>

      {/* Botón para regresar al menú */}
      <Link to="/" className="back-buttons">
        🏠 Regresar al menú
      </Link>

      {/* Ventana modal para las razones */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Razón {currentReason + 1}</h2>
            <p>{reasons[currentReason]}</p>
            <div className="modal-controls">
              <button onClick={handlePreviousReason} disabled={currentReason === 0}>
                Anterior
              </button>
              <button
                onClick={handleNextReason}
                disabled={currentReason === reasons.length - 1}
              >
                Siguiente
              </button>
            </div>
            <button className="close-button" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page25;