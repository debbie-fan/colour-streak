import React from 'react';
import Navbar from './components/Navbar';
// import ColourGame from './components/ColourGame';
import Login from './components/Login';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        {/* <ColourGame /> */}
        <Login />
      </main>
      <footer>Last updated 2023</footer>
    </div>
  );
}

export default App;
