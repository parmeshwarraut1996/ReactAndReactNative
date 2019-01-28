import React, { Component } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import ReminderNotes from './remindernotes.jsx';

class ReminderComponent extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null
        }
    }
    isReminder = event => {
        const { currentTarget } = event;
        this.setState({
            open: !this.state.open,
            anchorEl: currentTarget

        })
        console.log("in reminder");


    }
    render() {
        return (
            <div>
                <Tooltip title="Reminder" >
                    <IconButton

                        onClick={(event) => this.isReminder(event)}>
                        <img src={require('../../assets/reminder.svg')}
                            alt="" />

                        <ReminderNotes openRem={this.state.open} openAnchor={this.state.anchorEl} />

                    </IconButton>
                </Tooltip>
            </div>

        );
    }
}
export default ReminderComponent;