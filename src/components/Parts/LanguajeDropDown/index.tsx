import { FC } from "react"

import chevron  from '../../../assets/img/chevron-down.png'


import './styles.scss';


const Languaje: FC = () => {

    return (
    
        
        <div className="languaje">
        
            
        <p>ES <img src={chevron} alt="chevron-down" /></p>
                
            
            
        </div>
    )

}

export { Languaje }