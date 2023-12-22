import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';

const ImageCarousel = ({ images, currentImageIndex }) => {

    return (
        <Container className='carousel text-center' style={{ flexDirection: 'column' }}>
            <Image src={images[currentImageIndex]} alt="carousel" fluid />
        </Container>
    );
};

export default ImageCarousel;
