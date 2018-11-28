import React, { Component } from 'react';
import style from './about-picture.jss.js'
import Kat from './me.png'

class AboutPicture extends Component {
  render() {
    return (
      <div>
          <img src={Kat} style={style.Kat}/>
      </div>
    );
  }
}

export default AboutPicture;
