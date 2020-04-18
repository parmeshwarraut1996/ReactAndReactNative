import Firebase from '../Firebase'
import React, { Component } from "react"
import { TextField, Fab, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom'
import { checkLogin, getUser } from '../controller/DatabaseController';
import { withRouter } from 'react-router-dom'

const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            elevation1: {
                5: {
                    boxShadow: "0px 1px 3px 3px black"
                }

            }
        }
    }
})
class Login extends Component {
    constructor() {
        super();
        this.state = {
            txtusername: "",
            txtpassword: "",
            toast: false,
            fields: {},
            errors: {},


        }

    }
    /**
     * External google sign in method
     */
    googleSignIn = event => {
        var provider = new Firebase.firebase.auth.GoogleAuthProvider();
        Firebase.firebase.auth().signInWithPopup(provider).then(function (result) {
            if (result.credential) {
                var token = result.user.uid;
                var email = result.user.email;
                localStorage.setItem("userKey", token);
                localStorage.setItem("Email", email);



            }
            /**
             * if login succcessful 
             */
            window.location = "http://localhost:3000/dashboard";
            toast("Successfully loged in with Google", { position: toast.POSITION.TOP_CENTER });
            /**
             * handle event if login unsuccessful
             */
        }).catch(function (err) {
            console.log(err);
            toast("Login failed", { position: toast.POSITION.TOP_CENTER });

        })
    }
    /**
     * validation of usename and password field
     */
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        /**
         * usename not empty
         */
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "* required username";
        }
        /**
         * password field does not empty
         */
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "* required password";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    /**
     * check username and password 
     */
    onSubmit = async event => {

        getUser(this.state.fields["username"]);

        if (this.handleValidation()) {
            var a = await checkLogin(this.state.fields["username"], this.state.fields["password"]);
            if (a) {
                /**
                 * if password or mail is incorect
                 */
                toast(a.message, { position: toast.POSITION.BOTTOM_LEFT });

            } else {
                /**
                 * if password is correct
                 */
                toast("Login Successful", { position: toast.POSITION.TOP_CENTER });
                this.props.history.push('/dashboard');
            }
        }
        this.setState({
            toast: true,
        });
    }
    /**
     * 
     * @param {define componenets in form} field 
     * @param {define event} e 
     */
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    goResetPassword(){
        this.props.history.push("/forgetPassword")
    }
    goSignUp(){
        this.props.history.push("/registration")
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="loginContainer">
                    <h1>Login to FundooNotes</h1>

                    <div className="text">
                        <br />
                        <TextField id="textfiled"
                            label="username"
                            type="text"
                            placeholder="Enter user name"
                            onChange={this.handleChange.bind(this, "username")}
                            value={this.state.fields["username"]}
                            error={this.state.errors["username"]}
                            helperText={this.state.errors["username"]}
                        />
                        <br />
                        <TextField id="textfield"
                            label="password"
                            type="password"
                            placeholder="Enter password"
                            onChange={this.handleChange.bind(this, "password")}
                            value={this.state.fields["password"]}
                            error={this.state.errors["password"]}
                            helperText={this.state.errors["password"]}
                            style={{ marginBottom: '20px' }}
                        />
                        <br />
                        <Fab
                            variant="extended"
                            color="primary"
                            onClick={event => this.onSubmit(event)}
                        >Login</Fab>
                        <br />

                        <div>
                            <img style={{ width: '200px', height: '80px' }}
                                src={require('../assets/google.png')}
                                alt=""
                                onClick={(event) => this.googleSignIn(event)} />
                        </div>

                        <br />
                        <ToastContainer />
                        <div>
                            <Fab
                                variant="extended"
                                color="primary"
                                onClick={(event) => this.goResetPassword(event)}>Forgotten password?</Fab>
                        </div>
                        <br />
                        <Fab
                            variant="extended"
                            color="primary"
                            onClick={(event) => this.goSignUp(event)}>SignUp</Fab>

                        <br />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

}
export default withRouter(Login);