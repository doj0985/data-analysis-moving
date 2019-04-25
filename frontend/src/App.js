import React, { Component } from 'react';
import './App.css';
import './assets/css/main.css';
import './style/main.css';
import SurveyPage from './components/SurveyPage';
import Survey from './components/Survey';
import ScrollSurvey from './components/ScrollSurvey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollSurvey/>
      </div>
    );
  }
}

export default App;
