import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

    const { width, height, children } = props;

    return (
        <div className="Card" style={{ width, height }}>
            <div className="Card-content">
                {children}
            </div>
        </div>
    )
}

Card.defaultProps = {
    width: '420px',
    height: '240px'
}

Card.propTypes = {
    width: propTypes.string.isRequired,
    height: propTypes.string.isRequired,
    children: propTypes.node
}

export default Card;