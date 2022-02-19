import { FC } from "react"

import { Languaje } from "../../Parts/LanguajeDropDown";
import { Search } from "../../Parts/Search ";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

import chevron  from '../../../assets/img/chevron-down.png'


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

                        Industrias <img src={chevron} alt="chevron-down" />
        
                    </li>
                    
                    <li>

                        Servicios <img src={chevron} alt="chevron-down" />
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
