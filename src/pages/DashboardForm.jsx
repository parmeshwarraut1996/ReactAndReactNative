import React, { Component } from 'react'

import {withRouter} from "react-router-dom"
import MyHeader from '../components/dashboard/MyHeader';
import Notes from '../components/dashboard/Notes';
import ShowNotes from '../components/dashboard/shownotes';



class DashboardForm extends Component {
    constructor(){
        super();
        this.state={
            grid:false,
            archive:false,
            reminder:false,
            trash:false,
            note:[],
            Pinned:false
        }
        this.openGrid=this.openGrid.bind(this);
        this.showClickedNote=this.showClickedNote.bind(this);
    }

    showClickedNote(archive,reminder,trash,note,Pinned){
        this.setState({
            archive:archive,
            reminder:reminder,
            trash:trash,
            note:note,
            Pinned:Pinned
        })

        console.log("note in dashboard--",this.state.note);
        


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
                
                
              <MyHeader varGrid={this.openGrid}
                        varNote={this.showClickedNote}/>
            <Notes/>
            <ShowNotes grid={this.state.grid}
                    a={this.state.archive} 
                    r={this.state.reminder}
                    t={this.state.trash}
                    n={this.state.note}
                    p={this.state.Pinned}/>
                        
            
            
            </div>
        );
    }
}
export default withRouter(DashboardForm);