/* import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <form>
                <div className="sign-up-group">
                    <label for="firstName">First Name </label>
                    <input type="text" placeholder="First Name" name="firstName" required></input>
                    <label for="lastName">Last Name </label>
                    <input type="text" placeholder="Last Name" name="lastName" required></input>

                    <label for="email">Email </label>
                    <input type="email" placeholder="Enter Email" name="email" required></input>
                    <label for="password">Create Password </label>
                    <input type="password" placeholder="Enter Password" name="password" required></input>

                    <button type="submit">Sign Up</button>

                </div>
                <br />
                <br />


            </form>
        </div>
    );
};

export default SignUp; */

import React, { Component } from "react";
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import signUpBg from '../images/SignUpBG.png'

export default class SignUp extends Component {
    render() {
        return (
            <div className='container fluid '>
                <div className="row sign-up-form bg">        
                    <form className="col-12 col-sm-4 sign-up-group">
                        <h3>Sign Up</h3>
                        <div className="form-group ">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <br></br>
                    </form>
                </div>
            </div>
        );
    }
}

