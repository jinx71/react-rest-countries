import React from 'react';
import Brand from '../Asset/brand.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="navbar-brand">
                        <img src={Brand} width="55px" alt="" />
                        React Rest Countries
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                Home
                            </li>
                        </Link>
                        <Link to={'/about'} style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                About
                            </li>
                        </Link>
                        <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;