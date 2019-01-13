import React, { Component } from "react"
import { TextField, Fab } from "@material-ui/core";
//import Toaster from "./Toaster";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            txtusername: "",
            txtpassword: "",
            toast: false,


        }


    }

    onSubmit = event => {
        toast("clicked on submit !", { position: toast.POSITION.BOTTOM_LEFT });
       
        this.setState({
            toast: true,


        })
    }
    render() {
        return (

            <div className="text">

                <h1
                    style={{ marginTop: '100px' }}>Login to FundooNotes</h1>


                < TextField id="textfiled"
                    label="usename"
                    type="text"
                    placeholder="Enter user name"


                //style={{ marginBottom: '15px', marginTop: '100px', width: ' 200px',paddingLeft:'80px'  }}

                />

                <TextField id="textfield"
                    label="password"
                    type="text"
                    placeholder="Enter password"
                    style={{ marginBottom: '50px' }}

                />
                <Fab
                    variant="extended"
                    color="primary"
                    style={{ marginBottom: '100px' }}
                    onClick={event => this.onSubmit(event)}

                >submit</Fab>

                <ToastContainer />
            </div>

        );
    }

}
export default Login;