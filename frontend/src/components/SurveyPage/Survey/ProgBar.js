import React, {Component} from 'react';

export default class ProgBar extends Component {
 constructor(props) {
   super(props)
   this.state = {}
 }
 render() {
   return(
     <div class='survey_progress'>
       {
         this.props.ans.map(
           function(done, i){
             if (done == 1){
               if(this.i == i){
                 return <i class="fas fa-question-circle fa-2x prog" style={{color: '#5db333'}}></i>;
               }
               return <i class="fas fa-question-circle fa-2x prog" style={{color: 'black'}} onClick={() => this.func(i)}></i>;
             } else {
               if(this.i == i){
                 return <i class="far fa-question-circle fa-2x prog" style={{color: '#5db333'}}></i>;
               }
               return <i class="far fa-question-circle fa-2x prog" style={{color: 'black'}} onClick={() => this.func(i)}></i>;
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
