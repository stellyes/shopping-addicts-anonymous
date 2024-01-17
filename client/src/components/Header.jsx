import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

import img from '../assets/shopanon.png';


function Header() {
    return (
        <Container fluid className="header d-flex">
            <Link to="/login" className='mx-auto my-auto'>
                <FaUserAlt className="login justify-content-start align-self-center" fill="#FFF"/>
            </Link>
            <Link to="/" className='logo justify-content-center align-items-center mx-5'>
                <Image src={img} alt="logo" className='mx-auto justify-content-center' fluid />
            </Link>
            <Link to="/" className='mx-auto my-auto'>
                <FaShoppingCart className="cart justify-content-end align-self-center" fill="#FFF"/>
            </Link>
        </Container>
    );
}

export default Header;
