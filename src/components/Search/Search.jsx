import React from 'react';
import './Search.css';
import logo from '../../assets/search.png';

const Search = () => {
    return (
        <div className="search">
            <img src={logo} alt="search-logo" className="search-logo" />
            <input type="text" placeholder="Search..."></input>
        </div>
    )
}

export default Search;