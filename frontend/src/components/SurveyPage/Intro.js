import React, {Component} from 'react';

export default class Intro extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 render() {
   return(
     <div style={{backgroundColor: 'orange'}}>
        <h2>Welcome to Survey</h2>
        <button onClick={() => this.props.func()}>Start</button>
     </div>
   )
 }
}
