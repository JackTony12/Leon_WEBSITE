import React from "react";
import { useContext } from "react";
import { MyContext } from "../contexts/mainContext";
import AL_Background from "../assets/images/principalPoster.webp";
import cv from "../assets/Cv/ANTONYLEONCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import PersonalInfo from "../personalComponentFolder/personalInfo";
import './styles.css'
import '../styles/mainStyles.css'

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
            Descargar CV < AiOutlineDownload className="downloadIcon"/>
          </a>
        </section>
      </div>
    </section>
  );
};

export default CvBackComponent;
