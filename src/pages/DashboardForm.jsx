import React, { Component } from 'react'

import {withRouter} from "react-router-dom"
import MyHeader from '../components/dashboard/MyHeader';
import Notes from '../components/dashboard/Notes';



class DashboardForm extends Component {
    render() {
        console.log("in dashboard");
        
        return (
            <div className="base">
                
                
              <MyHeader/>
            <Notes/>
            
            
            </div>
        );
    }
}
export default withRouter(DashboardForm);