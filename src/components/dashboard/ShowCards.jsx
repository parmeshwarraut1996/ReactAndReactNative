import React, { Component } from 'react';
import { Card, InputBase, IconButton, Toolbar, Button } from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
import MoreComponent from './more';

class ShowCards extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (

            <Card className="cardlist">

                <div className="titleAndPin">
                    <div>
                        <InputBase className="titleNote"
                            placeholder="  Title"

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
                <div className='archive'>

                    <InputBase
                        placeholder="  Take a note..."
                    >
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
                    <div className="closeButton">
                        <Button 
                        onClick>
                            Close
                         </Button>

                    </div>

                </div>




            </Card>

        );
    }
}
export default ShowCards;