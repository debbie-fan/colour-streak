import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ColourGame from './components/ColourGame';
import Login from './components/Login';
import About from './components/About';
import ColourTheory from './components/ColourTheory';

function App() {
  return (
    <div className='app'>
      <main> 
        <Navbar />
        <Routes>
          <Route path="/" element={ <ColourGame/> } />
          <Route path="colour-theory" element= { <ColourTheory/> } />
          <Route path="colour-game" element= { <ColourGame/> } />
          <Route path="about" element={ <About/> } />
          <Route path="login" element={ <Login/> } />
        </Routes>
      </main>
      <footer>Last updated Feb 2023</footer>
    </div>
  );
}

export default App;
