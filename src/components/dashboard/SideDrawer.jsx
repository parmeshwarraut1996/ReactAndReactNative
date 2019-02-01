import React, { Component } from 'react';
import { SwipeableDrawer, List, createMuiTheme, MuiThemeProvider, MenuItem, Divider, Button } from '@material-ui/core';
import { getLabel } from '../../controller/DatabaseController';

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
        this.state = ({

            notes: false,
            reminder: false,
            editLabel: false,
            archive: false,
            trash: false,
            open: false,
            lbl: []


        })
        //this.openNotes=this.openNotes.bind(this);

    }
    componentDidMount() {
        getLabel(LabelList => {
            if (LabelList !== undefined && LabelList !== "") {
                this.setState({
                    lbl: LabelList
                })


            }
            else {
                this.setState({
                    lbl: []
                })
            }
            console.log("get   label list --", LabelList);

        })



    }


    openNotes() {
        this.setState({
            notes: true,
            reminder: false,
            editLabel: false,
            archive: false,
            trash: false,

        })
        console.log("notes", this.state.notes);
        this.props.sideNote(this.state.archive, this.state.reminder, this.state.trash, this.state.notes);




    }

    openReminder() {
        this.setState({
            notes: false,
            reminder: true,
            editLabel: false,
            archive: false,
            trash: false,
        })
        this.props.sideNote(this.state.archive, this.state.reminder, this.state.trash, this.state.notes);

        console.log("reminder", this.state.reminder);

    }
    openEditLabel() {
        this.setState({
            notes: false,
            reminder: false,
            editLabel: true,
            archive: false,
            trash: false,
        })
        console.log("editLabel", this.state.editLabel);

    }
    openArchive() {
        this.setState({
            notes: false,
            reminder: false,
            editLabel: false,
            archive: true,
            trash: false,
        })
        this.props.sideNote(this.state.archive, this.state.reminder, this.state.trash, this.state.notes);
        console.log("archive", this.state.archive);


    }
    openTrash() {
        this.setState({
            notes: false,
            reminder: false,
            editLabel: false,
            archive: false,
            trash: true,
        })
        this.props.sideNote(this.state.archive, this.state.reminder, this.state.trash, this.state.notes);


        console.log("trash", this.state.trash);

    }

    render() {
        var lblArray = [];
        lblArray = Object.keys(this.state.lbl).map((varLabel) => {
            var key = varLabel;
            var labelData = this.state.lbl[key];
            console.log("label  array data --", lblArray);


            for (var i = 0; i < labelData.name.length; i++) {

                return (
                    <div className="sidelabel">
                        <Button>
                            <img src={require('../../assets/arrow.svg')}
                                alt="" />
                            {labelData.name[i]}
                        </Button>
                    </div>)

            }
            return null;
        });


        let n = this.state.notes ? 'roundbutton' : 'menu'
        let r = this.state.reminder ? 'roundbutton' : 'menu';
        let e = this.state.editLabel ? 'roundbutton' : 'menu';
        let a = this.state.archive ? 'roundbutton' : 'menu';
        let t = this.state.trash ? 'roundbutton' : 'menu';


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
                        <div className="note">

                            <MenuItem id={n}
                                onClick={(event) => this.openNotes(event)}>
                                <div >
                                    <img src={require('../../assets/notes.svg')}
                                        alt="" />
                                </div>
                                <div className="sidefont">
                                    Notes
                            </div>
                            </MenuItem>
                        </div>
                        <div>
                            <MenuItem id={r}
                                onClick={(event) => this.openReminder(event)}>
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
                            {lblArray}
                            <MenuItem id={e}
                                onClick={(event) => this.openEditLabel(event)}>
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
                        <div className="note">
                            <MenuItem id={a}
                                onClick={(event) => this.openArchive(event)}>
                                <div>
                                    <img src={require('../../assets/archive.svg')}
                                        alt="" />
                                </div>
                                <div className="sidefont">
                                    Archive
                               </div>
                            </MenuItem>
                        </div>
                        <MenuItem id={t} onClick={(event) => this.openTrash(event)}>

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