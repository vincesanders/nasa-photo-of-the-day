import React from 'react';

const InfoCard = props => {
    return (
        <div className='card-container'>
            <h2 className='title'>{props.title}</h2>
            <p className='date'>{props.date}</p>
            <p className='explanation'>{props.esplanation}</p>
        </div>
    );
};

export default InfoCard;