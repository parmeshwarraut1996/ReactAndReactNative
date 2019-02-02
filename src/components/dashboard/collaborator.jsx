import React, { Component } from 'react';
import { IconButton} from '@material-ui/core';
import CollaboratorNotes from './collaboratornotes';

class CollaboratorComponent extends Component {
    constructor() {
        super();
        this.state = {
            open:false

        }
        this.openCollaborator=this.openCollaborator.bind(this);
    }

    openCollaborator(event,note,key){

        this.setState({
            open:!this.state.open
        })

    }
    closePop(){
        this.setState({open:!this.state.open})
    }
    render() {
        return (
            <div>
              
                <IconButton onClick={(event)=>this.openCollaborator(event,this.props.show,this.props.index)}>
                    <img src={require('../../assets/collaborator.svg')}
                        alt="" />
                </IconButton>
                <CollaboratorNotes open={this.state.open}
                            show={this.props.show}
                            index={this.props.index}/>
              
            </div>

        );
    }
}
export default CollaboratorComponent;