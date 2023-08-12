import React from 'react'
import ThreeScene from "./modelo3d";

const ThreeComponent = () => {
  return (
    <section className="section-three-escena">
    <div className="section-three-escena-texto">
      <div>
      <h1>Diseño y modelado 3D</h1>
      <p>Echa un vistazo a estos modelos basicos hechos en blender e importados con three.js</p>
      </div>
      <div className="modelos-3d-page-boton">
        <a href="">Ver modelos 3D</a>
      </div>
    </div>
    <ThreeScene/>
    </section>

  )
}

export default ThreeComponent