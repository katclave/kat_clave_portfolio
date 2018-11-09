import React, { Component } from 'react';
import style from './design-process.jss';
import DesignProcessImage from './design-process-image-web.png';

class DesignProcess extends Component {
  render() {
    return (
      <div style={style.designProcess}>
      <div style={style.bar}></div>
        <div style={style.top}>
          <div style={style.headers}>
            <div style={style.smallHeader}>
              The Approach
            </div>
            <div style={style.bigHeader}>
              Design Process
            </div>
          </div>
          <div style={style.paragraph}>
            I approach design challenges by first understanding the problem we want to solve. I define the most efficient solution and take steps to craft the product. Throughout the process I test the efficiency of my design decisions and reiterate where ever needed until a polished product solves the problem.
          </div>
        </div>
        <div style={style.bottom}>
          <img src={DesignProcessImage}></img>
        </div>
      </div>
    );
  }
}

export default DesignProcess;
