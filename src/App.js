import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import LoginForm from './pages/loginForm';
import RegistrationForm from './pages/RegistrationForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>

            <Route path="/login" component={LoginForm} />
            <Route path="/Registration" component={RegistrationForm} />
           



          </div>
        </Router>
      </div>
    );
  }
}

export default App;
