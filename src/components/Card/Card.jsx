import React from 'react';
import propTypes from 'prop-types';


const Card = (props) => {

    const { size, children, width } = props;

    return (
        <div size={size} style={{ width }}>
            {children}
        </div>
    )

}

export default Card;

Card.defaultProps = {
    width: '300px',
    size: 'sm'
}

Card.propTypes = {
    width: propTypes.string,
    size: propTypes.string,
    children: propTypes.node
}