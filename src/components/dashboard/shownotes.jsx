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
        var Arr = [];
        var pinArr = [];
        console.log("grid val in show notes--",this.props.grid);
        

        noteArr = Object.keys(this.state.notes).map((note,index) => {
            var key = note;
            var noteData = this.state.notes[key]
            if (noteData.Archive !== true&& noteData.Pinned === false){
                
            return (
                
                    <DisplayCard show={noteData}
                        index={key}
                        gridNote={this.props.grid}
                    />
            
            );}
            return noteArr;
        })
        Arr = Object.keys(this.state.notes).map((note, index) => {
            var key = note;
            var noteData = this.state.notes[key]
            if (noteData.Archive !==false) {

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

        pinArr = Object.keys(this.state.notes).map((note, index) => {
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
            return pinArr;
        })

        return (
            <div className="display">
                {noteArr}
                <div>
                <h>Archived</h>
                {Arr}
                </div>
                <div>
                <h>Pinned</h>
                {pinArr}
                </div>
            </div>
        );
    }
}
export default ShowNotes;