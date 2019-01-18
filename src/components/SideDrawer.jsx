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
                        <MenuItem>
                            <img src={require('../assets/notes.svg')}
                                alt="" />
                            Notes
               </MenuItem>
                        </div>
                        <div>
                        <MenuItem>
                            <img src={require('../assets/reminder.svg')}
                                alt="" />
                            Reminders
                        </MenuItem>

                        <Divider></Divider>
                        </div>
                        <div className="labels">
                            <div className="lbl">
                                <label>
                                    LABELS
                            </label>
                            </div>
                        <MenuItem>
                            <img src={require('../assets/editlabes.svg')}
                                alt="" />
                              
                            Edit labels
                        </MenuItem>
                        </div>
                        <Divider></Divider>
                        <MenuItem>
                            <img src={require('../assets/archive.svg')}
                                alt="" />
                            Archive
                        </MenuItem>
                        <MenuItem>
                            <img src={require('../assets/trash.svg')}
                                alt="" />
                            Trash
                        </MenuItem>
                    </List>
                </SwipeableDrawer>
            </MuiThemeProvider>
        );
    }

}
export default SideMenu;