import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import logoTwo from '../images/HappyWishing2.svg'
import './JoinSignIn.css'
import axios from 'axios'


const JoinSignIn = (props) => {
    const history = useHistory()
    const [userLoginInfo, setuserLoginInfo] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e => {
        setuserLoginInfo({
            ...userLoginInfo,
            [e.target.name]: e.target.value,
        })
    })
    const submitLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/users/login", userLoginInfo)
            .then(res => {
                console.log('user login');
                localStorage.setItem('token', res.data.token);
                props.history.push('/profile')
                console.log(props.history)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="login-container">
            <h1 className="welcome">Welcome!</h1>
            <h2 className="sign-in">Sign In</h2>
            <form className="sign-in-form" onSubmit={submitLogin}>
                <div className="form-group">
                    <label for="email">Email </label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} required></input>
                    <br />
                    <br />
                    <label for="password">Password </label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required></input>
                </div>
                <br />
                <br />
                <div className="login-button">
                    <button type="submit">Login</button>
                </div>
                <br />
                <Link to="register" className="sign-up-link">Not Registered? Sign Up!</Link>

            </form>
            <br />
            <h1 id="happy-wishing">Happy Wishing!</h1>
            {/* <img id="happy-wishing" src={logoTwo} alt="Happy Wishing!" /> */}



        </div>
    );
};

export default JoinSignIn;