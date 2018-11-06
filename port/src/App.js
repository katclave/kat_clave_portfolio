import React, { Component } from 'react';
import NavBar from './components/NavBar/nav-bar.js'
import Hero from './components/Hero/hero.js'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
      </div>
    );
  }
}

export default App;
