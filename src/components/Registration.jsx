import React, { Component } from "react"
import { TextField, Fab } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import getData from "../controller/DatabaseController";

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
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // First Name validation
        if (!fields["First Name"]) {
            formIsValid = false;
            errors["First Name"] = "* required fist name";
        }

        if (typeof fields["First Name"] !== "undefined") {
            if (!fields["First Name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["First Name"] = " enter only letters";
            }
        }
        //Last Name validation                      
        if (!fields["Last Name"]) {
            formIsValid = false;
            errors["Last Name"] = "* required last name";
        }

        if (typeof fields["Last Name"] !== "undefined") {
            if (!fields["Last Name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["Last Name"] = " enter only letters";
            }
        }
        //Email validation              
        if (!fields["Email Id"]) {
            formIsValid = false;
            errors["Email Id"] = "* required  valid mail id";
        }
        // Check if email_id contain @ symbol and .
        if (typeof fields["Email Id"] !== "undefined") {
            let lastAtPos = fields["Email Id"].lastIndexOf('@');
            let lastDotPos = fields["Email Id"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Email Id"].indexOf('@@') === -1 && lastDotPos > 3 && (fields["Email Id"].length - lastDotPos) > 3)) {
                formIsValid = false;
                errors["Email Id"] = "Email is not valid";
            }
        }
        //Password validation                      
        if (!fields["Password"]) {
            formIsValid = false;
            errors["Password"] = "* required password";
        }


        //Confirm Password validation                      
        if (!fields["Confirm Password"]) {
            formIsValid = false;
            errors["Confirm Password"] = "* required password";
        }
        /**
         * Compare Password and Confirm Password are match or not
         */
        if(fields["Password"]!==fields["Confirm Password"]){
            formIsValid=false;
            errors["Confirm Password"]="password does not match";
        }
        //Contact Number validation
        if (!fields["Contact Number"]) {
            formIsValid = false;
            errors["Contact Number"] = "* required contact number";
        }
        /**
         * contact number start with 7 , 8 ,9 digit and length must be 10 digit
         */
        if (typeof fields["Contact Number"] !== "undefined") {
            if (!fields["Contact Number"].match(/[789]{1}[0-9]{9}/)) {
                formIsValid = false;
                errors["Contact Number"] = " enter valid contact number ";
            }
        }
//set state for display error message
        this.setState({ errors: errors });
        return formIsValid;
    }

    //set event on submit buton
    onSubmit = event => {

       /**
 * check if all required information is true 
 */
        if (this.handleValidation()) {
            getData(this.state.fields["First Name"],this.state.fields["Last Name"],this.state.fields["Email Id"],this.state.fields["Password"],this.state.fields["Confirm Password"],this.state.fields["Contact Number"]);
            toast("Successfully Register", { position: toast.POSITION.BOTTOM_LEFT });
            
        }
        else {
            toast("Enter valid info ", { position: toast.POSITION.BOTTOM_LEFT });
        }
    }
    /**
     * 
     * @param {define text field} field 
     * @param { define event} e 
     */

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    render() {
        return (
            <div>
                <h1 style={{ marginTop: '100px' }}>Register</h1>
                <div className="text">


                    <br />
                    <fieldset>
                        
                        < TextField id="textfiled"
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            onChange={this.handleChange.bind(this, "First Name")}
                            value={this.state.fields["First Name"]}
                            error={this.state.errors["First Name"]}
                            helperText={this.state.errors["First Name"]}
                        />


                        <br />
                        < TextField id="textfiled"
                            label="Last Name"
                            type="text"
                            placeholder="Enter Last Name"
                            onChange={this.handleChange.bind(this, "Last Name")}
                            value={this.state.fields["Last Name"]}
                            error={this.state.errors["Last Name"]}
                            helperText={this.state.errors["Last Name"]} />



                        <br />


                        < TextField id="textfiled"
                            label="Email Id"
                            type="text"
                            placeholder="Enter Email id "
                            onChange={this.handleChange.bind(this, "Email Id")}
                            value={this.state.fields["email"]}
                            error={this.state.errors["Email Id"]}
                            helperText={this.state.errors["Email Id"]} />

                        <br />

                        < TextField id="textfiled"
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                            onChange={this.handleChange.bind(this, "Password")}
                            value={this.state.fields["Password"]}
                            error={this.state.errors["Password"]}
                            helperText={this.state.errors["Password"]} />
                        <br />

                        < TextField id="textfiled"
                            label="Confirm Password"
                            type="password"
                            placeholder="Enter Confirm Password"
                            onChange={this.handleChange.bind(this, "Confirm Password")}
                            value={this.state.fields["Confirm Password"]}
                            error={this.state.errors["Confirm Password"]}
                            helperText={this.state.errors["Confirm Password"]} />
                        <br />

                        < TextField id="textfiled"
                            label="Contact Number"
                            type="text"
                            style={{ marginBottom: '50px' }}
                            placeholder="Enter Contact Number"
                            onChange={this.handleChange.bind(this, "Contact Number")}
                            value={this.state.fields["Contact Number"]}
                            error={this.state.errors["Contact Number"]}
                            helperText={this.state.errors["Contact Number"]} />

                        <br />
                        <Fab
                            variant="extended"
                            color="primary"
                            style={{ marginBottom: '50px' }}
                            onClick={event => this.onSubmit(event)}

                        >submit</Fab>
                        <br />
                        <ToastContainer />
                    </fieldset>
                </div>
            </div>
        );
    }

}
export default Registration;
