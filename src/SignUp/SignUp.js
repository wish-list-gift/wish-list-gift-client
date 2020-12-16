import React from "react";
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from 'axios';

const SignUp = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    function handleUserChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    function addUserHandler(event) {
        debugger
        event.preventDefault();
        axios.post("http://localhost:3000/users/register", user)
            .then((res) => {
                props.history.push("/profile")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='container fluid'>
            <div className="row sign-up-form bg">
                <form onSubmit={addUserHandler} className="col-12 col-sm-4 sign-up-group">
                    <h3>Sign Up</h3>
                    <div className="form-group ">
                        <label>First name</label>
                        <input type="text" name="firstName" value={user.firstName} className="form-control" placeholder="Enter First name" onChange={handleUserChange} />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" name="lastName" value={user.lastName} className="form-control" placeholder="Enter Last name" onChange={handleUserChange} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="text" name="email" value={user.email} className="form-control" placeholder="Enter email" onChange={handleUserChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" name="password" value={user.password} className="form-control" placeholder="Enter password" onChange={handleUserChange} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <br></br>
                </form>
            </div>
        </div>
    );
}


export default SignUp

