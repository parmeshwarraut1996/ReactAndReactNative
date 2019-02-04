import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button } from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
import MoreComponent from './more';
import { editNotesData} from '../../controller/DatabaseController';


class EditNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.show.Title,
            description:this.props.show.Description,
            NoteLabel:this.props.show.label,
            open:false,
            noteUpdate:{
                title: this.props.show.Title,
                description: this.props.show.Description,

            }

        }
    }
 editNotes(event,note,key){
    console.log("note-----",note);
    console.log("key------",key);
    this.props.close();
  console.log("title---",this.state.title);
  
    console.log("note update ----",this.state.noteUpdate);
   
       note={
           title:this.state.title,
           description:this.state.description
       }
   
     console.log("note pass to db -----", note)
    
     editNotesData(this.state.title, this.state.description,note,key);
     
}

deleteLabel(event,note,key,label){

    console.log("note label ",note);
    console.log("note label key--",key);
    console.log("label----=-==",label);
    
    


}



    render() {
        return (
            <Dialog open={this.props.open} fullWidth>
           
            
                <div className="titleAndPin">
                    <div>
                        <InputBase className="titleNote"
                            defaultValue={this.props.show.Title}
                            onChange={(event) => this.setState({ title: event.target.value })}

                        >

                        </InputBase>
                    </div>
                    <div>
                        <IconButton>
                            <img src={require('../../assets/pin.svg')}
                                alt="" />
                        </IconButton>
                    </div>
                </div>
                <div className="inp">
                    <InputBase className="in"
                        
                        defaultValue={this.props.show.Description}
                        type={File}
                        onChange={(event) => this.setState({ description: event.target.value })}
                        multiline={this.state.nextLine}
                    >
                    </InputBase>
                </div>
                <div className="chipLabel">
                    {this.props.show.label.map((Option) =>
                        <Chip
                            label={Option}
                            onDelete={(event) => this.deleteLabel(event,this.props.show,this.props.index,this.props.show.label)}>
                        </Chip>
                    )}



                </div>

                <div className="toolbarAndClose">
                    <Toolbar className="CardToolbar">
                        <div>
                            <ReminderComponent />
                        </div>
                        <div>
                            <CollaboratorComponent note={this.props.show}
                            index={this.props.index} />
                        </div>
                        <div>
                            <ColorComponent />
                        </div>
                        <div>
                            <ImageComponent />
                        </div>
                        <div>
                            <ArchiveComponent />
                        </div>

                        <div>
                            <MoreComponent note={this.props.show} />
                        </div>

                    </Toolbar>
                    <div className="closeButton">
                        <Button

                            onClick={(event) => this.editNotes(event,this.props.show,this.props.index)}>
                            CLOSE
                         </Button>


                    </div>
                </div>
           
            </Dialog>
        );
    }
}
export default EditNotes;
