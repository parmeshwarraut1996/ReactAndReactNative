import React, { Component } from 'react';
import { SwipeableDrawer, List, createMuiTheme, MuiThemeProvider, MenuItem, Divider } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                left: 0,
                top: '65px',
                right: 'auto',
                
            }
        }
    }
})

class SideMenu extends Component {
    constructor() {
        super();
        this.state = {
            open: false

        }
    }
    render() {
        return (
            <MuiThemeProvider theme={
                theme
            }>

                <SwipeableDrawer anchor={'left'}
                    variant='persistent'
                    open={
                        this.props.sideOpen
                    }
                >
                    <List className="list">
                        <div className="notes">

                            <MenuItem id="roundbutton">
                                <div>
                                    <img src={require('../../assets/notes.svg')}
                                        alt="" />
                                </div>
                                <div className="sidefont">
                                    Notes
                            </div>
                            </MenuItem>
                        </div>
                        <div>
                            <MenuItem id="roundbutton">
                                <div>
                                    <img src={require('../../assets/reminder.svg')}
                                        alt="" />
                                </div>
                                <div className="sidefont">
                                    Reminders
                            </div>
                            </MenuItem>

                            <Divider></Divider>
                        </div>
                        <div className="labels">
                            <div className="lbl">
                                <label>
                                    LABELS
                            </label>
                            </div>
                            <MenuItem id="roundbutton">
                                <div>
                                    <img src={require('../../assets/editlabes.svg')}
                                        alt="" />
                                </div>
                                <div className="sidefont">
                                    Edit labels
                            </div>
                            </MenuItem >
                        </div>
                        <Divider></Divider>
                        <div className="notes">
                            <MenuItem id="roundbutton">
                                <div>
                                    <img src={require('../../assets/archive.svg')}
                                        alt="" />
                                </div>
                                <div className="sidefont">
                                    Archive
                               </div>
                        </MenuItem>
                         </div>
                            <MenuItem id="roundbutton">
                                <div>
                                    <img src={require('../../assets/trash.svg')}
                                        alt="" />
                                </div>
                                <div className="sidefont">
                                    Trash
                            </div>
                            </MenuItem>
                    </List>
                </SwipeableDrawer>
            </MuiThemeProvider>
                );
            }
        
        }
export default SideMenu;