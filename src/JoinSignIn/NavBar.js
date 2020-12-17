import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/WishListGift.png'


function NavBar(props) {
    const styleObj = {
        fontSize: '1.1rem',
        color: "#df744a",
        fontFamily: 'Ubuntu Condensed, sans-serif',
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand"><img id="logo" src={logo} alt="WishListGift"></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse"} id="navbarNav">
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item">
                            <Link to='/join-sign-in' className="nav-link" style={styleObj}> Sign in/Join<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/friends' className="nav-link" style={styleObj}> Friends</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' className="nav-link" style={styleObj}> Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;