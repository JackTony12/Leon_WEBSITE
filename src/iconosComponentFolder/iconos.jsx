import React from "react";
import "./styles.css";
import iconData from "./iconsData";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Iconos = () => {
  return (
    <>
      {iconData.map((item, index) => {
        return (
          <div data-text={item.name} className="icon-skill" key={index}>
            <img src={item.icon} alt={item.name} className="icon" />
            <a href={item.url} target="_blank" className="info-skill">
              <AiOutlineInfoCircle />
            </a>
          </div>
        );
      })}
    </>
  );
};
export default Iconos;
