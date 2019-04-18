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
     result: {}
   }
 }
 startSurvey = () => {
   this.setState({
     showIntro: false,
     showSurvey: true
   })
 }
 endSurvey = (result) => {
   this.setState({
     showResult: true,
     showSurvey: false,
     result
   })
 }
 reset = () => {
   this.setState({
     showIntro: true,
     showResult: false,
     showSurvey: false,
     result: {}
   })
 }
 render() {
   return(
     <div style={{backgroundColor: 'purple'}}>
        <h2>Survey Page</h2>
        {this.state.showIntro && <Intro func={this.startSurvey}/>}
        {this.state.showSurvey && <Survey submit={this.endSurvey}/>}
        {this.state.showResult && <Result result={this.state.result} reset={this.reset}/>}
     </div>
   )
 }
}
