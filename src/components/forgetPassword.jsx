import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Fab, TextField, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
//import { Card } from '@material-ui/core';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { resetPass } from '../controller/DatabaseController';

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: {
                font: 'inherit',
                border: 0,
                padding: '6px 0 7px',
                minWidth: 295,
                background: 'none',
                webkitTapHighlightColor: 'transparent',

            }
        }
    }

}
)


class ForgetPassword extends Component {

    constructor() {
        super();
        this.state = {
            txtEmail: "",
            fields: {},
            errors: {},
           



        }
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        // Email validation
        if (!fields["txtEmail"]) {
            formIsValid = false;
            errors["txtEmail"] = "* required  valid mail id";
        }
        // Check if email_id contain @ symbol and .
        if (typeof fields["txtEmail"] !== "undefined") {
            let lastAtPos = fields["txtEmail"].lastIndexOf('@');
            let lastDotPos = fields["txtEmail"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["txtEmail"].indexOf('@@') === -1 && lastDotPos > 3 && (fields["txtEmail"].length - lastDotPos) > 3)) {
                formIsValid = false;
                errors["txtEmail"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });

        console.log("is valid",formIsValid);
        
        return formIsValid;
    }
    resetPassword() {
                      
        if (this.handleValidation()) {
            console.log("in reset password");
            
            var a = resetPass(this.state.fields["txtEmail"]);
            console.log("aaaaa",a);
            
            if (a) {
                
                
                toast("Password reset link sent to your registered mail account", { position: toast.POSITION.TOP_CENTER })
                this.props.history.push('/login');

                

            }
            else {
                
                
                toast("Email is not registered", { position: toast.POSITION.TOP_CENTER })
            }
        }
        
    }
    

        handleChange(field, e) {
            let fields = this.state.fields;
            fields[field] = e.target.value;
            this.setState({ fields });

        }

        render() {
            return (
                <MuiThemeProvider theme={theme}>
                    <div>
                        <h1
                            style={{ marginTop: '10px' }}>Forget Password</h1>

                        <div className="email">
                            <TextField id="emailMinWidth"
                                label="Email Id"
                                type="text"
                                placeholder="Enter registered email id "
                                onChange={this.handleChange.bind(this, "txtEmail")}
                                value={this.state.fields["email"]}
                                error={this.state.errors["txtEmail"]}
                                helperText={this.state.errors["txtEmail"]} />

                        </div>
                        <div className="next">
                            <Fab variant="extended"
                                color="primary"
                                onClick={(event) => this.resetPassword(event)}
                            >
                                NEXT -->
                    </Fab>
                        </div>

                    </div>
                    <ToastContainer />

                </MuiThemeProvider>

            )


        }
    }
    export default withRouter(ForgetPassword);

