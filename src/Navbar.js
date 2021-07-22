import React from 'react' ;
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Logo.jpg';



    
   


function Navbar()
{
    return(
        <>
        <nav>
     <div>   
        <ul>
        <Link to ="/" >
            <div className="left" >
            <img src={logo} alt='logo' />
                <p>Oracle Engineering Solutions</p>
                </div>
                </Link>

            <div className="right">
             <Link to ="/" className="text">home</Link>
             <Link to ="/Experiences" className="text">experiences</Link>
             <Link to ="/ContactUs" className="text">contact us</Link> 
            
            
                     
           
            
            
            
            </div>  
        </ul>
    </div>
    </nav>
        
       
        
   </>
    );
}

export default Navbar;