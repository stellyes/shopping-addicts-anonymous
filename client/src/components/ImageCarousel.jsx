import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';

import { MdPlayArrow } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";

import mpc from '../assets/megapanocollage.jpg';

const ImageCarousel = () => {

    const [imagePosition, setImagePosition] = useState(50); // 50% is centered

    const imageStyle = {
        position: 'relative',
        left: `${imagePosition}%`,
        transition: 'left 0.5s ease',
    };
  
    // Moves image to left, displaying more of what was on the right
    const handleImageForward = () => {
        setImagePosition((prevPosition) => (prevPosition - 10));
    };

    // Moves image to right, displaying more of what was on the left
    const handleImageBackward = () => {
        setImagePosition((prevPosition) => (prevPosition + 10));
    };

    // Enables left and right arrows to be used to navigate carousel
    useEffect(() => {
      function handleKeyDown(e) {
        console.log(e.keyCode);
        if (e.keyCode === 37) { // left arrow
          handleImageBackward();
        } else if (e.keyCode === 39) { // right arrow
          handleImageForward();
        }
      }

      document.addEventListener('keydown', handleKeyDown);

      // Don't forget to clean up, returns callback function
      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
      }
    }, []);

    return (
        <Container className='home'>
            <Container className='carousel text-center' style={{ flexDirection: 'column' }}>
                <Image src={mpc} alt="carousel" style={imageStyle} fluid />
            </Container>
            <Container fluid className="carousel-footer d-flex justify-content-center align-items-center" >
                <MdPlayArrow className="image-backward mx-4" fill="#FFF" onClick={handleImageBackward} />
                <IoMdHelp className='help mx-3 my-4' fill="#FFF" />
                <MdPlayArrow className="image-forward mx-4" fill="#FFF" onClick={handleImageForward} />
            </Container>
        </Container>
    );
};

export default ImageCarousel;
