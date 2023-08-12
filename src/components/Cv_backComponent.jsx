import React from 'react'
import AL_Background from "../images/posterTerminadoWebp.webp";
import cv from "../Cv/ANTONYLEONCV.pdf";
import {AiOutlineDownload} from 'react-icons/ai'

const CvBackComponent = () => {
  return (
    <section className="section-img">
    <div className="contenedor-img">
      <img src={AL_Background} alt="AntonyLeon" />
    </div>
    <a download="AntonyLeonCV.pfd" className="boton-cv" href={cv}>
      <AiOutlineDownload /> Descargar CV
    </a>
  </section>
  )
}

export default CvBackComponent