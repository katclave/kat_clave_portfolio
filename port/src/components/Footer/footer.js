import React, { Component } from 'react';
import style from './footer.jss.js'
import logo from '../../logo/logo.svg'

class CallToAction extends Component {
  render() {
    return (
      <div style={style.footer}>
        <div style={style.nameAndLogo}>
          <div style={style.logoContainer}>
            <img src={logo} style={style.logo}/>
          </div>
          <div style={style.name}>
            KAT CLAVE
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
