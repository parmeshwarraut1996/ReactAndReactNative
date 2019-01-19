import React, { Component } from 'react'
import MyHeader from '../components/MyHeader';
import {withRouter} from "react-router-dom"
import Notes from '../components/Notes';


class DashboardForm extends Component {
    render() {
        console.log("in dashboard");
        
        return (
            <div className="base">
                
                
                <MyHeader />
            <Notes/>
            
            </div>
        );
    }
}
export default withRouter(DashboardForm);