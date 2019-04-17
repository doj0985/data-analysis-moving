import React, {Component} from 'react';
import Question from './Question';
import ProgBar from './ProgBar.js';


export default class Survey extends Component {
 constructor(props) {
   super(props)
   this.state = {
     answered: [0, 0, 0],
     answers: {},
     questions: [
       {title: "q1", text:"1"},
       {title: "q2", text:"2"},
       {title: "q3", text:"3"}
       // <Question title = "q1" text="1" i={0} func={this.answerQuestion}/>,
       // <Question title = "q2" text="2" i={1} func={this.answerQuestion}/>,
       // <Question title = "q3" text="3" i={2} func={this.answerQuestion}/>
     ],
     i: 0
   }
 }
 changeQuestion = (x) => {
   this.setState({
     i: x
   });
 }
 answerQuestion = (i, title, answer) => {
   var ansrd = this.state.answered;
   ansrd[i] = 1;
   var ansrs = this.state.answers;
   ansrs[title] = answer;
   this.setState({
     answered: ansrd,
     answers: ansrs
   })
 }
 render() {
   return(
     <div style={{backgroundColor: 'blue'}}>
        <h2>Survey</h2>
        <ProgBar ans={this.state.answered} i={this.state.i} func={this.changeQuestion}/>
        <Question title = {this.state.questions[this.state.i]['title']} text={this.state.questions[this.state.i]['text']} i={this.state.i} func={this.answerQuestion} value=""/>
        {this.state.i != 0 && <button onClick={() => this.changeQuestion(this.state.i-1)}>back</button>}
        {this.state.i != this.state.questions.length-1 && <button onClick={() => this.changeQuestion(this.state.i+1)}>next</button>}
        {this.state.i == this.state.questions.length-1 && <button onClick={() => this.props.submit(this.state.answers)}>submit</button>}
     </div>
   )
 }
}
