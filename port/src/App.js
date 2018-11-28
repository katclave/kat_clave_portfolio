import React, { Component } from 'react';
import NavBar from './components/NavBar/nav-bar.js'
import Hero from './components/Hero/hero.js'
import CaseStudy from './components/CaseStudy/case-study.js'
import DesignProcess from './components/DesignProcess/design-process.js'
import CallToAction from './components/CallToAction/call-to-action.js'
import Footer from './components/Footer/footer.js'
import About from './components/About/about.js'

//import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      aboutClicked: false
    }
  }

  handleAboutClicked = (hasBeenClicked) => {
    this.setState({
      aboutClicked: hasBeenClicked
    })
  }

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
        <NavBar
          handleAboutClicked={this.handleAboutClicked}
          aboutClicked={this.state.aboutClicked}
        />
        {!this.state.aboutClicked
          ?
          <div>
            <Hero />
            <CaseStudy />
            <DesignProcess />
          </div>
          : <About />
        }
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default App;
