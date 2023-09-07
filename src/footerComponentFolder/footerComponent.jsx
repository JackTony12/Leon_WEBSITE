import React from "react";
import { useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import FormContact from "../ContactComponentFolder/formcontact";
import './styles.css'
const FooterComponent = () => {
  const [copy, setCopy] = useState(false);
  const handleCopyright = () => {
    setCopy(!copy);
  };

  const handleCloseModal = (e) => {
    setCopy(false);
  };
  return (
    <footer id="footer" className="main-footer">
      <div className="footer-contenedor"></div>
      <div className="footer-text-contenedor">
        <h2>Área de contacto</h2>
        <p>
          ¿Necesitas más información? Puedes dejarme un mensaje o contactarme por medio de la sigientes
          redes sociales sera un gusto contestarte.
        </p>
      </div>
      <FormContact />

      <div className="contacto-contenedor">
        <div>
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
        <div>
          <button onClick={handleCopyright} className="copyright">
            Copyright
          </button>
        </div>
      </div>
      {copy && (
        <div className="copyright-modal">
          <p>
            © 2023 Antony Leon. Todos los derechos reservados. Los trabajos de
            desarrollo web realizados por Antony Leon son protegidos por
            derechos de autor. Cada sitio web es una creación única que
            representa la habilidad y la creatividad Antony Leon. Queda
            estrictamente prohibida la reproducción no autorizada, distribución
            o modificación de cualquier aspecto de estos sitios web, incluyendo,
            pero sin limitarse a, diseño, contenido, código fuente y elementos
            gráficos. Cualquier uso no autorizado de estos trabajos estará
            sujeto a medidas legales. Si desea utilizar o licenciar cualquiera
            de nuestros trabajos de desarrollo web, por favor, póngase en
            contacto con nosotros para obtener los permisos correspondientes.
            <br />
            <hr />
            <br />
            © 2023 Antony Leon. Todos los derechos reservados. Los
            trabajos de modelado 3D creados por Antony Leon son protegidos por
            derechos de autor. Estos modelos 3D están disponibles de forma
            gratuita para su uso siempre y cuando se mencione "Antony
            Leon" como el propietario en cualquier uso público o privado. Queda
            terminantemente prohibida la reproducción, distribución o
            modificación no autorizada de cualquiera de estos modelos 3D, ya sea
            en su forma original o derivada sin mencionar adecuadamente la
            propiedad. Cualquier uso no autorizado de estos trabajos estará
            sujeto a medidas legales. Si desea utilizar o licenciar alguno de
            nuestros modelos 3D, por favor, póngase en contacto con nosotros
            para obtener los permisos adecuados. Antony Leon Empresa de
            Desarrollo Web
            <button className="close-copyright" onClick={handleCloseModal}>
              Aceptar
            </button>
          </p>
        </div>
      )}
    </footer>
  );
};

export default FooterComponent;
