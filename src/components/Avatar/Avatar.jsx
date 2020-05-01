import React from 'react';

const Avatar = (props) => {

    const { src, size } = props;

    return (
        <div size={size}>
            <img src={src}></img>
        </div>
    )

}

export default Avatar;