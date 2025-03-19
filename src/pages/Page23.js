import React from 'react';
import "../styles/Page21.css";
import { Link } from "react-router-dom"; 

const Pag23 = () => {
  return (
    <div>
          <Link to="/" className="back-button-flower">
            🏠 Regresar al menú
          </Link>
      {/* Texto "TE AMO MUCHO HERMOS@" */}
      <div id="texto1">
        <b>Porque... no imagino mi vida sin ti: </b>
        He pensado en todas las razones por las que te amo, en todo lo que significas para mí, en todo lo que hemos vivido juntos. Y si hay algo de lo que estoy seguro es que no imagino mi vida sin ti. No puedo imaginar mis días sin tu risa, sin tu voz, sin tu forma de hacerme sentir amado. No puedo imaginar mi futuro sin tus abrazos, sin nuestras conversaciones, sin todo lo que hemos construido juntos.
        </div>

      {/* Florero con flores */}
      <div className="flower2">
        {/* Primera flor */}
        <div className="f2-wrapper">
          <div className="flower2__line"></div>
          <div className="f2">
            <div className="flower2__leaf flower2__leaf--1"></div>
            <div className="flower2__leaf flower2__leaf--2"></div>
            <div className="flower2__leaf flower2__leaf--3"></div>
            <div className="flower2__leaf flower2__leaf--4"></div>
            <div className="flower2__leaf flower2__leaf--5"></div>
            <div className="flower2__leaf flower2__leaf--6"></div>
            <div className="flower2__leaf flower2__leaf--7"></div>
            <div className="flower2__leaf flower2__leaf--8 flower2__fall-down--yellow"></div>
          </div>
        </div>

        {/* Segunda flor */}
        <div className="f2-wrapper f2-wrapper--2">
          <div className="flower2__line"></div>
          <div className="f2">
            <div className="flower2__leaf flower2__leaf--1"></div>
            <div className="flower2__leaf flower2__leaf--2"></div>
            <div className="flower2__leaf flower2__leaf--3"></div>
            <div className="flower2__leaf flower2__leaf--4"></div>
            <div className="flower2__leaf flower2__leaf--5"></div>
            <div className="flower2__leaf flower2__leaf--6"></div>
            <div className="flower2__leaf flower2__leaf--7"></div>
            <div className="flower2__leaf flower2__leaf--8 flower2_fall-down--pink"></div>
          </div>
        </div>

        {/* Tercera flor */}
        <div className="f2-wrapper f2-wrapper--3">
          <div className="flower2__line"></div>
          <div className="f2">
            <div className="flower2__leaf flower2__leaf--1"></div>
            <div className="flower2__leaf flower2__leaf--2"></div>
            <div className="flower2__leaf flower2__leaf--3"></div>
            <div className="flower2__leaf flower2__leaf--4"></div>
            <div className="flower2__leaf flower2__leaf--5"></div>
            <div className="flower2__leaf flower2__leaf--6"></div>
            <div className="flower2__leaf flower2__leaf--7"></div>
            <div className="flower2__leaf flower2__leaf--8 flower2__fall-down--purple"></div>
          </div>
        </div>

        {/* Florero de vidrio */}
        <div className="flower2__glass"></div>
      </div>

      {/* Burbujas con corazones */}
      <div className="bubbles2">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="bubble2">
            <svg className="heart2" viewBox="0 0 32 32">
              <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pag23;