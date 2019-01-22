import React, { Component } from 'react';

class ReminderComponent extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <IconButton>
                    <img src={require('../assets/reminder.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}
export default ReminderComponent;