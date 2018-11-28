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
            <div style={style.paragraph}><b>I love being a designer.</b> I love the process and constraints of design. I love advocating for those I design for. I love designing to solve problems. And I love creating an experience for those interacting with what I design. I love everything about design, but what was my path to get here?
          </div>

            <div style={style.paragraph}><b>I draw upon a creative background</b> with roots in a variety of mediums. I discovered a passion to create at an early age and continued to nurture my creative side by exploring different aspects of my core skillset. I find myself always pivoting and searching to extend my abilities and express my creativity in new and different ways.
          </div>

            <div style={style.paragraph}><b>I became exposed to purpose driven design</b> while working in restaurants. Here, I was exposed to how visual communication and design can influence consumer decisions through promotional marketing material. This sparked my analytical side and determined to implement and challenege my creativity. I found opportunities to meet with restaurant executive leadership and designed my own creative solutions and marketing material that helped drive their sales. I loved that my creativity was a solution to a problem and how it impacted and communicated with people.
          </div>

          <div style={style.paragraph}><b>I'm always determined to learn.</b> My new found interest of purpose driven solutions led me to user experience design. I continued an education in UX design that has taught me the skills to communicate and empathize with users and the various stages of the UX / UI design process. I thrive from the challenges of acheiving visual unity while implementing user input, and have found that ux design utilizes various aspects of my core skillset. This personally has made being a ux designer a very exciting and enriching role. My journey and background has given me a unique perspective of the UX process, and I am very eager to continue to push my boundaries and excited to see the future of design.
          </div>




      </div>
    );
  }
}

export default AboutBody;
