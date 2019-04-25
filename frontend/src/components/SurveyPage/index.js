import React, {Component} from 'react';
import Survey from './Survey';
import Intro from './Intro.js';
import Result from './Result.js';
import Image from "./logo.png";

export default class SurveyPage extends Component {
 constructor(props) {
   super(props)
   this.state = {
     showIntro: true,
     showSurvey: false,
     showResult: false,
     answers: {},
     weights: {}
   }
 }
 startSurvey = () => {
   this.setState({
     showIntro: false,
     showSurvey: true
   })
 }
 endSurvey = (ans, wgt) => {
   this.setState({
     showResult: true,
     showSurvey: false,
     answers: ans,
     weights: wgt
   })
 }
 reset = () => {
   this.setState({
     showIntro: true,
     showResult: false,
     showSurvey: false,
     answers: {},
     weights: {}
   })
 }
 render() {
   return(
     <div class="main_screen">
       <div class="nav_bar">
               <ul class="navigation_bar">
                   <li><a class="logo_link"><img src={Image} alt="Village Logo" class="logo_picture" style={{width:"100vw"}}/></a></li>
               </ul>
       </div>
        {this.state.showIntro && <Intro func={this.startSurvey}/>}
        {this.state.showSurvey && <Survey submit={this.endSurvey}/>}
        {this.state.showResult && <Result answers={this.state.answers} weights={this.state.weights} reset={this.reset}/>}
     </div>
   )
 }
}
