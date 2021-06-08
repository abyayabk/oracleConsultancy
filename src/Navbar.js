import React from 'react' ;
import HomePage from './pages/HomePage';
import { Link } from 'react-router-dom';
import './Navbar.css';


    
   
 
var fs = "italic";

function Navbar()
{
    return(
        <div className="Navbar">
        <nav>
        <ul > 
            <Link to ="/" className="text">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     
            <Link to ="/Experiences" className="text">Experiences</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <Link to ="/ContactUs" className="text">Contact Us</Link>
                
        </ul>
         </nav>
        </div>
   
    );
}

export default Navbar;