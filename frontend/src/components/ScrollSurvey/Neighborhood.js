import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LGMap from './LGMap.js';

export default class Neighborhood extends Component {
 constructor(props) {
   super(props)
   this.state = {
     showDet: false
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
         <ProgressBar now={this.props.content.closeness} label={"" + Math.round(this.props.content.closeness) + "%"}/><a onClick={()=>{var sD = !this.state.showDet; this.setState({showDet:sD})}}>details</a>
         {this.state.showDet && <div style={{margin:'5%'}}>
         <div style={{textAlign: 'center'}}><h5>Features</h5></div>
         {
           console.log(
             Object.keys(this.props.content.b_neighborhood).sort(
               (key)=>{
                 return(
                   Math.abs(
                     this.props.input[key] - this.props.content.b_neighborhood[key]/this.props.weight[key]
                   )
                 );
               }
             )
           )
         }
           <Row>
           {
             Object.keys(this.props.content.b_neighborhood).sort((a, b)=>{return( (Math.abs(this.props.input[a] - this.props.content.b_neighborhood[a]/this.props.weight[a])*10 - this.props.weight[a]) - (Math.abs(this.props.input[b] - this.props.content.b_neighborhood[b]/this.props.weight[b])*10 - this.props.weight[b]) )}).map(
               function(key, i){
                   if(key !== 'Neighborhood'){
                     const diff = this.input[key] - this.binned[key]/this.weight[key];
                     console.log(diff);
                     var w = [];
                     for(var i = 0; i < this.weight[key]; i++){
                       w.push(i)
                     }
                     if(key === 'Majority Age'){
                       if(diff === 0){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'green', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{this.unbinned[key]}</div><div style={{height:'40px', backgroundColor:'green'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -1 || diff === 1){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'greenyellow', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{this.unbinned[key]}</div><div style={{height:'40px', backgroundColor:'greenyellow'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -2 || diff === 2){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'yellow', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{this.unbinned[key]}</div><div style={{height:'40px', backgroundColor:'yellow'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -3 || diff === 3){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'orange', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{this.unbinned[key]}</div><div style={{height:'40px', backgroundColor:'orange'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -4 || diff === 4){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'red', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{this.unbinned[key]}</div><div style={{height:'40px', backgroundColor:'red'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }
                     }else{
                       if(diff === 0){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'green', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{Math.round(this.unbinned[key])}</div><div style={{height:'40px', backgroundColor:'green'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -1 || diff === 1){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'greenyellow', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{Math.round(this.unbinned[key])}</div><div style={{height:'40px', backgroundColor:'greenyellow'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -2 || diff === 2){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'yellow', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{Math.round(this.unbinned[key])}</div><div style={{height:'40px', backgroundColor:'yellow'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -3 || diff === 3){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'orange', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{Math.round(this.unbinned[key])}</div><div style={{height:'40px', backgroundColor:'orange'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }else if(diff === -4 || diff === 4){
                         return(<Col sm={3} style={{textAlign: 'center', padding:'0%', height:'20vh', marginBottom:'2%'}}><div style={{backgroundColor:'red', margin:'2%', display: 'inline-block', width:'90%', height:'90%'}}><div style={{backgroundColor:'white', margin:'5%', padding:'2%', display: 'inline-block', width:'90%', height:'70%'}}><h6 style={{margin:'0%', height: '40%'}}>{key}</h6>{Math.round(this.unbinned[key])}</div><div style={{height:'40px', backgroundColor:'red'}}>{w.map((weight, i)=>{return(<i class="far fa-dot-circle white" style={{color:'white'}}></i>)})}</div></div></Col>)
                       }
                     }
                   }
               },
               {
                 binned: this.props.content.b_neighborhood,
                 unbinned: this.props.content.u_neighborhood,
                 input: this.props.input,
                 weight: this.props.weight
               }
             )
           }
           </Row>
           <div style={{textAlign: 'center', width: '100%', height:'100%'}}>
            <LGMap address={this.props.content.b_neighborhood.Neighborhood + ", Austin TX"} />
           </div>
         </div>}
       </div>
     </section>
   )
 }
}
