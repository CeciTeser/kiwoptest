import { FC } from 'react';
import { Footer } from '../../components/Common/Footer';

import { Nav } from '../../components/Common/Nav';
import { Section01 } from '../../components/Section01';
import { Section02 } from '../../components/Section02';
import { Section03 } from '../../components/Section03';
import { Section04 } from '../../components/Section04';

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

            <Footer/>
            
        </div>

    
    )
}
export {Dashboard};