import React, {Component} from 'react';
import Question from './Question';
import ProgBar from './ProgBar.js';


export default class Survey extends Component {
 constructor(props) {
   super(props)
   this.state = {
     answered: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     answers: {},
     weights: {},
     questions: [
       {title: "Majority Age", text:"Which age group are you looking to live around?", response:0, weight:1},
       {title: "Neighborhood Size", text:"About what size neighborhood would you like?", response:0, weight:1},
       {title: "House Size", text:"What size of house fits you?", response:0, weight:1},
       {title: "Family Percentage", text:"What percentage of your neighbors would you like to be families?", response:0, weight:1},
       {title: "Vacancy", text:"How much vacancy would you like in the area?", response:0, weight:1},
       {title: "Income", text:"What income group would you like to live around?", response:0, weight:1},
       {title: "Rent", text:"What average rent would you prefer?", response:0, weight:1},
       {title: "Home Value", text:"Which home value suits you?", response:0, weight:1},
       {title: "Transit Closeness", text:"How close would you like to be to public transit?", response:0, weight:1},
       {title: "Transit Cost", text:"About how much would you want to spend monthly on transit?", response:0, weight:1},
       {title: "Rent Increase", text:"Which rate of rent inflation would you like?", response:0, weight:1},
       {title: "Home Value Increase", text:"Which rate of home value inflation would you like?", response:0, weight:1},
       {title: "Density", text:"How dense would you like the area to be?", response:0, weight:1}
     ],
     i: 0
   }
 }
 changeQuestion = (x) => {
   this.setState({
     i: x
   });
 }
 answerQuestion = (i, title, answer, weight) => {
   var ansrd = this.state.answered;
   ansrd[i] = 1;
   var ansrs = this.state.answers;
   ansrs[title] = answer;
   var weights = this.state.weights;
   weights[title] = weight;
   var questions = this.state.questions;
   questions[i]['response'] = answer;
   questions[i]['weight'] = weight;
   if (i < this.state.questions.length-1){
     this.setState({
       answered: ansrd,
       answers: ansrs,
       i: i+1,
       questions: questions,
       weights: weights
     })
   } else {
     this.setState({
       answered: ansrd,
       answers: ansrs,
       questions: questions,
       weights: weights
     })
     this.props.submit(this.state.answers, this.state.weights)
   }
 }
 render() {
   return(
     <div class="survey_frame">
        <Question key={this.state.i} title = {this.state.questions[this.state.i]['title']} text={this.state.questions[this.state.i]['text']} i={this.state.i} func={this.answerQuestion} response={this.state.questions[this.state.i]['response']} weight={this.state.questions[this.state.i]['weight']}/>
        {this.state.i != 0 && <button onClick={() => this.changeQuestion(this.state.i-1)}>back</button>}
        {this.state.i != this.state.questions.length-1 && <button onClick={() => this.changeQuestion(this.state.i+1)}>skip</button>}
        {this.state.i == this.state.questions.length-1 && <button onClick={() => this.props.submit(this.state.answers, this.state.weights)}>finish</button>}
        <ProgBar ans={this.state.answered} i={this.state.i} func={this.changeQuestion}/>
     </div>
   )
 }
}
