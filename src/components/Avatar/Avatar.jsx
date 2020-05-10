import React from 'react';
import propTypes from 'prop-types';
const defaultAvatar = '../../assets/defaultAvatar.png';

const Avatar = (props) => {

    const { height, width } = props;

    return (
        <div className="Avatar-containter" style={{ height, width }}>
            <img src={defaultAvatar}></img>
        </div>
    )

}

Avatar.defaultProps = {
    height: '64px',
    width: '64px'
}

Avatar.propTypes = {
    height: propTypes.string,
    width: propTypes.string
}

export default Avatar;