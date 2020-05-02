import React from 'react';
import propTypes from 'prop-types';
const defaultAvatar = '../../../public/defaultAvatar.png'

const Avatar = (props) => {

    const { height, width } = props;

    return (
        <div style={{ height, width }}>
            <img src={defaultAvatar}></img>
        </div>
    )

}

Avatar.defaultProps = {
    height: '35px',
    width: '35px'
}

Avatar.propTypes = {
    height: propTypes.string,
    width: propTypes.string
}

export default Avatar;