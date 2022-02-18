import { FC } from "react"

import { Link } from 'react-router-dom'

import worker  from '../../../assets/img/img-sect4.jpg'
import building  from '../../../assets/img/img2-sect4.jpg'



import './styles.scss';

const Section04: FC = () => {

    return (
        
        <section className="section04">

            <div className="container-sect04">

                <div className="section04-title">
                    <h5>Insights</h5>
                    <Link className='link-all-art' to=''> Ver todos los artículos</Link>
                </div>   

                <div className="container-box12">

                    <div className="box-insight01">
                        <div className="content-insight01">
                            <h5>ENERGÍA</h5>
                            <h2>¿Cómo ha enfrentado el sector energético el impacto del COVID?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                            <Link className='link' to=''> LEER MÁS</Link>
                        </div>
                    </div>

                    <div className="box-insight02">
                        <div className="img-back">
                        <div className="content-insight02">
                            <h5>INNOVACIÓN Y DESARROLLO</h5>
                            <h2>Nuevas tendencias en fabricación aditiva</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link className='link' to=''> LEER MÁS</Link>
                        </div>
                        </div>
                    </div>

                </div>
                <div className="container-box3">
                    <div className="box-insight03">
                        <div className="content-insight03">
                            <h5>TRANSFORMACIÓN DIGITAL</h5>
                            <h2>El 50% de las grandes factorías tendrá un gemelo digital</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                            <Link className='link' to=''> LEER MÁS</Link>
                        </div>
                    </div>
                    <img src={worker} alt="worker"/>
                </div>

            </div>
          
        </section>
    
      
    )

}

export { Section04 }
