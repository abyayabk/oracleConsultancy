import React, { Component } from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Route,
}from 'react-router-dom';
import HomePage from './pages/HomePage';
import Experiences from './pages/Experiences';
import ContactUs from './pages/ContactUs';
import Navbar from './Navbar';

function App() {
 
    return (
      <Router>
        
        <div className="App">
        <Navbar />
          <div id="page-body">
          <Route path="/" component ={HomePage} exact />
        <Route path="/Experiences" component ={Experiences} /> 
        <Route path="/ContactUS" component ={ContactUs} />  
          </div>
            
        </div>
      </Router>
     
    );
  
}

export default App;
                                    