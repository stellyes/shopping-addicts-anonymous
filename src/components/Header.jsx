import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import img from '../assets/shopanon.png';

const Header = () => {
  return (
    <Container fluid className="dashboard d-flex">
      <Image src={img} alt="logo" className='logo mx-auto justify-content-center' fluid />
      <FaShoppingCart className="cart justify-content-end align-self-center" fill="#FFF"/>
    </Container>
  );
};

export default Header;