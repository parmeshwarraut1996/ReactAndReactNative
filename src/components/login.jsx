import Firebase from '../Firebase'
import React, { Component } from "react"
import { TextField, Fab, IconButton } from "@material-ui/core";
//import Toaster from "./Toaster";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
var checkLogin = require('../controller/DatabaseController');




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
    googleSignIn = event => {
         var provider = new Firebase.firebase.auth.GoogleAuthProvider;
        Firebase.firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log(result);

            console.log("Successful google account linked ");

        }).catch(function (err) {
            console.log(err);
            console.log("failed to login");


        })

    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "* required username";
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "* required password";
        }

        this.setState({ errors: errors });
        return formIsValid;



    }
    onSubmit = event => {
        if (this.handleValidation()) {
            checkLogin.checkLogin(this.state.fields["username"], this.state.fields["password"]);
            toast("Successfully Login ", { position: toast.POSITION.BOTTOM_LEFT });
        }

        this.setState({
            toast: true,


        });
    }
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
                    <br/>
                    <Fab onClick={(event) => this.googleSignIn(event)} >
                        <img src={require('../assets/download1.png')} />
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
export default Login;