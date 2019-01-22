import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';

class ArchiveComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <IconButton>
                    <img src={require('../../assets/archive2.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}
export default ArchiveComponent;