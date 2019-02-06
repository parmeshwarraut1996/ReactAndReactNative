import React, { Component, } from 'react';
import { IconButton, Card, Popper, Paper, Tooltip } from '@material-ui/core';
import { colorNote } from '../../controller/DatabaseController';


const ColorCodeArray=[
    {
        rgbCode:"rgb(255,255,255)",
        ColorName:"White"
    },
    {
        rgbCode: "rgb(255,0,0)",
        ColorName: "Red"
    },

    {
        rgbCode: "rgb(0,255,0)",
        ColorName: "Lime"
    },

    {
        rgbCode: "rgb(0,0,255)",
        ColorName: "Blue"
    },

    {
        rgbCode: "rgb(255,255,0)",
        ColorName: "Yellow"
    },

    {
        rgbCode:"rgb(0,255,255)",
        ColorName:"Cyan"
    },
    
    {
        rgbCode:"rgb(255,0,255)",
        ColorName:"Magenta"
    },
    
    {
        rgbCode:"rgb(128,0,0)",
        ColorName:"Maroon"
    },
    
    {
        rgbCode: "rgb(128,128,0)",
        ColorName: "Olive"
    },

    {
        rgbCode: "rgb(128,0,128)",
        ColorName: "Purple"
    },

    {
        rgbCode:"rgb(0,128,128)",
        ColorName:"Teal"
    },
    
    {
        rgbCode: "rgb(238,130,238)",
        ColorName: "Violet"
    }


]




class ColorComponent extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null,
            color:""
           
        }
        this.openColorPop=this.openColorPop.bind(this);
        this.changeColor=this.changeColor.bind(this);
    }
    openColorPop=event=>{
        const { currentTarget } = event;
        this.setState({
            open: !this.state.open,
            anchorEl: currentTarget

        })

    }
    setColoredNote(event,note,index){
        
        
        var color=event.target.value;
        colorNote(color,note,index);
    }
    changeColor=event=>{
        this.props.note(event.target.value);
   
        
    }
    render() {

        var NoteArray=ColorCodeArray.map((option)=>{

            return(
                this.props.note?
                (
                    <div className="ColorIcon">
                        <Tooltip title={option.ColorName}>
                        <IconButton style={{backgroundColor:option.rgbCode}}
                        value={option.rgbCode}
                        onClick={(event)=>this.setColoredNote(event,this.props.note,this.props.index)}>

                        </IconButton>
                        </Tooltip>
                    </div>
                ):(
                    <div>
                        <Tooltip title={option.ColorName}>
                        <IconButton style={{backgroundColor:option.rgbCode}}
                        value={option.rgbCode}
                        onClick={(event)=>this.changeColor(event)}>

                        </IconButton>

                        </Tooltip>

                    </div>
                )
            );
        })
        


        return (
            <div>
                <IconButton onClick={(event)=>this.openColorPop(event)}>
                    <img src={require('../../assets/color.svg')}
                        alt="" />
                </IconButton>
                <Card>
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl}
                        position='absolute'>
                        <Paper className="ColorPaper">
                       <div className="ColorCard">
                           {NoteArray}
                       </div>

                        </Paper>
                    </Popper>
                </Card>
            </div>
        );
    }
}
export default ColorComponent;