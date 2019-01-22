import React, { Component } from 'react';
import { Card, InputBase, IconButton } from '@material-ui/core';
var archiveFile = require('./dashboard/archive');
class ShowCards extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (

            <Card className="cardlist">
                <div className="addNotes">
                    <div className="titleAndPin">
                        <div>
                            <InputBase className="titleNote"
                                placeholder="  Title"

                            >

                            </InputBase>
                        </div>
                        <div>
                            <IconButton>
                                <img src={require('../assets/pin.svg')}
                                    alt="" />
                            </IconButton>
                        </div>
                    </div>
                    <div className='archive'>
                    <div>
                        <InputBase
                            placeholder="  Take a note..."

                        >


                        </InputBase>
                    </div>

                    <div>
                        <archiveFile />

                    </div>
                </div>
                </div>
            </Card>

        );
    }
}
export default ShowCards;