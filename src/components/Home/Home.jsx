import React from 'react';

const Home = (props) => {

    const { history } = props;

    return (
        
        <div className="Home-Container">
            <h2>
                Welcome to the User register system!
            </h2>
            
            <div className="Button-Container">
                <button type="submit" onClick={() => history.push(`/currencies`)}>Enter</button>
            </div>
        </div>
    );
}

export default Home;