import React from 'react';
import propTypes from 'prop-types';


const Card = (props) => {

    const { children, width } = props;

    return (
        <div style={{ width }}>
            {children}
        </div>
    )

}

export default Card;

Card.defaultProps = {
    width: '300px'
}

Card.propTypes = {
    width: propTypes.string,
    size: propTypes.string,
    children: propTypes.node
}