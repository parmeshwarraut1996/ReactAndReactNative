import React, { Component } from "react"
import { Card, TextField, Fab } from "@material-ui/core";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            txtusername: "",
            txtpassword: "",
            btnSubmit: "submit",
        }
    }
    render() {
        return (

            <div className="text">
               
                    <h1
                        style={{ marginTop: '100px' }}>Login to FundooNotes</h1>


                    < TextField id="textfiled"
                        txtusername="username"
                        label="usename"
                        type="text"
                        placeholder="Enter user name"


                    //style={{ marginBottom: '15px', marginTop: '100px', width: ' 200px',paddingLeft:'80px'  }}

                    />
                    
                    <TextField id="textfield"
                    txtpassword="password"
                        label="password"
                        type="text"
                        placeholder="Enter password"
                        style={{ marginBottom: '50px' }}

                    />
                    <Fab btnSubmit="submit"
                        variant="extended"
                        color="primary"
                        style={{ marginBottom: '100px' }}
                        onClick={function () {

                        }}



                    >submit</Fab>
                
            </div>

        );
    }

}
export default Login;