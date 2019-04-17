import React, {Component} from 'react';

export default class ProgBar extends Component {
 constructor(props) {
   super(props)
   this.state = {}
 }
 render() {
   return(
     <div style={{backgroundColor: 'green'}}>
       {
         this.props.ans.map(
           function(done, i){
             if (done == 1){
               if(this.i == i){
                 return <span>X</span>
               }
               return <span onClick={() => this.func(i)}>x</span>;
             } else {
               if(this.i == i){
                 return <span>O</span>
               }
               return <span onClick={() => this.func(i)}>o</span>;
             }
           },
           {
             i: this.props.i,
             func: this.props.func
           }
         )
       }
     </div>
   )
 }
}
