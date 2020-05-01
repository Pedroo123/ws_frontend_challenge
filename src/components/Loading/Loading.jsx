import React from 'react';
import propTypes from 'prop-types';

const Loading = (props) => {

    const { height, width } = props;

    return (
        <div className="Loading" style={{ height, width }}/>
    )

}

Loading.defaultProps = {
    height: '35px',
    width: '35px'
}

Loading.propTypes = {
    height: propTypes.string,
    width: propTypes.string
}

export default Loading;