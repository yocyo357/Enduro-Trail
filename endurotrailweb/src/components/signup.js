import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import '../styles/signup.css';



class signup extends Component {
    render() {
        return (
            <div className="container-fluid signup-MainDiv">
                <div class="row">
                    <div className="col left-col">
                        <h1>Lorem Ipsum</h1>

                        <h3>
                            <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Vivamus pretium ligula in justo malesuada aliquam. Sed a sem non arcu tempus.
                        </h3>
                    </div>
                    <div className="col">
                        <form noValidate autoComplete="off" className="form-personalData">
                            <TextField id="txt-SignUpFname" className="SignUp-inputs" label="First name" />
                            <TextField id="txt-SignUpLname" className="SignUp-inputs" label="Last name" />
                            <div class="w-100"></div>
                            <TextField id="txt-SignUpLname" className="SignUp-inputs" label="Last name" />
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}   
    
export default signup;