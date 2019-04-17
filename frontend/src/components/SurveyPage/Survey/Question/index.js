import React, {Component} from 'react';
import Input from './Input.js';

export default class Question extends Component {
 render() {
   return(
     <div style={{backgroundColor: 'red'}}>
      <h2>{this.props.title}</h2>
      {this.props.text}
      <br/>
      <input name={this.props.i} onChange={this.props.onChange}/>
      {this.props.answer}
      <br/>
      <button onClick={this.props.onSubmit}>submit</button>
     </div>
   )
 }
}
