import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import MySpinner from '../../Shared/Spinner/MySpinner';
import SocailLogin from '../SocailLogin/SocailLogin';

const SignUp = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [customError, setCustomError] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = event => {
        event.preventDefault();

        const name = event.target.name.value;
        setName(name);
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setCustomError('Password should match!');
            return;
        }
        createUserWithEmailAndPassword(email, password,);
        event.target.reset();

    }
    if (user) {
        user.displayName = name;
        console.log(user);
        toast.success('User created successfully!');
        navigate('/');
    }
    if (loading) {
        <MySpinner></MySpinner>
    }
    return (
        <div className='py-5'>
            <div className='container bg-light w-50 py-4 px-5 rounded-3 shadow-lg '>
                <Form onSubmit={handleSignUp} className='mb-2'>
                    <h1 className='text-center'>Sign Up</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required name='password' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" required name='confirmPassword' />
                    </Form.Group>
                    {
                        customError && <p className='text-danger'>{customError}</p>
                    }
                    {
                        error && <p className='text-danger'>{error.message}</p>
                    }
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p >Already Registered? <Link to='/signin' className="btn-link text-decoration-none">Sign In</Link></p>
                <SocailLogin></SocailLogin>
            </div>
            <ToastContainer />
        </div>

    );
};

export default SignUp;