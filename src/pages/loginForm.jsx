import React, { Component } from 'react'
import Login from '../components/login';
import { Card } from '@material-ui/core';

class LoginForm extends Component {



    render() {
        return (

            <div className="Form">
                <Card className="text">
                    <Login />
                </Card>

            </div>

        );

    }
}
export default LoginForm;