import React, { Component } from 'react';
import { Card, Popper, Paper, MenuItem, TextField, Button } from '@material-ui/core';



class ReminderNotes extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null,
            date:"",
            time:""

        }
        
        this.handleTime=this.handleTime.bind(this);
        
    }
    handleChange(event) {

        this.setState({
            startDate: event.target.value
        });
        console.log("date",event.target.value);
        
    }
    handleTime=(event)=>{
        this.setState({
            time:event.target.value
        })

    }
   



    render() {
        return (
            <div>

                <Card>
                    <Popper open={this.props.openRem} anchorEl={this.props.openAnchor}
                    position='absolute' z-index='1'>
                        <Paper>
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
                                    type="date"
                                    onChange={this.handleChange.bind(this)} >
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    type="time"
                                    placeholder="take time"
                                    onChange={this.handleTime}
                                />
                            </div>
                            <div>
                                <Button
                                onClick={(event)=>this.dateSave(event)}>
                                    save
                                </Button>
                            </div>
                        </Paper>

                    </Popper>
                </Card>

            </div>
        );
    }
}
export default ReminderNotes;