import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Neighborhood extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 render() {
   return(
     <section id="">
       <header>
         <h2>{this.props.content.neighborhood.Neighborhood}</h2>
       </header>
       <div class="content">
         <strong>Closeness</strong>
         <ProgressBar animated now={this.props.content.closeness} label={"" + Math.round(this.props.content.closeness) + "%"}/>
       </div>
     </section>
   )
 }
}
