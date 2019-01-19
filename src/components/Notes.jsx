import React, { Component } from 'react';
import { Card, InputBase } from '@material-ui/core';
import ShowCards from './ShowCards';
class Notes extends Component {
    constructor() {
        super();
        this.state = {
            open: false,

        }
    }
    openCard(){
        this.setState = ({open:false })
        console.log("In open card");
        console.log(this.state.open);
        
        
    }
    render() {
        
        return (this.state.open ?

                <div className="show">
                    <Card className="notesCard"
                    >
                        <div>
                            <InputBase className="takeNote"
                                onClick={(event)=>this.openCard()}
                                placeholder="  Take a notes...">
                            </InputBase>

                        </div>
                    </Card>
                </div>
        
       :
                <div className="show">
                    <ShowCards />
                </div>





            );
        
    }
}
export default Notes;