import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

let propsCount = 0;
let items = [];

const Carousel = props => {

    if (props.photo1) {
        propsCount++;
    }
    if (props.photo2) {
        propsCount++;
    }
    if (props.photo3) {
        propsCount++;
    }
    if (props.photo4) {
        propsCount++;
    }
    if (props.photo5) {
        propsCount++;
    }
    if (props.photo6) {
        propsCount++;
    }

    if (propsCount >= 6) {
        items = [
            {
                src: props.photo1.url,
                altText: props.photo1.title,
                caption: props.photo1.explanation,
                header: props.photo1.title,
                key: 1
            },{
                src: props.photo2.url,
                altText: props.photo2.title,
                caption: props.photo2.explanation,
                header: props.photo2.title,
                key: 2
            },{
                src: props.photo3.url,
                altText: props.photo3.title,
                caption: props.photo3.explanation,
                header: props.photo3.title,
                key: 3
            },{
                src: props.photo4.url,
                altText: props.photo4.title,
                caption: props.photo4.explanation,
                header: props.photo4.title,
                key: 4
            },{
                src: props.photo5.url,
                altText: props.photo5.title,
                caption: props.photo5.explanation,
                header: props.photo5.title,
                key: 5
            },{
                src: props.photo6.url,
                altText: props.photo6.title,
                caption: props.photo6.explanation,
                header: props.photo6.title,
                key: 6
            }
        ];
    }
    propsCount = 0;
    return (
        <UncontrolledCarousel items={items}/>
    );
}

export default Carousel;