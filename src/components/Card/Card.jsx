import React from 'react';
import propTypes from 'prop-types';
import './Card.css'


const Card = (props) => {

    const { width, height } = props;

    return (
        <div className="Card" style={{ width, height }} />
    )

}

export default Card;

Card.defaultProps = {
    width: '300px',
    height: '420px'
}

Card.propTypes = {
    width: propTypes.string,
    height: propTypes.string
}