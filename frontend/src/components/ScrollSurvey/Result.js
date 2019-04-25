import React, {Component} from 'react';
import Neighborhood from './Neighborhood.js';

export default class Result extends Component {
 constructor(props) {
   super(props)
   this.state = {

   }
 }
 render() {
     return(
       <div id="wrapper">
         <section class="intro">
           <header>
             <h1>Results</h1>
             <p>These were the neighborhoods we matched you with</p>
             <ul class="actions">
               <li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
             </ul>
           </header>
           <div class="content">
             <span class="image fill" data-position="center"><img src={Image} alt="" style={{width: '40vw', height: 'auto', marginLeft: 'auto', marginRight: 'auto'}}/></span>
           </div>
         </section>
         {
           this.props.neighborhoods.map(
             function(neighborhood, i){
               return <Neighborhood key={i} content={neighborhood}/>
             }
           )
         }
       </div>
     )
 }

}
