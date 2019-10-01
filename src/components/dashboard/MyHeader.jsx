import React, { Component } from "react"

import {Tooltip, AppBar, Toolbar, MuiThemeProvider, createMuiTheme, InputBase, Typography, IconButton } from "@material-ui/core";
import SideMenu from "./SideDrawer";
import AccountComponent from "./signinprofile";
import GridComponent from "./openGridComponent";

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
            open:false
                   }
        this.gridMethod=this.gridMethod.bind(this);
    }
    handleDrawer(){
              this.setState({open:!this.state.open});
    }
    gridMethod(){
        console.log("in Myheader");
        
        this.props.varGrid();
    }
      componentWillMount() {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches) {
         this.setState({
             open:false
         })
        } else {
            this.setState({
                open:false
            })
        }
        mediaQuery.addListener((mq) => {
          if (mq.matches) {
            this.setState({
                open:false
            })
          } else {
            this.setState({
                open:false
            })
          }
        });
      }
    

    render() {
        return (
            <MuiThemeProvider theme={theme}>
               <div>
                    <AppBar position='fixed' color='white'>
                        <Toolbar>
                            <div className="menuAndlogo">
                            <Tooltip title="main menu">
                            
                            <IconButton onClick={()=>this.handleDrawer()}>
                                <img src={require('../../assets/menu.svg')}
                                    alt=""
                                     />
                                </IconButton>
                                </Tooltip>
                                <div className="nameAndlogo">
                                    <img src={require('../../assets/keep.png')}
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
                                    <img src={require('../../assets/searchlogo.svg')}
                                        alt="" />
                                </IconButton>

                                <InputBase  
                                    placeholder="Search"
                                />
                           </div>

                            <div className="appicons">
                                <div >
                                    <IconButton>
                                     
                                        <img src={require('../../assets/refresh.svg')}
                                            alt="" />
                                    </IconButton>
                                </div>
                                <div >
                                   <GridComponent gridComp={this.gridMethod}/> 
                                </div>
                                <div >
                                    <IconButton >
                                        <img src={require('../../assets/setting.svg')}
                                            alt="" />
                                    </IconButton>
                                </div>
                            </div>
                                <div >
                                <AccountComponent />
                                </div>
                            


                           
                        </Toolbar>
                    </AppBar>
                    <SideMenu sideOpen={this.state.open}
                                sideNote={this.props.varNote} />
                  
                </div>
            </MuiThemeProvider>
            
            
        );
    }
}
export default MyHeader;