import React, { Component } from 'react';
import { Card, InputBase } from '@material-ui/core';

class ShowCards extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Card className="cardlist">
                    <div>
                        <InputBase className="takeNote"
                        placeholder="title"

                        >
                            <img src={require('../assets/pin.svg')}
                                alt="" />

                        </InputBase>
                    </div>
                </Card>
            </div>
        );
    }
}
export default ShowCards;