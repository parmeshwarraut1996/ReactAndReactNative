import React, { Component } from 'react';
import { Card,Popper,Paper, MenuItem, TextField } from '@material-ui/core';



class ReminderNotes extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null,
            startDate: new Date()

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


    
    render() {
        return (
            <div>
              
                <Card>
                    <Popper open={this.props.openRem} anchorEl={this.props.openAnchor}>
                        <Paper position='absolute'>
                            <div>
                                <MenuItem>
                                    Later today
                            </MenuItem>
                            <div>

                            </div>


                            </div>
                            <div>
                                <MenuItem>
                                Tomorrow
                                </MenuItem>

                            </div>
                            <div>
                                <TextField
                              type="date" >
                                </TextField>
                            </div>
                           
                            <div>
                                <TextField
                                    type="time"
                                    placeholder="take time"
                                />
                            </div>
                        </Paper>

                    </Popper>
                </Card>

            </div>
        );
    }
}
export default ReminderNotes;