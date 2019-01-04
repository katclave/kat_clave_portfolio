import React, { Component } from 'react';
import style from './case-study-page.jss.js'

class CaseStudyPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={style.caseStudyPage}>
        <div style={style.mainHeader[this.props.view]}>
          <div style={style.bar[this.props.view]}></div>
          <div style={style.caseStudy[this.props.view]}>
            CASE STUDY
          </div>
          <div style={style.boxOffice[this.props.view]}>
              BOX OFFICE
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudyPage;
