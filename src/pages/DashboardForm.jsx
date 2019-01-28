import React, { Component } from 'react'

import {withRouter} from "react-router-dom"
import MyHeader from '../components/dashboard/MyHeader';
import Notes from '../components/dashboard/Notes';
import ShowNotes from '../components/dashboard/shownotes';



class DashboardForm extends Component {
    render() {
        console.log("in dashboard");
        
        return (
            <div className="base">
                
                
              <MyHeader/>
            <Notes/>
            <ShowNotes/>
            
            
            </div>
        );
    }
}
export default withRouter(DashboardForm);