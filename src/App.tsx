import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Hero from './components/Hero';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work/> } />
      </Routes>
      <Hero/>
    </Router>
  );
}

export default App;
