import React, { Component } from 'react'
import { Card } from '@material-ui/core';
import Registration from '../components/Registration';


class RegistrationForm extends Component {


    render() {
        return (

            <div className="Form">

                <Card className="textReg">
                    <img src={require('../assets/register.png')} 
                    style={{marginTop:'15px'}}/>
                    <Registration/>
                    
                </Card>

            </div>

        );

    }
}
export default RegistrationForm;