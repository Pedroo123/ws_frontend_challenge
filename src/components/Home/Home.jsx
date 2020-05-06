import React from 'react';

const Home = (props) => {

    const { history } = props;
    console.log(props);
    return (
        
        <div className="Home-Container">
            <h2>
                Teste
            </h2>
            
            <div className="Button-Container">
                <button type="submit" onClick={() => history.push(`/customers`)}>Enter</button>
            </div>
        </div>
    );
}

export default Home;