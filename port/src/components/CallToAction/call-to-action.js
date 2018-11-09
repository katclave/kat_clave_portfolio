import React, { Component } from 'react';
import style from './call-to-action.jss';

class CallToAction extends Component {
  render() {
    return (
      <div style={style.callToActionContainer}>
        <div style={style.callToAction}>
          <div style={style.bar}></div>
          <div style={style.bigHeader}>
            Big Header
          </div>
          <div style={style.smallHeader}>
            Small Header
          </div>
          <div style={style.button}>
            <div style={style.buttonText}>
              Connect
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
