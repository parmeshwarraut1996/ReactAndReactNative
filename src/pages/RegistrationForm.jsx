import React, { Component } from 'react'
import { Card } from '@material-ui/core';
import Registration from '../components/Registration';
import {withRouter} from 'react-router-dom'

class RegistrationForm extends Component {


    render() {
        return (

            <div className="Form">

                <Card className="textReg">
                    <img src={require('../assets/register.png')} 
                    style={{marginTop:'15px'}}
                    alt="Registration"/>
                    <Registration/>
                    
                </Card>

            </div>

        );

    }
}
export default withRouter(RegistrationForm)`    `;