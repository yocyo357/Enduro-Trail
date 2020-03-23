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

                        <h4 className="leftSubWords">
                            <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Vivamus pretium ligula in justo malesuada aliquam. Sed a sem non arcu tempus.
                        </h4><br/>

                        <h4 className="leftSubWords">
                            <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Vivamus pretium ligula in justo malesuada aliquam. Sed a sem non arcu tempus.
                        </h4>
                    </div>

                    <div className="col right-col">
                        <div className="container-fluid">
                            <h2 className="mainTitle">Create Your New Account</h2>
                            <h4 className="subTitle">In a orci enim. Ut blandit justo in tempor interdum.</h4>
                            <form noValidate autoComplete="off" >
                                <TextField id="txt-SignUpFname"  className="SignUp-inputs" label="First name" />
                                <TextField id="txt-SignUpLname" className="SignUp-inputs" label="Last name" />
                                {/* <div class="w-100"></div> */}
                            </form>
                        </div>
                        
                        <div className="container-fluid">
                            <div class="w-100">
                                <TextField id="txt-SignUpUname" fullWidth className="SignUp-inputs" label="Enter Your Username Here" />
                                <div class="w-100"></div>

                            </div>
                            <form noValidate autoComplete="off" >
                                    <TextField id="txt-SignUpPass"  className="SignUp-inputs" label="Enter Password" />
                                    <TextField id="txt-SignUpPassConfirm" className="SignUp-inputs" label="Please Confirm Password" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}   
    
export default signup;