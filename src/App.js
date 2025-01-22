
import './App.css';
import React from 'react';
import Navbar from './Conponents/Navbar';
import Header from './Conponents/Header';
import Features from './Conponents/Features';
import Offer from './Conponents/Offer';
import About from './Conponents/About';
import Contact from './Conponents/Contact';


function App() {
  return (
   <div className='App'>
    <Navbar/>
    <Header/>
    <Features/>
    <Offer/>
    <About/>
    <Contact/>
    
   
  </div>
  )
}

export default App;
