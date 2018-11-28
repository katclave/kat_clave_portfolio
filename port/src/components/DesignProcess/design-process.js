import React, { Component } from 'react';
import style from './design-process.jss';
import DesignProcessImage from './designProcess1.png';

class DesignProcess extends Component {
  render() {
    return (
      <div style={style.designProcess}>
      <div style={style.bar}></div>
        <div style={style.top}>
          <div style={style.headers}>
            <div style={style.smallHeader}>
              THE APPROACH
            </div>
            <div style={style.bigHeader}>
              DESIGN PROCESS
            </div>
          </div>
          <div style={style.paragraph}>
          I approach the design process with cognitive empathy and a deep attentiveness to user input. Are we asking the right questions? Or identifying the correct problem? Our users will always help determine the right direction, and collaborating with them will guide us to an efficient product that works for them.


          I ground myself in understanding and gaining perspective and throughouly embracing each stage of the design process with an open mind to change and re-iteration. I love the challenge of implementing results that is represented through visual unity and design.
          Although no two projects are the same, I follow a very straightforward process that leads me to effective solutions.

          </div>
        </div>
        <div>
          <img src={DesignProcessImage} style={style.image}/>
        </div>
      </div>
    );
  }
}

export default DesignProcess;
