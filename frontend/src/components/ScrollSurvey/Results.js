import React, {Component} from 'react';
import Neighborhood from './Neighborhood.js';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export default class Results extends Component {
 constructor(props) {
   super(props)
   this.state = {
     page: 1
   }
 }
 componentDidMount(){
   var vd = this.props.valueDict;
   var wd = this.props.weightDict;
   const data = {
     'value_dict': vd,
     'weight_dict': wd
   }
   // console.log(data);
   axios.post(`https://us-central1-moving-233718.cloudfunctions.net/predict`, data).then(res => {
     // console.log(res.data);
     this.setState({
       neighborhoods: res.data
     })
   }).catch(err => {
     console.log(err)
   });
 }
 loadMore = () => {
   var p = this.state.page;
   this.setState({
     page: p+1
   })
 }
 render() {
   if(this.state.neighborhoods){
     return(
       <div>
             {
               this.state.neighborhoods.map(
                 function(neighborhood, i){
                   if(i < this.page*5){
                     return <Neighborhood key={i} index={i} content={neighborhood} input={this.input}/>
                   }
                 },
                 {
                   page: this.state.page,
                   input: this.props.valueDict
                 }
               )
             }
             <section style={{marginBottom:'20vh'}}>
               <header>

               </header>
               <div class="content" style={{textAlign: 'center'}}>
                 <button onClick={() => this.loadMore()} class="button primary large" style={{display: 'inline-block'}}>Load More</button>
               </div>
             </section>
       </div>
       )
   }else{
     if(Object.keys(this.props.valueDict).length){
       return(
         <div style={{textAlign: 'center'}}><Spinner animation="border" variant="primary" /></div>
       )
     }else{
       return(
         <div><Alert key={1} variant='danger'>You must answer at least 1 question :(</Alert></div>
       )
     }
   }
 }

}
