import React, {Component} from 'react';
import Neighborhood from './Neighborhood.js';

export default class Result extends Component {
 constructor(props) {
   super(props)
   this.state = {
     page: 1
   }
 }
 loadMore = () => {
   var p = this.state.page;
   this.setState({
     page: p+1
   })
 }
 render() {
   return(
          <div>
         {
           this.props.neighborhoods.map(
             function(neighborhood, i){
               if(i < this.page*5){
                 return <Neighborhood key={i} index={i} content={neighborhood}/>
               }
             },
             {
               page: this.state.page
             }
           )
         }
         <section style={{marginBottom:'20vh'}}>
           <header>

           </header>
           <div class="content">
             <button onClick={() => this.loadMore()} class="button primary large" style={{}}>Load More</button>
           </div>
         </section>
       </div>
  )
 }

}
