import React, {Component} from 'react';
import Input from './Input.js';

export default class Question extends Component {
 constructor(props) {
   super(props)
   this.state = {
     response: this.props.value
   }
 }
 componentDidMount(){
   this.setState({
     response: ""
   })
 }
 componentWillUnmount(){
   this.setState({
     response: ""
   })
 }
 handleChange = (event) => {
   this.setState({
     response: event.target.value
   })
 }
 render() {
   return(
     <div style={{backgroundColor: 'red'}}>
      <h2>{this.props.title}</h2>
      {this.props.text}
      <br/>
      <input id={this.props.title} name={this.props.title} onChange={this.handleChange} value={this.state.response}/>
      // <Input handleChange={this.handleChange} title={this.props.title} value={this.props.value}/>
      {this.state.response}
      <br/>
      <button onClick={() => this.props.func(this.props.i, this.props.title, this.state.response)}>submit</button>
     </div>
   )
 }
}
