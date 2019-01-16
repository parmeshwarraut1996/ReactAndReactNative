import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import LoginForm from './pages/loginForm';
import RegistrationForm from './pages/RegistrationForm';
import DashboardForm from './pages/DashboardForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
           
            <Route path="/login" component={LoginForm} />
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/dashboard" component={DashboardForm}/>
           



          </div>
        </Router>
      </div>
    );
  }
}

export default App;
