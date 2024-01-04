import React from 'react';
import { Container, Image } from 'react-bootstrap';

const ImageCarousel = ({ image, position }) => {

    const imageStyle = {
        position: 'relative',
        left: `${position}%`,
        transition: 'left 0.5s ease',  // Add a smooth transition effect
    };

    return (
        <Container className='carousel text-center' style={{ flexDirection: 'column' }}>
            <Image src={image} alt="carousel" style={imageStyle} fluid />
        </Container>
    );
};

export default ImageCarousel;
