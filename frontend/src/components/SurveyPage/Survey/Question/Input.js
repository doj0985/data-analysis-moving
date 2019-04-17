import React, {Component} from 'react';

export default class Input extends Component {
 constructor(props) {
   super(props)
   this.state = {
     response: ""
   }
 }
 render() {
   return(
      <input id={this.props.title} name={this.props.title} onChange={this.props.handleChange} value={this.props.response}/>
   )
 }
}
