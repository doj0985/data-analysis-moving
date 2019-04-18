import React, {Component} from 'react';

export default class Result extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 render() {
   const {titles,questions,answers} = this.props.result;
   return(
     <div style={{backgroundColor: 'orange'}}>
        <h2>Good job, you're done.</h2>
        {
          questions.map(
            function(question, i){
              return (
                <div key={i}>
                  <span>{titles[i]}: </span>
                  <span>{answers[i]}</span>
                </div>
              )
            }
          )
        }
        <button onClick={this.props.reset}>return to intro</button>
     </div>
   )
 }
}
