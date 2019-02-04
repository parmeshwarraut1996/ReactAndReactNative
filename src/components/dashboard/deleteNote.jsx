import React, { Component } from 'react';
import { IconButton, Popper, Paper, MenuItem } from '@material-ui/core';
import { deleteNotes, trashNote } from '../../controller/DatabaseController';



class Delete extends Component {

    constructor() {
        super();
        this.state = {
            trashed: true,
            open: false,
            anchorEl: null,
        }
        this.deleteNote = this.deleteNote.bind(this)
        this.restoreNotes=this.restoreNotes.bind(this);
    }

    handleClick(event, note, key) {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !this.state.open,

        }));
       

    }

    deleteNote(event, note, key) {
        console.log("note in delete ==", note);
        console.log("key in delete==", key);
       
       deleteNotes(note,key);
    }


    restoreNotes(event, note, key) {
        console.log("note in delete ==",note);
        console.log("key in delete==",key);
        
        
       
       trashNote(note,key);
    }
    render() {
        console.log('in delete ', this.props.key)

        return (

            <div>
                <IconButton onClick={(event) => this.handleClick(event, this.props.note, this.props.index)}>
                    <img src={require('../../assets/more.svg')} 
                    alt=""/>
                </IconButton>

                <div>
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl} style={{
                        zIndex: "453"
                    }}>
                        <Paper position="absolute"> 
                            <div>

                                <div>
                                    <MenuItem onClick={(event) => this.deleteNote(event, this.props.note, this.props.index)} >Delete Forever</MenuItem>
                                </div>

                                <div>

                                    <div>
                                        <MenuItem onClick={(event) => this.restoreNotes(event, this.props.note, this.props.index)}>Restore </MenuItem>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Popper>
                </div>
            </div>)

    }
}

export default Delete;