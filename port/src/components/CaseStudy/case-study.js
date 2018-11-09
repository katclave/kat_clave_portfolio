import React, { Component } from 'react';
import style from './case-study.jss';
import CaseStudyImage from './case-study-image.png'

class CaseStudy extends Component {
  render() {
    return (
      <div style={style.caseStudy}>
        <div style={style.bar}></div>
        <div style={style.smallHeader}>
          Case Study
        </div>
        <div style={style.bigHeader}>
          Box Office
        </div>
        <div>
          <img src={CaseStudyImage} style={style.image}/>
        </div>
      </div>
    );
  }
}

export default CaseStudy;
