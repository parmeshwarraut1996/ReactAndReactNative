import React, { Component } from 'react';
import { Dialog, Divider, Button, createMuiTheme, Avatar, MuiThemeProvider } from '@material-ui/core';
import EditNotes from './EditNote';

const theme = createMuiTheme({
    overrides: {
        MuiAvatar: {
            colorDefault: {
                margin: 7,
                backgroundColor: 'darkorange',
            }

        }
    }
})

class CollaboratorNotes extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            editNote: false
        }

        this.openCollab = this.openCollab.bind(this);
    }
    openPop(){
         localStorage.getItem("Email");

    }

    openCollab(event, note, key) {

       
        this.setState({
            editNote: !this.state.editNote
        })
    }

    render() {
        var email = localStorage.getItem("Email");
        var fname=localStorage.getItem("FirstName");
        var lname = localStorage.getItem("LastName");
        var fullname=fname+" "+lname;
        var firstLetter = email.substring(0, 1);
        var upperCaseLetter = firstLetter.toLocaleUpperCase();
        return (
            <Dialog open={this.props.open} fullWidth>
                <div>
                    <h1>
                        Collaborator
                </h1>
                    <Divider />
                    <div>
                        <MuiThemeProvider theme={theme}>
                        <div className="collabmail">
                        <div>
                            <Avatar onClick={(event) => this.openPop(event)}>
                                {upperCaseLetter}
                            </Avatar>
                                </div>
                                <div className="NameAndMail">
                                    <div>{fullname} </div>
                                   
                                    <div>
                                    {email}
                                </div>
                            </div>
                           </div>
                        </MuiThemeProvider>
                    </div>
                    <Divider/>
                    <div className="CloseAndSave">
                        <Button
                            onClick={(event) => this.openCollab(event, this.props.show, this.props.index)}>
                            close
                </Button>
                        <Button
                            onClick={(event) => this.openCollab(event)}>
                            save
                </Button>
                        
                    </div>
                    <EditNotes show={this.props.show}
                        index={this.props.index} />
                </div>
            </Dialog>
        );
    }
}
export default CollaboratorNotes;