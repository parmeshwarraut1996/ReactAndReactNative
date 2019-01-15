import React, { Component } from 'react'
import Login from '../components/login';
import { Card } from '@material-ui/core';


class LoginForm extends Component {


    render() {
        return (

            <div className="Form">
              
                <Card className="card">
                <img src={require('../assets/login.png')}/>
                    <Login props={this.props}/>
                    
                </Card>

            </div>

        );

    }
}
export default LoginForm;