import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";

import img from './assets/shopanon.png';
import busycity from './assets/busycity.jpeg';
import citypark from './assets/citypark.jpeg';
import houseparty from './assets/houseparty.jpg';

import ImageCarousel from './components/ImageCarousel';

const App = () => {
    const images = [busycity, citypark, houseparty];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageForward = (e) => {
    e.stopPropagation();
    // Increment the current image index
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageBackward = () => {
    // Decrement the current image index
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
        <Container fluid className="header d-flex">
            <FaUserAlt className="login justify-content-start align-self-center" fill="#FFF"/>
            <Image src={img} alt="logo" className='logo mx-auto justify-content-center' fluid />
            <FaShoppingCart className="cart justify-content-end align-self-center" fill="#FFF"/>
        </Container>
        <ImageCarousel {...{ images, currentImageIndex }}/>
        <Container fluid className="footer d-flex justify-content-center align-items-center" onClick={handleImageBackward}>
            <MdPlayArrow className="image-backward mx-4" fill="#FFF" />
            <IoMdHelp className='help mx-3 my-4' fill="#FFF" />
            <MdPlayArrow className="image-forward mx-4" fill="#FFF" onClick={handleImageForward} />
        </Container>
    </Container>
  );
};

export default App;