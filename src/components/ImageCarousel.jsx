import React from 'react';
import { Container, Image } from 'react-bootstrap';
import busycity from '../assets/busycity.jpeg';

const ImageCarousel = () => {

  return (
    <Container className='carousel'>
      <Image src={busycity} alt="carousel" fluid />
    </Container>
  );
};

export default ImageCarousel;
