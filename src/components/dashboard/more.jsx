import React, { Component } from 'react';

class MoreComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <IconButton>
                    <img src={require('../assets/more.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}
export default MoreComponent;