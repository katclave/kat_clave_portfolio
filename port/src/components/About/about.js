import React, { Component } from 'react';
import style from './about.jss.js'
import AboutPicture from './components/AboutPicture/about-picture.js'
import AboutBody from './components/AboutBody/about-body.js'

class About extends Component {
  render() {
    return (
      <div style={style.about}>
        <AboutPicture />
        <AboutBody />
      </div>
    );
  }
}

export default About;
