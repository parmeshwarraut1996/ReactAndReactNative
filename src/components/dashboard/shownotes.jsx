import React, { Component } from 'react';
import { getNotes } from '../../controller/DatabaseController';
import DisplayCard from './displayCard';

class ShowNotes extends Component {
    constructor() {
        super();
        this.state =
            {
                notes: []

            }
    }
    componentDidMount() {
        getNotes(NoteList => {
            if (NoteList !== undefined && NoteList !== null) {
                this.setState({
                    notes: NoteList
                })
                console.log(" available note ", this.state.notes);

            }


            else {
                this.setState({
                    notes: []
                })
            }
        })
    }
    render() {
        var noteArr = [];
        var Arr = [];
        var ArchiveArr = [];

        if (this.props.n) {
            console.log("notes of props ", this.props.n);

            noteArr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key]
                if (noteData.Title!=="" && noteData.Archive!==true && noteData.Pinned !==false && noteData!==true) {

                    return (

                        <DisplayCard show={noteData}
                            index={key}
                            gridNote={this.props.grid}
                        />

                    );
                }

                return noteArr;  })
           
        }
        else if (this.props.a !== false) {
            ArchiveArr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key]
                if (noteData.Archive !== false) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }
                return ArchiveArr;
            })
        }
        else if (this.props.r) {
            noteArr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key];
                if (noteData.Reminder !== ' ' && noteData.Archive !== true && noteData.Pinned !== true && noteData !== true) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }

                return noteArr;
            })


        }
        else if (this.props.t) {
            noteArr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key]
                if (noteData.Trash !== false) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }

                return noteArr;
            })


        }
        else {
            Arr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key]
                if (noteData.Pinned !== false) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }

                return Arr;
            })
        }
        return (
            <div className="display">
                {noteArr}
                <div>

                    {ArchiveArr}
                </div>
                <div>

                    {Arr}
                </div>
            </div>
        );
    }
}
export default ShowNotes;