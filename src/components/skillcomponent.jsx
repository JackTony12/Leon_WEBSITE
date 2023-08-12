import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsArrowDownCircle} from 'react-icons/bs'

const SkillComponent = () => {
  return (
    <>
     <section>
        <div className="contenedor-flecha-bajar">
          <a href="#section-skills">
            <BsArrowDownCircle className="flecha-bajar" />
          </a>
        </div>
      </section>
      <section>
        <div className="skill-text-contenedor">
          <h2>Habilidades</h2>
          <p>
            Toque el simbolo <AiOutlineInfoCircle /> para mas información
          </p>
        </div>
      </section>
    </>
  )
}

export default SkillComponent