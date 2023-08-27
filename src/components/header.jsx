import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import main_logo from "../images/mainLogo.webp";
import { MyContext } from "../contexts/mainContext";
import { useContext } from "react";

function Header() {
  const { setInterruptor, interruptor } = useContext(MyContext);

  return (
    <header className="main-header">
      <div className="contenedor-logo">
        <img src={main_logo} alt="" title="Antony Leon Website" />
      </div>
      <div className="main-nav">
        <li>
          <a
            onClick={() => {
              setInterruptor(!interruptor);
            }}
            href="#"
          >
            Sobre
          </a>
        </li>
        <li>
          <a href="#">Proyectos</a>
        </li>
        <li>
          <a href="#">Photoshop</a>
        </li>
        <li>
          <a href="#blender">Blender</a>
        </li>
        <li>
          <a href="#footer">Contactame</a>
        </li>
      </div>
      <div>
        <AiOutlineMenu />
      </div>
    </header>
  );
}

export default Header;
