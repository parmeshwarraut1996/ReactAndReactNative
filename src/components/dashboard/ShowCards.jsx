import React, { Component } from 'react';
import { Card, InputBase, IconButton, Toolbar, Button } from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
import MoreComponent from './more';
import { insertNotes, pinnedNote } from '../../controller/DatabaseController';
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
            archive: false,
            pin: false,
            trash: false,
            label: [],
            openCard: false,




        }
        this.handleLabel = this.handleLabel.bind(this);
        this.handleReminder = this.handleReminder.bind(this);

    }


    handleLabel(val) {
        console.log("value===", val);

        this.setState({
            label: val
        })

    }

    handleReminder(rem) {
        this.setState({
            reminder: rem
        })

        console.log("rem---", rem);

    }


    addNotes() {
        this.setState({

            title: "",
            description: "",
        })
        if (this.state.title !== "" && this.state.description !== "") {
            insertNotes(this.state.title, this.state.description, this.state.reminder, this.state.collaborator, this.state.color, this.state.image, this.state.archive, this.state.pin, this.state.trash, this.state.label);

            console.log("reminder----", this.state.reminder);
            this.props.changeCard();
        }
        else {
            toast("Title And Description not empty", { position: toast.POSITION.TOP_CENTER });


        }



    }
    isPinned(event, note, key) {
        pinnedNote(note, key);
       



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
                        <IconButton
                            onClick={(event) => this.isPinned(event, this.props.show, this.props.index)}>
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
                            <ReminderComponent r={this.handleReminder}
                                  note={this.props.show}
                                  index={this.props.index} />
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
                            <MoreComponent lblVal={this.handleLabel} />
                        </div>

                    </Toolbar>
                    <div className="closeButton">
                        <Button onClick={(event) => this.addNotes(event)}>

                            Close
                         </Button>


                    </div>

                    <ToastContainer />

                </div>


            </Card>



        );
    }
}
export default ShowCards;