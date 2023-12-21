import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import busycity from '../assets/busycity.jpeg';
import citypark from '../assets/citypark.jpeg';
import houseparty from '../assets/houseparty.jpg';

const ImageCarousel = () => {
    // Static import for prototyping, will be replaced with dynamic import later
    const images = [busycity, citypark, houseparty];
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = images.indexOf(currentImage);
            if (currentIndex === images.length - 1) {
                setCurrentImage(images[0]);
            } else {
                setCurrentImage(images[currentIndex + 1]);
            }
        }, 15000);
        return () => clearInterval(interval);
    }, [currentImage]);

  return (
    <Container className='carousel text-center'>
      <Image src={currentImage} alt="carousel" fluid />
    </Container>
  );
};

export default ImageCarousel;
