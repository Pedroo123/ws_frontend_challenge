import React from 'react';
import propTypes from 'prop-types';
import defaultAvatar from '../../assets/defaultAvatar.png'

const Avatar = (props) => {

    const { height, width } = props;

    return (
        <div style={{ height, width }}>
            <img alt="customer-avatar" src={defaultAvatar}></img>
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