import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showError, setShowError] = useState(false); // For login error handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
    }

    return (
        <Container className="justify-content-center align-items-center">
            <Row className='justify-content-center align-items-center'>
                <Col className='text-center'>
                    <Form className='login-container my-5 mx-auto' onSubmit={handleLogin}>
                        <Form.Group className="my-3 email-field" controlId="formEmail">
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="my-3 password-field" controlId="formPassword">
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="my-3 login-button" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className='justify-content-center text-center mx-auto'>
                <Col className="switch-login-function">
                    <p style={{ color: "#FFF" }}>Don't have an account? <Link to="/register" className="shiny-link">Register here!</Link></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;