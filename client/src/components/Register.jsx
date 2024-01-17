import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showError, setShowError] = useState(false); // For login error handling
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your register logic here
    }

    return (
        <Container className="justify-content-center align-items-center">
            <Row className='justify-content-center align-items-center'>
                <Col className='text-center'>
                    <Form className="register-container my-5 mx-auto" onSubmit={handleRegister}>
                        <Form.Group className="my-3 email-field" controlId="formEmail">
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="my-3 username-field" controlId="formUsername">
                            <Form.Control type="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="my-3 password-field" controlId="formPassword">
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="my-3 password-field" controlId="formConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="my-3 login-button" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className='justify-content-center text-center mx-auto'>
                <Col className="switch-login-function">
                    <p style={{ color: "#FFF" }}>Already have an account? <Link to="/login" className="shiny-link">Login here!</Link></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;