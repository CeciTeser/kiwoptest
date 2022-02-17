import { FC } from 'react';

import { Nav , Footer } from '../../components/Common';
import { Section01, Section02, Section03, Section04, Section05, Section06 } from '../../components/Layout';

import './styles.scss';

const Dashboard:FC =()=>{


    return (  
        
        <div className='dashboard'>


                <Nav/>

                <Section01/>

                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, deserunt et praesentium ratione aperiam sapiente laudantium, a ad totam amet, culpa commodi odio ut voluptatem? In veritatis repellat quas eum.</p>
                
                <Section02/>
                
                <Section03/>

                <Section04/>

                <Section05/>

                <Section06/>

                <Footer/>
                
            
        </div>

    
    )
}
export {Dashboard};