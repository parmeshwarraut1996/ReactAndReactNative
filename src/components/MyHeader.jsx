import React, { Component } from "react"

import {Tooltip, AppBar, Toolbar, MuiThemeProvider, createMuiTheme, InputBase, Typography, IconButton } from "@material-ui/core";
import SideMenu from "./SideDrawer";
import AccountComponent from "./Account";

const theme = createMuiTheme({
    overrides: {
        MuiToolbar:
        {
            root: {
                display: "flex",
                position: "relative",
                justifyContent: 'space-between'
            },

        }
    }
})

class MyHeader extends Component {
    constructor() {
        super();
        this.state = {
            open:false,

        }
    }
    handleDrawer(){
        this.setState({open:!this.state.open});
    }
    render() {
        console.log("In myheader");

        return (
            <MuiThemeProvider theme={theme}>

                <div 
                >

                    <AppBar position='fixed' color='white'>
                        <Toolbar>
                            <div className="menuAndlogo">
                            <Tooltip title="main menu">
                            
                            <IconButton onClick={()=>this.handleDrawer()}>
                                <img src={require('../assets/menu.svg')}
                                    alt=""
                                     />
                                </IconButton>
                                </Tooltip>
                                <div className="nameAndlogo">
                                    <img src={require('../assets/keep.png')}
                                        alt="" />
                                    <Typography color="default"
                                        variant='h6'>
                                        FundooNotes
                                    </Typography>
                                </div>
                            </div>
                            <div className="search" >
                                <IconButton
                                    size='large'
                                    id='searchButton'
                                    color='white'
                                >
                                    <img src={require('../assets/searchlogo.svg')}
                                        alt="" />
                                </IconButton>

                                <InputBase  
                                    placeholder="Search"
                                />


                            </div>

                            <div className="appicons">
                                <div >
                                    <IconButton >
                                        <img src={require('../assets/refresh.svg')}
                                            alt="" />
                                    </IconButton>
                                </div>
                                <div >
                                    <IconButton >
                                        <img src={require('../assets/grid.svg')}
                                            alt="" />
                                    </IconButton>
                                </div>
                                <div >
                                    <IconButton >
                                        <img src={require('../assets/setting.svg')}
                                            alt="" />
                                    </IconButton>
                                </div>
                            </div>
                                <div >
                                <AccountComponent />
                                </div>
                            


                           
                        </Toolbar>
                    </AppBar>
                    <SideMenu sideOpen={this.state.open} />
                  
                </div>
            </MuiThemeProvider>
            
            
        );
    }
}
export default MyHeader;