import  React, { Component } from "react";
import { IconButton } from "@material-ui/core";

class GridComponent extends Component{
    constructor(){
        super();
        this.state={
            view:false

        }
    }
    gridView=(event)=>{
       console.log("in open grid");
       
        this.setState({
            view:!this.state.view
        });
        this.props.gridComp();

    }
    render(){
        return(this.state.view?
            <div>
                <IconButton
                onClick={(event)=>this.gridView(event)}>

                    <img src={require('../../assets/grid1.svg')}
                        alt="" />
                </IconButton>
            </div>
            : <div>
                <IconButton
                    onClick={(event) => this.gridView(event)}>

                    <img src={require('../../assets/grid.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}

export default GridComponent;