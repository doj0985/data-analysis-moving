import React, {Component} from 'react';
import Question from './Question';
import ProgBar from './ProgBar.js';


export default class Survey extends Component {
 constructor(props) {
   super(props)
   this.state = {
     answered: [0, 0, 0],
     questions: [
       <Question text="1" i={0} func={this.answerQuestion}/>,
       <Question text="2" i={1} func={this.answerQuestion}/>,
       <Question text="3" i={2} func={this.answerQuestion}/>
     ],
     i: 0
   }
 }
 changeQuestion = (x) => {
   this.setState({
     i: x
   });
 }
 answerQuestion = (i) => {
   var ans = this.state.answered;
   ans[i] = 1;
   this.setState({
     answered: ans
   })
 }
 render() {
   return(
     <div style={{backgroundColor: 'blue'}}>
        <h2>Survey</h2>
        <ProgBar ans={this.state.answered} i={this.state.i} func={this.changeQuestion}/>
        {
          this.state.questions[this.state.i]
        }
        {this.state.i != 0 && <button onClick={() => this.changeQuestion(this.state.i-1)}>back</button>}
        {this.state.i != this.state.questions.length-1 && <button onClick={() => this.changeQuestion(this.state.i+1)}>next</button>}
     </div>
   )
 }
}
