import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import './App.css';
import LoginForm from './pages/loginForm';
// import RegistrationForm from './pages/RegistrationForm';
import DashboardForm from './pages/DashboardForm';
import ForgetPaswordForm from './pages/forgetPaswordForm';
import RegistrationForm from './pages/RegistrationForm';
import Registration from './components/Registration';







class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <div>
            <Route path="/" component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/registration" component={Registration} />
            <Route path="/dashboard" component={DashboardForm} />
            <Route path="/forgetPassword" component={ForgetPaswordForm} />
          </div>
          </Switch>
        </Router>

      </div>
    );
  }
}



export default App;
