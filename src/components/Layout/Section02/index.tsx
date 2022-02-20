import { FC } from "react"

import CarouselContainer from "../../Parts/CarouselContainer"


import './styles.scss';

const Section02: FC = () => {

    return (

        
        <section className="section02"> 

            <p className="text-section02">Ayudamos a nuestros clientes a ser <span>más eficientes y competitivos.</span></p>
            
            <CarouselContainer/>
           
            <div className="container-dots-btn">

                <button className="btn-section02">Contacta con nosotros</button>

            </div>

        </section>
    
      
    )

}

export { Section02 }
