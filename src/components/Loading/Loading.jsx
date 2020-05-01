import React from 'react';
import propTypes from 'prop-types';
import './Loading.css'

const Loading = (props) => {

    const { height, width } = props;

    return (
        <div className="Loading-container">
            <div className="Loading" style={{ height, width }}/>
        </div>
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