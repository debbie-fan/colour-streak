import React, { Component } from 'react';
import Router from './routes/router'
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='app'>
        <main> 
          <Navbar />
          <Router/>
          <p className='App-intro'>{this.state.apiResponse}</p>
        </main>
        <footer>Last updated Feb 2023</footer>
      </div>
    );
  }
}

export default App;
