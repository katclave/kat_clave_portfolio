import React, { Component } from 'react';
import NavBar from './components/NavBar/nav-bar.js'
import Hero from './components/Hero/hero.js'
import CaseStudy from './components/CaseStudy/case-study.js'
import CaseStudyPage from './components/CaseStudyPage/case-study-page.js'
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
      aboutClicked: false,
      caseStudyClicked: false,
      view: 'mobile'
    }
  }

  handleCaseStudyClicked = (hasBeenClicked) => {
    this.setState({
      caseStudyClicked: hasBeenClicked
    })
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
    if(window.innerWidth > 600) {
      this.setState({
        view: 'desktop'
      })
    } else {
      this.setState({
        view: 'mobile'
      })
    }
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <NavBar
          handleAboutClicked={this.handleAboutClicked}
          handleCaseStudyClicked={this.handleCaseStudyClicked}
          aboutClicked={this.state.aboutClicked}
          view={this.state.view}
        />
        {!this.state.aboutClicked
          ? this.state.caseStudyClicked
            ? <CaseStudyPage
                handleCaseStudyClicked={this.handleCaseStudyClicked}
                view={this.state.view}
              />
            : <div>
                <Hero />
                <CaseStudy
                  handleCaseStudyClicked={this.handleCaseStudyClicked}
                  view={this.state.view}
                />
              </div>
          : <About view={this.state.view}/>
        }
        <CallToAction view={this.state.view} />
        <Footer view={this.state.view} />
      </div>
    );
  }
}

export default App;
