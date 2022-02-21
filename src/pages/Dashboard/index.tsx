import { FC } from 'react';

import { Nav , Footer } from '../../components/Common';
import { Section01, Section02, Section03, Section04, Section05, Section06 } from '../../components/Layout';

import './styles.scss';

const Dashboard:FC =()=>{


    return (  
        
        <div className='dashboard'>


                <Nav/>

                <Section01/>

                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis ullamcorper leo, vel suscipit magna. Aliquam in dui id quam congue iaculis. Donec rutrum hendrerit arcu vel elementum.</p>
                
                <Section02/>
                
                <Section03/>

                <Section04/>

                <Section05/>

                <div className='square'></div>

                <Section06/>

                <Footer/>
                
            
        </div>

    
    )
}
export {Dashboard};