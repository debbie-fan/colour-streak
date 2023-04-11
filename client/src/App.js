import React, { Component } from 'react';
import Router from './routes/router'
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='app'>
        <main> 
          <Navbar />
          <Router/>
          {/* <p className='App-intro'>{this.state.apiResponse}</p> */}
        </main>
        <footer>Created by Debbie Fan</footer>
      </div>
    );
}

export default App;