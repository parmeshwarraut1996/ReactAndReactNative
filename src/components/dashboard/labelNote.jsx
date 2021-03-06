import React, { Component } from 'react';
import { Card, Popper, Paper, MenuItem, TextField, Button, ClickAwayListener } from '@material-ui/core';
import { trashNote, addNewLabel } from '../../controller/DatabaseController';

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
        this.addLabelOfShowCard=this.addLabelOfShowCard.bind(this);
    }
    closePop() {
        this.setState({
            open: !this.state.open
        })
    }
    addLabelOfShowCard(event){
        this.props.lbl(this.state.lblArr);
        this.setState({
            show: !this.state.show
        })

    }
    addLabel(event, note, key) {
        console.log("note with new label===", note);
        console.log("key with new label====", key);

        addNewLabel(this.state.lblArr,note,key);

        this.props.lbl(this.state.lblArr);
        this.setState({
            show:!this.state.show
        })
        
    }
    async openLabel() {
        await this.setState({
            show: !this.state.show,


        })
    }
    deleteNote(event, note, key) {
        event.preventDefault();
        console.log("note for delete  ", key);

        console.log("key for delete  ", key);

        trashNote(note, key);
        //deleteNotes(note,key);

    }

    render() {
      

        return (!this.state.show ?
            <div>
                <Card>
                    <Popper open={this.props.openM} anchorEl={this.props.openAnchor}>
                        <ClickAwayListener onClickAway={(event) => this.closePop(event)}>

                            <Paper position="absolute">
                                {this.props.lblNote ?
                                    (
                                        <div>
                                            <MenuItem
                                                onClick={(event) => this.openLabel(event)}>

                                                Add label
                                </MenuItem>
                                            <MenuItem
                                                onClick={(event) => this.deleteNote(event, this.props.lblNote, this.props.index)}>
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
                        </ClickAwayListener>
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
                                   {this.props.index ?
                                    <Button onClick={(event) => this.addLabel(event, this.props.lblNote, this.props.index)}>
                                        Add label
                               </Button>
                                   :
                                    <Button onClick={(event) => this.addLabelOfShowCard(event)}>
                                        Add label
                               </Button>
                                   }

                                </div>
                            </Paper>
                       
                    </Popper>
                </Card>

            </div>
        );
    }

}
export default LabelNote;