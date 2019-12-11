import React from 'react';

export default props => {
    return (
        <img src={props.imageURL} alt={props.title} />
    );
};