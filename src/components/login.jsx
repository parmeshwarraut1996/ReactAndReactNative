import Firebase from '../Firebase'
import React, { Component } from "react"
import { TextField, Fab } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { checkLogin } from '../controller/DatabaseController';
import { withRouter } from 'react-router-dom'

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
            if(result.credential){
                var token=result.user.uid;
                var email=result.user.email;
                localStorage.setItem("userKey",token);
                localStorage.setItem("Email",email);


                
            }
            /**
             * if login succcessful 
             */
            window.location ="http://localhost:3000/dashboard1";
            //this.props.history.push('/dashboard1');
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
                this.props.history.push('/dashboard1');
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
    render() {
        return (
            <div>
                <h1
                    style={{ marginTop: '3px' }}>Login to FundooNotes</h1>

                <div className="text">
                    <br />



                    < TextField id="textfiled"
                        label="username"
                        type="text"
                        placeholder="Enter user name"
                        style={{ marginTop: '10px' }}
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
                        style={{ marginBottom: '10px' }}
                        onClick={event => this.onSubmit(event)}

                    >Login</Fab>
                    <br />
                    <Fab
                        variant="extended"
                        color="primary"
                        onClick={(event) => this.googleSignIn(event)} >
                        <img src={require('../assets/download1.png')}
                            alt="" />
                    </Fab>



                    <br />

                    <ToastContainer />

                    <Link to='/' > Forgotten password? </Link>
                    <br />
                    <Link to='/Registration' > Click to Registration </Link>


                </div>
            </div>
        );
    }

}
export default withRouter(Login);