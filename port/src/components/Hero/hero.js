import React, { Component } from 'react';
import Contact from '../Contact/contact.js'
import style from './hero.jss';
import logo from '../../logo/logo.svg';
import locationIcon from './location-icon.png';
import arrowIcon from './arrow-icon.png';

//import Menu from '@material-ui/icons/Menu.js';
  //TODO escape char in LETS

class Hero extends Component {
  constructor(props){
    super(props)
    this.state={
      contactModalIsOpen: false
    }
  }

  openContact = () => {
    this.setState({
      contactModalIsOpen: true
    })
  }

  closeContact = () => {
    this.setState({
      contactModalIsOpen: false
    })
  }

  render() {
    return (
      <div style={style.hero}>
        <div>
          <div style={style.header}>
            I’m a Product Designer<br></br>
            focused on solution driven <br></br>
            and interactive experiences
          </div>
          <div style={style.location}>

          <div>
          <img src={locationIcon} style={style.locationIcon}/>
          </div>
            <div style={style.locationIcon}>

            </div>
            <div style={style.locationPlace}>
              Bentonville, AR
            </div>
          </div>
          <div
            onClick={this.openContact}
            style={style.connectButton}
          >
            <div style={style.connectText}>
              LETS CONNECT
            </div>

            <div>
            <img src={arrowIcon} style={style.arrowIcon}/>
            </div>
          </div>
        </div>
        <Contact
          isOpen={this.state.contactModalIsOpen}
          closeModal={this.closeContact}
        />
      </div>
    );
  }
}

export default Hero;
