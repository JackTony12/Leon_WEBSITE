import React from "react";
import { useContext } from "react";
import { MyContext } from "../contexts/mainContext";
import AL_Background from "../images/posterTerminadoWebp.webp";
import cv from "../Cv/ANTONYLEONCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import PersonalInfo from "../personalinfocomponent/personalInfo";

const CvBackComponent = () => {
  const { interruptor } = useContext(MyContext);
  return (
    <section className="cv-back-container">
      <div className={`cv-back-component ${interruptor ? "active" : ""}`}>
        <PersonalInfo />
      </div>
      <div className={`cv-back-component ${!interruptor ? "active" : ""}`}>
        <section className="section-img">
          <div className="contenedor-img">
            <img src={AL_Background} alt="AntonyLeon" />
          </div>
          <a download="AntonyLeonCV.pfd" className="boton-cv" href={cv}>
            Descargar CV <AiOutlineDownload />
          </a>
        </section>
      </div>
    </section>
  );
};

export default CvBackComponent;
