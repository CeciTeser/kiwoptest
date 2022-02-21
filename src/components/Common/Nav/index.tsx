import { FC } from "react"

import { Languaje } from "../../Parts/LanguajeDropDown";
import { Search } from "../../Parts/Search ";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'



import './styles.scss';


const Nav: FC = () => {

    return (
    
        <nav className="nav-container">

            <div className="nav">
            
                <ul>

                    <li  >
            
                        Sobre nosotros
                    
                    </li>

                    <li >
                        <select name="" id="">
                            <option value="Industrias" selected>Industrias</option>
                            <option value="Aeronautica">Aeronáutica</option>
                            <option value="Espacio">Espacio</option>
                            <option value="Automoción">Automoción</option>
                            <option value="Ferroviario">Ferroviario</option>
                            <option value="Naval">Naval</option>
                            <option value="Defensa">Defensa</option>
                            <option value="OilGas">Oil & Gas</option>
                            <option value="Energía">Energía</option>
                            <option value="AEC">AEC</option>
                            
                        </select>
                    </li>
                    
                    <li>
                        <select name="" id="">
                            <option value="Servicios" selected>Servicios</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Innovación">Innovación</option>
                            <option value="DigitalTransformation">Digital Transformation</option>
                            <option value="Softwaredevelopment">Software development</option>
                            <option value="Training">Training</option>
                            <option value="Prototyping">Prototyping</option>
                            <option value="Innovación">Innovación</option>
                            
                        </select>
                    </li>

                    <li >
                
                         Actualidad

                    </li>

                    <li>
                
                       Trabaja con nosotros

                    </li>
                </ul>

                <div className="nav-rightside">

                    <Search/>
                    <Languaje/>

                </div>

            </div>
            <div className="icon-container">
                <FontAwesomeIcon  className='icon' icon={faBars} />
            </div>
        </nav>
      
    )

}

export { Nav }
