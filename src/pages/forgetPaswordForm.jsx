import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ForgetPassword from '../components/forgetPassword';


class ForgetPasswordForm extends Component {
    render() {
        return (
            <div className="passwordForm">

                <Card className="passwordcard">

                    <ForgetPassword props={this.props} />

                </Card>

            </div>
        );
    }
}
export default withRouter(ForgetPasswordForm);