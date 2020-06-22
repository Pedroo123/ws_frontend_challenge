import React from 'react';
import './Header.css';
import logo from '../../assets/logo512.png';

const Header = () => {

    return (
        <div className="Header">
            <img src={logo} alt="logo" className="Header-logo"/>
        </div>
    )
}

export default Header;