import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './nav-bar.jss';
import ReactSVG from 'react-svg'
import Menu from '@material-ui/icons/Menu.js';
import logo from '../../logo/logo.svg';
import pdf from '../../resume/KatClaveResume.pdf'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state={
      hamburgerOpen: false
    }
  }

  openHamburger = () => {
    console.log('Open Hamburger')
  }

  openResume = () => {

  }

  handleHeroAbout = () => {
    if(this.props.aboutClicked === true){
      this.props.handleAboutClicked(false)
    } else {
      this.props.handleAboutClicked(true)
    }
  }

  navOrHamburger = () => {
    if(window.innerWidth > 600) {
      return (
        <div style={style.aboutAndResume}>
          <div
            style={style.about}
            onClick={this.handleHeroAbout}
            >
            {this.props.aboutClicked
              ? <div> Home </div>
              : <div> About </div>
            }
          </div>
          <div
            onClick={this.openResume}
            style={style.resume}
            >
              <a href = {pdf} style={style.resume} target = "_blank">Resume</a>
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
