import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, Avatar, Popper, Paper, Card, Button } from '@material-ui/core';
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

class AccountComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            open: false,
            anchorEl: null,


        }
    }
    signOut=event=>{
        localStorage.clear();
        window.location ="http://localhost:3000/login";
       
       
    }
    openPop = event => {

        var email = localStorage.getItem("Email");
        console.log("Email id", email);

        console.log("in popper");

        const { currentTarget } = event;
        this.setState({
            anchorEl: currentTarget,
            open: !this.state.open,
            email: email,

        });
        console.log("out popper", this.state.anchorEl);
        console.log("open", this.state.open);


    };


    render() {
        var email = localStorage.getItem("Email");
       var firstLetter = email.substring(0, 1);
        var upperCaseLetter = firstLetter.toLocaleUpperCase();
        return (
           
            <div>
                <MuiThemeProvider theme={theme}>
                    <Avatar onClick={(event) => this.openPop(event)}>

                    </Avatar>
                </MuiThemeProvider>
                <Card>
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl}>

                        <Paper className="paper">
                            email:{this.state.email}
                            <div className="Sign">
                                <Button onClick={(event)=>this.signOut(event)}>
                                    Sign out
                            </Button>
                            </div>
                        </Paper>
                    </Popper>
                </Card>
            </div>
        );
    }
}
export default AccountComponent;