import React, {Component} from 'react';
import axios from 'axios';

export default class Result extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 componentDidMount() {
   // const data = new FormData();
   // data.append('value_dict', JSON.stringify(this.props.answers));
   // data.append('weight_dict', JSON.stringify(this.props.weights));
   const data = {
     'value_dict': this.props.weights,
     'weight_dict': this.props.answers
   }
   console.log(data);
   axios.post(`https://us-central1-moving-233718.cloudfunctions.net/predict-cors`, data).then(res => {
     console.log(res.data);
   }).catch(err => {
     console.log(err)
   });
 }
 render() {
   return(
     <div>
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
        {
          Object.keys(this.props.weights).map(
            function(title, i){
              return <div><span>{title}: </span><span>{this.weights[title]}</span></div>
            },
            {
              weights: this.props.weights
            }
          )
        }
        <button onClick={this.props.reset}>reset</button>
     </div>
   )
 }
}
