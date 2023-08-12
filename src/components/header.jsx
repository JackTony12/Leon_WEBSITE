import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import main_logo from "../images/mainLogo.webp";

function Header() {
  return (
    <header className="main-header">
      <div className="contenedor-logo">
        <img src={main_logo} alt="" title="Antony Leon Website" />
      </div>
      <div className="main-nav">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Photoshop</a>
          </li>
          <li>
            <a href="#">Blender</a>
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