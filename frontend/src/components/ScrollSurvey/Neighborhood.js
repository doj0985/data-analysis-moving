import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Neighborhood extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 render() {
   return(
     <section style={{padding:'5%', margin:'5%', borderLeft: '6px solid #49fcd4', borderRadius: '25px'}}>
       <header>
         <h2 style={{margin:'0%'}}>{this.props.index+1}: {this.props.content.u_neighborhood.Neighborhood}</h2>
       </header>
       <div class="content">
         <strong>Match Rating:</strong>
         <ProgressBar now={this.props.content.closeness} label={"" + Math.round(this.props.content.closeness) + "%"}/>
         <div style={{margin:'5%'}}>
           <Row>
           {
             Object.keys(this.props.content.b_neighborhood).map(
               function(key, i){
                   if(key !== 'Neighborhood'){
                     const diff = this.input[key] - this.binned[key];
                     if(key === 'Majority Age'){
                       if(diff === 0){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'green', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{this.unbinned[key]}</div></div></Col>)
                       }else if(diff === -1 || diff === 1){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'yellowgreen', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{this.unbinned[key]}</div></div></Col>)
                       }else if(diff === -2 || diff === 2){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'yellow', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{this.unbinned[key]}</div></div></Col>)
                       }else if(diff === -3 || diff === 3){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'orange', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{this.unbinned[key]}</div></div></Col>)
                       }else if(diff === -4 || diff === 4){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'red', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{this.unbinned[key]}</div></div></Col>)
                       }
                     }else{
                       if(diff === 0){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'green', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{Math.round(this.unbinned[key])}</div></div></Col>)
                       }else if(diff === -1 || diff === 1){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'yellowgreen', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{Math.round(this.unbinned[key])}</div></div></Col>)
                       }else if(diff === -2 || diff === 2){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'yellow', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{Math.round(this.unbinned[key])}</div></div></Col>)
                       }else if(diff === -3 || diff === 3){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'orange', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{Math.round(this.unbinned[key])}</div></div></Col>)
                       }else if(diff === -4 || diff === 4){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%'}}><div style={{backgroundColor:'red', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'85%'}}><h6>{key}</h6>{Math.round(this.unbinned[key])}</div></div></Col>)
                       }
                     }
                   }
               },
               {
                 binned: this.props.content.b_neighborhood,
                 unbinned: this.props.content.u_neighborhood,
                 input: this.props.input
               }
             )
           }
           </Row>
         </div>
       </div>
     </section>
   )
 }
}
