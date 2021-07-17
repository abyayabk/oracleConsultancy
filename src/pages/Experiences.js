import React from 'react';
import './Experiences.css';
import { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import image1 from './10.jpg';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import image6 from './6.png';
import image7 from './7.png';

const Experiences = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);
    const toggle4 = () => setIsOpen4(!isOpen4);
    const toggle5 = () => setIsOpen5(!isOpen5);
    const toggle6 = () => setIsOpen6(!isOpen6);
    return (
      <div className="flex">
          <div className="flexitem">      
          <Button className="buttons"  onClick={toggle} style={{ marginBottom: '1rem' }}>Residential Building, Budhanilkantha</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody className="card">
            Complete end to end BIM service for Residential Building of Ms. Rojina Shrestha, Budhanilkantha (incl., structural, architecture and MEP design)
            <img style={{'height':"100%", width:"700px"}} src={image1}    />
            </CardBody>
          </Card>
        </Collapse>
        </div>
        <div className="flexitem">      
        <Button className="buttons" onClick={toggle1} style={{ marginBottom: '1rem' }}>View Point Tower, Nawalpur</Button>
        <Collapse isOpen={isOpen1}>
          <Card>
            <CardBody>
            	Complete 3D Design of View Point Tower, Nawalpur
              <img style={{'height':"100%", width:"700px"}} src={image2}    />
            </CardBody>
          </Card>
        </Collapse>
        <Button className="buttons" onClick={toggle2} style={{ marginBottom: '1rem' }}>Office Space of Himstar Electronics, Bhairawa</Button>
        <Collapse isOpen={isOpen2}>
          <Card>
            <CardBody>
            Interior Design and Supply of Furniture for Bhairawa Office, Himstar Electronics
              <img style={{'height':"100%", width:"700px"}} src={image3}    />
            </CardBody>
          </Card>
        </Collapse>
        <Button className="buttons" onClick={toggle3} style={{ marginBottom: '1rem' }}>Residential Building, Bhardev-Lele</Button>
        <Collapse isOpen={isOpen3}>
          <Card>
            <CardBody>
            	Site Survey and Architectural Design of 3-storey Residential Building at Bhardev, Lele Municipality
              <img style={{'height':"100%", width:"700px"}} src={image4}    />
            </CardBody>
          </Card>
        </Collapse>
        <Button className="buttons" onClick={toggle4} style={{ marginBottom: '1rem' }}>3D-Concept for Shopping Store , Lazimpat</Button>
        <Collapse isOpen={isOpen4}>
          <Card>
            <CardBody>
    	Architectural Design of shopping store for EVOKE, Lazimpat
              <img style={{'height':"100%", width:"700px"}} src={image5}    />
            </CardBody>
          </Card>
        </Collapse>
        <Button className="buttons" onClick={toggle5} style={{ marginBottom: '1rem' }}>Concept Layout for ProMate Body Workshop</Button>
        <Collapse isOpen={isOpen5}>
          <Card>
            <CardBody>
            Site Survey and Architectural Design of ProMate Body Workshop
              <img style={{'height':"100%", width:"700px"}} src={image6}    />
            </CardBody>
          </Card>
        </Collapse>
        <Button className="buttons" onClick={toggle6} style={{ marginBottom: '1rem' }}>Residential Building, Kamalpokhari</Button>
        <Collapse isOpen={isOpen6}>
          <Card>
            <CardBody>
            Concept Layout and Interior Design of Residential Building, Kamalpokhari
              <img style={{'height':"100%", width:"700px"}} src={image7}    />
            </CardBody>
          </Card>
        </Collapse>
        </div>
        
        
      </div>
    );
  }
  
  export default Experiences;


  

/*function Experiences() 
{
    return(
  
  );
}

export default Experiences;*/