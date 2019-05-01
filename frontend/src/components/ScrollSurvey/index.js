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
       {title: "Majority Age", text:"How old are you?", response:null, weight:3, labels:['18-24', '25-34', '35-44', '45-59', '60+']},
       {title: "Neighborhood Size", text:"About what size neighborhood would you like (number of houses)?", response:null, weight:3, labels:['0-1.4k', '1.4-2k', '2-3k', '3-5k', '5k+']},
       // {title: "House Size", text:"What size of house fits you?", response:null, weight:3, labels:['0-1.9',  '1.9-2.2',  '2.2-2.4',  '2.4-2.78',  '2.78-3.9']},
       {title: "Family Percentage", text:"How family oriented would you like the neighborhood to be? (percentage families)", response:null, weight:3, labels:['0-15%', '15-21%', '21-26%', '26-34%', '34%+']},
       // {title: "Vacancy", text:"How much vacancy would you like in the area?", response:null, weight:3, labels:['0-5%', '5-7%', '7-9%', '9-11%', '11%+']},
       {title: "Income", text:"What income group do you belong to?", response:null, weight:3, labels:['$12-36k', '$36-42k', '$42-50k', '$50-66k', '$66k+']},
       {title: "Rent", text:"Which rent range is ideal?", response:null, weight:3, labels:['$752-827', '$827-895', '$895-962', '$962-1011', '$1011+']},
       {title: "Home Value", text:"Which home value range suits you?", response:null, weight:3, labels:['$100-137k', '$137-175k', '$175-253k', '$253-338k', '$338k+']},
       {title: "Transit Closeness", text:"How valuable is closeness to public transit? (percentage of homes within 1/4 mile of public transit)", response:null, weight:3, labels:['0-30%', '30-70%', '70-76%', '76-87%', '87%+']},
       {title: "Transit Cost", text:"About how much would you want to spend monthly on transit?", response:null, weight:3, labels:['$0-590', '$590-629', '$629-668', '$668-708', '$708+']},
       {title: "Rent Increase", text:"Which rate of rent inflation would you like? (change in median rent per year)", response:null, weight:3, labels:['$0-11', '$11-14', '$14-17', '$17-20', '$20+']},
       {title: "Home Value Increase", text:"Which rate of home value inflation would you like? (change in median home value per year)", response:null, weight:3, labels:['$0-22', '$22-31', '$31-47', '$47-57', '$57+']},
       {title: "Density", text:"How dense would you like the area to be? (person per acre)", response:null, weight:3, labels:['0-3', '3-5', '5-7', '7-9', '9+']}
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
                <ul>
                  <li>Browse our array of questions, answering only those you're comfortable with. Those that you do not answer will not be taken into account when we calculate your personal reccomendations! </li>
                  <li>If you're unsure about which option to choose for a question, take an educated guess based on our 1-5 based bins. Each bin set is evenly distributed within the austin area, and as such represent an equal portion of the neighborhoods here.</li>
                </ul>
  							<ul class="actions">
  								<li><a href="#questions" class="arrow scrolly"><span class="label">Next</span></a></li>
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
            <section id="results">
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
