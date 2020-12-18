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

        event.preventDefault();
        axios.post("http://localhost:3000/users/register", user)
            .then((res) => {
                props.history.push("/login")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='container fluid'>
            <div className="row sign-up-form bg">
                <form onSubmit={addUserHandler} className="col-12 col-sm-4 sign-up-group">
                    <h1 style={{ color: '#df744a', fontFamily: 'Dancing Script, cursive' }}>Sign Up</h1>
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
                        <input type="email" name="email" value={user.email} className="form-control" placeholder="Enter email" onChange={handleUserChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={user.password} className="form-control" placeholder="Enter password" onChange={handleUserChange} />
                    </div>

                    <button type="submit" className="btn btn-warning btn-block">Sign Up</button>
                    <br></br>
                </form>
            </div>
        </div>
    );
}


export default SignUp

