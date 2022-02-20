import {  FC } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Link } from 'react-router-dom'

import avion  from '../../../assets/img/img1-sect2.png'
import energia  from '../../../assets/img/img2-sect2.jpeg'
import submarino  from '../../../assets/img/img3-sect2.jpeg'
import planos  from '../../../assets/img/img4-sect2.jpeg'
import edificio  from '../../../assets/img/img5-sect2.jpeg'
import hangar  from '../../../assets/img/img6-sect2.jpeg'

import './styles.scss';

const CarouselContainer:FC =()=> {
 
        return (
            <Carousel>
                
                <div className="container-cards">

                    <div className="container-lg36">

                        <div className="card-insights-lg6">
                            <img src={hangar} alt="hangar" />
                            <div className="content-card">
                                <h5>transformación digital</h5>
                                <p>Optimizamos los procesos de ensablaje mediante herramientas de simulación y realidad mixta.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div> 
                        <div className="card-insights-lg3">
                            <img src={submarino} alt="submarino"/>
                            <div className="content-card">
                                <h5>industria Naval</h5>
                                <p>Desarrollamos la ingeniería completa del futuro submarino de la Armana Española.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                    </div>

                    <div className="container-lg25">

                        <div className="card-insights-lg5">
                            <img src={edificio} alt="edificio" />
                            <div className="content-card">
                                <h5>arquitectura y construcción</h5>
                                <p>Aplicamos la metogología BIM en nuestros proyectos de arquitectura y construcción.</p>
                            <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>
                        <div className="card-insights-lg2">
                            <img src={energia} alt="energia" />
                            <div className="content-card">
                                <h5>Energia</h5>
                                <p>Participamos en ITER, el proyecto de fusión nuclear más importante del mundo.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                    </div>

                    <div className="container-lg14">

                        <div className="card-insights-lg1">
                            <img src={avion} alt="avion" />
                            <div className="content-card">
                                <h5>Defensa</h5>
                                <p>Más de 25 millones de horas en proyectos de defensa.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                        <div className="card-insights-lg4">
                            <img src={planos} alt="planos" />
                            <div className="content-card">
                                <h5>espacio</h5>
                                <p>Ayudamos a nuestros clientes a procesar datos meteorológicos.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>   
                        </div>

                    </div>

                </div>

                <div className="container-cards">
                    
                    <div className="container-lg36">

                        <div className="card-insights-lg6">
                            <img src={hangar} alt="hangar" />
                            <div className="content-card">
                                <h5>transformación digital</h5>
                                <p>Optimizamos los procesos de ensablaje mediante herramientas de simulación y realidad mixta.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div> 
                        <div className="card-insights-lg3">
                            <img src={submarino} alt="submarino"/>
                            <div className="content-card">
                                <h5>industria Naval</h5>
                                <p>Desarrollamos la ingeniería completa del futuro submarino de la Armana Española.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                    </div>

                    <div className="container-lg25">

                        <div className="card-insights-lg5">
                            <img src={edificio} alt="edificio" />
                            <div className="content-card">
                                <h5>arquitectura y construcción</h5>
                                <p>Aplicamos la metogología BIM en nuestros proyectos de arquitectura y construcción.</p>
                            <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>
                        <div className="card-insights-lg2">
                            <img src={energia} alt="energia" />
                            <div className="content-card">
                                <h5>Energia</h5>
                                <p>Participamos en ITER, el proyecto de fusión nuclear más importante del mundo.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                    </div>

                    <div className="container-lg14">

                        <div className="card-insights-lg1">
                            <img src={avion} alt="avion" />
                            <div className="content-card">
                                <h5>Defensa</h5>
                                <p>Más de 25 millones de horas en proyectos de defensa.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                        <div className="card-insights-lg4">
                            <img src={planos} alt="planos" />
                            <div className="content-card">
                                <h5>espacio</h5>
                                <p>Ayudamos a nuestros clientes a procesar datos meteorológicos.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>   
                        </div>

                    </div>

                </div>
                <div className="container-cards">
                    
                    <div className="container-lg36">

                        <div className="card-insights-lg6">
                            <img src={hangar} alt="hangar" />
                            <div className="content-card">
                                <h5>transformación digital</h5>
                                <p>Optimizamos los procesos de ensablaje mediante herramientas de simulación y realidad mixta.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div> 
                        <div className="card-insights-lg3">
                            <img src={submarino} alt="submarino"/>
                            <div className="content-card">
                                <h5>industria Naval</h5>
                                <p>Desarrollamos la ingeniería completa del futuro submarino de la Armana Española.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                    </div>

                    <div className="container-lg25">

                        <div className="card-insights-lg5">
                            <img src={edificio} alt="edificio" />
                            <div className="content-card">
                                <h5>arquitectura y construcción</h5>
                                <p>Aplicamos la metogología BIM en nuestros proyectos de arquitectura y construcción.</p>
                            <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>
                        <div className="card-insights-lg2">
                            <img src={energia} alt="energia" />
                            <div className="content-card">
                                <h5>Energia</h5>
                                <p>Participamos en ITER, el proyecto de fusión nuclear más importante del mundo.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                    </div>

                    <div className="container-lg14">

                        <div className="card-insights-lg1">
                            <img src={avion} alt="avion" />
                            <div className="content-card">
                                <h5>Defensa</h5>
                                <p>Más de 25 millones de horas en proyectos de defensa.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>    
                        </div>

                        <div className="card-insights-lg4">
                            <img src={planos} alt="planos" />
                            <div className="content-card">
                                <h5>espacio</h5>
                                <p>Ayudamos a nuestros clientes a procesar datos meteorológicos.</p>
                                <Link className='link'to=''> SABER MÁS </Link>
                            </div>   
                        </div>

                    </div>

                </div>

            </Carousel>
        );
    
};

export default CarouselContainer