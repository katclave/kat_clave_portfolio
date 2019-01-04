import React, { Component } from 'react';
import style from './case-study.jss';
import CaseStudyImage from './case-study-image.png'

class CaseStudy extends Component {
  constructor(props){
    super(props)
    this.state={
      caseStudyPageOpen: false
    }
  }
  render() {
    return (
      <div
        onClick={(() => {
          this.props.handleCaseStudyClicked(true)
        })}
        style={style.caseStudy}>
        <div style={style.bar}></div>
        <div style={style.smallHeader}>
          CASE STUDY
        </div>
        <div style={style.bigHeader}>
          BOX OFFICE
        </div>
        <div>
          <img src={CaseStudyImage} style={style.image}/>
        </div>
      </div>
    );
  }
}

export default CaseStudy;
