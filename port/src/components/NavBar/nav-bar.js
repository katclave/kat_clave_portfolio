import React, { Component } from 'react';
import style from './nav-bar.jss';
//import Menu from '@material-ui/icons/Menu.js';

class NavBar extends Component {

  navOrHamburger = () => {
    if(window.innerWidth > 600) {
      return (
        <div style={style.aboutAndResume}>
          <div style={style.about}>
            About
          </div>
          <div style={style.resume}>
            Resume
          </div>
        </div>
      )
    } else {
      return (
        <div style={style.hamburger}>
          X
        </div>
      )
    }
  }

  render() {
    const mobile = window.innerWidth > 600
      ? false
      : true
    return (
      <div style={style.navBarBody}>
        <div style={style.nameAndLogo}>
          <div style={style.logo}>
            X
          </div>
          <div style={
            mobile
            ? style.mobileName
            : style.name
          }>
            KAT CLAVE
          </div>
        </div>
        <div>
          {this.navOrHamburger()}
        </div>

      </div>
    );
  }
}

export default NavBar;
