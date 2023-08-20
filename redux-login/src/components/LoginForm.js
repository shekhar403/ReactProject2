import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail, setUserName } from '../Store/authSlice';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmailInternal] = useState("")
    const [userName, setUserNameInternal] = useState("")
    const handleClick = (e) => {
        dispatch(setEmail(email))
        dispatch(setUserName(userName))
        navigate("/home")
    }
    return (
        <Card className='shadow-lg' style={{ width: '28rem', margin: 'auto', backgroundColor:'aliceblue' }}>
            <Card.Body>
                <Card.Title>Login to Flipbook</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" className='shadow-lg' onChange={(e) => {setUserNameInternal(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" className='shadow-lg' onChange={(e) => {setEmailInternal(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" className='shadow-lg' />
                    </Form.Group>
                    <button type='submit' className='btn btn-primary d-block w-75 shadow-lg mx-5' onClick={handleClick}>Login</button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default LoginForm

