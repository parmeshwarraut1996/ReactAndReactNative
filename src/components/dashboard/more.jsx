import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import LabelNote from './labelNote';

class MoreComponent extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null,
            lblArray:[],
            labl:'',

        }
        this.handleLabelArray=this.handleLabelArray.bind(this);
    }

   async handleLabelArray(label){
    
       console.log("in handle label",label);
       this.state.lblArray.push(label);
    //   console.log("new label ==",varLabel);
       
       await this.setState({
            labl:this.state.lblArray
        })
       
        console.log("in lblArray"+this.state.lblArray);
        
        this.props.lblVal(this.state.labl)
       
    }


    openMore=event=>{
        const { currentTarget } = event;
        this.setState({
            open: !this.state.open,
            anchorEl: currentTarget
        })
    }
    
    render() {
        return (
            
            <div>
                
                <IconButton
                    onClick={(event)=>this.openMore(event)}>
                    <img src={require('../../assets/more.svg')}
                        alt="" />
                        <LabelNote lbl={this.handleLabelArray} openM={this.state.open} openAnchor={this.state.anchorEl} lblNote={this.props.note}
                        index={this.props.index}/>
                </IconButton>
               
            </div>
        );
    }
}
export default MoreComponent;