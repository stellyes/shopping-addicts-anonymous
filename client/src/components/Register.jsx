import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Register = () => {
    const [showError, setShowError] = useState(false); // For login error handling
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [addUser, { error, data }] = useMutation(ADD_USER);

    useEffect(() => {
        console.log(error);
    }, [error]);

    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            console.error("Passwords do not match")
        }

        try {
            const { data } = await addUser({ 
                variables: { email, username, password } 
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container className="justify-content-center align-items-center">
            <Row className='justify-content-center align-items-center'>
                <Col className='text-center'>
                    <Form className="register-container my-5 mx-auto">
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
                            <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="my-3 login-button" onClick={handleRegister}>
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