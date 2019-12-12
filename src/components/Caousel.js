import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Carousel = props => {

    let items = [
        {
            src: 'https://apod.nasa.gov/apod/image/1912/m78ldn1622barnardsloopJulio1100.jpg',
            altText: 'placeholder',
            caption: 'placeholder',
            header: 'placeholder',
            key: 7
        },{
            src: 'https://apod.nasa.gov/apod/image/1912/N63A_HubbleChandraSchmidt_960.jpg',
            altText: 'placeholder',
            caption: 'placeholder',
            header: 'placeholder',
            key: 8
        }
    ];

    console.log('This is the beginning of carousel' + props.dataArray);

    props.dataArray.forEach((data, i) => {
        console.log(data + ', ' + i);
        items.push({
            src: data.url,
            altText: data.title,
            caption: data.explanation,
            header: data.title,
            key: data.date
        });
    });

    console.log('This is inside the Carousel' + items);
    return (
        <UncontrolledCarousel items={items}/>
    );
}

export default Carousel;