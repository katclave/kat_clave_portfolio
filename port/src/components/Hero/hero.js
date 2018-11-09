import React, { Component } from 'react';
import style from './hero.jss';
//import Menu from '@material-ui/icons/Menu.js';

class Hero extends Component {
  //TODO escape char in LETS
  render() {
    return (
      <div style={style.hero}>
        <div style={style.header}>
          I’m a Product Designer
          focused on solution driven and interactive experiences
        </div>
        <div style={style.location}>
          <div style={style.locationIcon}>
            X
          </div>
          <div style={style.locationPlace}>
            Bentonville, AR
          </div>
        </div>
        <div style={style.connectButton}>
          <div style={style.connectText}>
            LETS CONNECT
          </div>
          <div style={style.connectIcon}>
            X
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
