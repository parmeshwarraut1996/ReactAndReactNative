import React, { Component } from 'react';
import { IconButton, Card, Paper, MenuItem, TextField, Button, Popper } from '@material-ui/core';
import { editReminder } from '../../controller/DatabaseController';


class ReminderComponent extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null,
            date: "",
            time: "",
            reminder: ""
        }
    }
    handleChange(event) {

        this.setState({
            date: event.target.value
        });
        console.log("date", event.target.value);

    }
    handleTime = (event) => {
        this.setState({
            time: event.target.value
        })
        console.log("time", event.target.value);

    }
    isReminder = event => {
        const { currentTarget } = event;
        this.setState({
            open: !this.state.open,
            anchorEl: currentTarget

        })
        console.log("in reminder");


    }
    dateSave(event,note,key) {
        var d = this.state.date + "," + this.state.time;

        this.setState({ reminder:d })
        this.props.r(this.state.reminder)
        console.log("date and time==", d);
        editReminder(d,note,key)

    }
    render() {
        return (
            <div>

                <IconButton

                    onClick={(event) => this.isReminder(event)}>
                    <img src={require('../../assets/reminder.svg')}
                        alt="" />

                </IconButton>
                <Card>
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl}
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
                                    onClick={(event) => this.dateSave(event,this.props.note,this.props.index)}>
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
export default ReminderComponent;