import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import img from './assets/shopanon.png';
import ImageCarousel from './components/ImageCarousel';

const App = () => {
  return (
    <Container>
        <Container fluid className="d-flex">
            <FaUserAlt className="login justify-content-start align-self-center" fill="#FFF"/>
            <Image src={img} alt="logo" className='logo mx-auto justify-content-center' fluid />
            <FaShoppingCart className="cart justify-content-end align-self-center" fill="#FFF"/>
        </Container>
        <ImageCarousel />
        <Container fluid className="footer d-flex">
            <IoMdHelp className='help mx-auto my-4 justify-content-center' fill="#FFF"/>
        </Container>
    </Container>
  );
};

export default App;