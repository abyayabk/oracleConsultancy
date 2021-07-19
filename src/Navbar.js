import React from 'react' ;
import { Link } from 'react-router-dom';
import './Navbar.css';



    
   


function Navbar()
{
    return(
        <>
        <nav>
     <div class="container">

  
         
        <ul style={{marginLeft:"50%"}}>
            
            

            <Link to ="/" className="text">Home</Link>
            
                     
            <Link to ="/Experiences" className="text">Experiences</Link>
            
            
            <Link to ="/ContactUs" className="text">Contact Us</Link>
                
        </ul>
    </div>
    </nav>
        
       
        
   </>
    );
}

export default Navbar;