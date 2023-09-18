import React from "react";
import main_logo from "../assets/images/mainLogo3.webp";
import { MyContext } from "../contexts/mainContext";
import { PiNewspaperFill } from "react-icons/pi";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiAdobephotoshop, SiBlender } from "react-icons/si";
import { useContext } from "react";
import { Toaster, toast } from "sonner";
import "./styles.css";
function Header() {
  const { setInterruptor, interruptor } = useContext(MyContext);

  return (
    <header className="main-header">
      <div className="contenedor-logo">
        <Toaster />
        <img src={main_logo} title="Logo Antony Leon" />
      </div>
      <div className="main-nav">
        <div className="btn-contenedor">
          <a
            className="Btn"
            onClick={() => {
              setInterruptor(!interruptor);
            }}
            href="#"
          >
            Sobre
          </a>
        </div>
        <div className="btn-contenedor">
          <a
            className="Btn"
            href="#"
            onClick={() => {
              toast.error("proximamante Proyectos");
            }}
            data-text="Proyectos"
          >
            Proyectos
          </a>
        </div>
        <div className="btn-contenedor">
          <a
            className="Btn"
            href="#"
            onClick={() => {
              toast.error("proximamante Photoshop");
            }}
            data-text="Photoshop"
          >
            Photoshop
          </a>
        </div>
        <div className="btn-contenedor">
          <a className="Btn" href="#blender" data-text="blender">
            Blender
          </a>
        </div>
        <div className="btn-contenedor">
          <a className="Btn" href="#footer" data-text="Contacto">
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
