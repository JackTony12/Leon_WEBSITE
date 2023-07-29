import { useState } from "react";
import React from "react";
import blender from "../icons/blender.webp";
import bootstrap from "../icons/bootstrap.webp";
import css from "../icons/css.webp";
import firebase from "../icons/firebase.webp";
import git from "../icons/git.webp";
import github from "../icons/github.webp";
import html from "../icons/html.webp";
import js from "../icons/js.webp";
import mysql from "../icons/mysql.png";
import office from "../icons/office.webp";
import reactIcon from "../icons/react.webp";
import sass from "../icons/sass.webp";
import three from "../icons/three.webp";
import pothoshop from "../icons/pothoshop.webp";
import sketchup from "../icons/sketchup.webp";
import filmora from "../icons/filmora.webp";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function Iconos() {
  const icons = [
    blender,
    bootstrap,
    css,
    firebase,
    git,
    github,
    html,
    js,
    mysql,
    office,
    reactIcon,
    sass,
    three,
    pothoshop,
    sketchup,
    filmora
  ];
  const names = [
    "Blender",
    "Bootstrap",
    "Css 3",
    "Firebase",
    "Git",
    "Github",
    "Html 5",
    "Javascript",
    "Mysql",
    "Office",
    "React",
    "Sass",
    "Three.js",
    "Pothoshop",
    "Sketchup",
    "Filmora"
  ];
  const urls = [
    "https://www.blender.org/",
    "https://getbootstrap.com/",
    "https://developer.mozilla.org/es/docs/Web/CSS",
    "https://firebase.google.com/",
    "https://git-scm.com/",
    "https://github.com/",
    "https://developer.mozilla.org/es/docs/Web/HTML",
    "https://developer.mozilla.org/es/docs/Web/JavaScript",
    "https://www.mysql.com/",
    "https://www.office.com/",
    "https://es.react.dev/",
    "https://sass-lang.com/",
    "https://threejs.org/",
    "https://www.adobe.com/es/products/photoshop.html",
    "https://www.sketchup.com/es",
    "https://filmora.wondershare.net/"
  ];
  const desc = [
    "Programa de modelado 3D profesional utilizado para la creación de animaciones, efectos visuales y diseño 3D.",
    "Preprocesador de estilos basados en clases que facilita la creación de diseños y componentes web responsivos.",
    "Lenguaje de estilado utilizado para definir la presentación y el diseño de páginas web.",
    "Base de datos NoSQL de Google, plataforma completa para el desarrollo de aplicaciones web y móviles.",
    "Sistema de control de versiones ampliamente utilizado para el seguimiento de cambios en el código fuente de proyectos.",
    "Plataforma de control de versiones basado en la nube y herramientas colaborativas para el desarrollo de software.",
    "Lenguaje de marcado de hipertexto utilizado para estructurar el contenido y la información en páginas web.",
    "Lenguaje de programación utilizado para crear interactividad y dinamismo en sitios web y aplicaciones.",
    "Base de datos relacional (SQL) ampliamente utilizado para almacenar y administrar datos de manera eficiente.",
    "Paquete de software que incluye herramientas como Word, Excel, PowerPoint y más, para tareas de oficina y productividad.",
    "Librería de interfaces de usuario que facilita la creación de componentes reutilizables y eficientes para aplicaciones web.",
    "Preprocesador de estilos CSS que ofrece características adicionales y facilita la escritura de estilos más organizados.",
    "Librería que permite el procesamiento de modelos 3D en la web, efectos visuales impresionantes y experiencias increibles.",
    "Programa para la edicion de fotografia, graficos e ilustraciones",
    "Software de diseño que te permite crear modelos 3D",
    "Herramienta para la edición de video de alta calidad"

  ];
  const [flipChek, setFlipChek] = useState(null);
  function handleFlip(index) {
    setFlipChek(index === flipChek ? null : index);
  }
  return (
    <>
      {icons.map((item, index) => {
        const isFliped = index === flipChek;
        return (
          <div
            onClick={() => handleFlip(index)}
            data-text={names[index]}
            className={`icon-skill ${isFliped ? "flipped" : ""}`}
            key={item}
          >
            <div className={`icon-back ${isFliped ? "icon-flipped" : ""}`}>
              <p>{desc[index]}</p>
            </div>
            <img src={item} alt={names[index]} className="icon" />
            <a href={urls[index]} target="_blank" className="info-skill">
              <AiOutlineInfoCircle />
            </a>
          </div>
        );
      })}
    </>
  );
}
