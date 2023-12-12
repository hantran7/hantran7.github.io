import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Bio from './sections/Bio';
import Contact from './sections/Contact';
import Work from './sections/Work';
import Hero from './components/Hero';
import UICourse from './pages/UICourse';
import StockednStacked from './pages/StockednStacked';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
          <Hero />
            <div id="about"><Bio /></div>
            <div id="work"><Work /></div>
            <div id="contact"><Contact /></div>
          </>
        } />
        <Route path="/ui-course" element={<UICourse />} />
        <Route path="/stocked-&-stacked" element={<StockednStacked />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
