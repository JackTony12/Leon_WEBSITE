import React from "react";
import choza from "../images/choza.webp";
import "../styles/estilos3dComponent.css";
import Carousel from "../carruselComponent/carrusel";
const ThreeComponent = () => {
  return (
    <section id="blender" className="section-three-escena">
      <div className="section-three-escena-texto">
        <div>
          <h1>Diseño y modelado 3D</h1>
          <p>
            Echa un vistazo a estos modelos basicos hechos en blender e
            importados con three.js
          </p>
        </div>
        <div className="modelos-3d-page-boton">
          <a href="">Ver modelos 3D</a>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default ThreeComponent;
