import React, {Component} from 'react';
import Input from './Input.js';
import Image from "./family.png";

export default class Question extends Component {
 constructor(props) {
   super(props)
   this.state = {
     response: this.props.response,
     weight: this.props.weight
   }
 }
 handleChange = (x) => {
   this.setState({
     response: x
   })
 }
 handleWChange = (x) => {
   this.setState({
     weight: x
   })
 }
 render() {
   return(
     <div style={{backgroundColor: 'white'}}>
        <img src={Image} alt="Question Image" class="question_icon"/>
      <div>
        <h1 class="survey_question">
            {this.props.text}
        </h1>
          <div class="radio">
                <label>
                  <input
                    class="radio-inline"
                    type="radio"
                    value="1"
                    checked={this.state.response === 1}
                    onChange={() => this.handleChange(1)}
                  />
                  1
                </label>


                <label class="radio-inline" >
                  <input
                    type="radio"
                    value="2"
                    checked={this.state.response === 2}
                    onChange={() => this.handleChange(2)}
                  />
                  2
                </label>

                <label class="radio-inline" >
                  <input
                    type="radio"
                    value="3"
                    checked={this.state.response === 3}
                    onChange={() => this.handleChange(3)}
                  />
                  3
                </label>

                <label class="radio-inline" >
                  <input
                    type="radio"
                    value="4"
                    checked={this.state.response === 4}
                    onChange={() => this.handleChange(4)}
                  />
                  4
                </label>

                <label class="radio-inline" >
                  <input
                    type="radio"
                    value="5"
                    checked={this.state.response === 5}
                    onChange={() => this.handleChange(5)}
                  />
                  5
                </label>
              </div>

              How important is this attribute to you?
              <br/>
              <div class="radio">
                    <label>
                      <input
                        class="radio-inline"
                        type="radio"
                        value="1"
                        checked={this.state.weight === 1}
                        onChange={() => this.handleWChange(1)}
                      />
                      1
                    </label>


                    <label>
                      <input
                        class="radio-inline"
                        type="radio"
                        value="2"
                        checked={this.state.weight === 2}
                        onChange={() => this.handleWChange(2)}
                      />
                      2
                    </label>

                    <label>
                      <input
                        class="radio-inline"
                        type="radio"
                        value="3"
                        checked={this.state.weight === 3}
                        onChange={() => this.handleWChange(3)}
                      />
                      3
                    </label>

                    <label>
                      <input
                        class="radio-inline"
                        type="radio"
                        value="4"
                        checked={this.state.weight === 4}
                        onChange={() => this.handleWChange(4)}
                      />
                      4
                    </label>

                    <label>
                      <input
                        class="radio-inline"
                        type="radio"
                        value="5"
                        checked={this.state.weight === 5}
                        onChange={() => this.handleWChange(5)}
                      />
                      5
                    </label>
                </div>
          <br/>
          {this.state.response !== 0 && <button onClick={() => this.props.func(this.props.i, this.props.title, this.state.response, this.state.weight)}>submit</button>}
        </div>
     </div>
   )
 }
}
