import React, { Component } from 'react';
import { Card, Popper, Paper, MenuItem, TextField, Button } from '@material-ui/core';
import { deleteNotes } from '../../controller/DatabaseController';

class LabelNote extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            open: false,
            anchorEl: null,
            lblArr: ""
        }
        this.openLabel = this.openLabel.bind(this);
        this.addLabel = this.addLabel.bind(this);
    }
    addLabel() {
        console.log("casdfs----", this.state.lblArr);

        this.props.lbl(this.state.lblArr)
    }
    async openLabel() {
        await this.setState({ show: !this.state.show })
    }
    deleteNote(event,note,key){
        console.log("note for delete  ", key);

        console.log("key for delete  ",key);
        

        deleteNotes(note,key);

    }

    render() {
        console.log("label----", this.props.lblNote);

        return (!this.state.show ?
            <div>
                <Card>
                    <Popper open={this.props.openM} anchorEl={this.props.openAnchor}>
                        <Paper position="absolute">
                            {this.props.lblNote ?
                                (
                                    <div>
                                        <MenuItem
                                            onClick={(event) => this.openLabel(event)}>

                                            Add label
                                </MenuItem>
                                        <MenuItem
                                        onClick={(event)=>this.deleteNote(event,this.props.lblNote,this.props.index)}>
                                           Delete note
                                </MenuItem>
                                      
                                    </div>) : (
                                    <div>
                                        <MenuItem
                                            onClick={(event) => this.openLabel(event)}>

                                            Add label
                                </MenuItem>
                                      

                                    </div>
                                )
                            }
                        </Paper>
                    </Popper>
                </Card>

            </div>
            : <div>
                <Card>
                    <Popper open={this.state.show} anchorEl={this.props.openAnchor}>
                        <Paper position="absolute">
                            <div className="addLabel">
                                <TextField
                                    type="text"
                                    onChange={(event) => this.setState({ lblArr: event.target.value })} />
                                <Button onClick={(event) => this.addLabel(event)}>
                                    Add label
                               </Button>
                              
                            </div>
                        </Paper>
                    </Popper>
                </Card>

            </div>
        );
    }

}
export default LabelNote;