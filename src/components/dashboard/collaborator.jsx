import React, { Component } from 'react';

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
                    <img src={require('../assets/Collaborator.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}
export default CollaboratorComponent;