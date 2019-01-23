import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';

class CollaboratorComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <IconButton>
                    <img src={require('../../assets/collaborator.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}
export default CollaboratorComponent;