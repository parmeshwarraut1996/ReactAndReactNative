import React, { Component } from 'react';
import { Card, InputBase, IconButton } from '@material-ui/core';
import ShowCards from './ShowCards';
class Notes extends Component {
    constructor() {
        super();
        this.state = {
            open: false,

        }
        this.openCard = this.openCard.bind(this);
    }
    async openCard() {
        await this.setState({ open: true })
        console.log("In open card");
        console.log(this.state.open);


    }
    render() {

        return (!this.state.open ?

            <div className="show">
                <Card className="notesCard"
                >
                    <InputBase className="takeNote"
                        style={{ marginTop: '0px' }}
                        onClick={(event) => this.openCard(event)}
                        placeholder="Take a notes...">

                    </InputBase>
                    <div>
                        <IconButton>
                            <img src={require('../../assets/checkbox.svg')}
                                alt="" />
                        </IconButton>
                        <IconButton>
                            <img src={require('../../assets/drawing.svg')}
                                alt="" />
                        </IconButton>
                        <IconButton>
                            <img src={require('../../assets/image.svg')}
                                alt="" />
                        </IconButton>
                    </div>
                </Card>
            </div>
            : <div className="show">
                <ShowCards />
            </div>




        );

    }
}
export default Notes;