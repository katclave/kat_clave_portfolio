import React, { Component } from 'react';
import style from './about-body.jss'

class AboutBody extends Component {
  render() {
    return (
      <div>
        <div style={style.bar}></div>
        <div style={style.smallHeader}>
          ABOUT ME
        </div>
        <div style={style.bigHeader}>
          Hi, I’m Kat. I’m a designer.
        </div>
            <div style={style.paragraph}>I draw upon a creative background with roots in a variety of mediums. I discovered a passion to create at an early age and have continued to nurture my creativity by exploring different aspects of my core skillset.
In my 3 years experience of graphic design, I became disciplined in design principles and fundamental elements of design. This has helped establish my foundation in user experience design and extends my abilities to craft effective solutions.
I really love the challenges and constraints of designing with empathy to solve a problem and the whole entire process to get there. Let's collaborate!


          </div>




      </div>
    );
  }
}

export default AboutBody;
