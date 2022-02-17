import { FC } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons'



import './styles.scss';

const Section03: FC = () => {

    return (
        
        <section className="section03">   
            <h4>Nuestros Valores</h4>
            <p className="text-section03">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deleniti expedita quia officiis eveniet quasi repellat mollitia assumenda nostrum, laborum provident facere minus asperiores animi ad esse velit possimus necessitatibus?</p>
            <div className="box-valores">
                <div className="valor">
                    <FontAwesomeIcon  className='icon' icon={faHelmetSafety} />
                    <i className="fa-regular fa-user-helmet-safety"></i>
                    <h5>Engineering enthusiasts</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
                </div>
                <div className="valor">
                    <FontAwesomeIcon  className='icon' icon={faHelmetSafety} />
                    <h5>We walk the talk</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
                </div>
                <div className="valor">
                    <FontAwesomeIcon  className='icon' icon={faHelmetSafety} />
                    <h5>Moving forward together</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
                </div>
                <div className="valor">
                    <FontAwesomeIcon  className='icon' icon={faHelmetSafety} /> 
                    <h5>Challenge thirsty</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
                </div>
            </div>
            <button>sobre nosotros</button>
        </section>
    
      
    )

}

export { Section03 }
