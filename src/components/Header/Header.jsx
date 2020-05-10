import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.css';
import logo from '../../assets/logo512.png';

const Header = () => {

    return (
        <div className="Header">
            <Link to="/customers">
                <img src={logo} alt="logo" className="Header-logo"/>
            </Link>

            <Search />
        </div>
    )
}

export default Header;