import { FC } from "react"

import { Link } from 'react-router-dom'

import './styles.scss';


type Props = {

    date: string,
    img: string, 
    text:string,
    link: string,
    backgroundColor:string, 
    color: string, 

}

const CardNews:FC <Props> = ({date, img , text , link, color, backgroundColor}) =>{

    return (

        <div className="card-news-lg1" style={{backgroundColor: `${backgroundColor}`, color: `${color}` }}>
            <img src={img} alt="" />
            <div className="container-text" >
                <p className="date">{date}</p>
                <p className="text">{text}</p>
                <Link className="link" to={link}> Leer más </Link>
            </div>
        </div>
    )
}

export {CardNews}