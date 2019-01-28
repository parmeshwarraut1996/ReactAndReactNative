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

        noteArr = Object.keys(this.state.notes).map((note) => {
            var key = note;
            var noteData = this.state.notes[key]
            return (
                <div>
                    <DisplayCard show={noteData}
                        index={key}
                    />
                </div>
            );
        })

        return (
            <div className="display">
                {noteArr}
            </div>
        );
    }
}
export default ShowNotes;