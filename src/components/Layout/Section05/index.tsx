import { FC } from "react"

import section05  from '../../../assets/img/img-sect5.jpeg'
import { CardNews } from "../../Parts/CardNews";
import { Link } from 'react-router-dom'



import './styles.scss';

const Section05: FC = () => {

    return (
        
        <section className="section05">

            <div className="container-sect05" >

                <div className="section05-news">
                    <h5>Noticias</h5>
                    <Link className='link-all-news' to=''> Ver todas las noticias</Link>
                </div>

                <div className="container-cards-news">
            
                    <CardNews 
                        date={'12 nov 2020'}
                        img={section05}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        link= {'https://www.youtube.com/'}
                        backgroundColor={'#F7F6F6'}
                        color={'#707372'}
                    /> 

                    <CardNews 
                        date={'12 nov 2020'}
                        img={section05}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        link= {'https://www.youtube.com/'}
                        backgroundColor= {'#F7F6F6'}
                        color={'#707372'}
                    /> 

                    <CardNews
                        date={'12 nov 2020'}
                        img={section05}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        link= {'https://www.youtube.com/'}
                        backgroundColor={'#01426A'}
                        color={'#FFFFFF'}
                    /> 

                </div>
                
                <div className="timer">
                    <div className="timer-01"></div>
                    <div className="timer-02"></div>
                    <div className="timer-02"></div>
                </div>

            </div>

    
        </section>
    
      
    )

}

export { Section05 }
