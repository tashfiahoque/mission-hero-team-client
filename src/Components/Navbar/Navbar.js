import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="container">
            <ul>
                <li><Link className="nav-link" to="/home" >Home</Link></li>
                <li><Link className="active" to="/login">Sign Up</Link></li>
                {/* <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a class="active" href="#">Sign Up</a></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;