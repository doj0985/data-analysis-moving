import React, {Component} from 'react';

export default class Result extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 render() {
   return(
     <div style={{backgroundColor: 'orange'}}>
        <h2>Good job, you're done.</h2>
        {
          Object.keys(this.props.answers).map(
            function(title, i){
              return <div><span>{title}: </span><span>{this.answers[title]}</span></div>
            },
            {
              answers: this.props.answers
            }
          )
        }
        <button onClick={this.props.reset}>return to intro</button>
     </div>
   )
 }
}
