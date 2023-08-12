import React from 'react'
import logo_created from '../logos/LOGO-CREATED.webp'
import {BsChevronDoubleRight} from 'react-icons/bs'

const LogosComponent = () => {
  return (
    <section className="logo-section">
    <div className="contenedor-logo-section">
      <img src={logo_created} alt="LOGO_CREATED_ANTONY_LEON" />
    </div>
    <div className="logo-section-button-contenedor">
      <a href="#">Mas logos  <BsChevronDoubleRight className="logo-section-right-arrow"/> </a>
      
    </div>
  </section>
  )
}

export default LogosComponent