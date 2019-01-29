import React, { Component } from 'react';
import { Card, InputBase, IconButton, Toolbar, Button } from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
import MoreComponent from './more';
import { insertNotes} from '../../controller/DatabaseController';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


class ShowCards extends Component {

    constructor() {
        super();
        this.state = {
            nextLine: true,
            title: "",
            description: "",
            reminder: "",
            collaborator: "",
            color: "",
            image: "",
            archive: "",
            pin: "",
            label: [],
            open: false



        }
        this.handleLabel=this.handleLabel.bind(this);
    }
    handleLabel(val){
        console.log("value===",val);
        
        this.setState({
            label:val
        })

    }



    addNotes() {
        this.setState({

            title: "",
            description: "",
        })
        if (this.state.title !== "" && this.state.description !== "") {
            insertNotes(this.state.title, this.state.description, this.state.reminder, this.state.collaborator, this.state.color, this.state.image, this.state.archive, this.state.pin, this.state.label);
            this.props.changeCard();
        }
        else {
            toast("Title And Description not empty", { position: toast.POSITION.TOP_CENTER });


        }



    }
    render() {
        return (

            <Card className="cardlist">

                <div className="titleAndPin">
                    <div>
                        <InputBase className="titleNote"
                            placeholder="Title"
                            onChange={(event) => this.setState({ title: event.target.value })}

                        >

                        </InputBase>
                    </div>
                    <div>
                        <IconButton>
                            <img src={require('../../assets/pin.svg')}
                                alt="" />
                        </IconButton>
                    </div>
                </div>
                <div className="inp">
                    <InputBase className="in"
                        type={File}
                        onChange={(event) => this.setState({ description: event.target.value })}
                        placeholder="Take a note..."
                        multiline={this.state.nextLine}>
                    </InputBase>
                </div>
               

                <div className="toolbarAndClose">
                    <Toolbar className="CardToolbar">
                        <div>
                            <ReminderComponent />
                        </div>
                        <div>
                            <CollaboratorComponent />
                        </div>
                        <div>
                            <ColorComponent />
                        </div>
                        <div>
                            <ImageComponent />
                        </div>
                        <div>
                            <ArchiveComponent />
                        </div>

                        <div>
                            <MoreComponent lblVal={this.handleLabel}/>
                        </div>

                    </Toolbar>
                    <div className="closeButton">
                        <Button

                            onClick={(event) => this.addNotes(event)}>
                            CLOSE
                         </Button>


                    </div>
                    <ToastContainer />
                </div>




            </Card>


        );
    }
}
export default ShowCards;