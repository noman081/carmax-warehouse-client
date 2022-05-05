import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MySpinner from '../../Shared/Spinner/MySpinner';
import SocailLogin from '../SocailLogin/SocailLogin';

const SignIn = () => {
    const myStyle = {
        backgroundImage:
            "url('https://i.ibb.co/JBVzc1y/bg-01.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignInForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        <MySpinner></MySpinner>
    }

    return (
        <div style={myStyle} className='pt-5'>
            <div className='container bg-light py-4 px-5 rounded-3 shadow-lg signin-form'>
                <Form onSubmit={handleSignInForm} className='mb-2'>
                    <h1 className='text-center'>Sign In</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>
                    {
                        error && <p className='text-danger'>{error.message}</p>
                    }
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p >New to CarMax? <Link to='/signup' className="btn-link text-decoration-none">Sign Up</Link></p>
                <SocailLogin></SocailLogin>
            </div>

        </div>
    );
};

export default SignIn;