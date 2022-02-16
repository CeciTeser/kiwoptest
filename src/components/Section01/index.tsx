import { FC } from "react"

import seats  from '../../assets/img/seats.jpeg'


import './styles.scss';

const Section01: FC = () => {

    return (
        
        <section className="section01">   
            <img src={seats} alt="seats" />
            <div className="box-destacado">

                <div className="timer">
                    <div className="timer-01"></div>
                    <div className="timer-02"></div>
                    <div className="timer-02"></div>
                </div>

                <p className="texto-destacado">Covid-19: Ayudamos a reactivar la movilidad de forma segura con FlightSafe, nuestro sistema automatizado de desinfección por luz UV-C</p>
                <p className="saber-mas">saber más</p>
            </div>
        </section>
    
      
    )

}

export { Section01 }
