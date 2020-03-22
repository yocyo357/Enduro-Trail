import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import '../styles/signup.css';

class signup extends Component {
    render() {
        return (
            <div className="signup-MainDiv">
                <Container className="signup-container">
                    <section className="signup-heading">
                        sdsd
                    </section>

                    <section className="signup-inputs">
                        <TextField
                            id="outlined-name signup-txt_Fname"
                            label="Firstname"
                            variant="outlined"
                        /><br />

                        <TextField
                            id="outlined-name signup-txt_Lname"
                            label="Lastname"
                            variant="outlined"
                        /><br />

                        <TextField
                            id="outlined-name signup-txt_Age"
                            label="Your Age"
                            variant="outlined"
                        /><br />
                        

                        <TextField
                            id="outlined-name signup-txt_team"
                            label="Team Name"
                            variant="outlined"
                        /><br />

                        <TextField
                            id="outlined-name signup-txt_username"
                            label="Username"
                            variant="outlined"
                            
                        /><br />

                        <TextField
                            id="outlined-name signup-txt_team"
                            label="Team Name"
                            variant="outlined"
                            
                        /><br />
                    </section>
                </Container>
            </div>
            
        );
    }
}   
    
export default signup;