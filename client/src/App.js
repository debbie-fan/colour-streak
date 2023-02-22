import React from 'react';
import Router from './routes/router'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <main> 
        <Navbar />
        <Router/>
      </main>
      <footer>Last updated Feb 2023</footer>
    </div>
  );
}

export default App;
