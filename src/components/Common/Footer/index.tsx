import { FC } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {   faLinkedinIn, faTwitter, faFacebookF } from '@fortawesome//free-brands-svg-icons'

import './styles.scss';


const Footer: FC = () => {

    return (
    
        <footer className="footer-container">

            <div className="footer">
            
              <div className="listas">
                  <h5></h5>
                  <ul>
                      <li>Sobre nosotros</li>
                      <li>Actualidad</li>
                      <li>Trabaja con nosotros</li>
                      <li>Contacto</li>
                  </ul>
              </div>
              <div className="listas">
                    <h5>INDUSTRIAS</h5>
                    <ul>
                        <li>Aerónautica</li>
                        <li>Espacio</li>
                        <li>Automoción</li>
                        <li>Ferroviario</li>
                        <li>Naval</li>
                        <li>Defensa</li>
                        <li>Oil & Gas</li>
                        <li>Energía</li>
                        <li>AEC</li>
                    </ul>
              </div>
              <div className="listas">
                    <h5>SERVICIOS</h5>
                    <ul>
                        <li>Consulting</li>
                        <li>Engineering</li>
                        <li>Innovación</li>
                        <li>Digital Transformation</li>
                        <li>Software development</li>
                        <li>Training</li>
                        <li>Prototyping</li>
                        <li>Innovación</li>
                    </ul>
              </div>
              <div className="listas">
                    <h5>LEGAL</h5>
                    <ul>
                        <li>Privacidad</li>
                        <li>Aviso Legal</li>
                        <li>Política de Cookies</li>
                        <li>Sitemap</li>
                    </ul>
              </div>
              <div>
                  <h5>SOCIAL MEDIA</h5>
                  <div className="rrss">
                    <FontAwesomeIcon   icon={faLinkedinIn}  className='rrss-icon'/>
                    <FontAwesomeIcon   icon={faTwitter}    className='rrss-icon'/>
                    <FontAwesomeIcon   icon={faFacebookF}   className='rrss-icon' />
                  </div>
              </div>

            </div>

        </footer>
      
    )

}

export { Footer }
