import React, { Component } from 'react';
import './styles/App.css';
import Nav from './views/Nav';
import About from './views/About';
import Footer from './views/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
