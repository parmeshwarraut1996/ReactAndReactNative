import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import LoginForm from './pages/loginForm';
import RegistrationForm from './pages/RegistrationForm';
import DashboardForm from './pages/DashboardForm';
import ForgetPaswordForm from './pages/forgetPaswordForm';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>

            <Route path="/login" component={LoginForm} />
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/dashboard" component={DashboardForm} />
            <Route path="/forgetPassword" component={ForgetPaswordForm}/>
           

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
