import React, { Component } from 'react'

import {withRouter} from "react-router-dom"
import MyHeader from '../components/dashboard/MyHeader';
import Notes from '../components/dashboard/Notes';
import ShowNotes from '../components/dashboard/shownotes';



class DashboardForm extends Component {
    constructor(){
        super();
        this.state={
            grid:false
        }
        this.openGrid=this.openGrid.bind(this);
    }

    openGrid(){
        console.log("in dashboard");
        
        this.setState({
            grid:!this.state.grid

        })
        console.log("grid val in dashboard---",this.state.grid);
        
        
    }
    render() {
        console.log("in dashboard");
        
        return (
            <div className="base">
                
                
              <MyHeader varGrid={this.openGrid}/>
            <Notes/>
            <ShowNotes grid={this.state.grid}/>
            
            
            </div>
        );
    }
}
export default withRouter(DashboardForm);