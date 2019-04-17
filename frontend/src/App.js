import React, { Component } from 'react';
import './App.css';
import './assets/css/main.css';
import SurveyPage from './components/SurveyPage';
import Survey from './components/Survey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SurveyPage/>
      </div>
    );
  }
}

export default App;
