import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import LoginForm from './pages/loginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/login" component={LoginForm} />
            

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
