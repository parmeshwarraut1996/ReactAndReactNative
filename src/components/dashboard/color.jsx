import React, { Component } from 'react';

class ColorComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <IconButton>
                    <img src={require('../assets/color.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}
export default ColorComponent;