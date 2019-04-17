import React, {Component} from 'react';

export default class Question extends Component {
 constructor(props) {
   super(props)
   this.state = {}
 }
 render() {
   return(
     <div style={{backgroundColor: 'red'}}>
      <h1>Question</h1>
      {this.props.text}
      <br/>
      <button onClick={() => this.props.func(this.props.i)}>answer</button>
     </div>
   )
 }
}
