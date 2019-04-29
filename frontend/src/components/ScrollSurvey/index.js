import React, {Component} from 'react';
import Image from "./family.png";
import Question from './Question.js';
import Result from './Result.js';
import ResultModal from './ResultModal.js';
import axios from 'axios';

export default class ScrollSurvey extends Component {
 constructor(props) {
   super(props)
   this.state = {
     questions: [
       {title: "Majority Age", text:"Which age group are you looking to live around?", response:null, weight:1, labels:['18-24', '25-34', '35-44', '45-59', '60+']},
       {title: "Neighborhood Size", text:"About what size neighborhood would you like?", response:null, weight:1, labels:['0-1.4k', '1.4-2k', '2-3k', '3-5k', '5k+']},
       {title: "House Size", text:"What size of house fits you?", response:null, weight:1, labels:['0-1.9',  '1.9-2.2',  '2.2-2.4',  '2.4-2.78',  '2.78-3.9']},
       {title: "Family Percentage", text:"What percentage of your neighbors would you like to be families?", response:null, weight:1, labels:['0-15%', '15-21%', '21-26%', '26-34%', '34%+']},
       {title: "Vacancy", text:"How much vacancy would you like in the area?", response:null, weight:1, labels:['0-5%', '5-7%', '7-9%', '9-11%', '11%+']},
       {title: "Income", text:"What income group would you like to live around?", response:null, weight:1, labels:['$12-36k', '$36-42k', '$42-50k', '$50-66k', '$66k+']},
       {title: "Rent", text:"What average rent would you prefer?", response:null, weight:1, labels:['$752-827', '$827-895', '$895-962', '$962-1011', '$1011+']},
       {title: "Home Value", text:"Which home value suits you?", response:null, weight:1, labels:['100-137k', '137-175k', '175-253k', '253-338k', '338k+']},
       {title: "Transit Closeness", text:"How close would you like to be to public transit?", response:null, weight:1, labels:['0-30', '30-70', '70-76', '76-87', '87+']},
       {title: "Transit Cost", text:"About how much would you want to spend monthly on transit?", response:null, weight:1, labels:['0-590', '590-629', '629-668', '668-708', '708+']},
       {title: "Rent Increase", text:"Which rate of rent inflation would you like?", response:null, weight:1, labels:['0-22', '22-28', '28-33', '33-40', '40+']},
       {title: "Home Value Increase", text:"Which rate of home value inflation would you like?", response:null, weight:1, labels:['0-44', '44-62', '62-93', '93-113', '113+']},
       {title: "Density", text:"How dense would you like the area to be?", response:null, weight:1, labels:['0-3', '3-5', '5-7', '7-9', '9+']}
     ],
     neighborhoods: null
   }
 }
 onQuestion = (i, r) => {
   var q = this.state.questions;
   if(q[i]['response'] === r){
     q[i]['response'] = null;
   }else{
     q[i]['response'] = r;
   }
   this.setState({
     questions: q
   });
 }
 onWeight = (i, w) => {
   var q = this.state.questions;
   q[i]['weight'] = w;
   this.setState({
     questions: q
   })
 }
 // onCalc = () => {
 //   var vd = this.valueDict();
 //   var wd = this.weightDict();
 //   const data = {
 //     'value_dict': vd,
 //     'weight_dict': wd
 //   }
 //   console.log(data);
 //   axios.post(`https://us-central1-moving-233718.cloudfunctions.net/predict-cors`, data).then(res => {
 //     console.log(res.data);
 //     this.setState({
 //       neighborhoods: res.data
 //     })
 //   }).catch(err => {
 //     console.log(err)
 //   });
 // }
 // valueDict = () => {
 //   var res = {}
 //   for(var i in this.state.questions) {
 //      var q = this.state.questions[i]
 //      var value = q['response'];
 //      if(value !== null){
 //        res[q['title']] = value
 //      }
 //    }
 //    return res
 // }
 // weightDict = () => {
 //   var res = {}
 //   for(var i in this.state.questions) {
 //     var q = this.state.questions[i]
 //      var weight = q['weight'];
 //      res[q['title']] = weight
 //    }
 //    return res
 // }
 render() {
   // const value_dict = this.valueDict();
   // const weight_dict = this.weightDict();
   // // console.log(value_dict);
   // // console.log(weight_dict);
   return(
     <div>
       <div id="wrapper">

  					<section class="intro">
  						<header>
  							<h1>Village</h1>
  							<p>Find your next home in Austin</p>
  							<ul class="actions">
  								<li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
  							</ul>
  						</header>
  						<div class="content">
  							<span class="image fill" data-position="center"><img src='https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt="" /></span>
  						</div>
  					</section>
            {
              this.state.questions.map(
                function(question, i){
                  return <Question key={i} index={i} content={question} onQuestion={this.onQuestion} onWeight={this.onWeight}/>
                },
                {
                  onQuestion: this.onQuestion,
                  onWeight: this.onWeight
                }
              )
            }
            <section>
  						<header>
                <h2>Results</h2>
  						</header>
  						<div class="content">
  							<ResultModal questions={this.state.questions}/>
  						</div>
  					</section>

  			</div>

      </div>

   )
 }
}
