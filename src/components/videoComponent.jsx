import React from 'react'
import video01 from '../videos/video1.webm'
import {BsCheck} from "react-icons/bs";

const VideoComponent = () => {
  return (
    <section className="video-section">
    <div className="video-contenedor">
    <video src={video01}  autoPlay muted loop></video>
    <h2 className="video-section-text-slogan">Transformando ideas en experiencias digitales</h2>
    <ul className="ul-text-list">
      <li><BsCheck/> Soluciones confiables</li>
      <li><BsCheck/> Código limpio y bien estructurado</li>
      <li><BsCheck/> Optimización y rendimiento</li>
      <li><BsCheck/> Diseño responsive y amigable</li>
    </ul>
    </div>
  </section>
  )
}

export default VideoComponent