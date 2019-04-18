import React, {Component} from 'react';
import Question from './Question';
import ProgBar from './ProgBar.js';


export default class Survey extends Component {
 constructor(props) {
   super(props)
   this.state = {
     answered: [0, 0, 0],
     answers: [],
     titles : ['q1','q2','q3'],
     questions: ['1','2','3'],
     i: 0
   }
 }
 changeQuestion = (x) => {
   this.setState({
     i: x
   });
 }

 onChange = (event) => {
   let answers = [...this.state.answers]
   answers[event.target.name] = event.target.value
   this.setState({answers})
 }

 answerQuestion = (i, answer) => {
   let ansrd = [...this.state.answered];
   ansrd[i] = 1;
   var ansrs = [...this.state.answers];
   ansrs[i] = answer;
   this.setState({
     answered: ansrd,
     answers: ansrs
   })
 }
 render() {
   const {i,questions,titles,answers,answered} = this.state;
   return(
     <div style={{backgroundColor: 'blue'}}>
        <h2>Survey</h2>
        <ProgBar ans={answered} i={i} func={this.changeQuestion}/>
        <Question 
          title = {titles[i]} 
          text={questions[i]} 
          key={i} 
          onSubmit={this.answerQuestion}
          onChange={this.onChange}
        />
        {i != 0 && 
          <button onClick={() => this.changeQuestion(i-1)}>
            back
          </button>
        }
        {i != questions.length-1 && 
          <button onClick={() => this.changeQuestion(i+1)}>
            next
          </button>
        }
        {i == questions.length-1 && 
          <button onClick={() => this.props.submit({titles,questions,answers})}>
          submit
          </button>
        }
     </div>
   )
 }
}
