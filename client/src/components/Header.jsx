import React from 'react';
import { Container, Image } from 'react-bootstrap';

import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

import img from '../assets/shopanon.png';


function Header() {
    return (
        <Container fluid className="header d-flex">
            <FaUserAlt className="login justify-content-start align-self-center" fill="#FFF"/>
            <Image src={img} alt="logo" className='logo mx-auto justify-content-center' fluid />
            <FaShoppingCart className="cart justify-content-end align-self-center" fill="#FFF"/>
        </Container>
    );
}

export default Header;
