import React, { Component } from 'react'
import Login from '../components/login';
import { Card } from '@material-ui/core';
import {withRouter} from 'react-router-dom'


class LoginForm extends Component {


    render() {
        return (

            <div className="Form">
              
                <Card className="card">
                <img src={require('../assets/login.png')}
                    alt="Login"/>
                    <Login props={this.props}/>
                    
                </Card>

            </div>

        );

    }
}
export default withRouter(LoginForm);