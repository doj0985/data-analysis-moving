import React, {Component} from 'react';

export default class Question extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 render() {
   return(
     <section id="">
       <header>
         <h2>{this.props.content.title}</h2>
       </header>
       <div class="content">
         <h3>{this.props.content.text}</h3>
         <ul class="actions" style={{paddingLeft:'5vw', paddingRight:'5vw'}}>
           {
             this.props.content.labels.map(
               function(label, i){
                 if(this.response === i){
                   return <button onClick={() => this.onQ(this.qIndex, i)} class="button primary large" style={{width:'20%', textAlign:'center', padding:'0%', marginLeft:'2%'}}>{label}</button>
                 } else {
                   return <button onClick={() => this.onQ(this.qIndex, i)} class="button large" style={{width:'20%', textAlign:'center', padding:'0%', marginLeft:'2%'}}>{label}</button>
                 }
               },
               {
                 qIndex: this.props.index,
                 response: this.props.content.response,
                 onQ: this.props.onQuestion
               }
             )
           }
          </ul>
         <h3>How important is this to you on a scale of 1-5? (5 being most important)</h3>
         <ul class="actions" style={{paddingLeft:'5vw', paddingRight:'5vw'}}>
           {
             [1, 2, 3, 4, 5].map(
               function(label, i){
                 if(this.weight === label){
                   return <button onClick={() => this.onW(this.qIndex, i+1)} class="button primary large" style={{width:'20%', textAlign:'center', padding:'0%', marginLeft:'2%'}}>{label}</button>
                 } else {
                   return <button onClick={() => this.onW(this.qIndex, i+1)} class="button large" style={{width:'20%', textAlign:'center', padding:'0%', marginLeft:'2%'}}>{label}</button>
                 }
               },
               {
                 qIndex: this.props.index,
                 weight: this.props.content.weight,
                 onW: this.props.onWeight
               }
             )
           }
          </ul>
         <span class="image main"></span>
       </div>
     </section>
   )
 }
}
