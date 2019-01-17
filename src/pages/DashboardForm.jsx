import React, { Component } from 'react'
import MyHeader from '../components/MyHeader';
import {withRouter} from "react-router-dom"

class DashboardForm extends Component {
    render() {
        console.log("in dashboard");
        
        return (
            <div className="base">
                
                
                <MyHeader />
               
            </div>
        );
    }
}
export default withRouter(DashboardForm);