import React from "react";
import "../styles/mainStyles.css";
import {BsArrowDownCircle } from "react-icons/bs";
import {AiOutlineMenu,AiOutlineDownload,AiOutlineInfoCircle} from "react-icons/ai";
import main_logo from "../images/mainLogo.png";
import AL_Background from "../images/posterTerminadoWebp.webp";
import { Iconos } from "../components/iconos";
import cv from "../Cv/CV_example.pdf";
export function MainComponent() {
  return (
    <body className="main-body">
      <header className="main-header">
        <div className="contenedor-logo">
          <img src={main_logo} alt="" title="Antony Leon Website" />
        </div>
        <div className="main-nav">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Photoshop</a>
          </li>
          <li>
            <a href="#">Blender</a>
          </li>
          <li>
            <a href="#">Contactame</a>
          </li>
        </div>
        <div>
          <AiOutlineMenu />
        </div>
      </header>
      <section className="section-img">
        <div className="contenedor-img">
          <img src={AL_Background} alt="AntonyLeon" />
        </div>
        <a download="AntonyLeonCV.pfd" className="boton-cv" href={cv}>
          <AiOutlineDownload /> Descargar CV
        </a>
      </section>
      <section>
        <div className="contenedor-flecha-bajar">
          <a href="#section-skills">
            <BsArrowDownCircle className="flecha-bajar" />
          </a>
        </div>
      </section>
      <section className="main-article">
        <section id="section-skills" className="section-skills">
          <div className="contenedor-skills">
            <Iconos />
          </div>
        </section>

        <div className=""></div>
      </section>
      <footer className="main-footer">footer</footer>
    </body>
  );
}
