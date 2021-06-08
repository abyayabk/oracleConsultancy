import React from 'react';
import image2 from './real.jpg';
import './HomePage.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const slideImages = [
    'images/slide_2.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
  ];
  

function HomePage() 
{
    return (
      <>
      
      
      
        <h1 style={{
                          
                          fontSize: '18px',
                          color: 'white',
                         
                          
                          position: 'absolute',
                          textAlign: 'center'
                          
                      }}>        

    <h2 className='OnTop'>
  Who we are
  <br></br><br></br>
 we provide end to end BIM (Building Information Modelling) services through consulting in Structural Engineering, Civil engineering, Architecture & MEP (Mechanical, Electrical and Plumbing) solutions. The typical project engagement runs through system selection studies, CAD contact drawings, working out specifications, preliminary cost estimation feasibility mapping and shop drawing review to host of construction phase services.
 <br></br>
 
</h2>

</h1>


                   
                    
                      

                      <div class="module red"></div>

                      

      
                      
                      
        </>
    );
    }



 
export default HomePage;
//<img src={image3} />
/*<div style={{
                 
                 backgroundImage: `url(${image2})`,
                  height: '1000px',
                  backgroundRepeat: 'no-repeat' ,
                  WebkitBackgroundSize: 'contain',
                  opacity: '0.3',
                  position: 'relative'
                
                  
                  }}>
                      </div>*/