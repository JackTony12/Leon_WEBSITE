import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <footer id="footer" className="main-footer">
      <div className="footer-contenedor"></div>
      <div className="footer-text-contenedor">
        <h2>Área de contacto</h2>
        <p>
          ¿Necesitas algun trabajo? Puedes contactarme por medio de la sigientes
          redes sociales, sera un gusto contestarte y darte cualquier tipo de
          información que necesites.
        </p>
      </div>
      <div className="contacto-contenedor">
        <div className="whatsapp-contacto">
          <a href="https://wa.me/qr/K33U6CF54FSUM1" target="_blank">
            <BsWhatsapp className="whatsapp-icon" /> WhatsApp{" "}
          </a>
        </div>

        <div>
          <a href="#">
            <BiLogoTelegram className="telegram-icon" />
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
