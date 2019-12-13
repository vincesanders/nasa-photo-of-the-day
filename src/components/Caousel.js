import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

let items = [];

const Carousel = props => {

    props.dataArray.map((photo, i) => {
        items.push({
            src: photo.url,
            altText: photo.title,
            caption: photo.explanation,
            header: photo.title,
            key: i
        })
    });

    return (
        <UncontrolledCarousel items={items}/>
    );
}

export default Carousel;