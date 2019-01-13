import React, { Component } from "react"
import { TextField, Fab } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            txtFirstName: "",
            txtLastName: "",
            txtEmailId: "",
            txtPassword: "",
            txtConfirmPassword: "",
            txtContactNumber: "",
            toast: false,
        }
    }
    onSubmit = event => {
        toast("SuccessFully Register", { position: toast.POSITION.BOTTOM_LEFT });

        this.setState({
            toast: true,


        })
    }
    render() {
        return (
            <div className="text">
                <h1 style={{ marginTop: '100px' }}>Register</h1>

                < TextField id="textfiled"
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name" />

                < TextField id="textfiled"
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name" />

                < TextField id="textfiled"
                    label="Email Id"
                    type="text"
                    placeholder="Enter Email id " />

                < TextField id="textfiled"
                    label="Password"
                    type="text"
                    placeholder="Enter password" />

                < TextField id="textfiled"
                    label="Confirm Password"
                    type="text"
                    placeholder="Enter Confirm Password" />

                < TextField id="textfiled"
                    label="Contact Number"
                    type="text"
                    style={{ marginBottom: '50px' }}
                    placeholder="Enter Contact Number" />


                <Fab
                    variant="extended"
                    color="primary"
                    style={{ marginBottom: '50px' }}
                    onClick={event => this.onSubmit(event)}

                >submit</Fab>

                <ToastContainer />
            </div>

        );
    }

}
export default Registration;
