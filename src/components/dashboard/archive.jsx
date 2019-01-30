import React, { Component } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { archiveNote } from '../../controller/DatabaseController';

class ArchiveComponent extends Component {
    constructor() {
        super();
        this.state = {


        }
    }
    isArchive(event,note,key){
        console.log("note in archive  -- -=",note);
        console.log("key in archive---",key);
        archiveNote(note,key);
        
        

    }
    render() {
        return (
            <div>
                <Tooltip title="Archive">
                <IconButton
                        onClick={(event) => this.isArchive(event, this.props.show, this.props.index)}>
                    <img src={require('../../assets/archive2.svg')}
                        alt="" />
                </IconButton>
                </Tooltip>
            </div>
        );
    }
}
export default ArchiveComponent;