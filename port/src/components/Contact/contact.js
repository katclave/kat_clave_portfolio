import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import style from './contact.jss.js';
import logo from '../../logo/logo.svg';
import emailIcon from './icons/email-icon.png';
import facebookIcon from './icons/facebook-icon.png';
import instagramIcon from './icons/instagram-icon.png';
import linkedInIcon from './icons/linkedin-icon.png'
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
  closeModal = () => {
    this.props.closeModal()
  }
  render() {
    return (
      <div>
        <Modal
          open={this.props.isOpen}
          onClose={this.closeModal}
        >
          <div style={style.contactModal}>
            <div style={style.leftSide}>


              <img src={logo} style={style.logo}/>


            </div>
            <div style={style.rightSide}>
              <div style={style.bar}></div>
              <div style={style.header}>
                CONNECT
              </div>
              <div style={style.iconsContainer}>
                <a href="mailto: katclave@gmail.com">
                  <img style={style.icon} src={emailIcon}/>
                </a>
                <SocialIcon style={style.icon} color="#494949" url="https://www.linkedin.com/in/katclave/"/>
                <SocialIcon style={style.icon} color="#494949" url="https://www.facebook.com/kat.clave"/>
                <SocialIcon style={style.icon} color="#494949" url="https://www.instagram.com/katclave/"/>
              </div>
              <div style={style.contactHeadline}>
              Or feel free to reach me anytime
              </div>
              <div style={style.contactInfo}>
              katclave@gmail.com
              </div>
              <div style={style.contactInfo}>
              (562) 881 - 1080
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Contact;
