import React from 'react';

import image3 from './cad.jpg';
import image4 from './second.jpg';
import image5 from './third.jpg';
import './HomePage.css';

import Carousel from 'react-bootstrap/Carousel' 



function HomePage() 
{
  return (
    <div> 
      
                         <div className='container-fluid' >  
                         <Carousel>  
                        <Carousel.Item style={{'height':"700px", width:"100%", marginTop:'10px'}} >  
                        <h2 style={{position:'absolute', fontSize:'80px', zIndex:"1"}}>welcome to Oracle engineering solutions</h2>  
                        <h2 style={{position:'absolute', fontSize:'60px', zIndex:"1"}}>
                          <p className="firstSlide">BIM services through consulting in Structural Engineering, Civil engineering, Architecture and </p> 
                          <p className="firstSlide1">Mechanical, Electrical and Plumbing solutions</p>
                          </h2>
                                 <img style={{'height':"100%", width:"700px",  opacity:"0.6", zIndex:"-1"}}    
                         className="d-block w-100"  
                        src={image4} alt="img" /> 
                           <Carousel.Caption >  
                               
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"700px", width:"100%", marginTop:'10px'}}>
                                 <h2 style={{position:'absolute', fontSize:'80px', zIndex:"1"}}>
                                 <p className="firstSlide1">Interior designs using CAD contact drawings</p>
                                 <p className="firstSlide1">Our experts can design, manage and work out specifications to fulfil your goals. </p>
                                   </h2>  
                                 <img style={{'height':"100%", width:"700px",  opacity:"0.6", zIndex:"-1"}}  
                                   className="d-block w-100"  
                                    src={image3}   alt="img" />  
                                       <Carousel.Caption> 
                                  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                         <Carousel.Item style={{'height':"700px", width:"100%", marginTop:'10px'}}>
                                         <h2 style={{position:'absolute', fontSize:'80px', zIndex:"1"}}>hello</h2>  
                                 <img style={{'height':"100%", width:"700px",  opacity:"0.7", zIndex:"-1"}}  
                                        className="d-block w-100"  
                                         src={image5}  alt="img" />  
                                        <Carousel.Caption>  
                                           
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div> 

                                <div className="colContainer">

                                <h1 className="variant" >OUR SERVICES</h1>

                                <div className="rowContainer">

            <div className="containerHome">
              <h5 style={{marginTop:"100px", marginLeft:"100px"}}>Building information modelling</h5>
              </div>
            <div className="containerHome">
              <h5 style={{marginTop:"100px", marginLeft:"100px"}}> CAD contact drawings and designs</h5>
              </div>
            <div className="containerHome" >
              <h5 style={{marginTop:"100px", marginLeft:"100px"}}> Site Surveying</h5>
            </div>                          
                                      
     
     
    </div>

    
    <div className='container-fluid2' >  
                         <Carousel>  
                        <Carousel.Item style={{'height':"200px", width:"100%", marginTop:'10px', marginBottom: '20px'}} >  
                       <h7 className="h7" style={{position:'absolute', fontSize:'30px'}}>
                         <p style={{marginTop: '50px'}}>Who we are</p>
                         </h7>
                           <Carousel.Caption >  
                              
                                 </Carousel.Caption>  
                                 </Carousel.Item>  
                                 <Carousel.Item style={{'height':"200px", width:"100%", marginTop:'10px', marginBottom: '20px'}}>
                                 <h7 className="h7" style={{position:'absolute', fontSize:'20px'}}>
                                 <p style={{marginTop: '50px'}}>Oracle Engineering Solutions, we provide end to end BIM (Building Information Modelling) services through consulting in Structural Engineering, Civil engineering, Architecture & MEP (Mechanical, Electrical and Plumbing) solutions. The typical project engagement runs through system selection studies, CAD contact drawings, working out specifications, preliminary cost estimation feasibility mapping and shop drawing review to host of construction phase services.</p>
                                 </h7>
                       
                                       <Carousel.Caption> 
                                     
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                         <Carousel.Item style={{'height':"200px", width:"100%", marginTop:'10px', marginBottom: '20px'}}>
                                 <h7 className="h7" style={{position:'absolute', fontSize:'20px'}}>
                                 <p style={{marginTop: '50px'}}>Our vision is to be a leader in the sector of building technology and design services in Nepal through innovation and customer satisfaction.</p>
                                 </h7>
                        
                                        <Carousel.Caption>  
                                            
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>
    </div>
    </div>
    
);

  }


 
export default HomePage;

//d-block w-100
/*<h1 className="h1variant" style={{position:'absolute', marginLeft:'30%', fontSize:'30px'}}>
                       <p style={{marginTop:"250px"}}>Welcome to oracle consultancy</p>
                       </h1>*/
/*class="bg_image"
style={{
  
  backgroundImage: `url(${image2})`,
  backgroundSize: "cover",
  height: "1000px",
  color: "#f5f5f5",
  
}}

<div class="lilBox">  
                          How To Use Bootstrap Carousel In ReactJS  
                         </div> 
                         
                          <div className="row title" style={{ marginBottom: "30px" , marginTop: "20px", height:"100px"}} >  
                          
                         </div> */