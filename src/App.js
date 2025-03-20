import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page1 from "./pages/Pageuno";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import Page14 from "./pages/Page14";
import Page15 from "./pages/Page15";
import Page16 from "./pages/Page16";
import Page17 from "./pages/Page17";
import Page18 from "./pages/Page18";
import Page19 from "./pages/Page19";
import Page20 from "./pages/Page20";
import Page21 from "./pages/Page21";
import Page22 from "./pages/Page22";
import Page23 from "./pages/Page23";
import Page24 from "./pages/Page24";
import Page25 from "./pages/Page25";

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción de la música
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Índice de la canción actual
  const audioRef = useRef(null); // Referencia al elemento de audio

  // Lista de canciones
  const songs = [
    "/imgs/cancion1.mp3",
    "/imgs/cancion2.mp3",
    "/imgs/cancion3.mp3",
  ];

  // Configura el audio para que se reproduzca en secuencia
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex]; // Establece la fuente de la canción actual
      if (isPlaying) {
        audioRef.current.play(); // Reproduce la canción solo si isPlaying es true
      }
    }
  }, [currentSongIndex, isPlaying]);

  // Maneja el evento "ended" para pasar a la siguiente canción
  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length); // Pasa a la siguiente canción
    };

    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  // Función para iniciar la música
  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Borra la clave "valorAceptado" cuando se cierra la pestaña
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("valorAceptado");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <Router>
      {/* Elemento de audio para reproducir la música */}
      <audio ref={audioRef} src={songs[currentSongIndex]} preload="auto" />

      {/* Pasar el estado y la función a los componentes */}
      <Routes>
        <Route
          path="/"
          element={<Home isPlaying={isPlaying} startMusic={startMusic} />}
        />
        <Route path="/page/1" element={<Page1 />} />
        <Route path="/page/2" element={<Page2 />} />
        <Route path="/page/3" element={<Page3 />} />
        <Route path="/page/4" element={<Page4 />} />
        <Route path="/page/5" element={<Page5 />} />
        <Route path="/page/6" element={<Page6 />} />
        <Route path="/page/7" element={<Page7 />} />
        <Route path="/page/8" element={<Page8 />} />
        <Route path="/page/9" element={<Page9 />} />
        <Route path="/page/10" element={<Page10 />} />
        <Route path="/page/11" element={<Page11 />} />
        <Route path="/page/12" element={<Page12 />} />
        <Route path="/page/13" element={<Page13 />} />
        <Route path="/page/14" element={<Page14 />} />
        <Route path="/page/15" element={<Page15 />} />
        <Route path="/page/16" element={<Page16 />} />
        <Route path="/page/17" element={<Page17 />} />
        <Route path="/page/18" element={<Page18 />} />
        <Route path="/page/19" element={<Page19 />} />
        <Route path="/page/20" element={<Page20 />} />
        <Route path="/page/21" element={<Page21 />} />
        <Route path="/page/22" element={<Page22 />} />
        <Route path="/page/23" element={<Page23 />} />
        <Route path="/page/24" element={<Page24 />} />
        <Route path="/page/25" element={<Page25 />} />
      </Routes>
    </Router>
  );
}

export default App;