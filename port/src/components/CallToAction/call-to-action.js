import React, { Component } from 'react';
import style from './call-to-action.jss';

class CallToAction extends Component {
  render() {
    return (
      <div style={style.callToActionContainer}>
        <div style={style.callToAction}>
          <div style={style.bar}></div>
          <div style={style.bigHeader}>
            Let's share ideas
          </div>
          <div style={style.smallHeader}>
            Feel free to reach me anytime
          </div>
          <div style={style.button}>
            <div style={style.buttonText}>
              SEND AN EMAIL
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
