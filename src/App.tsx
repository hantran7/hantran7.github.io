import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bio from './sections/Bio';
import Contact from './sections/Contact';
import Work from './sections/Work';
import Hero from './components/Hero';



function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div id="home">
        <Bio />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
