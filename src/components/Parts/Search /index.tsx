import { FC } from "react"

import loupe  from '../../../assets/img/loupe.png'


import './styles.scss';


const Search: FC = () => {

    return (
    
        
        <div className="search">
        
            
       <img src={loupe} alt="loupe" />
                
            
            
        </div>
    )

}

export { Search }