import { FC } from "react"
import { Languaje } from "../../LanguajeDropDown";
import { Search } from "../../Search ";
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

        </nav>
      
    )

}

export { Nav }
