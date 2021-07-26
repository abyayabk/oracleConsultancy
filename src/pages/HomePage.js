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
                        <h2 style={{position:'absolute', fontSize:'80px', zIndex:"1", marginBottom:""}}>welcome to Oracle engineering solutions</h2>  
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
                                 <h2 style={{position:'absolute', fontSize:'60px', zIndex:"1", marginBottom:""}}>our experts can design, manage and work out specification to fulfill your goal</h2>  
                        <h2 style={{position:'absolute', fontSize:'60px', zIndex:"1"}}>
                          <p className="firstSlide">BIM services through consulting in Structural Engineering, Civil engineering, Architecture and </p> 
                          <p className="firstSlide1">Mechanical, Electrical and Plumbing solutions</p> 
                          </h2> 
                                 <img style={{'height':"100%", width:"700px",  opacity:"0.6", zIndex:"-1"}}  
                                   className="d-block w-100"  
                                    src={image5}   alt="img" />  
                                       <Carousel.Caption> 
                                  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                         <Carousel.Item style={{'height':"700px", width:"100%", marginTop:'10px'}}>
                                         <h2 style={{position:'absolute', fontSize:'80px', zIndex:"1"}}>our vision</h2>  
                                 <img style={{'height':"100%", width:"700px",  opacity:"0.7", zIndex:"-1"}}  
                                        className="d-block w-100"  
                                         src={image3}  alt="img" />  
                                        <Carousel.Caption>  
                                           
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div> 




<div class="containe">
<div class="intro" style={{width:"100%"}}>
  <p class="black">Who we are</p>
  </div>
  <div class="middle">
  
    <div class="texta {fadeProp.fade}">Oracle Engineering Solutions, we provide end to end BIM (Building Information Modelling) services through
     consulting in Structural Engineering, Civil engineering, Architecture & MEP (Mechanical, Electrical and Plumbing) solutions.
      The typical project engagement runs through system selection studies, CAD contact drawings, working out specifications,
       preliminary cost estimation feasibility mapping and shop drawing review to host of construction phase services</div>
      
  </div>
</div>


                                <div className="colContainer">

                                <h1 className="variant" >OUR SERVICES</h1>

                                <div className="rowContainer">

            <div className="containerHome">
            <div class="card">
  <img class="card-img-top" src="..." alt="Carcap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
              </div>

            <div className="containerHome">
            <div class="card">
  <img class="card-img-top" src="..." alt="Carcap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
              </div>

            <div className="containerHome" >
                      <div class="card">
  <img class="card-img-top" src="..." alt="Carcap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
            </div>                          
                                      
     
     
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