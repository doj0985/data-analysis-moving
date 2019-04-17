import React, {Component} from 'react';
import Survey from './Survey';
import Intro from './Intro.js';
import Result from './Result.js';

export default class SurveyPage extends Component {
 constructor(props) {
   super(props)
   this.state = {
     showIntro: true,
     showSurvey: false,
     showResult: false,
     answers: {}
   }
 }
 startSurvey = () => {
   this.setState({
     showIntro: false,
     showSurvey: true
   })
 }
 endSurvey = (ans) => {
   this.setState({
     showResult: true,
     showSurvey: false,
     answers: ans
   })
 }
 reset = () => {
   this.setState({
     showIntro: true,
     showResult: false,
     showSurvey: false,
     answers: {}
   })
 }
 render() {
   return(
     <div style={{backgroundColor: 'purple'}}>
        <h2>Survey Page</h2>
        {this.state.showIntro && <Intro func={this.startSurvey}/>}
        {this.state.showSurvey && <Survey submit={this.endSurvey}/>}
        {this.state.showResult && <Result answers={this.state.answers} reset={this.reset}/>}
     </div>
   )
 }
}
