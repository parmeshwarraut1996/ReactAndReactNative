import React, { Component } from 'react';
import { Card, InputBase, IconButton, Toolbar, Chip} from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
import MoreComponent from './more';
import EditNotes from './EditNote';

class DisplayCard extends Component {
    constructor() {
        super();
        this.state = {
            edit:false

        }
    }
editNote(){
    this.setState({
        edit:!this.state.edit
    })
}
handleEdit(){
    this.setState({edit:!this.state.edit})
}

    render() {
        console.log("key--ll--llp",this.props.index);
        
        return (

            <Card className="ShowCard">

                <div className="titleAndPin">
                    <div>
                        <InputBase className="titleNote"
                            readOnly={ this.props.show.Title }
                            defaultValue={this.props.show.Title}
                            onChange={(event) => this.setState({ title: event.target.value })}
                            onClick={(event)=>this.editNote(event)}
                        >

                        </InputBase>
                    </div>
                    <div>
                        <IconButton>
                            <img src={require('../../assets/pin.svg')}
                                alt="" />
                        </IconButton>
                    </div>
                </div>
                <div className="inp">
                    <InputBase className="in"
                        readOnly={this.props.show.Description}
                        defaultValue={this.props.show.Description}
                        type={File}
                        onChange={(event) => this.setState({ description: event.target.value })}
                        multiline={this.state.nextLine}
                        >
                    </InputBase>
                </div>
                <div className="chipLabel">
                    {this.props.show.label.map((Option)=>
                        <Chip
                           label={Option}
                         onDelete={()=>this}>
                        </Chip>    
                    )}
                               

                
                </div>

                <div className="toolbarAndClose">
                    <Toolbar className="CardToolbar">
                        <div>
                            <ReminderComponent />
                        </div>
                        <div>
                            <CollaboratorComponent />
                        </div>
                        <div>
                            <ColorComponent />
                        </div>
                        <div>
                            <ImageComponent />
                        </div>
                        <div>
                            <ArchiveComponent />
                        </div>

                        <div>
                            <MoreComponent note={this.props.show} />
                        </div>

                    </Toolbar>
                    <EditNotes  open={this.state.edit}
                    show={this.props.show} 
                    index={this.props.index}
                    close={this.handleEdit}/>
                </div>
            </Card>

        );
    }
}
export default DisplayCard;