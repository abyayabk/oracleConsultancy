
import './ContactUs.css';
import { useState } from "react";
import axios from "axios";


function ContactUS() {

  
    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState(0);
    const [serviceType, setserviceType] = useState(0);
    const [email, setEmail] = useState(0);
    const [details, setDetails] = useState(0);

    
      console.log( name+" "+ phoneNumber+" "+serviceType+" "+email+" "+details);
    

    const addCustomer =() => {
      
      axios.post('http://localhost:3001/create', {
        name: name,
        phoneNumber: phoneNumber,
        serviceType: serviceType,
        email: email,
        details: details,
      }).then(() => {
          console.log("sucess");
          
      });
    };

    return (
      <div >
        <div className="details">
          <label> Name:</label>    
          <input type="text" 
          onChange={(event) => {
            setName(event.target.value);
          }}></input>
          <label>Phone number</label>
          <input type="number" onChange={(event) => {
            setphoneNumber(event.target.value);
          }}></input>
          <label>Service type</label>
          <input type="text" 
          onChange={(event) => {
            setserviceType(event.target.value);
          }}></input>
          <label>Email</label>
          <input type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}></input>
          <label>Details</label>
          <input type="text"
          onChange={(event) => {
            setDetails(event.target.value);
          }}></input>
          <button onClick={addCustomer}>Send request</button>
          
          </div>

          <div style={{marginBottom:"134px"}}></div>

      </div>
    );
  }


export default ContactUS;

/*render() {
}
  */