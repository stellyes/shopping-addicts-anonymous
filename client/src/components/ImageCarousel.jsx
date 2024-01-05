import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';

import { MdPlayArrow } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import mpc from '../assets/megapanocollage.jpg';

const ImageCarousel = () => {

    const [showHelp, setShowHelp] = useState(0); 
    const [imagePosition, setImagePosition] = useState(50); // 50% is centered
    const [width, setWidth] = useState(window.innerWidth);

    // Width in px to add button speed handicap for smaller screens
    const lgbreakpoint = 991;
    const smbreakpoint = 776; 

    const imageStyle = {
        position: 'relative',
        left: `${imagePosition}%`,
        transition: 'left 0.5s ease',
    };

    const handleShowHelp = () => {
        setShowHelp((prevShowHelp) => (prevShowHelp === 0 ? 1 : 0));
    };
  
    // Moves image to left, displaying more of what was on the right
    const handleImageForward = () => {
        // Adjust percentage shift based on screen size
        setImagePosition((prevPosition) => (prevPosition - ( 
            width >= lgbreakpoint ? 
                20 : width >= smbreakpoint ? 
                    30 : 50 )));
    };

    // Inverse of above function
    const handleImageBackward = () => {
        setImagePosition((prevPosition) => (prevPosition + ( 
            width >= lgbreakpoint ? 
                20 : width >= smbreakpoint ? 
                    30 : 50 )));
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

    // Effect listening for window resize 
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);

        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <Container className='home'>
            <Container className={`help-info ${showHelp === 1 ? 'show' : ''}`}>
                <Container className='help-info-content d-flex justify-content-center align-items-center'>
                <TfiClose className='close-help' onClick={handleShowHelp}/>
                <IoMdHelp className='mx-3 my-5' style={{scale: "4"}}/>
                    <p>
                        Shopping Addicts Anonymous is a support group for those who have an online shopping addiction. 
                        We are here to help enable your addiction and become a better version of yourself.
                    </p>
                    <p>
                        To browse our products, click the arrows on the bottom of the page to navigate through 
                        our world! xoxo
                    </p>
                    <p>
                        - S.A.A.
                    </p>
                </Container>
            </Container>
            <Container className='carousel text-center' style={{ flexDirection: 'column' }}>
                <Image src={mpc} alt="carousel" style={imageStyle} fluid />
            </Container>
            <Container fluid className="carousel-footer d-flex justify-content-center align-items-center" >
                <MdPlayArrow className="image-backward mx-4" fill="#FFF" onClick={handleImageBackward} />
                <IoMdHelp className='help mx-3 my-4' fill="#FFF" onClick={handleShowHelp}/>
                <MdPlayArrow className="image-forward mx-4" fill="#FFF" onClick={handleImageForward} />
            </Container>
        </Container>
    );
};

export default ImageCarousel;
