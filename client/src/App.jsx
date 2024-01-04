import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';

import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";

import img from './assets/shopanon.png';
import mpc from './assets/megapanocollage.jpg';

import ImageCarousel from './components/ImageCarousel';

const App = () => {
    const [imagePosition, setImagePosition] = useState(50);
  
    const handleImageForward = () => {
        setImagePosition((prevPosition) => (prevPosition - 10));
    };

    const handleImageBackward = () => {
        setImagePosition((prevPosition) => (prevPosition + 10));
    };

    useEffect(() => {
      function handleKeyDown(e) {
        console.log(e.keyCode);
        if (e.keyCode === 37) {
          handleImageBackward();
        } else if (e.keyCode === 39) {
          handleImageForward();
        }
      }

      document.addEventListener('keydown', handleKeyDown);

      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
      }
    }, []);

  return (
    <Container>
        <Container fluid className="header d-flex">
            <FaUserAlt className="login justify-content-start align-self-center" fill="#FFF"/>
            <Image src={img} alt="logo" className='logo mx-auto justify-content-center' fluid />
            <FaShoppingCart className="cart justify-content-end align-self-center" fill="#FFF"/>
        </Container>
        <ImageCarousel image={mpc} position={imagePosition} />
        <Container fluid className="footer d-flex justify-content-center align-items-center" >
            <MdPlayArrow className="image-backward mx-4" fill="#FFF" onClick={handleImageBackward} />
            <IoMdHelp className='help mx-3 my-4' fill="#FFF" />
            <MdPlayArrow className="image-forward mx-4" fill="#FFF" onClick={handleImageForward} />
        </Container>
    </Container>
  );
};

export default App;