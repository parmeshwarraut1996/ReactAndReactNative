import React,{Component} from 'react';
import { SwipeableDrawer, List } from '@material-ui/core';


class SideMenu extends Component{
    constructor(){
        super();
        this.state={
            open:false

        }
    }
    render(){
        return(
            <SwipeableDrawer anchor={'left'}
            variant='persistent'
            open={
                this.props.sideOpen
            }
            >
            <List style={{width:200}}>

                Notes
            </List>
            </SwipeableDrawer>
        );
    }

}
export default SideMenu;