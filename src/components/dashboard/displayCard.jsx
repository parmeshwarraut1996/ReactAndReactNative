import React, { Component } from 'react';
import { Card, InputBase, IconButton, Toolbar, Button } from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
import MoreComponent from './more';

class DisplayCard extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (

            <Card className="ShowCard">

                <div className="titleAndPin">
                    <div>
                        <InputBase className="titleNote"
                            readOnly={ this.props.show.Title }
                            defaultValue={this.props.show.Title}
                            onChange={(event) => this.setState({ title: event.target.value })}
                            
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
                        readOnly={this.props.show}>
                    </InputBase>
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
                            <MoreComponent />
                        </div>
                    </Toolbar>
                </div>
            </Card>

        );
    }
}
export default DisplayCard;