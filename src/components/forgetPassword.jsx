import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {  IconButton } from '@material-ui/core';
//import { Card } from '@material-ui/core';


class ForgetPassword extends Component {

    constructor() {
        super();
        this.state = {
            lblEmail: '',
            txtNewPassword: '',
            ConfirmPassword: ''


        }
    }


    render() {
        return (
            <div>
                <h1
                    style={{ marginTop: '3px' }}>Forget Password</h1>
                    <h2
                    style={{ marginTop: '10px' }}> {localStorage.getItem("FirstName")} { localStorage.getItem("LastName") }
                    </h2>
                    <IconButton>
                        Email={localStorage.getItem("Email")}
                    </IconButton>
                   

                </div>


         
        )


    }
}
export default withRouter(ForgetPassword);

