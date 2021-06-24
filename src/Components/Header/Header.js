import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="pt-1">
            <Navbar />
            <div className="container mt-3">
                <div className="row align-items-center">
                    <div className="col-md-12 mb-5 mb-md-0 text-center">
                        <h1 className="banner-title"><span style={{ color: "#D3A21F" }}>Book Your </span>Journey With Us</h1>
                        <Link to="/selectflight" className="btn px-5">Hire us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;