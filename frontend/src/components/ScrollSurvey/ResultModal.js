import React, {Component} from 'react';
import Neighborhood from './Neighborhood.js';
import Modal from 'react-bootstrap/Modal';
import Results from './Results.js';

export default class ResultModal extends Component {
 constructor(props) {
   super(props)
   this.state = {
     show: false
   }
 }
 // componentDidMount(){
 //   var vd = this.props.valueDict();
 //   var wd = this.props.weightDict();
 //   const data = {
 //     'value_dict': vd,
 //     'weight_dict': wd
 //   }
 //   // console.log(data);
 //   axios.post(`https://us-central1-moving-233718.cloudfunctions.net/predict-cors`, data).then(res => {
 //     // console.log(res.data);
 //     this.setState({
 //       neighborhoods: res.data
 //     })
 //   }).catch(err => {
 //     console.log(err)
 //   });
 // }
 // loadMore = () => {
 //   var p = this.state.page;
 //   this.setState({
 //     page: p+1
 //   })
 // }
 valueDict = () => {
   var res = {}
   for(var i in this.props.questions) {
      var q = this.props.questions[i]
      var value = q['response'];
      if(value !== null){
        res[q['title']] = value
      }
    }
    return res
 }
 weightDict = () => {
   var res = {}
   for(var i in this.props.questions) {
     var q = this.props.questions[i]
      var weight = q['weight'];
      res[q['title']] = weight
    }
    return res
 }
 render() {
   let valueDict = this.valueDict();
   let weightDict = this.weightDict();
   if(this.state.demo){
     valueDict = {
       'Density': 4,
       'Family Percentage': 1,
       'Home Value': 1,
       'House Size': 1,
       'Income': 4,
       'Majority Age': 1,
       'Neighborhood Size': 1,
       'Rent': 1,
       'Transit Closeness': 4,
       'Transit Cost': 0
     };
     weightDict = {
       'Density': 1,
       'Family Percentage': 5,
       'Home Value': 2,
       'House Size': 2,
       'Income': 3,
       'Majority Age': 5,
       'Neighborhood Size': 1,
       'Rent': 5,
       'Transit Closeness': 3,
       'Transit Cost': 3
     };
   }
   console.log(valueDict);
   return(
     <div>
      <button onClick={() => {this.setState({show:true, demo: false})}} class="button primary large" style={{}}>Calculate</button>
      <button onClick={() => {this.setState({show:true, demo: true})}} class="button large" style={{}}>Demo</button>
      <Modal
         size="lg"
         show={this.state.show}
         onHide={() => {this.setState({show:false})}}
         aria-labelledby="example-modal-sizes-title-lg"
       >
         <Modal.Header closeButton>
           <Modal.Title id="example-modal-sizes-title-lg">
             Your Reccomendations
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Results valueDict={valueDict} weightDict={weightDict}/>
         </Modal.Body>
       </Modal>
     </div>
     )
 }

}
