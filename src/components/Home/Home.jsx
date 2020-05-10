import React from 'react';
import logo from '../../assets/logo512.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {  
    
    return(
        <div className="Home-container">
            <div className="Central-logo">
                <img alt="logo-central" src={logo}/>
            </div>
            
            <h1>Welcome to the Customer View APP!</h1>
            
            <div className="Button-container">
    
                <Link to="/customers">
                    <button className="Button-enter" type="submit">Entrar</button>
                </Link>
            </div>
        </div>
    )

}

export default Home;