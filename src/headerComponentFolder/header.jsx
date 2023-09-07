import React from "react";
import main_logo from "../assets/images/mainLogo.webp";
import { MyContext } from "../contexts/mainContext";
import { useContext } from "react";
import { Toaster,toast } from "sonner";
import "./styles.css";
function Header() {
  const { setInterruptor, interruptor } = useContext(MyContext);

  return (
    <header className="main-header">
      <div className="contenedor-logo">
      <Toaster/>
        <img src={main_logo}  title="Antony Leon Website" />
      </div>
      <div className="main-nav">
        <a
          className="Btn"
          onClick={() => {
            setInterruptor(!interruptor);
          }}
          href="#"
        >
          Sobre

        </a>
        <a className="Btn" href="#" onClick={(()=>{toast.error('proximamante Proyectos')})} data-text="Proyectos">
          Proyectos

        </a>

        <a className="Btn" href="#" onClick={(()=>{toast.error('proximamante Photoshop')})} data-text="Photoshop">
          Photoshop
        </a>

        <a className="Btn" href="#blender" data-text="blender">
          Blender

        </a>

        <a className="Btn" href="#footer" data-text="Contacto">
          Contacto

        </a>
      </div>
    </header>
  );
}

export default Header;
