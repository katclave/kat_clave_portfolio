import React, { Component } from 'react';
import style from './nav-bar.jss';
import ReactSVG from 'react-svg'
import Menu from '@material-ui/icons/Menu.js';
import logo from './logo.svg'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state={
      hamburgerOpen: false
    }
  }

  openHamburger = () => {

  }

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
          <Menu
            onClick={this.openHamburger}
          />
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
          <div style={style.logoContainer}>
            <img src={logo} style={style.logo}/>
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
